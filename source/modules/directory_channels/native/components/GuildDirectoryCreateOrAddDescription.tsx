// Module ID: 10034
// Function ID: 77583
// Name: GuildDirectoryCreateOrAddDescription
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10034 (GuildDirectoryCreateOrAddDescription)
import closure_3 from "result";
import "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_4, ScrollView: closure_5 } = result);
({ jsx: closure_6, jsxs: closure_7 } = result);
let closure_8 = result.createStyles({ container: { flex: 1 }, title: { bounces: null, keyboardShouldPersistTaps: null }, description: { textAlign: "center" }, header: {} });
result = result.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx");

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
  const obj1 = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
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
