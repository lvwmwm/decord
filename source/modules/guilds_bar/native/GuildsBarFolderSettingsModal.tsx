// Module ID: 14817
// Function ID: 113048
// Name: GuildFolderSettingsScene
// Dependencies: [57, 31, 4970, 14818, 33, 7955, 7495, 1212, 1273, 14819, 5087, 566, 14816, 5519, 2]
// Exports: default

// Module 14817 (GuildFolderSettingsScene)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEFAULT_FOLDER_COLOR } from "DEFAULT_FOLDER_COLOR";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
function GuildFolderSettingsScene(arg0) {
  let color;
  let name;
  let onColorChange;
  let onNameChange;
  ({ name, onNameChange, color, onColorChange } = arg0);
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.tGRbjA);
  obj = { placeholder: null, value: null, onChange: null, showTopContainer: false, maxLength: 32, autoFocus: true };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl2.string(require(1212) /* getSystemLocale */.t.xV9hVh);
  obj.value = name;
  obj.onChange = onNameChange;
  obj.clearButtonVisibility = require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  obj.children = callback(require(7495) /* Form */.FormInput, obj);
  const items = [callback(require(7495) /* Form */.FormSection, obj), ];
  const obj1 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl3.string(require(1212) /* getSystemLocale */.t.xpurRF);
  obj1.children = callback(importDefault(14819), { color, onChange: onColorChange });
  items[1] = callback(require(7495) /* Form */.FormSection, obj1);
  obj.children = items;
  return callback2(require(7495) /* Form */.Form, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  let initialFolderColor;
  let initialFolderName;
  folderId = folderId.folderId;
  let c5;
  let callback;
  let callback1;
  const items = [c5];
  const items1 = [folderId];
  const stateFromStoresObject = folderId(566).useStateFromStoresObject(items, () => {
    const guildFolderById = _undefined.getGuildFolderById(folderId);
    const obj = {};
    let folderName;
    if (null != guildFolderById) {
      folderName = guildFolderById.folderName;
    }
    let str = "";
    if (null != folderName) {
      str = guildFolderById.folderName;
    }
    obj.initialFolderName = str;
    let folderColor;
    if (null != guildFolderById) {
      folderColor = guildFolderById.folderColor;
    }
    obj.initialFolderColor = null != folderColor ? guildFolderById.folderColor : callback;
    return obj;
  }, items1);
  ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
  const tmp2 = first1(React.useState(initialFolderName), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp4 = first1(React.useState(initialFolderColor), 2);
  first1 = tmp4[0];
  React = tmp4[1];
  c5 = tmp6;
  const items2 = [folderId, first, first1];
  callback = React.useCallback(() => {
    (function updateFolder(folderId, first, first1) {
      let closure_0 = folderId;
      let closure_1 = first;
      const table = first1;
      guildFolders = guildFolders.getGuildFolders();
      folderId(table[5]).saveGuildFolders(guildFolders.map((folderId) => {
        let tmp = folderId;
        if (folderId.folderId === closure_0) {
          const obj = {};
          const merged = Object.assign(folderId);
          obj["folderName"] = closure_1;
          obj["folderColor"] = closure_2;
          tmp = obj;
        }
        return tmp;
      }));
    })(folderId, first, first1);
    const result = folderId(14816).hideGuildsBarFolderModal();
  }, items2);
  callback1 = React.useCallback(() => {
    const result = folderId(14816).hideGuildsBarFolderModal();
  }, []);
  const items3 = [first1, first, first !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
  const screens = React.useMemo(() => (function getScreens(arg0, c5, callback, callback1) {
    let closure_0 = arg0;
    let obj = {};
    obj = {
      render() {
        const merged = Object.assign(closure_0);
        return callback1(outer3_9, {});
      }
    };
    const intl = folderId(1212).intl;
    obj.title = intl.string(folderId(1212).t.Dx7im5);
    obj.headerLeft = folderId(5087).getHeaderCloseButton(callback1);
    if (c5) {
      const intl2 = folderId(1212).intl;
      let fn = folderId(5087).getHeaderTextButton(intl2.string(folderId(1212).t["R3BPH+"]), callback);
      const obj4 = folderId(5087);
    } else {
      fn = () => null;
    }
    obj.headerRight = fn;
    obj["Folder Settings"] = obj;
    return obj;
  })({
    name: first,
    onNameChange(arg0) {
      return outer1_2(arg0);
    },
    color: first1,
    onColorChange(arg0) {
      return outer1_4(arg0);
    }
  }, c5, callback, callback1), items3);
  return callback1(folderId(5519).Navigator, { screens, initialRouteName: "Folder Settings" });
};
