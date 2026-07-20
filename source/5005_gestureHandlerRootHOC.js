// Module ID: 5005
// Function ID: 42770
// Name: gestureHandlerRootHOC
// Dependencies: []
// Exports: default

// Module 5005 (gestureHandlerRootHOC)
importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function gestureHandlerRootHOC(displayName) {
  const importDefault = displayName;
  const dependencyMap = arg1;
  class Wrapper {
    constructor(arg0) {
      obj = { style: items };
      items = [, ];
      items[0] = closure_3.container;
      items[1] = arg1;
      tmp = displayName(arg1[3]);
      obj.children = closure_2(displayName, Object.assign({}, displayName));
      return closure_2(tmp, obj);
    }
  }
  Wrapper.displayName = "gestureHandlerRootHOC(" + displayName.displayName || displayName.name + ")";
  importDefault(dependencyMap[4])(Wrapper, displayName);
  return Wrapper;
};
