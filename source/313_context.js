// Module ID: 313
// Function ID: 4797
// Name: context
// Dependencies: []
// Exports: VirtualizedListCellContextProvider, VirtualizedListContextProvider, VirtualizedListContextResetter

// Module 313 (context)
importAll(dependencyMap[0]);
const obj = arg1(dependencyMap[0]);
({ useContext: closure_0, useMemo: closure_1 } = obj);
const jsx = arg1(dependencyMap[1]).jsx;
const context = obj.createContext(null);

export const VirtualizedListContext = context;
export const VirtualizedListContextResetter = function VirtualizedListContextResetter(children) {
  return <context.Provider value={null}>{arg0.children}</context.Provider>;
};
export const VirtualizedListContextProvider = function VirtualizedListContextProvider(children) {
  const value = children.value;
  const items = [, , , , ];
  ({ getScrollMetrics: arr[0], horizontal: arr[1], getOutermostParentListRef: arr[2], registerAsNestedChild: arr[3], unregisterAsNestedChild: arr[4] } = value);
  return <context.Provider value={callback(() => ({ cellKey: null, getScrollMetrics: value.getScrollMetrics, horizontal: value.horizontal, getOutermostParentListRef: value.getOutermostParentListRef, registerAsNestedChild: value.registerAsNestedChild, unregisterAsNestedChild: value.unregisterAsNestedChild }), items)}>{arg0.children}</context.Provider>;
};
export const VirtualizedListCellContextProvider = function VirtualizedListCellContextProvider(cellKey) {
  cellKey = cellKey.cellKey;
  const tmp = cellKey(context);
  const items = [tmp, cellKey];
  return <context.Provider value={tmp(() => {
    let merged = null;
    if (null != tmp) {
      const _Object = Object;
      const obj = { cellKey };
      merged = Object.assign({}, tmp, obj);
    }
    return merged;
  }, items)}>{arg0.children}</context.Provider>;
};
