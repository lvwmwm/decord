// Module ID: 12550
// Function ID: 12551
// Name: GuildWelcomeActionSheet
// Dependencies: [19, 17, 5987, 2065, 2087, 4750, 12547, 12551, 1085, 1393, 1096, 21, 5092, 587, 5906, 558, 576, 504, 5421, 1112, 5056, 1415, 6156, 4764, 5088, 1200, 11359, 8579, 12549, 1265, 12481, 1126, 6898, 2]

// Module 12550 (GuildWelcomeActionSheet)
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1096 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 12547 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12549 */;
import WelcomeScreenConstants from "WelcomeScreenConstants" /* 12551 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore_mod from "EmojiStore" /* 5987 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import TextStyles_mod from "TextStyles" /* 5906 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const WelcomeScreenStore = WelcomeScreenStore2;
let c2, dependencyMap, has_custom_emojis;

let Fonts;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let EmojiStore = EmojiStore_mod;
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = WelcomeScreenConstants.WELCOME_SCREEN_TYPE;
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = Constants);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const Permissions = Constants2.Permissions;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIcon: size, header: obj3, headerGuildName: obj4, guildDescription: { textAlign: "center", marginBottom: 30 }, welcomeChannel: obj5, channelsTitle: { alignSelf: "flex-start" }, emoji: { width: 24, height: 24 }, placeholderEmojiWrapper: obj6 };
obj2 = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.sm, width: 64, height: 64, marginBottom: 16 };
obj3 = { marginBottom: 8, textAlign: "center" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 24));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj6 = { padding: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function WelcomeChannelRow(welcomeChannel) {
  let first;
  let stateFromStores;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp7;
  const tmp = welcomeChannel;
  let obj = welcomeChannel(stateFromStores[16]);
  const cResult = obj.c(39);
  welcomeChannel = welcomeChannel.welcomeChannel;
  const trackOptionSelect = welcomeChannel.trackOptionSelect;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== welcomeChannel.channel_id) {
    const fn = function o() {
      return ChannelStore.getChannel(welcomeChannel.channel_id);
    };
    cResult[1] = welcomeChannel.channel_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[17]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmp10 = trackOptionSelect(stateFromStores[18])(stateFromStores, true);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function p() {
      const canResult = null != stateFromStores && PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
      return canResult;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult3 = tmp(stateFromStores[17]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [EmojiStore];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== welcomeChannel.emoji_id) {
    const fn3 = function b() {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
      }
      return customEmojiById;
    };
    const items3 = [welcomeChannel.emoji_id];
    cResult[7] = welcomeChannel.emoji_id;
    cResult[8] = fn3;
    cResult[9] = items3;
    tmp18 = items3;
    tmp17 = fn3;
  } else {
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  const tmpResult4 = tmp(stateFromStores[17]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp15, tmp17, tmp18);
  if (cResult[10] === stateFromStores) {
    let tmp20;
    if (cResult[11] === trackOptionSelect) {
      tmp20 = cResult[12];
    }
    if (null != stateFromStores) {
      if (stateFromStores1) {
        let tmp26;
        let tmp41;
        if (null != stateFromStores2) {
          if (cResult[13] === stateFromStores2.animated) {
            let tmp34;
            let tmp37;
            if (cResult[14] === stateFromStores2.id) {
              tmp34 = cResult[15];
            }
            if (cResult[16] !== tmp34) {
              let obj2 = { uri: tmp34 };
              cResult[16] = tmp34;
              cResult[17] = obj2;
              tmp37 = obj2;
            } else {
              tmp37 = cResult[17];
            }
            if (cResult[18] === tmp4.emoji) {
              let tmp38;
              if (cResult[19] === tmp37) {
                tmp38 = cResult[20];
              }
              tmp26 = tmp38;
            }
            const obj3 = { style: tmp33, source: tmp37, resizeMode: "contain" };
            const tmp40 = closure_17(trackOptionSelect(stateFromStores[22]), obj3);
            cResult[18] = tmp4.emoji;
            cResult[19] = tmp37;
            cResult[20] = tmp40;
            tmp38 = tmp40;
          }
          const obj4 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj10.id, animated: obj10.animated } = stateFromStores2);
          const tmp9Result = trackOptionSelect(stateFromStores[21]);
          const emojiURL = tmp9Result.getEmojiURL(obj4);
          cResult[13] = stateFromStores2.animated;
          cResult[14] = stateFromStores2.id;
          cResult[15] = emojiURL;
          tmp34 = emojiURL;
        } else {
          let tmp23;
          if (null != welcomeChannel.emoji_name) {
            const getByName = trackOptionSelect(tmp2[23]).getByName;
            trackOptionSelect(stateFromStores[23]);
            const tmp9Result4 = trackOptionSelect(stateFromStores[23]);
            if (null != getByName(tmp9Result4.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              if (cResult[21] === tmp4.emoji) {
                let tmp30;
                if (cResult[22] === welcomeChannel.emoji_name) {
                  tmp30 = cResult[23];
                }
                tmp26 = tmp30;
              }
              const obj5 = { style: tmp4.emoji, variant: "text-sm/medium", children: welcomeChannel.emoji_name };
              const tmp32 = closure_17(tmp(stateFromStores[24]).Text, obj5);
              cResult[21] = tmp4.emoji;
              cResult[22] = welcomeChannel.emoji_name;
              cResult[23] = tmp32;
              tmp30 = tmp32;
            }
          }
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { size: tmp(stateFromStores[25]).Icon.Sizes.REFRESH_SMALL_16, source: trackOptionSelect(stateFromStores[26]) };
            const Icon = tmp(tmp2[25]).Icon;
            const tmp25 = closure_17(Icon, obj6);
            cResult[24] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[24];
          }
          if (cResult[25] !== tmp4.placeholderEmojiWrapper) {
            const obj7 = { style: tmp4.placeholderEmojiWrapper, children: tmp23 };
            const tmp29 = closure_17(closure_4, obj7);
            cResult[25] = tmp4.placeholderEmojiWrapper;
            cResult[26] = tmp29;
            tmp26 = tmp29;
          } else {
            tmp26 = cResult[26];
          }
        }
        if (cResult[27] !== welcomeChannel.description) {
          const obj8 = { variant: "text-sm/semibold", color: "interactive-text-active", children: welcomeChannel.description };
          const tmp43 = closure_17(tmp(stateFromStores[24]).Text, obj8);
          cResult[27] = welcomeChannel.description;
          cResult[28] = tmp43;
          tmp41 = tmp43;
        } else {
          tmp41 = cResult[28];
        }
        if (cResult[29] === stateFromStores) {
          let tmp44;
          let tmp47;
          if (cResult[30] === tmp10) {
            tmp44 = cResult[31];
          }
          const _Symbol2 = Symbol;
          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp49 = closure_17(tmp(stateFromStores[27]).FormRow.Arrow, {});
            cResult[32] = tmp49;
            tmp47 = tmp49;
          } else {
            tmp47 = cResult[32];
          }
          if (cResult[33] === tmp20) {
            if (cResult[34] === tmp26) {
              if (cResult[35] === tmp4.welcomeChannel) {
                if (cResult[36] === tmp44) {
                  let tmp50;
                  if (cResult[37] === tmp41) {
                    tmp50 = cResult[38];
                  }
                  return tmp50;
                }
              }
            }
          }
          const obj9 = { DEPRECATED_style: tmp4.welcomeChannel, leading: tmp26, label: tmp41, subLabel: tmp44, onPress: tmp20, trailing: tmp47 };
          const tmp52 = closure_17(tmp(stateFromStores[27]).FormRow, obj9);
          cResult[33] = tmp20;
          cResult[34] = tmp26;
          cResult[35] = tmp4.welcomeChannel;
          cResult[36] = tmp44;
          cResult[37] = tmp41;
          cResult[38] = tmp52;
          tmp50 = tmp52;
        }
        let tmp45 = null;
        if (null != stateFromStores) {
          const obj11 = { variant: "text-sm/medium", color: "text-default", children: tmp10 };
          tmp45 = closure_17(tmp(tmp2[24]).Text, obj11);
        }
        cResult[29] = stateFromStores;
        cResult[30] = tmp10;
        cResult[31] = tmp45;
        tmp44 = tmp45;
      }
    }
    return null;
  }
  class I {
    constructor() {
      if (null != stateFromStores) {
        trackOptionSelect();
        const obj = router_utils;
        obj.transitionTo(syncedClientThemes.CHANNEL(stateFromStores.guild_id, stateFromStores.id));
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    }
  }
  cResult[10] = stateFromStores;
  cResult[11] = trackOptionSelect;
  cResult[12] = I;
  tmp20 = I;
}) : (function WelcomeChannelRow(welcomeChannel) {
  let Icon;
  let obj12;
  let obj5;
  let obj6;
  let obj9;
  let tmp12Result;
  let tmp5Result4;
  welcomeChannel = welcomeChannel.welcomeChannel;
  const trackOptionSelect = welcomeChannel.trackOptionSelect;
  let stateFromStores;
  const tmp = closure_19();
  let obj = welcomeChannel(stateFromStores[17]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(welcomeChannel.channel_id));
  const tmp6 = trackOptionSelect(stateFromStores[18])(stateFromStores, true);
  let obj2 = welcomeChannel(stateFromStores[17]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
    return canResult;
  });
  const items2 = [EmojiStore];
  const items3 = [welcomeChannel.emoji_id];
  const obj3 = welcomeChannel(stateFromStores[17]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != welcomeChannel.emoji_id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
    }
    return customEmojiById;
  }, items3);
  const items4 = [stateFromStores, trackOptionSelect];
  let tmp12Result2 = null;
  if (null != stateFromStores) {
    tmp12Result2 = null;
    if (stateFromStores1) {
      let tmp14;
      let tmp12;
      if (null != stateFromStores2) {
        const obj4 = { style: tmp.emoji, source: obj5, resizeMode: "contain" };
        obj5 = { uri: tmp5Result4.getEmojiURL(obj6) };
        obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
        ({ id: obj11.id, animated: obj11.animated } = stateFromStores2);
        const tmp5Result = trackOptionSelect(stateFromStores[22]);
        tmp5Result4 = trackOptionSelect(stateFromStores[21]);
        tmp14 = closure_17(tmp5Result, obj4);
        tmp12 = closure_17;
      } else {
        if (null != welcomeChannel.emoji_name) {
          const getByName = tmp5(tmp3[23]).getByName;
          trackOptionSelect(stateFromStores[23]);
          const tmp5Result6 = trackOptionSelect(stateFromStores[23]);
          if (null != getByName(tmp5Result6.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
            const obj7 = { style: tmp.emoji, variant: "text-sm/medium", children: welcomeChannel.emoji_name };
            tmp14 = closure_17(tmp2(tmp3[24]).Text, obj7);
            tmp12 = closure_17;
          }
        }
        tmp12 = closure_17;
        const obj8 = { style: tmp.placeholderEmojiWrapper, children: closure_17(Icon, obj9) };
        obj9 = { size: welcomeChannel(stateFromStores[25]).Icon.Sizes.REFRESH_SMALL_16, source: trackOptionSelect(stateFromStores[26]) };
        Icon = tmp2(tmp3[25]).Icon;
        tmp14 = closure_17(closure_4, obj8);
      }
      const obj10 = { DEPRECATED_style: tmp.welcomeChannel, leading: tmp14, label: tmp12(welcomeChannel(stateFromStores[24]).Text, obj12), subLabel: tmp12Result, onPress: tmp9, trailing: tmp12(welcomeChannel(stateFromStores[27]).FormRow.Arrow, {}) };
      const FormRow = tmp2(tmp3[27]).FormRow;
      tmp12Result = null;
      obj12 = { variant: "text-sm/semibold", color: "interactive-text-active", children: welcomeChannel.description };
      if (null != stateFromStores) {
        const obj13 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
        tmp12Result = tmp12(tmp2(tmp3[24]).Text, obj13);
      }
      tmp12Result2 = tmp12(FormRow, obj10);
    }
  }
  return tmp12Result2;
});
let closure_20 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildWelcomeActionSheet(guildId) {
  let closure_6;
  let first;
  let tmp11;
  let tmp31;
  let tmp7;
  let tmp9;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(58);
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  dependencyMap = closure_19();
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [WelcomeScreenStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function j() {
      const obj = { welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() };
      return obj;
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, tmp11);
  let welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  if (cResult[6] === guildId) {
    let tmp13;
    let tmp14;
    if (cResult[7] === welcomeScreen) {
      tmp13 = cResult[8];
      tmp14 = cResult[9];
    }
    const effect = welcomeScreen.useEffect(tmp13, tmp14);
    if (cResult[10] === fetching) {
      let tmp16;
      let tmp17;
      if (cResult[11] === hasError) {
        tmp16 = cResult[12];
        tmp17 = cResult[13];
      }
      const effect1 = obj4.useEffect(tmp16, tmp17);
      if (cResult[14] === guildId) {
        let tmp19;
        let tmp20;
        let tmp29;
        let tmp28;
        if (cResult[15] === welcomeScreen) {
          tmp19 = cResult[16];
          tmp20 = cResult[17];
        }
        const effect2 = obj4.useEffect(tmp20, tmp19);
        if (cResult[18] !== welcomeScreen) {
          class D {
            constructor() {
              if (welcomeScreen === NO_WELCOME_SCREEN) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
          const items2 = [welcomeScreen];
          class O {
            constructor() {
              if (null != welcomeScreen) {
                const obj = WelcomeScreenActionCreators;
                obj.welcomeScreenViewed(guildId);
              }
            }
          }
          class R {
            constructor() {
              const tmp = false === fetching && true === hasError;
              if (tmp) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
          cResult[19] = D;
          cResult[20] = items2;
        } else {
          class D {
            constructor() {
              if (welcomeScreen === NO_WELCOME_SCREEN) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
        }
        class O {
          constructor() {
            if (null != welcomeScreen) {
              const obj = WelcomeScreenActionCreators;
              obj.welcomeScreenViewed(guildId);
            }
          }
        }
        class R {
          constructor() {
            const tmp = false === fetching && true === hasError;
            if (tmp) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        const effect3 = obj4.useEffect(tmp25, tmp26);
        if (cResult[24] !== onHide) {
          class B {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          const items3 = [onHide];
          class O {
            constructor() {
              if (null != welcomeScreen) {
                const obj = WelcomeScreenActionCreators;
                obj.welcomeScreenViewed(guildId);
              }
            }
          }
          class R {
            constructor() {
              const tmp = false === fetching && true === hasError;
              if (tmp) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
          cResult[25] = B;
          cResult[26] = items3;
          tmp29 = items3;
          tmp28 = B;
        } else {
          class B {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          tmp29 = cResult[26];
        }
        const effect4 = obj4.useEffect(tmp28, tmp29);
        if (cResult[27] === guildId) {
          class B {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          EmojiStore = tmp31;
          class O {
            constructor() {
              if (null != welcomeScreen) {
                const obj = WelcomeScreenActionCreators;
                obj.welcomeScreenViewed(guildId);
              }
            }
          }
          class R {
            constructor() {
              const tmp = false === fetching && true === hasError;
              if (tmp) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
        }
        const fn4 = function k(index) {
          if (null != welcomeScreen) {
            const items = [];
            const items1 = [];
            has_custom_emojis = false;
            const welcome_channels = tmp.welcome_channels;
            const item = welcome_channels.forEach((description) => {
              items.push(description.description);
              items1.push(description.channel_id);
              if (null != description.emoji_id) {
                c2 = true;
              }
            });
            const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
            const obj = AnalyticsUtilsDefault;
            obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
          }
        };
        cResult[27] = guildId;
        cResult[28] = welcomeScreen;
        cResult[29] = fn4;
        tmp31 = fn4;
      }
      class O {
        constructor() {
          if (null != welcomeScreen) {
            const obj = WelcomeScreenActionCreators;
            obj.welcomeScreenViewed(guildId);
          }
        }
      }
      class R {
        constructor() {
          const tmp = false === fetching && true === hasError;
          if (tmp) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      tmp21[0] = guildId;
      tmp21[1] = welcomeScreen;
      cResult[14] = guildId;
      cResult[15] = welcomeScreen;
      cResult[16] = tmp21;
      cResult[17] = O;
      tmp20 = O;
      tmp19 = tmp21;
    }
    class R {
      constructor() {
        const tmp = false === fetching && true === hasError;
        if (tmp) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }
    }
    const items4 = [fetching, hasError];
    cResult[10] = fetching;
    cResult[11] = hasError;
    cResult[12] = R;
    cResult[13] = items4;
    tmp17 = items4;
    tmp16 = R;
  }
  const fn3 = function v() {
    if (null == welcomeScreen) {
      const obj = WelcomeScreenActionCreators;
      welcomeScreen = obj.fetchWelcomeScreen(guildId);
    }
  };
  const items5 = [guildId, welcomeScreen];
  cResult[6] = guildId;
  cResult[7] = welcomeScreen;
  cResult[8] = fn3;
  cResult[9] = items5;
  tmp14 = items5;
  tmp13 = fn3;
}) : (function GuildWelcomeActionSheet(guildId) {
  let intl;
  let items9;
  let obj4;
  let obj7;
  let str;
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let tmp = closure_19();
  dependencyMap = tmp;
  let obj = guildId(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  let items1 = [WelcomeScreenStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() };
    return obj;
  });
  let welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      const obj = WelcomeScreenActionCreators;
      welcomeScreen = obj.fetchWelcomeScreen(guildId);
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    const tmp = false === fetching && true === hasError;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      const obj = WelcomeScreenActionCreators;
      obj.welcomeScreenViewed(guildId);
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === NO_WELCOME_SCREEN) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: WELCOME_SCREEN_TYPE, guild_id: guildId };
    obj.track(map1.OPEN_MODAL, obj2);
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (onHide != null) {
      tmp();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  let closure_6 = welcomeScreen.useCallback((index) => {
    if (null != welcomeScreen) {
      const items = [];
      const items1 = [];
      has_custom_emojis = false;
      const welcome_channels = tmp.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          c2 = true;
        }
      });
      const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
      const obj = AnalyticsUtilsDefault;
      obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
    }
  }, items8);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != welcomeScreen) {
      const obj3 = { startExpanded: true, children: closure_18(hasError, obj4) };
      obj4 = { contentContainerStyle: tmp.container, children: items9 };
      const ActionSheet = tmp2(6898).ActionSheet;
      const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(12481).Sizes.MEDIUM, textScale: 2 };
      const tmp17 = onHide(12481);
      items9 = [closure_17(tmp17, obj5), , , , ];
      const obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default", children: intl.format(guildId(1126).t["0aydCN"], obj7) };
      const Text = tmp2(5088).Text;
      intl = tmp2(1126).intl;
      obj7 = {
        guildName: stateFromStores.name,
        guildNameHook(children, arg1) {
              const obj = { style: has_custom_emojis.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children };
              return closure_17(Text_Text.Text, obj, arg1);
            }
      };
      items9[1] = closure_17(Text, obj6);
      const obj8 = { style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: welcomeScreen.description };
      items9[2] = closure_17(guildId(5088).Text, obj8);
      const obj9 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default", children: str.toUpperCase() };
      const Text2 = tmp2(5088).Text;
      const intl2 = tmp2(1126).intl;
      str = intl2.string(guildId(1126).t["haj5+i"]);
      items9[3] = closure_17(Text2, obj9);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel, index) => {
        let closure_0 = index;
        const obj = {
          welcomeChannel,
          trackOptionSelect() {
            return closure_6(index);
          }
        };
        return closure_1_17(closure_1_20, obj, index);
      });
      tmp12 = closure_17(ActionSheet, obj3);
    }
  }
  return tmp12;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default tmp11;
export const WelcomeChannelRow = tmp10;
