const StudentTranscript = require("./StudentTranscript");

class UndergraduateStudentTranscript extends StudentTranscript {
  constructor(student, courses) {
    super(student, courses);
  }

  GPA() {
    let totalCoursePoints = 0;
    let totalCreditsEarned = 0;

    this.courses.map((course) => {
      totalCreditsEarned += course.courseCredits;
      let gradeValuepoint;
      switch (true) {
        case 90 <= course.mark && course.mark <= 100:
          gradeValuepoint = 4;
          break;
        case 80 <= course.mark && course.mark <= 89.9:
          gradeValuepoint = 3;
          break;
        case 70 <= course.mark && course.mark <= 79.9:
          gradeValuepoint = 2;
          break;
        case 60 <= course.mark && course.mark <= 69.9:
          gradeValuepoint = 1;
          break;
        case 0 <= course.mark && course.mark <= 59.9:
          gradeValuepoint = 0;
          break;
      }
      const coursePoints = gradeValuepoint * course.courseCredits;
      totalCoursePoints += coursePoints;
    });

    return (totalCoursePoints / totalCreditsEarned).toFixed(1);
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
      switch (true) {
        case 90 <= course.mark && course.mark <= 100:
          grade = "A";
          break;
        case 80 <= course.mark && course.mark <= 89.9:
          grade = "B";
          break;
        case 70 <= course.mark && course.mark <= 79.9:
          grade = "C";
          break;
        case 60 <= course.mark && course.mark <= 69.9:
          grade = "D";
          break;
        case 0 <= course.mark && course.mark <= 59.9:
          grade = "F";
          break;
      }
      console.log(`
          Course code: ${course.courseCode}
          Course Title: ${course.courseTitle}
          Mark: ${course.mark}
          Grade: ${grade}
          `);
    });

    console.log(`Student GPA: ${this.GPA()}`);
  }
}

module.exports = UndergraduateStudentTranscript;
