<<<<<<< HEAD
  const sgpaInputs = document.getElementsByClassName('sgpa');
  let totalSGPA = 0;

  for (let i = 0; i < sgpaInputs.length; i++) {
    const sgpaValue = sgpaInputs[i].value.trim();
    if (sgpaValue !== '') {
      const sgpa = parseFloat(sgpaValue);
      if (!isNaN(sgpa)) {
        totalSGPA += sgpa;
      } else {
        alert('Please enter valid numeric values for SGPA.');
        return;
      }
    } else {
      alert('Please enter SGPA for all semesters.');
      return;
    }
  }{

  const numberOfSemesters = sgpaInputs.length;
  const cgpa = totalSGPA / numberOfSemesters;

  document.getElementById('cgpaResult').innerHTML = `CGPA: ${cgpa.toFixed(2)}`;

  convertToPercentage(cgpa);
}

function convertToPercentage(cgpa) {
  const percentage = (cgpa / 10) * 100;
  document.getElementById('percentageResult').innerHTML = `Percentage: ${percentage.toFixed(2)}%`;
}

=======
function calculateCGPA() {
    const sgpaInputs = document.getElementsByClassName('sgpa');
    let totalSGPA = 0;
  
    for (let i = 0; i < sgpaInputs.length; i++) {
      const sgpaValue = sgpaInputs[i].value.trim();
      if (sgpaValue !== '') {
        const sgpa = parseFloat(sgpaValue);
        if (!isNaN(sgpa)) {
          totalSGPA += sgpa;
        } else {
          alert('Please enter valid numeric values for SGPA.');
          return;
        }
      } else {
        alert('Please enter SGPA for all semesters.');
        return;
      }
    }
  
    const numberOfSemesters = sgpaInputs.length;
    const cgpa = totalSGPA / numberOfSemesters;
  
    document.getElementById('cgpaResult').innerHTML = `CGPA: ${cgpa.toFixed(2)}`;
  
    convertToPercentage(cgpa);
  }
  
  function convertToPercentage(cgpa) {
    const percentage = (cgpa / 10) * 100;
    document.getElementById('percentageResult').innerHTML = `Percentage: ${percentage.toFixed(2)}%`;
  }
  
>>>>>>> 180e638a39cb36f57b7b3ea6d4841b2c6a11ac6b
