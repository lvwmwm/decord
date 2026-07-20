// Module ID: 1166
// Function ID: 13261
// Name: INTEGRATION_NAME
// Dependencies: []
// Exports: reactNativeNavigationIntegration

// Module 1166 (INTEGRATION_NAME)
const self = this;
let closure_3 = importDefault(dependencyMap[0]);

export const INTEGRATION_NAME = "ReactNativeNavigation";
export const reactNativeNavigationIntegration = function reactNativeNavigationIntegration(enableTabsInstrumentation) {
  let navigation;
  let routeChangeTimeoutMs;
  ({ navigation, routeChangeTimeoutMs } = enableTabsInstrumentation);
  let num = 1000;
  if (undefined !== routeChangeTimeoutMs) {
    num = routeChangeTimeoutMs;
  }
  let closure_3 = num;
  enableTabsInstrumentation = enableTabsInstrumentation.enableTabsInstrumentation;
  const ignoreEmptyBackNavigationTransactions = enableTabsInstrumentation.ignoreEmptyBackNavigationTransactions;
  let closure_4 = undefined === ignoreEmptyBackNavigationTransactions || ignoreEmptyBackNavigationTransactions;
  let closure_5 = [];
  const defaultIdleOptions = arg1(dependencyMap[1]).defaultIdleOptions;
  let closure_7 = null;
  function startIdleNavigationSpan() {
    if (result) {
      discardLatestNavigationSpan();
    }
    let beforeStartSpan;
    if (null != currentRoute) {
      beforeStartSpan = currentRoute.options.beforeStartSpan;
    }
    if (beforeStartSpan) {
      const options = currentRoute.options;
      let beforeStartSpanResult = options.beforeStartSpan(currentRoute(timeout[1]).getDefaultIdleNavigationSpanOptions());
      const obj3 = currentRoute(timeout[1]);
    } else {
      beforeStartSpanResult = currentRoute(timeout[1]).getDefaultIdleNavigationSpanOptions();
      const obj2 = currentRoute(timeout[1]);
    }
    const result = currentRoute(timeout[1]).startIdleNavigationSpan(beforeStartSpanResult, defaultIdleOptions);
    if (null != result) {
      const attr = result.setAttribute(currentRoute(timeout[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, currentRoute(timeout[4]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NATIVE_NAVIGATION);
    }
    if (closure_4) {
      const obj4 = currentRoute(timeout[5]);
      const result1 = obj4.ignoreEmptyBackNavigation(currentRoute(timeout[3]).getClient(), result);
      const obj5 = currentRoute(timeout[3]);
    }
    const currentRoute = result;
    const obj = currentRoute(timeout[1]);
    const obj6 = currentRoute(timeout[5]);
    const client = currentRoute(timeout[3]).getClient();
    const result2 = obj6.ignoreEmptyRouteChangeTransactions(client, result, currentRoute(timeout[1]).DEFAULT_NAVIGATION_SPAN_NAME, () => result === closure_0);
    const timeout = setTimeout(discardLatestNavigationSpan.bind(result), num);
  }
  const result = navigation.events().registerCommandListener(startIdleNavigationSpan);
  if (tmp) {
    const result1 = navigation.events().registerBottomTabPressedListener(startIdleNavigationSpan);
    const eventsResult1 = navigation.events();
  }
  const eventsResult = navigation.events();
  const tmp = undefined !== enableTabsInstrumentation && enableTabsInstrumentation;
  const result2 = navigation.events().registerComponentWillAppearListener(function updateLatestNavigationSpanWithCurrentComponent(componentId) {
    if (closure_2) {
      if (_null) {
        if (componentId.componentId === _null.componentId) {
          discardLatestNavigationSpan();
        }
      }
      clearStateChangeTimeout();
      const hasItem = arr.includes(componentId.componentId);
      let obj = currentRoute(closure_1[3]);
      if (obj.spanToJSON(closure_2).description === currentRoute(closure_1[1]).DEFAULT_NAVIGATION_SPAN_NAME) {
        closure_2.updateName(componentId.componentName);
      }
      obj = {};
      ({ componentName: obj2.route.name, componentId: obj2.route.component_id, componentType: obj2.route.component_type } = componentId);
      obj.route.has_been_seen = hasItem;
      let componentName;
      if (null != _null) {
        componentName = _null.componentName;
      }
      obj.previous_route.name = componentName;
      componentId = undefined;
      if (null != _null) {
        componentId = _null.componentId;
      }
      obj.previous_route.component_id = componentId;
      let componentType;
      if (null != _null) {
        componentType = _null.componentType;
      }
      obj.previous_route.component_type = componentType;
      closure_2.setAttributes(3(3(obj, currentRoute(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component"), currentRoute(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"));
      if (null != currentRoute) {
        currentRoute.setCurrentRoute(componentId.componentName);
      }
      const tmp13Result = 3(obj, currentRoute(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component");
      obj = {};
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
      currentRoute(closure_1[3]).addBreadcrumb(obj);
      pushRecentComponentId(componentId.componentId);
      const _null = componentId;
      closure_2 = undefined;
      const obj3 = currentRoute(closure_1[3]);
    }
  });
  function pushRecentComponentId(componentId) {
    let arr = arr.push(componentId);
    if (arr.length > 200) {
      arr = arr.slice(arr.length - 200);
    }
  }
  function discardLatestNavigationSpan() {
    if (closure_2) {
      if (obj.isSentrySpan(closure_2)) {
        closure_2._sampled = false;
      }
      closure_2.end();
      closure_2 = undefined;
      const obj = currentRoute(closure_1[6]);
    }
    clearStateChangeTimeout();
  }
  function clearStateChangeTimeout() {
    if (undefined !== closure_1) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_1);
      closure_1 = undefined;
    }
  }
  return {
    name: "ReactNativeNavigation",
    afterAllSetup(client) {
      let obj = reactNativeTracingIntegration(closure_1[2]);
      const reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(client);
      if (reactNativeTracingIntegration) {
        obj = { finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs, idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs };
        const defaultIdleOptions = obj;
      }
    }
  };
};
