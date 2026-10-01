// Module ID: 10767
// Function ID: 10768
// Name: BadgeProgressSection
// Dependencies: [19, 17, 21, 4836, 576, 10667, 4832, 1115, 10766, 2]
// Exports: default

// Module 10767 (BadgeProgressSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 10667 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10766 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, row: obj3, content: obj4, track: obj5, fill: obj6 };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj6 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/badges/native/BadgeProgressSection.tsx");

export default function BadgeProgressSection(arg0) {
  let badge;
  let currentArtUrl;
  let helperText;
  let intl;
  let items;
  let items1;
  let items2;
  let nextArtUrl;
  let obj9;
  let progress;
  let range;
  let threshold;
  let viewerBadge;
  ({ badge, viewerBadge } = arg0);
  const tmp = closure_6();
  const obj = BadgeDetailsUtils;
  const badgeProgressDisplay = obj.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num;
  if (progress != null) {
    num = progress.current;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (progress != null) {
    num2 = progress.floor;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const obj2 = { style: tmp.section, children: items };
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t["2m/g2c"]) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items = [React3(Text, obj3), ];
  let tmp7Result = null != currentArtUrl;
  const obj4 = { style: tmp.row, children: items1 };
  if (tmp7Result) {
    const obj5 = { url: currentArtUrl, height: 48 };
    tmp7Result = tmp7(BadgeArtImageDefault, obj5);
  }
  items1 = [tmp7Result, , ];
  let tmp7Result4 = null != helperText;
  const obj6 = { style: tmp.content, children: items2 };
  if (tmp7Result4) {
    const obj7 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp7Result4 = tmp7(tmp2(4832).Text, obj7);
  }
  items2 = [tmp7Result4, ];
  let tmp7Result5 = null != threshold;
  if (tmp7Result5) {
    const obj8 = { style: tmp.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: helperText, accessibilityValue: range, children: React3(View, obj9) };
    if (helperText == null) {
      const intl2 = tmp2(1115).intl;
      helperText = intl2.string(tmp2(1115).t.Uwhb1l);
    }
    range = { min: num2, max: threshold, now: Math.min(num, threshold) };
    const _Math = Math;
    const items3 = [tmp.fill, ];
    const diff = threshold - num2;
    let num5 = 1;
    if (diff > 0) {
      const _Math2 = Math;
      const _Math3 = Math;
      num5 = Math.min(Math.max((num - num2) / diff, 0), 1);
    }
    const obj10 = { width: `${100 * num5}%` };
    obj9 = { style: items3 };
    items3[1] = obj10;
    tmp7Result5 = tmp7(tmp6, obj8);
  }
  items2[1] = tmp7Result5;
  items1[1] = hasOwnProperty(View, obj6);
  let tmp7Result6 = null != nextArtUrl;
  if (tmp7Result6) {
    const obj11 = { url: nextArtUrl, height: 48 };
    tmp7Result6 = tmp7(BadgeArtImageDefault, obj11);
  }
  items1[2] = tmp7Result6;
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
};
