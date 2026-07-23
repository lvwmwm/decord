// Module ID: 10188
// Function ID: 78674
// Name: _addChannelToFavorites
// Dependencies: [5, 1351, 3831, 1212, 9395, 10189, 1934, 2944, 9397, 2]
// Exports: default

// Module 10188 (_addChannelToFavorites)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
        obj.label = intl2.string(importDefault(2944).TN4nAX);
        obj.IconComponent = channelId(9395).StarIcon;
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
          obj.label = intl.string(importDefault(2944).G9fGlP);
          obj.IconComponent = channelId(9397).StarOutlineIcon;
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
