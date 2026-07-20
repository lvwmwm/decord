// Module ID: 12205
// Function ID: 93736
// Name: GuildDiscoveryPreviewElement
// Dependencies: []
// Exports: default

// Module 12205 (GuildDiscoveryPreviewElement)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = { color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const tmp3 = arg1(dependencyMap[3]);
obj.itemContainer = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.guildInfo = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" };
obj.guildName = { "Null": "key", "Null": "Text" };
const obj2 = { "Null": "never", "Null": true, "Null": "compatibility", borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.guildIcon = obj2;
let closure_7 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default function GuildDiscoveryPreviewElement(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = arg1(dependencyMap[7]);
  obj = { style: tmp.container };
  obj = { paddingBottom: true, initialRouteName: true, initialRouteStack: true, style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.nTe4HC);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj1 = { style: items2 };
  const items2 = [tmp.itemContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  const obj2 = { style: tmp.guildInfo };
  const obj3 = { style: tmp.guildIcon };
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp4 = importDefault(dependencyMap[10]);
  obj3.guild = arg1(dependencyMap[11]).fromClientDiscoverableGuild(guild);
  obj3.animate = !stateFromStores;
  const items3 = [callback(tmp4, obj3), callback(arg1(dependencyMap[8]).Text, { style: tmp.guildName, children: guild.name })];
  obj2.children = items3;
  obj1.children = callback2(View, obj2);
  items1[1] = callback(View, obj1);
  obj.children = items1;
  return callback2(View, obj);
};
