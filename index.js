//Botones de seleccion de los tipos de cada clase de modelos

document.getElementById('c1').addEventListener('click', () => {
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form1').style.display = 'block';
})
document.getElementById('c2').addEventListener('click', () => {
  document.getElementById('form1').style.display = 'none';
  document.getElementById('form2').style.display = 'block';
})