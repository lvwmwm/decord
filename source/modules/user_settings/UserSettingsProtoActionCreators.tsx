// Module ID: 1331
// Function ID: 15575
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: addDismissedContent, checkAllDismissedContents, clearDismissedContents, clearGuildDismissedContents, clearGuildThemeSourcePreferenceOverride, markUserSettingsLoadOkayForDevelopment, removeDismissedContent, removeDismissedRecurringContent, setDefaultGuildThemePreference, updateGuildDismissedContent, updateUserChannelSettings

// Module 1331 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  INFREQUENT_USER_ACTION = arg0;
  return tmp9.updateAsync("guilds", (arg0) => arg0(arg0), INFREQUENT_USER_ACTION);
}
function updateUserGuildSettings(arg0, arg1, INFREQUENT_USER_ACTION) {
  arg1 = arg0;
  const importDefault = arg1;
  return tmp9.updateAsync("guilds", (guilds) => guilds(closure_2[8]).mutateUserGuildSettingsInternal(guilds, guilds, arg1), INFREQUENT_USER_ACTION);
}
function setGuildThemeSourcePreferenceOverride(id, UNSPECIFIED) {
  return updateUserGuildSettings(id, (arg0) => {
    arg0.guildThemeSourcePreference = arg1;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, arg1) {
  return _updateRecurringDismissibleContentState(...arguments);
}
async function _updateRecurringDismissibleContentState(arg0, arg1, arg2) {
  return yield closure_12.updateAsync("userContent", (recurringDismissibleContentStates) => {
    const merged = Object.assign(recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0]);
    const merged1 = Object.assign(arg1);
    recurringDismissibleContentStates.recurringDismissibleContentStates[recurringDismissibleContentStates] = {};
  }, closure_8.INFREQUENT_USER_ACTION);
}
async function _updateGuildDismissedContent(arg0, arg1, arg2, arg3) {
  return yield closure_16(arg1, (guildDismissibleContentStates) => {
    const merged = Object.assign(guildDismissibleContentStates.guildDismissibleContentStates[closure_0]);
    const merged1 = Object.assign(arg2);
    guildDismissibleContentStates.guildDismissibleContentStates[guildDismissibleContentStates] = {};
  }, closure_8.INFREQUENT_USER_ACTION);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[4]);
const UserSettingsTypes = tmp2.UserSettingsTypes;
const UserSettingsDelay = tmp2.UserSettingsDelay;
({ AbortCodes: closure_9, Endpoints: closure_10, AnalyticEvents: closure_11 } = arg1(dependencyMap[5]));
const timestamp = Date.now();
const tmp3 = arg1(dependencyMap[5]);
const subscription = importDefault(dependencyMap[6]).subscribe("CONNECTION_OPEN", () => {
  const timestamp = Date.now();
});
const importDefaultResult = importDefault(dependencyMap[6]);
const subscription1 = importDefault(dependencyMap[6]).subscribe("CONNECTION_CLOSED", () => {
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
let tmp9 = () => {
  class UserSettingsProtoActionCreators {
    constructor(arg0, arg1) {
      f15615 = this;
      tmp = closure_4(this, UserSettingsProtoActionCreators);
      this.ProtoClass = arg0;
      this.type = arg1;
      this.beforeSendCallbacks = [];
      this.lastSendTime = 0;
      this.persistChanges = closure_3(async () => {
        let editInfo;
        callback(closure_2[7])(true, "this cannot run in the overlay");
        const logger = editInfo.logger;
        logger.log("Persisting proto");
        editInfo = editInfo.getEditInfo().editInfo;
        if (null != editInfo.protoToSave) {
          const item = editInfo.beforeSendCallbacks.forEach((processProto) => processProto.processProto(editInfo.protoToSave));
          let obj = editInfo(closure_2[8]);
          const protoToB64Result = obj.protoToB64(editInfo.ProtoClass, tmp3.protoToSave);
          if (null != protoToB64Result) {
            if ("" !== tmp12) {
              editInfo.saveLastSendTime();
              const HTTP = editInfo(closure_2[9]).HTTP;
              obj = { url: closure_10.USER_SETTINGS_PROTO(editInfo.type) };
              obj = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
              obj.body = obj;
              obj.rejectWithError = false;
              const body = yield HTTP.patch(obj).body;
              if (body.out_of_date) {
                const logger4 = editInfo.logger;
                logger4.log("Proto was out of date, discarding changes");
              }
              const cleanupFuncs = editInfo.getEditInfo().editInfo.cleanupFuncs;
              const item1 = cleanupFuncs.forEach((arg0) => arg0());
              const b64ToProtoResult = editInfo(closure_2[8]).b64ToProto(editInfo.ProtoClass, body.settings);
              if (null != b64ToProtoResult) {
                const obj1 = {};
                const obj2 = { proto: b64ToProtoResult, type: editInfo.type };
                obj1.settings = obj2;
                callback(closure_2[6]).dispatch(obj1);
                const obj5 = callback(closure_2[6]);
              }
              const obj4 = editInfo(closure_2[8]);
            }
          }
          const logger3 = editInfo.logger;
          logger3.log("Not persisting proto because there is nothing to change");
          const beforeSendCallbacks = editInfo.beforeSendCallbacks;
        } else {
          const logger2 = editInfo.logger;
          logger2.log("Not persisting proto because the proto was null");
        }
      });
      tmp2 = f15608(UserSettingsProtoActionCreators[11]);
      tmp2 = new tmp2(this.ProtoClass.typeName);
      this.logger = tmp2;
      return;
    }
  }
  const dependencyMap = UserSettingsProtoActionCreators;
  let obj = {
    key: "getEditInfo",
    value() {
      return closure_6.getFullState()[this.type];
    }
  };
  const items = [obj, , , , , , , , , , ];
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
    let obj = callback(closure_2[12]);
    const protoFieldClass = obj.getProtoFieldClass(self.ProtoClass, arg0);
    const modifiedProto = callback(closure_2[12]).createModifiedProto(self.getCurrentValue()[arg0], arg1, protoFieldClass, self.ProtoClass, arg0);
    if (null != modifiedProto) {
      const logger = self.logger;
      const _String = String;
      const _HermesInternal = HermesInternal;
      logger.log("Updating " + String(arg0) + " with delay " + arg2);
      obj = { delaySeconds: arg2 };
      let tmp5 = arg2 === constants.AUTOMATED;
      if (!tmp5) {
        tmp5 = arg2 === constants.DAILY;
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
          obj = {};
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
      let hasLoadedResult = closure_6.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS);
      if (hasLoadedResult) {
        hasLoadedResult = true !== arg1;
      }
      if (!hasLoadedResult) {
        const ifNecessary = self.loadIfNecessary(arg1);
      }
    }
  };
  const obj5 = { key: "loadIfNecessary" };
  let closure_0 = callback(async function(arg0) {
    let cleanupFuncs;
    let proto;
    const self = this;
    const editInfo = self.getEditInfo().editInfo;
    const logger = self.logger;
    logger.log("Loading proto");
    self.dispatchChanges({ loading: true });
    const HTTP = callback(closure_2[9]).HTTP;
    let obj = { url: closure_10.USER_SETTINGS_PROTO(self.type), rejectWithError: false };
    const b64ToProtoResult = callback(closure_2[8]).b64ToProto(self.ProtoClass, yield HTTP.get(obj).body.settings);
    if (null == b64ToProtoResult) {
      self.dispatchChanges({});
    } else {
      const runMigrationsResult = callback(closure_2[8]).runMigrations(tmp4, callback2(closure_2[14])[self.type]);
      const isDirty = runMigrationsResult.isDirty;
      ({ proto, cleanupFuncs } = runMigrationsResult);
      const obj3 = callback(closure_2[8]);
      obj = { type: "USER_SETTINGS_PROTO_UPDATE" };
      obj = { type: self.type, proto: tmp4 };
      obj.settings = obj;
      let tmp5 = isDirty;
      if (!isDirty) {
        tmp5 = arg0;
      }
      obj.resetEditInfo = tmp5;
      obj.local = false;
      yield callback2(closure_2[6]).dispatch(obj);
      if (isDirty) {
        const result = self.markDirtyFromMigration(proto, cleanupFuncs);
      }
      return b64ToProtoResult;
    }
    const obj2 = callback(closure_2[8]);
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
      this.markDirty(arg0, { cleanup, dispatch: false, delaySeconds: constants.AUTOMATED, jitter: true });
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
        const obj = { cleanup };
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
}();
tmp9 = new tmp9(arg1(dependencyMap[15]).PreloadedUserSettings, UserSettingsTypes.PRELOADED_USER_SETTINGS);
tmp9 = new tmp9(arg1(dependencyMap[16]).FrecencyUserSettings, UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS);
const importDefaultResult1 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_settings/UserSettingsProtoActionCreators.tsx");

export const UserSettingsDelay = arg1(dependencyMap[4]).UserSettingsDelay;
export function markUserSettingsLoadOkayForDevelopment() {

}
export const UserSettingsProtoActionCreators = tmp9;
export const PreloadedUserSettingsActionCreators = tmp9;
export const FrecencyUserSettingsActionCreators = tmp9;
export const UserSettingsActionCreatorsByType = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: tmp9, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: tmp9 };
export { updateUserAllGuildSettings };
export { updateUserGuildSettings };
export const setDefaultGuildThemePreference = function setDefaultGuildThemePreference(arg0) {
  const arg1 = arg0;
  return tmp9.updateAsync("appearance", (defaultGuildThemePreference) => {
    let UNSPECIFIED = defaultGuildThemePreference.defaultGuildThemePreference;
    if (null == UNSPECIFIED) {
      UNSPECIFIED = defaultGuildThemePreference(closure_2[15]).GuildThemeSourcePreference.UNSPECIFIED;
    }
    if (UNSPECIFIED === defaultGuildThemePreference) {
      return false;
    } else {
      defaultGuildThemePreference.defaultGuildThemePreference = defaultGuildThemePreference;
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { setGuildThemeSourcePreferenceOverride };
export const clearGuildThemeSourcePreferenceOverride = function clearGuildThemeSourcePreferenceOverride(id) {
  return setGuildThemeSourcePreferenceOverride(id, arg1(dependencyMap[15]).GuildThemeSourcePreference.UNSPECIFIED);
};
export const updateUserChannelSettings = function updateUserChannelSettings(arg0, arg1, arg2, arg3) {
  const importDefault = arg2;
  return updateUserGuildSettings(arg0, (channels) => arg1(closure_2[8]).mutateUserChannelSettingsInternal(channels, arg1, arg2), arg3);
};
export const addDismissedContent = function addDismissedContent(CHANNEL_NOTICE_INVITE) {
  const arg1 = CHANNEL_NOTICE_INVITE;
  function trackDismissibleContentDismissedBeforeConnectionOpen(CHANNEL_NOTICE_INVITE) {
    if (!closure_6.hasLoaded(constants.PRELOADED_USER_SETTINGS)) {
      const userContent = closure_6.settings.userContent;
      let dismissedContents;
      if (null != userContent) {
        dismissedContents = userContent.dismissedContents;
      }
      let hasBitResult = null != dismissedContents;
      if (hasBitResult) {
        let obj = CHANNEL_NOTICE_INVITE(closure_2[17]);
        hasBitResult = obj.hasBit(dismissedContents, CHANNEL_NOTICE_INVITE);
      }
      if (!hasBitResult) {
        obj = { content_type: CHANNEL_NOTICE_INVITE(closure_2[19]).DismissibleContent[CHANNEL_NOTICE_INVITE] };
        callback(closure_2[18]).track(constants2.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, obj);
      }
    }
  }(CHANNEL_NOTICE_INVITE);
  return tmp9.updateAsync("userContent", (dismissedContents) => {
    if (obj.hasBit(dismissedContents.dismissedContents, dismissedContents)) {
      return false;
    } else {
      dismissedContents.dismissedContents = dismissedContents(closure_2[17]).addBit(dismissedContents.dismissedContents, dismissedContents);
    }
    const obj = dismissedContents(closure_2[17]);
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { updateRecurringDismissibleContentState };
export const updateGuildDismissedContent = function updateGuildDismissedContent(content, guildId, arg2) {
  return _updateGuildDismissedContent(...arguments);
};
export const removeDismissedContent = function removeDismissedContent(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  const arg1 = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
  return tmp9.updateAsync("userContent", (dismissedContents) => {
    if (obj.hasBit(dismissedContents.dismissedContents, dismissedContents)) {
      dismissedContents.dismissedContents = dismissedContents(closure_2[17]).removeBit(dismissedContents.dismissedContents, dismissedContents);
    } else {
      return false;
    }
    const obj = dismissedContents(closure_2[17]);
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const removeDismissedRecurringContent = function removeDismissedRecurringContent(GUILD_POWERUP_NOTIFICATION) {
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, {});
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
    const tmp2 = callback2(callback(closure_2[20]).ALL_DISMISSIBLE_CONTENT);
    const iter = tmp2();
    let iter2 = iter;
    let tmp3 = uint8Array;
    let tmp4 = uint8Array;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp5 = closure_0;
        let tmp6 = closure_2;
        let obj = closure_0(closure_2[20]);
        if (obj.isSingleUseDismissibleContent(value)) {
          let tmp10 = closure_0;
          let tmp11 = closure_2;
          let obj3 = closure_0(closure_2[17]);
          let addBitResult = obj3.addBit(tmp3, value);
        } else {
          let tmp7 = closure_0;
          let tmp8 = closure_2;
          let obj2 = closure_0(closure_2[21]);
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
