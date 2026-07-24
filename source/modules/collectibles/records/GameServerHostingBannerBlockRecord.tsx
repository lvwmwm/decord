// Module ID: 6812
// Function ID: 53754
// Name: GameServerHostingBannerBlockRecord
// Dependencies: [6, 7, 6805, 2]

// Module 6812 (GameServerHostingBannerBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class GameServerHostingBannerBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, GameServerHostingBannerBlockRecord);
      this.type = GameServerHostingBannerBlockRecord(outer1_1[2]).ShopBlockType.GAME_SERVER_HOSTING_BANNER;
      this.isDismissible = arg0.is_dismissible;
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(is_dismissible) {
        return new GameServerHostingBannerBlockRecord(is_dismissible);
      }
    }
  ];
  return callback(GameServerHostingBannerBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export const GameServerHostingBannerBlockRecord = tmp2;
