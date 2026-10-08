// Module ID: 7094
// Function ID: 7095
// Name: GiftCardMobileConsumptionActionSheet
// Dependencies: [19, 17, 2060, 21, 5090, 587, 558, 576, 1630, 5054, 7095, 1126, 2271, 5086, 5375, 5373, 6829, 2]

// Module 7094 (GiftCardMobileConsumptionActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import _modDef2271 from "module_2271" /* 2271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheet: obj2, container: obj3, illustration: obj4, body: { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  let closure_2;
  let closure_3;
  let items2;
  let ref;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp9;
  const tmp = markAsDismissed;
  let obj = markAsDismissed(576);
  const cResult = obj.c(34);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  if (cResult[0] !== markAsDismissed) {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
      }
    }
    const items = [markAsDismissed];
    cResult[0] = markAsDismissed;
    cResult[1] = S;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
      }
    }
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
      }
    }
    const items1 = [];
    cResult[3] = tmp11;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = tmp11;
  } else {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
      }
    }
    tmp10 = cResult[4];
  }
  const effect1 = obj2.useEffect(tmp9, tmp10);
  if (cResult[5] !== markAsDismissed) {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
      }
    }
    cResult[5] = markAsDismissed;
    cResult[6] = tmp14;
  } else {
    class S {
      constructor() {
        closure_2.current = markAsDismissed;
      }
    }
  }
  react = tmp13;
  if (cResult[7] !== tmp13) {
    class A {
      constructor() {
        return tmp14(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[7] = tmp13;
    cResult[8] = A;
  } else {
    class A {
      constructor() {
        return tmp14(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[9] !== bottom) {
    class A {
      constructor() {
        return tmp14(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp17[0] = bottom;
    cResult[9] = bottom;
    cResult[10] = tmp17;
  } else {
    class A {
      constructor() {
        return tmp14(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[11] === tmp4.container) {
    let tmp18;
    let tmp23;
    let tmp27;
    class A {
      constructor() {
        return tmp14(ContentDismissActionType.USER_DISMISS);
      }
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
      const tmp19 = closure_6(tmp(7095).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 });
      cResult[14] = tmp19;
      tmp18 = tmp19;
    } else {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[15] !== tmp4.illustration) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj3 = { style: tmp4.illustration, children: tmp18 };
      cResult[15] = tmp4.illustration;
      cResult[16] = closure_6(View, obj3);
      const tmp22 = closure_6(View, obj3);
    } else {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol2 = Symbol;
    const body = tmp4.body;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult = obj4.string(_modDef2271.V3DI1E);
      cResult[17] = stringResult;
      tmp23 = stringResult;
    } else {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[18] !== tmp4.body) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj5 = { variant: "text-md/medium", color: "text-default", style: body, children: tmp23 };
      cResult[18] = tmp4.body;
      cResult[19] = closure_6(tmp(5086).Text, obj5);
      const tmp26 = closure_6(tmp(5086).Text, obj5);
    } else {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult1 = obj6.string(_modDef2271.YZePWx);
      cResult[20] = stringResult1;
      tmp27 = stringResult1;
    } else {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[21] !== tmp13) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj7 = {
        size: "lg",
        variant: "secondary",
        grow: true,
        text: tmp27,
        onPress() {
              return tmp14(ContentDismissActionType.USER_DISMISS);
            }
      };
      cResult[21] = tmp13;
      cResult[22] = closure_6(tmp(5375).Button, obj7);
      const tmp30 = closure_6(tmp(5375).Button, obj7);
    } else {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[23] === tmp20) {
      class A {
        constructor() {
          return tmp14(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const obj8 = { spacing: nativeDefault.space.PX_16, children: items2 };
    const Stack = tmp(5373).Stack;
    items2 = [tmp20, tmp25, tmp29];
    cResult[23] = tmp20;
    cResult[24] = tmp25;
    cResult[25] = tmp29;
    cResult[26] = closure_7(Stack, obj8);
    const tmp33 = closure_7(Stack, obj8);
  }
  const items3 = [tmp4.container, tmp16];
  cResult[11] = tmp4.container;
  cResult[12] = tmp16;
  cResult[13] = items3;
}) : (function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  let Stack;
  let closure_2;
  let closure_3;
  let intl;
  let intl2;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let ref;
  markAsDismissed = markAsDismissed.markAsDismissed;
  react = undefined;
  const tmp = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = react.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = react.useEffect(() => {
    let ref2;
    return () => {
      if (!ref.current) {
        ref2.current(constants.AUTO_DISMISS);
      }
    };
  }, []);
  const items1 = [markAsDismissed];
  react = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return closure_3(ContentDismissActionType.USER_DISMISS);
    },
    children: closure_6(View, obj2)
  };
  obj2 = { style: items2, children: closure_7(Stack, obj3) };
  items2 = [tmp.container, { paddingBottom: bottom }];
  BottomSheet = markAsDismissed(6829).BottomSheet;
  obj3 = { spacing: nativeDefault.space.PX_16, children: items3 };
  Stack = markAsDismissed(5373).Stack;
  items3 = [, , ];
  const obj4 = { style: tmp.illustration, children: closure_6(markAsDismissed(7095).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) };
  items3[0] = closure_6(View, obj4);
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: intl.string(_modDef2271.V3DI1E) };
  const Text = markAsDismissed(5086).Text;
  intl = markAsDismissed(1126).intl;
  items3[1] = closure_6(Text, obj5);
  const obj6 = {
    size: "lg",
    variant: "secondary",
    grow: true,
    text: intl2.string(_modDef2271.YZePWx),
    onPress() {
      return closure_3(ContentDismissActionType.USER_DISMISS);
    }
  };
  const Button = markAsDismissed(5375).Button;
  intl2 = markAsDismissed(1126).intl;
  items3[2] = closure_6(Button, obj6);
  return closure_6(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default tmp4;
