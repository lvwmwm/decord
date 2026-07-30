// Module ID: 14963
// Function ID: 14964
// Dependencies: [19, 1375, 676, 21, 14961, 1348, 14946, 10211, 589, 14964, 14948, 1236, 14965, 9415, 712, 2]

// Module 14963
import initializeFromUserSettings from "initializeFromUserSettings";
import { FAVORITES } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(14961)(FAVORITES);
  }
};
const memoResult = require("noop").memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  const tmp3 = importDefault(1348)("GuildsBarFavorites");
  let obj = require(14946) /* UnreadIndicator */;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const tmp = importDefault;
  const isFavoritesGuildSelected = require(10211) /* useFavoritesAccess */.useIsFavoritesGuildSelected();
  const obj2 = require(10211) /* useFavoritesAccess */;
  const items = [initializeFromUserSettings];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const obj3 = require(589) /* initialize */;
  ({ badge, unread } = importDefault(14964)(stateFromStores));
  const tmp8 = importDefault(14964)(stateFromStores);
  ({ badge: badge2, cutouts } = importDefault(14948)({ mentionCount: badge }));
  obj = { selected: isFavoritesGuildSelected, circle: null, unread: null, styles: null, cutouts: null, overState: "Boolean", config: "RangeError", label: "prototype", externalChildren: "ReferenceError", expandedChildren: "prototype", children: "RegExp" };
  let tmp12 = !tmp3;
  const tmp9 = importDefault(14948)({ mentionCount: badge });
  if (!tmp3) {
    tmp12 = !isFavoritesGuildSelected;
  }
  obj[1] = tmp12;
  obj[2] = unread;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[6] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[8] = badge2;
  obj[9] = jsx(require(14965) /* HomeDrawerFavoritesRowExpandedChildren */.HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = tmp(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[10] = jsx(require(9415) /* StarIcon */.StarIcon, { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  return jsx(importDefault(14946), { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
