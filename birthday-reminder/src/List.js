import React from "react";
import PropTypes from "prop-types";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, age, name } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

List.propTypes = {
  people: PropTypes.func.isRequired,
};
