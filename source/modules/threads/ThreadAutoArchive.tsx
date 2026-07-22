// Module ID: 7931
// Function ID: 63344
// Name: getAutoArchiveOptions
// Dependencies: [57, 31, 27, 4120, 1278, 1280]
// Exports: getAutoArchiveDuration, getAutoArchiveDurationText

// Module 7931 (getAutoArchiveOptions)
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_3 } from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function getAutoArchiveOptions() {
  let obj = { id: "1hour" };
  const intl = require(dependencyMap[2]).intl;
  obj.label = intl.string(require(dependencyMap[2]).t.cs8A1c);
  obj.value = importDefault(dependencyMap[1]).Minutes.HOUR;
  const items = [obj, , , ];
  obj = { id: "24hours" };
  const intl2 = require(dependencyMap[2]).intl;
  obj.label = intl2.string(require(dependencyMap[2]).t.zFKbrF);
  obj.value = importDefault(dependencyMap[1]).Minutes.DAY;
  items[1] = obj;
  obj = { id: "3days" };
  const intl3 = require(dependencyMap[2]).intl;
  obj.label = intl3.string(require(dependencyMap[2]).t.TmPIZX);
  obj.value = 3 * importDefault(dependencyMap[1]).Minutes.DAY;
  items[2] = obj;
  const obj1 = { id: "1week" };
  const intl4 = require(dependencyMap[2]).intl;
  obj1.label = intl4.string(require(dependencyMap[2]).t./7i2el);
  obj1.value = importDefault(dependencyMap[1]).Minutes.WEEK;
  items[3] = obj1;
  return items;
}
const items = [require("module_31").Minutes.HOUR, require("module_31").Minutes.DAY, 3 * require("module_31").Minutes.DAY, require("module_31").Minutes.WEEK];
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/threads/ThreadAutoArchive.tsx");

export const AUTO_ARCHIVE_OPTION_VALUES = items;
export { getAutoArchiveOptions };
export const getAutoArchiveDurations = require("_isNativeReflectConstruct")(() => getAutoArchiveOptions().map((value) => value.value));
export const getAutoArchiveDurationText = function getAutoArchiveDurationText(arg0) {
  const require = arg0;
  const found = getAutoArchiveOptions().find((value) => value.value === value);
  let label;
  if (null != found) {
    label = found.label;
  }
  if (null == label) {
    const obj = importDefault(dependencyMap[4]);
    label = importDefault(dependencyMap[4]).duration(arg0, "minutes").humanize();
    const durationResult = importDefault(dependencyMap[4]).duration(arg0, "minutes");
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
