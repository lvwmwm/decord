// Module ID: 10712
// Function ID: 10713
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 10649, 10631, 10627, 10648, 10709, 10713, 2]
// Exports: default

// Module 10712 (GuildPowerupsSinglePerkCard)
import Fragment from "Fragment" /* 21 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 10627 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 10631 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 10648 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 10649 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 10709 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 10713 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  let tmp4;
  ({ guildId, powerup } = badge);
  badge = badge.badge;
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, tmp2);
  const obj2 = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: str, status: calculatePowerupCardStatus, onPress: tmp4, badge };
  tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  const tmp5 = jsx;
  const tmp6 = GuildPowerupsPerkCardDefault;
  if (str == null) {
    str = "";
  }
  return tmp5(tmp6, obj2);
};
