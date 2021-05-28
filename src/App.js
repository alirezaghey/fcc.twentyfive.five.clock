import '@fontsource/xanh-mono/400.css';
import '@fontsource/space-mono/400.css';

import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, Heading, Text, VStack, HStack, Grid } from '@chakra-ui/react';
import InputNumber from './components/inputNumber';
import PlayPauseButton from './components/playPauseButton';
import ResetButton from './components/resetButton';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './themes/defaultTheme';

export const applicationRunStates = { RUNNING: 'RUNNING', PAUSED: 'PAUSED' };
const applicationPeriodStates = { SESSION: 'Session', BREAK: 'Break' };

function App() {
  function createState() {
    return {
      appRunState: applicationRunStates.PAUSED,
      appPeriodState: applicationPeriodStates.SESSION,
      sessionTime: 25 * 60,
      sessionRemTime: 25 * 60,
      breakTime: 5 * 60,
      breakRemTime: 5 * 60,
      getVal: function () {
        const remTime =
          this.appPeriodState === applicationPeriodStates.SESSION
            ? this.sessionRemTime
            : this.breakRemTime;
        let [min, sec] = [Math.floor(remTime / 60), remTime % 60];
        min = min < 10 ? '0' + String(min) : min;
        sec = sec < 10 ? '0' + String(sec) : sec;
        return { min, sec };
      },
    };
  }

  const [state, setState] = useState(createState());

  const myApp = useRef(null);
  useEffect(() => {
    if (state.appRunState === applicationRunStates.PAUSED) {
      if (myApp?.current) clearInterval(myApp.current);
    } else {
      myApp.current = setInterval(() => {
        setState(prevState => {
          if (prevState.appPeriodState === applicationPeriodStates.SESSION) {
            const remTime = prevState.sessionRemTime - 1;
            if (remTime > 0) {
              return {
                ...prevState,
                sessionRemTime: remTime,
              };
            } else {
              return {
                ...prevState,
                sessionRemTime: prevState.sessionTime,
                appPeriodState: applicationPeriodStates.BREAK,
              };
            }
          } else {
            const remTime = prevState.breakRemTime - 1;
            if (remTime > 0) {
              return {
                ...prevState,
                breakRemTime: remTime,
              };
            } else {
              return {
                ...prevState,
                breakRemTime: prevState.breakTime,
                appPeriodState: applicationPeriodStates.SESSION,
              };
            }
          }
        });
      }, 1000);
    }
  }, [state.appRunState]);

  const handlePPClick = () => {
    setState(prevState => {
      if (prevState.appRunState === applicationRunStates.RUNNING) {
        return { ...prevState, appRunState: applicationRunStates.PAUSED };
      } else {
        return { ...prevState, appRunState: applicationRunStates.RUNNING };
      }
    });
  };

  const handleResetClick = () => {
    setState(createState());
  };

  const handleIncDecClick = (type, num) => {
    if (type === 'session') {
      setState(prevState => {
        return {
          ...prevState,
          sessionTime: prevState.sessionTime + num * 60,
          sessionRemTime: prevState.sessionTime + num * 60,
        };
      });
    } else {
      setState(prevState => {
        return {
          ...prevState,
          breakTime: prevState.breakTime + num * 60,
          breakRemTime: prevState.breakTime + num * 60,
        };
      });
    }
  };

  useEffect(() => {
    setState(createState());
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading as="h1" size="2xl">
              Twenty Five + Five Clock
            </Heading>
            <HStack width={500} justify="space-between">
              <InputNumber
                type="session"
                value={state.sessionTime / 60}
                appRunState={state.appRunState}
                handleClick={handleIncDecClick}
                id="session-label"
                min={1}
                max={60}
                defValue={25}
                title="Session Length"
              />
              <InputNumber
                type="break"
                value={state.breakTime / 60}
                appRunState={state.appRunState}
                handleClick={handleIncDecClick}
                id="break-label"
                min={1}
                max={60}
                defValue={5}
                title="Break Length"
              />
            </HStack>
            <Heading size="md" as="h5" id="timer-label">
              {state.appPeriodState}
            </Heading>
            <Box boxShadow="lg">
              <VStack>
                <Text>
                  {state.getVal().min}:{state.getVal().sec}
                </Text>
                <HStack>
                  <PlayPauseButton
                    id="start_stop"
                    play={state.appRunState === applicationRunStates.RUNNING}
                    handleClick={handlePPClick}
                  />
                  <ResetButton id="reset" handleClick={handleResetClick} />
                </HStack>
              </VStack>
            </Box>
            {/* <Heading size="md" as="h5">
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Heading> */}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
