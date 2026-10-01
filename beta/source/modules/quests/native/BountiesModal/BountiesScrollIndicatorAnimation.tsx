// Module ID: 14576
// Function ID: 14577
// Name: BountiesScrollIndicatorAnimation
// Dependencies: [32, 19, 17, 21, 4836, 4531, 576, 4620, 2]
// Exports: default

// Module 14576 (BountiesScrollIndicatorAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles(() => ({ container: { width: 80, height: 80 } }));
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(visible) {
  let tmp6;
  let tmp7;
  visible = visible.visible;
  const isFadingInContent = visible.isFadingInContent;
  const tmp = closure_7();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_DEFAULT);
  [tmp6, tmp7] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const tmp8 = _slicedToArray(react.useState(visible), 2);
  if (visible !== tmp8[0]) {
    tmp8[1](visible);
    if (visible) {
      tmp7((arg0) => arg0 + 1);
    }
  }
  return <View style={tmp.container}>{null}</View>;
};
