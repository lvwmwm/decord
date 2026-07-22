// Module ID: 12216
// Function ID: 93796
// Name: GuildScheduledEventPreview
// Dependencies: []
// Exports: default

// Module 12216 (GuildScheduledEventPreview)
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
obj.guildInfo = { id: 8, title: null, options: "\u270A\u{1F3FF}" };
obj.guildName = {};
obj.eventName = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx");

export default function GuildScheduledEventPreview(event) {
  event = event.event;
  const arg1 = event;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(event.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let obj1 = arg1(dependencyMap[7]);
    obj = { style: tmp.container };
    obj = { 9223372036854775807: true, 0: true, 0: true, style: tmp.title };
    const intl = arg1(dependencyMap[9]).intl;
    obj.children = intl.string(arg1(dependencyMap[9]).t.SDTOL7);
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
    const obj6 = { "Null": "useStateFromStores", "Null": "track", alignItems: "Array", style: tmp.eventName, children: event.name };
    items4[1] = callback(arg1(dependencyMap[8]).Text, obj6);
    obj1.children = items4;
    items1[1] = callback2(View, obj1);
    obj.children = items1;
    return callback2(View, obj);
  }
};
