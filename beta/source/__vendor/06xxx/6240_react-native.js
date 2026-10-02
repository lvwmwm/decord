// Module ID: 6240
// Function ID: 6241
// Name: react-native
// Dependencies: [17, 6039]

// Module 6240 (react-native)
import react_native from "react-native" /* 17 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;

let size;
const StyleSheet = react_native.StyleSheet;
const obj = { container: { padding: 10, cursor: "grab" }, indicator: size };
size = { alignSelf: "center", width: 7.5 * GESTURE_SOURCE.WINDOW_WIDTH / 100, height: 4, borderRadius: 4, backgroundColor: "rgba(0, 0, 0, 0.75)" };

export const styles = StyleSheet.create(obj);
