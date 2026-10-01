// Module ID: 11929
// Function ID: 11930
// Name: useRequiredLinkedLobbyApplicationAuthorization
// Dependencies: [19, 5063, 6528, 504, 6591, 6584, 2]
// Exports: default

// Module 11929 (useRequiredLinkedLobbyApplicationAuthorization)
import react from "react" /* 19 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6528 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6584 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6591 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

const useEffect = react.useEffect;
const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

export default function useRequiredLinkedLobbyApplicationAuthorization(require_application_authorization) {
  let stateFromStores;
  let tmp17;
  let prop;
  if (require_application_authorization != null) {
    prop = require_application_authorization.require_application_authorization;
  }
  let application_id = null;
  if (prop) {
    application_id = require_application_authorization.application_id;
  }
  let obj = application_id(stateFromStores[3]);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { authorizationsFetchState: AuthorizedAppsStore.getFetchState(), applicationOAuth2Token: AuthorizedAppsStore.getNewestTokenForApplication(application_id) };
    return obj;
  });
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [ApplicationStore];
  const obj2 = application_id(stateFromStores[3]);
  stateFromStores = obj2.useStateFromStores(items1, () => ApplicationStore.getApplication(application_id));
  const items2 = [ApplicationStore];
  const obj3 = application_id(stateFromStores[3]);
  let stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let parentId;
    const getApplication = ApplicationStore.getApplication;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return getApplication(parentId);
  });
  const items3 = [AuthorizedAppsStore];
  const items4 = [authorizationsFetchState, application_id];
  const obj4 = application_id(stateFromStores[3]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => {
    let parentId;
    const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return getNewestTokenForApplication(parentId);
  });
  stateFromStores1(() => {
    const tmp = null != application_id && authorizationsFetchState === FetchState.NOT_FETCHED;
    if (tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items4);
  const items5 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  stateFromStores1(() => {
    let tmp2 = null != application_id;
    const tmp = application_id;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === FetchState.FETCHED;
    }
    if (tmp2) {
      const items = [tmp];
      const obj = ApplicationActionCreatorsDefault;
      const applications = obj.fetchApplications(items, false);
    }
  }, items5);
  const items6 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  stateFromStores1(() => {
    const tmp2 = null != stateFromStores && null != tmp.parentId && null == stateFromStores1 && authorizationsFetchState === FetchState.FETCHED;
    if (tmp2) {
      const items = [stateFromStores.parentId];
      const obj = ApplicationActionCreatorsDefault;
      const applications = obj.fetchApplications(items, false);
    }
  }, items6);
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    tmp10 = null == stateFromStores.parentId || null != stateFromStores1;
  }
  const tmp13 = null == applicationOAuth2Token && null != stateFromStores && tmp10 && null != stateFromStores1 && null != stateFromStores2;
  let tmp14 = null != application_id;
  if (tmp14) {
    tmp14 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp10;
  }
  const obj5 = { showLinkedLobbyApplicationLoadingIndicator: tmp14, requiredLinkedLobbyApplication: tmp17, shouldRelaunchLinkedLobbyApplication: tmp13 };
  tmp17 = null;
  if (null == applicationOAuth2Token && null != stateFromStores && tmp10) {
    let tmp18 = stateFromStores;
    if (!tmp13) {
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      tmp18 = stateFromStores1;
    }
    tmp17 = tmp18;
  }
  return obj5;
};
