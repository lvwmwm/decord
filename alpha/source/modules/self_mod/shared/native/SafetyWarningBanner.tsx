// Module ID: 10398
// Function ID: 10399
// Name: SafetyWarningBanner
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 5729, 5734, 10394, 1126, 1200, 10399, 6156, 10400, 5088, 5379, 2]

// Module 10398 (SafetyWarningBanner)
import nativeDefault from "native" /* 587 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flexDirection: "row", alignItems: "center" }, safetyShieldIconContainer: { width: 42, height: 50 }, safetyShieldIcon: { flex: 1, width: "auto", height: "auto" }, textContainer: obj3, text: obj4, closeButton: rect, closeButtonIcon: obj5, buttonsContainer: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_16, zIndex: 1 };
obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj6 = { flexDirection: "row", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyWarningBanner(channelId) {
  let closeButton;
  let container;
  let description;
  let header;
  let items1;
  let items2;
  let items3;
  let onDismiss;
  let senderId;
  let tmp5;
  let tmp6;
  let tmp = channelId;
  let obj = channelId(senderId[6]);
  const cResult = obj.c(45);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const warningType = channelId.warningType;
  ({ header, description, onDismiss } = channelId);
  const buttons = channelId.buttons;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const obj = warningId(senderId[7]);
      const obj2 = { name: channelId(senderId[8]).MetricEvents.SAFETY_WARNING_VIEW };
      obj.increment(obj2);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = warningType.useEffect(tmp5, tmp6);
  if (cResult[2] === channelId) {
    if (cResult[3] === onDismiss) {
      if (cResult[4] === senderId) {
        if (cResult[5] === warningId) {
          let tmp8;
          let tmp9;
          let tmp11;
          if (cResult[6] === warningType) {
            tmp8 = cResult[7];
          }
          const _Symbol = Symbol;
          ({ container, closeButton } = tmp4);
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[10]).intl;
            const stringResult = intl.string(tmp(senderId[10]).t["1UatJ0"]);
            cResult[8] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[8];
          }
          if (cResult[9] !== tmp4.closeButtonIcon) {
            let obj2 = { style: tmp4.closeButtonIcon, source: warningId(senderId[12]), size: tmp(senderId[11]).IconSizes.MEDIUM };
            const Icon = tmp(tmp2[11]).Icon;
            const tmp14 = closure_6(Icon, obj2);
            cResult[9] = tmp4.closeButtonIcon;
            cResult[10] = tmp14;
            tmp11 = tmp14;
          } else {
            tmp11 = cResult[10];
          }
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp4.closeButton) {
              let tmp15;
              let tmp19;
              if (cResult[13] === tmp11) {
                tmp15 = cResult[14];
              }
              if (cResult[15] !== tmp4.safetyShieldIcon) {
                const obj3 = { style: tmp4.safetyShieldIcon, source: warningId(senderId[14]), resizeMode: "contain" };
                const tmp22 = warningId(senderId[13]);
                const tmp23 = closure_6(tmp22, obj3);
                cResult[15] = tmp4.safetyShieldIcon;
                cResult[16] = tmp23;
                tmp19 = tmp23;
              } else {
                tmp19 = cResult[16];
              }
              if (cResult[17] === tmp4.safetyShieldIconContainer) {
                let tmp24;
                if (cResult[18] === tmp19) {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === header) {
                  let tmp28;
                  if (cResult[21] === tmp4.text) {
                    tmp28 = cResult[22];
                  }
                  if (cResult[23] === description) {
                    let tmp31;
                    if (cResult[24] === tmp4.text) {
                      tmp31 = cResult[25];
                    }
                    if (cResult[26] === tmp4.textContainer) {
                      if (cResult[27] === tmp28) {
                        let tmp34;
                        if (cResult[28] === tmp31) {
                          tmp34 = cResult[29];
                        }
                        if (cResult[30] === tmp4.contentContainer) {
                          if (cResult[31] === tmp24) {
                            let tmp38;
                            if (cResult[32] === tmp34) {
                              tmp38 = cResult[33];
                            }
                            const buttonsContainer = tmp4.buttonsContainer;
                            if (cResult[34] !== buttons) {
                              let tmp43;
                              const _Symbol2 = Symbol;
                              if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                class F {
                                  constructor(text, arg1) {
                                    let str = text.variant;
                                    const Button = channelId(senderId[16]).Button;
                                    const tmp = closure_1_6;
                                    if (str == null) {
                                      str = "primary";
                                    }
                                    const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
                                    return tmp(Button, obj, arg1);
                                  }
                                }
                                cResult[36] = F;
                                tmp43 = F;
                              } else {
                                class F {
                                  constructor(text, arg1) {
                                    let str = text.variant;
                                    const Button = channelId(senderId[16]).Button;
                                    const tmp = closure_1_6;
                                    if (str == null) {
                                      str = "primary";
                                    }
                                    const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
                                    return tmp(Button, obj, arg1);
                                  }
                                }
                              }
                              const mapped = buttons.map(tmp43);
                              cResult[34] = buttons;
                              cResult[35] = mapped;
                            } else {
                              class F {
                                constructor(text, arg1) {
                                  let str = text.variant;
                                  const Button = channelId(senderId[16]).Button;
                                  const tmp = closure_1_6;
                                  if (str == null) {
                                    str = "primary";
                                  }
                                  const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
                                  return tmp(Button, obj, arg1);
                                }
                              }
                            }
                            if (cResult[37] === tmp4.buttonsContainer) {
                              class F {
                                constructor(text, arg1) {
                                  let str = text.variant;
                                  const Button = channelId(senderId[16]).Button;
                                  const tmp = closure_1_6;
                                  if (str == null) {
                                    str = "primary";
                                  }
                                  const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
                                  return tmp(Button, obj, arg1);
                                }
                              }
                              if (cResult[40] === tmp4.container) {
                                class F {
                                  constructor(text, arg1) {
                                    let str = text.variant;
                                    const Button = channelId(senderId[16]).Button;
                                    const tmp = closure_1_6;
                                    if (str == null) {
                                      str = "primary";
                                    }
                                    const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
                                    return tmp(Button, obj, arg1);
                                  }
                                }
                              }
                              const obj4 = { style: container, children: items1 };
                              items1 = [tmp15, tmp38, tmp45];
                              cResult[40] = tmp4.container;
                              cResult[41] = tmp38;
                              cResult[42] = tmp45;
                              cResult[43] = tmp15;
                              cResult[44] = closure_7(closure_5, obj4);
                              const tmp52 = closure_7(closure_5, obj4);
                            }
                            const obj5 = { style: buttonsContainer, children: tmp42 };
                            cResult[37] = tmp4.buttonsContainer;
                            cResult[38] = tmp42;
                            cResult[39] = closure_6(closure_5, obj5);
                            const tmp48 = closure_6(closure_5, obj5);
                          }
                        }
                        const obj6 = { style: tmp4.contentContainer, children: items2 };
                        items2 = [tmp24, tmp34];
                        const tmp41 = closure_7(closure_5, obj6);
                        cResult[30] = tmp4.contentContainer;
                        cResult[31] = tmp24;
                        cResult[32] = tmp34;
                        cResult[33] = tmp41;
                        tmp38 = tmp41;
                      }
                    }
                    const obj7 = { style: tmp4.textContainer, children: items3 };
                    items3 = [tmp28, tmp31];
                    const tmp37 = closure_7(closure_5, obj7);
                    cResult[26] = tmp4.textContainer;
                    cResult[27] = tmp28;
                    cResult[28] = tmp31;
                    cResult[29] = tmp37;
                    tmp34 = tmp37;
                  }
                  const obj8 = { style: tmp4.text, variant: "heading-sm/normal", children: description };
                  const tmp33 = closure_6(tmp(senderId[15]).Text, obj8);
                  cResult[23] = description;
                  cResult[24] = tmp4.text;
                  cResult[25] = tmp33;
                  tmp31 = tmp33;
                }
                const obj9 = { style: tmp4.text, variant: "heading-md/semibold", children: header };
                const tmp30 = closure_6(tmp(senderId[15]).Text, obj9);
                cResult[20] = header;
                cResult[21] = tmp4.text;
                cResult[22] = tmp30;
                tmp28 = tmp30;
              }
              const obj10 = { style: tmp4.safetyShieldIconContainer, children: tmp19 };
              const tmp27 = closure_6(closure_5, obj10);
              cResult[17] = tmp4.safetyShieldIconContainer;
              cResult[18] = tmp19;
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
          }
          const obj11 = { style: closeButton, onPress: tmp8, accessibilityLabel: tmp9, children: tmp11 };
          const tmp18 = closure_6(onDismiss, obj11);
          cResult[11] = tmp8;
          cResult[12] = tmp4.closeButton;
          cResult[13] = tmp11;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
  }
  const fn2 = function u() {
    if (onDismiss != null) {
      tmp();
    }
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS };
    obj.trackCtaEvent(obj2);
  };
  cResult[2] = channelId;
  cResult[3] = onDismiss;
  cResult[4] = senderId;
  cResult[5] = warningId;
  cResult[6] = warningType;
  cResult[7] = fn2;
  tmp8 = fn2;
}) : (function SafetyWarningBanner(channelId) {
  let Icon;
  let description;
  let header;
  let intl;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj6;
  let tmp3;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const warningType = channelId.warningType;
  const onDismiss = channelId.onDismiss;
  const buttons = channelId.buttons;
  ({ header, description } = channelId);
  let tmp = closure_8();
  const effect = warningType.useEffect(() => {
    const obj = warningId(senderId[7]);
    const obj2 = { name: channelId(senderId[8]).MetricEvents.SAFETY_WARNING_VIEW };
    obj.increment(obj2);
  }, []);
  const items = [onDismiss, channelId, warningId, senderId, warningType];
  let obj = { style: tmp.container, children: items1 };
  let obj2 = {
    style: tmp.closeButton,
    onPress: warningType.useCallback(() => {
      if (onDismiss != null) {
        tmp();
      }
      const obj = SafetyWarningUtils;
      const obj2 = { channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS };
      obj.trackCtaEvent(obj2);
    }, items),
    accessibilityLabel: intl.string(channelId(senderId[10]).t["1UatJ0"]),
    children: closure_6(Icon, obj3)
  };
  intl = channelId(senderId[10]).intl;
  obj3 = { style: tmp.closeButtonIcon, source: warningId(senderId[12]), size: channelId(senderId[11]).IconSizes.MEDIUM };
  Icon = channelId(senderId[11]).Icon;
  items1 = [closure_6(onDismiss, obj2), , ];
  const obj4 = { style: tmp.contentContainer, children: items2 };
  const obj5 = { style: tmp.safetyShieldIconContainer, children: closure_6(tmp3, obj6) };
  obj6 = { style: tmp.safetyShieldIcon, source: warningId(senderId[14]), resizeMode: "contain" };
  tmp3 = warningId(senderId[13]);
  items2 = [closure_6(closure_5, obj5), ];
  const obj7 = { style: tmp.textContainer, children: items3 };
  items3 = [, ];
  const obj8 = { style: tmp.text, variant: "heading-md/semibold", children: header };
  items3[0] = closure_6(channelId(senderId[15]).Text, obj8);
  const obj9 = { style: tmp.text, variant: "heading-sm/normal", children: description };
  items3[1] = closure_6(channelId(senderId[15]).Text, obj9);
  items2[1] = closure_7(closure_5, obj7);
  items1[1] = closure_7(closure_5, obj4);
  const obj10 = {
    style: tmp.buttonsContainer,
    children: buttons.map((text, index) => {
      let str = text.variant;
      const Button = channelId(senderId[16]).Button;
      const tmp = closure_1_6;
      if (str == null) {
        str = "primary";
      }
      const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
      return tmp(Button, obj, index);
    })
  };
  items1[2] = closure_6(closure_5, obj10);
  return closure_7(closure_5, obj);
});
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default tmp6;
export const SafetyWarningBanner = tmp6;
