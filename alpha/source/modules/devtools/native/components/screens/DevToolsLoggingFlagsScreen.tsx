// Module ID: 17573
// Function ID: 17574
// Name: DevToolsLoggingFlagsScreen
// Dependencies: [17, 1357, 21, 5014, 575, 504, 7060, 7369, 1358, 2]
// Exports: default

// Module 17573 (DevToolsLoggingFlagsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import DeveloperOptionsActionCreators from "DeveloperOptionsActionCreators" /* 1358 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import TableSwitchRow from "TableSwitchRow" /* 7369 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  let TableRowGroup;
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isLoggingInteractionTTIAnalytics;
  let isTracingRequests;
  let items1;
  let obj3;
  const tmp = closure_6();
  let obj = get_initialized;
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics: DeveloperOptionsStore.isLoggingInteractionTTIAnalytics, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  let obj2 = { style: tmp.container, contentContainerStyle: tmp.content, children: hasOwnProperty(TableRowGroup, obj3) };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isLoggingInteractionTTIAnalytics, isTracingRequests } = stateFromStoresObject);
  obj3 = { title: "Logging", hasIcons: false, children: items1 };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  items1 = [, , , ];
  const obj4 = {
    label: "Gateway Events",
    subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    value: isLoggingGatewayEvents,
    onValueChange(logGatewayEvents) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logGatewayEvents };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[0] = React3(TableSwitchRow.TableSwitchRow, obj4);
  const obj5 = {
    label: "Analytics Events",
    subLabel: "Logs all analytics events to the developer console.",
    value: isLoggingAnalyticsEvents,
    onValueChange(logAnalyticsEvents) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logAnalyticsEvents };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[1] = React3(TableSwitchRow.TableSwitchRow, obj5);
  const obj6 = {
    label: "Interaction TTI Analytics",
    subLabel: "Logs Interaction TTI analytics events to the developer console.",
    value: isLoggingInteractionTTIAnalytics,
    onValueChange(logInteractionTTIAnalytics) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { logInteractionTTIAnalytics };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[2] = React3(TableSwitchRow.TableSwitchRow, obj6);
  const obj7 = {
    label: "Tracing Requests",
    subLabel: "Force trace all client requests with APM.",
    value: isTracingRequests,
    onValueChange(trace) {
      const obj = DeveloperOptionsActionCreators;
      const obj2 = { trace };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[3] = React3(TableSwitchRow.TableSwitchRow, obj7);
  return React3(ScrollView, obj2);
};
