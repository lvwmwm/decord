// Module ID: 11324
// Function ID: 88109
// Name: EditPollCreationImageAltTextModal
// Dependencies: []
// Exports: default

// Module 11324 (EditPollCreationImageAltTextModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ TouchableOpacity: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const MAX_POLL_ANSWER_LENGTH = arg1(dependencyMap[3]).MAX_POLL_ANSWER_LENGTH;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj.header = {};
const tmp3 = arg1(dependencyMap[4]);
obj.separator = { borderBottomWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.contentContainer = { "Bool(true)": "values", "Bool(true)": "Array" };
const obj1 = { borderBottomWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.imageContainer = { borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.formContainer = { paddingHorizontal: 16 };
const obj2 = { borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.textInput = { backgroundColor: importDefault(dependencyMap[6]).colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: importDefault(dependencyMap[6]).radii.lg };
let closure_10 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: importDefault(dependencyMap[6]).radii.lg };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default function EditPollCreationImageAltTextModal(imageSize) {
  let answer;
  let channelId;
  let onSave;
  ({ channelId, answer, onSave } = imageSize);
  const arg1 = onSave;
  imageSize = imageSize.imageSize;
  let importDefault;
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[7])(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
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
  const first = tmp5[0];
  importDefault = first;
  const items = [onSave, first];
  const callback = React.useCallback(() => {
    if (null != first) {
      onSave(first);
    }
    const result = onSave(closure_2[8]).closeEditPollCreationImageAltTextModal();
  }, items);
  let obj = { top: true, style: tmp.container };
  obj = { style: tmp.header };
  obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, onPress: arg1(dependencyMap[8]).closeEditPollCreationImageAltTextModal };
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.cpT0Cq);
  const obj1 = { source: importDefault(dependencyMap[12]) };
  obj.children = callback2(arg1(dependencyMap[11]).Icon, obj1);
  const items1 = [callback2(closure_5, obj), , ];
  const obj2 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[10]).t.Cq44Rg);
  items1[1] = callback2(arg1(dependencyMap[13]).Text, obj2);
  const obj3 = { onPress: callback, activeOpacity: 0.5 };
  const obj4 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj4.children = intl3.string(arg1(dependencyMap[10]).t.R3BPH+);
  obj3.children = callback2(arg1(dependencyMap[13]).Text, obj4);
  items1[2] = callback2(closure_5, obj3);
  obj.children = items1;
  const items2 = [callback3(closure_6, obj), callback2(closure_6, { style: tmp.separator }), ];
  const obj6 = { style: tmp.contentContainer };
  const items3 = [callback2(closure_6, { style: tmp.imageContainer, children: tmp2.renderImage }), ];
  const obj8 = { style: tmp.formContainer };
  const items4 = [callback2(arg1(dependencyMap[11]).Spacer, { size: 27 }), , , ];
  const obj9 = {};
  const obj5 = { style: tmp.separator };
  const obj7 = { style: tmp.imageContainer, children: tmp2.renderImage };
  const tmp8 = importDefault(dependencyMap[14]);
  const intl4 = arg1(dependencyMap[10]).intl;
  obj9.children = intl4.string(arg1(dependencyMap[10]).t./2Gnoa);
  items4[1] = callback2(importDefault(dependencyMap[15]), obj9);
  const obj10 = { "Bool(false)": "#ffa813", "Bool(false)": "absolute", "Bool(false)": null, value: first, onChange: tmp5[1], clearButtonVisibility: arg1(dependencyMap[11]).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true };
  const intl5 = arg1(dependencyMap[10]).intl;
  obj10.accessibilityLabel = intl5.string(arg1(dependencyMap[10]).t./2Gnoa);
  items4[2] = callback2(arg1(dependencyMap[16]).FormInput, obj10);
  items4[3] = callback2(arg1(dependencyMap[11]).Spacer, { size: 27 });
  obj8.children = items4;
  items3[1] = callback3(closure_6, obj8);
  obj6.children = items3;
  items2[2] = callback3(tmp8, obj6);
  obj.children = items2;
  return callback3(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
};
