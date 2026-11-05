// Module ID: 14376
// Function ID: 14377
// Name: GuildPowerupsPerkCard
// Dependencies: [19, 17, 21, 5143, 575, 5379, 5150, 14373, 14328, 5725, 5763, 14329, 1187, 1113, 2]
// Exports: default

// Module 14376 (GuildPowerupsPerkCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import shared from "shared" /* 5150 */;
import useThemeDefault from "useTheme" /* 5379 */;
import LinearGradientDefault from "LinearGradient" /* 5725 */;
import Text_Text from "Text/Text" /* 5763 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 14328 */;
import GuildPowerupsCardDefault from "GuildPowerupsCard" /* 14373 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let rect;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, card: { padding: 0, overflow: "hidden" }, contentContainer: obj3, imageContainer: { width: "100%", height: 160 }, gradient: { position: "absolute", left: 0, right: 0, top: 0, height: "100%" }, headerContainer: obj4, badge: rect };
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
rect = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default function GuildPowerupsPerkCard(arg0) {
  let badge;
  let description;
  let imageUrl;
  let intl;
  let intl2;
  let isImageAnimated;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let onPress;
  let riveComponent;
  let status;
  let style;
  let title;
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  ({ style, onPress } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, description: 0, imageUrl: 0, isImageAnimated: 0, riveComponent: 0, style: 0, onPress: 0, status: 0, badge: 0 }));
  const tmp2 = closure_6();
  const tmp5 = useThemeDefault();
  const obj2 = { containerStyle: items, style: tmp2.card, status, onPress, children: items2 };
  items = [tmp2.container, style];
  const obj = shared;
  const obj3 = { style: tmp2.imageContainer, children: items1 };
  const tmp7 = obj.isThemeDark(tmp5) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  const tmp3Result = GuildPowerupsCardDefault;
  if (riveComponent == null) {
    const tmp11 = React3;
    const tmp3Result2 = GuildPowerupsImageDefault;
    if (imageUrl == null) {
      imageUrl = "";
    }
    const obj4 = { imageUrl, isAnimated: isImageAnimated };
    riveComponent = tmp11(tmp3Result2, obj4);
  }
  items1 = [riveComponent, ];
  const obj5 = { colors: tmp7, style: tmp2.gradient };
  items1[1] = React3(LinearGradientDefault, obj5);
  items2 = [hasOwnProperty(View, obj3), , , ];
  const obj6 = { style: tmp2.contentContainer, children: items4 };
  const obj7 = { style: tmp2.headerContainer, children: items3 };
  items3 = [React3(Text_Text.Text, { color: "text-strong", variant: "heading-md/semibold", children: title }), React3(Text_Text.Text, { variant: "body-sm/normal", children: description })];
  items4 = [hasOwnProperty(View, obj7), ];
  const obj8 = { status };
  const GuildPowerupsCardFooter = tmp6(14329).GuildPowerupsCardFooter;
  const merged1 = Object.assign(merged);
  items4[1] = React3(GuildPowerupsCardFooter, obj8);
  items2[1] = hasOwnProperty(View, obj6);
  let tmp13Result = "new" === badge;
  if (tmp13Result) {
    const obj9 = { text: intl.string(intl3.t.y2b7CA), style: tmp2.badge };
    const TextBadge = tmp6(1187).TextBadge;
    intl = tmp6(1113).intl;
    tmp13Result = tmp13(TextBadge, obj9);
  }
  items2[2] = tmp13Result;
  let tmp13Result2 = "beta" === badge;
  if (tmp13Result2) {
    const obj10 = { text: intl2.string(intl3.t.oW0eUd), color: native.BadgeColors.BRAND, style: tmp2.badge };
    const TextBadge2 = tmp6(1187).TextBadge;
    intl2 = tmp6(1113).intl;
    tmp13Result2 = tmp13(TextBadge2, obj10);
  }
  items2[3] = tmp13Result2;
  return hasOwnProperty(tmp3Result, obj2);
};
