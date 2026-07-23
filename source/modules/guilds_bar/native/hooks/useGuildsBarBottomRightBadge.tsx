// Module ID: 14825
// Function ID: 113157
// Name: useGuildsBarBottomRightBadge
// Dependencies: [57, 31, 33, 4130, 14826, 1273, 3834, 689, 14827, 14828, 14832, 2]
// Exports: default

// Module 14825 (useGuildsBarBottomRightBadge)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default function useGuildsBarBottomRightBadge(mentionCount) {
  mentionCount = mentionCount.mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let prop = mentionCount.lurkerPreviewExpiresAt;
  if (prop === undefined) {
    prop = null;
  }
  let c5;
  let hasExpired;
  let first;
  let closure_8;
  let token;
  let token1;
  let memo;
  const tmp2 = hasExpired();
  c5 = tmp2;
  hasExpired = mentionCount(joinRequestState[4]).useHasExpired(prop);
  const tmp4 = flag(prop.useState(() => {
    if (mentionCount > 0) {
      let BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[5]).BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = mentionCount(joinRequestState[5]).BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  first = tmp4[0];
  closure_8 = tmp4[1];
  let obj = mentionCount(joinRequestState[4]);
  token = mentionCount(joinRequestState[6]).useToken(isMentionLowImportance(joinRequestState[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = mentionCount(joinRequestState[6]);
  token1 = mentionCount(joinRequestState[6]).useToken(isMentionLowImportance(joinRequestState[7]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let items = [tmp2.bottomRightBadge, token1];
  memo = prop.useMemo(() => {
    const items = [_undefined.bottomRightBadge, { bottom: token1 - mentionCount(joinRequestState[5]).BADGE_PADDING }];
    return items;
  }, items);
  let items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token, prop, hasExpired];
  return prop.useMemo(() => {
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
            if (outer1_7 !== layout.width) {
              outer1_8(layout.width);
            }
          }
      };
      obj.badge = _undefined(mentionCount(joinRequestState[5]).MaskedBadge, obj1);
      obj.cutout = tmp24Result;
      const items = [tmp24Result];
      obj.cutouts = items;
      return obj;
    } else if (null != joinRequestState) {
      const obj2 = { position: "bottom-right", containerSize: token };
      const tmp18 = isMentionLowImportance(joinRequestState[8])(obj2);
      const obj3 = {};
      const obj4 = { style: memo, joinRequestState };
      obj3.badge = _undefined(isMentionLowImportance(joinRequestState[9]), obj4);
      obj3.cutout = tmp18;
      const items1 = [tmp18];
      obj3.cutouts = items1;
      return obj3;
    } else if (flag) {
      const obj5 = { position: "bottom-right", containerSize: token };
      const tmp12 = isMentionLowImportance(joinRequestState[8])(obj5);
      const obj6 = {};
      const obj7 = { style: memo };
      obj6.badge = _undefined(isMentionLowImportance(joinRequestState[10]), obj7);
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
          obj8.badge = _undefined(isMentionLowImportance(joinRequestState[4]), obj9);
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
