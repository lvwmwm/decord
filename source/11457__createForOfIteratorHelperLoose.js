// Module ID: 11457
// Function ID: 89269
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useMessageRequestActions

// Module 11457 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ MessageRequestAnalyticsAction: closure_7, BATCH_REJECT_LIMIT: closure_8 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/message_request/hooks/useMessageRequestActions.tsx");

export const useMessageRequestActions = function useMessageRequestActions(user) {
  let tmp5;
  let tmp7;
  let tmp9;
  user = user.user;
  const arg1 = user;
  const onAcceptSuccess = user.onAcceptSuccess;
  const importDefault = onAcceptSuccess;
  const onRejectSuccess = user.onRejectSuccess;
  const dependencyMap = onRejectSuccess;
  const onError = user.onError;
  let closure_3 = onError;
  let AnalyticEvents;
  let _createForOfIteratorHelperLoose;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  const tmp = importDefault(dependencyMap[6])();
  [tmp5, closure_5] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(false), 2);
  [tmp7, closure_6] = callback(React.useState(false), 2);
  const tmp6 = callback(React.useState(false), 2);
  [tmp9, closure_7] = callback(React.useState(false), 2);
  const tmp10 = callback(React.useState(false), 2);
  let closure_8 = tmp10[1];
  let tmp11 = first;
  if (!first) {
    tmp11 = tmp5;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  AnalyticEvents = tmp11;
  const items = [tmp11, onAcceptSuccess, onError];
  callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  _createForOfIteratorHelperLoose = callback;
  const items1 = [tmp11, onRejectSuccess, onError];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items2 = [tmp11, onRejectSuccess, onError];
  const callback2 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  const items3 = [callback, tmp11, user];
  const items4 = [callback];
  const callback3 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function(arg0) {
      return callback(...arguments);
    };
  }(), items3);
  const obj = {};
  const callback4 = React.useCallback((channel) => {
    const user = channel;
    const onAcceptSuccess = arg1;
    const onRejectSuccess = arg2;
    function onConfirm(setting) {
      if (arg1) {
        const NonSpamRetrainingOptIn = setting(arg2[13]).NonSpamRetrainingOptIn;
        NonSpamRetrainingOptIn.updateSetting(setting);
      }
      let tmp4 = setting;
      if (setting) {
        tmp4 = null != arg1;
      }
      if (tmp4) {
        let obj = setting(arg2[14]);
        const result = obj.submitHamReportForFirstDM(arg1);
      }
      callback(setting.id);
      obj = { action: constants.ACCEPT_HAM_CONFIRMATION_PROMPT, channel_id: setting.id, is_dont_show_again_checked: arg1, non_spam_retraining_opt_in: setting };
      arg1(arg2[11]).track(constants2.MESSAGE_REQUEST_ACTION, obj);
      if (null != arg2) {
        arg2();
      }
    }
    const NonSpamRetrainingOptIn = user(onRejectSuccess[13]).NonSpamRetrainingOptIn;
    const setting = NonSpamRetrainingOptIn.getSetting();
    if (null == setting) {
      let obj = user(onRejectSuccess[12]);
      obj = {
        channel,
        onConfirm,
        onCancel() {
            let obj = arg1(arg2[11]);
            obj = { action: constants.DISMISS_HAM_CONFIRMATION_PROMPT, channel_id: arg0.id };
            obj.track(constants2.MESSAGE_REQUEST_ACTION, obj);
          }
      };
      const result = obj.onMarkAsNotSpamConfirmationModal(obj);
    } else {
      onConfirm(setting);
    }
  }, items4);
  if (tmp) {
    callback = callback3;
  }
  obj.acceptMessageRequest = callback;
  obj.rejectMessageRequest = callback1;
  obj.rejectAll = callback2;
  obj.markAsNotSpam = callback4;
  obj.isAcceptLoading = first;
  obj.isRejectLoading = tmp5;
  obj.isUserProfileLoading = tmp7;
  obj.isOptimisticAccepted = tmp9;
  obj.isOptimisticRejected = tmp10[0];
  return obj;
};
