// Module ID: 15864
// Function ID: 15865
// Name: DevToolsLoggingFlagsScreen
// Dependencies: [17, 1350, 21, 4790, 580, 558, 568, 504, 1351, 7478, 5935, 2]

// Module 15864 (DevToolsLoggingFlagsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import TableRowGroup from "TableRowGroup" /* 5935 */;
import TableSwitchRow from "TableSwitchRow" /* 7478 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1350 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4790 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ScrollView = _mod17.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(19);
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
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp5, tmp6);
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(logGatewayEvents) {
      return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logGatewayEvents });
    };
    cResult[2] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== isLoggingGatewayEvents) {
    const obj2 = { label: "Gateway Events", subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.", value: isLoggingGatewayEvents, onValueChange: tmp9 };
    const tmp12 = React4(tmp(7478).TableSwitchRow, obj2);
    cResult[3] = isLoggingGatewayEvents;
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function w(logAnalyticsEvents) {
      return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logAnalyticsEvents });
    };
    cResult[5] = fn3;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== isLoggingAnalyticsEvents) {
    const obj3 = { label: "Analytics Events", subLabel: "Logs all analytics events to the developer console.", value: isLoggingAnalyticsEvents, onValueChange: tmp13 };
    const tmp16 = React4(tmp(7478).TableSwitchRow, obj3);
    cResult[6] = isLoggingAnalyticsEvents;
    cResult[7] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { trace: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    cResult[8] = S;
    const tmp17 = S;
  } else {
    class S {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { trace: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[9] !== isTracingRequests) {
    class S {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { trace: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
    const obj4 = { label: "Tracing Requests", subLabel: "Force trace all client requests with APM.", value: isTracingRequests, onValueChange: tmp17 };
    const tmp19 = React4(tmp(7478).TableSwitchRow, obj4);
    cResult[9] = isTracingRequests;
    cResult[10] = tmp19;
  } else {
    class S {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { trace: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  if (cResult[11] === tmp10) {
    class S {
      constructor(arg0) {
        obj = closure_1_0(closure_1_1[8]);
        obj1 = { trace: arg0 };
        return obj.setDeveloperOptionSettings(obj1);
      }
    }
  }
  const obj5 = { title: "Logging", hasIcons: false, children: null };
  const items1 = [tmp10, tmp14, tmp18];
  obj5.children = items1;
  const tmpResult = initialize;
  cResult[11] = tmp10;
  cResult[12] = tmp14;
  cResult[13] = tmp18;
  cResult[14] = hasOwnProperty(TableRowGroup.TableRowGroup, obj5);
}) : (() => {
  const tmp = closure_6();
  const items = [DeveloperOptionsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: DeveloperOptionsStore.isLoggingGatewayEvents, isLoggingAnalyticsEvents: DeveloperOptionsStore.isLoggingAnalyticsEvents, isTracingRequests: DeveloperOptionsStore.isTracingRequests }));
  const obj2 = { style: tmp.container, contentContainerStyle: tmp.content, children: null };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  const obj3 = { title: "Logging", hasIcons: false, children: null };
  const items1 = [
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Gateway Events",
      subLabel: "Logs all gateway events to console, including content. Enable verbose logs to see them.",
      value: isLoggingGatewayEvents,
      onValueChange(logGatewayEvents) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logGatewayEvents });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Analytics Events",
      subLabel: "Logs all analytics events to the developer console.",
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ logAnalyticsEvents });
      }
    }),
    React4(TableSwitchRow.TableSwitchRow, {
      label: "Tracing Requests",
      subLabel: "Force trace all client requests with APM.",
      value: isTracingRequests,
      onValueChange(trace) {
        return require("DeveloperOptionsActionCreators").setDeveloperOptionSettings({ trace });
      }
    })
  ];
  obj3.children = items1;
  obj2.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj3);
  return React4(ScrollView, obj2);
});
