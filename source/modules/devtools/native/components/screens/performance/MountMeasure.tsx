// Module ID: 14953
// Function ID: 14954
// Name: MountMeasure
// Dependencies: [19, 17, 21, 4711, 2]
// Exports: default

// Module 14953 (MountMeasure)
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
  let obj = require(4711) /* useMountLayoutEffect */;
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
