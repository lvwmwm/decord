// Module ID: 14902
// Function ID: 113616
// Dependencies: [31, 27, 10260, 4326, 33, 4130, 10261, 4549, 9128, 2]

// Module 14902
import { View } from "get ActivityIndicator";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const memoResult = require("result").memo(function ChannelUnreadBadge(panelVariant) {
  let isThread;
  let launchpad;
  let layout;
  let muted;
  let resolvedUnreadSetting;
  let unread;
  let flag = panelVariant.panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = require(10261) /* getLayoutStyles */;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  require(4549) /* getFontScale */;
  let tmp6Result = null;
  if (unread) {
    obj = {};
    const items = [tmp.unreadBadge, , , ];
    let unreadBadgePanel;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = require(10261) /* getLayoutStyles */.makeSizeStyle(layoutStyles.unreadBadge.size);
    obj.style = items;
    obj = { classic: flag };
    const obj3 = require(10261) /* getLayoutStyles */;
    const tmp11 = jsx;
    const tmp6 = jsx;
    const tmp7 = View;
    const _Math = Math;
    let num2 = 1;
    obj.size = require(9128) /* DEFAULT_BADGE_SIZE */.CHANNEL_BADGE_SIZE * Math.max(tmp4, 1);
    const obj1 = {};
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    }
    obj1.opacity = num2;
    const items1 = [obj1];
    obj.badgeStyle = items1;
    obj.children = tmp11(importDefault(9128), obj);
    tmp6Result = tmp6(tmp7, obj);
    const tmp13 = importDefault(9128);
  }
  return tmp6Result;
});
const result = require("hairlineWidth").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default memoResult;
