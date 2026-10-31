// Module ID: 14918
// Function ID: 14919
// Name: useBadgeDirectoryNuxPopoverVariant
// Dependencies: [32, 19, 8763, 504, 559, 1089, 8768, 11459, 14919, 2]
// Exports: useBadgeDirectoryNuxPopoverVariant

// Module 14918 (useBadgeDirectoryNuxPopoverVariant)
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8768 */;
import BadgeDirectoryNuxGraphicUtils from "BadgeDirectoryNuxGraphicUtils" /* 14919 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8763 */;
import size from "module_2" /* 2 */;

function useBadgeDirectoryNuxPopoverState(fetchCatalog) {
  let currentUserId;
  let enabled;
  let tmp9;
  let flag = fetchCatalog.fetchCatalog;
  ({ currentUserId, enabled } = fetchCatalog);
  if (flag === undefined) {
    flag = true;
  }
  currentUserId = undefined;
  let stateFromStores;
  let stateFromStores1;
  let first;
  let ref;
  let stateFromStores2;
  let stateFromStoresArray;
  let tmp = null;
  if (enabled) {
    tmp = currentUserId;
  }
  currentUserId = tmp;
  let obj = flag(stateFromStores[3]);
  const items = [ref];
  const items1 = [tmp];
  stateFromStores = obj.useStateFromStores(items, () => {
    const hasCatalogForResult = null != currentUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
    return hasCatalogForResult;
  }, items1);
  let obj2 = flag(stateFromStores[3]);
  const items2 = [ref];
  const items3 = [tmp];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const result = null != currentUserId && BadgeDirectoryStore.hasCatalogFetchErrorFor(tmp);
    return result;
  }, items3);
  first = stateFromStores1(first.useState(() => {
    const tmp = currentUserId(stateFromStores[4]);
    const result = 5 * currentUserId(stateFromStores[5]).Millis.SECOND;
    const tmp2 = new tmp(result, 5 * currentUserId(stateFromStores[5]).Millis.MINUTE);
    return tmp2;
  }), 1)[0];
  ref = first.useRef(null);
  const items4 = [tmp, flag, stateFromStores, stateFromStores1, first];
  const effect = first.useEffect(() => {
    if (null != currentUserId) {
      const tmp10 = flag;
      if (tmp10) {
        const tmp2 = stateFromStores;
        if (tmp2) {
          first.succeed();
        } else {
          const tmp3 = stateFromStores1;
          if (tmp3) {
            const obj2 = first;
            if (first.fails < 3) {
              obj2.fail(() => {
                const obj = flag(stateFromStores[6]);
                return obj.fetchBadgeDirectory(currentUserId, { isRetry: true });
              });
              return () => first.cancel();
            }
          } else if (ref.current !== currentUserId) {
            ref.current = currentUserId;
            let obj = BadgeDirectoryActionCreators;
            const badgeDirectory = obj.fetchBadgeDirectory(tmp);
          }
        }
      }
    }
  }, items4);
  const items5 = [ref];
  const items6 = [tmp];
  const obj3 = flag(stateFromStores[3]);
  stateFromStores2 = obj3.useStateFromStores(items5, () => {
    let tmp;
    let num = 0;
    if (null != currentUserId) {
      const badges = BadgeDirectoryStore.getBadges(tmp);
      num = badges.filter((badge_id) => {
        const BETA_BADGE_IDS = flag(stateFromStores[7]).BETA_BADGE_IDS;
        const tmp = BETA_BADGE_IDS.has(badge_id.badge_id) && badge_id.owned;
        return tmp;
      }).length;
    }
    return num;
  }, items6);
  const items7 = [ref];
  const items8 = [tmp];
  const obj4 = flag(stateFromStores[3]);
  stateFromStoresArray = obj4.useStateFromStoresArray(items7, () => {
    let badgeDirectoryNuxGraphicIconUrls;
    if (null != currentUserId) {
      const obj = BadgeDirectoryNuxGraphicUtils;
      badgeDirectoryNuxGraphicIconUrls = obj.getBadgeDirectoryNuxGraphicIconUrls(BadgeDirectoryStore.getBadges(tmp));
    } else {
      badgeDirectoryNuxGraphicIconUrls = [];
    }
    return badgeDirectoryNuxGraphicIconUrls;
  }, items8);
  const items9 = [tmp, stateFromStores, stateFromStores2, stateFromStoresArray];
  const memo = first.useMemo(() => {
    let tmp = null;
    if (null != currentUserId) {
      tmp = null;
      if (stateFromStores) {
        let obj;
        if (stateFromStores2 > 0) {
          obj = { variant: "progress", newBadgeCount: tmp3, badgeIconUrls: stateFromStoresArray };
          const obj2 = { variant: "progress", newBadgeCount: tmp3, badgeIconUrls: stateFromStoresArray };
        } else {
          obj = { variant: "no-progress" };
        }
        tmp = obj;
      }
    }
    return tmp;
  }, items9);
  if (flag) {
    let num = 3;
    flag = first.fails < 3;
  }
  const obj5 = { variantProps: memo, isPending: tmp9 };
  tmp9 = null != tmp && !stateFromStores;
  if (tmp9) {
    let tmp10 = !stateFromStores1;
    if (stateFromStores1) {
      tmp10 = flag;
    }
    tmp9 = tmp10;
  }
  return obj5;
}
let result = size.fileFinishedImporting("modules/badges/useBadgeDirectoryNuxPopoverVariant.tsx");

export { useBadgeDirectoryNuxPopoverState };
export function useBadgeDirectoryNuxPopoverVariant(fetchCatalog) {
  return useBadgeDirectoryNuxPopoverState(fetchCatalog).variantProps;
}
