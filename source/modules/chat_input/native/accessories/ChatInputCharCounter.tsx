// Module ID: 11455
// Function ID: 89187
// Name: ChatInputCharCounter
// Dependencies: [57, 31, 1850, 653, 1852, 33, 4131, 566, 3777, 6130, 6137, 3832, 1212, 4661, 4127, 6570, 2]

// Module 11455 (ChatInputCharCounter)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UpsellTypes } from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  let obj = analyticsLocations(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(table[8]).canUseIncreasedMessageLength(outer1_5.getCurrentUser()));
  const tmp3 = callback(importAllResult.useState(0), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = stateFromStores(6130)();
  callback = tmp5;
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    onMessageLengthChanged(length) {
      outer1_2(Math.max(0, length - outer1_3));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp5];
  let tmp8 = null;
  if (first > 0) {
    obj = { onPress: tmp7, style: tmp.container };
    obj = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium" };
    const _HermesInternal = HermesInternal;
    obj.children = "-" + first;
    const items2 = [callback2(analyticsLocations(4127).Text, obj), ];
    let obj1 = { size: "sm" };
    items2[1] = callback2(analyticsLocations(6570).NitroWheelIcon, obj1);
    obj.children = items2;
    tmp8 = callback3(analyticsLocations(4661).PressableOpacity, obj);
  }
  return tmp8;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;
