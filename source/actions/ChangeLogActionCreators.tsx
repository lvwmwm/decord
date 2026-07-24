// Module ID: 7861
// Function ID: 62011
// Name: cacheBustParam
// Dependencies: [5, 4141, 653, 1905, 686, 3803, 507, 2]

// Module 7861 (cacheBustParam)
import explicitContentFromProto from "explicitContentFromProto";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import { ChangelogPlatforms } from "CHANGELOG_MODAL_KEY";

const require = arg1;
function cacheBustParam() {
  return "x=" + Math.floor(new Date().getMinutes() / 5);
}
const result = require("ME").fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default {
  lockChangeLog(key) {
    let obj = importDefault(686);
    obj = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj);
  },
  unlockChangeLog(key) {
    let obj = importDefault(686);
    obj = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj);
  },
  markChangelogAsSeen(id, date) {
    let obj = importDefault(686);
    obj = { type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date };
    obj.dispatch(obj);
    const LastReceivedChangelogId = require(3803) /* explicitContentFromProto */.LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(first) {
    const self = this;
    let obj = importDefault(686);
    obj = { type: "CHANGE_LOG_SET_OVERRIDE", id: first };
    obj.dispatch(obj);
    if (null != first) {
      self.sendChangelogMessage(first);
    }
  },
  sendChangelogMessage(changelog_id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.CHANGELOG_MESSAGES, body: obj, rejectWithError: true };
    obj = { changelog_id };
    HTTP.post(obj);
  },
  fetchChangelogConfig() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    return HTTP.get({ url: "https://cdn.discordapp.com/changelogs/config_" + ChangelogPlatforms.MOBILE + ".json?" + cacheBustParam(), rejectWithError: true });
  },
  fetchChangelog(closure_0, closure_1, arg2) {
    let flag = arg2;
    let flag2 = arg3;
    if (arg2 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    const self = this;
    return flag2(async () => {
      if (null != self.getChangelog(outer1_0, outer1_1)) {
        return null;
      } else {
        const tmp = outer1_2 ? outer2_6.DESKTOP : outer2_6.MOBILE;
        let str = "";
        if (!outer1_3) {
          const _HermesInternal = HermesInternal;
          str = "?" + outer2_7();
        }
        const HTTP = callback(flag[6]).HTTP;
        let obj = {};
        const _HermesInternal2 = HermesInternal;
        obj.url = "https://cdn.discordapp.com/changelogs/" + tmp + "/" + outer1_0 + "/" + outer1_1 + ".json" + str;
        obj.rejectWithError = true;
        const tmp14 = yield HTTP.get(obj);
        obj = { type: "CHANGE_LOG_FETCH_SUCCESS", id: outer1_0, changelog: tmp14.body };
        callback2(true[4]).dispatch(obj);
        return tmp14.body;
      }
    })();
  }
};
