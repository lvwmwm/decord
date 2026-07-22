// Module ID: 28
// Function ID: 1195
// Name: ActivityIndicator
// Dependencies: []

// Module 28 (ActivityIndicator)
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).default;
class ActivityIndicator {
  constructor(arg0) {
    animating = global.animating;
    tmp = undefined === animating;
    if (!tmp) {
      tmp = animating;
    }
    color = global.color;
    tmp2 = null;
    if (undefined !== color) {
      tmp2 = color;
    }
    hidesWhenStopped = global.hidesWhenStopped;
    tmp3 = undefined === hidesWhenStopped || hidesWhenStopped;
    size = global.size;
    str = "small";
    if (undefined !== size) {
      str = size;
    }
    tmp4 = closure_3(global, closure_2);
    if ("small" === str) {
      tmp6 = closure_6;
      sizeSmall = closure_6.sizeSmall;
      str3 = "small";
    } else {
      str2 = "large";
      if ("large" === str) {
        tmp5 = closure_6;
        sizeSmall = closure_6.sizeLarge;
        str3 = "large";
      } else {
        sizeSmall = {};
        sizeSmall.height = str;
        sizeSmall.width = str;
      }
    }
    obj = {};
    obj.animating = tmp;
    obj.color = tmp2;
    obj.hidesWhenStopped = tmp3;
    obj1 = { ref: global.ref };
    obj1.style = sizeSmall;
    obj1.size = str3;
    merged = Object.assign(obj, tmp4, obj1);
    obj2 = { onLayout: global.onLayout };
    tmp8 = importDefault(dependencyMap[4]);
    obj5 = importDefault(dependencyMap[5]);
    obj2.style = obj5.compose(closure_6.container, global.style);
    obj2.children = jsx(closure_5, Object.assign({}, merged, {}));
    return jsx(tmp8, obj2);
  }
}
ActivityIndicator.displayName = "ActivityIndicator";
let closure_6 = importDefault(dependencyMap[5]).create({ container: { <string:3596066964>: null, <string:3638417373>: null }, sizeSmall: {}, sizeLarge: { "Null": 0, "Null": -1048576 } });

export default ActivityIndicator;
