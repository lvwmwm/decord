// Module ID: 9358
// Function ID: 9359
// Name: PremiumUpsellTooltipActionSheet
// Dependencies: [19, 17, 2060, 21, 5090, 587, 558, 576, 4898, 5054, 1200, 5086, 5375, 6829, 2]

// Module 9358 (PremiumUpsellTooltipActionSheet)
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let tmp3;
const native = tmp3(1200);
const Text_Text = tmp3(5086);
const components_Button_Button = tmp3(5375);
({ Image: c3, View: closure_4 } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, img: size, header: { flexDirection: "row", justifyContent: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: obj3, nitroWheel: size1, buttonContainer: obj4 };
obj2 = { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
obj4 = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellTooltipActionSheet(onPrimaryButtonPress) {
  let backdropProps;
  let description;
  let descriptionStyle;
  let dismissibleContent;
  let imageSource;
  let imageStyle;
  let items;
  let items1;
  let items3;
  let items4;
  let onDismiss;
  let primaryButtonIcon;
  let primaryButtonText;
  let secondaryButtonText;
  let title;
  let tmp = dismissibleContent;
  let obj = dismissibleContent(onPrimaryButtonPress[7]);
  const cResult = obj.c(52);
  ({ title, backdropProps, description, descriptionStyle, imageSource, imageStyle, dismissibleContent } = onPrimaryButtonPress);
  ({ primaryButtonText, primaryButtonIcon, secondaryButtonText, onDismiss } = onPrimaryButtonPress);
  onPrimaryButtonPress = onPrimaryButtonPress.onPrimaryButtonPress;
  const onSecondaryButtonPress = onPrimaryButtonPress.onSecondaryButtonPress;
  const tmp4 = closure_8();
  if (cResult[0] === dismissibleContent) {
    let tmp5;
    if (cResult[1] === onDismiss) {
      tmp5 = cResult[2];
    }
    let closure_4 = tmp5;
    if (cResult[3] === tmp5) {
      let tmp6;
      if (cResult[4] === onPrimaryButtonPress) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp7;
        if (cResult[7] === onSecondaryButtonPress) {
          tmp7 = cResult[8];
        }
        if (cResult[9] === null != imageSource) {
          if (cResult[10] === imageSource) {
            if (cResult[11] === imageStyle) {
              let tmp10;
              let tmp14;
              if (cResult[12] === tmp4.img) {
                tmp10 = cResult[13];
              }
              if (cResult[14] !== tmp4.nitroWheel) {
                let obj2 = { style: tmp4.nitroWheel };
                const tmp16 = closure_6(tmp(onPrimaryButtonPress[10]).NitroWheel, obj2);
                cResult[14] = tmp4.nitroWheel;
                cResult[15] = tmp16;
                tmp14 = tmp16;
              } else {
                tmp14 = cResult[15];
              }
              if (cResult[16] === tmp4.title) {
                let tmp17;
                if (cResult[17] === title) {
                  tmp17 = cResult[18];
                }
                if (cResult[19] === tmp4.header) {
                  if (cResult[20] === tmp14) {
                    let tmp20;
                    if (cResult[21] === tmp17) {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] === descriptionStyle) {
                      let tmp24;
                      if (cResult[24] === tmp4.description) {
                        tmp24 = cResult[25];
                      }
                      if (cResult[26] === description) {
                        let tmp25;
                        let tmp28;
                        if (cResult[27] === tmp24) {
                          tmp25 = cResult[28];
                        }
                        if (cResult[29] !== primaryButtonIcon) {
                          let primaryButtonIconResult;
                          if (primaryButtonIcon != null) {
                            primaryButtonIconResult = primaryButtonIcon();
                          }
                          cResult[29] = primaryButtonIcon;
                          cResult[30] = primaryButtonIconResult;
                          tmp28 = primaryButtonIconResult;
                        } else {
                          tmp28 = cResult[30];
                        }
                        if (cResult[31] === tmp6) {
                          if (cResult[32] === primaryButtonText) {
                            let tmp30;
                            if (cResult[33] === tmp28) {
                              tmp30 = cResult[34];
                            }
                            if (cResult[35] === tmp7) {
                              let tmp33;
                              if (cResult[36] === secondaryButtonText) {
                                tmp33 = cResult[37];
                              }
                              if (cResult[38] === tmp4.buttonContainer) {
                                if (cResult[39] === tmp30) {
                                  let tmp36;
                                  if (cResult[40] === tmp33) {
                                    tmp36 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.container) {
                                    if (cResult[43] === tmp36) {
                                      if (cResult[44] === tmp10) {
                                        if (cResult[45] === tmp20) {
                                          let tmp40;
                                          if (cResult[46] === tmp25) {
                                            tmp40 = cResult[47];
                                          }
                                          if (cResult[48] === backdropProps) {
                                            if (cResult[49] === tmp5) {
                                              let tmp44;
                                              if (cResult[50] === tmp40) {
                                                tmp44 = cResult[51];
                                              }
                                              return tmp44;
                                            }
                                          }
                                          const obj3 = { startExpanded: true, onDismiss: tmp5, children: tmp40 };
                                          BottomSheet = tmp(tmp2[13]).BottomSheet;
                                          const merged = Object.assign(backdropProps);
                                          const tmp49 = closure_6(BottomSheet, obj3);
                                          cResult[48] = backdropProps;
                                          cResult[49] = tmp5;
                                          cResult[50] = tmp40;
                                          cResult[51] = tmp49;
                                          tmp44 = tmp49;
                                        }
                                      }
                                    }
                                  }
                                  const obj4 = { style: tmp4.container, children: items };
                                  items = [tmp10, tmp20, tmp25, tmp36];
                                  const tmp43 = closure_7(closure_4, obj4);
                                  cResult[42] = tmp4.container;
                                  cResult[43] = tmp36;
                                  cResult[44] = tmp10;
                                  cResult[45] = tmp20;
                                  cResult[46] = tmp25;
                                  cResult[47] = tmp43;
                                  tmp40 = tmp43;
                                }
                              }
                              const obj5 = { style: tmp4.buttonContainer, children: items1 };
                              items1 = [tmp30, tmp33];
                              const tmp39 = closure_7(closure_4, obj5);
                              cResult[38] = tmp4.buttonContainer;
                              cResult[39] = tmp30;
                              cResult[40] = tmp33;
                              cResult[41] = tmp39;
                              tmp36 = tmp39;
                            }
                            let tmp34 = null;
                            if (null != secondaryButtonText) {
                              const obj6 = { variant: "secondary", text: secondaryButtonText, onPress: tmp7, size: "lg" };
                              tmp34 = closure_6(tmp(tmp2[12]).Button, obj6);
                            }
                            cResult[35] = tmp7;
                            cResult[36] = secondaryButtonText;
                            cResult[37] = tmp34;
                            tmp33 = tmp34;
                          }
                        }
                        const obj7 = { variant: "active", text: primaryButtonText, onPress: tmp6, icon: tmp28, size: "lg" };
                        const tmp32 = closure_6(tmp(onPrimaryButtonPress[12]).Button, obj7);
                        cResult[31] = tmp6;
                        cResult[32] = primaryButtonText;
                        cResult[33] = tmp28;
                        cResult[34] = tmp32;
                        tmp30 = tmp32;
                      }
                      const obj8 = { style: tmp24, variant: "text-md/medium", color: "text-default", children: description };
                      const tmp27 = closure_6(tmp(onPrimaryButtonPress[11]).Text, obj8);
                      cResult[26] = description;
                      cResult[27] = tmp24;
                      cResult[28] = tmp27;
                      tmp25 = tmp27;
                    }
                    const items2 = [tmp4.description, descriptionStyle];
                    cResult[23] = descriptionStyle;
                    cResult[24] = tmp4.description;
                    cResult[25] = items2;
                    tmp24 = items2;
                  }
                }
                const obj9 = { style: tmp4.header, children: items3 };
                items3 = [tmp14, tmp17];
                const tmp23 = closure_7(closure_4, obj9);
                cResult[19] = tmp4.header;
                cResult[20] = tmp14;
                cResult[21] = tmp17;
                cResult[22] = tmp23;
                tmp20 = tmp23;
              }
              const obj10 = { variant: "heading-xl/bold", style: tmp4.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
              const tmp19 = closure_6(tmp(onPrimaryButtonPress[11]).Text, obj10);
              cResult[16] = tmp4.title;
              cResult[17] = title;
              cResult[18] = tmp19;
              tmp17 = tmp19;
            }
          }
        }
        let tmp11 = null;
        if (null != imageSource) {
          const obj11 = { style: items4, source: imageSource };
          items4 = [tmp4.img, imageStyle];
          tmp11 = closure_6(onSecondaryButtonPress, obj11);
        }
        cResult[9] = null != imageSource;
        cResult[10] = imageSource;
        cResult[11] = imageStyle;
        cResult[12] = tmp4.img;
        cResult[13] = tmp11;
        tmp10 = tmp11;
      }
      function handleSecondaryButtonPress() {
        if (onSecondaryButtonPress != null) {
          tmp();
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        closure_4(ContentDismissActionType.DISMISS);
      }
      cResult[6] = tmp5;
      cResult[7] = onSecondaryButtonPress;
      cResult[8] = handleSecondaryButtonPress;
      tmp7 = handleSecondaryButtonPress;
    }
    function handlePrimaryButtonPress() {
      onPrimaryButtonPress();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      closure_4(ContentDismissActionType.PRIMARY);
    }
    cResult[3] = tmp5;
    cResult[4] = onPrimaryButtonPress;
    cResult[5] = handlePrimaryButtonPress;
    tmp6 = handlePrimaryButtonPress;
  }
  function handleDismiss(dismissAction) {
    const tmp = null != dismissAction && dismissAction !== ContentDismissActionType.DISMISS;
    if (!tmp) {
      if (onDismiss != null) {
        tmp3();
      }
    }
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissibleContent, obj2);
  }
  cResult[0] = dismissibleContent;
  cResult[1] = onDismiss;
  cResult[2] = handleDismiss;
  tmp5 = handleDismiss;
}) : (function PremiumUpsellTooltipActionSheet(arg0) {
  let backdropProps;
  let closure_3;
  let description;
  let descriptionStyle;
  let imageSource;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  let primaryButtonIcon;
  let primaryButtonIconResult;
  let primaryButtonText;
  let secondaryButtonText;
  let title;
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = closure_8();
  const tmp3 = require;
  let tmp4 = dependencyMap;
  let obj = {
    startExpanded: true,
    onDismiss: function handleDismiss(dismissAction) {
      const tmp = null != dismissAction && dismissAction !== ContentDismissActionType.DISMISS;
      if (!tmp) {
        if (importDefault != null) {
          tmp3();
        }
      }
      const obj = DismissibleContentUnsafeUtils;
      const obj2 = { forceTrack: true, dismissAction };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(require, obj2);
    },
    children: tmp6(closure_4, obj2)
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(backdropProps);
  obj2 = { style: tmp.container, children: items1 };
  let tmp2Result = null;
  if (null != imageSource) {
    const obj3 = { style: items, source: imageSource };
    items = [tmp.img, imageStyle];
    tmp2Result = tmp2(closure_3, obj3);
  }
  items1 = [tmp2Result, , , ];
  const obj4 = { style: tmp.header, children: items2 };
  items2 = [, ];
  const obj5 = { style: tmp.nitroWheel };
  items2[0] = closure_6(native.NitroWheel, obj5);
  const obj6 = { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items2[1] = closure_6(Text_Text.Text, obj6);
  items1[1] = closure_7(closure_4, obj4);
  const obj7 = { style: items3, variant: "text-md/medium", color: "text-default", children: description };
  items3 = [tmp.description, descriptionStyle];
  items1[2] = closure_6(Text_Text.Text, obj7);
  const obj9 = {
    variant: "active",
    text: primaryButtonText,
    onPress: function handlePrimaryButtonPress() {
      dependencyMap();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const PRIMARY = ContentDismissActionType.PRIMARY;
      const tmp4 = null != PRIMARY && PRIMARY !== ContentDismissActionType.DISMISS;
      if (!tmp4) {
        if (importDefault != null) {
          importDefault();
        }
      }
      const obj2 = DismissibleContentUnsafeUtils;
      const result = obj2.UNSAFE_markDismissibleContentAsDismissed(require, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: primaryButtonIconResult,
    size: "lg"
  };
  primaryButtonIconResult = undefined;
  const obj8 = { style: tmp.buttonContainer, children: items4 };
  const Button = components_Button_Button.Button;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  items4 = [tmp2(Button, obj9), ];
  let tmp2Result2 = null;
  if (null != secondaryButtonText) {
    const obj10 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress: function handleSecondaryButtonPress() {
          if (closure_3 != null) {
            tmp();
          }
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const DISMISS = ContentDismissActionType.DISMISS;
          const tmp5 = null != DISMISS && DISMISS !== ContentDismissActionType.DISMISS;
          if (!tmp5) {
            if (importDefault != null) {
              importDefault();
            }
          }
          const obj2 = DismissibleContentUnsafeUtils;
          const result = obj2.UNSAFE_markDismissibleContentAsDismissed(require, { forceTrack: true, dismissAction: DISMISS });
        },
      size: "lg"
    };
    tmp2Result2 = tmp2(components_Button_Button.Button, obj10);
  }
  items4[1] = tmp2Result2;
  items1[3] = closure_7(closure_4, obj8);
  return closure_6(BottomSheet, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default tmp6;
