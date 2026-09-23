// Module ID: 12419
// Function ID: 12420
// Name: ActivityShelfBadge
// Dependencies: [19, 17, 1074, 21, 4827, 576, 1177, 1978, 4823, 1115, 2]
// Exports: default

// Module 12419 (ActivityShelfBadge)
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1978 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { badge: null, newBadge: null, updatedBadge: null, elevationShadow: null, badgeText: null };
const rect = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj2.badge = rect;
obj2.newBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
let obj3 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj2.updatedBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const native = fn(1177);
obj2.elevationShadow = native.generateBoxShadowStyle(fn(1177).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj2.badgeText = { textTransform: "uppercase", marginLeft: 2, fontFamily: fn(1074).Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  ({ labelType, replacementStyles } = arg0);
  const tmp = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    const obj = { style: null, children: null };
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    obj.style = items;
    const obj2 = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null };
    const intl = tmp2(1115).intl;
    obj2.children = intl.string(tmp2(1115).t.y2b7CA);
    obj.children = jsx(tmp2(4823).Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null });
    let tmp6 = <View style={null}>{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === tmp2(1978).EmbeddedActivityLabelTypes.UPDATED) {
      const obj3 = { style: null, children: null };
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj3.style = items1;
      const obj4 = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null };
      const intl2 = tmp2(1115).intl;
      obj4.children = intl2.string(tmp2(1115).t["/qdhkk"]);
      obj3.children = jsx(tmp2(4823).Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null });
      tmp6 = <View style={null}>{null}</View>;
    }
  }
  return tmp6;
};
