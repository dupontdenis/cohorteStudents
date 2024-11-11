export const transformStudentsToHtml = (students) => {
  // Find all the different cohortes
  const cohortes = students.reduce((acc, student) => {
    if (!acc.includes(student.cohorte)) {
      acc.push(student.cohorte);
    }
    return acc;
  }, []);

  console.log(cohortes);

  // Transform cohortes into <h1> elements
  const cohortesToHtml = cohortes.map(cohorte => {
    return `<h1 data-cohorte="${cohorte}">${cohorte}</h1>`;
  });

  // Transform students into <p> elements
  const studentsToHtml = students.map(student => {
    return `<p data-cohorte="${student.cohorte}">${student.name}</p>`;
  });

  return { cohortesToHtml, studentsToHtml };
};
