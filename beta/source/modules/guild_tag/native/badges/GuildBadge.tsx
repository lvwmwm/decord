// Module ID: 13460
// Function ID: 13461
// Name: badges/GuildBadge
// Dependencies: [19, 7386, 21, 13461, 13464, 13465, 13466, 13467, 13468, 13469, 13470, 13471, 13472, 13473, 13474, 13475, 13476, 13477, 13478, 13479, 13480, 13481, 13482, 13483, 13484, 13485, 13486, 13487, 13488, 13489, 13490, 13491, 13492, 13493, 13494, 13495, 13496, 13497, 13498, 13499, 13500, 13501, 13502, 13503, 2]
// Exports: GuildBadge

// Module 13460 (badges/GuildBadge)
import Fragment from "Fragment" /* 21 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import GuildBadgeSword2 from "GuildBadgeSword" /* 13461 */;
import GuildBadgeWaterDrop2 from "GuildBadgeWaterDrop" /* 13464 */;
import GuildBadgeSkull2 from "GuildBadgeSkull" /* 13465 */;
import GuildBadgeToadstool2 from "GuildBadgeToadstool" /* 13466 */;
import GuildBadgeMoon2 from "GuildBadgeMoon" /* 13467 */;
import GuildBadgeLightning2 from "GuildBadgeLightning" /* 13468 */;
import GuildBadgeLeaf2 from "GuildBadgeLeaf" /* 13469 */;
import GuildBadgeHeart2 from "GuildBadgeHeart" /* 13470 */;
import GuildBadgeFire2 from "GuildBadgeFire" /* 13471 */;
import GuildBadgeCompass2 from "GuildBadgeCompass" /* 13472 */;
import GuildBadgeCrosshairs2 from "GuildBadgeCrosshairs" /* 13473 */;
import GuildBadgeFlower2 from "GuildBadgeFlower" /* 13474 */;
import GuildBadgeForce2 from "GuildBadgeForce" /* 13475 */;
import GuildBadgeGem2 from "GuildBadgeGem" /* 13476 */;
import GuildBadgeLava2 from "GuildBadgeLava" /* 13477 */;
import GuildBadgePsychic2 from "GuildBadgePsychic" /* 13478 */;
import GuildBadgeSmoke2 from "GuildBadgeSmoke" /* 13479 */;
import GuildBadgeSnow2 from "GuildBadgeSnow" /* 13480 */;
import GuildBadgeSound2 from "GuildBadgeSound" /* 13481 */;
import GuildBadgeSun2 from "GuildBadgeSun" /* 13482 */;
import GuildBadgeWind2 from "GuildBadgeWind" /* 13483 */;
import GuildBadgeBunny2 from "GuildBadgeBunny" /* 13484 */;
import GuildBadgeDog2 from "GuildBadgeDog" /* 13485 */;
import GuildBadgeFrog2 from "GuildBadgeFrog" /* 13486 */;
import GuildBadgeGoat2 from "GuildBadgeGoat" /* 13487 */;
import GuildBadgeCat2 from "GuildBadgeCat" /* 13488 */;
import GuildBadgeDiamond2 from "GuildBadgeDiamond" /* 13489 */;
import GuildBadgeCrown2 from "GuildBadgeCrown" /* 13490 */;
import GuildBadgeTrophy2 from "GuildBadgeTrophy" /* 13491 */;
import GuildBadgeMoneyBag2 from "GuildBadgeMoneyBag" /* 13492 */;
import GuildBadgeDollarSign2 from "GuildBadgeDollarSign" /* 13493 */;
import GuildBadgeClover2 from "GuildBadgeClover" /* 13494 */;
import GuildBadgeBlossom2 from "GuildBadgeBlossom" /* 13495 */;
import GuildBadgePottedPlant2 from "GuildBadgePottedPlant" /* 13496 */;
import GuildBadgeMaple2 from "GuildBadgeMaple" /* 13497 */;
import GuildBadgeWiltedFlower2 from "GuildBadgeWiltedFlower" /* 13498 */;
import GuildBadgeButterfly2 from "GuildBadgeButterfly" /* 13499 */;
import GuildBadgeSnail2 from "GuildBadgeSnail" /* 13500 */;
import GuildBadgeCaterpillar2 from "GuildBadgeCaterpillar" /* 13501 */;
import GuildBadgeSpider2 from "GuildBadgeSpider" /* 13502 */;
import GuildBadgeBee2 from "GuildBadgeBee" /* 13503 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const GuildTagBadgeKind = GuildTagConstants.GuildTagBadgeKind;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  let badge;
  let primaryTintColor;
  let secondaryTintColor;
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    const GuildBadgeSword = GuildBadgeSword2.GuildBadgeSword;
    const merged1 = Object.assign(merged);
    return <GuildBadgeSword primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    const GuildBadgeWaterDrop = GuildBadgeWaterDrop2.GuildBadgeWaterDrop;
    const merged2 = Object.assign(merged);
    return <GuildBadgeWaterDrop primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const GuildBadgeSkull = GuildBadgeSkull2.GuildBadgeSkull;
    const merged3 = Object.assign(merged);
    return <GuildBadgeSkull primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const GuildBadgeToadstool = GuildBadgeToadstool2.GuildBadgeToadstool;
    const merged4 = Object.assign(merged);
    return <GuildBadgeToadstool primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.MOON === badge) {
    const GuildBadgeMoon = GuildBadgeMoon2.GuildBadgeMoon;
    const merged5 = Object.assign(merged);
    return <GuildBadgeMoon primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const GuildBadgeLightning = GuildBadgeLightning2.GuildBadgeLightning;
    const merged6 = Object.assign(merged);
    return <GuildBadgeLightning primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const GuildBadgeLeaf = GuildBadgeLeaf2.GuildBadgeLeaf;
    const merged7 = Object.assign(merged);
    return <GuildBadgeLeaf primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.HEART === badge) {
    const GuildBadgeHeart = GuildBadgeHeart2.GuildBadgeHeart;
    const merged8 = Object.assign(merged);
    return <GuildBadgeHeart primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const GuildBadgeFire = GuildBadgeFire2.GuildBadgeFire;
    const merged9 = Object.assign(merged);
    return <GuildBadgeFire primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const GuildBadgeCompass = GuildBadgeCompass2.GuildBadgeCompass;
    const merged10 = Object.assign(merged);
    return <GuildBadgeCompass primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const GuildBadgeCrosshairs = GuildBadgeCrosshairs2.GuildBadgeCrosshairs;
    const merged11 = Object.assign(merged);
    return <GuildBadgeCrosshairs primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const GuildBadgeFlower = GuildBadgeFlower2.GuildBadgeFlower;
    const merged12 = Object.assign(merged);
    return <GuildBadgeFlower primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const GuildBadgeForce = GuildBadgeForce2.GuildBadgeForce;
    const merged13 = Object.assign(merged);
    return <GuildBadgeForce primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.GEM === badge) {
    const GuildBadgeGem = GuildBadgeGem2.GuildBadgeGem;
    const merged14 = Object.assign(merged);
    return <GuildBadgeGem primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const GuildBadgeLava = GuildBadgeLava2.GuildBadgeLava;
    const merged15 = Object.assign(merged);
    return <GuildBadgeLava primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const GuildBadgePsychic = GuildBadgePsychic2.GuildBadgePsychic;
    const merged16 = Object.assign(merged);
    return <GuildBadgePsychic primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const GuildBadgeSmoke = GuildBadgeSmoke2.GuildBadgeSmoke;
    const merged17 = Object.assign(merged);
    return <GuildBadgeSmoke primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const GuildBadgeSnow = GuildBadgeSnow2.GuildBadgeSnow;
    const merged18 = Object.assign(merged);
    return <GuildBadgeSnow primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const GuildBadgeSound = GuildBadgeSound2.GuildBadgeSound;
    const merged19 = Object.assign(merged);
    return <GuildBadgeSound primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SUN === badge) {
    const GuildBadgeSun = GuildBadgeSun2.GuildBadgeSun;
    const merged20 = Object.assign(merged);
    return <GuildBadgeSun primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.WIND === badge) {
    const GuildBadgeWind = GuildBadgeWind2.GuildBadgeWind;
    const merged21 = Object.assign(merged);
    return <GuildBadgeWind primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const GuildBadgeBunny = GuildBadgeBunny2.GuildBadgeBunny;
    const merged22 = Object.assign(merged);
    return <GuildBadgeBunny primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.DOG === badge) {
    const GuildBadgeDog = GuildBadgeDog2.GuildBadgeDog;
    const merged23 = Object.assign(merged);
    return <GuildBadgeDog primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.FROG === badge) {
    const GuildBadgeFrog = GuildBadgeFrog2.GuildBadgeFrog;
    const merged24 = Object.assign(merged);
    return <GuildBadgeFrog primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const GuildBadgeGoat = GuildBadgeGoat2.GuildBadgeGoat;
    const merged25 = Object.assign(merged);
    return <GuildBadgeGoat primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.CAT === badge) {
    const GuildBadgeCat = GuildBadgeCat2.GuildBadgeCat;
    const merged26 = Object.assign(merged);
    return <GuildBadgeCat primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const GuildBadgeDiamond = GuildBadgeDiamond2.GuildBadgeDiamond;
    const merged27 = Object.assign(merged);
    return <GuildBadgeDiamond primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const GuildBadgeCrown = GuildBadgeCrown2.GuildBadgeCrown;
    const merged28 = Object.assign(merged);
    return <GuildBadgeCrown primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const GuildBadgeTrophy = GuildBadgeTrophy2.GuildBadgeTrophy;
    const merged29 = Object.assign(merged);
    return <GuildBadgeTrophy primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const GuildBadgeMoneyBag = GuildBadgeMoneyBag2.GuildBadgeMoneyBag;
    const merged30 = Object.assign(merged);
    return <GuildBadgeMoneyBag primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const GuildBadgeDollarSign = GuildBadgeDollarSign2.GuildBadgeDollarSign;
    const merged31 = Object.assign(merged);
    return <GuildBadgeDollarSign primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const GuildBadgeClover = GuildBadgeClover2.GuildBadgeClover;
    const merged32 = Object.assign(merged);
    return <GuildBadgeClover primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const GuildBadgeBlossom = GuildBadgeBlossom2.GuildBadgeBlossom;
    const merged33 = Object.assign(merged);
    return <GuildBadgeBlossom primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const GuildBadgePottedPlant = GuildBadgePottedPlant2.GuildBadgePottedPlant;
    const merged34 = Object.assign(merged);
    return <GuildBadgePottedPlant primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const GuildBadgeMaple = GuildBadgeMaple2.GuildBadgeMaple;
    const merged35 = Object.assign(merged);
    return <GuildBadgeMaple primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const GuildBadgeWiltedFlower = GuildBadgeWiltedFlower2.GuildBadgeWiltedFlower;
    const merged36 = Object.assign(merged);
    return <GuildBadgeWiltedFlower primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const GuildBadgeButterfly = GuildBadgeButterfly2.GuildBadgeButterfly;
    const merged37 = Object.assign(merged);
    return <GuildBadgeButterfly primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const GuildBadgeSnail = GuildBadgeSnail2.GuildBadgeSnail;
    const merged38 = Object.assign(merged);
    return <GuildBadgeSnail primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const GuildBadgeCaterpillar = GuildBadgeCaterpillar2.GuildBadgeCaterpillar;
    const merged39 = Object.assign(merged);
    return <GuildBadgeCaterpillar primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const GuildBadgeSpider = GuildBadgeSpider2.GuildBadgeSpider;
    const merged40 = Object.assign(merged);
    return <GuildBadgeSpider primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.BEE === badge) {
    const GuildBadgeBee = GuildBadgeBee2.GuildBadgeBee;
    const merged41 = Object.assign(merged);
    return <GuildBadgeBee primaryTintColor={primaryTintColor} />;
  } else {
    return null;
  }
};
