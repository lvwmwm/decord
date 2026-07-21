// Module ID: 12801
// Function ID: 98103
// Name: GuildBadge
// Dependencies: []
// Exports: GuildBadge

// Module 12801 (GuildBadge)
importAll(dependencyMap[0]);
const GuildTagBadgeKind = arg1(dependencyMap[1]).GuildTagBadgeKind;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[44]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  let badge;
  let primaryTintColor;
  let secondaryTintColor;
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  let obj = { "Null": false, "Null": false, "Null": false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  if (GuildTagBadgeKind.SWORD === badge) {
    obj = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[3]).GuildBadgeSword, obj);
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    obj = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[4]).GuildBadgeWaterDrop, obj);
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const obj1 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[5]).GuildBadgeSkull, obj1);
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[6]).GuildBadgeToadstool, obj2);
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj3 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[7]).GuildBadgeMoon, obj3);
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj4 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[8]).GuildBadgeLightning, obj4);
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj5 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[9]).GuildBadgeLeaf, obj5);
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj6 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[10]).GuildBadgeHeart, obj6);
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj7 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[11]).GuildBadgeFire, obj7);
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj8 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[12]).GuildBadgeCompass, obj8);
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj9 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[13]).GuildBadgeCrosshairs, obj9);
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj10 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[14]).GuildBadgeFlower, obj10);
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[15]).GuildBadgeForce, obj11);
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[16]).GuildBadgeGem, obj12);
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[17]).GuildBadgeLava, obj13);
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[18]).GuildBadgePsychic, obj14);
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[19]).GuildBadgeSmoke, obj15);
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[20]).GuildBadgeSnow, obj16);
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[21]).GuildBadgeSound, obj17);
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[22]).GuildBadgeSun, obj18);
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[23]).GuildBadgeWind, obj19);
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj20 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[24]).GuildBadgeBunny, obj20);
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[25]).GuildBadgeDog, obj21);
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[26]).GuildBadgeFrog, obj22);
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj23 = { primaryTintColor };
    Object.assign(merged);
    return jsx(arg1(dependencyMap[27]).GuildBadgeGoat, obj23);
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj24 = { primaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(arg1(dependencyMap[28]).GuildBadgeCat, obj24);
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj25 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(arg1(dependencyMap[29]).GuildBadgeDiamond, obj25);
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj26 = { primaryTintColor, secondaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(arg1(dependencyMap[30]).GuildBadgeCrown, obj26);
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj27 = { primaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(arg1(dependencyMap[31]).GuildBadgeTrophy, obj27);
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(arg1(dependencyMap[32]).GuildBadgeMoneyBag, obj28);
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(arg1(dependencyMap[33]).GuildBadgeDollarSign, obj29);
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj30 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(arg1(dependencyMap[34]).GuildBadgeClover, obj30);
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj31 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(arg1(dependencyMap[35]).GuildBadgeBlossom, obj31);
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor, secondaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(arg1(dependencyMap[36]).GuildBadgePottedPlant, obj32);
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj33 = { primaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(arg1(dependencyMap[37]).GuildBadgeMaple, obj33);
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(arg1(dependencyMap[38]).GuildBadgeWiltedFlower, obj34);
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(arg1(dependencyMap[39]).GuildBadgeButterfly, obj35);
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj36 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(arg1(dependencyMap[40]).GuildBadgeSnail, obj36);
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(arg1(dependencyMap[41]).GuildBadgeCaterpillar, obj37);
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(arg1(dependencyMap[42]).GuildBadgeSpider, obj38);
  } else if (GuildTagBadgeKind.BEE === badge) {
    const obj39 = { primaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(arg1(dependencyMap[43]).GuildBadgeBee, obj39);
  } else {
    return null;
  }
};
