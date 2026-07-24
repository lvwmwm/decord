// Module ID: 3833
// Function ID: 31994
// Name: BaseIconImage
// Dependencies: [31, 27, 33, 3834, 2]
// Exports: BaseIconImage

// Module 3833 (BaseIconImage)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: undefined, height: undefined }, refresh_sm: { width: 18, height: 18 } };
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = function BaseIconImage(source) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let style;
  let str = source.size;
  if (str === undefined) {
    str = "md";
  }
  const color = source.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = source);
  let obj = require(3834) /* map */;
  const token = obj.useToken(color);
  if (null != token) {
    obj = { tintColor: token };
    let tmp3 = obj;
  } else {
    let tmp2 = null != color;
    if (tmp2) {
      tmp2 = "string" === typeof color;
    }
    if (tmp2) {
      obj = { tintColor: color };
      tmp3 = obj;
    }
  }
  style = [table[str], tmp3, ];
  style[2] = style;
  return <Image fadeDuration={0} source={arg0.source} resizeMode={resizeMode} style={style} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
};
