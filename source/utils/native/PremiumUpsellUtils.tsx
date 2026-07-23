// Module ID: 7941
// Function ID: 63404
// Name: usePremiumUpsellConfig
// Dependencies: [31, 1849, 653, 1851, 33, 7942, 1212, 7943, 7944, 7945, 7946, 7947, 7948, 4471, 7960, 1934, 3776, 6686, 7999, 3989, 675, 4098, 8139, 2]
// Exports: getUpsellItems, usePremiumUpsellConfig

// Module 7941 (usePremiumUpsellConfig)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation) {
  const _require = initialUpsellKey;
  let closure_1 = analyticsLocations2;
  const dependencyMap = analyticsLocation;
  let obj = _require(6686);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const items = [constants.GLOBAL_EMOJI, constants.UPLOAD];
  const tmp2 = null != premiumTrialOffer && new Set(items).has(initialUpsellKey);
  let _isNativeReflectConstruct = tmp2;
  let tmp3 = tmp2;
  if (tmp2) {
    let sku_id;
    if (null != premiumTrialOffer) {
      let subscription_trial = premiumTrialOffer.subscription_trial;
      if (null != subscription_trial) {
        sku_id = subscription_trial.sku_id;
      }
    }
    tmp3 = sku_id === TIER_0.TIER_0;
  }
  let closure_5 = tmp3;
  const items1 = [initialUpsellKey, tmp3];
  const memo = premiumTrialOffer.useMemo(() => {
    if (closure_5) {
      return initialUpsellKey(analyticsLocation[18]).PremiumFeatureCardOrder.TIER_0_LEADING;
    } else {
      if (outer1_7.UPLOAD !== initialUpsellKey) {
        if (outer1_7.ANIMATED_EMOJI !== tmp) {
          if (outer1_7.GLOBAL_EMOJI !== tmp) {
            if (outer1_7.GLOBAL_STICKER !== tmp) {
              if (outer1_7.CUSTOM_PROFILES !== tmp) {
                if (outer1_7.PREMIUM_GUILD_PROFILE !== tmp) {
                  if (outer1_7.APP_ICONS !== tmp) {
                    if (outer1_7.STREAM_HIGH_QUALITY !== tmp) {
                      if (outer1_7.LONGER_MESSAGE !== tmp) {
                        if (outer1_7.GUILD_CAP !== tmp) {
                          const ANIMATED_AVATAR = outer1_7.ANIMATED_AVATAR;
                        }
                      }
                      return initialUpsellKey(analyticsLocation[18]).PremiumFeatureCardOrder.TIER_0_LEADING;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return initialUpsellKey(analyticsLocation[18]).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }, items1);
  const items2 = [memo, analyticsLocations2, analyticsLocation];
  const items3 = [tmp3, premiumTrialOffer, tmp2];
  const callback = premiumTrialOffer.useCallback(() => {
    let obj = initialUpsellKey(analyticsLocation[19]);
    const bestActiveInput = obj.getBestActiveInput();
    if (null != bestActiveInput) {
      bestActiveInput.closeCustomKeyboard();
    }
    obj = { location: analyticsLocation };
    analyticsLocations2(analyticsLocation[20]).track(tmp3.PREMIUM_PROMOTION_OPENED, obj);
    const obj3 = analyticsLocations2(analyticsLocation[20]);
    analyticsLocations2(analyticsLocation[21]).hideActionSheet();
    obj = {};
    const obj1 = {};
    const obj5 = analyticsLocations2(analyticsLocation[21]);
    const merged = Object.assign(analyticsLocation);
    obj1["object"] = memo.BUTTON_CTA;
    obj.analyticsLocation = obj1;
    obj.analyticsLocations = null != analyticsLocations2 ? analyticsLocations2 : [];
    obj.premiumFeatureCardOrder = memo;
    analyticsLocations2(analyticsLocation[22])(obj);
  }, items2);
  obj = {
    useTier0UpsellContent: tmp3,
    onViewAllPerks: callback,
    getNitroText: premiumTrialOffer.useMemo(() => {
      if (_isNativeReflectConstruct) {
        let sku_id;
        if (null != premiumTrialOffer) {
          const subscription_trial = premiumTrialOffer.subscription_trial;
          if (null != subscription_trial) {
            sku_id = subscription_trial.sku_id;
          }
        }
        if (outer1_8.TIER_0 === sku_id) {
          const intl4 = initialUpsellKey(analyticsLocation[6]).intl;
          return intl4.string(initialUpsellKey(analyticsLocation[6]).t.hz78hE);
        } else if (outer1_8.TIER_2 === sku_id) {
          const intl3 = initialUpsellKey(analyticsLocation[6]).intl;
          return intl3.string(initialUpsellKey(analyticsLocation[6]).t["Gd/XHF"]);
        }
      } else if (closure_5) {
        const intl = initialUpsellKey(analyticsLocation[6]).intl;
        return intl.string(initialUpsellKey(analyticsLocation[6]).t["9CM5v9"]);
      }
      const intl2 = initialUpsellKey(analyticsLocation[6]).intl;
      return intl2.string(initialUpsellKey(analyticsLocation[6]).t.pj0XBN);
    }, items3)
  };
  return obj;
}
({ AnalyticEvents: closure_5, AnalyticsObjects: closure_6, UpsellTypes: closure_7 } = ME);
({ PremiumSubscriptionSKUs: closure_8, PremiumTypes: closure_9 } = GuildFeatures);
const result = require("ME").fileFinishedImporting("utils/native/PremiumUpsellUtils.tsx");

export default {
  handleShowUpsellAlert(initialUpsellKey) {
    let _isNativeReflectConstruct;
    let closure_5;
    initialUpsellKey = initialUpsellKey.initialUpsellKey;
    let analyticsLocation = initialUpsellKey.analyticsLocation;
    if (undefined === analyticsLocation) {
      analyticsLocation = {};
    }
    let analyticsLocations = initialUpsellKey.analyticsLocations;
    if (undefined === analyticsLocations) {
      analyticsLocations = [];
    }
    let analyticsProperties = initialUpsellKey.analyticsProperties;
    if (undefined === analyticsProperties) {
      analyticsProperties = {};
    }
    ({ largestFileSize: _isNativeReflectConstruct, imageSource: closure_5 } = initialUpsellKey);
    currentUser = currentUser.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (constants.UPLOAD === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).isPremiumExactly(currentUser, TIER_2.TIER_2);
        const obj15 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.GLOBAL_EMOJI === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseEmojisEverywhere(currentUser);
        const obj14 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.ANIMATED_AVATAR === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseAnimatedAvatar(currentUser);
        const obj13 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.BADGE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseBadges(currentUser);
        const obj12 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.ANIMATED_EMOJI === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseAnimatedEmojis(currentUser);
        const obj11 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.EMOJI_AUTOCOMPLETE === initialUpsellKey) {
        let tmp19 = !analyticsLocation(analyticsLocations[16]).canUseAnimatedEmojis(currentUser);
        if (!tmp19) {
          tmp19 = !analyticsLocation(analyticsLocations[16]).canUseEmojisEverywhere(currentUser);
          const obj10 = analyticsLocation(analyticsLocations[16]);
        }
        flag = tmp19;
        const obj9 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.CUSTOM_PROFILES === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUsePremiumProfileCustomization(currentUser);
        const obj8 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.APP_ICONS === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUsePremiumAppIcons(currentUser);
        const obj7 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.GLOBAL_STICKER === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseCustomStickersEverywhere(currentUser);
        const obj6 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUsePremiumGuildMemberProfile(currentUser);
        const obj5 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.LONGER_MESSAGE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseIncreasedMessageLength(currentUser);
        const obj4 = analyticsLocation(analyticsLocations[16]);
      } else if (constants.GUILD_CAP === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[16]).canUseIncreasedGuildCap(currentUser);
        const obj3 = analyticsLocation(analyticsLocations[16]);
      } else {
        flag = false;
        if (constants.STREAM_HIGH_QUALITY === initialUpsellKey) {
          flag = true;
        }
      }
    }
    if (flag) {
      if (!analyticsLocation(analyticsLocations[12])(initialUpsellKey)) {
        let obj = {
          importer() {
                return initialUpsellKey(analyticsLocations[15])(analyticsLocations[14], analyticsLocations.paths).then((arg0) => {
                  let closure_0 = arg0.default;
                  return (arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj["initialUpsellKey"] = outer2_0;
                    obj["analyticsLocation"] = outer2_1;
                    obj["analyticsProperties"] = outer2_3;
                    obj["analyticsLocations"] = outer2_2;
                    obj["largestFileSize"] = outer2_4;
                    obj["imageSource"] = outer2_5;
                    return outer3_10(closure_0, obj);
                  };
                });
              }
        };
        analyticsLocation(analyticsLocations[13]).openLazy(obj);
        const obj16 = analyticsLocation(analyticsLocations[13]);
      }
    }
  },
  usePremiumUpsellConfig
};
export const getUpsellItems = function getUpsellItems() {
  let obj = { key: constants.GLOBAL_EMOJI, image: importDefault(7942) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.activeTitle = intl.string(require(1212) /* getSystemLocale */.t.gKtr8N);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.passiveTitle = intl2.string(require(1212) /* getSystemLocale */.t.N8ZRNb);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl3.format(require(1212) /* getSystemLocale */.t.rf7Ixp, {});
  const items = [obj, , , , , ];
  obj = { key: constants.ANIMATED_EMOJI, image: importDefault(7943) };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.activeTitle = intl4.string(require(1212) /* getSystemLocale */.t.F6rmyq);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.passiveTitle = intl5.string(require(1212) /* getSystemLocale */.t.e4cKNt);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl6.format(require(1212) /* getSystemLocale */.t.JxTzzb, {});
  items[1] = obj;
  obj = { key: constants.ANIMATED_AVATAR, image: importDefault(7944) };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj.activeTitle = intl7.string(require(1212) /* getSystemLocale */.t["tQh+gF"]);
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj.passiveTitle = intl8.string(require(1212) /* getSystemLocale */.t.HGSXTM);
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl9.format(require(1212) /* getSystemLocale */.t["Tso/Fn"], {});
  items[2] = obj;
  const obj1 = { key: constants.UPLOAD, image: importDefault(7945) };
  const intl10 = require(1212) /* getSystemLocale */.intl;
  obj1.activeTitle = intl10.string(require(1212) /* getSystemLocale */.t["1EOZqw"]);
  const intl11 = require(1212) /* getSystemLocale */.intl;
  obj1.passiveTitle = intl11.string(require(1212) /* getSystemLocale */.t.tB51W4);
  const intl12 = require(1212) /* getSystemLocale */.intl;
  const obj2 = {};
  const intl13 = require(1212) /* getSystemLocale */.intl;
  obj2.maxUploadStandard = intl13.string(require(1212) /* getSystemLocale */.t.Ll40SK);
  const intl14 = require(1212) /* getSystemLocale */.intl;
  obj2.maxUploadPremium = intl14.string(require(1212) /* getSystemLocale */.t.EaBfeq);
  obj1.description = intl12.format(require(1212) /* getSystemLocale */.t.DUT5IC, obj2);
  items[3] = obj1;
  const obj3 = { key: constants.BADGE, image: importDefault(7946) };
  const intl15 = require(1212) /* getSystemLocale */.intl;
  obj3.activeTitle = intl15.string(require(1212) /* getSystemLocale */.t["602BK4"]);
  const intl16 = require(1212) /* getSystemLocale */.intl;
  obj3.passiveTitle = intl16.string(require(1212) /* getSystemLocale */.t.j0TXTX);
  const intl17 = require(1212) /* getSystemLocale */.intl;
  obj3.description = intl17.format(require(1212) /* getSystemLocale */.t["p7i+li"], {});
  items[4] = obj3;
  const obj4 = { key: constants.APP_ICONS, image: importDefault(7947) };
  const intl18 = require(1212) /* getSystemLocale */.intl;
  obj4.activeTitle = intl18.string(require(1212) /* getSystemLocale */.t["1B1Cyn"]);
  const intl19 = require(1212) /* getSystemLocale */.intl;
  obj4.passiveTitle = intl19.string(require(1212) /* getSystemLocale */.t["1B1Cyn"]);
  const intl20 = require(1212) /* getSystemLocale */.intl;
  obj4.description = intl20.string(require(1212) /* getSystemLocale */.t.VL5TYT);
  items[5] = obj4;
  return items;
};
export { usePremiumUpsellConfig };
