const main = (() => {
  const prompt = require("prompt-sync")();
  const Student = require("./Student");
  const Course = require("./Course");
  const UndergraduateStudentTranscript = require("./UndergraduateStudentTranscript");
  const CertificateStudentTranscript = require("./CertificateStudentTranscript");

  const firstName = prompt("Please enter first name: ");
  const lastName = prompt("Please enter last name: ");
  const studentId = prompt("Please enter student ID: ");
  const coursesDid = parseInt(prompt("Please enter number of courses did "));
  const studentType = prompt("Please enter student type (either u or c) ");

  const student = new Student(
    firstName,
    lastName,
    studentId,
    coursesDid,
    studentType
  );

  const coursesList = [];

  for (let i = 0; i < coursesDid; i++) {
    const courseCode = prompt("Please enter course code ");
    const courseTitle = prompt("Please enter course title ");
    const numOfCredits = parseInt(prompt("Please enter course credits "));
    const grade = parseFloat(prompt("Please enter mark received in course "));

    const course = new Course(courseCode, courseTitle, numOfCredits, grade);
    coursesList.push(course);
  }

  let typeToTranscribe;

  if (student.studentType.toLowerCase() === "u") {
    typeToTranscribe = new UndergraduateStudentTranscript(student, coursesList);
  } else if (student.studentType.toLowerCase() === "c") {
    typeToTranscribe = new CertificateStudentTranscript(student, coursesList);
  }

  typeToTranscribe.printTranscriptInfo();
})();
