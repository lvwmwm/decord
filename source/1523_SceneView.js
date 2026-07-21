// Module ID: 1523
// Function ID: 17468
// Name: SceneView
// Dependencies: []
// Exports: default

// Module 1523 (SceneView)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export default function SceneView(getState) {
  let navigation;
  let route;
  let routeState;
  let screen;
  ({ screen, route } = getState);
  const importDefault = route;
  ({ navigation, routeState } = getState);
  const dependencyMap = routeState;
  getState = getState.getState;
  const React = getState;
  const setState = getState.setState;
  const jsx = setState;
  const clearOptions = getState.clearOptions;
  let closure_5 = React.useRef();
  const callback = React.useCallback(() => ref.current, []);
  let obj = { key: route.key, options: getState.options, navigation };
  const addOptionsGetter = importDefault(dependencyMap[2])(obj).addOptionsGetter;
  const callback1 = React.useCallback((current) => {
    closure_5.current = current;
  }, []);
  const items = [getState, route.key];
  const callback2 = React.useCallback(() => {
    let state;
    const routes = getState().routes;
    const found = routes.find((key) => key.key === key.key);
    if (found) {
      state = found.state;
    }
    return state;
  }, items);
  const items1 = [getState, route.key, setState];
  const callback3 = React.useCallback((arg0) => {
    const route = arg0;
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
  let closure_11 = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_11.current = false;
  });
  const effect1 = React.useEffect(() => clearOptions, []);
  const callback4 = React.useCallback(() => ref2.current, []);
  const items2 = [routeState, callback2, callback3, callback, callback1, callback4, addOptionsGetter];
  const memo = React.useMemo(() => ({ state: routeState, getState: callback2, setState: callback3, getKey: callback, setKey: callback1, getIsInitial: callback4, addOptionsGetter }), items2);
  if (screen.getComponent) {
    let component = screen.getComponent();
  } else {
    component = screen.component;
  }
  obj = { value: memo };
  obj = {};
  const obj1 = { name: screen.name };
  let children = component;
  const tmp10 = importDefault(dependencyMap[4]);
  if (!component) {
    children = screen.children;
  }
  obj1.render = children;
  obj1.navigation = navigation;
  obj1.route = route;
  if (undefined !== component) {
    const obj2 = { navigation, route };
    let childrenResult = <component {...obj2} />;
  } else {
    childrenResult = null;
    if (undefined !== screen.children) {
      const obj3 = { navigation, route };
      childrenResult = screen.children(obj3);
    }
  }
  obj1.children = childrenResult;
  obj.children = jsx(importDefault(dependencyMap[5]), obj1);
  obj.children = <tmp10 {...obj} />;
  return jsx(importDefault(dependencyMap[3]).Provider, obj);
};
