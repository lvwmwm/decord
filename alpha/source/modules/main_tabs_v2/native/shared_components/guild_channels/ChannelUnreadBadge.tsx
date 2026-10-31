// Module ID: 18078
// Function ID: 18079
// Name: ChannelUnreadBadge
// Dependencies: [19, 17, 11046, 6776, 21, 5014, 11049, 5642, 9818, 2]

// Module 18078 (ChannelUnreadBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useFontScale from "useFontScale" /* 5642 */;
import ReadStateConstants from "ReadStateConstants" /* 6776 */;
import shared_components_Badge from "shared_components/Badge" /* 9818 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11046 */;
import ChannelListLayout from "ChannelListLayout" /* 11049 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const shared_components_BadgeDefault = shared_components_Badge;

const View = react_native.View;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const memoResult = react.memo(function ChannelUnreadBadge(panelVariant) {
  let isThread;
  let launchpad;
  let layout;
  let muted;
  let obj4;
  let resolvedUnreadSetting;
  let unread;
  let flag = panelVariant.panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  useFontScale;
  let tmp8Result = null;
  if (unread) {
    let num2;
    const items = [tmp.unreadBadge, , , ];
    let unreadBadgePanel;
    const tmp9 = View;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    const obj2 = { style: items, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    const tmp2Result = ChannelListLayout;
    items[3] = tmp2Result.makeSizeStyle(layoutStyles.unreadBadge.size);
    ({ classic: flag, size: shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(tmp6, 1), badgeStyle: obj4 });
    const _Math = Math;
    shared_components_BadgeDefault;
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    obj4 = { opacity: num2 };
    tmp8Result = tmp8(tmp9, obj2);
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default memoResult;
