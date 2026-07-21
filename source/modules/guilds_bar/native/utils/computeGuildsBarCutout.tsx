// Module ID: 14701
// Function ID: 110933
// Name: computeGuildsBarCutout
// Dependencies: []
// Exports: default

// Module 14701 (computeGuildsBarCutout)
const PixelRatio = require(dependencyMap[0]).PixelRatio;
const GUILD_ITEM_SIZE = require(dependencyMap[1]).GUILD_ITEM_SIZE;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx");

export default function computeGuildsBarCutout(containerSize) {
  containerSize = containerSize.containerSize;
  if (containerSize === undefined) {
    containerSize = GUILD_ITEM_SIZE;
  }
  let BADGE_SIZE = containerSize.width;
  if (BADGE_SIZE === undefined) {
    BADGE_SIZE = require(dependencyMap[2]).BADGE_SIZE;
  }
  let BADGE_SIZE2 = containerSize.height;
  if (BADGE_SIZE2 === undefined) {
    BADGE_SIZE2 = require(dependencyMap[2]).BADGE_SIZE;
  }
  let BADGE_PADDING = containerSize.padding;
  if (BADGE_PADDING === undefined) {
    BADGE_PADDING = require(dependencyMap[2]).BADGE_PADDING;
  }
  const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(BADGE_SIZE + 2 * BADGE_PADDING);
  const roundToNearestPixelResult1 = PixelRatio.roundToNearestPixel(BADGE_SIZE2 + 2 * BADGE_PADDING);
  const obj = { shape: require(dependencyMap[3]).CutoutShape.RoundedRect, width: roundToNearestPixelResult, height: roundToNearestPixelResult1, cornerRadius: PixelRatio.roundToNearestPixel(Math.min(roundToNearestPixelResult, roundToNearestPixelResult1) / 2) };
  if ("top-right" === containerSize.position) {
    obj.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    obj.y = -BADGE_PADDING;
  } else {
    obj.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    obj.y = containerSize - roundToNearestPixelResult1 + BADGE_PADDING;
  }
  return obj;
};
