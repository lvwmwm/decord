// Module ID: 10578
// Function ID: 10579
// Name: buildFavoritesSectionButtons
// Dependencies: [5, 21, 10560, 2002, 5118, 10565, 10564, 1128, 3447, 9266, 9788, 9786, 1202, 2]
// Exports: default

// Module 10578 (buildFavoritesSectionButtons)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import _modDef3447 from "module_3447" /* 3447 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9266 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9786 */;
import StarIcon from "StarIcon" /* 9788 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 10564 */;
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
  const tmp2 = asyncRequire(10565, dependencyMap.paths);
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
            label: intl3.string(_modDef3447.TN4nAX),
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
              label: intl2.string(_modDef3447.G9fGlP),
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
              const BetaTag = tmp12(1202).BetaTag;
              tmp15 = <BetaTag size={native.BetaSizes.SMALL} />;
            }
            tmp11 = obj3;
          }
        }
        obj = tmp11;
      } else {
        obj = { label: intl.string(_modDef3447.G9fGlP), IconComponent: NitroWheelIcon.NitroWheelIcon, onPress: openNoAccessUpsell };
        intl = intl4.intl;
      }
      tmp6 = obj;
    }
  }
  return tmp6;
};
