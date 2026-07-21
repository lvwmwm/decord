// Module ID: 10040
// Function ID: 77601
// Name: GuildDirectoryCreateOrAddDescription
// Dependencies: []
// Exports: default

// Module 10040 (GuildDirectoryCreateOrAddDescription)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: { flex: 1 }, title: { "Null": null, "Null": null }, description: { textAlign: "center" }, header: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx");

export default function GuildDirectoryCreateOrAddDescription(directoryChannelId) {
  directoryChannelId = directoryChannelId.directoryChannelId;
  const arg1 = directoryChannelId;
  ({ directoryGuildName: closure_1, guild: closure_2, createGuild: closure_3 } = directoryChannelId);
  function _onSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled" };
  obj = { style: tmp.header };
  const obj1 = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(arg1(dependencyMap[11]).t.5bQcoa);
  const items = [callback(arg1(dependencyMap[10]).Text, obj1), ];
  const obj2 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[11]).t.Ie60Wc);
  items[1] = callback(arg1(dependencyMap[10]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(_onSubmit, obj), ];
  const obj3 = {
    onSubmit(arg0, arg1) {
      return _onSubmit(...arguments);
    }
  };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj3.buttonLabel = intl3.string(arg1(dependencyMap[11]).t.H9jxS1);
  obj3.directoryChannelId = directoryChannelId;
  items1[1] = callback(importDefault(dependencyMap[12]), obj3);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  return callback(arg1(dependencyMap[9]).GuildDirectoryAddModalScreen, obj);
};
