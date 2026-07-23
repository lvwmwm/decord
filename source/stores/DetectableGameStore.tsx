// Module ID: 4162
// Function ID: 35152
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4153, 653, 4156, 664, 4163, 587, 477, 4164, 21, 1327, 1881, 675, 3803, 566, 686, 2]

// Module 4162 (_isNativeReflectConstruct)
import ME from "ME";
import ApplicationTypes from "ApplicationTypes";
import PermissionOverwriteType from "PermissionOverwriteType";
import explicitContentFromProto from "explicitContentFromProto";
import initialize from "initialize";
import _callSuper from "_callSuper";
import { createExecutable } from "_callSuper";
import { AnalyticEvents } from "ME";
import { ApplicationTypes } from "ApplicationTypes";
import importDefaultResult from "CachedEntriesMap";
import { Storage } from "Storage";
import set from "set";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function gameFromServer(value) {
  const obj = { id: value.id, name: value.name };
  let executables = value.executables;
  if (null == executables) {
    executables = [];
  }
  obj.executables = executables.map(createExecutable);
  const overlay = value.overlay;
  obj.overlay = null != overlay && overlay;
  const overlay_warn = value.overlay_warn;
  obj.overlayWarn = null != overlay_warn && overlay_warn;
  const overlay_compatibility_hook = value.overlay_compatibility_hook;
  obj.overlayCompatibilityHook = null != overlay_compatibility_hook && overlay_compatibility_hook;
  const hook = value.hook;
  obj.hook = null == hook || hook;
  let aliases = value.aliases;
  if (null == aliases) {
    aliases = [];
  }
  obj.aliases = aliases;
  obj.supportsOutOfProcessOverlay = _callSuper.supportsOutOfProcessOverlay(value.overlay_methods);
  let themes = value.themes;
  if (null == themes) {
    themes = [];
  }
  obj.themes = themes;
  const icon_hash = value.icon_hash;
  let tmp;
  if (null != icon_hash) {
    tmp = icon_hash;
  }
  obj.icon = tmp;
  let third_party_skus = value.third_party_skus;
  if (null == third_party_skus) {
    third_party_skus = [];
  }
  obj.thirdPartySkus = third_party_skus;
  const cover_image_hash = value.cover_image_hash;
  let tmp2;
  if (null != cover_image_hash) {
    tmp2 = cover_image_hash;
  }
  obj.cover_image_hash = tmp2;
  const content_classification = value.content_classification;
  let tmp3;
  if (null != content_classification) {
    tmp3 = content_classification;
  }
  obj.content_classification = tmp3;
  return obj;
}
function convertGameRecordToGame(id) {
  let thirdPartySkus;
  const obj = { id: id.id, name: id.name, executables: id.executables, overlayWarn: id.overlayWarn, overlayCompatibilityHook: id.overlayCompatibilityHook, overlay: id.overlay, hook: id.hook, aliases: id.aliases, supportsOutOfProcessOverlay: id.supportsOutOfProcessOverlay };
  let themes = id.themes;
  if (null == themes) {
    themes = [];
  }
  obj.themes = themes;
  ({ icon: obj.icon, thirdPartySkus } = id);
  if (null == thirdPartySkus) {
    thirdPartySkus = [];
  }
  obj.thirdPartySkus = thirdPartySkus;
  const cover_image_hash = id.cover_image_hash;
  let tmp;
  if (null != cover_image_hash) {
    tmp = cover_image_hash;
  }
  obj.cover_image_hash = tmp;
  const content_classification = id.content_classification;
  let tmp2;
  if (null != content_classification) {
    tmp2 = content_classification;
  }
  obj.content_classification = tmp2;
  return obj;
}
function getExecutableBasename(str) {
  const parts = str.split(/[/\\]/);
  return parts.pop();
}
function addGameIdToNameCache(id, name) {
  if (null == dependencyMap[name]) {
    dependencyMap[name] = [];
  }
  let arr = dependencyMap[name];
  arr = arr.push(id);
}
function addDetectableGame(value) {
  let done;
  let done2;
  let id;
  let name;
  let tmp = value;
  if (value instanceof require(4164) /* _isNativeReflectConstruct */.DetectableGameRecord) {
    tmp = convertGameRecordToGame(value);
  }
  const result = importDefaultResult.set(value.id, tmp);
  ({ name, id } = tmp);
  addGameIdToNameCache(id, name.toLowerCase());
  const tmp5 = _createForOfIteratorHelperLoose(value.aliases);
  let iter = tmp5();
  if (!iter.done) {
    do {
      let str = iter.value;
      let tmp6 = addGameIdToNameCache;
      let tmp7 = addGameIdToNameCache(tmp.id, str.toLowerCase());
      let iter2 = tmp5();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  if (obj.isDesktop()) {
    const tmp9 = _createForOfIteratorHelperLoose(value.executables);
    let iter3 = tmp9();
    if (!iter3.done) {
      do {
        let tmp10 = closure_15;
        closure_15[iter3.value.name] = tmp.id;
        let iter4 = tmp9();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
  }
}
const DAY = require("set").Millis.DAY;
importDefaultResult = new importDefaultResult();
let closure_14 = Object.create(null);
let closure_15 = Object.create(null);
let set = Storage.get("GameStoreReportedGames");
if (null == set) {
  let _Object = Object;
  set = Object.create(null);
}
let c17 = "";
let c18;
let c19 = null;
let c20 = false;
let c21 = null;
let c22 = false;
let c23 = "";
let closure_24 = [];
let closure_25 = [];
const map = new Map();
const HOUR = require("set").Millis.HOUR;
set = new Set();
const set1 = new Set();
let str = "win32";
if (!set.isWindows()) {
  let str2 = "darwin";
  if (!obj2.isMac()) {
    let str3 = null;
    if (obj3.isLinux()) {
      str3 = "linux";
    }
    str2 = str3;
    obj3 = require("set");
  }
  str = str2;
  obj2 = require("set");
}
let tmp8 = ((PersistedStore) => {
  class DetectableGameStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, DetectableGameStore);
      obj = outer1_6(DetectableGameStore);
      tmp2 = outer1_5;
      if (outer1_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DetectableGameStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(detectableGamesEtag) {
      if (null != detectableGamesEtag) {
        if (null != detectableGamesEtag.detectableGamesEtag) {
          const outer1_17 = detectableGamesEtag.detectableGamesEtag;
        }
        if (null != detectableGamesEtag.blocklistEtag) {
          const outer1_23 = detectableGamesEtag.blocklistEtag;
        }
        if (null != detectableGamesEtag.blocklistExecutables) {
          const outer1_24 = detectableGamesEtag.blocklistExecutables;
        }
        if (null != detectableGamesEtag.blocklistPatterns) {
          const blocklistPatterns = detectableGamesEtag.blocklistPatterns;
          const outer1_25 = blocklistPatterns.map((arg0) => {
            const regExp = new RegExp(arg0, "i");
            return regExp;
          });
        }
        const detectableGames = detectableGamesEtag.detectableGames;
        if (null != detectableGames) {
          const item = detectableGames.forEach((arg0) => {
            outer2_38(arg0);
          });
        }
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      let obj = DetectableGameStore(outer1_2[11]);
      if (obj.isDesktop()) {
        obj = { detectableGamesEtag: outer1_17, detectableGames: outer1_13.values(), blocklistEtag: outer1_23, blocklistExecutables: outer1_24, blocklistPatterns: outer1_25.map((source) => source.source) };
      } else {
        obj = { detectableGamesEtag: "", detectableGames: [], blocklistEtag: "", blocklistExecutables: [], blocklistPatterns: [] };
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "games",
    get() {
      return outer1_13.values();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDetectableGame",
    value(id) {
      return outer1_13.get(outer1_1(outer1_2[13]).cast(id));
    }
  };
  items[4] = {
    key: "searchGamesByName",
    value(str) {
      if (null == str) {
        return [];
      } else {
        const formatted = str.toLowerCase();
        const _Object = Object;
        if (hasOwnProperty.call(outer1_14, formatted)) {
          let items = outer1_14[formatted];
        } else {
          items = [];
        }
        return items;
      }
    }
  };
  items[5] = {
    key: "findGame",
    value(id) {
      let _loopResult;
      let self = this;
      let closure_0 = id;
      let closure_1 = arg1;
      self = this;
      let detectableGame = this.getDetectableGame(id.id);
      if (null != detectableGame) {
        return detectableGame;
      } else {
        if (null != id.name) {
          function _loop() {
            const detectableGame = self.getDetectableGame(ApplicationTypes);
            if (null == detectableGame) {
              return 0;
            } else if (null != callback) {
              callback(detectableGame);
              return 0;
            } else if (null != id.exePath) {
              if (null != detectableGame.executables) {
                const parts = id.exePath.split("/");
                const found = parts.filter(DetectableGameStore(outer2_2[14]).isNotNullish);
                id = found.pop();
                const executables = detectableGame.executables;
                if (executables.some((name) => name.name === closure_0)) {
                  const obj = { v: detectableGame };
                  return obj;
                }
                const str = id.exePath;
              }
            }
          }
          const tmp3 = outer1_32(self.searchGamesByName(id.name));
          const iter = tmp3();
          let iter2 = iter;
          if (!iter.done) {
            while (true) {
              let value = iter2.value;
              _loopResult = _loop();
              if (0 !== _loopResult) {
                if (_loopResult) {
                  break;
                }
              }
              let iter3 = tmp3();
              iter2 = iter3;
            }
            return _loopResult.v;
          }
        }
        if (null != id.exePath) {
          let parts = id.exePath.split("/");
          let found = parts.filter(DetectableGameStore(outer1_2[14]).isNotNullish);
          const gameByExecutable = self.getGameByExecutable(found.pop());
          if (null != gameByExecutable) {
            return gameByExecutable;
          } else {
            const parts1 = id.exePath.split("/");
            const found1 = parts1.filter(DetectableGameStore(outer1_2[14]).isNotNullish);
            const substr = found1.slice(-2);
            const gameByExecutable1 = self.getGameByExecutable(substr.join("/"));
            if (null != gameByExecutable1) {
              return gameByExecutable1;
            }
            const str3 = id.exePath;
          }
          let str = id.exePath;
        }
        if (tmp6) {
          const result = self.trackNameMatchFallback(id.name, closure_2, id.exePath);
        }
        return closure_2;
      }
    }
  };
  items[6] = {
    key: "getOfficialGame",
    value: function getOfficialGame(type) {
      const self = this;
      if (null == type) {
        return null;
      } else {
        if (type.type === outer1_11.GAME) {
          let id = type.id;
        } else {
          const linkedGames = type.linkedGames;
          if (null != linkedGames) {
            const found = linkedGames.find((type) => type.type === DetectableGameStore(outer2_2[15]).GameLinkTypes.OFFICIAL);
            if (null != found) {
              id = found.id;
            }
          }
        }
        let detectableGame = null;
        if (null != id) {
          detectableGame = self.getDetectableGame(id);
        }
        return detectableGame;
      }
    }
  };
  items[7] = {
    key: "getGameByApplication",
    value: function getGameByApplication(id) {
      let self = this;
      self = this;
      const detectableGame = this.getDetectableGame(id.id);
      if (null != detectableGame) {
        return detectableGame;
      } else {
        let tmp4;
        let str2 = "none";
        if (null != id.linkedGames) {
          const tmp3 = outer1_32(id.linkedGames);
          let iter = tmp3();
          str2 = "none";
          if (!iter.done) {
            const detectableGame1 = self.getDetectableGame(iter.value.id);
            tmp4 = detectableGame1;
            str2 = "linked_game";
            while (null == detectableGame1) {
              let iter2 = tmp3();
              iter = iter2;
              str2 = "none";
              if (iter2.done) {
                break;
              }
            }
          }
        }
        let str3 = str2;
        let tmp6 = tmp4;
        if (null == tmp4) {
          const mapped = self.searchGamesByName(id.name).map((arg0) => self.getDetectableGame(arg0));
          const first = mapped.reverse()[0];
          tmp6 = tmp4;
          str3 = str2;
          if (null != first) {
            str3 = "name";
            tmp6 = first;
          }
          const searchGamesByNameResult = self.searchGamesByName(id.name);
        }
        const result = self.maybeTrackApplicationLookupFallthrough(id, str3, tmp6);
        return tmp6;
      }
    }
  };
  items[8] = {
    key: "isGameInDatabase",
    value: function isGameInDatabase(nativeProcessObserverId) {
      let tmp = null != this.findGame(nativeProcessObserverId);
      if (!tmp) {
        let tmp2 = undefined !== nativeProcessObserverId.nativeProcessObserverId;
        if (tmp2) {
          tmp2 = !(2147483648 & nativeProcessObserverId.nativeProcessObserverId);
        }
        tmp = tmp2;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "fetching",
    get() {
      return true === outer1_18;
    }
  };
  items[10] = {
    key: "detectableGamesEtag",
    get() {
      return outer1_17;
    }
  };
  items[11] = {
    key: "blocklistEtag",
    get() {
      return outer1_23;
    }
  };
  items[12] = {
    key: "lastFetched",
    get() {
      return outer1_19;
    }
  };
  items[13] = {
    key: "hasAttemptedFetch",
    get() {
      return outer1_20;
    }
  };
  items[14] = {
    key: "detectableGamesTtl",
    get() {
      return outer1_12;
    }
  };
  items[15] = {
    key: "canFetchDetectableGames",
    value: function canFetchDetectableGames() {
      let tmp = true !== outer1_18;
      if (tmp) {
        let tmp4 = null == outer1_19;
        if (!tmp4) {
          const _Date = Date;
          tmp4 = Date.now() >= outer1_19 + outer1_12;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "canFetchExecutableBlocklist",
    value: function canFetchExecutableBlocklist() {
      let tmp = !outer1_22;
      if (!outer1_22) {
        let tmp4 = null == outer1_21;
        if (!tmp4) {
          const _Date = Date;
          tmp4 = Date.now() >= outer1_21 + outer1_12;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[17] = {
    key: "getGameByExecutable",
    value: function getGameByExecutable(found) {
      const self = this;
      if (null != found) {
        return self.getDetectableGame(outer1_15[found]);
      }
    }
  };
  items[18] = {
    key: "shouldBlock",
    value: function shouldBlock(exePath) {
      const self = this;
      let closure_0 = exePath;
      if (null != exePath.exePath) {
        if ("" !== exePath.exePath) {
          let closure_1 = exePath.exePath.toLowerCase();
          if (null != exePath.id) {
            if (null != outer1_30) {
              const detectableGame = self.getDetectableGame(exePath.id);
              if (null != detectableGame) {
                const executables = detectableGame.executables;
                if (executables.some((os) => {
                  let endsWithResult = os.os === outer2_30;
                  if (endsWithResult) {
                    endsWithResult = closure_1.endsWith(os.name.toLowerCase());
                    const str = os.name;
                  }
                  return endsWithResult;
                })) {
                  return false;
                }
              }
            }
          }
          const found = outer1_24.find((arg0) => closure_1.includes(arg0));
          if (null != found) {
            self.maybeTrackBlock(exePath, "explicit_list", found);
            return true;
          } else {
            const found1 = outer1_25.find((test) => test.test(exePath.exePath));
            let flag = null != found1;
            if (flag) {
              self.maybeTrackBlock(exePath, "pattern_match", found1.source);
              flag = true;
            }
            return flag;
          }
          const str4 = exePath.exePath;
        }
      }
      return false;
    }
  };
  items[19] = {
    key: "getBlockReason",
    value: function getBlockReason(exePath) {
      let closure_0 = exePath;
      if (null != exePath.exePath) {
        if ("" !== exePath.exePath) {
          let closure_1 = exePath.exePath.toLowerCase();
          const found = outer1_24.find((arg0) => closure_1.includes(arg0));
          if (null != found) {
            let obj = { matchedExe: found, matchedPattern: null };
            return obj;
          } else {
            const found1 = outer1_25.find((test) => test.test(exePath.exePath));
            let tmp5 = null;
            if (null != found1) {
              obj = { matchedExe: null, matchedPattern: found1.source };
              tmp5 = obj;
            }
            return tmp5;
          }
          const str = exePath.exePath;
        }
      }
      return null;
    }
  };
  items[20] = {
    key: "maybeTrackApplicationLookupFallthrough",
    value: function maybeTrackApplicationLookupFallthrough(id, match_type, id2) {
      id = id.id;
      if (!outer1_28.has(id)) {
        outer1_28.add(id);
        let obj = outer1_1(outer1_2[16]);
        obj = { application_id: id };
        let name = id.name;
        let tmp7 = null;
        if (null != name) {
          tmp7 = name;
        }
        obj.application_name = tmp7;
        obj.match_type = match_type;
        id = undefined;
        if (null != id2) {
          id = id2.id;
        }
        let tmp10 = null;
        if (null != id) {
          tmp10 = id;
        }
        obj.matched_game_id = tmp10;
        name = undefined;
        if (null != id2) {
          name = id2.name;
        }
        let tmp12 = null;
        if (null != name) {
          tmp12 = name;
        }
        obj.matched_game_name = tmp12;
        obj.track(outer1_10.GAME_APPLICATION_LOOKUP_FALLTHROUGH, obj);
      }
    }
  };
  items[21] = {
    key: "trackNameMatchFallback",
    value: function trackNameMatchFallback(name, closure_2, exePath) {
      const formatted = name.toLowerCase();
      if (!outer1_29.has(formatted)) {
        outer1_29.add(formatted);
        let tmp5 = null != exePath;
        if (tmp5) {
          tmp5 = "" !== exePath;
        }
        let obj = outer1_1(outer1_2[16]);
        obj = { matched_name: name, matched_game_id: closure_2.id };
        let tmp10 = null;
        if (tmp5) {
          const tmp12 = outer1_36(exePath);
          tmp10 = null;
          if (null != tmp12) {
            tmp10 = tmp12;
          }
        }
        obj.exe_name = tmp10;
        obj.had_exe_path = tmp5;
        obj.track(outer1_10.GAME_NAME_MATCH_FALLBACK, obj);
      }
    }
  };
  items[22] = {
    key: "maybeTrackBlock",
    value: function maybeTrackBlock(exePath, explicit_list, found) {
      const tmp = outer1_36(exePath.exePath);
      let str = "unknown";
      if (null != tmp) {
        str = tmp;
      }
      const value = outer1_26.get(str);
      const timestamp = Date.now();
      let tmp4 = null == value;
      if (!tmp4) {
        tmp4 = timestamp - value >= outer1_27;
      }
      if (tmp4) {
        const result = outer1_26.set(str, timestamp);
        let obj = outer1_1(outer1_2[16]);
        obj = { block_type: explicit_list, matched_entry: found };
        let origGameName = exePath.gameName;
        if (null == origGameName) {
          origGameName = exePath.origGameName;
        }
        obj.game_name = origGameName;
        obj.executable_name = str;
        obj.track(outer1_10.GAME_BLOCKLIST_TRIGGERED, obj);
      }
    }
  };
  items[23] = {
    key: "shouldReport",
    value: function shouldReport(name) {
      const self = this;
      if (this.shouldBlock(name)) {
        return false;
      } else {
        let tmp2 = null != self.findGame(name);
        let tmp3 = null != name.name;
        if (tmp3) {
          tmp3 = null != outer1_16[name.name];
        }
        const ShowCurrentGame = DetectableGameStore(outer1_2[17]).ShowCurrentGame;
        let setting = ShowCurrentGame.getSetting();
        if (setting) {
          setting = !outer1_18;
        }
        if (setting) {
          if (!tmp2) {
            tmp2 = tmp3;
          }
          setting = !tmp2;
        }
        return setting;
      }
    }
  };
  items[24] = {
    key: "markGameReported",
    value: function markGameReported(arg0) {
      outer1_16[arg0] = true;
      const Storage = DetectableGameStore(outer1_2[10]).Storage;
      const result = Storage.set("GameStoreReportedGames", outer1_16);
    }
  };
  return callback(DetectableGameStore, items);
})(require("initialize").PersistedStore);
tmp8.displayName = "GameStore";
tmp8.persistKey = "GameStore";
let items = [
  (arg0) => {
    let detectableGames;
    if (null != arg0) {
      let obj = {};
      ({ detectableGamesEtag: obj2.detectableGamesEtag, detectableGames } = arg0);
      let mapped;
      if (null != detectableGames) {
        mapped = detectableGames.map((aliases) => {
          const detectableGameRecord = new outer1_0(outer1_2[12]).DetectableGameRecord(aliases);
          return outer1_35(detectableGameRecord);
        });
      }
      if (null == mapped) {
        mapped = [];
      }
      obj.detectableGames = mapped;
    } else {
      obj = { detectableGamesEtag: "", detectableGames: [] };
    }
    return obj;
  },
  (arg0) => {
    let tmp = arg0;
    let obj = require(477) /* set */;
    if (!obj.isDesktop()) {
      obj = { detectableGamesEtag: "", detectableGames: [] };
      tmp = obj;
    }
    return tmp;
  },
  () => ({ detectableGamesEtag: "", detectableGames: [] }),
  (blocklistEtag) => {
    const obj = {};
    const merged = Object.assign(blocklistEtag);
    blocklistEtag = blocklistEtag.blocklistEtag;
    let str = "";
    if (null != blocklistEtag) {
      str = blocklistEtag;
    }
    obj["blocklistEtag"] = str;
    let blocklistExecutables = blocklistEtag.blocklistExecutables;
    if (null == blocklistExecutables) {
      blocklistExecutables = [];
    }
    obj["blocklistExecutables"] = blocklistExecutables;
    let blocklistPatterns = blocklistEtag.blocklistPatterns;
    if (null == blocklistPatterns) {
      blocklistPatterns = [];
    }
    obj["blocklistPatterns"] = blocklistPatterns;
    return obj;
  }
];
tmp8.migrations = items;
set = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(detectableApplications) {
    let done;
    importDefaultResult.clear();
    let closure_14 = Object.create(null);
    let closure_15 = Object.create(null);
    const tmp2 = _createForOfIteratorHelperLoose(detectableApplications.detectableApplications);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = addDetectableGame;
        let tmp4 = addDetectableGame(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  GAMES_DATABASE_FETCH: function handleApplicationsFetch() {
    let c18 = true;
  },
  GAMES_DATABASE_FETCH_FAIL: function handleApplicationsFetchFail() {
    let c18 = false;
    let c20 = true;
  },
  GAMES_DATABASE_UPDATE: function handleDetectableGamesUpdated(etag) {
    let done;
    etag = etag.etag;
    let tmp = null != etag;
    if (tmp) {
      tmp = etag !== etag;
    }
    if (tmp) {
      importDefaultResult.clear();
      const _Object = Object;
      let closure_14 = Object.create(null);
      const _Object2 = Object;
      let closure_15 = Object.create(null);
    }
    const tmp6 = _createForOfIteratorHelperLoose(etag.games);
    let iter = tmp6();
    if (!iter.done) {
      do {
        let tmp7 = addDetectableGame;
        let tmp8 = gameFromServer;
        let tmp9 = addDetectableGame(gameFromServer(iter.value));
        let iter2 = tmp6();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    let c18;
    let closure_19 = Date.now();
    let c20 = true;
  },
  GAMES_BLOCKLIST_FETCH: function handleGamesBlocklistFetch() {
    let c22 = true;
  },
  GAMES_BLOCKLIST_FETCH_FAIL: function handleGamesBlocklistFetchFail() {
    let c22 = false;
  },
  GAMES_BLOCKLIST_UPDATE: function handleGamesBlocklistUpdated(arg0) {
    let etag;
    let executables;
    let patterns;
    ({ executables, patterns, etag } = arg0);
    let tmp = null != etag;
    if (tmp) {
      tmp = etag !== etag;
    }
    if (tmp) {
      let closure_24 = executables.map((str) => str.toLowerCase());
      let closure_25 = patterns.map((arg0) => {
        const regExp = new RegExp(arg0, "i");
        return regExp;
      });
    }
    let c22 = false;
    let closure_21 = Date.now();
  }
};
tmp8 = new tmp8(require("dispatcher"), set);
let result = set.fileFinishedImporting("stores/DetectableGameStore.tsx");

export default tmp8;
export { gameFromServer };
