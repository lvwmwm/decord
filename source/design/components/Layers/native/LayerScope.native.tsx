// Module ID: 5446
// Function ID: 46565
// Name: Layer
// Dependencies: []
// Exports: LayerScope

// Module 5446 (Layer)
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  const arg1 = zIndex;
  const context = React.useContext(arg1(closure_2[6]).LayerContext);
  const importDefault = context;
  closure_2 = callback(React.useState({}), 2)[1];
  const callback = React.useRef(null);
  const items = [context];
  const effect = React.useEffect(() => {
    context.invalidate = () => callback({});
    return () => {
      closure_1.invalidate = () => null;
    };
  }, items);
  const items1 = context.items;
  const items2 = [zIndex];
  return callback2(closure_5, {
    style: React.useMemo(() => {
      const obj = {};
      const merged = Object.assign(absoluteFillObject.absoluteFillObject);
      obj["zIndex"] = zIndex;
      return obj;
    }, items2),
    ref(current) {
      closure_3.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => callback(React.Fragment, { children: children.component }, children.key))
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
const NOOP = arg1(dependencyMap[3]).NOOP;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = function LayerScope(arg0) {
  let children;
  let zIndex;
  ({ children, zIndex } = arg0);
  const obj = {
    value: importDefault(dependencyMap[5])(() => {
      const layerContextManager = new callback(closure_2[6]).LayerContextManager();
      return layerContextManager;
    })
  };
  const items = [children, callback2(Layer, { zIndex })];
  obj.children = items;
  return callback3(arg1(dependencyMap[6]).LayerContext.Provider, obj);
};
