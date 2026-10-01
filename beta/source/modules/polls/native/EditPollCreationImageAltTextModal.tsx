// Module ID: 11711
// Function ID: 11712
// Name: EditPollCreationImageAltTextModal
// Dependencies: [32, 19, 17, 7248, 21, 4836, 576, 11708, 11710, 6544, 1115, 1177, 6413, 4832, 5890, 9271, 8053, 2]
// Exports: default

// Module 11711 (EditPollCreationImageAltTextModal)
import nativeDefault from "native" /* 576 */;
import PollsConstants from "PollsConstants" /* 7248 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 11710 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
const MAX_POLL_ANSWER_LENGTH = PollsConstants.MAX_POLL_ANSWER_LENGTH;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 }, separator: obj3, contentContainer: { flex: 1, justifyContent: "center" }, imageContainer: obj4, formContainer: { paddingHorizontal: 16 }, textInput: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj4 = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
obj5 = { backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default function EditPollCreationImageAltTextModal(imageSize) {
  let Icon;
  let Text2;
  let answer;
  let channelId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj5;
  let obj8;
  let onSave;
  let tmp7;
  let value;
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  value = undefined;
  const tmp = closure_10();
  const tmp4 = value(11708)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  const upload = tmp4.upload;
  let obj = react;
  let str;
  const renderImage = tmp4.renderImage;
  const useState = react.useState;
  if (upload != null) {
    str = upload.description;
  }
  if (str == null) {
    str = "";
  }
  [value, tmp7] = useState(str);
  const items = [onSave, value];
  const callback = obj.useCallback(() => {
    if (null != first) {
      onSave(tmp);
    }
    const obj = EditPollCreationImageAltTextModalActionCreators;
    const result = obj.closeEditPollCreationImageAltTextModal();
  }, items);
  const obj2 = { top: true, style: tmp.container, children: items2 };
  const obj3 = { style: tmp.header, children: items1 };
  const obj4 = { onPress: onSave(11710).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: intl.string(onSave(1115).t.cpT0Cq), children: closure_8(Icon, obj5) };
  const SafeAreaPaddingView = onSave(6544).SafeAreaPaddingView;
  intl = onSave(1115).intl;
  obj5 = { source: value(6413) };
  Icon = onSave(1177).Icon;
  items1 = [closure_8(closure_5, obj4), , ];
  const obj6 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl2.string(onSave(1115).t.Cq44Rg) };
  const Text = onSave(4832).Text;
  intl2 = onSave(1115).intl;
  items1[1] = closure_8(Text, obj6);
  const obj7 = { onPress: callback, activeOpacity: 0.5, children: closure_8(Text2, obj8) };
  obj8 = { variant: "text-md/medium", color: "text-brand", children: intl3.string(onSave(1115).t["R3BPH+"]) };
  Text2 = onSave(4832).Text;
  intl3 = onSave(1115).intl;
  items1[2] = closure_8(closure_5, obj7);
  items2 = [closure_9(closure_6, obj3), , ];
  const obj9 = { style: tmp.separator };
  items2[1] = closure_8(closure_6, obj9);
  const obj10 = { style: tmp.contentContainer, children: items3 };
  items3 = [, ];
  const obj11 = { style: tmp.imageContainer, children: renderImage };
  const tmp2Result = value(5890);
  items3[0] = closure_8(closure_6, obj11);
  const obj12 = { style: tmp.formContainer, children: items4 };
  items4 = [closure_8(onSave(1177).Spacer, { size: 27 }), , , ];
  const obj13 = { children: intl4.string(onSave(1115).t["/2Gnoa"]) };
  const tmp2Result2 = value(9271);
  intl4 = onSave(1115).intl;
  items4[1] = closure_8(tmp2Result2, obj13);
  const obj14 = { showTopContainer: false, showBorder: false, multiline: false, value, onChange: tmp7, clearButtonVisibility: onSave(1177).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true, accessibilityLabel: intl5.string(onSave(1115).t["/2Gnoa"]) };
  const FormInput = onSave(8053).FormInput;
  intl5 = onSave(1115).intl;
  items4[2] = closure_8(FormInput, obj14);
  items4[3] = closure_8(onSave(1177).Spacer, { size: 27 });
  items3[1] = closure_9(closure_6, obj12);
  items2[2] = closure_9(tmp2Result, obj10);
  return closure_9(SafeAreaPaddingView, obj2);
};
