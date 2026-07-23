// Module ID: 5449
// Function ID: 46584
// Name: Layer
// Dependencies: [57, 31, 27, 653, 33, 5450, 5451, 2]
// Exports: LayerScope

// Module 5449 (Layer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function Layer(zIndex) {
  zIndex = zIndex.zIndex;
  const context = React.useContext(zIndex(5451).LayerContext);
  const dependencyMap = callback(React.useState({}), 2)[1];
  callback = React.useRef(null);
  const items = [context];
  const effect = React.useEffect(() => {
    context.invalidate = () => outer1_2({});
    return () => {
      outer1_1.invalidate = () => null;
    };
  }, items);
  const items1 = context.items;
  const items2 = [zIndex];
  return callback2(closure_5, {
    style: React.useMemo(() => {
      const obj = {};
      const merged = Object.assign(outer1_6.absoluteFillObject);
      obj["zIndex"] = zIndex;
      return obj;
    }, items2),
    ref(current) {
      _slicedToArray.current = current;
      context.setSurfaceRef(current);
    },
    onLayout: NOOP,
    pointerEvents: "box-none",
    children: items1.map((children) => outer1_8(outer1_4.Fragment, { children: children.component }, children.key))
  });
}
({ View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Layers/native/LayerScope.native.tsx");

export const LayerScope = function LayerScope(arg0) {
  let children;
  let zIndex;
  ({ children, zIndex } = arg0);
  const obj = {
    value: importDefault(5450)(() => {
      const layerContextManager = new outer1_0(outer1_2[6]).LayerContextManager();
      return layerContextManager;
    })
  };
  const items = [children, callback2(Layer, { zIndex })];
  obj.children = items;
  return callback3(require(5451) /* LayerContextManager */.LayerContext.Provider, obj);
};
