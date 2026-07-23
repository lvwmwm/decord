// Module ID: 11624
// Function ID: 90256
// Name: GuildProgressCircle
// Dependencies: [31, 27, 33, 4130, 689, 11625, 11507, 2]
// Exports: default

// Module 11624 (GuildProgressCircle)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { position: "relative" }, circle: { position: "absolute" } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.progressCircle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let percent;
  let style;
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { width: num, height: num, borderRadius: num / 2 };
  obj = { style: items };
  items = [tmp.wrapper, style, obj];
  obj = { style: items1 };
  items1 = [tmp.circle, obj];
  obj.size = num;
  obj.strokeWidth = 4;
  obj.percent = 100;
  obj.color = require(11507) /* useIOSCompletionStates */.PROGRESS_BACKGROUND_COLOR;
  const items2 = [callback(importDefault(11625), obj), ];
  const obj1 = { style: items3 };
  items3 = [tmp.circle, obj];
  obj1.size = num;
  obj1.strokeWidth = 4;
  obj1.color = tmp.progressCircle.color;
  obj1.percent = percent;
  items2[1] = callback(importDefault(11625), obj1);
  obj.children = items2;
  return callback2(View, obj);
};
