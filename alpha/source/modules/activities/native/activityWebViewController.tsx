// Module ID: 11464
// Function ID: 11465
// Name: activityWebViewController
// Dependencies: [4822, 11465, 11466, 6777, 11488, 10771, 5909, 1128, 2]
// Exports: getOrCreateActivityWebViewController, releaseActivityWebView

// Module 11464 (activityWebViewController)
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5909 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6777 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10771 */;
import makeIframeIdDefault from "makeIframeId" /* 11465 */;
import createWebViewControllerDefault from "createWebViewController" /* 11466 */;
import makeShellBridgeSecretDefault from "makeShellBridgeSecret" /* 11488 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import size from "module_2" /* 2 */;

let _undefined;

let result = size.fileFinishedImporting("modules/activities/native/activityWebViewController.tsx");

export const getOrCreateActivityWebViewController = function getOrCreateActivityWebViewController(applicationId) {
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
};
export const releaseActivityWebView = function releaseActivityWebView() {
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
};
