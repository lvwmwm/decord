// Module ID: 12506
// Function ID: 96926
// Name: FEATURES_PREMIUM_GUILD_USER
// Dependencies: [31, 27, 4970, 1851, 33, 4130, 689, 12485, 1212, 7477, 12507, 12508, 12510, 8466, 12511, 7437, 12512, 7488, 12513, 11590, 12514, 7440, 12515, 9431, 566, 12404, 12516, 4066, 7391, 3976, 7400, 7401, 4126, 8182, 12520, 12521, 12522, 2]
// Exports: default

// Module 12506 (FEATURES_PREMIUM_GUILD_USER)
import "registerAsset";
import get_ActivityIndicator from "useTheme";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "PremiumFeatureList";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" } };
_createForOfIteratorHelperLoose = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.upsell = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subscriptionUpsell = { marginTop: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: require("registerAsset") };
    intl = require("getSystemLocale").intl;
    obj.label = intl.string(require("getSystemLocale").t["GS+bL0"]);
    obj.IconComponent = require("BoostGemIcon").BoostGemIcon;
    obj.color = require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, , ];
    items[0] = obj;
    obj = { icon: require("registerAsset") };
    intl2 = require("getSystemLocale").intl;
    obj.label = intl2.string(require("getSystemLocale").t.a7LWeM);
    obj.IconComponent = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["color"] = outer1_1(outer1_2[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
      return outer1_7(outer1_0(outer1_2[11]).BoostTier3Icon, obj);
    };
    items[1] = obj;
    obj1 = { icon: require("registerAsset") };
    intl3 = require("getSystemLocale").intl;
    obj1.label = intl3.string(require("getSystemLocale").t.E76jz8);
    obj1.color = require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300;
    obj1.IconComponent = require("ShieldUserIcon").ShieldUserIcon;
    items[2] = obj1;
    return items;
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  let fractionalState;
  let hasAvailableSlots;
  let isInReverseTrial;
  let onLearnMorePremium;
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getFlattenedGuildIds().length > 0);
  let obj1 = require(12404) /* _createForOfIteratorHelperLoose */;
  const subscriptionPlansLoaded = obj1.useSubscriptionPlansLoaded();
  let obj2 = require(12516) /* getGuildSubscriptionNoGuildsSource */;
  const guildSubscriptionNoGuildsSource = obj2.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp7Result = null;
    }
    return tmp7Result;
  }
  obj = { style: tmp.root };
  obj = { style: tmp.header };
  obj1 = { style: tmp.imgPremiumGuild, source: importDefault(7391) };
  const items1 = [callback(closure_4, obj1), , , ];
  obj2 = { style: tmp.logoPremiumGuild };
  let obj7 = require(3976) /* AccessibilityAnnouncer */;
  if (obj7.isThemeDark(tmp5)) {
    let tmp11Result = tmp11(7400);
  } else {
    tmp11Result = tmp11(7401);
  }
  obj2.source = tmp11Result;
  items1[1] = callback(closure_4, obj2);
  let num3 = 32;
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  let num4 = 8;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t.hw6WTd);
  items1[2] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { style: tmp.cardText, variant: "text-md/medium" };
  let str = "text-md/medium";
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.K5jBdG);
  items1[3] = callback(require(4126) /* Text */.Text, obj4);
  obj.children = items1;
  const items2 = [closure_8(closure_3, obj), , , , , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl3.string(require(1212) /* getSystemLocale */.t.RvfRTB);
  items2[1] = callback(require(4126) /* Text */.Text, obj5);
  const obj6 = { style: tmp.features };
  const tmp10 = closure_4;
  tmp5 = importDefault(4066)();
  const tmp9 = callback;
  obj6.features = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = callback(importDefault(8182), obj6);
  obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj7.children = intl4.string(require(1212) /* getSystemLocale */.t["/pVhjb"]);
  items2[3] = callback(require(4126) /* Text */.Text, obj7);
  const obj8 = { style: tmp.features };
  const obj9 = {};
  const tmp14 = importDefault(8182);
  obj9.icon = importDefault(12511);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj9.label = intl5.string(require(1212) /* getSystemLocale */.t.Ts7BVI);
  obj9.IconComponent = require(7437) /* ReactionIcon */.ReactionIcon;
  obj9.color = importDefault(689).unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj9, , , , ];
  const obj10 = { icon: importDefault(12512) };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj10.label = intl6.string(require(1212) /* getSystemLocale */.t.QcJbt6);
  obj10.IconComponent = require(7488) /* StickerIcon */.StickerIcon;
  obj10.color = importDefault(689).unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj10;
  const obj11 = { icon: importDefault(12513) };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj11.label = intl7.string(require(1212) /* getSystemLocale */.t.rFNkf5);
  obj11.color = "#4173da";
  obj11.IconComponent = require(11590) /* HeadphonesIcon */.HeadphonesIcon;
  items3[2] = obj11;
  const obj12 = { icon: importDefault(12514) };
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj12.label = intl8.string(require(1212) /* getSystemLocale */.t["BpjjS/"]);
  obj12.IconComponent = require(7440) /* UploadIcon */.UploadIcon;
  obj12.color = importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj12;
  const obj13 = { icon: importDefault(12515) };
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj13.label = intl9.string(require(1212) /* getSystemLocale */.t["9g5Lgb"]);
  obj13.IconComponent = require(9431) /* StarIcon */.StarIcon;
  obj13.color = importDefault(689).unsafe_rawColors.PREMIUM_PERK_GOLD;
  items3[4] = obj13;
  obj8.features = items3;
  items2[4] = callback(importDefault(8182), obj8);
  const obj14 = { style: tmp.upsell };
  let tmp18 = null;
  if (subscriptionPlansLoaded) {
    tmp18 = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp18 = callback(importDefault(12520), {});
    }
  }
  const items4 = [tmp18, , ];
  if (isInReverseTrial) {
    items4[1] = null;
    let tmp34 = null;
    if (subscriptionPlansLoaded) {
      const obj15 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
      tmp34 = callback(importDefault(12522), obj15);
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
      const intl12 = require(dependencyMap[num4]).intl;
      obj17.children = intl12.string(require(dependencyMap[num4]).t.WRzob8);
      const items5 = [tmp25(require(dependencyMap[num3]).Text, obj17), , ];
      const obj18 = {};
      const items6 = [tmp.cardText];
      obj18.style = items6;
      obj18.variant = "text-md/bold";
      const intl13 = require(dependencyMap[num4]).intl;
      str = intl13.string;
      num4 = str(require(dependencyMap[num4]).t.j4bXcm);
      obj18.children = num4;
      items5[1] = tmp25(require(dependencyMap[num3]).Text, obj18);
      const obj19 = { style: tmp.guildList };
      num3 = tmp25(importDefault(12521), obj19);
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
      const intl10 = require(dependencyMap[num4]).intl;
      obj21.children = intl10.string(require(dependencyMap[num4]).t.FHm4bZ);
      items7[1] = tmp25(require(dependencyMap[num3]).Text, obj21);
      const obj22 = { style: tmp.cardText, variant: str };
      const intl11 = require(dependencyMap[num4]).intl;
      obj22.children = intl11.string(require(dependencyMap[num4]).t.PSLiiu);
      items7[2] = tmp25(require(dependencyMap[num3]).Text, obj22);
      obj16.children = items7;
      tmp29 = obj16;
    }
    closure_8(closure_3, tmp29);
    const tmp23 = closure_8;
    const tmp24 = closure_3;
  }
};
export { FEATURES_PREMIUM_GUILD_USER };
