// Module ID: 12236
// Function ID: 12237
// Name: ActivityShelfBadge
// Dependencies: [19, 17, 1072, 21, 5009, 575, 1188, 1993, 5619, 1114, 2]
// Exports: default

// Module 12236 (ActivityShelfBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import Server from "Server" /* 1993 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import native_mod from "native" /* 1188 */;
import size from "module_2" /* 2 */;

let native;
let obj2;
let obj3;
let rect;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { badge: rect, newBadge: obj2, updatedBadge: obj3, elevationShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), badgeText: { textTransform: "uppercase", marginLeft: 2, fontFamily: Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 } };
rect = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj3 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
native = native_mod;
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  let intl;
  let intl2;
  let labelType;
  let replacementStyles;
  let tmp6;
  ({ labelType, replacementStyles } = arg0);
  const tmp = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    ({ variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: intl.string(intl3.t.y2b7CA) });
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    tmp6 = <View style={items}>{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === Server.EmbeddedActivityLabelTypes.UPDATED) {
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      ({ variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: intl2.string(intl3.t["/qdhkk"]) });
      const Text2 = tmp2(5619).Text;
      intl2 = tmp2(1114).intl;
      tmp6 = <View style={items1}>{null}</View>;
    }
  }
  return tmp6;
};
