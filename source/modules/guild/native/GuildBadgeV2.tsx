// Module ID: 9327
// Function ID: 9328
// Name: GuildBadgeV2
// Dependencies: [19, 21, 4342, 1297, 1363, 9328, 9325, 9326, 2]
// Exports: default, hasGuildBadge

// Module 9327 (GuildBadgeV2)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ icon: { marginRight: 8 } });
const result = require("createCacheKey").fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  let guild;
  let size;
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = require(1297) /* Button */.Icon.Sizes.MEDIUM;
  }
  const merged = Object.assign(arg0, Object.create(null));
  require(1363) /* AccessibilityAnnouncer */;
  if (null == guild) {
    return null;
  } else {
    const guildBadgeImageSource = tmp5(9328).getGuildBadgeImageSource(guild, tmp8);
    let tmp10 = null;
    if (null != guildBadgeImageSource) {
      const obj = { size: null, source: null, style: null, disableColor: true };
      obj[0] = size;
      obj[1] = guildBadgeImageSource;
      obj[2] = tmp4.icon;
      const merged1 = Object.assign(merged);
      tmp10 = jsx(tmp5(1297).Icon, { size: null, source: null, style: null, disableColor: true });
    }
    return tmp10;
  }
  tmp4 = callback();
};
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult) {
  const guildTraits = require(9325) /* GuildVisibility */.getGuildTraits(fromGuildProfileResult);
  const obj = require(9325) /* GuildVisibility */;
  const tmp = require;
  const badgeCategory = require(9326) /* BadgeCategory */.getBadgeCategory(guildTraits);
  const tmp5 = require(9328) /* badgeVariants */.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    tmp6 = null != tmp(9328).resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = tmp(9328);
  }
  return tmp6;
};
