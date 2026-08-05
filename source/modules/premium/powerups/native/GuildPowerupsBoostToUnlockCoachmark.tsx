// Module ID: 15157
// Function ID: 15158
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 11740, 15158, 2]
// Exports: default

// Module 15157 (GuildPowerupsBoostToUnlockCoachmark)
import noop from "noop";

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
  markAsDismissed(15158)(targetRef, guildId, memo);
  return null;
};
