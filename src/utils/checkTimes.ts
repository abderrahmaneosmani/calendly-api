export function getDifferenceTimeStart(time: string, start: any, final: any) {
  const difference1 = new Date(time).getTime() - new Date(start).getTime();
  const difference2 = new Date(time).getTime() - new Date(final).getTime();
  const min1 = Math.floor(difference1 / 1000 / 60);
  const min2 = Math.floor(difference2 / 1000 / 60);
  if (min1 === 0 || min2 === 0) return false;
  if (Math.sign(min1) === 1 && Math.sign(min2) === -1) return false;
  if (Math.sign(min1) === -1 && Math.sign(min2) === 1) return false;
  else return true;

  return { min1, min2 };
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

  return { min1, min2 };
}
