// Module ID: 16054
// Function ID: 123314
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16054 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelDelete(channel) {
  const result = arg1(dependencyMap[5]).removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = arg1(dependencyMap[5]).setFavoriteCategoryCollapsed(id.id, true);
}
function handleCategoryExpand(id) {
  const result = arg1(dependencyMap[5]).setFavoriteCategoryCollapsed(id.id, false);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = arg1(dependencyMap[5]).setAllFavoriteCategoriesCollapsed(true);
    const obj2 = arg1(dependencyMap[5]);
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = arg1(dependencyMap[5]).setAllFavoriteCategoriesCollapsed(false);
    const obj2 = arg1(dependencyMap[5]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class FavoriteManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, FavoriteManager);
      items1 = [...items];
      obj = closure_5(FavoriteManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { CHANNEL_DELETE: closure_8, CATEGORY_COLLAPSE: closure_9, CATEGORY_EXPAND: closure_10, CATEGORY_COLLAPSE_ALL: closure_11, CATEGORY_EXPAND_ALL: closure_12 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = FavoriteManager;
  callback2(FavoriteManager, arg0);
  return callback(FavoriteManager);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default tmp2;
