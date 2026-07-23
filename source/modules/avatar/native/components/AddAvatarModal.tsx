// Module ID: 16116
// Function ID: 124948
// Name: AddAvatarScreen
// Dependencies: [5, 57, 31, 27, 7841, 653, 33, 4130, 689, 5084, 5052, 1557, 566, 7854, 16117, 7884, 4674, 7844, 7846, 4126, 1212, 16126, 1273, 4543, 16114, 480, 5788, 5087, 5519, 2]

// Module 16116 (AddAvatarScreen)
import closure_3 from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "HeaderBackImage";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let Fonts;
let ModalAnimation;
let closure_10;
let closure_9;
const require = arg1;
function AddAvatarScreen() {
  function _handleSelectAvatar(result, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = tmp11(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = _handleSelectAvatar(React.useState(false), 2);
  let first = tmp2[0];
  const _require = tmp2[1];
  const tmp4 = _handleSelectAvatar(React.useState(), 2);
  const first1 = tmp4[0];
  const dependencyMap = tmp6;
  const bottom = first1(1557)().bottom;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getPendingChanges().pendingAvatar);
  if (null != first1) {
    let obj1 = _require(7854);
    obj = { imageUri: _require(16117).DEFAULT_AVATARS[first1] };
    let obj3 = _require(7854);
    obj.description = obj3.generateAvatarDescription();
    pendingImage = obj1.createPendingImage(obj);
  }
  let tmp11 = stateFromStores;
  if (null != pendingImage) {
    tmp11 = pendingImage;
  }
  let closure_3 = tmp11;
  let obj4 = _require(7884);
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
  obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = _require(1212).intl;
  obj4.children = intl.string(_require(1212).t.XQRWvR);
  const items2 = [callback(_require(4126).Text, obj4), ];
  const obj5 = { style: tmp.subtitle, variant: "heading-deprecated-12/medium", color: "text-default" };
  const intl2 = _require(1212).intl;
  obj5.children = intl2.string(_require(1212).t.fH9TLT);
  items2[1] = callback(_require(4126).Text, obj5);
  obj3.children = items2;
  const items3 = [callback2(View, obj3), , ];
  const obj6 = {
    avatarSource: obj4.memoizedImageSource(imageUri),
    showPendingAvatar: null != tmp11,
    onSelectAvatar: function handleSelectAvatar() {
      return _handleSelectAvatar(...arguments);
    }
  };
  items3[1] = callback(first1(16126), obj6);
  const obj7 = { style: tmp.errorContainer };
  const obj8 = { style: tmp.errorText };
  if (first) {
    const intl3 = _require(1212).intl;
    first = intl3.string(_require(1212).t.XyLlVm);
  }
  obj8.children = first;
  obj7.children = callback(_require(1273).LegacyText, obj8);
  items3[2] = callback(View, obj7);
  obj2.children = items3;
  const items4 = [callback2(View, obj2), callback(first1(16117), { onAvatarSelect: tmp4[1], selectedAvatar: first1 }), ];
  const obj9 = { style: tmp.buttonContainer };
  const obj10 = {};
  const intl4 = _require(1212).intl;
  obj10.text = intl4.string(_require(1212).t.PDTjLN);
  obj10.grow = true;
  obj10.onPress = function onPress() {
    return callback(tmp6[24]).handlePressNext(closure_3, first1);
  };
  obj10.disabled = null == tmp11;
  obj9.children = callback(_require(4543).Button, obj10);
  items4[2] = callback(View, obj9);
  obj.children = items4;
  return callback2(View, obj);
}
class AddAvatarModal {
  constructor() {
    memo = result.useMemo(() => (function getScreens() {
      let obj = {};
      obj = {
        impressionName: outer2_0(outer2_2[25]).ImpressionNames.AVATAR_UPLOAD,
        headerRight() {
          const obj = {};
          const intl = outer3_0(outer3_2[20]).intl;
          obj.text = intl.string(outer3_0(outer3_2[20]).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            return outer4_0(outer4_2[24]).showSkipAvatarModal();
          };
          return outer3_9(outer3_0(outer3_2[26]).HeaderActionButton, obj);
        },
        headerLeft() {
          return null;
        },
        headerTitle: outer2_0(outer2_2[27]).getHeaderNoTitle(),
        ignoreKeyboard: true,
        fullscreen: true,
        render() {
          return outer3_9(outer3_12, {});
        }
      };
      obj.ADD_AVATAR = obj;
      return obj;
    })(), []);
    return jsx(require("NavigationStack").Navigator, { screens: memo, initialRouteName: "ADD_AVATAR" });
  }
}
const UPLOAD_MEDIUM_SIZE = ME.UPLOAD_MEDIUM_SIZE;
({ Fonts, ModalAnimation } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32, alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { display: "flex", alignItems: "center" };
_createForOfIteratorHelperLoose.buttonContainer = { marginHorizontal: 16, marginBottom: 16 };
_createForOfIteratorHelperLoose.title = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
_createForOfIteratorHelperLoose.errorContainer = { alignSelf: "center", paddingTop: 24 };
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_MEDIUM, require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, 12));
_createForOfIteratorHelperLoose.errorText = {};
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
AddAvatarModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let obj1 = {};
const result = require("result").fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default AddAvatarModal;
