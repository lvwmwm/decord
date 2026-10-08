// Module ID: 8097
// Function ID: 8098
// Name: ChangeLogActionCreators
// Dependencies: [5, 7002, 2114, 584, 2040, 1294, 2]

// Module 8097 (ChangeLogActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import UserSettings from "UserSettings" /* 2040 */;
import ChangelogConstants from "ChangelogConstants" /* 2114 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChangelogStore from "ChangelogStore" /* 7002 */;
import size from "module_2" /* 2 */;

let c2, c3, changelog;

function cacheBustParam() {
  const date = new Date();
  return "x=" + Math.floor(date.getMinutes() / 5);
}
const ChangelogPlatforms = ChangelogConstants.ChangelogPlatforms;
let obj = {
  lockChangeLog(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj2);
  },
  unlockChangeLog(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj2);
  },
  markChangelogAsSeen(id, date) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date };
    obj.dispatch(obj2);
    const LastReceivedChangelogId = UserSettings.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_LOG_SET_OVERRIDE", id };
    obj.dispatch(obj2);
  },
  fetchChangelogConfig() {
    let date;
    const MOBILE = ChangelogPlatforms.MOBILE;
    const HTTP = HTTPUtils.HTTP;
    const get = HTTP.get;
    const obj = { url: "https://cdn.discordapp.com/changelogs/config_" + MOBILE + ".json?" + "x=" + Math.floor(date.getMinutes() / 5), rejectWithError: true };
    date = new Date();
    return get(obj);
  },
  fetchChangelog(arg0, stateFromStores, arg2) {
    let closure_0 = arg0;
    let closure_1 = stateFromStores;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    const self = this;
    return flag2(function*(arg0, value) {
      let MOBILE;
      let closure_1;
      let tmp5;
      closure_0 = tmp4;
      if (null != changelog.getChangelog(closure_0, tmp)) {
        return null;
      }
      if (flag) {
        MOBILE = tmp43.DESKTOP;
      } else {
        MOBILE = tmp43.MOBILE;
      }
      let str = "";
      if (!flag2) {
        const _HermesInternal = HermesInternal;
        str = "?" + cacheBustParam();
      }
      const HTTP = closure_0(c2[5]).HTTP;
      const obj5 = { url: "https://cdn.discordapp.com/changelogs/" + MOBILE + "/" + closure_0 + "/" + tmp + ".json" + str, rejectWithError: true };
      const _HermesInternal2 = HermesInternal;
      const get = HTTP.get;
      yield get(obj5);
      if (1 === c3) {
        c2 = 0;
        const obj8 = { type: "CHANGE_LOG_FETCH_FAILED", id: closure_129_0, locale: closure_129_1 };
        const obj6 = tmp(c2[3]);
        obj6.dispatch(obj8);
        tmp5 = null;
        if ("en-US" !== closure_129_1) {
          c3 = 3;
          changelog = 1;
          const obj9 = { value: closure_129_4.fetchChangelog(closure_129_0, "en-US"), done: false };
          return obj9;
        }
      } else if (2 === c3) {
        if (arg0 === 1) {
          changelog = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          changelog = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_0 = value;
          const obj11 = { type: "CHANGE_LOG_FETCH_SUCCESS", id: closure_129_0, changelog: closure_0.body };
          const obj2 = tmp(c2[3]);
          obj2.dispatch(obj11);
          c2 = 0;
          changelog = 3;
          const obj12 = { value: closure_0.body, done: true };
          return obj12;
        }
      } else if (arg0 === 1) {
        changelog = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          changelog = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      return tmp5;
    })();
  }
};
const result = size.fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default obj;
