// Module ID: 12532
// Function ID: 12533
// Name: chat_input/ChatInputNativeComponent
// Dependencies: [19, 4995, 21, 4971, 587, 558, 576, 1128, 5205, 4978, 4968, 1384, 12533, 12537, 12517, 2]

// Module 12532 (chat_input/ChatInputNativeComponent)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ColorUtils from "ColorUtils" /* 4968 */;
import shared from "shared" /* 4978 */;
import useTheme from "useTheme" /* 5205 */;
import ChatInputNativeComponent2 from "ChatInputNativeComponent" /* 12517 */;
import MobileMarkdownFormatMenuExperiment from "MobileMarkdownFormatMenuExperiment" /* 12537 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4995 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { style: { flex: 1 }, textColor: obj2, placeholderColor: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputNativeComponent(arg0) {
  let PRIMARY_500;
  let accessibilityLabel;
  let accessible;
  let customKeyboard;
  let editable;
  let markAsSpoilerTitle;
  let maxHeight;
  let onBeginFocus;
  let onChangeContentSize;
  let onEndBlur;
  let onMaxHeightChanged;
  let onPasteCommand;
  let onPasteImage;
  let onRequestSend;
  let onSelectionOrTextChange;
  let onTapAction;
  let onTextFlushed;
  let placeholder;
  let ref;
  let setNoExtractUI;
  let shouldShowCursor;
  let tmp10;
  let tmp11;
  let tmp4;
  let verticalInset;
  const obj = react2;
  const cResult = obj.c(31);
  ({ accessible, placeholder, editable, markAsSpoilerTitle, maxHeight, setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset, ref, accessibilityLabel, customKeyboard, onMaxHeightChanged } = arg0);
  if (cResult[0] !== markAsSpoilerTitle) {
    let stringResult = markAsSpoilerTitle;
    if (undefined === markAsSpoilerTitle) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t["gsI+xC"]);
    }
    cResult[0] = markAsSpoilerTitle;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_5();
  const style = tmp6.style;
  const color = tmp6.textColor.color;
  const color2 = tmp6.placeholderColor.color;
  const tmpResult = useTheme;
  const theme = tmpResult.useTheme();
  const tmpResult7 = shared;
  const isThemeDarkResult = tmpResult7.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    PRIMARY_500 = unsafe_rawColors.WHITE;
    tmp10 = tmp9;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp10 = tmp9;
  }
  if (cResult[2] !== PRIMARY_500) {
    let num3 = 0.6;
    const hexWithOpacity = ColorUtils.hexWithOpacity;
    ColorUtils;
    if (null != ClientThemesBackgroundStore.gradientPreset) {
      num3 = 0.8;
    }
    const hexWithOpacityResult = hexWithOpacity(PRIMARY_500, num3);
    cResult[2] = PRIMARY_500;
    cResult[3] = hexWithOpacityResult;
    tmp11 = hexWithOpacityResult;
  } else {
    tmp11 = cResult[3];
  }
  let tmp16;
  const tmpResult9 = PlatformUtils;
  if (!tmpResult9.isAndroid()) {
    tmp16 = accessibilityLabel;
  }
  let tmp17;
  const tmpResult10 = PlatformUtils;
  if (!tmpResult10.isAndroid()) {
    tmp17 = customKeyboard;
  }
  PlatformUtils;
  let num6 = 2;
  if (isThemeDarkResult) {
    num6 = 1;
  }
  if (maxHeight == null) {
    maxHeight = tmp10(12533)(onMaxHeightChanged);
  }
  const tmpResult12 = MobileMarkdownFormatMenuExperiment;
  const isMobileMarkdownFormatMenuEnabled = tmpResult12.useIsMobileMarkdownFormatMenuEnabled("ChatInputNativeComponent");
  if (cResult[4] === tmp16) {
    if (cResult[5] === accessible) {
      if (cResult[6] === tmp17) {
        if (cResult[7] === editable) {
          if (cResult[8] === ref) {
            if (cResult[9] === num6) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === maxHeight) {
                  if (cResult[12] === onBeginFocus) {
                    if (cResult[13] === onChangeContentSize) {
                      if (cResult[14] === onEndBlur) {
                        if (cResult[15] === onPasteCommand) {
                          if (cResult[16] === onPasteImage) {
                            if (cResult[17] === onRequestSend) {
                              if (cResult[18] === onSelectionOrTextChange) {
                                if (cResult[19] === onTapAction) {
                                  if (cResult[20] === onTextFlushed) {
                                    if (cResult[21] === placeholder) {
                                      if (cResult[22] === color2) {
                                        if (cResult[23] === tmp11) {
                                          if (cResult[24] === setNoExtractUI) {
                                            if (cResult[25] === shouldShowCursor) {
                                              if (cResult[26] === isMobileMarkdownFormatMenuEnabled) {
                                                if (cResult[27] === style) {
                                                  if (cResult[28] === color) {
                                                    let tmp19;
                                                    if (cResult[29] === verticalInset) {
                                                      tmp19 = cResult[30];
                                                    }
                                                    return tmp19;
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
  const tmp20 = jsx(ChatInputNativeComponent2.default, { accessible, accessibilityLabel: tmp16, children: tmp17, editable, showFormatMenu: isMobileMarkdownFormatMenuEnabled, keyboardAppearance: num6, keyboardType: "default", markAsSpoilerTitle: tmp4, maxHeight, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: color2, ref, selectionColor: tmp11, setNoExtractUI, shouldShowCursor, style, textColor: color, verticalInset });
  cResult[4] = tmp16;
  cResult[5] = accessible;
  cResult[6] = tmp17;
  cResult[7] = editable;
  cResult[8] = ref;
  cResult[9] = num6;
  cResult[10] = tmp4;
  cResult[11] = maxHeight;
  cResult[12] = onBeginFocus;
  cResult[13] = onChangeContentSize;
  cResult[14] = onEndBlur;
  cResult[15] = onPasteCommand;
  cResult[16] = onPasteImage;
  cResult[17] = onRequestSend;
  cResult[18] = onSelectionOrTextChange;
  cResult[19] = onTapAction;
  cResult[20] = onTextFlushed;
  cResult[21] = placeholder;
  cResult[22] = color2;
  cResult[23] = tmp11;
  cResult[24] = setNoExtractUI;
  cResult[25] = shouldShowCursor;
  cResult[26] = isMobileMarkdownFormatMenuEnabled;
  cResult[27] = style;
  cResult[28] = color;
  cResult[29] = verticalInset;
  cResult[30] = tmp20;
  tmp19 = tmp20;
}) : (function ChatInputNativeComponent(markAsSpoilerTitle) {
  let PRIMARY_500;
  let accessibilityLabel;
  let accessible;
  let customKeyboard;
  let editable;
  let onBeginFocus;
  let onChangeContentSize;
  let onEndBlur;
  let onMaxHeightChanged;
  let onPasteCommand;
  let onPasteImage;
  let onRequestSend;
  let onSelectionOrTextChange;
  let onTapAction;
  let onTextFlushed;
  let placeholder;
  let ref;
  let setNoExtractUI;
  let shouldShowCursor;
  let tmp10;
  let verticalInset;
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = intl2.intl;
    markAsSpoilerTitle = intl.string(intl2.t["gsI+xC"]);
  }
  let maxHeight = markAsSpoilerTitle.maxHeight;
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset, ref } = markAsSpoilerTitle);
  const tmp3 = closure_5();
  const style = tmp3.style;
  const color = tmp3.textColor.color;
  const color2 = tmp3.placeholderColor.color;
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    PRIMARY_500 = unsafe_rawColors.WHITE;
    tmp10 = tmp9;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp10 = tmp9;
  }
  let num = 0.6;
  if (null != ClientThemesBackgroundStore.gradientPreset) {
    num = 0.8;
  }
  let tmp12;
  const hexWithOpacityResult = hexWithOpacity(PRIMARY_500, num);
  const tmp4Result = PlatformUtils;
  if (!tmp4Result.isAndroid()) {
    tmp12 = accessibilityLabel;
  }
  let tmp13;
  const tmp4Result4 = PlatformUtils;
  if (!tmp4Result4.isAndroid()) {
    tmp13 = customKeyboard;
  }
  PlatformUtils;
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const tmp14 = tmp10(12533)(onMaxHeightChanged);
  const tmp4Result6 = MobileMarkdownFormatMenuExperiment;
  const isMobileMarkdownFormatMenuEnabled = tmp4Result6.useIsMobileMarkdownFormatMenuEnabled("ChatInputNativeComponent");
  const obj3 = { accessible, accessibilityLabel: tmp12, children: tmp13, editable, showFormatMenu: isMobileMarkdownFormatMenuEnabled, keyboardAppearance: num2, keyboardType: "default", markAsSpoilerTitle, maxHeight, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: color2, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style, textColor: color, verticalInset };
  const _default = ChatInputNativeComponent2.default;
  const tmp16 = jsx;
  if (maxHeight == null) {
    maxHeight = tmp14;
  }
  return tmp16(_default, obj3);
});
tmp4.displayName = "ChatInputNativeComponent";
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default tmp4;
