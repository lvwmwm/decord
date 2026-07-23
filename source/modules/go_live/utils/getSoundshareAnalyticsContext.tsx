// Module ID: 4306
// Function ID: 37695
// Name: getSoundshareAnalyticsContext
// Dependencies: [4150, 2]
// Exports: default

// Module 4306 (getSoundshareAnalyticsContext)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
      if (null != gameForPID) {
        name = gameForPID.name;
      }
      let id;
      if (null != gameForPID) {
        id = gameForPID.id;
      }
      tmp2 = id;
      tmp = name;
    }
    const obj = { soundshare_session: sourcePid.soundshareSession, share_game_name: tmp, share_game_id: tmp2 };
    return obj;
  }
};
