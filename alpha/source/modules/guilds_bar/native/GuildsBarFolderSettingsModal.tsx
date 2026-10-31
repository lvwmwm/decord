// Module ID: 18352
// Function ID: 18353
// Name: GuildsBarFolderSettingsModal
// Dependencies: [32, 19, 17, 6772, 18353, 21, 5014, 5932, 5607, 5258, 18354, 1994, 575, 6027, 7082, 1113, 7060, 6975, 1090, 16439, 6998, 504, 18351, 7169, 2]
// Exports: default

// Module 18352 (GuildsBarFolderSettingsModal)
import intl5 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 5932 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import GuildsBarFolderSettingsModalActionCreators from "GuildsBarFolderSettingsModalActionCreators" /* 18351 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import GuildsBarConstants from "guilds_bar/GuildsBarConstants" /* 18353 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_2;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
function GuildFolderSettingsScene(color) {
  let Stack;
  let int2hexResult;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let name;
  let obj2;
  let obj3;
  let obj7;
  let onNameChange;
  let tmp2Result;
  let tmp7;
  color = color.color;
  const onColorChange = color.onColorChange;
  ({ name, onNameChange } = color);
  const tmp = closure_12();
  let tmp3 = dependencyMap;
  const tmp2 = onColorChange;
  const items = [color, onColorChange];
  const insets = onColorChange(5607)().insets;
  let obj = { style: tmp.scrollView, keyboardShouldPersistTaps: "always", contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, contentContainerStyle: obj2, children: tmp7(Stack, obj3) };
  obj2 = { padding: onColorChange(575).space.PX_16, paddingBottom: 38 + insets.bottom };
  const callback = react.useCallback(() => {
    hasOwnProperty.dismiss();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let tmp4 = color;
    ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequire(18354, dependencyMap.paths);
    if (color == null) {
      tmp4 = metroImportAll;
    }
    const obj = { color: tmp4, defaultColor: metroImportAll, onSelect: onColorChange };
    openLazy(tmp3, "RoleColorPicker", obj);
  }, items);
  obj3 = { spacing: onColorChange(575).space.PX_16, children: items1 };
  Stack = color(6027).Stack;
  const obj4 = { label: intl.string(color(1113).t.tGRbjA), placeholder: intl2.string(color(1113).t.xV9hVh), value: name, onChange: onNameChange, maxLength: 32, autoFocus: true, clearable: true };
  const TextInput = color(7082).TextInput;
  intl = color(1113).intl;
  intl2 = color(1113).intl;
  items1 = [closure_10(TextInput, obj4), ];
  const TableRowGroup = color(7060).TableRowGroup;
  const obj5 = { label: intl3.string(color(1113).t.xpurRF), subLabel: int2hexResult, onPress: callback, arrow: true, trailing: closure_10(tmp2Result, obj7) };
  const TableRow = color(6975).TableRow;
  intl3 = color(1113).intl;
  const tmp6 = closure_6;
  tmp7 = closure_11;
  if (null != color) {
    const tmp8Result = color(1090);
    int2hexResult = tmp8Result.int2hex(color);
  } else {
    const intl4 = tmp8(1113).intl;
    int2hexResult = intl4.string(tmp8(1113).t.bBvAEH);
  }
  let tmp11 = color;
  tmp2Result = tmp2(16439);
  if (color == null) {
    tmp11 = closure_8;
  }
  const obj6 = { hasIcons: false, children: closure_10(TableRow, obj5) };
  obj7 = { color: tmp11, style: tmp.colorBlock };
  items1[1] = closure_10(TableRowGroup, obj6);
  return closure_10(tmp6, obj);
}
let react = react_mod;
({ Keyboard: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ DEFAULT_FOLDER_COLOR: metroImportAll, normalizeFolderColor: c9 } = GuildsBarConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ scrollView: { flex: 1 }, colorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 } });
let c14 = "Folder Settings";
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  let closure_4;
  let initialFolderColor;
  let initialFolderName;
  folderId = folderId.folderId;
  dependencyMap = undefined;
  let first1;
  react = undefined;
  let callback1;
  let tmp = folderId;
  let tmp2 = dependencyMap;
  let obj = folderId(504);
  const items = [callback1];
  const items1 = [folderId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let folderColor;
    let tmp3;
    const guildFolderById = SortedGuildStore.getGuildFolderById(folderId);
    let folderName;
    if (guildFolderById != null) {
      folderName = guildFolderById.folderName;
    }
    let str = "";
    if (null != folderName) {
      str = guildFolderById.folderName;
    }
    const obj = { initialFolderName: str, initialFolderColor: tmp3(folderColor) };
    folderColor = undefined;
    tmp3 = React4;
    if (guildFolderById != null) {
      folderColor = guildFolderById.folderColor;
    }
    return obj;
  }, items1);
  ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
  let obj2 = react;
  const tmp4 = first1(react.useState(initialFolderName), 2);
  const name = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = first1(react.useState(initialFolderColor), 2);
  first1 = tmp6[0];
  react = tmp6[1];
  let closure_5 = tmp8;
  const items2 = [folderId, name, first1];
  const callback = obj2.useCallback(() => {
    let closure_0 = folderId;
    let closure_1 = first;
    closure_2 = first1;
    let tmp = UserSettingsActionCreators;
    const saveGuildFolders = tmp.saveGuildFolders;
    const guildFolders = SortedGuildStore.getGuildFolders();
    saveGuildFolders(guildFolders.map((folderId) => {
      let tmp = folderId;
      if (folderId.folderId === closure_0) {
        const obj = { folderName, folderColor };
        const merged = Object.assign(folderId);
        tmp = obj;
      }
      return tmp;
    }));
    let obj = GuildsBarFolderSettingsModalActionCreators;
    const result = obj.hideGuildsBarFolderModal();
  }, items2);
  callback1 = obj2.useCallback(() => {
    const obj = folderId(closure_2[22]);
    const result = obj.hideGuildsBarFolderModal();
  }, []);
  const items3 = [first1, name, name !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
  const memo = obj2.useMemo(() => {
    let fn;
    let intl;
    let obj3;
    let obj = {
      name,
      onNameChange(arg0) {
        return closure_1_2(arg0);
      },
      color: first1,
      onColorChange(dependencyMap) {
        return closure_1_4(closure_2_9(dependencyMap));
      }
    };
    const obj2 = {
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_2_10(closure_2_13, obj);
      },
      title: intl.string(intl5.t.Dx7im5),
      headerLeft: obj3.getHeaderCloseButton(callback1),
      headerRight: fn
    };
    intl = intl5.intl;
    obj3 = NavigatorHeader;
    const tmp = callback;
    const tmp2 = c14;
    if (closure_5) {
      const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
      NavigatorHeader;
      const intl2 = tmp3(1113).intl;
      fn = getHeaderTextButton(intl2.string(tmp3(1113).t["R3BPH+"]), tmp);
    } else {
      fn = () => null;
    }
    return { [tmp2]: obj2 };
  }, items3);
  let obj3 = { screens: memo, initialRouteName };
  return closure_10(tmp(7169).Navigator, obj3);
};
