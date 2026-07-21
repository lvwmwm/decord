// Module ID: 12422
// Function ID: 94877
// Name: getThemedImageSource
// Dependencies: []
// Exports: default

// Module 12422 (getThemedImageSource)
function getThemedImageSource(arg0, arg1, arg2) {
  let tmp = arg2;
  if (obj.isThemeDark(arg0)) {
    tmp = arg1;
  }
  return tmp;
}
function getTierIcon(arg0, arg1) {
  if (BoostedGuildTiers.NONE === arg1) {
    return getThemedImageSource(arg0, importDefault(dependencyMap[9]), importDefault(dependencyMap[10]));
  } else if (BoostedGuildTiers.TIER_1 === arg1) {
    return getThemedImageSource(arg0, importDefault(dependencyMap[11]), importDefault(dependencyMap[12]));
  } else if (BoostedGuildTiers.TIER_2 === arg1) {
    return getThemedImageSource(arg0, importDefault(dependencyMap[13]), importDefault(dependencyMap[14]));
  } else if (BoostedGuildTiers.TIER_3 === arg1) {
    return getThemedImageSource(arg0, importDefault(dependencyMap[15]), importDefault(dependencyMap[16]));
  }
}
function PremiumGuildTierPill(tier) {
  tier = tier.tier;
  const tmp = callback3();
  let obj = { style: tmp.tierPill };
  obj = { style: tmp.tierPillImage, source: getTierIcon(tier.theme, tier) };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.tierPillText, children: arg1(dependencyMap[18]).getTierName(tier) };
  items[1] = callback(arg1(dependencyMap[17]).LegacyText, obj);
  obj.children = items;
  return callback2(closure_3, obj);
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const BoostedGuildTiers = arg1(dependencyMap[3]).BoostedGuildTiers;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.guild = obj;
obj.guildInfo = { marginLeft: 16 };
const obj1 = { PX_16: "text", ix: "Array", color: arg1(dependencyMap[7]).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.guildName = obj1;
const obj2 = { 1661207633: "/assets/images/native/premium/guild_boosting", 1365420630: 203, 122858649: 120, 1636102856: null, -570535476: "4cb64ea1ce49f760ec2c14cca07c9930", 1403672162: "guild_subscription_removal_dark", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.tierPill = obj2;
obj.tierPillImage = {};
const obj3 = { <string:1744257435>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013354893372138098, <string:3194159108>: 9126805520, <string:1751359739>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000377473343344568, color: arg1(dependencyMap[7]).DARK_WHITE_500_LIGHT_PRIMARY_660 };
obj.tierPillText = obj3;
let closure_9 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = arg1(dependencyMap[19]);
  const items = [closure_5];
  obj = { style: items1 };
  const items1 = [tmp.guild, guild.style];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { guild, size: arg1(dependencyMap[20]).GuildIconSizes.LARGE, selected: false };
  const items2 = [callback(importDefault(dependencyMap[20]), obj), ];
  const obj1 = { style: tmp.guildInfo };
  const items3 = [callback(arg1(dependencyMap[17]).LegacyText, { style: tmp.guildName, children: guild.name }), callback(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj1.children = items3;
  items2[1] = callback2(closure_3, obj1);
  obj.children = items2;
  return callback2(closure_3, obj);
};
