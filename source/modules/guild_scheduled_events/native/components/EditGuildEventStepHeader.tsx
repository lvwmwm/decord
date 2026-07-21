// Module ID: 8429
// Function ID: 67147
// Name: EditGuildEventStepHeader
// Dependencies: []
// Exports: default

// Module 8429 (EditGuildEventStepHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ header: { guild: 24, body: "recent_games_enabled" }, headerTitle: {}, headerSubtitle: { textAlign: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(subtitle) {
  subtitle = subtitle.subtitle;
  const tmp = callback2();
  let obj = { style: tmp.header };
  obj = { 1501064855: "<string:3170107394>", -1267889981: "<string:973406210>", -1145697943: "<string:821166084>", -1266241916: "<string:343539713>", style: tmp.headerTitle, children: subtitle.title };
  const items = [callback(arg1(dependencyMap[4]).Text, obj), ];
  let tmp4 = null;
  if (null != subtitle) {
    tmp4 = null;
    if ("" !== subtitle) {
      obj = { style: tmp.headerSubtitle, children: subtitle };
      tmp4 = callback(arg1(dependencyMap[4]).Text, obj);
    }
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(View, obj);
};
