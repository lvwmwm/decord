// Module ID: 11456
// Function ID: 89257
// Name: useRequiredLinkedLobbyApplicationAuthorization
// Dependencies: []
// Exports: default

// Module 11456 (useRequiredLinkedLobbyApplicationAuthorization)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const FetchState = require(dependencyMap[2]).FetchState;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

export default function useRequiredLinkedLobbyApplicationAuthorization(require_application_authorization) {
  let application_id = null;
  if (null != require_application_authorization) {
    application_id = null;
    if (require_application_authorization.require_application_authorization) {
      application_id = require_application_authorization.application_id;
    }
  }
  const require = application_id;
  let obj = require(dependencyMap[3]);
  const items = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ authorizationsFetchState: authStore.getFetchState(), applicationOAuth2Token: authStore.getNewestTokenForApplication(application_id) }));
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const importDefault = authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [closure_4];
  let stateFromStores = require(dependencyMap[3]).useStateFromStores(items1, () => store.getApplication(application_id));
  const dependencyMap = stateFromStores;
  const obj2 = require(dependencyMap[3]);
  const items2 = [closure_4];
  const stateFromStores1 = require(dependencyMap[3]).useStateFromStores(items2, () => {
    let parentId;
    if (null != stateFromStores) {
      parentId = stateFromStores.parentId;
    }
    return store.getApplication(parentId);
  });
  const useEffect = stateFromStores1;
  const items3 = [authorizationsFetchState, application_id];
  useEffect(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = authorizationsFetchState === constants.NOT_FETCHED;
    }
    if (tmp) {
      const response = authorizationsFetchState(stateFromStores[4]).fetch();
      const obj = authorizationsFetchState(stateFromStores[4]);
    }
  }, items3);
  const items4 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  useEffect(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      tmp = authorizationsFetchState === constants.FETCHED;
    }
    if (tmp) {
      const items = [application_id];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
    }
  }, items4);
  const items5 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != stateFromStores.parentId;
    }
    if (tmp) {
      tmp = null == stateFromStores1;
    }
    if (tmp) {
      tmp = authorizationsFetchState === constants.FETCHED;
    }
    if (tmp) {
      const items = [stateFromStores.parentId];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
    }
  }, items5);
  let tmp8 = null != stateFromStores;
  if (tmp8) {
    tmp8 = null == stateFromStores.parentId || null != stateFromStores1;
    const tmp9 = null == stateFromStores.parentId || null != stateFromStores1;
  }
  obj = {};
  let tmp10 = null != application_id;
  if (tmp10) {
    tmp10 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp8;
    const tmp12 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp8;
  }
  obj.showLinkedLobbyApplicationLoadingIndicator = tmp10;
  let tmp13 = null;
  if (null == applicationOAuth2Token) {
    tmp13 = null;
    if (null != stateFromStores) {
      tmp13 = null;
      if (tmp8) {
        if (null != stateFromStores1) {
          stateFromStores = stateFromStores1;
        }
        tmp13 = stateFromStores;
      }
    }
  }
  obj.requiredLinkedLobbyApplication = tmp13;
  return obj;
};
