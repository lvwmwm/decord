// Module ID: 7570
// Function ID: 7571
// Name: NewInlineNotice
// Dependencies: [19, 17, 21, 6289, 587, 2142, 7571, 5046, 6867, 5089, 5092, 558, 576, 5386, 1126, 4822, 1383, 4828, 5088, 5379, 7573, 6207, 2]

// Module 7570 (NewInlineNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import _modDef2142 from "module_2142" /* 2142 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import TextVariants from "TextVariants" /* 5089 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6289 */;
import CircleCheckIcon from "CircleCheckIcon" /* 6867 */;
import WarningIcon from "WarningIcon" /* 7571 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const AccessibilityAnnouncer2 = tmp(4828);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { critical: obj2, warning: obj3, info: obj4, positive: obj5 };
obj2 = { Icon: CircleErrorIcon.CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2142.uKMqrF };
obj3 = { Icon: WarningIcon.WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2142["7vL/d/"] };
obj4 = { Icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2142.BReS7U };
obj5 = { Icon: CircleCheckIcon.CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2142["1MXXPf"] };
const TextVariantsFlat = TextVariants.TextVariantsFlat;
let found = TextVariantsFlat.find((name) => "experimental/body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
let closure_9 = createStyles.createStyles((arg0, height) => {
  let obj4;
  obj = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border }, iconAndText: { flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 }, iconContainer: obj4, contents: { flex: 1, gap: nativeDefault.space.PX_12 }, copy: { gap: nativeDefault.space.PX_4 }, cta: { alignSelf: "flex-start" } };
  ({ flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border });
  obj4 = { height, justifyContent: "center" };
  ({ flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 });
  ({ flex: 1, gap: nativeDefault.space.PX_12 });
  ({ gap: nativeDefault.space.PX_4 });
  return obj;
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewInlineNotice(hidden) {
  let Icon;
  let action;
  let iconColor;
  let items1;
  let items2;
  let items3;
  let joined;
  let message;
  let obj11;
  let onDismiss;
  let role;
  let title;
  let tmp11;
  let tmp7;
  let tmp9;
  let type;
  let typeLabel;
  let tmp = role;
  obj = role(joined[12]);
  const cResult = obj.c(50);
  ({ type, title, message, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let result;
  const obj2 = role(joined[13]);
  const tmp4 = closure_9;
  if (null != lineHeight) {
    result = lineHeight * obj2.useFontScale();
  }
  const tmp4Result = tmp4(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  if (cResult[0] !== typeLabel) {
    const intl = tmp(tmp2[14]).intl;
    const stringResult = intl.string(typeLabel);
    cResult[0] = typeLabel;
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== title) {
    const tmpResult = tmp(joined[15]);
    const nodeText = tmpResult.getNodeText(title);
    cResult[2] = title;
    cResult[3] = nodeText;
    tmp9 = nodeText;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== message) {
    const tmpResult2 = tmp(joined[15]);
    const nodeText1 = tmpResult2.getNodeText(message);
    cResult[4] = message;
    cResult[5] = nodeText1;
    tmp11 = nodeText1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === tmp11) {
      let obj5;
      if (cResult[8] === tmp7) {
        obj5 = cResult[9];
      }
      joined = obj5.join(", ");
      if (cResult[10] === joined) {
        if (cResult[11] === hidden) {
          let tmp15;
          let tmp16;
          if (cResult[12] === role) {
            tmp15 = cResult[13];
            tmp16 = cResult[14];
          }
          const effect = react.useEffect(tmp15, tmp16);
          if (hidden) {
            return null;
          } else {
            let tmp19;
            const container = tmp4Result.container;
            if (cResult[15] !== role) {
              let obj3;
              let str2 = "alert";
              if ("alert" === role) {
                obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
              } else if ("status" === role) {
                obj3 = { accessibilityLiveRegion: "polite" };
              } else if ("static" === role) {
                obj3 = {};
              }
              cResult[15] = role;
              class F {
                constructor() {
                  obj = utils_PlatformUtils;
                  let isIOSResult = obj.isIOS();
                  if (isIOSResult) {
                    isIOSResult = "static" !== role;
                  }
                  if (isIOSResult) {
                    isIOSResult = !hidden;
                  }
                  if (isIOSResult) {
                    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                    let str2 = "assertive";
                    const announce = AccessibilityAnnouncer.announce;
                    const tmp6 = joined;
                    if ("status" === role) {
                      str2 = "polite";
                    }
                    announce(tmp6, str2);
                  }
                }
              }
              tmp19 = obj3;
            } else {
              tmp19 = cResult[16];
            }
            if (cResult[17] === Icon) {
              if (cResult[18] === iconColor) {
                let tmp20;
                if (cResult[19] === tmp7) {
                  tmp20 = cResult[20];
                }
                if (cResult[21] === tmp4Result.iconContainer) {
                  let tmp23;
                  let tmp27;
                  let tmp30;
                  if (cResult[22] === tmp20) {
                    tmp23 = cResult[23];
                  }
                  if (cResult[24] !== title) {
                    let tmp28 = null;
                    if (null != title) {
                      const obj4 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
                      tmp28 = closure_5(tmp(tmp2[18]).Text, obj4);
                    }
                    cResult[24] = title;
                    class F {
                      constructor() {
                        obj = utils_PlatformUtils;
                        let isIOSResult = obj.isIOS();
                        if (isIOSResult) {
                          isIOSResult = "static" !== role;
                        }
                        if (isIOSResult) {
                          isIOSResult = !hidden;
                        }
                        if (isIOSResult) {
                          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                          let str2 = "assertive";
                          const announce = AccessibilityAnnouncer.announce;
                          const tmp6 = joined;
                          if ("status" === role) {
                            str2 = "polite";
                          }
                          announce(tmp6, str2);
                        }
                      }
                    }
                    tmp27 = tmp28;
                  } else {
                    tmp27 = cResult[25];
                  }
                  if (cResult[26] !== message) {
                    const obj6 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
                    const tmp32 = closure_5(tmp(joined[18]).Text, obj6);
                    class F {
                      constructor() {
                        obj = utils_PlatformUtils;
                        let isIOSResult = obj.isIOS();
                        if (isIOSResult) {
                          isIOSResult = "static" !== role;
                        }
                        if (isIOSResult) {
                          isIOSResult = !hidden;
                        }
                        if (isIOSResult) {
                          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                          let str2 = "assertive";
                          const announce = AccessibilityAnnouncer.announce;
                          const tmp6 = joined;
                          if ("status" === role) {
                            str2 = "polite";
                          }
                          announce(tmp6, str2);
                        }
                      }
                    }
                    cResult[27] = tmp32;
                    tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[27];
                  }
                  if (cResult[28] === tmp4Result.copy) {
                    if (cResult[29] === tmp27) {
                      let tmp33;
                      if (cResult[30] === tmp30) {
                        tmp33 = cResult[31];
                      }
                      if (cResult[32] === action) {
                        let tmp36;
                        if (cResult[33] === tmp4Result.cta) {
                          tmp36 = cResult[34];
                        }
                        if (cResult[35] === tmp4Result.contents) {
                          if (cResult[36] === tmp33) {
                            let tmp40;
                            if (cResult[37] === tmp36) {
                              tmp40 = cResult[38];
                            }
                            if (cResult[39] === tmp4Result.iconAndText) {
                              if (cResult[40] === tmp23) {
                                let tmp44;
                                let tmp48;
                                if (cResult[41] === tmp40) {
                                  tmp44 = cResult[42];
                                }
                                if (cResult[43] !== onDismiss) {
                                  let tmp49 = null;
                                  if (null != onDismiss) {
                                    const obj7 = { variant: "tertiary", size: "sm", icon: closure_5(tmp(joined[21]).XSmallIcon, {}), accessibilityLabel: tmp51(tmp(joined[14]).t.WAI6xu), onPress: onDismiss };
                                    const IconButton = tmp(tmp2[20]).IconButton;
                                    const intl2 = tmp(tmp2[14]).intl;
                                    class F {
                                      constructor() {
                                        obj = utils_PlatformUtils;
                                        let isIOSResult = obj.isIOS();
                                        if (isIOSResult) {
                                          isIOSResult = "static" !== role;
                                        }
                                        if (isIOSResult) {
                                          isIOSResult = !hidden;
                                        }
                                        if (isIOSResult) {
                                          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                                          let str2 = "assertive";
                                          const announce = AccessibilityAnnouncer.announce;
                                          const tmp6 = joined;
                                          if ("status" === role) {
                                            str2 = "polite";
                                          }
                                          announce(tmp6, str2);
                                        }
                                      }
                                    }
                                    tmp49 = closure_5(IconButton, obj7);
                                  }
                                  cResult[43] = onDismiss;
                                  class F {
                                    constructor() {
                                      obj = utils_PlatformUtils;
                                      let isIOSResult = obj.isIOS();
                                      if (isIOSResult) {
                                        isIOSResult = "static" !== role;
                                      }
                                      if (isIOSResult) {
                                        isIOSResult = !hidden;
                                      }
                                      if (isIOSResult) {
                                        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                                        let str2 = "assertive";
                                        const announce = AccessibilityAnnouncer.announce;
                                        const tmp6 = joined;
                                        if ("status" === role) {
                                          str2 = "polite";
                                        }
                                        announce(tmp6, str2);
                                      }
                                    }
                                  }
                                  tmp48 = tmp49;
                                } else {
                                  tmp48 = cResult[44];
                                }
                                if (cResult[45] === tmp4Result.container) {
                                  if (cResult[46] === tmp44) {
                                    if (cResult[47] === tmp48) {
                                      let tmp52;
                                      if (cResult[48] === tmp19) {
                                        tmp52 = cResult[49];
                                      }
                                      return tmp52;
                                    }
                                  }
                                }
                                class F {
                                  constructor() {
                                    obj = utils_PlatformUtils;
                                    let isIOSResult = obj.isIOS();
                                    if (isIOSResult) {
                                      isIOSResult = "static" !== role;
                                    }
                                    if (isIOSResult) {
                                      isIOSResult = !hidden;
                                    }
                                    if (isIOSResult) {
                                      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                                      let str2 = "assertive";
                                      const announce = AccessibilityAnnouncer.announce;
                                      const tmp6 = joined;
                                      if ("status" === role) {
                                        str2 = "polite";
                                      }
                                      announce(tmp6, str2);
                                    }
                                  }
                                }
                                tmp55[0] = container;
                                const merged = Object.assign(tmp19);
                                const items = [tmp44, tmp48];
                                tmp55.children = items;
                                const tmp59 = closure_6(View, tmp55);
                                cResult[45] = tmp4Result.container;
                                cResult[46] = tmp44;
                                cResult[47] = tmp48;
                                cResult[48] = tmp19;
                                cResult[49] = tmp59;
                                tmp52 = tmp59;
                              }
                            }
                            const obj8 = { style: null, children: items1 };
                            class F {
                              constructor() {
                                obj = utils_PlatformUtils;
                                let isIOSResult = obj.isIOS();
                                if (isIOSResult) {
                                  isIOSResult = "static" !== role;
                                }
                                if (isIOSResult) {
                                  isIOSResult = !hidden;
                                }
                                if (isIOSResult) {
                                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                                  let str2 = "assertive";
                                  const announce = AccessibilityAnnouncer.announce;
                                  const tmp6 = joined;
                                  if ("status" === role) {
                                    str2 = "polite";
                                  }
                                  announce(tmp6, str2);
                                }
                              }
                            }
                            items1 = [tmp23, tmp40];
                            const tmp47 = closure_6(View, obj8);
                            cResult[39] = tmp4Result.iconAndText;
                            cResult[40] = tmp23;
                            cResult[41] = tmp40;
                            cResult[42] = tmp47;
                            tmp44 = tmp47;
                          }
                        }
                        const obj9 = { style: null, children: items2 };
                        class F {
                          constructor() {
                            obj = utils_PlatformUtils;
                            let isIOSResult = obj.isIOS();
                            if (isIOSResult) {
                              isIOSResult = "static" !== role;
                            }
                            if (isIOSResult) {
                              isIOSResult = !hidden;
                            }
                            if (isIOSResult) {
                              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                              let str2 = "assertive";
                              const announce = AccessibilityAnnouncer.announce;
                              const tmp6 = joined;
                              if ("status" === role) {
                                str2 = "polite";
                              }
                              announce(tmp6, str2);
                            }
                          }
                        }
                        items2 = [tmp33, tmp36];
                        const tmp43 = closure_6(View, obj9);
                        cResult[35] = tmp4Result.contents;
                        cResult[36] = tmp33;
                        cResult[37] = tmp36;
                        cResult[38] = tmp43;
                        tmp40 = tmp43;
                      }
                      let tmp37 = null;
                      if (null != action) {
                        const obj10 = { style: tmp4Result.cta, children: closure_5(tmp(joined[19]).Button, obj11) };
                        obj11 = { variant: "secondary", size: "sm", text: null, onPress: action.onClick };
                        class F {
                          constructor() {
                            obj = utils_PlatformUtils;
                            let isIOSResult = obj.isIOS();
                            if (isIOSResult) {
                              isIOSResult = "static" !== role;
                            }
                            if (isIOSResult) {
                              isIOSResult = !hidden;
                            }
                            if (isIOSResult) {
                              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                              let str2 = "assertive";
                              const announce = AccessibilityAnnouncer.announce;
                              const tmp6 = joined;
                              if ("status" === role) {
                                str2 = "polite";
                              }
                              announce(tmp6, str2);
                            }
                          }
                        }
                        tmp37 = closure_5(View, obj10);
                      }
                      class F {
                        constructor() {
                          obj = utils_PlatformUtils;
                          let isIOSResult = obj.isIOS();
                          if (isIOSResult) {
                            isIOSResult = "static" !== role;
                          }
                          if (isIOSResult) {
                            isIOSResult = !hidden;
                          }
                          if (isIOSResult) {
                            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                            let str2 = "assertive";
                            const announce = AccessibilityAnnouncer.announce;
                            const tmp6 = joined;
                            if ("status" === role) {
                              str2 = "polite";
                            }
                            announce(tmp6, str2);
                          }
                        }
                      }
                      cResult[33] = tmp4Result.cta;
                      cResult[34] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                  class F {
                    constructor() {
                      obj = utils_PlatformUtils;
                      let isIOSResult = obj.isIOS();
                      if (isIOSResult) {
                        isIOSResult = "static" !== role;
                      }
                      if (isIOSResult) {
                        isIOSResult = !hidden;
                      }
                      if (isIOSResult) {
                        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                        let str2 = "assertive";
                        const announce = AccessibilityAnnouncer.announce;
                        const tmp6 = joined;
                        if ("status" === role) {
                          str2 = "polite";
                        }
                        announce(tmp6, str2);
                      }
                    }
                  }
                  const obj12 = { style: tmp4Result.copy, children: items3 };
                  items3 = [tmp27, tmp30];
                  const tmp35 = closure_6(View, obj12);
                  cResult[28] = tmp4Result.copy;
                  cResult[29] = tmp27;
                  cResult[30] = tmp30;
                  cResult[31] = tmp35;
                  tmp33 = tmp35;
                }
                const obj13 = { style: null, children: tmp20 };
                class F {
                  constructor() {
                    obj = utils_PlatformUtils;
                    let isIOSResult = obj.isIOS();
                    if (isIOSResult) {
                      isIOSResult = "static" !== role;
                    }
                    if (isIOSResult) {
                      isIOSResult = !hidden;
                    }
                    if (isIOSResult) {
                      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                      let str2 = "assertive";
                      const announce = AccessibilityAnnouncer.announce;
                      const tmp6 = joined;
                      if ("status" === role) {
                        str2 = "polite";
                      }
                      announce(tmp6, str2);
                    }
                  }
                }
                const tmp26 = closure_5(View, obj13);
                cResult[21] = tmp4Result.iconContainer;
                cResult[22] = tmp20;
                cResult[23] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj14 = { size: "xs", color: null, accessibilityLabel: tmp7 };
            class F {
              constructor() {
                obj = utils_PlatformUtils;
                let isIOSResult = obj.isIOS();
                if (isIOSResult) {
                  isIOSResult = "static" !== role;
                }
                if (isIOSResult) {
                  isIOSResult = !hidden;
                }
                if (isIOSResult) {
                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  let str2 = "assertive";
                  const announce = AccessibilityAnnouncer.announce;
                  const tmp6 = joined;
                  if ("status" === role) {
                    str2 = "polite";
                  }
                  announce(tmp6, str2);
                }
              }
            }
            const tmp22 = closure_5(Icon, obj14);
            cResult[17] = Icon;
            cResult[18] = iconColor;
            cResult[19] = tmp7;
            cResult[20] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
      class F {
        constructor() {
          obj = utils_PlatformUtils;
          let isIOSResult = obj.isIOS();
          if (isIOSResult) {
            isIOSResult = "static" !== role;
          }
          if (isIOSResult) {
            isIOSResult = !hidden;
          }
          if (isIOSResult) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            let str2 = "assertive";
            const announce = AccessibilityAnnouncer.announce;
            const tmp6 = joined;
            if ("status" === role) {
              str2 = "polite";
            }
            announce(tmp6, str2);
          }
        }
      }
      const items4 = [role, hidden, joined];
      cResult[10] = joined;
      cResult[11] = hidden;
      cResult[12] = role;
      cResult[13] = F;
      cResult[14] = items4;
      tmp16 = items4;
      tmp15 = F;
    }
  }
  const items5 = [tmp7, tmp9, tmp11];
  const found = items5.filter((item) => null != item && "" !== item);
  cResult[6] = tmp9;
  cResult[7] = tmp11;
  cResult[8] = tmp7;
  cResult[9] = found;
  obj5 = found;
}) : (function NewInlineNotice(hidden) {
  let Icon;
  let action;
  let iconColor;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let message;
  let obj12;
  let obj6;
  let onDismiss;
  let role;
  let title;
  let type;
  let typeLabel;
  ({ type, title, message, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let joined;
  let tmp = role;
  obj = role(joined[13]);
  let result;
  const tmp3 = closure_9;
  if (null != lineHeight) {
    result = lineHeight * obj.useFontScale();
  }
  const tmp3Result = tmp3(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  const intl = tmp(tmp2[14]).intl;
  const stringResult = intl.string(typeLabel);
  const items = [stringResult, , ];
  const tmpResult = tmp(joined[15]);
  items[1] = tmpResult.getNodeText(title);
  const tmpResult2 = tmp(joined[15]);
  items[2] = tmpResult2.getNodeText(message);
  const found = items.filter((item) => null != item && "" !== item);
  joined = found.join(", ");
  const items1 = [role, hidden, joined];
  const effect = react.useEffect(() => {
    obj = utils_PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      isIOSResult = "static" !== role;
    }
    if (isIOSResult) {
      isIOSResult = !hidden;
    }
    if (isIOSResult) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      let str2 = "assertive";
      const announce = AccessibilityAnnouncer.announce;
      const tmp6 = joined;
      if ("status" === role) {
        str2 = "polite";
      }
      announce(tmp6, str2);
    }
  }, items1);
  let tmp10Result = null;
  if (!hidden) {
    let obj3;
    const obj2 = { style: tmp3Result.container, children: items5 };
    if ("alert" === role) {
      obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
    } else {
      let str2 = "status";
      if ("status" === role) {
        obj3 = { accessibilityLiveRegion: "polite" };
      } else if ("static" === role) {
        obj3 = {};
      }
    }
    const merged = Object.assign(obj3);
    const obj4 = { style: tmp3Result.iconAndText, children: items2 };
    const obj5 = { style: tmp3Result.iconContainer, children: closure_5(Icon, obj6) };
    obj6 = { size: "xs", color: iconColor, accessibilityLabel: stringResult };
    items2 = [closure_5(View, obj5), ];
    let tmp15Result = null;
    const obj7 = { style: tmp3Result.contents, children: items4 };
    const obj8 = { style: tmp3Result.copy, children: items3 };
    if (null != title) {
      const obj9 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
      tmp15Result = tmp15(tmp(tmp2[18]).Text, obj9);
    }
    items3 = [tmp15Result, ];
    const obj10 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
    items3[1] = closure_5(tmp(joined[18]).Text, obj10);
    items4 = [closure_6(View, obj8), ];
    let tmp15Result3 = null;
    if (null != action) {
      const obj11 = { style: tmp3Result.cta, children: closure_5(tmp(joined[19]).Button, obj12) };
      obj12 = { variant: "secondary", size: "sm", text: null, onPress: null };
      ({ text: obj15.text, onClick: obj15.onPress } = action);
      tmp15Result3 = tmp15(tmp11, obj11);
    }
    items4[1] = tmp15Result3;
    items2[1] = closure_6(View, obj7);
    items5 = [closure_6(View, obj4), ];
    let tmp15Result4 = null;
    if (null != onDismiss) {
      const obj13 = { variant: "tertiary", size: "sm", icon: closure_5(tmp(joined[21]).XSmallIcon, {}), accessibilityLabel: intl2.string(tmp(joined[14]).t.WAI6xu), onPress: onDismiss };
      const IconButton = tmp(tmp2[20]).IconButton;
      intl2 = tmp(tmp2[14]).intl;
      tmp15Result4 = tmp15(IconButton, obj13);
    }
    items5[1] = tmp15Result4;
    tmp10Result = tmp10(tmp11, obj2);
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("design/mana/components/InlineNotice/NewInlineNotice.native.tsx");

export const NewInlineNotice = tmp5;
