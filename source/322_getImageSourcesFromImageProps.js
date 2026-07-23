// Module ID: 322
// Function ID: 4882
// Name: getImageSourcesFromImageProps
// Dependencies: [57, 90]
// Exports: getImageSourcesFromImageProps

// Module 322 (getImageSourcesFromImageProps)
import _slicedToArray from "_slicedToArray";


export const getImageSourcesFromImageProps = function getImageSourcesFromImageProps(size) {
  let referrerPolicy;
  let src;
  let srcSet;
  let width;
  let tmp = width(height[1])(size.source);
  ({ referrerPolicy, src, srcSet, width } = size);
  height = size.height;
  let obj = {};
  if ("use-credentials" === size.crossOrigin) {
    obj["Access-Control-Allow-Credentials"] = "true";
  }
  if (null != referrerPolicy) {
    obj["Referrer-Policy"] = referrerPolicy;
  }
  if (null != srcSet) {
    const items = [];
    const parts = srcSet.split(", ");
    let c4 = true;
    const item = parts.forEach((str) => {
      const tmp = obj(str.split(" "), 2);
      str = "1x";
      if (undefined !== tmp[1]) {
        str = tmp2;
      }
      if (str.endsWith("x")) {
        const _parseInt = parseInt;
        const parsed = parseInt(str.split("x")[0], 10);
        const _isNaN = isNaN;
        if (!isNaN(parsed)) {
          closure_4 = 1 !== parsed && closure_4;
          obj = {};
          obj.headers = obj;
          obj.scale = parsed;
          obj.uri = tmp[0];
          obj.width = width;
          obj.height = height;
          items.push(obj);
        }
      } else {
        const _console = console;
        console.warn("The provided format for scale is not supported yet. Please use scales like 1x, 2x, etc.");
      }
    });
    let tmp5 = c4;
    if (c4) {
      tmp5 = null != src;
    }
    if (tmp5) {
      obj = {};
      obj.headers = obj;
      obj.scale = 1;
      obj.uri = src;
      obj.width = width;
      obj.height = height;
      items.push(obj);
    }
    let tmp2 = items;
    if (0 === items.length) {
      let _console = console;
      console.warn("The provided value for srcSet is not valid.");
      tmp2 = items;
    }
  } else if (null != src) {
    obj = { uri: src };
    obj.headers = obj;
    obj.width = width;
    obj.height = height;
    const items1 = [obj];
    tmp2 = items1;
  } else {
    tmp2 = tmp;
    if (null != tmp) {
      tmp2 = tmp;
      if (tmp.uri) {
        const _Object = Object;
        tmp2 = tmp;
        if (Object.keys(obj).length > 0) {
          const _Object2 = Object;
          const obj1 = { headers: obj };
          const items2 = [Object.assign({}, tmp, obj1)];
          tmp2 = items2;
        }
      }
    }
  }
  return tmp2;
};
