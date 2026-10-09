// Module ID: 16080
// Function ID: 16081
// Name: UserSettingsDesignSystemTooltip
// Dependencies: [32, 19, 17, 21, 5091, 558, 576, 8434, 9414, 5376, 6889, 6266, 6267, 5087, 6842, 6810, 2]

// Module 16080 (UserSettingsDesignSystemTooltip)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6810 */;
import LayerScope2 from "LayerScope" /* 6842 */;
import DeviceOrientation from "DeviceOrientation" /* 8434 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1 } });
let closure_9 = ["top", "bottom", "left", "right"];
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanRotate() {
  let first;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let obj = first(576);
  const cResult = obj.c(6);
  [first, tmp4] = react.useState(false);
  if (cResult[0] !== first) {
    const fn = function n() {
      const obj = DeviceOrientation;
      if (first) {
        obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
      } else {
        const result = obj.lockOrientationForiOS();
      }
    };
    cResult[0] = first;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const effect = obj2.useEffect(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      return () => {
        const obj = first(closure_1_1[7]);
        return obj.lockOrientationForiOS();
      };
    };
    const items = [];
    cResult[2] = fn2;
    cResult[3] = items;
    tmp8 = items;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect1 = obj2.useEffect(tmp7, tmp8);
  if (cResult[4] !== first) {
    const items1 = [first, tmp4];
    cResult[4] = first;
    cResult[5] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function useCanRotate() {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(false);
  const effect = react.useEffect(() => {
    const obj = DeviceOrientation;
    if (first) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = react.useEffect(() => () => {
    const obj = first(closure_1_1[7]);
    return obj.lockOrientationForiOS();
  }, []);
  const items = [first, tmp3];
  return items;
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content() {
  let closure_1;
  let first1;
  let first2;
  let items;
  let tmp12;
  let tmp8;
  let tmp9;
  let visible;
  let obj = visible(576);
  const cResult = obj.c(23);
  const tmp4 = closure_8();
  [visible, dependencyMap] = react.useState(false);
  [tmp8, tmp9] = closure_10();
  _slicedToArray(closure_10(), 2);
  [first1, tmp12] = react.useState("top");
  let str = "Show tooltip";
  const obj2 = react;
  if (visible) {
    str = "Hide tooltip";
  }
  const ref = obj2.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return closure_1(false);
    };
    cResult[0] = fn;
    first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === first1) {
    let tmp15;
    if (cResult[2] === visible) {
      tmp15 = cResult[3];
    }
    const tmpResult = visible(9414);
    const tooltip = tmpResult.useTooltip(ref, tmp15);
    if (cResult[4] !== visible) {
      class U {
        constructor() {
          closure_1(!first);
        }
      }
      cResult[4] = visible;
      cResult[5] = U;
    } else {
      class U {
        constructor() {
          closure_1(!first);
        }
      }
    }
    if (cResult[6] === tmp17) {
      class U {
        constructor() {
          closure_1(!first);
        }
      }
      if (cResult[9] === tmp4.container) {
        class U {
          constructor() {
            closure_1(!first);
          }
        }
        if (cResult[12] === tmp8) {
          let tmp28;
          let tmp32;
          class U {
            constructor() {
              closure_1(!first);
            }
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
            const mapped = closure_9.map((label) => {
              const obj = { label, value: label };
              return closure_1_5(first(closure_1[11]).TableRadioRow, obj, label);
            });
            cResult[15] = mapped;
            tmp28 = mapped;
          } else {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
          }
          if (cResult[16] !== first1) {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
            const obj3 = { title: "Position", value: first1, onChange: tmp12, hasIcons: false, children: tmp28 };
            cResult[16] = first1;
            cResult[17] = closure_5(visible(6267).TableRadioGroup, obj3);
            const tmp31 = closure_5(visible(6267).TableRadioGroup, obj3);
          } else {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
            const tmp34 = closure_5(closure_12, {});
            cResult[18] = tmp34;
            tmp32 = tmp34;
          } else {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
          }
          if (cResult[19] === tmp21) {
            class U {
              constructor() {
                closure_1(!first);
              }
            }
          }
          const obj4 = { children: items };
          items = [tmp21, tmp25, tmp30, tmp32];
          cResult[19] = tmp21;
          cResult[20] = tmp25;
          cResult[21] = tmp30;
          cResult[22] = closure_7(closure_6, obj4);
          const tmp38 = closure_7(closure_6, obj4);
        }
        const obj5 = { label: "Unlock Orientation", value: tmp8, onValueChange: tmp9 };
        cResult[12] = tmp8;
        cResult[13] = tmp9;
        cResult[14] = closure_5(visible(6889).TableSwitchRow, obj5);
        const tmp27 = closure_5(visible(6889).TableSwitchRow, obj5);
      }
      const obj6 = { style: tmp4.container, children: tmp18 };
      cResult[9] = tmp4.container;
      cResult[10] = tmp18;
      cResult[11] = closure_5(View, obj6);
      const tmp24 = closure_5(View, obj6);
    }
    const obj7 = { ref, onPress: tmp17, variant: "primary", text: str, size: "md" };
    cResult[6] = tmp17;
    cResult[7] = str;
    cResult[8] = closure_5(visible(5376).Button, obj7);
    const tmp20 = closure_5(visible(5376).Button, obj7);
  }
  const obj8 = { label: "NEW", position: first1, visible, onPress: first2 };
  cResult[1] = first1;
  cResult[2] = visible;
  cResult[3] = obj8;
  tmp15 = obj8;
}) : (function Content() {
  let closure_1;
  let first1;
  let items1;
  let obj5;
  let tmp5;
  let tmp6;
  let obj = react;
  const tmp = closure_8();
  const tmp2 = first1(react.useState(false), 2);
  const visible = tmp2[0];
  dependencyMap = tmp2[1];
  [tmp5, tmp6] = first1(closure_10(), 2);
  first1(closure_10(), 2);
  const tmp7 = first1(react.useState("top"), 2);
  first1 = tmp7[0];
  let str = "Show tooltip";
  const tmp9 = tmp7[1];
  if (visible) {
    str = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items = [first1, visible];
  const memo = obj.useMemo(() => ({
    label: "NEW",
    position: first1,
    visible,
    onPress() {
      return closure_1_1(false);
    }
  }), items);
  const obj2 = visible(9414);
  const tooltip = obj2.useTooltip(ref, memo);
  const obj3 = { children: items1 };
  const obj4 = { style: tmp.container, children: closure_5(visible(5376).Button, obj5) };
  obj5 = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  items1 = [closure_5(View, obj4), closure_5(visible(6889).TableSwitchRow, { label: "Unlock Orientation", value: tmp5, onValueChange: tmp6 }), , ];
  const obj6 = {
    title: "Position",
    value: first1,
    onChange: tmp9,
    hasIcons: false,
    children: closure_9.map((label) => {
      const obj = { label, value: label };
      return closure_1_5(first(closure_1[11]).TableRadioRow, obj, label);
    })
  };
  const TableRadioGroup = visible(6267).TableRadioGroup;
  items1[2] = closure_5(TableRadioGroup, obj6);
  items1[3] = closure_5(closure_12, {});
  return closure_7(closure_6, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TooltipNote() {
  let first;
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { padding: 16, paddingTop: 16 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", style: first, children: items };
    const Text = tmp(5087).Text;
    items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing", hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }), " on the surface you expect to see the tooltip."];
    const tmp8 = metroImportDefault(Text, obj3);
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function TooltipNote() {
  let items;
  const obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: items };
  const Text = Text_Text.Text;
  items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing", hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }), " on the surface you expect to see the tooltip."];
  return metroImportDefault(Text, obj);
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemTooltip() {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: hasOwnProperty(closure_11, {}) };
    const LayerScope = tmp(6842).LayerScope;
    const tmp8 = hasOwnProperty(LayerScope, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.flex) {
    const obj3 = { style: tmp4.flex, bottom: true, children: first };
    const tmp11 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
    cResult[1] = tmp4.flex;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function UserSettingsDesignSystemTooltip() {
  let LayerScope;
  let obj2;
  const obj = { style: closure_8().flex, bottom: true, children: hasOwnProperty(LayerScope, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { children: hasOwnProperty(closure_11, {}) };
  LayerScope = LayerScope2.LayerScope;
  return hasOwnProperty(SafeAreaPaddingView, obj);
});
let result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default tmp5;
export const useCanRotate = tmp3;
export const TooltipNote = tmp4;
