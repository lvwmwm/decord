// Module ID: 14638
// Function ID: 111528
// Name: MFAModal
// Dependencies: [5, 31, 27, 33, 9203, 4337, 1212, 14639, 5788, 7607, 5087, 14640, 14641, 14646, 14649, 14650, 14651, 5519, 4471, 2]
// Exports: openMFAModal

// Module 14638 (MFAModal)
import module_4337 from "module_4337";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let LogBox;
let closure_5;
const require = arg1;
class MFAModal {
  constructor(arg0) {
    mfaChallenge = global.mfaChallenge;
    finish = global.finish;
    cancel = global.cancel;
    handleOnClose = global.handleOnClose;
    flag = global.ignoreKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    c4 = flag;
    obj = { mfaChallenge: 0, finish: 0, cancel: 0, handleOnClose: 0, ignoreKeyboard: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    c5 = undefined;
    f111532 = undefined;
    c7 = undefined;
    items = [];
    items[0] = mfaChallenge;
    memo = c4.useMemo(() => {
      if (mfaChallenge(cancel[4]).hasWebAuthn) {
        let obj = tmp;
      } else {
        obj = {};
        const merged = Object.assign(tmp);
        const methods = tmp.methods;
        obj["methods"] = methods.filter((type) => "webauthn" !== type.type);
      }
      return obj;
    }, items);
    c5 = memo;
    items1 = [, ];
    items1[0] = finish;
    items1[1] = memo.ticket;
    callback = c4.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = handleOnClose(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items1);
    f111532 = callback;
    items2 = [, ];
    items2[0] = cancel;
    items2[1] = handleOnClose;
    callback1 = c4.useCallback(() => {
      if (null == handleOnClose) {
        finish(cancel[5]).popWithKey(callback1);
        if (null != cancel) {
          const _Error = Error;
          const intl = mfaChallenge(cancel[6]).intl;
          const error = new Error(intl.string(mfaChallenge(cancel[6]).t.N2yb9a));
          cancel(error);
        }
        const obj = finish(cancel[5]);
      } else {
        handleOnClose();
      }
    }, items2);
    c7 = callback1;
    items3 = [, ];
    items3[0] = memo;
    items3[1] = callback;
    items4 = [, , ];
    items4[0] = callback1;
    items4[1] = memo.methods;
    items4[2] = flag;
    memo1 = c4.useMemo(() => {
      obj = { name: mfaChallenge(cancel[7]).MfaScreens.SELECT, params: obj };
      obj = { mfaChallenge: memo, finish: callback };
      const first = memo.methods[0];
      let type;
      if (null != first) {
        type = first.type;
      }
      if (undefined === type) {
        const items = [obj];
        let items1 = items;
      } else {
        obj = { name: type };
        const obj1 = { mfaChallenge: memo, finish: callback };
        obj.params = obj1;
        items1 = [obj];
      }
      return items1;
    }, items3);
    memo2 = c4.useMemo(() => {
      function headerRight() {
        const obj = {};
        const intl = mfaChallenge(cancel[6]).intl;
        obj.accessibilityLabel = intl.string(mfaChallenge(cancel[6]).t.cpT0Cq);
        obj.onPress = outer1_7;
        obj.source = finish(cancel[9]);
        return callback(mfaChallenge(cancel[8]).HeaderActionButton, obj);
      }
      let obj = { fullscreen: true, ignoreKeyboard: flag, headerTitle: "" };
      obj = {};
      obj = {};
      let merged = Object.assign(obj);
      let obj3 = mfaChallenge(cancel[10]);
      obj["headerLeft"] = obj3.getHeaderBackButton();
      obj["headerRight"] = headerRight;
      obj["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback(finish(cancel[11]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.SELECT] = obj;
      const obj1 = {};
      const merged1 = Object.assign(obj);
      const first = memo.methods[0];
      let type;
      if (null != first) {
        type = first.type;
      }
      if ("webauthn" === type) {
        let headerCloseButton = mfaChallenge(cancel[10]).getHeaderCloseButton(callback1);
        const obj7 = mfaChallenge(cancel[10]);
      } else {
        let obj5 = mfaChallenge(cancel[10]);
        headerCloseButton = obj5.getHeaderBackButton();
      }
      obj1["headerLeft"] = headerCloseButton;
      const first1 = memo.methods[0];
      let type1;
      if (null != first1) {
        type1 = first1.type;
      }
      let tmp13;
      if ("webauthn" !== type1) {
        tmp13 = headerRight;
      }
      obj1["headerRight"] = tmp13;
      obj1["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback(finish(cancel[12]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.WEBAUTHN] = obj1;
      const obj2 = {};
      const merged2 = Object.assign(obj);
      const first2 = memo.methods[0];
      let type2;
      if (null != first2) {
        type2 = first2.type;
      }
      if ("totp" === type2) {
        let headerCloseButton1 = mfaChallenge(cancel[10]).getHeaderCloseButton(callback1);
        const obj10 = mfaChallenge(cancel[10]);
      } else {
        headerCloseButton1 = mfaChallenge(cancel[10]).getHeaderBackButton();
        const obj9 = mfaChallenge(cancel[10]);
      }
      obj2["headerLeft"] = headerCloseButton1;
      const first3 = memo.methods[0];
      let type3;
      if (null != first3) {
        type3 = first3.type;
      }
      let tmp25;
      if ("totp" !== type3) {
        tmp25 = headerRight;
      }
      obj2["headerRight"] = tmp25;
      obj2["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback(finish(cancel[13]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.TOTP] = obj2;
      obj3 = {};
      const merged3 = Object.assign(obj);
      const first4 = memo.methods[0];
      let type4;
      if (null != first4) {
        type4 = first4.type;
      }
      if ("backup" === type4) {
        let headerCloseButton2 = mfaChallenge(cancel[10]).getHeaderCloseButton(callback1);
        const obj13 = mfaChallenge(cancel[10]);
      } else {
        headerCloseButton2 = mfaChallenge(cancel[10]).getHeaderBackButton();
        const obj12 = mfaChallenge(cancel[10]);
      }
      obj3["headerLeft"] = headerCloseButton2;
      const first5 = memo.methods[0];
      let type5;
      if (null != first5) {
        type5 = first5.type;
      }
      let tmp37;
      if ("backup" !== type5) {
        tmp37 = headerRight;
      }
      obj3["headerRight"] = tmp37;
      obj3["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback(finish(cancel[14]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.BACKUP] = obj3;
      const obj4 = {};
      const merged4 = Object.assign(obj);
      const first6 = memo.methods[0];
      let type6;
      if (null != first6) {
        type6 = first6.type;
      }
      if ("sms" === type6) {
        let headerCloseButton3 = mfaChallenge(cancel[10]).getHeaderCloseButton(callback1);
        const obj16 = mfaChallenge(cancel[10]);
      } else {
        headerCloseButton3 = mfaChallenge(cancel[10]).getHeaderBackButton();
        const obj15 = mfaChallenge(cancel[10]);
      }
      obj4["headerLeft"] = headerCloseButton3;
      const first7 = memo.methods[0];
      let type7;
      if (null != first7) {
        type7 = first7.type;
      }
      let tmp49;
      if ("sms" !== type7) {
        tmp49 = headerRight;
      }
      obj4["headerRight"] = tmp49;
      obj4["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback(finish(cancel[15]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.SMS] = obj4;
      obj5 = {};
      const merged5 = Object.assign(obj);
      const first8 = memo.methods[0];
      let type8;
      if (null != first8) {
        type8 = first8.type;
      }
      if ("password" === type8) {
        let headerCloseButton4 = mfaChallenge(cancel[10]).getHeaderCloseButton(callback1);
        const obj19 = mfaChallenge(cancel[10]);
      } else {
        headerCloseButton4 = mfaChallenge(cancel[10]).getHeaderBackButton();
        const obj18 = mfaChallenge(cancel[10]);
      }
      obj5["headerLeft"] = headerCloseButton4;
      const first9 = memo.methods[0];
      let type9;
      if (null != first9) {
        type9 = first9.type;
      }
      let tmp61;
      if ("password" !== type9) {
        tmp61 = headerRight;
      }
      obj5["headerRight"] = tmp61;
      obj5["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback(finish(cancel[16]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.PASSWORD] = obj5;
      return obj;
    }, items4);
    obj = { screens: memo2, initialRouteStack: memo1, onWillFocus: c5.dismiss };
    merged1 = Object.assign(merged);
    return f111532(require("NavigationStack").Navigator, obj);
  }
}
({ Keyboard: closure_5, LogBox } = get_ActivityIndicator);
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
const MFA_MODAL_KEY = "MFA_MODAL_KEY";
const result = require("get ActivityIndicator").fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export { MFAModal };
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  let arr = importDefault(4337);
  arr = arr.push(MFAModal, { mfaChallenge, finish, cancel }, MFA_MODAL_KEY);
  importDefault(4471).close();
};
