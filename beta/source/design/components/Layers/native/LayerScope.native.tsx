// Module ID: 6577
// Function ID: 6578
// Name: LayerScope
// Dependencies: [32, 19, 17, 1074, 21, 5910, 6578, 2]
// Exports: LayerScope

// Module 6577 (LayerScope)
import Constants from "Constants" /* 1074 */;
import reactDefault from "react" /* 5910 */;
import LayerContext from "LayerContext" /* 6578 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
function Layer(zIndex) {
  let closure_2;
  let closure_3;
  zIndex = zIndex.zIndex;
  _slicedToArray = undefined;
  const context = react.useContext(zIndex(6578).LayerContext);
  dependencyMap = _slicedToArray(react.useState({}), 2)[1];
  _slicedToArray = react.useRef(null);
  const items = [context];
  const effect = react.useEffect(() => {
    context.invalidate = () => closure_1_2({});
    return () => {
      context.invalidate = () => null;
    };
  }, items);
  const items1 = context.items;
  const items2 = [zIndex];
  let obj = {
    style: react.useMemo(() => {
      const obj = { zIndex };
      const merged = Object.assign(metroRequire.absoluteFillObject);
      return obj;
    }, items2),
    ref(current) {
      closure_3.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => {
      const obj = { children: children.component };
      return closure_1_8(React.Fragment, obj, children.key);
    })
  };
  return closure_8(closure_5, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = function LayerScope(arg0) {
  let children;
  let items;
  let zIndex;
  ({ children, zIndex } = arg0);
  const obj = {
    value: reactDefault(() => {
      const layerContextManager = new LayerContext.LayerContextManager();
      return layerContextManager;
    }),
    children: items
  };
  items = [children, ];
  const Provider = LayerContext.LayerContext.Provider;
  items[1] = metroImportAll(Layer, { zIndex });
  return React4(Provider, obj);
};
