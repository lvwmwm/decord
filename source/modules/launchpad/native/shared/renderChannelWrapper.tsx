// Module ID: 15526
// Function ID: 118535
// Name: getStyles
// Dependencies: []
// Exports: default

// Module 15526 (getStyles)
function getStyles(arg0) {
  const items = [{ containerStyle: null, grow: null, isRound: null, display: null }, { minHeight: arg0 - 2 * closure_4.layout.margin.marginVertical }, closure_4.container.padding];
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
