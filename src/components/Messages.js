const Messages = ({ messages }) => {
  // const { id, type, name, content } = messages;
  return (
    <main>
      <h2>Messages</h2>
      <section className="messages">
        {messages.map((message) => {
          return (
            <ul key={message.id}>
              <li className={`message ${message.type}`}>
                <div className="icon">{message.name.charAt(0)} </div>
                <span className="content">{message.content}</span>
              </li>
            </ul>
          );
        })}
      </section>
      <form className="message-form">
        <input placeholder="Type a message..." />
      </form>
    </main>
  );
};
export default Messages;
