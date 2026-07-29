// Module ID: 10213
// Function ID: 10214
// Name: _addChannelToFavorites
// Dependencies: [32, 5, 3890, 1236, 9419, 10214, 1959, 10221, 2969, 9421, 2]
// Exports: default

// Module 10213 (_addChannelToFavorites)
import _slicedToArray from "_slicedToArray";
import getNextPositionFromChannels from "getNextPositionFromChannels";

const require = arg1;
function _addChannelToFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp2;
              let closure_1 = tmp5;
              closure_1 = undefined;
              dependencyMap = undefined;
              v0 = undefined;
              const obj1 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
              const intl = callback(outer1_2[3]).intl;
              obj1[1] = intl.string(callback(outer1_2[3]).t["4tSWQg"]);
              obj1[2] = callback(outer1_2[4]).StarIcon;
              outer1_1(outer1_2[2]).open(obj1);
              const items = [callback(outer1_2[6])(outer1_2[5], outer1_2.paths), callback(outer1_2[6])(outer1_2[7], outer1_2.paths)];
              v0 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = Promise.all(items);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            dependencyMap = v0(closure_1, 2);
            v0 = 32;
            if (!5.getIsFavoritesGuildEnabled()) {
              const result = v0.setFavoritesGuildVisibility(true, "channel_context_menu");
            }
            v0.addFavoriteChannel(callback, null, "channel_context_menu");
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c4 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _addChannelToFavorites = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeChannelFromFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, removeFavoriteChannel) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw removeFavoriteChannel;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = removeFavoriteChannel;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw removeFavoriteChannel;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = removeFavoriteChannel;
              return obj;
            } else {
              let closure_1 = tmp2;
              paths = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(paths[6])(paths[5], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw removeFavoriteChannel;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = removeFavoriteChannel;
            return obj;
          } else {
            const result = removeFavoriteChannel.removeFavoriteChannel(callback);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _removeChannelFromFavorites = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("dispatcher").fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(channelId) {
  channelId = channelId.channelId;
  let tmp4 = null;
  if (channelId.hasFavoritesAccess) {
    tmp4 = null;
    if (tmp) {
      if (tmp2) {
        let obj = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        const intl2 = channelId(1236).intl;
        obj[0] = intl2.string(importDefault(2969).TN4nAX);
        obj[1] = channelId(9419).StarIcon;
        obj[3] = function onPress() {
          return (function removeChannelFromFavorites(channelId) {
            const self = this;
            const apply = closure_6.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(channelId);
        };
        let tmp5 = obj;
      } else {
        tmp5 = null;
        if (!tmp3) {
          obj = { label: null, IconComponent: null, onPress: null };
          const intl = channelId(1236).intl;
          obj[0] = intl.string(importDefault(2969).G9fGlP);
          obj[1] = channelId(9421).StarOutlineIcon;
          obj[2] = function onPress() {
            return (function addChannelToFavorites(channelId) {
              const self = this;
              const apply = closure_5.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(channelId);
          };
          tmp5 = obj;
        }
      }
    }
  }
  return tmp4;
};
