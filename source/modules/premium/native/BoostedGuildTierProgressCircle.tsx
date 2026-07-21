// Module ID: 12318
// Function ID: 94388
// Name: getTierIcon
// Dependencies: []
// Exports: default

// Module 12318 (getTierIcon)
function getTierIcon(theme, premiumTier) {
  if (null != premiumTier) {
    if (premiumTier.premiumTier !== closure_6.NONE) {
      premiumTier = premiumTier.premiumTier;
      if (closure_6.TIER_1 === premiumTier) {
        return importDefault(dependencyMap[7]);
      } else if (closure_6.TIER_2 === premiumTier) {
        return importDefault(dependencyMap[8]);
      } else if (closure_6.TIER_3 === premiumTier) {
        return importDefault(dependencyMap[9]);
      }
    }
  }
  return premiumTier(dependencyMap[6]).getTier048PxSource(theme);
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_5, BoostedGuildTiers: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { guildTierProgressCircle: { 1912565759: null, 1979675647: null, 1895788287: null } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.xxl };
obj.guildTierBackground = obj;
obj.guildTierNoneIcon = {};
obj.guildTierIcon = {};
obj.guildTierName = { y: 754974721, half: 16777217 };
let closure_9 = obj.createStyles(obj);
const tmp5 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  let guild;
  let theme;
  ({ guild, theme } = arg0);
  const tmp = callback3();
  importDefault(dependencyMap[10]);
  if (null != guild) {
    const id = guild.id;
  }
  if (null == guild) {
    let obj = { style: tmp.guildTierBackground };
    obj = { source: getTierIcon(theme), style: tmp.guildTierNoneIcon };
    obj.children = callback(closure_4, obj);
    return callback(closure_3, obj);
  } else {
    const nextGuildTierFromGuild = arg1(dependencyMap[11]).getNextGuildTierFromGuild(guild.id);
    let tmp5 = null;
    if (null != nextGuildTierFromGuild) {
      tmp5 = closure_5[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp5) {
      num2 = 100;
      if (tmp5 > 0) {
        num2 = tmp3 / tmp5 * 100;
      }
    }
    obj = { style: tmp.guildTierProgressCircle, percent: num2 };
    const obj1 = { style: tmp.guildTierBackground };
    const obj2 = {};
    const obj8 = arg1(dependencyMap[11]);
    obj2.source = getTierIcon(theme, guild);
    obj2.style = tmp.guildTierIcon;
    const items = [callback(closure_4, obj2), ];
    const obj3 = { delete: null, dispatch: null, raw: null, style: tmp.guildTierName };
    const tmp9 = importDefault(dependencyMap[12]);
    obj3.children = arg1(dependencyMap[11]).getTierName(guild.premiumTier);
    items[1] = callback(arg1(dependencyMap[13]).Text, obj3);
    obj1.children = items;
    obj.children = callback2(closure_3, obj1);
    return callback(tmp9, obj);
  }
};
