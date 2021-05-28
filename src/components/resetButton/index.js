import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@chakra-ui/react';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const ResetButton = props => {
  return (
    <IconButton
      id={props.id}
      onClick={props.handleClick}
      icon={<FontAwesomeIcon icon={faRedo} />}
    />
  );
};

export default ResetButton;
