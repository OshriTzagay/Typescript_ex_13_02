import { useReducer, useState } from "react";
import { studentReducer } from "../../Reducers/student-reducer";
import { showAction } from "../../actions/student-action";
import { IStudent } from "../../Interfaces/Student.interface";
export const Student = () => {
  const [student, dispatchStudent] = useReducer(studentReducer, []);

  return (
    <div>
      <p>I'm Student Compo!</p>
      {student.map((item) => (
        <div>
          <h1>{item.firstName}</h1>
          <h2>{item.lastName}</h2>
          <p>{item.age}</p>
        </div>
      ))}
      <button onClick={() => dispatchStudent(showAction())}>
        CLICK FOR SHOWACTION !
      </button>
    </div>
  );
};
