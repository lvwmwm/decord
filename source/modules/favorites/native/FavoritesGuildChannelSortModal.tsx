// Module ID: 15264
// Function ID: 15265
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 15265, 1376, 676, 21, 15266, 1609, 1236, 15267, 4509, 5783, 2]
// Exports: openFavoritesGuildChannelSortModal

// Module 15264 (FavoritesGuildChannelSortModal)
import noop from "noop";
import sortCategoryList from "sortCategoryList";
import { ALL_CHANNEL_TYPES } from "createChannelRecord";
import { FAVORITES } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function FavoritesGuildChannelSortModal() {
  const effect = React.useEffect(() => {
    const guild = sortCategoryList.initGuild(closure_6);
    const items = [...closure_5];
    callback(table[5]).startReordering.apply(items);
    return () => {
      callback(15266).stopReordering();
      const obj = callback(15266);
      callback(15266).terminate();
    };
  }, []);
  const bottom = importDefault(1609)().bottom;
  let items = [bottom];
  const screens = React.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    obj = { title: null, render: null };
    const intl = bottom(outer1_2[7]).intl;
    obj[0] = intl.string(bottom(outer1_2[7]).t.OGiMXJ);
    obj[1] = function render() {
      obj = {
        guildId: outer1_6,
        contentContainerStyle: obj,
        onDone() {
          callback(table[9]).popWithKey(closure_8);
        }
      };
      obj = { paddingBottom: 16 + closure_0 };
      return outer1_7(outer1_1(outer1_2[8]), obj);
    };
    obj[0] = obj;
    return obj;
  }, items);
  return jsx(bottom(5783).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
}
FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("createChannelRecord").fileFinishedImporting("modules/favorites/native/FavoritesGuildChannelSortModal.tsx");

export const openFavoritesGuildChannelSortModal = function openFavoritesGuildChannelSortModal() {
  importDefault(4509).pushLazy(() => Promise.resolve(closure_9), undefined, FavoritesGuildChannelSortModal);
};
