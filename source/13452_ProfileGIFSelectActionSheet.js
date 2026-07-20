// Module ID: 13452
// Function ID: 102169
// Name: ProfileGIFSelectActionSheet
// Dependencies: []
// Exports: default

// Module 13452 (ProfileGIFSelectActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
obj = { flex: 1, marginTop: importDefault(dependencyMap[6]).space.PX_4, marginLeft: importDefault(dependencyMap[6]).space.PX_8, marginRight: importDefault(dependencyMap[6]).space.PX_8 };
obj.gifPicker = obj;
let closure_9 = obj.createStyles(obj);
const obj1 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
const obj2 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default function ProfileGIFSelectActionSheet(arg0) {
  ({ profileAssetType: closure_0, selectionContext: closure_1, guildId: closure_2 } = arg0);
  function _onPressGIF() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onPressGIF = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  const ref = React.useRef(null);
  let obj = { PX_16: null, d: null, ks: null, ref };
  obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj.title = intl.string(arg1(dependencyMap[15]).t.xsC+/y);
  obj.trailing = callback(arg1(dependencyMap[16]).NitroWheelIcon, {});
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [callback(arg1(dependencyMap[14]).BottomSheetTitleHeader, obj), ];
  obj = { style: tmp.gifPicker, children: callback(importDefault(dependencyMap[17]), obj1) };
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[13]).BottomSheet, obj);
};
export const ProfileAssetType = obj1;
export const GIFSelectionContext = obj2;
