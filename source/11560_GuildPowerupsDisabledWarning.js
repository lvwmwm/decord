// Module ID: 11560
// Function ID: 89946
// Name: GuildPowerupsDisabledWarning
// Dependencies: []
// Exports: default

// Module 11560 (GuildPowerupsDisabledWarning)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { gap: importDefault(dependencyMap[3]).space.PX_8, borderColor: importDefault(dependencyMap[3]).colors.STATUS_WARNING_BACKGROUND, borderRadius: importDefault(dependencyMap[3]).radii.lg, padding: importDefault(dependencyMap[3]).space.PX_12, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_WARNING };
obj.container = obj;
obj.text = { flex: 1 };
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(text) {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { color: importDefault(dependencyMap[3]).colors.TEXT_FEEDBACK_WARNING, size: "md" };
  const items = [callback(require(dependencyMap[4]).WarningIcon, obj), ];
  obj = { Promise: "931bea5d9b6a7fc7a53130a431abe666", marginTop: "no_mutual_servers_dark", flags: "png", style: tmp.text, children: text.text };
  items[1] = callback(require(dependencyMap[5]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
