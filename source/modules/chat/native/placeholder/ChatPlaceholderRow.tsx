// Module ID: 11700
// Function ID: 90743
// Dependencies: [31, 27, 33, 1273, 4130, 689, 11699, 10106, 2]

// Module 11700
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const tmp3 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
let obj = {};
obj = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingTop: require("PX_24").CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
obj.row = obj;
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1 };
obj.rowInner = _createForOfIteratorHelperLoose;
obj.placeholderAvatar = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.placeholderText = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.placeholderBody = { marginTop: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj4 = { marginTop: require("PX_24").CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
const memoResult = importAllResult.memo(function ChatPlaceholderRow(lines) {
  lines = lines.lines;
  const tmp = callback3();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let tmp4 = importDefault;
      let tmp5 = dependencyMap;
      let tmp6 = callback;
      let tmp7 = View;
      let obj = {};
      let items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      obj = {};
      let _HermesInternal = HermesInternal;
      obj.width = "" + importDefault(10106)(rounded + num) + "%";
      items1[2] = obj;
      obj.style = items1;
      let arr = items.push(callback(View, obj, num));
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
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default memoResult;
