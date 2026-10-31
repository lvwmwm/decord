// Module ID: 5716
// Function ID: 5717
// Name: BaseIconImage
// Dependencies: [19, 21, 5596, 5717, 2]
// Exports: BaseIconImage

// Module 5716 (BaseIconImage)
import Fragment from "Fragment" /* 21 */;
import useToken from "useToken" /* 5596 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "Array", height: "flexDirection" }, refresh_sm: { width: 18, height: 18 } };
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export function BaseIconImage(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let style;
  let tmp5;
  let str = size.size;
  const source = size.source;
  if (str === undefined) {
    str = "md";
  }
  const color = size.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = size);
  const obj = useToken;
  const token = obj.useToken(color);
  const tmp3 = closure_4[str];
  if (null != token) {
    tmp5 = { tintColor: token };
    const obj2 = { tintColor: token };
  } else {
    const tmp4 = null != color && typeof color === "string";
    if (tmp4) {
      tmp5 = { tintColor: color };
      const obj3 = { tintColor: color };
    }
  }
  const items = [tmp3, tmp5, style];
  return jsx(FastImageDefault, { fadeDuration: 0, source, resizeMode, style: items, accessible, accessibilityLabel });
}
