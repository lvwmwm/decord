// Module ID: 11630
// Function ID: 90415
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [31, 33, 11582, 11561, 11558, 11581, 11627, 11631, 2]
// Exports: default

// Module 11630 (GuildPowerupsSinglePerkCard)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  const tmp = importDefault(11582)(powerup, true);
  const tmp2 = importDefault(11561)(guildId, powerup);
  let obj = require(11581) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(11558)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp3 = importDefault(11558)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost };
  let str = "";
  const tmp5 = importDefault(11627)(guildId, powerup);
  const tmp6 = jsx;
  if (null != tmp) {
    str = tmp;
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp5;
  obj.badge = badge.badge;
  return tmp6(importDefault(11631), obj);
};
