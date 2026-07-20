// Module ID: 6628
// Function ID: 50885
// Name: GuildBoostingMarketingPersistentCta
// Dependencies: []
// Exports: default

// Module 6628 (GuildBoostingMarketingPersistentCta)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const AnalyticsSections = arg1(dependencyMap[3]).AnalyticsSections;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let closure_8 = {};
let obj = arg1(dependencyMap[5]);
obj = { wrapper: {} };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
obj.innerWraper = obj;
obj.guildInfoContainer = { <string:1373927010>: "1 Tag", <string:1650543116>: "{{count}} Tage", <string:810443091>: "1 Tag", <string:1629053384>: "{{count}} Tagen", <string:2934264147>: "etwa 1 Woche" };
const obj1 = { "Null": null, "Null": null, "Null": null, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, padding: null };
obj.guildIcon = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.guildIconText = { color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.guildName = {};
obj.buttonContainer = { height: 40 };
obj.button = { minWidth: 100 };
obj.border = { "Bool(true)": "isArray", "Bool(true)": "guildId" };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}" };
const obj2 = { color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx");

export default function GuildBoostingMarketingPersistentCta(arg0) {
  let fractionalPremiumState;
  let guild;
  let isVisible;
  let premiumGroupRole;
  let previousGuildSubscriptionSlot;
  const tmp = callback3();
  ({ guild, isVisible } = arg0);
  const arg1 = isVisible;
  ({ fractionalPremiumState, previousGuildSubscriptionSlot, premiumGroupRole } = arg0);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[8]);
  const fn = function _() {
    let obj = {};
    obj = {};
    let num = -120;
    if (!stateFromStores) {
      let num3 = 120;
      if (isVisible) {
        num3 = -120;
      }
      num = isVisible(closure_2[9]).withSpring(num3, closure_8);
      const obj3 = isVisible(closure_2[9]);
    }
    obj.translateY = num;
    const items = [obj];
    obj.transform = items;
    let num4 = 0;
    if (isVisible) {
      num4 = 1;
    }
    obj.opacity = isVisible(closure_2[9]).withSpring(num4, closure_8);
    return obj;
  };
  obj = { useReducedMotion: stateFromStores, VISIBILITY_OFFSET: 120, withSpring: arg1(dependencyMap[9]).withSpring, isVisible, SPRING_CONFIG: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 14370895185277;
  fn.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items1 };
  const items1 = [tmp.wrapper, animatedStyle];
  obj1 = { angle: 45, angleCenter: {} };
  const items2 = [importDefault(dependencyMap[6]).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(dependencyMap[6]).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj1.colors = items2;
  obj1.locations = [null, null];
  obj1.style = tmp.border;
  obj1.useAngle = true;
  const obj2 = { style: tmp.innerWraper };
  const obj3 = { style: tmp.guildInfoContainer };
  const obj4 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild };
  const tmp4 = importDefault(dependencyMap[10]);
  obj4.size = arg1(dependencyMap[11]).GuildIconSizes.LARGE;
  const items3 = [callback(importDefault(dependencyMap[11]), obj4), callback(arg1(dependencyMap[12]).Text, { style: tmp.guildName, children: guild.name })];
  obj3.children = items3;
  const items4 = [callback2(View, obj3), ];
  const obj5 = { style: tmp.guildName, children: guild.name };
  const tmp5 = importDefault(dependencyMap[11]);
  items4[1] = callback(View, { style: tmp.buttonContainer, children: callback(importDefault(dependencyMap[13]), obj7) });
  obj2.children = items4;
  obj1.children = callback2(View, obj2);
  obj.children = callback(tmp4, obj1);
  return callback(importDefault(dependencyMap[8]).View, obj);
};
export const VISIBILITY_OFFSET = 120;
