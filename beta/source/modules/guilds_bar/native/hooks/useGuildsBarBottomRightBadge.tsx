// Module ID: 15933
// Function ID: 15934
// Name: useGuildsBarBottomRightBadge
// Dependencies: [32, 19, 21, 4836, 1177, 4531, 576, 15934, 15935, 15939, 2]
// Exports: default

// Module 15933 (useGuildsBarBottomRightBadge)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 15934 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ bottomRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBottomRightBadge.tsx");

export default function useGuildsBarBottomRightBadge(mentionCount) {
  let bottomRightBadge;
  mentionCount = mentionCount.mentionCount;
  const isMentionLowImportance = mentionCount.isMentionLowImportance;
  const joinRequestState = mentionCount.joinRequestState;
  let flag = mentionCount.shouldShowInvitesDisabled;
  if (flag === undefined) {
    flag = false;
  }
  closure_6 = undefined;
  const tmp = closure_6();
  react = tmp;
  const tmp2 = flag(react.useState(() => {
    let BADGE_MASK_UNREAD_SIZE;
    if (mentionCount > 0) {
      BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_SIZE;
    } else {
      BADGE_MASK_UNREAD_SIZE = native.BADGE_MASK_UNREAD_SIZE;
    }
    return BADGE_MASK_UNREAD_SIZE;
  }), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  let obj = mentionCount(joinRequestState[5]);
  const token = obj.useToken(isMentionLowImportance(joinRequestState[6]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = mentionCount(joinRequestState[5]);
  const token1 = obj2.useToken(isMentionLowImportance(joinRequestState[6]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let items = [tmp.bottomRightBadge, token1];
  const memo = react.useMemo(() => {
    const items = [bottomRightBadge.bottomRightBadge, { bottom: token1 - native.BADGE_PADDING }];
    ({ bottom: token1 - native.BADGE_PADDING });
    return items;
  }, items);
  let items1 = [first, flag, joinRequestState, mentionCount, isMentionLowImportance, memo, token];
  return react.useMemo(() => {
    let items;
    let items1;
    let items2;
    if (mentionCount > 0) {
      const obj2 = { position: "bottom-right", containerSize: token, width: first - 2 * native.BADGE_PADDING };
      const tmp20 = computeGuildsBarCutoutDefault;
      const tmp20Result = tmp20(obj2);
      const obj3 = { badge: null, cutout: tmp20Result, cutouts: items };
      items = [tmp20Result];
      return obj3;
    } else if (null != joinRequestState) {
      const obj5 = { position: "bottom-right", containerSize: token };
      const tmp13 = computeGuildsBarCutoutDefault(obj5);
      const obj6 = { badge: null, cutout: tmp13, cutouts: items1 };
      items1 = [tmp13];
      return obj6;
    } else {
      const tmp32 = flag;
      if (tmp32) {
        const obj = { position: "bottom-right", containerSize: token };
        const tmp5 = computeGuildsBarCutoutDefault(obj);
        const obj8 = { badge: null, cutout: tmp5, cutouts: items2 };
        items2 = [tmp5];
        return obj8;
      } else {
        return { badge: null, cutout: "Array", cutouts: "paddingHorizontal" };
      }
    }
  }, items1);
};
