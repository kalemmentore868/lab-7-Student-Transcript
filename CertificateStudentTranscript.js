const StudentTranscript = require("./StudentTranscript");

class CertificateStudentTranscript extends StudentTranscript {
  constructor(student, courses) {
    super(student, courses);
  }

  printTranscriptInfo() {
    console.log(`
    Name: ${this.student.firstName} ${this.student.lastName}
    ID: ${this.student.studentId}
    Semester Code: 20340
    Semester No. : 1
    `);
    this.courses.map((course) => {
      let grade;
      course.mark >= 50 ? (grade = "Pass") : (grade = "Fail");
      console.log(`
        Course code: ${course.courseCode}
        Course Title: ${course.courseTitle}
        Mark: ${course.mark}
        Grade: ${grade}
        `);
    });
  }
}

module.exports = CertificateStudentTranscript;
