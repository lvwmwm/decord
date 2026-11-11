// Module ID: 18894
// Function ID: 18895
// Name: WaterwheelsDiscoverHeader
// Dependencies: [19, 17, 21, 575, 5243, 5429, 5252, 1113, 18618, 7922, 18408, 18110, 5866, 2553, 2]
// Exports: default

// Module 18894 (WaterwheelsDiscoverHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import MenuIcon from "MenuIcon" /* 18408 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function openHomeDrawer() {
  const obj = NavigationRouteUtils;
  obj.setHomeDrawerState(true);
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  const announce = AccessibilityAnnouncer.announce;
  const intl = intl3.intl;
  announce(intl.string(intl3.t.hfxfVb));
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const PX_64 = nativeDefault.space.PX_64;
let createStyles = createStyles_mod;
let obj = { header: obj2, title: obj3 };
obj2 = { height: PX_64, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx");

export default function WaterwheelsDiscoverHeader() {
  let intl;
  let intl2;
  let items;
  let items1;
  const tmp = closure_6();
  let tmp6 = null;
  const obj2 = { style: tmp.header, children: items };
  const obj = useHomeDrawerGesture;
  if (obj.useIsHomeDrawerEnabled()) {
    const obj3 = { variant: "tertiary", size: "sm", icon: React3(MenuIcon.MenuIcon, { size: "xs" }), accessibilityLabel: intl.string(intl3.t["Rgk/2h"]), onPress: openHomeDrawer };
    const IconButton = tmp2(7922).IconButton;
    intl = tmp2(1113).intl;
    tmp6 = React3(IconButton, obj3);
  }
  items = [tmp6, ];
  const obj4 = { style: tmp.title, children: items1 };
  const obj5 = { size: "refresh_sm", color: nativeDefault.colors.ICON_STRONG };
  const CompassIcon = tmp2(18110).CompassIcon;
  items1 = [React3(CompassIcon, obj5), ];
  const obj6 = { variant: "heading-md/semibold", color: "text-strong", children: intl2.string(_modDef2553.v010oN) };
  const Heading = tmp2(5866).Heading;
  intl2 = tmp2(1113).intl;
  items1[1] = React3(Heading, obj6);
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
};
