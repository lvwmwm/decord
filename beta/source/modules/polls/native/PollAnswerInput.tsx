// Module ID: 11707
// Function ID: 11708
// Name: PollAnswerInput
// Dependencies: [19, 17, 2045, 5200, 7248, 1375, 21, 4836, 576, 11708, 1115, 7180, 5435, 1177, 10583, 8608, 4800, 11709, 1981, 8220, 8053, 4791, 11712, 2]
// Exports: default

// Module 11707 (PollAnswerInput)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import DraftStore from "DraftStore" /* 5200 */;
import PollsUtils from "PollsUtils" /* 7180 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8608 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10583 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PollsConstants from "PollsConstants" /* 7248 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
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
  const tmp = closure_15();
  const tmp3 = answerIndex(upload[9])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  upload = tmp3.upload;
  const setUploadSize = tmp3.setUploadSize;
  const items = [image, upload, answerIndex];
  const renderImage = tmp3.renderImage;
  const items1 = [setUploadSize];
  const memo = setUploadSize.useMemo(() => {
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
  const callback = setUploadSize.useCallback((nativeEvent) => {
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
  const PressableOpacity = image(tmp2[12]).PressableOpacity;
  const tmp10 = image;
  if (null == imageSize) {
    tmp11 = callback;
  }
  items2 = [containerStyle, null != upload && tmp.uploadContainer];
  if (tmp6) {
    let obj2 = { children: renderImage };
    tmp9Result = tmp9(closure_6, obj2);
  } else {
    let obj3 = { source: iconSrc };
    tmp9Result = tmp9(tmp10(tmp2[13]).Icon, obj3);
  }
  return closure_12(PressableOpacity, obj);
}
({ Keyboard: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
const DraftType = DraftStore.DraftType;
({ MAX_POLL_ANSWER_LENGTH: c9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: c10 } = PollsConstants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { defaultContainer: { flexDirection: "row", alignItems: "center" }, defaultImageAndTextContainer: obj2, cannotRemove: { marginRight: 30 }, defaultImageContainer: { width: 60, height: 48, justifyContent: "center", alignItems: "center" }, pollAnswerTextInput: { flex: 1, paddingStart: 0 }, defaultRemoveButtonContainer: obj3, uploadContainer: { alignItems: "flex-start" }, errorInput: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, flex: 1, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: 6, height: 48, justifyContent: "center", color: nativeDefault.colors.TEXT_MUTED };
obj4 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  let Icon;
  let canRemoveAnswer;
  let closure_4;
  let closure_5;
  let closure_6;
  let error;
  let formatToPlainStringResult;
  let inputRef;
  let intl;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let obj9;
  let onRemoveAnswerImage;
  let onSubmitEditing;
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({ onAnswerTextChange: react, onAnswerEmojiSelect: closure_4, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  function openExpressionPicker() {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      React3.dismiss();
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
  const tmp = closure_15();
  const localCreationAnswerId = answer.localCreationAnswerId;
  let tmp7Result = null != error;
  const image = answer.image;
  if (tmp7Result) {
    tmp7Result = error.length > 0;
  }
  const items = [tmp.defaultContainer, ];
  let cannotRemove = !canRemoveAnswer;
  const tmp4 = closure_14;
  if (!canRemoveAnswer) {
    cannotRemove = tmp.cannotRemove;
  }
  let obj = { style: items, children: items3 };
  items[1] = cannotRemove;
  const items1 = [tmp.defaultImageAndTextContainer, ];
  let obj2 = { style: items1, children: items2 };
  const tmp6 = tmp7Result && tmp.errorInput;
  items1[1] = tmp6;
  items2 = [, ];
  const obj3 = {
    channelId,
    localCreationAnswerId,
    image,
    openExpressionPicker,
    openImageInputActionSheet() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage, openExpressionPicker };
      obj.openLazy(asyncRequire(11709, dependencyMap.paths), authStore, obj2);
    },
    iconSrc: index(channelId[19]),
    containerStyle: tmp.defaultImageContainer,
    imageSize: 48,
    answerIndex: index
  };
  items2[0] = closure_12(ImageInput, obj3);
  const obj4 = {
    ref: inputRef,
    textAlignVertical: "center",
    showTopContainer: false,
    showBorder: false,
    placeholder: intl.string(answer(channelId[10]).t.NNHVlv),
    onChange(text) {
      const obj = { text, index, localCreationAnswerId };
      return react(obj);
    },
    onSubmitEditing,
    blurOnSubmit: false,
    style: tmp.pollAnswerTextInput,
    textContentType: "none",
    accessibilityLabel: intl2.formatToPlainString(answer(channelId[10]).t["3+V8G9"], obj5),
    accessibilityHint: formatToPlainStringResult,
    maxLength: handleSaveAltText,
    returnKeyType: "next",
    required: true,
    autoCorrect: true,
    "aria-invalid": error
  };
  const FormInput = answer(channelId[20]).FormInput;
  intl = answer(channelId[10]).intl;
  intl2 = answer(channelId[10]).intl;
  formatToPlainStringResult = undefined;
  obj5 = { answerNumber: index + 1 };
  if (tmp7Result) {
    const intl3 = tmp10(tmp9[10]).intl;
    const obj6 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(tmp10(tmp9[10]).t.jnq5Ho, obj6);
  }
  items2[1] = closure_12(FormInput, obj4);
  items3 = [closure_13(tmp5, obj2), ];
  if (canRemoveAnswer) {
    const obj7 = {
      onPress() {
          return closure_5(index);
        },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer,
      accessibilityLabel: intl4.formatToPlainString(answer(channelId[10]).t["22fjEc"], obj8),
      children: closure_12(Icon, obj9)
    };
    intl4 = tmp10(tmp9[10]).intl;
    obj8 = { answerNumber: index + 1 };
    obj9 = { size: answer(channelId[13]).Icon.Sizes.MEDIUM, source: index(channelId[21]), color: tmp.defaultRemoveButtonContainer.color };
    Icon = tmp10(tmp9[13]).Icon;
    canRemoveAnswer = tmp7(closure_5, obj7);
  }
  items3[1] = canRemoveAnswer;
  const children = [closure_13(tmp5, obj), ];
  if (tmp7Result) {
    const obj10 = { message: error };
    tmp7Result = tmp7(tmp8(tmp9[22]), obj10);
  }
  children[1] = tmp7Result;
  return closure_13(tmp4, { children });
};
