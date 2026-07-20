// Module ID: 11567
// Function ID: 89964
// Name: GuildPowerupsSectionHeader
// Dependencies: []
// Exports: default

// Module 11567 (GuildPowerupsSectionHeader)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { padding: importDefault(dependencyMap[3]).space.PX_16 };
obj.headerContainer = obj;
let closure_5 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  let obj = { style: callback3().headerContainer };
  obj = { "Bool(true)": "png", "Bool(true)": true, children: title };
  const items = [callback(require(dependencyMap[4]).Text, obj), callback(require(dependencyMap[4]).Text, { variant: "text-md/normal", children: description })];
  obj.children = items;
  return callback2(View, obj);
};
