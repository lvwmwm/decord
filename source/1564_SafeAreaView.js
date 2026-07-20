// Module ID: 1564
// Function ID: 17618
// Name: SafeAreaView
// Dependencies: []

// Module 1564 (SafeAreaView)
let closure_2 = ["r"];
let closure_3 = importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[1]).useMemo;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { marginTop: 0.00000000000000000000000000000000000000000000000000000000000004133579879388711, marginVertical: 241505615215171200000000000000000000000000000000000000000000000000000000000000000000, maxHeight: 0.00000000000000000000000000000000000000000000000000000000000004667261426595894, maxWidth: 0.0000000000000000000000000000000000000000000000000000000000000000000000012181038497668178 };

export const SafeAreaView = importAll(dependencyMap[1]).forwardRef((edges, ref) => {
  edges = edges.edges;
  const importDefault = edges;
  const items = [edges];
  const tmp = callback(edges, closure_2);
  const tmp2 = useMemo(() => {
    if (null == edges) {
      return closure_6;
    } else {
      const _Array = Array;
      if (Array.isArray(edges)) {
        let rect = arr.reduce((arg0, arg1) => {
          arg0[arg1] = "additive";
          return arg0;
        }, {});
      } else {
        rect = arr;
      }
      const obj = {};
      const top = rect.top;
      let str = "off";
      let str2 = "off";
      if (null != top) {
        str2 = top;
      }
      obj.top = str2;
      const right = rect.right;
      let tmp = str;
      if (null != right) {
        tmp = right;
      }
      obj.right = tmp;
      const bottom = rect.bottom;
      let tmp2 = str;
      if (null != bottom) {
        tmp2 = bottom;
      }
      obj.bottom = tmp2;
      const left = rect.left;
      if (null != left) {
        str = left;
      }
      obj.left = str;
      return obj;
    }
  }, items);
  const obj = {
    edges: useMemo(() => {
      if (null == edges) {
        return closure_6;
      } else {
        const _Array = Array;
        if (Array.isArray(edges)) {
          let rect = arr.reduce((arg0, arg1) => {
            arg0[arg1] = "additive";
            return arg0;
          }, {});
        } else {
          rect = arr;
        }
        const obj = {};
        const top = rect.top;
        let str = "off";
        let str2 = "off";
        if (null != top) {
          str2 = top;
        }
        obj.top = str2;
        const right = rect.right;
        let tmp = str;
        if (null != right) {
          tmp = right;
        }
        obj.right = tmp;
        const bottom = rect.bottom;
        let tmp2 = str;
        if (null != bottom) {
          tmp2 = bottom;
        }
        obj.bottom = tmp2;
        const left = rect.left;
        if (null != left) {
          str = left;
        }
        obj.left = str;
        return obj;
      }
    }, items),
    ref
  };
  return jsx(importDefault(dependencyMap[3]), Object.assign({}, tmp, obj));
});
