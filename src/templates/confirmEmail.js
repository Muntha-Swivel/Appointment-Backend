const confirmEmailTemplate = (name, number, date, time) => {
  return `<table>
  <tr>
    <th>Patient Name</th>
    <th>Appointment Number</th>
    <th>Appointment Date</th>
    <th>Appointment Time</th>
  </tr>
  <tr>
    <td>${name}</td>
    <td>${number}</td>
    <td>${date}</td>
    <td>${time}</td>
  </tr>
 
</table>`;
};
module.exports = confirmEmailTemplate;
