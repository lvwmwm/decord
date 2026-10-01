// Module ID: 15905
// Function ID: 15906
// Name: GuildsEmpty
// Dependencies: [32, 19, 17, 502, 2067, 4655, 1074, 21, 4836, 576, 4832, 12205, 15906, 1115, 5279, 5281, 1486, 563, 8230, 1249, 2070, 4694, 5438, 14629, 2]

// Module 15905 (GuildsEmpty)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12205 */;
import AssetRegistryDefault from "AssetRegistry" /* 15906 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function handleJoinGuild() {
  const obj = CreateGuildModalActionCreatorsDefault;
  const result = obj.openGuildJoinServerScreen();
}
function handleCreateGuild() {
  const obj = CreateGuildModalActionCreatorsDefault;
  obj.openCreateGuildModal();
}
class GuildsEmptyContent {
  constructor(contentContainerStyle) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let obj2;
    let obj5;
    contentContainerStyle = contentContainerStyle.contentContainerStyle;
    const tmp = closure_15();
    const obj = { alwaysBounceVertical: false, bounces: false, style: tmp.scrollView, contentContainerStyle: items, children: authStore2(metroRequire, obj2) };
    items = [tmp.scrollViewContentContainer, contentContainerStyle];
    obj2 = { children: items4 };
    const obj3 = { style: tmp.content, children: items1 };
    const obj4 = { style: tmp.illustrationWrapper, children: map1(hasOwnProperty, obj5) };
    obj5 = { source: AssetRegistryDefault, style: tmp.illustration };
    items1 = [map1(metroRequire, obj4), ];
    const obj6 = { style: tmp.textWrapper, children: items3 };
    const obj7 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: intl.string(intl5.t["Y7Ml/I"]) };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    const Heading = Text_Text.Heading;
    intl = intl5.intl;
    items3 = [map1(Heading, obj7), ];
    const obj8 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl2.string(intl5.t.kuyE4r) };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    items3[1] = map1(Text, obj8);
    items1[1] = authStore2(metroRequire, obj6);
    items4 = [authStore2(metroRequire, obj3), ];
    const obj9 = { style: tmp.buttonContainer, spacing: 12, children: items5 };
    const Stack = Stack_Stack.Stack;
    const obj10 = { size: "lg", text: intl3.string(intl5.t.riOUtB), onPress: handleJoinGuild };
    const Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items5 = [map1(Button, obj10), ];
    const obj11 = { size: "lg", variant: "secondary", text: intl4.string(intl5.t["BetvT+"]), onPress: handleCreateGuild };
    const Button2 = components_Button_Button.Button;
    intl4 = intl5.intl;
    items5[1] = map1(Button2, obj11);
    items4[1] = authStore2(Stack, obj9);
    return map1(metroImportDefault, obj);
  }
}
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ ME: unpackModuleId, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: obj2, header: obj3, headerTitle: { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" }, scrollViewContentContainer: obj4, headerInner: { flex: 1, flexDirection: "row", alignItems: "center" }, content: obj5, illustrationWrapper: { width: "100%", paddingHorizontal: 36 }, illustration: obj6, buttonContainer: obj7, textWrapper: obj8, headerText: obj9, text: { textAlign: "center" } };
obj2 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj6 = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
obj7 = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj8 = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
obj9 = { fontSize: 18, marginBottom: 8 };
const merged = Object.assign(Text_Text.TextStyleSheet["heading-md/bold"]);
let closure_15 = createStyles(obj);
const memoResult = react.memo(function GuildsEmpty(arg0) {
  let Text;
  let intl;
  let items2;
  let items3;
  let obj6;
  let obj7;
  let selectedGuildId;
  let sessionId;
  let style;
  navigation = undefined;
  selectedGuildId = undefined;
  ({ selectedGuildId, style } = arg0);
  const tmp = closure_15();
  const obj = navigation(1486);
  navigation = obj.useNavigation();
  let obj2 = navigation(563);
  const items = [AuthenticationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  let obj3 = { type: tmp2(1249).ImpressionTypes.VIEW, name: tmp2(1249).ImpressionNames.GUILDS_EMPTY_NUX };
  const tmp7 = selectedGuildId(8230);
  tmp7(obj3);
  const items1 = [tmp6, navigation];
  const effect = react.useEffect(() => {
    if (null != selectedGuildId) {
      const obj2 = navigation;
      if (null != navigation) {
        if (selectedGuildId !== unpackModuleId) {
          const obj3 = FavoritesUtils;
          const tmp10 = require;
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== closure_12) {
              let guild = GuildStore.getGuild(tmp);
              if (guild == null) {
                guild = obj4.getGuild(SelectedGuildStore.getGuildId());
              }
              if (guild == null) {
                guild = obj4.getGuild(SelectedGuildStore.getLastSelectedGuildId());
              }
              if (guild == null) {
                const guilds = obj4.getGuilds();
                guild = guilds[obj4.getGuildIds(obj4)[0]];
              }
              if (null != guild) {
                const tmp10Result = tmp10(4694);
                let closure_0 = _slicedToArray(tmp10Result.getInitialGuildState(guild.id, undefined, false), 2)[1];
                obj2.dispatch(() => {
                  const CommonActions = navigation(closure_2_2[16]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
              }
            }
          }
        }
      }
    }
  }, items1);
  const tmp2Result = navigation(5438);
  const isScreenLandscape = tmp2Result.useIsScreenLandscape();
  navigation(14629);
  let tmp14Result = null;
  if (stateFromStores) {
    const obj4 = { style: items2, children: items3 };
    items2 = [tmp.header, style];
    const obj5 = { style: tmp.headerTitle, children: closure_13(closure_6, obj6) };
    obj6 = { style: tmp.headerInner, children: closure_13(Text, obj7) };
    obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl.string(navigation(1115).t["7hB4kg"]) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items3 = [closure_13(closure_6, obj5), ];
    let tmp18;
    const tmp14 = closure_14;
    const tmp15 = closure_6;
    const tmp16 = closure_13;
    const tmp17 = GuildsEmptyContent;
    if (isScreenLandscape) {
      tmp18 = { paddingBottom: tmp12 };
      const obj8 = { paddingBottom: tmp12 };
    }
    const obj9 = { contentContainerStyle: tmp18 };
    items3[1] = tmp16(tmp17, obj9);
    tmp14Result = tmp14(tmp15, obj4);
  }
  return tmp14Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default memoResult;
export { GuildsEmptyContent };
