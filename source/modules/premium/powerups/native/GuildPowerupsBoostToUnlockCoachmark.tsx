// Module ID: 14886
// Function ID: 112108
// Name: GuildPowerupsBoostToUnlockCoachmark
// Dependencies: []
// Exports: default

// Module 14886 (GuildPowerupsBoostToUnlockCoachmark)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostToUnlockCoachmark.tsx");

export default function GuildPowerupsBoostToUnlockCoachmark(powerup) {
  let guildId;
  let targetRef;
  powerup = powerup.powerup;
  const arg1 = powerup;
  const markAsDismissed = powerup.markAsDismissed;
  const importDefault = markAsDismissed;
  const items = [powerup, markAsDismissed];
  ({ guildId, targetRef } = powerup);
  const memo = React.useMemo(() => ({ type: powerup(closure_2[1]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup, markAsDismissed }), items);
  importDefault(dependencyMap[2])(targetRef, guildId, memo);
  return null;
};
