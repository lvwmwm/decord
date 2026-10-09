// Module ID: 10296
// Function ID: 10297
// Name: buildFavoritesSectionButtons
// Dependencies: [5, 21, 10278, 2000, 5055, 10283, 10282, 1126, 3439, 9016, 9523, 9521, 1200, 2]
// Exports: default

// Module 10296 (buildFavoritesSectionButtons)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import _modDef3439 from "module_3439" /* 3439 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9521 */;
import StarIcon from "StarIcon" /* 9523 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 10282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3;

let obj = function _addChannelToFavorites() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let items;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[2], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          obj = { channelIds: items, source: "channel_context_menu" };
          items = [closure_0];
          value.addFavoriteChannels(obj);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _removeChannelFromFavorites() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[2], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const result = value.removeFavoriteChannel(closure_0);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
function openNoAccessUpsell() {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(10283, dependencyMap.paths);
  openLazy(tmp2, openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY, { source: "channel_context_menu" });
}
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(isExperimentEnabled) {
  let intl;
  let intl2;
  let intl3;
  let tmp15;
  ({ channelId: require, dismissBetaTag: importDefault } = isExperimentEnabled);
  let tmp6 = null;
  if (isExperimentEnabled.isExperimentEnabled) {
    tmp6 = null;
    if (tmp2) {
      if (tmp) {
        let tmp11;
        if (tmp3) {
          const obj2 = {
            label: intl3.string(_modDef3439.TN4nAX),
            IconComponent: StarIcon.StarIcon,
            isDestructive: true,
            onPress() {
                      function removeChannelFromFavorites() {
                        return closure_1_6(...arguments);
                      }
                      return removeChannelFromFavorites(require);
                    }
          };
          intl3 = intl4.intl;
          tmp11 = obj2;
        } else {
          tmp11 = null;
          if (!tmp4) {
            const obj3 = {
              label: intl2.string(_modDef3439.G9fGlP),
              IconComponent: StarOutlineIcon.StarOutlineIcon,
              trailing: tmp15,
              onPress() {
                          function addChannelToFavorites() {
                            return closure_1_5(...arguments);
                          }
                          importDefault();
                          addChannelToFavorites(require);
                        }
            };
            intl2 = intl4.intl;
            tmp15 = undefined;
            if (tmp5) {
              const BetaTag = tmp12(1200).BetaTag;
              tmp15 = <BetaTag size={native.BetaSizes.SMALL} />;
            }
            tmp11 = obj3;
          }
        }
        obj = tmp11;
      } else {
        obj = { label: intl.string(_modDef3439.G9fGlP), IconComponent: NitroWheelIcon.NitroWheelIcon, onPress: openNoAccessUpsell };
        intl = intl4.intl;
      }
      tmp6 = obj;
    }
  }
  return tmp6;
};
