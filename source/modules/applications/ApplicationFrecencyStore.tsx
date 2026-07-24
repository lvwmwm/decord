// Module ID: 8008
// Function ID: 63417
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1347, 1316, 4156, 662, 1881, 4214, 22, 566, 686, 2]

// Module 8008 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ApplicationTypes from "ApplicationTypes";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "DEFAULT_FRECENCY";

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
  importDefaultResult.overwriteHistory(importDefault(22).mapValues(applications, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), closure_11.pendingUsages);
}
let items = [require("PermissionOverwriteType").ApplicationCommandType.CHAT, require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT];
let closure_11 = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: require("ApplicationTypes").FREQUENCY_ITEM_LIMIT
};
importDefaultResult = new importDefaultResult(obj);
let tmp4 = ((PersistedStore) => {
  class ApplicationFrecencyStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationFrecencyStore);
      obj = outer1_5(ApplicationFrecencyStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationFrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const outer1_11 = arg0;
      }
      self.waitFor(outer1_7, outer1_8);
      const items = [outer1_8];
      self.syncWith(items, outer1_15);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return outer1_11.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplicationFrecencyWithoutLoadingLatest",
    value() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "getScoreWithoutLoadingLatest",
    value(id) {
      const score = outer1_12.getScore(id);
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
      return outer1_12.frequently;
    }
  };
  return callback(ApplicationFrecencyStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "ApplicationFrecencyStore";
tmp4.persistKey = "ApplicationFrecency";
obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    command = command.command;
    const tmp = !items.includes(command.type);
    let tmp2 = !tmp;
    if (!tmp) {
      launchState = launchState.getLaunchState(command.applicationId);
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
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/applications/ApplicationFrecencyStore.tsx");

export default tmp4;
