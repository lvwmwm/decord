// Module ID: 12771
// Function ID: 12772
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 558, 568, 12719, 12699, 12695, 12718, 12767, 12772, 2]

// Module 12771 (GuildPowerupsSinglePerkCard)
import c from "c" /* 568 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12695 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12699 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12718 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12719 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12767 */;
import noop from "module_19" /* 19 */;

const GuildPowerupsPerkCardDefault = tmp3(12772);
require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ guildId, powerup, badge } = arg0);
  const tmp4 = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp5 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp6 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp5, tmp6);
  const tmp8 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  let str = tmp4;
  if (tmp4 == null) {
    str = "";
  }
  if (cResult[0] === badge) {
    if (cResult[1] === tmp8) {
      if (cResult[2] === powerup.cost) {
        if (cResult[3] === powerup.description) {
          if (cResult[4] === powerup.title) {
            if (cResult[5] === calculatePowerupCardStatus) {
              if (cResult[6] === str) {
                let tmp9 = cResult[7];
              }
              return tmp9;
            }
          }
        }
      }
    }
  }
  const tmp10 = jsx(GuildPowerupsPerkCardDefault, { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: str, status: calculatePowerupCardStatus, onPress: tmp8, badge });
  cResult[0] = badge;
  cResult[1] = tmp8;
  cResult[2] = powerup.cost;
  cResult[3] = powerup.description;
  cResult[4] = powerup.title;
  cResult[5] = calculatePowerupCardStatus;
  cResult[6] = str;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : ((badge) => {
  ({ guildId, powerup } = badge);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  const tmp = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp2 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsSinglePerkCard");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp, tmp2);
  const obj2 = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj2.imageUrl = str;
  obj2.status = calculatePowerupCardStatus;
  obj2.onPress = tmp4;
  obj2.badge = badge.badge;
  return tmp5(GuildPowerupsPerkCardDefault, obj2);
});
