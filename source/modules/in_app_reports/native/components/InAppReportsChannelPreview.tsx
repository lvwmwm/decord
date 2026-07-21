// Module ID: 12209
// Function ID: 93751
// Name: ChannelPreview
// Dependencies: []
// Exports: default

// Module 12209 (ChannelPreview)
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
obj.guildInfo = {};
obj.guildName = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391237011617, "Null": 9126805507 };
obj.topic = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx");

export default function ChannelPreview(stageInstance) {
  stageInstance = stageInstance.stageInstance;
  const arg1 = stageInstance;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(stageInstance.guild_id));
  if (null != stateFromStores) {
    if (null != stageInstance) {
      let obj1 = arg1(dependencyMap[7]);
      obj = { style: tmp.container };
      obj = { 2003551622: true, 1366017591: true, 996410372: true, style: tmp.title };
      const intl = arg1(dependencyMap[9]).intl;
      obj.children = intl.string(arg1(dependencyMap[9]).t.InbJ8x);
      const items1 = [callback(arg1(dependencyMap[8]).Text, obj), ];
      obj1 = {};
      const items2 = [tmp.itemContainer, ];
      const obj2 = { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) };
      items2[1] = obj2;
      obj1.style = items2;
      const obj3 = { style: tmp.guildInfo };
      const obj4 = { guild: stateFromStores };
      const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
      obj4.size = arg1(dependencyMap[10]).GuildIconSizes.XXSMALL;
      obj4.selected = false;
      const items3 = [callback(importDefault(dependencyMap[10]), obj4), ];
      const obj5 = { style: tmp.guildName, children: stateFromStores.name };
      items3[1] = callback(arg1(dependencyMap[8]).Text, obj5);
      obj3.children = items3;
      const items4 = [callback2(View, obj3), ];
      const obj6 = { "Null": "text-overlay-light", "Null": null, "Null": 3, style: tmp.topic, children: stageInstance.topic };
      items4[1] = callback(arg1(dependencyMap[8]).Text, obj6);
      obj1.children = items4;
      items1[1] = callback2(View, obj1);
      obj.children = items1;
      return callback2(View, obj);
    }
  }
  return null;
};
