// Module ID: 12410
// Function ID: 12411
// Name: NewUserPermissionsOnboarding
// Dependencies: [19, 17, 21, 5092, 6258, 587, 558, 576, 5088, 1126, 5379, 2]

// Module 12410 (NewUserPermissionsOnboarding)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import NavigatorConstants from "NavigatorConstants" /* 6258 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, alertContainer: obj2, alertContainerInsideCard: obj3, alert: obj4, alertInsideCard: { width: "100%", maxWidth: 320, alignSelf: "center" }, alertContent: { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" }, alertContentInsideCard: { width: "100%" }, header: obj5, alertTitle: { paddingBottom: 8, textAlign: "center" }, alertSubtitle: obj6, buttonWrapper: { flexDirection: "row" }, primaryButtonContainer: obj7, trailing: obj8 };
obj2 = { paddingTop: 80 + NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: 0 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj5 = { alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj6 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj7 = { marginBottom: nativeDefault.space.PX_12 };
obj8 = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewUserPermissionsOnboarding(arg0) {
  let Button;
  let container;
  let header;
  let headerInsideCard;
  let intl2;
  let items;
  let items1;
  let items2;
  let loading;
  let obj10;
  let onAllow;
  let onDontAllow;
  let scrollContainer;
  let showSkip;
  let subtitle;
  let title;
  let trailing;
  const obj = react2;
  const cResult = obj.c(59);
  ({ title, subtitle, header, headerInsideCard, trailing, loading, showSkip, onAllow, onDontAllow } = arg0);
  const tmp6 = closure_6();
  let alertContainerInsideCard = tmp4;
  ({ scrollContainer, container } = tmp6);
  if (undefined !== headerInsideCard && headerInsideCard) {
    alertContainerInsideCard = tmp6.alertContainerInsideCard;
  }
  if (cResult[0] === tmp6.alertContainer) {
    let tmp7;
    if (cResult[1] === alertContainerInsideCard) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp6.alert) {
      let tmp10;
      if (cResult[4] === (undefined !== headerInsideCard && headerInsideCard && tmp6.alertInsideCard)) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp6.alertContent) {
        let tmp12;
        if (cResult[7] === (undefined !== headerInsideCard && headerInsideCard && tmp6.alertContentInsideCard)) {
          tmp12 = cResult[8];
        }
        if (cResult[9] === header) {
          if (cResult[10] === (undefined !== headerInsideCard && headerInsideCard)) {
            let tmp13;
            if (cResult[11] === tmp6.header) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === tmp6.alertTitle) {
              let tmp18;
              if (cResult[14] === title) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === tmp6.alertSubtitle) {
                let tmp21;
                if (cResult[17] === subtitle) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === tmp6.buttonWrapper) {
                  let tmp25;
                  let tmp27;
                  if (cResult[20] === ((undefined === showSkip || showSkip) && tmp6.primaryButtonContainer)) {
                    tmp25 = cResult[21];
                  }
                  const _Symbol = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(1126).intl;
                    const stringResult = intl.string(intl3.t["2nYlT2"]);
                    cResult[22] = stringResult;
                    tmp27 = stringResult;
                  } else {
                    tmp27 = cResult[22];
                  }
                  if (cResult[23] === loading) {
                    let tmp29;
                    if (cResult[24] === onAllow) {
                      tmp29 = cResult[25];
                    }
                    if (cResult[26] === tmp25) {
                      let tmp32;
                      if (cResult[27] === tmp29) {
                        tmp32 = cResult[28];
                      }
                      if (cResult[29] === onDontAllow) {
                        if (cResult[30] === (undefined === showSkip || showSkip)) {
                          let tmp36;
                          if (cResult[31] === tmp6.buttonWrapper) {
                            tmp36 = cResult[32];
                          }
                          if (cResult[33] === tmp12) {
                            if (cResult[34] === tmp13) {
                              if (cResult[35] === tmp18) {
                                if (cResult[36] === tmp21) {
                                  if (cResult[37] === tmp32) {
                                    let tmp40;
                                    if (cResult[38] === tmp36) {
                                      tmp40 = cResult[39];
                                    }
                                    if (cResult[40] === tmp40) {
                                      let tmp44;
                                      if (cResult[41] === tmp10) {
                                        tmp44 = cResult[42];
                                      }
                                      if (cResult[43] === tmp44) {
                                        let tmp48;
                                        if (cResult[44] === (!(undefined !== headerInsideCard && headerInsideCard) && header)) {
                                          tmp48 = cResult[45];
                                        }
                                        if (cResult[46] === tmp48) {
                                          let tmp52;
                                          if (cResult[47] === tmp7) {
                                            tmp52 = cResult[48];
                                          }
                                          if (cResult[49] === tmp6.container) {
                                            let tmp56;
                                            if (cResult[50] === tmp52) {
                                              tmp56 = cResult[51];
                                            }
                                            if (cResult[52] === tmp6.trailing) {
                                              let tmp60;
                                              if (cResult[53] === trailing) {
                                                tmp60 = cResult[54];
                                              }
                                              if (cResult[55] === tmp6.scrollContainer) {
                                                if (cResult[56] === tmp56) {
                                                  let tmp64;
                                                  if (cResult[57] === tmp60) {
                                                    tmp64 = cResult[58];
                                                  }
                                                  return tmp64;
                                                }
                                              }
                                              const obj2 = { contentContainerStyle: scrollContainer, children: items };
                                              items = [tmp56, tmp60];
                                              const tmp67 = hasOwnProperty(_false, obj2);
                                              cResult[55] = tmp6.scrollContainer;
                                              cResult[56] = tmp56;
                                              cResult[57] = tmp60;
                                              cResult[58] = tmp67;
                                              tmp64 = tmp67;
                                            }
                                            const obj3 = { style: tmp6.trailing, children: trailing };
                                            const tmp63 = React3(React2, obj3);
                                            cResult[52] = tmp6.trailing;
                                            cResult[53] = trailing;
                                            cResult[54] = tmp63;
                                            tmp60 = tmp63;
                                          }
                                          const obj4 = { style: container, children: tmp52 };
                                          const tmp59 = React3(React2, obj4);
                                          cResult[49] = tmp6.container;
                                          cResult[50] = tmp52;
                                          cResult[51] = tmp59;
                                          tmp56 = tmp59;
                                        }
                                        const obj5 = { style: tmp7, children: tmp48 };
                                        const tmp55 = React3(React2, obj5);
                                        cResult[46] = tmp48;
                                        cResult[47] = tmp7;
                                        cResult[48] = tmp55;
                                        tmp52 = tmp55;
                                      }
                                      const obj6 = { children: items1 };
                                      items1 = [!(undefined !== headerInsideCard && headerInsideCard) && header, tmp44];
                                      const tmp51 = hasOwnProperty(React2, obj6);
                                      cResult[43] = tmp44;
                                      cResult[44] = !(undefined !== headerInsideCard && headerInsideCard) && header;
                                      cResult[45] = tmp51;
                                      tmp48 = tmp51;
                                    }
                                    const obj7 = { style: tmp10, children: tmp40 };
                                    const tmp47 = React3(React2, obj7);
                                    cResult[40] = tmp40;
                                    cResult[41] = tmp10;
                                    cResult[42] = tmp47;
                                    tmp44 = tmp47;
                                  }
                                }
                              }
                            }
                          }
                          const obj8 = { style: tmp12, children: items2 };
                          items2 = [tmp13, tmp18, tmp21, tmp32, tmp36];
                          const tmp43 = hasOwnProperty(React2, obj8);
                          cResult[33] = tmp12;
                          cResult[34] = tmp13;
                          cResult[35] = tmp18;
                          cResult[36] = tmp21;
                          cResult[37] = tmp32;
                          cResult[38] = tmp36;
                          cResult[39] = tmp43;
                          tmp40 = tmp43;
                        }
                      }
                      let tmp37 = tmp5;
                      if (tmp37) {
                        const obj9 = { style: tmp6.buttonWrapper, children: React3(Button, obj10) };
                        obj10 = { variant: "secondary", text: intl2.string(intl3.t["5Wxrcd"]), onPress: onDontAllow, grow: true };
                        Button = tmp(5379).Button;
                        intl2 = tmp(1126).intl;
                        tmp37 = React3(React2, obj9);
                      }
                      cResult[29] = onDontAllow;
                      cResult[30] = undefined === showSkip || showSkip;
                      cResult[31] = tmp6.buttonWrapper;
                      cResult[32] = tmp37;
                      tmp36 = tmp37;
                    }
                    const obj11 = { style: tmp25, children: tmp29 };
                    const tmp35 = React3(React2, obj11);
                    cResult[26] = tmp25;
                    cResult[27] = tmp29;
                    cResult[28] = tmp35;
                    tmp32 = tmp35;
                  }
                  const obj12 = { variant: "primary", size: "md", text: tmp27, onPress: onAllow, loading, grow: true };
                  const tmp31 = React3(components_Button_Button.Button, obj12);
                  cResult[23] = loading;
                  cResult[24] = onAllow;
                  cResult[25] = tmp31;
                  tmp29 = tmp31;
                }
                const items3 = [tmp6.buttonWrapper, (undefined === showSkip || showSkip) && tmp6.primaryButtonContainer];
                cResult[19] = tmp6.buttonWrapper;
                cResult[20] = (undefined === showSkip || showSkip) && tmp6.primaryButtonContainer;
                cResult[21] = items3;
                tmp25 = items3;
              }
              const obj13 = { style: tmp6.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
              const tmp23 = React3(Text_Text.Text, obj13);
              cResult[16] = tmp6.alertSubtitle;
              cResult[17] = subtitle;
              cResult[18] = tmp23;
              tmp21 = tmp23;
            }
            const obj14 = { style: tmp6.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
            const tmp20 = React3(Text_Text.Text, obj14);
            cResult[13] = tmp6.alertTitle;
            cResult[14] = title;
            cResult[15] = tmp20;
            tmp18 = tmp20;
          }
        }
        let tmp14 = tmp4 && null != header;
        if (tmp14) {
          const obj15 = { style: tmp6.header, children: header };
          tmp14 = React3(React2, obj15);
        }
        cResult[9] = header;
        cResult[10] = undefined !== headerInsideCard && headerInsideCard;
        cResult[11] = tmp6.header;
        cResult[12] = tmp14;
        tmp13 = tmp14;
      }
      const items4 = [tmp6.alertContent, undefined !== headerInsideCard && headerInsideCard && tmp6.alertContentInsideCard];
      cResult[6] = tmp6.alertContent;
      cResult[7] = undefined !== headerInsideCard && headerInsideCard && tmp6.alertContentInsideCard;
      cResult[8] = items4;
      tmp12 = items4;
    }
    const items5 = [tmp6.alert, undefined !== headerInsideCard && headerInsideCard && tmp6.alertInsideCard];
    cResult[3] = tmp6.alert;
    cResult[4] = undefined !== headerInsideCard && headerInsideCard && tmp6.alertInsideCard;
    cResult[5] = items5;
    tmp10 = items5;
  }
  const items6 = [tmp6.alertContainer, alertContainerInsideCard];
  cResult[0] = tmp6.alertContainer;
  cResult[1] = alertContainerInsideCard;
  cResult[2] = items6;
  tmp7 = items6;
}) : (function NewUserPermissionsOnboarding(arg0) {
  let Button;
  let Button2;
  let header;
  let headerInsideCard;
  let intl;
  let intl2;
  let items4;
  let items6;
  let loading;
  let obj10;
  let obj12;
  let obj13;
  let obj3;
  let obj5;
  let onAllow;
  let onDontAllow;
  let showSkip;
  let subtitle;
  let title;
  let trailing;
  ({ header, headerInsideCard } = arg0);
  ({ title, subtitle } = arg0);
  if (headerInsideCard === undefined) {
    headerInsideCard = false;
  }
  ({ showSkip, trailing, loading } = arg0);
  if (showSkip === undefined) {
    showSkip = true;
  }
  ({ onAllow, onDontAllow } = arg0);
  const tmp = closure_6();
  const obj = { contentContainerStyle: tmp.scrollContainer, children: items6 };
  const items = [tmp.alertContainer, ];
  let alertContainerInsideCard = headerInsideCard;
  const obj2 = { style: tmp.container, children: React3(React2, obj3) };
  const tmp3 = _false;
  if (headerInsideCard) {
    alertContainerInsideCard = tmp.alertContainerInsideCard;
  }
  items[1] = alertContainerInsideCard;
  const items1 = [, ];
  const tmp6 = !headerInsideCard && header;
  items1[0] = tmp6;
  const items2 = [tmp.alert, ];
  obj3 = { style: items, children: hasOwnProperty(React2, obj13) };
  const tmp7 = headerInsideCard && tmp.alertInsideCard;
  items2[1] = tmp7;
  const items3 = [tmp.alertContent, ];
  const obj4 = { style: items2, children: hasOwnProperty(React2, obj5) };
  obj5 = { style: items3, children: items4 };
  const tmp8 = headerInsideCard && tmp.alertContentInsideCard;
  items3[1] = tmp8;
  if (headerInsideCard) {
    headerInsideCard = null != header;
  }
  if (headerInsideCard) {
    const obj6 = { style: tmp.header, children: header };
    headerInsideCard = tmp4(tmp5, obj6);
  }
  items4 = [headerInsideCard, , , , ];
  const obj7 = { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
  items4[1] = React3(Text_Text.Text, obj7);
  const obj8 = { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
  items4[2] = React3(Text_Text.Text, obj8);
  const items5 = [tmp.buttonWrapper, ];
  const tmp12 = showSkip && tmp.primaryButtonContainer;
  items5[1] = tmp12;
  const obj9 = { style: items5, children: React3(Button, obj10) };
  obj10 = { variant: "primary", size: "md", text: intl.string(intl3.t["2nYlT2"]), onPress: onAllow, loading, grow: true };
  Button = tmp10(5379).Button;
  intl = tmp10(1126).intl;
  items4[3] = React3(React2, obj9);
  if (showSkip) {
    const obj11 = { style: tmp.buttonWrapper, children: React3(Button2, obj12) };
    obj12 = { variant: "secondary", text: intl2.string(intl3.t["5Wxrcd"]), onPress: onDontAllow, grow: true };
    Button2 = tmp10(5379).Button;
    intl2 = tmp10(1126).intl;
    showSkip = tmp4(tmp5, obj11);
  }
  obj13 = { children: items1 };
  items4[4] = showSkip;
  items1[1] = React3(React2, obj4);
  items6 = [React3(React2, obj2), ];
  const obj14 = { style: tmp.trailing, children: trailing };
  items6[1] = React3(React2, obj14);
  return hasOwnProperty(tmp3, obj);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default tmp7;
