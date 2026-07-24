// Module ID: 1805
// Function ID: 19927
// Name: Content
// Dependencies: [31, 27, 33, 1800]
// Exports: default

// Module 1805 (Content)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let closure_2;
const require = arg1;
({ StyleSheet, View: closure_2 } = get_ActivityIndicator);
const styles = StyleSheet.create({ flex: { flex: 1 } });

export default function Content(children) {
  return <closure_2 style={styles.flex} testID={require(1800) /* TEST_ID_KEYBOARD_TOOLBAR */.TEST_ID_KEYBOARD_TOOLBAR_CONTENT}>{arg0.children}</closure_2>;
};
