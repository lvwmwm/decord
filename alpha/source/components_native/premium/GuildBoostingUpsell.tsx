// Module ID: 13790
// Function ID: 13791
// Name: GuildBoostingUpsell
// Dependencies: [19, 17, 5963, 1392, 21, 5092, 587, 13769, 1126, 9409, 13791, 13792, 13794, 8621, 13795, 8960, 13796, 12267, 13797, 12264, 13798, 9405, 13799, 9552, 558, 576, 504, 13668, 13800, 5031, 6156, 13632, 4969, 13641, 13642, 5088, 9423, 13804, 13805, 13806, 2]

// Module 13790 (GuildBoostingUpsell)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8621 */;
import ReactionIcon from "ReactionIcon" /* 8960 */;
import UploadIcon from "UploadIcon" /* 9405 */;
import BoostGemIcon from "BoostGemIcon" /* 9409 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9423 */;
import StarIcon from "StarIcon" /* 9552 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12264 */;
import StickerIcon from "StickerIcon" /* 12267 */;
import AssetRegistryDefault from "AssetRegistry" /* 13632 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13668 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13769 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13791 */;
import BoostTier3Icon2 from "BoostTier3Icon" /* 13792 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13794 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13795 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13796 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13797 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13798 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 13799 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 13800 */;
import GuildBoostingGuildListDefault from "GuildBoostingGuildList" /* 13805 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, StyleSheet } = react_native);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: obj2, subscriptionUpsell: { marginTop: 32 } };
obj2 = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles.createStyles(obj);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    let intl;
    let intl2;
    let intl3;
    let obj = { icon: AssetRegistryDefault2, label: intl.string(intl9.t["GS+bL0"]), IconComponent: BoostGemIcon.BoostGemIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    intl = intl9.intl;
    const items = [obj, , ];
    const obj2 = {
      icon: AssetRegistryDefault3,
      label: intl2.string(intl9.t.a7LWeM),
      IconComponent(arg0) {
        const obj = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        const BoostTier3Icon = BoostTier3Icon2.BoostTier3Icon;
        const merged = Object.assign(arg0);
        return closure_1_6(BoostTier3Icon, obj);
      }
    };
    intl2 = intl9.intl;
    items[1] = obj2;
    const obj3 = { icon: AssetRegistryDefault4, label: intl3.string(intl9.t.E76jz8), color: nativeDefault.unsafe_rawColors.YELLOW_300, IconComponent: ShieldUserIcon.ShieldUserIcon };
    intl3 = intl9.intl;
    items[2] = obj3;
    return items;
  }
}
function FEATURES_PREMIUM_GUILD() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  const obj = { icon: AssetRegistryDefault5, label: intl.string(intl9.t.Ts7BVI), IconComponent: ReactionIcon.ReactionIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW };
  intl = intl9.intl;
  const items = [obj, , , , ];
  const obj2 = { icon: AssetRegistryDefault6, label: intl2.string(intl9.t.QcJbt6), IconComponent: StickerIcon.StickerIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE };
  intl2 = intl9.intl;
  items[1] = obj2;
  const obj3 = { icon: AssetRegistryDefault7, label: intl3.string(intl9.t.rFNkf5), color: "#4173da", IconComponent: HeadphonesIcon.HeadphonesIcon };
  intl3 = intl9.intl;
  items[2] = obj3;
  const obj4 = { icon: AssetRegistryDefault8, label: intl4.string(intl9.t["BpjjS/"]), IconComponent: UploadIcon.UploadIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  intl4 = intl9.intl;
  items[3] = obj4;
  const obj5 = { icon: AssetRegistryDefault9, label: intl5.string(intl9.t["9g5Lgb"]), IconComponent: StarIcon.StarIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD };
  intl5 = intl9.intl;
  items[4] = obj5;
  return items;
}
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingUpsell(hasAvailableSlots) {
  let flattenedGuildIds;
  let fractionalState;
  let header;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isInReverseTrial;
  let items1;
  let items2;
  let items5;
  let onLearnMorePremium;
  let root;
  let tmp11Result2;
  let tmp15;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(58);
  ({ onLearnMorePremium, fractionalState, isInReverseTrial } = hasAvailableSlots);
  hasAvailableSlots = hasAvailableSlots.hasAvailableSlots;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function c() {
      return flattenedGuildIds.getFlattenedGuildIds().length > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult4 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = tmpResult4.useSubscriptionPlansLoaded();
  const tmpResult5 = GuildSubscriptionNoGuilds;
  const guildSubscriptionNoGuildsSource = tmpResult5.useGuildSubscriptionNoGuildsSource();
  const tmp12 = useThemeDefault();
  const tmp13 = FractionalPremiumStates;
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      if (!hasAvailableSlots) {
        return null;
      }
    }
  }
  ({ root, header } = tmp4);
  if (cResult[2] !== tmp4.imgPremiumGuild) {
    const obj2 = { style: tmp4.imgPremiumGuild, source: AssetRegistryDefault };
    const tmp11Result = FastImageDefault;
    const tmp18 = metroRequire(tmp11Result, obj2);
    cResult[2] = tmp4.imgPremiumGuild;
    cResult[3] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
  }
  const tmpResult6 = shared;
  if (tmpResult6.isThemeDark(tmp12)) {
    tmp11Result2 = tmp11(13641);
  } else {
    tmp11Result2 = tmp11(13642);
  }
  if (cResult[4] === tmp4.logoPremiumGuild) {
    let tmp20;
    let tmp22;
    let tmp24;
    let tmp27;
    let tmp29;
    if (cResult[5] === tmp11Result2) {
      tmp20 = cResult[6];
    }
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl9.t.hw6WTd);
      cResult[7] = stringResult;
      tmp22 = stringResult;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== tmp4.title) {
      const obj3 = { style: title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp22 };
      const tmp26 = metroRequire(Text_Text.Text, obj3);
      cResult[8] = tmp4.title;
      cResult[9] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[9];
    }
    const _Symbol2 = Symbol;
    const cardText = tmp4.cardText;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(intl9.t.K5jBdG);
      cResult[10] = stringResult1;
      tmp27 = stringResult1;
    } else {
      tmp27 = cResult[10];
    }
    if (cResult[11] !== tmp4.cardText) {
      const obj4 = { style: cardText, variant: "text-md/medium", children: tmp27 };
      const tmp31 = metroRequire(Text_Text.Text, obj4);
      cResult[11] = tmp4.cardText;
      cResult[12] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[12];
    }
    if (cResult[13] === tmp4.header) {
      if (cResult[14] === tmp24) {
        if (cResult[15] === tmp29) {
          if (cResult[16] === tmp15) {
            let tmp32;
            let tmp36;
            let tmp38;
            let tmp41;
            let tmp44;
            let tmp47;
            let tmp49;
            let tmp52;
            let tmp55;
            if (cResult[17] === tmp20) {
              tmp32 = cResult[18];
            }
            const _Symbol3 = Symbol;
            const title2 = tmp4.title;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult2 = intl3.string(intl9.t.RvfRTB);
              cResult[19] = stringResult2;
              tmp36 = stringResult2;
            } else {
              tmp36 = cResult[19];
            }
            if (cResult[20] !== tmp4.title) {
              const obj5 = { style: title2, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp36 };
              const tmp40 = metroRequire(Text_Text.Text, obj5);
              cResult[20] = tmp4.title;
              cResult[21] = tmp40;
              tmp38 = tmp40;
            } else {
              tmp38 = cResult[21];
            }
            const _Symbol4 = Symbol;
            const features = tmp4.features;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp43 = FEATURES_PREMIUM_GUILD_USER();
              cResult[22] = tmp43;
              tmp41 = tmp43;
            } else {
              tmp41 = cResult[22];
            }
            if (cResult[23] !== tmp4.features) {
              const obj6 = { style: features, features: tmp41 };
              const tmp46 = metroRequire(PremiumFeatureListDefault, obj6);
              cResult[23] = tmp4.features;
              cResult[24] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[24];
            }
            const _Symbol5 = Symbol;
            const title3 = tmp4.title;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult3 = intl4.string(intl9.t["/pVhjb"]);
              cResult[25] = stringResult3;
              tmp47 = stringResult3;
            } else {
              tmp47 = cResult[25];
            }
            if (cResult[26] !== tmp4.title) {
              const obj7 = { style: title3, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp47 };
              const tmp51 = metroRequire(Text_Text.Text, obj7);
              cResult[26] = tmp4.title;
              cResult[27] = tmp51;
              tmp49 = tmp51;
            } else {
              tmp49 = cResult[27];
            }
            const _Symbol6 = Symbol;
            const features2 = tmp4.features;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp54 = FEATURES_PREMIUM_GUILD();
              cResult[28] = tmp54;
              tmp52 = tmp54;
            } else {
              tmp52 = cResult[28];
            }
            if (cResult[29] !== tmp4.features) {
              const obj8 = { style: features2, features: tmp52 };
              const tmp57 = metroRequire(PremiumFeatureListDefault, obj8);
              cResult[29] = tmp4.features;
              cResult[30] = tmp57;
              tmp55 = tmp57;
            } else {
              tmp55 = cResult[30];
            }
            if (cResult[31] === fractionalState) {
              let tmp58;
              if (cResult[32] === subscriptionPlansLoaded) {
                tmp58 = cResult[33];
              }
              if (cResult[34] === stateFromStores) {
                if (cResult[35] === isInReverseTrial) {
                  if (cResult[36] === guildSubscriptionNoGuildsSource) {
                    if (cResult[37] === tmp4.cardText) {
                      if (cResult[38] === tmp4.guildList) {
                        let tmp61;
                        if (cResult[39] === tmp4.imgNoGuilds) {
                          tmp61 = cResult[40];
                        }
                        if (cResult[41] === subscriptionPlansLoaded) {
                          if (cResult[42] === onLearnMorePremium) {
                            let tmp67;
                            if (cResult[43] === tmp4.subscriptionUpsell) {
                              tmp67 = cResult[44];
                            }
                            if (cResult[45] === tmp4.upsell) {
                              if (cResult[46] === tmp58) {
                                if (cResult[47] === tmp61) {
                                  let tmp70;
                                  if (cResult[48] === tmp67) {
                                    tmp70 = cResult[49];
                                  }
                                  if (cResult[50] === tmp4.root) {
                                    if (cResult[51] === tmp32) {
                                      if (cResult[52] === tmp38) {
                                        if (cResult[53] === tmp44) {
                                          if (cResult[54] === tmp49) {
                                            if (cResult[55] === tmp55) {
                                              let tmp74;
                                              if (cResult[56] === tmp70) {
                                                tmp74 = cResult[57];
                                              }
                                              return tmp74;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj9 = { style: root, children: items1 };
                                  items1 = [tmp32, tmp38, tmp44, tmp49, tmp55, tmp70];
                                  const tmp77 = metroImportDefault(_false, obj9);
                                  cResult[50] = tmp4.root;
                                  cResult[51] = tmp32;
                                  cResult[52] = tmp38;
                                  cResult[53] = tmp44;
                                  cResult[54] = tmp49;
                                  cResult[55] = tmp55;
                                  cResult[56] = tmp70;
                                  cResult[57] = tmp77;
                                  tmp74 = tmp77;
                                }
                              }
                            }
                            const obj10 = { style: tmp4.upsell, children: items2 };
                            items2 = [tmp58, tmp61, tmp67];
                            const tmp73 = metroImportDefault(_false, obj10);
                            cResult[45] = tmp4.upsell;
                            cResult[46] = tmp58;
                            cResult[47] = tmp61;
                            cResult[48] = tmp67;
                            cResult[49] = tmp73;
                            tmp70 = tmp73;
                          }
                        }
                        let tmp68 = null;
                        if (subscriptionPlansLoaded) {
                          const obj11 = { onLearnMorePremium, style: tmp4.subscriptionUpsell };
                          tmp68 = metroRequire(tmp11(13806), obj11);
                        }
                        cResult[41] = subscriptionPlansLoaded;
                        cResult[42] = onLearnMorePremium;
                        cResult[43] = tmp4.subscriptionUpsell;
                        cResult[44] = tmp68;
                        tmp67 = tmp68;
                      }
                    }
                  }
                }
              }
              let tmp63Result = null;
              if (!isInReverseTrial) {
                let tmp66;
                const obj12 = { children: null };
                const tmp63 = metroImportDefault;
                const tmp64 = _false;
                if (stateFromStores) {
                  const obj13 = { style: tmp4.cardText, variant: "text-md/medium", children: intl7.string(intl9.t.WRzob8) };
                  const Text3 = tmp(5088).Text;
                  intl7 = tmp(1126).intl;
                  const items3 = [metroRequire(Text3, obj13), , ];
                  const obj14 = { style: tmp4.cardText, variant: "text-md/bold", children: intl8.string(intl9.t.j4bXcm) };
                  const Text4 = tmp(5088).Text;
                  intl8 = tmp(1126).intl;
                  items3[1] = metroRequire(Text4, obj14);
                  const obj15 = { style: tmp4.guildList };
                  items3[2] = metroRequire(GuildBoostingGuildListDefault, obj15);
                  obj12.children = items3;
                  tmp66 = obj12;
                } else {
                  const obj16 = { style: tmp4.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
                  const items4 = [metroRequire(FastImageDefault, obj16), , ];
                  const obj17 = { style: tmp4.cardText, variant: "text-md/bold", children: intl5.string(intl9.t.FHm4bZ) };
                  const Text = tmp(5088).Text;
                  intl5 = tmp(1126).intl;
                  items4[1] = metroRequire(Text, obj17);
                  const obj18 = { style: tmp4.cardText, variant: "text-md/medium", children: intl6.string(intl9.t.PSLiiu) };
                  const Text2 = tmp(5088).Text;
                  intl6 = tmp(1126).intl;
                  items4[2] = metroRequire(Text2, obj18);
                  obj12.children = items4;
                  tmp66 = obj12;
                }
                tmp63Result = tmp63(tmp64, tmp66);
              }
              cResult[34] = stateFromStores;
              cResult[35] = isInReverseTrial;
              cResult[36] = guildSubscriptionNoGuildsSource;
              cResult[37] = tmp4.cardText;
              cResult[38] = tmp4.guildList;
              cResult[39] = tmp4.imgNoGuilds;
              cResult[40] = tmp63Result;
              tmp61 = tmp63Result;
            }
            let tmp59 = null;
            if (subscriptionPlansLoaded) {
              tmp59 = null;
              if (fractionalState === tmp13.NONE) {
                tmp59 = metroRequire(tmp11(13804), {});
              }
            }
            cResult[31] = fractionalState;
            cResult[32] = subscriptionPlansLoaded;
            cResult[33] = tmp59;
            tmp58 = tmp59;
          }
        }
      }
    }
    const obj19 = { style: header, children: items5 };
    items5 = [tmp15, tmp20, tmp24, tmp29];
    const tmp35 = metroImportDefault(_false, obj19);
    cResult[13] = tmp4.header;
    cResult[14] = tmp24;
    cResult[15] = tmp29;
    cResult[16] = tmp15;
    cResult[17] = tmp20;
    cResult[18] = tmp35;
    tmp32 = tmp35;
  }
  const obj20 = { style: tmp4.logoPremiumGuild, source: tmp11Result2 };
  const tmp21 = metroRequire(FastImageDefault, obj20);
  cResult[4] = tmp4.logoPremiumGuild;
  cResult[5] = tmp11Result2;
  cResult[6] = tmp21;
  tmp20 = tmp21;
}) : (function GuildBoostingUpsell(arg0) {
  let flattenedGuildIds;
  let fractionalState;
  let hasAvailableSlots;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isInReverseTrial;
  let items1;
  let items2;
  let items3;
  let onLearnMorePremium;
  let tmp7Result6;
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_8();
  const items = [SortedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const obj2 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj2.useSubscriptionPlansLoaded();
  const obj3 = GuildSubscriptionNoGuilds;
  const guildSubscriptionNoGuildsSource = obj3.useGuildSubscriptionNoGuildsSource();
  const tmp8 = useThemeDefault();
  const tmp9 = FractionalPremiumStates;
  if (fractionalState !== FractionalPremiumStates.NONE) {
    let tmp11Result2;
    if (!isInReverseTrial) {
      tmp11Result2 = null;
    }
    return tmp11Result2;
  }
  const obj4 = { style: tmp.root, children: items2 };
  const obj5 = { style: tmp.header, children: items1 };
  const obj6 = { style: tmp.imgPremiumGuild, source: AssetRegistryDefault };
  const tmp7Result = FastImageDefault;
  items1 = [metroRequire(tmp7Result, obj6), , , ];
  const obj7 = { style: tmp.logoPremiumGuild, source: tmp7Result6 };
  const tmp7Result5 = FastImageDefault;
  const tmp2Result = shared;
  if (tmp2Result.isThemeDark(tmp8)) {
    tmp7Result6 = tmp7(13641);
  } else {
    tmp7Result6 = tmp7(13642);
  }
  items1[1] = metroRequire(tmp7Result5, obj7);
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl9.t.hw6WTd) };
  const Text = tmp2(5088).Text;
  intl = tmp2(1126).intl;
  items1[2] = metroRequire(Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: intl2.string(intl9.t.K5jBdG) };
  const Text2 = tmp2(5088).Text;
  intl2 = tmp2(1126).intl;
  items1[3] = metroRequire(Text2, obj9);
  items2 = [metroImportDefault(_false, obj5), , , , , ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(intl9.t.RvfRTB) };
  const Text3 = tmp2(5088).Text;
  intl3 = tmp2(1126).intl;
  items2[1] = metroRequire(Text3, obj10);
  const obj11 = { style: tmp.features, features: FEATURES_PREMIUM_GUILD_USER() };
  const tmp7Result7 = PremiumFeatureListDefault;
  items2[2] = metroRequire(tmp7Result7, obj11);
  const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl4.string(intl9.t["/pVhjb"]) };
  const Text4 = tmp2(5088).Text;
  intl4 = tmp2(1126).intl;
  items2[3] = metroRequire(Text4, obj12);
  const obj13 = { style: tmp.features, features: FEATURES_PREMIUM_GUILD() };
  const tmp7Result8 = PremiumFeatureListDefault;
  items2[4] = metroRequire(tmp7Result8, obj13);
  let tmp13Result = null;
  const obj14 = { style: tmp.upsell, children: items3 };
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === tmp9.NONE) {
      tmp13Result = tmp13(tmp7(13804), {});
    }
  }
  items3 = [tmp13Result, , ];
  let tmp11Result = null;
  if (!isInReverseTrial) {
    let tmp21;
    const obj15 = { children: null };
    if (stateFromStores) {
      const obj16 = { style: tmp.cardText, variant: "text-md/medium", children: intl7.string(intl9.t.WRzob8) };
      const Text7 = tmp2(5088).Text;
      intl7 = tmp2(1126).intl;
      const items4 = [metroRequire(Text7, obj16), , ];
      const obj17 = { style: tmp.cardText, variant: "text-md/bold", children: intl8.string(intl9.t.j4bXcm) };
      const Text8 = tmp2(5088).Text;
      intl8 = tmp2(1126).intl;
      items4[1] = metroRequire(Text8, obj17);
      const obj18 = { style: tmp.guildList };
      items4[2] = metroRequire(GuildBoostingGuildListDefault, obj18);
      obj15.children = items4;
      tmp21 = obj15;
    } else {
      const obj19 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items5 = [metroRequire(FastImageDefault, obj19), , ];
      const obj20 = { style: tmp.cardText, variant: "text-md/bold", children: intl5.string(intl9.t.FHm4bZ) };
      const Text5 = tmp2(5088).Text;
      intl5 = tmp2(1126).intl;
      items5[1] = metroRequire(Text5, obj20);
      const obj21 = { style: tmp.cardText, variant: "text-md/medium", children: intl6.string(intl9.t.PSLiiu) };
      const Text6 = tmp2(5088).Text;
      intl6 = tmp2(1126).intl;
      items5[2] = metroRequire(Text6, obj21);
      obj15.children = items5;
      tmp21 = obj15;
    }
    tmp11Result = tmp11(tmp12, tmp21);
  }
  items3[1] = tmp11Result;
  let tmp13Result2 = null;
  if (subscriptionPlansLoaded) {
    const obj22 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
    tmp13Result2 = tmp13(tmp7(13806), obj22);
  }
  items3[2] = tmp13Result2;
  items2[5] = metroImportDefault(_false, obj14);
  tmp11Result2 = tmp11(tmp12, obj4);
});
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default tmp5;
export { FEATURES_PREMIUM_GUILD_USER };
