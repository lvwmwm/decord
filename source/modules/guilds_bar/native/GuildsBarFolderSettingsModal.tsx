// Module ID: 14702
// Function ID: 110884
// Name: GuildFolderSettingsScene
// Dependencies: []
// Exports: default

// Module 14702 (GuildFolderSettingsScene)
function GuildFolderSettingsScene(arg0) {
  let color;
  let name;
  let onColorChange;
  let onNameChange;
  ({ name, onNameChange, color, onColorChange } = arg0);
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.tGRbjA);
  obj = { "Bool(false)": "<string:1091633703>", "Bool(false)": "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi", "Bool(false)": "<string:2475967233>", "Bool(false)": "<string:2475884546>", "Bool(false)": "<string:3550216194>", "Bool(false)": "<string:3980460033>" };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.placeholder = intl2.string(arg1(dependencyMap[7]).t.xV9hVh);
  obj.value = name;
  obj.onChange = onNameChange;
  obj.clearButtonVisibility = arg1(dependencyMap[8]).ClearButtonVisibility.WITH_CONTENT;
  obj.children = callback2(arg1(dependencyMap[6]).FormInput, obj);
  const items = [callback2(arg1(dependencyMap[6]).FormSection, obj), ];
  const obj1 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj1.title = intl3.string(arg1(dependencyMap[7]).t.xpurRF);
  obj1.children = callback2(importDefault(dependencyMap[9]), { color, onChange: onColorChange });
  items[1] = callback2(arg1(dependencyMap[6]).FormSection, obj1);
  obj.children = items;
  return callback3(arg1(dependencyMap[6]).Form, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const DEFAULT_FOLDER_COLOR = arg1(dependencyMap[3]).DEFAULT_FOLDER_COLOR;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  let initialFolderColor;
  let initialFolderName;
  folderId = folderId.folderId;
  const arg1 = folderId;
  let closure_5;
  let DEFAULT_FOLDER_COLOR;
  let callback1;
  const items = [closure_5];
  const items1 = [folderId];
  const stateFromStoresObject = arg1(closure_2[11]).useStateFromStoresObject(items, () => {
    const guildFolderById = tmp6.getGuildFolderById(folderId);
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
  const tmp2 = callback(React.useState(initialFolderName), 2);
  const first = tmp2[0];
  const importDefault = first;
  closure_2 = tmp2[1];
  const tmp4 = callback(React.useState(initialFolderColor), 2);
  const first1 = tmp4[0];
  let callback = first1;
  const React = tmp4[1];
  closure_5 = tmp6;
  const items2 = [folderId, first, first1];
  callback = React.useCallback(() => {
    function updateFolder(folderId, first, first1) {
      const guildFolders = guildFolders.getGuildFolders();
      folderId(first1[5]).saveGuildFolders(guildFolders.map((folderId) => {
        let tmp = folderId;
        if (folderId.folderId === folderId) {
          const obj = {};
          const merged = Object.assign(folderId);
          obj["folderName"] = arg1;
          obj["folderColor"] = arg2;
          tmp = obj;
        }
        return tmp;
      }));
    }(folderId, first, first1);
    const result = folderId(closure_2[12]).hideGuildsBarFolderModal();
  }, items2);
  DEFAULT_FOLDER_COLOR = callback;
  callback1 = React.useCallback(() => {
    const result = folderId(closure_2[12]).hideGuildsBarFolderModal();
  }, []);
  const items3 = [first1, first, first !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
  const screens = React.useMemo(() => function getScreens(arg0, arg1, callback, callback1) {
    let obj = {};
    obj = {
      render() {
        const merged = Object.assign(arg0);
        return callback(closure_9, {});
      }
    };
    const intl = arg0(closure_2[7]).intl;
    obj.title = intl.string(arg0(closure_2[7]).t.Dx7im5);
    obj.headerLeft = arg0(closure_2[10]).getHeaderCloseButton(callback1);
    if (arg1) {
      const intl2 = arg0(closure_2[7]).intl;
      let fn = arg0(closure_2[10]).getHeaderTextButton(intl2.string(arg0(closure_2[7]).t.R3BPH+), callback);
      const obj4 = arg0(closure_2[10]);
    } else {
      fn = () => null;
    }
    obj.headerRight = fn;
    obj["Folder Settings"] = obj;
    return obj;
  }({
    name: first,
    onNameChange(arg0) {
      return callback(arg0);
    },
    color: first1,
    onColorChange(arg0) {
      return callback2(arg0);
    }
  }, tmp6, callback, callback1), items3);
  return callback1(arg1(closure_2[13]).Navigator, { screens, initialRouteName: "Folder Settings" });
};
