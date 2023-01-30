const student = {}

const name  = prompt('What is ur name?')
const lastName = prompt('What is ur last name?')

student.tabel = []
student.name = name
student.lastName = lastName

 while(true) {
  const subject = prompt('Subject name:')
  if(subject === null){
    break
  }
  const grade = +prompt(`${subject} grade:`)
  student.tabel.push({ subject, grade })
}

let badGrades = 0
let totalGrade = 0
for (const grade of student.tabel){
  if (grade.grade < 4) {
    badGrades++
  } else {
    totalGrade = totalGrade + grade.grade
  }
}

if (badGrades === 0) {
  console.log("Студент переведено на наступний курс");
}


const averageGrade = totalGrade / student.tabel.length
if (averageGrade > 7){
  console.log("Студенту призначено стипендію");
}

console.log(student);