// Module ID: 5381
// Function ID: 45899
// Name: MissingIcon
// Dependencies: []
// Exports: default

// Module 5381 (MissingIcon)
let StyleSheet;
importAll(dependencyMap[0]);
({ StyleSheet, Text: closure_0 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export default function MissingIcon(color) {
  const style = [icon.icon, { color: color.color, fontSize: color.size }, color.style];
  return <closure_0 style={style}>{"\u23F7"}</closure_0>;
};
