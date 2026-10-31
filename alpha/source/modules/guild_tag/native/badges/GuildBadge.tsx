// Module ID: 15739
// Function ID: 15740
// Name: badges/GuildBadge
// Dependencies: [19, 8393, 21, 15740, 15743, 15744, 15745, 15746, 15747, 15748, 15749, 15750, 15751, 15752, 15753, 15754, 15755, 15756, 15757, 15758, 15759, 15760, 15761, 15762, 15763, 15764, 15765, 15766, 15767, 15768, 15769, 15770, 15771, 15772, 15773, 15774, 15775, 15776, 15777, 15778, 15779, 15780, 15781, 15782, 2]
// Exports: GuildBadge

// Module 15739 (badges/GuildBadge)
import Fragment from "Fragment" /* 21 */;
import GuildTagConstants from "GuildTagConstants" /* 8393 */;
import GuildBadgeSword2 from "GuildBadgeSword" /* 15740 */;
import GuildBadgeWaterDrop2 from "GuildBadgeWaterDrop" /* 15743 */;
import GuildBadgeSkull2 from "GuildBadgeSkull" /* 15744 */;
import GuildBadgeToadstool2 from "GuildBadgeToadstool" /* 15745 */;
import GuildBadgeMoon2 from "GuildBadgeMoon" /* 15746 */;
import GuildBadgeLightning2 from "GuildBadgeLightning" /* 15747 */;
import GuildBadgeLeaf2 from "GuildBadgeLeaf" /* 15748 */;
import GuildBadgeHeart2 from "GuildBadgeHeart" /* 15749 */;
import GuildBadgeFire2 from "GuildBadgeFire" /* 15750 */;
import GuildBadgeCompass2 from "GuildBadgeCompass" /* 15751 */;
import GuildBadgeCrosshairs2 from "GuildBadgeCrosshairs" /* 15752 */;
import GuildBadgeFlower2 from "GuildBadgeFlower" /* 15753 */;
import GuildBadgeForce2 from "GuildBadgeForce" /* 15754 */;
import GuildBadgeGem2 from "GuildBadgeGem" /* 15755 */;
import GuildBadgeLava2 from "GuildBadgeLava" /* 15756 */;
import GuildBadgePsychic2 from "GuildBadgePsychic" /* 15757 */;
import GuildBadgeSmoke2 from "GuildBadgeSmoke" /* 15758 */;
import GuildBadgeSnow2 from "GuildBadgeSnow" /* 15759 */;
import GuildBadgeSound2 from "GuildBadgeSound" /* 15760 */;
import GuildBadgeSun2 from "GuildBadgeSun" /* 15761 */;
import GuildBadgeWind2 from "GuildBadgeWind" /* 15762 */;
import GuildBadgeBunny2 from "GuildBadgeBunny" /* 15763 */;
import GuildBadgeDog2 from "GuildBadgeDog" /* 15764 */;
import GuildBadgeFrog2 from "GuildBadgeFrog" /* 15765 */;
import GuildBadgeGoat2 from "GuildBadgeGoat" /* 15766 */;
import GuildBadgeCat2 from "GuildBadgeCat" /* 15767 */;
import GuildBadgeDiamond2 from "GuildBadgeDiamond" /* 15768 */;
import GuildBadgeCrown2 from "GuildBadgeCrown" /* 15769 */;
import GuildBadgeTrophy2 from "GuildBadgeTrophy" /* 15770 */;
import GuildBadgeMoneyBag2 from "GuildBadgeMoneyBag" /* 15771 */;
import GuildBadgeDollarSign2 from "GuildBadgeDollarSign" /* 15772 */;
import GuildBadgeClover2 from "GuildBadgeClover" /* 15773 */;
import GuildBadgeBlossom2 from "GuildBadgeBlossom" /* 15774 */;
import GuildBadgePottedPlant2 from "GuildBadgePottedPlant" /* 15775 */;
import GuildBadgeMaple2 from "GuildBadgeMaple" /* 15776 */;
import GuildBadgeWiltedFlower2 from "GuildBadgeWiltedFlower" /* 15777 */;
import GuildBadgeButterfly2 from "GuildBadgeButterfly" /* 15778 */;
import GuildBadgeSnail2 from "GuildBadgeSnail" /* 15779 */;
import GuildBadgeCaterpillar2 from "GuildBadgeCaterpillar" /* 15780 */;
import GuildBadgeSpider2 from "GuildBadgeSpider" /* 15781 */;
import GuildBadgeBee2 from "GuildBadgeBee" /* 15782 */;
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
