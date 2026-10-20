// Module ID: 1593
// Function ID: 1594
// Name: react
// Dependencies: [19, 1552]
// Exports: useCurrentRender

// Module 1593 (react)
import react2 from "react" /* 1552 */;
import react from "react" /* 19 */;


export const useCurrentRender = function useCurrentRender(descriptors) {
  let state;
  ({ state, navigation } = descriptors);
  descriptors = descriptors.descriptors;
  const context = react.useContext(react2.CurrentRenderContext);
  const tmp2 = context && navigation.isFocused();
  if (tmp2) {
    context.options = descriptors[state.routes[state.index].key].options;
  }
};
