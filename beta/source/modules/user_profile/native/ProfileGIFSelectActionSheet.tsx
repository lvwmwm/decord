// Module ID: 14168
// Function ID: 14169
// Name: ProfileGIFSelectActionSheet
// Dependencies: [32, 5, 19, 17, 21, 4836, 576, 5469, 14150, 7614, 7612, 7609, 7611, 6410, 4800, 6571, 6570, 1115, 8122, 9825, 2]
// Exports: default

// Module 14168 (ProfileGIFSelectActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import GIFPickerDefault from "GIFPicker" /* 9825 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, c4, c5;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" }, gifPicker: obj2 };
obj2 = { flex: 1, marginTop: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
let obj4 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
let result = size.fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default function ProfileGIFSelectActionSheet(arg0) {
  let intl;
  let items;
  let obj7;
  ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
  let obj = function _onPressGIF() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let obj5;
      let closure_0 = arg0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_2;
          let closure_3;
          let closure_4;
          let imageUri;
          let originalMd5;
          let avatar;
          let banner;
          let src;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              imageUri = undefined;
              originalMd5 = undefined;
              avatar = undefined;
              banner = undefined;
              const gifSrc = closure_0.gifSrc;
              src = gifSrc;
              if (gifSrc == null) {
                src = closure_0.src;
              }
              const _fetch = fetch;
              c4 = 1;
              c5 = 1;
              const obj7 = { value: fetch(src), done: false };
              return obj7;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              src = value;
              c4 = 2;
              c5 = 1;
              const obj12 = { value: src.blob(), done: false };
              return obj12;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              closure_2 = value;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                const fileReader = new FileReader();
                fileReader.onload = (target) => {
                  target = target.target;
                  let result;
                  if (target != null) {
                    result = target.result;
                  }
                  let str = "";
                  const tmp2 = closure_0;
                  if (typeof result === "string") {
                    str = result;
                  }
                  tmp2(str);
                };
                const asDataURL = fileReader.readAsDataURL(closure_1_0);
              });
              const items = [promise, ];
              const obj20 = src(closure_2[7]);
              const fromBlobResult = obj20.fromBlob(closure_2);
              items[1] = fromBlobResult.catch(() => null);
              c4 = 3;
              c5 = 1;
              const obj14 = { value: all(items), done: false };
              return obj14;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_3 = value;
            closure_4 = closure_3(closure_3, 2);
            imageUri = closure_4[0];
            originalMd5 = closure_4[1];
            if (constants.AVATAR === closure_131_0) {
              const obj16 = { imageUri, description: obj5.generateAvatarDescription(), originalMd5 };
              const createPendingImage = closure_0(closure_2[8]).createPendingImage;
              const tmp22 = closure_0(closure_2[8]);
              obj5 = closure_0(closure_2[9]);
              avatar = createPendingImage(obj16);
              if (closure_131_1 === constants2.PROFILE_TRY_IT_OUT) {
                const obj9 = closure_0(closure_2[10]);
                obj9.setTryItOutAvatar(avatar);
              } else {
                const obj17 = { guildId: closure_131_2, avatar };
                const obj6 = closure_0(closure_2[11]);
                obj6.setPendingChanges(obj17);
                let str = "set";
                const obj8 = closure_0(closure_2[12]);
                let result = obj8.announcePendingAvatarChange("set");
              }
            } else if (constants.BANNER === tmp63) {
              const obj18 = { assetOrigin: closure_0(closure_2[13]).AssetOriginTypes.NEW_ASSET, imageUri, description: "", originalAsset: "Array", originalMd5 };
              const createPendingImage2 = closure_0(closure_2[8]).createPendingImage;
              const tmp71 = closure_0(closure_2[8]);
              banner = createPendingImage2(obj18);
              if (closure_131_1 === constants2.PROFILE_TRY_IT_OUT) {
                obj3 = closure_0(closure_2[10]);
                obj3.setTryItOutBanner(banner);
              } else {
                const obj19 = { guildId: closure_131_2, banner };
                obj = closure_0(closure_2[11]);
                obj.setPendingChanges(obj19);
              }
            }
            const obj10 = src(closure_2[14]);
            obj10.hideActionSheet();
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp53) {
          c5 = 3;
          throw tmp53;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_9();
  const ref = react.useRef(null);
  obj = { ref, scrollable: true, startExpanded: true, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { title: intl.string(intl2.t["xsC+/y"]), trailing: closure_7(NitroWheelIcon.NitroWheelIcon, {}), titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  items = [closure_7(BottomSheetTitleHeader, obj3), ];
  obj4 = { style: tmp.gifPicker, children: closure_7(GIFPickerDefault, obj7) };
  obj7 = {
    bottomSheetRef: ref,
    onPressGIF(arg0) {
      return obj(...arguments);
    }
  };
  items[1] = closure_7(View, obj4);
  return closure_8(BottomSheet, obj);
};
export const ProfileAssetType = obj3;
export const GIFSelectionContext = obj4;
