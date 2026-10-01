// Module ID: 15666
// Function ID: 15667
// Name: ChannelUnreadBadge
// Dependencies: [19, 17, 9577, 5018, 21, 4836, 9580, 5288, 7294, 2]

// Module 15666 (ChannelUnreadBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import useFontScale from "useFontScale" /* 5288 */;
import shared_components_Badge from "shared_components/Badge" /* 7294 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const shared_components_BadgeDefault = shared_components_Badge;

const View = react_native.View;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const memoResult = react.memo(function ChannelUnreadBadge(panelVariant) {
  let isThread;
  let items1;
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
    ({ classic: flag, size: shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(tmp6, 1), badgeStyle: items1 });
    const _Math = Math;
    shared_components_BadgeDefault;
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    items1 = [{ opacity: num2 }];
    const obj4 = { opacity: num2 };
    tmp8Result = tmp8(tmp9, obj2);
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default memoResult;
