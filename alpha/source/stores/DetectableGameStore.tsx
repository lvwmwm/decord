// Module ID: 2032
// Function ID: 2033
// Name: DetectableGameStore
// Dependencies: [2016, 1072, 1360, 1089, 2033, 1375, 2035, 504, 11, 1379, 1992, 1252, 572, 2]

// Module 2032 (DetectableGameStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1089 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import ApplicationRecord from "ApplicationRecord" /* 2016 */;
import CachedEntriesMapDefault from "CachedEntriesMap" /* 2033 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2035 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_18;

function gameFromServer(id) {
  let aliases;
  let executables;
  let mapped;
  let third_party_skus;
  ({ executables, aliases, third_party_skus } = id);
  const obj = { id: id.id, name: id.name, executables: mapped, aliases, thirdPartySkus: third_party_skus };
  mapped = undefined;
  if (executables != null) {
    mapped = executables.map(createExecutable);
  }
  if (null == mapped) {
    mapped = closure_24;
  }
  if (null == aliases) {
    aliases = closure_24;
  }
  if (null == third_party_skus) {
    third_party_skus = closure_24;
  }
  return obj;
}
function convertGameRecordToGame(id) {
  let aliases;
  let executables;
  let thirdPartySkus;
  ({ executables, aliases, thirdPartySkus } = id);
  const obj = { id: id.id, name: id.name, executables, aliases, thirdPartySkus };
  if (null == executables) {
    executables = closure_24;
  }
  if (null == aliases) {
    aliases = closure_24;
  }
  if (null == thirdPartySkus) {
    thirdPartySkus = closure_24;
  }
  return obj;
}
function toNameKey(item10026) {
  str = item10026.trim();
  return str.toLowerCase();
}
function addGameIdToNameCache(id, arg1) {
  const value = map.get(arg1);
  if (undefined === value) {
    const result = obj.set(arg1, id);
  } else {
    const _Array = Array;
    if (Array.isArray(value)) {
      value.push(id);
    } else {
      const items = [value, id];
      const result1 = obj.set(arg1, items);
    }
  }
}
function addDetectableGame(id) {
  let tmp = id;
  if (id instanceof GameDetectionTypes.DetectableGameRecord) {
    tmp = convertGameRecordToGame(id);
  }
  const result = closure_7.set(id.id, tmp);
  addGameIdToNameCache(tmp.id, toNameKey(tmp.name));
  const aliases = id.aliases;
  for (const item10026 of aliases) {
    let tmp7 = addGameIdToNameCache(tmp.id, toNameKey(item10026));
    continue;
  }
  const obj = PlatformUtils;
  if (obj.isDesktop()) {
    const executables = id.executables;
    for (const item10044 of executables) {
      let result1 = map1.set(item10044.name, tmp.id);
      continue;
    }
  }
}
const createExecutable = ApplicationRecord.createExecutable;
const AnalyticEvents = Constants.AnalyticEvents;
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
const DAY = DurationsDefault.Millis.DAY;
let tmp2 = new CachedEntriesMapDefault();
const metroImportDefault = tmp2;
const map = new Map();
const map1 = new Map();
let etag = "";
let c11;
let closure_12 = null;
let c13 = false;
let closure_14 = null;
let c15 = false;
etag = "";
let blocklistExecutables = [];
const authStore5 = [];
const map2 = new Map();
const HOUR = DurationsDefault.Millis.HOUR;
const set = new Set();
const set1 = new Set();
let str = "win32";
if (!PlatformUtils.isWindows()) {
  const _module1 = PlatformUtils;
  let str2 = "darwin";
  if (!_module1.isMac()) {
    const _module2 = PlatformUtils;
    let str3 = null;
    if (_module2.isLinux()) {
      str3 = "linux";
    }
    str2 = str3;
  }
  str = str2;
}
let closure_24 = Object.freeze([]);
const PersistedStore = get_initializedDefault.PersistedStore;
class DetectableGameStore extends PersistedStore {
  initialize(detectableGamesEtag) {
    if (null != detectableGamesEtag) {
      if (null != detectableGamesEtag.detectableGamesEtag) {
        etag = detectableGamesEtag.detectableGamesEtag;
      }
      if (null != detectableGamesEtag.blocklistEtag) {
        etag = detectableGamesEtag.blocklistEtag;
      }
      if (null != detectableGamesEtag.blocklistExecutables) {
        blocklistExecutables = detectableGamesEtag.blocklistExecutables;
      }
      if (null != detectableGamesEtag.blocklistPatterns) {
        const blocklistPatterns = detectableGamesEtag.blocklistPatterns;
        closure_18 = blocklistPatterns.map((item) => {
          const regExp = new RegExp(item, "i");
          return regExp;
        });
      }
      const detectableGames = detectableGamesEtag.detectableGames;
      if (detectableGames != null) {
        const item = detectableGames.forEach((item) => {
          addDetectableGame(item);
        });
      }
    }
  }
  getState() {
    let obj3;
    const f83008 = (source) => source.source;
    const obj = PlatformUtils;
    if (obj.isDesktop()) {
      obj3 = { detectableGamesEtag: etag, detectableGames: closure_7.values(), blocklistEtag: etag, blocklistExecutables, blocklistPatterns: closure_18.map(f83008) };
      const obj2 = { detectableGamesEtag: etag, detectableGames: closure_7.values(), blocklistEtag: etag, blocklistExecutables, blocklistPatterns: closure_18.map(f83008) };
    } else {
      obj3 = { detectableGamesEtag: "", detectableGames: [], blocklistEtag: "", blocklistExecutables: [], blocklistPatterns: [] };
    }
    return obj3;
  }
  getDetectableGame(id) {
    const get = closure_7.get;
    const obj = SnowflakeUtilsDefault;
    return get(obj.cast(id));
  }
  searchGamesByName(name) {
    if (null == name) {
      return [];
    } else {
      let items;
      const get = map.get;
      str = name.trim();
      const value = get(str.toLowerCase());
      if (undefined === value) {
        items = [];
      } else {
        const _Array = Array;
        items = value;
        if (!Array.isArray(value)) {
          const items1 = [value];
          items = items1;
        }
      }
      return items;
    }
  }
  findGame(nextResult, arg1) {
    _require = nextResult;
    let closure_1 = arg1;
    const self = this;
    let detectableGame = this.getDetectableGame(nextResult.id);
    if (null != detectableGame) {
      return detectableGame;
    } else {
      if (null != nextResult.name) {
        const searchGamesByNameResult = self.searchGamesByName(nextResult.name);
        function _loop() {
          detectableGame = self.getDetectableGame(closure_4);
          if (null == detectableGame) {
            return 0;
          } else if (null != closure_1) {
            tmp5(detectableGame);
            return 0;
          } else if (null != nextResult.exePath) {
            if (null != detectableGame.executables) {
              str = tmp6.exePath;
              const parts = str.split("/");
              const found = parts.filter(GlobalUtils.isNotNullish);
              const executables = detectableGame.executables;
              nextResult = found.pop();
              if (executables.some((name) => name.name === closure_0)) {
                return { v: detectableGame };
              }
            }
          }
        }
        const iter = searchGamesByNameResult[Symbol.iterator]();
        const tmp5 = iter;
        while (iter !== undefined) {
          let closure_4 = iter.next();
          let _loopResult = _loop();
          if (0 !== _loopResult) {
            if (tmp7) {
              let v = _loopResult.v;
              iter.return();
              return v;
            }
          }
          continue;
        }
      }
      if (null != nextResult.exePath) {
        str = nextResult.exePath;
        let parts = str.split("/");
        let found = parts.filter(require("GlobalUtils").isNotNullish);
        const gameByExecutable = self.getGameByExecutable(found.pop());
        const tmp15 = _require;
        const tmp16 = detectableGame;
        if (null != gameByExecutable) {
          return gameByExecutable;
        } else {
          const str3 = nextResult.exePath;
          const parts1 = str3.split("/");
          const found1 = parts1.filter(tmp15(tmp16[9]).isNotNullish);
          const substr = found1.slice(-2);
          const gameByExecutable1 = self.getGameByExecutable(substr.join("/"));
          if (null != gameByExecutable1) {
            return gameByExecutable1;
          }
        }
      }
      const tmp11 = null != detectableGame && null != nextResult.name;
      if (tmp11) {
        const result = self.trackNameMatchFallback(nextResult.name, detectableGame, nextResult.exePath);
      }
      return detectableGame;
    }
  }
  getOfficialGame(type) {
    let detectableGame = null;
    if (null != type) {
      let id;
      if (type.type === ApplicationTypes.GAME) {
        id = type.id;
      } else {
        const linkedGames = type.linkedGames;
        if (linkedGames != null) {
          const found = linkedGames.find((type) => type.type === require("Server").GameLinkTypes.OFFICIAL);
          if (found != null) {
            id = found.id;
          }
        }
      }
      detectableGame = null;
      if (null != id) {
        const self = this;
        detectableGame = this.getDetectableGame(id);
      }
    }
    return detectableGame;
  }
  getGameByApplication(id) {
    let tmp;
    const self = this;
    const detectableGame = this.getDetectableGame(id.id);
    if (null != detectableGame) {
      return detectableGame;
    } else {
      str = "none";
      if (null != id.linkedGames) {
        const linkedGames = id.linkedGames;
        for (const item10014 of linkedGames) {
          let detectableGame1 = self.getDetectableGame(item10014.id);
          if (null != detectableGame1) {
            str = "linked_game";
            tmp = detectableGame1;
            obj.return();
            break;
          }
          break;
        }
      }
      if (null == tmp) {
        const searchGamesByNameResult = self.searchGamesByName(id.name);
        const mapped = searchGamesByNameResult.map((item) => self.getDetectableGame(item));
        const first = mapped.reverse()[0];
        if (null != first) {
          str = "name";
          tmp = first;
        }
      }
      const result = self.maybeTrackApplicationLookupFallthrough(id, str, tmp);
      return tmp;
    }
  }
  isGameInDatabase(nativeProcessObserverId) {
    let tmp = null != this.findGame(nativeProcessObserverId);
    if (!tmp) {
      tmp = undefined !== nativeProcessObserverId.nativeProcessObserverId && !(2147483648 & nativeProcessObserverId.nativeProcessObserverId);
      const tmp2 = undefined !== nativeProcessObserverId.nativeProcessObserverId && !(2147483648 & nativeProcessObserverId.nativeProcessObserverId);
    }
    return tmp;
  }
  canFetchDetectableGames() {
    let tmp = true !== c11;
    if (tmp) {
      let tmp4 = null == closure_12;
      if (!tmp4) {
        const _Date = Date;
        tmp4 = Date.now() >= closure_12 + DAY;
      }
      tmp = tmp4;
    }
    return tmp;
  }
  canFetchExecutableBlocklist() {
    let tmp = !c15;
    if (tmp) {
      let tmp4 = null == closure_14;
      if (!tmp4) {
        const _Date = Date;
        tmp4 = Date.now() >= closure_14 + DAY;
      }
      tmp = tmp4;
    }
    return tmp;
  }
  getGameByExecutable(arg0) {
    if (null != arg0) {
      const self = this;
      return this.getDetectableGame(map1.get(arg0));
    }
  }
  shouldBlock(exePath) {
    if (null != exePath.exePath) {
      if ("" !== exePath.exePath) {
        const self = this;
        const str4 = exePath.exePath;
        let closure_1 = str4.toLowerCase();
        if (null != exePath.id) {
          if (null != str) {
            const detectableGame = self.getDetectableGame(exePath.id);
            if (null != detectableGame) {
              const executables = detectableGame.executables;
              if (executables.some((os) => {
                const endsWithResult = os.os === str && closure_1.endsWith(str.toLowerCase());
                return endsWithResult;
              })) {
                return false;
              }
            }
          }
        }
        const found = blocklistExecutables.find((item) => closure_1.includes(item));
        if (null != found) {
          self.maybeTrackBlock(exePath, "explicit_list", found);
          return true;
        } else {
          const found1 = closure_18.find((test) => test.test(exePath.exePath));
          let flag = null != found1;
          if (flag) {
            str = "pattern_match";
            self.maybeTrackBlock(exePath, "pattern_match", found1.source);
            flag = true;
          }
          return flag;
        }
      }
    }
    return false;
  }
  getBlockReason(exePath) {
    let closure_0 = exePath;
    if (null != exePath.exePath) {
      if ("" !== exePath.exePath) {
        str = exePath.exePath;
        let closure_1 = str.toLowerCase();
        const found = blocklistExecutables.find((item) => closure_1.includes(item));
        if (null != found) {
          return { matchedExe: found, matchedPattern: null };
        } else {
          const found1 = closure_18.find((test) => test.test(exePath.exePath));
          let tmp5 = null;
          if (null != found1) {
            tmp5 = { matchedExe: null, matchedPattern: found1.source };
            const obj = { matchedExe: null, matchedPattern: found1.source };
          }
          return tmp5;
        }
      }
    }
    return null;
  }
  maybeTrackApplicationLookupFallthrough(id, name, id2) {
    let id1;
    let name1;
    id = id.id;
    const obj = set;
    if (!set.has(id)) {
      obj.add(id);
      const obj2 = { application_id: id, application_name: name, match_type: name, matched_game_id: id1, matched_game_name: name1 };
      name = id.name;
      const track = AnalyticsUtilsDefault.track;
      const GAME_APPLICATION_LOOKUP_FALLTHROUGH = AnalyticEvents.GAME_APPLICATION_LOOKUP_FALLTHROUGH;
      AnalyticsUtilsDefault;
      if (name == null) {
        name = null;
      }
      id1 = undefined;
      if (id2 != null) {
        id1 = id2.id;
      }
      if (id1 == null) {
        id1 = null;
      }
      name1 = undefined;
      if (id2 != null) {
        name1 = id2.name;
      }
      if (name1 == null) {
        name1 = null;
      }
      track(GAME_APPLICATION_LOOKUP_FALLTHROUGH, obj2);
    }
  }
  trackNameMatchFallback(name, detectableGame, exePath) {
    let tmp11;
    const formatted = name.toLowerCase();
    const obj = set1;
    if (!set1.has(formatted)) {
      obj.add(formatted);
      const obj2 = { matched_name: name, matched_game_id: detectableGame.id, exe_name: tmp11, had_exe_path: null != exePath && "" !== exePath };
      tmp11 = null;
      const track = AnalyticsUtilsDefault.track;
      const GAME_NAME_MATCH_FALLBACK = AnalyticEvents.GAME_NAME_MATCH_FALLBACK;
      AnalyticsUtilsDefault;
      if (null != exePath && "" !== exePath) {
        const parts = exePath.split(/[/\\]/);
        let arr = parts.pop();
        if (arr == null) {
          arr = null;
        }
        tmp11 = arr;
      }
      track(GAME_NAME_MATCH_FALLBACK, obj2);
    }
  }
  maybeTrackBlock(exePath, explicit_list, found) {
    let origGameName;
    str = exePath.exePath;
    const parts = str.split(/[/\\]/);
    let str2 = parts.pop();
    if (str2 == null) {
      str2 = "unknown";
    }
    const value = map2.get(str2);
    const timestamp = Date.now();
    let tmp3 = null == value;
    const obj = map2;
    if (!tmp3) {
      tmp3 = timestamp - value >= HOUR;
    }
    if (tmp3) {
      const result = obj.set(str2, timestamp);
      const obj2 = { block_type: explicit_list, matched_entry: found, game_name: origGameName, executable_name: str2 };
      origGameName = exePath.gameName;
      const track = AnalyticsUtilsDefault.track;
      const GAME_BLOCKLIST_TRIGGERED = AnalyticEvents.GAME_BLOCKLIST_TRIGGERED;
      AnalyticsUtilsDefault;
      if (origGameName == null) {
        origGameName = exePath.origGameName;
      }
      track(GAME_BLOCKLIST_TRIGGERED, obj2);
    }
  }
}
const prototype = DetectableGameStore.prototype;
Object.defineProperty(prototype, "games", {
  get: function games() {
    return closure_7.values();
  },
  set: undefined
});
Object.defineProperty(prototype, "fetching", {
  get: function fetching() {
    return true === c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "detectableGamesEtag", {
  get: function detectableGamesEtag() {
    return etag;
  },
  set: undefined
});
Object.defineProperty(prototype, "blocklistEtag", {
  get: function blocklistEtag() {
    return etag;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetched", {
  get: function lastFetched() {
    return closure_12;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasAttemptedFetch", {
  get: function hasAttemptedFetch() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "detectableGamesTtl", {
  get: function detectableGamesTtl() {
    return DAY;
  },
  set: undefined
});
DetectableGameStore.displayName = "GameStore";
DetectableGameStore.persistKey = "GameStore";
let items = [
  (arg0) => {
    let detectableGames;
    let mapped;
    let obj;
    if (null != arg0) {
      const obj3 = { detectableGamesEtag: null, detectableGames: mapped };
      ({ detectableGamesEtag: obj2.detectableGamesEtag, detectableGames } = arg0);
      mapped = undefined;
      if (detectableGames != null) {
        mapped = detectableGames.map((item) => {
          let aliases;
          let executables;
          let thirdPartySkus;
          const detectableGameRecord = new require("GameDetectionTypes").DetectableGameRecord(item);
          ({ executables, aliases, thirdPartySkus } = detectableGameRecord);
          const obj = { id: detectableGameRecord.id, name: detectableGameRecord.name, executables, aliases, thirdPartySkus };
          if (null == executables) {
            executables = closure_1_24;
          }
          if (null == aliases) {
            aliases = closure_1_24;
          }
          if (null == thirdPartySkus) {
            thirdPartySkus = closure_1_24;
          }
          return obj;
        });
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = obj3;
    } else {
      obj = { detectableGamesEtag: "", detectableGames: [] };
    }
    return obj;
  },
  (arg0) => {
    let tmp = arg0;
    const obj = PlatformUtils;
    if (!obj.isDesktop()) {
      tmp = { detectableGamesEtag: "", detectableGames: [] };
      const obj2 = { detectableGamesEtag: "", detectableGames: [] };
    }
    return tmp;
  },
  () => ({ detectableGamesEtag: "", detectableGames: [] }),
  (blocklistEtag) => {
    let blocklistPatterns;
    const obj = { blocklistEtag: str, blocklistExecutables, blocklistPatterns };
    const merged = Object.assign(blocklistEtag);
    str = blocklistEtag.blocklistEtag;
    if (str == null) {
      str = "";
    }
    blocklistExecutables = blocklistEtag.blocklistExecutables;
    if (blocklistExecutables == null) {
      blocklistExecutables = [];
    }
    blocklistPatterns = blocklistEtag.blocklistPatterns;
    if (blocklistPatterns == null) {
      blocklistPatterns = [];
    }
    return obj;
  }
];
DetectableGameStore.migrations = items;
let obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(detectableApplications) {
    detectableApplications = detectableApplications.detectableApplications;
    closure_7.clear();
    map.clear();
    map1.clear();
    const tmp4 = detectableApplications[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp7 = addDetectableGame(tmp5);
      continue;
    }
  },
  GAMES_DATABASE_FETCH: function handleApplicationsFetch() {
    c11 = true;
  },
  GAMES_DATABASE_FETCH_FAIL: function handleApplicationsFetchFail() {
    c11 = false;
    c13 = true;
  },
  GAMES_DATABASE_UPDATE: function handleDetectableGamesUpdated(arg0) {
    let games;
    ({ games, etag } = arg0);
    const tmp = null != etag && etag !== etag;
    if (tmp) {
      closure_7.clear();
      map.clear();
      map1.clear();
    }
    const tmp9 = games[Symbol.iterator]();
    while (tmp9 !== undefined) {
      let tmp13 = addDetectableGame(gameFromServer(tmp10));
      continue;
    }
    c11 = undefined;
    closure_12 = Date.now();
    c13 = true;
  },
  GAMES_BLOCKLIST_FETCH: function handleGamesBlocklistFetch() {
    c15 = true;
  },
  GAMES_BLOCKLIST_FETCH_FAIL: function handleGamesBlocklistFetchFail() {
    c15 = false;
  },
  GAMES_BLOCKLIST_UPDATE: function handleGamesBlocklistUpdated(arg0) {
    let executables;
    let patterns;
    ({ executables, patterns, etag } = arg0);
    const tmp = null != etag && etag !== etag;
    if (tmp) {
      let closure_17 = executables.map((item) => item.toLowerCase());
      closure_18 = patterns.map((item) => {
        const regExp = new RegExp(item, "i");
        return regExp;
      });
    }
    c15 = false;
    closure_14 = Date.now();
  }
};
const detectableGameStore = new DetectableGameStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/DetectableGameStore.tsx");

export default detectableGameStore;
export { gameFromServer };
