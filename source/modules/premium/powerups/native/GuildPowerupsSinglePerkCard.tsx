// Module ID: 11657
// Function ID: 11658
// Name: GuildPowerupsSinglePerkCard
// Dependencies: [19, 21, 11608, 11587, 11584, 11607, 11654, 11658, 2]
// Exports: default

// Module 11657 (GuildPowerupsSinglePerkCard)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useGetGuildPowerupBannerImage").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSinglePerkCard.tsx");

export default function GuildPowerupsSinglePerkCard(badge) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = badge);
  let str = importDefault(11608)(powerup, true);
  const tmp = importDefault(11587)(guildId, powerup);
  let obj = require(11607) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp, importDefault(11584)(guildId, powerup, "GuildPowerupsSinglePerkCard"));
  const tmp2 = importDefault(11584)(guildId, powerup, "GuildPowerupsSinglePerkCard");
  obj = { title: powerup.title, description: powerup.description, cost: powerup.cost, imageUrl: null, status: null, onPress: null, badge: null };
  const tmp4 = importDefault(11654)(guildId, powerup);
  const tmp5 = jsx;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = calculatePowerupCardStatus;
  obj[5] = tmp4;
  obj[6] = badge.badge;
  return tmp5(importDefault(11658), obj);
};
