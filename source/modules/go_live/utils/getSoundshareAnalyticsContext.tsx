// Module ID: 4649
// Function ID: 4650
// Name: getSoundshareAnalyticsContext
// Dependencies: [4504, 2]
// Exports: default

// Module 4649 (getSoundshareAnalyticsContext)
import initialize from "initialize";

const result = require("set").fileFinishedImporting("modules/go_live/utils/getSoundshareAnalyticsContext.tsx");

export default function getSoundshareAnalyticsContext(sourcePid) {
  if (null == sourcePid) {
    return {};
  } else {
    sourcePid = sourcePid.sourcePid;
    let tmp;
    let tmp2;
    if (null != sourcePid) {
      gameForPID = gameForPID.getGameForPID(sourcePid);
      let name;
      if (gameForPID != null) {
        name = gameForPID.name;
      }
      let id;
      if (gameForPID != null) {
        id = gameForPID.id;
      }
      tmp = id;
      tmp2 = name;
    }
    const obj = { soundshare_session: null, share_game_name: null, share_game_id: null };
    obj[0] = sourcePid.soundshareSession;
    obj[1] = tmp2;
    obj[2] = tmp;
    return obj;
  }
};
