// Module ID: 1588
// Function ID: 1589
// Name: useCurrentRender
// Dependencies: [19, 1547]
// Exports: useCurrentRender

// Module 1588 (useCurrentRender)
import CurrentRenderContext from "CurrentRenderContext" /* 1547 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useCurrentRender = function useCurrentRender(arg0) {
  ({ state, navigation } = arg0);
  const context = React.useContext(CurrentRenderContext.CurrentRenderContext);
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
