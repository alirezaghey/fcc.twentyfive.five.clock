import { Heading, Button, Input, HStack, useNumberInput, VStack } from '@chakra-ui/react';

const InputNumber = props => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    value: props.value,
    min: props.min,
    max: props.max,
    isDisabled: props.disabled,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <VStack>
      <Heading size="lg" as="h2" id={props.id}>
        {props.title}
      </Heading>
      <HStack>
        <Button
          {...inc}
          onClick={() => props.handleClick(props.type, 1)}
          // isDisabled={props.disabled}
          id={props.type + '-increment'}
        >
          +
        </Button>
        <Input
          {...input}
          value={props.value}
          id={props.type + '-length'}
          width="60px"
          textAlign="center"
        />
        <Button
          {...dec}
          onClick={() => props.handleClick(props.type, -1)}
          // isDisabled={props.disabled}
          id={props.type + '-decrement'}
        >
          -
        </Button>
      </HStack>
    </VStack>
  );
};

export default InputNumber;
