// Module ID: 16948
// Function ID: 16949
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 558, 576, 12782, 16949, 2]

// Module 16948 (GuildPowerupsBoostToUnlockCoachmark)
import react2 from "react" /* 576 */;
import useGuildPowerupsCoachmarkDefault from "useGuildPowerupsCoachmark" /* 16949 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const GuildPowerupsNotification = tmp(12782);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBoostToUnlockCoachmark(arg0) {
  let markAsDismissed;
  let powerup;
  const obj = react2;
  const cResult = obj.c(3);
  ({ powerup, markAsDismissed } = arg0);
  if (cResult[0] === markAsDismissed) {
    let tmp6;
    if (cResult[1] === powerup) {
      tmp6 = cResult[2];
    }
    useGuildPowerupsCoachmarkDefault(tmp5, tmp4, tmp6);
    return null;
  }
  const obj2 = { type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed };
  cResult[0] = markAsDismissed;
  cResult[1] = powerup;
  cResult[2] = obj2;
  tmp6 = obj2;
}) : (function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  let guildId;
  let targetRef;
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = react.useMemo(() => {
    const obj = { type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed };
    return obj;
  }, items);
  markAsDismissed(16949)(targetRef, guildId, memo);
  return null;
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default tmp2;
