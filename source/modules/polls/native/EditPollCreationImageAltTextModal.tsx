// Module ID: 11364
// Function ID: 88412
// Name: EditPollCreationImageAltTextModal
// Dependencies: [57, 31, 27, 7070, 33, 4130, 689, 11361, 11363, 5121, 1212, 1273, 7696, 4126, 5585, 8521, 7636, 2]
// Exports: default

// Module 11364 (EditPollCreationImageAltTextModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { MAX_POLL_ANSWER_LENGTH } from "POLL_ATTACHMENT_FOLDER";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ TouchableOpacity: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 };
_createForOfIteratorHelperLoose.separator = { borderBottomWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
_createForOfIteratorHelperLoose.contentContainer = { flex: 1, justifyContent: "center" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
_createForOfIteratorHelperLoose.imageContainer = obj2;
_createForOfIteratorHelperLoose.formContainer = { paddingHorizontal: 16 };
let obj1 = { borderBottomWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
_createForOfIteratorHelperLoose.textInput = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default function EditPollCreationImageAltTextModal(imageSize) {
  let answer;
  let channelId;
  let onSave;
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  let first;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(11361)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  const upload = tmp2.upload;
  let description;
  if (null != upload) {
    description = upload.description;
  }
  let str = "";
  if (null != description) {
    str = description;
  }
  const tmp5 = callback(React.useState(str), 2);
  first = tmp5[0];
  const items = [onSave, first];
  callback = React.useCallback(() => {
    if (null != first) {
      onSave(first);
    }
    const result = onSave(outer1_2[8]).closeEditPollCreationImageAltTextModal();
  }, items);
  let obj = { top: true, style: tmp.container };
  obj = { style: tmp.header };
  obj = { onPress: onSave(11363).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button" };
  const intl = onSave(1212).intl;
  obj.accessibilityLabel = intl.string(onSave(1212).t.cpT0Cq);
  const obj1 = { source: first(7696) };
  obj.children = callback2(onSave(1273).Icon, obj1);
  const items1 = [callback2(closure_5, obj), , ];
  const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary" };
  const intl2 = onSave(1212).intl;
  obj2.children = intl2.string(onSave(1212).t.Cq44Rg);
  items1[1] = callback2(onSave(4126).Text, obj2);
  const obj3 = { onPress: callback, activeOpacity: 0.5 };
  const obj4 = { variant: "text-md/medium", color: "text-brand" };
  const intl3 = onSave(1212).intl;
  obj4.children = intl3.string(onSave(1212).t["R3BPH+"]);
  obj3.children = callback2(onSave(4126).Text, obj4);
  items1[2] = callback2(closure_5, obj3);
  obj.children = items1;
  const items2 = [callback3(closure_6, obj), callback2(closure_6, { style: tmp.separator }), ];
  const obj6 = { style: tmp.contentContainer };
  const items3 = [callback2(closure_6, { style: tmp.imageContainer, children: tmp2.renderImage }), ];
  const obj8 = { style: tmp.formContainer };
  const items4 = [callback2(onSave(1273).Spacer, { size: 27 }), , , ];
  const obj9 = {};
  const obj5 = { style: tmp.separator };
  const obj7 = { style: tmp.imageContainer, children: tmp2.renderImage };
  const tmp8 = first(5585);
  const intl4 = onSave(1212).intl;
  obj9.children = intl4.string(onSave(1212).t["/2Gnoa"]);
  items4[1] = callback2(first(8521), obj9);
  const obj10 = { showTopContainer: false, showBorder: false, multiline: false, value: first, onChange: tmp5[1], clearButtonVisibility: onSave(1273).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true };
  const intl5 = onSave(1212).intl;
  obj10.accessibilityLabel = intl5.string(onSave(1212).t["/2Gnoa"]);
  items4[2] = callback2(onSave(7636).FormInput, obj10);
  items4[3] = callback2(onSave(1273).Spacer, { size: 27 });
  obj8.children = items4;
  items3[1] = callback3(closure_6, obj8);
  obj6.children = items3;
  items2[2] = callback3(tmp8, obj6);
  obj.children = items2;
  return callback3(onSave(5121).SafeAreaPaddingView, obj);
};
