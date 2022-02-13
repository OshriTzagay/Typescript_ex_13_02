import { Student } from "../StudentsCompo/Student";

export const Home = () => {
    let Age: number = 24;
    let First_Name: string = "Oshri-el";
    let inClass: boolean = true;
    let Grades: number[] = [103, 99, 24, 55];
    const Greeting = (): void => {
      alert(
        `Hello ${First_Name}, Youre - ${Age} . And your grades : ${Grades[0]},${Grades[1]},${Grades[2]},${Grades[3]}`
      );
    };
    //!!!!!!!!!
  
    const CheckName = (somName: string): boolean => {
      if (somName.length > 4) {
        console.log("Yep Longer.");
        return true;
      } else {
        console.log("Nope , Shorter.");
        return false;
      }
    };
    //!!!!!!!!!
  
    const CheckAge = (name: string, age: number): string => {
      if (age > 15) {
        return name;
      } else {
        return "Wrong Class.";
      }
    };
  
    // console.log(CheckAge("alemo", 12));
    //!!!!!!!!!
  
    const getTheText = (name: string, lname: string, age: number = 0): string => {
      return `${name} - ${lname} ${age}.`;
    };
    // console.log(getTheText("Buzaglo", "Maor"));
  
    const TeacherInfo = (teacherName: string, ...restOfStuds: string[]): void => {
      console.log(teacherName + " - " + restOfStuds);
    };
  
    // TeacherInfo("Aschalyin", "oshri", "amir", "eliyahu", "avi");
    //!!!!!!!!!
    const printAllex12 = (
      name: string,
      lname?: string,
      grade: number = 60,
      ...friends: string[]
    ): void => {
      !lname
        ? console.log(`${name},${lname},${grade},${friends}`)
        : alert("NO L-NAME!");
    };
  
    //   printAllex12("gedamo","stud",80,"stud5")
    //!!!!!!!!!
  
    const ex13 = (...somNums: number[]): number => {
      
      let minNum =Math.min(...somNums);
      return minNum;
    };
    // console.log(ex13(20, 51, 77, 2, 110));
  
  //   const ex14 = (name:string,num:number)=>{
  
  //     return 1
  
  //   }
  
    return (
      <div>
        <h1>I'm HOME.</h1>
        <h3>Hello , {First_Name}</h3>
        <button onClick={Greeting}>Show Info!</button>
        <hr />
        <Student/>
      </div>
    );
  };