// Module ID: 17220
// Function ID: 17221
// Name: RedesignAddAvatarModal
// Dependencies: [5, 32, 19, 17, 7605, 1074, 21, 4836, 576, 1613, 504, 14150, 17205, 7614, 7694, 5450, 7609, 7611, 4832, 1115, 17214, 5281, 17202, 2]
// Exports: default

// Module 17220 (RedesignAddAvatarModal)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17202 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, importDefault;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flexGrow: 2, alignItems: "center" }, growContainer: obj3, headerContainer: { display: "flex", alignItems: "center" }, buttonContainer: { width: "100%" }, title: obj4, subtitle: { textAlign: "center" }, errorContainer: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { alignSelf: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  let Button;
  let _undefined;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj14;
  let pendingChanges;
  let tmp19Result;
  let tmp3;
  let tmp9Result3;
  const onComplete = route.route.params.onComplete;
  importDefault = undefined;
  let pendingImage;
  let obj = function _handleSelectAvatar() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_1 = tmp4;
              base64 = undefined;
              pendingImage = undefined;
              _undefined(false);
              const obj7 = { size };
              const obj6 = tmp(c2[15]);
              c2 = 1;
              c3 = 1;
              const obj8 = { value: obj6.openImagePicker(obj7), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (null != base64.match(tmp(c2[15]).base64GIFRegex)) {
                closure_129_1(true);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
            pendingImage = undefined;
            if (null != base64) {
              obj = { imageUri: base64, description: obj2.generateAvatarDescription() };
              const createPendingImage = tmp(c2[11]).createPendingImage;
              const tmp17 = tmp(c2[11]);
              obj2 = tmp(c2[13]);
              pendingImage = createPendingImage(obj);
            }
            const obj10 = { avatar: pendingImage };
            const obj3 = tmp(c2[16]);
            obj3.setPendingChanges(obj10);
            let str = "set";
            const announcePendingAvatarChange = tmp(c2[17]).announcePendingAvatarChange;
            const tmp29 = tmp(c2[17]);
            if (null == pendingImage) {
              str = "remove";
            }
            const result = announcePendingAvatarChange(str);
            closure_129_3(undefined);
          }
        } catch (tmp43) {
          c3 = 3;
          throw tmp43;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  let tmp2 = pendingImage(obj.useState(false), 2);
  [tmp3, c1] = tmp2;
  const tmp4 = pendingImage(obj.useState(), 2);
  const selectedAvatar = tmp4[0];
  let closure_3 = tmp6;
  const bottom = require("useSafeAreaInsets")().bottom;
  obj = onComplete(selectedAvatar[10]);
  const items = [UserProfileSettingsStore];
  pendingImage = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    let obj2 = { imageUri: tmp9(tmp8[12]).DEFAULT_AVATARS[selectedAvatar], description: tmp9Result3.generateAvatarDescription() };
    let createPendingImage = tmp9(tmp8[11]).createPendingImage;
    onComplete(selectedAvatar[11]);
    tmp9Result3 = onComplete(selectedAvatar[13]);
    pendingImage = createPendingImage(obj2);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  let imageUri;
  const memoizedImageSource = tmp9(tmp8[14]).memoizedImageSource;
  onComplete(selectedAvatar[14]);
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  let obj3 = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: items1, children: items4 };
  items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: bottom + tmp7(tmp8[8]).space.PX_16, paddingHorizontal: tmp7(tmp8[8]).space.PX_16 };
  let tmp17 = closure_7;
  items1[1] = obj4;
  let obj5 = { style: tmp.headerContainer, children: items3 };
  let obj6 = { children: items2 };
  const memoizedImageSourceResult = memoizedImageSource(imageUri);
  let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp9(tmp8[19]).t.XQRWvR) };
  const Text = tmp9(tmp8[18]).Text;
  intl = tmp9(tmp8[19]).intl;
  items2 = [closure_10(Text, obj7), ];
  let obj8 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp9(tmp8[19]).t.fH9TLT) };
  const Text2 = tmp9(tmp8[18]).Text;
  intl2 = tmp9(tmp8[19]).intl;
  items2[1] = closure_10(Text2, obj8);
  items3 = [closure_11(closure_6, obj6), , ];
  let obj9 = {
    avatarSource: memoizedImageSourceResult,
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      return obj(...arguments);
    }
  };
  items3[1] = closure_10(require("TouchableUploadAvatar"), obj9);
  let obj10 = { style: tmp.errorContainer, children: tmp19Result };
  if (tmp19Result) {
    const obj11 = { variant: "text-sm/medium", color: "text-feedback-critical", children: intl3.string(onComplete(selectedAvatar[19]).t.XyLlVm) };
    const Text3 = tmp9(tmp8[18]).Text;
    intl3 = tmp9(tmp8[19]).intl;
    tmp19Result = closure_10(Text3, obj11);
  }
  items3[2] = closure_10(closure_6, obj10);
  items4 = [tmp16(tmp18, obj5), tmp19(tmp7(tmp8[12]), { onAvatarSelect: tmp6, selectedAvatar }), , ];
  const obj12 = { style: tmp.growContainer };
  items4[2] = closure_10(closure_6, obj12);
  const obj13 = { style: tmp.buttonContainer, children: closure_10(Button, obj14) };
  obj14 = {
    variant: "primary",
    size: "lg",
    text: intl4.string(onComplete(selectedAvatar[19]).t.PDTjLN),
    onPress() {
      let fn = onComplete;
      const handlePressNext = AddAvatarModalActionCreators.handlePressNext;
      AddAvatarModalActionCreators;
      const tmp2 = pendingImage;
      const tmp3 = first;
      if (null == onComplete) {
        fn = () => {

        };
      }
      return handlePressNext(tmp2, tmp3, fn);
    },
    disabled: null == pendingImage
  };
  Button = tmp9(tmp8[21]).Button;
  intl4 = tmp9(tmp8[19]).intl;
  items4[3] = closure_10(closure_6, obj13);
  return closure_11(tmp17, obj3);
};
