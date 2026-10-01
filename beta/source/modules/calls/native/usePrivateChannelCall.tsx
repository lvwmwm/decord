// Module ID: 12698
// Function ID: 12699
// Name: usePrivateChannelCall
// Dependencies: [5, 19, 2045, 504, 1115, 10329, 4849, 2]
// Exports: default

// Module 12698 (usePrivateChannelCall)
import intl3 from "intl" /* 1115 */;
import getPrivateChannelCallDefault from "getPrivateChannelCall" /* 10329 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, dependencyMap;

const result = size.fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default function usePrivateChannelCall(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  let items2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [arg1, arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let string2Result;
    let stringResult;
    let tmp10;
    const channel = ChannelStore.getChannel(ChannelStore.getDMFromUserId(closure_0));
    if (null != channel) {
      if (channel.isPrivate()) {
        const obj = { text: null, accessibilityHint: null, inCall: null };
        ({ text: obj2.text, accessibilityHint: obj2.accessibilityHint, inCall: obj2.inCall } = getPrivateChannelCallDefault(channel, closure_1));
        getPrivateChannelCallDefault(channel, closure_1);
        return obj;
      }
    }
    const intl = intl3.intl;
    const string = intl.string;
    const t = intl3.t;
    if (closure_1) {
      stringResult = string(t["7AWk50"]);
      tmp10 = tmp6;
    } else {
      stringResult = string(t["EZgS+9"]);
      tmp10 = tmp6;
    }
    const obj3 = { text: stringResult, accessibilityHint: string2Result, inCall: false };
    const intl2 = tmp10(1115).intl;
    const string2 = intl2.string;
    const t2 = tmp10(1115).t;
    if (closure_1) {
      string2Result = string2(t2.oCqlGG);
    } else {
      string2Result = string2(t2.focH1t);
    }
    return obj3;
  }, items1);
  let obj2 = {
    text: stateFromStoresObject.text,
    inCall: stateFromStoresObject.inCall,
    accessibilityHint: stateFromStoresObject.accessibilityHint,
    handlePress: react.useCallback(_asyncToGenerator(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let channel;
          let tmp2;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              channel = undefined;
              tmp2 = undefined;
              const tmp30 = channel;
              channel = authStore.getChannel(authStore.getDMFromUserId(channel));
              if (null == channel) {
                const obj4 = tmp2(c2[6]);
                c2 = 1;
                c3 = 1;
                const obj7 = { value: obj4.ensurePrivateChannel(tmp30), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp2 = value;
            channel = authStore.getChannel(tmp2);
          }
          let isPrivateResult;
          const obj2 = channel;
          if (channel != null) {
            isPrivateResult = obj2.isPrivate();
          }
          if (isPrivateResult) {
            const obj3 = tmp2(c2[5])(channel, closure_129_1);
            obj3.onPress();
          }
          if (closure_129_2 != null) {
            closure_129_2();
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp24) {
          c3 = 3;
          throw tmp24;
        }
      }
    }), items2)
  };
  items2 = [arg0, arg1, arg2];
  return obj2;
};
