// Module ID: 15354
// Function ID: 15355
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 15355, 1395, 676, 21, 15356, 1628, 1236, 15357, 15353, 5844, 2]
// Exports: default

// Module 15354 (FavoritesGuildChannelSortModal)
import noop from "noop";
import sortCategoryList from "sortCategoryList";
import { ALL_CHANNEL_TYPES } from "createChannelRecord";
import { FAVORITES } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("createChannelRecord").fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = React.useEffect(() => {
    const guild = sortCategoryList.initGuild(closure_6);
    const items = [...closure_5];
    callback(table[5]).startReordering.apply(items);
    return () => {
      callback(15356).stopReordering();
      const obj = callback(15356);
      callback(15356).terminate();
    };
  }, []);
  const bottom = importDefault(1628)().bottom;
  let items = [bottom];
  const screens = React.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    obj = { title: null, render: null };
    const intl = bottom(outer1_2[7]).intl;
    obj[0] = intl.string(bottom(outer1_2[7]).t.OGiMXJ);
    obj[1] = function render() {
      obj = { guildId: outer1_6, contentContainerStyle: obj, onDone: null };
      obj = { paddingBottom: 16 + closure_0 };
      obj[2] = outer1_0(outer1_2[9]).closeFavoritesGuildChannelSortModal;
      return outer1_7(outer1_1(outer1_2[8]), obj);
    };
    obj[0] = obj;
    return obj;
  }, items);
  return jsx(bottom(5844).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};
