// Module ID: 14692
// Function ID: 110892
// Name: useGuildsBarBottomRightBadge
// Dependencies: []
// Exports: default

// Module 14692 (useGuildsBarBottomRightBadge)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ bottomRightBadge: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default function useGuildsBarBottomRightBadge(mentionCount) {
  mentionCount = mentionCount.mentionCount;
  const arg1 = mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const importDefault = isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  const dependencyMap = joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  const callback = flag;
  let prop = mentionCount.lurkerPreviewExpiresAt;
  if (prop === undefined) {
    prop = null;
  }
  const React = prop;
  let jsx;
  let callback2;
  let first;
  let closure_8;
  let token;
  let token1;
  let memo;
  const tmp2 = callback2();
  jsx = tmp2;
  const hasExpired = arg1(dependencyMap[4]).useHasExpired(prop);
  callback2 = hasExpired;
  const tmp4 = callback(React.useState(() => {
    if (mentionCount > 0) {
      let BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[5]).BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[5]).BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  first = tmp4[0];
  closure_8 = tmp4[1];
  const obj = arg1(dependencyMap[4]);
  token = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj2 = arg1(dependencyMap[6]);
  token1 = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items = [tmp2.bottomRightBadge, token1];
  memo = React.useMemo(() => {
    const items = [tmp2.bottomRightBadge, { bottom: token1 - mentionCount(joinRequestState[5]).BADGE_PADDING }];
    return items;
  }, items);
  const items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token, prop, hasExpired];
  return React.useMemo(() => {
    if (mentionCount > 0) {
      let obj = { position: "bottom-right", containerSize: token, width: first - 2 * mentionCount(joinRequestState[5]).BADGE_PADDING };
      const tmp24Result = isMentionLowImportance(joinRequestState[8])(obj);
      obj = {};
      const obj1 = {
        maskStyle: memo,
        value: mentionCount,
        isMentionLowImportance,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        onLayout(nativeEvent) {
            const layout = nativeEvent.nativeEvent.layout;
            if (closure_7 !== layout.width) {
              callback(layout.width);
            }
          }
      };
      obj.badge = tmp2(mentionCount(joinRequestState[5]).MaskedBadge, obj1);
      obj.cutout = tmp24Result;
      const items = [tmp24Result];
      obj.cutouts = items;
      return obj;
    } else if (null != joinRequestState) {
      const obj2 = { position: "bottom-right", containerSize: token };
      const tmp18 = isMentionLowImportance(joinRequestState[8])(obj2);
      const obj3 = {};
      const obj4 = { style: memo, joinRequestState };
      obj3.badge = tmp2(isMentionLowImportance(joinRequestState[9]), obj4);
      obj3.cutout = tmp18;
      const items1 = [tmp18];
      obj3.cutouts = items1;
      return obj3;
    } else if (flag) {
      const obj5 = { position: "bottom-right", containerSize: token };
      const tmp12 = isMentionLowImportance(joinRequestState[8])(obj5);
      const obj6 = {};
      const obj7 = { style: memo };
      obj6.badge = tmp2(isMentionLowImportance(joinRequestState[10]), obj7);
      obj6.cutout = tmp12;
      const items2 = [tmp12];
      obj6.cutouts = items2;
      return obj6;
    } else {
      if (null != prop) {
        if (!hasExpired) {
          obj = { position: "bottom-right", containerSize: token };
          const tmp5 = isMentionLowImportance(joinRequestState[8])(obj);
          const obj8 = {};
          const obj9 = { style: memo, expiresAt: prop };
          obj8.badge = isMentionLowImportance(isMentionLowImportance(joinRequestState[4]), obj9);
          obj8.cutout = tmp5;
          const items3 = [tmp5];
          obj8.cutouts = items3;
          return obj8;
        }
      }
      const obj10 = { badge: null, cutout: undefined, cutouts: undefined };
      return obj10;
    }
  }, items1);
};
