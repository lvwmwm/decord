// Module ID: 12852
// Function ID: 12853
// Name: activityWebViewController
// Dependencies: [5154, 12853, 12854, 7021, 12876, 12747, 6269, 1113, 2]
// Exports: getOrCreateActivityWebViewController, releaseActivityWebView

// Module 12852 (activityWebViewController)
import intl3 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6269 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 7021 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 12747 */;
import makeIframeIdDefault from "makeIframeId" /* 12853 */;
import createWebViewControllerDefault from "createWebViewController" /* 12854 */;
import makeShellBridgeSecretDefault from "makeShellBridgeSecret" /* 12876 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
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
