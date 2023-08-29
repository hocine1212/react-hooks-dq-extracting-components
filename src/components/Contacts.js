const Contacts = ({ contacts }) => {
  return (
    <nav>
      <h2>Contacts</h2>
      {contacts.map((contact) => {
        return (
          <ul className="contacts" key={contact.id}>
            <li className="contact">
              <div className="icon">{contact.name.charAt(0)}</div>
              {contact.name}
            </li>
          </ul>
        );
      })}
    </nav>
  );
};
export default Contacts;
