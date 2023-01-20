const time = () => {
  const d = new Date(); // for now
  const h = d.getHours(); // => 9
  const m = d.getMinutes(); // =>  30

  const currentTime = h + ":" + m;
  return currentTime;
};

export default time;
