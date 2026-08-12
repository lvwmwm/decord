// Module ID: 7079
// Function ID: 7080
// Name: fromServer
// Dependencies: [7074, 2]

// Module 7079 (fromServer)
let prototype;
prototype = function GameServerHostingBannerBlockRecord(is_dismissible) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(7074) /* ShopBlockType */.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(is_dismissible) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(7074) /* ShopBlockType */.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export const GameServerHostingBannerBlockRecord = prototype;
