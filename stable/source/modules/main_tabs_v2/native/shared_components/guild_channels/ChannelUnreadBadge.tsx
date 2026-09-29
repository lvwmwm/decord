// Module ID: 16375
// Function ID: 16376
// Name: ChannelUnreadBadge
// Dependencies: [19, 17, 10413, 4970, 21, 4788, 10416, 5225, 8145, 2]

// Module 16375 (ChannelUnreadBadge)
import useFontScale from "useFontScale" /* 5225 */;
import BadgeDefault from "Badge" /* 8145 */;
import ChannelListLayout from "ChannelListLayout" /* 10416 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(10413).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(4970).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default noop.memo(function ChannelUnreadBadge(panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout, launchpad);
  useFontScale;
  let tmp8Result = null;
  if (unread) {
    const items = [tmp.unreadBadge, , , ];
    let unreadBadgePanel;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    const obj2 = { style: null, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = tmp2(10416).makeSizeStyle(layoutStyles.unreadBadge.size);
    obj2.style = items;
    const obj3 = { classic: flag, size: null, badgeStyle: null };
    const tmp2Result = tmp2(10416);
    const tmp9 = View;
    const _Math = Math;
    obj3.size = tmp2(8145).CHANNEL_BADGE_SIZE * Math.max(tmp6, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj4 = { opacity: num2 };
    const items1 = [obj4];
    obj3.badgeStyle = items1;
    obj2.children = jsx(BadgeDefault, { classic: flag, size: null, badgeStyle: null });
    tmp8Result = tmp8(tmp9, obj2);
  }
  return tmp8Result;
});
