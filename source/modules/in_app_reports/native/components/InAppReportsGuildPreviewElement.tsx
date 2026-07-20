// Module ID: 12203
// Function ID: 93731
// Name: GuildPreview
// Dependencies: []
// Exports: default

// Module 12203 (GuildPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const obj1 = { SECURE_FRAMES_TRANSIENT_KEY_DELETE: "-3", GameLinkTypes: "unflip", blockRef: "unflip", fontStyle: "-4", fontWeight: "tts", nl-BQ: "tts", GB: "-6", borderRadius: importDefault(dependencyMap[4]).radii.sm };
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
  obj = { paddingBottom: true, initialRouteName: true, initialRouteStack: true, style: tmp.title };
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
  const obj3 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.guildInfo, children: guild.name };
  items2[1] = callback(arg1(dependencyMap[6]).Text, obj3);
  obj1.children = items2;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
