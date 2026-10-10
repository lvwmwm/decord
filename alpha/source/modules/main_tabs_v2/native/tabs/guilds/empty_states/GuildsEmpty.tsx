// Module ID: 16699
// Function ID: 16700
// Name: GuildsEmpty
// Dependencies: [32, 19, 17, 502, 2087, 4939, 1085, 21, 5092, 587, 5088, 12431, 558, 576, 16700, 1126, 5379, 5377, 1504, 573, 1273, 8971, 2090, 4978, 8326, 15352, 2]

// Module 16699 (GuildsEmpty)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12431 */;
import CheersSpotIllustration from "CheersSpotIllustration" /* 16700 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2087 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let closure_12;
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
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ ME: c10, MOBILE_GUILD_UPSELL_LIST: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
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
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsEmptyContent(contentContainerStyle) {
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  const obj = react2;
  const cResult = obj.c(34);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp4 = closure_14();
  if (cResult[0] === contentContainerStyle) {
    let tmp6;
    let tmp8;
    let tmp11;
    if (cResult[1] === tmp4.scrollViewContentContainer) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    const content = tmp4.content;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = authStore2(CheersSpotIllustration.CheersSpotIllustration, { width: 245, accessible: false });
      cResult[3] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4.illustrationWrapper) {
      const obj2 = { style: tmp4.illustrationWrapper, children: tmp8 };
      const tmp14 = authStore2(hasOwnProperty, obj2);
      cResult[4] = tmp4.illustrationWrapper;
      cResult[5] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.headerText) {
      let tmp16;
      let tmp17;
      let tmp19;
      let tmp22;
      let tmp24;
      if (cResult[7] === tmp4.text) {
        tmp16 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(intl5.t["Y7Ml/I"]);
        cResult[9] = stringResult;
        tmp17 = stringResult;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== tmp16) {
        const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp16, children: tmp17 };
        const tmp21 = authStore2(Text_Text.Heading, obj3);
        cResult[10] = tmp16;
        cResult[11] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      const _Symbol3 = Symbol;
      const text = tmp4.text;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(intl5.t.kuyE4r);
        cResult[12] = stringResult1;
        tmp22 = stringResult1;
      } else {
        tmp22 = cResult[12];
      }
      if (cResult[13] !== tmp4.text) {
        const obj4 = { color: "text-default", variant: "text-md/medium", style: text, children: tmp22 };
        const tmp26 = authStore2(Text_Text.Text, obj4);
        cResult[13] = tmp4.text;
        cResult[14] = tmp26;
        tmp24 = tmp26;
      } else {
        tmp24 = cResult[14];
      }
      if (cResult[15] === tmp4.textWrapper) {
        if (cResult[16] === tmp24) {
          let tmp27;
          if (cResult[17] === tmp19) {
            tmp27 = cResult[18];
          }
          if (cResult[19] === tmp4.content) {
            if (cResult[20] === tmp27) {
              let tmp31;
              let tmp35;
              let tmp39;
              let tmp43;
              if (cResult[21] === tmp11) {
                tmp31 = cResult[22];
              }
              const _Symbol4 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { size: "lg", text: intl3.string(intl5.t.riOUtB), onPress: handleJoinGuild };
                const Button = tmp(5379).Button;
                intl3 = tmp(1126).intl;
                const tmp38 = authStore2(Button, obj5);
                cResult[23] = tmp38;
                tmp35 = tmp38;
              } else {
                tmp35 = cResult[23];
              }
              const _Symbol5 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { size: "lg", variant: "secondary", text: intl4.string(intl5.t["BetvT+"]), onPress: handleCreateGuild };
                const Button2 = tmp(5379).Button;
                intl4 = tmp(1126).intl;
                const tmp42 = authStore2(Button2, obj6);
                cResult[24] = tmp42;
                tmp39 = tmp42;
              } else {
                tmp39 = cResult[24];
              }
              if (cResult[25] !== tmp4.buttonContainer) {
                const obj7 = { style: tmp4.buttonContainer, spacing: 12, children: items };
                items = [tmp35, tmp39];
                const tmp45 = map1(Stack_Stack.Stack, obj7);
                cResult[25] = tmp4.buttonContainer;
                cResult[26] = tmp45;
                tmp43 = tmp45;
              } else {
                tmp43 = cResult[26];
              }
              if (cResult[27] === tmp31) {
                let tmp46;
                if (cResult[28] === tmp43) {
                  tmp46 = cResult[29];
                }
                if (cResult[30] === tmp4.scrollView) {
                  if (cResult[31] === tmp46) {
                    let tmp50;
                    if (cResult[32] === tmp6) {
                      tmp50 = cResult[33];
                    }
                    return tmp50;
                  }
                }
                const obj8 = { alwaysBounceVertical: false, bounces: false, style: tmp5, contentContainerStyle: tmp6, children: tmp46 };
                const tmp53 = authStore2(metroRequire, obj8);
                cResult[30] = tmp4.scrollView;
                cResult[31] = tmp46;
                cResult[32] = tmp6;
                cResult[33] = tmp53;
                tmp50 = tmp53;
              }
              const obj9 = { children: items1 };
              items1 = [tmp31, tmp43];
              const tmp49 = map1(hasOwnProperty, obj9);
              cResult[27] = tmp31;
              cResult[28] = tmp43;
              cResult[29] = tmp49;
              tmp46 = tmp49;
            }
          }
          const obj10 = { style: content, children: items2 };
          items2 = [tmp11, tmp27];
          const tmp34 = map1(hasOwnProperty, obj10);
          cResult[19] = tmp4.content;
          cResult[20] = tmp27;
          cResult[21] = tmp11;
          cResult[22] = tmp34;
          tmp31 = tmp34;
        }
      }
      const obj11 = { style: tmp15, children: items3 };
      items3 = [tmp19, tmp24];
      const tmp30 = map1(hasOwnProperty, obj11);
      cResult[15] = tmp4.textWrapper;
      cResult[16] = tmp24;
      cResult[17] = tmp19;
      cResult[18] = tmp30;
      tmp27 = tmp30;
    }
    const items4 = [, ];
    ({ text: arr2[0], headerText: arr2[1] } = tmp4);
    cResult[6] = tmp4.headerText;
    cResult[7] = tmp4.text;
    cResult[8] = items4;
    tmp16 = items4;
  }
  const items5 = [tmp4.scrollViewContentContainer, contentContainerStyle];
  cResult[0] = contentContainerStyle;
  cResult[1] = tmp4.scrollViewContentContainer;
  cResult[2] = items5;
  tmp6 = items5;
}) : (function GuildsEmptyContent(contentContainerStyle) {
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
  const tmp = closure_14();
  const obj = { alwaysBounceVertical: false, bounces: false, style: tmp.scrollView, contentContainerStyle: items, children: map1(hasOwnProperty, obj2) };
  items = [tmp.scrollViewContentContainer, contentContainerStyle];
  const obj3 = { style: tmp.content, children: items1 };
  items1 = [, ];
  obj2 = { children: items4 };
  const obj4 = { style: tmp.illustrationWrapper, children: authStore2(CheersSpotIllustration.CheersSpotIllustration, { width: 245, accessible: false }) };
  items1[0] = authStore2(hasOwnProperty, obj4);
  const obj5 = { style: tmp.textWrapper, children: items3 };
  const obj6 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: intl.string(intl5.t["Y7Ml/I"]) };
  items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items3 = [authStore2(Heading, obj6), ];
  const obj7 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl2.string(intl5.t.kuyE4r) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items3[1] = authStore2(Text, obj7);
  items1[1] = map1(hasOwnProperty, obj5);
  items4 = [map1(hasOwnProperty, obj3), ];
  const obj8 = { style: tmp.buttonContainer, spacing: 12, children: items5 };
  const Stack = Stack_Stack.Stack;
  const obj9 = { size: "lg", text: intl3.string(intl5.t.riOUtB), onPress: handleJoinGuild };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items5 = [authStore2(Button, obj9), ];
  const obj10 = { size: "lg", variant: "secondary", text: intl4.string(intl5.t["BetvT+"]), onPress: handleCreateGuild };
  const Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items5[1] = authStore2(Button2, obj10);
  items4[1] = map1(Stack, obj8);
  return authStore2(metroRequire, obj);
});
let closure_17 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsEmpty(style) {
  let intl;
  let items1;
  let sessionId;
  let tmp11;
  let tmp6;
  let tmp7;
  const tmp = navigation;
  const obj = navigation(576);
  const cResult = obj.c(25);
  style = style.style;
  let selectedGuildId = style.selectedGuildId;
  const tmp4 = closure_14();
  let obj2 = navigation(1504);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function p() {
      return null != sessionId.getSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  let tmp10 = null;
  if (stateFromStores) {
    tmp10 = selectedGuildId;
  }
  selectedGuildId = tmp10;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { type: tmp(1273).ImpressionTypes.VIEW, name: tmp(1273).ImpressionNames.GUILDS_EMPTY_NUX };
    cResult[2] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[2];
  }
  selectedGuildId(8971)(tmp11);
  if (cResult[3] === tmp10) {
    let tmp13;
    let tmp14;
    if (cResult[4] === navigation) {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    const effect = react.useEffect(tmp13, tmp14);
    const tmpResult3 = tmp(8326);
    const isScreenLandscape = tmpResult3.useIsScreenLandscape();
    const tmpResult4 = tmp(15352);
    const youBarTotalHeight = tmpResult4.useYouBarTotalHeight();
    let tmp19 = null;
    if (stateFromStores) {
      if (cResult[7] === style) {
        let tmp20;
        let tmp21;
        let tmp24;
        if (cResult[8] === tmp4.header) {
          tmp20 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl.string(tmp(1126).t["7hB4kg"]) };
          const Text = tmp(5088).Text;
          intl = tmp(1126).intl;
          const tmp23 = closure_12(Text, obj4);
          cResult[10] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== tmp4.headerInner) {
          const obj5 = { style: tmp4.headerInner, children: tmp21 };
          const tmp27 = closure_12(closure_5, obj5);
          cResult[11] = tmp4.headerInner;
          cResult[12] = tmp27;
          tmp24 = tmp27;
        } else {
          tmp24 = cResult[12];
        }
        if (cResult[13] === tmp4.headerTitle) {
          let tmp28;
          if (cResult[14] === tmp24) {
            tmp28 = cResult[15];
          }
          if (cResult[16] === isScreenLandscape) {
            let tmp32;
            let tmp34;
            if (cResult[17] === youBarTotalHeight) {
              tmp32 = cResult[18];
            }
            if (cResult[19] !== tmp32) {
              const obj6 = { contentContainerStyle: tmp32 };
              const tmp37 = closure_12(closure_17, obj6);
              cResult[19] = tmp32;
              cResult[20] = tmp37;
              tmp34 = tmp37;
            } else {
              tmp34 = cResult[20];
            }
            if (cResult[21] === tmp34) {
              if (cResult[22] === tmp20) {
                let tmp38;
                if (cResult[23] === tmp28) {
                  tmp38 = cResult[24];
                }
                tmp19 = tmp38;
              }
            }
            const obj7 = { style: tmp20, children: items1 };
            items1 = [tmp28, tmp34];
            const tmp41 = closure_13(closure_5, obj7);
            cResult[21] = tmp34;
            cResult[22] = tmp20;
            cResult[23] = tmp28;
            cResult[24] = tmp41;
            tmp38 = tmp41;
          }
          let tmp33;
          if (isScreenLandscape) {
            tmp33 = { paddingBottom: youBarTotalHeight };
            const obj8 = { paddingBottom: youBarTotalHeight };
          }
          cResult[16] = isScreenLandscape;
          cResult[17] = youBarTotalHeight;
          cResult[18] = tmp33;
          tmp32 = tmp33;
        }
        const obj9 = { style: tmp4.headerTitle, children: tmp24 };
        const tmp31 = closure_12(closure_5, obj9);
        cResult[13] = tmp4.headerTitle;
        cResult[14] = tmp24;
        cResult[15] = tmp31;
        tmp28 = tmp31;
      }
      const items2 = [tmp4.header, style];
      cResult[7] = style;
      cResult[8] = tmp4.header;
      cResult[9] = items2;
      tmp20 = items2;
    }
    return tmp19;
  }
  const fn2 = function w() {
    if (null != selectedGuildId) {
      const obj2 = navigation;
      if (null != navigation) {
        if (selectedGuildId !== authStore) {
          const obj3 = FavoritesUtils;
          const tmp10 = require;
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== unpackModuleId) {
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
                const tmp10Result = tmp10(4978);
                let closure_0 = _slicedToArray(tmp10Result.getInitialGuildState(guild.id, undefined, false), 2)[1];
                obj2.dispatch(() => {
                  const CommonActions = navigation(closure_2_2[18]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
              }
            }
          }
        }
      }
    }
  };
  const items3 = [tmp10, navigation];
  cResult[3] = tmp10;
  cResult[4] = navigation;
  cResult[5] = fn2;
  cResult[6] = items3;
  tmp14 = items3;
  tmp13 = fn2;
}) : (function GuildsEmpty(arg0) {
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
  const tmp = closure_14();
  const obj = navigation(1504);
  navigation = obj.useNavigation();
  let obj2 = navigation(573);
  const items = [AuthenticationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  let obj3 = { type: tmp2(1273).ImpressionTypes.VIEW, name: tmp2(1273).ImpressionNames.GUILDS_EMPTY_NUX };
  const tmp7 = selectedGuildId(8971);
  tmp7(obj3);
  const items1 = [tmp6, navigation];
  const effect = react.useEffect(() => {
    if (null != selectedGuildId) {
      const obj2 = navigation;
      if (null != navigation) {
        if (selectedGuildId !== authStore) {
          const obj3 = FavoritesUtils;
          const tmp10 = require;
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== unpackModuleId) {
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
                const tmp10Result = tmp10(4978);
                let closure_0 = _slicedToArray(tmp10Result.getInitialGuildState(guild.id, undefined, false), 2)[1];
                obj2.dispatch(() => {
                  const CommonActions = navigation(closure_2_2[18]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
              }
            }
          }
        }
      }
    }
  }, items1);
  const tmp2Result = navigation(8326);
  const isScreenLandscape = tmp2Result.useIsScreenLandscape();
  navigation(15352);
  let tmp14Result = null;
  if (stateFromStores) {
    const obj4 = { style: items2, children: items3 };
    items2 = [tmp.header, style];
    const obj5 = { style: tmp.headerTitle, children: closure_12(closure_5, obj6) };
    obj6 = { style: tmp.headerInner, children: closure_12(Text, obj7) };
    obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl.string(navigation(1126).t["7hB4kg"]) };
    Text = tmp2(5088).Text;
    intl = tmp2(1126).intl;
    items3 = [closure_12(closure_5, obj5), ];
    let tmp18;
    const tmp14 = closure_13;
    const tmp15 = closure_5;
    const tmp16 = closure_12;
    const tmp17 = closure_17;
    if (isScreenLandscape) {
      tmp18 = { paddingBottom: tmp12 };
      const obj8 = { paddingBottom: tmp12 };
    }
    const obj9 = { contentContainerStyle: tmp18 };
    items3[1] = tmp16(tmp17, obj9);
    tmp14Result = tmp14(tmp15, obj4);
  }
  return tmp14Result;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default memoResult;
export const GuildsEmptyContent = tmp7;
