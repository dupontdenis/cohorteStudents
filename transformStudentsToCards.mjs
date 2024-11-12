export const transformStudentsToCards = (students) => {
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

  // Transform students into Bootstrap card elements
  const studentsToHtml = students.map(student => {
    return `
      <div class="card" data-cohorte="${student.cohorte}">
        <img src="${student.img}" class="card-img-top" alt="${student.name}">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">Mark: ${student.mark}</p>
          <!-- <p class="card-text">Cohorte: ${student.cohorte}</p> -->
        </div>
      </div>
    `;
  });

  return { cohortesToHtml, studentsToHtml };
};