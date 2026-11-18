// Module ID: 5096
// Function ID: 5097
// Name: react-native
// Dependencies: [17, 5097]

// Module 5096 (react-native)
import animatedComponentDefault from "animatedComponent" /* 5097 */;
import react_native from "react-native" /* 17 */;

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = react_native);
const animatedComponent = Animated.createAnimatedComponent(animatedComponentDefault);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
