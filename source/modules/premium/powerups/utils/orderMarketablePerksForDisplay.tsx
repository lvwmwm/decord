// Module ID: 12383
// Function ID: 94685
// Name: orderMarketablePerksForDisplay
// Dependencies: []
// Exports: default

// Module 12383 (orderMarketablePerksForDisplay)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).GAME_SERVER_POWERUP_SKU_ID;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx");

export default function orderMarketablePerksForDisplay(arg0) {
  const items = [...arg0];
  const reversed = items.reverse();
  const findIndexResult = reversed.findIndex((skuId) => skuId.skuId === callback(closure_1[2]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
  if (findIndexResult > 0) {
    reversed.unshift(callback(reversed.splice(findIndexResult, 1), 1)[0]);
  }
  const findIndexResult1 = reversed.findIndex((skuId) => skuId.skuId === closure_3);
  if (-1 !== findIndexResult1) {
    if (findIndexResult1 !== reversed.length - 1) {
      reversed.push(callback(reversed.splice(findIndexResult1, 1), 1)[0]);
    }
  }
  return reversed;
};
