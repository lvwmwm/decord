// Module ID: 1525
// Function ID: 17483
// Name: useCurrentRender
// Dependencies: []
// Exports: default

// Module 1525 (useCurrentRender)
let closure_2 = importAll(dependencyMap[0]);

export default function useCurrentRender(arg0) {
  let navigation;
  let state;
  ({ state, navigation } = arg0);
  const context = React.useContext(importDefault(dependencyMap[1]));
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
