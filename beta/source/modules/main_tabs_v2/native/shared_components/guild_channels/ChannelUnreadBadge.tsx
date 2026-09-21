// Module ID: 16372
// Function ID: 16373
// Name: ChannelUnreadBadge
// Dependencies: [19, 17, 12213, 4940, 21, 4758, 558, 12214, 5195, 8117, 2]

// Module 16372 (ChannelUnreadBadge)
import useFontScale from "useFontScale" /* 5195 */;
import BadgeDefault from "Badge" /* 8117 */;
import ChannelListLayout from "ChannelListLayout" /* 12214 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(12213).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(4940).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((panelVariant) => {
  panelVariant = panelVariant.panelVariant;
  let tmp = undefined !== panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (tmp) {
    tmp = panelVariant;
  }
  const tmp2 = closure_7();
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout, launchpad);
  useFontScale;
  let tmp9Result = null;
  if (unread) {
    const items = [tmp2.unreadBadge, , , ];
    let unreadBadgePanel;
    if (tmp) {
      unreadBadgePanel = tmp2.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    const obj2 = { style: null, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = tmp3(12214).makeSizeStyle(layoutStyles.unreadBadge.size);
    obj2.style = items;
    const obj3 = { classic: tmp, size: null, badgeStyle: null };
    const tmp10 = View;
    const tmp3Result = tmp3(12214);
    const _Math = Math;
    obj3.size = tmp3(8117).CHANNEL_BADGE_SIZE * Math.max(tmp7, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj4 = { opacity: num2 };
    const items1 = [obj4];
    obj3.badgeStyle = items1;
    obj2.children = jsx(BadgeDefault, { classic: tmp, size: null, badgeStyle: null });
    tmp9Result = tmp9(tmp10, obj2);
  }
  return tmp9Result;
}) : ((panelVariant) => {
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
    items[3] = tmp2(12214).makeSizeStyle(layoutStyles.unreadBadge.size);
    obj2.style = items;
    const obj3 = { classic: flag, size: null, badgeStyle: null };
    const tmp2Result = tmp2(12214);
    const tmp9 = View;
    const _Math = Math;
    obj3.size = tmp2(8117).CHANNEL_BADGE_SIZE * Math.max(tmp6, 1);
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
}));
