// Module ID: 9434
// Function ID: 9435
// Name: GuildBadgeV2
// Dependencies: [19, 21, 5141, 1187, 5148, 9433, 9432, 9435, 575, 9438, 2]
// Exports: default, hasGuildBadge

// Module 9434 (GuildBadgeV2)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import shared from "shared" /* 5148 */;
import GuildTraits from "GuildTraits" /* 9432 */;
import BadgeCategory from "BadgeCategory" /* 9433 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 9438 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ icon: { marginRight: 8 } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  let guild;
  let items;
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = native.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.assign({ guild: 0, size: 0 }));
  const tmp4 = closure_4();
  shared;
  if (null == guild) {
    return null;
  } else {
    const getBadgeCategory = BadgeCategory.getBadgeCategory;
    BadgeCategory;
    const tmp5Result4 = GuildTraits;
    const badgeCategory = getBadgeCategory(tmp5Result4.getGuildTraits(guild));
    if (badgeCategory === BadgeCategory.BadgeCategory.DISCOVERABLE) {
      const tmp5Result5 = native;
      const iconSize = tmp5Result5.getIconSize(size);
      const obj = { size: "custom", color: nativeDefault.colors.BADGE_INVERTED_BACKGROUND, secondaryColor: nativeDefault.colors.BADGE_INVERTED_TEXT, style: items };
      const ExperimentalWebBadgeIcon = tmp5(9435).ExperimentalWebBadgeIcon;
      const size1 = { width: iconSize, height: iconSize };
      items = [size1, ];
      let icon = merged.style;
      const tmp16 = jsx;
      if (icon == null) {
        icon = tmp4.icon;
      }
      items[1] = icon;
      return tmp16(ExperimentalWebBadgeIcon, obj);
    } else {
      const tmp5Result6 = GuildBadgeImageSource;
      const guildBadgeImageSource = tmp5Result6.getGuildBadgeImageSource(guild, tmp8);
      let tmp10 = null;
      if (null != guildBadgeImageSource) {
        const Icon = tmp5(1187).Icon;
        const merged1 = Object.assign(merged);
        tmp10 = <Icon size={size} source={guildBadgeImageSource} style={tmp4.icon} disableColor />;
      }
      return tmp10;
    }
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
