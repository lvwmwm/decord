// Module ID: 13570
// Function ID: 13571
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [19, 5044, 21, 13547, 504, 13571, 13544, 13569, 2]
// Exports: default

// Module 13570 (GuildPowerupsMultiPerkCard)
import Fragment from "Fragment" /* 21 */;
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 13544 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  let useReducedMotion;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp3 = listing(13547)(guildId, listing);
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { guildId, powerups: listing.powerups };
  const tmp5 = listing(13571)(obj2);
  const items1 = [guildId, listing];
  let tmp8Result = null;
  const tmp = listing;
  if (null != tmp5) {
    tmp8Result = null;
    if (null != tmp3) {
      ({ title: obj3.title, description: obj3.description } = tmp3);
      const image = tmp3.image;
      ({ status: obj3.status, costDecorator: obj3.costDecorator } = tmp5);
      tmp8Result = jsx(tmp(13569), { title: null, description: null, cost: tmp5.cost, imageUrl: stateFromStores ? image.staticUrl : image.animatedUrl, status: null, costDecorator: null, onPress: tmp6, badge: tmp3.badge });
    }
  }
  return tmp8Result;
};
