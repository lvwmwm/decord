// Module ID: 13323
// Function ID: 13324
// Name: orderMarketablePerksForDisplay
// Dependencies: [32, 4754, 4756, 2]
// Exports: default

// Module 13323 (orderMarketablePerksForDisplay)
import Powerups from "Powerups" /* 4756 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let closure_3 = fn(4754).GAME_SERVER_POWERUP_SKU_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx");

export default function orderMarketablePerksForDisplay(arg0) {
  const items = [...arg0];
  const reversed = items.reverse();
  const findIndexResult = reversed.findIndex((skuId) => skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
  if (findIndexResult > 0) {
    reversed.unshift(_slicedToArray(reversed.splice(findIndexResult, 1), 1)[0]);
  }
  const findIndexResult1 = reversed.findIndex((skuId) => skuId.skuId === closure_1_3);
  if (-1 !== findIndexResult1) {
    if (findIndexResult1 !== reversed.length - 1) {
      reversed.push(_slicedToArray(reversed.splice(findIndexResult1, 1), 1)[0]);
    }
  }
  return reversed;
};
