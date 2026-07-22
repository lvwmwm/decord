// Module ID: 5102
// Function ID: 44340
// Name: HeaderBackground
// Dependencies: []
// Exports: default

// Module 5102 (HeaderBackground)
let Platform;
let StyleSheet;
let closure_2 = [null];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Animated: closure_4, Platform, StyleSheet } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[2]);
const styles = StyleSheet.create({ container: Object.assign({ flex: 1 }, { elevation: 4 }) });

export default function HeaderBackground(style) {
  const tmp = callback(style, closure_2);
  const colors = arg1(dependencyMap[4]).useTheme().colors;
  style = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border, shadowColor: colors.border }, style.style];
  return <RN.View {...Object.assign({ style }, tmp)} />;
};
