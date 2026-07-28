// Module ID: 5264
// Function ID: 45333
// Name: gestureHandlerRootHOC
// Dependencies: [31, 27, 33, 5265, 3999]
// Exports: default

// Module 5264 (gestureHandlerRootHOC)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const styles = StyleSheet.create({ container: { flex: 1 } });

export default function gestureHandlerRootHOC(displayName) {
  const importDefault = displayName;
  const dependencyMap = arg1;
  class Wrapper {
    constructor(arg0) {
      obj = { style: items };
      items = [, ];
      items[0] = outer1_3.container;
      items[1] = closure_1;
      tmp = closure_0(closure_1[3]);
      obj.children = outer1_2(closure_0, Object.assign({}, displayName));
      return outer1_2(tmp, obj);
    }
  }
  Wrapper.displayName = "gestureHandlerRootHOC(" + displayName.displayName || displayName.name + ")";
  importDefault(3999)(Wrapper, displayName);
  return Wrapper;
};
