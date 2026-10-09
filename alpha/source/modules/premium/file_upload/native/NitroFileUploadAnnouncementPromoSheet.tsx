// Module ID: 17592
// Function ID: 17593
// Name: NitroFileUploadAnnouncementPromoSheet
// Dependencies: [19, 17, 2061, 21, 5091, 587, 558, 576, 5393, 17593, 1126, 2665, 5376, 10290, 2]

// Module 17592 (NitroFileUploadAnnouncementPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import _modDef2665 from "module_2665" /* 2665 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { illustration: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroFileUploadAnnouncementPromoSheet(markAsDismissed) {
  let closure_2;
  let ref;
  let tmp15;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = markAsDismissed;
  const obj = markAsDismissed(576);
  const cResult = obj.c(18);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_7();
  importDefault = react.useRef(false);
  if (cResult[0] !== markAsDismissed) {
    const fn = function u(arg0) {
      if (!ref.current) {
        tmp.current = true;
        markAsDismissed(arg0);
      }
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] !== tmp5) {
    const fn2 = function h() {
      closure_2(ContentDismissActionType.AUTO_DISMISS);
    };
    cResult[2] = tmp5;
    cResult[3] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  const tmpResult = tmp(5393);
  const unmountEffect = tmpResult.useUnmountEffect(tmp6);
  if (cResult[4] !== tmp5) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[4] = tmp5;
    cResult[5] = I;
  } else {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const tmp10 = jsx(tmp(17593).FileUploadSpotIllustration, { accessible: false, resizeMode: "contain" });
    cResult[6] = tmp10;
    tmp9 = tmp10;
  } else {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[7] !== tmp4.illustration) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const tmp13 = <View style={tmp4.illustration}>{tmp9}</View>;
    cResult[7] = tmp4.illustration;
    cResult[8] = tmp13;
  } else {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const stringResult = obj4.string(_modDef2665.IyCdAU);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(_modDef2665.LhfXZN);
    cResult[9] = stringResult;
    cResult[10] = stringResult1;
    tmp15 = stringResult1;
  } else {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp15 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    const stringResult2 = obj5.string(tmp(1126).t["NX+WJN"]);
    cResult[11] = stringResult2;
    tmp19 = stringResult2;
  } else {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[12] !== tmp8) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[12] = tmp8;
    cResult[13] = jsx(tmp(5376).Button, { grow: true, size: "lg", variant: "primary", text: tmp19, onPress: tmp8 });
    const tmp22 = jsx(tmp(5376).Button, { grow: true, size: "lg", variant: "primary", text: tmp19, onPress: tmp8 });
  } else {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[14] === tmp8) {
    class I {
      constructor() {
        closure_2(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  cResult[14] = tmp8;
  cResult[15] = tmp11;
  cResult[16] = tmp21;
  cResult[17] = jsx(tmp(10290).PromoSheet, { illustration: tmp11, title: tmp14, description: tmp15, onDismiss: tmp8, actions: tmp21 });
  jsx(tmp(10290).PromoSheet, { illustration: tmp11, title: tmp14, description: tmp15, onDismiss: tmp8, actions: tmp21 });
}) : (function NitroFileUploadAnnouncementPromoSheet(markAsDismissed) {
  let intl3;
  let ref;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  importDefault = react.useRef(false);
  const items = [markAsDismissed];
  const callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  const obj = markAsDismissed(callback[8]);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const callback1 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const PromoSheet = markAsDismissed(callback[13]).PromoSheet;
  const intl = markAsDismissed(callback[10]).intl;
  const intl2 = markAsDismissed(callback[10]).intl;
  ({ grow: true, size: "lg", variant: "primary", text: intl3.string(markAsDismissed(callback[10]).t["NX+WJN"]), onPress: callback1 });
  const Button = markAsDismissed(callback[12]).Button;
  intl3 = markAsDismissed(callback[10]).intl;
  return <PromoSheet illustration={null} title={intl.string(require("module_2665").IyCdAU)} description={intl2.string(require("module_2665").LhfXZN)} onDismiss={callback1} actions={null} />;
});
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx");

export default tmp2;
