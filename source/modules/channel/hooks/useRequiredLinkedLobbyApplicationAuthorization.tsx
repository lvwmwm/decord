// Module ID: 11497
// Function ID: 89565
// Name: useRequiredLinkedLobbyApplicationAuthorization
// Dependencies: [31, 4167, 5066, 566, 5470, 5463, 2]
// Exports: default

// Module 11497 (useRequiredLinkedLobbyApplicationAuthorization)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

export default function useRequiredLinkedLobbyApplicationAuthorization(require_application_authorization) {
  let application_id = null;
  if (null != require_application_authorization) {
    application_id = null;
    if (require_application_authorization.require_application_authorization) {
      application_id = require_application_authorization.application_id;
    }
  }
  let obj = application_id(stateFromStores[3]);
  let items = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ authorizationsFetchState: outer1_5.getFetchState(), applicationOAuth2Token: outer1_5.getNewestTokenForApplication(application_id) }));
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [_isNativeReflectConstruct];
  stateFromStores = application_id(stateFromStores[3]).useStateFromStores(items1, () => outer1_4.getApplication(application_id));
  const obj2 = application_id(stateFromStores[3]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = application_id(stateFromStores[3]).useStateFromStores(items2, () => {
    let parentId;
    if (null != stateFromStores) {
      parentId = stateFromStores.parentId;
    }
    return outer1_4.getApplication(parentId);
  });
  const items3 = [authorizationsFetchState, application_id];
  stateFromStores1(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = authorizationsFetchState === outer1_6.NOT_FETCHED;
    }
    if (tmp) {
      const response = authorizationsFetchState(stateFromStores[4]).fetch();
      const obj = authorizationsFetchState(stateFromStores[4]);
    }
  }, items3);
  const items4 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  stateFromStores1(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      tmp = authorizationsFetchState === outer1_6.FETCHED;
    }
    if (tmp) {
      const items = [application_id];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
    }
  }, items4);
  const items5 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  stateFromStores1(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != stateFromStores.parentId;
    }
    if (tmp) {
      tmp = null == stateFromStores1;
    }
    if (tmp) {
      tmp = authorizationsFetchState === outer1_6.FETCHED;
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
