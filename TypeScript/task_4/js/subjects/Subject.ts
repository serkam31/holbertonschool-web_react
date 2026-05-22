/// <reference path="./Teacher.ts" />
namespace Subjects {
  export class Subject {
    protected teacher!: Teacher;
    setTeacher(t: Teacher): void { this.teacher = t; }
  }
}