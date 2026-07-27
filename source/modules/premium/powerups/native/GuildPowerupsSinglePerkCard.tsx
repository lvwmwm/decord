// Module ID: 11598
// Function ID: 90143
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [31, 33, 11549, 11528, 11525, 11548, 11595, 11599, 2]
// Exports: default

// Module 11598 (GuildPowerupsSinglePerkCard)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  const tmp = importDefault(11549)(powerup, true);
  const tmp2 = importDefault(11528)(guildId, powerup);
  let obj = require(11548) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(11525)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp3 = importDefault(11525)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost };
  let str = "";
  const tmp5 = importDefault(11595)(guildId, powerup);
  const tmp6 = jsx;
  if (null != tmp) {
    str = tmp;
  }
  obj.imageUrl = str;
  obj.status = calculatePowerupCardStatus;
  obj.onPress = tmp5;
  obj.badge = badge.badge;
  return tmp6(importDefault(11599), obj);
};
