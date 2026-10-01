// Module ID: 17204
// Function ID: 17205
// Name: AddAvatarModal
// Dependencies: [5, 32, 19, 17, 7605, 1074, 21, 4836, 576, 5994, 5836, 1613, 504, 14150, 17205, 7614, 7694, 5450, 7609, 7611, 4832, 1115, 17214, 1177, 5281, 17202, 1249, 6795, 5936, 6421, 2]

// Module 17204 (AddAvatarModal)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import Navigator from "Navigator" /* 6421 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 7614 */;
import VideoBackground from "VideoBackground" /* 7694 */;
import ProfilePendingImageUtils from "ProfilePendingImageUtils" /* 14150 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17202 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, dependencyMap;

let Fonts;
let ModalAnimation;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
function AddAvatarScreen() {
  let Button;
  let LegacyText;
  let closure_2;
  let intl;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let pendingChanges;
  let stringResult;
  let tmp3;
  let tmp9Result3;
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
              require(false);
              const obj7 = { size };
              const obj6 = tmp(c2[17]);
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
              if (null != base64.match(tmp(c2[17]).base64GIFRegex)) {
                closure_129_0(true);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
            pendingImage = undefined;
            if (null != base64) {
              obj = { imageUri: base64, description: obj2.generateAvatarDescription() };
              const createPendingImage = tmp(c2[13]).createPendingImage;
              const tmp17 = tmp(c2[13]);
              obj2 = tmp(c2[15]);
              pendingImage = createPendingImage(obj);
            }
            const obj10 = { avatar: pendingImage };
            const obj3 = tmp(c2[18]);
            obj3.setPendingChanges(obj10);
            let str = "set";
            const announcePendingAvatarChange = tmp(c2[19]).announcePendingAvatarChange;
            const tmp29 = tmp(c2[19]);
            if (null == pendingImage) {
              str = "remove";
            }
            const result = announcePendingAvatarChange(str);
            closure_129_2(undefined);
          }
        } catch (tmp43) {
          c3 = 3;
          throw tmp43;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  [tmp3, require] = obj(react.useState(false), 2);
  const tmp2 = obj(react.useState(false), 2);
  const tmp4 = obj(react.useState(), 2);
  const selectedAvatar = tmp4[0];
  dependencyMap = tmp6;
  const bottom = selectedAvatar(1613)().bottom;
  obj = get_initialized;
  const items = [UserProfileSettingsStore];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    let obj2 = { imageUri: tmp9(17205).DEFAULT_AVATARS[selectedAvatar], description: tmp9Result3.generateAvatarDescription() };
    let createPendingImage = tmp9(14150).createPendingImage;
    ProfilePendingImageUtils;
    tmp9Result3 = RecentAvatarUtils;
    pendingImage = createPendingImage(obj2);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  let imageUri;
  const memoizedImageSource = tmp9(7694).memoizedImageSource;
  VideoBackground;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  let tmp17 = View;
  const items1 = [tmp.container, ];
  let num = 16;
  const memoizedImageSourceResult = memoizedImageSource(imageUri);
  if (bottom > 0) {
    num = bottom;
  }
  let obj3 = { style: items1, children: items4 };
  items1[1] = { paddingBottom: num };
  let obj4 = { style: tmp.headerContainer, children: items3 };
  let obj5 = { children: items2 };
  let obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp9(1115).t.XQRWvR) };
  const Text = tmp9(4832).Text;
  intl = tmp9(1115).intl;
  items2 = [closure_9(Text, obj6), ];
  let obj7 = { style: tmp.subtitle, variant: "heading-deprecated-12/medium", color: "text-default", children: intl2.string(tmp9(1115).t.fH9TLT) };
  const Text2 = tmp9(4832).Text;
  intl2 = tmp9(1115).intl;
  items2[1] = closure_9(Text2, obj7);
  items3 = [tmp16(tmp17, obj5), , ];
  let obj8 = {
    avatarSource: memoizedImageSourceResult,
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      return obj(...arguments);
    }
  };
  items3[1] = closure_9(selectedAvatar(17214), obj8);
  let obj9 = { style: tmp.errorContainer, children: tmp18(LegacyText, obj10) };
  obj10 = { style: tmp.errorText, children: stringResult };
  LegacyText = tmp9(1177).LegacyText;
  if (stringResult) {
    const intl3 = tmp9(1115).intl;
    stringResult = intl3.string(intl5.t.XyLlVm);
  }
  items3[2] = closure_9(tmp17, obj9);
  items4 = [tmp16(tmp17, obj4), tmp18(tmp7(17205), { onAvatarSelect: tmp6, selectedAvatar }), ];
  const obj11 = { style: tmp.buttonContainer, children: closure_9(Button, obj12) };
  obj12 = {
    text: intl4.string(intl5.t.PDTjLN),
    grow: true,
    onPress() {
      obj = AddAvatarModalActionCreators;
      return obj.handlePressNext(pendingImage, first);
    },
    disabled: null == pendingImage
  };
  Button = tmp9(5281).Button;
  intl4 = tmp9(1115).intl;
  items4[2] = closure_9(tmp17, obj11);
  return closure_10(tmp17, obj3);
}
class AddAvatarModal {
  constructor() {
    const screens = react.useMemo(() => {
      let obj2;
      let obj3;
      let obj = { ADD_AVATAR: obj2 };
      obj2 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.AVATAR_UPLOAD,
        headerRight() {
          let intl;
          let obj = {
            text: intl.string(closure_1_0(closure_1_2[21]).t["5Wxrcd"]),
            onPress() {
              const obj = closure_1_0(closure_1_2[25]);
              return obj.showSkipAvatarModal();
            }
          };
          const HeaderActionButton = closure_1_0(closure_1_2[27]).HeaderActionButton;
          intl = closure_1_0(closure_1_2[21]).intl;
          return closure_1_9(HeaderActionButton, obj);
        },
        headerLeft() {
          return null;
        },
        headerTitle: obj3.getHeaderNoTitle(),
        ignoreKeyboard: true,
        fullscreen: true,
        render() {
          return closure_1_9(closure_1_12, {});
        }
      };
      obj3 = NavigatorHeader;
      return obj;
    }, []);
    return React4(Navigator.Navigator, { screens, initialRouteName: "ADD_AVATAR" });
  }
}
const View = react_native.View;
({ UPLOAD_MEDIUM_SIZE: metroImportAll, Fonts, ModalAnimation } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: { display: "flex", alignItems: "center" }, buttonContainer: { marginHorizontal: 16, marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { textAlign: "center" }, errorContainer: { alignSelf: "center", paddingTop: 24 }, errorText: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.RED_400, 12));
let closure_11 = createStyles(obj);
AddAvatarModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default AddAvatarModal;
