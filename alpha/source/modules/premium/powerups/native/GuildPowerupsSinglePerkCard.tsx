// Module ID: 14387
// Function ID: 14388
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 14337, 14315, 14311, 14336, 14384, 14388, 2]
// Exports: default

// Module 14387 (GuildPowerupsSinglePerkCard)
import Fragment from "Fragment" /* 21 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 14311 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 14315 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 14336 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 14337 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 14384 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 14388 */;
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
