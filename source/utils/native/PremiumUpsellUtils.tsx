// Module ID: 7934
// Function ID: 63344
// Name: usePremiumUpsellConfig
// Dependencies: []
// Exports: getUpsellItems, usePremiumUpsellConfig

// Module 7934 (usePremiumUpsellConfig)
function usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation) {
  analyticsLocations2 = initialUpsellKey;
  const importDefault = analyticsLocations2;
  const dependencyMap = analyticsLocation;
  let obj = analyticsLocations2(dependencyMap[17]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const React = premiumTrialOffer;
  const items = [constants.GLOBAL_EMOJI, constants.UPLOAD];
  const tmp2 = null != premiumTrialOffer && new Set(items).has(initialUpsellKey);
  let closure_4 = tmp2;
  let tmp3 = tmp2;
  if (tmp2) {
    let sku_id;
    if (null != premiumTrialOffer) {
      const subscription_trial = premiumTrialOffer.subscription_trial;
      if (null != subscription_trial) {
        sku_id = subscription_trial.sku_id;
      }
    }
    tmp3 = sku_id === TIER_0.TIER_0;
  }
  const items1 = [initialUpsellKey, tmp3];
  const memo = React.useMemo(() => {
    if (tmp3) {
      return arg0(arg2[18]).PremiumFeatureCardOrder.TIER_0_LEADING;
    } else {
      if (constants.UPLOAD !== arg0) {
        if (constants.ANIMATED_EMOJI !== tmp) {
          if (constants.GLOBAL_EMOJI !== tmp) {
            if (constants.GLOBAL_STICKER !== tmp) {
              if (constants.CUSTOM_PROFILES !== tmp) {
                if (constants.PREMIUM_GUILD_PROFILE !== tmp) {
                  if (constants.APP_ICONS !== tmp) {
                    if (constants.STREAM_HIGH_QUALITY !== tmp) {
                      if (constants.LONGER_MESSAGE !== tmp) {
                        if (constants.GUILD_CAP !== tmp) {
                          const ANIMATED_AVATAR = constants.ANIMATED_AVATAR;
                        }
                      }
                      return arg0(arg2[18]).PremiumFeatureCardOrder.TIER_0_LEADING;
                    }
                  }
                }
                const tmp3 = constants;
              }
            }
          }
        }
      }
      return arg0(arg2[18]).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }, items1);
  const items2 = [memo, analyticsLocations2, analyticsLocation];
  const items3 = [tmp3, premiumTrialOffer, tmp2];
  const callback = React.useCallback(() => {
    let obj = arg0(arg2[19]);
    const bestActiveInput = obj.getBestActiveInput();
    if (null != bestActiveInput) {
      bestActiveInput.closeCustomKeyboard();
    }
    obj = { location: arg2 };
    arg1(arg2[20]).track(tmp3.PREMIUM_PROMOTION_OPENED, obj);
    const obj3 = arg1(arg2[20]);
    arg1(arg2[21]).hideActionSheet();
    const obj5 = arg1(arg2[21]);
    obj = {};
    const obj1 = {};
    const obj6 = arg1(arg2[22]);
    const merged = Object.assign(arg2);
    obj1["object"] = memo.BUTTON_CTA;
    obj.analyticsLocation = obj1;
    obj.analyticsLocations = null != arg1 ? arg1 : [];
    obj.premiumFeatureCardOrder = memo;
    obj6.pushLazy(arg0(arg2[15])(arg2[23], arg2.paths), obj);
  }, items2);
  obj = {
    useTier0UpsellContent: tmp3,
    onViewAllPerks: callback,
    getNitroText: React.useMemo(() => {
      if (tmp2) {
        let sku_id;
        if (null != premiumTrialOffer) {
          const subscription_trial = premiumTrialOffer.subscription_trial;
          if (null != subscription_trial) {
            sku_id = subscription_trial.sku_id;
          }
        }
        if (closure_8.TIER_0 === sku_id) {
          const intl4 = arg0(arg2[6]).intl;
          return intl4.string(arg0(arg2[6]).t.hz78hE);
        } else if (closure_8.TIER_2 === sku_id) {
          const intl3 = arg0(arg2[6]).intl;
          return intl3.string(arg0(arg2[6]).t.Gd/XHF);
        }
      } else if (tmp3) {
        const intl = arg0(arg2[6]).intl;
        return intl.string(arg0(arg2[6]).t.9CM5v9);
      }
      const intl2 = arg0(arg2[6]).intl;
      return intl2.string(arg0(arg2[6]).t.pj0XBN);
    }, items3)
  };
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, AnalyticsObjects: closure_6, UpsellTypes: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ PremiumSubscriptionSKUs: closure_8, PremiumTypes: closure_9 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const obj = {
  handleShowUpsellAlert(initialUpsellKey) {
    initialUpsellKey = initialUpsellKey.initialUpsellKey;
    const arg1 = initialUpsellKey;
    let analyticsLocation = initialUpsellKey.analyticsLocation;
    if (undefined === analyticsLocation) {
      analyticsLocation = {};
    }
    const importDefault = analyticsLocation;
    let analyticsLocations = initialUpsellKey.analyticsLocations;
    if (undefined === analyticsLocations) {
      analyticsLocations = [];
    }
    const dependencyMap = analyticsLocations;
    let analyticsProperties = initialUpsellKey.analyticsProperties;
    if (undefined === analyticsProperties) {
      analyticsProperties = {};
    }
    let closure_3 = analyticsProperties;
    ({ largestFileSize: closure_4, imageSource: closure_5 } = initialUpsellKey);
    const currentUser = currentUser.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (constants.UPLOAD === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).isPremiumExactly(currentUser, TIER_2.TIER_2);
        const obj15 = importDefault(dependencyMap[16]);
      } else if (constants.GLOBAL_EMOJI === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseEmojisEverywhere(currentUser);
        const obj14 = importDefault(dependencyMap[16]);
      } else if (constants.ANIMATED_AVATAR === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseAnimatedAvatar(currentUser);
        const obj13 = importDefault(dependencyMap[16]);
      } else if (constants.BADGE === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseBadges(currentUser);
        const obj12 = importDefault(dependencyMap[16]);
      } else if (constants.ANIMATED_EMOJI === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseAnimatedEmojis(currentUser);
        const obj11 = importDefault(dependencyMap[16]);
      } else if (constants.EMOJI_AUTOCOMPLETE === initialUpsellKey) {
        let tmp19 = !importDefault(dependencyMap[16]).canUseAnimatedEmojis(currentUser);
        if (!tmp19) {
          tmp19 = !importDefault(dependencyMap[16]).canUseEmojisEverywhere(currentUser);
          const obj10 = importDefault(dependencyMap[16]);
        }
        flag = tmp19;
        const obj9 = importDefault(dependencyMap[16]);
      } else if (constants.CUSTOM_PROFILES === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUsePremiumProfileCustomization(currentUser);
        const obj8 = importDefault(dependencyMap[16]);
      } else if (constants.APP_ICONS === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUsePremiumAppIcons(currentUser);
        const obj7 = importDefault(dependencyMap[16]);
      } else if (constants.GLOBAL_STICKER === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseCustomStickersEverywhere(currentUser);
        const obj6 = importDefault(dependencyMap[16]);
      } else if (constants.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUsePremiumGuildMemberProfile(currentUser);
        const obj5 = importDefault(dependencyMap[16]);
      } else if (constants.LONGER_MESSAGE === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseIncreasedMessageLength(currentUser);
        const obj4 = importDefault(dependencyMap[16]);
      } else if (constants.GUILD_CAP === initialUpsellKey) {
        flag = !importDefault(dependencyMap[16]).canUseIncreasedGuildCap(currentUser);
        const obj3 = importDefault(dependencyMap[16]);
      } else {
        flag = false;
        if (constants.STREAM_HIGH_QUALITY === initialUpsellKey) {
          flag = true;
        }
      }
    }
    if (flag) {
      if (!importDefault(dependencyMap[12])(initialUpsellKey)) {
        const obj = {
          importer() {
                return initialUpsellKey(analyticsLocations[15])(analyticsLocations[14], analyticsLocations.paths).then((arg0) => {
                  let closure_0 = arg0.default;
                  return (arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj["initialUpsellKey"] = closure_0;
                    obj["analyticsLocation"] = closure_1;
                    obj["analyticsProperties"] = closure_3;
                    obj["analyticsLocations"] = closure_2;
                    obj["largestFileSize"] = closure_4;
                    obj["imageSource"] = closure_5;
                    return callback(closure_0, obj);
                  };
                });
              }
        };
        importDefault(dependencyMap[13]).openLazy(obj);
        const obj16 = importDefault(dependencyMap[13]);
      }
    }
  },
  usePremiumUpsellConfig
};
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("utils/native/PremiumUpsellUtils.tsx");

export default obj;
export const getUpsellItems = function getUpsellItems() {
  let obj = { key: constants.GLOBAL_EMOJI, image: importDefault(dependencyMap[5]) };
  const intl = arg1(dependencyMap[6]).intl;
  obj.activeTitle = intl.string(arg1(dependencyMap[6]).t.gKtr8N);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.passiveTitle = intl2.string(arg1(dependencyMap[6]).t.N8ZRNb);
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.description = intl3.format(arg1(dependencyMap[6]).t.rf7Ixp, {});
  const items = [obj, , , , , ];
  obj = { key: constants.ANIMATED_EMOJI, image: importDefault(dependencyMap[7]) };
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.activeTitle = intl4.string(arg1(dependencyMap[6]).t.F6rmyq);
  const intl5 = arg1(dependencyMap[6]).intl;
  obj.passiveTitle = intl5.string(arg1(dependencyMap[6]).t.e4cKNt);
  const intl6 = arg1(dependencyMap[6]).intl;
  obj.description = intl6.format(arg1(dependencyMap[6]).t.JxTzzb, {});
  items[1] = obj;
  obj = { key: constants.ANIMATED_AVATAR, image: importDefault(dependencyMap[8]) };
  const intl7 = arg1(dependencyMap[6]).intl;
  obj.activeTitle = intl7.string(arg1(dependencyMap[6]).t.tQh+gF);
  const intl8 = arg1(dependencyMap[6]).intl;
  obj.passiveTitle = intl8.string(arg1(dependencyMap[6]).t.HGSXTM);
  const intl9 = arg1(dependencyMap[6]).intl;
  obj.description = intl9.format(arg1(dependencyMap[6]).t.Tso/Fn, {});
  items[2] = obj;
  const obj1 = { key: constants.UPLOAD, image: importDefault(dependencyMap[9]) };
  const intl10 = arg1(dependencyMap[6]).intl;
  obj1.activeTitle = intl10.string(arg1(dependencyMap[6]).t.1EOZqw);
  const intl11 = arg1(dependencyMap[6]).intl;
  obj1.passiveTitle = intl11.string(arg1(dependencyMap[6]).t.tB51W4);
  const intl12 = arg1(dependencyMap[6]).intl;
  const obj2 = {};
  const intl13 = arg1(dependencyMap[6]).intl;
  obj2.maxUploadStandard = intl13.string(arg1(dependencyMap[6]).t.Ll40SK);
  const intl14 = arg1(dependencyMap[6]).intl;
  obj2.maxUploadPremium = intl14.string(arg1(dependencyMap[6]).t.EaBfeq);
  obj1.description = intl12.format(arg1(dependencyMap[6]).t.DUT5IC, obj2);
  items[3] = obj1;
  const obj3 = { key: constants.BADGE, image: importDefault(dependencyMap[10]) };
  const intl15 = arg1(dependencyMap[6]).intl;
  obj3.activeTitle = intl15.string(arg1(dependencyMap[6]).t.602BK4);
  const intl16 = arg1(dependencyMap[6]).intl;
  obj3.passiveTitle = intl16.string(arg1(dependencyMap[6]).t.j0TXTX);
  const intl17 = arg1(dependencyMap[6]).intl;
  obj3.description = intl17.format(arg1(dependencyMap[6]).t.p7i+li, {});
  items[4] = obj3;
  const obj4 = { key: constants.APP_ICONS, image: importDefault(dependencyMap[11]) };
  const intl18 = arg1(dependencyMap[6]).intl;
  obj4.activeTitle = intl18.string(arg1(dependencyMap[6]).t.1B1Cyn);
  const intl19 = arg1(dependencyMap[6]).intl;
  obj4.passiveTitle = intl19.string(arg1(dependencyMap[6]).t.1B1Cyn);
  const intl20 = arg1(dependencyMap[6]).intl;
  obj4.description = intl20.string(arg1(dependencyMap[6]).t.VL5TYT);
  items[5] = obj4;
  return items;
};
export { usePremiumUpsellConfig };
