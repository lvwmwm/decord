// Module ID: 8202
// Function ID: 8203
// Name: GuildBadgeV2
// Dependencies: [19, 21, 4836, 1177, 4685, 8203, 8205, 8204, 2]
// Exports: default, hasGuildBadge

// Module 8202 (GuildBadgeV2)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4685 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 8203 */;
import BadgeCategory from "BadgeCategory" /* 8204 */;
import GuildTraits from "GuildTraits" /* 8205 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ icon: { marginRight: 8 } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  let guild;
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = native.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.assign({ guild: 0, size: 0 }));
  const tmp4 = closure_3();
  shared;
  if (null == guild) {
    return null;
  } else {
    const tmp5Result = GuildBadgeImageSource;
    const guildBadgeImageSource = tmp5Result.getGuildBadgeImageSource(guild, tmp8);
    let tmp10 = null;
    if (null != guildBadgeImageSource) {
      const Icon = tmp5(1177).Icon;
      const merged1 = Object.assign(merged);
      tmp10 = <Icon size={size} source={guildBadgeImageSource} style={tmp4.icon} disableColor />;
    }
    return tmp10;
  }
};
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult, arg1) {
  const obj = GuildTraits;
  const guildTraits = obj.getGuildTraits(fromGuildProfileResult);
  const obj2 = BadgeCategory;
  const badgeCategory = obj2.getBadgeCategory(guildTraits);
  const tmp5 = GuildBadgeImageSource.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    const tmpResult = GuildBadgeImageSource;
    tmp6 = null != tmpResult.resolveImageSource(tmp5, guildTraits, arg1);
  }
  return tmp6;
};
