// Module ID: 7988
// Function ID: 7989
// Name: NewInlineNotice
// Dependencies: [19, 17, 21, 7044, 587, 2081, 7989, 5718, 7299, 5267, 5003, 558, 576, 5266, 5285, 1128, 5073, 1385, 5012, 5276, 7991, 6963, 2]

// Module 7988 (NewInlineNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import _modDef2081 from "module_2081" /* 2081 */;
import Text_Text from "Text/Text" /* 5266 */;
import TextVariants from "TextVariants" /* 5267 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5718 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7044 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7299 */;
import WarningIcon from "WarningIcon" /* 7989 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, obj1;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj7;
let obj8;
let tmp;
const AccessibilityAnnouncer2 = tmp(5012);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { critical: obj2, warning: obj3, info: obj4, positive: obj5 };
obj2 = { Icon: CircleErrorIcon.CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2081.uKMqrF };
obj3 = { Icon: WarningIcon.WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2081["7vL/d/"] };
obj4 = { Icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2081.BReS7U };
obj5 = { Icon: CircleCheckIcon.CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2081["1MXXPf"] };
const TextVariantsFlat = TextVariants.TextVariantsFlat;
let found = TextVariantsFlat.find((name) => "experimental/body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
let createStyles = createStyles_mod;
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
createStyles = createStyles_mod;
let obj6 = { stack: obj7, listItem: obj8, listItemText: { flex: 1 } };
obj7 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj6);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoticeMessageList(color) {
  let closure_2;
  let intro;
  let items;
  let items1;
  let variant;
  obj = variant(576);
  const cResult = obj.c(22);
  const tmp = variant;
  ({ intro, items, variant } = color);
  color = color.color;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] === color) {
    if (cResult[1] === intro) {
      let tmp6;
      let tmp9;
      if (cResult[2] === variant) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === color) {
        if (cResult[5] === items) {
          if (cResult[6] === tmp4.listItem) {
            if (cResult[7] === tmp4.listItemText) {
              if (cResult[8] === variant) {
                tmp9 = cResult[9];
              }
              if (cResult[15] === tmp4.stack) {
                let tmp12;
                if (cResult[16] === tmp9) {
                  tmp12 = cResult[17];
                }
                if (cResult[18] === tmp4.stack) {
                  if (cResult[19] === tmp6) {
                    let tmp15;
                    if (cResult[20] === tmp12) {
                      tmp15 = cResult[21];
                    }
                    return tmp15;
                  }
                }
                class T {
                  constructor(arg0, arg1) {
                    obj = { style: closure_2.listItem, children: null };
                    obj1 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" };
                    items = [, ];
                    items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
                    obj4 = { variant, color, style: closure_2.listItemText, children: color };
                    items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
                    obj.children = items;
                    return jsxs(View, obj, arg1);
                  }
                }
                let obj2 = { style: tmp5, children: items1 };
                items1 = [tmp6, tmp12];
                const tmp17 = closure_6(View, obj2);
                cResult[18] = tmp4.stack;
                cResult[19] = tmp6;
                cResult[20] = tmp12;
                cResult[21] = tmp17;
                tmp15 = tmp17;
              }
              class T {
                constructor(arg0, arg1) {
                  obj = { style: closure_2.listItem, children: null };
                  obj1 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" };
                  items = [, ];
                  items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
                  obj4 = { variant, color, style: closure_2.listItemText, children: color };
                  items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
                  obj.children = items;
                  return jsxs(View, obj, arg1);
                }
              }
              let obj3 = { accessibilityRole: "list", style: tmp8, children: tmp9 };
              const tmp14 = closure_5(View, obj3);
              cResult[15] = tmp4.stack;
              cResult[16] = tmp9;
              cResult[17] = tmp14;
              tmp12 = tmp14;
            }
          }
        }
      }
      if (cResult[10] === color) {
        if (cResult[11] === tmp4.listItem) {
          if (cResult[12] === tmp4.listItemText) {
            let tmp10;
            if (cResult[13] === variant) {
              tmp10 = cResult[14];
            }
            const mapped = items.map(tmp10);
            class T {
              constructor(arg0, arg1) {
                obj = { style: closure_2.listItem, children: null };
                obj1 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" };
                items = [, ];
                items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
                obj4 = { variant, color, style: closure_2.listItemText, children: color };
                items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
                obj.children = items;
                return jsxs(View, obj, arg1);
              }
            }
            cResult[5] = items;
            cResult[6] = tmp4.listItem;
            cResult[7] = tmp4.listItemText;
            cResult[8] = variant;
            cResult[9] = mapped;
            tmp9 = mapped;
          }
        }
      }
      class T {
        constructor(arg0, arg1) {
          obj = { style: closure_2.listItem, children: null };
          obj1 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" };
          items = [, ];
          items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
          obj4 = { variant, color, style: closure_2.listItemText, children: color };
          items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
          obj.children = items;
          return jsxs(View, obj, arg1);
        }
      }
      cResult[10] = color;
      cResult[11] = tmp4.listItem;
      cResult[12] = tmp4.listItemText;
      cResult[13] = variant;
      cResult[14] = T;
      tmp10 = T;
    }
  }
  const tmp7 = closure_5(tmp(5266).Text, { variant, color, children: intro });
  cResult[0] = color;
  cResult[1] = intro;
  cResult[2] = variant;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function NoticeMessageList(color) {
  let closure_2;
  let items;
  let items1;
  let variant;
  ({ items, variant } = color);
  color = color.color;
  const intro = color.intro;
  const tmp = closure_10();
  dependencyMap = tmp;
  obj = { style: tmp.stack, children: items1 };
  items1 = [closure_5(variant(5266).Text, { variant, color, children: intro }), ];
  let obj2 = {
    accessibilityRole: "list",
    style: tmp.stack,
    children: items.map((children, index) => {
      let items;
      obj = { style: closure_2.listItem, children: items };
      items = [, ];
      const obj2 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" };
      items[0] = hasOwnProperty(Text_Text.Text, obj2);
      const obj3 = { variant, color, style: closure_2.listItemText, children };
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      return metroRequire(View, obj, index);
    })
  };
  items1[1] = closure_5(View, obj2);
  return closure_6(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewInlineNotice(hidden) {
  let Icon;
  let action;
  let iconColor;
  let intl2;
  let items1;
  let items2;
  let items3;
  let joined;
  let message;
  let messageList;
  let obj11;
  let obj7;
  let onDismiss;
  let role;
  let title;
  let tmp10;
  let tmp12;
  let tmp8;
  let type;
  let typeLabel;
  obj = role(joined[12]);
  const cResult = obj.c(52);
  ({ type, title, message, messageList, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let result;
  const obj2 = role(joined[14]);
  const tmp5 = closure_9;
  if (null != lineHeight) {
    result = lineHeight * obj2.useFontScale();
  }
  const tmp5Result = tmp5(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  if (cResult[0] !== typeLabel) {
    const intl = tmp2(tmp3[15]).intl;
    const stringResult = intl.string(typeLabel);
    cResult[0] = typeLabel;
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== title) {
    const tmp2Result = role(joined[16]);
    const nodeText = tmp2Result.getNodeText(title);
    cResult[2] = title;
    cResult[3] = nodeText;
    tmp10 = nodeText;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== message) {
    const tmp2Result2 = role(joined[16]);
    const nodeText1 = tmp2Result2.getNodeText(message);
    cResult[4] = message;
    cResult[5] = nodeText1;
    tmp12 = nodeText1;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === messageList) {
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp12) {
        let obj5;
        if (cResult[9] === tmp8) {
          obj5 = cResult[10];
        }
        joined = obj5.join(", ");
        if (cResult[11] === joined) {
          if (cResult[12] === hidden) {
            let tmp17;
            let tmp18;
            if (cResult[13] === role) {
              tmp17 = cResult[14];
              tmp18 = cResult[15];
            }
            const effect = react.useEffect(tmp17, tmp18);
            if (hidden) {
              return null;
            } else {
              let tmp21;
              const container = tmp5Result.container;
              if (cResult[16] !== role) {
                let obj3;
                let str2 = "alert";
                if ("alert" === role) {
                  obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
                } else if ("status" === role) {
                  obj3 = { accessibilityLiveRegion: "polite" };
                } else if ("none" === role) {
                  obj3 = {};
                }
                cResult[16] = role;
                class K {
                  constructor() {
                    obj = utils_PlatformUtils;
                    let isIOSResult = obj.isIOS();
                    if (isIOSResult) {
                      isIOSResult = "none" !== role;
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
                tmp21 = obj3;
              } else {
                tmp21 = cResult[17];
              }
              if (cResult[18] === Icon) {
                if (cResult[19] === iconColor) {
                  let tmp22;
                  if (cResult[20] === tmp8) {
                    tmp22 = cResult[21];
                  }
                  if (cResult[22] === tmp5Result.iconContainer) {
                    let tmp25;
                    let tmp29;
                    let tmp34;
                    if (cResult[23] === tmp22) {
                      tmp25 = cResult[24];
                    }
                    if (cResult[25] !== title) {
                      let tmp30 = null;
                      if (null != title) {
                        const obj4 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
                        tmp30 = closure_5(tmp2(tmp3[13]).Text, obj4);
                      }
                      cResult[25] = title;
                      class K {
                        constructor() {
                          obj = utils_PlatformUtils;
                          let isIOSResult = obj.isIOS();
                          if (isIOSResult) {
                            isIOSResult = "none" !== role;
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
                      tmp29 = tmp30;
                    } else {
                      tmp29 = cResult[26];
                    }
                    if (cResult[27] === message) {
                      let tmp32;
                      if (cResult[28] === messageList) {
                        tmp32 = cResult[29];
                      }
                      if (cResult[30] === tmp5Result.copy) {
                        if (cResult[31] === tmp29) {
                          let tmp37;
                          if (cResult[32] === tmp32) {
                            tmp37 = cResult[33];
                          }
                          if (cResult[34] === action) {
                            let tmp41;
                            if (cResult[35] === tmp5Result.cta) {
                              tmp41 = cResult[36];
                            }
                            if (cResult[37] === tmp5Result.contents) {
                              if (cResult[38] === tmp37) {
                                let tmp45;
                                if (cResult[39] === tmp41) {
                                  tmp45 = cResult[40];
                                }
                                if (cResult[41] === tmp5Result.iconAndText) {
                                  if (cResult[42] === tmp25) {
                                    let tmp49;
                                    let tmp53;
                                    if (cResult[43] === tmp45) {
                                      tmp49 = cResult[44];
                                    }
                                    if (cResult[45] !== onDismiss) {
                                      let tmp54 = null;
                                      if (null != onDismiss) {
                                        const obj6 = { variant: "icon-only", size: "sm", icon: closure_5(tmp56, obj7), accessibilityLabel: intl2.string(role(joined[15]).t.WAI6xu), onPress: onDismiss };
                                        const IconButton = tmp2(tmp3[20]).IconButton;
                                        obj7 = { color: hidden(joined[4]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
                                        class K {
                                          constructor() {
                                            obj = utils_PlatformUtils;
                                            let isIOSResult = obj.isIOS();
                                            if (isIOSResult) {
                                              isIOSResult = "none" !== role;
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
                                        intl2 = tmp2(tmp3[15]).intl;
                                        tmp54 = closure_5(IconButton, obj6);
                                      }
                                      cResult[45] = onDismiss;
                                      class K {
                                        constructor() {
                                          obj = utils_PlatformUtils;
                                          let isIOSResult = obj.isIOS();
                                          if (isIOSResult) {
                                            isIOSResult = "none" !== role;
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
                                      tmp53 = tmp54;
                                    } else {
                                      tmp53 = cResult[46];
                                    }
                                    if (cResult[47] === tmp5Result.container) {
                                      if (cResult[48] === tmp49) {
                                        if (cResult[49] === tmp53) {
                                          let tmp58;
                                          if (cResult[50] === tmp21) {
                                            tmp58 = cResult[51];
                                          }
                                          return tmp58;
                                        }
                                      }
                                    }
                                    class K {
                                      constructor() {
                                        obj = utils_PlatformUtils;
                                        let isIOSResult = obj.isIOS();
                                        if (isIOSResult) {
                                          isIOSResult = "none" !== role;
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
                                    tmp61[0] = container;
                                    const merged = Object.assign(tmp21);
                                    const items = [tmp49, tmp53];
                                    tmp61.children = items;
                                    const tmp65 = closure_6(View, tmp61);
                                    cResult[47] = tmp5Result.container;
                                    cResult[48] = tmp49;
                                    cResult[49] = tmp53;
                                    cResult[50] = tmp21;
                                    cResult[51] = tmp65;
                                    tmp58 = tmp65;
                                  }
                                }
                                const obj8 = { style: null, children: items1 };
                                class K {
                                  constructor() {
                                    obj = utils_PlatformUtils;
                                    let isIOSResult = obj.isIOS();
                                    if (isIOSResult) {
                                      isIOSResult = "none" !== role;
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
                                items1 = [tmp25, tmp45];
                                const tmp52 = closure_6(View, obj8);
                                cResult[41] = tmp5Result.iconAndText;
                                cResult[42] = tmp25;
                                cResult[43] = tmp45;
                                cResult[44] = tmp52;
                                tmp49 = tmp52;
                              }
                            }
                            const obj9 = { style: null, children: items2 };
                            class K {
                              constructor() {
                                obj = utils_PlatformUtils;
                                let isIOSResult = obj.isIOS();
                                if (isIOSResult) {
                                  isIOSResult = "none" !== role;
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
                            items2 = [tmp37, tmp41];
                            const tmp48 = closure_6(View, obj9);
                            cResult[37] = tmp5Result.contents;
                            cResult[38] = tmp37;
                            cResult[39] = tmp41;
                            cResult[40] = tmp48;
                            tmp45 = tmp48;
                          }
                          let tmp42 = null;
                          if (null != action) {
                            const obj10 = { style: tmp5Result.cta, children: closure_5(role(joined[19]).Button, obj11) };
                            obj11 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
                            class K {
                              constructor() {
                                obj = utils_PlatformUtils;
                                let isIOSResult = obj.isIOS();
                                if (isIOSResult) {
                                  isIOSResult = "none" !== role;
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
                            ({ onPress: obj14.onPress, loading: obj14.loading } = action);
                            tmp42 = closure_5(View, obj10);
                          }
                          class K {
                            constructor() {
                              obj = utils_PlatformUtils;
                              let isIOSResult = obj.isIOS();
                              if (isIOSResult) {
                                isIOSResult = "none" !== role;
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
                          cResult[35] = tmp5Result.cta;
                          cResult[36] = tmp42;
                          tmp41 = tmp42;
                        }
                      }
                      const obj12 = { style: null, children: items3 };
                      class K {
                        constructor() {
                          obj = utils_PlatformUtils;
                          let isIOSResult = obj.isIOS();
                          if (isIOSResult) {
                            isIOSResult = "none" !== role;
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
                      items3 = [tmp29, tmp32];
                      const tmp40 = closure_6(View, obj12);
                      cResult[30] = tmp5Result.copy;
                      cResult[31] = tmp29;
                      cResult[32] = tmp32;
                      cResult[33] = tmp40;
                      tmp37 = tmp40;
                    }
                    if (null != messageList) {
                      class K {
                        constructor() {
                          obj = utils_PlatformUtils;
                          let isIOSResult = obj.isIOS();
                          if (isIOSResult) {
                            isIOSResult = "none" !== role;
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
                    } else {
                      const obj15 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
                      tmp34 = closure_5(role(joined[13]).Text, obj15);
                    }
                    class K {
                      constructor() {
                        obj = utils_PlatformUtils;
                        let isIOSResult = obj.isIOS();
                        if (isIOSResult) {
                          isIOSResult = "none" !== role;
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
                    cResult[28] = messageList;
                    cResult[29] = tmp34;
                    tmp32 = tmp34;
                  }
                  const obj16 = { style: null, children: tmp22 };
                  class K {
                    constructor() {
                      obj = utils_PlatformUtils;
                      let isIOSResult = obj.isIOS();
                      if (isIOSResult) {
                        isIOSResult = "none" !== role;
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
                  const tmp28 = closure_5(View, obj16);
                  cResult[22] = tmp5Result.iconContainer;
                  cResult[23] = tmp22;
                  cResult[24] = tmp28;
                  tmp25 = tmp28;
                }
              }
              const obj17 = { size: "xs", color: null, accessibilityLabel: tmp8 };
              class K {
                constructor() {
                  obj = utils_PlatformUtils;
                  let isIOSResult = obj.isIOS();
                  if (isIOSResult) {
                    isIOSResult = "none" !== role;
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
              const tmp24 = closure_5(Icon, obj17);
              cResult[18] = Icon;
              cResult[19] = iconColor;
              cResult[20] = tmp8;
              cResult[21] = tmp24;
              tmp22 = tmp24;
            }
          }
        }
        class K {
          constructor() {
            obj = utils_PlatformUtils;
            let isIOSResult = obj.isIOS();
            if (isIOSResult) {
              isIOSResult = "none" !== role;
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
        cResult[11] = joined;
        cResult[12] = hidden;
        cResult[13] = role;
        cResult[14] = K;
        cResult[15] = items4;
        tmp18 = items4;
        tmp17 = K;
      }
    }
  }
  const items5 = [tmp8, tmp10, tmp12];
  let items6 = messageList;
  if (messageList == null) {
    items6 = [];
  }
  HermesBuiltin.arraySpread(items5, items6.map(role(joined[16]).getNodeText), 3);
  const found = items5.filter((item) => null != item && "" !== item);
  cResult[6] = messageList;
  cResult[7] = tmp10;
  cResult[8] = tmp12;
  cResult[9] = tmp8;
  cResult[10] = found;
  obj5 = found;
}) : (function NewInlineNotice(hidden) {
  let Icon;
  let XSmallIcon;
  let action;
  let iconColor;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let message;
  let messageList;
  let obj13;
  let obj15;
  let obj6;
  let onDismiss;
  let role;
  let title;
  let type;
  let typeLabel;
  ({ type, title, message, messageList, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let joined;
  obj = role(joined[14]);
  let result;
  const tmp4 = closure_9;
  if (null != lineHeight) {
    result = lineHeight * obj.useFontScale();
  }
  const tmp4Result = tmp4(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  const intl = tmp2(tmp3[15]).intl;
  const stringResult = intl.string(typeLabel);
  const items = [stringResult, , ];
  const tmp2Result = role(joined[16]);
  items[1] = tmp2Result.getNodeText(title);
  const tmp2Result2 = role(joined[16]);
  items[2] = tmp2Result2.getNodeText(message);
  let items1 = messageList;
  if (messageList == null) {
    items1 = [];
  }
  HermesBuiltin.arraySpread(items, items1.map(role(joined[16]).getNodeText), 3);
  const found = items.filter((item) => null != item && "" !== item);
  joined = found.join(", ");
  const items2 = [role, hidden, joined];
  const effect = react.useEffect(() => {
    obj = utils_PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      isIOSResult = "none" !== role;
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
  }, items2);
  let tmp12Result = null;
  if (!hidden) {
    let obj3;
    let tmp17Result4;
    const obj2 = { style: tmp4Result.container, children: items6 };
    if ("alert" === role) {
      obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
    } else {
      let str2 = "status";
      if ("status" === role) {
        obj3 = { accessibilityLiveRegion: "polite" };
      } else if ("none" === role) {
        obj3 = {};
      }
    }
    const merged = Object.assign(obj3);
    const obj4 = { style: tmp4Result.iconAndText, children: items3 };
    const obj5 = { style: tmp4Result.iconContainer, children: closure_5(Icon, obj6) };
    obj6 = { size: "xs", color: iconColor, accessibilityLabel: stringResult };
    items3 = [closure_5(View, obj5), ];
    let tmp17Result = null;
    const obj7 = { style: tmp4Result.contents, children: items5 };
    const obj8 = { style: tmp4Result.copy, children: items4 };
    if (null != title) {
      const obj9 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
      tmp17Result = tmp17(tmp2(tmp3[13]).Text, obj9);
    }
    items4 = [tmp17Result, ];
    if (null != messageList) {
      const obj10 = { intro: message, items: messageList, variant: "experimental/body-sm/normal", color: "text-strong" };
      tmp17Result4 = tmp17(closure_11, obj10);
    } else {
      const obj11 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
      tmp17Result4 = tmp17(tmp2(tmp3[13]).Text, obj11);
    }
    items4[1] = tmp17Result4;
    items5 = [closure_6(View, obj8), ];
    let tmp17Result5 = null;
    if (null != action) {
      const obj12 = { style: tmp4Result.cta, children: closure_5(role(joined[19]).Button, obj13) };
      obj13 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
      ({ text: obj16.text, onPress: obj16.onPress, loading: obj16.loading } = action);
      tmp17Result5 = tmp17(tmp13, obj12);
    }
    items5[1] = tmp17Result5;
    items3[1] = closure_6(View, obj7);
    items6 = [closure_6(View, obj4), ];
    let tmp17Result6 = null;
    if (null != onDismiss) {
      const obj14 = { variant: "icon-only", size: "sm", icon: closure_5(XSmallIcon, obj15), accessibilityLabel: intl2.string(role(joined[15]).t.WAI6xu), onPress: onDismiss };
      const IconButton = tmp2(tmp3[20]).IconButton;
      obj15 = { color: hidden(joined[4]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
      XSmallIcon = tmp2(tmp3[21]).XSmallIcon;
      intl2 = tmp2(tmp3[15]).intl;
      tmp17Result6 = tmp17(IconButton, obj14);
    }
    items6[1] = tmp17Result6;
    tmp12Result = tmp12(tmp13, obj2);
  }
  return tmp12Result;
});
let result = size.fileFinishedImporting("design/mana/components/InlineNotice/NewInlineNotice.native.tsx");

export const NewInlineNotice = tmp6;
