// Module ID: 16521
// Function ID: 16522
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 12753, 16522, 2]
// Exports: default

// Module 16521 (GuildPowerupsBoostToUnlockCoachmark)
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12753 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = noop.useMemo(() => ({ type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed }), items);
  markAsDismissed(16522)(targetRef, guildId, memo);
  return null;
};
