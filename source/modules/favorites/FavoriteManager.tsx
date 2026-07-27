// Module ID: 16257
// Function ID: 126129
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 10151, 1841, 5078, 2]

// Module 16257 (_isNativeReflectConstruct)
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import isFavoritesGuildId from "isFavoritesGuildId";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelDelete(channel) {
  const result = require(10151) /* _createForOfIteratorHelperLoose */.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = require(10151) /* _createForOfIteratorHelperLoose */.setFavoriteCategoryCollapsed(id.id, true);
}
function handleCategoryExpand(id) {
  const result = require(10151) /* _createForOfIteratorHelperLoose */.setFavoriteCategoryCollapsed(id.id, false);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(10151) /* _createForOfIteratorHelperLoose */.setAllFavoriteCategoriesCollapsed(true);
    const obj2 = require(10151) /* _createForOfIteratorHelperLoose */;
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(10151) /* _createForOfIteratorHelperLoose */.setAllFavoriteCategoriesCollapsed(false);
    const obj2 = require(10151) /* _createForOfIteratorHelperLoose */;
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default tmp2;
