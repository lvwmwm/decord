// Module ID: 15884
// Function ID: 15885
// Name: GuildBoostingMarketingPersistentCta
// Dependencies: [19, 17, 5244, 1072, 21, 5243, 575, 563, 1652, 5876, 5830, 7654, 5866, 10736, 2]
// Exports: default

// Module 15884 (GuildBoostingMarketingPersistentCta)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import Text_Text from "Text/Text" /* 5866 */;
import spring_spring from "spring/spring" /* 5876 */;
import GuildIcon from "GuildIcon" /* 7654 */;
import GuildBoostingSubscribeButtonDefault from "GuildBoostingSubscribeButton" /* 10736 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
const GuildIconDefault = GuildIcon;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { stiffness: 70, damping: 10 };
let createStyles = createStyles_mod;
let obj = { wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 }, innerWraper: size, guildInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 }, guildIcon: size1, guildIconText: obj2, guildName: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" }, buttonContainer: { height: 40 }, button: { minWidth: 100 }, border: { padding: 2, borderRadius: 80 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, display: "flex", flexDirection: "row", alignItems: "center", position: "relative", height: 76, width: 343, borderRadius: 76, paddingLeft: 13, paddingVertical: 13, paddingRight: 27 };
createStyles = createStyles.createStyles;
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function GuildBoostingMarketingPersistentCtaTsx1(){let[useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG]=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default function GuildBoostingMarketingPersistentCta(guild) {
  let fractionalPremiumState;
  let isVisible;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj3;
  let obj4;
  let obj9;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let tmp = closure_9();
  guild = guild.guild;
  const tmp3 = dependencyMap;
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, isVisible, premiumGroupRole } = guild);
  let obj = useStateFromStores;
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp5 = _mod1652;
  const items1 = [closure_10, stateFromStores, 120, , , ];
  const useAnimatedStyle = tmp5.useAnimatedStyle;
  items1[3] = spring_spring.withSpring;
  items1[4] = isVisible;
  items1[5] = closure_8;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
  class GuildBoostingMarketingPersistentCtaTsx1 {
    constructor() {
      let items;
      let num;
      let tmp5;
      let tmp7;
      const tmp = c0;
      if (tmp) {
        tmp5 = -c1;
      } else {
        tmp5 = _undefined(c3 ? -tmp3 : tmp3, c4);
      }
      const obj = { transform: items, opacity: tmp7(num, c4) };
      items = [{ translateY: tmp5 }];
      num = 0;
      tmp7 = _undefined;
      if (c3) {
        num = 1;
      }
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  GuildBoostingMarketingPersistentCtaTsx1.__closure = items2;
  GuildBoostingMarketingPersistentCtaTsx1.__workletHash = 5251879028260;
  GuildBoostingMarketingPersistentCtaTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(GuildBoostingMarketingPersistentCtaTsx1);
  const obj2 = { style: items3, children: metroRequire(tmp13, obj3) };
  items3 = [tmp.wrapper, animatedStyle];
  View = _modDef1652.View;
  obj3 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: items4, locations: [0, 1], style: tmp.border, useAngle: true, children: metroImportDefault(View, obj4) };
  items4 = [, ];
  tmp13 = LinearGradientDefault;
  items4[0] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE;
  items4[1] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE;
  obj4 = { style: tmp.innerWraper, children: items6 };
  const obj5 = { style: tmp.guildInfoContainer, children: items5 };
  const obj6 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: GuildIcon.GuildIconSizes.LARGE };
  const tmp14 = GuildIconDefault;
  items5 = [metroRequire(tmp14, obj6), ];
  const obj7 = { style: tmp.guildName, variant: "body-md/semibold", lineClamp: 1, children: guild.name };
  items5[1] = metroRequire(Text_Text.Text, obj7);
  items6 = [metroImportDefault(View, obj5), ];
  const obj8 = { style: tmp.buttonContainer, children: metroRequire(GuildBoostingSubscribeButtonDefault, obj9) };
  obj9 = { guild, previousGuildSubscriptionSlot, useShortenedCTA: true, styles: tmp.button, analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR, fractionalPremiumState, premiumGroupRole };
  items6[1] = metroRequire(View, obj8);
  return metroRequire(View, obj2);
};
export const VISIBILITY_OFFSET = 120;
