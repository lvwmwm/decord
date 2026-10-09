// Module ID: 8655
// Function ID: 8656
// Name: StartEventModal
// Dependencies: [5, 32, 19, 17, 2064, 2086, 2070, 8498, 21, 5091, 587, 5941, 558, 576, 1126, 1200, 6774, 6191, 5087, 8649, 504, 8556, 8656, 7496, 8659, 5376, 6810, 2]

// Module 8655 (StartEventModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import Pressables from "Pressables" /* 6191 */;
import AssetRegistryDefault from "AssetRegistry" /* 6774 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 8498 */;
import GuildEventCardDefault from "GuildEventCard" /* 8649 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2070 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1, closure_7;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
const START_EVENT_MODAL_KEY = GuildEventModalConstants.START_EVENT_MODAL_KEY;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { mainContainer: obj2, container: { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" }, headerContainer: obj3, footerContainer: { display: "flex", flexDirection: "column" }, header: obj4, headerTitle: { lineHeight: 24, textAlign: "center" }, buttonContainer: obj5, previewCard: obj6, headerPrivacyLevel: { textAlign: "center", lineHeight: 18 } };
obj2 = { flex: 1, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj5 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj6 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigationBar(onClose) {
  let first;
  let obj4;
  let tmp11;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  onClose = onClose.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.cpT0Cq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onClose) {
    const fn = function o() {
      return onClose();
    };
    cResult[1] = onClose;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault };
    const Icon = tmp(1200).Icon;
    const tmp10 = authStore2(Icon, obj2);
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const obj3 = { children: authStore2(Pressables.PressableOpacity, obj4) };
    obj4 = { accessibilityRole: "button", accessibilityLabel: first, onPress: tmp6, children: tmp7 };
    const tmp14 = authStore2(View, obj3);
    cResult[4] = tmp6;
    cResult[5] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
  }
  return tmp11;
}) : (function NavigationBar(onClose) {
  let Icon;
  let PressableOpacity;
  let intl;
  let obj2;
  let obj3;
  onClose = onClose.onClose;
  const obj = { children: authStore2(PressableOpacity, obj2) };
  obj2 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(intl2.t.cpT0Cq),
    onPress() {
      return onClose();
    },
    children: authStore2(Icon, obj3)
  };
  PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  obj3 = { source: AssetRegistryDefault };
  Icon = native.Icon;
  return authStore2(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function StartEventHeader(event) {
  let first;
  let header;
  let headerPrivacyLevel;
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  event = event.event;
  const tmp4 = closure_14();
  ({ header, headerPrivacyLevel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["q+fFJv"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerPrivacyLevel) {
    const obj2 = { style: headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = authStore2(Text_Text.Text, obj2);
    cResult[1] = tmp4.headerPrivacyLevel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === event.name) {
    let tmp10;
    if (cResult[4] === tmp4.headerTitle) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === tmp4.header) {
      if (cResult[7] === tmp7) {
        let tmp12;
        if (cResult[8] === tmp10) {
          tmp12 = cResult[9];
        }
        return tmp12;
      }
    }
    const obj3 = { style: header, children: items };
    items = [tmp7, tmp10];
    const tmp15 = map1(View, obj3);
    cResult[6] = tmp4.header;
    cResult[7] = tmp7;
    cResult[8] = tmp10;
    cResult[9] = tmp15;
    tmp12 = tmp15;
  }
  const obj4 = { style: tmp4.headerTitle, variant: "text-md/medium", color: "text-default", children: event.name };
  const tmp11 = authStore2(Text_Text.Text, obj4);
  cResult[3] = event.name;
  cResult[4] = tmp4.headerTitle;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function StartEventHeader(event) {
  let intl;
  let items;
  event = event.event;
  const tmp = closure_14();
  const obj = { style: tmp.header, children: items };
  const obj2 = { style: tmp.headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl2.t["q+fFJv"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [authStore2(Text, obj2), ];
  const obj3 = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: event.name };
  items[1] = authStore2(Text_Text.Text, obj3);
  return map1(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewEventCard(event) {
  const obj = react2;
  const cResult = obj.c(3);
  event = event.event;
  const tmp3 = closure_14();
  if (cResult[0] === event) {
    let tmp4;
    if (cResult[1] === tmp3.previewCard) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { event, hideControls: true, style: tmp3.previewCard, hideAgeVerificationNotice: true };
  const tmp5 = authStore2(GuildEventCardDefault, obj2);
  cResult[0] = event;
  cResult[1] = tmp3.previewCard;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function PreviewEventCard(event) {
  event = event.event;
  const obj = { event, hideControls: true, style: closure_14().previewCard, hideAgeVerificationNotice: true };
  return authStore2(GuildEventCardDefault, obj);
});
let closure_17 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function StartEventModal(event) {
  let closure_3;
  let closure_5;
  let error;
  let first;
  let first1;
  let guild_id;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let loading;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp9;
  let tmp = event;
  const tmp2 = guild_id;
  let obj = event(guild_id[13]);
  const cResult = obj.c(58);
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  let tmp4 = closure_14();
  guild_id = event.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function f() {
      return GuildStore.getGuild(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[20]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_7;
    const items1 = [closure_7];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== event.channel_id) {
    const fn2 = function w() {
      return ChannelStore.getChannel(event.channel_id);
    };
    cResult[4] = event.channel_id;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== event) {
    const items2 = [event];
    cResult[6] = event;
    cResult[7] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[7];
  }
  const tmpResult3 = tmp(tmp2[20]);
  let stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  const useManageResourcePermissions = tmp(tmp2[21]).useManageResourcePermissions;
  tmp(tmp2[21]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEvent = useManageResourcePermissions(stateFromStores1).canManageGuildEvent;
  if (cResult[8] === canManageGuildEvent) {
    let tmp15;
    let tmp26;
    if (cResult[9] === event) {
      tmp15 = cResult[10];
    }
    _asyncToGenerator = tmp15;
    const tmp21 = first1(react.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
    first1 = tmp21[0];
    react = tmp21[1];
    const tmp24 = first1(onCloseActionSheet(tmp2[22])(), 2);
    const first2 = tmp24[0];
    ({ loading, error } = tmp24[1]);
    const tmp23 = onCloseActionSheet;
    if (cResult[11] !== onCloseActionSheet) {
      function onCloseModal(arg0) {
        const tmp = undefined !== arg0 && arg0;
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(START_EVENT_MODAL_KEY);
        if (onCloseActionSheet != null) {
          onCloseActionSheet(tmp);
        }
      }
      cResult[11] = onCloseActionSheet;
      cResult[12] = onCloseModal;
      tmp26 = onCloseModal;
    } else {
      tmp26 = cResult[12];
    }
    closure_7 = tmp26;
    if (cResult[13] === tmp15) {
      if (cResult[14] === event) {
        if (cResult[15] === first1) {
          if (cResult[16] === tmp26) {
            let tmp27;
            let tmp29;
            let tmp30;
            let tmp35;
            let tmp34;
            if (cResult[17] === first2) {
              tmp27 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              function handleToggleNotifyMembers() {
                closure_5((arg0) => !arg0);
              }
              cResult[19] = handleToggleNotifyMembers;
              tmp29 = handleToggleNotifyMembers;
            } else {
              tmp29 = cResult[19];
            }
            const mainContainer = tmp4.mainContainer;
            if (cResult[20] !== tmp26) {
              let obj2 = { onClose: tmp26 };
              const tmp33 = closure_12(closure_15, obj2);
              cResult[20] = tmp26;
              cResult[21] = tmp33;
              tmp30 = tmp33;
            } else {
              tmp30 = cResult[21];
            }
            const container = tmp4.container;
            if (cResult[22] !== event) {
              let obj3 = { event };
              const tmp38 = closure_12(closure_16, obj3);
              let obj4 = { event };
              const tmp40 = closure_12(closure_17, obj4);
              cResult[22] = event;
              cResult[23] = tmp38;
              cResult[24] = tmp40;
              tmp35 = tmp40;
              tmp34 = tmp38;
            } else {
              tmp34 = cResult[23];
              tmp35 = cResult[24];
            }
            if (cResult[25] === tmp4.headerContainer) {
              if (cResult[26] === tmp34) {
                let tmp41;
                if (cResult[27] === tmp35) {
                  tmp41 = cResult[28];
                }
                if (cResult[29] === event.channel_id) {
                  let tmp46;
                  if (cResult[30] === event.entity_type) {
                    tmp46 = cResult[31];
                  }
                  if (cResult[32] === first1) {
                    let tmp50;
                    let tmp53;
                    let tmp56;
                    if (cResult[33] === event.entity_type === constants.STAGE_INSTANCE) {
                      tmp50 = cResult[34];
                    }
                    const buttonContainer = tmp4.buttonContainer;
                    if (cResult[35] !== error) {
                      let tmp54 = null;
                      if (null != error) {
                        let obj5 = { variant: "text-sm/medium", color: "text-feedback-critical", children: error.getAnyErrorMessage() };
                        const Text = tmp(tmp2[18]).Text;
                        tmp54 = closure_12(Text, obj5);
                      }
                      cResult[35] = error;
                      cResult[36] = tmp54;
                      tmp53 = tmp54;
                    } else {
                      tmp53 = cResult[36];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(tmp2[14]).intl;
                      const stringResult = intl.string(tmp(tmp2[14]).t.cK1GGY);
                      cResult[37] = stringResult;
                      tmp56 = stringResult;
                    } else {
                      tmp56 = cResult[37];
                    }
                    if (cResult[38] === tmp27) {
                      let tmp58;
                      if (cResult[39] === loading) {
                        tmp58 = cResult[40];
                      }
                      if (cResult[41] === tmp4.buttonContainer) {
                        if (cResult[42] === tmp53) {
                          let tmp61;
                          if (cResult[43] === tmp58) {
                            tmp61 = cResult[44];
                          }
                          if (cResult[45] === tmp4.footerContainer) {
                            if (cResult[46] === tmp46) {
                              if (cResult[47] === tmp50) {
                                let tmp65;
                                if (cResult[48] === tmp61) {
                                  tmp65 = cResult[49];
                                }
                                if (cResult[50] === tmp4.container) {
                                  if (cResult[51] === tmp41) {
                                    let tmp69;
                                    if (cResult[52] === tmp65) {
                                      tmp69 = cResult[53];
                                    }
                                    if (cResult[54] === tmp4.mainContainer) {
                                      if (cResult[55] === tmp30) {
                                        let tmp73;
                                        if (cResult[56] === tmp69) {
                                          tmp73 = cResult[57];
                                        }
                                        return tmp73;
                                      }
                                    }
                                    const rect = { top: true, bottom: true, style: mainContainer, children: items3 };
                                    items3 = [tmp30, tmp69];
                                    const tmp75 = closure_13(tmp(tmp2[26]).SafeAreaPaddingView, rect);
                                    cResult[54] = tmp4.mainContainer;
                                    cResult[55] = tmp30;
                                    cResult[56] = tmp69;
                                    cResult[57] = tmp75;
                                    tmp73 = tmp75;
                                  }
                                }
                                const obj6 = { style: container, children: items4 };
                                items4 = [tmp41, tmp65];
                                const tmp72 = closure_13(first2, obj6);
                                cResult[50] = tmp4.container;
                                cResult[51] = tmp41;
                                cResult[52] = tmp65;
                                cResult[53] = tmp72;
                                tmp69 = tmp72;
                              }
                            }
                          }
                          const obj7 = { style: tmp45, children: items5 };
                          items5 = [tmp46, tmp50, tmp61];
                          const tmp68 = closure_13(first2, obj7);
                          cResult[45] = tmp4.footerContainer;
                          cResult[46] = tmp46;
                          cResult[47] = tmp50;
                          cResult[48] = tmp61;
                          cResult[49] = tmp68;
                          tmp65 = tmp68;
                        }
                      }
                      const obj8 = { style: buttonContainer, children: items6 };
                      items6 = [tmp53, tmp58];
                      const tmp64 = closure_13(first2, obj8);
                      cResult[41] = tmp4.buttonContainer;
                      cResult[42] = tmp53;
                      cResult[43] = tmp58;
                      cResult[44] = tmp64;
                      tmp61 = tmp64;
                    }
                    const obj9 = { variant: "active", text: tmp56, onPress: tmp27, disabled: loading, loading };
                    const tmp60 = closure_12(tmp(tmp2[25]).Button, obj9);
                    cResult[38] = tmp27;
                    cResult[39] = loading;
                    cResult[40] = tmp60;
                    tmp58 = tmp60;
                  }
                  let tmp51 = null;
                  if (event.entity_type === constants.STAGE_INSTANCE) {
                    const obj10 = { sendStartNotification: first1, onToggle: tmp29 };
                    tmp51 = closure_12(tmp(tmp2[24]).NotificationToggle, obj10);
                  }
                  cResult[32] = first1;
                  cResult[33] = event.entity_type === constants.STAGE_INSTANCE;
                  cResult[34] = tmp51;
                  tmp50 = tmp51;
                }
                let hasItem = set.has(event.entity_type);
                if (hasItem) {
                  const obj11 = { channelId: event.channel_id };
                  hasItem = closure_12(tmp23(tmp2[23]), obj11);
                }
                cResult[29] = event.channel_id;
                cResult[30] = event.entity_type;
                cResult[31] = hasItem;
                tmp46 = hasItem;
              }
            }
            const obj12 = { style: tmp4.headerContainer, children: items7 };
            items7 = [tmp34, tmp35];
            const tmp44 = closure_13(first2, obj12);
            cResult[25] = tmp4.headerContainer;
            cResult[26] = tmp34;
            cResult[27] = tmp35;
            cResult[28] = tmp44;
            tmp41 = tmp44;
          }
        }
      }
    }
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp4 = closure_1_3;
              if (tmp4) {
                const obj4 = {
                  onSuccess() {
                              return closure_1_7(true);
                            }
                };
                c1 = 1;
                c0 = 1;
                const obj5 = { value: first2(c0, first1, obj4), done: false };
                return obj5;
              } else {
                closure_1_7(false);
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp10) {
          c0 = 3;
          throw tmp10;
        }
      }
    });
    function handleStart() {
      return closure_0(...arguments);
    }
    cResult[13] = tmp15;
    cResult[14] = event;
    cResult[15] = first1;
    cResult[16] = tmp26;
    cResult[17] = first2;
    cResult[18] = handleStart;
    tmp27 = handleStart;
  }
  const canManageGuildEventResult = canManageGuildEvent(event);
  cResult[8] = canManageGuildEvent;
  cResult[9] = event;
  cResult[10] = canManageGuildEventResult;
  tmp15 = canManageGuildEventResult;
}) : (function StartEventModal(event) {
  let _undefined;
  let c6;
  let closure_5;
  let error;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let loading;
  let tmp12;
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  let closure_3;
  let sendStartNotification;
  react = undefined;
  c6 = undefined;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(START_EVENT_MODAL_KEY);
    if (onCloseActionSheet != null) {
      onCloseActionSheet(flag);
    }
  }
  let obj = function _handleStart2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp4 = closure_2_3;
              if (tmp4) {
                const obj4 = {
                  onSuccess() {
                              obj = c1(closure_2_2[11]);
                              obj.popWithKey(closure_2_11);
                              if (closure_1_1 != null) {
                                tmp2(true);
                              }
                            }
                };
                c1 = 1;
                c0 = 1;
                const obj5 = { value: _undefined(event, sendStartNotification, obj4), done: false };
                return obj5;
              } else {
                const flag = false;
                onCloseModal(false);
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp10) {
          c0 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_14();
  const guild_id = event.guild_id;
  const tmp2 = event;
  obj = event(guild_id[20]);
  const items = [obj];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  let obj2 = event(guild_id[20]);
  const items1 = [onCloseModal];
  const items2 = [event];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(event.channel_id), items2);
  const useManageResourcePermissions = event(guild_id[21]).useManageResourcePermissions;
  const tmp6 = event(guild_id[21]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const tmp8 = sendStartNotification(react.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  sendStartNotification = tmp8[0];
  react = tmp8[1];
  const tmp10 = onCloseActionSheet;
  [c6, tmp12] = sendStartNotification(onCloseActionSheet(guild_id[22])(), 2);
  ({ loading, error } = tmp12);
  const rect = { top: true, bottom: true, style: tmp.mainContainer, children: items3 };
  const tmp11 = sendStartNotification(onCloseActionSheet(guild_id[22])(), 2);
  const SafeAreaPaddingView = tmp2(tmp3[26]).SafeAreaPaddingView;
  items3 = [closure_12(closure_15, { onClose: onCloseModal }), ];
  let obj3 = { style: tmp.container, children: items5 };
  let obj4 = { style: tmp.headerContainer, children: items4 };
  items4 = [closure_12(closure_16, { event }), closure_12(closure_17, { event })];
  items5 = [closure_13(c6, obj4), ];
  let obj5 = { style: tmp.footerContainer, children: items6 };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    const obj6 = { channelId: event.channel_id };
    hasItem = tmp14(tmp10(tmp3[23]), obj6);
  }
  items6 = [hasItem, , ];
  let tmp14Result = null;
  if (event.entity_type === constants.STAGE_INSTANCE) {
    const obj7 = {
      sendStartNotification,
      onToggle: function handleToggleNotifyMembers() {
          closure_5((arg0) => !arg0);
        }
    };
    tmp14Result = tmp14(tmp2(tmp3[24]).NotificationToggle, obj7);
  }
  items6[1] = tmp14Result;
  let tmp14Result2 = null;
  const obj8 = { style: tmp.buttonContainer, children: items7 };
  if (null != error) {
    const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", children: error.getAnyErrorMessage() };
    const Text = tmp2(tmp3[18]).Text;
    tmp14Result2 = tmp14(Text, obj9);
  }
  items7 = [tmp14Result2, ];
  const obj10 = {
    variant: "active",
    text: intl.string(tmp2(guild_id[14]).t.cK1GGY),
    onPress: function handleStart() {
      return obj(...arguments);
    },
    disabled: loading,
    loading
  };
  const Button = tmp2(tmp3[25]).Button;
  intl = tmp2(tmp3[14]).intl;
  items7[1] = closure_12(Button, obj10);
  items6[2] = closure_13(c6, obj8);
  items5[1] = closure_13(c6, obj5);
  items3[1] = closure_13(c6, obj3);
  return closure_13(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default tmp6;
export const PreviewEventCard = tmp5;
