// Module ID: 11320
// Function ID: 88085
// Name: ImageInput
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0]
// Exports: default

// Module 11320 (ImageInput)
import closure_3 from "result";
import result from "result";
import closure_7 from "result";
import { DraftType } from "result";
import result from "result";
import { EmojiIntention } from "result";
import result from "result";
import result from "result";
import result from "result";

function ImageInput(openImageInputActionSheet) {
  let answerIndex;
  let channelId;
  let emojiSize;
  let image;
  let imageSize;
  let localCreationAnswerId;
  let openExpressionPicker;
  ({ channelId, localCreationAnswerId, image } = openImageInputActionSheet);
  const arg1 = image;
  ({ openExpressionPicker, emojiSize } = openImageInputActionSheet);
  if (emojiSize === undefined) {
    emojiSize = 24;
  }
  ({ imageSize, answerIndex } = openImageInputActionSheet);
  const importDefault = answerIndex;
  openImageInputActionSheet = openImageInputActionSheet.openImageInputActionSheet;
  let dependencyMap;
  let React;
  const tmp2 = importDefault(dependencyMap[9])(channelId, localCreationAnswerId, image, imageSize, emojiSize);
  const upload = tmp2.upload;
  dependencyMap = upload;
  const setUploadSize = tmp2.setUploadSize;
  React = setUploadSize;
  const items = [image, upload, answerIndex];
  const items1 = [setUploadSize];
  const memo = React.useMemo(() => {
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
  const callback = React.useCallback((nativeEvent) => {
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
  const items2 = [openImageInputActionSheet.containerStyle, null != upload && result().uploadContainer];
  obj.style = items2;
  if (tmp5) {
    obj = { children: tmp2.renderImage };
    let tmp10Result = tmp10(closure_6, obj);
  } else {
    obj = { source: openImageInputActionSheet.iconSrc };
    tmp10Result = tmp10(arg1(dependencyMap[13]).Icon, obj);
  }
  obj.children = tmp10Result;
  return closure_12(arg1(dependencyMap[12]).PressableOpacity, obj);
}
({ Keyboard: closure_4, TouchableOpacity: closure_5, View: closure_6 } = result);
({ MAX_POLL_ANSWER_LENGTH: closure_9, POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY: closure_10 } = result);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = result);
result = { defaultContainer: { "Null": 7, "Null": 370 } };
result = { backgroundColor: require("result").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("result").radii.lg };
result.defaultImageAndTextContainer = result;
result.cannotRemove = { marginRight: 30 };
result.defaultImageContainer = {};
result.pollAnswerTextInput = { end: null, apply: null };
const obj1 = { "Null": -1141243901, "Null": -1141178365, "Null": -1141112829, color: require("result").colors.TEXT_MUTED };
result.defaultRemoveButtonContainer = obj1;
result.uploadContainer = { alignItems: "flex-start" };
result.errorInput = { borderColor: require("result").colors.BORDER_FEEDBACK_CRITICAL, borderWidth: 2 };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/polls/native/PollAnswerInput.tsx");

export default function PollAnswerInput(answer) {
  let canRemoveAnswer;
  let error;
  let inputRef;
  let onSubmitEditing;
  answer = answer.answer;
  const arg1 = answer;
  const index = answer.index;
  const importDefault = index;
  const channelId = answer.channelId;
  const dependencyMap = channelId;
  ({ onAnswerTextChange: closure_3, onAnswerEmojiSelect: closure_4, canRemoveAnswer, onRemoveAnswer: closure_5, onRemoveAnswerImage: closure_6, error } = answer);
  function openExpressionPicker() {
    const channel = localCreationAnswerId.getChannel(channelId);
    if (null != channel) {
      closure_4.dismiss();
      let obj = answer(channelId[14]);
      obj = {
        channel,
        onPressEmoji(arg0) {
            callback(arg0, closure_1);
          },
        pickerIntention: constants.POLLS,
        startExpanded: false,
        autoFocus: false
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  }
  const DraftType = openExpressionPicker;
  function handleSaveAltText(description) {
    let obj = index(channelId[15]);
    obj = { description };
    obj.update(channelId, answer.localCreationAnswerId, openExpressionPicker.Poll, obj);
  }
  ({ inputRef, onSubmitEditing } = answer);
  const tmp = result();
  const localCreationAnswerId = answer.localCreationAnswerId;
  let closure_7 = localCreationAnswerId;
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
        obj.openLazy(answer(channelId[18])(channelId[17], channelId.paths), closure_10, obj);
      },
      iconSrc: importDefault(dependencyMap[19]),
      containerStyle: tmp.defaultImageContainer,
      imageSize: 48,
      answerIndex: index
    }),

  ];
  const obj2 = { ref: inputRef };
  const intl = arg1(dependencyMap[10]).intl;
  obj2.placeholder = intl.string(arg1(dependencyMap[10]).t.NNHVlv);
  obj2.onChange = function onChange(text) {
    return callback({ text, index, localCreationAnswerId });
  };
  obj2.onSubmitEditing = onSubmitEditing;
  obj2.blurOnSubmit = false;
  obj2.style = tmp.pollAnswerTextInput;
  obj2.textContentType = "none";
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[10]).t.3+V8G9, { answerNumber: index + 1 });
  let formatToPlainStringResult;
  if (tmp2) {
    const intl3 = arg1(dependencyMap[10]).intl;
    const obj4 = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[10]).t.jnq5Ho, obj4);
  }
  obj2.accessibilityHint = formatToPlainStringResult;
  obj2.maxLength = handleSaveAltText;
  obj2.returnKeyType = "next";
  obj2.required = true;
  obj2.autoCorrect = true;
  obj2.aria-invalid = error;
  items2[1] = callback(arg1(dependencyMap[20]).FormInput, obj2);
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
    const intl4 = arg1(dependencyMap[10]).intl;
    const obj6 = { answerNumber: index + 1 };
    obj5.accessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[10]).t.22fjEc, obj6);
    const obj7 = { size: arg1(dependencyMap[13]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[21]), color: tmp.defaultRemoveButtonContainer.color };
    obj5.children = callback(arg1(dependencyMap[13]).Icon, obj7);
    canRemoveAnswer = callback(closure_5, obj5);
  }
  items3[1] = canRemoveAnswer;
  obj.children = items3;
  const items4 = [closure_13(closure_6, obj), ];
  if (tmp2) {
    const obj8 = { message: error };
    tmp2 = callback(importDefault(dependencyMap[22]), obj8);
  }
  items4[1] = tmp2;
  obj.children = items4;
  return closure_13(closure_14, obj);
};
