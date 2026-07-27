// Module ID: 15733
// Function ID: 121357
// Dependencies: [31, 27, 10223, 4327, 33, 4131, 15729, 4550, 9056, 2]

// Module 15733
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
  const tmp2 = importDefault(15729)();
  require(4550) /* getFontScale */;
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
    obj.size = require(9056) /* DEFAULT_BADGE_SIZE */.CHANNEL_BADGE_SIZE * Math.max(tmp4, 1);
    const obj1 = {};
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    }
    obj1.opacity = num2;
    const items1 = [obj1];
    obj.badgeStyle = items1;
    obj.children = jsx(importDefault(9056), { classic: true });
    tmp6Result = tmp6(View, obj);
    const tmp10 = importDefault(9056);
    const tmp7 = View;
  }
  return tmp6Result;
});
const result = require("hairlineWidth").fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;
