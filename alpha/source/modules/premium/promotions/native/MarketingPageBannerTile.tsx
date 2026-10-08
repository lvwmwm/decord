// Module ID: 13550
// Function ID: 13551
// Name: MarketingPageBannerTile
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 6841, 13551, 1272, 10080, 8941, 13554, 6164, 5086, 4763, 9733, 2]

// Module 13550 (MarketingPageBannerTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4763 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9733 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%" }, card: obj2, image: size, bodyText: obj3, ctaButton: obj4 };
obj2 = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
obj3 = { marginTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarketingPageBannerTile(arg0) {
  let analyticsPage;
  let bannerFields;
  let cardStyle;
  let componentId;
  let items;
  let items1;
  let obj10;
  let obj12;
  let obj7;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let promotionId;
  let style;
  let url;
  let obj = require("react");
  const cResult = obj.c(43);
  ({ style, cardStyle, componentId, promotionId, bannerFields, analyticsPage, onPaymentSuccess, onPaymentDismiss } = arg0);
  const tmp4 = closure_6();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const button2 = bannerFields.button;
  let value;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === analyticsPage) {
      if (cResult[2] === onPaymentDismiss) {
        if (cResult[3] === onPaymentSuccess) {
          if (cResult[4] === buttonAction) {
            let tmp8;
            if (cResult[5] === value) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === componentId) {
              let tmp10;
              if (cResult[8] === promotionId) {
                tmp10 = cResult[9];
              }
              useTrackImpressionDefault(tmp10);
              const tmpResult = require("PromotionStringUtils");
              const formatStringWithCommonPremiumParams = tmpResult.useFormatStringWithCommonPremiumParams(bannerFields.body);
              if (cResult[10] === bannerFields.helpArticle) {
                let tmp13;
                if (cResult[11] === bannerFields.helpArticleId) {
                  tmp13 = cResult[12];
                }
                _require = tmp13;
                if (cResult[13] === style) {
                  let tmp15;
                  if (cResult[14] === tmp4.container) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === cardStyle) {
                    let tmp16;
                    if (cResult[17] === tmp4.card) {
                      tmp16 = cResult[18];
                    }
                    if (cResult[19] === bannerFields.assetUrl) {
                      let tmp17;
                      let tmp20;
                      let tmp23;
                      if (cResult[20] === tmp4.image) {
                        tmp17 = cResult[21];
                      }
                      if (cResult[22] !== bannerFields.header) {
                        const obj2 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
                        const tmp22 = closure_4(require("Text/Text").Text, obj2);
                        cResult[22] = bannerFields.header;
                        cResult[23] = tmp22;
                        tmp20 = tmp22;
                      } else {
                        tmp20 = cResult[23];
                      }
                      if (cResult[24] !== tmp13) {
                        let tmp24 = null != tmp13;
                        if (tmp24) {
                          const obj3 = {
                            color: "text-link",
                            variant: "text-sm/medium",
                            accessibilityRole: "link",
                            onPress() {
                                                      const obj = LinkingDefault;
                                                      return obj.openURL(url.url);
                                                    },
                            children: tmp13.linkText
                          };
                          tmp24 = closure_4(tmp(5086).Text, obj3);
                        }
                        cResult[24] = tmp13;
                        cResult[25] = tmp24;
                        tmp23 = tmp24;
                      } else {
                        tmp23 = cResult[25];
                      }
                      if (cResult[26] === formatStringWithCommonPremiumParams) {
                        if (cResult[27] === tmp4.bodyText) {
                          let tmp26;
                          if (cResult[28] === tmp23) {
                            tmp26 = cResult[29];
                          }
                          if (cResult[30] === bannerFields.button) {
                            if (cResult[31] === tmp8) {
                              let tmp29;
                              if (cResult[32] === tmp4.ctaButton) {
                                tmp29 = cResult[33];
                              }
                              if (cResult[34] === tmp26) {
                                if (cResult[35] === tmp29) {
                                  if (cResult[36] === tmp16) {
                                    if (cResult[37] === tmp17) {
                                      let tmp33;
                                      if (cResult[38] === tmp20) {
                                        tmp33 = cResult[39];
                                      }
                                      if (cResult[40] === tmp33) {
                                        let tmp37;
                                        if (cResult[41] === tmp15) {
                                          tmp37 = cResult[42];
                                        }
                                        return tmp37;
                                      }
                                      const obj4 = { style: tmp15, children: tmp33 };
                                      const tmp40 = closure_4(View, obj4);
                                      cResult[40] = tmp33;
                                      cResult[41] = tmp15;
                                      cResult[42] = tmp40;
                                      tmp37 = tmp40;
                                    }
                                  }
                                }
                              }
                              const obj5 = { style: tmp16, children: items };
                              items = [tmp17, tmp20, tmp26, tmp29];
                              const tmp36 = closure_5(View, obj5);
                              cResult[34] = tmp26;
                              cResult[35] = tmp29;
                              cResult[36] = tmp16;
                              cResult[37] = tmp17;
                              cResult[38] = tmp20;
                              cResult[39] = tmp36;
                              tmp33 = tmp36;
                            }
                          }
                          let tmp30 = null != bannerFields.button;
                          if (tmp30) {
                            const obj6 = { style: tmp4.ctaButton, children: closure_4(NitroUpsellButtonDefault, obj7) };
                            obj7 = { text: bannerFields.button.copy, onPress: tmp8 };
                            tmp30 = closure_4(View, obj6);
                          }
                          cResult[30] = bannerFields.button;
                          cResult[31] = tmp8;
                          cResult[32] = tmp4.ctaButton;
                          cResult[33] = tmp30;
                          tmp29 = tmp30;
                        }
                      }
                      const obj8 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp4.bodyText, children: items1 };
                      items1 = [formatStringWithCommonPremiumParams, " ", tmp23];
                      const tmp28 = closure_5(require("Text/Text").Text, obj8);
                      cResult[26] = formatStringWithCommonPremiumParams;
                      cResult[27] = tmp4.bodyText;
                      cResult[28] = tmp23;
                      cResult[29] = tmp28;
                      tmp26 = tmp28;
                    }
                    let tmp18 = "" !== bannerFields.assetUrl;
                    if (tmp18) {
                      const obj9 = { source: obj10, style: tmp4.image, resizeMode: "contain" };
                      obj10 = { uri: bannerFields.assetUrl };
                      tmp18 = closure_4(tmp5(6164), obj9);
                    }
                    cResult[19] = bannerFields.assetUrl;
                    cResult[20] = tmp4.image;
                    cResult[21] = tmp18;
                    tmp17 = tmp18;
                  }
                  const items2 = [tmp4.card, cardStyle];
                  cResult[16] = cardStyle;
                  cResult[17] = tmp4.card;
                  cResult[18] = items2;
                  tmp16 = items2;
                }
                const items3 = [tmp4.container, style];
                cResult[13] = style;
                cResult[14] = tmp4.container;
                cResult[15] = items3;
                tmp15 = items3;
              }
              const tmpResult3 = require("PromotionStringUtils");
              const helpArticleLinkProps = tmpResult3.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
              cResult[10] = bannerFields.helpArticle;
              cResult[11] = bannerFields.helpArticleId;
              cResult[12] = helpArticleLinkProps;
              tmp13 = helpArticleLinkProps;
            }
            const obj11 = { type: require("discord_common/AnalyticsUtils").ImpressionTypes.VIEW, name: require("discord_common/AnalyticsUtils").ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: obj12 };
            cResult[7] = componentId;
            cResult[8] = promotionId;
            cResult[9] = obj11;
            tmp10 = obj11;
            obj12 = { component_type: require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId };
          }
        }
      }
    }
  }
  const tmpResult4 = require("PremiumMarketingButtonActions");
  const buttonActionHandler = tmpResult4.getButtonActionHandler({ buttonAction, applicationId: value, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss });
  cResult[0] = analyticsLocations;
  cResult[1] = analyticsPage;
  cResult[2] = onPaymentDismiss;
  cResult[3] = onPaymentSuccess;
  cResult[4] = buttonAction;
  cResult[5] = value;
  cResult[6] = buttonActionHandler;
  tmp8 = buttonActionHandler;
}) : (function MarketingPageBannerTile(bannerFields) {
  let analyticsPage;
  let cardStyle;
  let componentId;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj5;
  let obj7;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let promotionId;
  let style;
  let value;
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_6();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  const getButtonActionHandler = helpArticleLinkProps(13551).getButtonActionHandler;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  let obj = { buttonAction, applicationId: value, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  const obj2 = { type: helpArticleLinkProps(1272).ImpressionTypes.VIEW, name: helpArticleLinkProps(1272).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: helpArticleLinkProps(10080).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId } };
  const buttonActionHandler = getButtonActionHandler(obj);
  const tmp2Result = useTrackImpressionDefault;
  ({ component_type: helpArticleLinkProps(10080).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId });
  tmp2Result(obj2);
  const tmp4Result = helpArticleLinkProps(13554);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result2 = helpArticleLinkProps(13554);
  helpArticleLinkProps = tmp4Result2.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj4 = { style: items, children: closure_5(View, obj5) };
  items = [tmp.container, style];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.card, cardStyle];
  let tmp13Result = "" !== bannerFields.assetUrl;
  if (tmp13Result) {
    const obj6 = { source: obj7, style: tmp.image, resizeMode: "contain" };
    obj7 = { uri: bannerFields.assetUrl };
    tmp13Result = tmp13(tmp2(6164), obj6);
  }
  items2 = [tmp13Result, , , ];
  const obj8 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
  items2[1] = closure_4(helpArticleLinkProps(5086).Text, obj8);
  const obj9 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: items3 };
  items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp13Result3 = null != helpArticleLinkProps;
  const Text = tmp4(5086).Text;
  if (tmp13Result3) {
    const obj10 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          const obj = LinkingDefault;
          return obj.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp13Result3 = tmp13(tmp4(5086).Text, obj10);
  }
  items3[2] = tmp13Result3;
  items2[2] = closure_5(Text, obj9);
  let tmp13Result4 = null != bannerFields.button;
  if (tmp13Result4) {
    const obj11 = { style: tmp.ctaButton, children: closure_4(NitroUpsellButtonDefault, obj12) };
    obj12 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    tmp13Result4 = tmp13(tmp14, obj11);
  }
  items2[3] = tmp13Result4;
  return closure_4(View, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default tmp5;
