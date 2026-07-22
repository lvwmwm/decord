// Module ID: 10044
// Function ID: 77644
// Name: GuildDirectoryAddAlert
// Dependencies: []
// Exports: default

// Module 10044 (GuildDirectoryAddAlert)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginBottom: 16, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.guildIcon = obj;
obj.title = { value: null, on: null };
obj.description = { textAlign: "center" };
obj.container = { <string:3596066964>: null, <string:3638417373>: null };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  let directoryGuildName;
  let guild;
  let onClose;
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = callback3();
  let obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.confirmText = intl.string(arg1(dependencyMap[6]).t.X0WK+6);
  obj.onConfirm = onClose;
  obj = { style: tmp.container };
  obj = { style: tmp.guildIcon, guild };
  const tmp2 = importDefault(dependencyMap[5]);
  obj.size = arg1(dependencyMap[7]).GuildIconSizes.XLARGE;
  const items = [callback(importDefault(dependencyMap[7]), obj), , ];
  const obj1 = { alignSelf: 20, justifyContent: 20, alignItems: 8, backgroundColor: 0.6, style: tmp.title };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.CueiPY);
  items[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  const obj2 = { style: tmp.description };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.children = intl3.format(arg1(dependencyMap[6]).t.R7Pqn5, { guildName: directoryGuildName });
  items[2] = callback(arg1(dependencyMap[8]).Text, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(tmp2, obj);
};
