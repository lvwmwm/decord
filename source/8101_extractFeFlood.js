// Module ID: 8101
// Function ID: 64161
// Name: extractFeFlood
// Dependencies: [31, 27, 8081, 8069]
// Exports: default, extractFeBlend, extractFeColorMatrix, extractFeComposite, extractFeGaussianBlur, extractFeMerge, extractFilter, extractIn

// Module 8101 (extractFeFlood)
import result from "result";

const re3 = /\s+/;
let obj = { type: 0, payload: require("get ActivityIndicator").processColor("black") };

export default function extractFeFlood(arg0) {
  let floodColor;
  let floodOpacity;
  const obj = {};
  ({ floodColor, floodOpacity } = arg0);
  if (null == floodColor) {
    let tmp = obj;
  } else {
    tmp = importDefault(8081)(floodColor);
  }
  obj.floodColor = tmp;
  if (null != floodOpacity) {
    obj.floodOpacity = importDefault(8069)(floodOpacity);
  }
  return obj;
};
export const extractFilter = function extractFilter(props) {
  return { x: props.x, y: props.y, width: props.width, height: props.height, result: props.result };
};
export const extractIn = function extractIn(props) {
  if (props.in) {
    let obj = { in1: props.in };
  } else {
    obj = {};
  }
  return obj;
};
export const extractFeBlend = function extractFeBlend(props) {
  const obj = {};
  if (props.in2) {
    obj.in2 = props.in2;
  }
  if (props.mode) {
    obj.mode = props.mode;
  }
  return obj;
};
export const extractFeColorMatrix = function extractFeColorMatrix(props) {
  const obj = {};
  if (undefined !== props.values) {
    const _Array = Array;
    const values = props.values;
    if (Array.isArray(props.values)) {
      obj.values = values.map((arg0) => {
        let parsed = arg0;
        if ("number" !== typeof arg0) {
          const _parseFloat = parseFloat;
          parsed = parseFloat(arg0);
        }
        return parsed;
      });
    } else if ("number" === typeof values) {
      const items = [props.values];
      obj.values = items;
    } else if ("string" === typeof props.values) {
      const parts = props.values.split(closure_3);
      let _parseFloat = parseFloat;
      const mapped = parts.map(parseFloat);
      obj.values = mapped.filter((arg0) => !isNaN(arg0));
      const str4 = props.values;
    } else {
      const _console = console;
      console.warn("Invalid value for FeColorMatrix `values` prop");
    }
  }
  if (props.type) {
    obj.type = props.type;
  }
  return obj;
};
export const extractFeComposite = function extractFeComposite(props) {
  let closure_0 = props;
  const obj = { in1: tmp, in2: tmp2, operator1: tmp3 };
  const items = ["k1", "k2", "k3", "k4"];
  const item = items.forEach((arg0) => {
    if (undefined !== props[arg0]) {
      const _Number = Number;
      obj[arg0] = Number(props[arg0]) || 0;
      const tmp = obj;
      const tmp4 = Number(props[arg0]) || 0;
    }
  });
  return obj;
};
export const extractFeGaussianBlur = function extractFeGaussianBlur(props) {
  const obj = {};
  if (Array.isArray(props.stdDeviation)) {
    const _Number5 = Number;
    obj.stdDeviationX = Number(props.stdDeviation[0]) || 0;
    const _Number6 = Number;
    const tmp11 = Number(props.stdDeviation[0]) || 0;
    obj.stdDeviationY = Number(props.stdDeviation[1]) || 0;
    const tmp12 = Number(props.stdDeviation[1]) || 0;
  } else {
    if ("string" === typeof props.stdDeviation) {
      if (str2.match(closure_3)) {
        const parts = props.stdDeviation.split(closure_3);
        const _Number3 = Number;
        obj.stdDeviationX = Number(parts[0]) || 0;
        const _Number4 = Number;
        const str5 = props.stdDeviation;
        const tmp9 = Number(parts[0]) || 0;
        obj.stdDeviationY = Number(parts[1]) || 0;
        const tmp10 = Number(parts[1]) || 0;
      }
      str2 = props.stdDeviation;
    }
    let tmp2 = "number" === typeof props.stdDeviation;
    if (!tmp2) {
      let tmp3 = "string" === typeof props.stdDeviation;
      if (tmp3) {
        tmp3 = !props.stdDeviation.match(closure_3);
        const str4 = props.stdDeviation;
      }
      tmp2 = tmp3;
    }
    if (tmp2) {
      const _Number = Number;
      obj.stdDeviationX = Number(props.stdDeviation) || 0;
      const _Number2 = Number;
      const tmp5 = Number(props.stdDeviation) || 0;
      obj.stdDeviationY = Number(props.stdDeviation) || 0;
      const tmp6 = Number(props.stdDeviation) || 0;
    }
  }
  if (props.edgeMode) {
    obj.edgeMode = props.edgeMode;
  }
  return obj;
};
export const extractFeMerge = function extractFeMerge(props, arg1) {
  let closure_0 = arg1;
  const nodes = [];
  if (props.children) {
    const Children = React.Children;
    let mapped = Children.map(props.children, (arg0) => outer1_2.cloneElement(arg0, { parent: closure_0 }));
  } else {
    mapped = [];
  }
  for (let num = 0; num < length; num = num + 1) {
    let str = mapped[num].props.in;
    if (!str) {
      str = "";
    }
    let arr = nodes.push(str);
  }
  return { nodes };
};
