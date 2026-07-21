// Module ID: 7761
// Function ID: 61625
// Name: cacheBustParam
// Dependencies: []

// Module 7761 (cacheBustParam)
function cacheBustParam() {
  return "x=" + Math.floor(new Date().getMinutes() / 5);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const ChangelogPlatforms = arg1(dependencyMap[3]).ChangelogPlatforms;
const result = arg1(dependencyMap[7]).fileFinishedImporting("actions/ChangeLogActionCreators.tsx");

export default {
  lockChangeLog(key) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "CHANGE_LOG_LOCK", key };
    obj.dispatch(obj);
  },
  unlockChangeLog(key) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "CHANGE_LOG_UNLOCK", key };
    obj.dispatch(obj);
  },
  markChangelogAsSeen(id, date) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "CHANGE_LOG_MARK_SEEN", changelogId: id, changelogDate: date };
    obj.dispatch(obj);
    const LastReceivedChangelogId = date(dependencyMap[5]).LastReceivedChangelogId;
    LastReceivedChangelogId.updateSetting(id);
  },
  setChangelogOverride(first) {
    const self = this;
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "CHANGE_LOG_SET_OVERRIDE", id: first };
    obj.dispatch(obj);
    if (null != first) {
      self.sendChangelogMessage(first);
    }
  },
  sendChangelogMessage(changelog_id) {
    const HTTP = arg1(dependencyMap[6]).HTTP;
    let obj = { url: Endpoints.CHANGELOG_MESSAGES, body: obj, rejectWithError: true };
    obj = { changelog_id };
    HTTP.post(obj);
  },
  fetchChangelogConfig() {
    const HTTP = arg1(dependencyMap[6]).HTTP;
    return HTTP.get({ url: "https://cdn.discordapp.com/changelogs/config_" + ChangelogPlatforms.MOBILE + ".json?" + cacheBustParam(), rejectWithError: true });
  },
  fetchChangelog(arg0, locale, arg2) {
    let flag = arg2;
    let flag2 = arg3;
    locale = arg0;
    const importDefault = locale;
    if (arg2 === undefined) {
      flag = false;
    }
    const dependencyMap = flag;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const callback = flag2;
    let closure_4 = this;
    return callback(async () => {
      if (null != changelog.getChangelog(callback, callback2)) {
        return null;
      } else {
        const tmp = closure_2 ? closure_6.DESKTOP : closure_6.MOBILE;
        let str = "";
        if (!closure_3) {
          const _HermesInternal = HermesInternal;
          str = "?" + callback3();
        }
        const HTTP = callback(closure_2[6]).HTTP;
        let obj = {};
        const _HermesInternal2 = HermesInternal;
        obj.url = "https://cdn.discordapp.com/changelogs/" + tmp + "/" + callback + "/" + callback2 + ".json" + str;
        obj.rejectWithError = true;
        const tmp14 = yield HTTP.get(obj);
        obj = { type: "CHANGE_LOG_FETCH_SUCCESS", id: callback, changelog: tmp14.body };
        callback2(closure_2[4]).dispatch(obj);
        return tmp14.body;
      }
    })();
  }
};
