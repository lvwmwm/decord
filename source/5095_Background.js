// Module ID: 5095
// Function ID: 44326
// Name: Background
// Dependencies: []
// Exports: default

// Module 5095 (Background)
let closure_2 = [null];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;

export default function Background(style) {
  let obj = arg1(dependencyMap[4]);
  obj = {};
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <View {...Object.assign({}, callback(arg0, closure_2), obj)} />;
};
