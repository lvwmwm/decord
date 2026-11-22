// Module ID: 13462
// Function ID: 13463
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [19, 4914, 21, 13439, 504, 13463, 13436, 13461, 2]
// Exports: default

// Module 13462 (GuildPowerupsMultiPerkCard)
import Fragment from "Fragment" /* 21 */;
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 13436 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  let useReducedMotion;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp3 = listing(13439)(guildId, listing);
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { guildId, powerups: listing.powerups };
  const tmp5 = listing(13463)(obj2);
  const items1 = [guildId, listing];
  let tmp8Result = null;
  const tmp = listing;
  if (null != tmp5) {
    tmp8Result = null;
    if (null != tmp3) {
      ({ title: obj3.title, description: obj3.description } = tmp3);
      const image = tmp3.image;
      ({ status: obj3.status, costDecorator: obj3.costDecorator } = tmp5);
      tmp8Result = jsx(tmp(13461), { title: null, description: null, cost: tmp5.cost, imageUrl: stateFromStores ? image.staticUrl : image.animatedUrl, status: null, costDecorator: null, onPress: tmp6, badge: tmp3.badge });
    }
  }
  return tmp8Result;
};
