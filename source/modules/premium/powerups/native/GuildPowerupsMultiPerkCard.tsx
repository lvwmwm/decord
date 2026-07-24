// Module ID: 11632
// Function ID: 90419
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [31, 4122, 33, 11609, 566, 11633, 11606, 11631, 2]
// Exports: default

// Module 11632 (GuildPowerupsMultiPerkCard)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  let costDecorator;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let badge = listing(11609)(guildId, listing);
  let obj = guildId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  obj = { guildId, powerups: listing.powerups };
  costDecorator = listing(11633)(obj);
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
      jsx(listing(11631), {});
      const tmp4 = jsx;
    }
  }
  return tmp3;
};
