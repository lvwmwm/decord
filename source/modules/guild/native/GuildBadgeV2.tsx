// Module ID: 5697
// Function ID: 49044
// Name: GuildBadgeV2
// Dependencies: []
// Exports: default, hasGuildBadge

// Module 5697 (GuildBadgeV2)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ icon: { marginRight: 8 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  let guild;
  let size;
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = arg1(dependencyMap[3]).Icon.Sizes.MEDIUM;
  }
  let obj = Object.create(null);
  obj.guild = 0;
  obj.size = 0;
  const merged = Object.assign(arg0, obj);
  arg1(dependencyMap[4]);
  if (null == guild) {
    return null;
  } else {
    obj = arg1(dependencyMap[5]);
    const guildBadgeImageSource = obj.getGuildBadgeImageSource(guild, tmp7);
    let tmp11 = null;
    if (null != guildBadgeImageSource) {
      obj = { size, source: guildBadgeImageSource, style: tmp5.icon, disableColor: true };
      const merged1 = Object.assign(merged);
      tmp11 = jsx(arg1(dependencyMap[3]).Icon, obj);
    }
    return tmp11;
  }
  const tmp5 = callback();
};
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult, theme) {
  const guildTraits = theme(dependencyMap[6]).getGuildTraits(fromGuildProfileResult);
  const obj = theme(dependencyMap[6]);
  const badgeCategory = theme(dependencyMap[7]).getBadgeCategory(guildTraits);
  const tmp3 = theme(dependencyMap[5]).badgeVariants[badgeCategory];
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = null != theme(dependencyMap[5]).resolveImageSource(tmp3, guildTraits, theme);
    const obj3 = theme(dependencyMap[5]);
  }
  return tmp4;
};
