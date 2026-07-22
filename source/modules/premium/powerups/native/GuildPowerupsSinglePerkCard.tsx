// Module ID: 11593
// Function ID: 90128
// Name: GuildPowerupsSinglePerkCard
// Dependencies: []
// Exports: default

// Module 11593 (GuildPowerupsSinglePerkCard)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  const tmp = importDefault(dependencyMap[2])(powerup, true);
  const tmp2 = importDefault(dependencyMap[3])(guildId, powerup);
  let obj = arg1(dependencyMap[5]);
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(dependencyMap[4])(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp3 = importDefault(dependencyMap[4])(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost };
  let str = "";
  const tmp5 = importDefault(dependencyMap[6])(guildId, powerup);
  const tmp6 = jsx;
  if (null != tmp) {
    str = tmp;
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp5;
  obj.badge = badge.badge;
  return tmp6(importDefault(dependencyMap[7]), obj);
};
