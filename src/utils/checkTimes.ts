export function getDifferenceTimeStart(
  timeStart: string,
  timeEnd: string,
  start: any,
  final: any
) {
  const difference1 = new Date(timeStart).getTime() - new Date(start).getTime();
  const difference2 = new Date(timeStart).getTime() - new Date(final).getTime();
  const difference3 = new Date(timeEnd).getTime() - new Date(start).getTime();
  const difference4 = new Date(timeEnd).getTime() - new Date(final).getTime();

  const min1 = Math.floor(difference1 / 1000 / 60);
  const min2 = Math.floor(difference2 / 1000 / 60);
  const min3 = Math.floor(difference3 / 1000 / 60);
  const min4 = Math.floor(difference4 / 1000 / 60);

  if (min1 === 0 || min2 === 0) return false;
  if (Math.sign(min1) === 1 && Math.sign(min2) === -1) return false;
  if (Math.sign(min1) === -1 && Math.sign(min2) === 1) return false;
  if (min3 === 0 || min4 === 0) return false;
  if (Math.sign(min3) === 1 && Math.sign(min3) === -1) return false;
  if (Math.sign(min4) === -1 && Math.sign(min4) === 1) return false;
  else return true;
}

export function getDifferenceTimeEnd(
  time: string,
  start: string,
  final: string
) {
  const difference1 = new Date(time).getTime() - new Date(start).getTime();
  const difference2 = new Date(time).getTime() - new Date(final).getTime();
  const min1 = Math.floor(difference1 / 1000 / 60);
  const min2 = Math.floor(difference2 / 1000 / 60);
  if (min1 === 0 || min2 === 0) return false;
  if (Math.sign(min1) === 1 && Math.sign(min2) === -1) return false;
  if (Math.sign(min1) === -1 && Math.sign(min2) === 1) return false;
  else return true;
}
