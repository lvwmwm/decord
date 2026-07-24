// Module ID: 13972
// Function ID: 106922
// Name: VideoQuestPlayerControlButton
// Dependencies: [31, 33, 4130, 689, 666, 4660, 4533, 2]

// Module 13972 (VideoQuestPlayerControlButton)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import importDefaultResult from "t";

const require = arg1;
let obj = { disabled: { opacity: 0.5 } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, overflow: "hidden" };
obj.container = obj;
_createForOfIteratorHelperLoose = {};
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK);
_createForOfIteratorHelperLoose.backgroundColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.5).hex();
_createForOfIteratorHelperLoose.padding = require("_createForOfIteratorHelperLoose").space.PX_12;
obj.blur = _createForOfIteratorHelperLoose;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.5);
const memoResult = importAllResult.memo((arg0) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = Object.create(null);
  obj.style = 0;
  obj.children = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback();
  obj = {};
  const items = [tmp3.container, , ];
  let disabled = merged.disabled;
  if (disabled) {
    disabled = tmp3.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj = { style: tmp3.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children };
  obj["children"] = jsx(importDefault(4533), { style: tmp3.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
  return jsx(require(4660) /* PressableBase */.PressableOpacity, { style: tmp3.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = memoResult;
