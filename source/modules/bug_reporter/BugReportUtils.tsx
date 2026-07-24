// Module ID: 10352
// Function ID: 79872
// Name: _fetchBugReportConfig
// Dependencies: [5, 1278, 653, 507, 1212, 10353, 477, 4942, 480, 2]
// Exports: fetchBugReportConfig, getFeatureId, getPriorities, submitReport

// Module 10352 (_fetchBugReportConfig)
import _uploadDebugLogFiles from "_uploadDebugLogFiles";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function _fetchBugReportConfig() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _submitReport() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ DebugLogCategory: closure_5, Endpoints: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/bug_reporter/BugReportUtils.tsx");

export const fetchBugReportConfig = function fetchBugReportConfig() {
  return _fetchBugReportConfig(...arguments);
};
export const getFeatureId = function getFeatureId(feature) {
  let name;
  if (null != feature) {
    name = feature.name;
  }
  let str = "";
  let str2 = "";
  if (null != name) {
    str2 = name;
  }
  let squad;
  if (null != feature) {
    squad = feature.squad;
  }
  let tmp3 = str;
  if (null != squad) {
    tmp3 = squad;
  }
  if (str !== str2) {
    str = `${str2}::${tmp3}`;
  }
  return str;
};
export const getPriorities = function getPriorities() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.VwIij9);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.format(require(1212) /* getSystemLocale */.t.DOP8yY, {});
  obj.emoji = "801497159479722084";
  obj.value = 0;
  const items = [obj, , , ];
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl3.string(require(1212) /* getSystemLocale */.t.rYfJop);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl4.format(require(1212) /* getSystemLocale */.t["+LEfDL"], {});
  obj.emoji = "410336837563973632";
  obj.value = 1;
  items[1] = obj;
  obj = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl5.string(require(1212) /* getSystemLocale */.t["9LSuy3"]);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl6.format(require(1212) /* getSystemLocale */.t.nC7pvx, {});
  obj.emoji = "841420679643529296";
  obj.value = 2;
  items[2] = obj;
  const obj1 = {};
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl7.string(require(1212) /* getSystemLocale */.t.Ia0ska);
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj1.description = intl8.format(require(1212) /* getSystemLocale */.t.D4rbgX, {});
  obj1.emoji = "827645852352512021";
  obj1.value = 3;
  items[3] = obj1;
  return items;
};
export const submitReport = function submitReport() {
  return _submitReport(...arguments);
};
