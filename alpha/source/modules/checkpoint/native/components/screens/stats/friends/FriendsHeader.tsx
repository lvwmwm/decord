// Module ID: 12918
// Function ID: 12919
// Name: FriendsHeader
// Dependencies: [17, 6396, 21, 5043, 575, 1112, 3463, 3495, 5728, 12860, 12896, 2]
// Exports: default, getSidekickTitleAccessibilityLabel, getSquadTitleAccessibilityLabel

// Module 12918 (FriendsHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef3463 from "module_3463" /* 3463 */;
import _modDef3495 from "module_3495" /* 3495 */;
import FriendsIcon from "FriendsIcon" /* 5728 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import CheckpointTextDefault from "CheckpointText" /* 12860 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 12896 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, heading: obj3, title: obj4, titleText: { flexShrink: 1 } };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/FriendsHeader.tsx");

export default function FriendsHeader(title) {
  let description;
  let items;
  let items1;
  let items2;
  let stringResult;
  let titleAccessibilityLabel;
  title = title.title;
  ({ titleAccessibilityLabel, description } = title);
  const tmp = closure_7();
  const obj3 = { style: tmp.title, children: items };
  items = [, ];
  const obj = { style: tmp.header, children: items2 };
  const obj2 = { style: tmp.heading, children: items1 };
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items[0] = hasOwnProperty(FriendsIcon.FriendsIcon, obj4);
  const obj5 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2 = CheckpointTextDefault;
  const intl = intl3.intl;
  stringResult = intl.string(_modDef3463.ZQakPR);
  items[1] = hasOwnProperty(tmp2, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { accessibilityLabel: titleAccessibilityLabel, children: title.toLocaleUpperCase() };
  const tmp3 = CheckpointDisplayTextDefault;
  items1[1] = hasOwnProperty(tmp3, obj6);
  items2 = [metroRequire(View, obj2), hasOwnProperty(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  return metroRequire(View, obj);
};
export function getSquadTitleAccessibilityLabel(items7) {
  let listFormat;
  let stringResult;
  const found = items7.filter((item) => "" !== item.trim());
  if (0 === found.length) {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef3463.OzY5Ns);
  } else {
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Intl = Intl;
    const obj = { names: listFormat.format(found) };
    const XB99KC = _modDef3495.XB99KC;
    const self = this;
    const self2 = this;
    listFormat = new Intl.ListFormat(intl3.intl.currentLocale, { type: "conjunction" });
    stringResult = formatToPlainString(XB99KC, obj);
  }
  return stringResult;
}
export function getSidekickTitleAccessibilityLabel(name) {
  let stringResult;
  if ("" === name.trim()) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3463["+uwOHt"]);
  } else {
    const intl = intl3.intl;
    const obj = { name };
    stringResult = intl.formatToPlainString(_modDef3495.xRtlbW, obj);
  }
  return stringResult;
}
