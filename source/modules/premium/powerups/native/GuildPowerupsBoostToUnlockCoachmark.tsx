// Module ID: 15059
// Function ID: 114724
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [31, 11523, 15060, 2]
// Exports: default

// Module 15059 (GuildPowerupsBoostToUnlockCoachmark)
import result from "result";

const require = arg1;
const result = require("useGuildPowerupsCoachmark").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  let guildId;
  let targetRef;
  powerup = powerup.powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = React.useMemo(() => ({ type: powerup(outer1_2[1]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed }), items);
  markAsDismissed(15060)(targetRef, guildId, memo);
  return null;
};
