// Module ID: 18287
// Function ID: 18288
// Name: GuildsEmpty
// Dependencies: [32, 19, 17, 4876, 502, 4880, 5040, 1072, 21, 5009, 575, 5619, 14227, 18288, 1114, 6022, 5629, 1499, 563, 6023, 1261, 4883, 5195, 8765, 17006, 2]

// Module 18287 (GuildsEmpty)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 14227 */;
import CheersSpotIllustration from "CheersSpotIllustration" /* 18288 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
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
    contentContainerStyle = contentContainerStyle.contentContainerStyle;
    const tmp = closure_15();
    const obj = { alwaysBounceVertical: false, bounces: false, style: tmp.scrollView, contentContainerStyle: items, children: authStore3(hasOwnProperty, obj2) };
    items = [tmp.scrollViewContentContainer, contentContainerStyle];
    const obj3 = { style: tmp.content, children: items1 };
    items1 = [, ];
    obj2 = { children: items4 };
    const obj4 = { style: tmp.illustrationWrapper, children: map1(CheersSpotIllustration.CheersSpotIllustration, { width: 245, accessible: false }) };
    items1[0] = map1(hasOwnProperty, obj4);
    const obj5 = { style: tmp.textWrapper, children: items3 };
    const obj6 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: intl.string(intl5.t["Y7Ml/I"]) };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    const Heading = Text_Text.Heading;
    intl = intl5.intl;
    items3 = [map1(Heading, obj6), ];
    const obj7 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl2.string(intl5.t.kuyE4r) };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    items3[1] = map1(Text, obj7);
    items1[1] = authStore3(hasOwnProperty, obj5);
    items4 = [authStore3(hasOwnProperty, obj3), ];
    const obj8 = { style: tmp.buttonContainer, spacing: 12, children: items5 };
    const Stack = Stack_Stack.Stack;
    const obj9 = { size: "lg", text: intl3.string(intl5.t.riOUtB), onPress: handleJoinGuild };
    const Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items5 = [map1(Button, obj9), ];
    const obj10 = { size: "lg", variant: "secondary", text: intl4.string(intl5.t["BetvT+"]), onPress: handleCreateGuild };
    const Button2 = components_Button_Button.Button;
    intl4 = intl5.intl;
    items5[1] = map1(Button2, obj10);
    items4[1] = authStore3(Stack, obj8);
    return map1(metroRequire, obj);
  }
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const isGuildLurker = GuildRecord.isGuildLurker;
({ ME: unpackModuleId, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: obj2, header: obj3, headerTitle: { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" }, scrollViewContentContainer: obj4, headerInner: { flex: 1, flexDirection: "row", alignItems: "center" }, content: obj5, illustrationWrapper: obj6, buttonContainer: obj7, textWrapper: obj8, headerText: obj9, text: { textAlign: "center" } };
obj2 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj6 = { width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
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
  const obj = navigation(1499);
  navigation = obj.useNavigation();
  let obj2 = navigation(563);
  const items = [AuthenticationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  let obj3 = { type: tmp2(1261).ImpressionTypes.VIEW, name: tmp2(1261).ImpressionNames.GUILDS_EMPTY_NUX };
  const tmp7 = selectedGuildId(6023);
  tmp7(obj3);
  const items1 = [tmp6, navigation];
  const effect = react.useEffect(() => {
    if (null != selectedGuildId) {
      const obj2 = navigation;
      if (null != navigation) {
        if (selectedGuildId !== unpackModuleId) {
          const obj3 = FavoritesUtils;
          const tmp23 = require;
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== authStore2) {
              let found;
              if (null != selectedGuildId) {
                const guild = GuildStore.getGuild(tmp);
                if (null != guild) {
                  if (!isGuildLurker(guild)) {
                    found = guild;
                  }
                }
              }
              if (found == null) {
                const guildId = SelectedGuildStore.getGuildId();
                let tmp9;
                if (null != guildId) {
                  const guild1 = GuildStore.getGuild(guildId);
                  if (null != guild1) {
                    if (!isGuildLurker(guild1)) {
                      tmp9 = guild1;
                    }
                  }
                }
                found = tmp9;
              }
              if (found == null) {
                const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
                let tmp15;
                if (null != lastSelectedGuildId) {
                  const guild2 = GuildStore.getGuild(lastSelectedGuildId);
                  if (null != guild2) {
                    if (!isGuildLurker(guild2)) {
                      tmp15 = guild2;
                    }
                  }
                }
                found = tmp15;
              }
              if (found == null) {
                const guildsArray = GuildStore.getGuildsArray();
                found = guildsArray.find((item) => !closure_1_7(item));
              }
              if (null != found) {
                const tmp23Result = tmp23(5195);
                let closure_0 = _slicedToArray(tmp23Result.getInitialGuildState(found.id, undefined, false), 2)[1];
                obj2.dispatch(() => {
                  const CommonActions = navigation(closure_2_2[17]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
              }
            }
          }
        }
      }
    }
  }, items1);
  const tmp2Result = navigation(8765);
  const isScreenLandscape = tmp2Result.useIsScreenLandscape();
  navigation(17006);
  let tmp14Result = null;
  if (stateFromStores) {
    const obj4 = { style: items2, children: items3 };
    items2 = [tmp.header, style];
    const obj5 = { style: tmp.headerTitle, children: closure_13(closure_5, obj6) };
    let tmp15 = closure_5;
    obj6 = { style: tmp.headerInner, children: closure_13(Text, obj7) };
    obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl.string(navigation(1114).t["7hB4kg"]) };
    Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    items3 = [closure_13(closure_5, obj5), ];
    let tmp18;
    const tmp14 = closure_14;
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
