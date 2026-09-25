// Module ID: 8194
// Function ID: 8195
// Name: GuildBadgeV2
// Dependencies: [19, 21, 4829, 1177, 4682, 8195, 8197, 8196, 2]
// Exports: default, hasGuildBadge

// Module 8194 (GuildBadgeV2)
import native from "native" /* 1177 */;
import shared from "shared" /* 4682 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 8195 */;
import BadgeCategory from "BadgeCategory" /* 8196 */;
import GuildTraits from "GuildTraits" /* 8197 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_3 = createStyles.createStyles({ icon: { marginRight: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = native.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.assign({ guild: 0, size: 0 }));
  shared;
  if (null == guild) {
    return null;
  } else {
    const guildBadgeImageSource = tmp5(8195).getGuildBadgeImageSource(guild, tmp8);
    let tmp10 = null;
    if (null != guildBadgeImageSource) {
      const obj = { size, source: guildBadgeImageSource, style: tmp4.icon, disableColor: true };
      const merged1 = Object.assign(merged);
      tmp10 = jsx(tmp5(1177).Icon, { size, source: guildBadgeImageSource, style: tmp4.icon, disableColor: true });
    }
    return tmp10;
  }
  tmp4 = closure_3();
};
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult, arg1) {
  const guildTraits = GuildTraits.getGuildTraits(fromGuildProfileResult);
  const badgeCategory = BadgeCategory.getBadgeCategory(guildTraits);
  const tmp5 = GuildBadgeImageSource.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    tmp6 = null != GuildBadgeImageSource.resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = GuildBadgeImageSource;
  }
  return tmp6;
};
