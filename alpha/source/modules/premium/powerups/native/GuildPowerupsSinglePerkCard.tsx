// Module ID: 10718
// Function ID: 10719
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 10656, 10633, 10629, 10655, 10715, 10719, 2]
// Exports: default

// Module 10718 (GuildPowerupsSinglePerkCard)
import Fragment from "Fragment" /* 21 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 10629 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 10633 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 10655 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 10656 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 10715 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 10719 */;
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
