// Module ID: 1549
// Function ID: 1550
// Name: useCurrentRender
// Dependencies: [19, 1512]
// Exports: default

// Module 1549 (useCurrentRender)
import noop from "noop";


export default function useCurrentRender(arg0) {
  let navigation;
  let state;
  ({ state, navigation } = arg0);
  const context = React.useContext(importDefault(1512));
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
