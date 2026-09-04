// Module ID: 10367
// Function ID: 10368
// Name: assignSimilarDate
// Dependencies: [10366]

// Module 10367 (assignSimilarDate)
import _mod10366 from "module_10366" /* 10366 */;

require = arg1;
const dependencyMap = arg6;
arg5.assignSimilarDate = function assignSimilarDate(parsingComponents, date) {
  parsingComponents.assign("day", date.getDate());
  parsingComponents.assign("month", date.getMonth() + 1);
  parsingComponents.assign("year", date.getFullYear());
};
arg5.assignSimilarTime = function assignSimilarTime(parsingComponents, addDurationResult) {
  parsingComponents.assign("hour", addDurationResult.getHours());
  parsingComponents.assign("minute", addDurationResult.getMinutes());
  parsingComponents.assign("second", addDurationResult.getSeconds());
  parsingComponents.assign("millisecond", addDurationResult.getMilliseconds());
  if (addDurationResult.getHours() < 12) {
    let PM = _mod10366.Meridiem.AM;
  } else {
    PM = _mod10366.Meridiem.PM;
  }
  parsingComponents.assign("meridiem", PM);
};
arg5.implySimilarDate = function implySimilarDate(end, date) {
  end.imply("day", date.getDate());
  end.imply("month", date.getMonth() + 1);
  end.imply("year", date.getFullYear());
};
arg5.implySimilarTime = function implySimilarTime(parsingComponents, date) {
  parsingComponents.imply("hour", date.getHours());
  parsingComponents.imply("minute", date.getMinutes());
  parsingComponents.imply("second", date.getSeconds());
  parsingComponents.imply("millisecond", date.getMilliseconds());
  if (date.getHours() < 12) {
    let PM = _mod10366.Meridiem.AM;
  } else {
    PM = _mod10366.Meridiem.PM;
  }
  parsingComponents.imply("meridiem", PM);
};
