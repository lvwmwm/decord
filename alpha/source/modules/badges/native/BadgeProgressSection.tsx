// Module ID: 11479
// Function ID: 11480
// Name: BadgeProgressSection
// Dependencies: [19, 17, 21, 5014, 575, 11467, 5624, 1113, 11451, 2]
// Exports: default

// Module 11479 (BadgeProgressSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 11451 */;
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 11467 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let items3;
  let nextArtUrl;
  let numberFormat;
  let obj10;
  let obj9;
  let progress;
  let threshold;
  let viewerBadge;
  ({ badge, viewerBadge } = arg0);
  const tmp = closure_6();
  const obj = BadgeDetailsUtils;
  const badgeProgressDisplay = obj.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num = 0;
  if (null != threshold) {
    let num2;
    if (progress != null) {
      num2 = progress.current;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let num3;
    if (progress != null) {
      num3 = progress.floor;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const diff = threshold - num3;
    let num5 = 1;
    if (diff > 0) {
      const _Math = Math;
      const _Math2 = Math;
      num5 = Math.min(Math.max((num2 - num3) / diff, 0), 1);
    }
    num = num5;
  }
  const obj2 = { style: tmp.section, children: items };
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t["2m/g2c"]) };
  const Text = tmp2(5624).Text;
  intl = tmp2(1113).intl;
  items = [React3(Text, obj3), ];
  let tmp9Result = null != currentArtUrl;
  const obj4 = { style: tmp.row, children: items1 };
  if (tmp9Result) {
    const obj5 = { url: currentArtUrl, height: 48 };
    tmp9Result = tmp9(BadgeArtImageDefault, obj5);
  }
  items1 = [tmp9Result, , ];
  let tmp9Result4 = null != helperText;
  const obj6 = { style: tmp.content, children: items2 };
  if (tmp9Result4) {
    const obj7 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp9Result4 = tmp9(tmp2(5624).Text, obj7);
  }
  items2 = [tmp9Result4, ];
  let tmp9Result5 = null != threshold;
  if (tmp9Result5) {
    const obj8 = { style: tmp.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: helperText, accessibilityValue: obj9, children: React3(View, obj10) };
    if (helperText == null) {
      const intl2 = tmp2(1113).intl;
      helperText = intl2.string(tmp2(1113).t.Uwhb1l);
    }
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    obj9 = { text: numberFormat.format(num) };
    numberFormat = new Intl.NumberFormat(tmp2(1113).intl.currentLocale, { style: "percent" });
    obj10 = { style: items3 };
    items3 = [tmp.fill, ];
    const obj11 = { width: `${100 * num}%` };
    items3[1] = obj11;
    tmp9Result5 = tmp9(tmp8, obj8);
  }
  items2[1] = tmp9Result5;
  items1[1] = hasOwnProperty(View, obj6);
  let tmp9Result6 = null != nextArtUrl;
  if (tmp9Result6) {
    const obj12 = { url: nextArtUrl, height: 48 };
    tmp9Result6 = tmp9(BadgeArtImageDefault, obj12);
  }
  items1[2] = tmp9Result6;
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
};
