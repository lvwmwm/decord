// Module ID: 13386
// Function ID: 101784
// Name: DevToolsLoggingFlagsScreen
// Dependencies: []
// Exports: default

// Module 13386 (DevToolsLoggingFlagsScreen)
const ScrollView = require(dependencyMap[0]).ScrollView;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.content = { padding: importDefault(dependencyMap[4]).space.PX_16 };
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[9]);
const result = _module2.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLoggingFlagsScreen.tsx");

export default function DevToolsLoggingFlagsScreen() {
  let isLoggingAnalyticsEvents;
  let isLoggingGatewayEvents;
  let isTracingRequests;
  const tmp = callback3();
  let obj = require(dependencyMap[5]);
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isLoggingGatewayEvents: closure_3.isLoggingGatewayEvents, isLoggingAnalyticsEvents: closure_3.isLoggingAnalyticsEvents, isTracingRequests: closure_3.isTracingRequests }));
  obj = { style: tmp.container, contentContainerStyle: tmp.content };
  ({ isLoggingGatewayEvents, isLoggingAnalyticsEvents, isTracingRequests } = stateFromStoresObject);
  obj = { width: "9e0f7ca920e7d55418409ccf322d663c", height: "BurgerIcon" };
  const obj1 = {
    "Bool(false)": "ct",
    "Bool(false)": "data",
    value: isLoggingGatewayEvents,
    onValueChange(logGatewayEvents) {
      let obj = callback(closure_1[8]);
      obj = { logGatewayEvents };
      return obj.setDeveloperOptionSettings(obj);
    }
  };
  const items1 = [
    callback(require(dependencyMap[7]).TableSwitchRow, obj1),
    callback(require(dependencyMap[7]).TableSwitchRow, {
      value: isLoggingAnalyticsEvents,
      onValueChange(logAnalyticsEvents) {
        let obj = callback(closure_1[8]);
        obj = { logAnalyticsEvents };
        return obj.setDeveloperOptionSettings(obj);
      }
    }),
    callback(require(dependencyMap[7]).TableSwitchRow, {
      value: isTracingRequests,
      onValueChange(trace) {
        let obj = callback(closure_1[8]);
        obj = { trace };
        return obj.setDeveloperOptionSettings(obj);
      }
    })
  ];
  obj.children = items1;
  obj.children = callback2(require(dependencyMap[6]).TableRowGroup, obj);
  return callback(ScrollView, obj);
};
