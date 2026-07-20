// Module ID: 11570
// Function ID: 89970
// Name: Tier3OverrideNotice
// Dependencies: []
// Exports: default

// Module 11570 (Tier3OverrideNotice)
function Tier3OverrideNotice(children) {
  return callback(View, { style: callback2().staffContainer, children: callback(require(dependencyMap[4]).Text, { variant: "text-sm/medium", children: children.text }) });
}
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { gap: importDefault(dependencyMap[3]).space.PX_12, margin: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
obj.staffContainer = { padding: importDefault(dependencyMap[3]).space.PX_12, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[3]).radii.md, borderWidth: 1, borderStyle: "solid", borderColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE };
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[10]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp2 = importDefault(dependencyMap[5])(guildId);
  const tmp3 = importDefault(dependencyMap[6])(guildId);
  if (tmp2.shouldShow) {
    let obj = { style: tmp.container };
    obj = {};
    const intl = require(dependencyMap[7]).intl;
    obj.children = intl.string(importDefault(dependencyMap[8]).3FRirU);
    const items = [callback(require(dependencyMap[4]).Text, obj), , ];
    let shouldShow = tmp2.shouldShow;
    if (shouldShow) {
      obj = { text: tmp2.text };
      shouldShow = callback(Tier3OverrideNotice, obj);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp3.shouldShow;
    if (shouldShow2) {
      const obj1 = { guildId };
      ({ expiringPowerupNames: obj4.powerupNames, warnings: obj4.warnings } = tmp3);
      shouldShow2 = callback(importDefault(dependencyMap[9]), obj1);
    }
    items[2] = shouldShow2;
    obj.children = items;
    let tmp5Result = closure_5(View, obj);
    const tmp5 = closure_5;
    const tmp6 = View;
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
};
