import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@chakra-ui/react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayPauseButton = props => {
  return (
    <IconButton
      id={props.id}
      icon={<FontAwesomeIcon onClick={props.handleClick} icon={props.play ? faPause : faPlay} />}
    />
  );
};

export default PlayPauseButton;
