// Module ID: 11152
// Function ID: 86827
// Name: _upload2
// Dependencies: [57, 5, 31, 27, 1348, 4468, 1838, 4349, 653, 33, 4130, 689, 7080, 4711, 4670, 4098, 8027, 8025, 21, 4666, 8026, 7006, 507, 11153, 6691, 6834, 4471, 1212, 566, 5462, 7008, 4674, 5187, 11154, 4126, 4544, 2]
// Exports: default

// Module 11152 (_upload2)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import openImagePickerUnhandled from "openImagePickerUnhandled";
import { View } from "getSystemLocale";
import closure_7 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "ForumPostGrid";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function _upload2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
({ AbortCodes: closure_11, Endpoints: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 16, paddingTop: 24 } };
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginBottom: 32, shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
_createForOfIteratorHelperLoose.post = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.postContent = { marginBottom: 0, padding: 8 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: 32 };
_createForOfIteratorHelperLoose.button = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.buttonMargin = { marginBottom: 10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let result = require("result").fileFinishedImporting("modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx");

export default function AddMediaToOriginalForumPostActionSheet(threadId) {
  let DraftType;
  let tmp10;
  threadId = threadId.threadId;
  const attachments = threadId.attachments;
  const sendMessage = threadId.sendMessage;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = threadId(sendMessage[28]);
  const items = [analyticsLocations];
  const items1 = [threadId];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.getChannel(threadId), items1);
  let obj1 = threadId(sendMessage[28]);
  const items2 = [closure_9];
  const items3 = [stateFromStores];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    return outer1_9.getGuild(guildId);
  }, items3);
  let obj2 = threadId(sendMessage[28]);
  const items4 = [closure_10];
  const items5 = [threadId];
  const stateFromStores2 = obj2.useStateFromStores(items4, () => outer1_10.getMessage(threadId, attachments(sendMessage[18]).castChannelIdAsMessageId(threadId)), items5);
  analyticsLocations = attachments(sendMessage[29])().analyticsLocations;
  const items6 = [stateFromStores, stateFromStores1, stateFromStores2, threadId, attachments, analyticsLocations];
  const items7 = [sendMessage];
  callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        if (null != stateFromStores1) {
          let obj = { added: true };
          const result = threadId(sendMessage[30]).trackForumAddMediaToOriginalPostClicked(obj);
          obj = { threadId, attachments, setIsUploading: _slicedToArray, guild: stateFromStores1, analyticsLocations };
          (function _upload(arg0) {
            return outer2_16(...arguments);
          })(obj);
          const obj2 = threadId(sendMessage[30]);
        }
      }
    }
    obj = attachments(sendMessage[15]);
    obj.hideActionSheet();
  }, items6);
  const callback1 = stateFromStores1.useCallback(() => {
    const result = threadId(sendMessage[30]).trackForumAddMediaToOriginalPostClicked({ added: false });
    const obj = threadId(sendMessage[30]);
    attachments(sendMessage[15]).hideActionSheet();
    sendMessage();
  }, items7);
  [tmp10, DraftType] = callback(stateFromStores1.useState(null), 2);
  const items8 = [attachments];
  const effect = stateFromStores1.useEffect(() => {
    if (null != attachments[0]) {
      const fileInfo = threadId(sendMessage[31]).getFileInfo(attachments[0]);
      fileInfo.then((uri) => outer1_8(uri.uri));
      const obj = threadId(sendMessage[31]);
    }
  }, items8);
  const first1 = attachments[0];
  let item;
  if (null != first1) {
    item = first1.item;
  }
  let tmp14;
  if (null != item) {
    if (null != tmp10) {
      obj = { src: tmp10 };
      ({ width: obj4.width, height: obj4.height } = item);
      obj.spoiler = attachments[0].spoiler;
      obj.alt = attachments[0].description;
      tmp14 = obj;
    }
  }
  obj = { startExpanded: true };
  obj1 = { style: tmp.container };
  obj2 = { pointerEvents: "none", style: tmp.post };
  const obj3 = { threadId, localDeviceMedia: tmp14, style: tmp.postContent };
  obj2.children = callback3(threadId(sendMessage[33]).ForumPostListDisabled, obj3);
  const items9 = [callback3(stateFromStores2, obj2), , , , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = threadId(sendMessage[27]).intl;
  obj4.children = intl.string(threadId(sendMessage[27]).t["+SZF6S"]);
  items9[1] = callback3(threadId(sendMessage[34]).Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-default" };
  const intl2 = threadId(sendMessage[27]).intl;
  obj5.children = intl2.string(threadId(sendMessage[27]).t["0Ycgw5"]);
  items9[2] = callback3(threadId(sendMessage[34]).Text, obj5);
  const obj6 = { style: tmp.buttonMargin };
  const obj7 = { grow: true, variant: "primary" };
  const intl3 = threadId(sendMessage[27]).intl;
  obj7.text = intl3.string(threadId(sendMessage[27]).t.d611xH);
  obj7.pillStyle = tmp.button;
  obj7.onPress = callback;
  obj7.loading = first;
  obj7.disabled = first;
  obj6.children = callback3(threadId(sendMessage[35]).BaseTextButton, obj7);
  items9[3] = callback3(stateFromStores2, obj6);
  const obj8 = { style: tmp.buttonMargin };
  const obj9 = { grow: true, variant: "secondary" };
  const intl4 = threadId(sendMessage[27]).intl;
  obj9.text = intl4.string(threadId(sendMessage[27]).t["8rKVHL"]);
  obj9.pillStyle = tmp.button;
  obj9.onPress = callback1;
  obj9.disabled = first;
  obj8.children = callback3(threadId(sendMessage[35]).BaseTextButton, obj9);
  items9[4] = callback3(stateFromStores2, obj8);
  const obj10 = { grow: true, variant: "secondary" };
  const intl5 = threadId(sendMessage[27]).intl;
  obj10.text = intl5.string(threadId(sendMessage[27]).t["ETE/oC"]);
  obj10.pillStyle = tmp.button;
  obj10.onPress = function onPress() {
    return attachments(sendMessage[15]).hideActionSheet();
  };
  obj10.disabled = first;
  items9[5] = callback3(threadId(sendMessage[35]).BaseTextButton, obj10);
  obj1.children = items9;
  obj.children = callback4(stateFromStores2, obj1);
  return callback3(threadId(sendMessage[32]).BottomSheet, obj);
};
