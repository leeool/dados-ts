/**
 *
 * @param stringData "01/09/2022 01:26"
 * @returns Date Thu Sep 01 2022 01:21:00 GMT-0300 (Brasilia Standard Time)
 */

const stringToDate = (string: string): Date => {
  const [date, time] = string.split(" ")
  const [day, month, year] = date.split("/").map(Number)
  const [minutes, seconds] = time.split(":").map(Number)

  return new Date(year, month - 1, day, minutes, seconds)
}

export default stringToDate
