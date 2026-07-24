// Module ID: 11360
// Function ID: 88388
// Name: ImageInput
// Dependencies: [31, 27, 1348, 4468, 7070, 1852, 33, 4130, 689, 11361, 1212, 7002, 4660, 1273, 9362, 8025, 4098, 11362, 1934, 7438, 7636, 4090, 11365, 2]
// Exports: default

// Module 11360 (ImageInput)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_4;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function ImageInput(openImageInputActionSheet) {
  let answerIndex;
  let channelId;
  let emojiSize;
  let image;
  let imageSize;
  let localCreationAnswerId;
  let openExpressionPicker;
  ({ channelId, localCreationAnswerId, image } = openImageInputActionSheet);
  ({ openExpressionPicker, emojiSize } = openImageInputActionSheet);
  if (emojiSize === undefined) {
    emojiSize = 24;
  }
  ({ imageSize, answerIndex } = openImageInputActionSheet);
  openImageInputActionSheet = openImageInputActionSheet.openImageInputActionSheet;
  let upload;
  let setUploadSize;
  const tmp2 = answerIndex(upload[9])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  upload = tmp2.upload;
  setUploadSize = tmp2.setUploadSize;
  const items = [image, upload, answerIndex];
  const items1 = [setUploadSize];
  const memo = setUploadSize.useMemo(() => {
    let emoji;
    if (null != image) {
      emoji = image.emoji;
    }
    if (null != emoji) {
      const intl3 = image(upload[10]).intl;
      let obj = { imageName: image.emoji.name, answerNumber: answerIndex + 1 };
      return intl3.formatToPlainString(image(upload[10]).t.vcC7Qn, obj);
    } else if (null != upload) {
      const filename = upload.item.filename;
      let str = "";
      if (null != filename) {
        str = filename;
      }
      const intl2 = image(upload[10]).intl;
      obj = { imageName: image(upload[11]).filterOutUUID(str), answerNumber: answerIndex + 1 };
      return intl2.formatToPlainString(image(upload[10]).t.vcC7Qn, obj);
    } else {
      const intl = image(upload[10]).intl;
      obj = { answerNumber: answerIndex + 1 };
      return intl.formatToPlainString(image(upload[10]).t.ieNrxk, obj);
    }
  }, items);
  let tmp5 = null != upload;
  const callback = setUploadSize.useCallback((nativeEvent) => {
    setUploadSize(nativeEvent.nativeEvent.layout.width);
  }, items1);
  if (!tmp5) {
    let emoji;
    if (null != image) {
      emoji = image.emoji;
    }
    tmp5 = null != emoji;
  }
  if (tmp5) {
    openExpressionPicker = openImageInputActionSheet;
  }
  let tmp7;
  if (!tmp5) {
    tmp7 = openImageInputActionSheet;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel: memo, onPress: openExpressionPicker, onLongPress: tmp7 };
  let tmp9;
  if (null == imageSize) {
    tmp9 = callback;
  }
  obj.onLayout = tmp9;
  const items2 = [openImageInputActionSheet.containerStyle, null != upload && _createForOfIteratorHelperLoose().uploadContainer];
  obj.style = items2;
  if (tmp5) {
    obj = { children: tmp2.renderImage };
    let tmp10Result = tmp10(closure_6, obj);
  } else {
    obj = { source: openImageInputActionSheet.iconSrc };
    tmp10Result = tmp10(image(upload[13]).Icon, obj);
  }
  obj.children = tmp10Result;
  return closure_12(image(upload[12]).PressableOpacity, obj);
}
({ Keyboard: closure_4, TouchableOpacity: closure_5, View: closure_6 } = get_ActivityIndicator);
({ MAX_POLL_ANSWER_LENGTH: closure_9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: closure_10 } = POLL_ATTACHMENT_FOLDER);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { defaultContainer: { flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flex: 1, overflow: "hidden" };
_createForOfIteratorHelperLoose.defaultImageAndTextContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cannotRemove = { marginRight: 30 };
_createForOfIteratorHelperLoose.defaultImageContainer = { width: 60, height: 48, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.pollAnswerTextInput = { flex: 1, paddingStart: 0 };
const obj1 = { paddingLeft: 6, height: 48, justifyContent: "center", color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.defaultRemoveButtonContainer = obj1;
_createForOfIteratorHelperLoose.uploadContainer = { alignItems: "flex-start" };
_createForOfIteratorHelperLoose.errorInput = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  let canRemoveAnswer;
  let result;
  let closure_4;
  let closure_5;
  let closure_6;
  let error;
  let inputRef;
  let onSubmitEditing;
  answer = answer.answer;
  const index = answer.index;
  const channelId = answer.channelId;
  ({ onAnswerTextChange: result, onAnswerEmojiSelect: closure_4, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  function openExpressionPicker() {
    const channel = localCreationAnswerId.getChannel(channelId);
    if (null != channel) {
      outer1_4.dismiss();
      let obj = answer(channelId[14]);
      obj = {
        channel,
        onPressEmoji(arg0) {
            outer1_4(arg0, outer1_1);
          },
        pickerIntention: outer1_11.POLLS,
        startExpanded: false,
        autoFocus: false
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  }
  function handleSaveAltText(description) {
    let obj = index(channelId[15]);
    obj = { description };
    obj.update(channelId, answer.localCreationAnswerId, openExpressionPicker.Poll, obj);
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = _createForOfIteratorHelperLoose();
  const localCreationAnswerId = answer.localCreationAnswerId;
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = error.length > 0;
  }
  let obj = {};
  obj = {};
  const items = [tmp.defaultContainer, ];
  let cannotRemove = !canRemoveAnswer;
  if (cannotRemove) {
    cannotRemove = tmp.cannotRemove;
  }
  items[1] = cannotRemove;
  obj.style = items;
  obj = {};
  const items1 = [tmp.defaultImageAndTextContainer, ];
  let errorInput = tmp2;
  if (tmp2) {
    errorInput = tmp.errorInput;
  }
  items1[1] = errorInput;
  obj.style = items1;
  const items2 = [
    callback(ImageInput, {
      channelId,
      localCreationAnswerId,
      image: answer.image,
      openExpressionPicker,
      openImageInputActionSheet() {
        let obj = index(channelId[16]);
        obj = { channelId, index, answer, onSaveAltText: handleSaveAltText, onRemoveAnswerImage: closure_6, openExpressionPicker };
        obj.openLazy(answer(channelId[18])(channelId[17], channelId.paths), outer1_10, obj);
      },
      iconSrc: index(channelId[19]),
      containerStyle: tmp.defaultImageContainer,
      imageSize: 48,
      answerIndex: index
    }),

  ];
  const obj2 = { ref: inputRef, textAlignVertical: "center", showTopContainer: false, showBorder: false };
  const intl = answer(channelId[10]).intl;
  obj2.placeholder = intl.string(answer(channelId[10]).t.NNHVlv);
  obj2.onChange = function onChange(text) {
    return callback({ text, index, localCreationAnswerId });
  };
  obj2.onSubmitEditing = onSubmitEditing;
  obj2.blurOnSubmit = false;
  obj2.style = tmp.pollAnswerTextInput;
  obj2.textContentType = "none";
  const intl2 = answer(channelId[10]).intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(answer(channelId[10]).t["3+V8G9"], { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp2) {
    const intl3 = answer(channelId[10]).intl;
    const obj4 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(answer(channelId[10]).t.jnq5Ho, obj4);
  }
  obj2.accessibilityHint = formatToPlainStringResult;
  obj2.maxLength = handleSaveAltText;
  obj2.returnKeyType = "next";
  obj2.required = true;
  obj2.autoCorrect = true;
  obj2["aria-invalid"] = error;
  items2[1] = callback(answer(channelId[20]).FormInput, obj2);
  obj.children = items2;
  const items3 = [closure_13(closure_6, obj), ];
  if (canRemoveAnswer) {
    const obj5 = {
      onPress() {
          return callback2(index);
        },
      accessibilityRole: "button",
      style: tmp.defaultRemoveButtonContainer
    };
    const intl4 = answer(channelId[10]).intl;
    const obj6 = { answerNumber: index + 1 };
    obj5.accessibilityLabel = intl4.formatToPlainString(answer(channelId[10]).t["22fjEc"], obj6);
    const obj7 = { size: answer(channelId[13]).Icon.Sizes.MEDIUM, source: index(channelId[21]), color: tmp.defaultRemoveButtonContainer.color };
    obj5.children = callback(answer(channelId[13]).Icon, obj7);
    canRemoveAnswer = callback(closure_5, obj5);
  }
  items3[1] = canRemoveAnswer;
  obj.children = items3;
  const items4 = [closure_13(closure_6, obj), ];
  if (tmp2) {
    const obj8 = { message: error };
    tmp2 = callback(index(channelId[22]), obj8);
  }
  items4[1] = tmp2;
  obj.children = items4;
  return closure_13(closure_14, obj);
};
