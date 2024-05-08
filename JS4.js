function GetDate(){
  // const date = new Date();
  // document.getElementById('first').innerHTML=(date);
  // const months = [
  //   "Jan", "Feb", "Mar", "Apr",
  //   "May", "Jun", "Jul", "Aug",
  //   "Sep", "Oct", "Nov", "Dec"
  // ];
  const date = new Date();
  var currentMonth = date.toLocaleString('default', { month: 'long' });
  let currentDay= String(date.getDate());
  // let currentMonth = month(date.getMonth()+1);
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
  document.getElementById('first').innerHTML = currentDate;
}
function GetTime()
{
    const date = new Date();
    document.getElementById('second').innerHTML=(date);
}