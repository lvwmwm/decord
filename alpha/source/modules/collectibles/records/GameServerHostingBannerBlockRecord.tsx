// Module ID: 7518
// Function ID: 7519
// Name: GameServerHostingBannerBlockRecord
// Dependencies: [7513, 2]

// Module 7518 (GameServerHostingBannerBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7513 */;
import size from "module_2" /* 2 */;

class GameServerHostingBannerBlockRecord {
  constructor(is_dismissible) {
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
    obj.isDismissible = is_dismissible.is_dismissible;
    return obj;
  }
  static fromServer(is_dismissible) {
    if (typeof GameServerHostingBannerBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
      obj.isDismissible = is_dismissible.is_dismissible;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export { GameServerHostingBannerBlockRecord };
