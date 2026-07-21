// Module ID: 12210
// Function ID: 93754
// Name: GuildPreview
// Dependencies: []
// Exports: default

// Module 12210 (GuildPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const obj1 = { "Null": "NitroWumpusOfferingRight3dIllustration", "Null": "EMTLOT", "Null": "tts", "Null": "tts", "Null": "GO_LIVE", "Null": "file", "Null": "EMTLOT", borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.guildContainer = obj1;
obj.guildInfo = { marginLeft: 8 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  obj = { style: tmp.container };
  obj = { 2003551622: true, 1366017591: true, 996410372: true, style: tmp.title };
  const intl = arg1(dependencyMap[7]).intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj.children = intl.string(arg1(dependencyMap[7]).t.0ox7Hq).toUpperCase();
  const items = [callback(arg1(dependencyMap[6]).Text, obj), ];
  const obj1 = { style: items1 };
  const items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = {};
  const str = intl.string(arg1(dependencyMap[7]).t.0ox7Hq);
  obj2.size = arg1(dependencyMap[8]).GuildIconSizes.LARGE;
  obj2.guild = guild;
  const items2 = [callback(importDefault(dependencyMap[8]), obj2), callback(arg1(dependencyMap[6]).Text, { style: tmp.guildInfo, children: guild.name })];
  obj1.children = items2;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
