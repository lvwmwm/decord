// Module ID: 15999
// Function ID: 122775
// Name: AddAvatarScreen
// Dependencies: []

// Module 15999 (AddAvatarScreen)
let Fonts;
let ModalAnimation;
function AddAvatarScreen() {
  function _handleSelectAvatar(closure_5, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = tmp11(tmp);
    const _handleSelectAvatar = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = _handleSelectAvatar(React.useState(false), 2);
  let first = tmp2[0];
  const callback = tmp2[1];
  const tmp4 = _handleSelectAvatar(React.useState(), 2);
  const first1 = tmp4[0];
  const importDefault = first1;
  const dependencyMap = tmp6;
  const bottom = importDefault(dependencyMap[11])().bottom;
  let obj = callback(dependencyMap[12]);
  const items = [closure_7];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != first1) {
    let obj1 = callback(dependencyMap[13]);
    obj = { imageUri: callback(dependencyMap[14]).DEFAULT_AVATARS[first1] };
    let obj3 = callback(dependencyMap[13]);
    obj.description = obj3.generateAvatarDescription();
    pendingImage = obj1.createPendingImage(obj);
  }
  let tmp11 = stateFromStores;
  if (null != pendingImage) {
    tmp11 = pendingImage;
  }
  let closure_3 = tmp11;
  let obj4 = callback(dependencyMap[15]);
  let imageUri;
  if (null != tmp11) {
    imageUri = tmp11.imageUri;
  }
  obj = {};
  const items1 = [tmp.container, ];
  obj1 = {};
  let num3 = 16;
  if (bottom > 0) {
    num3 = bottom;
  }
  obj1.paddingBottom = num3;
  items1[1] = obj1;
  obj.style = items1;
  const obj2 = { style: tmp.headerContainer };
  obj3 = {};
  obj4 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = callback(dependencyMap[20]).intl;
  obj4.children = intl.string(callback(dependencyMap[20]).t.XQRWvR);
  const items2 = [callback2(callback(dependencyMap[19]).Text, obj4), ];
  const obj5 = { style: tmp.subtitle };
  const intl2 = callback(dependencyMap[20]).intl;
  obj5.children = intl2.string(callback(dependencyMap[20]).t.fH9TLT);
  items2[1] = callback2(callback(dependencyMap[19]).Text, obj5);
  obj3.children = items2;
  const items3 = [callback3(View, obj3), , ];
  const obj6 = {
    avatarSource: obj4.memoizedImageSource(imageUri),
    showPendingAvatar: null != tmp11,
    onSelectAvatar: function handleSelectAvatar() {
      return _handleSelectAvatar(...arguments);
    }
  };
  items3[1] = callback2(importDefault(dependencyMap[21]), obj6);
  const obj7 = { style: tmp.errorContainer };
  const obj8 = { style: tmp.errorText };
  if (first) {
    const intl3 = callback(dependencyMap[20]).intl;
    first = intl3.string(callback(dependencyMap[20]).t.XyLlVm);
  }
  obj8.children = first;
  obj7.children = callback2(callback(dependencyMap[22]).LegacyText, obj8);
  items3[2] = callback2(View, obj7);
  obj2.children = items3;
  const items4 = [callback3(View, obj2), callback2(importDefault(dependencyMap[14]), { onAvatarSelect: tmp4[1], selectedAvatar: first1 }), ];
  const obj9 = { style: tmp.buttonContainer };
  const obj10 = {};
  const intl4 = callback(dependencyMap[20]).intl;
  obj10.text = intl4.string(callback(dependencyMap[20]).t.PDTjLN);
  obj10.grow = true;
  obj10.onPress = function onPress() {
    return callback(tmp6[24]).handlePressNext(tmp11, first1);
  };
  obj10.disabled = null == tmp11;
  obj9.children = callback2(callback(dependencyMap[23]).Button, obj10);
  items4[2] = callback2(View, obj9);
  obj.children = items4;
  return callback3(View, obj);
}
class AddAvatarModal {
  constructor() {
    memo = importAll.useMemo(() => function getScreens() {
      let obj = {};
      obj = {
        impressionName: callback(closure_2[25]).ImpressionNames.AVATAR_UPLOAD,
        headerRight() {
          const obj = {};
          const intl = callback(closure_2[20]).intl;
          obj.text = intl.string(callback(closure_2[20]).t.5Wxrcd);
          obj.onPress = function onPress() {
            return callback(closure_2[24]).showSkipAvatarModal();
          };
          return callback2(callback(closure_2[26]).HeaderActionButton, obj);
        },
        headerLeft() {
          return null;
        },
        headerTitle: callback(closure_2[27]).getHeaderNoTitle(),
        ignoreKeyboard: true,
        fullscreen: true,
        render() {
          return callback2(closure_12, {});
        }
      };
      obj.ADD_AVATAR = obj;
      return obj;
    }(), []);
    return jsx(arg1(dependencyMap[28]).Navigator, { screens: memo, initialRouteName: "ADD_AVATAR" });
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const UPLOAD_MEDIUM_SIZE = tmp2.UPLOAD_MEDIUM_SIZE;
({ Fonts, ModalAnimation } = tmp2);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { right: -142023909551200940000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, left: 0.02148440477799341, flexDirection: -28131405935401280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005078706568911639, "Bool(false)": -10388020412470994000000000000000000, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[9]).NAV_BAR_HEIGHT + 32 };
obj.container = obj;
obj.headerContainer = { "Null": true, "Null": true };
obj.buttonContainer = { -840892412: null, -840761340: null };
obj.title = { value: null, on: null };
obj.subtitle = { textAlign: "center" };
obj.errorContainer = { 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001282895982263, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005495969098605 };
const obj1 = {};
const tmp3 = arg1(dependencyMap[6]);
const merged = Object.assign(importDefault(dependencyMap[10])(Fonts.DISPLAY_MEDIUM, importDefault(dependencyMap[8]).unsafe_rawColors.RED_400, 12));
obj.errorText = obj1;
let closure_11 = obj.createStyles(obj);
AddAvatarModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const importDefaultResult = importDefault(dependencyMap[10]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default AddAvatarModal;
