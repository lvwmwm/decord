// Module ID: 14899
// Function ID: 113678
// Dependencies: [31, 1351, 653, 33, 14897, 1324, 14882, 10152, 566, 14900, 14884, 1212, 14901, 9351, 689, 2]

// Module 14899
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FAVORITES } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(14897)(FAVORITES);
  }
};
const memoResult = require("result").memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  let obj = require(14882) /* UnreadIndicator */;
  const tmp = importDefault(1324)("GuildsBarFavorites");
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = require(10152) /* computeFavoritesAccess */.useIsFavoritesGuildSelected();
  const obj2 = require(10152) /* computeFavoritesAccess */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getFavoriteChannels());
  const obj3 = require(566) /* initialize */;
  ({ badge, unread } = importDefault(14900)(stateFromStores));
  const tmp5 = importDefault(14900)(stateFromStores);
  ({ badge: badge2, cutouts } = importDefault(14884)({ mentionCount: badge }));
  obj = { selected: isFavoritesGuildSelected };
  let tmp9 = !tmp;
  const tmp6 = importDefault(14884)({ mentionCount: badge });
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
  obj.expandedChildren = jsx(require(14901) /* HomeDrawerFavoritesRowExpandedChildren */.HomeDrawerFavoritesRowExpandedChildren, {});
  obj = {};
  const colors = importDefault(689).colors;
  obj.color = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  obj.children = jsx(require(9351) /* StarIcon */.StarIcon, {});
  return tmp7(importDefault(14882), obj);
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
