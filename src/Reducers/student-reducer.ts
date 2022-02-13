import { act } from "react-dom/test-utils";
import { IStudent } from "../Interfaces/Student.interface";

export const studsArr: IStudent[] = [
  {
    firstName: "osh",
    lastName: "tzagay",
    age: 24,
  },
  {
    firstName: "gedamo",
    lastName: "avtamo",
    age: 30,
  },
];

export const studentReducer = (state: any, action: any) => {
  switch (action.type) {
    case "show":
      return studsArr;

      break;

    default:
      return state;

      break;
  }
};
