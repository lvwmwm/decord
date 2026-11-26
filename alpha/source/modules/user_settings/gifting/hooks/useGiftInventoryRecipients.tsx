// Module ID: 14023
// Function ID: 14024
// Name: useGiftInventoryRecipients
// Dependencies: [5, 19, 1387, 6134, 14020, 2]
// Exports: default

// Module 14023 (useGiftInventoryRecipients)
import UserActionCreators from "UserActionCreators" /* 6134 */;
import GiftedSubscriptionUtils from "GiftedSubscriptionUtils" /* 14020 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

let c1, c2, set;

function fetchRecipient() {
  return obj(...arguments);
}
let obj = function _fetchRecipient() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: obj2.getUser(closure_0), done: false };
            obj2 = UserActionCreators;
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c3 = 0;
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c1 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp7) {
        if (0 === c3) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/user_settings/gifting/hooks/useGiftInventoryRecipients.tsx");

export default function useGiftInventoryRecipients(arg0) {
  let closure_0 = arg0;
  const useRef = react.useRef;
  set = new Set();
  const ref = useRef(set);
  const items = [arg0];
  const effect = react.useEffect(() => {
    const tmp2 = closure_0[Symbol.iterator]();
    while (tmp2 !== undefined) {
      obj = GiftedSubscriptionUtils;
      let giftedSubscriptionRowState = obj.getGiftedSubscriptionRowState(tmp3);
      let tmp7 = giftedSubscriptionRowState;
      if ("pending" !== giftedSubscriptionRowState.kind) {
        if (null != tmp7.recipientUserId) {
          let recipientUserId = tmp7.recipientUserId;
          let tmp10 = recipientUserId;
          let hasItem = null != UserStore.getUser(recipientUserId);
          if (!hasItem) {
            let current = ref.current;
            hasItem = current.has(tmp10);
          }
          if (!hasItem) {
            let current2 = ref.current;
            let addResult = current2.add(tmp10);
            let tmp19 = fetchRecipient(tmp10);
          }
        }
      }
      continue;
    }
  }, items);
};
