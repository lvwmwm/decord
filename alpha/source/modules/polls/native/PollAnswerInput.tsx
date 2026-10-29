// Module ID: 12230
// Function ID: 12231
// Name: PollAnswerInput
// Dependencies: [32, 19, 17, 4857, 7689, 8365, 1392, 21, 5005, 587, 558, 576, 12231, 1125, 8338, 1199, 6968, 9891, 9731, 7083, 5247, 12232, 2000, 9414, 8988, 5728, 12235, 2]
// Exports: default

// Module 12230 (PollAnswerInput)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1125 */;
import EmojiConstants from "EmojiConstants" /* 1392 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Pressables from "Pressables" /* 6968 */;
import DraftStore from "DraftStore" /* 7689 */;
import PollsUtils from "PollsUtils" /* 8338 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9731 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9891 */;
import useRenderPollAnswerImageDefault from "useRenderPollAnswerImage" /* 12231 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import PollsConstants from "PollsConstants" /* 8365 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let maxLength;

let c10;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ Keyboard: hasOwnProperty, TouchableOpacity: metroRequire, View: metroImportDefault } = react_native);
const DraftType = DraftStore.DraftType;
({ MAX_POLL_ANSWER_LENGTH: c10, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: unpackModuleId } = PollsConstants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let obj = { defaultContainer: { flexDirection: "row", alignItems: "center" }, inputContainer: { flex: 1 }, cannotRemove: { marginRight: 36 }, defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" }, pollAnswerTextInput: { flex: 1, paddingStart: 0 }, defaultRemoveButtonContainer: obj2, uploadContainer: { alignItems: "flex-start" } };
obj2 = { paddingLeft: nativeDefault.space.PX_12, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageInput(arg0) {
  let answerIndex;
  let channelId;
  let containerStyle;
  let emojiSize;
  let iconSrc;
  let image;
  let imageSize;
  let localCreationAnswerId;
  let openExpressionPicker;
  let openImageInputActionSheet;
  let renderImage;
  let setUploadSize;
  let tmp7;
  let tmpResult;
  let upload;
  const obj = react2;
  const cResult = obj.c(24);
  ({ channelId, localCreationAnswerId, image, iconSrc, openExpressionPicker, emojiSize, containerStyle, imageSize, answerIndex, openImageInputActionSheet } = arg0);
  let num = 24;
  if (undefined !== emojiSize) {
    num = emojiSize;
  }
  const tmp4 = closure_16();
  ({ renderImage, upload, setUploadSize } = useRenderPollAnswerImageDefault(channelId, localCreationAnswerId, image, imageSize, num));
  let emoji;
  useRenderPollAnswerImageDefault(channelId, localCreationAnswerId, image, imageSize, num);
  if (image != null) {
    emoji = image.emoji;
  }
  if (null == emoji) {
    if (null == upload) {
      let tmp11;
      if (cResult[6] !== answerIndex) {
        const intl3 = tmp(1125).intl;
        const obj2 = { answerNumber: answerIndex + 1 };
        const formatToPlainStringResult = intl3.formatToPlainString(intl5.t.ieNrxk, obj2);
        cResult[6] = answerIndex;
        cResult[7] = formatToPlainStringResult;
        tmp11 = formatToPlainStringResult;
      } else {
        tmp11 = cResult[7];
      }
      tmp7 = tmp11;
    } else {
      let str = upload.item.filename;
      if (str == null) {
        str = "";
      }
      if (cResult[3] === answerIndex) {
        let tmp9;
        if (cResult[4] === str) {
          tmp9 = cResult[5];
        }
        tmp7 = tmp9;
      }
      const intl2 = tmp(1125).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj3 = { imageName: tmpResult.filterOutUUID(str), answerNumber: answerIndex + 1 };
      const vcC7Qn = tmp(1125).t.vcC7Qn;
      tmpResult = PollsUtils;
      const formatToPlainStringResult1 = formatToPlainString(vcC7Qn, obj3);
      cResult[3] = answerIndex;
      cResult[4] = str;
      cResult[5] = formatToPlainStringResult1;
      tmp9 = formatToPlainStringResult1;
    }
  } else {
    if (cResult[0] === answerIndex) {
      if (cResult[1] === image.emoji.name) {
        tmp7 = cResult[2];
      }
    }
    const intl = tmp(1125).intl;
    const obj4 = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
    const formatToPlainStringResult2 = intl.formatToPlainString(intl5.t.vcC7Qn, obj4);
    cResult[0] = answerIndex;
    cResult[1] = image.emoji.name;
    cResult[2] = formatToPlainStringResult2;
    tmp7 = formatToPlainStringResult2;
  }
  if (cResult[8] !== setUploadSize) {
    const fn = function _(nativeEvent) {
      setUploadSize(nativeEvent.nativeEvent.layout.width);
    };
    cResult[8] = setUploadSize;
    cResult[9] = fn;
  }
  let tmp14 = null != upload;
  if (!tmp14) {
    let emoji1;
    if (image != null) {
      emoji1 = image.emoji;
    }
    tmp14 = null != emoji1;
  }
  if (tmp14) {
    openExpressionPicker = openImageInputActionSheet;
  }
  if (cResult[10] === containerStyle) {
    let tmp19;
    let tmp21Result;
    if (cResult[11] === (null != upload && tmp4.uploadContainer)) {
      tmp19 = cResult[12];
    }
    if (cResult[13] === tmp14) {
      if (cResult[14] === iconSrc) {
        let tmp20;
        if (cResult[15] === renderImage) {
          tmp20 = cResult[16];
        }
        if (cResult[17] === openExpressionPicker) {
          if (cResult[18] === tmp16) {
            if (cResult[19] === tmp7) {
              if (cResult[20] === tmp17) {
                if (cResult[21] === tmp19) {
                  let tmp24;
                  if (cResult[22] === tmp20) {
                    tmp24 = cResult[23];
                  }
                  return tmp24;
                }
              }
            }
          }
        }
        const obj5 = { accessibilityRole: "button", accessibilityLabel: tmp7, onPress: openExpressionPicker, onLongPress: tmp16, onLayout: tmp17, style: tmp19, children: tmp20 };
        const tmp26 = map1(Pressables.PressableOpacity, obj5);
        cResult[17] = openExpressionPicker;
        cResult[18] = tmp16;
        cResult[19] = tmp7;
        cResult[20] = tmp17;
        cResult[21] = tmp19;
        cResult[22] = tmp20;
        cResult[23] = tmp26;
        tmp24 = tmp26;
      }
    }
    if (tmp14) {
      const obj6 = { children: renderImage };
      tmp21Result = tmp21(metroImportDefault, obj6);
    } else {
      const obj7 = { source: iconSrc };
      tmp21Result = tmp21(tmp(1199).Icon, obj7);
    }
    cResult[13] = tmp14;
    cResult[14] = iconSrc;
    cResult[15] = renderImage;
    cResult[16] = tmp21Result;
    tmp20 = tmp21Result;
  }
  const items = [containerStyle, null != upload && tmp4.uploadContainer];
  cResult[10] = containerStyle;
  cResult[11] = null != upload && tmp4.uploadContainer;
  cResult[12] = items;
  tmp19 = items;
}) : (function ImageInput(iconSrc) {
  let answerIndex;
  let channelId;
  let emojiSize;
  let image;
  let imageSize;
  let items2;
  let localCreationAnswerId;
  let openExpressionPicker;
  let tmp11;
  let tmp9Result;
  ({ channelId, localCreationAnswerId, image } = iconSrc);
  ({ openExpressionPicker, emojiSize } = iconSrc);
  iconSrc = iconSrc.iconSrc;
  if (emojiSize === undefined) {
    emojiSize = 24;
  }
  ({ imageSize, answerIndex } = iconSrc);
  const openImageInputActionSheet = iconSrc.openImageInputActionSheet;
  let upload;
  const containerStyle = iconSrc.containerStyle;
  const tmp = closure_16();
  const tmp3 = answerIndex(upload[12])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  upload = tmp3.upload;
  const setUploadSize = tmp3.setUploadSize;
  const items = [image, upload, answerIndex];
  const renderImage = tmp3.renderImage;
  const items1 = [setUploadSize];
  const memo = react.useMemo(() => {
    let obj3;
    let emoji;
    if (image != null) {
      emoji = tmp.emoji;
    }
    if (null != emoji) {
      const intl3 = intl5.intl;
      const obj2 = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
      return intl3.formatToPlainString(intl5.t.vcC7Qn, obj2);
    } else if (null != upload) {
      let str = upload.item.filename;
      if (str == null) {
        str = "";
      }
      const intl2 = intl5.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj4 = { imageName: obj3.filterOutUUID(str), answerNumber: answerIndex + 1 };
      const vcC7Qn = intl5.t.vcC7Qn;
      obj3 = PollsUtils;
      return formatToPlainString(vcC7Qn, obj4);
    } else {
      const intl = intl5.intl;
      const obj = { answerNumber: answerIndex + 1 };
      return intl.formatToPlainString(intl5.t.ieNrxk, obj);
    }
  }, items);
  let tmp6 = null != upload;
  const callback = react.useCallback((nativeEvent) => {
    setUploadSize(nativeEvent.nativeEvent.layout.width);
  }, items1);
  if (!tmp6) {
    let emoji;
    if (image != null) {
      emoji = image.emoji;
    }
    tmp6 = null != emoji;
  }
  if (tmp6) {
    openExpressionPicker = openImageInputActionSheet;
  }
  let tmp8;
  if (!tmp6) {
    tmp8 = openImageInputActionSheet;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel: memo, onPress: openExpressionPicker, onLongPress: tmp8, onLayout: tmp11, style: items2, children: tmp9Result };
  tmp11 = undefined;
  const PressableOpacity = image(tmp2[16]).PressableOpacity;
  const tmp10 = image;
  if (null == imageSize) {
    tmp11 = callback;
  }
  items2 = [containerStyle, null != upload && tmp.uploadContainer];
  if (tmp6) {
    let obj2 = { children: renderImage };
    tmp9Result = tmp9(closure_7, obj2);
  } else {
    let obj3 = { source: iconSrc };
    tmp9Result = tmp9(tmp10(tmp2[15]).Icon, obj3);
  }
  return closure_13(PressableOpacity, obj);
});
let result = size.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  let Icon;
  let InputFieldContainer;
  let canRemoveAnswer;
  let closure_10;
  let closure_5;
  let closure_6;
  let error;
  let first;
  let formatToPlainStringResult;
  let inputRef;
  let intl;
  let intl2;
  let intl4;
  let items1;
  let items2;
  let obj10;
  let obj3;
  let obj6;
  let obj9;
  let onSubmitEditing;
  let str;
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({ onAnswerTextChange: _slicedToArray, onAnswerEmojiSelect: react, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  maxLength = undefined;
  function openExpressionPicker() {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      hasOwnProperty.dismiss();
      const obj2 = {
        channel,
        onPressEmoji(arg0) {
            closure_1_4(arg0, index);
          },
        pickerIntention: EmojiIntention.POLLS
      };
      const obj = openEmojiPickerActionSheet;
      const result = obj.openEmojiPickerActionSheet(obj2);
    }
  }
  function handleSaveAltText(description) {
    const obj = UploadAttachmentActionCreatorsDefault;
    const obj2 = { description };
    obj.update(channelId, answer.localCreationAnswerId, DraftType.Poll, obj2);
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = closure_16();
  const localCreationAnswerId = answer.localCreationAnswerId;
  const image = answer.image;
  [first, maxLength] = react.useState(false);
  let tmp8Result = null != error && error.length > 0;
  const items = [tmp.defaultContainer, ];
  let cannotRemove = !canRemoveAnswer;
  const tmp6 = closure_15;
  if (!canRemoveAnswer) {
    cannotRemove = tmp.cannotRemove;
  }
  let obj = { style: items, children: items2 };
  items[1] = cannotRemove;
  let obj2 = { style: tmp.inputContainer, children: tmp5(InputFieldContainer, obj3) };
  obj3 = { isFocused: first, status: str, children: items1 };
  str = "default";
  InputFieldContainer = answer(channelId[19]).InputFieldContainer;
  if (tmp8Result) {
    str = "error";
  }
  items1 = [, ];
  const obj4 = {
    channelId,
    localCreationAnswerId,
    image,
    openExpressionPicker,
    openImageInputActionSheet() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage, openExpressionPicker };
      obj.openLazy(asyncRequire(12232, dependencyMap.paths), unpackModuleId, obj2);
    },
    iconSrc: index(channelId[23]),
    containerStyle: tmp.defaultImageContainer,
    imageSize: 48,
    answerIndex: index
  };
  items1[0] = closure_13(closure_17, obj4);
  const obj5 = {
    ref: inputRef,
    textAlignVertical: "center",
    showTopContainer: false,
    showBorder: false,
    placeholder: intl.string(answer(channelId[13]).t.NNHVlv),
    onChange(text) {
      const obj = { text, index, localCreationAnswerId };
      return _slicedToArray(obj);
    },
    onSubmitEditing,
    onFocus() {
      return closure_10(true);
    },
    onBlur() {
      return closure_10(false);
    },
    blurOnSubmit: false,
    style: tmp.pollAnswerTextInput,
    selectionColor: "ix",
    textContentType: "a",
    accessibilityLabel: intl2.formatToPlainString(answer(channelId[13]).t["3+V8G9"], obj6),
    accessibilityHint: formatToPlainStringResult,
    maxLength,
    returnKeyType: "c",
    required: "Array",
    autoCorrect: "application",
    "aria-invalid": error
  };
  const FormInput = tmp9(tmp10[24]).FormInput;
  intl = tmp9(tmp10[13]).intl;
  intl2 = tmp9(tmp10[13]).intl;
  formatToPlainStringResult = undefined;
  obj6 = { answerNumber: index + 1 };
  if (tmp8Result) {
    const intl3 = tmp9(tmp10[13]).intl;
    const obj7 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp9(tmp10[13]).t.jnq5Ho, obj7);
  }
  items1[1] = closure_13(FormInput, obj5);
  items2 = [closure_13(localCreationAnswerId, obj2), ];
  if (canRemoveAnswer) {
    const obj8 = {
      onPress() {
          return closure_5(index);
        },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer,
      accessibilityLabel: intl4.formatToPlainString(answer(channelId[13]).t["22fjEc"], obj9),
      children: closure_13(Icon, obj10)
    };
    intl4 = tmp9(tmp10[13]).intl;
    obj9 = { answerNumber: index + 1 };
    obj10 = { size: answer(channelId[15]).Icon.Sizes.MEDIUM, source: index(channelId[25]), color: tmp.defaultRemoveButtonContainer.color };
    Icon = tmp9(tmp10[15]).Icon;
    canRemoveAnswer = tmp8(onRemoveAnswerImage, obj8);
  }
  items2[1] = canRemoveAnswer;
  const children = [tmp5(localCreationAnswerId, obj), ];
  if (tmp8Result) {
    const obj11 = { message: error };
    tmp8Result = tmp8(tmp11(tmp10[26]), obj11);
  }
  children[1] = tmp8Result;
  return closure_14(tmp6, { children });
};
