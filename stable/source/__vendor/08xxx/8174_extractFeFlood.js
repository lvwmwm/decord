// Module ID: 8174
// Function ID: 8175
// Name: extractFeFlood
// Dependencies: [19, 17, 8154, 8142]
// Exports: default, extractFeBlend, extractFeColorMatrix, extractFeComposite, extractFeGaussianBlur, extractFeMerge, extractFilter, extractIn

// Module 8174 (extractFeFlood)
import extractOpacityDefault from "extractOpacity" /* 8142 */;
import extractBrushDefault from "extractBrush" /* 8154 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let size;

const re3 = /\s+/;
const action = { type: 0, payload: require("react-native").processColor("black") };

export default function extractFeFlood(arg0) {
  let floodColor;
  let floodOpacity;
  let tmp;
  ({ floodColor, floodOpacity } = arg0);
  if (null == floodColor) {
    tmp = action;
  } else {
    tmp = extractBrushDefault(floodColor);
  }
  const obj = { floodColor: tmp };
  if (null != floodOpacity) {
    obj.floodOpacity = extractOpacityDefault(floodOpacity);
  }
  return obj;
};
export const extractFilter = (arg0) => {
  size = { x: arg0.x, y: arg0.y, width: arg0.width, height: arg0.height, result: arg0.result };
  return size;
};
export const extractIn = (arg0) => {
  let obj;
  if (arg0.in) {
    obj = { in1: arg0.in };
    const obj2 = { in1: arg0.in };
  } else {
    obj = {};
  }
  return obj;
};
export const extractFeBlend = (in2) => {
  const obj = {};
  if (in2.in2) {
    obj.in2 = in2.in2;
  }
  if (in2.mode) {
    obj.mode = in2.mode;
  }
  return obj;
};
export const extractFeColorMatrix = (type) => {
  const obj = {};
  if (undefined !== type.values) {
    const _Array = Array;
    const values = type.values;
    if (Array.isArray(type.values)) {
      obj.values = values.map((item) => {
        let parsed = item;
        if (typeof item !== "number") {
          const _parseFloat = parseFloat;
          parsed = parseFloat(item);
        }
        return parsed;
      });
    } else if (typeof values === "number") {
      const items = [type.values];
      obj.values = items;
    } else if (typeof type.values === "string") {
      const str = type.values;
      const parts = str.split(re3);
      let _parseFloat = parseFloat;
      const mapped = parts.map(parseFloat);
      obj.values = mapped.filter((item) => !isNaN(item));
    } else {
      const _console = console;
      console.warn("Invalid value for FeColorMatrix `values` prop");
    }
  }
  if (type.type) {
    obj.type = type.type;
  }
  return obj;
};
export const extractFeComposite = (arg0) => {
  let closure_0 = arg0;
  const tmp = arg0.in || "";
  const obj = { in1: tmp, in2: arg0.in2 || "", operator1: arg0.operator || "over" };
  const items = ["k1", "k2", "k3", "k4"];
  const item = items.forEach((item) => {
    if (undefined !== closure_0[item]) {
      const _Number = Number;
      obj[item] = Number(tmp[item]) || 0;
      Number(tmp[item]) || 0;
    }
  });
  return obj;
};
export const extractFeGaussianBlur = (stdDeviation) => {
  const obj = {};
  if (Array.isArray(stdDeviation.stdDeviation)) {
    const _Number5 = Number;
    obj.stdDeviationX = Number(stdDeviation.stdDeviation[0]) || 0;
    const _Number6 = Number;
    Number(stdDeviation.stdDeviation[0]) || 0;
    obj.stdDeviationY = Number(stdDeviation.stdDeviation[1]) || 0;
    Number(stdDeviation.stdDeviation[1]) || 0;
  } else {
    if (typeof stdDeviation.stdDeviation === "string") {
      const str2 = stdDeviation.stdDeviation;
      const tmp9 = re3;
      if (str2.match(re3)) {
        const str = stdDeviation.stdDeviation;
        const parts = str.split(tmp9);
        const _Number3 = Number;
        obj.stdDeviationX = Number(parts[0]) || 0;
        const _Number4 = Number;
        Number(parts[0]) || 0;
        obj.stdDeviationY = Number(parts[1]) || 0;
        Number(parts[1]) || 0;
      }
    }
    let tmp = typeof stdDeviation.stdDeviation === "number";
    if (!tmp) {
      stdDeviation = stdDeviation.stdDeviation;
      let tmp10 = typeof stdDeviation === "string";
      if (typeof stdDeviation === "string") {
        const str3 = stdDeviation.stdDeviation;
        tmp10 = !str3.match(re3);
      }
      tmp = tmp10;
    }
    if (tmp) {
      const _Number = Number;
      obj.stdDeviationX = Number(stdDeviation.stdDeviation) || 0;
      const _Number2 = Number;
      Number(stdDeviation.stdDeviation) || 0;
      obj.stdDeviationY = Number(stdDeviation.stdDeviation) || 0;
      Number(stdDeviation.stdDeviation) || 0;
    }
  }
  if (stdDeviation.edgeMode) {
    obj.edgeMode = stdDeviation.edgeMode;
  }
  return obj;
};
export const extractFeMerge = (children, parent) => {
  let mapped;
  let num;
  if (children.children) {
    const Children = react.Children;
    mapped = Children.map(children.children, (arg0) => {
      const obj = { parent };
      return react.cloneElement(arg0, obj);
    });
  } else {
    mapped = [];
  }
  const nodes = [];
  const length = mapped.length;
  for (let num = 0; num < length; num = num + 1) {
    let str = mapped[num].props.in;
    let push = nodes.push;
    if (!str) {
      str = "";
    }
    let arr = push(str);
  }
  return { nodes };
};
