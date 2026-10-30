// Module ID: 10664
// Function ID: 10665
// Name: SocialLayerStorefrontBadges
// Dependencies: [19, 17, 21, 5009, 575, 1376, 10665, 5619, 1114, 2]
// Exports: ExclusiveBadge

// Module 10664 (SocialLayerStorefrontBadges)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import ClydeIcon2 from "ClydeIcon" /* 10665 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils_mod from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let PlatformUtils;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let space;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { exclusiveBadge: obj2, exclusiveBadgeText: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { textTransform: "uppercase", fontSize: nativeDefault.space.PX_12, lineHeight: PlatformUtils ? space.PX_12 : space.PX_16 };
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
space = nativeDefault.space;
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export function ExclusiveBadge() {
  let intl;
  let items;
  const tmp = closure_6();
  const obj = { style: tmp.exclusiveBadge, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
  const ClydeIcon = ClydeIcon2.ClydeIcon;
  items = [React3(ClydeIcon, obj2), ];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: intl.string(intl2.t.RiDMFz) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
}
