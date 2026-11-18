// Module ID: 15058
// Function ID: 15059
// Name: badges/GuildBadge
// Dependencies: [19, 7911, 21, 15059, 15062, 15063, 15064, 15065, 15066, 15067, 15068, 15069, 15070, 15071, 15072, 15073, 15074, 15075, 15076, 15077, 15078, 15079, 15080, 15081, 15082, 15083, 15084, 15085, 15086, 15087, 15088, 15089, 15090, 15091, 15092, 15093, 15094, 15095, 15096, 15097, 15098, 15099, 15100, 15101, 2]
// Exports: GuildBadge

// Module 15058 (badges/GuildBadge)
import Fragment from "Fragment" /* 21 */;
import GuildTagConstants from "GuildTagConstants" /* 7911 */;
import GuildBadgeSword2 from "GuildBadgeSword" /* 15059 */;
import GuildBadgeWaterDrop2 from "GuildBadgeWaterDrop" /* 15062 */;
import GuildBadgeSkull2 from "GuildBadgeSkull" /* 15063 */;
import GuildBadgeToadstool2 from "GuildBadgeToadstool" /* 15064 */;
import GuildBadgeMoon2 from "GuildBadgeMoon" /* 15065 */;
import GuildBadgeLightning2 from "GuildBadgeLightning" /* 15066 */;
import GuildBadgeLeaf2 from "GuildBadgeLeaf" /* 15067 */;
import GuildBadgeHeart2 from "GuildBadgeHeart" /* 15068 */;
import GuildBadgeFire2 from "GuildBadgeFire" /* 15069 */;
import GuildBadgeCompass2 from "GuildBadgeCompass" /* 15070 */;
import GuildBadgeCrosshairs2 from "GuildBadgeCrosshairs" /* 15071 */;
import GuildBadgeFlower2 from "GuildBadgeFlower" /* 15072 */;
import GuildBadgeForce2 from "GuildBadgeForce" /* 15073 */;
import GuildBadgeGem2 from "GuildBadgeGem" /* 15074 */;
import GuildBadgeLava2 from "GuildBadgeLava" /* 15075 */;
import GuildBadgePsychic2 from "GuildBadgePsychic" /* 15076 */;
import GuildBadgeSmoke2 from "GuildBadgeSmoke" /* 15077 */;
import GuildBadgeSnow2 from "GuildBadgeSnow" /* 15078 */;
import GuildBadgeSound2 from "GuildBadgeSound" /* 15079 */;
import GuildBadgeSun2 from "GuildBadgeSun" /* 15080 */;
import GuildBadgeWind2 from "GuildBadgeWind" /* 15081 */;
import GuildBadgeBunny2 from "GuildBadgeBunny" /* 15082 */;
import GuildBadgeDog2 from "GuildBadgeDog" /* 15083 */;
import GuildBadgeFrog2 from "GuildBadgeFrog" /* 15084 */;
import GuildBadgeGoat2 from "GuildBadgeGoat" /* 15085 */;
import GuildBadgeCat2 from "GuildBadgeCat" /* 15086 */;
import GuildBadgeDiamond2 from "GuildBadgeDiamond" /* 15087 */;
import GuildBadgeCrown2 from "GuildBadgeCrown" /* 15088 */;
import GuildBadgeTrophy2 from "GuildBadgeTrophy" /* 15089 */;
import GuildBadgeMoneyBag2 from "GuildBadgeMoneyBag" /* 15090 */;
import GuildBadgeDollarSign2 from "GuildBadgeDollarSign" /* 15091 */;
import GuildBadgeClover2 from "GuildBadgeClover" /* 15092 */;
import GuildBadgeBlossom2 from "GuildBadgeBlossom" /* 15093 */;
import GuildBadgePottedPlant2 from "GuildBadgePottedPlant" /* 15094 */;
import GuildBadgeMaple2 from "GuildBadgeMaple" /* 15095 */;
import GuildBadgeWiltedFlower2 from "GuildBadgeWiltedFlower" /* 15096 */;
import GuildBadgeButterfly2 from "GuildBadgeButterfly" /* 15097 */;
import GuildBadgeSnail2 from "GuildBadgeSnail" /* 15098 */;
import GuildBadgeCaterpillar2 from "GuildBadgeCaterpillar" /* 15099 */;
import GuildBadgeSpider2 from "GuildBadgeSpider" /* 15100 */;
import GuildBadgeBee2 from "GuildBadgeBee" /* 15101 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const GuildTagBadgeKind = GuildTagConstants.GuildTagBadgeKind;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export function GuildBadge(arg0) {
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
}
