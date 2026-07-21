// Module ID: 10036
// Function ID: 77541
// Name: GuildDirectoryEditDescription
// Dependencies: []
// Exports: default

// Module 10036 (GuildDirectoryEditDescription)
function GuildDirectoryEditDescription(entry) {
  entry = entry.entry;
  const arg1 = entry;
  function _onSubmit(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = { top: true, style: tmp.safeArea };
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled" };
  obj = { style: tmp.header };
  const obj1 = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[10]).intl;
  obj1.children = intl.format(arg1(dependencyMap[10]).t.w9tsNk, { guildName: entry.name });
  obj.children = callback(arg1(dependencyMap[9]).Text, obj1);
  const items = [callback(closure_5, obj), ];
  const obj3 = {
    onSubmit(arg0, arg1) {
      return _onSubmit(...arguments);
    }
  };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj3.buttonLabel = intl2.string(arg1(dependencyMap[10]).t.R3BPH+);
  obj3.entry = entry;
  obj3.directoryChannelId = entry.channelId;
  items[1] = callback(_onSubmit(dependencyMap[11]), obj3);
  obj.children = items;
  obj.children = callback2(closure_6, obj);
  return callback(arg1(dependencyMap[8]).SafeAreaPaddingView, obj);
}
function getScreens(arg0) {
  const arg1 = arg0;
  let obj = {};
  obj = {
    fullscreen: true,
    headerLeft: arg1(dependencyMap[12]).getHeaderCloseButton(importDefault(dependencyMap[7]).close),
    headerTitle() {
      return null;
    },
    render() {
      const merged = Object.assign(arg0);
      return callback(closure_11, {});
    }
  };
  obj[closure_10] = obj;
  return obj;
}
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: arg1(dependencyMap[5]).NAV_BAR_HEIGHT, flex: 1 };
obj.safeArea = obj;
obj.container = { flex: 1 };
obj.title = { "Null": null, "Null": null };
obj.header = {};
let closure_9 = obj.createStyles(obj);
let closure_10 = "EDIT_DESCRIPTION";
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  const obj = { screens: getScreens(arg0), initialRouteName: closure_10 };
  return callback(arg1(dependencyMap[13]).Navigator, obj);
};
