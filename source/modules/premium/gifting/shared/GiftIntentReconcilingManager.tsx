// Module ID: 16024
// Function ID: 123006
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16024 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const MessageTypes = arg1(dependencyMap[9]).MessageTypes;
let closure_13 = 10 * importDefault(dependencyMap[10]).Millis.SECOND;
let closure_14 = 5 * importDefault(dependencyMap[10]).Millis.MINUTE;
const tmp2 = (arg0) => {
  class GiftIntentReconcilingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, GiftIntentReconcilingManager);
      items1 = [...items];
      obj = closure_6(GiftIntentReconcilingManager);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GiftIntentReconcilingManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.onPostConnectionOpen();
            },
        CHANNEL_SELECT(arg0) {
              return tmp2Result.onChannelSelect(arg0);
            },
        GIFT_INTENT_DISMISSALS_FETCH_SUCCESS(arg0) {
              return tmp2Result.onReconcileSuccess(arg0);
            },
        GIFT_INTENT_DISMISSALS_FETCH_FAILURE() {
              return tmp2Result.onReconcileSettled(false);
            },
        LOGOUT() {
              return tmp2Result.onLogout();
            }
      };
      items2 = [, ];
      items2[0] = closure_11;
      items2[1] = () => tmp2Result.onPremiumGiftingIntentStoreChange();
      items3 = [];
      items3[0] = items2;
      map = new Map(items3);
      tmp2Result.stores = map;
      tmp8 = closure_1(closure_2[11]);
      tmp8 = new tmp8(closure_13, closure_14);
      tmp2Result.reconcileBackoff = tmp8;
      tmp2Result.isReconciling = false;
      tmp2Result.heldGiftingPromptSystemMessage = false;
      map1 = new Map();
      tmp2Result.lastReconciledDismissalAtMs = map1;
      tmp2Result.retryReconcileServerDismissals = () => {
        if (tmp2Result.isReconcileEligible("retryReconcileServerDismissals")) {
          const result = tmp2Result.attemptReconcileFetch();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = GiftIntentReconcilingManager;
  callback2(GiftIntentReconcilingManager, arg0);
  let obj = {
    key: "onPostConnectionOpen",
    value() {
      const lastReconciledDismissalAtMs = this.lastReconciledDismissalAtMs;
      lastReconciledDismissalAtMs.clear();
      const result = this.sendGiftingPromptSystemMessagesIfEligible();
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "onPremiumGiftingIntentStoreChange",
    value() {
      const result = this.maybeReconcileServerDismissals();
      const result1 = this.maybeRetryHeldGiftingPromptSystemMessage();
    }
  };
  items[1] = obj;
  obj = {
    key: "maybeReconcileServerDismissals",
    value() {
      const self = this;
      if (this.isReconcileEligible("maybeReconcileServerDismissals")) {
        if (!self.reconcileBackoff.pending) {
          const result = self.attemptReconcileFetch();
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isReconcileEligible",
    value(location) {
      let enabled = 0 !== store.getFriendAnniversaries().length;
      if (enabled) {
        const FriendshipAnniversaryBackendPersistenceExperiment = GiftIntentReconcilingManager(closure_2[12]).FriendshipAnniversaryBackendPersistenceExperiment;
        const obj = { location };
        enabled = FriendshipAnniversaryBackendPersistenceExperiment.getConfig(obj).enabled;
      }
      return enabled;
    }
  };
  items[4] = {
    key: "getServerDismissalTimestampMs",
    value() {
      const userContent = settings.settings.userContent;
      let prop;
      if (null != userContent) {
        prop = userContent.lastGiftIntentDismissedAtMs;
      }
      let str = "0";
      if (null != prop) {
        str = prop;
      }
      return Number(str);
    }
  };
  items[5] = {
    key: "attemptReconcileFetch",
    value() {
      const self = this;
      const serverDismissalTimestampMs = this.getServerDismissalTimestampMs();
      if (!tmp2) {
        self.isReconciling = true;
        const andReconcileGiftIntentDismissals = GiftIntentReconcilingManager(closure_2[13]).fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs);
        const obj = GiftIntentReconcilingManager(closure_2[13]);
      }
    }
  };
  items[6] = {
    key: "onReconcileSuccess",
    value(dismissals) {
      this.onReconcileSettled(true);
      const result = this.removeRemotelyDismissedGiftIntentCards(dismissals.dismissals);
    }
  };
  items[7] = {
    key: "onReconcileSettled",
    value(arg0) {
      this.isReconciling = false;
      const reconcileBackoff = this.reconcileBackoff;
      if (arg0) {
        reconcileBackoff.succeed();
      } else {
        reconcileBackoff.fail(tmp.retryReconcileServerDismissals);
      }
    }
  };
  items[8] = {
    key: "removeRemotelyDismissedGiftIntentCards",
    value(arg0) {
      let dismissedAtMs;
      let iter5;
      let targetId;
      const self = this;
      const tmp = callback4(arg0);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          ({ targetId, dismissedAtMs } = iter2.value);
          let lastReconciledDismissalAtMs = self.lastReconciledDismissalAtMs;
          let value = lastReconciledDismissalAtMs.get(targetId);
          let lastReconciledDismissalAtMs2 = self.lastReconciledDismissalAtMs;
          let num = 0;
          if (null != value) {
            num = value;
          }
          let result = lastReconciledDismissalAtMs2.set(targetId, Math.max(num, dismissedAtMs));
          let tmp9 = tmp2;
          let tmp10 = tmp3;
          let tmp11 = tmp4;
          let tmp12 = tmp5;
          let tmp13 = tmp6;
          if (null != value) {
            tmp9 = tmp2;
            tmp10 = tmp3;
            tmp11 = tmp4;
            tmp12 = tmp5;
            tmp13 = tmp6;
            if (dismissedAtMs > value) {
              let tmp22 = closure_10;
              let dMFromUserId = closure_10.getDMFromUserId(targetId);
              tmp9 = dMFromUserId;
              tmp10 = tmp3;
              tmp11 = tmp4;
              tmp12 = tmp5;
              tmp13 = tmp6;
              if (null != dMFromUserId) {
                let tmp24 = closure_15;
                let tmp25 = closure_8;
                let tmp26 = closure_15(closure_8.getMessages(dMFromUserId));
                let iter6 = tmp26();
                let iter4 = iter6;
                let tmp17 = tmp5;
                tmp9 = dMFromUserId;
                tmp10 = iter6;
                tmp11 = tmp26;
                tmp12 = tmp5;
                tmp13 = tmp6;
                if (!iter6.done) {
                  do {
                    value = iter4.value;
                    let tmp14 = closure_12;
                    let tmp15 = value.type === closure_12.GIFTING_PROMPT;
                    if (tmp15) {
                      let giftingPrompt = value.giftingPrompt;
                      let recipientUserId;
                      if (null != giftingPrompt) {
                        recipientUserId = giftingPrompt.recipientUserId;
                      }
                      tmp15 = recipientUserId === targetId;
                      tmp17 = giftingPrompt;
                    }
                    let tmp18 = tmp17;
                    if (tmp15) {
                      let tmp19 = closure_1;
                      let tmp20 = closure_2;
                      let obj = closure_1(closure_2[14]);
                      obj = { type: "MESSAGE_DELETE", id: value.id, channelId: dMFromUserId };
                      let dispatchResult = obj.dispatch(obj);
                    }
                    let iter3 = tmp26();
                    iter4 = iter3;
                    tmp9 = dMFromUserId;
                    tmp10 = iter3;
                    tmp11 = tmp26;
                    tmp12 = tmp17;
                    tmp13 = value;
                  } while (!iter3.done);
                }
              }
            }
          }
          iter5 = tmp();
          let tmp2 = tmp9;
          let tmp3 = tmp10;
          let tmp4 = tmp11;
          let tmp5 = tmp12;
          let tmp6 = tmp13;
          iter2 = iter5;
        } while (!iter5.done);
      }
    }
  };
  items[9] = {
    key: "onLogout",
    value() {
      const reconcileBackoff = this.reconcileBackoff;
      reconcileBackoff.cancel();
      this.isReconciling = false;
      this.heldGiftingPromptSystemMessage = false;
      const lastReconciledDismissalAtMs = this.lastReconciledDismissalAtMs;
      lastReconciledDismissalAtMs.clear();
    }
  };
  items[10] = {
    key: "maybeRetryHeldGiftingPromptSystemMessage",
    value() {
      const self = this;
      if (this.heldGiftingPromptSystemMessage) {
        const lastKnownGiftIntentDismissedAtMs = store.getLastKnownGiftIntentDismissedAtMs();
        if (lastKnownGiftIntentDismissedAtMs >= self.getServerDismissalTimestampMs()) {
          self.heldGiftingPromptSystemMessage = false;
          const result = self.sendGiftingPromptSystemMessagesIfEligible();
        }
      }
    }
  };
  items[11] = {
    key: "shouldHoldGiftingPromptSystemMessageForServerReconcile",
    value(location) {
      const self = this;
      const FriendshipAnniversaryBackendPersistenceExperiment = GiftIntentReconcilingManager(closure_2[12]).FriendshipAnniversaryBackendPersistenceExperiment;
      const tmp = !FriendshipAnniversaryBackendPersistenceExperiment.getConfig({ location }).enabled;
      let tmp2 = !tmp;
      if (!tmp) {
        const lastKnownGiftIntentDismissedAtMs = store.getLastKnownGiftIntentDismissedAtMs();
        tmp2 = lastKnownGiftIntentDismissedAtMs < self.getServerDismissalTimestampMs();
      }
      return tmp2;
    }
  };
  items[12] = {
    key: "trySendGiftingPromptSystemMessage",
    value(channelId, giftIntentType, recipientUserId, giftIntentSecondaryAction) {
      if (this.shouldHoldGiftingPromptSystemMessageForServerReconcile(arg4)) {
        this.heldGiftingPromptSystemMessage = true;
        let flag = false;
      } else {
        let obj = callback(closure_2[15]);
        obj = { giftIntentType, recipientUserId, giftIntentSecondaryAction };
        const result = obj.sendGiftingPromptSystemMessage(channelId, obj);
        flag = true;
      }
      return flag;
    }
  };
  return callback(GiftIntentReconcilingManager, items);
}(importDefault(dependencyMap[16]));
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx");

export default tmp2;
