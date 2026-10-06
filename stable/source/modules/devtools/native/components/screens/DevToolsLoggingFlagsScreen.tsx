// Module ID: 15129
// Function ID: 15130
// Name: DevToolsLoggingFlagsScreen
// Dependencies: [17, 1358, 21, 4837, 588, 558, 576, 504, 1359, 6621, 5997, 2]

// Module 15129 (DevToolsLoggingFlagsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import TableRowGroup2 from "TableRowGroup" /* 5997 */;
import TableSwitchRow from "TableSwitchRow" /* 6621 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1358 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isTracingRequests;
  let items1;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(19);
  closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperOptionsStore];
    const fn = function v() {
      return { isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isTracingRequests: DeveloperOptionsStore.isTracingRequests };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(logGatewayEvents) {
      const obj = require("DeveloperOptionsActionCreators");
      const obj2 = { logGatewayEvents };
      return obj.setDeveloperOptionSettings(obj2);
    };
    cResult[2] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== isLoggingGatewayEvents) {
    let obj2 = { label: "Gateway Events", subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.", value: isLoggingGatewayEvents, onValueChange: tmp9 };
    const tmp12 = React3(TableSwitchRow.TableSwitchRow, obj2);
    cResult[3] = isLoggingGatewayEvents;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function w(logAnalyticsEvents) {
      const obj = require("DeveloperOptionsActionCreators");
      const obj2 = { logAnalyticsEvents };
      return obj.setDeveloperOptionSettings(obj2);
    };
    cResult[5] = fn3;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== isLoggingAnalyticsEvents) {
    const obj3 = { label: "Analytics Events", subLabel: "Logs all analytics events to the developer console.", value: isLoggingAnalyticsEvents, onValueChange: tmp13 };
    const tmp16 = React3(TableSwitchRow.TableSwitchRow, obj3);
    cResult[6] = isLoggingAnalyticsEvents;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(trace) {
        const obj = require("DeveloperOptionsActionCreators");
        const obj2 = { trace };
        return obj.setDeveloperOptionSettings(obj2);
      }
    }
    cResult[8] = S;
    tmp17 = S;
  } else {
    class S {
      constructor(trace) {
        const obj = require("DeveloperOptionsActionCreators");
        const obj2 = { trace };
        return obj.setDeveloperOptionSettings(obj2);
      }
    }
  }
  if (cResult[9] !== isTracingRequests) {
    class S {
      constructor(trace) {
        const obj = require("DeveloperOptionsActionCreators");
        const obj2 = { trace };
        return obj.setDeveloperOptionSettings(obj2);
      }
    }
    const obj4 = { label: "Tracing Requests", subLabel: "Force trace all client requests with APM.", value: isTracingRequests, onValueChange: tmp17 };
    cResult[9] = isTracingRequests;
    cResult[10] = React3(TableSwitchRow.TableSwitchRow, obj4);
    const tmp19 = React3(TableSwitchRow.TableSwitchRow, obj4);
  } else {
    class S {
      constructor(trace) {
        const obj = require("DeveloperOptionsActionCreators");
        const obj2 = { trace };
        return obj.setDeveloperOptionSettings(obj2);
      }
    }
  }
  if (cResult[11] === tmp10) {
    class S {
      constructor(trace) {
        const obj = require("DeveloperOptionsActionCreators");
        const obj2 = { trace };
        return obj.setDeveloperOptionSettings(obj2);
      }
    }
  }
  const obj5 = { title: "Logging", hasIcons: false, children: items1 };
  items1 = [tmp10, tmp14, tmp18];
  cResult[11] = tmp10;
  cResult[12] = tmp14;
  cResult[13] = tmp18;
  cResult[14] = hasOwnProperty(TableRowGroup2.TableRowGroup, obj5);
  hasOwnProperty(TableRowGroup2.TableRowGroup, obj5);
}) : (() => {
  let TableRowGroup;
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isTracingRequests;
  let items1;
  let obj3;
  const tmp = closure_6();
  let obj = get_initialized;
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  let obj2 = { style: tmp.container, contentContainerStyle: tmp.content, children: hasOwnProperty(TableRowGroup, obj3) };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj3 = { title: "Logging", hasIcons: false, children: items1 };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  items1 = [, , ];
  const obj4 = {
    label: "Gateway Events",
    subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    value: isLoggingGatewayEvents,
    onValueChange(logGatewayEvents) {
      const obj = require("DeveloperOptionsActionCreators");
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
      const obj = require("DeveloperOptionsActionCreators");
      const obj2 = { logAnalyticsEvents };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[1] = React3(TableSwitchRow.TableSwitchRow, obj5);
  const obj6 = {
    label: "Tracing Requests",
    subLabel: "Force trace all client requests with APM.",
    value: isTracingRequests,
    onValueChange(trace) {
      const obj = require("DeveloperOptionsActionCreators");
      const obj2 = { trace };
      return obj.setDeveloperOptionSettings(obj2);
    }
  };
  items1[2] = React3(TableSwitchRow.TableSwitchRow, obj6);
  return React3(ScrollView, obj2);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default tmp4;
