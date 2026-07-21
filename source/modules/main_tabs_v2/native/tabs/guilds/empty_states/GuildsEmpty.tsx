// Module ID: 14967
// Function ID: 112658
// Name: handleJoinGuild
// Dependencies: []

// Module 14967 (handleJoinGuild)
function handleJoinGuild() {
  const result = importDefault(dependencyMap[11]).openGuildJoinServerScreen();
}
function handleCreateGuild() {
  importDefault(dependencyMap[11]).openCreateGuildModal();
}
class GuildsEmptyContent {
  constructor(arg0) {
    tmp = jsxs();
    obj = { top: null, y: null };
    obj.style = tmp.scrollView;
    items = [, ];
    items[0] = tmp.scrollViewContentContainer;
    items[1] = global.contentContainerStyle;
    obj.contentContainerStyle = items;
    obj = {};
    obj1 = { style: tmp.content };
    obj2 = { style: tmp.illustrationWrapper };
    obj3 = { source: importDefault(dependencyMap[12]), style: tmp.illustration };
    obj2.children = jsx(Image, obj3);
    items1 = [, ];
    items1[0] = jsx(View, obj2);
    obj4 = { style: tmp.textWrapper };
    obj5 = { style: items2 };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    intl = arg1(dependencyMap[13]).intl;
    obj5.children = intl.string(arg1(dependencyMap[13]).t.Y7Ml/I);
    items3 = [, ];
    items3[0] = jsx(arg1(dependencyMap[10]).Heading, obj5);
    obj6 = { style: tmp.text };
    intl2 = arg1(dependencyMap[13]).intl;
    obj6.children = intl2.string(arg1(dependencyMap[13]).t.kuyE4r);
    items3[1] = jsx(arg1(dependencyMap[10]).Text, obj6);
    obj4.children = items3;
    items1[1] = jsxs(View, obj4);
    obj1.children = items1;
    items4 = [, ];
    items4[0] = jsxs(View, obj1);
    obj7 = { style: tmp.buttonContainer, spacing: 12 };
    obj8 = { size: "lg" };
    intl3 = arg1(dependencyMap[13]).intl;
    obj8.text = intl3.string(arg1(dependencyMap[13]).t.riOUtB);
    obj8.onPress = handleJoinGuild;
    items5 = [, ];
    items5[0] = jsx(arg1(dependencyMap[15]).Button, obj8);
    obj9 = {};
    intl4 = arg1(dependencyMap[13]).intl;
    obj9.text = intl4.string(arg1(dependencyMap[13]).t.BetvT+);
    obj9.onPress = handleCreateGuild;
    items5[1] = jsx(arg1(dependencyMap[15]).Button, obj9);
    obj7.children = items5;
    items4[1] = jsxs(arg1(dependencyMap[14]).Stack, obj7);
    obj.children = items4;
    obj.children = jsxs(View, obj);
    return jsx(ScrollView, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ ME: closure_11, FAVORITES: closure_12, MOBILE_GUILD_UPSELL_LIST: closure_13 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { borderTopLeftRadius: importDefault(dependencyMap[9]).radii.xxl, borderTopRightRadius: importDefault(dependencyMap[9]).radii.sm };
obj.scrollView = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.header = obj1;
obj.headerTitle = { y: "<string:410141890>", COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: "<string:402653184>", y: "<string:1358954496>", SlashIcon: "<string:1091642574>", y: true };
const obj2 = { "Null": false, "Null": false, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.scrollViewContentContainer = obj2;
obj.headerInner = { "Null": null, "Null": "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Null": true };
const obj3 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
obj.content = obj3;
obj.illustrationWrapper = { <string:2892040516>: 15, <string:2181768798>: "unit_id_in_range_by_hash" };
const obj4 = { -9223372036854775808: 4, 0: 8, marginBottom: importDefault(dependencyMap[9]).space.PX_24 };
obj.illustration = obj4;
const tmp4 = arg1(dependencyMap[7]);
obj.buttonContainer = { paddingBottom: importDefault(dependencyMap[9]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
const obj5 = { paddingBottom: importDefault(dependencyMap[9]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.textWrapper = { marginHorizontal: importDefault(dependencyMap[9]).space.PX_16, marginVertical: importDefault(dependencyMap[9]).space.PX_24 };
const obj7 = {};
const merged = Object.assign(arg1(dependencyMap[10]).TextStyleSheet.heading-md/bold);
obj7["fontSize"] = 18;
obj7["marginBottom"] = 8;
obj.headerText = obj7;
obj.text = { textAlign: "center" };
let closure_16 = obj1.createStyles(obj);
const obj6 = { marginHorizontal: importDefault(dependencyMap[9]).space.PX_16, marginVertical: importDefault(dependencyMap[9]).space.PX_24 };
const memoResult = importAllResult.memo(function GuildsEmpty(arg0) {
  let selectedGuildId;
  let style;
  let importDefault;
  ({ selectedGuildId, style } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[16]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  let obj1 = arg1(dependencyMap[17]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = selectedGuildId;
  }
  importDefault = tmp4;
  obj = { type: arg1(dependencyMap[19]).ImpressionTypes.VIEW, name: arg1(dependencyMap[19]).ImpressionNames.GUILDS_EMPTY_NUX };
  importDefault(dependencyMap[18])(obj);
  const items1 = [tmp4, navigation];
  const effect = importAllResult.useEffect(() => {
    if (null != tmp4) {
      if (null != navigation) {
        if (tmp4 !== closure_11) {
          if (tmp4 !== closure_12) {
            if (tmp4 !== closure_13) {
              let guild = store.getGuild(tmp4);
              if (null == guild) {
                guild = store.getGuild(store2.getGuildId());
              }
              if (null == guild) {
                guild = store.getGuild(store2.getLastSelectedGuildId());
              }
              if (null == guild) {
                const guilds = store.getGuilds();
                guild = guilds[closure_9.getGuildIds(closure_9)[0]];
              }
              if (null != guild) {
                const navigation = callback(navigation(closure_2[20]).getInitialGuildState(guild.id, undefined, false), 2)[1];
                navigation.dispatch(() => {
                  const CommonActions = callback(closure_2[16]).CommonActions;
                  return CommonActions.reset(callback);
                });
                const obj = navigation(closure_2[20]);
              }
            }
          }
        }
      }
    }
  }, items1);
  let obj3 = arg1(dependencyMap[21]);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  arg1(dependencyMap[22]);
  let tmp12Result = null;
  if (stateFromStores) {
    obj = {};
    const items2 = [tmp.header, style];
    obj.style = items2;
    obj1 = { style: tmp.headerTitle };
    const obj2 = { style: tmp.headerInner };
    obj3 = { "Null": null, "Null": "hidden", "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images" };
    const intl = arg1(dependencyMap[13]).intl;
    obj3.children = intl.string(arg1(dependencyMap[13]).t.7hB4kg);
    obj2.children = callback(arg1(dependencyMap[10]).Text, obj3);
    obj1.children = callback(closure_6, obj2);
    const items3 = [callback(closure_6, obj1), ];
    const obj4 = {};
    let tmp23;
    if (isScreenLandscape) {
      const obj5 = { paddingBottom: tmp10 };
      tmp23 = obj5;
    }
    obj4.contentContainerStyle = tmp23;
    items3[1] = callback(GuildsEmptyContent, obj4);
    obj.children = items3;
    tmp12Result = closure_15(closure_6, obj);
    const tmp12 = closure_15;
    const tmp13 = closure_6;
    const tmp21 = callback;
    const tmp22 = GuildsEmptyContent;
  }
  return tmp12Result;
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default memoResult;
export { GuildsEmptyContent };
