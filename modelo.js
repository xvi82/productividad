// Graba los valores del formulario a la url
const words = new URLSearchParams(window.location.search);

// Limpia y capitaliza los nombres de las partes
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Asigna variables a los nombres usados en el formulario
const nombre= cleanAndCap(words.get('nombre'));
const categoria = words.get('categoria');
const destino = cleanAndCap(words.get('destino'));

const dni = words.get('dni');
const domicilio = words.get('domicilio');

const cobro = words.get('cobro');
const salariobase = words.get('salariobase');

const trienio = words.get('trienio');
const compdest = words.get('compdest');

function clean(dinero){
    return dinero.replace(".","")}

function convert(dinero){
    return dinero.replace(",",".");}

function redondeo(cantidad) {
  var num = cantidad;
  var n = num.toFixed(2);
  return n
}


let newtrienio = Number(convert(clean(trienio)));
let newsalariobase = Number(convert(clean(salariobase)));
let newcompdest = Number(convert(clean(compdest)));
let newcobro = Number(convert(cobro))

const retribucionesfijas = (newtrienio+newsalariobase+newcompdest)*14;

const productividadanual = retribucionesfijas/20;

const productividadtrimestral = productividadanual/4;

const diferenciaentera = productividadtrimestral-newcobro;

const diferencia = redondeo(diferenciaentera).toString().replace(".", ",");



// La frase contiene HTML y texto que se pondrá en la página del resultado
const sentencia = `<p>D. ${nombre}, ${categoria}, con destino en ${destino}, provisto del DNI ${dni}, con domicilio en ${domicilio}, el cual se designa desde este momento a efectos de notificaciones, ante V.I. respetuosamente EXPONE:</p>
<p>a) Que he tenido conocimiento el pasado 30 de noviembre de 2020 de la n&oacute;mina correspondiente al mes de noviembre de 2020 en la cual se me abonaba, entre otros conceptos, la productividad por objetivos del cuarto trimestre de 2019 por importe de ${cobro} euros.</p>
<p>b) Y entendiendo que dicha partida retributiva no es conforme a derecho, formulo RECURSO ANTE V.I. a fin de que se me abone la cantidad prevista legalmente, en base a los siguientes MOTIVOS:</p>
<p><strong>PRIMERO.- INFRACCI&Oacute;N DEL ART. 9.1 DE LA LEY 15/2003</strong></p>
<p>La aprobaci&oacute;n del Reglamento 2/2018, para el cumplimiento de la Ley 15/2003, de 26 de mayo, reguladora del r&eacute;gimen retributivo de las Carreras Judicial y Fiscal, en lo relativo a las retribuciones variables por objetivos de los miembros de la Carrera Judicial, por Acuerdo de 29 de noviembre de 2018, del Pleno del Consejo General del Poder Judicial, determin&oacute; la entrada en vigor del sistema retributivo previsto en el Cap&iacute;tulo III del T&iacute;tulo de la Ley 15/2003, de 26 de mayo, reguladora del r&eacute;gimen retributivo de las carreras judicial y fiscal, el cual se inici&oacute; el &uacute;ltimo trimestre de 2019.</p>
<p>Hasta ese momento, se hab&iacute;a seguido un sistema de reparto universal, vinculado parcialmente al cumplimiento de objetivos, como consecuencia de diferentes vicisitudes derivadas del sistema de m&oacute;dulos inicialmente aprobados. Este sistema transitorio se aplic&oacute; temporalmente hasta el tercer trimestre de 2019, habi&eacute;ndose abonado en la misma n&oacute;mina de noviembre de 2020 los tres primeros trimestres de 2019, respecto del cual no se reclama ning&uacute;n concepto, puesto que hasta ese momento no se hab&iacute;an aprobado y no estaban en vigor los objetivos de cada destino aplicables a efectos de retribuciones variables por objetivos.</p>
<p>Sin embargo, para el cuarto trimestre de 2019, entraron en vigor los objetivos aprobados por el Reglamento del CGPJ 2/2018, los cuales en mi caso super&eacute; en m&aacute;s de un 20 por ciento, por lo que resulta de aplicaci&oacute;n el art. 9.1 de la Ley 15/2003 que establece: &ldquo;1. Los jueces y magistrados que en el semestre inmediatamente anterior hubiesen superado en un 20 por ciento el objetivo correspondiente a su destino tendr&aacute;n derecho a percibir un incremento no inferior al cinco por ciento ni superior al 10 por ciento de sus retribuciones fijas&rdquo;.</p>
<p>Este precepto resulta infringido en el acto impugnado, pues se me ha abonado una retribuci&oacute;n muy inferior a la m&iacute;nima prevista del 5%, tomando en consideraci&oacute;n que las retribuciones fijas se componen, seg&uacute;n dispone el art. 3 de la misma Ley 15/2003, de las retribuciones b&aacute;sicas y retribuciones complementarias, esto es, el sueldo, la antig&uuml;edad, el complemento de destino y el complemento espec&iacute;fico, incluidas las pagas extraordinarias en los t&eacute;rminos definidos en el art. 4.3 de la Ley 15/2003.</p>
<p>Un simple c&aacute;lculo matem&aacute;tico de las retribuciones fijas percibidas en el &uacute;ltimo trimestre de 2019 y la cantidad abonada en concepto de productividad en la n&oacute;mina de noviembre de 2020 pone de manifiesto que se me ha abonado una cantidad de alrededor del 2% de las retribuciones fijas, cuando el m&iacute;nimo legal es el 5% seg&uacute;n dispone el art. 9.1 de la Ley 15/2003.&nbsp;</p>
<p>Este m&iacute;nimo legal est&aacute; reconocido como derecho en la ley, &uacute;nicamente condicionado a que no se superen los l&iacute;mites recogidos en el propio art. 9. L&oacute;gicamente, la aplicaci&oacute;n de un porcentaje m&iacute;nimo del 5% en ning&uacute;n caso estar&iacute;a limitado por el art. 9.3 de la Ley 15/2003, que establece que el cr&eacute;dito total destinado en cada ejercicio presupuestario a las retribuciones variables, a que se refiere el apartado 1, no podr&aacute; superar en ning&uacute;n caso el cinco por ciento de la cuant&iacute;a global de las retribuciones fijas de los miembros de la carrera judicial. En efecto, la aplicaci&oacute;n del m&iacute;nimo del 5% en ning&uacute;n caso superar&iacute;a el 5% de la cuant&iacute;a global, por cuanto que la productividad por objetivos solo se alcanza por una parte de los miembros de la carrera judicial, de tal manera que estos l&iacute;mites ser&iacute;an aplicables si se acordaran retribuciones m&aacute;s altas dentro de la horquilla del art. 9.1 (v.gr. hasta el 10%), pero nunca si se aplica el m&iacute;nimo legal del 5%.</p>
<p>Por este motivo, se reclama el m&iacute;nimo legal del 5%, al no haberse establecido un porcentaje superior conforme autoriza el art. 9.1 de la Ley 15/2003, en el entendimiento de que se trata de una reclamaci&oacute;n justa, pues es un concepto que remunera el esfuerzo adicional en el desempe&ntilde;o de la funci&oacute;n, cuya cuant&iacute;a m&iacute;nima est&aacute; establecida por el legislador.</p>
<p>De acuerdo a ello solicito que se me abonen las diferencias retributivas de acuerdo a las siguientes bases de c&aacute;lculo: 1) la cantidad en este concepto es la que resulta de aplicar el 5% a las retribuciones fijas percibidas en octubre, noviembre y diciembre de 2019, con el porcentaje correspondiente de las pagas extraordinarias; y 2) a esta cantidad debe restarse la abonada en n&oacute;mina de noviembre de 2020 que asciende a <strong>${cobro} euros</strong>.</p>
<p>Seg&uacute;n estas bases (s.e.u.o.) la diferencia ascender&iacute;a a <strong>${diferencia} euros</strong> que son las que solicito que se apliquen en la n&oacute;mina de noviembre de 2019 por el concepto productividad del cuarto trimestre de 2019.</p>
<p>En la confianza de que por V.I. se apreciar&aacute; la justicia de las alegaciones que realizo es por todo ello que</p>
<p><strong>SOLICITO</strong> que admita el presente escrito, tenga por presentado recurso contra la n&oacute;mina correspondiente al mes de noviembre de 2020 y en su vista y previos los tr&aacute;mites que procedan, se proceda a reconocer mi derecho a percibir una cuant&iacute;a del 5% de las retribuciones fijas del cuarto trimestre de 2019 en concepto de productividad de este trimestre, abon&aacute;ndome las diferencias retributivas con m&aacute;s los intereses legales correspondientes.</p>`;

// Grabar el valor del contenido de la sentencia
const storyEl = document.getElementById('sentencia');
// Progar el elemento sentencia con el valor de las variables
storyEl.innerHTML = sentencia;
