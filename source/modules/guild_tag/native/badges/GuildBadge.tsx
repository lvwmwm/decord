// Module ID: 13030
// Function ID: 100920
// Name: GuildBadge
// Dependencies: [31, 7701, 33, 13031, 13034, 13035, 13036, 13037, 13038, 13039, 13040, 13041, 13042, 13043, 13044, 13045, 13046, 13047, 13048, 13049, 13050, 13051, 13052, 13053, 13054, 13055, 13056, 13057, 13058, 13059, 13060, 13061, 13062, 13063, 13064, 13065, 13066, 13067, 13068, 13069, 13070, 13071, 13072, 13073, 2]
// Exports: GuildBadge

// Module 13030 (GuildBadge)
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
    return jsx(require(13031) /* items */.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    obj = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13034) /* items */.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const obj1 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13035) /* items */.GuildBadgeSkull, { primaryTintColor });
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13036) /* items */.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj3 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13037) /* items */.GuildBadgeMoon, { primaryTintColor });
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj4 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13038) /* items */.GuildBadgeLightning, { primaryTintColor });
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj5 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13039) /* items */.GuildBadgeLeaf, { primaryTintColor });
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj6 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13040) /* items */.GuildBadgeHeart, { primaryTintColor });
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj7 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13041) /* items */.GuildBadgeFire, { primaryTintColor });
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj8 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13042) /* items */.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj9 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13043) /* items */.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj10 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13044) /* items */.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13045) /* items */.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13046) /* items */.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13047) /* items */.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13048) /* items */.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13049) /* items */.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13050) /* items */.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13051) /* items */.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13052) /* items */.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13053) /* items */.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj20 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13054) /* items */.GuildBadgeBunny, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13055) /* items */.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13056) /* items */.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj23 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13057) /* items */.GuildBadgeGoat, { primaryTintColor });
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj24 = { primaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(require(13058) /* items */.GuildBadgeCat, { primaryTintColor });
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj25 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(require(13059) /* items */.GuildBadgeDiamond, { primaryTintColor });
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj26 = { primaryTintColor, secondaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(require(13060) /* items */.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj27 = { primaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(require(13061) /* items */.GuildBadgeTrophy, { primaryTintColor });
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(require(13062) /* items */.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(require(13063) /* items */.GuildBadgeDollarSign, { primaryTintColor });
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj30 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(require(13064) /* items */.GuildBadgeClover, { primaryTintColor });
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj31 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(require(13065) /* items */.GuildBadgeBlossom, { primaryTintColor });
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor, secondaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(require(13066) /* items */.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj33 = { primaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(require(13067) /* items */.GuildBadgeMaple, { primaryTintColor });
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(require(13068) /* items */.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(require(13069) /* items */.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj36 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(require(13070) /* items */.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(require(13071) /* items */.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(require(13072) /* items */.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BEE === badge) {
    const obj39 = { primaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(require(13073) /* items */.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
};
