// Module ID: 17695
// Function ID: 17696
// Name: MountMeasure
// Dependencies: [19, 17, 21, 5588, 2]
// Exports: default

// Module 17695 (MountMeasure)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useMountEffect from "useMountEffect" /* 5588 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/MountMeasure.tsx");

export default function MountMeasure(arg0) {
  let children;
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  let style;
  ({ batchKey: closure_129_0, onMeasure: closure_129_1, onCancel: closure_129_2 } = arg0);
  ({ style, children } = arg0);
  const obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => closure_1_2(closure_1_0));
  return <View style={style} onLayout={function onLayout() {
    return closure_1_1(closure_1_0);
  }}>{children}</View>;
};
