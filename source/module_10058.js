// Module ID: 10058
// Function ID: 77680
// Dependencies: []

// Module 10058
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { row: {}, rowInner: { flex: 1 } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm, backgroundColor: arg1(dependencyMap[5]).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderAvatar = obj;
obj1 = { "Bool(false)": "innocent", "Bool(false)": "innocent", backgroundColor: arg1(dependencyMap[5]).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderText = obj1;
obj.placeholderBody = {};
let closure_5 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  const importDefault = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  let closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row };
  obj = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  const items = [callback(View, obj), ];
  obj = { style: tmp.rowInner };
  const obj1 = {};
  const items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  obj1.style = items1;
  const items2 = [callback(View, obj1), ];
  const array = new Array(sum);
  const obj2 = { width: "" + sum1 + "%" };
  items2[1] = array.fill(undefined).map((arg0, arg1) => {
    let obj = {};
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = tmp);
    obj = { width: "" + tmp(closure_1[6])(closure_1 + arg1) + "%" };
    items[2] = obj;
    obj.style = items;
    return callback(closure_2, obj, arg1);
  });
  obj.children = items2;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default memoResult;
