// Module ID: 5536
// Function ID: 47068
// Name: HeaderTitle
// Dependencies: []
// Exports: default

// Module 5536 (HeaderTitle)
let Platform;
let StyleSheet;
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Animated: closure_4, Platform, StyleSheet } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const styles = StyleSheet.create({ title: { -357058973: "center", 1661377617: 16, 1656181994: 0 } });

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
