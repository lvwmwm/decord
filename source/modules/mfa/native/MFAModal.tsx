// Module ID: 14516
// Function ID: 109325
// Name: MFAModal
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0]
// Exports: openMFAModal

// Module 14516 (MFAModal)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";
import { jsx } from "result";

let LogBox;
class MFAModal {
  constructor(arg0) {
    mfaChallenge = global.mfaChallenge;
    arg1 = mfaChallenge;
    finish = global.finish;
    importDefault = finish;
    cancel = global.cancel;
    dependencyMap = cancel;
    handleOnClose = global.handleOnClose;
    flag = global.ignoreKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    closure_4 = flag;
    obj = { <string:3670107757>: null, <string:2972823849>: null, fullscreen: null, headerTransparent: null, ignoreKeyboard: null };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    closure_5 = undefined;
    f109329 = undefined;
    closure_7 = undefined;
    items = [];
    items[0] = mfaChallenge;
    memo = closure_4.useMemo(() => {
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
    closure_5 = memo;
    items1 = [, ];
    items1[0] = finish;
    items1[1] = memo.ticket;
    callback = closure_4.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = handleOnClose(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items1);
    f109329 = callback;
    items2 = [, ];
    items2[0] = cancel;
    items2[1] = handleOnClose;
    callback1 = closure_4.useCallback(() => {
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
    closure_7 = callback1;
    items3 = [, ];
    items3[0] = memo;
    items3[1] = callback;
    items4 = [, , ];
    items4[0] = callback1;
    items4[1] = memo.methods;
    items4[2] = flag;
    memo1 = closure_4.useMemo(() => {
      let obj = { name: mfaChallenge(cancel[7]).MfaScreens.SELECT, params: obj };
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
    memo2 = closure_4.useMemo(() => {
      function headerRight() {
        const obj = {};
        const intl = callback(closure_2[6]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_2[6]).t.cpT0Cq);
        obj.onPress = closure_7;
        obj.source = callback2(closure_2[9]);
        return callback3(callback(closure_2[8]).HeaderActionButton, obj);
      }
      let obj = { <string:1018451418>: null, <string:2479409770>: null, <string:1868880592>: true, ignoreKeyboard: flag };
      obj = {};
      obj = {};
      const merged = Object.assign(obj);
      let obj3 = mfaChallenge(cancel[10]);
      obj["headerLeft"] = obj3.getHeaderBackButton();
      obj["headerRight"] = headerRight;
      obj["render"] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(closure_2[11]), {});
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
        return callback3(callback2(closure_2[12]), {});
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
        return callback3(callback2(closure_2[13]), {});
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
        return callback3(callback2(closure_2[14]), {});
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
        return callback3(callback2(closure_2[15]), {});
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
        return callback3(callback2(closure_2[16]), {});
      };
      obj[mfaChallenge(cancel[7]).MfaScreens.PASSWORD] = obj5;
      return obj;
    }, items4);
    obj = { screens: memo2, initialRouteStack: memo1, onWillFocus: closure_5.dismiss };
    merged1 = Object.assign(merged);
    return f109329(arg1(dependencyMap[17]).Navigator, obj);
  }
}
({ Keyboard: closure_5, LogBox } = result);
LogBox.ignoreLogs(["hd"]);
let closure_7 = "MFA_MODAL_KEY";
result = arg1(dependencyMap[19]).fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export { MFAModal };
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  let arr = importDefault(dependencyMap[5]);
  arr = arr.push(MFAModal, { mfaChallenge, finish, cancel }, closure_7);
  importDefault(dependencyMap[18]).close();
};
