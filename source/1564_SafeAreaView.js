// Module ID: 1564
// Function ID: 17625
// Name: SafeAreaView
// Dependencies: [29, 31, 33, 1565]

// Module 1564 (SafeAreaView)
import _objectWithoutProperties from "_objectWithoutProperties";
import { useMemo } from "result";
import { jsx } from "jsxProd";

let closure_2 = ["edges"];
let closure_6 = { top: "additive", left: "additive", bottom: "additive", right: "additive" };

export const SafeAreaView = require("result").forwardRef((edges, ref) => {
  edges = edges.edges;
  const items = [edges];
  let tmp = callback(edges, closure_2);
  let tmp2 = useMemo(() => {
    if (null == edges) {
      return outer1_6;
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
  let obj = {
    edges: useMemo(() => {
      if (null == edges) {
        return outer1_6;
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
  return jsx(edges(1565), Object.assign({}, tmp, obj));
});
