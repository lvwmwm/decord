// Module ID: 11662
// Function ID: 90431
// Dependencies: []

// Module 11662
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[3]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[3]).AvatarSizes.NORMAL];
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { paddingLeft: importDefault(dependencyMap[5]).space.PX_12, paddingTop: arg1(dependencyMap[6]).CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
obj.row = obj;
obj1 = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_12, flex: 1 };
obj.rowInner = obj1;
const tmp2 = arg1(dependencyMap[2]);
obj.placeholderAvatar = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: importDefault(dependencyMap[5]).radii.round };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.placeholderText = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, height: arg1(dependencyMap[6]).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: importDefault(dependencyMap[5]).radii.sm };
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, height: arg1(dependencyMap[6]).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.placeholderBody = { marginTop: arg1(dependencyMap[6]).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_5 = obj1.createStyles(obj);
const obj4 = { marginTop: arg1(dependencyMap[6]).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
const memoResult = importAllResult.memo(function ChatPlaceholderRow(lines) {
  lines = lines.lines;
  const tmp = callback3();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let tmp4 = closure_0;
      let tmp5 = closure_1;
      let tmp6 = closure_3;
      let tmp7 = closure_2;
      let obj = {};
      let items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      obj = {};
      let _HermesInternal = HermesInternal;
      obj.width = "" + closure_0(closure_1[7])(rounded + num) + "%";
      items1[2] = obj;
      obj.style = items1;
      let arr = items.push(closure_3(closure_2, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  obj = { style: tmp.row };
  const items2 = [callback(View, { style: tmp.placeholderAvatar }), ];
  const obj2 = { style: tmp.rowInner };
  const obj3 = {};
  const items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  obj3.style = items3;
  const items4 = [callback(View, obj3), items];
  obj2.children = items4;
  items2[1] = callback2(View, obj2);
  obj.children = items2;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default memoResult;
