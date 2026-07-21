// Module ID: 11575
// Function ID: 90001
// Name: GuildPowerupsBoostInfo
// Dependencies: []
// Exports: default

// Module 11575 (GuildPowerupsBoostInfo)
const View = require(dependencyMap[0]).View;
const BoostInfoType = require(dependencyMap[1]).BoostInfoType;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { paddingVertical: importDefault(dependencyMap[4]).space.PX_12 };
obj.container = obj;
obj.headerContainer = { -914277116: 285278212, -2130001224: -1062486447, 1381392801: 48431396, -2073648762: 48443392 };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[8]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  let count;
  let type;
  ({ count, type } = arg0);
  const tmp = callback2();
  let obj = require(dependencyMap[5]);
  const guildPowerupsBoostInfoText = obj.getGuildPowerupsBoostInfoText(count, type);
  obj = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText };
  obj = { style: tmp.headerContainer };
  const obj1 = { size: "sm" };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = importDefault(dependencyMap[4]).unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = importDefault(dependencyMap[4]).colors.TEXT_MUTED;
  }
  obj1.color = TEXT_MUTED;
  const items = [callback(require(dependencyMap[6]).BoostGemIcon, obj1), ];
  const obj2 = { guildIconSize: "<string:16777594>", typeIconSize: "<string:39098947>", typeIconPadding: "<string:39098624>" };
  let str = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str = "text-strong";
  }
  obj2.color = str;
  obj2.children = count;
  items[1] = callback(require(dependencyMap[7]).Text, obj2);
  obj.children = items;
  const items1 = [closure_6(View, obj), callback(require(dependencyMap[7]).Text, { children: guildPowerupsBoostInfoText })];
  obj.children = items1;
  return closure_6(View, obj);
};
