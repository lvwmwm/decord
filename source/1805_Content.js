// Module ID: 1805
// Function ID: 19920
// Name: Content
// Dependencies: []
// Exports: default

// Module 1805 (Content)
let StyleSheet;
importDefault(dependencyMap[0]);
({ StyleSheet, View: closure_2 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export default function Content(children) {
  return <closure_2 style={styles.flex} testID={arg1(dependencyMap[3]).TEST_ID_KEYBOARD_TOOLBAR_CONTENT}>{arg0.children}</closure_2>;
};
