// Module ID: 5546
// Function ID: 47110
// Name: initialWindowMetrics
// Dependencies: []

// Module 5546 (initialWindowMetrics)
let Dimensions;
let Platform;
let StyleSheet;
let jsxs;
class SafeAreaProviderCompat {
  constructor(arg0) {
    ({ children, style } = global);
    tmp = jsx;
    if (importAll.useContext(arg1(dependencyMap[4]).SafeAreaInsetsContext)) {
      tmp6 = View;
      obj = {};
      tmp7 = initialWindowMetrics;
      items = [, ];
      items[0] = initialWindowMetrics.container;
      items[1] = style;
      obj.style = items;
      obj.children = children;
      tmpResult = tmp(View, obj);
    } else {
      tmp2 = arg1;
      tmp3 = dependencyMap;
      obj = {};
      tmp4 = initialWindowMetrics;
      obj.initialMetrics = initialWindowMetrics;
      obj.style = style;
      obj.children = children;
      tmpResult = tmp(arg1(dependencyMap[4]).SafeAreaProvider, obj);
    }
    return tmpResult;
  }
}
importDefault(dependencyMap[0]);
let closure_2 = importAll(dependencyMap[1]);
({ Dimensions, Platform, StyleSheet, View: closure_3 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_4, jsxs } = arg1(dependencyMap[3]));
const size = Dimensions.get("window");
const width = size.width;
let num = 0;
if (undefined !== width) {
  num = width;
}
const height = size.height;
let num2 = 0;
if (undefined !== height) {
  num2 = height;
}
if (null == arg1(dependencyMap[4]).initialWindowMetrics) {
  let obj = {};
  obj = { 0: "%FunctionPrototype%", 0: "paddingStart", width: num, height: num2 };
  obj.frame = obj;
  class SafeAreaProviderCompat {
    constructor(arg0) {
      ({ children, style } = global);
      tmp = jsx;
      if (importAll.useContext(arg1(dependencyMap[4]).SafeAreaInsetsContext)) {
        tmp6 = View;
        obj = {};
        tmp7 = initialWindowMetrics;
        items = [, ];
        items[0] = initialWindowMetrics.container;
        items[1] = style;
        obj.style = items;
        obj.children = children;
        tmpResult = tmp(View, obj);
      } else {
        tmp2 = arg1;
        tmp3 = dependencyMap;
        obj = {};
        tmp4 = initialWindowMetrics;
        obj.initialMetrics = initialWindowMetrics;
        obj.style = style;
        obj.children = children;
        tmpResult = tmp(arg1(dependencyMap[4]).SafeAreaProvider, obj);
      }
      return tmpResult;
    }
  }
  let initialWindowMetrics = obj;
} else {
  initialWindowMetrics = arg1(dependencyMap[4]).initialWindowMetrics;
}
SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default SafeAreaProviderCompat;
