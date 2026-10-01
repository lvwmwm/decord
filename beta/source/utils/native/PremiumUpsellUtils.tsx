// Module ID: 8614
// Function ID: 8615
// Name: PremiumUpsellUtils
// Dependencies: [19, 1372, 1074, 1374, 21, 8615, 1115, 8616, 8617, 8618, 4488, 8619, 8620, 8621, 5204, 8623, 1981, 6867, 8663, 4701, 1241, 4800, 8695, 2]
// Exports: getUpsellItems, usePremiumUpsellConfig

// Module 8614 (PremiumUpsellUtils)
import Fragment from "Fragment" /* 21 */;
import intl20 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AssetRegistryDefault from "AssetRegistry" /* 8615 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8616 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8617 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8618 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8619 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8620 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function usePremiumUpsellConfig(upsellType, analyticsLocations, analyticsLocation) {
  let _location;
  _require = upsellType;
  let closure_1 = analyticsLocations;
  dependencyMap = analyticsLocation;
  let obj = require("usePremiumTrialOffer");
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let items = [, ];
  ({ GLOBAL_EMOJI: arr[0], UPLOAD: arr[1] } = closure_7);
  set = new Set(items);
  let hasItem = null != premiumTrialOffer;
  if (hasItem) {
    const tmp3 = set;
    hasItem = set.has(upsellType);
  }
  let tmp4 = hasItem;
  if (tmp4) {
    let skuId;
    if (premiumTrialOffer != null) {
      let subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
    }
    tmp4 = skuId === TIER_0.TIER_0;
  }
  let closure_5 = tmp4;
  const items1 = [upsellType, tmp4];
  const memo = premiumTrialOffer.useMemo(() => {
    const tmp = closure_5;
    if (tmp) {
      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
    } else {
      if (metroImportDefault.UPLOAD !== upsellType) {
        if (metroImportDefault.ANIMATED_EMOJI !== upsellType) {
          if (metroImportDefault.GLOBAL_EMOJI !== upsellType) {
            if (metroImportDefault.GLOBAL_STICKER !== upsellType) {
              if (metroImportDefault.CUSTOM_PROFILES !== upsellType) {
                if (metroImportDefault.PREMIUM_GUILD_PROFILE !== upsellType) {
                  if (metroImportDefault.APP_ICONS !== upsellType) {
                    if (metroImportDefault.STREAM_HIGH_QUALITY !== upsellType) {
                      if (metroImportDefault.SHOP_MEMBER_PRICING !== upsellType) {
                        if (metroImportDefault.LONGER_MESSAGE !== upsellType) {
                          if (metroImportDefault.GUILD_CAP !== upsellType) {
                            const ANIMATED_AVATAR = tmp3.ANIMATED_AVATAR;
                          }
                        }
                        return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }, items1);
  const items2 = [memo, analyticsLocations, analyticsLocation];
  const items3 = [tmp4, premiumTrialOffer, hasItem];
  const callback = premiumTrialOffer.useCallback(() => {
    let items;
    let obj6;
    const obj = ChatInputUtils;
    const bestActiveInput = obj.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
    const obj2 = { location: _location };
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(hasOwnProperty.PREMIUM_PROMOTION_OPENED, obj2);
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.hideAllActionSheets();
    const obj4 = { analyticsLocation: obj6, analyticsLocations: items, premiumFeatureCardOrder: memo };
    obj6 = { object: metroRequire.BUTTON_CTA };
    const tmp5 = openPremiumModalDefault;
    const merged = Object.assign(_location);
    items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    tmp5(obj4);
  }, items2);
  let obj2 = {
    useTier0UpsellContent: tmp4,
    onViewAllPerks: callback,
    getNitroText: premiumTrialOffer.useMemo(() => {
      const tmp = hasItem;
      if (tmp) {
        let skuId;
        if (premiumTrialOffer != null) {
          const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
          if (subscriptionTrial != null) {
            skuId = subscriptionTrial.skuId;
          }
        }
        if (metroImportAll.TIER_0 === skuId) {
          const intl4 = intl20.intl;
          return intl4.string(intl20.t.hz78hE);
        } else if (tmp9.TIER_2 === skuId) {
          const intl3 = intl20.intl;
          return intl3.string(intl20.t["Gd/XHF"]);
        }
      } else {
        const tmp2 = closure_5;
        if (tmp2) {
          const intl = intl20.intl;
          return intl.string(intl20.t["9CM5v9"]);
        }
      }
      const intl2 = intl20.intl;
      return intl2.string(intl20.t.pj0XBN);
    }, items3)
  };
  return obj2;
}
({ AnalyticEvents: hasOwnProperty, AnalyticsObjects: metroRequire, UpsellTypes: metroImportDefault } = Constants);
({ PremiumSubscriptionSKUs: metroImportAll, PremiumTypes: c9 } = PremiumConstants);
const jsx = Fragment.jsx;
let obj = {
  handleShowUpsellAlert(initialUpsellKey) {
    let closure_5;
    let isDismissable;
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
    ({ largestFileSize: UserStore, imageSource: closure_5, isDismissable } = initialUpsellKey);
    const tmp = undefined !== isDismissable && isDismissable;
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (constants3.UPLOAD === initialUpsellKey) {
        const obj15 = analyticsLocation(analyticsLocations[10]);
        flag = !obj15.isPremiumExactly(currentUser, TIER_2.TIER_2);
      } else if (constants3.GLOBAL_EMOJI === initialUpsellKey) {
        const obj14 = analyticsLocation(analyticsLocations[10]);
        flag = !obj14.canUseEmojisEverywhere(currentUser);
      } else if (constants3.ANIMATED_AVATAR === initialUpsellKey) {
        const obj13 = analyticsLocation(analyticsLocations[10]);
        flag = !obj13.canUseAnimatedAvatar(currentUser);
      } else if (constants3.BADGE === initialUpsellKey) {
        const obj12 = analyticsLocation(analyticsLocations[10]);
        flag = !obj12.canUseBadges(currentUser);
      } else if (constants3.ANIMATED_EMOJI === initialUpsellKey) {
        const obj11 = analyticsLocation(analyticsLocations[10]);
        flag = !obj11.canUseAnimatedEmojis(currentUser);
      } else if (constants3.EMOJI_AUTOCOMPLETE === initialUpsellKey) {
        const obj9 = analyticsLocation(analyticsLocations[10]);
        const canUseAnimatedEmojisResult = obj9.canUseAnimatedEmojis(currentUser);
        let tmp19 = !canUseAnimatedEmojisResult;
        const tmp16 = analyticsLocation;
        const tmp17 = analyticsLocations;
        if (canUseAnimatedEmojisResult) {
          const tmp16Result = tmp16(tmp17[10]);
          tmp19 = !tmp16Result.canUseEmojisEverywhere(currentUser);
        }
        flag = tmp19;
      } else if (constants3.CUSTOM_PROFILES === initialUpsellKey) {
        const obj8 = analyticsLocation(analyticsLocations[10]);
        flag = !obj8.canUsePremiumProfileCustomization(currentUser);
      } else if (constants3.APP_ICONS === initialUpsellKey) {
        const obj7 = analyticsLocation(analyticsLocations[10]);
        flag = !obj7.canUsePremiumAppIcons(currentUser);
      } else if (constants3.GLOBAL_STICKER === initialUpsellKey) {
        const obj6 = analyticsLocation(analyticsLocations[10]);
        flag = !obj6.canUseCustomStickersEverywhere(currentUser);
      } else if (constants3.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
        const obj5 = analyticsLocation(analyticsLocations[10]);
        flag = !obj5.canUsePremiumGuildMemberProfile(currentUser);
      } else if (constants3.LONGER_MESSAGE === initialUpsellKey) {
        const obj4 = analyticsLocation(analyticsLocations[10]);
        flag = !obj4.canUseIncreasedMessageLength(currentUser);
      } else if (constants3.GUILD_CAP === initialUpsellKey) {
        const obj3 = analyticsLocation(analyticsLocations[10]);
        flag = !obj3.canUseIncreasedGuildCap(currentUser);
      } else {
        flag = false;
        if (constants3.STREAM_HIGH_QUALITY === initialUpsellKey) {
          flag = true;
        }
      }
    }
    if (flag) {
      const tmp31 = analyticsLocation;
      const tmp32 = analyticsLocations;
      if (!analyticsLocation(analyticsLocations[13])(initialUpsellKey)) {
        const obj = {
          importer() {
                let imageSource;
                let largestFileSize;
                const promise = asyncRequire(8623, dependencyMap.paths);
                return promise.then((result) => {
                  let closure_0 = result.default;
                  return (arg0) => {
                    const merged = Object.assign(arg0);
                    return <closure_0 initialUpsellKey={initialUpsellKey} analyticsLocation={analyticsLocation} analyticsProperties={analyticsProperties} analyticsLocations={analyticsLocations} largestFileSize={largestFileSize} imageSource={imageSource} />;
                  };
                });
              },
          isDismissable: tmp
        };
        const tmp31Result = tmp31(tmp32[14]);
        tmp31Result.openLazy(obj);
      }
    }
  },
  usePremiumUpsellConfig
};
const result = size.fileFinishedImporting("utils/native/PremiumUpsellUtils.tsx");

export default obj;
export const getUpsellItems = function getUpsellItems() {
  let DUT5IC;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj5;
  let obj6;
  const obj = { key: metroImportDefault.GLOBAL_EMOJI, image: AssetRegistryDefault, activeTitle: intl.string(intl20.t.gKtr8N), passiveTitle: intl2.string(intl20.t.N8ZRNb), description: intl3.format(intl20.t.rf7Ixp, {}) };
  intl = intl20.intl;
  intl2 = intl20.intl;
  intl3 = intl20.intl;
  const items = [obj, , , , , ];
  const obj2 = { key: metroImportDefault.ANIMATED_EMOJI, image: AssetRegistryDefault2, activeTitle: intl4.string(intl20.t.F6rmyq), passiveTitle: intl5.string(intl20.t.e4cKNt), description: intl6.format(intl20.t.JxTzzb, {}) };
  intl4 = intl20.intl;
  intl5 = intl20.intl;
  intl6 = intl20.intl;
  items[1] = obj2;
  const obj3 = { key: metroImportDefault.ANIMATED_AVATAR, image: AssetRegistryDefault3, activeTitle: intl7.string(intl20.t["tQh+gF"]), passiveTitle: intl8.string(intl20.t.HGSXTM), description: intl9.format(intl20.t["Tso/Fn"], {}) };
  intl7 = intl20.intl;
  intl8 = intl20.intl;
  intl9 = intl20.intl;
  items[2] = obj3;
  const obj4 = { key: metroImportDefault.UPLOAD, image: AssetRegistryDefault4, activeTitle: intl10.string(intl20.t["1EOZqw"]), passiveTitle: intl11.string(intl20.t.tB51W4), description: format(DUT5IC, obj5) };
  intl10 = intl20.intl;
  intl11 = intl20.intl;
  const intl12 = intl20.intl;
  format = intl12.format;
  obj5 = { maxUploadStandard: intl13.string(intl20.t.Ll40SK), maxUploadPremium: obj6.getMaxFileSizeForPremiumType(React4.TIER_2) };
  DUT5IC = intl20.t.DUT5IC;
  intl13 = intl20.intl;
  items[3] = obj4;
  obj6 = PremiumUtils;
  const obj7 = { key: metroImportDefault.BADGE, image: AssetRegistryDefault5, activeTitle: intl14.string(intl20.t["602BK4"]), passiveTitle: intl15.string(intl20.t.j0TXTX), description: intl16.format(intl20.t["p7i+li"], {}) };
  intl14 = intl20.intl;
  intl15 = intl20.intl;
  intl16 = intl20.intl;
  items[4] = obj7;
  const obj8 = { key: metroImportDefault.APP_ICONS, image: AssetRegistryDefault6, activeTitle: intl17.string(intl20.t["1B1Cyn"]), passiveTitle: intl18.string(intl20.t["1B1Cyn"]), description: intl19.string(intl20.t.VL5TYT) };
  intl17 = intl20.intl;
  intl18 = intl20.intl;
  intl19 = intl20.intl;
  items[5] = obj8;
  return items;
};
export { usePremiumUpsellConfig };
