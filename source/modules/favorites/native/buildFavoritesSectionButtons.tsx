// Module ID: 9977
// Function ID: 9978
// Name: _addChannelToFavorites
// Dependencies: [5, 21, 9978, 2007, 4342, 9983, 9982, 1236, 3079, 7988, 9410, 9412, 1297, 2]
// Exports: default

// Module 9977 (_addChannelToFavorites)
import FavoritesGuildUpsellSheet from "FavoritesGuildUpsellSheet";
import { jsx } from "jsxProd";

const require = arg1;
function _addChannelToFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, addFavoriteChannels) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw addFavoriteChannels;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = addFavoriteChannels;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw addFavoriteChannels;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = addFavoriteChannels;
              return obj;
            } else {
              let closure_1 = tmp2;
              paths = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(paths[3])(paths[2], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw addFavoriteChannels;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = addFavoriteChannels;
            return obj2;
          } else {
            obj = { channelIds: null, source: "channel_context_menu" };
            const items = [callback];
            obj[0] = items;
            addFavoriteChannels.addFavoriteChannels(obj);
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1[0] = callback(paths[3])(paths[2], paths.paths);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
function openNoAccessUpsell() {
  const obj = importDefault(4342);
  obj.openLazy(require(2007) /* asyncRequireImpl */(9983, dependencyMap.paths), require(9982) /* openFavoritesGuildLimitUpsell */.FAVORITES_UPSELL_SHEET_KEY, { source: "channel_context_menu" });
}
let result = require("getNextPositionFromChannels").fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(isExperimentEnabled) {
  let importDefault;
  let require;
  ({ channelId: require, dismissBetaTag: importDefault } = isExperimentEnabled);
  let tmp6 = null;
  if (isExperimentEnabled.isExperimentEnabled) {
    tmp6 = null;
    if (tmp2) {
      if (!tmp) {
        let obj = { label: null, IconComponent: null, onPress: null };
        const intl = require(1236) /* getSystemLocale */.intl;
        obj[0] = intl.string(importDefault(3079).G9fGlP);
        obj[1] = require(7988) /* NitroWheelIcon */.NitroWheelIcon;
        obj[2] = openNoAccessUpsell;
      }
      if (tmp3) {
        obj = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        const intl3 = require(1236) /* getSystemLocale */.intl;
        obj[0] = intl3.string(importDefault(3079).TN4nAX);
        obj[1] = require(9410) /* StarIcon */.StarIcon;
        obj[3] = function onPress() {
          return (function removeChannelFromFavorites(closure_0) {
            const self = this;
            const apply = closure_6.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_0);
        };
        let tmp11 = obj;
      } else {
        tmp11 = null;
        if (!tmp4) {
          obj = { label: null, IconComponent: null, trailing: null, onPress: null };
          const intl2 = require(1236) /* getSystemLocale */.intl;
          obj[0] = intl2.string(importDefault(3079).G9fGlP);
          obj[1] = require(9412) /* StarOutlineIcon */.StarOutlineIcon;
          let tmp15;
          if (tmp5) {
            const obj1 = { size: null };
            obj1[0] = tmp12(1297).BetaSizes.SMALL;
            tmp15 = jsx(tmp12(1297).BetaTag, { size: null });
          }
          obj[2] = tmp15;
          obj[3] = function onPress() {
            callback();
            (function addChannelToFavorites(closure_0) {
              const self = this;
              const apply = closure_5.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_0);
          };
          tmp11 = obj;
        }
      }
    }
  }
  return tmp6;
};
