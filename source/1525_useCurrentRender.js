// Module ID: 1525
// Function ID: 17484
// Name: useCurrentRender
// Dependencies: [31, 1488]
// Exports: default

// Module 1525 (useCurrentRender)
import result from "result";


export default function useCurrentRender(arg0) {
  let navigation;
  let state;
  ({ state, navigation } = arg0);
  const context = React.useContext(importDefault(1488));
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
