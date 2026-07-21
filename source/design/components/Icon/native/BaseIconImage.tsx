// Module ID: 3831
// Function ID: 31986
// Name: BaseIconImage
// Dependencies: []
// Exports: BaseIconImage

// Module 3831 (BaseIconImage)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = { xxs: { "Null": "<string:2552889346>", "Null": "<string:2938503170>" }, xs: {}, sm: { "Null": false, "Null": false }, md: {}, lg: { "Null": false, "Null": false }, custom: { width: undefined, height: undefined }, refresh_sm: { "Null": false, "Null": false } };
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

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
