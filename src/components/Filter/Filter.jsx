import { PropTypes } from 'prop-types';
import { Div, Input, Label } from 'components/Filter/Filter.styled';
export const Filter = ({ value, onValueChange }) => {
  return (
    <Div>
      <Label htmlFor="text">Find contacts by name</Label>
      <Input type="text" name="filter" value={value} onChange={onValueChange} />
    </Div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
