// Module ID: 14438
// Function ID: 14439
// Name: AddImageDescriptionModal
// Dependencies: [32, 19, 17, 7689, 8347, 14439, 21, 5005, 587, 558, 576, 504, 1497, 1503, 5630, 11162, 9765, 1125, 9731, 14437, 7240, 10096, 2]

// Module 14438 (AddImageDescriptionModal)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import DraftStore from "DraftStore" /* 7689 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10096 */;
import AttachmentConstants from "AttachmentConstants" /* 14439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8347 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ChannelMessage, navigation;

let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
const DraftType = DraftStore.DraftType;
const maxLength = AttachmentConstants.MAX_ATTACHMENT_DESCRIPTION_LENGTH;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, imageContainer: obj3, image: size, placeholderText: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", borderRadius: nativeDefault.radii.sm };
size = { width: "100%", resizeMode: "contain", height: "Array", borderRadius: nativeDefault.radii.sm };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddDescription(id) {
  let channelId;
  let closure_4;
  let first;
  let first1;
  let height;
  let source;
  let stateFromStores;
  let width;
  let tmp = channelId;
  let obj = channelId(stateFromStores[10]);
  const cResult = obj.c(45);
  ({ source, channelId } = id);
  id = id.id;
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let tmp9;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp24;
    let tmp23;
    if (cResult[2] === id) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(stateFromStores[11]);
    stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { ignoreKeyboard: true };
      cResult[4] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    ({ width, height } = source);
    id(stateFromStores[12])(tmp9);
    let str;
    const useState = react.useState;
    if (stateFromStores != null) {
      str = stateFromStores.description;
    }
    if (str == null) {
      str = "";
    }
    class R {
      constructor() {
        return UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
      }
    }
    const tmp13 = first1(useState(str), 2);
    first1 = tmp13[0];
    react = obj4.useRef(first1);
    const ref = obj4.useRef(null);
    const ref1 = react.useRef(null);
    const tmpResult2 = tmp(stateFromStores[13]);
    navigation = tmpResult2.useNavigation();
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { includeKeyboardHeight: true };
      cResult[5] = obj3;
      tmp19 = obj3;
    } else {
      tmp19 = cResult[5];
    }
    const insets = tmp10(tmp2[14])(tmp19).insets;
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [{ ref, offset: { type: "toBottom" } }];
      const obj5 = { ref, offset: { type: "toBottom" } };
      cResult[6] = items1;
      tmp20 = items1;
    } else {
      tmp20 = cResult[6];
    }
    if (cResult[7] !== insets) {
      const obj6 = { insets, inputs: tmp20, scrollViewRef: ref1 };
      cResult[7] = insets;
      cResult[8] = obj6;
      tmp21 = obj6;
    } else {
      tmp21 = cResult[8];
    }
    id(stateFromStores[15])(tmp21);
    if (cResult[9] !== first1) {
      class V {
        constructor() {
          closure_4.current = first1;
        }
      }
      const items2 = [first1];
      cResult[9] = first1;
      cResult[10] = V;
      cResult[11] = items2;
      tmp24 = items2;
      tmp23 = V;
    } else {
      class V {
        constructor() {
          closure_4.current = first1;
        }
      }
      tmp24 = cResult[11];
    }
    const effect = obj4.useEffect(tmp23, tmp24);
    if (cResult[12] === channelId) {
      class V {
        constructor() {
          closure_4.current = first1;
        }
      }
    }
    const fn = function z() {
      let obj = {
        headerRight(arg0) {
          let ref;
          const tmp = channelId(stateFromStores[16]);
          const getRenderHeaderTextButton = tmp.getRenderHeaderTextButton;
          const intl = channelId(stateFromStores[17]).intl;
          let obj = {};
          const renderHeaderTextButton = getRenderHeaderTextButton(intl.string(channelId(stateFromStores[17]).t["R3BPH+"]), () => {
            const obj = { description: ref.current };
            const update = id(stateFromStores[18]).update;
            ChannelMessage = ChannelMessage.ChannelMessage;
            id(stateFromStores[18]);
            const merged = Object.assign(closure_1_2);
            update(closure_1_0, closure_1_1, ChannelMessage, obj);
            const obj2 = id(stateFromStores[19]);
            obj2.close();
          });
          let merged = Object.assign(arg0);
          return renderHeaderTextButton(obj);
        }
      };
      navigation.setOptions(obj);
    };
    const items3 = [channelId, id, stateFromStores, navigation];
    cResult[12] = channelId;
    cResult[13] = id;
    cResult[14] = navigation;
    cResult[15] = stateFromStores;
    cResult[16] = items3;
    cResult[17] = fn;
  }
  class R {
    constructor() {
      return UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
    }
  }
  cResult[1] = channelId;
  cResult[2] = id;
  cResult[3] = R;
  tmp7 = R;
}) : (function AddDescription(id) {
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
  let tmp = closure_13();
  let obj = channelId(stateFromStores[11]);
  const items = [UploadAttachmentStore];
  stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage));
  ({ width, height } = source);
  let num = 1;
  const tmp6 = id(stateFromStores[12])({ ignoreKeyboard: true });
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
  const tmp2Result = channelId(stateFromStores[13]);
  navigation = tmp2Result.useNavigation();
  const insets = tmp5(tmp3[14])({ includeKeyboardHeight: true }).insets;
  const obj3 = { insets, inputs: items1, scrollViewRef: ref1 };
  items1 = [{ ref, offset: { type: "toBottom" } }];
  id(stateFromStores[15])(obj3);
  const items2 = [value];
  const effect = obj2.useEffect(() => {
    closure_4.current = current;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = obj2.useEffect(() => {
    let obj = {
      headerRight(arg0) {
        let ref;
        const tmp = channelId(stateFromStores[16]);
        const getRenderHeaderTextButton = tmp.getRenderHeaderTextButton;
        const intl = channelId(stateFromStores[17]).intl;
        let obj = {};
        const renderHeaderTextButton = getRenderHeaderTextButton(intl.string(channelId(stateFromStores[17]).t["R3BPH+"]), () => {
          const obj = { description: ref.current };
          const update = id(stateFromStores[18]).update;
          ChannelMessage = ChannelMessage.ChannelMessage;
          id(stateFromStores[18]);
          const merged = Object.assign(closure_1_2);
          update(closure_1_0, closure_1_1, ChannelMessage, obj);
          const obj2 = id(stateFromStores[19]);
          obj2.close();
        });
        let merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    };
    navigation.setOptions(obj);
  }, items3);
  const obj4 = { ref: ref1, style: tmp.contentContainer, contentContainerStyle: { padding: id(stateFromStores[8]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[8]).space.PX_16 }, children: items5 };
  const obj6 = { style: tmp.imageContainer, children: closure_11(closure_6, obj7) };
  obj7 = { style: items4, source: { uri: source.uri } };
  items4 = [tmp.image, { aspectRatio: num, maxHeight: tmp6.height / 2 }];
  ({ padding: id(stateFromStores[8]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[8]).space.PX_16 });
  items5 = [closure_11(navigation, obj6), ];
  const obj8 = { ref, containerStyle: obj9, label: intl.string(channelId(stateFromStores[17]).t.eOB2eR), placeholder: intl2.string(channelId(stateFromStores[17]).t.RNH1jn), value, onChange: tmp9, placeholderTextColor: tmp.placeholderText.color, maxLength, autoFocus: true };
  obj9 = { paddingTop: id(stateFromStores[8]).space.PX_16 };
  const TextArea = tmp2(tmp3[20]).TextArea;
  intl = tmp2(tmp3[17]).intl;
  intl2 = tmp2(tmp3[17]).intl;
  items5[1] = closure_11(TextArea, obj8);
  return closure_12(closure_7, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddImageDescriptionModal(source) {
  let first;
  let id;
  let obj = source(id[10]);
  const cResult = obj.c(5);
  source = source.source;
  const channelId = source.channelId;
  id = source.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[17]).intl;
    const stringResult = intl.string(source(id[17]).t["5S2AK+"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === id) {
      let tmp6;
      if (cResult[3] === source) {
        tmp6 = cResult[4];
      }
      return tmp6;
    }
  }
  const obj2 = {
    screenKey: "addImageDescriptionModal",
    title: first,
    render() {
      const obj = { source, channelId, id };
      return unpackModuleId(closure_14, obj);
    }
  };
  const tmp7 = closure_11(channelId(id[21]), obj2);
  cResult[1] = channelId;
  cResult[2] = id;
  cResult[3] = source;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function AddImageDescriptionModal(arg0) {
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
      return unpackModuleId(closure_14, obj);
    }
  };
  const tmp = ModalStackNavigatorDefault;
  intl = intl3.intl;
  return closure_11(tmp, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default tmp5;
