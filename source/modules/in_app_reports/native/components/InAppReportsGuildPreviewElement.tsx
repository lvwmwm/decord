// Module ID: 12210
// Function ID: 93766
// Name: GuildPreview
// Dependencies: []
// Exports: default

// Module 12210 (GuildPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const tmp3 = arg1(dependencyMap[2]);
obj.guildContainer = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.guildInfo = { marginLeft: 8 };
let closure_6 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  obj = { style: tmp.container };
  obj = { 1832956803: true, 420134994: true, -1884532042: true, style: tmp.title };
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
  const items2 = [callback(importDefault(dependencyMap[8]), obj2), ];
  const obj3 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", style: tmp.guildInfo, children: guild.name };
  items2[1] = callback(arg1(dependencyMap[6]).Text, obj3);
  obj1.children = items2;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
