// Module ID: 15533
// Function ID: 118559
// Name: getStyles
// Dependencies: []
// Exports: default

// Module 15533 (getStyles)
function getStyles(arg0) {
  const items = [{ 865632396: false, -1346350121: false, 0: false, 0: false }, { minHeight: arg0 - 2 * closure_4.layout.margin.marginVertical }, closure_4.container.padding];
  return items;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = importDefault(dependencyMap[3])();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(children, fontScale) {
  return <View style={getStyles(importDefault(dependencyMap[4])(arg1.fontScale))}>{arg0}</View>;
};
