// Module ID: 13886
// Function ID: 13887
// Name: GuildInvite
// Dependencies: [32, 19, 17, 9164, 4856, 9084, 4934, 9098, 7109, 1084, 21, 5004, 5304, 587, 1264, 558, 576, 8597, 1125, 6939, 9163, 7256, 1502, 5303, 504, 6007, 9115, 5299, 6960, 5011, 9094, 13846, 9083, 5747, 5270, 13887, 1199, 9130, 6944, 9161, 5280, 7257, 2]

// Module 13886 (GuildInvite)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1125 */;
import NavigatorConstants from "NavigatorConstants" /* 5304 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5747 */;
import react_native from "react-native" /* 6007 */;
import TableRow2 from "TableRow" /* 6939 */;
import NavigatorHeader from "NavigatorHeader" /* 6960 */;
import CreateGuildConstants from "CreateGuildConstants" /* 7109 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7256 */;
import GroupIcon from "GroupIcon" /* 8597 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9083 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9115 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9163 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9164 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 13846 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9084 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4934 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9098 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, navigation, ref, setOptionsResult;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
({ View: hasOwnProperty, StyleSheet } = react_native2);
let closure_6 = InstantInviteSendStateStore.useInstantInviteSendStates;
let GuildChannelStore = GuildChannelStore_mod;
const CreateGuildModalStates = CreateGuildConstants.CreateGuildModalStates;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, Permissions: closure_15, SearchTypes: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 8, paddingHorizontal: 16, textAlign: "center" }, headerIllustration: { alignItems: "center", marginTop: 8, marginBottom: -32 }, linkContainer: { paddingHorizontal: 16, width: "100%", zIndex: 1 }, linkButton: obj3, linkButtonIcon: obj4, inviteDetail: { marginTop: 8 }, shareButton: { marginVertical: 16 }, suggestionsContainer: { width: "100%", flex: 1, alignContent: "flex-start" }, friendIcon: size, suggestionRowsContainer: obj5, separator: obj6 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 12, justifyContent: "space-between" };
obj4 = { flexShrink: 0, marginLeft: 8, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 32, width: 32, padding: 8, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj6 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginStart: nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function SeeMoreFooter(openInviteSheet) {
  let first;
  let tmp12;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  openInviteSheet = openInviteSheet.openInviteSheet;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_17(GroupIcon.GroupIcon, { size: "sm" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.friendIcon) {
    const obj2 = { style: tmp4.friendIcon, children: first };
    const tmp11 = closure_17(hasOwnProperty, obj2);
    cResult[1] = tmp4.friendIcon;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl5.t.zrLIIz);
    cResult[3] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === openInviteSheet) {
    let tmp14;
    if (cResult[5] === tmp8) {
      tmp14 = cResult[6];
    }
    return tmp14;
  }
  const tmp15 = closure_17(TableRow2.TableRow, { icon: tmp8, onPress: openInviteSheet, label: tmp12, end: true });
  cResult[4] = openInviteSheet;
  cResult[5] = tmp8;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : (function SeeMoreFooter(openInviteSheet) {
  let intl;
  let obj2;
  openInviteSheet = openInviteSheet.openInviteSheet;
  const obj = { icon: closure_17(hasOwnProperty, obj2), onPress: openInviteSheet, label: intl.string(intl5.t.zrLIIz), end: true };
  obj2 = { style: closure_19().friendIcon, children: closure_17(GroupIcon.GroupIcon, { size: "sm" }) };
  const TableRow = TableRow2.TableRow;
  intl = intl5.intl;
  return closure_17(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildInviteSuggestionRows(invite) {
  let openInviteSheet;
  let suggestions;
  let tmp5;
  let obj = invite(576);
  const cResult = obj.c(20);
  const tmp = invite;
  invite = invite.invite;
  ({ suggestions, openInviteSheet } = invite);
  const tmp4 = closure_19();
  const separator = tmp4;
  if (cResult[0] !== suggestions) {
    const substr = suggestions.slice(0, 6);
    cResult[0] = suggestions;
    cResult[1] = substr;
    tmp5 = substr;
  } else {
    tmp5 = cResult[1];
  }
  if (0 === suggestions.length) {
    return null;
  } else {
    let tmp7;
    if (cResult[2] !== invite.code) {
      function renderSuggestionRow(arg0) {
        let index;
        let item;
        ({ item, index } = arg0);
        const obj = { row: item, code: invite.code, start: 0 === index };
        return closure_17(InstantInviteRowDefault, obj);
      }
      cResult[2] = invite.code;
      cResult[3] = renderSuggestionRow;
      tmp7 = renderSuggestionRow;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === openInviteSheet) {
      let tmp8;
      let tmp12;
      let tmp15;
      let tmp14;
      if (cResult[5] === suggestions.length) {
        tmp8 = cResult[6];
      }
      if (cResult[7] !== tmp4.separator) {
        const fn = function y() {
          const obj = { style: separator.separator };
          return closure_17(hasOwnProperty, obj);
        };
        cResult[7] = tmp4.separator;
        cResult[8] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(type) {
          return "" + type.type + ":" + type.item.id;
        };
        const fn3 = function f(type) {
          return type.type;
        };
        cResult[9] = fn2;
        cResult[10] = fn3;
        tmp15 = fn3;
        tmp14 = fn2;
      } else {
        tmp14 = cResult[9];
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp7) {
          if (cResult[13] === tmp4.suggestionRowsContainer) {
            if (cResult[14] === tmp8) {
              let tmp16;
              if (cResult[15] === tmp12) {
                tmp16 = cResult[16];
              }
              if (cResult[17] === tmp4.suggestionsContainer) {
                let tmp19;
                if (cResult[18] === tmp16) {
                  tmp19 = cResult[19];
                }
                return tmp19;
              }
              const obj2 = { style: tmp4.suggestionsContainer, children: tmp16 };
              const tmp22 = closure_17(closure_5, obj2);
              cResult[17] = tmp4.suggestionsContainer;
              cResult[18] = tmp16;
              cResult[19] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
      }
      const obj3 = { data: tmp5, renderItem: tmp7, contentContainerStyle: tmp4.suggestionRowsContainer, ListFooterComponent: tmp8, ItemSeparatorComponent: tmp12, keyExtractor: tmp14, getItemType: tmp15 };
      const tmp18 = closure_17(tmp(7256).FlashList, obj3);
      cResult[11] = tmp5;
      cResult[12] = tmp7;
      cResult[13] = tmp4.suggestionRowsContainer;
      cResult[14] = tmp8;
      cResult[15] = tmp12;
      cResult[16] = tmp18;
      tmp16 = tmp18;
    }
    let tmp9 = null;
    if (suggestions.length > 6) {
      const obj4 = { openInviteSheet };
      tmp9 = closure_17(closure_20, obj4);
    }
    cResult[4] = openInviteSheet;
    cResult[5] = suggestions.length;
    cResult[6] = tmp9;
    tmp8 = tmp9;
  }
}) : (function GuildInviteSuggestionRows(openInviteSheet) {
  let FlashList;
  let code;
  let obj3;
  let require;
  let separator;
  let suggestions;
  let tmp6Result;
  ({ invite: require, suggestions } = openInviteSheet);
  openInviteSheet = openInviteSheet.openInviteSheet;
  const tmp = closure_19();
  dependencyMap = tmp;
  [][0] = suggestions;
  let tmp6Result2 = null;
  if (0 !== suggestions.length) {
    const obj2 = { style: tmp.suggestionsContainer, children: closure_17(FlashList, obj3) };
    obj3 = {
      data: tmp2,
      renderItem: function renderSuggestionRow(arg0) {
          let index;
          let item;
          ({ item, index } = arg0);
          const obj = { row: item, code: require.code, start: 0 === index };
          return closure_17(InstantInviteRowDefault, obj);
        },
      contentContainerStyle: tmp.suggestionRowsContainer,
      ListFooterComponent: tmp6Result,
      ItemSeparatorComponent() {
          const obj = { style: separator.separator };
          return closure_17(hasOwnProperty, obj);
        },
      keyExtractor(type) {
          return "" + type.type + ":" + type.item.id;
        },
      getItemType(type) {
          return type.type;
        }
    };
    tmp6Result = null;
    FlashList = defaultMVCPConfig.FlashList;
    const tmp7 = closure_5;
    if (suggestions.length > 6) {
      let obj = { openInviteSheet };
      tmp6Result = tmp6(closure_20, obj);
    }
    tmp6Result2 = tmp6(tmp7, obj2);
  }
  return tmp6Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildInvite(arg0) {
  let closeOnEditInviteLink;
  let closure_1;
  let inviteSuggestionRows;
  let items4;
  let onClose;
  let stateFromStores1;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp21;
  let tmp31;
  let tmp32;
  let tmp = onClose;
  let tmp2 = navigation;
  let obj = onClose(navigation[16]);
  const cResult = obj.c(88);
  ({ closeOnEditInviteLink, onClose } = arg0);
  importDefault = undefined === closeOnEditInviteLink || closeOnEditInviteLink;
  const tmp4 = closure_19();
  const tmpResult = tmp(tmp2[22]);
  navigation = tmpResult.useNavigation();
  const tmpResult4 = tmp(tmp2[23]);
  const isScreenReaderEnabled = tmpResult4.useIsScreenReaderEnabled();
  let obj4 = ref;
  ref = ref.useRef(null);
  const tmp9 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp9[0];
  closure_6 = tmp9[1];
  const tmp8 = isScreenReaderEnabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    const fn = function v() {
      return stateFromStores1.getInvite();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult5 = tmp(tmp2[24]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp11, tmp12);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1, stateFromStores, GuildChannelStore];
    class P {
      constructor() {
        const inviteSettings = stateFromStores1.getInviteSettings();
        let channelId;
        const obj = stateFromStores1;
        if (inviteSettings != null) {
          channelId = inviteSettings.channelId;
        }
        if (null != channelId) {
          return stateFromStores.getChannel(channelId);
        } else {
          const guildId = obj.getGuildId();
          defaultChannel = null;
          if (null != guildId) {
            defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
          }
          return defaultChannel;
        }
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    tmp16 = P;
    tmp15 = items1;
  } else {
    tmp15 = cResult[2];
    tmp16 = cResult[3];
  }
  const tmpResult6 = tmp(tmp2[24]);
  stateFromStores1 = tmpResult6.useStateFromStores(tmp15, tmp16);
  if (cResult[4] !== isScreenReaderEnabled) {
    class W {
      constructor() {
        const tmp = isScreenReaderEnabled && null != ref.current;
        if (tmp) {
          const obj2 = { ref, delay: 100 };
          const obj = react_native;
          const result = obj.setAccessibilityFocus(obj2);
        }
      }
    }
    cResult[4] = isScreenReaderEnabled;
    cResult[5] = W;
    tmp21 = W;
  } else {
    class W {
      constructor() {
        const tmp = isScreenReaderEnabled && null != ref.current;
        if (tmp) {
          const obj2 = { ref, delay: 100 };
          const obj = react_native;
          const result = obj.setAccessibilityFocus(obj2);
        }
      }
    }
  }
  if (cResult[6] === stateFromStores) {
    let tmp23;
    let tmp27;
    class W {
      constructor() {
        const tmp = isScreenReaderEnabled && null != ref.current;
        if (tmp) {
          const obj2 = { ref, delay: 100 };
          const obj = react_native;
          const result = obj.setAccessibilityFocus(obj2);
        }
      }
    }
    const effect = obj4.useEffect(tmp21, items4);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native;
            const result = obj.setAccessibilityFocus(obj2);
          }
        }
      }
      cResult[9] = tmp24;
      tmp23 = tmp24;
    } else {
      class W {
        constructor() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native;
            const result = obj.setAccessibilityFocus(obj2);
          }
        }
      }
    }
    const first1 = tmp8(obj4.useState(tmp23), 1)[0];
    class P {
      constructor() {
        const inviteSettings = stateFromStores1.getInviteSettings();
        let channelId;
        const obj = stateFromStores1;
        if (inviteSettings != null) {
          channelId = inviteSettings.channelId;
        }
        if (null != channelId) {
          return stateFromStores.getChannel(channelId);
        } else {
          const guildId = obj.getGuildId();
          defaultChannel = null;
          if (null != guildId) {
            defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
          }
          return defaultChannel;
        }
      }
    }
    const tmp26 = closure_6();
    GuildChannelStore = tmp26;
    if (cResult[10] !== stateFromStores1) {
      class W {
        constructor() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native;
            const result = obj.setAccessibilityFocus(obj2);
          }
        }
      }
      cResult[10] = stateFromStores1;
      cResult[11] = tmp28;
      tmp27 = tmp28;
    } else {
      class W {
        constructor() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native;
            const result = obj.setAccessibilityFocus(obj2);
          }
        }
      }
    }
    require("useMountEffect")(tmp27);
    if (cResult[12] === tmp26) {
      class W {
        constructor() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native;
            const result = obj.setAccessibilityFocus(obj2);
          }
        }
      }
      const effect1 = obj4.useEffect(tmp31, tmp32);
      if (cResult[16] === first) {
        class W {
          constructor() {
            const tmp = isScreenReaderEnabled && null != ref.current;
            if (tmp) {
              const obj2 = { ref, delay: 100 };
              const obj = react_native;
              const result = obj.setAccessibilityFocus(obj2);
            }
          }
        }
      }
      class X {
        constructor() {
          tmp = closure_2;
          setOptions = closure_2.setOptions;
          tmp2 = closure_0(closure_2[28]);
          getHeaderTextButton = tmp2.getHeaderTextButton;
          intl = closure_0(closure_2[18]).intl;
          string = intl.string;
          t = closure_0(closure_2[18]).t;
          if (closure_5) {
            stringResult = string(t.i4jeWR);
          } else {
            stringResult = string(t["5Wxrcd"]);
          }
          obj = {
            headerRight: getHeaderTextButton(stringResult, () => {
                      const AccessibilityAnnouncer = onClose(navigation[29]).AccessibilityAnnouncer;
                      const announce = AccessibilityAnnouncer.announce;
                      const intl = onClose(navigation[18]).intl;
                      announce(intl.string(onClose(navigation[18]).t["FY/yLY"]));
                      closure_1_0();
                      const tmp3 = !first;
                      const obj = closure_1(navigation[14]);
                      const obj2 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: tmp3 };
                      obj.track(constants2.USER_FLOW_TRANSITION, obj2);
                    }),
            headerLeft() {
                      return null;
                    }
          };
          setOptionsResult = setOptions(obj);
          return;
        }
      }
      const items2 = [navigation, onClose, ];
      class P {
        constructor() {
          const inviteSettings = stateFromStores1.getInviteSettings();
          let channelId;
          const obj = stateFromStores1;
          if (inviteSettings != null) {
            channelId = inviteSettings.channelId;
          }
          if (null != channelId) {
            return stateFromStores.getChannel(channelId);
          } else {
            const guildId = obj.getGuildId();
            defaultChannel = null;
            if (null != guildId) {
              defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
            }
            return defaultChannel;
          }
        }
      }
      cResult[16] = first;
      cResult[17] = navigation;
      cResult[18] = onClose;
      class Y {
        constructor() {
          if (null != stateFromStores) {
            if (null != defaultChannel[tmp.code]) {
              closure_6(true);
            }
          }
        }
      }
      cResult[19] = X;
      cResult[20] = items2;
    }
    class Y {
      constructor() {
        if (null != stateFromStores) {
          if (null != defaultChannel[tmp.code]) {
            closure_6(true);
          }
        }
      }
    }
    const items3 = [tmp26, stateFromStores];
    cResult[12] = tmp26;
    cResult[13] = stateFromStores;
    cResult[14] = Y;
    cResult[15] = items3;
    tmp31 = Y;
    tmp32 = items3;
  }
  items4 = [isScreenReaderEnabled, stateFromStores];
  cResult[6] = stateFromStores;
  cResult[7] = isScreenReaderEnabled;
  cResult[8] = items4;
}) : (function GuildInvite(closeOnEditInviteLink) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items8;
  let items9;
  let obj15;
  let obj17;
  let flag = closeOnEditInviteLink.closeOnEditInviteLink;
  if (flag === undefined) {
    flag = true;
  }
  const onClose = closeOnEditInviteLink.onClose;
  navigation = undefined;
  ref = undefined;
  let stateFromStores1;
  let defaultChannel;
  let inviteSuggestionRows;
  let tmp = closure_19();
  let tmp2 = flag;
  let tmp3 = navigation;
  let obj = flag(navigation[22]);
  navigation = obj.useNavigation();
  let obj2 = flag(navigation[23]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = ref;
  ref = ref.useRef(null);
  const tmp7 = isScreenReaderEnabled(ref.useState(false), 2);
  const first = tmp7[0];
  closure_6 = tmp7[1];
  let obj4 = flag(navigation[24]);
  const items = [stateFromStores1];
  const stateFromStores = obj4.useStateFromStores(items, () => stateFromStores1.getInvite());
  const items1 = [stateFromStores1, stateFromStores, defaultChannel];
  const obj5 = flag(navigation[24]);
  stateFromStores1 = obj5.useStateFromStores(items1, () => {
    const inviteSettings = stateFromStores1.getInviteSettings();
    let channelId;
    const obj = stateFromStores1;
    if (inviteSettings != null) {
      channelId = inviteSettings.channelId;
    }
    if (null != channelId) {
      return stateFromStores.getChannel(channelId);
    } else {
      const guildId = obj.getGuildId();
      defaultChannel = null;
      if (null != guildId) {
        defaultChannel = defaultChannel.getDefaultChannel(guildId, true, constants4.CREATE_INSTANT_INVITE);
      }
      return defaultChannel;
    }
  });
  const items2 = [isScreenReaderEnabled, stateFromStores];
  const effect = ref.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items2);
  const first1 = isScreenReaderEnabled(ref.useState(() => inviteSuggestionRows.getInviteSuggestionRows()), 1)[0];
  const tmp12 = closure_6();
  defaultChannel = tmp12;
  onClose(navigation[27])(() => {
    const obj = { omitUserIds: new Set(), channel: stateFromStores1 };
    const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
    InviteSuggestionsActionCreators;
    new Set();
    const inviteSuggestions = loadInviteSuggestions(obj);
  });
  const items3 = [tmp12, stateFromStores];
  const effect1 = ref.useEffect(() => {
    if (null != stateFromStores) {
      if (null != defaultChannel[tmp.code]) {
        closure_6(true);
      }
    }
  }, items3);
  const items4 = [navigation, onClose, first];
  const layoutEffect = ref.useLayoutEffect(() => {
    let stringResult;
    const setOptions = navigation.setOptions;
    const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
    let intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    if (first) {
      stringResult = string(t.i4jeWR);
    } else {
      stringResult = string(t["5Wxrcd"]);
    }
    let obj = {
      headerRight: getHeaderTextButton(stringResult, () => {
        const AccessibilityAnnouncer = flag(navigation[29]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = flag(navigation[18]).intl;
        announce(intl.string(flag(navigation[18]).t["FY/yLY"]));
        closure_1_1();
        const tmp3 = !first;
        const obj = onClose(navigation[14]);
        const obj2 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.GUILD_INVITE, to_step: "modal_closed", skip: tmp3 };
        obj.track(constants2.USER_FLOW_TRANSITION, obj2);
      }),
      headerLeft() {
        return null;
      }
    };
    setOptions(obj);
  }, items4);
  let code;
  const tmp17 = onClose(navigation[30]);
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  const tmp17Result = tmp17(code);
  inviteSuggestionRows = tmp17Result;
  const items5 = [stateFromStores1];
  const items6 = [stateFromStores1, , ];
  let code1;
  const callback = obj3.useCallback(() => {
    if (null != stateFromStores1) {
      const obj = CreateGuildModalActionCreatorsDefault;
      const result = obj.openGuildInviteScreen(tmp);
    }
  }, items5);
  const useCallback = obj3.useCallback;
  if (stateFromStores != null) {
    code1 = stateFromStores.code;
  }
  items6[1] = code1;
  items6[2] = tmp17Result;
  const items7 = [stateFromStores, stateFromStores1];
  const callback1 = useCallback(() => {
    if (null != stateFromStores1) {
      let code;
      const handleOpenShareSheet = instant_invite_InstantInviteUtils.handleOpenShareSheet;
      instant_invite_InstantInviteUtils;
      const tmp2 = require;
      if (stateFromStores != null) {
        code = stateFromStores.code;
      }
      const tmp2Result = tmp2(9083);
      handleOpenShareSheet(code, tmp, tmp2Result.getShareMessage(inviteSuggestionRows));
      closure_6(true);
    }
  }, items6);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      let tmp27 = tmp20;
      if (tmp27) {
        const obj6 = { invite: stateFromStores, suggestions: first1, openInviteSheet: tmp24 };
        tmp27 = closure_17(closure_21, obj6);
      }
      const rect = { top: true, left: true, right: true, style: tmp.container, children: items8 };
      const SafeAreaPaddingView = tmp2(tmp3[41]).SafeAreaPaddingView;
      const obj7 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[18]).t.OZ1qhO) };
      const Text = tmp2(tmp3[34]).Text;
      intl = tmp2(tmp3[18]).intl;
      items8 = [closure_17(Text, obj7), , , , ];
      const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp2(tmp3[18]).t.eU2ZaK) };
      const Text2 = tmp2(tmp3[34]).Text;
      intl2 = tmp2(tmp3[18]).intl;
      items8[1] = closure_17(Text2, obj8);
      let tmp29Result = !tmp20;
      if (tmp29Result) {
        const obj9 = { style: tmp.headerIllustration, children: closure_17(tmp2(tmp3[35]).HelloWumpusSpotIllustration, { width: 252, accessible: false }) };
        tmp29Result = tmp29(first, obj9);
      }
      items8[2] = tmp29Result;
      const obj10 = { style: tmp.linkContainer, children: items10 };
      const obj11 = {
        style: tmp.linkButton,
        accessibilityRole: "button",
        accessibilityLabel: intl3.string(tmp2(tmp3[18]).t["3XVNyt"]),
        onPress() {
              const obj = instant_invite_InstantInviteUtils;
              obj.handleCopy(stateFromStores.code, stateFromStores1, constants.GUILD_CREATE);
              closure_6(true);
            },
        children: items9
      };
      const PressableOpacity = tmp2(tmp3[38]).PressableOpacity;
      intl3 = tmp2(tmp3[18]).intl;
      const obj12 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: { flexShrink: 1 }, children: tmp17Result };
      items9 = [closure_17(tmp2(tmp3[34]).Text, obj12), ];
      const obj13 = { source: onClose(tmp3[37]), style: tmp.linkButtonIcon };
      const Icon = tmp2(tmp3[36]).Icon;
      items9[1] = closure_17(Icon, obj13);
      items10 = [closure_18(PressableOpacity, obj11), , ];
      const obj14 = { style: tmp.inviteDetail, children: closure_17(onClose(tmp3[39]), obj15) };
      obj15 = {
        channel: stateFromStores1,
        canEditInvite: true,
        callbackActionSheet: callback,
        onEdit() {
              const tmp = flag;
              if (tmp) {
                onClose();
              }
            },
        source: constants2.GUILD_CREATE
      };
      items10[1] = closure_17(first, obj14);
      const obj16 = { style: tmp.shareButton, children: closure_17(Button, obj17) };
      obj17 = { text: intl4.string(tmp2(tmp3[18]).t.Ej3B3Y), onPress: callback1 };
      Button = tmp2(tmp3[40]).Button;
      intl4 = tmp2(tmp3[18]).intl;
      items10[2] = closure_17(first, obj16);
      items8[3] = closure_18(first, obj10);
      items8[4] = tmp27;
      return closure_18(SafeAreaPaddingView, rect);
    }
  }
  return null;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/create_guild/native/components/GuildInvite.tsx");

export default tmp6;
