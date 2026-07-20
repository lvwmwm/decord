// Module ID: 12327
// Function ID: 94389
// Name: FEATURES_PREMIUM_GUILD_USER
// Dependencies: []
// Exports: default

// Module 12327 (FEATURES_PREMIUM_GUILD_USER)
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
({ View: closure_3, Image: closure_4 } = tmp3);
let closure_5 = importDefault(dependencyMap[2]);
const FractionalPremiumStates = arg1(dependencyMap[3]).FractionalPremiumStates;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { root: { color: 826347876, backgroundColor: 1912603216 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: {}, guildList: { marginTop: 16 }, logoPremiumGuild: { "Null": 50, "Null": null, "Null": 1, 0: "text-md/semibold", -9223372036854775808: "interactive-text-active" }, imgPremiumGuild: { aze: "/assets/design/components/Illustration/native/redesign/generated/images", azj: 177 }, imgNoGuilds: {}, header: { alignItems: "center" } };
obj = { borderTopWidth: 2 * tmp3.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.upsell = obj;
obj.subscriptionUpsell = { marginTop: 32 };
let closure_9 = obj.createStyles(obj);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: importDefault(dependencyMap[7]) };
    intl = arg1(dependencyMap[8]).intl;
    obj.label = intl.string(arg1(dependencyMap[8]).t.GS+bL0);
    obj.IconComponent = arg1(dependencyMap[9]).BoostGemIcon;
    obj.color = importDefault(dependencyMap[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, , ];
    items[0] = obj;
    obj = { icon: importDefault(dependencyMap[10]) };
    intl2 = arg1(dependencyMap[8]).intl;
    obj.label = intl2.string(arg1(dependencyMap[8]).t.a7LWeM);
    obj.IconComponent = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["color"] = callback2(closure_2[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
      return callback3(callback(closure_2[11]).BoostTier3Icon, obj);
    };
    items[1] = obj;
    obj1 = { icon: importDefault(dependencyMap[12]) };
    intl3 = arg1(dependencyMap[8]).intl;
    obj1.label = intl3.string(arg1(dependencyMap[8]).t.E76jz8);
    obj1.color = importDefault(dependencyMap[6]).unsafe_rawColors.YELLOW_300;
    obj1.IconComponent = arg1(dependencyMap[13]).ShieldUserIcon;
    items[2] = obj1;
    return items;
  }
}
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  let fractionalState;
  let hasAvailableSlots;
  let isInReverseTrial;
  let onLearnMorePremium;
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[24]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  let obj1 = arg1(dependencyMap[25]);
  const subscriptionPlansLoaded = obj1.useSubscriptionPlansLoaded();
  let obj2 = arg1(dependencyMap[26]);
  const guildSubscriptionNoGuildsSource = obj2.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp7Result = null;
    }
    return tmp7Result;
  }
  obj = { style: tmp.root };
  obj = { style: tmp.header };
  obj1 = { style: tmp.imgPremiumGuild, source: importDefault(dependencyMap[28]) };
  const items1 = [callback(closure_4, obj1), , , ];
  obj2 = { style: tmp.logoPremiumGuild };
  let obj7 = arg1(dependencyMap[29]);
  if (obj7.isThemeDark(tmp5)) {
    let tmp11Result = tmp11(tmp12[30]);
  } else {
    tmp11Result = tmp11(tmp12[31]);
  }
  obj2.source = tmp11Result;
  items1[1] = callback(closure_4, obj2);
  let num3 = 32;
  const obj3 = { style: tmp.title };
  let num4 = 8;
  const intl = arg1(dependencyMap[8]).intl;
  obj3.children = intl.string(arg1(dependencyMap[8]).t.hw6WTd);
  items1[2] = callback(arg1(dependencyMap[32]).Text, obj3);
  const obj4 = { style: tmp.cardText, variant: "text-md/medium" };
  let str = "text-md/medium";
  const intl2 = arg1(dependencyMap[8]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[8]).t.K5jBdG);
  items1[3] = callback(arg1(dependencyMap[32]).Text, obj4);
  obj.children = items1;
  const items2 = [closure_8(closure_3, obj), , , , , ];
  const obj5 = { style: tmp.title };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj5.children = intl3.string(arg1(dependencyMap[8]).t.RvfRTB);
  items2[1] = callback(arg1(dependencyMap[32]).Text, obj5);
  const obj6 = { style: tmp.features };
  const tmp10 = closure_4;
  const tmp5 = importDefault(dependencyMap[27])();
  const tmp9 = callback;
  obj6.features = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = callback(importDefault(dependencyMap[33]), obj6);
  obj7 = { style: tmp.title };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj7.children = intl4.string(arg1(dependencyMap[8]).t./pVhjb);
  items2[3] = callback(arg1(dependencyMap[32]).Text, obj7);
  const obj8 = { style: tmp.features };
  const obj9 = {};
  const tmp14 = importDefault(dependencyMap[33]);
  obj9.icon = importDefault(dependencyMap[14]);
  const intl5 = arg1(dependencyMap[8]).intl;
  obj9.label = intl5.string(arg1(dependencyMap[8]).t.Ts7BVI);
  obj9.IconComponent = arg1(dependencyMap[15]).ReactionIcon;
  obj9.color = importDefault(dependencyMap[6]).unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj9, , , , ];
  const obj10 = { icon: importDefault(dependencyMap[16]) };
  const intl6 = arg1(dependencyMap[8]).intl;
  obj10.label = intl6.string(arg1(dependencyMap[8]).t.QcJbt6);
  obj10.IconComponent = arg1(dependencyMap[17]).StickerIcon;
  obj10.color = importDefault(dependencyMap[6]).unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj10;
  const obj11 = { icon: importDefault(dependencyMap[18]) };
  const intl7 = arg1(dependencyMap[8]).intl;
  obj11.label = intl7.string(arg1(dependencyMap[8]).t.rFNkf5);
  obj11.color = "#4173da";
  obj11.IconComponent = arg1(dependencyMap[19]).HeadphonesIcon;
  items3[2] = obj11;
  const obj12 = { icon: importDefault(dependencyMap[20]) };
  const intl8 = arg1(dependencyMap[8]).intl;
  obj12.label = intl8.string(arg1(dependencyMap[8]).t.BpjjS/);
  obj12.IconComponent = arg1(dependencyMap[21]).UploadIcon;
  obj12.color = importDefault(dependencyMap[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj12;
  const obj13 = { icon: importDefault(dependencyMap[22]) };
  const intl9 = arg1(dependencyMap[8]).intl;
  obj13.label = intl9.string(arg1(dependencyMap[8]).t.9g5Lgb);
  obj13.IconComponent = arg1(dependencyMap[23]).StarIcon;
  obj13.color = importDefault(dependencyMap[6]).unsafe_rawColors.PREMIUM_PERK_GOLD;
  items3[4] = obj13;
  obj8.features = items3;
  items2[4] = callback(importDefault(dependencyMap[33]), obj8);
  const obj14 = { style: tmp.upsell };
  let tmp18 = null;
  if (subscriptionPlansLoaded) {
    tmp18 = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp18 = callback(importDefault(dependencyMap[34]), {});
    }
  }
  const items4 = [tmp18, , ];
  if (isInReverseTrial) {
    items4[1] = null;
    let tmp34 = null;
    if (subscriptionPlansLoaded) {
      const obj15 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
      tmp34 = callback(importDefault(dependencyMap[36]), obj15);
    }
    items4[2] = tmp34;
    obj14.children = items4;
    items2[5] = closure_8(closure_3, obj14);
    obj.children = items2;
    tmp7Result = tmp7(tmp8, obj);
  } else {
    const obj16 = {};
    if (stateFromStores) {
      const obj17 = { style: tmp.cardText, variant: str };
      const intl12 = arg1(dependencyMap[num4]).intl;
      obj17.children = intl12.string(arg1(dependencyMap[num4]).t.WRzob8);
      const items5 = [tmp25(arg1(dependencyMap[num3]).Text, obj17), , ];
      const obj18 = {};
      const items6 = [tmp.cardText];
      obj18.style = items6;
      obj18.variant = "text-md/bold";
      const intl13 = arg1(dependencyMap[num4]).intl;
      str = intl13.string;
      num4 = str(arg1(dependencyMap[num4]).t.j4bXcm);
      obj18.children = num4;
      items5[1] = tmp25(arg1(dependencyMap[num3]).Text, obj18);
      const obj19 = { style: tmp.guildList };
      num3 = tmp25(importDefault(dependencyMap[35]), obj19);
      items5[2] = num3;
      obj16.children = items5;
      let tmp29 = obj16;
    } else {
      const obj20 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items7 = [tmp25(closure_4, obj20), , ];
      const obj21 = {};
      const items8 = [tmp.cardText];
      obj21.style = items8;
      obj21.variant = "text-md/bold";
      const intl10 = arg1(dependencyMap[num4]).intl;
      obj21.children = intl10.string(arg1(dependencyMap[num4]).t.FHm4bZ);
      items7[1] = tmp25(arg1(dependencyMap[num3]).Text, obj21);
      const obj22 = { style: tmp.cardText, variant: str };
      const intl11 = arg1(dependencyMap[num4]).intl;
      obj22.children = intl11.string(arg1(dependencyMap[num4]).t.PSLiiu);
      items7[2] = tmp25(arg1(dependencyMap[num3]).Text, obj22);
      obj16.children = items7;
      tmp29 = obj16;
    }
    closure_8(closure_3, tmp29);
    const tmp23 = closure_8;
    const tmp24 = closure_3;
  }
};
export { FEATURES_PREMIUM_GUILD_USER };
