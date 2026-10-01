// Module ID: 6821
// Function ID: 6822
// Name: GuildBoostingMarketingPersistentCta
// Dependencies: [19, 17, 4825, 1074, 21, 4836, 576, 563, 4566, 5280, 5293, 5896, 4832, 6822, 2]
// Exports: default

// Module 6821 (GuildBoostingMarketingPersistentCta)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const SPRING_CONFIG = { stiffness: 70, damping: 10 };
let createStyles = createStyles_mod;
let obj = { wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 }, innerWraper: size, guildInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 }, guildIcon: size1, guildIconText: obj2, guildName: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" }, buttonContainer: { height: 40 }, button: { minWidth: 100 }, border: { padding: 2, borderRadius: 80 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, display: "flex", flexDirection: "row", alignItems: "center", position: "relative", height: 76, width: 343, borderRadius: 76, paddingLeft: 13, paddingVertical: 13, paddingRight: 27 };
createStyles = createStyles.createStyles;
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_9 = createStyles(obj);
const __initData = { code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default function GuildBoostingMarketingPersistentCta(arg0) {
  let fractionalPremiumState;
  let guild;
  let isVisible;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj5;
  let obj6;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  let tmp4;
  let useReducedMotion;
  const tmp = closure_9();
  ({ guild, isVisible } = arg0);
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let obj = isVisible(563);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const fn = function _() {
    let items;
    let num3;
    let withSpring2;
    let num = -120;
    if (!stateFromStores) {
      let num2 = 120;
      const withSpring = spring.withSpring;
      spring;
      if (isVisible) {
        num2 = -120;
      }
      num = withSpring(num2, SPRING_CONFIG);
    }
    const obj = { transform: items, opacity: withSpring2(num3, SPRING_CONFIG) };
    items = [{ translateY: num }];
    num3 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (isVisible) {
      num3 = 1;
    }
    return obj;
  };
  const obj2 = isVisible(4566);
  fn.__closure = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: isVisible(5280).withSpring, isVisible, SPRING_CONFIG };
  fn.__workletHash = 14370895185277;
  fn.__initData = __initData;
  ({ useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: isVisible(5280).withSpring, isVisible, SPRING_CONFIG });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1, children: closure_6(tmp4, obj5) };
  items1 = [tmp.wrapper, animatedStyle];
  View = stateFromStores(4566).View;
  obj5 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: items2, locations: [0, 1], style: tmp.border, useAngle: true, children: closure_7(View, obj6) };
  tmp4 = stateFromStores(5293);
  items2 = [stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_BLUE, stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj6 = { style: tmp.innerWraper, children: items4 };
  const obj7 = { style: tmp.guildInfoContainer, children: items3 };
  const obj8 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: isVisible(5896).GuildIconSizes.LARGE };
  const tmp5 = stateFromStores(5896);
  items3 = [closure_6(tmp5, obj8), ];
  const obj9 = { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
  items3[1] = closure_6(isVisible(4832).Text, obj9);
  items4 = [closure_7(View, obj7), ];
  const obj10 = { style: tmp.buttonContainer, children: closure_6(stateFromStores(6822), obj11) };
  obj11 = { guild, previousGuildSubscriptionSlot, useShortenedCTA: true, styles: tmp.button, analyticsSection: AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR, fractionalPremiumState, premiumGroupRole };
  items4[1] = closure_6(View, obj10);
  return closure_6(View, obj4);
};
export const VISIBILITY_OFFSET = 120;
