// Module ID: 12718
// Function ID: 12719
// Name: ConjureNativeCollapsibleSection
// Dependencies: [19, 17, 21, 5014, 575, 5624, 11413, 7378, 8992, 2]
// Exports: ConjureNativeCollapsibleMeta, default

// Module 12718 (ConjureNativeCollapsibleSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
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
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx");

export default function ConjureNativeCollapsibleSection(showHeader) {
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
    ChevronSmallRightIcon = tmp2(11413).ChevronSmallDownIcon;
    tmp4 = tmp2;
  } else {
    ChevronSmallRightIcon = tmp2(7378).ChevronSmallRightIcon;
    tmp4 = tmp2;
  }
  let tmp6Result = null;
  const obj = { style: tmp.root, children: items2 };
  if (flag) {
    const obj2 = { style: tmp.header, children: items };
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: title };
    items = [React3(tmp4(5624).Text, obj3), ];
    const obj4 = { style: tmp.headerTrailing, children: items1 };
    items1 = [meta, ];
    let tmp9Result = null;
    if (flag2) {
      tmp9Result = null;
      if (null != onToggleExpanded) {
        const obj5 = { scaleAmountInPx: 4, hitSlop: PX_8, accessibilityState: obj6, accessibilityLabel: showLabel, onPress: onToggleExpanded, children: React3(ChevronSmallRightIcon, obj7) };
        obj6 = { expanded: flag3 };
        const PressableScale = tmp4(8992).PressableScale;
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
};
export function ConjureNativeCollapsibleMeta(arg0) {
  let accessibilityLabel;
  let accessibilityLiveRegion;
  let children;
  ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
  return React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", accessibilityLabel, accessibilityLiveRegion, children });
}
