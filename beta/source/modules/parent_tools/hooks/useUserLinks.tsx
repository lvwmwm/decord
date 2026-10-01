// Module ID: 8105
// Function ID: 8106
// Name: useUserLinks
// Dependencies: [19, 1372, 6957, 6958, 563, 8106, 8107, 7012, 2]
// Exports: getActiveLinkUserIds, useAcceptedRequestsCount, useActiveLinkUserIds, useActiveLinkUsers, useActivityWindowTimeStamp, useHasActiveLinks, useHasActiveParentLinks, useHasMaxConnections, useLinkTimestampText, usePendingRequestCount, useRequiresParentalConsent, useUserIdsForLinkStatus, useUserQRLinkUrl, useUsersForLinkStatus

// Module 8105 (useUserLinks)
import useStateFromStores from "useStateFromStores" /* 563 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const f85773 = () => linkedUsers.getLinkedUsers();
const f85775 = () => {
  let user;
  return closure_0.map((item) => user.getUser(item));
};
const f85776 = (item) => null != item;
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: metroRequire, FAMILY_CENTER_REQUEST_QR_CODE_URL: metroImportDefault, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: metroImportAll, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: c9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: c10, UserLinkStatus: unpackModuleId, UserLinkType: closure_12 } = FamilyCenterConstants);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export const useUserIdsForLinkStatus = function useUserIdsForLinkStatus(arg0) {
  let closure_0;
  _require = arg0;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, arg0];
  return react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
};
export const useUsersForLinkStatus = function useUsersForLinkStatus(PENDING) {
  let closure_0;
  _require = PENDING;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, PENDING];
  _require = react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
  const items2 = [UserStore];
  const obj2 = require("useStateFromStores");
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, f85775);
  return stateFromStoresArray.filter(f85776);
};
export const useActiveLinkUserIds = function useActiveLinkUserIds() {
  const ACTIVE = constants.ACTIVE;
  const items = [FamilyCenterStore];
  const obj = ACTIVE(563);
  const stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, ACTIVE];
  return react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
};
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
  const found = values.filter((link_status) => null != link_status && link_status.link_status === constants.ACTIVE);
  const sorted = found.sort((updated_at, updated_at2) => {
    const date = new Date(updated_at.updated_at);
    const time = date.getTime();
    const date1 = new Date(updated_at2.updated_at);
    return time - date1.getTime();
  });
  const mapped = sorted.map((user_id) => user_id.user_id);
  return mapped.filter((item) => null != item);
};
export const useActiveLinkUsers = function useActiveLinkUsers() {
  let closure_0;
  const ACTIVE = constants.ACTIVE;
  _require = undefined;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, ACTIVE];
  _require = react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
  const items2 = [UserStore];
  const obj2 = require("useStateFromStores");
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, f85775);
  return stateFromStoresArray.filter(f85776);
};
export const useHasActiveLinks = function useHasActiveLinks() {
  const ACTIVE = constants.ACTIVE;
  const items = [FamilyCenterStore];
  const obj = ACTIVE(563);
  const stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, ACTIVE];
  return react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1).length > 0;
};
export const useHasActiveParentLinks = function useHasActiveParentLinks() {
  let linkedUsers;
  let stateFromStores;
  const items = [FamilyCenterStore];
  const obj = stateFromStores(563);
  stateFromStores = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    let constants2;
    const values = Object.values(stateFromStores);
    return values.some((link_status) => null != link_status && link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT);
  }, items1);
};
export const useUserQRLinkUrl = function useUserQRLinkUrl() {
  let currentUser;
  let linkCode;
  const items = [FamilyCenterStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => linkCode.getLinkCode());
  const items1 = [UserStore];
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = metroImportDefault(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
};
export const useHasMaxConnections = function useHasMaxConnections() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const items = [FamilyCenterStore];
  const tmp = stateFromStores(8106)();
  const obj = ACTIVE(563);
  stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, ACTIVE];
  return react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1).length >= (tmp ? closure_8 : closure_9);
};
export const usePendingRequestCount = function usePendingRequestCount() {
  let currentUser;
  let linkedUsers;
  let stateFromStores;
  const items = [UserStore];
  const obj = stateFromStores(563);
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  stateFromStores(563);
  [][0] = FamilyCenterStore;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => null != link_status && link_status.link_status === unpackModuleId.PENDING && stateFromStores.id !== link_status.requestor_id).length;
  }
  return num;
};
export const useRequiresParentalConsent = function useRequiresParentalConsent(id) {
  let linkedUsers;
  const items = [FamilyCenterStore];
  let tmp = null != id;
  const obj = useStateFromStores;
  if (tmp) {
    const tmp2 = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers())[id];
    let flag;
    if (tmp2 != null) {
      flag = tmp2.teen_requires_parental_consent;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
export const useAcceptedRequestsCount = function useAcceptedRequestsCount() {
  let linkedUsers;
  const ACTIVE = constants.ACTIVE;
  const items = [FamilyCenterStore];
  const obj = ACTIVE(563);
  const stateFromStores = obj.useStateFromStores(items, f85773);
  const items1 = [stateFromStores, ACTIVE];
  return react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === ACTIVE);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1).length;
};
export const useActivityWindowTimeStamp = function useActivityWindowTimeStamp(activityWindowTimestampFormatter) {
  _require = activityWindowTimestampFormatter;
  const obj = require("useSelectedTeen");
  let closure_1 = obj.useSelectedTeenId();
  const items = [FamilyCenterStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = FamilyCenterStore.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const formatUserActivityTimestamp = tmp(7012).formatUserActivityTimestamp;
    require("FamilyCenterUtils");
    const date = new Date(stateFromStores);
    result = formatUserActivityTimestamp(date.getTime(), () => activityWindowTimestampFormatter, 7);
  }
  return result;
};
export const useLinkTimestampText = function useLinkTimestampText(id, status) {
  _require = id;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getLinkTimestamp(id));
  let formatLinkTimestampResult = null;
  const tmp = _require;
  if (null != stateFromStores) {
    const _Date = Date;
    const tmpResult = tmp(7012);
    formatLinkTimestampResult = tmpResult.formatLinkTimestamp(Date.parse(stateFromStores), status === constants.PENDING ? closure_10 : closure_6);
  }
  return formatLinkTimestampResult;
};
