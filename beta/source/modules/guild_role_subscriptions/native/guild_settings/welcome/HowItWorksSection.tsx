// Module ID: 17522
// Function ID: 17523
// Name: HowItWorksSection
// Dependencies: [19, 17, 21, 4836, 576, 4832, 5899, 1115, 17523, 1177, 17524, 17525, 2]
// Exports: default

// Module 17522 (HowItWorksSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 17523 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17524 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 17525 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
function HowItWorksCard(iconSource) {
  let cardNumber;
  let description;
  let items;
  let obj4;
  ({ cardNumber, description } = iconSource);
  iconSource = iconSource.iconSource;
  const tmp = closure_6();
  const obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: items };
  items = [, , ];
  const obj2 = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  items[0] = React3(Text_Text.Text, obj2);
  const obj3 = { style: tmp.container, children: React3(FastImageDefault, obj4) };
  obj4 = { style: tmp.howItWorksCardIcon, source: iconSource, resizeMode: "contain" };
  items[1] = React3(View, obj3);
  const obj5 = { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description };
  items[2] = React3(Text_Text.Text, obj5);
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: obj2, cardNumber: size, howItWorksCardDescription: obj3, howItWorksCardIcon: { marginVertical: 24 } };
obj2 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj3 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.horizontalContainer, children: items };
  const obj3 = { cardNumber: 1, description: intl.string(intl4.t.lT0ZNS), iconSource: AssetRegistryDefault };
  intl = intl4.intl;
  items = [React3(HowItWorksCard, obj3), React3(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: intl2.string(intl4.t.ihN2Wb), iconSource: AssetRegistryDefault2 };
  intl2 = intl4.intl;
  items[2] = React3(HowItWorksCard, obj4);
  items1 = [hasOwnProperty(View, obj2), ];
  const obj5 = { cardNumber: 3, description: intl3.string(intl4.t.c8krDQ), iconSource: AssetRegistryDefault3 };
  intl3 = intl4.intl;
  items1[1] = React3(HowItWorksCard, obj5);
  return hasOwnProperty(View, obj);
};
