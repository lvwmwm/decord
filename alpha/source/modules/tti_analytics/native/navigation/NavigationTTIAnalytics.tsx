// Module ID: 13281
// Function ID: 13282
// Name: NavigationTTIAnalytics
// Dependencies: [1358, 3, 572, 2]
// Exports: trackNavigationTTISpan

// Module 13281 (NavigationTTIAnalytics)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1358 */;
import size from "module_2" /* 2 */;

let obj = new LoggerDefault("NavTTIAnalytics");
obj.enableNativeLogger(true);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIAnalytics.tsx");

export function trackNavigationTTISpan(spanComponentName, spanTtiProperties) {
  if (DeveloperOptionsStore.isLoggingInteractionTTIAnalytics) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    obj.info("" + spanComponentName + " " + JSON.stringify(spanTtiProperties));
  }
  obj = DispatcherDefault;
  const obj2 = { type: "TRACK", event: spanComponentName, properties: spanTtiProperties };
  obj.dispatch(obj2);
}
