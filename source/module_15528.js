// Module ID: 15528
// Function ID: 118540
// Dependencies: []

// Module 15528
const View = arg1(dependencyMap[1]).View;
const MUTED_OPACITY_CONTENT = arg1(dependencyMap[2]).MUTED_OPACITY_CONTENT;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_7 = arg1(dependencyMap[5]).createStyles({ unreadBadge: { body: "%ArrayProto_keys%", backgroundColor: "tr", accessibilityRole: "isArray" } });
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function UnreadBadge(arg0) {
  let muted;
  let resolvedUnreadSetting;
  let unread;
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp2 = importDefault(dependencyMap[6])();
  arg1(dependencyMap[7]);
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
    obj.size = arg1(dependencyMap[8]).CHANNEL_BADGE_SIZE * Math.max(tmp4, 1);
    const obj1 = {};
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    }
    obj1.opacity = num2;
    const items1 = [obj1];
    obj.badgeStyle = items1;
    obj.children = jsx(importDefault(dependencyMap[8]), obj);
    tmp6Result = tmp6(View, obj);
    const tmp10 = importDefault(dependencyMap[8]);
    const tmp7 = View;
  }
  return tmp6Result;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;
