// Module ID: 12128
// Function ID: 12129
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 12080, 12059, 12056, 12079, 12125, 12129, 2]
// Exports: default

// Module 12128 (GuildPowerupsSinglePerkCard)
import noopAll from "noop" /* 19 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12056 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12059 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12079 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12080 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12125 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12129 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  let obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(GuildPowerupsPerkCardDefault, obj);
};
