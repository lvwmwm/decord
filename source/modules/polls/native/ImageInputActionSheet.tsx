// Module ID: 11362
// Function ID: 88403
// Name: ImageInputAnswerActionSheet
// Dependencies: [31, 27, 7070, 33, 4130, 689, 11361, 3989, 4098, 5498, 4126, 1273, 5500, 1212, 11363, 2]
// Exports: default

// Module 11362 (ImageInputAnswerActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import { POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY as closure_5 } from "POLL_ATTACHMENT_FOLDER";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { emojiContainer: { flexDirection: "row", alignItems: "center", marginHorizontal: 24 } };
_createForOfIteratorHelperLoose = { marginRight: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.emojiIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("POLL_ATTACHMENT_FOLDER").fileFinishedImporting("modules/polls/native/ImageInputActionSheet.tsx");

export default function ImageInputAnswerActionSheet(channelId) {
  let View;
  let answer;
  let result;
  let closure_5;
  let importDefault;
  channelId = channelId.channelId;
  ({ index: importDefault, answer } = channelId);
  ({ onSaveAltText: result, onRemoveAnswerImage: View, openExpressionPicker: closure_5 } = channelId);
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(answer[6])(channelId, answer.localCreationAnswerId, answer.image, 40, 40);
  const upload = tmp2.upload;
  let tmp3 = null != upload;
  if (!tmp3) {
    const image = answer.image;
    let emoji;
    if (null != image) {
      emoji = image.emoji;
    }
    tmp3 = null != emoji;
  }
  callback = React.useCallback(() => {
    channelId(answer[7]).dismissKeyboard();
    const obj = channelId(answer[7]);
    outer1_1(answer[8]).hideActionSheet(outer1_5);
  }, []);
  let obj = { startExpanded: true };
  let tmp7Result = tmp3;
  if (tmp3) {
    obj = { style: tmp.emojiContainer };
    obj = { style: tmp.emojiIcon, children: tmp2.renderImage };
    const items = [callback(View, obj), ];
    const obj1 = { variant: "text-md/bold", color: "mobile-text-heading-primary" };
    const image2 = answer.image;
    let name;
    if (null != image2) {
      emoji = image2.emoji;
      if (null != emoji) {
        name = emoji.name;
      }
    }
    const _HermesInternal = HermesInternal;
    obj1.children = ":" + name + ":";
    items[1] = callback(channelId(answer[10]).Text, obj1);
    obj.children = items;
    tmp7Result = closure_7(View, obj);
    const tmp7 = closure_7;
    const tmp8 = View;
    const tmp9 = callback;
  }
  const items1 = [tmp7Result, callback(channelId(answer[11]).Spacer, { size: 21 }), ];
  const obj2 = { hasIcons: false };
  const obj3 = {};
  const intl = channelId(answer[13]).intl;
  const string = intl.string;
  const t = channelId(answer[13]).t;
  if (tmp3) {
    let stringResult = string(t.CZeRhU);
  } else {
    stringResult = string(t.dzcU1Q);
  }
  obj3.label = stringResult;
  obj3.onPress = function onPress() {
    callback3();
    callback2();
  };
  const items2 = [callback(channelId(answer[12]).ActionSheetRow, obj3), , ];
  let tmp17 = null;
  if (null != upload) {
    const obj4 = {};
    const intl2 = channelId(answer[13]).intl;
    obj4.label = intl2.string(channelId(answer[13]).t.w7x2t4);
    obj4.onPress = function onPress() {
      callback3();
      let obj = channelId(answer[14]);
      obj = { channelId, answer, index: closure_1, onSave: result, imageSize: 40 };
      const result = obj.openEditPollCreationImageAltTextModal(obj);
    };
    tmp17 = callback(channelId(answer[12]).ActionSheetRow, obj4);
  }
  items2[1] = tmp17;
  let tmp21 = null;
  if (tmp3) {
    const obj5 = {};
    const intl3 = channelId(answer[13]).intl;
    obj5.label = intl3.string(channelId(answer[13]).t.IhMxgu);
    obj5.onPress = function onPress() {
      callback(closure_1);
      callback3();
    };
    tmp21 = callback(channelId(answer[12]).ActionSheetRow, obj5);
  }
  items2[2] = tmp21;
  obj2.children = items2;
  items1[2] = closure_7(channelId(answer[12]).ActionSheetRow.Group, obj2);
  obj.children = items1;
  return closure_7(channelId(answer[9]).ActionSheet, obj);
};
