// Module ID: 13192
// Function ID: 13193
// Name: GuildBadge
// Dependencies: [19, 7992, 21, 13193, 13196, 13197, 13198, 13199, 13200, 13201, 13202, 13203, 13204, 13205, 13206, 13207, 13208, 13209, 13210, 13211, 13212, 13213, 13214, 13215, 13216, 13217, 13218, 13219, 13220, 13221, 13222, 13223, 13224, 13225, 13226, 13227, 13228, 13229, 13230, 13231, 13232, 13233, 13234, 13235, 2]
// Exports: GuildBadge

// Module 13192 (GuildBadge)
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
  let merged = Object.assign(arg0, Object.create(null));
  if (GuildTagBadgeKind.SWORD === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    let obj = { primaryTintColor: null, secondaryTintColor: null };
    obj[0] = primaryTintColor;
    obj[1] = secondaryTintColor;
    merged = obj;
    merged = Object.assign(merged);
    return jsx(require(13193) /* items */.GuildBadgeSword, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.WATER_DROP === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    obj = { primaryTintColor: null };
    obj[0] = primaryTintColor;
    merged = obj;
    merged = Object.assign(merged);
    return jsx(require(13196) /* items */.GuildBadgeWaterDrop, { primaryTintColor: null });
  } else if (tmp2.SKULL === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj1 = { primaryTintColor: null };
    obj1[0] = primaryTintColor;
    merged = obj1;
    merged = Object.assign(merged);
    return jsx(require(13197) /* items */.GuildBadgeSkull, { primaryTintColor: null });
  } else if (tmp2.TOADSTOOL === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj2 = { primaryTintColor: null, secondaryTintColor: null };
    obj2[0] = primaryTintColor;
    obj2[1] = secondaryTintColor;
    merged = obj2;
    merged = Object.assign(merged);
    return jsx(require(13198) /* items */.GuildBadgeToadstool, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.MOON === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj3 = { primaryTintColor: null };
    obj3[0] = primaryTintColor;
    merged = obj3;
    merged = Object.assign(merged);
    return jsx(require(13199) /* items */.GuildBadgeMoon, { primaryTintColor: null });
  } else if (tmp2.LIGHTNING === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj4 = { primaryTintColor: null };
    obj4[0] = primaryTintColor;
    merged = obj4;
    merged = Object.assign(merged);
    return jsx(require(13200) /* items */.GuildBadgeLightning, { primaryTintColor: null });
  } else if (tmp2.LEAF === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj5 = { primaryTintColor: null };
    obj5[0] = primaryTintColor;
    merged = obj5;
    merged = Object.assign(merged);
    return jsx(require(13201) /* items */.GuildBadgeLeaf, { primaryTintColor: null });
  } else if (tmp2.HEART === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj6 = { primaryTintColor: null };
    obj6[0] = primaryTintColor;
    merged = obj6;
    merged = Object.assign(merged);
    return jsx(require(13202) /* items */.GuildBadgeHeart, { primaryTintColor: null });
  } else if (tmp2.FIRE === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj7 = { primaryTintColor: null };
    obj7[0] = primaryTintColor;
    merged = obj7;
    merged = Object.assign(merged);
    return jsx(require(13203) /* items */.GuildBadgeFire, { primaryTintColor: null });
  } else if (tmp2.COMPASS === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj8 = { primaryTintColor: null, secondaryTintColor: null };
    obj8[0] = primaryTintColor;
    obj8[1] = secondaryTintColor;
    merged = obj8;
    merged = Object.assign(merged);
    return jsx(require(13204) /* items */.GuildBadgeCompass, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.CROSSHAIRS === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj9 = { primaryTintColor: null, secondaryTintColor: null };
    obj9[0] = primaryTintColor;
    obj9[1] = secondaryTintColor;
    merged = obj9;
    merged = Object.assign(merged);
    return jsx(require(13205) /* items */.GuildBadgeCrosshairs, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.FLOWER === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj10 = { primaryTintColor: null, secondaryTintColor: null };
    obj10[0] = primaryTintColor;
    obj10[1] = secondaryTintColor;
    merged = obj10;
    merged = Object.assign(merged);
    return jsx(require(13206) /* items */.GuildBadgeFlower, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.FORCE === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj11 = { primaryTintColor: null, secondaryTintColor: null };
    obj11[0] = primaryTintColor;
    obj11[1] = secondaryTintColor;
    merged = obj11;
    merged = Object.assign(merged);
    return jsx(require(13207) /* items */.GuildBadgeForce, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.GEM === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj12 = { primaryTintColor: null, secondaryTintColor: null };
    obj12[0] = primaryTintColor;
    obj12[1] = secondaryTintColor;
    merged = obj12;
    merged = Object.assign(merged);
    return jsx(require(13208) /* items */.GuildBadgeGem, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.LAVA === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj13 = { primaryTintColor: null, secondaryTintColor: null };
    obj13[0] = primaryTintColor;
    obj13[1] = secondaryTintColor;
    merged = obj13;
    merged = Object.assign(merged);
    return jsx(require(13209) /* items */.GuildBadgeLava, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.PSYCHIC === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj14 = { primaryTintColor: null, secondaryTintColor: null };
    obj14[0] = primaryTintColor;
    obj14[1] = secondaryTintColor;
    merged = obj14;
    merged = Object.assign(merged);
    return jsx(require(13210) /* items */.GuildBadgePsychic, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SMOKE === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj15 = { primaryTintColor: null, secondaryTintColor: null };
    obj15[0] = primaryTintColor;
    obj15[1] = secondaryTintColor;
    merged = obj15;
    merged = Object.assign(merged);
    return jsx(require(13211) /* items */.GuildBadgeSmoke, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SNOW === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj16 = { primaryTintColor: null, secondaryTintColor: null };
    obj16[0] = primaryTintColor;
    obj16[1] = secondaryTintColor;
    merged = obj16;
    merged = Object.assign(merged);
    return jsx(require(13212) /* items */.GuildBadgeSnow, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SOUND === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj17 = { primaryTintColor: null, secondaryTintColor: null };
    obj17[0] = primaryTintColor;
    obj17[1] = secondaryTintColor;
    merged = obj17;
    merged = Object.assign(merged);
    return jsx(require(13213) /* items */.GuildBadgeSound, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SUN === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj18 = { primaryTintColor: null, secondaryTintColor: null };
    obj18[0] = primaryTintColor;
    obj18[1] = secondaryTintColor;
    merged = obj18;
    merged = Object.assign(merged);
    return jsx(require(13214) /* items */.GuildBadgeSun, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.WIND === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj19 = { primaryTintColor: null, secondaryTintColor: null };
    obj19[0] = primaryTintColor;
    obj19[1] = secondaryTintColor;
    merged = obj19;
    merged = Object.assign(merged);
    return jsx(require(13215) /* items */.GuildBadgeWind, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.BUNNY === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj20 = { primaryTintColor: null };
    obj20[0] = primaryTintColor;
    merged = obj20;
    merged = Object.assign(merged);
    return jsx(require(13216) /* items */.GuildBadgeBunny, { primaryTintColor: null });
  } else if (tmp2.DOG === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj21 = { primaryTintColor: null, secondaryTintColor: null };
    obj21[0] = primaryTintColor;
    obj21[1] = secondaryTintColor;
    merged = obj21;
    merged = Object.assign(merged);
    return jsx(require(13217) /* items */.GuildBadgeDog, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.FROG === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj22 = { primaryTintColor: null, secondaryTintColor: null };
    obj22[0] = primaryTintColor;
    obj22[1] = secondaryTintColor;
    merged = obj22;
    merged = Object.assign(merged);
    return jsx(require(13218) /* items */.GuildBadgeFrog, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.GOAT === badge) {
    merged = require;
    merged = dependencyMap;
    const obj23 = { primaryTintColor: null };
    obj23[0] = primaryTintColor;
    merged = obj23;
    merged = Object.assign(merged);
    return jsx(require(13219) /* items */.GuildBadgeGoat, { primaryTintColor: null });
  } else if (tmp2.CAT === badge) {
    const obj24 = { primaryTintColor: null };
    obj24[0] = primaryTintColor;
    const merged1 = Object.assign(merged);
    return jsx(require(13220) /* items */.GuildBadgeCat, { primaryTintColor: null });
  } else if (tmp2.DIAMOND === badge) {
    const obj25 = { primaryTintColor: null };
    obj25[0] = primaryTintColor;
    const merged2 = Object.assign(merged);
    return jsx(require(13221) /* items */.GuildBadgeDiamond, { primaryTintColor: null });
  } else if (tmp2.CROWN === badge) {
    const obj26 = { primaryTintColor: null, secondaryTintColor: null };
    obj26[0] = primaryTintColor;
    obj26[1] = secondaryTintColor;
    const merged3 = Object.assign(merged);
    return jsx(require(13222) /* items */.GuildBadgeCrown, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.TROPHY === badge) {
    const obj27 = { primaryTintColor: null };
    obj27[0] = primaryTintColor;
    const merged4 = Object.assign(merged);
    return jsx(require(13223) /* items */.GuildBadgeTrophy, { primaryTintColor: null });
  } else if (tmp2.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor: null };
    obj28[0] = primaryTintColor;
    const merged5 = Object.assign(merged);
    return jsx(require(13224) /* items */.GuildBadgeMoneyBag, { primaryTintColor: null });
  } else if (tmp2.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor: null };
    obj29[0] = primaryTintColor;
    const merged6 = Object.assign(merged);
    return jsx(require(13225) /* items */.GuildBadgeDollarSign, { primaryTintColor: null });
  } else if (tmp2.CLOVER === badge) {
    const obj30 = { primaryTintColor: null };
    obj30[0] = primaryTintColor;
    const merged7 = Object.assign(merged);
    return jsx(require(13226) /* items */.GuildBadgeClover, { primaryTintColor: null });
  } else if (tmp2.BLOSSOM === badge) {
    const obj31 = { primaryTintColor: null };
    obj31[0] = primaryTintColor;
    const merged8 = Object.assign(merged);
    return jsx(require(13227) /* items */.GuildBadgeBlossom, { primaryTintColor: null });
  } else if (tmp2.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor: null, secondaryTintColor: null };
    obj32[0] = primaryTintColor;
    obj32[1] = secondaryTintColor;
    const merged9 = Object.assign(merged);
    return jsx(require(13228) /* items */.GuildBadgePottedPlant, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.MAPLE === badge) {
    const obj33 = { primaryTintColor: null };
    obj33[0] = primaryTintColor;
    const merged10 = Object.assign(merged);
    return jsx(require(13229) /* items */.GuildBadgeMaple, { primaryTintColor: null });
  } else if (tmp2.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor: null, secondaryTintColor: null };
    obj34[0] = primaryTintColor;
    obj34[1] = secondaryTintColor;
    const merged11 = Object.assign(merged);
    return jsx(require(13230) /* items */.GuildBadgeWiltedFlower, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor: null, secondaryTintColor: null };
    obj35[0] = primaryTintColor;
    obj35[1] = secondaryTintColor;
    const merged12 = Object.assign(merged);
    return jsx(require(13231) /* items */.GuildBadgeButterfly, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SNAIL === badge) {
    const obj36 = { primaryTintColor: null, secondaryTintColor: null };
    obj36[0] = primaryTintColor;
    obj36[1] = secondaryTintColor;
    const merged13 = Object.assign(merged);
    return jsx(require(13232) /* items */.GuildBadgeSnail, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor: null, secondaryTintColor: null };
    obj37[0] = primaryTintColor;
    obj37[1] = secondaryTintColor;
    const merged14 = Object.assign(merged);
    return jsx(require(13233) /* items */.GuildBadgeCaterpillar, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SPIDER === badge) {
    const obj38 = { primaryTintColor: null, secondaryTintColor: null };
    obj38[0] = primaryTintColor;
    obj38[1] = secondaryTintColor;
    const merged15 = Object.assign(merged);
    return jsx(require(13234) /* items */.GuildBadgeSpider, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.BEE === badge) {
    obj = { primaryTintColor: null };
    obj[0] = primaryTintColor;
    const merged16 = Object.assign(merged);
    return jsx(require(13235) /* items */.GuildBadgeBee, { primaryTintColor: null });
  } else {
    return null;
  }
};
