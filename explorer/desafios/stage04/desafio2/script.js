const students = [
  {
    name: "Cris",
    firstScore: 9.5,
    secondScore: 9.2,
  },
  {
    name: "Maria",
    firstScore: 9,
    secondScore: 9.2,
  },
  {
    name: "José",
    firstScore: 7,
    secondScore: 7,
  },
  {
    name: "Marcelo",
    firstScore: 7,
    secondScore: 8.2,
  },
  {
    name: "Alex",
    firstScore: 3,
    secondScore: 4,
  },
];

function average(firstScore, secondScore) {
  let result = (firstScore + secondScore) / 2;

  return result.toFixed(1);
}

for (let student of students) {
  let result = average(student.firstScore, student.secondScore);

  let text = `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;

  if (result < 7) {
    text = `Não foi desta vez, ${student.name}! Tente novamente!`;
  }

  alert(`A média do(a) aluno(a) ${student.name} é ${result}.\n${text}`);
}
