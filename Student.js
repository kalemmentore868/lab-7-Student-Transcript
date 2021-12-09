class Student {
  firstName;
  lastName;
  studentId;
  numberOfCourses;
  studentType;

  constructor(fn, ln, id, nc, st) {
    this.firstName = fn;
    this.lastName = ln;
    this.studentId = id;
    this.numberOfCourses = nc;
    this.studentType = st;
  }
}

module.exports = Student;
