// Module ID: 16007
// Function ID: 122830
// Name: RedesignAddAvatarModal
// Dependencies: []
// Exports: default

// Module 16007 (RedesignAddAvatarModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const UPLOAD_MEDIUM_SIZE = arg1(dependencyMap[5]).UPLOAD_MEDIUM_SIZE;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { "Bool(true)": false, "Bool(true)": false };
const tmp3 = arg1(dependencyMap[6]);
obj.growContainer = { flexGrow: 2, minHeight: importDefault(dependencyMap[8]).space.PX_24 };
obj.headerContainer = { <string:29557293>: true, <string:45941405>: true };
obj.buttonContainer = { width: "100%" };
const obj1 = { flexGrow: 2, minHeight: importDefault(dependencyMap[8]).space.PX_24 };
obj.title = { marginBottom: importDefault(dependencyMap[8]).space.PX_8, textAlign: "center" };
obj.subtitle = { textAlign: "center" };
const obj2 = { marginBottom: importDefault(dependencyMap[8]).space.PX_8, textAlign: "center" };
obj.errorContainer = { alignSelf: "center", paddingTop: importDefault(dependencyMap[8]).space.PX_24 };
let closure_12 = obj.createStyles(obj);
const obj3 = { alignSelf: "center", paddingTop: importDefault(dependencyMap[8]).space.PX_24 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  const arg1 = route.route.params.onComplete;
  let importDefault;
  let closure_3;
  let callback;
  function _handleSelectAvatar() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = tmp6(tmp);
    const _handleSelectAvatar = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = callback(_handleSelectAvatar.useState(false), 2);
  let first = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = callback(_handleSelectAvatar.useState(), 2);
  const first1 = tmp4[0];
  const dependencyMap = first1;
  closure_3 = tmp6;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != first1) {
    let obj1 = arg1(dependencyMap[11]);
    obj = { imageUri: arg1(dependencyMap[12]).DEFAULT_AVATARS[first1] };
    let obj3 = arg1(dependencyMap[11]);
    obj.description = obj3.generateAvatarDescription();
    pendingImage = obj1.createPendingImage(obj);
  }
  let tmp11 = stateFromStores;
  if (null != pendingImage) {
    tmp11 = pendingImage;
  }
  callback = tmp11;
  let obj4 = arg1(dependencyMap[13]);
  let imageUri;
  if (null != tmp11) {
    imageUri = tmp11.imageUri;
  }
  obj = { style: tmp.container, alwaysBounceVertical: false };
  const items1 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: importDefault(dependencyMap[9])().bottom + importDefault(dependencyMap[8]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
  items1[1] = obj1;
  obj.contentContainerStyle = items1;
  const obj2 = { style: tmp.headerContainer };
  obj3 = {};
  obj4 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[18]).intl;
  obj4.children = intl.string(arg1(dependencyMap[18]).t.XQRWvR);
  const items2 = [callback2(arg1(dependencyMap[17]).Text, obj4), ];
  const obj5 = { style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[18]).t.fH9TLT);
  items2[1] = callback2(arg1(dependencyMap[17]).Text, obj5);
  obj3.children = items2;
  const items3 = [callback3(closure_6, obj3), , ];
  const obj6 = {
    avatarSource: obj4.memoizedImageSource(imageUri),
    showPendingAvatar: null != tmp11,
    onSelectAvatar: function handleSelectAvatar() {
      return _handleSelectAvatar(...arguments);
    }
  };
  items3[1] = callback2(importDefault(dependencyMap[19]), obj6);
  const obj7 = { style: tmp.errorContainer };
  if (first) {
    const obj8 = { hasMaxConnections: 1, isBoostOnlySubscription: "center" };
    const intl3 = arg1(dependencyMap[18]).intl;
    obj8.children = intl3.string(arg1(dependencyMap[18]).t.XyLlVm);
    first = callback2(arg1(dependencyMap[17]).Text, obj8);
  }
  obj7.children = first;
  items3[2] = callback2(closure_6, obj7);
  obj2.children = items3;
  const items4 = [callback3(closure_6, obj2), callback2(importDefault(dependencyMap[12]), { onAvatarSelect: tmp4[1], selectedAvatar: first1 }), callback2(closure_6, { style: tmp.growContainer }), ];
  const obj10 = { style: tmp.buttonContainer };
  const obj11 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
  const intl4 = arg1(dependencyMap[18]).intl;
  obj11.text = intl4.string(arg1(dependencyMap[18]).t.PDTjLN);
  obj11.onPress = function onPress() {
    return onComplete(first1[21]).handlePressNext(tmp11, first1, null != onComplete ? onComplete : () => {

    });
  };
  obj11.disabled = null == tmp11;
  obj10.children = callback2(arg1(dependencyMap[20]).Button, obj11);
  items4[3] = callback2(closure_6, obj10);
  obj.children = items4;
  return callback3(closure_7, obj);
};
