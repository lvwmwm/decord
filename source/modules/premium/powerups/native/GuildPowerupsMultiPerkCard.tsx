// Module ID: 11599
// Function ID: 90142
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [31, 4123, 33, 11576, 566, 11600, 11573, 11598, 2]
// Exports: default

// Module 11599 (GuildPowerupsMultiPerkCard)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  let costDecorator;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let badge = listing(11576)(guildId, listing);
  let obj = guildId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  obj = { guildId, powerups: listing.powerups };
  costDecorator = listing(11600)(obj);
  const items1 = [guildId, listing];
  let tmp3 = null;
  if (null != costDecorator) {
    tmp3 = null;
    if (null != badge) {
      obj = {};
      ({ title: obj3.title, description: obj3.description } = badge);
      obj.cost = costDecorator.cost;
      const image = badge.image;
      obj.imageUrl = stateFromStores ? image.staticUrl : image.animatedUrl;
      ({ status: obj3.status, costDecorator } = costDecorator);
      obj.costDecorator = costDecorator;
      obj.onPress = tmp2;
      badge = badge.badge;
      obj.badge = badge;
      jsx(listing(11598), {});
      const tmp4 = jsx;
    }
  }
  return tmp3;
};
