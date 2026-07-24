// Module ID: 15138
// Function ID: 115190
// Name: handleJoinGuild
// Dependencies: [57, 31, 27, 1194, 1838, 3947, 653, 33, 4130, 689, 4126, 11764, 15139, 1212, 4541, 4543, 1457, 624, 8604, 480, 3983, 4663, 14049, 2]

// Module 15138 (handleJoinGuild)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function handleJoinGuild() {
  const result = importDefault(11764).openGuildJoinServerScreen();
}
function handleCreateGuild() {
  importDefault(11764).openCreateGuildModal();
}
class GuildsEmptyContent {
  constructor(arg0) {
    tmp = jsxs();
    obj = { alwaysBounceVertical: false, bounces: false };
    obj.style = tmp.scrollView;
    items = [, ];
    items[0] = tmp.scrollViewContentContainer;
    items[1] = global.contentContainerStyle;
    obj.contentContainerStyle = items;
    obj = {};
    obj1 = { style: tmp.content };
    obj2 = { style: tmp.illustrationWrapper };
    obj3 = { source: require("registerAsset"), style: tmp.illustration };
    obj2.children = jsx(Image, obj3);
    items1 = [, ];
    items1[0] = jsx(View, obj2);
    obj4 = { style: tmp.textWrapper };
    obj5 = { color: "mobile-text-heading-primary", variant: "heading-md/bold" };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    obj5.style = items2;
    intl = require("getSystemLocale").intl;
    obj5.children = intl.string(require("getSystemLocale").t["Y7Ml/I"]);
    items3 = [, ];
    items3[0] = jsx(require("Text").Heading, obj5);
    obj6 = { color: "text-default", variant: "text-md/medium" };
    obj6.style = tmp.text;
    intl2 = require("getSystemLocale").intl;
    obj6.children = intl2.string(require("getSystemLocale").t.kuyE4r);
    items3[1] = jsx(require("Text").Text, obj6);
    obj4.children = items3;
    items1[1] = jsxs(View, obj4);
    obj1.children = items1;
    items4 = [, ];
    items4[0] = jsxs(View, obj1);
    obj7 = { style: tmp.buttonContainer, spacing: 12 };
    obj8 = { size: "lg" };
    intl3 = require("getSystemLocale").intl;
    obj8.text = intl3.string(require("getSystemLocale").t.riOUtB);
    obj8.onPress = handleJoinGuild;
    items5 = [, ];
    items5[0] = jsx(require("Button").Button, obj8);
    obj9 = { size: "lg", variant: "secondary" };
    intl4 = require("getSystemLocale").intl;
    obj9.text = intl4.string(require("getSystemLocale").t["BetvT+"]);
    obj9.onPress = handleCreateGuild;
    items5[1] = jsx(require("Button").Button, obj9);
    obj7.children = items5;
    items4[1] = jsxs(require("Stack").Stack, obj7);
    obj.children = items4;
    obj.children = jsxs(View, obj);
    return jsx(ScrollView, obj);
  }
}
({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ ME: closure_11, FAVORITES: closure_12, MOBILE_GUILD_UPSELL_LIST: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = {};
obj = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.xxl, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.scrollView = obj;
_createForOfIteratorHelperLoose = { zIndex: 100, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.header = _createForOfIteratorHelperLoose;
obj.headerTitle = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
let obj2 = { flexGrow: 2, justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.scrollViewContentContainer = obj2;
obj.headerInner = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj3 = { flexGrow: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", justifyContent: "center" };
obj.content = obj3;
obj.illustrationWrapper = { width: "100%", paddingHorizontal: 36 };
let obj4 = { resizeMode: "contain", alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.illustration = obj4;
obj.buttonContainer = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj5 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.textWrapper = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj7 = {};
const merged = Object.assign(require("Text").TextStyleSheet["heading-md/bold"]);
obj7["fontSize"] = 18;
obj7["marginBottom"] = 8;
obj.headerText = obj7;
obj.text = { textAlign: "center" };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj6 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
const memoResult = importAllResult.memo(function GuildsEmpty(arg0) {
  let selectedGuildId;
  let style;
  let importDefault;
  ({ selectedGuildId, style } = arg0);
  const tmp = callback3();
  let obj = navigation(1457);
  navigation = obj.useNavigation();
  let obj1 = navigation(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => null != outer1_8.getSessionId());
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = selectedGuildId;
  }
  importDefault = tmp4;
  obj = { type: navigation(480).ImpressionTypes.VIEW, name: navigation(480).ImpressionNames.GUILDS_EMPTY_NUX };
  importDefault(8604)(obj);
  const items1 = [tmp4, navigation];
  const effect = importAllResult.useEffect(() => {
    if (null != c1) {
      if (null != navigation) {
        if (c1 !== outer1_11) {
          if (c1 !== outer1_12) {
            if (c1 !== outer1_13) {
              let guild = outer1_9.getGuild(c1);
              if (null == guild) {
                guild = outer1_9.getGuild(outer1_10.getGuildId());
              }
              if (null == guild) {
                guild = outer1_9.getGuild(outer1_10.getLastSelectedGuildId());
              }
              if (null == guild) {
                const guilds = outer1_9.getGuilds();
                guild = guilds[outer1_9.getGuildIds(outer1_9)[0]];
              }
              if (null != guild) {
                navigation = outer1_3(navigation(outer1_2[20]).getInitialGuildState(guild.id, undefined, false), 2)[1];
                navigation.dispatch(() => {
                  const CommonActions = navigation(outer2_2[16]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
                const obj = navigation(outer1_2[20]);
              }
            }
          }
        }
      }
    }
  }, items1);
  let obj3 = navigation(4663);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  navigation(14049);
  let tmp12Result = null;
  if (stateFromStores) {
    obj = {};
    const items2 = [tmp.header, style];
    obj.style = items2;
    obj1 = { style: tmp.headerTitle };
    const obj2 = { style: tmp.headerInner };
    obj3 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header" };
    const intl = navigation(1212).intl;
    obj3.children = intl.string(navigation(1212).t["7hB4kg"]);
    obj2.children = callback(navigation(4126).Text, obj3);
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default memoResult;
export { GuildsEmptyContent };
