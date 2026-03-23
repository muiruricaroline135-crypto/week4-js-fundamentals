
// Grade Tracker by Caroline

const gradeTracker = {
  students: [],

  addStudent(name, grades) {
    this.students.push({ name, grades });
  },

  getStudentAverage(name) {
    const student = this.students.find(s => s.name === name);
    if (!student) return null;

    const values = Object.values(student.grades);
    const total = values.reduce((sum, g) => sum + g, 0);
    return total / values.length;
  }
};

// Test
gradeTracker.addStudent("Caroline", { math: 90, english: 85, science: 88 });

console.log("Average:", gradeTracker.getStudentAverage("Caroline"));
