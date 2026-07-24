// Module ID: 1166
// Function ID: 13267
// Name: INTEGRATION_NAME
// Dependencies: [77, 1136, 1142, 794, 1134, 1137, 1098]
// Exports: reactNativeNavigationIntegration

// Module 1166 (INTEGRATION_NAME)
import _defineProperty from "_defineProperty";

const require = arg1;
const self = this;

export const INTEGRATION_NAME = "ReactNativeNavigation";
export const reactNativeNavigationIntegration = function reactNativeNavigationIntegration(enableTabsInstrumentation) {
  let navigation;
  let routeChangeTimeoutMs;
  ({ navigation, routeChangeTimeoutMs } = enableTabsInstrumentation);
  let num = 1000;
  if (undefined !== routeChangeTimeoutMs) {
    num = routeChangeTimeoutMs;
  }
  enableTabsInstrumentation = enableTabsInstrumentation.enableTabsInstrumentation;
  const ignoreEmptyBackNavigationTransactions = enableTabsInstrumentation.ignoreEmptyBackNavigationTransactions;
  let closure_4 = undefined === ignoreEmptyBackNavigationTransactions || ignoreEmptyBackNavigationTransactions;
  let closure_5 = [];
  const defaultIdleOptions = require(1136) /* getDefaultIdleNavigationSpanOptions */.defaultIdleOptions;
  let c7 = null;
  function startIdleNavigationSpan() {
    if (store) {
      discardLatestNavigationSpan();
    }
    let beforeStartSpan;
    if (null != currentRoute) {
      beforeStartSpan = currentRoute.options.beforeStartSpan;
    }
    if (beforeStartSpan) {
      const options = currentRoute.options;
      let beforeStartSpanResult = options.beforeStartSpan(outer1_0(outer1_1[1]).getDefaultIdleNavigationSpanOptions());
      const obj3 = outer1_0(outer1_1[1]);
    } else {
      beforeStartSpanResult = outer1_0(outer1_1[1]).getDefaultIdleNavigationSpanOptions();
      const obj2 = outer1_0(outer1_1[1]);
    }
    const result = outer1_0(outer1_1[1]).startIdleNavigationSpan(beforeStartSpanResult, defaultIdleOptions);
    store = result;
    if (null != result) {
      const attr = store.setAttribute(outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, outer1_0(outer1_1[4]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NATIVE_NAVIGATION);
    }
    if (closure_4) {
      const obj4 = outer1_0(outer1_1[5]);
      const result1 = obj4.ignoreEmptyBackNavigation(outer1_0(outer1_1[3]).getClient(), store);
      const obj5 = outer1_0(outer1_1[3]);
    }
    currentRoute = store;
    const obj = outer1_0(outer1_1[1]);
    const obj6 = outer1_0(outer1_1[5]);
    const client = outer1_0(outer1_1[3]).getClient();
    const result2 = obj6.ignoreEmptyRouteChangeTransactions(client, store, outer1_0(outer1_1[1]).DEFAULT_NAVIGATION_SPAN_NAME, () => result === closure_0);
    const timeout = setTimeout(discardLatestNavigationSpan.bind(outer1_2), num);
  }
  let result = navigation.events().registerCommandListener(startIdleNavigationSpan);
  if (tmp) {
    let result1 = navigation.events().registerBottomTabPressedListener(startIdleNavigationSpan);
    const eventsResult1 = navigation.events();
  }
  const eventsResult = navigation.events();
  tmp = undefined !== enableTabsInstrumentation && enableTabsInstrumentation;
  let result2 = navigation.events().registerComponentWillAppearListener(function updateLatestNavigationSpanWithCurrentComponent(componentId) {
    if (store) {
      if (_null) {
        if (componentId.componentId === _null.componentId) {
          discardLatestNavigationSpan();
        }
      }
      clearStateChangeTimeout();
      const hasItem = arr.includes(componentId.componentId);
      let obj = outer1_0(outer1_1[3]);
      if (obj.spanToJSON(store).description === outer1_0(outer1_1[1]).DEFAULT_NAVIGATION_SPAN_NAME) {
        store.updateName(componentId.componentName);
      }
      obj = {};
      ({ componentName: obj2["route.name"], componentId: obj2["route.component_id"], componentType: obj2["route.component_type"] } = componentId);
      obj["route.has_been_seen"] = hasItem;
      let componentName;
      if (null != _null) {
        componentName = _null.componentName;
      }
      obj["previous_route.name"] = componentName;
      componentId = undefined;
      if (null != _null) {
        componentId = _null.componentId;
      }
      obj["previous_route.component_id"] = componentId;
      let componentType;
      if (null != _null) {
        componentType = _null.componentType;
      }
      obj["previous_route.component_type"] = componentType;
      store.setAttributes(3(3(obj, outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component"), outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"));
      if (null != currentRoute) {
        currentRoute.setCurrentRoute(componentId.componentName);
      }
      const tmp13Result = 3(obj, outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component");
      obj = { category: "navigation", type: "navigation" };
      const _HermesInternal = HermesInternal;
      obj.message = "Navigation to " + componentId.componentName;
      const obj1 = {};
      let componentName1;
      if (null != _null) {
        componentName1 = _null.componentName;
      }
      obj1.from = componentName1;
      obj1.to = componentId.componentName;
      obj.data = obj1;
      outer1_0(outer1_1[3]).addBreadcrumb(obj);
      pushRecentComponentId(componentId.componentId);
      _null = componentId;
      store = undefined;
      const obj3 = outer1_0(outer1_1[3]);
    }
  });
  function pushRecentComponentId(componentId) {
    arr = arr.push(componentId);
    if (arr.length > 200) {
      arr = arr.slice(arr.length - 200);
    }
  }
  function discardLatestNavigationSpan() {
    if (store) {
      if (obj.isSentrySpan(store)) {
        store._sampled = false;
      }
      store.end();
      store = undefined;
      obj = outer1_0(outer1_1[6]);
    }
    clearStateChangeTimeout();
  }
  function clearStateChangeTimeout() {
    if (undefined !== c1) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c1);
      c1 = undefined;
    }
  }
  return {
    name: "ReactNativeNavigation",
    afterAllSetup(client) {
      let obj = outer1_0(outer1_1[2]);
      const reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(client);
      if (reactNativeTracingIntegration) {
        obj = { finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs, idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs };
      }
    }
  };
};
