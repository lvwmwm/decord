// Module ID: 15772
// Function ID: 121513
// Dependencies: [31, 27, 10263, 4361, 33, 4165, 15768, 4584, 9100, 2]

// Module 15772
import { View } from "get ActivityIndicator";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
const memoResult = require("result").memo(function UnreadBadge(arg0) {
  let muted;
  let resolvedUnreadSetting;
  let unread;
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp2 = importDefault(15768)();
  require(4584) /* getFontScale */;
  let tmp6Result = null;
  if (unread) {
    let obj = {};
    const items = [tmp.unreadBadge, tmp2.unreadBadge.position, ];
    obj = { width: tmp2.unreadBadge.size, height: tmp2.unreadBadge.size };
    items[2] = obj;
    obj.style = items;
    obj = { classic: true };
    const _Math = Math;
    let num2 = 1;
    obj.size = require(9100) /* DEFAULT_BADGE_SIZE */.CHANNEL_BADGE_SIZE * Math.max(tmp4, 1);
    const obj1 = {};
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    }
    obj1.opacity = num2;
    const items1 = [obj1];
    obj.badgeStyle = items1;
    obj.children = jsx(importDefault(9100), { classic: true });
    tmp6Result = tmp6(View, obj);
    const tmp10 = importDefault(9100);
    const tmp7 = View;
  }
  return tmp6Result;
});
const result = require("hairlineWidth").fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;
