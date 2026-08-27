// Module ID: 15672
// Function ID: 15673
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 11974, 15673, 2]
// Exports: default

// Module 15672 (GuildPowerupsBoostToUnlockCoachmark)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = React.useMemo(() => ({ type: powerup(closure_1_2[1]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed }), items);
  markAsDismissed(15673)(targetRef, guildId, memo);
  return null;
};
