// Function to calculate average
function calculateAverage(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

// Function to determine grade based on average
function getGrade(avg) {
  if (avg >= 90) return 'A';
  else if (avg >= 80) return 'B';
  else if (avg >= 70) return 'C';
  else if (avg >= 60) return 'D';
  else return 'F';
}

// Function to process and print result
function printStudentResult(student) {
  const average = calculateAverage(student.marks);
  const grade = getGrade(average);
  
  console.log(`\n📄 Student Report:`);
  console.log(`Name: ${student.name}`);
  console.log(`Marks: ${student.marks.join(', ')}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Grade: ${grade}`);
}

// Example student data object
const student1 = {
  name: "Alice Johnson",
  marks: [85, 92, 78, 88, 90]
};

// Run the result printer
printStudentResult(student1);
