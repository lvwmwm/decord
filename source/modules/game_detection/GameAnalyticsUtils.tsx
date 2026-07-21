// Module ID: 4296
// Function ID: 37605
// Name: normalizePath
// Dependencies: []
// Exports: getRunningGameAnalytics, isVerifiedGameExecutable

// Module 4296 (normalizePath)
function normalizePath(str) {
  const formatted = str.toLowerCase();
  let substr = formatted;
  if (formatted.endsWith("/")) {
    substr = formatted.slice(0, -1);
  }
  return substr;
}
function removeExecutablePathPrefix(exePath) {
  const parts = normalizePath(exePath).split("/");
  const substr = parts.slice(-2);
  return substr.join("/");
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/game_detection/GameAnalyticsUtils.tsx");

export { removeExecutablePathPrefix };
export const getRunningGameAnalytics = function getRunningGameAnalytics(streamApplication) {
  if (null == streamApplication) {
    let obj = { gameName: undefined, gameId: undefined, exe: undefined, distributor: undefined, sku: undefined, gameMetadata: undefined, rawExePath: undefined };
    return obj;
  } else {
    const tmp = "exePath" in streamApplication ? streamApplication.exePath : streamApplication.exe;
    obj = {};
    let id = streamApplication.id;
    let tmp2;
    if (null != id) {
      tmp2 = id;
    }
    obj.id = tmp2;
    const name = streamApplication.name;
    let tmp3;
    if (null != name) {
      tmp3 = name;
    }
    obj.name = tmp3;
    let str = "";
    let str2 = "";
    if (null != tmp) {
      str2 = tmp;
    }
    obj.exePath = str2;
    if (null != tmp) {
      str = tmp;
    }
    obj.cmdLine = str;
    obj.lastFocused = 0;
    const findGameResult = closure_2.findGame(obj);
    obj = {};
    const name2 = streamApplication.name;
    let tmp6;
    if (null != name2) {
      tmp6 = name2;
    }
    obj.gameName = tmp6;
    let id2 = streamApplication.id;
    if (null == id2) {
      id = undefined;
      if (null != findGameResult) {
        id = findGameResult.id;
      }
      id2 = id;
    }
    let tmp8;
    if (null != id2) {
      tmp8 = id2;
    }
    obj.gameId = tmp8;
    let tmp9;
    if (null != tmp) {
      tmp9 = removeExecutablePathPrefix(tmp);
    }
    obj.exe = tmp9;
    const distributor = streamApplication.distributor;
    let tmp11;
    if (null != distributor) {
      tmp11 = distributor;
    }
    obj.distributor = tmp11;
    const sku = streamApplication.sku;
    let tmp12;
    if (null != sku) {
      tmp12 = sku;
    }
    obj.sku = tmp12;
    let subgameMetadata;
    if (null != streamApplication) {
      subgameMetadata = arg1(dependencyMap[1]).getSubgameMetadata(streamApplication);
      const obj3 = arg1(dependencyMap[1]);
    }
    obj.gameMetadata = subgameMetadata;
    obj.rawExePath = tmp;
    return obj;
  }
};
export const isVerifiedGameExecutable = function isVerifiedGameExecutable(arg0, arr) {
  if (null != arg0) {
    if (null != arr) {
      const callback = normalizePath(arg0);
      const platformName = callback(platformName[2]).getPlatformName();
      return arr.some((os) => {
        let tmp = os.os === closure_1;
        if (tmp) {
          let endsWithResult;
          if (null != closure_0) {
            endsWithResult = closure_0.endsWith(os.name);
          }
          tmp = endsWithResult;
        }
        return tmp;
      });
    }
  }
  return false;
};
