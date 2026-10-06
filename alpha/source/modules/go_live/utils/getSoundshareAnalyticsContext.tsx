// Module ID: 5031
// Function ID: 5032
// Name: getSoundshareAnalyticsContext
// Dependencies: [2006, 2]
// Exports: default

// Module 5031 (getSoundshareAnalyticsContext)
import RunningGameStore from "RunningGameStore" /* 2006 */;
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
