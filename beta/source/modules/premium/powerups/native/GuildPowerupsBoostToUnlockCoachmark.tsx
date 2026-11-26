// Module ID: 17697
// Function ID: 17698
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 13390, 17698, 2]
// Exports: default

// Module 17697 (GuildPowerupsBoostToUnlockCoachmark)
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 13390 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
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
  markAsDismissed(17698)(targetRef, guildId, memo);
  return null;
};
