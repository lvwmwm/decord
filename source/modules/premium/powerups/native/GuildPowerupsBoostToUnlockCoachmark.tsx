// Module ID: 15111
// Function ID: 114928
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [31, 11563, 15112, 2]
// Exports: default

// Module 15111 (GuildPowerupsBoostToUnlockCoachmark)
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
  markAsDismissed(15112)(targetRef, guildId, memo);
  return null;
};
