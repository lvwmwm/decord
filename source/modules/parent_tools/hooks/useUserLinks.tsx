// Module ID: 7122
// Function ID: 57237
// Name: useUserIdsForLinkStatus
// Dependencies: [31, 1849, 6769, 6770, 624, 7123, 7124, 6827, 2]
// Exports: getActiveLinkUserIds, useAcceptedRequestsCount, useActiveLinkUsers, useActivityWindowTimeStamp, useHasActiveLinks, useHasActiveParentLinks, useHasMaxConnections, useLinkTimestampText, usePendingRequestCount, useRequiresParentalConsent, useUserQRLinkUrl

// Module 7122 (useUserIdsForLinkStatus)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import items from "items";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function useUserIdsForLinkStatus(ACTIVE) {
  const _require = ACTIVE;
  const items = [closure_5];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_5.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === outer1_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1);
}
function useUsersForLinkStatus(ACTIVE) {
  const _require = useUserIdsForLinkStatus(ACTIVE);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresArray = _require(624).useStateFromStoresArray(items, () => closure_0.map((arg0) => outer2_4.getUser(arg0)));
  return stateFromStoresArray.filter((arg0) => null != arg0);
}
function useActiveLinkUserIds() {
  return useUserIdsForLinkStatus(constants.ACTIVE);
}
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: closure_6, FAMILY_CENTER_REQUEST_QR_CODE_URL: closure_7, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_8, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: closure_10, UserLinkStatus: closure_11, UserLinkType: closure_12 } = items);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export { useUserIdsForLinkStatus };
export { useUsersForLinkStatus };
export { useActiveLinkUserIds };
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(linkedUsers.getLinkedUsers());
  const found = values.filter((link_status) => {
    let tmp = null != link_status;
    if (tmp) {
      tmp = link_status.link_status === outer1_11.ACTIVE;
    }
    return tmp;
  });
  const sorted = found.sort((updated_at, updated_at2) => {
    const time = new Date(updated_at.updated_at).getTime();
    const date = new Date(updated_at.updated_at);
    return time - new Date(updated_at2.updated_at).getTime();
  });
  const mapped = sorted.map((user_id) => user_id.user_id);
  return mapped.filter((arg0) => null != arg0);
};
export const useActiveLinkUsers = function useActiveLinkUsers() {
  return useUsersForLinkStatus(constants.ACTIVE);
};
export const useHasActiveLinks = function useHasActiveLinks() {
  return useActiveLinkUserIds().length > 0;
};
export const useHasActiveParentLinks = function useHasActiveParentLinks() {
  const items = [closure_5];
  stateFromStores = stateFromStores(624).useStateFromStores(items, () => outer1_5.getLinkedUsers());
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.some((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === outer2_11.ACTIVE;
      }
      if (tmp) {
        tmp = link_status.link_type === outer2_12.PARENT;
      }
      return tmp;
    });
  }, items1);
};
export const useUserQRLinkUrl = function useUserQRLinkUrl() {
  const items = [closure_5];
  const stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_5.getLinkCode());
  const obj = require(624) /* defaultAreStatesEqual */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items1, () => outer1_4.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = callback(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
};
export const useHasMaxConnections = function useHasMaxConnections() {
  return useActiveLinkUserIds().length >= (importDefault(7123)() ? closure_8 : closure_9);
};
export const usePendingRequestCount = function usePendingRequestCount() {
  const items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(624).useStateFromStores(items, () => outer1_4.getCurrentUser());
  stateFromStores(624);
  [][0] = closure_5;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === outer1_11.PENDING;
      }
      if (tmp) {
        tmp = stateFromStores.id !== link_status.requestor_id;
      }
      return tmp;
    }).length;
  }
  return num;
};
export const useRequiresParentalConsent = function useRequiresParentalConsent(id) {
  const items = [closure_5];
  let tmp = null != id;
  if (tmp) {
    const tmp2 = obj.useStateFromStores(items, () => outer1_5.getLinkedUsers())[id];
    let prop;
    if (null != tmp2) {
      prop = tmp2.teen_requires_parental_consent;
    }
    tmp = null != prop && prop;
    const tmp4 = null != prop && prop;
  }
  return tmp;
};
export const useAcceptedRequestsCount = function useAcceptedRequestsCount() {
  return useActiveLinkUserIds().length;
};
export const useActivityWindowTimeStamp = function useActivityWindowTimeStamp(activityWindowTimestampFormatter) {
  const _require = activityWindowTimestampFormatter;
  let closure_1 = _require(7124).useSelectedTeenId();
  const obj = _require(7124);
  const items = [closure_5];
  const stateFromStores = _require(624).useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = outer1_5.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const date = new Date(stateFromStores);
    result = _require(6827).formatUserActivityTimestamp(date.getTime(), () => closure_0, 7);
    const obj3 = _require(6827);
  }
  return result;
};
export const useLinkTimestampText = function useLinkTimestampText(id, status) {
  const _require = id;
  const items = [closure_5];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_5.getLinkTimestamp(closure_0));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Date = Date;
    _require(6827).formatLinkTimestamp(Date.parse(stateFromStores), status === constants.PENDING ? closure_10 : closure_6);
    const obj2 = _require(6827);
  }
};
