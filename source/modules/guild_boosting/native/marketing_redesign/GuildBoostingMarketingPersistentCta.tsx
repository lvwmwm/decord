// Module ID: 6639
// Function ID: 50993
// Name: GuildBoostingMarketingPersistentCta
// Dependencies: [31, 27, 4122, 653, 33, 4130, 689, 624, 3991, 4542, 4554, 5513, 4126, 6640, 2]
// Exports: default

// Module 6639 (GuildBoostingMarketingPersistentCta)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { stiffness: 70, damping: 10 };
_createForOfIteratorHelperLoose = { wrapper: { display: "flex", alignItems: "center", position: "absolute", width: "100%", zIndex: 1, bottom: -76 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, display: "flex", flexDirection: "row", alignItems: "center", position: "relative", height: 76, width: 343, borderRadius: 76, paddingLeft: 13, paddingVertical: 13, paddingRight: 27 };
_createForOfIteratorHelperLoose.innerWraper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildInfoContainer = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginRight: 10, height: 50, width: 50, borderRadius: 25 };
_createForOfIteratorHelperLoose.guildIcon = obj1;
_createForOfIteratorHelperLoose.guildIconText = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.guildName = { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
_createForOfIteratorHelperLoose.buttonContainer = { height: 40 };
_createForOfIteratorHelperLoose.button = { minWidth: 100 };
_createForOfIteratorHelperLoose.border = { padding: 2, borderRadius: 80 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default function GuildBoostingMarketingPersistentCta(arg0) {
  let fractionalPremiumState;
  let guild;
  let isVisible;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  const tmp = _createForOfIteratorHelperLoose();
  ({ guild, isVisible } = arg0);
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let obj = isVisible(624);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  let obj1 = isVisible(3991);
  const fn = function _() {
    let obj = {};
    obj = {};
    let num = -120;
    if (!stateFromStores) {
      let num3 = 120;
      if (isVisible) {
        num3 = -120;
      }
      num = isVisible(outer1_2[9]).withSpring(num3, outer1_8);
      const obj3 = isVisible(outer1_2[9]);
    }
    obj.translateY = num;
    const items = [obj];
    obj.transform = items;
    let num4 = 0;
    if (isVisible) {
      num4 = 1;
    }
    obj.opacity = isVisible(outer1_2[9]).withSpring(num4, outer1_8);
    return obj;
  };
  obj = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: isVisible(4542).withSpring, isVisible, SPRING_CONFIG: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 14370895185277;
  fn.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items1 };
  items1 = [tmp.wrapper, animatedStyle];
  obj1 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 } };
  const items2 = [stateFromStores(689).unsafe_rawColors.GUILD_BOOSTING_BLUE, stateFromStores(689).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj1.colors = items2;
  obj1.locations = [0, 1];
  obj1.style = tmp.border;
  obj1.useAngle = true;
  const obj2 = { style: tmp.innerWraper };
  let obj3 = { style: tmp.guildInfoContainer };
  const obj4 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild };
  const tmp4 = stateFromStores(4554);
  obj4.size = isVisible(5513).GuildIconSizes.LARGE;
  const items3 = [callback(stateFromStores(5513), obj4), ];
  const obj5 = { style: tmp.guildName, variant: "text-md/bold", lineClamp: 1, children: guild.name };
  items3[1] = callback(isVisible(4126).Text, obj5);
  obj3.children = items3;
  const items4 = [callback2(View, obj3), ];
  const tmp5 = stateFromStores(5513);
  items4[1] = callback(View, { style: tmp.buttonContainer, children: callback(stateFromStores(6640), obj7) });
  obj2.children = items4;
  obj1.children = callback2(View, obj2);
  obj.children = callback(tmp4, obj1);
  return callback(stateFromStores(3991).View, obj);
};
export const VISIBILITY_OFFSET = 120;
