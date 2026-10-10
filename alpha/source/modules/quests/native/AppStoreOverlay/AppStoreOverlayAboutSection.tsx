// Module ID: 12956
// Function ID: 12957
// Name: AppStoreOverlayAboutSection
// Dependencies: [32, 19, 17, 21, 587, 5092, 558, 576, 1126, 5088, 2]

// Module 12956 (AppStoreOverlayAboutSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const intl3 = tmp(1126);
const Text_Text = tmp(5088);
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
let obj = { aboutSection: obj2 };
obj2 = { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayAboutSection(arg0) {
  let closure_129_1;
  let closure_3;
  let description;
  let first;
  let intl;
  let onSeeMorePress;
  let tmp6;
  let tmp9;
  let tmp = require;
  const tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(20);
  ({ description, onSeeMorePress } = arg0);
  closure_9();
  [tmp6, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, closure_3] = react.useState(null);
  if (cResult[0] !== first) {
    const fn = function c(nativeEvent) {
      if (null == first) {
        closure_3(nativeEvent.nativeEvent.lines.length > 3);
      }
    };
    cResult[0] = first;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== onSeeMorePress) {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
    cResult[2] = onSeeMorePress;
    cResult[3] = X;
  } else {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
  }
  if (cResult[4] !== tmp6) {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
    const string = tmp12.string;
    const t = intl3.t;
    cResult[4] = tmp6;
    cResult[5] = string(tmp6 ? t["6MwJo/"] : t.lBeKY2);
    const stringResult = string(tmp6 ? t["6MwJo/"] : t.lBeKY2);
  } else {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
    const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.CI0vSJ) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    cResult[6] = metroRequire(Text, obj2);
    const tmp15 = metroRequire(Text, obj2);
  } else {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
  }
  if (tmp6) {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
  } else {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
  }
  if (cResult[7] === description) {
    class X {
      constructor() {
        tmp = closure_1((arg0) => {
          const tmp = arg0;
          if (!tmp) {
            if (onSeeMorePress != null) {
              tmp2();
            }
          }
          return !arg0;
        });
        return;
      }
    }
  }
  cResult[7] = description;
  cResult[8] = tmp9;
  cResult[9] = tmp16;
  cResult[10] = metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: tmp16, onTextLayout: tmp9, children: description });
  metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: tmp16, onTextLayout: tmp9, children: description });
}) : (function AppStoreOverlayAboutSection(onSeeMorePress) {
  let c1;
  let closure_3;
  let first;
  let intl2;
  let items2;
  let obj4;
  let obj5;
  let tmp3;
  onSeeMorePress = onSeeMorePress.onSeeMorePress;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const description = onSeeMorePress.description;
  let tmp = closure_9();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c1] = tmp2;
  [first, closure_3] = react.useState(null);
  const items = [first];
  const items1 = [onSeeMorePress];
  const callback = react.useCallback((nativeEvent) => {
    if (null == first) {
      closure_3(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    let tmp = _undefined((arg0) => {
      const tmp = arg0;
      if (!tmp) {
        if (onSeeMorePress != null) {
          tmp2();
        }
      }
      return !arg0;
    });
  }, items1);
  const intl = intl3.intl;
  const string = intl.string;
  const t = intl3.t;
  const stringResult = string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: items2 };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.CI0vSJ) };
  const Text = tmp8(5088).Text;
  intl2 = tmp8(1126).intl;
  items2 = [metroRequire(Text, obj2), , ];
  const Text2 = tmp8(5088).Text;
  const tmp11 = metroImportDefault;
  const tmp12 = hasOwnProperty;
  items2[1] = metroRequire(Text2, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: description });
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj4, onPress: callback1, children: metroRequire(Text_Text.Text, obj5) };
    obj4 = { expanded: tmp3 };
    obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    tmp13Result = tmp13(React3, obj3);
  }
  items2[2] = tmp13Result;
  return tmp11(tmp12, obj);
});
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default tmp4;
