// Module ID: 12434
// Function ID: 12435
// Name: chat_input/ChatInputNativeComponent
// Dependencies: [19, 4610, 21, 4790, 580, 558, 568, 1119, 4725, 4642, 4640, 1368, 12197, 12155, 2]

// Module 12434 (chat_input/ChatInputNativeComponent)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import ColorUtils from "ColorUtils" /* 4640 */;
import shared from "shared" /* 4642 */;
import useTheme from "useTheme" /* 4725 */;
import ChatInputNativeComponent from "ChatInputNativeComponent" /* 12155 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4610 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj = { style: { flex: 1 }, textColor: { color: nativeDefault.colors.TEXT_DEFAULT }, placeholderColor: null };
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.placeholderColor = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(30);
  ({ accessible, placeholder, editable, markAsSpoilerTitle, setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset, accessibilityLabel, customKeyboard, onMaxHeightChanged } = arg0);
  if (cResult[0] !== markAsSpoilerTitle) {
    let stringResult = markAsSpoilerTitle;
    if (undefined === markAsSpoilerTitle) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t["gsI+xC"]);
    }
    cResult[0] = markAsSpoilerTitle;
    cResult[1] = stringResult;
    let tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_5();
  const style = tmp6.style;
  const color = tmp6.textColor.color;
  const color2 = tmp6.placeholderColor.color;
  const theme = useTheme.useTheme();
  const tmpResult = useTheme;
  const isThemeDarkResult = shared.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let PRIMARY_500 = unsafe_rawColors.WHITE;
    let tmp10 = tmp9;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp10 = tmp9;
  }
  if (cResult[2] !== PRIMARY_500) {
    let num3 = 0.6;
    if (null != ClientThemesBackgroundStore.gradientPreset) {
      num3 = 0.8;
    }
    const hexWithOpacityResult = tmp(4640).hexWithOpacity(PRIMARY_500, num3);
    cResult[2] = PRIMARY_500;
    cResult[3] = hexWithOpacityResult;
    let tmp11 = hexWithOpacityResult;
    const tmpResult7 = tmp(4640);
  } else {
    tmp11 = cResult[3];
  }
  const tmpResult6 = shared;
  let tmp15;
  if (!tmpResult8.isAndroid()) {
    tmp15 = accessibilityLabel;
  }
  tmpResult8 = PlatformUtils;
  let tmp16;
  if (!tmpResult9.isAndroid()) {
    tmp16 = customKeyboard;
  }
  tmpResult9 = PlatformUtils;
  let num6 = 2;
  if (isThemeDarkResult) {
    num6 = 1;
  }
  const tmp17 = tmp10(12197)(onMaxHeightChanged);
  if (cResult[4] === tmp15) {
    if (cResult[5] === accessible) {
      if (cResult[6] === tmp16) {
        if (cResult[7] === editable) {
          if (cResult[8] === ref) {
            if (cResult[9] === num6) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === tmp17) {
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
                                              if (cResult[26] === style) {
                                                if (cResult[27] === color) {
                                                  if (cResult[28] === verticalInset) {
                                                    let tmp18 = cResult[29];
                                                  }
                                                  return tmp18;
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
  const tmp19 = jsx(ChatInputNativeComponent.default, { accessible, accessibilityLabel: tmp15, children: tmp16, editable, keyboardAppearance: num6, keyboardType: "default", markAsSpoilerTitle: tmp4, maxHeight: tmp17, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: color2, ref, selectionColor: tmp11, setNoExtractUI, shouldShowCursor, style, textColor: color, verticalInset });
  cResult[4] = tmp15;
  cResult[5] = accessible;
  cResult[6] = tmp16;
  cResult[7] = editable;
  cResult[8] = ref;
  cResult[9] = num6;
  cResult[10] = tmp4;
  cResult[11] = tmp17;
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
  cResult[26] = style;
  cResult[27] = color;
  cResult[28] = verticalInset;
  cResult[29] = tmp19;
  tmp18 = tmp19;
}) : ((markAsSpoilerTitle, ref) => {
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = util.intl;
    markAsSpoilerTitle = intl.string(util.t["gsI+xC"]);
  }
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = closure_5();
  const theme = useTheme.useTheme();
  const isThemeDarkResult = shared.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let PRIMARY_500 = unsafe_rawColors.WHITE;
    let tmp9 = tmp8;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp9 = tmp8;
  }
  let num = 0.6;
  if (null != ClientThemesBackgroundStore.gradientPreset) {
    num = 0.8;
  }
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(PRIMARY_500, num);
  let tmp11;
  if (!tmp4Result.isAndroid()) {
    tmp11 = accessibilityLabel;
  }
  tmp4Result = PlatformUtils;
  let tmp12;
  if (!tmp4Result3.isAndroid()) {
    tmp12 = customKeyboard;
  }
  tmp4Result3 = PlatformUtils;
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const tmp4Result4 = PlatformUtils;
  const tmp13 = tmp9(12197)(onMaxHeightChanged);
  return jsx(ChatInputNativeComponent.default, { accessible, accessibilityLabel: tmp11, children: tmp12, editable, keyboardAppearance: num2, keyboardType: "default", markAsSpoilerTitle, maxHeight: tmp9(12197)(onMaxHeightChanged), onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset });
}));
forwardRefResult.displayName = "ChatInputNativeComponent";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
