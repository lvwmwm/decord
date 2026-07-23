// Module ID: 13936
// Function ID: 106694
// Name: BountiesScrollIndicatorAnimation
// Dependencies: [57, 31, 27, 33, 4130, 3834, 689, 3842, 2]
// Exports: default

// Module 13936 (BountiesScrollIndicatorAnimation)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(() => ({ container: { width: 80, height: 80 } }));
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  let tmp4;
  let tmp5;
  const visible = startAnimation.visible;
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.TEXT_DEFAULT);
  const tmp = callback2();
  [tmp4, tmp5] = callback(React.useState(0), 2);
  const tmp6 = callback(React.useState(visible), 2);
  if (visible !== tmp6[0]) {
    tmp6[1](visible);
    if (visible) {
      tmp5((arg0) => arg0 + 1);
    }
  }
  obj = { style: tmp.container, children: jsx(require(3842) /* ManaContext */.BountiesScrollIndicatorRive, obj, tmp4) };
  obj = { stateMachine: "State Machine 1", fit: "contain", dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent } };
  return <View stateMachine="State Machine 1" fit="contain" dataBinding={{ color: token, startAnimation: !arg0.isFadingInContent }} />;
};
