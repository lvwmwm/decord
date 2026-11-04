// Module ID: 11995
// Function ID: 11996
// Name: activityWebViewController
// Dependencies: [4989, 11996, 11997, 6983, 12017, 11118, 6094, 1113, 2]
// Exports: getOrCreateActivityWebViewController, releaseActivityWebView

// Module 11995 (activityWebViewController)
import intl3 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6094 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6983 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 11118 */;
import makeIframeIdDefault from "makeIframeId" /* 11996 */;
import createWebViewControllerDefault from "createWebViewController" /* 11997 */;
import makeShellBridgeSecretDefault from "makeShellBridgeSecret" /* 12017 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import size from "module_2" /* 2 */;

let _undefined;

let result = size.fileFinishedImporting("modules/activities/native/activityWebViewController.tsx");

export function getOrCreateActivityWebViewController(applicationId) {
  let obj4;
  let tmp7Result;
  if (null != _undefined) {
    let obj = { iframeId: _undefined.iframeId, shellBridgeSecret: _undefined.shellBridgeSecret };
    let tmp2 = _undefined;
    return obj;
  } else {
    let tmp5 = dependencyMap;
    let obj2 = { iframeId: tmp7Result.iframeId, shellBridgeSecret: _undefined.shellBridgeSecret };
    const tmp6 = makeIframeIdDefault();
    let obj3 = {
      contextSource: obj4,
      shellBridgeSecret: makeShellBridgeSecretDefault(),
      getOrigin() {
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          let tmp2;
          const obj = EmbeddedActivitiesStore;
          if (null != connectedActivityLocation) {
            const selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
            let url;
            if (selfEmbeddedActivityForLocation != null) {
              url = selfEmbeddedActivityForLocation.url;
            }
            tmp2 = url;
          }
          return tmp2;
        },
      onDisallowedNavigation() {
          let intl;
          let intl2;
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          let tmp2;
          const obj = EmbeddedActivitiesStore;
          if (null != connectedActivityLocation) {
            const selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
            let applicationId;
            if (selfEmbeddedActivityForLocation != null) {
              applicationId = selfEmbeddedActivityForLocation.applicationId;
            }
            tmp2 = applicationId;
          }
          const tmp5 = null != connectedActivityLocation && null != tmp2;
          if (tmp5) {
            const obj3 = { location: connectedActivityLocation, applicationId: tmp2, showFeedback: false };
            const obj2 = leaveEmbeddedActivity;
            const result = obj2.leaveEmbeddedActivity(obj3);
            const obj4 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl3.intl;
            intl2 = intl3.intl;
            show(obj4);
          }
        }
    };
    obj4 = { type: EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY, applicationId };
    const tmp7 = createWebViewControllerDefault;
    tmp7Result = tmp7(tmp6, obj3);
    _undefined = tmp7Result;
    return obj2;
  }
}
export function releaseActivityWebView() {
  let iframeId;
  if (_undefined != null) {
    iframeId = _undefined.iframeId;
  }
  const obj = _undefined;
  if (_undefined != null) {
    obj.release();
  }
  _undefined = undefined;
  return iframeId;
}
