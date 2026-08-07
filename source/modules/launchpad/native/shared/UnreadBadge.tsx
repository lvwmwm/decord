// Module ID: 15972
// Function ID: 15973
// Dependencies: [19, 17, 9728, 4498, 21, 4302, 15968, 4718, 8328, 2]

// Module 15972
import { View } from "get ActivityIndicator";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
const memoResult = require("noop").memo(function UnreadBadge(arg0) {
  let muted;
  let resolvedUnreadSetting;
  let unread;
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp4 = importDefault(15968)();
  require(4718) /* getFontScale */;
  let tmp9Result = null;
  if (unread) {
    let obj = { style: null, children: null };
    const items = [tmp.unreadBadge, tmp4.unreadBadge.position, ];
    obj = { width: null, height: null };
    obj[0] = tmp4.unreadBadge.size;
    obj[1] = tmp4.unreadBadge.size;
    items[2] = obj;
    obj[0] = items;
    obj = { classic: true, size: null, badgeStyle: null };
    const _Math = Math;
    obj[1] = require(8328) /* DEFAULT_BADGE_SIZE */.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj1 = { opacity: null };
    obj1[0] = num2;
    const items1 = [obj1];
    obj[2] = items1;
    obj[1] = jsx(importDefault(8328), { classic: true, size: null, badgeStyle: null });
    tmp9Result = tmp9(View, obj);
    const tmp10 = View;
    const tmp2Result = importDefault(8328);
  }
  return tmp9Result;
});
const result = require("hairlineWidth").fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;
