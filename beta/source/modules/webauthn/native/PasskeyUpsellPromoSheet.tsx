// Module ID: 14968
// Function ID: 14969
// Name: PasskeyUpsellPromoSheet
// Dependencies: [32, 19, 17, 2042, 21, 558, 568, 14969, 14966, 14965, 7222, 1119, 1368, 5220, 10649, 5684, 2]

// Module 14968 (PasskeyUpsellPromoSheet)
import NativeCeremoniesDefault from "NativeCeremonies" /* 7222 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 14965 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: tmp(tmp2[7]), style: { height: 190, width: 220, resizeMode: "contain" } };
    const tmp7 = closure_7(Image, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  _require = _slicedToArray(noop.useState(""), 2)[1];
  let obj = require("c");
  [r10035, importDefault] = noop.useState(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    onRegisterSuccess = function onRegisterSuccess(merged) {
      const result = setRegistering(onRegisterSuccess[8]).closePasskeyUpsellPromoSheet();
      const obj = setRegistering(onRegisterSuccess[8]);
      const result1 = setRegistering(onRegisterSuccess[8]).openPasskeyUpsellPromoModal(merged);
    };
    class P {
      constructor() {
        obj = closure_1(closure_2[9]);
        markDismissedResult = obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_1(closure_2[10]);
        obj1 = { setRegistering: closure_1, setError: closure_0, onRegisterSuccess };
        registerPasskeyResult = obj2.registerPasskey(obj1);
        return;
      }
    }
    cResult[1] = P;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        obj = closure_1(onRegisterSuccess[9]);
        markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
        obj2 = closure_1(onRegisterSuccess[8]);
        result = obj2.closePasskeyUpsellPromoSheet();
        return;
      }
    }
    class P {
      constructor() {
        obj = closure_1(closure_2[9]);
        markDismissedResult = obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_1(closure_2[10]);
        obj1 = { setRegistering: closure_1, setError: closure_0, onRegisterSuccess };
        registerPasskeyResult = obj2.registerPasskey(obj1);
        return;
      }
    }
  } else {
    class I {
      constructor() {
        obj = closure_1(onRegisterSuccess[9]);
        markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
        obj2 = closure_1(onRegisterSuccess[8]);
        result = obj2.closePasskeyUpsellPromoSheet();
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        obj = closure_1(onRegisterSuccess[9]);
        markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
        obj2 = closure_1(onRegisterSuccess[8]);
        result = obj2.closePasskeyUpsellPromoSheet();
        return;
      }
    }
    class P {
      constructor() {
        obj = closure_1(closure_2[9]);
        markDismissedResult = obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        obj2 = closure_1(closure_2[10]);
        obj1 = { setRegistering: closure_1, setError: closure_0, onRegisterSuccess };
        registerPasskeyResult = obj2.registerPasskey(obj1);
        return;
      }
    }
    const tmp12Result = tmp12(tmp(tmp2[11]).t.CjleBl);
    const tmpResult = tmp(tmp2[12]);
    const string = tmp(tmp2[11]).intl.string;
    const B = tmp(tmp2[11]).t;
    if (isIOSResult) {
      class I {
        constructor() {
          obj = closure_1(onRegisterSuccess[9]);
          markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
          obj2 = closure_1(onRegisterSuccess[8]);
          result = obj2.closePasskeyUpsellPromoSheet();
          return;
        }
      }
    } else {
      class I {
        constructor() {
          obj = closure_1(onRegisterSuccess[9]);
          markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
          obj2 = closure_1(onRegisterSuccess[8]);
          result = obj2.closePasskeyUpsellPromoSheet();
          return;
        }
      }
    }
    class B {
      constructor() {
        obj = closure_1(onRegisterSuccess[9]);
        return obj.markDismissed(closure_1_6.USER_DISMISS);
      }
    }
    cResult[3] = tmp12Result;
    cResult[4] = tmp15;
    cResult[5] = B;
    isIOSResult = tmp(tmp2[12]).isIOS();
  } else {
    class I {
      constructor() {
        obj = closure_1(onRegisterSuccess[9]);
        markDismissedResult = obj.markDismissed(closure_1_6.USER_DISMISS);
        obj2 = closure_1(onRegisterSuccess[8]);
        result = obj2.closePasskeyUpsellPromoSheet();
        return;
      }
    }
  }
}) : (() => {
  function onRegisterSuccess(merged) {
    const result = setRegistering(onRegisterSuccess[8]).closePasskeyUpsellPromoSheet();
    const obj = setRegistering(onRegisterSuccess[8]);
    const result1 = setRegistering(onRegisterSuccess[8]).openPasskeyUpsellPromoModal(merged);
  }
  let obj = { source: require("module_14969"), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp4 = closure_7(Image, { source: require("module_14969"), style: { height: 190, width: 220, resizeMode: "contain" } });
  [r10018, require] = noop.useState("");
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  [tmp7, importDefault] = noop.useState(false);
  const obj2 = { illustration: tmp4, title: null, description: null, onDismiss: null, actions: null };
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.CjleBl);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const obj3 = require("PlatformUtils");
  const intl2 = require("util").intl;
  const string = intl2.string;
  const t = require("util").t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj2.description = stringResult;
  obj2.onDismiss = function onDismiss() {
    return setRegistering(onRegisterSuccess[9]).markDismissed(constants.USER_DISMISS);
  };
  const obj4 = {
    size: "lg",
    onPress() {
      PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
      NativeCeremoniesDefault.registerPasskey({ setRegistering, setError, onRegisterSuccess });
    },
    text: null,
    loading: null,
    disabled: null
  };
  const intl3 = tmp2(tmp3[11]).intl;
  const string2 = intl3.string;
  const t2 = tmp2(tmp3[11]).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  obj4.text = string2Result;
  obj4.loading = tmp7;
  obj4.disabled = tmp7;
  const items = [closure_7(require("components/Button/Button").Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      setRegistering(onRegisterSuccess[9]).markDismissed(constants.USER_DISMISS);
      const obj = setRegistering(onRegisterSuccess[9]);
      const result = setRegistering(onRegisterSuccess[8]).closePasskeyUpsellPromoSheet();
    },
    text: null,
    disabled: null
  };
  const intl4 = tmp2(tmp3[11]).intl;
  const string3 = intl4.string;
  const t3 = tmp2(tmp3[11]).t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  const obj6 = { children: null };
  obj5.text = string3Result;
  obj5.disabled = tmp7;
  items[1] = closure_7(require("components/Button/Button").Button, obj5);
  obj6.children = items;
  obj2.actions = closure_8(require("ButtonGroup").ButtonGroup, obj6);
  return closure_7(require("PromoSheet").PromoSheet, obj2);
});
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";
