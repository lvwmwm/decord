// Module ID: 6005
// Function ID: 49940
// Name: DiscordSupergraphicLogo
// Dependencies: []
// Exports: DiscordSupergraphicLogo

// Module 6005 (DiscordSupergraphicLogo)
const Image = require(dependencyMap[0]).Image;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("design/components/mana-assets/native/generated/DiscordSupergraphicLogo.native.tsx");

export const DiscordSupergraphicLogo = function DiscordSupergraphicLogo(color) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = importDefault(dependencyMap[2]).colors.ICON_STRONG;
  }
  let num2 = color.width;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = color.height;
  if (num3 === undefined) {
    num3 = 76;
  }
  let num4 = color.scale;
  if (num4 === undefined) {
    num4 = 1;
  }
  let obj = require(dependencyMap[3]);
  const token = obj.useToken(ICON_STRONG);
  if (null != token) {
    obj = { tintColor: token };
    let tmp5 = obj;
  } else {
    let tmp4 = null != ICON_STRONG;
    if (tmp4) {
      tmp4 = "string" === typeof ICON_STRONG;
    }
    if (tmp4) {
      obj = { tintColor: ICON_STRONG };
      tmp5 = obj;
    }
  }
  const obj1 = { fadeDuration: 0, source: { uri: importDefault(dependencyMap[4]) } };
  const obj3 = { width: num2 * num4, height: num3 * num4 };
  const items = [obj3, tmp5];
  obj1.style = items;
  obj1.accessible = accessible;
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.resizeMode = resizeMode;
  return <Image {...obj1} />;
};
