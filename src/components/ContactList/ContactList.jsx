import { PropTypes } from 'prop-types';
import {
  Ul,
  Li,
  PContact,
  Button,
} from 'components/ContactList/ContactList.styled';
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <Li key={id}>
            <PContact>
              {name}: {number}
              <Button type="button" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </PContact>
          </Li>
        );
      })}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
