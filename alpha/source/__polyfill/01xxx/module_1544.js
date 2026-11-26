// Module ID: 1544
// Function ID: 1545
// Dependencies: [19, 1532, 1545]
// Exports: useNavigation

// Module 1544
import react2 from "react" /* 1532 */;
import react3 from "react" /* 1545 */;
import react from "react" /* 19 */;


export function useNavigation() {
  const context = react.useContext(react2.NavigationContainerRefContext);
  let context1 = react.useContext(react3.NavigationContext);
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
}
