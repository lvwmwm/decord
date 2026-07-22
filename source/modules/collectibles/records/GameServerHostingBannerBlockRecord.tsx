// Module ID: 6808
// Function ID: 53711
// Name: GameServerHostingBannerBlockRecord
// Dependencies: []

// Module 6808 (GameServerHostingBannerBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class GameServerHostingBannerBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, GameServerHostingBannerBlockRecord);
      this.type = GameServerHostingBannerBlockRecord(closure_1[2]).ShopBlockType.GAME_SERVER_HOSTING_BANNER;
      this.isDismissible = arg0.is_dismissible;
      return;
    }
  }
  const arg1 = GameServerHostingBannerBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(is_dismissible) {
        return new GameServerHostingBannerBlockRecord(is_dismissible);
      }
    }
  ];
  return callback(GameServerHostingBannerBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export const GameServerHostingBannerBlockRecord = tmp2;
