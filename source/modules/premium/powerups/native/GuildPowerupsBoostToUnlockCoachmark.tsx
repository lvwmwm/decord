// Module ID: 15178
// Function ID: 15179
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: [19, 11768, 15179, 2]
// Exports: default

// Module 15178 (GuildPowerupsBoostToUnlockCoachmark)
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
  markAsDismissed(15179)(targetRef, guildId, memo);
  return null;
};
