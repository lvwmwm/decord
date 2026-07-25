// Module ID: 10150
// Function ID: 78495
// Name: _addChannelToFavorites
// Dependencies: [57, 5, 3832, 1212, 9351, 10151, 1935, 10157, 2945, 9353, 2]
// Exports: default

// Module 10150 (_addChannelToFavorites)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function _addChannelToFavorites() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removeChannelFromFavorites() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("dispatcher").fileFinishedImporting("modules/favorites/buildFavoritesSectionButtons.native.tsx");

export default function buildFavoritesSectionButtons(channelId) {
  channelId = channelId.channelId;
  let tmp4 = null;
  if (channelId.hasFavoritesAccess) {
    tmp4 = null;
    if (tmp) {
      if (tmp2) {
        let obj = {};
        const intl2 = channelId(1212).intl;
        obj.label = intl2.string(importDefault(2945).TN4nAX);
        obj.IconComponent = channelId(9351).StarIcon;
        obj.isDestructive = true;
        obj.onPress = function onPress() {
          return (function removeChannelFromFavorites(channelId) {
            return outer2_6(...arguments);
          })(channelId);
        };
        let tmp5 = obj;
      } else {
        tmp5 = null;
        if (!tmp3) {
          obj = {};
          const intl = channelId(1212).intl;
          obj.label = intl.string(importDefault(2945).G9fGlP);
          obj.IconComponent = channelId(9353).StarOutlineIcon;
          obj.onPress = function onPress() {
            return (function addChannelToFavorites(channelId) {
              return outer2_5(...arguments);
            })(channelId);
          };
          tmp5 = obj;
        }
      }
    }
  }
  return tmp4;
};
