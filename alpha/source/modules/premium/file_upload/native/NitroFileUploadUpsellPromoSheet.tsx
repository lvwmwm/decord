// Module ID: 17597
// Function ID: 17598
// Name: NitroFileUploadUpsellPromoSheet
// Dependencies: [19, 17, 1085, 2061, 21, 5091, 587, 558, 576, 5393, 7087, 9489, 17593, 1126, 2665, 5376, 10290, 2]

// Module 17597 (NitroFileUploadUpsellPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let flag, importDefault, obj1, openUserSettingsResult, tmp2;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ AnalyticsPages: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { illustration: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
  let loading;
  let onPress;
  let ref;
  let ref2;
  let tmp15;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp6;
  const tmp = markAsDismissed;
  let obj = markAsDismissed(U[8]);
  const cResult = obj.c(23);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_9();
  let obj2 = react;
  importDefault = react.useRef(false);
  if (cResult[0] !== markAsDismissed) {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
    cResult[0] = markAsDismissed;
    cResult[1] = U;
  } else {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
  }
  U = tmp5;
  react = obj2.useRef(ContentDismissActionType.AUTO_DISMISS);
  if (cResult[2] !== tmp5) {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
    cResult[2] = tmp5;
    cResult[3] = tmp7;
    tmp6 = tmp7;
  } else {
    class U {
      constructor(arg0) {
        if (!closure_1.current) {
          tmp2 = markAsDismissed;
          flag = true;
          tmp.current = true;
          tmp3 = markAsDismissed;
          tmp4 = markAsDismissed(markAsDismissed);
        }
        return;
      }
    }
  }
  const tmpResult = tmp(U[9]);
  const unmountEffect = tmpResult.useUnmountEffect(tmp6);
  if (cResult[4] !== tmp5) {
    class A {
      constructor() {
        tmp = closure_2(ContentDismissActionType.TAKE_ACTION);
        obj = closure_0(closure_2[10]);
        obj1 = { screen: UserSettingsSections.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1);
        return;
      }
    }
    cResult[4] = tmp5;
    cResult[5] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_2(ContentDismissActionType.TAKE_ACTION);
        obj = closure_0(closure_2[10]);
        obj1 = { screen: UserSettingsSections.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1);
        return;
      }
    }
  }
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, tmp9, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  require("usePremiumFeatureUpsellGetNitro")(false, tmp9, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  if (cResult[6] !== onPress) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    cResult[6] = onPress;
    cResult[7] = M;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[8] !== tmp5) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    cResult[8] = tmp5;
    cResult[9] = tmp14;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const tmp16 = jsx(tmp(U[12]).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
    cResult[10] = tmp16;
    tmp15 = tmp16;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[11] !== tmp4.illustration) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const tmp19 = <onPress style={tmp4.illustration}>{tmp15}</onPress>;
    cResult[11] = tmp4.illustration;
    cResult[12] = tmp19;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const stringResult = obj5.string(require("module_2665")["Uty2/X"]);
    const intl = tmp(tmp2[13]).intl;
    const stringResult1 = intl.string(require("module_2665").VAgI8Q);
    cResult[13] = stringResult;
    cResult[14] = stringResult1;
    tmp21 = stringResult1;
    tmp20 = stringResult;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    tmp21 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    const stringResult2 = obj6.string(require("module_2665").mRy6sO);
    cResult[15] = stringResult2;
    tmp24 = stringResult2;
  } else {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (!loading) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
  }
  if (cResult[16] === loading) {
    class M {
      constructor() {
        closure_3.current = ContentDismissActionType.TAKE_ACTION;
        tmp = onPress();
        return;
      }
    }
    if (cResult[19] === tmp13) {
      class M {
        constructor() {
          closure_3.current = ContentDismissActionType.TAKE_ACTION;
          tmp = onPress();
          return;
        }
      }
    }
    cResult[19] = tmp13;
    cResult[20] = tmp27;
    cResult[21] = tmp17;
    cResult[22] = jsx(tmp(U[16]).PromoSheet, { illustration: tmp17, title: tmp20, description: tmp21, onDismiss: tmp13, actions: tmp27 });
    const tmp31 = jsx(tmp(U[16]).PromoSheet, { illustration: tmp17, title: tmp20, description: tmp21, onDismiss: tmp13, actions: tmp27 });
  }
  cResult[16] = loading;
  cResult[17] = null;
  cResult[18] = jsx(tmp(U[15]).Button, { grow: true, size: "lg", variant: "primary", loading, text: tmp24, onPress: null });
  const tmp28 = jsx(tmp(U[15]).Button, { grow: true, size: "lg", variant: "primary", loading, text: tmp24, onPress: null });
}) : (function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
  let intl3;
  let loading;
  let onPress;
  let ref;
  let ref2;
  let tmp9;
  markAsDismissed = markAsDismissed.markAsDismissed;
  react = undefined;
  onPress = undefined;
  const tmp = closure_9();
  importDefault = react.useRef(false);
  const items = [markAsDismissed];
  const callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  react = react.useRef(ContentDismissActionType.AUTO_DISMISS);
  let obj = markAsDismissed(callback[9]);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ref2.current);
  });
  const items1 = [callback];
  const callback1 = react.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj = openUserSettings;
    const obj2 = { screen: metroRequire.PREMIUM };
    obj.openUserSettings(obj2);
  }, items1);
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  const items2 = [onPress];
  const items3 = [callback];
  require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  const callback2 = react.useCallback(() => {
    ref2.current = ContentDismissActionType.TAKE_ACTION;
    onPress();
  }, items2);
  const callback3 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const PromoSheet = markAsDismissed(callback[16]).PromoSheet;
  const intl = markAsDismissed(callback[13]).intl;
  const intl2 = markAsDismissed(callback[13]).intl;
  ({ grow: true, size: "lg", variant: "primary", loading, text: intl3.string(require("module_2665").mRy6sO), onPress: tmp9 });
  const Button = markAsDismissed(callback[15]).Button;
  intl3 = markAsDismissed(callback[13]).intl;
  tmp9 = null;
  if (!loading) {
    tmp9 = callback2;
  }
  return <PromoSheet illustration={null} title={intl.string(require("module_2665")["Uty2/X"])} description={intl2.string(require("module_2665").VAgI8Q)} onDismiss={callback3} actions={null} />;
});
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default tmp3;
