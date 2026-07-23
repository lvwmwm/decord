// Module ID: 4301
// Function ID: 37659
// Name: hasSubgameInfoChanged
// Dependencies: [5, 4150, 653, 4302, 22, 4303, 3821, 2]
// Exports: convertMapToRobloxSubgameInfo, getSubgameMetadata, hasRunningGameChanged, isRobloxSubgameApplication, isRobloxSubgameGame, keyForRobloxGame, maybeAddAdditionalGameMetadata, maybeTransformRobloxSubgameToRoblox, openRobloxURLWithRootPlaceId, updateRunningGameWithRobloxSubgameInfo

// Module 4301 (hasSubgameInfoChanged)
import module_4303 from "module_4303";
import { isDetectionEnabled } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function hasSubgameInfoChanged(arg0, arg1) {
  let tmp = null == arg0 && null != arg1;
  if (!tmp) {
    let tmp2 = null != arg0 && null == arg1;
    if (!tmp2) {
      let tmp3 = null != arg0 && null != arg1;
      if (tmp3) {
        tmp3 = !importDefault(22).isEqual(arg0, arg1);
        const obj = importDefault(22);
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
}
function isRobloxSubgame(distributor) {
  let tmp = distributor.distributor === constants.ROBLOX;
  if (tmp) {
    tmp = distributor.id !== require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID;
  }
  return tmp;
}
async function _openRobloxURLWithRootPlaceId(arg0, arg1) {
  const obj = outer2_1(outer2_2[5]);
  return yield outer2_1(outer2_2[6])(yield outer2_1(outer2_2[5]).getRobloxSubgameURL(arg0));
}
({ DistributorNames: closure_5, Distributors: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameUtils.tsx");

export const keyForRobloxGame = function keyForRobloxGame(distributor) {
  let combined = null;
  if (distributor.distributor === constants.ROBLOX) {
    combined = null;
    if (null != distributor.sku) {
      const gameMetadata = distributor.gameMetadata;
      let tmp2;
      if (null != gameMetadata) {
        tmp2 = gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.PLACE_ID];
      }
      let str2 = "";
      if (null != tmp2) {
        str2 = tmp2;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + distributor.sku + ":" + str2;
    }
  }
  return combined;
};
export const hasRunningGameChanged = function hasRunningGameChanged(distributor, arg1, id) {
  let tmp = distributor.distributor === constants.ROBLOX;
  if (tmp) {
    let tmp4Result = null != id && distributor.id !== id.id;
    if (!tmp4Result) {
      let tmp6 = null;
      if (distributor.distributor === constants.ROBLOX) {
        tmp6 = null;
        if (null != distributor.gameMetadata) {
          tmp6 = null;
          if (null != distributor.sku) {
            const obj = {};
            const tmp9 = distributor.gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.PLACE_ID];
            let tmp10 = null;
            if (null != tmp9) {
              tmp10 = tmp9;
            }
            obj.placeId = tmp10;
            obj.universeId = distributor.sku;
            tmp6 = obj;
          }
        }
      }
      tmp4Result = hasSubgameInfoChanged(tmp6, arg1);
      const tmp4 = hasSubgameInfoChanged;
    }
    tmp = tmp4Result;
  }
  return tmp;
};
export { hasSubgameInfoChanged };
export const updateRunningGameWithRobloxSubgameInfo = function updateRunningGameWithRobloxSubgameInfo(gameMetadata) {
  let application;
  let subgameInfo;
  let obj = {};
  const merged = Object.assign(gameMetadata);
  ({ subgameInfo, application } = arg1);
  gameMetadata = gameMetadata.gameMetadata;
  let tmp2;
  if (null != gameMetadata) {
    tmp2 = gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.ROBLOX_TIME_STARTED];
  }
  let str = Number(tmp2);
  let isNaNResult = isNaN(str);
  if (!isNaNResult) {
    isNaNResult = 0 === str;
  }
  if (isNaNResult) {
    let start = gameMetadata.start;
    if (null == start) {
      const _Date = Date;
      start = Date.now();
    }
    str = start;
  }
  if (null == subgameInfo) {
    if (isRobloxSubgame(gameMetadata)) {
      obj.id = require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID;
      obj.name = dependencyMap[constants.ROBLOX];
    }
    obj.gameMetadata = undefined;
    obj.sku = undefined;
    obj.start = str;
    const _Math2 = Math;
    obj.lastFocused = Math.floor(str / 1000);
  } else {
    obj = {};
    if (null != application) {
      obj = { exePath: gameMetadata.exePath };
      ({ name: obj4.name, id: obj4.id } = application);
      obj.distributor = constants.ROBLOX;
      if (isDetectionEnabled(obj)) {
        const obj1 = { exePath: gameMetadata.exePath, name: dependencyMap[constants.ROBLOX], id: require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID, distributor: constants.ROBLOX };
        if (isDetectionEnabled(obj1)) {
          ({ id: obj.id, name: obj.name, name: obj.gameName } = application);
          const _Date2 = Date;
          obj.start = Date.now();
          const _Math = Math;
          const _Date3 = Date;
          obj.lastFocused = Math.floor(Date.now() / 1000);
        }
        obj[require(4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.ROBLOX_TIME_STARTED] = str.toString();
        const universeId = subgameInfo.universeId;
        let tmp18;
        if (null != universeId) {
          tmp18 = universeId;
        }
        obj.sku = tmp18;
        if (null != subgameInfo.placeId) {
          obj[require(4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.PLACE_ID] = subgameInfo.placeId;
        }
        const _Object = Object;
        let tmp21;
        if (Object.keys(obj).length > 0) {
          tmp21 = obj;
        }
        obj.gameMetadata = tmp21;
      }
    }
    obj.id = require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID;
    obj.name = dependencyMap[constants.ROBLOX];
    obj.start = str;
  }
  return obj;
};
export const convertMapToRobloxSubgameInfo = function convertMapToRobloxSubgameInfo(arg0) {
  let tmp = null;
  if (null != arg0[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.NativeRobloxSubgameKeys.UNIVERSE_ID]) {
    tmp = null;
    if (null != arg0[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.NativeRobloxSubgameKeys.PLACE_ID]) {
      const obj = { universeId: arg0[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.NativeRobloxSubgameKeys.UNIVERSE_ID], placeId: arg0[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.NativeRobloxSubgameKeys.PLACE_ID] };
      tmp = obj;
    }
  }
  return tmp;
};
export const getSubgameMetadata = function getSubgameMetadata(currentGameForAnalytics) {
  let json = null;
  if (currentGameForAnalytics.distributor === constants.ROBLOX) {
    json = null;
    if (null != currentGameForAnalytics.gameMetadata) {
      json = null;
      if (null != currentGameForAnalytics.gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.PLACE_ID]) {
        const _JSON = JSON;
        const obj = { placeId: currentGameForAnalytics.gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.PLACE_ID] };
        json = JSON.stringify(obj);
      }
    }
  }
  return json;
};
export const maybeAddAdditionalGameMetadata = function maybeAddAdditionalGameMetadata(distributor) {
  if (distributor.distributor === constants.ROBLOX) {
    if (null != distributor.gameMetadata) {
      if (null != distributor.gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.ROBLOX_TIME_STARTED]) {
        if (distributor.id !== require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID) {
          if (null != distributor.gameName) {
            let obj = { name: distributor.gameName, sync_id: distributor.gameMetadata[require(undefined, 4302) /* ROBLOX_PROTOCOL_URL */.RobloxMetadataKeys.ROBLOX_TIME_STARTED] };
          }
          return obj;
        }
      }
    }
  }
  obj = {};
};
export { isRobloxSubgame };
export const isRobloxSubgameApplication = function isRobloxSubgameApplication(getOrFetchApplication) {
  const thirdPartySkus = getOrFetchApplication.thirdPartySkus;
  return thirdPartySkus.some((distributor) => distributor.distributor === outer1_6.ROBLOX);
};
export const isRobloxSubgameGame = function isRobloxSubgameGame(gameRecord) {
  let someResult = gameRecord.id !== require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID;
  if (someResult) {
    const thirdPartySkus = gameRecord.thirdPartySkus;
    someResult = thirdPartySkus.some((distributor) => distributor.distributor === outer1_6.ROBLOX);
  }
  return someResult;
};
export const openRobloxURLWithRootPlaceId = function openRobloxURLWithRootPlaceId() {
  return _openRobloxURLWithRootPlaceId(...arguments);
};
export const maybeTransformRobloxSubgameToRoblox = function maybeTransformRobloxSubgameToRoblox(distributor) {
  let tmp = distributor;
  if (distributor.distributor === constants.ROBLOX) {
    tmp = distributor;
    if (distributor.id !== require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID) {
      const obj = {};
      const merged = Object.assign(distributor);
      obj["id"] = require(4302) /* ROBLOX_PROTOCOL_URL */.ROBLOX_APPLICATION_ID;
      obj["name"] = dependencyMap[constants.ROBLOX];
      tmp = obj;
    }
  }
  return tmp;
};
