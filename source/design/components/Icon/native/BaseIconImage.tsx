// Module ID: 3831
// Function ID: 31988
// Name: BaseIconImage
// Dependencies: [31, 33, 2, 31, 33]
// Exports: BaseIconImage

// Module 3831 (BaseIconImage)
import "module_31";
import { Image } from "module_33";
import { jsx } from "result2";
import module_33 from "module_33";

let closure_4 = { xxs: { "Null": null, "Null": null }, xs: { "Null": null, "Null": null }, sm: { "Null": null, "Null": null }, md: {}, lg: { "Null": true, "Null": true }, custom: { width: undefined, height: undefined }, refresh_sm: { "Null": null, "Null": null } };
const result = module_33.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

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
  let obj = arg1(dependencyMap[3]);
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
  style = [closure_4[str], tmp3, ];
  style[2] = style;
  return <Image fadeDuration={0} source={arg0.source} resizeMode={resizeMode} style={style} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
};
