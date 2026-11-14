// Module ID: 16022
// Function ID: 16023
// Name: GuildBoostingMarketingBoosterRecognitionCards
// Dependencies: [19, 17, 21, 5306, 575, 5929, 1113, 16023, 9981, 16024, 15398, 16025, 8173, 16026, 9458, 2]
// Exports: default

// Module 16022 (GuildBoostingMarketingBoosterRecognitionCards)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5929 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8173 */;
import HeartIcon from "HeartIcon" /* 9458 */;
import BoostGemIcon from "BoostGemIcon" /* 9981 */;
import BoostTier3Icon from "BoostTier3Icon" /* 15398 */;
import AssetRegistryDefault from "AssetRegistry" /* 16023 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16024 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 16025 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16026 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function Card(arg0) {
  let IconComponent;
  let children;
  let items;
  let obj3;
  const tmp = closure_6();
  const obj = { style: tmp.card, children: items };
  const obj2 = { style: tmp.iconContainer, children: React3(IconComponent, obj3) };
  ({ IconComponent, children } = arg0);
  obj3 = { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  items = [React3(View, obj2), ];
  const obj4 = { style: tmp.description, variant: "body-sm/medium", children };
  items[1] = React3(Text_Text.Text, obj4);
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, description: { textAlign: "center" }, iconContainer: { height: 30, marginBottom: 10 } };
obj2 = { minHeight: 124, width: 172, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 13, paddingVertical: 16 };
let closure_6 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }, title: { textAlign: "center", marginHorizontal: 34 }, recognitionCardsContainer: { marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } });
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  const tmp = closure_8();
  const obj = { style: tmp.container, children: items };
  const obj2 = { variant: "heading-xl/semibold", style: tmp.title, children: intl.string(intl6.t.IzKs3o) };
  const Heading = Text_Text.Heading;
  intl = intl6.intl;
  items = [React3(Heading, obj2), ];
  const obj3 = { style: tmp.recognitionCardsContainer, children: items1 };
  const obj4 = { icon: AssetRegistryDefault, IconComponent: BoostGemIcon.BoostGemIcon, children: intl2.string(intl6.t.TZigSO) };
  intl2 = intl6.intl;
  items1 = [React3(Card, obj4), , , ];
  const obj5 = { icon: AssetRegistryDefault2, IconComponent: BoostTier3Icon.BoostTier3Icon, children: intl3.string(intl6.t.hjQuV2) };
  intl3 = intl6.intl;
  items1[1] = React3(Card, obj5);
  const obj6 = { icon: AssetRegistryDefault3, IconComponent: ShieldUserIcon.ShieldUserIcon, children: intl4.string(intl6.t["2RUcaM"]) };
  intl4 = intl6.intl;
  items1[2] = React3(Card, obj6);
  const obj7 = { icon: AssetRegistryDefault4, IconComponent: HeartIcon.HeartIcon, children: intl5.string(intl6.t.bJoZKV) };
  intl5 = intl6.intl;
  items1[3] = React3(Card, obj7);
  items[1] = hasOwnProperty(View, obj3);
  return hasOwnProperty(View, obj);
};
