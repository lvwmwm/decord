// Module ID: 11989
// Function ID: 11990
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 11941, 11920, 11917, 11940, 11986, 11990, 2]
// Exports: default

// Module 11989 (GuildPowerupsSinglePerkCard)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useGetGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  let str = importDefault(11941)(powerup, true);
  const tmp = importDefault(11920)(guildId, powerup);
  let obj = require(11940) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, importDefault(11917)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = importDefault(11917)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = importDefault(11986)(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(importDefault(11990), obj);
};
