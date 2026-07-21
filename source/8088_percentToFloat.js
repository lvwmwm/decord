// Module ID: 8088
// Function ID: 64116
// Name: percentToFloat
// Dependencies: []
// Exports: default

// Module 8088 (percentToFloat)
function percentToFloat(__getAnimatedValue) {
  if ("number" === typeof __getAnimatedValue) {
    return __getAnimatedValue;
  } else {
    if ("object" === tmp) {
      if ("function" === typeof __getAnimatedValue.__getAnimatedValue) {
        return __getAnimatedValue.__getAnimatedValue();
      }
    }
    let match = "string" === tmp;
    if (match) {
      match = __getAnimatedValue.match(closure_5);
    }
    if (match) {
      if (match[2]) {
        let result = tmp6 / 100;
      } else {
        result = tmp6;
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("\"" + __getAnimatedValue + "\" is not a valid number or percentage string.");
      return 0;
    }
  }
}
let closure_2 = importAll(dependencyMap[0]);
const Children = arg1(dependencyMap[0]).Children;
const processColor = arg1(dependencyMap[1]).processColor;
let closure_5 = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;
function offsetComparator(arg0, arg1) {
  return arg0[0] - arg1[0];
}

export default function extractGradient(arg0, arg1) {
  let children;
  let gradientTransform;
  let gradientUnits;
  let id;
  let offset;
  let style;
  const importDefault = arg1;
  ({ id, children, gradientTransform, gradientUnits } = arg0);
  if (id) {
    const items = [];
    if (children) {
      let mapped = Children.map(children, (arg0) => closure_2.cloneElement(arg0, { parent: arg1 }));
    } else {
      mapped = [];
    }
    let num6 = 0;
    if (0 < mapped.length) {
      while (true) {
        let props = mapped[num6].props;
        ({ style, offset } = props);
        if (undefined === offset) {
          let offset2 = style;
          if (style) {
            offset2 = style.offset;
          }
          offset = offset2;
        }
        let stopColor = props.stopColor;
        if (undefined === stopColor) {
          let str6 = style;
          if (style) {
            str6 = style.stopColor;
          }
          if (!str6) {
            str6 = "#000";
          }
          stopColor = str6;
        }
        let stopOpacity = props.stopOpacity;
        if (undefined === stopOpacity) {
          let stopOpacity2 = style;
          if (style) {
            stopOpacity2 = style.stopOpacity;
          }
          stopOpacity = stopOpacity2;
        }
        let num7 = offset;
        let tmp5 = percentToFloat;
        if (!offset) {
          num7 = 0;
        }
        let tmp5Result = tmp5(num7);
        let tmp7 = stopColor;
        if (stopColor) {
          let tmp8 = processColor;
          tmp7 = processColor(stopColor);
        }
        if ("number" === typeof tmp7) {
          let _isNaN = isNaN;
          if (!isNaN(tmp5Result)) {
            let _Math = Math;
            let tmp9 = importDefault;
            let tmp10 = dependencyMap;
            let items1 = [tmp5Result, 16777215 & tmp7 | Math.round(255 * importDefault(dependencyMap[2])(stopOpacity)) << 24];
            let arr = items.push(items1);
          }
          num6 = num6 + 1;
          if (num6 >= length) {
            break;
          }
        }
        let _console = console;
        let _HermesInternal = HermesInternal;
        let str7 = "\"";
        let tmp12 = stopColor;
        let str8 = "\" is not a valid color or \"";
        let tmp13 = offset;
        let str9 = "\" is not a valid offset";
        let warnResult = console.warn("\"" + stopColor + "\" is not a valid color or \"" + offset + "\" is not a valid offset");
      }
    }
    const sorted = items.sort(offsetComparator);
    const items2 = [];
    for (let num9 = 0; num9 < length2; num9 = num9 + 1) {
      let tmp17 = items[num9];
      arr = items2.push(tmp17[0], tmp17[1]);
    }
    const obj = { name: id, gradient: items2, children: mapped };
    let num10 = gradientUnits;
    if (gradientUnits) {
      num10 = importDefault(dependencyMap[3])[gradientUnits];
    }
    if (!num10) {
      num10 = 0;
    }
    obj.gradientUnits = num10;
    if (!gradientTransform) {
      gradientTransform = tmp;
    }
    if (!gradientTransform) {
      gradientTransform = arg0;
    }
    obj.gradientTransform = importDefault(dependencyMap[4])(gradientTransform);
    return obj;
  } else {
    return null;
  }
};
