// Module ID: 19120
// Function ID: 19121
// Name: DeepLinkEventMapping
// Dependencies: [19117, 2]
// Exports: mapDeepLinkEvent

// Module 19120 (DeepLinkEventMapping)
import DeepLinkTypes from "DeepLinkTypes" /* 19117 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/native/DeepLinkProcessor/DeepLinkEventMapping.tsx");

export const mapDeepLinkEvent = function mapDeepLinkEvent(url, arg1, arg2) {
  let tmp = arg1;
  if (!tmp) {
    tmp = "appsflyer" === url.source && url.isColdStart;
  }
  let AppsFlyer = DeepLinkTypes.DeeplinkSource.OS;
  if ("appsflyer" === url.source) {
    const isDeferred = url.isDeferred;
    const DeeplinkSource = tmp3(19117).DeeplinkSource;
    AppsFlyer = isDeferred ? DeeplinkSource.AppsFlyerDeferred : DeeplinkSource.AppsFlyer;
  } else {
    const tmp5 = arg2;
    if (tmp5) {
      AppsFlyer = tmp3(19117).DeeplinkSource.AppsFlyer;
    }
  }
  return { deeplink: { url: url.url, source: AppsFlyer }, isColdStart: tmp };
};
