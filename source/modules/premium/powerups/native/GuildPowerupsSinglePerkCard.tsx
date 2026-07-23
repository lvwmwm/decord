// Module ID: 11603
// Function ID: 90177
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [31, 33, 11553, 11531, 11528, 11552, 11600, 11604, 2]
// Exports: default

// Module 11603 (GuildPowerupsSinglePerkCard)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  const tmp = importDefault(11553)(powerup, true);
  const tmp2 = importDefault(11531)(guildId, powerup);
  let obj = require(11552) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(11528)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp3 = importDefault(11528)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost };
  let str = "";
  const tmp5 = importDefault(11600)(guildId, powerup);
  const tmp6 = jsx;
  if (null != tmp) {
    str = tmp;
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp5;
  obj.badge = badge.badge;
  return tmp6(importDefault(11604), obj);
};
