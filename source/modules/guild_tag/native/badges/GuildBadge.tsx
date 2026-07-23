// Module ID: 12922
// Function ID: 100292
// Name: GuildBadge
// Dependencies: [31, 7632, 33, 12923, 12926, 12927, 12928, 12929, 12930, 12931, 12932, 12933, 12934, 12935, 12936, 12937, 12938, 12939, 12940, 12941, 12942, 12943, 12944, 12945, 12946, 12947, 12948, 12949, 12950, 12951, 12952, 12953, 12954, 12955, 12956, 12957, 12958, 12959, 12960, 12961, 12962, 12963, 12964, 12965, 2]
// Exports: GuildBadge

// Module 12922 (GuildBadge)
import "items";
import { GuildTagBadgeKind } from "items";
import { jsx } from "items";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  let badge;
  let primaryTintColor;
  let secondaryTintColor;
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  let obj = { badge: 0, primaryTintColor: 0, secondaryTintColor: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  if (GuildTagBadgeKind.SWORD === badge) {
    obj = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12923) /* items */.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    obj = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12926) /* items */.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const obj1 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12927) /* items */.GuildBadgeSkull, { primaryTintColor });
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12928) /* items */.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj3 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12929) /* items */.GuildBadgeMoon, { primaryTintColor });
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj4 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12930) /* items */.GuildBadgeLightning, { primaryTintColor });
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj5 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12931) /* items */.GuildBadgeLeaf, { primaryTintColor });
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj6 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12932) /* items */.GuildBadgeHeart, { primaryTintColor });
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj7 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12933) /* items */.GuildBadgeFire, { primaryTintColor });
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj8 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12934) /* items */.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj9 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12935) /* items */.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj10 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12936) /* items */.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12937) /* items */.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12938) /* items */.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12939) /* items */.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12940) /* items */.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12941) /* items */.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12942) /* items */.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12943) /* items */.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12944) /* items */.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12945) /* items */.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj20 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12946) /* items */.GuildBadgeBunny, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12947) /* items */.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12948) /* items */.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj23 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12949) /* items */.GuildBadgeGoat, { primaryTintColor });
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj24 = { primaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(require(12950) /* items */.GuildBadgeCat, { primaryTintColor });
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj25 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(require(12951) /* items */.GuildBadgeDiamond, { primaryTintColor });
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj26 = { primaryTintColor, secondaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(require(12952) /* items */.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj27 = { primaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(require(12953) /* items */.GuildBadgeTrophy, { primaryTintColor });
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(require(12954) /* items */.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(require(12955) /* items */.GuildBadgeDollarSign, { primaryTintColor });
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj30 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(require(12956) /* items */.GuildBadgeClover, { primaryTintColor });
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj31 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(require(12957) /* items */.GuildBadgeBlossom, { primaryTintColor });
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor, secondaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(require(12958) /* items */.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj33 = { primaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(require(12959) /* items */.GuildBadgeMaple, { primaryTintColor });
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(require(12960) /* items */.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(require(12961) /* items */.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj36 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(require(12962) /* items */.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(require(12963) /* items */.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(require(12964) /* items */.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BEE === badge) {
    const obj39 = { primaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(require(12965) /* items */.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
};
