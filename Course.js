class Course {
  courseCode;
  courseTitle;
  courseCredits;
  mark;

  constructor(cc, ct, creds, m) {
    this.courseCode = cc;
    this.courseTitle = ct;
    this.courseCredits = creds;
    this.mark = m;
  }
}

module.exports = Course;
