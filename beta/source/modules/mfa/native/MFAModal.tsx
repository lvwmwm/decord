// Module ID: 15225
// Function ID: 15226
// Name: MFAModal
// Dependencies: [5, 19, 17, 21, 6370, 5039, 1115, 15226, 6795, 6413, 5936, 15227, 15228, 15233, 15236, 15237, 15238, 6421, 5204, 2]
// Exports: openMFAModal

// Module 15225 (MFAModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import MFAUtils from "MFAUtils" /* 6370 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15226 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let data;

let LogBox;
let hasOwnProperty;
class MFAModal {
  constructor(mfaChallenge) {
    mfaChallenge = mfaChallenge.mfaChallenge;
    let finish = mfaChallenge.finish;
    const cancel = mfaChallenge.cancel;
    const handleOnClose = mfaChallenge.handleOnClose;
    let flag = mfaChallenge.ignoreKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    let merged = Object.assign(mfaChallenge, Object.assign({ mfaChallenge: 0, finish: 0, cancel: 0, handleOnClose: 0, ignoreKeyboard: 0 }));
    finish = undefined;
    let items = [mfaChallenge];
    const memo = flag.useMemo(() => {
      let methods;
      let obj;
      if (MFAUtils.hasWebAuthn) {
        obj = tmp;
      } else {
        obj = { methods: methods.filter((type) => "webauthn" !== type.type) };
        const merged = Object.assign(tmp);
        methods = tmp.methods;
      }
      return obj;
    }, items);
    const useCallback = flag.useCallback;
    let closure_0 = handleOnClose((mfaType) => {
      let closure_2;
      let ticket;
      let c3 = 0;
      let c4 = 0;
      const iter = (function*(arg0) {
        let c0;
        let c1;
        const obj5 = { mfaType, data, ticket: ticket.ticket };
        yield data(obj5);
        const obj = finish(cancel[5]);
        obj.popWithKey(callback1);
        yield "HermesInternal";
        data = tmp;
        ({ mfaType: c0, data: c1 } = closure_0);
        return "flex";
      })();
      iter.next();
      return iter;
    });
    let items1 = [finish, memo.ticket];
    finish = useCallback(function() {
      return closure_0(...arguments);
    }, items1);
    const items2 = [cancel, handleOnClose];
    const callback1 = flag.useCallback(function() {
      if (null == handleOnClose) {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(MFA_MODAL_KEY);
        if (cancel != null) {
          const _Error = Error;
          const intl = intl2.intl;
          const self = this;
          const self2 = this;
          const error = new Error(intl.string(intl2.t.N2yb9a));
          tmp7(error);
        }
      } else {
        tmp();
      }
    }, items2);
    const items3 = [memo, finish];
    const items4 = [callback1, memo.methods, flag];
    const memo1 = flag.useMemo(() => {
      let items1;
      let obj3;
      const first = memo.methods[0];
      let type;
      const obj = { name: MfaStepsTypes.MfaScreens.SELECT, params: { mfaChallenge: memo, finish } };
      const tmp = memo;
      const tmp2 = finish;
      if (first != null) {
        type = first.type;
      }
      if (undefined === type) {
        const items = [obj];
        items1 = items;
      } else {
        const obj2 = { name: type, params: obj3 };
        items1 = [obj2];
        obj3 = { mfaChallenge: tmp, finish: tmp2 };
      }
      return items1;
    }, items3);
    const memo2 = flag.useMemo(() => {
      let headerCloseButton;
      let headerCloseButton1;
      let headerCloseButton2;
      let headerCloseButton3;
      let headerCloseButton4;
      let obj4;
      let onPress;
      let tmp12;
      let tmp20;
      let tmp28;
      let tmp36;
      let tmp44;
      function headerRight() {
        let intl;
        const obj = { accessibilityLabel: intl.string(mfaChallenge(cancel[6]).t.cpT0Cq), onPress, source: finish(cancel[9]) };
        const HeaderActionButton = mfaChallenge(cancel[8]).HeaderActionButton;
        intl = mfaChallenge(cancel[6]).intl;
        return callback(HeaderActionButton, obj);
      }
      let obj = { fullscreen: true, ignoreKeyboard: flag, headerTitle: "" };
      const obj2 = {};
      let tmp = require;
      const obj3 = {
        headerLeft: obj4.getHeaderBackButton(),
        headerRight,
        render(arg0) {
          const obj = {};
          const tmp = closure_1_1(cancel[11]);
          const merged = Object.assign(arg0);
          return closure_1_6(tmp, obj);
        }
      };
      const SELECT = MfaStepsTypes.MfaScreens.SELECT;
      let merged = Object.assign(obj);
      obj2[SELECT] = obj3;
      obj4 = NavigatorHeader;
      const obj5 = {
        headerLeft: headerCloseButton,
        headerRight: tmp12,
        render(arg0) {
          const obj = {};
          const tmp = closure_1_1(cancel[12]);
          const merged = Object.assign(arg0);
          return closure_1_6(tmp, obj);
        }
      };
      const WEBAUTHN = MfaStepsTypes.MfaScreens.WEBAUTHN;
      const merged1 = Object.assign(obj);
      const first = memo.methods[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if ("webauthn" === type) {
        const tmpResult = NavigatorHeader;
        headerCloseButton = tmpResult.getHeaderCloseButton(callback1);
      } else {
        const tmpResult10 = NavigatorHeader;
        headerCloseButton = tmpResult10.getHeaderBackButton();
      }
      const first1 = tmp5.methods[0];
      let type1;
      if (first1 != null) {
        type1 = first1.type;
      }
      tmp12 = undefined;
      if ("webauthn" !== type1) {
        tmp12 = headerRight;
      }
      obj2[WEBAUTHN] = obj5;
      const obj6 = {
        headerLeft: headerCloseButton1,
        headerRight: tmp20,
        render(arg0) {
          const obj = {};
          const tmp = closure_1_1(cancel[13]);
          const merged = Object.assign(arg0);
          return closure_1_6(tmp, obj);
        }
      };
      const TOTP = MfaStepsTypes.MfaScreens.TOTP;
      const merged2 = Object.assign(obj);
      const first2 = tmp5.methods[0];
      let type2;
      if (first2 != null) {
        type2 = first2.type;
      }
      if ("totp" === type2) {
        const tmpResult11 = NavigatorHeader;
        headerCloseButton1 = tmpResult11.getHeaderCloseButton(callback1);
      } else {
        const tmpResult12 = NavigatorHeader;
        headerCloseButton1 = tmpResult12.getHeaderBackButton();
      }
      const first3 = tmp5.methods[0];
      let type3;
      if (first3 != null) {
        type3 = first3.type;
      }
      tmp20 = undefined;
      if ("totp" !== type3) {
        tmp20 = headerRight;
      }
      obj2[TOTP] = obj6;
      const obj7 = {
        headerLeft: headerCloseButton2,
        headerRight: tmp28,
        render(arg0) {
          const obj = {};
          const tmp = closure_1_1(cancel[14]);
          const merged = Object.assign(arg0);
          return closure_1_6(tmp, obj);
        }
      };
      const BACKUP = MfaStepsTypes.MfaScreens.BACKUP;
      const merged3 = Object.assign(obj);
      const first4 = tmp5.methods[0];
      let type4;
      if (first4 != null) {
        type4 = first4.type;
      }
      if ("backup" === type4) {
        const tmpResult13 = NavigatorHeader;
        headerCloseButton2 = tmpResult13.getHeaderCloseButton(callback1);
      } else {
        const tmpResult14 = NavigatorHeader;
        headerCloseButton2 = tmpResult14.getHeaderBackButton();
      }
      const first5 = tmp5.methods[0];
      let type5;
      if (first5 != null) {
        type5 = first5.type;
      }
      tmp28 = undefined;
      if ("backup" !== type5) {
        tmp28 = headerRight;
      }
      obj2[BACKUP] = obj7;
      const obj8 = {
        headerLeft: headerCloseButton3,
        headerRight: tmp36,
        render(arg0) {
          const obj = {};
          const tmp = closure_1_1(cancel[15]);
          const merged = Object.assign(arg0);
          return closure_1_6(tmp, obj);
        }
      };
      const SMS = MfaStepsTypes.MfaScreens.SMS;
      const merged4 = Object.assign(obj);
      const first6 = tmp5.methods[0];
      let type6;
      if (first6 != null) {
        type6 = first6.type;
      }
      if ("sms" === type6) {
        const tmpResult15 = NavigatorHeader;
        headerCloseButton3 = tmpResult15.getHeaderCloseButton(callback1);
      } else {
        const tmpResult16 = NavigatorHeader;
        headerCloseButton3 = tmpResult16.getHeaderBackButton();
      }
      const first7 = tmp5.methods[0];
      let type7;
      if (first7 != null) {
        type7 = first7.type;
      }
      tmp36 = undefined;
      if ("sms" !== type7) {
        tmp36 = headerRight;
      }
      obj2[SMS] = obj8;
      const obj9 = {
        headerLeft: headerCloseButton4,
        headerRight: tmp44,
        render(arg0) {
          const obj = {};
          const tmp = closure_1_1(cancel[16]);
          const merged = Object.assign(arg0);
          return closure_1_6(tmp, obj);
        }
      };
      const PASSWORD = MfaStepsTypes.MfaScreens.PASSWORD;
      const merged5 = Object.assign(obj);
      const first8 = tmp5.methods[0];
      let type8;
      if (first8 != null) {
        type8 = first8.type;
      }
      if ("password" === type8) {
        const tmpResult17 = NavigatorHeader;
        headerCloseButton4 = tmpResult17.getHeaderCloseButton(callback1);
      } else {
        const tmpResult18 = NavigatorHeader;
        headerCloseButton4 = tmpResult18.getHeaderBackButton();
      }
      const first9 = tmp5.methods[0];
      let type9;
      if (first9 != null) {
        type9 = first9.type;
      }
      tmp44 = undefined;
      if ("password" !== type9) {
        tmp44 = headerRight;
      }
      obj2[PASSWORD] = obj9;
      return obj2;
    }, items4);
    let obj = { screens: memo2, initialRouteStack: memo1, onWillFocus: memo.dismiss };
    const Navigator = mfaChallenge(cancel[17]).Navigator;
    let merged1 = Object.assign(merged);
    return finish(Navigator, obj);
  }
}
({ Keyboard: hasOwnProperty, LogBox } = react_native);
const jsx = Fragment.jsx;
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
const MFA_MODAL_KEY = "MFA_MODAL_KEY";
const result = size.fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export { MFAModal };
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  const arr = ModalActionCreatorsDefault;
  const obj = { mfaChallenge, finish, cancel };
  arr.push(MFAModal, obj, MFA_MODAL_KEY);
  const obj2 = actions_AlertActionCreatorsDefault;
  obj2.close();
};
