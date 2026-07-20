// Module ID: 1447
// Function ID: 16846
// Name: fit
// Dependencies: []
// Exports: dataUriFileSize, dataUrlToFile, getCoverRatio, getPaletteForAvatar, getRatio, hasDimensions, isPNGAnimated, makeCssUrlString, preloadImage, readFileAsBase64, zoomFit, zoomScale

// Module 1447 (fit)
function fit(minHeight) {
  let height;
  let maxHeight;
  let maxWidth;
  let minWidth;
  let width;
  ({ width, height, maxWidth, maxHeight, minWidth } = minHeight);
  if (minWidth === undefined) {
    minWidth = 0;
  }
  let num = minHeight.minHeight;
  if (num === undefined) {
    num = 0;
  }
  if (width !== maxWidth) {
    let num2 = 1;
    let num3 = 1;
    if (width > maxWidth) {
      num3 = maxWidth / width;
    }
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const _Math4 = Math;
    const bound = Math.max(Math.round(width * num3), minWidth);
    const bound1 = Math.max(Math.round(height * num3), num);
    if (bound1 > maxHeight) {
      num2 = maxHeight / bound1;
    }
    const _Math5 = Math;
    const _Math6 = Math;
    let bound2 = Math.max(Math.round(bound * num2), minWidth);
    const _Math7 = Math;
    const _Math8 = Math;
    let bound3 = Math.max(Math.round(bound1 * num2), num);
  } else {
    bound2 = width;
    bound3 = height;
  }
  const obj = { width: bound2, height: bound3 };
  return obj;
}
function getPalette(width) {
  const element = <canvas />;
  const context = element.getContext("2d");
  if (null == context) {
    return items;
  } else {
    let num2 = 128;
    let num = 128;
    if (0 !== width.width) {
      num = width.width;
    }
    element.width = num;
    if (0 !== width.height) {
      num2 = width.height;
    }
    element.height = num2;
    context.drawImage(width, 0, 0, num, num2);
    const data = context.getImageData(0, 0, num, num2).data;
    const result = num * num2;
    const items = [];
    let num12 = 0;
    if (0 < result) {
      do {
        let result1 = 4 * num12;
        let tmp11 = data[result1];
        let tmp12 = data[result1 + 1];
        let tmp13 = data[result1 + 2];
        let tmp14 = data[result1 + 3];
        let tmp15 = undefined === tmp14 || tmp14 >= 125;
        if (tmp15) {
          let tmp16 = tmp11 > 250 && tmp12 > 250 && tmp13 > 250;
          if (!tmp16) {
            let items1 = [tmp11, tmp12, tmp13];
            let arr = items.push(items1);
          }
        }
        num12 = num12 + arg2;
      } while (num12 < result);
    }
    const obj3 = importDefault(dependencyMap[1])(items, arg1);
    if ("boolean" === typeof obj3) {
      let paletteResult = items;
    } else {
      paletteResult = obj3.palette();
    }
    return paletteResult;
  }
}
async function _dataUrlToFile(arg0, arg1, type, arg3) {
  let obj = callback(arg0);
  const items = [yield obj.arrayBuffer()];
  obj = { type };
  const file = new File(items, arg1, obj);
  return file;
}
function dataUrlToBlob(arg0) {
  let length;
  const first = arg0.split(",")[0];
  if (first.indexOf("base64") >= 0) {
    const _atob = atob;
    let atobResult = atob(arg0.split(",")[1]);
  } else {
    const _btoa = btoa;
    atobResult = btoa(arg0.split(",")[1]);
  }
  const str = arg0.split(",")[0];
  const uint8Array = new Uint8Array(atobResult.length);
  let num3 = 0;
  if (0 < atobResult.length) {
    do {
      uint8Array[num3] = atobResult.charCodeAt(num3);
      num3 = num3 + 1;
      length = atobResult.length;
    } while (num3 < length);
  }
  const items = [uint8Array];
  const str2 = arg0.split(",")[0].split(":")[1];
  const blob = new Blob(items, { type: arg0.split(",")[0].split(":")[1].split(";")[0] });
  return blob;
}
async function _isPNGAnimated(type, arg1) {
  let first;
  if (null != type.type) {
    first = str.split(";")[0];
  }
  if ("image/png" !== first) {
    const _Error = Error;
    const error = new Error("File is not a PNG");
    throw error;
  } else {
    const arr = yield type.text();
    const index = arr.indexOf("IDAT");
    let tmp3 = index > 0;
    if (tmp3) {
      const substr = arr.substring(0, index);
      tmp3 = -1 !== substr.indexOf("acTL");
    }
    return tmp3;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const items = [[true, true, true]];
importDefault(dependencyMap[3]).memoize((arg0) => {
  const arg1 = arg0;
  return new Promise((arg0, arg1) => {
    const image = new globalThis.Image();
    image.crossOrigin = "Anonymous";
    image.onerror = (arg0) => {
      arg1(arg0);
      closure_2.onload = null;
      closure_2.onerror = null;
      closure_2 = null;
    };
    image.onload = () => {
      arg0(callback(closure_2, 5, 10));
      closure_2.onload = null;
      closure_2.onerror = null;
      closure_2 = null;
    };
    image.src = arg0;
  });
});
const importDefaultResult = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/ImageUtils.tsx");

export { fit };
export const IMAGE_MAX_ZOOM = 2000;
export const zoomFit = function zoomFit(width, height) {
  const rounded = Math.round(0.65 * window.innerHeight);
  const bound = Math.min(rounded, Math.round(window.innerHeight));
  const rounded1 = Math.round(0.75 * window.innerWidth);
  const bound1 = Math.min(rounded1, Math.round(window.innerWidth));
  const obj = { width, height };
  const bound2 = Math.min(bound, 2000);
  obj.maxWidth = Math.min(bound1, 2000);
  obj.maxHeight = bound2;
  return fit(obj);
};
export const zoomScale = function zoomScale(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = 0;
    if (0 !== arg0) {
      num = 0;
      if (null != arg1) {
        num = 0;
        if (0 !== arg1) {
          num = arg0 / arg2;
        }
      }
    }
  }
  const bound = Math.max(2, num);
  let tmp2 = null != arg2;
  if (tmp2) {
    const _window = window;
    tmp2 = arg2 * bound > window.innerWidth * 1.6;
  }
  let num3 = 2;
  if (tmp2) {
    const _window2 = window;
    num3 = window.innerWidth * 1.6 / arg2;
  }
  let tmp3 = null != arg3;
  if (tmp3) {
    const _window3 = window;
    tmp3 = arg3 * bound > window.innerHeight * 1.6;
  }
  let num6 = 2;
  if (tmp3) {
    const _window4 = window;
    num6 = window.innerHeight * 1.6 / arg3;
  }
  const bound1 = Math.min(bound, num3, num6);
  return parseFloat(bound1.toFixed(2));
};
export const getRatio = function getRatio(height) {
  let maxHeight;
  let maxWidth;
  let width;
  ({ width, maxWidth, maxHeight } = height);
  let num = 1;
  if (width > maxWidth) {
    num = maxWidth / width;
  }
  const rounded = Math.round(width * num);
  const rounded1 = Math.round(height.height * num);
  let num2 = 1;
  if (rounded1 > maxHeight) {
    num2 = maxHeight / rounded1;
  }
  return Math.min(num * num2, 1);
};
export const getCoverRatio = function getCoverRatio(arg0) {
  let height;
  let width;
  ({ width, height } = arg0);
  if (width === height) {
    return 1;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.min(Math.max(tmp / width, tmp2 / height), 1);
  }
};
export const hasDimensions = function hasDimensions(arg0) {
  let height;
  let width;
  ({ width, height } = arg0);
  let tmp = null != width;
  if (tmp) {
    tmp = 0 !== width;
  }
  if (tmp) {
    tmp = null != height;
  }
  if (tmp) {
    tmp = 0 !== height;
  }
  return tmp;
};
export const makeCssUrlString = function makeCssUrlString(arg0) {
  let str = "none";
  if (null != arg0) {
    str = "none";
    if ("" !== arg0) {
      const _HermesInternal = HermesInternal;
      str = "url(" + arg0 + ")";
    }
  }
  return str;
};
export { getPalette };
export const getPaletteForAvatar = function getPaletteForAvatar(emojiURL) {
  return arg1(dependencyMap[2]).default.getPaletteForAvatarMobile(emojiURL);
};
export const readFileAsBase64 = function readFileAsBase64(arg0) {
  const arg1 = arg0;
  return new Promise((data) => {
    const fileReader = new FileReader();
    const asDataURL = fileReader.readAsDataURL(data);
    fileReader.onload = () => {
      arg1(fileReader[4])("string" === typeof fileReader.result, "Result must be a string");
      arg0(fileReader.result);
    };
    fileReader.onerror = (arg0) => arg1(arg0);
  });
};
export const dataUriFileSize = function dataUriFileSize(str) {
  const parts = str.split(";base64,");
  importDefault(dependencyMap[4])(2 === parts.length, "Input data is not a valid image.");
  return atob(parts[1]).length;
};
export const dataUrlToFile = function dataUrlToFile() {
  return _dataUrlToFile(...arguments);
};
export { dataUrlToBlob };
export const isPNGAnimated = function isPNGAnimated() {
  return _isPNGAnimated(...arguments);
};
export const preloadImage = function preloadImage(arg0) {
  const arg1 = arg0;
  return new Promise((arg0, arg1) => {
    const image = new globalThis.Image();
    const listener = image.addEventListener("load", arg0);
    const listener1 = image.addEventListener("error", arg1);
    image.src = arg0;
  });
};
