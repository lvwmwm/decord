// Module ID: 14943
// Function ID: 113851
// Dependencies: [31, 1351, 653, 33, 14941, 1324, 14926, 10194, 566, 14944, 14928, 1212, 14945, 9395, 689, 2]

// Module 14943
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FAVORITES } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(14941)(FAVORITES);
  }
};
const memoResult = require("result").memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  let obj = require(14926) /* UnreadIndicator */;
  const tmp = importDefault(1324)("GuildsBarFavorites");
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = require(10194) /* computeFavoritesAccess */.useIsFavoritesGuildSelected();
  const obj2 = require(10194) /* computeFavoritesAccess */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getFavoriteChannels());
  const obj3 = require(566) /* initialize */;
  ({ badge, unread } = importDefault(14944)(stateFromStores));
  const tmp5 = importDefault(14944)(stateFromStores);
  ({ badge: badge2, cutouts } = importDefault(14928)({ mentionCount: badge }));
  obj = { selected: isFavoritesGuildSelected };
  let tmp9 = !tmp;
  const tmp6 = importDefault(14928)({ mentionCount: badge });
  const tmp7 = jsx;
  if (tmp9) {
    tmp9 = !isFavoritesGuildSelected;
  }
  obj.circle = tmp9;
  obj.unread = unread;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.cutouts = cutouts;
  obj.overState = undefined;
  obj.config = closure_6;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.wMWyci);
  obj.externalChildren = badge2;
  obj.expandedChildren = jsx(require(14945) /* HomeDrawerFavoritesRowExpandedChildren */.HomeDrawerFavoritesRowExpandedChildren, {});
  obj = {};
  const colors = importDefault(689).colors;
  obj.color = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  obj.children = jsx(require(9395) /* StarIcon */.StarIcon, {});
  return tmp7(importDefault(14926), obj);
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
