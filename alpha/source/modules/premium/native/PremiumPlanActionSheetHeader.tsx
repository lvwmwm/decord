// Module ID: 7150
// Function ID: 7151
// Name: PremiumPlanActionSheetHeader
// Dependencies: [19, 17, 1392, 7151, 21, 5092, 558, 576, 7152, 7153, 7154, 7155, 7156, 7157, 7158, 7159, 4769, 6156, 7160, 5391, 1105, 2]

// Module 7150 (PremiumPlanActionSheetHeader)
import react_native from "react-native" /* 17 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import PremiumUtils from "PremiumUtils" /* 4769 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import ColorConstants from "ColorConstants" /* 7151 */;
import AssetRegistryDefault from "AssetRegistry" /* 7152 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7153 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 7154 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 7155 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 7156 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 7157 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 7158 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 7159 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;
let importDefault;

let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = ColorConstants.getPremiumGradientColor;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { header: { height: 112, justifyContent: "center", alignItems: "center" }, logoContainer: { position: "absolute", top: 16, left: 16 }, imgWumpus: { position: "absolute", height: 90 }, imgWumpusRight: obj2, imgWumpusBottom: { bottom: 0 }, discountPill: { marginTop: 10 } };
obj2 = { transform: items };
items = [{ scaleX: -1 }];
let closure_9 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanActionSheetHeader(premiumType) {
  let closure_1;
  let discountOffer;
  let items;
  let items2;
  let tmp5;
  let tmp6;
  let trialOffer;
  const obj = premiumType(576);
  const cResult = obj.c(58);
  premiumType = premiumType.premiumType;
  ({ trialOffer, discountOffer } = premiumType);
  const tmp4 = closure_9();
  importDefault = tmp4;
  if (cResult[0] !== premiumType) {
    function getLogo() {
      if (React3.TIER_0 === premiumType) {
        return AssetRegistryDefault;
      } else if (React3.TIER_1 === premiumType) {
        return AssetRegistryDefault2;
      } else if (React3.TIER_2 === premiumType) {
        return AssetRegistryDefault3;
      }
    }
    cResult[0] = premiumType;
    cResult[1] = getLogo;
    tmp5 = getLogo;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== premiumType) {
    function getWumpus() {
      if (React3.TIER_0 === premiumType) {
        return AssetRegistryDefault4;
      } else if (React3.TIER_1 === premiumType) {
        return AssetRegistryDefault5;
      } else if (React3.TIER_2 === premiumType) {
        return AssetRegistryDefault6;
      }
    }
    cResult[2] = premiumType;
    cResult[3] = getWumpus;
    tmp6 = getWumpus;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === premiumType) {
    if (cResult[5] === tmp4.imgWumpusBottom) {
      let tmp7;
      let tmp8;
      if (cResult[6] === tmp4.imgWumpusRight) {
        tmp7 = cResult[7];
      }
      if (cResult[8] !== premiumType) {
        function getClouds() {
          if (React3.TIER_0 === premiumType) {
            return AssetRegistryDefault7;
          } else if (React3.TIER_1 === premiumType) {
            return null;
          } else if (React3.TIER_2 === premiumType) {
            return AssetRegistryDefault8;
          }
        }
        cResult[8] = premiumType;
        cResult[9] = getClouds;
        tmp8 = getClouds;
      } else {
        tmp8 = cResult[9];
      }
      if (cResult[10] === premiumType) {
        let tmp9;
        if (cResult[11] === trialOffer) {
          tmp9 = cResult[12];
        }
        if (cResult[13] === discountOffer) {
          let tmp14;
          let tmp21;
          let tmp24;
          let tmp26;
          let tmp31;
          let tmp33;
          if (cResult[14] === premiumType) {
            tmp14 = cResult[15];
          }
          const header = tmp4.header;
          if (cResult[16] !== premiumType) {
            const tmp23 = getPremiumGradientColor(premiumType);
            cResult[16] = premiumType;
            cResult[17] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[17];
          }
          if (cResult[18] !== premiumType) {
            const tmpResult = premiumType(4769);
            const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
            cResult[18] = premiumType;
            cResult[19] = premiumTypeDisplayName;
            tmp24 = premiumTypeDisplayName;
          } else {
            tmp24 = cResult[19];
          }
          if (cResult[20] !== tmp8) {
            let tmp8Result = tmp8();
            if (tmp8Result) {
              const obj3 = { source: tmp8() };
              const tmp30 = FastImageDefault;
              tmp8Result = closure_7(tmp30, obj3);
            }
            cResult[20] = tmp8;
            cResult[21] = tmp8Result;
            tmp26 = tmp8Result;
          } else {
            tmp26 = cResult[21];
          }
          const logoContainer = tmp4.logoContainer;
          if (cResult[22] !== tmp5) {
            const tmp5Result = tmp5();
            cResult[22] = tmp5;
            cResult[23] = tmp5Result;
            tmp31 = tmp5Result;
          } else {
            tmp31 = cResult[23];
          }
          if (cResult[24] !== tmp31) {
            const obj4 = { source: tmp31, resizeMode: "contain" };
            const tmp36 = closure_7(FastImageDefault, obj4);
            cResult[24] = tmp31;
            cResult[25] = tmp36;
            tmp33 = tmp36;
          } else {
            tmp33 = cResult[25];
          }
          if (cResult[26] === tmp9) {
            if (cResult[27] === premiumType) {
              if (cResult[28] === tmp4.discountPill) {
                let tmp37;
                if (cResult[29] === trialOffer) {
                  tmp37 = cResult[30];
                }
                if (cResult[31] === discountOffer) {
                  if (cResult[32] === tmp14) {
                    if (cResult[33] === premiumType) {
                      let tmp40;
                      if (cResult[34] === tmp4.discountPill) {
                        tmp40 = cResult[35];
                      }
                      if (cResult[36] === tmp4.logoContainer) {
                        if (cResult[37] === tmp33) {
                          if (cResult[38] === tmp37) {
                            let tmp43;
                            let tmp47;
                            let tmp49;
                            if (cResult[39] === tmp40) {
                              tmp43 = cResult[40];
                            }
                            if (cResult[41] !== tmp6) {
                              const tmp6Result = tmp6();
                              cResult[41] = tmp6;
                              cResult[42] = tmp6Result;
                              tmp47 = tmp6Result;
                            } else {
                              tmp47 = cResult[42];
                            }
                            const imgWumpus = tmp4.imgWumpus;
                            if (cResult[43] !== tmp7) {
                              const tmp7Result = tmp7();
                              cResult[43] = tmp7;
                              cResult[44] = tmp7Result;
                              tmp49 = tmp7Result;
                            } else {
                              tmp49 = cResult[44];
                            }
                            if (cResult[45] === tmp4.imgWumpus) {
                              let tmp51;
                              if (cResult[46] === tmp49) {
                                tmp51 = cResult[47];
                              }
                              if (cResult[48] === tmp47) {
                                let tmp52;
                                if (cResult[49] === tmp51) {
                                  tmp52 = cResult[50];
                                }
                                if (cResult[51] === tmp4.header) {
                                  if (cResult[52] === tmp26) {
                                    if (cResult[53] === tmp43) {
                                      if (cResult[54] === tmp52) {
                                        if (cResult[55] === tmp21) {
                                          let tmp56;
                                          if (cResult[56] === tmp24) {
                                            tmp56 = cResult[57];
                                          }
                                          return tmp56;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: header, colors: tmp21, start: premiumType(1105).HorizontalGradient.START, end: premiumType(1105).HorizontalGradient.END, accessible: true, accessibilityRole: "header", accessibilityLabel: tmp24, children: items };
                                items = [tmp26, tmp43, tmp52];
                                const tmp59 = LinearGradientDefault;
                                const tmp60 = closure_8(tmp59, obj5);
                                cResult[51] = tmp4.header;
                                cResult[52] = tmp26;
                                cResult[53] = tmp43;
                                cResult[54] = tmp52;
                                cResult[55] = tmp21;
                                cResult[56] = tmp24;
                                cResult[57] = tmp60;
                                tmp56 = tmp60;
                              }
                              const obj6 = { source: tmp47, style: tmp51, resizeMode: "contain" };
                              const tmp55 = closure_7(FastImageDefault, obj6);
                              cResult[48] = tmp47;
                              cResult[49] = tmp51;
                              cResult[50] = tmp55;
                              tmp52 = tmp55;
                            }
                            const items1 = [imgWumpus, tmp49];
                            cResult[45] = tmp4.imgWumpus;
                            cResult[46] = tmp49;
                            cResult[47] = items1;
                            tmp51 = items1;
                          }
                        }
                      }
                      const obj7 = { style: logoContainer, children: items2 };
                      items2 = [tmp33, tmp37, tmp40];
                      const tmp46 = closure_8(View, obj7);
                      cResult[36] = tmp4.logoContainer;
                      cResult[37] = tmp33;
                      cResult[38] = tmp37;
                      cResult[39] = tmp40;
                      cResult[40] = tmp46;
                      tmp43 = tmp46;
                    }
                  }
                }
                let tmp41 = null;
                if (tmp14) {
                  const obj8 = { style: tmp4.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
                  tmp41 = closure_7(tmp(7160).PremiumPill, obj8);
                }
                cResult[31] = discountOffer;
                cResult[32] = tmp14;
                cResult[33] = premiumType;
                cResult[34] = tmp4.discountPill;
                cResult[35] = tmp41;
                tmp40 = tmp41;
              }
            }
          }
          let tmp38 = null;
          if (tmp9) {
            const obj9 = { style: tmp4.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
            tmp38 = closure_7(tmp(7160).PremiumPill, obj9);
          }
          cResult[26] = tmp9;
          cResult[27] = premiumType;
          cResult[28] = tmp4.discountPill;
          cResult[29] = trialOffer;
          cResult[30] = tmp38;
          tmp37 = tmp38;
        }
        premiumType(4769);
        let tmp19 = null != discountOffer;
        if (tmp19) {
          const discount = discountOffer.discount;
          let hasItem;
          if (discount != null) {
            const planIds = discount.planIds;
            hasItem = planIds.includes(tmp17);
          }
          tmp19 = hasItem;
        }
        cResult[13] = discountOffer;
        cResult[14] = premiumType;
        cResult[15] = tmp19;
        tmp14 = tmp19;
      }
      let tmp11 = null != trialOffer;
      if (tmp11) {
        const subscriptionTrial = trialOffer.subscriptionTrial;
        let skuId;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
        const obj2 = PremiumUtilsDefault;
        tmp11 = skuId === obj2.getSkuIdForPremiumType(premiumType);
      }
      cResult[10] = premiumType;
      cResult[11] = trialOffer;
      cResult[12] = tmp11;
      tmp9 = tmp11;
    }
  }
  function getWumpusStyles() {
    if (React3.TIER_0 !== premiumType) {
      if (React3.TIER_1 !== premiumType) {
        if (React3.TIER_2 === premiumType) {
          return closure_1.imgWumpusRight;
        }
      }
    }
    return closure_1.imgWumpusBottom;
  }
  cResult[4] = premiumType;
  cResult[5] = tmp4.imgWumpusBottom;
  cResult[6] = tmp4.imgWumpusRight;
  cResult[7] = getWumpusStyles;
  tmp7 = getWumpusStyles;
}) : (function PremiumPlanActionSheetHeader(arg0) {
  let discountOffer;
  let items1;
  let premiumType;
  let tmp13Result10;
  let tmp13Result12;
  let tmp17Result;
  let tmp6Result;
  let trialOffer;
  ({ premiumType, trialOffer, discountOffer } = arg0);
  const tmp = closure_9();
  let tmp2 = null != trialOffer;
  if (tmp2) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj = PremiumUtilsDefault;
    tmp2 = skuId === obj.getSkuIdForPremiumType(premiumType);
  }
  PremiumUtils;
  let tmp10 = null != discountOffer;
  if (tmp10) {
    const discount = discountOffer.discount;
    let hasItem;
    if (discount != null) {
      const planIds = discount.planIds;
      hasItem = planIds.includes(tmp9);
    }
    tmp10 = hasItem;
  }
  const obj2 = { style: tmp.header, colors: getPremiumGradientColor(premiumType), start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, accessible: true, accessibilityRole: "header", accessibilityLabel: tmp6Result.getPremiumTypeDisplayName(premiumType), children: null };
  const tmp14 = LinearGradientDefault;
  tmp6Result = PremiumUtils;
  if (React3.TIER_0 === premiumType) {
    tmp17Result = tmp13(7158);
  } else {
    tmp17Result = null;
    if (React3.TIER_1 !== premiumType) {
      if (React3.TIER_2 === premiumType) {
        tmp17Result = tmp13(7159);
      }
    }
  }
  if (tmp17Result) {
    let tmp13Result8;
    const tmp13Result7 = FastImageDefault;
    const tmp17 = metroImportDefault;
    if (React3.TIER_0 === premiumType) {
      tmp13Result8 = tmp13(7158);
    } else {
      tmp13Result8 = null;
      if (React3.TIER_1 !== premiumType) {
        if (React3.TIER_2 === premiumType) {
          tmp13Result8 = tmp13(7159);
        }
      }
    }
    const obj3 = { source: tmp13Result8 };
    tmp17Result = tmp17(tmp13Result7, obj3);
  }
  const items = [tmp17Result, , ];
  const obj4 = { style: tmp.logoContainer, children: items1 };
  const tmp13Result9 = FastImageDefault;
  const tmp20 = View;
  if (React3.TIER_0 === premiumType) {
    tmp13Result10 = tmp13(7152);
  } else if (React3.TIER_1 === premiumType) {
    tmp13Result10 = tmp13(7153);
  } else if (React3.TIER_2 === premiumType) {
    tmp13Result10 = tmp13(7154);
  }
  items1 = [metroImportDefault(tmp13Result9, { source: tmp13Result10, resizeMode: "contain" }), , ];
  let tmp21Result = null;
  if (tmp2) {
    const obj5 = { style: tmp.discountPill, trialOffer, premiumType, useWhiteBackground: true, hideTrialCountdown: true };
    tmp21Result = tmp21(tmp6(7160).PremiumPill, obj5);
  }
  items1[1] = tmp21Result;
  let tmp21Result2 = null;
  if (tmp10) {
    const obj6 = { style: tmp.discountPill, discountOffer, premiumType, shouldShowDiscountUpsell: true, useWhiteBackground: true };
    tmp21Result2 = tmp21(tmp6(7160).PremiumPill, obj6);
  }
  items1[2] = tmp21Result2;
  items[1] = metroImportAll(tmp20, obj4);
  const tmp13Result11 = FastImageDefault;
  if (React3.TIER_0 === premiumType) {
    tmp13Result12 = tmp13(7155);
  } else if (React3.TIER_1 === premiumType) {
    tmp13Result12 = tmp13(7156);
  } else if (React3.TIER_2 === premiumType) {
    tmp13Result12 = tmp13(7157);
  }
  const obj7 = { source: tmp13Result12, style: null, resizeMode: "contain" };
  const items2 = [tmp.imgWumpus, ];
  if (React3.TIER_0 !== premiumType) {
    let imgWumpusBottom;
    if (React3.TIER_1 !== premiumType) {
      if (React3.TIER_2 === premiumType) {
        imgWumpusBottom = tmp.imgWumpusRight;
      }
    }
    items2[1] = imgWumpusBottom;
    obj7.style = items2;
    items[2] = metroImportDefault(tmp13Result11, obj7);
    obj2.children = items;
    return metroImportAll(tmp14, obj2);
  }
  imgWumpusBottom = tmp.imgWumpusBottom;
});
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default tmp5;
