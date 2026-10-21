// Module ID: 5337
// Function ID: 5338
// Name: allowedNativeProps
// Dependencies: [5338, 5340, 5341, 5342, 5343, 5344, 5345]

// Module 5337 (allowedNativeProps)
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import PanNativeProperties from "PanNativeProperties" /* 5340 */;
import TapNativeProperties from "TapNativeProperties" /* 5341 */;
import NativeHandlerNativeProperties from "NativeHandlerNativeProperties" /* 5342 */;
import FlingNativeProperties from "FlingNativeProperties" /* 5343 */;
import HoverNativeProperties from "HoverNativeProperties" /* 5344 */;
import LongPressNativeProperties from "LongPressNativeProperties" /* 5345 */;

const items = [...new Set(["enabled", "shouldCancelWhenOutside", "hitSlop", "activeCursor", "mouseButton", "testID", "cancelsTouchesInView", "cancelsJSResponder", "manualActivation"]), "userSelect", "enableContextMenu", "touchAction", "dispatchesAnimatedEvents", "needsPointerData"];
const sum = tmp4 + 1;
const sum1 = sum + 1;
const set = new Set(["enabled", "shouldCancelWhenOutside", "hitSlop", "activeCursor", "mouseButton", "testID", "cancelsTouchesInView", "cancelsJSResponder", "manualActivation"]);
const set1 = new Set(["simultaneousWith", "requireToFail", "block"]);
const set2 = new Set(items);
const set3 = new Set(["onBegin", "onActivate", "onUpdate", "onDeactivate", "onFinalize", "onTouchesDown", "onTouchesMove", "onTouchesUp", "onTouchesCancel"]);
const items1 = [...set1, "fillInDefaultValues", "changeEventCalculator", "disableReanimated", "shouldUseReanimatedDetector", "useAnimated", "runOnJS", "activeOffsetY", "failOffsetX", "failOffsetY", "activeOffsetX"];
const sum2 = tmp8 + 1;
const sum3 = sum2 + 1;
const sum4 = sum3 + 1;
const sum5 = sum4 + 1;
const sum6 = sum5 + 1;
const sum7 = sum6 + 1;
const sum8 = sum7 + 1;
const set4 = new Set(items1);
set2.delete("testID");
set4.add("testID");
const items2 = [ComposedGestureName.SingleGestureName.Pan, PanNativeProperties.PanNativeProperties];
const items3 = [items2, , , , , ];
const items4 = [ComposedGestureName.SingleGestureName.Tap, TapNativeProperties.TapNativeProperties];
items3[1] = items4;
const items5 = [ComposedGestureName.SingleGestureName.Native, NativeHandlerNativeProperties.NativeHandlerNativeProperties];
items3[2] = items5;
const items6 = [ComposedGestureName.SingleGestureName.Fling, FlingNativeProperties.FlingNativeProperties];
items3[3] = items6;
const items7 = [ComposedGestureName.SingleGestureName.Hover, HoverNativeProperties.HoverNativeProperties];
items3[4] = items7;
const items8 = [ComposedGestureName.SingleGestureName.LongPress, LongPressNativeProperties.LongPressNativeProperties];
items3[5] = items8;
const items9 = [...set3, "disableReanimated"];
const map = new Map(items3);
const set5 = new Set();
new Set(items9);

export const allowedNativeProps = set2;
export const HandlerCallbacks = set3;
export const PropsToFilter = set4;
export const PropsWhiteLists = map;
export const EMPTY_WHITE_LIST = new Set();
export const NativeWrapperProps = new Set(items9);
