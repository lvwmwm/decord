// Module ID: 15324
// Function ID: 15325
// Name: BountiesScrollIndicatorAnimation
// Dependencies: [32, 19, 17, 21, 4757, 4458, 576, 4467, 2]
// Exports: default

// Module 15324 (BountiesScrollIndicatorAnimation)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4458 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const native = tmp2(4467);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles(() => ({ container: { width: 80, height: 80 } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  const visible = startAnimation.visible;
  const tmp = closure_7();
  const token = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT);
  [tmp6, tmp7] = noop.useState(0);
  const tmp8 = _slicedToArray(noop.useState(visible), 2);
  if (visible !== tmp8[0]) {
    tmp8[1](visible);
    if (visible) {
      tmp7((arg0) => arg0 + 1);
    }
  }
  const obj2 = { style: tmp.container, children: jsx(native.BountiesScrollIndicatorRive, { stateMachine: "State Machine 1", fit: "contain", dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent } }, tmp6) };
  return <View style={tmp.container}>{jsx(native.BountiesScrollIndicatorRive, { stateMachine: "State Machine 1", fit: "contain", dataBinding: { color: token, startAnimation: !arg0.isFadingInContent } }, tmp6)}</View>;
};
