// Module ID: 14211
// Function ID: 14212
// Name: PasskeyUpsellPromoSheet
// Dependencies: [32, 19, 17, 2048, 21, 558, 576, 14212, 14209, 14208, 6365, 1127, 1370, 5282, 9816, 5746, 2]

// Module 14211 (PasskeyUpsellPromoSheet)
import react_native from "react-native" /* 17 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6365 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 14208 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let _require;
  let first;
  let items;
  let obj4;
  let onRegisterSuccess;
  let setRegistering;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { source: require("AssetRegistry"), style: { height: 190, width: 220, resizeMode: "contain" } };
    const tmp7 = closure_7(Image, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  _require = _slicedToArray(react.useState(""), 2)[1];
  [tmp9, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    onRegisterSuccess = function onRegisterSuccess(merged) {
      const obj = require("PasskeyUpsellActionCreators");
      const result = obj.closePasskeyUpsellPromoSheet();
      const obj2 = require("PasskeyUpsellActionCreators");
      const result1 = obj2.openPasskeyUpsellPromoModal(merged);
    };
    class P {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = NativeCeremoniesDefault;
        const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
        obj2.registerPasskey(obj3);
      }
    }
    cResult[1] = P;
    tmp10 = P;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
    class P {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = NativeCeremoniesDefault;
        const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
        obj2.registerPasskey(obj3);
      }
    }
    tmp11 = I;
  } else {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
    class P {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = NativeCeremoniesDefault;
        const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
        obj2.registerPasskey(obj3);
      }
    }
    const tmp16Result = tmp16(require("intl").t.CjleBl);
    const tmpResult = require("PlatformUtils");
    const isIOSResult = tmpResult.isIOS();
    const string = tmp(tmp2[11]).intl.string;
    const t = tmp(tmp2[11]).t;
    if (isIOSResult) {
      class I {
        constructor() {
          const obj = require("PasskeyUpsellManager");
          obj.markDismissed(constants.USER_DISMISS);
          const obj2 = require("PasskeyUpsellActionCreators");
          const result = obj2.closePasskeyUpsellPromoSheet();
        }
      }
    } else {
      class I {
        constructor() {
          const obj = require("PasskeyUpsellManager");
          obj.markDismissed(constants.USER_DISMISS);
          const obj2 = require("PasskeyUpsellActionCreators");
          const result = obj2.closePasskeyUpsellPromoSheet();
        }
      }
    }
    class B {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        return obj.markDismissed(constants.USER_DISMISS);
      }
    }
    cResult[3] = tmp16Result;
    cResult[4] = tmp19;
    cResult[5] = B;
    tmp14 = B;
    tmp12 = tmp16Result;
    tmp13 = tmp19;
  } else {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
    class P {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = NativeCeremoniesDefault;
        const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
        obj2.registerPasskey(obj3);
      }
    }
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp9) {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
    class P {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = NativeCeremoniesDefault;
        const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
        obj2.registerPasskey(obj3);
      }
    }
    const t2 = tmp(tmp2[11]).t;
    if (tmp9) {
      class I {
        constructor() {
          const obj = require("PasskeyUpsellManager");
          obj.markDismissed(constants.USER_DISMISS);
          const obj2 = require("PasskeyUpsellActionCreators");
          const result = obj2.closePasskeyUpsellPromoSheet();
        }
      }
    } else {
      class I {
        constructor() {
          const obj = require("PasskeyUpsellManager");
          obj.markDismissed(constants.USER_DISMISS);
          const obj2 = require("PasskeyUpsellActionCreators");
          const result = obj2.closePasskeyUpsellPromoSheet();
        }
      }
    }
    cResult[6] = tmp9;
    cResult[7] = tmp21;
  } else {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
  }
  if (cResult[8] === tmp9) {
    class I {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = require("PasskeyUpsellActionCreators");
        const result = obj2.closePasskeyUpsellPromoSheet();
      }
    }
    class P {
      constructor() {
        const obj = PasskeyUpsellManagerDefault;
        obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = NativeCeremoniesDefault;
        const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
        obj2.registerPasskey(obj3);
      }
    }
    if (cResult[13] === tmp9) {
      class I {
        constructor() {
          const obj = require("PasskeyUpsellManager");
          obj.markDismissed(constants.USER_DISMISS);
          const obj2 = require("PasskeyUpsellActionCreators");
          const result = obj2.closePasskeyUpsellPromoSheet();
        }
      }
      class P {
        constructor() {
          const obj = PasskeyUpsellManagerDefault;
          obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
          const obj2 = NativeCeremoniesDefault;
          const obj3 = { setRegistering: importDefault, setError, onRegisterSuccess };
          obj2.registerPasskey(obj3);
        }
      }
      let obj3 = { illustration: first, title: tmp12, description: tmp13, onDismiss: tmp14, actions: closure_8(require("ButtonGroup").ButtonGroup, obj4) };
      class B {
        constructor() {
          const obj = require("PasskeyUpsellManager");
          return obj.markDismissed(constants.USER_DISMISS);
        }
      }
      obj4 = { children: items };
      items = [tmp22, tmp25];
      cResult[16] = tmp22;
      cResult[17] = tmp25;
      cResult[18] = closure_7(tmp30, obj3);
      const tmp32 = closure_7(tmp30, obj3);
    }
    const obj5 = { size: "lg", variant: "secondary", onPress: tmp11, text: tmp24, disabled: tmp9 };
    const tmp27 = closure_7(require("components/Button/Button").Button, obj5);
    class B {
      constructor() {
        const obj = require("PasskeyUpsellManager");
        return obj.markDismissed(constants.USER_DISMISS);
      }
    }
    cResult[13] = tmp9;
    cResult[14] = tmp24;
    cResult[15] = tmp27;
  }
  cResult[8] = tmp9;
  cResult[9] = tmp20;
  cResult[10] = closure_7(require("components/Button/Button").Button, { size: "lg", onPress: tmp10, text: tmp20, loading: tmp9, disabled: tmp9 });
  const tmp23 = closure_7(require("components/Button/Button").Button, { size: "lg", onPress: tmp10, text: tmp20, loading: tmp9, disabled: tmp9 });
}) : (() => {
  let ButtonGroup;
  let intl;
  let obj6;
  let require;
  let setRegistering;
  let string2Result;
  let string3Result;
  let stringResult;
  let tmp10;
  let tmp7;
  function onRegisterSuccess(merged) {
    const obj = require("PasskeyUpsellActionCreators");
    const result = obj.closePasskeyUpsellPromoSheet();
    const obj2 = require("PasskeyUpsellActionCreators");
    const result1 = obj2.openPasskeyUpsellPromoModal(merged);
  }
  let obj = { source: require("AssetRegistry"), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp4 = closure_7(Image, obj);
  [r10018, require] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  [tmp7, importDefault] = react.useState(false);
  let obj2 = {
    illustration: tmp4,
    title: intl.string(require("intl").t.CjleBl),
    description: stringResult,
    onDismiss() {
      const obj = require("PasskeyUpsellManager");
      return obj.markDismissed(constants.USER_DISMISS);
    },
    actions: tmp10(ButtonGroup, obj6)
  };
  _slicedToArray(react.useState(false), 2);
  const PromoSheet = require("PromoSheet").PromoSheet;
  intl = require("intl").intl;
  let obj3 = require("PlatformUtils");
  const isIOSResult = obj3.isIOS();
  const intl2 = require("intl").intl;
  const string = intl2.string;
  const t = require("intl").t;
  if (isIOSResult) {
    stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  ButtonGroup = tmp2(tmp3[15]).ButtonGroup;
  const obj4 = {
    size: "lg",
    onPress() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
      const obj2 = NativeCeremoniesDefault;
      const obj3 = { setRegistering: importDefault, setError: require, onRegisterSuccess };
      obj2.registerPasskey(obj3);
    },
    text: string2Result,
    loading: tmp7,
    disabled: tmp7
  };
  const Button = tmp2(tmp3[13]).Button;
  const intl3 = tmp2(tmp3[11]).intl;
  const string2 = intl3.string;
  const t2 = tmp2(tmp3[11]).t;
  tmp10 = closure_8;
  if (tmp7) {
    string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  const items = [closure_7(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      const obj = require("PasskeyUpsellManager");
      obj.markDismissed(constants.USER_DISMISS);
      const obj2 = require("PasskeyUpsellActionCreators");
      const result = obj2.closePasskeyUpsellPromoSheet();
    },
    text: string3Result,
    disabled: tmp7
  };
  const Button2 = tmp2(tmp3[13]).Button;
  const intl4 = tmp2(tmp3[11]).intl;
  const string3 = intl4.string;
  const t3 = tmp2(tmp3[11]).t;
  if (tmp7) {
    string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  obj6 = { children: items };
  items[1] = closure_7(Button2, obj5);
  return closure_7(PromoSheet, obj2);
});
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default tmp3;
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";
