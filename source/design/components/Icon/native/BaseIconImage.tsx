// Module ID: 3831
// Function ID: 31981
// Name: BaseIconImage
// Dependencies: []
// Exports: BaseIconImage

// Module 3831 (BaseIconImage)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = { xxs: { bhk: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", bic: "bun run write-native-version" }, xs: {}, sm: { bhk: null, bic: null }, md: { bhk: "<string:1027735553>", bic: "<string:4143972873>" }, lg: { bhk: "boolean", bic: "string" }, custom: { width: undefined, height: undefined }, refresh_sm: { bhk: null, bic: null } };
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
