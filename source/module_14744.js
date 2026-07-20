// Module ID: 14744
// Function ID: 111177
// Dependencies: []

// Module 14744
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_3, Pressable: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { flex: false, display: false, alignItems: false, marginTop: importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_PADDING };
obj.unavailableGuilds = obj;
obj1 = { width: importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_SIZE, height: importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.unavailableGuildsIcon = obj1;
let closure_7 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = callback();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => obj.totalUnavailableGuilds);
  const arg1 = stateFromStores;
  let tmp3 = null;
  if (stateFromStores > 0) {
    obj = { accessibilityRole: "button" };
    const intl = arg1(dependencyMap[7]).intl;
    obj = { count: stateFromStores };
    obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[7]).t.MEpX+2, obj);
    obj.onPress = function onPress() {
      let obj = callback(closure_2[6]);
      obj = {};
      const intl = stateFromStores(closure_2[7]).intl;
      obj.title = intl.string(stateFromStores(closure_2[7]).t.R0RpRX);
      const intl2 = stateFromStores(closure_2[7]).intl;
      obj = { count: stateFromStores };
      obj.body = intl2.format(stateFromStores(closure_2[7]).t.TnH05/, obj);
      obj.show(obj);
    };
    obj.style = tmp.unavailableGuilds;
    const obj1 = { style: tmp.unavailableGuildsIcon, source: importDefault(dependencyMap[9]) };
    obj.children = <closure_3 {...obj1} />;
    tmp3 = <closure_4 {...obj} />;
  }
  return tmp3;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;
