// Module ID: 10309
// Function ID: 79594
// Name: _fetchBugReportConfig
// Dependencies: []
// Exports: fetchBugReportConfig, getFeatureId, getPriorities, submitReport

// Module 10309 (_fetchBugReportConfig)
function _fetchBugReportConfig() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchBugReportConfig = obj;
  return obj(...arguments);
}
function _submitReport() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _submitReport = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ DebugLogCategory: closure_5, Endpoints: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/bug_reporter/BugReportUtils.tsx");

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
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.VwIij9);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.description = intl2.format(arg1(dependencyMap[4]).t.DOP8yY, {});
  obj.emoji = "801497159479722084";
  obj.value = 0;
  const items = [obj, , , ];
  obj = {};
  const intl3 = arg1(dependencyMap[4]).intl;
  obj.title = intl3.string(arg1(dependencyMap[4]).t.rYfJop);
  const intl4 = arg1(dependencyMap[4]).intl;
  obj.description = intl4.format(arg1(dependencyMap[4]).t.+LEfDL, {});
  obj.emoji = "410336837563973632";
  obj.value = 1;
  items[1] = obj;
  obj = {};
  const intl5 = arg1(dependencyMap[4]).intl;
  obj.title = intl5.string(arg1(dependencyMap[4]).t.9LSuy3);
  const intl6 = arg1(dependencyMap[4]).intl;
  obj.description = intl6.format(arg1(dependencyMap[4]).t.nC7pvx, {});
  obj.emoji = "841420679643529296";
  obj.value = 2;
  items[2] = obj;
  const obj1 = {};
  const intl7 = arg1(dependencyMap[4]).intl;
  obj1.title = intl7.string(arg1(dependencyMap[4]).t.Ia0ska);
  const intl8 = arg1(dependencyMap[4]).intl;
  obj1.description = intl8.format(arg1(dependencyMap[4]).t.D4rbgX, {});
  obj1.emoji = "827645852352512021";
  obj1.value = 3;
  items[3] = obj1;
  return items;
};
export const submitReport = function submitReport() {
  return _submitReport(...arguments);
};
