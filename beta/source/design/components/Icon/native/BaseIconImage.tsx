// Module ID: 4530
// Function ID: 4531
// Name: BaseIconImage
// Dependencies: [19, 17, 21, 4531, 2]
// Exports: BaseIconImage

// Module 4530 (BaseIconImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useToken from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "Array", height: "channel" }, refresh_sm: { width: 18, height: 18 } };
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = function BaseIconImage(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let style;
  let tmp3;
  let str = size.size;
  const source = size.source;
  if (str === undefined) {
    str = "md";
  }
  const color = size.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = size);
  const obj = useToken;
  const token = obj.useToken(color);
  if (null != token) {
    tmp3 = { tintColor: token };
    const obj2 = { tintColor: token };
  } else {
    const tmp2 = null != color && typeof color === "string";
    if (tmp2) {
      tmp3 = { tintColor: color };
      const obj3 = { tintColor: color };
    }
  }
  const items = [closure_4[str], tmp3, style];
  return <Image fadeDuration={0} source={source} resizeMode={resizeMode} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
};
