// Module ID: 5701
// Function ID: 49087
// Name: GuildBadgeV2
// Dependencies: [31, 33, 4130, 1273, 3976, 5702, 5704, 5703, 2]
// Exports: default, hasGuildBadge

// Module 5701 (GuildBadgeV2)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ icon: { marginRight: 8 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default function GuildBadgeV2(arg0) {
  let guild;
  let size;
  ({ guild, size } = arg0);
  if (size === undefined) {
    size = require(1273) /* Button */.Icon.Sizes.MEDIUM;
  }
  let obj = Object.create(null);
  obj.guild = 0;
  obj.size = 0;
  const merged = Object.assign(arg0, obj);
  require(3976) /* AccessibilityAnnouncer */;
  if (null == guild) {
    return null;
  } else {
    obj = require(5702) /* resolveImageSource */;
    const guildBadgeImageSource = obj.getGuildBadgeImageSource(guild, tmp7);
    let tmp11 = null;
    if (null != guildBadgeImageSource) {
      obj = { size, source: guildBadgeImageSource, style: tmp5.icon, disableColor: true };
      const merged1 = Object.assign(merged);
      tmp11 = jsx(require(1273) /* Button */.Icon, { size, source: guildBadgeImageSource, style: tmp5.icon, disableColor: true });
    }
    return tmp11;
  }
  tmp5 = callback();
};
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult, closure_2) {
  const guildTraits = require(5704) /* isPremiumGuild */.getGuildTraits(fromGuildProfileResult);
  const obj = require(5704) /* isPremiumGuild */;
  const badgeCategory = require(5703) /* BadgeCategory */.getBadgeCategory(guildTraits);
  const tmp3 = require(5702) /* resolveImageSource */.badgeVariants[badgeCategory];
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = null != require(5702) /* resolveImageSource */.resolveImageSource(tmp3, guildTraits, closure_2);
    const obj3 = require(5702) /* resolveImageSource */;
  }
  return tmp4;
};
