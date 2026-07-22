// Module ID: 8430
// Function ID: 67170
// Name: EditGuildEventStepHeader
// Dependencies: []
// Exports: default

// Module 8430 (EditGuildEventStepHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ header: { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001282895982263, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005495969098605 }, headerTitle: { y: 800, channelId: 16 }, headerSubtitle: { textAlign: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(children) {
  const subtitle = children.subtitle;
  const tmp = callback2();
  let obj = { style: tmp.header };
  obj = { style: tmp.headerTitle, children: children.title };
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
