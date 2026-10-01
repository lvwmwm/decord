// Module ID: 10810
// Function ID: 10811
// Name: AddImageDescriptionModal
// Dependencies: [32, 19, 17, 5200, 5199, 21, 4836, 576, 504, 1479, 1485, 6402, 10608, 7288, 1115, 8608, 10809, 6506, 10385, 2]
// Exports: default

// Module 10810 (AddImageDescriptionModal)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import DraftStore from "DraftStore" /* 5200 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10385 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let ChannelMessage, navigation;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
function AddDescription(id) {
  let channelId;
  let closure_4;
  let first;
  let height;
  let intl;
  let intl2;
  let items1;
  let items4;
  let items5;
  let obj7;
  let obj9;
  let source;
  let width;
  ({ source, channelId } = id);
  id = id.id;
  let stateFromStores;
  let value;
  react = undefined;
  navigation = undefined;
  let tmp = closure_12();
  let obj = channelId(stateFromStores[8]);
  const items = [UploadAttachmentStore];
  stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage));
  ({ width, height } = source);
  let num = 1;
  const tmp6 = id(stateFromStores[9])({ ignoreKeyboard: true });
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
  let obj2 = react;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = value(useState(str), 2);
  value = tmp7[0];
  const tmp9 = tmp7[1];
  react = obj2.useRef(value);
  const ref = obj2.useRef(null);
  const ref1 = obj2.useRef(null);
  const tmp2Result = channelId(stateFromStores[10]);
  navigation = tmp2Result.useNavigation();
  const insets = tmp5(tmp3[11])({ includeKeyboardHeight: true }).insets;
  const obj3 = { insets, inputs: items1, scrollViewRef: ref1 };
  items1 = [{ ref, offset: { type: "toBottom" } }];
  id(stateFromStores[12])(obj3);
  const items2 = [value];
  const effect = obj2.useEffect(() => {
    closure_4.current = current;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = obj2.useEffect(() => {
    let obj = {
      headerRight(arg0) {
        let ref;
        const tmp = channelId(stateFromStores[13]);
        const getRenderHeaderTextButton = tmp.getRenderHeaderTextButton;
        const intl = channelId(stateFromStores[14]).intl;
        let obj = {};
        const renderHeaderTextButton = getRenderHeaderTextButton(intl.string(channelId(stateFromStores[14]).t["R3BPH+"]), () => {
          const obj = { description: ref.current };
          const update = id(stateFromStores[15]).update;
          ChannelMessage = ChannelMessage.ChannelMessage;
          id(stateFromStores[15]);
          const merged = Object.assign(closure_1_2);
          update(closure_1_0, closure_1_1, ChannelMessage, obj);
          const obj2 = id(stateFromStores[16]);
          obj2.close();
        });
        let merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    };
    navigation.setOptions(obj);
  }, items3);
  const obj4 = { ref: ref1, style: tmp.contentContainer, contentContainerStyle: { padding: id(stateFromStores[7]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[7]).space.PX_16 }, children: items5 };
  const obj6 = { style: tmp.imageContainer, children: closure_10(closure_6, obj7) };
  obj7 = { style: items4, source };
  items4 = [tmp.image, { aspectRatio: num, maxHeight: tmp6.height / 2 }];
  ({ padding: id(stateFromStores[7]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[7]).space.PX_16 });
  items5 = [closure_10(navigation, obj6), ];
  const obj8 = { ref, containerStyle: obj9, label: intl.string(channelId(stateFromStores[14]).t.eOB2eR), placeholder: intl2.string(channelId(stateFromStores[14]).t.RNH1jn), value, onChange: tmp9, placeholderTextColor: tmp.placeholderText.color, maxLength: 1000, autoFocus: true };
  obj9 = { paddingTop: id(stateFromStores[7]).space.PX_16 };
  const TextArea = tmp2(tmp3[17]).TextArea;
  intl = tmp2(tmp3[14]).intl;
  intl2 = tmp2(tmp3[14]).intl;
  items5[1] = closure_10(TextArea, obj8);
  return closure_11(closure_7, obj4);
}
let react = react_mod;
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
const DraftType = DraftStore.DraftType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, imageContainer: obj3, image: size, placeholderText: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", borderRadius: nativeDefault.radii.sm };
size = { width: "100%", resizeMode: "contain", height: "Array", borderRadius: nativeDefault.radii.sm };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default function AddImageDescriptionModal(arg0) {
  let channelId;
  let id;
  let intl;
  let source;
  ({ source: require, channelId: importDefault, id: dependencyMap } = arg0);
  let obj = {
    screenKey: "addImageDescriptionModal",
    title: intl.string(intl3.t["5S2AK+"]),
    render() {
      const obj = { source: require, channelId: importDefault, id: dependencyMap };
      return authStore(AddDescription, obj);
    }
  };
  const tmp = ModalStackNavigatorDefault;
  intl = intl3.intl;
  return closure_10(tmp, obj);
};
