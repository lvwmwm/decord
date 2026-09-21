// Module ID: 1574
// Function ID: 1575
// Dependencies: [19, 1533]
// Exports: useCurrentRender

// Module 1574
import CurrentRenderContext from "CurrentRenderContext" /* 1533 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useCurrentRender = function useCurrentRender(arg0) {
  ({ state, navigation } = arg0);
  const context = noop.useContext(CurrentRenderContext.CurrentRenderContext);
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
