// Module ID: 10781
// Function ID: 10782
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 10718, 10700, 10696, 10717, 10778, 10782, 2]
// Exports: default

// Module 10781 (GuildPowerupsSinglePerkCard)
import Fragment from "Fragment" /* 21 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 10696 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 10700 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 10717 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 10718 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 10778 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 10782 */;
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
