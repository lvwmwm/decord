// Module ID: 7435
// Function ID: 7436
// Name: getSoundshareAnalyticsContext
// Dependencies: [2018, 2]
// Exports: default

// Module 7435 (getSoundshareAnalyticsContext)
import RunningGameStore from "RunningGameStore" /* 2018 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/go_live/utils/getSoundshareAnalyticsContext.tsx");

export default function getSoundshareAnalyticsContext(sourcePid) {
  if (null == sourcePid) {
    return {};
  } else {
    sourcePid = sourcePid.sourcePid;
    let tmp;
    let tmp2;
    if (null != sourcePid) {
      const gameForPID = RunningGameStore.getGameForPID(sourcePid);
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
    return { soundshare_session: sourcePid.soundshareSession, share_game_name: tmp2, share_game_id: tmp };
  }
};
