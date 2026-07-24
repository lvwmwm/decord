// Module ID: 1523
// Function ID: 17470
// Name: SceneView
// Dependencies: [31, 33, 1477, 1470, 1482, 1524]
// Exports: default

// Module 1523 (SceneView)
import result from "result";
import { jsx } from "jsxProd";


export default function SceneView(getState) {
  let navigation;
  let route;
  let routeState;
  let screen;
  ({ screen, route } = getState);
  ({ navigation, routeState } = getState);
  getState = getState.getState;
  const setState = getState.setState;
  const clearOptions = getState.clearOptions;
  let closure_5 = getState.useRef();
  const callback = getState.useCallback(() => ref.current, []);
  let obj = { key: route.key, options: getState.options, navigation };
  const addOptionsGetter = route(routeState[2])(obj).addOptionsGetter;
  const callback1 = getState.useCallback((current) => {
    closure_5.current = current;
  }, []);
  const items = [getState, route.key];
  const callback2 = getState.useCallback(() => {
    let state;
    const routes = getState().routes;
    const found = routes.find((key) => key.key === outer1_0.key);
    if (found) {
      state = found.state;
    }
    return state;
  }, items);
  const items1 = [getState, route.key, setState];
  const callback3 = getState.useCallback((arg0) => {
    let closure_0 = arg0;
    const tmp = getState();
    const routes = tmp.routes;
    setState(Object.assign({}, tmp, {
      routes: routes.map((key) => {
        let merged = key;
        if (key.key === key.key) {
          const _Object = Object;
          const obj = { state: key };
          merged = Object.assign({}, key, obj);
        }
        return merged;
      })
    }));
  }, items1);
  let closure_11 = getState.useRef(true);
  const effect = getState.useEffect(() => {
    closure_11.current = false;
  });
  const effect1 = getState.useEffect(() => clearOptions, []);
  const callback4 = getState.useCallback(() => ref2.current, []);
  const items2 = [routeState, callback2, callback3, callback, callback1, callback4, addOptionsGetter];
  const memo = getState.useMemo(() => ({ state: routeState, getState: callback2, setState: callback3, getKey: callback, setKey: callback1, getIsInitial: callback4, addOptionsGetter }), items2);
  if (screen.getComponent) {
    let component = screen.getComponent();
  } else {
    component = screen.component;
  }
  obj = { value: memo };
  obj = {};
  const obj1 = { name: screen.name };
  let children = component;
  const tmp10 = route(routeState[4]);
  if (!component) {
    children = screen.children;
  }
  obj1.render = children;
  obj1.navigation = navigation;
  obj1.route = route;
  if (undefined !== component) {
    const obj2 = { navigation, route };
    let childrenResult = setState(component, obj2);
  } else {
    childrenResult = null;
    if (undefined !== screen.children) {
      const obj3 = { navigation, route };
      childrenResult = screen.children(obj3);
    }
  }
  obj1.children = childrenResult;
  obj.children = setState(route(routeState[5]), obj1);
  obj.children = setState(tmp10, obj);
  return setState(route(routeState[3]).Provider, obj);
};
