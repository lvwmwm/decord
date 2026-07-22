// Module ID: 9822
// Function ID: 76193
// Name: AddDescription
// Dependencies: []
// Exports: default

// Module 9822 (AddDescription)
function AddDescription(id) {
  let channelId;
  let height;
  let source;
  let width;
  ({ source, channelId } = id);
  const arg1 = channelId;
  id = id.id;
  const importDefault = id;
  let callback;
  let React;
  let navigation;
  const tmp = callback4();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => upload.getUpload(channelId, id, ChannelMessage.ChannelMessage));
  const dependencyMap = stateFromStores;
  ({ width, height } = source);
  let num = 1;
  if (null != width) {
    num = 1;
    if (null != height) {
      num = 1;
      if (0 !== width) {
        num = 1;
        if (0 !== height) {
          num = width / height;
        }
      }
    }
  }
  let description;
  if (null != stateFromStores) {
    description = stateFromStores.description;
  }
  let str = "";
  if (null != description) {
    str = description;
  }
  const tmp6 = callback(React.useState(str), 2);
  const first = tmp6[0];
  callback = first;
  React = React.useRef(first);
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  let obj1 = arg1(dependencyMap[10]);
  navigation = obj1.useNavigation();
  const insets = importDefault(dependencyMap[11])({ includeKeyboardHeight: true }).insets;
  const items1 = [{ ref, offset: { type: "toBottom" } }];
  importDefault(dependencyMap[12])({ insets, inputs: items1, scrollViewRef: ref1 });
  const items2 = [first];
  const effect = React.useEffect(() => {
    closure_4.current = first;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = React.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = callback(closure_2[13]);
        const intl = callback(closure_2[14]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(callback(closure_2[14]).t.R3BPH+), () => {
          let obj = callback(closure_2[15]);
          obj = {};
          const merged = Object.assign(closure_2);
          obj["description"] = ref.current;
          obj.update(closure_0, callback, ChannelMessage.ChannelMessage, obj);
          callback(closure_2[16]).close();
        });
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
  }, items3);
  obj = { ref: ref1, style: tmp.contentContainer };
  obj = { padding: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: insets.bottom + importDefault(dependencyMap[7]).space.PX_16 };
  obj.contentContainerStyle = obj;
  obj1 = { style: tmp.imageContainer, children: callback2(closure_6, { style: items4, source }) };
  const items4 = [tmp.image, ];
  const obj2 = { aspectRatio: num, maxHeight: importDefault(dependencyMap[9])({ ignoreKeyboard: true }).height / 2 };
  items4[1] = obj2;
  const items5 = [callback2(navigation, obj1), ];
  const obj3 = { ref };
  const obj4 = { paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
  obj3.containerStyle = obj4;
  const intl = arg1(dependencyMap[14]).intl;
  obj3.label = intl.string(arg1(dependencyMap[14]).t.eOB2eR);
  const intl2 = arg1(dependencyMap[14]).intl;
  obj3.placeholder = intl2.string(arg1(dependencyMap[14]).t.RNH1jn);
  obj3.value = first;
  obj3.onChange = tmp6[1];
  obj3.placeholderTextColor = tmp.placeholderText.color;
  obj3.maxLength = 1000;
  obj3.autoFocus = true;
  items5[1] = callback2(arg1(dependencyMap[17]).TextArea, obj3);
  obj.children = items5;
  return callback3(closure_7, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
const DraftType = arg1(dependencyMap[3]).DraftType;
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.contentContainer = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.imageContainer = { alignItems: "center", borderRadius: importDefault(dependencyMap[7]).radii.sm };
const obj2 = { width: "isArray", paddingHorizontal: "accessibilityRole", height: undefined, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.image = obj2;
const obj1 = { alignItems: "center", borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.placeholderText = { color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
let closure_12 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default function AddImageDescriptionModal(arg0) {
  ({ source: closure_0, channelId: closure_1, id: closure_2 } = arg0);
  const obj = { screenKey: "addImageDescriptionModal" };
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.5S2AK+);
  obj.render = function render() {
    return callback(closure_13, { source: closure_0, channelId: closure_1, id: closure_2 });
  };
  return callback2(importDefault(dependencyMap[18]), obj);
};
