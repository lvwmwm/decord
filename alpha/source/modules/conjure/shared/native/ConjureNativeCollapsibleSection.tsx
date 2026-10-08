// Module ID: 16949
// Function ID: 16950
// Name: ConjureNativeCollapsibleSection
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 5086, 10508, 6892, 8517, 2]

// Module 16949 (ConjureNativeCollapsibleSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp;
const Text_Text = tmp(5086);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, header: obj3, headerTrailing: obj4 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const PX_8 = nativeDefault.space.PX_8;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeCollapsibleMeta(arg0) {
  let accessibilityLabel;
  let accessibilityLiveRegion;
  let children;
  const obj = react2;
  const cResult = obj.c(4);
  ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === accessibilityLiveRegion) {
      let tmp4;
      if (cResult[2] === children) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const tmp5 = React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", accessibilityLabel, accessibilityLiveRegion, children });
  cResult[0] = accessibilityLabel;
  cResult[1] = accessibilityLiveRegion;
  cResult[2] = children;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : (function ConjureNativeCollapsibleMeta(arg0) {
  let accessibilityLabel;
  let accessibilityLiveRegion;
  let children;
  ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
  return React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", accessibilityLabel, accessibilityLiveRegion, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeCollapsibleSection(children) {
  let ChevronSmallRightIcon;
  let expanded;
  let hideLabel;
  let items;
  let items1;
  let items2;
  let meta;
  let obj7;
  let obj8;
  let onToggleExpanded;
  let showHeader;
  let showLabel;
  let superseded;
  let title;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(16);
  ({ title, meta, showHeader, superseded, expanded, onToggleExpanded, showLabel, hideLabel } = children);
  let tmp4 = undefined === showHeader;
  children = children.children;
  if (!tmp4) {
    tmp4 = showHeader;
  }
  const tmp7 = closure_6();
  if (undefined === expanded || expanded) {
    ChevronSmallRightIcon = tmp(10508).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp(6892).ChevronSmallRightIcon;
  }
  if (cResult[0] === ChevronSmallRightIcon) {
    if (cResult[1] === (undefined === expanded || expanded)) {
      if (cResult[2] === hideLabel) {
        if (cResult[3] === meta) {
          if (cResult[4] === onToggleExpanded) {
            if (cResult[5] === tmp4) {
              if (cResult[6] === showLabel) {
                if (cResult[7] === tmp7.header) {
                  if (cResult[8] === tmp7.headerTrailing) {
                    if (cResult[9] === (undefined !== superseded && superseded)) {
                      let tmp8;
                      if (cResult[10] === title) {
                        tmp8 = cResult[11];
                      }
                      let tmp17 = null;
                      if (undefined === expanded || expanded) {
                        tmp17 = children;
                      }
                      if (cResult[12] === tmp7.root) {
                        if (cResult[13] === tmp8) {
                          let tmp18;
                          if (cResult[14] === tmp17) {
                            tmp18 = cResult[15];
                          }
                          return tmp18;
                        }
                      }
                      const obj2 = { style: tmp7.root, children: items };
                      items = [tmp8, tmp17];
                      const tmp21 = hasOwnProperty(View, obj2);
                      cResult[12] = tmp7.root;
                      cResult[13] = tmp8;
                      cResult[14] = tmp17;
                      cResult[15] = tmp21;
                      tmp18 = tmp21;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp10Result = null;
  if (tmp4) {
    const obj3 = { style: tmp7.header, children: items1 };
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: title };
    items1 = [React3(Text_Text.Text, obj4), ];
    const obj5 = { style: tmp7.headerTrailing, children: items2 };
    items2 = [meta, ];
    let tmp12Result = null;
    if (undefined !== superseded && superseded) {
      tmp12Result = null;
      if (null != onToggleExpanded) {
        const obj6 = { scaleAmountInPx: 4, hitSlop: PX_8, accessibilityState: obj7, accessibilityLabel: tmp15, onPress: onToggleExpanded, children: React3(ChevronSmallRightIcon, obj8) };
        tmp15 = showLabel;
        obj7 = { expanded: undefined === expanded || expanded };
        const PressableScale = tmp(8517).PressableScale;
        if (undefined === expanded || expanded) {
          tmp15 = hideLabel;
        }
        obj8 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        tmp12Result = tmp12(PressableScale, obj6);
      }
    }
    items2[1] = tmp12Result;
    items1[1] = hasOwnProperty(View, obj5);
    tmp10Result = tmp10(tmp11, obj3);
  }
  cResult[0] = ChevronSmallRightIcon;
  cResult[1] = undefined === expanded || expanded;
  cResult[2] = hideLabel;
  cResult[3] = meta;
  cResult[4] = onToggleExpanded;
  cResult[5] = tmp4;
  cResult[6] = showLabel;
  cResult[7] = tmp7.header;
  cResult[8] = tmp7.headerTrailing;
  cResult[9] = undefined !== superseded && superseded;
  cResult[10] = title;
  cResult[11] = tmp10Result;
  tmp8 = tmp10Result;
}) : (function ConjureNativeCollapsibleSection(showHeader) {
  let ChevronSmallRightIcon;
  let children;
  let hideLabel;
  let items;
  let items1;
  let items2;
  let meta;
  let obj6;
  let obj7;
  let onToggleExpanded;
  let showLabel;
  let title;
  let tmp4;
  let flag = showHeader.showHeader;
  ({ title, meta } = showHeader);
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = showHeader.superseded;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = showHeader.expanded;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ onToggleExpanded, showLabel } = showHeader);
  ({ hideLabel, children } = showHeader);
  const tmp = closure_6();
  if (flag3) {
    ChevronSmallRightIcon = tmp2(10508).ChevronSmallDownIcon;
    tmp4 = tmp2;
  } else {
    ChevronSmallRightIcon = tmp2(6892).ChevronSmallRightIcon;
    tmp4 = tmp2;
  }
  let tmp6Result = null;
  const obj = { style: tmp.root, children: items2 };
  if (flag) {
    const obj2 = { style: tmp.header, children: items };
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: title };
    items = [React3(tmp4(5086).Text, obj3), ];
    const obj4 = { style: tmp.headerTrailing, children: items1 };
    items1 = [meta, ];
    let tmp9Result = null;
    if (flag2) {
      tmp9Result = null;
      if (null != onToggleExpanded) {
        const obj5 = { scaleAmountInPx: 4, hitSlop: PX_8, accessibilityState: obj6, accessibilityLabel: showLabel, onPress: onToggleExpanded, children: React3(ChevronSmallRightIcon, obj7) };
        obj6 = { expanded: flag3 };
        const PressableScale = tmp4(8517).PressableScale;
        if (flag3) {
          showLabel = hideLabel;
        }
        obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        tmp9Result = tmp9(PressableScale, obj5);
      }
    }
    items1[1] = tmp9Result;
    items[1] = hasOwnProperty(View, obj4);
    tmp6Result = tmp6(tmp7, obj2);
  }
  items2 = [tmp6Result, ];
  let tmp13 = null;
  if (flag3) {
    tmp13 = children;
  }
  items2[1] = tmp13;
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx");

export default tmp6;
export const ConjureNativeCollapsibleMeta = tmp5;
