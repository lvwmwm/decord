// Module ID: 11932
// Function ID: 11933
// Name: ChatInputGuardMessageRequest
// Dependencies: [5, 19, 1372, 21, 1485, 11933, 504, 11935, 4528, 1115, 5909, 4847, 11941, 2]

// Module 11932 (ChatInputGuardMessageRequest)
import Fragment from "Fragment" /* 21 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11941 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let c1, closure_1, dependencyMap, id, importDefault;

const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputGuardMessageRequest(channel) {
  let _undefined;
  let c2;
  let c3;
  let intl;
  let intl3;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let string;
  let string2;
  let t;
  let t2;
  channel = channel.channel;
  dependencyMap = undefined;
  c3 = undefined;
  let obj = function _onAcceptClick() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      id = arg0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              id.stopPropagation();
              c2 = 1;
              c3 = 1;
              const obj4 = { value: _undefined(id.id), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            obj = id(c2[11]);
            obj.transitionToChannel(closure_129_0.id, { navigationReplace: true });
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _onRejectClick() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      id = arg0;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              id.stopPropagation();
              c2 = 1;
              c1 = 1;
              const obj4 = { value: _undefined(id.id), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c1 = 3;
          throw tmp8;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = channel;
  const tmp2 = dependencyMap;
  obj = channel(1485);
  importDefault = obj.useNavigation();
  let obj2 = channel(11933);
  const isMessageRequestRestrictedViewer = obj2.useIsMessageRequestRestrictedViewer("ChatInputGuardMessageRequest");
  let obj3 = channel(504);
  const items = [obj];
  const stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj4 = channel(11935);
  let obj5 = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let intl;
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(channel(c2[9]).t["EDYbS+"]), icon: closure_1(c2[10]) };
      const open = closure_1(c2[8]).open;
      closure_1(c2[8]);
      intl = channel(c2[9]).intl;
      open(obj);
    },
    onRejectSuccess: function handleRejectSuccess() {
      closure_1.pop();
    }
  };
  const messageRequestActions = obj4.useMessageRequestActions(obj5);
  ({ acceptMessageRequest: c2, rejectMessageRequest: c3, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
  const obj6 = {
    type: "button-action",
    message: intl.string(tmp(1115).t["e/eQVB"]),
    subtext: string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI),
    buttonPrimaryText: intl3.string(tmp(1115).t.Kz8Pwr),
    buttonPrimaryOnPress: function onAcceptClick(arg0) {
      return obj(...arguments);
    },
    buttonPrimaryDisabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected,
    buttonPrimaryLoading: isAcceptLoading,
    buttonSecondaryText: string2(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW),
    buttonSecondaryOnPress: function onRejectClick(arg0) {
      return obj(...arguments);
    },
    buttonSecondaryDisabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected,
    buttonSecondaryLoading: isRejectLoading
  };
  const tmp8 = ChatInputGuardDefault;
  intl = tmp(1115).intl;
  const intl2 = tmp(1115).intl;
  string = intl2.string;
  t = tmp(1115).t;
  intl3 = tmp(1115).intl;
  const tmp7 = obj;
  if (!isAcceptLoading) {
    isAcceptLoading = isUserProfileLoading;
  }
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  const intl4 = tmp(1115).intl;
  string2 = intl4.string;
  t2 = tmp(1115).t;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  return tmp7(tmp8, obj6);
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default memoResult;
