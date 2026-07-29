// Module ID: 9933
// Function ID: 9934
// Name: _addOrUpdateSavedMessage
// Dependencies: [5, 9553, 676, 9934, 9557, 6199, 6201, 9935, 4528, 1236, 9936, 9554, 3890, 6730, 4153, 9955, 2]
// Exports: addOrUpdateSavedMessage, removeSavedMessage

// Module 9933 (_addOrUpdateSavedMessage)
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet";
import getTimeSafe from "getTimeSafe";
import { AbortCodes } from "ME";
import { SAVED_MESSAGES_MAX } from "SAVED_MESSAGES_MAX";

const require = arg1;
function _addOrUpdateSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      if (savedMessage === 2) {
        savedMessage = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          savedMessage = 2;
          if (0 === BookmarkIcon) {
            if (arg0 === 1) {
              savedMessage = 3;
              throw arg1;
            } else if (arg0 === 2) {
              savedMessage = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp5;
              let lib = tmp2;
              let displayToast;
              lib = undefined;
              displayToast = displayToast.displayToast;
              lib = Object.assign(displayToast, Object.create(null));
              dependencyMap = undefined;
              BookmarkIcon = undefined;
              BookmarkIcon = 1;
              savedMessage = 1;
              return { value: "ct", done: null };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                savedMessage = 3;
                throw arg1;
              } else if (arg0 === 2) {
                savedMessage = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (null == savedMessage.getSavedMessage(lib.channelId, lib.messageId)) {
                  if (!lib(9557)()) {
                    lib(6199)(displayToast(6201).EntitlementFeatureNames.SAVED_MESSAGES);
                    savedMessage = 3;
                    const tmp39 = lib(6199);
                  }
                }
                let obj3 = displayToast(9935);
                BookmarkIcon = 2;
                savedMessage = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj3.upsertSavedMessage(lib).catch((body) => {
                  let code;
                  if (body != null) {
                    body = body.body;
                    if (body != null) {
                      code = body.code;
                    }
                  }
                  if (code === outer1_5.TOO_MANY_SAVED_MESSAGES) {
                    let obj = callback(_undefined[8]);
                    obj = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null };
                    const intl2 = displayToast(_undefined[9]).intl;
                    obj[0] = intl2.string(displayToast(_undefined[9]).t.mlbiZW);
                    const intl3 = displayToast(_undefined[9]).intl;
                    obj = { max: null };
                    obj[0] = outer1_6;
                    obj[1] = intl3.formatToPlainString(displayToast(_undefined[9]).t["1zVbEG"], obj);
                    const intl4 = displayToast(_undefined[9]).intl;
                    obj[2] = intl4.string(displayToast(_undefined[9]).t.BddRzS);
                    const intl5 = displayToast(_undefined[9]).intl;
                    obj[3] = intl5.string(displayToast(_undefined[9]).t.ZGbTcy);
                    obj[4] = function onCancel() {
                      if (null != dueAt.dueAt) {
                        let BOOKMARK = tmp(tmp2[11]).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = tmp(tmp2[11]).SavedMessageSortTypes.BOOKMARK;
                      }
                      return outer1_0(outer1_2[10]).showForLaterModal(BOOKMARK);
                    };
                    obj.show(obj);
                  } else {
                    const obj1 = { key: "SAVED_MESSAGE_CREATE_ERROR", IconComponent: null, content: null };
                    obj1[1] = displayToast(_undefined[13]).CircleErrorIcon;
                    let message;
                    if (body != null) {
                      const body2 = body.body;
                      if (body2 != null) {
                        message = body2.message;
                      }
                    }
                    if (message == null) {
                      const intl = tmp11(tmp10[9]).intl;
                      message = intl.string(tmp11(tmp10[9]).t.R0RpRX);
                    }
                    obj1[2] = message;
                    callback(_undefined[12]).open(obj1);
                    const obj4 = callback(_undefined[12]);
                  }
                  return null;
                });
                return obj3;
              }
            } else if (arg0 === 1) {
              savedMessage = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (null != arg1) {
                if (displayToast) {
                  if (null != lib.dueAt) {
                    let intl2 = displayToast(1236).intl;
                    let stringResult = intl2.string(displayToast(1236).t.i1IsOy);
                  } else {
                    let intl = displayToast(1236).intl;
                    stringResult = intl.string(displayToast(1236).t.DQjes4);
                  }
                  dependencyMap = stringResult;
                  if (null != lib.dueAt) {
                    BookmarkIcon = displayToast(4153).ClockIcon;
                  } else {
                    BookmarkIcon = displayToast(9955).BookmarkIcon;
                  }
                  obj = lib(3890);
                  let obj4 = { key: "SAVED_MESSAGE_CREATE_SUCCESS", IconComponent: null, content: null };
                  obj4[1] = BookmarkIcon;
                  obj4[2] = dependencyMap;
                  obj.open(obj4);
                }
              }
            }
            savedMessage = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp51) {
          savedMessage = tmp;
          throw tmp51;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _addOrUpdateSavedMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              closure_2 = undefined;
              ({ displayToast: c0, isReminder: c1 } = callback);
              closure_2 = Object.assign(callback, Object.create(null));
              c3 = undefined;
              c4 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let obj3 = callback(closure_2[7]);
              c3 = 2;
              c4 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.deleteSavedMessage(closure_2).catch((body) => {
                let obj = _undefined2(3890);
                obj = { key: "SAVED_MESSAGE_REMOVE_ERROR", IconComponent: _undefined(6730).CircleErrorIcon, content: null };
                let message;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    message = body.message;
                  }
                }
                if (message == null) {
                  const intl = tmp2(1236).intl;
                  message = intl.string(tmp2(1236).t.R0RpRX);
                }
                obj[2] = message;
                obj.open(obj);
                return null;
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            if (null != arg1) {
              if (callback) {
                if (null == closure_2.dueAt) {
                  if (!callback2) {
                    let intl = callback(closure_2[9]).intl;
                    let stringResult = intl.string(callback(closure_2[9]).t["5KOMiV"]);
                  }
                  c3 = stringResult;
                  if (null == closure_2.dueAt) {
                    if (!callback2) {
                      let ClockIcon = callback(closure_2[15]).BookmarkIcon;
                    }
                    c4 = ClockIcon;
                    obj = callback2(closure_2[12]);
                    const obj5 = { key: "SAVED_MESSAGE_REMOVE_SUCCESS", IconComponent: null, content: null };
                    obj5[1] = c4;
                    obj5[2] = c3;
                    obj.open(obj5);
                  }
                  ClockIcon = callback(closure_2[14]).ClockIcon;
                }
                const intl2 = callback(closure_2[9]).intl;
                stringResult = intl2.string(callback(closure_2[9]).t.D0tS02);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp45) {
          c4 = tmp;
          throw tmp45;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _removeSavedMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("ME").fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage(arg0) {
  const self = this;
  const apply = _addOrUpdateSavedMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeSavedMessage = function removeSavedMessage(saveData) {
  const self = this;
  const apply = _removeSavedMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
