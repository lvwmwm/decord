// Module ID: 13829
// Function ID: 13830
// Name: OutboundPromotionClaimAlert
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 13830, 6851, 6878, 9156, 6156, 13831, 5088, 1126, 5379, 6885, 13832, 4806, 5398, 2]

// Module 13829 (OutboundPromotionClaimAlert)
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4806 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import PromotionUtils from "PromotionUtils" /* 9156 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loading: { marginVertical: 80 }, body: { alignItems: "center" }, title: { marginBottom: 8 }, errorTitle: { lineHeight: 24, marginBottom: 8 }, bodyText: { textAlign: "center", lineHeight: 20 }, copyInputContainer: obj2, copyInputLabel: { lineHeight: 20, marginBottom: 8 }, copyInput: obj3, copyInputCopied: obj4, copyButton: { paddingHorizontal: 8, marginLeft: 8 }, promotionArt: { width: 200, height: 100, marginBottom: 20 }, errorArt: { width: 141, height: 99, marginBottom: 20 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 16, padding: 12, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj4 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutboundPromotionClaimAlert(onCancel) {
  let Button;
  let closure_5;
  let code;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj17;
  let obj18;
  let obj20;
  let tmp10;
  let tmp6;
  let tmp9;
  let tmp = onCancel;
  let obj = onCancel(code[7]);
  const cResult = obj.c(51);
  onCancel = onCancel.onCancel;
  const onClaim = onCancel.onClaim;
  code = onCancel.code;
  const outboundPromotion = onCancel.outboundPromotion;
  const tmp4 = closure_10();
  let obj2 = react;
  const tmp5 = outboundPromotion(react.useState(null), 2);
  [tmp6, react] = tmp5;
  [tmp9, tmp10] = outboundPromotion(onClaim(code[8])(false, 2000), 2);
  let closure_6 = tmp11;
  const tmp8 = outboundPromotion(onClaim(code[8])(false, 2000), 2);
  const tmp12 = onClaim(code[9]);
  const analyticsLocations = tmp12(onClaim(code[10]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === null != code) {
      if (cResult[2] === onClaim) {
        if (cResult[3] === outboundPromotion.id) {
          if (cResult[4] === outboundPromotion.outboundTitle) {
            let tmp13;
            let tmp14;
            let tmp20Result;
            if (cResult[5] === outboundPromotion.partnerId) {
              tmp13 = cResult[6];
              tmp14 = cResult[7];
            }
            const effect = obj2.useEffect(tmp13, tmp14);
            if (cResult[8] === code) {
              if (cResult[9] === tmp9) {
                if (cResult[10] === outboundPromotion.outboundRedemptionModalBody) {
                  if (cResult[11] === tmp10) {
                    if (cResult[12] === tmp4.body) {
                      if (cResult[13] === tmp4.bodyText) {
                        if (cResult[14] === tmp4.copyButton) {
                          if (cResult[15] === tmp4.copyInput) {
                            if (cResult[16] === tmp4.copyInputContainer) {
                              if (cResult[17] === tmp4.copyInputCopied) {
                                if (cResult[18] === tmp4.copyInputLabel) {
                                  if (cResult[19] === tmp4.loading) {
                                    if (cResult[20] === tmp4.promotionArt) {
                                      let tmp16;
                                      let tmp32;
                                      let tmp37;
                                      let tmp39;
                                      let tmp42;
                                      let tmp44;
                                      if (cResult[21] === tmp4.title) {
                                        tmp16 = cResult[22];
                                      }
                                      const body = tmp4.body;
                                      if (cResult[23] !== tmp4.errorArt) {
                                        let obj3 = { source: onClaim(tmp2[18]), style: tmp4.errorArt };
                                        const tmp7Result = onClaim(code[12]);
                                        const tmp35 = closure_8(tmp7Result, obj3);
                                        cResult[23] = tmp4.errorArt;
                                        cResult[24] = tmp35;
                                        tmp32 = tmp35;
                                      } else {
                                        tmp32 = cResult[24];
                                      }
                                      const _Symbol = Symbol;
                                      const errorTitle = tmp4.errorTitle;
                                      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl4 = tmp(tmp2[15]).intl;
                                        const stringResult = intl4.string(tmp(code[15]).t.iufib1);
                                        cResult[25] = stringResult;
                                        tmp37 = stringResult;
                                      } else {
                                        tmp37 = cResult[25];
                                      }
                                      if (cResult[26] !== tmp4.errorTitle) {
                                        const obj4 = { style: errorTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp37 };
                                        const tmp41 = closure_8(tmp(code[14]).Text, obj4);
                                        cResult[26] = tmp4.errorTitle;
                                        cResult[27] = tmp41;
                                        tmp39 = tmp41;
                                      } else {
                                        tmp39 = cResult[27];
                                      }
                                      const _Symbol2 = Symbol;
                                      const bodyText = tmp4.bodyText;
                                      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl5 = tmp(tmp2[15]).intl;
                                        const stringResult1 = intl5.string(tmp(code[15]).t.eAn6z2);
                                        cResult[28] = stringResult1;
                                        tmp42 = stringResult1;
                                      } else {
                                        tmp42 = cResult[28];
                                      }
                                      if (cResult[29] !== tmp4.bodyText) {
                                        const obj5 = { style: bodyText, variant: "text-md/medium", children: tmp42 };
                                        const tmp46 = closure_8(tmp(code[14]).Text, obj5);
                                        cResult[29] = tmp4.bodyText;
                                        cResult[30] = tmp46;
                                        tmp44 = tmp46;
                                      } else {
                                        tmp44 = cResult[30];
                                      }
                                      if (cResult[31] === tmp4.body) {
                                        if (cResult[32] === tmp44) {
                                          if (cResult[33] === tmp32) {
                                            let tmp47;
                                            let tmp51;
                                            if (cResult[34] === tmp39) {
                                              tmp47 = cResult[35];
                                            }
                                            if (cResult[36] !== tmp6) {
                                              let stringResult2;
                                              if (null != tmp6) {
                                                const intl7 = tmp(tmp2[15]).intl;
                                                stringResult2 = intl7.string(tmp(tmp2[15]).t.cpT0Cq);
                                              } else {
                                                const intl6 = tmp(tmp2[15]).intl;
                                                stringResult2 = intl6.string(tmp(tmp2[15]).t["+zx47d"]);
                                              }
                                              cResult[36] = tmp6;
                                              cResult[37] = stringResult2;
                                              tmp51 = stringResult2;
                                            } else {
                                              tmp51 = cResult[37];
                                            }
                                            if (cResult[38] === code) {
                                              if (cResult[39] === onCancel) {
                                                let tmp53;
                                                let tmp54;
                                                if (cResult[40] === outboundPromotion) {
                                                  tmp53 = cResult[41];
                                                }
                                                if (cResult[42] !== tmp6) {
                                                  let stringResult3;
                                                  if (null == tmp6) {
                                                    const intl8 = tmp(tmp2[15]).intl;
                                                    stringResult3 = intl8.string(tmp(tmp2[15]).t.TulDPl);
                                                  }
                                                  cResult[42] = tmp6;
                                                  cResult[43] = stringResult3;
                                                  tmp54 = stringResult3;
                                                } else {
                                                  tmp54 = cResult[43];
                                                }
                                                if (null != tmp6) {
                                                  tmp16 = tmp47;
                                                }
                                                if (cResult[44] === onCancel) {
                                                  if (cResult[45] === tmp51) {
                                                    if (cResult[46] === tmp53) {
                                                      if (cResult[47] === tmp54) {
                                                        if (cResult[48] === (null == code && null == tmp6)) {
                                                          let tmp57;
                                                          if (cResult[49] === tmp16) {
                                                            tmp57 = cResult[50];
                                                          }
                                                          return tmp57;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj6 = { onCancel, confirmText: tmp51, onConfirm: tmp53, cancelText: tmp54, noDefaultButtons: null == code && null == tmp6, children: tmp16 };
                                                const tmp59 = closure_8(onClaim(code[20]), obj6);
                                                cResult[44] = onCancel;
                                                cResult[45] = tmp51;
                                                cResult[46] = tmp53;
                                                cResult[47] = tmp54;
                                                cResult[48] = null == code && null == tmp6;
                                                cResult[49] = tmp16;
                                                cResult[50] = tmp59;
                                                tmp57 = tmp59;
                                              }
                                            }
                                            const fn2 = function q() {
                                              if (null != code) {
                                                const obj = PromotionUtils;
                                                const outboundPromotionRedemptionUrl = obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
                                                const obj2 = LinkingDefault;
                                                obj2.openURL(outboundPromotionRedemptionUrl);
                                              }
                                              onCancel();
                                            };
                                            cResult[38] = code;
                                            cResult[39] = onCancel;
                                            cResult[40] = outboundPromotion;
                                            cResult[41] = fn2;
                                            tmp53 = fn2;
                                          }
                                        }
                                      }
                                      const obj7 = { style: body, children: items };
                                      items = [tmp32, tmp39, tmp44];
                                      const tmp50 = closure_9(closure_6, obj7);
                                      cResult[31] = tmp4.body;
                                      cResult[32] = tmp44;
                                      cResult[33] = tmp32;
                                      cResult[34] = tmp39;
                                      cResult[35] = tmp50;
                                      tmp47 = tmp50;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (null != code) {
              let tmp24;
              let stringResult4;
              const obj8 = { style: tmp4.body, children: items1 };
              const obj9 = { source: onClaim(code[13]), style: tmp4.promotionArt };
              const tmp7Result2 = onClaim(code[12]);
              items1 = [closure_8(tmp7Result2, obj9), , , ];
              const obj10 = { style: tmp4.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(tmp(code[15]).t["23BfZh"]) };
              const Heading = tmp(tmp2[14]).Heading;
              intl = tmp(tmp2[15]).intl;
              items1[1] = closure_8(Heading, obj10);
              const obj11 = { style: tmp4.bodyText, variant: "text-md/medium", children: outboundPromotion.outboundRedemptionModalBody };
              items1[2] = closure_8(tmp(code[14]).Text, obj11);
              const obj12 = { style: tmp4.copyInputContainer, children: items2 };
              const obj13 = { style: tmp4.copyInputLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(tmp(code[15]).t.s9LFQh) };
              const Text = tmp(tmp2[14]).Text;
              intl2 = tmp(tmp2[15]).intl;
              items2 = [closure_8(Text, obj13), , ];
              const copyInput = tmp4.copyInput;
              if (tmp9) {
                const obj14 = {};
                const merged = Object.assign(copyInput);
                const merged1 = Object.assign(tmp4.copyInputCopied);
                tmp24 = obj14;
              } else {
                tmp24 = copyInput;
              }
              const obj15 = { style: tmp24, children: items3 };
              const obj16 = { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false, children: closure_8(closure_6, obj17) };
              obj17 = {
                onStartShouldSetResponderCapture() {
                              return true;
                            },
                children: closure_8(tmp(code[14]).Text, obj18)
              };
              obj18 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
              items3 = [closure_8(analyticsLocations, obj16), ];
              const obj19 = { style: tmp4.copyButton, children: closure_8(Button, obj20) };
              Button = tmp(tmp2[16]).Button;
              const intl3 = tmp(tmp2[15]).intl;
              const string = intl3.string;
              const t = tmp(tmp2[15]).t;
              if (tmp9) {
                stringResult4 = string(t.t5VZ88);
              } else {
                stringResult4 = string(t.OpuAlK);
              }
              obj20 = {
                text: stringResult4,
                size: "sm",
                onPress() {
                              const obj = ClipboardUtils;
                              obj.copy(code);
                              tmp10(true);
                            }
              };
              items3[1] = closure_8(closure_6, obj19);
              items2[1] = closure_9(closure_6, obj15);
              items2[2] = closure_8(tmp(code[14]).Text, { variant: "text-sm/medium", color: "text-muted", children: "This code is included in your confirmation email" });
              items1[3] = closure_9(closure_6, obj12);
              tmp20Result = tmp20(tmp21, obj8);
            } else {
              const obj21 = { style: tmp4.loading };
              tmp20Result = closure_8(tmp10, obj21);
            }
            cResult[8] = code;
            cResult[9] = tmp9;
            cResult[10] = outboundPromotion.outboundRedemptionModalBody;
            cResult[11] = tmp10;
            cResult[12] = tmp4.body;
            cResult[13] = tmp4.bodyText;
            cResult[14] = tmp4.copyButton;
            cResult[15] = tmp4.copyInput;
            cResult[16] = tmp4.copyInputContainer;
            cResult[17] = tmp4.copyInputCopied;
            cResult[18] = tmp4.copyInputLabel;
            cResult[19] = tmp4.loading;
            cResult[20] = tmp4.promotionArt;
            cResult[21] = tmp4.title;
            cResult[22] = tmp20Result;
            tmp16 = tmp20Result;
          }
        }
      }
    }
  }
  const fn = function s() {
    const tmp = closure_6;
    if (!tmp) {
      const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations };
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      const obj = PromotionUtils;
      const result = obj.claimOutboundPromotion(obj3);
      const nextPromise = result.then((result) => onClaim(result));
      nextPromise.catch((error) => closure_1_4(error));
    }
  };
  const items4 = [null != code, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items4[4] = onClaim;
  items4[5] = analyticsLocations;
  cResult[0] = analyticsLocations;
  cResult[1] = null != code;
  cResult[2] = onClaim;
  cResult[3] = outboundPromotion.id;
  cResult[4] = outboundPromotion.outboundTitle;
  cResult[5] = outboundPromotion.partnerId;
  cResult[6] = fn;
  cResult[7] = items4;
  tmp14 = items4;
  tmp13 = fn;
}) : (function OutboundPromotionClaimAlert(onCancel) {
  let Button;
  let _undefined;
  let c4;
  let c5;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj12;
  let obj14;
  let stringResult1;
  let stringResult2;
  let tmp11;
  let tmp14Result;
  let tmp3;
  let tmp7;
  onCancel = onCancel.onCancel;
  const onClaim = onCancel.onClaim;
  const code = onCancel.code;
  const outboundPromotion = onCancel.outboundPromotion;
  react = undefined;
  c5 = undefined;
  let tmp = closure_10();
  [tmp3, c4] = outboundPromotion(react.useState(null), 2);
  const tmp2 = outboundPromotion(react.useState(null), 2);
  [tmp7, c5] = outboundPromotion(onClaim(code[8])(false, 2000), 2);
  let closure_6 = tmp8;
  const tmp6 = outboundPromotion(onClaim(code[8])(false, 2000), 2);
  const tmp9 = onClaim(code[9]);
  const analyticsLocations = tmp9(onClaim(code[10]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const items = [tmp8, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = react.useEffect(() => {
    const tmp = closure_6;
    if (!tmp) {
      const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations };
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      const obj = PromotionUtils;
      const result = obj.claimOutboundPromotion(obj3);
      const nextPromise = result.then((result) => onClaim(result));
      nextPromise.catch((error) => closure_1_4(error));
    }
  }, items);
  if (null != code) {
    let tmp19;
    let stringResult;
    let obj2 = { style: tmp.body, children: items1 };
    let obj3 = { source: tmp4(tmp5[13]), style: tmp.promotionArt };
    const tmp4Result = onClaim(code[12]);
    items1 = [closure_8(tmp4Result, obj3), , , ];
    const obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(onCancel(code[15]).t["23BfZh"]) };
    const Heading = onCancel(tmp5[14]).Heading;
    intl = onCancel(tmp5[15]).intl;
    items1[1] = closure_8(Heading, obj4);
    const obj5 = { style: tmp.bodyText, variant: "text-md/medium", children: outboundPromotion.outboundRedemptionModalBody };
    items1[2] = closure_8(onCancel(code[14]).Text, obj5);
    const obj6 = { style: tmp.copyInputContainer, children: items2 };
    const obj7 = { style: tmp.copyInputLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(onCancel(code[15]).t.s9LFQh) };
    const Text = onCancel(tmp5[14]).Text;
    intl2 = onCancel(tmp5[15]).intl;
    items2 = [closure_8(Text, obj7), , ];
    const copyInput = tmp.copyInput;
    if (tmp7) {
      const obj8 = {};
      const merged = Object.assign(copyInput);
      const merged1 = Object.assign(tmp.copyInputCopied);
      tmp19 = obj8;
    } else {
      tmp19 = copyInput;
    }
    const obj9 = { style: tmp19, children: items3 };
    const obj10 = { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false, children: closure_8(closure_6, obj11) };
    obj11 = {
      onStartShouldSetResponderCapture() {
          return true;
        },
      children: closure_8(onCancel(code[14]).Text, obj12)
    };
    obj12 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
    items3 = [closure_8(analyticsLocations, obj10), ];
    const obj13 = { style: tmp.copyButton, children: closure_8(Button, obj14) };
    Button = tmp18(tmp5[16]).Button;
    const intl3 = tmp18(tmp5[15]).intl;
    const string = intl3.string;
    const t = tmp18(tmp5[15]).t;
    if (tmp7) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj14 = {
      text: stringResult,
      size: "sm",
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(code);
          _undefined(true);
        }
    };
    items3[1] = closure_8(closure_6, obj13);
    items2[1] = closure_9(closure_6, obj9);
    items2[2] = closure_8(onCancel(code[14]).Text, { variant: "text-sm/medium", color: "text-muted", children: "This code is included in your confirmation email" });
    items1[3] = closure_9(closure_6, obj6);
    tmp14Result = tmp14(tmp15, obj2);
    tmp11 = tmp16;
  } else {
    tmp11 = closure_8;
    let obj = { style: tmp.loading };
    tmp14Result = closure_8(c5, obj);
  }
  const obj15 = { style: tmp.body, children: items4 };
  const obj16 = { source: onClaim(code[18]), style: tmp.errorArt };
  const tmp4Result3 = onClaim(code[12]);
  items4 = [tmp11(tmp4Result3, obj16), , ];
  const obj17 = { style: tmp.errorTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl4.string(onCancel(code[15]).t.iufib1) };
  const Text2 = onCancel(tmp5[14]).Text;
  intl4 = onCancel(tmp5[15]).intl;
  items4[1] = tmp11(Text2, obj17);
  const obj18 = { style: tmp.bodyText, variant: "text-md/medium", children: intl5.string(onCancel(code[15]).t.eAn6z2) };
  const Text3 = onCancel(tmp5[14]).Text;
  intl5 = onCancel(tmp5[15]).intl;
  items4[2] = tmp11(Text3, obj18);
  const obj19 = {
    onCancel,
    confirmText: stringResult1,
    onConfirm() {
      if (null != code) {
        const obj = PromotionUtils;
        const outboundPromotionRedemptionUrl = obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
        const obj2 = LinkingDefault;
        obj2.openURL(outboundPromotionRedemptionUrl);
      }
      onCancel();
    },
    cancelText: stringResult2,
    noDefaultButtons: null == code && null == tmp3,
    children: tmp14Result
  };
  const tmp29 = closure_9(closure_6, obj15);
  const tmp4Result4 = onClaim(code[20]);
  if (null != tmp3) {
    const intl7 = tmp28(tmp5[15]).intl;
    stringResult1 = intl7.string(tmp28(tmp5[15]).t.cpT0Cq);
  } else {
    const intl6 = tmp28(tmp5[15]).intl;
    stringResult1 = intl6.string(tmp28(tmp5[15]).t["+zx47d"]);
  }
  stringResult2 = undefined;
  if (null == tmp3) {
    const intl8 = tmp28(tmp5[15]).intl;
    stringResult2 = intl8.string(tmp28(tmp5[15]).t.TulDPl);
  }
  if (null != tmp3) {
    tmp14Result = tmp29;
  }
  return tmp11(tmp4Result4, obj19);
});
let result = size.fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default tmp5;
