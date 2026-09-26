// Module ID: 6943
// Function ID: 6944
// Dependencies: [17, 6944]

// Module 6943
import _modDef6944 from "module_6944" /* 6944 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef6944);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
