// Module ID: 8461
// Function ID: 8462
// Name: GuildBadgeV2
// Dependencies: [19, 21, 4189, 1297, 4035, 8462, 8459, 8460, 2]
// Exports: default, hasGuildBadge

// Module 8461 (GuildBadgeV2)
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
  require(4035) /* AccessibilityAnnouncer */;
  if (null == guild) {
    return null;
  } else {
    const guildBadgeImageSource = tmp5(8462).getGuildBadgeImageSource(guild, tmp8);
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
  const guildTraits = require(8459) /* GuildVisibility */.getGuildTraits(fromGuildProfileResult);
  const obj = require(8459) /* GuildVisibility */;
  const tmp = require;
  const badgeCategory = require(8460) /* BadgeCategory */.getBadgeCategory(guildTraits);
  const tmp5 = require(8462) /* badgeVariants */.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    tmp6 = null != tmp(8462).resolveImageSource(tmp5, guildTraits, arg1);
    const tmpResult = tmp(8462);
  }
  return tmp6;
};
