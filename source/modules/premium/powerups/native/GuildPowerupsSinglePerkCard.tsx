// Module ID: 12134
// Function ID: 12135
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 12084, 12063, 12060, 12083, 12131, 12135, 2]
// Exports: default

// Module 12134 (GuildPowerupsSinglePerkCard)
import noopAll from "noop" /* 19 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12060 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12063 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12083 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12084 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12131 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12135 */;
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
