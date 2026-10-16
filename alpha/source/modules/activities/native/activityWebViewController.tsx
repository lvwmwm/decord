// Module ID: 11243
// Function ID: 11244
// Name: activityWebViewController
// Dependencies: [2067, 11244, 11245, 10952, 10968, 5362, 1128, 2]
// Exports: getOrCreateActivityWebViewController, releaseActivityWebView

// Module 11243 (activityWebViewController)
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5362 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 10952 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10968 */;
import makeIframeIdDefault from "makeIframeId" /* 11244 */;
import createWebViewControllerDefault from "createWebViewController" /* 11245 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import size from "module_2" /* 2 */;

let _undefined;

let result = size.fileFinishedImporting("modules/activities/native/activityWebViewController.tsx");

export const getOrCreateActivityWebViewController = function getOrCreateActivityWebViewController(applicationId) {
  let obj2;
  if (null != _undefined) {
    return _undefined.iframeId;
  } else {
    let tmp2 = applicationId;
    let tmp5 = makeIframeIdDefault();
    let obj = {
      contextSource: obj2,
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
    obj2 = { type: EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY, applicationId };
    const tmp6 = createWebViewControllerDefault;
    _undefined = tmp6(tmp5, obj);
    return tmp5;
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
