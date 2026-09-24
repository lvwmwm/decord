// Module ID: 11671
// Function ID: 11672
// Name: AppStoreOverlayAboutSection
// Dependencies: [32, 19, 17, 21, 580, 4790, 558, 568, 1119, 4786, 2]

// Module 11671 (AppStoreOverlayAboutSection)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_12, bottom: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
const createStyles = fn(4790);
let obj = { aboutSection: { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 } };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((description) => {
  const cResult = c.c(18);
  description = description.description;
  closure_9();
  [tmp6, require] = noop.useState(false);
  [first, closure_2] = noop.useState(null);
  if (cResult[0] !== first) {
    const fn = function c(nativeEvent) {
      if (null == first) {
        closure_2(nativeEvent.nativeEvent.lines.length > 3);
      }
    };
    cResult[0] = first;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        tmp = closure_0((arg0) => !arg0);
        return;
      }
    }
    cResult[2] = X;
  } else {
    class X {
      constructor() {
        tmp = closure_0((arg0) => !arg0);
        return;
      }
    }
  }
  if (cResult[3] !== tmp6) {
    class X {
      constructor() {
        tmp = closure_0((arg0) => !arg0);
        return;
      }
    }
    const t = tmp(1119).t;
    const stringResult = obj2.string(tmp6 ? t["6MwJo/"] : t.lBeKY2);
    cResult[3] = tmp6;
    cResult[4] = stringResult;
  } else {
    class X {
      constructor() {
        tmp = closure_0((arg0) => !arg0);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor() {
          tmp = closure_0((arg0) => !arg0);
          return;
        }
      }
      const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = tmp(1119).intl;
      obj3.children = intl.string(tmp(1119).t.CI0vSJ);
      const tmp14 = timestampProducer(tmp(4786).Text, obj3);
      cResult[5] = tmp14;
    } else {
      class X {
        constructor() {
          tmp = closure_0((arg0) => !arg0);
          return;
        }
      }
    }
    if (tmp6) {
      class X {
        constructor() {
          tmp = closure_0((arg0) => !arg0);
          return;
        }
      }
    } else {
      class X {
        constructor() {
          tmp = closure_0((arg0) => !arg0);
          return;
        }
      }
    }
    if (cResult[6] === description) {
      class X {
        constructor() {
          tmp = closure_0((arg0) => !arg0);
          return;
        }
      }
    }
    const obj4 = { variant: "text-sm/medium", color: "text-default", lineClamp: tmp15, onTextLayout: tmp9, children: description };
    const tmp18 = timestampProducer(tmp(4786).Text, obj4);
    cResult[6] = description;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    cResult[9] = tmp18;
  }
}) : ((children) => {
  c0 = undefined;
  first = undefined;
  closure_2 = undefined;
  const tmp = closure_9();
  [tmp3, c0] = noop.useState(false);
  [first, closure_2] = noop.useState(null);
  const items = [first];
  const callback = noop.useCallback((nativeEvent) => {
    if (null == first) {
      closure_2(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
  const obj = { style: tmp.aboutSection, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp8(1119).intl;
  obj2.children = intl2.string(util.t.CI0vSJ);
  const items1 = [timestampProducer(Text_Text.Text, obj2), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: num, onTextLayout: callback, children: children.description }), ];
  let tmp13Result = true === first;
  if (tmp13Result) {
    const obj3 = { hitSlop: rect, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, onPress: null, children: null };
    const obj4 = { expanded: tmp3 };
    obj3.accessibilityState = obj4;
    obj3.onPress = callback1;
    const obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
    obj3.children = tmp13(tmp8(4786).Text, obj5);
    tmp13Result = tmp13(React4, obj3);
  }
  items1[2] = tmp13Result;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
});
