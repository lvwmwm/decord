// Module ID: 13516
// Function ID: 104018
// Name: DevToolsLoggingFlagsScreen
// Dependencies: [27, 683, 33, 4130, 689, 566, 5503, 5504, 685, 2]
// Exports: default

// Module 13516 (DevToolsLoggingFlagsScreen)
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.content = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isTracingRequests;
  const tmp = callback3();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: outer1_3.isLoggingGatewayEvents, isLoggingAnalyticsEvents: outer1_3.isLoggingAnalyticsEvents, isTracingRequests: outer1_3.isTracingRequests }));
  obj = { style: tmp.container, contentContainerStyle: tmp.content };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj = { title: "Logging", hasIcons: false };
  const obj1 = {
    label: "Gateway Events",
    subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    value: isLoggingGatewayEvents,
    onValueChange(logGatewayEvents) {
      let obj = outer1_0(outer1_1[8]);
      obj = { logGatewayEvents };
      return obj.setDeveloperOptionSettings(obj);
    }
  };
  const items1 = [callback(require(5504) /* TableSwitchRow */.TableSwitchRow, obj1), , ];
  const obj2 = {
    label: "Analytics Events",
    subLabel: "Logs all analytics events to the developer console.",
    value: isLoggingAnalyticsEvents,
    onValueChange(logAnalyticsEvents) {
      let obj = outer1_0(outer1_1[8]);
      obj = { logAnalyticsEvents };
      return obj.setDeveloperOptionSettings(obj);
    }
  };
  items1[1] = callback(require(5504) /* TableSwitchRow */.TableSwitchRow, obj2);
  const obj3 = {
    label: "Tracing Requests",
    subLabel: "Force trace all client requests with APM.",
    value: isTracingRequests,
    onValueChange(trace) {
      let obj = outer1_0(outer1_1[8]);
      obj = { trace };
      return obj.setDeveloperOptionSettings(obj);
    }
  };
  items1[2] = callback(require(5504) /* TableSwitchRow */.TableSwitchRow, obj3);
  obj.children = items1;
  obj.children = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
  return callback(ScrollView, obj);
};
