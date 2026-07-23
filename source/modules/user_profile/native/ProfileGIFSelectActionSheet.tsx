// Module ID: 13582
// Function ID: 104403
// Name: ProfileGIFSelectActionSheet
// Dependencies: [57, 5, 31, 27, 33, 4130, 689, 4693, 7854, 7847, 7844, 7846, 4098, 5187, 5186, 1212, 7871, 9574, 2]
// Exports: default

// Module 13582 (ProfileGIFSelectActionSheet)
import _slicedToArray from "_slicedToArray";
import closure_4 from "_createForOfIteratorHelperLoose";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
_createForOfIteratorHelperLoose = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.gifPicker = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
const obj2 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
const result = require("result").fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default function ProfileGIFSelectActionSheet(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
  function _onPressGIF() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const ref = React.useRef(null);
  let obj = { ref, scrollable: true, startExpanded: true };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["xsC+/y"]);
  obj.trailing = callback(require(7871) /* NitroWheelIcon */.NitroWheelIcon, {});
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  obj = { style: tmp.gifPicker, children: callback(importDefault(9574), obj1) };
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
export const ProfileAssetType = obj1;
export const GIFSelectionContext = obj2;
