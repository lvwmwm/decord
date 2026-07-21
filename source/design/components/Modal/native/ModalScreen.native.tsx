// Module ID: 7566
// Function ID: 60549
// Name: ModalScreen
// Dependencies: []
// Exports: ModalScreen

// Module 7566 (ModalScreen)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = callback();
  let obj = {};
  const items = [tmp.container, ];
  obj = {};
  if (null == backgroundColor) {
    backgroundColor = tmp.container.backgroundColor;
  }
  obj.backgroundColor = backgroundColor;
  ({ left: obj2.paddingLeft, right: obj2.paddingRight, bottom: obj2.paddingBottom } = importDefault(dependencyMap[5])().insets);
  items[1] = obj;
  obj.style = items;
  obj.children = backgroundColor.children;
  return <View {...obj} />;
};
