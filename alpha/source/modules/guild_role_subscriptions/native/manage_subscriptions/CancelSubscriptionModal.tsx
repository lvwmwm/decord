// Module ID: 16924
// Function ID: 16925
// Name: CancelSubscriptionModal
// Dependencies: [109, 19, 17, 21, 558, 576, 1631, 15434, 6205, 6176, 6686, 2]

// Module 16924 (CancelSubscriptionModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_3 = ["onClose"];
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CancelSubscriptionModal(onClose) {
  let bottom;
  let closure_0;
  let initialStack;
  let params;
  let screens;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] !== onClose) {
    onClose = onClose.onClose;
    _require = onClose;
    const tmp8 = _objectWithoutProperties(onClose, closure_3);
    importDefault = tmp8;
    cResult[0] = onClose;
    cResult[1] = onClose;
    cResult[2] = tmp8;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
  }
  bottom = require("useSafeAreaInsets")().bottom;
  if (cResult[3] === bottom) {
    if (cResult[4] === tmp4) {
      let tmp10;
      if (cResult[5] === tmp5) {
        tmp10 = cResult[6];
      }
      ({ screens, initialStack } = require("useInitialValue")(tmp10));
      require("useInitialValue")(tmp10);
      if (cResult[7] === initialStack) {
        let tmp12;
        if (cResult[8] === screens) {
          tmp12 = cResult[9];
        }
        return tmp12;
      }
      const tmp14 = jsx(tmp(bottom[10]).Navigator, { screens, initialRouteStack: initialStack });
      cResult[7] = initialStack;
      cResult[8] = screens;
      cResult[9] = tmp14;
      tmp12 = tmp14;
    }
  }
  const fn = function p() {
    let items;
    let obj2;
    let obj4;
    let paddingBottom;
    const obj = { screens: obj2, initialStack: items };
    obj2 = {};
    const obj3 = {
      render(arg0) {
        const obj2 = { paddingBottom, flex: 1 };
        params(bottom[7]);
        const merged = Object.assign(arg0);
        return <View style={obj2}>{null}</View>;
      },
      title: "Subscriptions",
      headerLeft: obj4.getHeaderCloseButton(onClose)
    };
    const CANCEL_SUBSCRIPTION = constants.CANCEL_SUBSCRIPTION;
    obj2[CANCEL_SUBSCRIPTION] = obj3;
    items = [];
    const obj5 = { name: constants.CANCEL_SUBSCRIPTION, params };
    items[0] = obj5;
    obj4 = NavigatorHeader;
    return obj;
  };
  cResult[3] = bottom;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = fn;
  tmp10 = fn;
}) : (function CancelSubscriptionModal(onClose) {
  let initialStack;
  let params;
  let screens;
  onClose = onClose.onClose;
  importDefault = Object.assign(onClose, Object.assign({ onClose: 0 }));
  let bottom;
  bottom = require("useSafeAreaInsets")().bottom;
  const tmp = require("useInitialValue")(() => {
    let items;
    let obj2;
    let obj4;
    let paddingBottom;
    const obj = { screens: obj2, initialStack: items };
    obj2 = {};
    const obj3 = {
      render(arg0) {
        const obj2 = { paddingBottom, flex: 1 };
        params(bottom[7]);
        const merged = Object.assign(arg0);
        return <View style={obj2}>{null}</View>;
      },
      title: "Subscriptions",
      headerLeft: obj4.getHeaderCloseButton(onClose)
    };
    const CANCEL_SUBSCRIPTION = constants.CANCEL_SUBSCRIPTION;
    obj2[CANCEL_SUBSCRIPTION] = obj3;
    items = [];
    const obj5 = { name: constants.CANCEL_SUBSCRIPTION, params };
    items[0] = obj5;
    obj4 = NavigatorHeader;
    return obj;
  });
  ({ screens, initialStack } = tmp);
  return jsx(onClose(bottom[10]).Navigator, { screens, initialRouteStack });
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default tmp3;
