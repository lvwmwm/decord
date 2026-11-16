// Module ID: 11435
// Function ID: 11436
// Name: assignSimilarDate
// Dependencies: [11434]
// Exports: assignSimilarDate, assignSimilarTime, implySimilarDate, implySimilarTime

// Module 11435 (assignSimilarDate)
import Meridiem from "Meridiem" /* 11434 */;


export function assignSimilarDate(parsingComponents, date) {
  parsingComponents.assign("day", date.getDate());
  parsingComponents.assign("month", date.getMonth() + 1);
  parsingComponents.assign("year", date.getFullYear());
}
export function assignSimilarTime(parsingComponents, addDurationResult) {
  let PM;
  parsingComponents.assign("hour", addDurationResult.getHours());
  parsingComponents.assign("minute", addDurationResult.getMinutes());
  parsingComponents.assign("second", addDurationResult.getSeconds());
  parsingComponents.assign("millisecond", addDurationResult.getMilliseconds());
  const assign = parsingComponents.assign;
  if (addDurationResult.getHours() < 12) {
    PM = Meridiem.Meridiem.AM;
  } else {
    PM = Meridiem.Meridiem.PM;
  }
  assign("meridiem", PM);
}
export function implySimilarDate(end, date) {
  end.imply("day", date.getDate());
  end.imply("month", date.getMonth() + 1);
  end.imply("year", date.getFullYear());
}
export function implySimilarTime(parsingComponents, date) {
  let PM;
  parsingComponents.imply("hour", date.getHours());
  parsingComponents.imply("minute", date.getMinutes());
  parsingComponents.imply("second", date.getSeconds());
  parsingComponents.imply("millisecond", date.getMilliseconds());
  const imply = parsingComponents.imply;
  if (date.getHours() < 12) {
    PM = Meridiem.Meridiem.AM;
  } else {
    PM = Meridiem.Meridiem.PM;
  }
  imply("meridiem", PM);
}
