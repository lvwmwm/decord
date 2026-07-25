// Module ID: 11597
// Function ID: 90138
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [31, 33, 11548, 11527, 11524, 11547, 11594, 11598, 2]
// Exports: default

// Module 11597 (GuildPowerupsSinglePerkCard)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  const tmp = importDefault(11548)(powerup, true);
  const tmp2 = importDefault(11527)(guildId, powerup);
  let obj = require(11547) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(11524)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp3 = importDefault(11524)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost };
  let str = "";
  const tmp5 = importDefault(11594)(guildId, powerup);
  const tmp6 = jsx;
  if (null != tmp) {
    str = tmp;
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp5;
  obj.badge = badge.badge;
  return tmp6(importDefault(11598), obj);
};
