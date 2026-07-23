// Module ID: 9829
// Function ID: 76234
// Name: AddDescription
// Dependencies: [57, 31, 27, 4468, 4467, 33, 4130, 689, 566, 1450, 1456, 5160, 9830, 9122, 1212, 7938, 9828, 7504, 9112, 2]
// Exports: default

// Module 9829 (AddDescription)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function AddDescription(id) {
  let channelId;
  let height;
  let source;
  let width;
  ({ source, channelId } = id);
  id = id.id;
  let first;
  let React;
  let navigation;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(stateFromStores[8]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.getUpload(channelId, id, outer1_8.ChannelMessage));
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
  const tmp6 = first(React.useState(str), 2);
  first = tmp6[0];
  React = React.useRef(first);
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  let obj1 = channelId(stateFromStores[10]);
  navigation = obj1.useNavigation();
  const insets = id(stateFromStores[11])({ includeKeyboardHeight: true }).insets;
  const items1 = [{ ref, offset: { type: "toBottom" } }];
  id(stateFromStores[12])({ insets, inputs: items1, scrollViewRef: ref1 });
  const items2 = [first];
  const effect = React.useEffect(() => {
    result.current = first;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = React.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = channelId(stateFromStores[13]);
        const intl = channelId(stateFromStores[14]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(channelId(stateFromStores[14]).t["R3BPH+"]), () => {
          let obj = id(stateFromStores[15]);
          obj = {};
          const merged = Object.assign(outer2_2);
          obj["description"] = outer2_4.current;
          obj.update(outer2_0, outer2_1, outer3_8.ChannelMessage, obj);
          id(stateFromStores[16]).close();
        });
        let merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
  }, items3);
  obj = { ref: ref1, style: tmp.contentContainer };
  obj = { padding: id(stateFromStores[7]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[7]).space.PX_16 };
  obj.contentContainerStyle = obj;
  obj1 = { style: tmp.imageContainer, children: callback(closure_6, { style: items4, source }) };
  items4 = [tmp.image, ];
  const obj2 = { aspectRatio: num, maxHeight: id(stateFromStores[9])({ ignoreKeyboard: true }).height / 2 };
  items4[1] = obj2;
  const items5 = [callback(navigation, obj1), ];
  const obj3 = { ref };
  const obj4 = { paddingTop: id(stateFromStores[7]).space.PX_16 };
  obj3.containerStyle = obj4;
  let intl = channelId(stateFromStores[14]).intl;
  obj3.label = intl.string(channelId(stateFromStores[14]).t.eOB2eR);
  const intl2 = channelId(stateFromStores[14]).intl;
  obj3.placeholder = intl2.string(channelId(stateFromStores[14]).t.RNH1jn);
  obj3.value = first;
  obj3.onChange = tmp6[1];
  obj3.placeholderTextColor = tmp.placeholderText.color;
  obj3.maxLength = 1000;
  obj3.autoFocus = true;
  items5[1] = callback(channelId(stateFromStores[17]).TextArea, obj3);
  obj.children = items5;
  return callback2(closure_7, obj);
}
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.imageContainer = { alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj2 = { width: "100%", resizeMode: "contain", height: undefined, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.image = obj2;
let obj1 = { alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.placeholderText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default function AddImageDescriptionModal(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ source: require, channelId: importDefault, id: dependencyMap } = arg0);
  const obj = { screenKey: "addImageDescriptionModal" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["5S2AK+"]);
  obj.render = function render() {
    return outer1_10(outer1_13, { source: closure_0, channelId: closure_1, id: closure_2 });
  };
  return callback(importDefault(9112), obj);
};
