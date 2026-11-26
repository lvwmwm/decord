// Module ID: 17472
// Function ID: 17473
// Name: AnimatedAssetLayout
// Dependencies: [2]
// Exports: getAnimatedAssetLayout, getMediaWidthScale

// Module 17472 (AnimatedAssetLayout)
import size_mod from "module_2" /* 2 */;

function getAnimatedAssetBox(padColor) {
  let aspectRatio;
  let asset;
  let height;
  let mapped;
  let measured;
  let num4;
  let obj7;
  let tmp10;
  let tmp7;
  let width;
  ({ asset, width, height, aspectRatio, measured } = padColor);
  let tmp;
  if (null != measured) {
    if (measured.width > 0) {
      if (measured.height > 0) {
        const obj = { ratio: measured.width / measured.height };
        const merged = Object.assign(measured);
        tmp = obj;
      }
    }
  }
  let tmp5;
  if (typeof width === "number") {
    tmp5 = width;
  }
  if (null != width) {
    if (null != height) {
      const obj2 = { style: size, predicted: obj3, measured: tmp };
      size = { width, height };
      let result;
      if (null != tmp5) {
        if (typeof height === "number") {
          if (height > 0) {
            result = tmp5 / height;
          }
        }
      }
      return obj2;
    }
  }
  if (typeof aspectRatio === "string") {
    const parts = aspectRatio.split("/");
    const _Number = Number;
    mapped = parts.map(Number);
  } else {
    let num2 = aspectRatio;
    if (aspectRatio == null) {
      num2 = NaN;
    }
    mapped = [num2];
  }
  let num3 = NaN;
  if (mapped.length <= 2) {
    [tmp7, num4] = mapped;
    num3 = tmp7 / num4;
  }
  let result1;
  if (Number.isFinite(num3)) {
    if (num3 > 0) {
      result1 = num3;
    }
  }
  if (result1 == null) {
    result1 = asset.width / asset.height;
  }
  const obj6 = { style: { width: "100%", aspectRatio: result1 }, predicted: obj7, measured: tmp };
  obj7 = { ratio: result1, width: tmp10 };
  tmp10 = tmp5;
  if (tmp5 == null) {
    let result2;
    if (typeof height === "number") {
      result2 = height * result1;
    }
    tmp10 = result2;
  }
  return obj6;
}
let closure_1 = { center: { x: 0.5, y: 0.5 }, top: { x: 0.5, y: 0 }, bottom: { x: 0.5, y: 1 }, left: { x: 0, y: 0.5 }, right: { x: 1, y: 0.5 }, "top-left": { x: 0, y: 0 }, "top-right": { x: 1, y: 0 }, "bottom-left": { x: 0, y: 1 }, "bottom-right": { x: 1, y: 1 } };
let c2 = 0.000001;
let size = size_mod;
let result = size.fileFinishedImporting("design/components/AnimatedAsset/AnimatedAssetLayout.tsx");

export function getAnimatedAssetLayout(padColor) {
  let anchor;
  let asset;
  let combined1;
  let combined2;
  let combined3;
  let fit;
  let found;
  let measured;
  let mediaRect;
  let num6;
  let num7;
  let num8;
  let pixelRatio;
  let predicted;
  let str11;
  ({ asset, fit, anchor, pixelRatio } = padColor);
  padColor = padColor.padColor;
  const tmp = getAnimatedAssetBox(padColor);
  ({ predicted, measured } = tmp);
  let ratio;
  const style = tmp.style;
  if (measured != null) {
    ratio = measured.ratio;
  }
  if (ratio == null) {
    ratio = predicted.ratio;
  }
  let width1;
  if (measured != null) {
    width1 = measured.width;
  }
  if (width1 == null) {
    width1 = predicted.width;
  }
  let tmp4;
  if (null != ratio) {
    let tmp6;
    const result = asset.width / asset.height / ratio;
    if ("crop" === fit) {
      tmp6 = result < 1;
    } else {
      tmp6 = result >= 1;
    }
    let num4 = 1;
    if (!tmp6) {
      num4 = result;
    }
    const result1 = num4 * ratio * asset.height / asset.width;
    const point = closure_1[anchor];
    const result2 = (1 - num4) * point.x;
    const result3 = (1 - result1) * point.y;
    let closure_0 = tmp13;
    const sum = result2 + num4;
    const sum1 = result3 + result1;
    if (measured == null) {
      measured = { width: 100, height: 100 };
    }
    const rect = { left: result2 * measured.width, top: result3 * measured.height, right: sum * measured.width, bottom: sum1 * measured.height };
    let rect2 = rect;
    if (null != measured) {
      rect2 = rect;
      if ("pad" === fit) {
        const left2 = rect.left;
        let width = measured.width;
        let num5 = 0;
        if (left2 * pixelRatio >= 0.5) {
          if ((width - left2) * pixelRatio >= 0.5) {
            const _Math = Math;
            width = Math.round(left2 * pixelRatio) / pixelRatio;
          }
          num5 = width;
        }
        const rect1 = { left: num5, top: num6, right: num7, bottom: num8 };
        let top = rect.top;
        let height = measured.height;
        num6 = 0;
        if (top * pixelRatio >= 0.5) {
          if ((height - top) * pixelRatio >= 0.5) {
            const _Math2 = Math;
            height = Math.round(top * pixelRatio) / pixelRatio;
          }
          num6 = height;
        }
        const right = rect.right;
        let width2 = measured.width;
        num7 = 0;
        if (right * pixelRatio >= 0.5) {
          if ((width2 - right) * pixelRatio >= 0.5) {
            const _Math3 = Math;
            width2 = Math.round(right * pixelRatio) / pixelRatio;
          }
          num7 = width2;
        }
        const bottom = rect.bottom;
        let height2 = measured.height;
        num8 = 0;
        if (bottom * pixelRatio >= 0.5) {
          if ((height2 - bottom) * pixelRatio >= 0.5) {
            const _Math4 = Math;
            height2 = Math.round(bottom * pixelRatio) / pixelRatio;
          }
          num8 = height2;
        }
        rect2 = rect1;
      }
    }
    let left = rect2.left;
    let combined = left;
    if (null == measured) {
      let _HermesInternal = HermesInternal;
      combined = "" + left + "%";
    }
    size = { left: combined, top: combined1, width: combined2, height: combined3 };
    const top2 = rect2.top;
    combined1 = top2;
    if (null == measured) {
      let _HermesInternal2 = HermesInternal;
      combined1 = "" + top2 + "%";
    }
    let diff = rect2.right - rect2.left;
    combined2 = diff;
    if (null == measured) {
      let _HermesInternal3 = HermesInternal;
      combined2 = "" + diff + "%";
    }
    let diff1 = rect2.bottom - rect2.top;
    combined3 = diff1;
    if (null == measured) {
      let _HermesInternal4 = HermesInternal;
      combined3 = "" + diff1 + "%";
    }
    const _Math5 = Math;
    const obj = {
      mediaRect: size,
      padRects: found.map((left) => {
          let combined1;
          let combined2;
          let combined3;
          left = left.left;
          let combined = left;
          if (closure_0) {
            const _HermesInternal = HermesInternal;
            combined = "" + left + "%";
          }
          size = { left: combined, top: combined1, width: combined2, height: combined3 };
          const top = left.top;
          combined1 = top;
          if (closure_0) {
            const _HermesInternal2 = HermesInternal;
            combined1 = "" + top + "%";
          }
          const diff = left.right - left.left;
          combined2 = diff;
          if (closure_0) {
            const _HermesInternal3 = HermesInternal;
            combined2 = "" + diff + "%";
          }
          const diff1 = left.bottom - left.top;
          combined3 = diff1;
          if (closure_0) {
            const _HermesInternal4 = HermesInternal;
            combined3 = "" + diff1 + "%";
          }
          return size;
        })
    };
    const bound = Math.max(rect2.top, 0);
    const _Math6 = Math;
    const bound1 = Math.min(rect2.bottom, measured.height);
    const rect3 = { left: 0, top: 0, right: measured.width, bottom: bound };
    const items = [rect3, , , ];
    const rect4 = { left: 0, top: bound1, right: null, bottom: null };
    ({ width: obj5.right, height: obj5.bottom } = measured);
    items[1] = rect4;
    const rect5 = { left: 0, top: bound, right: Math.max(rect2.left, 0), bottom: bound1 };
    const _Math7 = Math;
    items[2] = rect5;
    const rect6 = { left: Math.min(rect2.right, measured.width), top: bound, right: measured.width, bottom: bound1 };
    const _Math8 = Math;
    items[3] = rect6;
    found = items.filter((right) => right.right - right.left > closure_1_2 && right.bottom - right.top > tmp);
    tmp4 = obj;
  }
  const point2 = closure_1[anchor];
  const obj2 = { boxStyle: style, objectFitStyle: { objectFit: str11, objectPosition: "" + 100 * point2.x + "% " + 100 * point2.y + "%" }, mediaRect, padRects: null, mediaPixelWidth: null };
  str11 = "contain";
  if ("crop" === fit) {
    str11 = "cover";
  }
  mediaRect = undefined;
  ({ objectFit: str11, objectPosition: "" + 100 * point2.x + "% " + 100 * point2.y + "%" });
  if (tmp4 != null) {
    mediaRect = tmp4.mediaRect;
  }
  if ("pad" === fit) {
    if ("transparent" !== padColor) {
      if (null != tmp4) {
        const padRects = tmp4.padRects;
      }
      obj2.padRects = [];
      let result5;
      if (null != width1) {
        if (null != ratio) {
          const result4 = asset.width / asset.height / ratio;
          let num10 = 1;
          if (!("crop" === fit ? result4 < num10 : result4 >= num10)) {
            num10 = result4;
          }
          result5 = width1 * num10;
        }
      }
      obj2.mediaPixelWidth = result5;
      return obj2;
    }
  }
}
export { getAnimatedAssetBox };
export function getMediaWidthScale(arg0, width, arg2) {
  let tmp2;
  const result = width.width / width.height / arg0;
  if ("crop" === arg2) {
    tmp2 = result < 1;
  } else {
    tmp2 = result >= 1;
  }
  let num3 = 1;
  if (!tmp2) {
    num3 = result;
  }
  return num3;
}
