// Module ID: 16053
// Function ID: 16054
// Name: MountMeasure
// Dependencies: [19, 17, 21, 5235, 2]
// Exports: default

// Module 16053 (MountMeasure)
import useMountEffect from "useMountEffect" /* 5235 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default function MountMeasure(arg0) {
  ({ batchKey: require, onMeasure: dependencyMap, onCancel: View } = arg0);
  ({ style, children } = arg0);
  const unmountEffect = useMountEffect.useUnmountEffect(() => View(require));
  return <View style={style} onLayout={function onLayout() {
    return dependencyMap(require);
  }}>{children}</View>;
};
