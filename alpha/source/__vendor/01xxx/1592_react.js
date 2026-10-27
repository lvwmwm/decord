// Module ID: 1592
// Function ID: 1593
// Name: react
// Dependencies: [19, 1551]
// Exports: useCurrentRender

// Module 1592 (react)
import react2 from "react" /* 1551 */;
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
