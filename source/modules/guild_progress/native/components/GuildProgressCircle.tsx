// Module ID: 11613
// Function ID: 90194
// Name: GuildProgressCircle
// Dependencies: []
// Exports: default

// Module 11613 (GuildProgressCircle)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { wrapper: { position: "relative" }, circle: { position: "absolute" } };
obj = { color: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.progressCircle = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let percent;
  let style;
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = callback3();
  let obj = { width: num, height: num, borderRadius: num / 2 };
  obj = { style: items };
  const items = [tmp.wrapper, style, obj];
  obj = { style: items1 };
  const items1 = [tmp.circle, obj];
  obj.size = num;
  obj.strokeWidth = 4;
  obj.percent = 100;
  obj.color = arg1(dependencyMap[6]).PROGRESS_BACKGROUND_COLOR;
  const items2 = [callback(importDefault(dependencyMap[5]), obj), ];
  const obj1 = { style: items3 };
  const items3 = [tmp.circle, obj];
  obj1.size = num;
  obj1.strokeWidth = 4;
  obj1.color = tmp.progressCircle.color;
  obj1.percent = percent;
  items2[1] = callback(importDefault(dependencyMap[5]), obj1);
  obj.children = items2;
  return callback2(View, obj);
};
