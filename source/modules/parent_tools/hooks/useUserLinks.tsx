// Module ID: 7117
// Function ID: 57167
// Name: useUserIdsForLinkStatus
// Dependencies: []
// Exports: getActiveLinkUserIds, useAcceptedRequestsCount, useActiveLinkUsers, useActivityWindowTimeStamp, useHasActiveLinks, useHasActiveParentLinks, useHasMaxConnections, useLinkTimestampText, usePendingRequestCount, useRequiresParentalConsent, useUserQRLinkUrl

// Module 7117 (useUserIdsForLinkStatus)
function useUserIdsForLinkStatus(ACTIVE) {
  const arg1 = ACTIVE;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, ACTIVE];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
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
  const callback = useUserIdsForLinkStatus(ACTIVE);
  const items = [closure_4];
  const stateFromStoresArray = callback(dependencyMap[4]).useStateFromStoresArray(items, () => closure_0.map((arg0) => user.getUser(arg0)));
  return stateFromStoresArray.filter((arg0) => null != arg0);
}
function useActiveLinkUserIds() {
  return useUserIdsForLinkStatus(constants.ACTIVE);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: closure_6, FAMILY_CENTER_REQUEST_QR_CODE_URL: closure_7, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_8, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: closure_10, UserLinkStatus: closure_11, UserLinkType: closure_12 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export { useUserIdsForLinkStatus };
export { useUsersForLinkStatus };
export { useActiveLinkUserIds };
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(linkedUsers.getLinkedUsers());
  const found = values.filter((link_status) => {
    let tmp = null != link_status;
    if (tmp) {
      tmp = link_status.link_status === constants.ACTIVE;
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
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const arg1 = stateFromStores;
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.some((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.ACTIVE;
      }
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    });
  }, items1);
};
export const useUserQRLinkUrl = function useUserQRLinkUrl() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => linkCode.getLinkCode());
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = callback2(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
};
export const useHasMaxConnections = function useHasMaxConnections() {
  return useActiveLinkUserIds().length >= importDefault(dependencyMap[5])() ? closure_8 : closure_9;
};
export const usePendingRequestCount = function usePendingRequestCount() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores;
  arg1(dependencyMap[4]);
  [][0] = closure_5;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.PENDING;
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
    const tmp2 = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers())[id];
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
  const arg1 = activityWindowTimestampFormatter;
  let closure_1 = arg1(dependencyMap[6]).useSelectedTeenId();
  const obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = rangeStartTimestamp.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const date = new Date(stateFromStores);
    result = arg1(dependencyMap[7]).formatUserActivityTimestamp(date.getTime(), () => arg0, 7);
    const obj3 = arg1(dependencyMap[7]);
  }
  return result;
};
export const useLinkTimestampText = function useLinkTimestampText(id, status) {
  status = id;
  const items = [closure_5];
  const stateFromStores = status(dependencyMap[4]).useStateFromStores(items, () => linkTimestamp.getLinkTimestamp(arg0));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Date = Date;
    status(dependencyMap[7]).formatLinkTimestamp(Date.parse(stateFromStores), status === constants.PENDING ? closure_10 : closure_6);
    const obj2 = status(dependencyMap[7]);
  }
};
