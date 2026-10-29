// Module ID: 10856
// Function ID: 10857
// Name: ConjureAppInstallSheet
// Dependencies: [109, 19, 21, 558, 576, 5617, 5247, 10857, 2]

// Module 10856 (ConjureAppInstallSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_3 = ["sheetKey", "dismissOAuthModal"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppInstallSheet(sheetKey) {
  let closure_0;
  let closure_1;
  let closure_4;
  let context;
  let ref;
  let tmp11;
  let tmp4;
  const tmp = context;
  let obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] !== sheetKey) {
    sheetKey = sheetKey.sheetKey;
    importDefault = sheetKey;
    const dismissOAuthModal = sheetKey.dismissOAuthModal;
    _require = dismissOAuthModal;
    const tmp8 = _objectWithoutProperties(sheetKey, ref);
    cResult[0] = sheetKey;
    cResult[1] = dismissOAuthModal;
    cResult[2] = tmp8;
    cResult[3] = sheetKey;
    tmp4 = tmp8;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
    importDefault = cResult[3];
  }
  context = react.useContext(require("react"));
  ref = react.useRef(false);
  const tmp9 = importDefault;
  if (cResult[4] !== tmp3) {
    const fn = function v() {
      if (!ref.current) {
        tmp.current = true;
        if (closure_0 != null) {
          tmp2();
        }
      }
    };
    cResult[4] = tmp3;
    cResult[5] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  _objectWithoutProperties = tmp11;
  if (cResult[6] === context) {
    let tmp12;
    let tmp13;
    let tmp16;
    let tmp15;
    if (cResult[7] === tmp11) {
      tmp12 = cResult[8];
      tmp13 = cResult[9];
    }
    const effect = obj2.useEffect(tmp12, tmp13);
    if (cResult[10] !== tmp11) {
      const fn2 = function j() {
        return closure_4;
      };
      const items = [tmp11];
      cResult[10] = tmp11;
      class M {
        constructor() {
          closure_4();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(closure_1);
        }
      }
      cResult[11] = fn2;
      cResult[12] = items;
      tmp16 = items;
      tmp15 = fn2;
    } else {
      tmp15 = cResult[11];
      tmp16 = cResult[12];
    }
    const effect1 = obj2.useEffect(tmp15, tmp16);
    if (cResult[13] === tmp11) {
      let tmp18;
      if (cResult[14] === tmp5) {
        tmp18 = cResult[15];
      }
      if (cResult[16] === tmp18) {
        let tmp19;
        if (cResult[17] === tmp4) {
          tmp19 = cResult[18];
        }
        return tmp19;
      }
      class M {
        constructor() {
          closure_4();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(closure_1);
        }
      }
      tmp9(tmp[7]);
      const merged = Object.assign(tmp4);
      const tmp24 = <tmp9Result dismissOAuthModal={tmp18} />;
      cResult[16] = tmp18;
      cResult[17] = tmp4;
      cResult[18] = tmp24;
      tmp19 = tmp24;
    }
    class M {
      constructor() {
        closure_4();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(closure_1);
      }
    }
    cResult[13] = tmp11;
    cResult[14] = tmp5;
    cResult[15] = M;
    tmp18 = M;
  }
  class C {
    constructor() {
      let transitionState;
      if (context != null) {
        transitionState = obj.transitionState;
      }
      if ("exiting" === transitionState) {
        closure_4();
        context.onLeave();
      }
    }
  }
  const items1 = [context, tmp11];
  cResult[6] = context;
  cResult[7] = tmp11;
  cResult[8] = C;
  cResult[9] = items1;
  tmp13 = items1;
  tmp12 = C;
}) : (function ConjureAppInstallSheet(sheetKey) {
  sheetKey = sheetKey.sheetKey;
  const dismissOAuthModal = sheetKey.dismissOAuthModal;
  const merged = Object.assign(sheetKey, Object.assign({ sheetKey: 0, dismissOAuthModal: 0 }));
  let context;
  context = react.useContext(dismissOAuthModal(context[5]));
  const ref = react.useRef(false);
  const items = [dismissOAuthModal];
  const callback = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      if (dismissOAuthModal != null) {
        tmp2();
      }
    }
  }, items);
  const items1 = [context, callback];
  const effect = react.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = obj.transitionState;
    }
    if ("exiting" === transitionState) {
      callback();
      context.onLeave();
    }
  }, items1);
  const items2 = [callback];
  const effect1 = react.useEffect(() => callback, items2);
  const items3 = [callback, sheetKey];
  const callback1 = react.useCallback(() => {
    callback();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(sheetKey);
  }, items3);
  dismissOAuthModal(context[7]);
  const merged1 = Object.assign(merged);
  return <tmp7 dismissOAuthModal={callback1} />;
});
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureAppInstallSheet.tsx");

export default tmp2;
