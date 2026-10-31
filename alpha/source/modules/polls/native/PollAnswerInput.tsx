// Module ID: 12424
// Function ID: 12425
// Name: PollAnswerInput
// Dependencies: [32, 19, 17, 4863, 7701, 8406, 1386, 21, 5014, 575, 12425, 1113, 8403, 6980, 1187, 9939, 9778, 7097, 5258, 12426, 1994, 9453, 8177, 5739, 12429, 2]
// Exports: default

// Module 12424 (PollAnswerInput)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import DraftStore from "DraftStore" /* 7701 */;
import PollsUtils from "PollsUtils" /* 8403 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9778 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9939 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PollsConstants from "PollsConstants" /* 8406 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
function ImageInput(iconSrc) {
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
  const tmp3 = answerIndex(upload[10])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
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
  const PressableOpacity = image(tmp2[13]).PressableOpacity;
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
    tmp9Result = tmp9(tmp10(tmp2[14]).Icon, obj3);
  }
  return closure_13(PressableOpacity, obj);
}
({ Keyboard: hasOwnProperty, TouchableOpacity: metroRequire, View: metroImportDefault } = react_native);
const DraftType = DraftStore.DraftType;
({ MAX_POLL_ANSWER_LENGTH: c10, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: unpackModuleId } = PollsConstants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let obj = { defaultContainer: { flexDirection: "row", alignItems: "center" }, inputContainer: { flex: 1 }, cannotRemove: { marginRight: 36 }, defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" }, pollAnswerTextInput: { flex: 1, paddingStart: 0 }, defaultRemoveButtonContainer: obj2, uploadContainer: { alignItems: "flex-start" } };
obj2 = { paddingLeft: nativeDefault.space.PX_12, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj);
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
  InputFieldContainer = answer(channelId[17]).InputFieldContainer;
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
      obj.openLazy(asyncRequire(12426, dependencyMap.paths), unpackModuleId, obj2);
    },
    iconSrc: index(channelId[21]),
    containerStyle: tmp.defaultImageContainer,
    imageSize: 48,
    answerIndex: index
  };
  items1[0] = closure_13(ImageInput, obj4);
  const obj5 = {
    ref: inputRef,
    textAlignVertical: "center",
    showTopContainer: false,
    showBorder: false,
    placeholder: intl.string(answer(channelId[11]).t.NNHVlv),
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
    selectionColor: "children",
    textContentType: false,
    accessibilityLabel: intl2.formatToPlainString(answer(channelId[11]).t["3+V8G9"], obj6),
    accessibilityHint: formatToPlainStringResult,
    maxLength,
    returnKeyType: false,
    required: false,
    autoCorrect: false,
    "aria-invalid": error
  };
  const FormInput = tmp9(tmp10[22]).FormInput;
  intl = tmp9(tmp10[11]).intl;
  intl2 = tmp9(tmp10[11]).intl;
  formatToPlainStringResult = undefined;
  obj6 = { answerNumber: index + 1 };
  if (tmp8Result) {
    const intl3 = tmp9(tmp10[11]).intl;
    const obj7 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp9(tmp10[11]).t.jnq5Ho, obj7);
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
      accessibilityLabel: intl4.formatToPlainString(answer(channelId[11]).t["22fjEc"], obj9),
      children: closure_13(Icon, obj10)
    };
    intl4 = tmp9(tmp10[11]).intl;
    obj9 = { answerNumber: index + 1 };
    obj10 = { size: answer(channelId[14]).Icon.Sizes.MEDIUM, source: index(channelId[23]), color: tmp.defaultRemoveButtonContainer.color };
    Icon = tmp9(tmp10[14]).Icon;
    canRemoveAnswer = tmp8(onRemoveAnswerImage, obj8);
  }
  items2[1] = canRemoveAnswer;
  const children = [tmp5(localCreationAnswerId, obj), ];
  if (tmp8Result) {
    const obj11 = { message: error };
    tmp8Result = tmp8(tmp11(tmp10[24]), obj11);
  }
  children[1] = tmp8Result;
  return closure_14(tmp6, { children });
};
