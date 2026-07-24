// Module ID: 16179
// Function ID: 125369
// Name: RedesignAddAvatarModal
// Dependencies: [5, 57, 31, 27, 7930, 653, 33, 4130, 689, 1557, 566, 7943, 16164, 7971, 4674, 7933, 7935, 4126, 1212, 16173, 4543, 16161, 2]
// Exports: default

// Module 16179 (RedesignAddAvatarModal)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { flexGrow: 2, alignItems: "center" };
_createForOfIteratorHelperLoose.growContainer = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.headerContainer = { display: "flex", alignItems: "center" };
_createForOfIteratorHelperLoose.buttonContainer = { width: "100%" };
let obj1 = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.title = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.errorContainer = { alignSelf: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { alignSelf: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("result").fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  const onComplete = route.route.params.onComplete;
  let importDefault;
  let c3;
  let callback;
  function _handleSelectAvatar() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(_handleSelectAvatar.useState(false), 2);
  let first = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = callback(_handleSelectAvatar.useState(), 2);
  const first1 = tmp4[0];
  c3 = tmp6;
  let obj = onComplete(first1[10]);
  const items = [_isNativeReflectConstruct];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getPendingChanges().pendingAvatar);
  if (null != first1) {
    let obj1 = onComplete(first1[11]);
    obj = { imageUri: onComplete(first1[12]).DEFAULT_AVATARS[first1] };
    let obj3 = onComplete(first1[11]);
    obj.description = obj3.generateAvatarDescription();
    pendingImage = obj1.createPendingImage(obj);
  }
  let tmp11 = stateFromStores;
  if (null != pendingImage) {
    tmp11 = pendingImage;
  }
  callback = tmp11;
  let obj4 = onComplete(first1[13]);
  let imageUri;
  if (null != tmp11) {
    imageUri = tmp11.imageUri;
  }
  obj = { style: tmp.container, alwaysBounceVertical: false };
  const items1 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: importDefault(first1[9])().bottom + importDefault(first1[8]).space.PX_16, paddingHorizontal: importDefault(first1[8]).space.PX_16 };
  items1[1] = obj1;
  obj.contentContainerStyle = items1;
  const obj2 = { style: tmp.headerContainer };
  obj3 = {};
  obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = onComplete(first1[18]).intl;
  obj4.children = intl.string(onComplete(first1[18]).t.XQRWvR);
  const items2 = [callback2(onComplete(first1[17]).Text, obj4), ];
  const obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default" };
  const intl2 = onComplete(first1[18]).intl;
  obj5.children = intl2.string(onComplete(first1[18]).t.fH9TLT);
  items2[1] = callback2(onComplete(first1[17]).Text, obj5);
  obj3.children = items2;
  const items3 = [callback3(closure_6, obj3), , ];
  const obj6 = {
    avatarSource: obj4.memoizedImageSource(imageUri),
    showPendingAvatar: null != tmp11,
    onSelectAvatar: function handleSelectAvatar() {
      return _handleSelectAvatar(...arguments);
    }
  };
  items3[1] = callback2(importDefault(first1[19]), obj6);
  const obj7 = { style: tmp.errorContainer };
  if (first) {
    const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical" };
    const intl3 = onComplete(first1[18]).intl;
    obj8.children = intl3.string(onComplete(first1[18]).t.XyLlVm);
    first = callback2(onComplete(first1[17]).Text, obj8);
  }
  obj7.children = first;
  items3[2] = callback2(closure_6, obj7);
  obj2.children = items3;
  const items4 = [callback3(closure_6, obj2), callback2(importDefault(first1[12]), { onAvatarSelect: tmp4[1], selectedAvatar: first1 }), callback2(closure_6, { style: tmp.growContainer }), ];
  const obj10 = { style: tmp.buttonContainer };
  const obj11 = { variant: "primary", size: "lg" };
  const intl4 = onComplete(first1[18]).intl;
  obj11.text = intl4.string(onComplete(first1[18]).t.PDTjLN);
  obj11.onPress = function onPress() {
    return onComplete(first1[21]).handlePressNext(c4, first1, null != onComplete ? onComplete : (() => {

    }));
  };
  obj11.disabled = null == tmp11;
  obj10.children = callback2(onComplete(first1[20]).Button, obj11);
  items4[3] = callback2(closure_6, obj10);
  obj.children = items4;
  return callback3(closure_7, obj);
};
