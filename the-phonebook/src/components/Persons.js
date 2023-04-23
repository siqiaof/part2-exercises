const Persons = ({ persons, filter, deleteHandler }) => {
  return persons
    .filter((person) => person.name.toLowerCase().includes(filter))
    .map((person) => (
      <p key={person.name}>
        {person.name} {person.number}{" "}
        <button onClick={deleteHandler(person)}>delete</button>
      </p>
    ));
};

export default Persons;
