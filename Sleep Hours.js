const getSleepHours = day => {
  if (day === 'monday') {
    return 4;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 7;
  } else if (day === 'sunday') {
    return 7;
  } else {
    return 'day error'
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of sleep';
  } else if (actualSleepHours < idealSleepHours){
    return `You need ${idealSleepHours - actualSleepHours} hours more sleep`;
  } else {
    return `You got ${actualSleepHours - idealSleepHours} hours more sleep than needed`;
  }
};

console.log(calculateSleepDebt());