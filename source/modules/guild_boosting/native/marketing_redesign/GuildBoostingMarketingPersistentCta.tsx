// Module ID: 6634
// Function ID: 50942
// Name: GuildBoostingMarketingPersistentCta
// Dependencies: []
// Exports: default

// Module 6634 (GuildBoostingMarketingPersistentCta)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const AnalyticsSections = arg1(dependencyMap[3]).AnalyticsSections;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let closure_8 = { margin: 20, height: null };
let obj = arg1(dependencyMap[5]);
obj = { wrapper: { "Null": -60383565033014200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -71705452309988800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001780063987237985, "Null": -64157527458588310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1635620433: -75479414735689030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2107003140: -2392540624912385 } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
obj.innerWraper = obj;
obj.guildInfoContainer = { positionBottom: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03CE\u03C1\u03B1", positionRight: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03CE\u03C1\u03B5\u03C2", text: "1 \u03CE\u03C1\u03B1", state: "{{count}} \u03CE\u03C1\u03B5\u03C2", cutouts: "1 \u03B7\u03BC\u03AD\u03C1\u03B1" };
const obj1 = { "Null": "isArray", "Null": "String", "Null": "delete", "Null": "Array", "Null": "isArray", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.guildIcon = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.guildIconText = { color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.guildName = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
obj.buttonContainer = { height: 40 };
obj.button = { minWidth: 100 };
obj.border = { 9223372036854775807: null, 9223372036854775807: null };
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
  obj1.locations = ["replace", "then"];
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
