// Module ID: 11606
// Function ID: 11607
// Name: GiftCodeRedeemModal
// Dependencies: [109, 19, 11597, 1376, 21, 5871, 4993, 11607, 11620, 11621, 558, 568, 504, 11608, 7278, 2]

// Module 11606 (GiftCodeRedeemModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import GiftCodeRedeemStartDefault from "GiftCodeRedeemStart" /* 11607 */;
import useGiftCodeErrorMessageDefault from "useGiftCodeErrorMessage" /* 11608 */;
import GiftCodeRedeemSuccessDefault from "GiftCodeRedeemSuccess" /* 11620 */;
import GiftCodeRedeemErrorDefault from "GiftCodeRedeemError" /* 11621 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 11597 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["code"];
const jsx = fn(21).jsx;
const GiftCodeModalScreens = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
const NavigatorHeader = fn(5871);
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((code) => {
  let tmp2 = dependencyMap;
  const obj = require("c");
  const cResult = obj.c(17);
  if (cResult[0] !== code) {
    code = code.code;
    _require = code;
    const tmp8 = _objectWithoutProperties(code, closure_3);
    cResult[0] = code;
    cResult[1] = code;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GiftCodeStore];
    cResult[3] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function p() {
      return GiftCodeStore.get(closure_0);
    };
    cResult[4] = tmp4;
    cResult[5] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class T {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[6] = items1;
    cResult[7] = T;
    let tmp14 = T;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp13, tmp14);
  const tmp17 = useGiftCodeErrorMessageDefault(tmp4, stateFromStores1);
  if (null == stateFromStores1) {
    return null;
  } else {
    if (cResult[8] !== stateFromStores1) {
      closure_129_0 = stateFromStores1;
      const obj2 = {};
      class T {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      tmp20[0] = headerTitle;
      tmp20[1] = tmp(5871).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
      tmp20[2] = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.user = code;
        return jsx(GiftCodeRedeemStartDefault, {});
      };
      obj2[obj.START] = tmp20;
      const obj3 = { headerTitle, headerLeft: null, render: null };
      const tmpResult6 = tmp(5871);
      obj3.headerLeft = tmp(5871).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
      obj3.render = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.user = code;
        return jsx(GiftCodeRedeemSuccessDefault, {});
      };
      obj2[obj.SUCCESS] = obj3;
      const obj4 = { headerTitle, headerLeft: null, render: null };
      const tmpResult7 = tmp(5871);
      obj4.headerLeft = tmp(5871).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
      obj4.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return jsx(GiftCodeRedeemErrorDefault, {});
      };
      obj2[obj.ERROR] = obj4;
      cResult[8] = stateFromStores1;
      cResult[9] = obj2;
      let tmp18 = obj2;
      const tmpResult8 = tmp(5871);
    } else {
      tmp18 = cResult[9];
    }
    if (null == stateFromStores) {
      return null;
    } else {
      if (cResult[10] === tmp17) {
        if (cResult[11] === stateFromStores) {
          if (cResult[12] === tmp5) {
            if (cResult[14] === tmp18) {
            }
            class T {
              constructor() {
                return closure_1_6.getCurrentUser();
              }
            }
            const obj5 = { screens: tmp18, initialRouteStack: cResult[13] };
            tmp2 = <tmp screens={tmp18} initialRouteStack={cResult[13]} />;
            cResult[14] = tmp18;
            cResult[15] = cResult[13];
            cResult[16] = tmp2;
          }
        }
      }
      if (null != tmp17) {
        const obj6 = { name: obj.ERROR, params: null };
        class T {
          constructor() {
            return closure_1_6.getCurrentUser();
          }
        }
        tmp30[0] = tmp17;
        const merged = Object.assign(tmp5);
        obj6.params = tmp30;
        const items2 = [obj6];
        let items3 = items2;
      } else {
        const obj7 = { name: obj.START, params: null };
        class T {
          constructor() {
            return closure_1_6.getCurrentUser();
          }
        }
        tmp25[0] = stateFromStores;
        const merged1 = Object.assign(tmp5);
        obj7.params = tmp25;
        items3 = [obj7];
      }
      class T {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[11] = stateFromStores;
      cResult[12] = tmp5;
      cResult[13] = items3;
    }
  }
}) : ((code) => {
  code = code.code;
  let merged = Object.assign(code, Object.assign({ code: 0 }));
  let obj = code(504);
  const items = [GiftCodeStore];
  const stateFromStores = obj.useStateFromStores(items, () => GiftCodeStore.get(code));
  const items1 = [UserStore];
  const stateFromStores1 = code(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp6 = useGiftCodeErrorMessageDefault(code, stateFromStores1);
  if (null == stateFromStores1) {
    return null;
  } else {
    closure_129_0 = stateFromStores1;
    const obj3 = {};
    let items2 = obj;
    const obj4 = {
      headerTitle,
      headerLeft: tmp2(5871).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop()),
      render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.user = code;
          return jsx(GiftCodeRedeemStartDefault, {});
        }
    };
    obj3[obj.START] = obj4;
    const obj5 = { headerTitle, headerLeft: null, render: null };
    const tmp2Result = tmp2(5871);
    obj5.headerLeft = tmp2(5871).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj5.render = function render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.user = code;
      return jsx(GiftCodeRedeemSuccessDefault, {});
    };
    obj3[obj.SUCCESS] = obj5;
    const obj6 = { headerTitle, headerLeft: null, render: null };
    const tmp2Result3 = tmp2(5871);
    obj6.headerLeft = tmp2(5871).getHeaderCloseButton(() => ModalActionCreatorsDefault.pop());
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GiftCodeRedeemErrorDefault, {});
    };
    obj3[obj.ERROR] = obj6;
    if (null == stateFromStores) {
      return null;
    } else {
      const obj7 = { screens: obj3, initialRouteStack: null };
      if (null != tmp6) {
        const obj8 = { name: items2.ERROR, params: null };
        const obj9 = { message: tmp6 };
        merged = Object.assign(merged);
        obj8.params = obj9;
        items2 = [obj8];
        let items3 = items2;
      } else {
        const obj10 = { name: items2.START, params: null };
        const obj11 = { giftCode: stateFromStores };
        const merged1 = Object.assign(merged);
        obj10.params = obj11;
        items3 = [obj10];
      }
      obj7.initialRouteStack = items3;
      jsx(tmp2(7278).Navigator, { screens: obj3, initialRouteStack: null });
    }
    const tmp2Result4 = tmp2(5871);
  }
});
export { GiftCodeModalScreens };
