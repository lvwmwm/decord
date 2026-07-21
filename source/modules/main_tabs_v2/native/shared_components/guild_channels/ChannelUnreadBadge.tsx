// Module ID: 14778
// Function ID: 111405
// Dependencies: []

// Module 14778
const View = arg1(dependencyMap[1]).View;
const MUTED_OPACITY_CONTENT = arg1(dependencyMap[2]).MUTED_OPACITY_CONTENT;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_7 = arg1(dependencyMap[5]).createStyles({ unreadBadge: { label: "M7 1v1h2V1H7Z", subLabel: "<string:1414594560>", icon: "<string:1907712401>" }, unreadBadgePanel: { marginLeft: -16 } });
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function ChannelUnreadBadge(panelVariant) {
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
  let obj = arg1(dependencyMap[6]);
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  arg1(dependencyMap[7]);
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
    items[3] = arg1(dependencyMap[6]).makeSizeStyle(layoutStyles.unreadBadge.size);
    obj.style = items;
    obj = { classic: flag };
    const obj3 = arg1(dependencyMap[6]);
    const tmp11 = jsx;
    const tmp6 = jsx;
    const tmp7 = View;
    const _Math = Math;
    let num2 = 1;
    obj.size = arg1(dependencyMap[8]).CHANNEL_BADGE_SIZE * Math.max(tmp4, 1);
    const obj1 = {};
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    }
    obj1.opacity = num2;
    const items1 = [obj1];
    obj.badgeStyle = items1;
    obj.children = tmp11(importDefault(dependencyMap[8]), obj);
    tmp6Result = tmp6(tmp7, obj);
    const tmp13 = importDefault(dependencyMap[8]);
  }
  return tmp6Result;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default memoResult;
