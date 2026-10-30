// Module ID: 9287
// Function ID: 9288
// Name: GuildBadgeV2
// Dependencies: [19, 21, 5009, 1188, 5016, 9288, 9285, 9286, 2]
// Exports: default, hasGuildBadge

// Module 9287 (GuildBadgeV2)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import shared from "shared" /* 5016 */;
import GuildTraits from "GuildTraits" /* 9285 */;
import BadgeCategory from "BadgeCategory" /* 9286 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 9288 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
      const Icon = tmp5(1188).Icon;
      const merged1 = Object.assign(merged);
      tmp10 = <Icon size={size} source={guildBadgeImageSource} style={tmp4.icon} disableColor />;
    }
    return tmp10;
  }
};
export function hasGuildBadge(fromGuildProfileResult, arg1) {
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
}
