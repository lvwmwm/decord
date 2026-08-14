// Module ID: 12008
// Function ID: 12009
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 11960, 11939, 11936, 11959, 12005, 12009, 2]
// Exports: default

// Module 12008 (GuildPowerupsSinglePerkCard)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useGetGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  let str = importDefault(11960)(powerup, true);
  const tmp = importDefault(11939)(guildId, powerup);
  let obj = require(11959) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, importDefault(11936)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = importDefault(11936)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = importDefault(12005)(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(importDefault(12009), obj);
};
