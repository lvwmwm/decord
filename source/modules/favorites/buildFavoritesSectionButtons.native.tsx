// Module ID: 10179
// Function ID: 78610
// Name: _addChannelToFavorites
// Dependencies: []
// Exports: default

// Module 10179 (_addChannelToFavorites)
function _addChannelToFavorites() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _addChannelToFavorites = obj;
  return obj(...arguments);
}
function _removeChannelFromFavorites() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _removeChannelFromFavorites = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/favorites/buildFavoritesSectionButtons.native.tsx");

export default function buildFavoritesSectionButtons(channelId) {
  const arg1 = channelId.channelId;
  let tmp4 = null;
  if (channelId.hasFavoritesAccess) {
    tmp4 = null;
    if (tmp) {
      if (tmp2) {
        let obj = {};
        const intl2 = arg1(dependencyMap[3]).intl;
        obj.label = intl2.string(importDefault(dependencyMap[7]).TN4nAX);
        obj.IconComponent = arg1(dependencyMap[4]).StarIcon;
        obj.isDestructive = true;
        obj.onPress = function onPress() {
          return function removeChannelFromFavorites(channelId) {
            return callback(...arguments);
          }(channelId);
        };
        let tmp5 = obj;
      } else {
        tmp5 = null;
        if (!tmp3) {
          obj = {};
          const intl = arg1(dependencyMap[3]).intl;
          obj.label = intl.string(importDefault(dependencyMap[7]).G9fGlP);
          obj.IconComponent = arg1(dependencyMap[8]).StarOutlineIcon;
          obj.onPress = function onPress() {
            return function addChannelToFavorites(channelId) {
              return callback(...arguments);
            }(channelId);
          };
          tmp5 = obj;
        }
      }
    }
  }
  return tmp4;
};
