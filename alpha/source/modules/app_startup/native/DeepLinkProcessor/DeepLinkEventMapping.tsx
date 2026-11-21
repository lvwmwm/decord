// Module ID: 20176
// Function ID: 20177
// Name: DeepLinkEventMapping
// Dependencies: [20173, 2]
// Exports: mapDeepLinkEvent

// Module 20176 (DeepLinkEventMapping)
import DeepLinkTypes from "DeepLinkTypes" /* 20173 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/native/DeepLinkProcessor/DeepLinkEventMapping.tsx");

export function mapDeepLinkEvent(url, arg1, arg2) {
  let tmp = arg1;
  if (!tmp) {
    tmp = "appsflyer" === url.source && url.isColdStart;
  }
  let AppsFlyer = DeepLinkTypes.DeeplinkSource.OS;
  if ("appsflyer" === url.source) {
    const isDeferred = url.isDeferred;
    const DeeplinkSource = tmp3(20173).DeeplinkSource;
    AppsFlyer = isDeferred ? DeeplinkSource.AppsFlyerDeferred : DeeplinkSource.AppsFlyer;
  } else {
    const tmp5 = arg2;
    if (tmp5) {
      AppsFlyer = tmp3(20173).DeeplinkSource.AppsFlyer;
    }
  }
  return { deeplink: { url: url.url, source: AppsFlyer }, isColdStart: tmp };
}
