// Module ID: 10112
// Function ID: 78266
// Name: num2
// Dependencies: []

// Module 10112 (num2)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { wrapper: {} };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm, backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_STATUS_ONLINE };
obj.online = obj;
obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.sm, backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_STATUS_OFFLINE };
obj.total = obj1;
const obj2 = { textAlignVertical: "center" };
const tmp2 = arg1(dependencyMap[2]);
let num;
if (obj7.isAndroid()) {
  num = 12;
}
obj2.lineHeight = num;
obj.text = obj2;
const obj3 = { textAlignVertical: "center" };
const obj7 = arg1(dependencyMap[5]);
let num2;
if (obj9.isAndroid()) {
  num2 = 14;
}
obj3.lineHeight = num2;
obj.refreshText = obj3;
let closure_6 = obj1.createStyles(obj);
const obj9 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function MemberCount(arg0) {
  let color;
  let count;
  let type;
  ({ type, count, color } = arg0);
  const tmp = importDefault(dependencyMap[6])("GuildActionSheetMemberCount");
  if (null == count) {
    const intl2 = arg1(dependencyMap[7]).intl;
    if ("online" === type) {
    } else {
    }
    intl2.string(_5SWsJX);
  } else {
    const intl = arg1(dependencyMap[7]).intl;
    if ("online" === type) {
      let etqpUG = arg1(dependencyMap[7]).t.PIikks;
    } else {
      etqpUG = arg1(dependencyMap[7]).t.etqpUG;
    }
    let obj = { count };
    const tmp17 = callback2();
    obj = { style: tmp17.wrapper };
    obj = { style: tmp17[type] };
    const items = [callback(View, obj), ];
    const obj1 = {};
    let str3 = "text-xs/medium";
    if (tmp) {
      str3 = "text-sm/normal";
    }
    obj1.variant = str3;
    let str4 = "text-default";
    if (null != color) {
      str4 = color;
    }
    obj1.color = str4;
    obj1.lineClamp = 1;
    obj1.style = tmp ? tmp17.refreshText : tmp17.text;
    obj1.children = intl.format(etqpUG, obj);
    items[1] = callback(arg1(dependencyMap[8]).Text, obj1);
    obj.children = items;
    return closure_5(View, obj);
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;
