// Module ID: 14829
// Function ID: 14830
// Name: MountMeasure
// Dependencies: [19, 17, 21, 4616, 2]
// Exports: default

// Module 14829 (MountMeasure)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default function MountMeasure(arg0) {
  let View;
  let children;
  let dependencyMap;
  let require;
  let style;
  ({ batchKey: require, onMeasure: dependencyMap, onCancel: View } = arg0);
  ({ style, children } = arg0);
  let obj = require(4616) /* useMountLayoutEffect */;
  const unmountEffect = obj.useUnmountEffect(() => callback2(closure_0));
  obj = {
    style,
    onLayout() {
      return callback(closure_0);
    },
    children
  };
  return <View style={style} onLayout={function onLayout() {
    return callback(closure_0);
  }}>{children}</View>;
};
