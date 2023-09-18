/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayType {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (day: DayType): boolean => {
  if (day == DayType.SATURDAY || day == DayType.SUNDAY) {
    return false;
  } else return true;
};
