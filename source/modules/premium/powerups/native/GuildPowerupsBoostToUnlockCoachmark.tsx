// Module ID: 15528
// Function ID: 15529
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 12055, 15529, 2]
// Exports: default

// Module 15528 (GuildPowerupsBoostToUnlockCoachmark)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = React.useMemo(() => ({ type: powerup(closure_1_2[1]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed }), items);
  markAsDismissed(15529)(targetRef, guildId, memo);
  return null;
};
