// Module ID: 14200
// Function ID: 14201
// Name: NavigationTTIAnalytics
// Dependencies: [1362, 3, 572, 2]
// Exports: trackNavigationTTISpan

// Module 14200 (NavigationTTIAnalytics)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1362 */;
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
