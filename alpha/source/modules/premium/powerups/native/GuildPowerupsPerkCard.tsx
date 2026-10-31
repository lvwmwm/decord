// Module ID: 14130
// Function ID: 14131
// Name: GuildPowerupsPerkCard
// Dependencies: [19, 17, 21, 5014, 575, 5253, 5021, 7149, 14127, 14082, 5587, 5624, 14083, 1187, 1113, 2]
// Exports: default

// Module 14130 (GuildPowerupsPerkCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7149 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 14082 */;
import GuildPowerupsCardDefault from "GuildPowerupsCard" /* 14127 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let str2;
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
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp5);
  const obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
  const obj3 = { containerStyle: items, style: tmp2.card, status, onPress, children: items2 };
  items = [, ];
  const tmp9 = isThemeDarkResult ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  items[0] = tmp2.container;
  items[1] = style;
  const obj4 = { style: tmp2.imageContainer, children: items1 };
  const tmp3Result = GuildPowerupsCardDefault;
  if (riveComponent == null) {
    const tmp13 = React3;
    const tmp3Result2 = GuildPowerupsImageDefault;
    if (imageUrl == null) {
      imageUrl = "";
    }
    const obj5 = { imageUrl, isAnimated: isImageAnimated };
    riveComponent = tmp13(tmp3Result2, obj5);
  }
  items1 = [riveComponent, ];
  const obj6 = { colors: tmp9, style: tmp2.gradient };
  items1[1] = React3(LinearGradientDefault, obj6);
  items2 = [hasOwnProperty(View, obj4), , , ];
  let str;
  const obj7 = { style: tmp2.contentContainer, children: items4 };
  const obj8 = { style: tmp2.headerContainer, children: items3 };
  const Text = tmp6(5624).Text;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj9 = { color: str, variant: str2, children: title };
  str2 = "heading-md/bold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  items3 = [React3(Text, obj9), ];
  let str3 = "text-sm/medium";
  const Text2 = tmp6(5624).Text;
  if (manaTypeConsolidationExperiment) {
    str3 = "experimental/body-sm/normal";
  }
  items3[1] = React3(Text2, { variant: str3, children: description });
  items4 = [hasOwnProperty(View, obj8), ];
  const obj10 = { status };
  const GuildPowerupsCardFooter = tmp6(14083).GuildPowerupsCardFooter;
  const merged1 = Object.assign(merged);
  items4[1] = React3(GuildPowerupsCardFooter, obj10);
  items2[1] = hasOwnProperty(View, obj7);
  let tmp15Result = "new" === badge;
  if (tmp15Result) {
    const obj11 = { text: intl.string(intl3.t.y2b7CA), style: tmp2.badge };
    const TextBadge = tmp6(1187).TextBadge;
    intl = tmp6(1113).intl;
    tmp15Result = tmp15(TextBadge, obj11);
  }
  items2[2] = tmp15Result;
  let tmp15Result2 = "beta" === badge;
  if (tmp15Result2) {
    const obj12 = { text: intl2.string(intl3.t.oW0eUd), color: native.BadgeColors.BRAND, style: tmp2.badge };
    const TextBadge2 = tmp6(1187).TextBadge;
    intl2 = tmp6(1113).intl;
    tmp15Result2 = tmp15(TextBadge2, obj12);
  }
  items2[3] = tmp15Result2;
  return hasOwnProperty(tmp3Result, obj3);
};
