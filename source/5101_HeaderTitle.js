// Module ID: 5101
// Function ID: 44338
// Name: HeaderTitle
// Dependencies: []
// Exports: default

// Module 5101 (HeaderTitle)
let Platform;
let StyleSheet;
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Animated: closure_4, Platform, StyleSheet } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const styles = StyleSheet.create({ title: {} });

export default function HeaderTitle(tintColor) {
  let text = tintColor.tintColor;
  let obj = arg1(dependencyMap[4]);
  obj = {};
  const items = [title.title, , ];
  obj = {};
  if (undefined === text) {
    text = obj.useTheme().colors.text;
  }
  obj.color = text;
  items[1] = obj;
  items[2] = tintColor.style;
  obj.style = items;
  return <RN.Text {...Object.assign({}, callback(arg0, closure_2), obj)} />;
};
