// Module ID: 1331
// Function ID: 15576
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 1316, 662, 653, 686, 44, 1318, 507, 664, 3, 1332, 587, 1319, 1282, 1317, 1333, 675, 1334, 1335, 1336, 2]
// Exports: addDismissedContent, checkAllDismissedContents, clearDismissedContents, clearGuildDismissedContents, clearGuildThemeSourcePreferenceOverride, markUserSettingsLoadOkayForDevelopment, removeDismissedContent, removeDismissedRecurringContent, setDefaultGuildThemePreference, updateGuildDismissedContent, updateUserChannelSettings

// Module 1331 (_createForOfIteratorHelperLoose)
import closure_3 from "ME";
import dispatcher from "dispatcher";
import invariant from "invariant";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MAX_FAVORITES from "MAX_FAVORITES";
import ME from "ME";
import importDefaultResult from "dispatcher";
import importDefaultResult1 from "dispatcher";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function updateUserAllGuildSettings(arg0, INFREQUENT_USER_ACTION) {
  let closure_0 = arg0;
  return tmp9.updateAsync("guilds", (arg0) => callback(arg0), INFREQUENT_USER_ACTION);
}
function updateUserGuildSettings(arg0, arg1, INFREQUENT_USER_ACTION) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return tmp9.updateAsync("guilds", (guilds) => callback(outer1_2[8]).mutateUserGuildSettingsInternal(guilds, callback, closure_1), INFREQUENT_USER_ACTION);
}
function setGuildThemeSourcePreferenceOverride(id, UNSPECIFIED) {
  let closure_0 = UNSPECIFIED;
  return updateUserGuildSettings(id, (arg0) => {
    arg0.guildThemeSourcePreference = closure_0;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, arg1) {
  return _updateRecurringDismissibleContentState(...arguments);
}
async function _updateRecurringDismissibleContentState(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return yield outer2_12.updateAsync("userContent", (recurringDismissibleContentStates) => {
    const merged = Object.assign(recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0]);
    const merged1 = Object.assign(closure_1);
    recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0] = {};
  }, outer2_8.INFREQUENT_USER_ACTION);
}
async function _updateGuildDismissedContent(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return yield outer2_16(arg1, (guildDismissibleContentStates) => {
    const merged = Object.assign(guildDismissibleContentStates.guildDismissibleContentStates[closure_0]);
    const merged1 = Object.assign(closure_1);
    guildDismissibleContentStates.guildDismissibleContentStates[closure_0] = {};
  }, outer2_8.INFREQUENT_USER_ACTION);
}
const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const UserSettingsDelay = MAX_FAVORITES.UserSettingsDelay;
({ AbortCodes: closure_9, Endpoints: closure_10, AnalyticEvents: closure_11 } = ME);
let timestamp = Date.now();
const subscription = require("dispatcher").subscribe("CONNECTION_OPEN", () => {
  const timestamp = Date.now();
});
const subscription1 = require("dispatcher").subscribe("CONNECTION_CLOSED", () => {
  const timestamp = Date.now();
});
if ("undefined" !== typeof document) {
  const _document = document;
  const listener = document.addEventListener("mousedown", () => {

  });
  const _document2 = document;
  const listener1 = document.addEventListener("keydown", () => {

  });
}
let tmp9 = (() => {
  class UserSettingsProtoActionCreators {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_4(this, UserSettingsProtoActionCreators);
      this.ProtoClass = arg0;
      this.type = arg1;
      this.beforeSendCallbacks = [];
      this.lastSendTime = 0;
      this.persistChanges = outer1_3(async () => {
        let editInfo;
        callback2(UserSettingsProtoActionCreators[7])(true, "this cannot run in the overlay");
        const logger = outer1_0.logger;
        logger.log("Persisting proto");
        editInfo = outer1_0.getEditInfo().editInfo;
        if (null != editInfo.protoToSave) {
          const item = outer1_0.beforeSendCallbacks.forEach((processProto) => processProto.processProto(editInfo.protoToSave));
          let obj = callback(UserSettingsProtoActionCreators[8]);
          const protoToB64Result = obj.protoToB64(outer1_0.ProtoClass, tmp3.protoToSave);
          if (null != protoToB64Result) {
            if ("" !== tmp12) {
              outer1_0.saveLastSendTime();
              const HTTP = callback(UserSettingsProtoActionCreators[9]).HTTP;
              obj = { url: outer3_10.USER_SETTINGS_PROTO(outer1_0.type) };
              obj = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
              obj.body = obj;
              obj.rejectWithError = false;
              const body = yield HTTP.patch(obj).body;
              if (body.out_of_date) {
                const logger4 = outer1_0.logger;
                logger4.log("Proto was out of date, discarding changes");
              }
              const cleanupFuncs = outer1_0.getEditInfo().editInfo.cleanupFuncs;
              const item1 = cleanupFuncs.forEach((arg0) => arg0());
              const b64ToProtoResult = callback(UserSettingsProtoActionCreators[8]).b64ToProto(outer1_0.ProtoClass, body.settings);
              if (null != b64ToProtoResult) {
                const obj1 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: true, wasSaved: true, local: false };
                const obj2 = { proto: b64ToProtoResult, type: outer1_0.type };
                obj1.settings = obj2;
                callback2(UserSettingsProtoActionCreators[6]).dispatch(obj1);
                const obj5 = callback2(UserSettingsProtoActionCreators[6]);
              }
              const obj4 = callback(UserSettingsProtoActionCreators[8]);
            }
          }
          const logger3 = outer1_0.logger;
          logger3.log("Not persisting proto because there is nothing to change");
          const beforeSendCallbacks = outer1_0.beforeSendCallbacks;
        } else {
          const logger2 = outer1_0.logger;
          logger2.log("Not persisting proto because the proto was null");
        }
      });
      tmp2 = f15609(UserSettingsProtoActionCreators[11]);
      tmp2 = new tmp2(this.ProtoClass.typeName);
      this.logger = tmp2;
      return;
    }
  }
  let obj = {
    key: "getEditInfo",
    value() {
      return outer1_6.getFullState()[this.type];
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getCurrentValue",
    value() {
      return this.getEditInfo().proto;
    }
  };
  items[1] = obj;
  obj = { key: "updateAsync" };
  let closure_1 = callback(async function(arg0, arg1, arg2, arg3) {
    const self = this;
    yield self.loadIfNecessary();
    let obj = callback(UserSettingsProtoActionCreators[12]);
    const protoFieldClass = obj.getProtoFieldClass(self.ProtoClass, arg0);
    const modifiedProto = callback(UserSettingsProtoActionCreators[12]).createModifiedProto(self.getCurrentValue()[arg0], arg1, protoFieldClass, self.ProtoClass, arg0);
    if (null != modifiedProto) {
      const logger = self.logger;
      const _String = String;
      const _HermesInternal = HermesInternal;
      logger.log("Updating " + String(arg0) + " with delay " + arg2);
      obj = { delaySeconds: arg2 };
      let tmp5 = arg2 === outer2_8.AUTOMATED;
      if (!tmp5) {
        tmp5 = arg2 === outer2_8.DAILY;
      }
      obj.jitter = tmp5;
      obj.onError = arg3;
      self.markDirty(modifiedProto, obj);
    }
  });
  obj.value = function updateAsync(favorites, arg1, INFREQUENT_USER_ACTION, onSaveFailed) {
    return callback2(...arguments);
  };
  items[2] = obj;
  items[3] = {
    key: "markDirty",
    value(proto, dispatch) {
      const self = this;
      callback2(UserSettingsProtoActionCreators[7])(true, "this cannot run in the overlay");
      const editInfo = this.getEditInfo().editInfo;
      let obj = { timeout: editInfo.timeout };
      if (editInfo.loaded) {
        if (false !== dispatch.dispatch) {
          obj = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, partial: true, local: true };
          obj = { type: self.type, proto };
          obj.settings = obj;
          callback2(UserSettingsProtoActionCreators[6]).dispatch(obj);
          const obj2 = callback2(UserSettingsProtoActionCreators[6]);
        }
        const delaySeconds = dispatch.delaySeconds;
        let num2 = 0;
        if (null != delaySeconds) {
          num2 = delaySeconds;
        }
        if (tmp7) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj.timeout);
          obj.timeout = undefined;
        }
        if (null == obj.timeout) {
          const result = num2 * callback2(UserSettingsProtoActionCreators[10]).Millis.SECOND;
          let sum = result;
          if (dispatch.jitter) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const random = Math.random();
            sum = result + Math.floor(random * Math.min(result, 30 * callback2(UserSettingsProtoActionCreators[10]).Millis.SECOND));
          }
          const logger = self.logger;
          logger.log("Scheduling save from markDirty");
          const _setTimeout = setTimeout;
          obj.timeout = setTimeout(self.persistChanges, sum);
          obj.timeoutDelay = num2;
        }
        if (null != dispatch.cleanup) {
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(dispatch.cleanup, HermesBuiltin.arraySpread(editInfo.cleanupFuncs, 0));
          obj.cleanupFuncs = items;
        }
        let hasItem = null == dispatch.onError;
        if (!hasItem) {
          hasItem = editInfo.errorCallbacks.includes(dispatch.onError);
          const errorCallbacks = editInfo.errorCallbacks;
        }
        if (!hasItem) {
          const items1 = [];
          arraySpreadResult = HermesBuiltin.arraySpread(editInfo.errorCallbacks, 0);
          items1[arraySpreadResult] = dispatch.onError;
          const sum1 = arraySpreadResult + 1;
          obj.errorCallbacks = items1;
        }
        if (null == editInfo.protoToSave) {
          obj.protoToSave = proto;
        } else {
          obj.protoToSave = callback(UserSettingsProtoActionCreators[8]).mergeTopLevelFields(self.ProtoClass, editInfo.protoToSave, proto);
          const obj5 = callback(UserSettingsProtoActionCreators[8]);
        }
        self.dispatchChanges(obj);
      } else {
        const _Error = Error;
        throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
      }
    }
  };
  items[4] = {
    key: "dispatchChanges",
    value(changes) {
      let obj = callback2(UserSettingsProtoActionCreators[6]);
      obj = { changes, type: this.type };
      obj.dispatch({ type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: obj });
    }
  };
  items[5] = {
    key: "saveLastSendTime",
    value() {
      const Storage = callback(UserSettingsProtoActionCreators[13]).Storage;
      let obj = Storage.get("UserSettingsProtoLastWriteTimes");
      if (null == obj) {
        obj = {};
      }
      obj[this.type] = Date.now();
      const Storage2 = callback(UserSettingsProtoActionCreators[13]).Storage;
      const result = Storage2.set("UserSettingsProtoLastWriteTimes", obj);
    }
  };
  items[6] = {
    key: "loadIfUncached",
    value(FRECENCY_AND_FAVORITES_SETTINGS) {
      const self = this;
      let hasLoadedResult = outer1_6.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS);
      if (hasLoadedResult) {
        hasLoadedResult = true !== arg1;
      }
      if (!hasLoadedResult) {
        const ifNecessary = self.loadIfNecessary(arg1);
      }
    }
  };
  let obj5 = { key: "loadIfNecessary" };
  let closure_0 = callback(async function(arg0) {
    let cleanupFuncs;
    let proto;
    const self = this;
    const editInfo = self.getEditInfo().editInfo;
    const logger = self.logger;
    logger.log("Loading proto");
    self.dispatchChanges({ loading: true });
    const HTTP = callback(UserSettingsProtoActionCreators[9]).HTTP;
    let obj = { url: outer2_10.USER_SETTINGS_PROTO(self.type), rejectWithError: false };
    const b64ToProtoResult = callback(UserSettingsProtoActionCreators[8]).b64ToProto(self.ProtoClass, yield HTTP.get(obj).body.settings);
    if (null == b64ToProtoResult) {
      self.dispatchChanges({ loading: false, loaded: true });
    } else {
      const runMigrationsResult = callback(UserSettingsProtoActionCreators[8]).runMigrations(tmp4, callback2(UserSettingsProtoActionCreators[14])[self.type]);
      const isDirty = runMigrationsResult.isDirty;
      ({ proto, cleanupFuncs } = runMigrationsResult);
      const obj3 = callback(UserSettingsProtoActionCreators[8]);
      obj = { type: "USER_SETTINGS_PROTO_UPDATE" };
      obj = { type: self.type, proto: tmp4 };
      obj.settings = obj;
      let tmp5 = isDirty;
      if (!isDirty) {
        tmp5 = arg0;
      }
      obj.resetEditInfo = tmp5;
      obj.local = false;
      yield callback2(UserSettingsProtoActionCreators[6]).dispatch(obj);
      if (isDirty) {
        const result = self.markDirtyFromMigration(proto, cleanupFuncs);
      }
      return b64ToProtoResult;
    }
    const obj2 = callback(UserSettingsProtoActionCreators[8]);
  });
  obj5.value = function loadIfNecessary(arg0) {
    return callback(...arguments);
  };
  items[7] = obj5;
  items[8] = {
    key: "markDirtyFromMigration",
    value(arg0, cleanup) {
      callback2(UserSettingsProtoActionCreators[7])(true, "this cannot run in the overlay");
      const logger = this.logger;
      logger.log("Marking dirty due to migrates");
      callback2(UserSettingsProtoActionCreators[7])(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations");
      this.markDirty(arg0, { cleanup, dispatch: false, delaySeconds: outer1_8.AUTOMATED, jitter: true });
    }
  };
  items[9] = {
    key: "markDirtyIfHasPendingChange",
    value(cleanup) {
      let ProtoClass;
      let markDirty;
      const self = this;
      if (beforeSendCallbacks.some((hasChanges) => hasChanges.hasChanges())) {
        ({ ProtoClass, markDirty } = self);
        const obj = { dispatch: false, delaySeconds: 0, cleanup };
        markDirty(ProtoClass.create(), obj);
      }
    }
  };
  items[10] = {
    key: "scheduleSaveFromOfflineEdit",
    value() {
      callback2(UserSettingsProtoActionCreators[7])(true, "this cannot run in the overlay");
      const logger = this.logger;
      logger.log("Scheduling save from offline edit");
      const editInfo = this.getEditInfo().editInfo;
      callback2(UserSettingsProtoActionCreators[7])(null != editInfo.protoToSave, "protoToSave cannot be null");
      callback2(UserSettingsProtoActionCreators[7])(null != editInfo.offlineEditDataVersion, "offlineEditDataVersion cannot be null");
      callback2(UserSettingsProtoActionCreators[7])(null == editInfo.timeout, "timeout must not be set already");
      const sum = 5000 + Math.floor(5000 * Math.random());
      this.dispatchChanges({ timeout: setTimeout(this.persistChanges, sum), timeoutDelay: sum });
    }
  };
  return callback2(UserSettingsProtoActionCreators, items);
})();
tmp9 = new tmp9(require("_callSuper").PreloadedUserSettings, UserSettingsTypes.PRELOADED_USER_SETTINGS);
let closure_12 = tmp9;
tmp9 = new tmp9(require("_callSuper").FrecencyUserSettings, UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS);
let result = require("_defineProperties").fileFinishedImporting("modules/user_settings/UserSettingsProtoActionCreators.tsx");

export const UserSettingsDelay = require("MAX_FAVORITES").UserSettingsDelay;
export function markUserSettingsLoadOkayForDevelopment() {

}
export const UserSettingsProtoActionCreators = tmp9;
export const PreloadedUserSettingsActionCreators = tmp9;
export const FrecencyUserSettingsActionCreators = tmp9;
export const UserSettingsActionCreatorsByType = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: tmp9, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: tmp9 };
export { updateUserAllGuildSettings };
export { updateUserGuildSettings };
export const setDefaultGuildThemePreference = function setDefaultGuildThemePreference(arg0) {
  let closure_0 = arg0;
  return tmp9.updateAsync("appearance", (defaultGuildThemePreference) => {
    let UNSPECIFIED = defaultGuildThemePreference.defaultGuildThemePreference;
    if (null == UNSPECIFIED) {
      UNSPECIFIED = callback(outer1_2[15]).GuildThemeSourcePreference.UNSPECIFIED;
    }
    if (UNSPECIFIED === callback) {
      return false;
    } else {
      defaultGuildThemePreference.defaultGuildThemePreference = callback;
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { setGuildThemeSourcePreferenceOverride };
export const clearGuildThemeSourcePreferenceOverride = function clearGuildThemeSourcePreferenceOverride(id) {
  return setGuildThemeSourcePreferenceOverride(id, require(1282) /* _callSuper */.GuildThemeSourcePreference.UNSPECIFIED);
};
export const updateUserChannelSettings = function updateUserChannelSettings(arg0, arg1, arg2, arg3) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return updateUserGuildSettings(arg0, (channels) => callback(outer1_2[8]).mutateUserChannelSettingsInternal(channels, callback, closure_1), arg3);
};
export const addDismissedContent = function addDismissedContent(closure_0) {
  (function trackDismissibleContentDismissedBeforeConnectionOpen(closure_0) {
    if (!outer1_6.hasLoaded(outer1_7.PRELOADED_USER_SETTINGS)) {
      const userContent = outer1_6.settings.userContent;
      let dismissedContents;
      if (null != userContent) {
        dismissedContents = userContent.dismissedContents;
      }
      let hasBitResult = null != dismissedContents;
      if (hasBitResult) {
        let obj = callback(outer1_2[17]);
        hasBitResult = obj.hasBit(dismissedContents, closure_0);
      }
      if (!hasBitResult) {
        obj = { content_type: callback(outer1_2[19]).DismissibleContent[closure_0] };
        outer1_1(outer1_2[18]).track(outer1_11.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, obj);
      }
    }
  })(closure_0);
  return tmp9.updateAsync("userContent", (dismissedContents) => {
    if (obj.hasBit(dismissedContents.dismissedContents, callback)) {
      return false;
    } else {
      dismissedContents.dismissedContents = callback(outer1_2[17]).addBit(dismissedContents.dismissedContents, callback);
    }
    obj = callback(outer1_2[17]);
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { updateRecurringDismissibleContentState };
export const updateGuildDismissedContent = function updateGuildDismissedContent(content, guildId, arg2) {
  return _updateGuildDismissedContent(...arguments);
};
export const removeDismissedContent = function removeDismissedContent(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  let closure_0 = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
  return tmp9.updateAsync("userContent", (dismissedContents) => {
    if (obj.hasBit(dismissedContents.dismissedContents, DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
      dismissedContents.dismissedContents = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL(outer1_2[17]).removeBit(dismissedContents.dismissedContents, DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
    } else {
      return false;
    }
    obj = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL(outer1_2[17]);
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const removeDismissedRecurringContent = function removeDismissedRecurringContent(GUILD_POWERUP_NOTIFICATION) {
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
};
export const clearGuildDismissedContents = function clearGuildDismissedContents() {
  return updateUserAllGuildSettings((guilds) => {
    if (null != guilds.guilds) {
      const _Object = Object;
      const values = Object.values(guilds.guilds);
      for (let num = 0; num < values.length; num = num + 1) {
        let tmp2 = values[num];
        if (null != tmp2) {
          tmp2.guildDismissibleContentStates = {};
          let _Uint8Array = Uint8Array;
          let tmp3 = new.target;
          let tmp4 = new.target;
          let uint8Array = new Uint8Array();
          let tmp6 = uint8Array;
          tmp2.dismissedGuildContent = uint8Array;
        }
      }
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearDismissedContents = function clearDismissedContents() {
  return tmp9.updateAsync("userContent", (arg0) => {
    const uint8Array = new Uint8Array();
    arg0.dismissedContents = uint8Array;
    arg0.recurringDismissibleContentStates = {};
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const checkAllDismissedContents = function checkAllDismissedContents() {
  return tmp9.updateAsync("userContent", (recurringDismissibleContentStates) => {
    let iter3;
    const uint8Array = new Uint8Array();
    const tmp2 = outer1_13(outer1_0(outer1_2[20]).ALL_DISMISSIBLE_CONTENT);
    const iter = tmp2();
    let iter2 = iter;
    let tmp3 = uint8Array;
    let tmp4 = uint8Array;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp5 = outer1_0;
        let tmp6 = outer1_2;
        let obj = outer1_0(outer1_2[20]);
        if (obj.isSingleUseDismissibleContent(value)) {
          let tmp10 = outer1_0;
          let tmp11 = outer1_2;
          let obj3 = outer1_0(outer1_2[17]);
          let addBitResult = obj3.addBit(tmp3, value);
        } else {
          let tmp7 = outer1_0;
          let tmp8 = outer1_2;
          let obj2 = outer1_0(outer1_2[21]);
          recurringDismissibleContentStates.recurringDismissibleContentStates[value] = obj2.getDismissedRecurringDismissibleContentState(value);
          addBitResult = tmp3;
        }
        iter3 = tmp2();
        tmp3 = addBitResult;
        iter2 = iter3;
        tmp4 = addBitResult;
      } while (!iter3.done);
    }
    recurringDismissibleContentStates.dismissedContents = tmp4;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
