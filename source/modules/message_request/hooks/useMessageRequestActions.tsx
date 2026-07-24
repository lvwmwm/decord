// Module ID: 11505
// Function ID: 89613
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 6855, 11506, 653, 11507, 10170, 4029, 9439, 7975, 675, 11509, 3803, 7689, 2]
// Exports: useMessageRequestActions

// Module 11505 (_createForOfIteratorHelperLoose)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";

let closure_7;
let closure_8;
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
({ MessageRequestAnalyticsAction: closure_7, BATCH_REJECT_LIMIT: closure_8 } = MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL);
let result = require("result").fileFinishedImporting("modules/message_request/hooks/useMessageRequestActions.tsx");

export const useMessageRequestActions = function useMessageRequestActions(user) {
  let result;
  let _isNativeReflectConstruct;
  let closure_7;
  let tmp5;
  let tmp7;
  let tmp9;
  user = user.user;
  const onAcceptSuccess = user.onAcceptSuccess;
  const onRejectSuccess = user.onRejectSuccess;
  const onError = user.onError;
  let c9;
  let callback;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp = onAcceptSuccess(onRejectSuccess[6])();
  [tmp5, result] = callback(React.useState(false), 2);
  let tmp4 = callback(React.useState(false), 2);
  [tmp7, _isNativeReflectConstruct] = callback(React.useState(false), 2);
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
  c9 = tmp11;
  const items = [tmp11, onAcceptSuccess, onError];
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  const items1 = [tmp11, onRejectSuccess, onError];
  const callback1 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [tmp11, onRejectSuccess, onError];
  const callback2 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  const items3 = [callback, tmp11, user];
  const items4 = [callback];
  const callback3 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onError(tmp);
    return function(arg0) {
      return callback(...arguments);
    };
  })(), items3);
  let obj = {};
  const callback4 = React.useCallback((channel) => {
    let closure_0 = channel;
    let closure_1 = arg1;
    let closure_2 = arg2;
    function onConfirm(setting) {
      if (arg1) {
        const NonSpamRetrainingOptIn = user(onRejectSuccess[13]).NonSpamRetrainingOptIn;
        NonSpamRetrainingOptIn.updateSetting(setting);
      }
      let tmp4 = setting;
      if (setting) {
        tmp4 = null != closure_1;
      }
      if (tmp4) {
        let obj = user(onRejectSuccess[14]);
        const result = obj.submitHamReportForFirstDM(closure_1);
      }
      outer1_10(user.id);
      obj = { action: outer2_7.ACCEPT_HAM_CONFIRMATION_PROMPT, channel_id: user.id, is_dont_show_again_checked: arg1, non_spam_retraining_opt_in: setting };
      onAcceptSuccess(onRejectSuccess[11]).track(constants.MESSAGE_REQUEST_ACTION, obj);
      if (null != callback) {
        callback();
      }
    }
    let NonSpamRetrainingOptIn = user(onRejectSuccess[13]).NonSpamRetrainingOptIn;
    const setting = NonSpamRetrainingOptIn.getSetting();
    if (null == setting) {
      let obj = user(onRejectSuccess[12]);
      obj = {
        channel,
        onConfirm,
        onCancel() {
            let obj = onAcceptSuccess(onRejectSuccess[11]);
            obj = { action: outer2_7.DISMISS_HAM_CONFIRMATION_PROMPT, channel_id: user.id };
            obj.track(constants.MESSAGE_REQUEST_ACTION, obj);
          }
      };
      let result = obj.onMarkAsNotSpamConfirmationModal(obj);
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
