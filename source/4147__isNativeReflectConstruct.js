// Module ID: 4147
// Function ID: 35015
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4147 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
function gameFromServer(id) {
  const obj = { id: id.id, name: id.name };
  let executables = id.executables;
  if (null == executables) {
    executables = [];
  }
  obj.executables = executables.map(createExecutable);
  const overlay = id.overlay;
  obj.overlay = null != overlay && overlay;
  const overlay_warn = id.overlay_warn;
  obj.overlayWarn = null != overlay_warn && overlay_warn;
  const overlay_compatibility_hook = id.overlay_compatibility_hook;
  obj.overlayCompatibilityHook = null != overlay_compatibility_hook && overlay_compatibility_hook;
  const hook = id.hook;
  obj.hook = null == hook || hook;
  let aliases = id.aliases;
  if (null == aliases) {
    aliases = [];
  }
  obj.aliases = aliases;
  obj.supportsOutOfProcessOverlay = closure_8.supportsOutOfProcessOverlay(id.overlay_methods);
  let themes = id.themes;
  if (null == themes) {
    themes = [];
  }
  obj.themes = themes;
  const icon_hash = id.icon_hash;
  let tmp;
  if (null != icon_hash) {
    tmp = icon_hash;
  }
  obj.icon = tmp;
  let third_party_skus = id.third_party_skus;
  if (null == third_party_skus) {
    third_party_skus = [];
  }
  obj.thirdPartySkus = third_party_skus;
  const cover_image_hash = id.cover_image_hash;
  let tmp2;
  if (null != cover_image_hash) {
    tmp2 = cover_image_hash;
  }
  obj.cover_image_hash = tmp2;
  const content_classification = id.content_classification;
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
  if (null == closure_14[name]) {
    closure_14[name] = [];
  }
  let arr = closure_14[name];
  arr = arr.push(id);
}
function addDetectableGame(id) {
  let done;
  let done2;
  let name;
  let tmp = id;
  if (id instanceof arg1(dependencyMap[12]).DetectableGameRecord) {
    tmp = convertGameRecordToGame(id);
  }
  const result = importDefaultResult.set(id.id, tmp);
  ({ name, id } = tmp);
  addGameIdToNameCache(id, name.toLowerCase());
  const tmp5 = _createForOfIteratorHelperLoose(id.aliases);
  let iter = tmp5();
  if (!iter.done) {
    do {
      let str = iter.value;
      let tmp6 = closure_37;
      let tmp7 = closure_37(tmp.id, str.toLowerCase());
      let iter2 = tmp5();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  if (obj.isDesktop()) {
    const tmp9 = _createForOfIteratorHelperLoose(id.executables);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const createExecutable = arg1(dependencyMap[5]).createExecutable;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const ApplicationTypes = arg1(dependencyMap[7]).ApplicationTypes;
const DAY = importDefault(dependencyMap[8]).Millis.DAY;
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult();
let closure_14 = Object.create(null);
let closure_15 = Object.create(null);
const Storage = arg1(dependencyMap[10]).Storage;
let obj = Storage.get("GameStoreReportedGames");
if (null == obj) {
  const _Object = Object;
  obj = Object.create(null);
}
let closure_17 = "";
let closure_18;
let closure_19 = null;
let closure_20 = false;
let closure_21 = null;
let closure_22 = false;
let closure_23 = "";
let closure_24 = [];
let closure_25 = [];
const map = new Map();
const HOUR = importDefault(dependencyMap[8]).Millis.HOUR;
const set = new Set();
const set1 = new Set();
obj = arg1(dependencyMap[11]);
let str = "win32";
if (!obj.isWindows()) {
  let str2 = "darwin";
  if (!obj2.isMac()) {
    let str3 = null;
    if (obj3.isLinux()) {
      str3 = "linux";
    }
    str2 = str3;
    const obj3 = arg1(dependencyMap[11]);
  }
  str = str2;
  const obj2 = arg1(dependencyMap[11]);
}
let tmp8 = (PersistedStore) => {
  class DetectableGameStore {
    constructor() {
      self = this;
      tmp = closure_3(this, DetectableGameStore);
      obj = closure_6(DetectableGameStore);
      tmp2 = closure_5;
      if (closure_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = DetectableGameStore;
  callback2(DetectableGameStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(detectableGamesEtag) {
      if (null != detectableGamesEtag) {
        if (null != detectableGamesEtag.detectableGamesEtag) {
          detectableGamesEtag = detectableGamesEtag.detectableGamesEtag;
        }
        if (null != detectableGamesEtag.blocklistEtag) {
          const blocklistEtag = detectableGamesEtag.blocklistEtag;
        }
        if (null != detectableGamesEtag.blocklistExecutables) {
          const blocklistExecutables = detectableGamesEtag.blocklistExecutables;
        }
        if (null != detectableGamesEtag.blocklistPatterns) {
          const blocklistPatterns = detectableGamesEtag.blocklistPatterns;
          let closure_25 = blocklistPatterns.map((arg0) => {
            const regExp = new RegExp(arg0, "i");
            return regExp;
          });
        }
        const detectableGames = detectableGamesEtag.detectableGames;
        if (null != detectableGames) {
          const item = detectableGames.forEach((arg0) => {
            callback(arg0);
          });
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      let obj = DetectableGameStore(closure_2[11]);
      if (obj.isDesktop()) {
        obj = { detectableGamesEtag: closure_17, detectableGames: closure_13.values(), blocklistEtag: closure_23, blocklistExecutables: closure_24, blocklistPatterns: closure_25.map((source) => source.source) };
      } else {
        obj = { detectableGames: [], blocklistExecutables: [], blocklistPatterns: [] };
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "games",
    get() {
      return closure_13.values();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDetectableGame",
    value(id) {
      return closure_13.get(callback(closure_2[13]).cast(id));
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
        if (hasOwnProperty.call(closure_14, formatted)) {
          let items = closure_14[formatted];
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
      const DetectableGameStore = id;
      self = this;
      const detectableGame = this.getDetectableGame(id.id);
      if (null != detectableGame) {
        return detectableGame;
      } else {
        if (null != id.name) {
          function _loop() {
            const detectableGame = self.getDetectableGame(value);
            if (null == detectableGame) {
              return 0;
            } else if (null != arg1) {
              arg1(detectableGame);
              return 0;
            } else if (null != id.exePath) {
              if (null != detectableGame.executables) {
                const parts = id.exePath.split("/");
                const found = parts.filter(id(detectableGame[14]).isNotNullish);
                const id = found.pop();
                const executables = detectableGame.executables;
                if (executables.some((name) => name.name === closure_0)) {
                  const obj = { v: detectableGame };
                  return obj;
                }
                const str = id.exePath;
              }
            }
          }
          const tmp3 = callback5(self.searchGamesByName(id.name));
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
          const parts = id.exePath.split("/");
          const found = parts.filter(DetectableGameStore(closure_2[14]).isNotNullish);
          const gameByExecutable = self.getGameByExecutable(found.pop());
          if (null != gameByExecutable) {
            return gameByExecutable;
          } else {
            const parts1 = id.exePath.split("/");
            const found1 = parts1.filter(DetectableGameStore(closure_2[14]).isNotNullish);
            const substr = found1.slice(-2);
            const gameByExecutable1 = self.getGameByExecutable(substr.join("/"));
            if (null != gameByExecutable1) {
              return gameByExecutable1;
            }
            const str3 = id.exePath;
          }
          const str = id.exePath;
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
        if (type.type === constants2.GAME) {
          let id = type.id;
        } else {
          const linkedGames = type.linkedGames;
          if (null != linkedGames) {
            const found = linkedGames.find((type) => type.type === callback(closure_2[15]).GameLinkTypes.OFFICIAL);
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
      const self = this;
      const DetectableGameStore = this;
      const detectableGame = this.getDetectableGame(id.id);
      if (null != detectableGame) {
        return detectableGame;
      } else {
        let tmp4;
        let str2 = "none";
        if (null != id.linkedGames) {
          const tmp3 = callback5(id.linkedGames);
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
      return true === closure_18;
    }
  };
  items[10] = {
    key: "detectableGamesEtag",
    get() {
      return closure_17;
    }
  };
  items[11] = {
    key: "blocklistEtag",
    get() {
      return closure_23;
    }
  };
  items[12] = {
    key: "lastFetched",
    get() {
      return closure_19;
    }
  };
  items[13] = {
    key: "hasAttemptedFetch",
    get() {
      return closure_20;
    }
  };
  items[14] = {
    key: "detectableGamesTtl",
    get() {
      return closure_12;
    }
  };
  items[15] = {
    key: "canFetchDetectableGames",
    value: function canFetchDetectableGames() {
      let tmp = true !== closure_18;
      if (tmp) {
        let tmp4 = null == closure_19;
        if (!tmp4) {
          const _Date = Date;
          tmp4 = Date.now() >= closure_19 + closure_12;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "canFetchExecutableBlocklist",
    value: function canFetchExecutableBlocklist() {
      let tmp = !closure_22;
      if (!closure_22) {
        let tmp4 = null == closure_21;
        if (!tmp4) {
          const _Date = Date;
          tmp4 = Date.now() >= closure_21 + closure_12;
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
        return self.getDetectableGame(closure_15[found]);
      }
    }
  };
  items[18] = {
    key: "shouldBlock",
    value: function shouldBlock(exePath) {
      const self = this;
      const DetectableGameStore = exePath;
      if (null != exePath.exePath) {
        if ("" !== exePath.exePath) {
          let closure_1 = exePath.exePath.toLowerCase();
          if (null != exePath.id) {
            if (null != closure_30) {
              const detectableGame = self.getDetectableGame(exePath.id);
              if (null != detectableGame) {
                const executables = detectableGame.executables;
                if (executables.some((os) => {
                  let endsWithResult = os.os === closure_30;
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
          const found = closure_24.find((arg0) => closure_1.includes(arg0));
          if (null != found) {
            self.maybeTrackBlock(exePath, "explicit_list", found);
            return true;
          } else {
            const found1 = closure_25.find((test) => test.test(test.exePath));
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
      const DetectableGameStore = exePath;
      if (null != exePath.exePath) {
        if ("" !== exePath.exePath) {
          let closure_1 = exePath.exePath.toLowerCase();
          const found = closure_24.find((arg0) => closure_1.includes(arg0));
          if (null != found) {
            let obj = { matchedExe: found, matchedPattern: null };
            return obj;
          } else {
            const found1 = closure_25.find((test) => test.test(test.exePath));
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
      if (!set.has(id)) {
        set.add(id);
        let obj = callback(closure_2[16]);
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
        obj.track(constants.GAME_APPLICATION_LOOKUP_FALLTHROUGH, obj);
      }
    }
  };
  items[21] = {
    key: "trackNameMatchFallback",
    value: function trackNameMatchFallback(name, closure_2, exePath) {
      const formatted = name.toLowerCase();
      if (!set2.has(formatted)) {
        set2.add(formatted);
        let tmp5 = null != exePath;
        if (tmp5) {
          tmp5 = "" !== exePath;
        }
        let obj = callback(closure_2[16]);
        obj = { matched_name: name, matched_game_id: closure_2.id };
        let tmp10 = null;
        if (tmp5) {
          const tmp12 = callback6(exePath);
          tmp10 = null;
          if (null != tmp12) {
            tmp10 = tmp12;
          }
        }
        obj.exe_name = tmp10;
        obj.had_exe_path = tmp5;
        obj.track(constants.GAME_NAME_MATCH_FALLBACK, obj);
      }
    }
  };
  items[22] = {
    key: "maybeTrackBlock",
    value: function maybeTrackBlock(exePath, explicit_list, found) {
      const tmp = callback6(exePath.exePath);
      let str = "unknown";
      if (null != tmp) {
        str = tmp;
      }
      const value = store.get(str);
      const timestamp = Date.now();
      let tmp4 = null == value;
      if (!tmp4) {
        tmp4 = timestamp - value >= closure_27;
      }
      if (tmp4) {
        const result = store.set(str, timestamp);
        let obj = callback(closure_2[16]);
        obj = { block_type: explicit_list, matched_entry: found };
        let origGameName = exePath.gameName;
        if (null == origGameName) {
          origGameName = exePath.origGameName;
        }
        obj.game_name = origGameName;
        obj.executable_name = str;
        obj.track(constants.GAME_BLOCKLIST_TRIGGERED, obj);
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
          tmp3 = null != closure_16[name.name];
        }
        const ShowCurrentGame = DetectableGameStore(closure_2[17]).ShowCurrentGame;
        let setting = ShowCurrentGame.getSetting();
        if (setting) {
          setting = !closure_18;
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
      closure_16[arg0] = true;
      const Storage = DetectableGameStore(closure_2[10]).Storage;
      const result = Storage.set("GameStoreReportedGames", closure_16);
    }
  };
  return callback(DetectableGameStore, items);
}(importDefault(dependencyMap[18]).PersistedStore);
tmp8.displayName = "GameStore";
tmp8.persistKey = "GameStore";
const items = [
  (arg0) => {
    let detectableGames;
    if (null != arg0) {
      let obj = {};
      ({ detectableGamesEtag: obj2.detectableGamesEtag, detectableGames } = arg0);
      let mapped;
      if (null != detectableGames) {
        mapped = detectableGames.map((aliases) => {
          const detectableGameRecord = new callback(closure_2[12]).DetectableGameRecord(aliases);
          return callback2(detectableGameRecord);
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
    let obj = arg1(dependencyMap[11]);
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
obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(detectableApplications) {
    let done;
    importDefaultResult.clear();
    let closure_14 = Object.create(null);
    let closure_15 = Object.create(null);
    const tmp2 = _createForOfIteratorHelperLoose(detectableApplications.detectableApplications);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_38;
        let tmp4 = closure_38(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  GAMES_DATABASE_FETCH: function handleApplicationsFetch() {
    let closure_18 = true;
  },
  GAMES_DATABASE_FETCH_FAIL: function handleApplicationsFetchFail() {
    let closure_18 = false;
    let closure_20 = true;
  },
  GAMES_DATABASE_UPDATE: function handleDetectableGamesUpdated(etag) {
    let done;
    etag = etag.etag;
    let tmp = null != etag;
    if (tmp) {
      tmp = closure_17 !== etag;
    }
    if (tmp) {
      importDefaultResult.clear();
      const _Object = Object;
      let closure_14 = Object.create(null);
      const _Object2 = Object;
      let closure_15 = Object.create(null);
      closure_17 = etag;
    }
    const tmp6 = _createForOfIteratorHelperLoose(etag.games);
    let iter = tmp6();
    if (!iter.done) {
      do {
        let tmp7 = closure_38;
        let tmp8 = closure_34;
        let tmp9 = closure_38(closure_34(iter.value));
        let iter2 = tmp6();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    let closure_18;
    let closure_19 = Date.now();
    let closure_20 = true;
  },
  GAMES_BLOCKLIST_FETCH: function handleGamesBlocklistFetch() {
    let closure_22 = true;
  },
  GAMES_BLOCKLIST_FETCH_FAIL: function handleGamesBlocklistFetchFail() {
    let closure_22 = false;
  },
  GAMES_BLOCKLIST_UPDATE: function handleGamesBlocklistUpdated(arg0) {
    let etag;
    let executables;
    let patterns;
    ({ executables, patterns, etag } = arg0);
    let tmp = null != etag;
    if (tmp) {
      tmp = closure_23 !== etag;
    }
    if (tmp) {
      closure_23 = etag;
      let closure_24 = executables.map((str) => str.toLowerCase());
      let closure_25 = patterns.map((arg0) => {
        const regExp = new RegExp(arg0, "i");
        return regExp;
      });
    }
    let closure_22 = false;
    let closure_21 = Date.now();
  }
};
tmp8 = new tmp8(importDefault(dependencyMap[19]), obj);
const result = arg1(dependencyMap[20]).fileFinishedImporting("stores/DetectableGameStore.tsx");

export default tmp8;
export { gameFromServer };
