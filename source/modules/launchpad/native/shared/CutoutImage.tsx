// Module ID: 15655
// Function ID: 120781
// Dependencies: [57, 31, 27, 33, 491, 8018, 11954, 2]

// Module 15655
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const memoResult = importAllResult.memo(function CutoutImage(cutoutTopLeftSize) {
  let imageBackgroundColor;
  let imageBorderRadius;
  let imageSize;
  let imageSource;
  let imageTintColor;
  let num = cutoutTopLeftSize.cutoutTopLeftSize;
  if (num === undefined) {
    num = 0;
  }
  let num2 = cutoutTopLeftSize.cutoutTopLeftInsetX;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = cutoutTopLeftSize.cutoutTopLeftInsetY;
  if (num3 === undefined) {
    num3 = 0;
  }
  let num4 = cutoutTopLeftSize.cutoutTopRightSize;
  if (num4 === undefined) {
    num4 = 0;
  }
  let num5 = cutoutTopLeftSize.cutoutTopRightInsetX;
  if (num5 === undefined) {
    num5 = 0;
  }
  let num6 = cutoutTopLeftSize.cutoutTopRightInsetY;
  if (num6 === undefined) {
    num6 = 0;
  }
  let num7 = cutoutTopLeftSize.cutoutBottomLeftSize;
  if (num7 === undefined) {
    num7 = 0;
  }
  let num8 = cutoutTopLeftSize.cutoutBottomLeftInsetX;
  if (num8 === undefined) {
    num8 = 0;
  }
  let num9 = cutoutTopLeftSize.cutoutBottomLeftInsetY;
  if (num9 === undefined) {
    num9 = 0;
  }
  let num10 = cutoutTopLeftSize.cutoutBottomRightSize;
  if (num10 === undefined) {
    num10 = 0;
  }
  let num11 = cutoutTopLeftSize.cutoutBottomRightInsetX;
  if (num11 === undefined) {
    num11 = 0;
  }
  let num12 = cutoutTopLeftSize.cutoutBottomRightInsetY;
  if (num12 === undefined) {
    num12 = 0;
  }
  ({ imageSize, imageSource, imageBorderRadius } = cutoutTopLeftSize);
  if (imageBorderRadius === undefined) {
    imageBorderRadius = imageSize / 2;
  }
  ({ imageBackgroundColor, imageTintColor } = cutoutTopLeftSize);
  let str = cutoutTopLeftSize.clipInnerAmount;
  if (str === undefined) {
    str = 0;
  }
  let num14 = cutoutTopLeftSize.clipOuterAmount;
  if (num14 === undefined) {
    num14 = 0;
  }
  const borderStroke = cutoutTopLeftSize.borderStroke;
  let importDefault;
  let str2 = 4;
  let obj = imageTintColor(491);
  const tmp = callback(importAllResult.useState(obj.v4()), 2);
  const first = tmp[0];
  importDefault = tmp[1];
  if (null != first) {
    const _HermesInternal = HermesInternal;
    const combined = "url(#" + first + ")";
  }
  let v4Result;
  if (num14 > 0) {
    let obj1 = imageTintColor(dependencyMap[str2]);
    v4Result = obj1.v4();
  }
  if (null != v4Result) {
    const _HermesInternal2 = HermesInternal;
    const combined1 = "url(#" + v4Result + ")";
  }
  const items = [imageTintColor];
  callback = importAllResult.useCallback(() => {
    callback(imageTintColor(outer1_2[4]).v4());
  }, []);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != imageTintColor) {
      callback(imageTintColor(outer1_2[4]).v4());
      const obj = imageTintColor(outer1_2[4]);
    }
  }, items);
  obj = { style: cutoutTopLeftSize.style, height: imageSize, width: imageSize };
  obj = {};
  obj1 = { width: imageSize, height: imageSize, id: first };
  if (imageBorderRadius === imageSize / 2) {
    const obj2 = { cx: imageSize / 2, cy: imageSize / 2, r: imageSize / 2, fill: "white" };
    let tmp17 = callback2(imageTintColor(8018).Circle, obj2);
  } else {
    const obj3 = { x: 0, y: 0, width: imageSize, height: imageSize, rx: imageBorderRadius, ry: imageBorderRadius, fill: "white" };
    tmp17 = callback2(imageTintColor(8018).Rect, obj3);
  }
  const items1 = [tmp17, , , , , ];
  let tmp21 = null;
  if (num > 0) {
    const obj4 = { cx: num2, cy: num3, r: num, fill: "black" };
    tmp21 = callback2(imageTintColor(8018).Circle, obj4);
  }
  items1[1] = tmp21;
  let tmp25 = null;
  if (num4 > 0) {
    const obj5 = { cx: imageSize - num5, cy: num6, r: num4, fill: "black" };
    tmp25 = callback2(imageTintColor(8018).Circle, obj5);
  }
  items1[2] = tmp25;
  let tmp29 = null;
  if (num7 > 0) {
    const obj6 = { cx: num8, cy: imageSize - num9, r: num7, fill: "black" };
    tmp29 = callback2(imageTintColor(8018).Circle, obj6);
  }
  items1[3] = tmp29;
  let tmp33 = null;
  if (num10 > 0) {
    const obj7 = { cx: imageSize - num11, cy: imageSize - num12, r: num10, fill: "black" };
    tmp33 = callback2(imageTintColor(8018).Circle, obj7);
  }
  items1[4] = tmp33;
  if (str <= 0) {
    items1[5] = null;
    obj1.children = items1;
    const items2 = [tmp12(imageTintColor(8018).Mask, obj1), ];
    if (null == v4Result) {
      items2[1] = null;
      obj.children = items2;
      const items3 = [tmp12(imageTintColor(8018).Defs, obj), , , ];
      let tmp57 = null;
      if (null != imageBackgroundColor) {
        const obj8 = { height: imageSize, width: imageSize, fill: imageBackgroundColor, mask: combined, clipPath: combined1 };
        tmp57 = callback2(imageTintColor(8018).Rect, obj8);
      }
      items3[1] = tmp57;
      if (null == imageSource) {
        items3[2] = null;
        let tmp72 = null;
        if (null != borderStroke) {
          const obj9 = { height: imageSize, width: imageSize, fill: "transparent", stroke: cutoutTopLeftSize.borderStrokeColor, strokeWidth: 2 * borderStroke, mask: combined, clipPath: combined1, rx: imageBorderRadius, ry: imageBorderRadius };
          tmp72 = callback2(imageTintColor(8018).Rect, obj9);
        }
        items3[3] = tmp72;
        obj.children = items3;
        return tmp12(tmp13, obj);
      } else {
        if ("number" !== typeof imageSource) {
          const obj10 = { height: imageSize, width: imageSize, href: importDefault(11954)(imageSource), mask: combined, clipPath: combined1 };
          let tmp66 = callback2(imageTintColor(8018).Image, obj10);
        }
        const obj11 = { height: imageSize, width: imageSize, mask: combined, clipPath: combined1 };
        const obj12 = {};
        const obj13 = { width: imageSize, height: imageSize, tintColor: imageTintColor };
        obj12.style = obj13;
        obj12.source = imageSource;
        obj12.onLoad = callback;
        obj11.children = callback2(Image, obj12);
        tmp66 = callback2(imageTintColor(8018).ForeignObject, obj11);
      }
    } else {
      const obj14 = { id: v4Result };
      if (imageBorderRadius === imageSize / 2) {
        const obj15 = { cx: imageSize / 2, cy: imageSize / 2, r: imageSize / str2 };
        str2 = "white";
        obj15.fill = "white";
        let tmp52 = callback2(imageTintColor(8018).Circle, obj15);
      } else {
        const obj16 = { x: num14, y: num14, width: imageSize - 2 * num14, height: imageSize - 2 * num14, rx: imageBorderRadius * ((imageSize - 2 * num14) / imageSize), ry: imageBorderRadius * ((imageSize - 2 * num14) / imageSize), fill: "white" };
        tmp52 = callback2(imageTintColor(8018).Rect, obj16);
      }
      obj14.children = tmp52;
      callback2(imageTintColor(8018).ClipPath, obj14);
      const tmp46 = callback2;
    }
  } else if (imageBorderRadius === imageSize / 2) {
    const obj17 = { cx: imageSize / 2, cy: imageSize / 2, r: str / 2 };
    str = "black";
    obj17.fill = "black";
    let tmp40 = callback2(imageTintColor(8018).Circle, obj17);
  } else {
    const obj18 = { x: (imageSize - `black`) / 2, y: (imageSize - `black`) / 2, width: str, height: str, rx: imageBorderRadius * (`black` / imageSize), ry: imageBorderRadius * (`black` / imageSize), fill: "black" };
    tmp40 = callback2(imageTintColor(8018).Rect, obj18);
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/launchpad/native/shared/CutoutImage.tsx");

export default memoResult;
