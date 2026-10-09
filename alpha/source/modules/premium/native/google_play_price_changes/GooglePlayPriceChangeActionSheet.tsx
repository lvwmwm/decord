// Module ID: 17568
// Function ID: 17569
// Name: GooglePlayPriceChangeActionSheet
// Dependencies: [19, 17, 4734, 17569, 1085, 2061, 21, 5091, 587, 558, 576, 504, 4728, 6933, 6836, 5087, 1126, 2127, 5376, 2]

// Module 17568 (GooglePlayPriceChangeActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 17569 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, header: obj4, body: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  let container;
  let intl;
  let items2;
  let items3;
  let obj11;
  let premiumSubscription;
  let priceChangeRecord;
  let textContainer;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = markAsDismissed(576);
  const cResult = obj.c(45);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GooglePlayPriceChangeStore];
    const fn = function p() {
      return priceChangeRecord.priceChangeRecord;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = markAsDismissed(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SubscriptionStore];
    const fn2 = function v() {
      return premiumSubscription.getPremiumSubscription(true);
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult7 = markAsDismissed(504);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, tmp10);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[4] === stateFromStores.expectedChargeTime) {
    if (cResult[5] === stateFromStores.newCurrency) {
      if (cResult[6] === stateFromStores.newPrice) {
        if (cResult[7] === stateFromStores.oldCurrency) {
          if (cResult[8] === stateFromStores.oldPrice) {
            if (cResult[9] === tmp4.body) {
              if (cResult[10] === tmp4.container) {
                if (cResult[11] === tmp4.header) {
                  if (cResult[12] === tmp4.textContainer) {
                    let tmp13;
                    let tmp14;
                    let tmp15;
                    let tmp16;
                    let tmp17;
                    let str2;
                    let tmp18;
                    let tmp19;
                    let tmp20;
                    let tmp21;
                    if (cResult[13] === str) {
                      tmp13 = cResult[14];
                      tmp14 = cResult[15];
                      tmp15 = cResult[16];
                      tmp16 = cResult[17];
                      tmp17 = cResult[18];
                      str2 = cResult[19];
                      tmp18 = cResult[20];
                      tmp19 = cResult[21];
                      tmp20 = cResult[22];
                      tmp21 = cResult[23];
                    }
                    if (cResult[24] === tmp13) {
                      if (cResult[25] === str2) {
                        if (cResult[26] === tmp18) {
                          let tmp30;
                          if (cResult[27] === tmp19) {
                            tmp30 = cResult[28];
                          }
                          if (cResult[29] === tmp14) {
                            if (cResult[30] === tmp30) {
                              if (cResult[31] === tmp20) {
                                let tmp33;
                                let tmp36;
                                let tmp38;
                                if (cResult[32] === tmp21) {
                                  tmp33 = cResult[33];
                                }
                                const _Symbol = Symbol;
                                if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl3 = tmp(1126).intl;
                                  const stringResult = intl3.string(markAsDismissed(1126).t.BddRzS);
                                  cResult[34] = stringResult;
                                  tmp36 = stringResult;
                                } else {
                                  tmp36 = cResult[34];
                                }
                                if (cResult[35] !== markAsDismissed) {
                                  const obj2 = {
                                    variant: "primary",
                                    text: tmp36,
                                    onPress() {
                                                                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                                                                    }
                                  };
                                  const tmp40 = closure_8(markAsDismissed(5376).Button, obj2);
                                  cResult[35] = markAsDismissed;
                                  cResult[36] = tmp40;
                                  tmp38 = tmp40;
                                } else {
                                  tmp38 = cResult[36];
                                }
                                if (cResult[37] === tmp15) {
                                  if (cResult[38] === tmp17) {
                                    if (cResult[39] === tmp33) {
                                      let tmp41;
                                      if (cResult[40] === tmp38) {
                                        tmp41 = cResult[41];
                                      }
                                      if (cResult[42] === tmp16) {
                                        let tmp44;
                                        if (cResult[43] === tmp41) {
                                          tmp44 = cResult[44];
                                        }
                                        return tmp44;
                                      }
                                      const obj3 = { children: tmp41 };
                                      const tmp46 = closure_8(tmp16, obj3);
                                      cResult[42] = tmp16;
                                      cResult[43] = tmp41;
                                      cResult[44] = tmp46;
                                      tmp44 = tmp46;
                                    }
                                  }
                                }
                                const obj4 = { style: tmp17, children: items2 };
                                items2 = [tmp33, tmp38];
                                const tmp43 = closure_9(tmp15, obj4);
                                cResult[37] = tmp15;
                                cResult[38] = tmp17;
                                cResult[39] = tmp33;
                                cResult[40] = tmp38;
                                cResult[41] = tmp43;
                                tmp41 = tmp43;
                              }
                            }
                          }
                          const obj5 = { style: tmp20, children: items3 };
                          items3 = [tmp21, tmp30];
                          const tmp35 = closure_9(tmp14, obj5);
                          cResult[29] = tmp14;
                          cResult[30] = tmp30;
                          cResult[31] = tmp20;
                          cResult[32] = tmp21;
                          cResult[33] = tmp35;
                          tmp33 = tmp35;
                        }
                      }
                    }
                    const obj6 = { variant: str2, style: tmp18, children: tmp19 };
                    const tmp32 = closure_8(tmp13, obj6);
                    cResult[24] = tmp13;
                    cResult[25] = str2;
                    cResult[26] = tmp18;
                    cResult[27] = tmp19;
                    cResult[28] = tmp32;
                    tmp30 = tmp32;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmpResult8 = markAsDismissed(4728);
  const tierDisplayNameByPlanId = tmpResult8.getTierDisplayNameByPlanId(str);
  const tmpResult9 = markAsDismissed(4728);
  const intervalType = tmpResult9.getInterval(str).intervalType;
  const tmpResult10 = markAsDismissed(4728);
  const intervalStringAsNoun = tmpResult10.getIntervalStringAsNoun(intervalType);
  const tmpResult11 = markAsDismissed(6933);
  const formatPriceResult = tmpResult11.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmpResult12 = markAsDismissed(6933);
  const formatPriceResult1 = tmpResult12.formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  BottomSheet = tmp(6836).BottomSheet;
  ({ container, textContainer } = tmp4);
  const obj7 = { variant: "heading-xl/bold", style: tmp4.header, children: intl.format(markAsDismissed(1126).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId }) };
  const Text = tmp(5087).Text;
  intl = tmp(1126).intl;
  const tmp26 = closure_8(Text, obj7);
  const Text2 = tmp(5087).Text;
  const body = tmp4.body;
  const intl2 = tmp(1126).intl;
  const format = intl2.format;
  const obj8 = { subscriptionName: tierDisplayNameByPlanId, changeDate: new Date(stateFromStores.expectedChargeTime), interval: intervalStringAsNoun, newPrice: formatPriceResult1, oldPrice: formatPriceResult, hc_article_url: obj11.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL) };
  const prop = tmp(1126).t["n+Hrjb"];
  new Date(stateFromStores.expectedChargeTime);
  obj11 = HelpdeskUtilsDefault;
  const formatResult = format(prop, obj8);
  cResult[4] = stateFromStores.expectedChargeTime;
  cResult[5] = stateFromStores.newCurrency;
  cResult[6] = stateFromStores.newPrice;
  cResult[7] = stateFromStores.oldCurrency;
  cResult[8] = stateFromStores.oldPrice;
  cResult[9] = tmp4.body;
  cResult[10] = tmp4.container;
  cResult[11] = tmp4.header;
  cResult[12] = tmp4.textContainer;
  cResult[13] = str;
  cResult[14] = Text2;
  cResult[15] = View;
  cResult[16] = View;
  cResult[17] = BottomSheet;
  cResult[18] = container;
  cResult[19] = "text-md/medium";
  cResult[20] = body;
  cResult[21] = formatResult;
  cResult[22] = textContainer;
  cResult[23] = tmp26;
  tmp21 = tmp26;
  tmp20 = textContainer;
  tmp19 = formatResult;
  tmp18 = body;
  str2 = "text-md/medium";
  tmp17 = container;
  tmp16 = BottomSheet;
  tmp15 = View;
  tmp14 = View;
  tmp13 = Text2;
}) : (function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  let format;
  let intl;
  let intl3;
  let items2;
  let items3;
  let obj14;
  let obj4;
  let obj8;
  let premiumSubscription;
  let priceChangeRecord;
  let prop;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  const items = [GooglePlayPriceChangeStore];
  const obj = markAsDismissed(504);
  const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  const items1 = [SubscriptionStore];
  const obj2 = markAsDismissed(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  const tmp2Result = markAsDismissed(4728);
  const tierDisplayNameByPlanId = tmp2Result.getTierDisplayNameByPlanId(str);
  const tmp2Result5 = markAsDismissed(4728);
  const intervalType = tmp2Result5.getInterval(str).intervalType;
  const tmp2Result6 = markAsDismissed(4728);
  const intervalStringAsNoun = tmp2Result6.getIntervalStringAsNoun(intervalType);
  const tmp2Result7 = markAsDismissed(6933);
  const formatPriceResult = tmp2Result7.formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result8 = markAsDismissed(6933);
  const obj3 = { children: closure_9(View, obj4) };
  obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.textContainer, children: items2 };
  const formatPriceResult1 = tmp2Result8.formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  BottomSheet = tmp2(6836).BottomSheet;
  const obj6 = { variant: "heading-xl/bold", style: tmp.header, children: intl.format(markAsDismissed(1126).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId }) };
  const Text = tmp2(5087).Text;
  intl = tmp2(1126).intl;
  items2 = [closure_8(Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.body, children: format(prop, obj8) };
  const Text2 = tmp2(5087).Text;
  const intl2 = tmp2(1126).intl;
  format = intl2.format;
  obj8 = { subscriptionName: tierDisplayNameByPlanId, changeDate: new Date(stateFromStores.expectedChargeTime), interval: intervalStringAsNoun, newPrice: formatPriceResult1, oldPrice: formatPriceResult, hc_article_url: obj14.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL) };
  prop = tmp2(1126).t["n+Hrjb"];
  new Date(stateFromStores.expectedChargeTime);
  obj14 = HelpdeskUtilsDefault;
  items2[1] = closure_8(Text2, obj7);
  items3 = [closure_9(View, obj5), ];
  const obj9 = {
    variant: "primary",
    text: intl3.string(markAsDismissed(1126).t.BddRzS),
    onPress() {
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  const Button = tmp2(5376).Button;
  intl3 = tmp2(1126).intl;
  items3[1] = closure_8(Button, obj9);
  return closure_8(BottomSheet, obj3);
});
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default tmp5;
