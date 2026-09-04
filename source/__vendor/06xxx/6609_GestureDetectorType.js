// Module ID: 6609
// Function ID: 6610
// Name: GestureDetectorType
// Dependencies: [17, 6610]

// Module 6609 (GestureDetectorType)
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 6610 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
