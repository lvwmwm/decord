// Module ID: 1590
// Function ID: 1591
// Name: useCurrentRender
// Dependencies: [19, 1549]
// Exports: useCurrentRender

// Module 1590 (useCurrentRender)
import noop from "noop";

const require = arg1;

export const useCurrentRender = function useCurrentRender(arg0) {
  let navigation;
  let state;
  ({ state, navigation } = arg0);
  const context = React.useContext(require(1549) /* CurrentRenderContext */.CurrentRenderContext);
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
