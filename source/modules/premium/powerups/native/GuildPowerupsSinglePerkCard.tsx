// Module ID: 11841
// Function ID: 11842
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 11793, 11772, 11769, 11792, 11838, 11842, 2]
// Exports: default

// Module 11841 (GuildPowerupsSinglePerkCard)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useGetGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  let str = importDefault(11793)(powerup, true);
  const tmp = importDefault(11772)(guildId, powerup);
  let obj = require(11792) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, importDefault(11769)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = importDefault(11769)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = importDefault(11838)(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(importDefault(11842), obj);
};
