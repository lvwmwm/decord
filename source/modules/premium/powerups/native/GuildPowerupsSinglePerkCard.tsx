// Module ID: 11637
// Function ID: 90294
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [31, 33, 11588, 11567, 11564, 11587, 11634, 11638, 2]
// Exports: default

// Module 11637 (GuildPowerupsSinglePerkCard)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  const tmp = importDefault(11588)(powerup, true);
  const tmp2 = importDefault(11567)(guildId, powerup);
  let obj = require(11587) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(11564)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp3 = importDefault(11564)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost };
  let str = "";
  const tmp5 = importDefault(11634)(guildId, powerup);
  const tmp6 = jsx;
  if (null != tmp) {
    str = tmp;
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp5;
  obj.badge = badge.badge;
  return tmp6(importDefault(11638), obj);
};
