// Module ID: 12527
// Function ID: 12528
// Name: bug_reporter/BugReportUtils
// Dependencies: [5, 1193, 1085, 1282, 1126, 12528, 1369, 5083, 1260, 2]
// Exports: fetchBugReportConfig, getFeatureId, getPriorities, submitReport

// Module 12527 (bug_reporter/BugReportUtils)
import intl9 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5083 */;
import DebugUploadManager from "DebugUploadManager" /* 12528 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3, c4;

let hasOwnProperty;
let metroRequire;
let obj = function _fetchBugReportConfig() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.BUG_REPORTS, rejectWithError: false };
    await HTTP.get(obj4);
    return arg1.body;
  });
  return obj(...arguments);
};
obj = function _submitReport() {
  let theme;
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let mapped;
    let obj23;
    let obj24;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c6;
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let ANDROID_APP;
            const obj4 = { name: "name", value: closure_0.name };
            const items = [obj4, , , ];
            const obj5 = { name: "priority", value: "" + closure_0.priority };
            const _HermesInternal2 = HermesInternal;
            items[1] = obj5;
            const obj6 = { name: "override_platform_information", value: "" + closure_1.overridePlatformInformation };
            const _HermesInternal3 = HermesInternal;
            items[2] = obj6;
            const obj7 = { name: "theme", value: theme.theme };
            items[3] = obj7;
            const tmp40 = closure_2;
            if ("" !== closure_0.description) {
              const obj8 = { name: "description", value: closure_0.description };
              items.push(obj8);
            }
            if ("" !== closure_0.url) {
              const obj9 = { name: "external_url", value: closure_0.url };
              items.push(obj9);
            }
            if (null != closure_0.buildOverride) {
              const obj10 = { name: "build_override", value: closure_0.buildOverride };
              items.push(obj10);
            }
            if (null != closure_0.experimentOverrides) {
              const obj11 = { name: "experiment_overrides", value: mapped.join(", ") };
              const experimentOverrides = tmp38.experimentOverrides;
              const push = items.push;
              mapped = experimentOverrides.map((experimentId) => "" + experimentId.experimentId + ":" + experimentId.variantId);
              push(obj11);
            }
            const feature = tmp38.feature;
            let asana_inbox_id;
            if (feature != null) {
              asana_inbox_id = feature.asana_inbox_id;
            }
            const tmp10 = null != asana_inbox_id && "" !== asana_inbox_id;
            if (tmp10) {
              const obj12 = { name: "asana_inbox_id", value: "" + asana_inbox_id };
              const _HermesInternal = HermesInternal;
              const push2 = items.push;
              push2(obj12);
            }
            const feature2 = tmp38.feature;
            let name;
            if (feature2 != null) {
              name = feature2.name;
            }
            const tmp13 = null != name && "" !== name;
            if (tmp13) {
              const obj13 = { name: "feature_name", value: name };
              items.push(obj13);
            }
            if (closure_1.overridePlatformInformation) {
              const obj14 = { name: "device", value: closure_1.device };
              items.push(obj14);
              const obj15 = { name: "os", value: closure_1.operatingSystem };
              items.push(obj15);
              const obj16 = { name: "os_version", value: closure_1.operatingSystemVersion };
              items.push(obj16);
              const obj17 = { name: "client_version", value: closure_1.clientVersion };
              items.push(obj17);
              const obj19 = { name: "client_build_number", value: closure_1.clientBuildNumber };
              items.push(obj19);
              const obj20 = { name: "release_channel", value: window.GLOBAL_ENV.RELEASE_CHANNEL };
              const _window = window;
              items.push(obj20);
              const obj21 = { name: "locale", value: closure_1.locale };
              items.push(obj21);
            }
            const uploadDebugLogFiles = DebugUploadManager.uploadDebugLogFiles;
            const obj18 = PlatformUtils;
            const tmp22 = require;
            if (obj18.isIOS()) {
              ANDROID_APP = tmp25.IOS_APP;
            } else {
              ANDROID_APP = tmp25.ANDROID_APP;
            }
            uploadDebugLogFiles(ANDROID_APP);
            c6 = 1;
            const obj22 = { url: constants.BUG_REPORTS, attachments: tmp40, fields: items, trackedActionData: obj23, rejectWithError: false };
            obj23 = { event: tmp22(dependencyMap[8]).NetworkActionNames.BUG_REPORT_SUBMIT, properties: obj24 };
            const post = TrackedHTTPUtilsDefault.post;
            obj24 = { priority: closure_0.priority, asana_inbox_id };
            c4 = 2;
            c3 = 1;
            const obj25 = { value: post(obj22), done: false };
            return obj25;
          }
        } else if (1 === tmp3) {
          c6 = 0;
          c3 = 3;
          const obj26 = { value, done: true };
          return obj26;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c3 = 3;
          const obj27 = { value, done: true };
          return obj27;
        } else {
          c6 = 0;
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp30) {
        value = tmp30;
        if (0 === c6) {
          c3 = 3;
          throw tmp30;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ DebugLogCategory: hasOwnProperty, Endpoints: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportUtils.tsx");

export const fetchBugReportConfig = function fetchBugReportConfig() {
  return obj(...arguments);
};
export const getFeatureId = function getFeatureId(feature) {
  let str;
  if (feature != null) {
    str = feature.name;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (feature != null) {
    str2 = feature.squad;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3 = "";
  if ("" !== str) {
    str3 = `${str}::${str2}`;
  }
  return str3;
};
export const getPriorities = function getPriorities() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  obj = { title: intl.string(intl9.t.VwIij9), description: intl2.format(intl9.t.DOP8yY, {}), emoji: "801497159479722084", value: 0 };
  intl = intl9.intl;
  intl2 = intl9.intl;
  const items = [obj, , , ];
  const obj2 = { title: intl3.string(intl9.t.rYfJop), description: intl4.format(intl9.t["+LEfDL"], {}), emoji: "410336837563973632", value: 1 };
  intl3 = intl9.intl;
  intl4 = intl9.intl;
  items[1] = obj2;
  const obj3 = { title: intl5.string(intl9.t["9LSuy3"]), description: intl6.format(intl9.t.nC7pvx, {}), emoji: "841420679643529296", value: 2 };
  intl5 = intl9.intl;
  intl6 = intl9.intl;
  items[2] = obj3;
  const obj4 = { title: intl7.string(intl9.t.Ia0ska), description: intl8.format(intl9.t.D4rbgX, {}), emoji: "827645852352512021", value: 3 };
  intl7 = intl9.intl;
  intl8 = intl9.intl;
  items[3] = obj4;
  return items;
};
export const submitReport = function submitReport() {
  return obj(...arguments);
};
