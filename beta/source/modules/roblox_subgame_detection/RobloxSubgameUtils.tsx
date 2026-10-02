// Module ID: 4967
// Function ID: 4968
// Name: RobloxSubgameUtils
// Dependencies: [5, 2006, 1086, 4968, 12, 4969, 4522, 2]
// Exports: convertMapToRobloxSubgameInfo, getSubgameMetadata, hasRunningGameChanged, hasSubgameInfoChanged, isRobloxSubgame, isRobloxSubgameApplication, isRobloxSubgameGame, keyForRobloxGame, maybeAddAdditionalGameMetadata, maybeTransformRobloxSubgameToRoblox, openRobloxURLWithRootPlaceId, updateRunningGameWithRobloxSubgameInfo

// Module 4967 (RobloxSubgameUtils)
import _modDef12 from "module_12" /* 12 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 4968 */;
import RobloxSubgamePlatformUtilsDefault from "RobloxSubgamePlatformUtils" /* 4969 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let c3, c4;

let hasOwnProperty;
let metroRequire;
let obj = function _openRobloxURLWithRootPlaceId() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj5.getRobloxSubgameURL(closure_0), done: false };
            obj5 = RobloxSubgamePlatformUtilsDefault;
            return obj4;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            c3 = 2;
            c4 = 1;
            const obj7 = { value: closure_130_1(closure_130_2[6])(closure_0), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const isDetectionEnabled = RunningGameStore.isDetectionEnabled;
({ DistributorNames: hasOwnProperty, Distributors: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameUtils.tsx");

export const keyForRobloxGame = function keyForRobloxGame(distributor) {
  let combined = null;
  if (distributor.distributor === metroRequire.ROBLOX) {
    combined = null;
    if (null != distributor.sku) {
      const gameMetadata = distributor.gameMetadata;
      let str;
      const sku = distributor.sku;
      if (gameMetadata != null) {
        str = gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID];
      }
      if (str == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + sku + ":" + str;
    }
  }
  return combined;
};
export const hasRunningGameChanged = function hasRunningGameChanged(distributor, arg1, id) {
  let tmp2 = distributor.distributor === metroRequire.ROBLOX;
  if (tmp2) {
    let tmp5 = null != id && distributor.id !== id.id;
    if (!tmp5) {
      let tmp6 = null;
      if (distributor.distributor === tmp.ROBLOX) {
        tmp6 = null;
        if (null != distributor.gameMetadata) {
          tmp6 = null;
          if (null != distributor.sku) {
            let tmp9 = distributor.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID];
            if (tmp9 == null) {
              tmp9 = null;
            }
            tmp6 = { placeId: tmp9, universeId: distributor.sku };
            obj = { placeId: tmp9, universeId: distributor.sku };
          }
        }
      }
      let tmp11 = null == tmp6 && null != arg1;
      if (!tmp11) {
        let tmp12 = null != tmp6 && null == arg1;
        if (!tmp12) {
          let tmp13 = null != tmp6 && null != arg1;
          if (tmp13) {
            const obj2 = _modDef12;
            tmp13 = !obj2.isEqual(tmp6, arg1);
          }
          tmp12 = tmp13;
        }
        tmp11 = tmp12;
      }
      tmp5 = tmp11;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
export const hasSubgameInfoChanged = function hasSubgameInfoChanged(arg0, arg1) {
  let tmp = null == arg0 && null != arg1;
  if (!tmp) {
    let tmp2 = null != arg0 && null == arg1;
    if (!tmp2) {
      let tmp3 = null != arg0 && null != arg1;
      if (tmp3) {
        obj = _modDef12;
        tmp3 = !obj.isEqual(arg0, arg1);
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const updateRunningGameWithRobloxSubgameInfo = function updateRunningGameWithRobloxSubgameInfo(gameMetadata, arg1) {
  let application;
  let subgameInfo;
  obj = {};
  const merged = Object.assign(gameMetadata);
  ({ subgameInfo, application } = arg1);
  gameMetadata = gameMetadata.gameMetadata;
  let tmp2;
  const _Number = Number;
  if (gameMetadata != null) {
    tmp2 = gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED];
  }
  let str = _Number(tmp2);
  const isNaNResult = isNaN(str) || 0 === str;
  if (isNaNResult) {
    let start = gameMetadata.start;
    if (start == null) {
      const _Date = Date;
      start = Date.now();
    }
    str = start;
  }
  if (null == subgameInfo) {
    let tmp15 = gameMetadata.distributor === metroRequire.ROBLOX;
    const tmp14 = metroRequire;
    if (tmp15) {
      tmp15 = gameMetadata.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
    }
    if (tmp15) {
      obj.id = RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
      obj.name = hasOwnProperty[tmp14.ROBLOX];
    }
    obj.gameMetadata = undefined;
    obj.sku = undefined;
    obj.start = str;
    const _Math2 = Math;
    obj.lastFocused = Math.floor(str / 1000);
  } else {
    if (null != application) {
      const obj2 = { exePath: gameMetadata.exePath, name: null, id: null, distributor: metroRequire.ROBLOX };
      ({ name: obj4.name, id: obj4.id } = application);
      const tmp21 = isDetectionEnabled;
      if (isDetectionEnabled(obj2)) {
        let tmp9;
        const obj3 = { exePath: gameMetadata.exePath, name: hasOwnProperty[metroRequire.ROBLOX], id: RobloxSubgameTypes.ROBLOX_APPLICATION_ID, distributor: metroRequire.ROBLOX };
        const tmp7 = require;
        if (tmp21(obj3)) {
          ({ id: obj.id, name: obj.name, name: obj.gameName } = application);
          const _Date2 = Date;
          obj.start = Date.now();
          const _Math = Math;
          const _Date3 = Date;
          obj.lastFocused = Math.floor(Date.now() / 1000);
          tmp9 = tmp7;
        }
        const obj7 = {};
        obj7[tmp9(4968).RobloxMetadataKeys.ROBLOX_TIME_STARTED] = str.toString();
        const universeId = subgameInfo.universeId;
        obj.sku = universeId;
        if (null != subgameInfo.placeId) {
          obj7[tmp9(4968).RobloxMetadataKeys.PLACE_ID] = subgameInfo.placeId;
        }
        const _Object = Object;
        let tmp13;
        if (Object.keys(obj7).length > 0) {
          tmp13 = obj7;
        }
        obj.gameMetadata = tmp13;
      }
    }
    tmp9 = require;
    obj.id = RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
    obj.name = hasOwnProperty[metroRequire.ROBLOX];
    obj.start = str;
  }
  return obj;
};
export const convertMapToRobloxSubgameInfo = function convertMapToRobloxSubgameInfo(arg0) {
  let tmp3 = null;
  if (null != arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID]) {
    tmp3 = null;
    if (null != arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID]) {
      tmp3 = { universeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID], placeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID] };
      obj = { universeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID], placeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID] };
    }
  }
  return tmp3;
};
export const getSubgameMetadata = function getSubgameMetadata(currentGameForAnalytics) {
  let json = null;
  if (currentGameForAnalytics.distributor === metroRequire.ROBLOX) {
    json = null;
    if (null != currentGameForAnalytics.gameMetadata) {
      json = null;
      const tmp2 = require;
      if (null != currentGameForAnalytics.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID]) {
        const _JSON = JSON;
        obj = { placeId: currentGameForAnalytics.gameMetadata[tmp2(undefined, 4968).RobloxMetadataKeys.PLACE_ID] };
        json = stringify(obj);
      }
    }
  }
  return json;
};
export const maybeAddAdditionalGameMetadata = function maybeAddAdditionalGameMetadata(visibleGame) {
  let gameMetadata;
  if (visibleGame.distributor === metroRequire.ROBLOX) {
    if (null != visibleGame.gameMetadata) {
      if (null != visibleGame.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED]) {
        if (visibleGame.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID) {
          if (null != visibleGame.gameName) {
            obj = { name: null, sync_id: gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED] };
            ({ gameName: obj.name, gameMetadata } = visibleGame);
          }
          return obj;
        }
      }
    }
  }
  obj = {};
};
export const isRobloxSubgame = function isRobloxSubgame(distributor) {
  const tmp = distributor.distributor === metroRequire.ROBLOX && distributor.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
  return tmp;
};
export const isRobloxSubgameApplication = function isRobloxSubgameApplication(getOrFetchApplication) {
  const thirdPartySkus = getOrFetchApplication.thirdPartySkus;
  return thirdPartySkus.some((distributor) => distributor.distributor === constants.ROBLOX);
};
export const isRobloxSubgameGame = function isRobloxSubgameGame(gameRecord) {
  let someResult = gameRecord.id !== RobloxSubgameTypes.ROBLOX_GAME_ID;
  if (someResult) {
    const thirdPartySkus = gameRecord.thirdPartySkus;
    someResult = thirdPartySkus.some((distributor) => distributor.distributor === constants.ROBLOX);
  }
  return someResult;
};
export const openRobloxURLWithRootPlaceId = function openRobloxURLWithRootPlaceId() {
  return obj(...arguments);
};
export const maybeTransformRobloxSubgameToRoblox = function maybeTransformRobloxSubgameToRoblox(distributor) {
  let tmp2 = distributor;
  if (distributor.distributor === metroRequire.ROBLOX) {
    tmp2 = distributor;
    const tmp3 = require;
    if (distributor.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID) {
      obj = { id: tmp3(4968).ROBLOX_APPLICATION_ID, name: hasOwnProperty[tmp.ROBLOX] };
      const merged = Object.assign(distributor);
      tmp2 = obj;
    }
  }
  return tmp2;
};
