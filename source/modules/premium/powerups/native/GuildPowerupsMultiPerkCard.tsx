// Module ID: 11594
// Function ID: 90107
// Name: GuildPowerupsMultiPerkCard
// Dependencies: []
// Exports: default

// Module 11594 (GuildPowerupsMultiPerkCard)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  let costDecorator;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const listing = guildId.listing;
  const importDefault = listing;
  let badge = importDefault(dependencyMap[3])(guildId, listing);
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { guildId, powerups: listing.powerups };
  costDecorator = importDefault(dependencyMap[5])(obj);
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
      jsx(importDefault(dependencyMap[7]), obj);
      const tmp4 = jsx;
    }
  }
  return tmp3;
};
