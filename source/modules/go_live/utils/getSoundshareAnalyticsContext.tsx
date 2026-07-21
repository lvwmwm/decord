// Module ID: 4302
// Function ID: 37655
// Name: getSoundshareAnalyticsContext
// Dependencies: []
// Exports: default

// Module 4302 (getSoundshareAnalyticsContext)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/go_live/utils/getSoundshareAnalyticsContext.tsx");

export default function getSoundshareAnalyticsContext(sourcePid) {
  if (null == sourcePid) {
    return {};
  } else {
    sourcePid = sourcePid.sourcePid;
    let tmp;
    let tmp2;
    if (null != sourcePid) {
      const gameForPID = gameForPID.getGameForPID(sourcePid);
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
