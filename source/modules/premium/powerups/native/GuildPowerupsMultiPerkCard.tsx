// Module ID: 11782
// Function ID: 11783
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [19, 4247, 21, 11759, 589, 11783, 11756, 11781, 2]
// Exports: default

// Module 11782 (GuildPowerupsMultiPerkCard)
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  let costDecorator;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let badge = listing(11759)(guildId, listing);
  let obj = guildId(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { guildId, powerups: listing.powerups };
  costDecorator = listing(11783)(obj);
  const items1 = [guildId, listing];
  let tmp5 = null;
  if (null != costDecorator) {
    tmp5 = null;
    if (null != badge) {
      obj = { title: null, description: null, cost: null, imageUrl: null, status: null, costDecorator: null, onPress: null, badge: null };
      ({ title: obj3[0], description: obj3[1] } = badge);
      obj[2] = costDecorator.cost;
      const image = badge.image;
      obj[3] = stateFromStores ? image.staticUrl : image.animatedUrl;
      ({ status: obj3[4], costDecorator } = costDecorator);
      obj[5] = costDecorator;
      obj[6] = tmp4;
      badge = badge.badge;
      obj[7] = badge;
      jsx(listing(11781), { title: null, description: null, cost: null, imageUrl: null, status: null, costDecorator: null, onPress: null, badge: null });
      const tmp6 = jsx;
    }
  }
  return tmp5;
};
