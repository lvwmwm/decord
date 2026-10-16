// Module ID: 10575
// Function ID: 10576
// Name: buildFavoritesSectionButtons
// Dependencies: [5, 10561, 2002, 1128, 3447, 9787, 9785, 2]
// Exports: default

// Module 10575 (buildFavoritesSectionButtons)
import _modDef3447 from "module_3447" /* 3447 */;
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
            const obj4 = { value: require("asyncRequire")(paths[1], paths.paths), done: false };
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
            const obj4 = { value: require("asyncRequire")(paths[1], paths.paths), done: false };
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
let result = size.fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(channelId) {
  let intl;
  let intl2;
  channelId = channelId.channelId;
  let tmp2 = null;
  if (channelId.canFavoriteChannel) {
    let tmp3;
    if (channelId.isChannelInFavorites) {
      const obj2 = {
        label: intl2.string(_modDef3447.TN4nAX),
        IconComponent: channelId(9787).StarIcon,
        isDestructive: true,
        onPress() {
              function removeChannelFromFavorites() {
                return closure_1_5(...arguments);
              }
              return removeChannelFromFavorites(channelId);
            }
      };
      intl2 = channelId(1128).intl;
      tmp3 = obj2;
    } else {
      tmp3 = null;
      if (!tmp) {
        obj = {
          label: intl.string(_modDef3447.G9fGlP),
          IconComponent: channelId(9785).StarOutlineIcon,
          onPress() {
                  function addChannelToFavorites() {
                    return closure_1_4(...arguments);
                  }
                  return addChannelToFavorites(channelId);
                }
        };
        intl = channelId(1128).intl;
        tmp3 = obj;
      }
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
