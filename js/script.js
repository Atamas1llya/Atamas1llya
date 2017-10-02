import '../less/index.less';

(() => {
  const birthday = new Date('09/07/2000');
  const diff = Date.now() - birthday.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  document.getElementById("age").innerHTML = age;
})();
