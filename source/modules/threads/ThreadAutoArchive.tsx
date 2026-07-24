// Module ID: 8024
// Function ID: 63693
// Name: getAutoArchiveOptions
// Dependencies: [1211, 664, 1212, 708, 3712, 2]
// Exports: getAutoArchiveDuration, getAutoArchiveDurationText

// Module 8024 (getAutoArchiveOptions)
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_3 } from "AbortCodes";

function getAutoArchiveOptions() {
  let obj = { id: "1hour" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.cs8A1c);
  obj.value = importDefault(664).Minutes.HOUR;
  const items = [obj, , , ];
  obj = { id: "24hours" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.zFKbrF);
  obj.value = importDefault(664).Minutes.DAY;
  items[1] = obj;
  obj = { id: "3days" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.TmPIZX);
  obj.value = 3 * importDefault(664).Minutes.DAY;
  items[2] = obj;
  const obj1 = { id: "1week" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl4.string(require(1212) /* getSystemLocale */.t["/7i2el"]);
  obj1.value = importDefault(664).Minutes.WEEK;
  items[3] = obj1;
  return items;
}
let items = [require("set").Minutes.HOUR, require("set").Minutes.DAY, 3 * require("set").Minutes.DAY, require("set").Minutes.WEEK];
const tmp2 = require("memoize")(() => getAutoArchiveOptions().map((value) => value.value));
const result = require("getSystemLocale").fileFinishedImporting("modules/threads/ThreadAutoArchive.tsx");

export const AUTO_ARCHIVE_OPTION_VALUES = items;
export { getAutoArchiveOptions };
export const getAutoArchiveDurations = tmp2;
export const getAutoArchiveDurationText = function getAutoArchiveDurationText(arg0) {
  let closure_0 = arg0;
  const found = getAutoArchiveOptions().find((value) => value.value === closure_0);
  let label;
  if (null != found) {
    label = found.label;
  }
  if (null == label) {
    const obj = importDefault(3712);
    label = importDefault(3712).duration(arg0, "minutes").humanize();
    const durationResult = importDefault(3712).duration(arg0, "minutes");
  }
  return label;
};
export const getAutoArchiveDuration = function getAutoArchiveDuration(channel, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    let prop;
    if (null != channel) {
      prop = channel.defaultAutoArchiveDuration;
    }
    tmp = prop;
  }
  if (null == tmp) {
    tmp = closure_3;
  }
  return tmp;
};
