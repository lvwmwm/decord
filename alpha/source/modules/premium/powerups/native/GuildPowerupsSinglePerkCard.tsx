// Module ID: 13370
// Function ID: 13371
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 13319, 13301, 13295, 13318, 13367, 13371, 2]
// Exports: default

// Module 13370 (GuildPowerupsSinglePerkCard)
import Fragment from "Fragment" /* 21 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 13295 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 13301 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 13318 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 13319 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 13367 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 13371 */;
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
