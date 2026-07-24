// Module ID: 12974
// Function ID: 100615
// Name: GuildBadge
// Dependencies: [31, 7721, 33, 12975, 12978, 12979, 12980, 12981, 12982, 12983, 12984, 12985, 12986, 12987, 12988, 12989, 12990, 12991, 12992, 12993, 12994, 12995, 12996, 12997, 12998, 12999, 13000, 13001, 13002, 13003, 13004, 13005, 13006, 13007, 13008, 13009, 13010, 13011, 13012, 13013, 13014, 13015, 13016, 13017, 2]
// Exports: GuildBadge

// Module 12974 (GuildBadge)
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
    return jsx(require(12975) /* items */.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    obj = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12978) /* items */.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const obj1 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12979) /* items */.GuildBadgeSkull, { primaryTintColor });
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12980) /* items */.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj3 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12981) /* items */.GuildBadgeMoon, { primaryTintColor });
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj4 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12982) /* items */.GuildBadgeLightning, { primaryTintColor });
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj5 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12983) /* items */.GuildBadgeLeaf, { primaryTintColor });
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj6 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12984) /* items */.GuildBadgeHeart, { primaryTintColor });
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj7 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12985) /* items */.GuildBadgeFire, { primaryTintColor });
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj8 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12986) /* items */.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj9 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12987) /* items */.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj10 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12988) /* items */.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12989) /* items */.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12990) /* items */.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12991) /* items */.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12992) /* items */.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12993) /* items */.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12994) /* items */.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12995) /* items */.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12996) /* items */.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12997) /* items */.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj20 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(12998) /* items */.GuildBadgeBunny, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(12999) /* items */.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(require(13000) /* items */.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj23 = { primaryTintColor };
    Object.assign(merged);
    return jsx(require(13001) /* items */.GuildBadgeGoat, { primaryTintColor });
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj24 = { primaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(require(13002) /* items */.GuildBadgeCat, { primaryTintColor });
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj25 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(require(13003) /* items */.GuildBadgeDiamond, { primaryTintColor });
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj26 = { primaryTintColor, secondaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(require(13004) /* items */.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj27 = { primaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(require(13005) /* items */.GuildBadgeTrophy, { primaryTintColor });
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(require(13006) /* items */.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(require(13007) /* items */.GuildBadgeDollarSign, { primaryTintColor });
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj30 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(require(13008) /* items */.GuildBadgeClover, { primaryTintColor });
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj31 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(require(13009) /* items */.GuildBadgeBlossom, { primaryTintColor });
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor, secondaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(require(13010) /* items */.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj33 = { primaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(require(13011) /* items */.GuildBadgeMaple, { primaryTintColor });
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(require(13012) /* items */.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(require(13013) /* items */.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj36 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(require(13014) /* items */.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(require(13015) /* items */.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(require(13016) /* items */.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BEE === badge) {
    const obj39 = { primaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(require(13017) /* items */.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
};
