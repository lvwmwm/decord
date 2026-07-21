// Module ID: 7915
// Function ID: 63059
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7915 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function trackApplicationUsage(applicationId) {
  const pendingUsages = closure_11.pendingUsages;
  pendingUsages.push({ key: applicationId, timestamp: Date.now() });
  importDefaultResult.track(applicationId);
  importDefaultResult.compute();
}
function handleUserSettingsProtoStoreChange() {
  const applicationFrecency = obj.frecencyWithoutFetchingLatest.applicationFrecency;
  let applications;
  if (null != applicationFrecency) {
    applications = applicationFrecency.applications;
  }
  if (null == applications) {
    applications = {};
  }
  importDefaultResult.overwriteHistory(importDefault(dependencyMap[11]).mapValues(applications, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), closure_11.pendingUsages);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const UserSettingsTypes = arg1(dependencyMap[8]).UserSettingsTypes;
const items = [arg1(dependencyMap[9]).ApplicationCommandType.CHAT, arg1(dependencyMap[9]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
let closure_11 = { pendingUsages: [] };
let importDefaultResult = importDefault(dependencyMap[10]);
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: arg1(dependencyMap[7]).FREQUENCY_ITEM_LIMIT
};
importDefaultResult = new importDefaultResult(obj);
let tmp4 = (PersistedStore) => {
  class ApplicationFrecencyStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationFrecencyStore);
      obj = closure_5(ApplicationFrecencyStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ApplicationFrecencyStore;
  callback2(ApplicationFrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      self.waitFor(closure_7, closure_8);
      const items = [closure_8];
      self.syncWith(items, closure_15);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return pendingUsages.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplicationFrecencyWithoutLoadingLatest",
    value() {
      return closure_12;
    }
  };
  items[4] = {
    key: "getScoreWithoutLoadingLatest",
    value(id) {
      const score = score.getScore(id);
      let num = 0;
      if (null != score) {
        num = score;
      }
      return num;
    }
  };
  items[5] = {
    key: "getTopApplicationsWithoutLoadingLatest",
    value() {
      return score.frequently;
    }
  };
  return callback(ApplicationFrecencyStore, items);
}(importDefault(dependencyMap[12]).PersistedStore);
tmp4.displayName = "ApplicationFrecencyStore";
tmp4.persistKey = "ApplicationFrecency";
obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    command = command.command;
    const tmp = !items.includes(command.type);
    let tmp2 = !tmp;
    if (!tmp) {
      const launchState = launchState.getLaunchState(command.applicationId);
      if (null == launchState || !launchState.isLaunching) {
        trackApplicationUsage(command.applicationId);
      }
      tmp2 = tmp6;
    }
    return tmp2;
  },
  EMBEDDED_ACTIVITY_OPEN: function handleEmbeddedActivityOpen(applicationId) {
    trackApplicationUsage(applicationId.applicationId);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_11.pendingUsages = [];
      }
    }
    return false;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[13]), obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/applications/ApplicationFrecencyStore.tsx");

export default tmp4;
