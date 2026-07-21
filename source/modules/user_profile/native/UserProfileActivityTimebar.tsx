// Module ID: 11932
// Function ID: 92263
// Name: UserProfileActivityTimebar
// Dependencies: []
// Exports: default

// Module 11932 (UserProfileActivityTimebar)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const Fonts = arg1(dependencyMap[2]).Fonts;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[5]).radii.xs, height: 4, marginBottom: 4 };
obj.bar = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.progress = { backgroundColor: importDefault(dependencyMap[5]).colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: importDefault(dependencyMap[5]).radii.xs, height: "100%", minWidth: 4 };
obj.textRow = { 1449229240: "row", 371666258: "center" };
let closure_7 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: importDefault(dependencyMap[5]).radii.xs, height: "100%", minWidth: 4 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default function UserProfileActivityTimebar(arg0) {
  let duration;
  let elapsed;
  let end;
  let percentage;
  let start;
  let style;
  ({ start, end, style } = arg0);
  const tmp = importDefault(dependencyMap[6])("UserProfileActivityTimebar");
  const tmp2 = callback2();
  let tmp4;
  ({ elapsed, duration, percentage } = importDefault(dependencyMap[7])({ start, end }));
  if (!tmp) {
    let obj = { fontFamily: Fonts.CODE_NORMAL };
    tmp4 = obj;
  }
  obj = { style };
  obj = { style: tmp2.bar, children: callback(View, { style: items }) };
  const items = [tmp2.progress, { width: `${100 * percentage}%` }];
  const items1 = [callback(View, obj), ];
  const obj2 = { style: tmp2.textRow };
  const obj3 = { variant: "text-xs/normal", style: tmp4, tabularNumbers: tmp };
  let str;
  if (tmp) {
    str = "text-subtle";
  }
  obj3.color = str;
  const obj1 = { width: `${100 * percentage}%` };
  const tmp3 = importDefault(dependencyMap[7])({ start, end });
  const tmp8 = callback;
  const tmp9 = tmp;
  obj3.children = arg1(dependencyMap[7]).formatTime(elapsed);
  const items2 = [tmp8(arg1(dependencyMap[8]).Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", style: tmp4, tabularNumbers: tmp };
  let str2;
  if (tmp) {
    str2 = "text-subtle";
  }
  obj4.color = str2;
  const obj7 = arg1(dependencyMap[7]);
  const tmp10 = callback;
  const tmp11 = tmp;
  obj4.children = arg1(dependencyMap[7]).formatTime(duration);
  items2[1] = tmp10(arg1(dependencyMap[8]).Text, obj4);
  obj2.children = items2;
  items1[1] = closure_6(View, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};
