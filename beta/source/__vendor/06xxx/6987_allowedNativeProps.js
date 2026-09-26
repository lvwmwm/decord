// Module ID: 6987
// Function ID: 6988
// Name: allowedNativeProps
// Dependencies: [6988, 6990, 6991, 6992, 6993, 6994, 6995]

// Module 6987 (allowedNativeProps)
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import PanNativeProperties from "PanNativeProperties" /* 6990 */;
import TapNativeProperties from "TapNativeProperties" /* 6991 */;
import NativeHandlerNativeProperties from "NativeHandlerNativeProperties" /* 6992 */;
import FlingNativeProperties from "FlingNativeProperties" /* 6993 */;
import HoverNativeProperties from "HoverNativeProperties" /* 6994 */;
import LongPressNativeProperties from "LongPressNativeProperties" /* 6995 */;

const set = new Set(["enabled", "shouldCancelWhenOutside", "hitSlop", "activeCursor", "mouseButton", "testID", "cancelsTouchesInView", "cancelsJSResponder", "manualActivation"]);
const items = [...set, "userSelect", "enableContextMenu", "touchAction", "dispatchesAnimatedEvents", "needsPointerData"];
const sum = tmp4 + 1;
const sum1 = sum + 1;
const set2 = new Set(items);
const set3 = new Set(["onBegin", "onActivate", "onUpdate", "onDeactivate", "onFinalize", "onTouchesDown", "onTouchesMove", "onTouchesUp", "onTouchesCancel"]);
const items1 = [...new Set(["simultaneousWith", "requireToFail", "block"]), "fillInDefaultValues", "changeEventCalculator", "disableReanimated", "shouldUseReanimatedDetector", "useAnimated", "runOnJS", "activeOffsetY", "failOffsetX", "failOffsetY", "activeOffsetX"];
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
const set1 = new Set(["simultaneousWith", "requireToFail", "block"]);
const map = new Map(items3);
const items9 = [...set3, "disableReanimated"];
const set5 = new Set();

export const allowedNativeProps = set2;
export const HandlerCallbacks = set3;
export const PropsToFilter = set4;
export const PropsWhiteLists = map;
export const EMPTY_WHITE_LIST = set5;
export const NativeWrapperProps = new Set(items9);
