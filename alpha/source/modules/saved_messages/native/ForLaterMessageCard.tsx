// Module ID: 14277
// Function ID: 14278
// Name: ForLaterMessageCard
// Dependencies: [5, 19, 17, 4937, 1084, 21, 5005, 587, 558, 576, 7072, 1125, 5271, 8014, 5728, 14278, 6965, 14282, 6731, 1264, 10145, 2047, 14283, 14284, 504, 14291, 14293, 14294, 2]

// Module 14277 (ForLaterMessageCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AssetRegistryDefault from "AssetRegistry" /* 5728 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 14278 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1, c2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, ChannelTypes: metroImportAll, Permissions: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: obj2, deletedCard: { flexDirection: "row", alignItems: "center", gap: 8 }, deletedText: { flex: 1 }, deletedActionButton: { marginLeft: "auto" } };
obj2 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterDeletedMessageCard(savedMessage) {
  let items;
  let obj = savedMessage(576);
  const cResult = obj.c(19);
  savedMessage = savedMessage.savedMessage;
  const tmp4 = closure_12();
  if (cResult[0] === tmp4.card) {
    let tmp5;
    let tmp7;
    let tmp11;
    if (cResult[1] === tmp4.deletedCard) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const CircleErrorIcon = tmp(7072).CircleErrorIcon;
      const tmp10 = closure_10(CircleErrorIcon, obj2);
      cResult[3] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== savedMessage.saveData.dueAt) {
      let stringResult;
      if (null != savedMessage.saveData.dueAt) {
        const intl2 = tmp(1125).intl;
        stringResult = intl2.string(tmp(1125).t["wuQm+j"]);
      } else {
        const intl = tmp(1125).intl;
        stringResult = intl.string(tmp(1125).t.o572Fe);
      }
      cResult[4] = savedMessage.saveData.dueAt;
      cResult[5] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.deletedText) {
      let tmp14;
      let tmp17;
      let tmp19;
      if (cResult[7] === tmp11) {
        tmp14 = cResult[8];
      }
      const _Symbol2 = Symbol;
      const deletedActionButton = tmp4.deletedActionButton;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1125).intl;
        const stringResult1 = intl3.string(savedMessage(1125).t.SvXS1Z);
        cResult[9] = stringResult1;
        tmp17 = stringResult1;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== savedMessage.saveData) {
        const obj3 = {
          variant: "secondary",
          accessibilityLabel: tmp17,
          size: "sm",
          icon: AssetRegistryDefault,
          onPress() {
                  const obj = SavedMessageHelpers;
                  return obj.removeSavedMessage(savedMessage.saveData);
                }
        };
        const IconButton = tmp(8014).IconButton;
        const tmp22 = closure_10(IconButton, obj3);
        cResult[10] = savedMessage.saveData;
        cResult[11] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp4.deletedActionButton) {
        let tmp23;
        if (cResult[13] === tmp19) {
          tmp23 = cResult[14];
        }
        if (cResult[15] === tmp5) {
          if (cResult[16] === tmp14) {
            let tmp27;
            if (cResult[17] === tmp23) {
              tmp27 = cResult[18];
            }
            return tmp27;
          }
        }
        const obj4 = { variant: "primary", border: "subtle", shadow: "none", style: tmp5, children: items };
        items = [tmp7, tmp14, tmp23];
        const tmp29 = closure_11(savedMessage(6965).Card, obj4);
        cResult[15] = tmp5;
        cResult[16] = tmp14;
        cResult[17] = tmp23;
        cResult[18] = tmp29;
        tmp27 = tmp29;
      }
      const obj5 = { style: deletedActionButton, children: tmp19 };
      const tmp26 = closure_10(View, obj5);
      cResult[12] = tmp4.deletedActionButton;
      cResult[13] = tmp19;
      cResult[14] = tmp26;
      tmp23 = tmp26;
    }
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.deletedText, children: tmp11 };
    const tmp16 = closure_10(savedMessage(5271).Text, obj6);
    cResult[6] = tmp4.deletedText;
    cResult[7] = tmp11;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const items1 = [, ];
  ({ card: arr[0], deletedCard: arr[1] } = tmp4);
  cResult[0] = tmp4.card;
  cResult[1] = tmp4.deletedCard;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function ForLaterDeletedMessageCard(savedMessage) {
  let IconButton;
  let intl3;
  let items;
  let items1;
  let obj5;
  let stringResult;
  savedMessage = savedMessage.savedMessage;
  const tmp = closure_12();
  let obj = { variant: "primary", border: "subtle", shadow: "none", style: items, children: items1 };
  items = [, ];
  ({ card: arr[0], deletedCard: arr[1] } = tmp);
  const Card = savedMessage(6965).Card;
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
  const CircleErrorIcon = savedMessage(7072).CircleErrorIcon;
  items1 = [closure_10(CircleErrorIcon, obj2), , ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.deletedText, children: stringResult };
  const Text = savedMessage(5271).Text;
  const tmp2 = closure_11;
  if (null != savedMessage.saveData.dueAt) {
    const intl2 = tmp3(1125).intl;
    stringResult = intl2.string(tmp3(1125).t["wuQm+j"]);
  } else {
    const intl = tmp3(1125).intl;
    stringResult = intl.string(tmp3(1125).t.o572Fe);
  }
  items1[1] = closure_10(Text, obj3);
  const obj4 = { style: tmp.deletedActionButton, children: closure_10(IconButton, obj5) };
  obj5 = {
    variant: "secondary",
    accessibilityLabel: intl3.string(savedMessage(1125).t.SvXS1Z),
    size: "sm",
    icon: AssetRegistryDefault,
    onPress() {
      const obj = SavedMessageHelpers;
      return obj.removeSavedMessage(savedMessage.saveData);
    }
  };
  IconButton = tmp3(8014).IconButton;
  intl3 = tmp3(1125).intl;
  items1[2] = closure_10(View, obj4);
  return tmp2(Card, obj);
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterMessageCard(savedMessage) {
  let forLaterCardMenuItems;
  const tmp = savedMessage;
  let tmp2 = forLaterCardMenuItems;
  let obj = savedMessage(forLaterCardMenuItems[9]);
  const cResult = obj.c(40);
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  let tmp4 = closure_12();
  let obj2 = savedMessage(forLaterCardMenuItems[17]);
  const savedMessageChannel = obj2.useSavedMessageChannel(savedMessage);
  if (cResult[0] === savedMessageChannel) {
    let tmp6;
    if (cResult[1] === savedMessage) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      if (cResult[4] === savedMessage) {
        let tmp7;
        let tmp15;
        if (cResult[5] === throttledNow) {
          tmp7 = cResult[6];
        }
        const tmpResult = tmp(tmp2[23]);
        forLaterCardMenuItems = tmpResult.useForLaterCardMenuItems(tmp7);
        let tmp9 = globalThis;
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let tmp11 = PermissionStore;
          const items = [PermissionStore];
          let num5 = 7;
          cResult[7] = items;
          let tmp10 = items;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== savedMessageChannel) {
          class T {
            constructor() {
              let type;
              if (savedMessageChannel != null) {
                type = obj.type;
              }
              let tmp2 = type === metroImportAll.UNKNOWN;
              if (!tmp2) {
                let isPrivateResult;
                if (savedMessageChannel != null) {
                  isPrivateResult = obj.isPrivate();
                }
                tmp2 = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
                const canResult = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
              }
              return tmp2;
            }
          }
          let num6 = 8;
          cResult[8] = savedMessageChannel;
          let num7 = 9;
          cResult[9] = T;
        } else {
          class T {
            constructor() {
              let type;
              if (savedMessageChannel != null) {
                type = obj.type;
              }
              let tmp2 = type === metroImportAll.UNKNOWN;
              if (!tmp2) {
                let isPrivateResult;
                if (savedMessageChannel != null) {
                  isPrivateResult = obj.isPrivate();
                }
                tmp2 = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
                const canResult = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
              }
              return tmp2;
            }
          }
        }
        tmp(tmp2[24]);
        if (null != savedMessage.message) {
          class T {
            constructor() {
              let type;
              if (savedMessageChannel != null) {
                type = obj.type;
              }
              let tmp2 = type === metroImportAll.UNKNOWN;
              if (!tmp2) {
                let isPrivateResult;
                if (savedMessageChannel != null) {
                  isPrivateResult = obj.isPrivate();
                }
                tmp2 = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
                const canResult = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
              }
              return tmp2;
            }
          }
        }
        if (cResult[10] !== savedMessage) {
          class T {
            constructor() {
              let type;
              if (savedMessageChannel != null) {
                type = obj.type;
              }
              let tmp2 = type === metroImportAll.UNKNOWN;
              if (!tmp2) {
                let isPrivateResult;
                if (savedMessageChannel != null) {
                  isPrivateResult = obj.isPrivate();
                }
                tmp2 = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
                const canResult = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
              }
              return tmp2;
            }
          }
          let obj3 = { savedMessage };
          const tmp17 = closure_10(closure_13, obj3);
          let num8 = 10;
          cResult[10] = savedMessage;
          let num9 = 11;
          cResult[11] = tmp17;
          tmp15 = tmp17;
        } else {
          class T {
            constructor() {
              let type;
              if (savedMessageChannel != null) {
                type = obj.type;
              }
              let tmp2 = type === metroImportAll.UNKNOWN;
              if (!tmp2) {
                let isPrivateResult;
                if (savedMessageChannel != null) {
                  isPrivateResult = obj.isPrivate();
                }
                tmp2 = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
                const canResult = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
              }
              return tmp2;
            }
          }
        }
        return tmp15;
      }
    }
    let obj4 = { savedMessage, jumpToMessage: tmp6, throttledNow };
    let num = 3;
    cResult[3] = tmp6;
    let num2 = 4;
    cResult[4] = savedMessage;
    let num3 = 5;
    cResult[5] = throttledNow;
    let num4 = 6;
    cResult[6] = obj4;
    tmp7 = obj4;
  }
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c0 = 2;
        const tmp3 = c1;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp4 = (() => {
              closure_0 = closure_1_3(function*(arg0, value) {
                let BOOKMARK;
                let diffResult;
                let id;
                let obj3;
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: "IconComponent" };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        c1 = 1;
                        c2 = 1;
                        const obj5 = { value: obj3.savedMessageJumpToMessage(tmp3, c1), done: false };
                        obj3 = tmp3(closure_2_2[17]);
                        return obj5;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      const arr = closure_2_1(closure_2_2[18]);
                      arr.pop();
                      const obj7 = { channel_id: tmp3.saveData.channelId, message_id: tmp3.saveData.messageId, message_author_id: id, type: BOOKMARK, due_duration: diffResult };
                      message = tmp3.message;
                      id = undefined;
                      const track = closure_2_1(closure_2_2[19]).track;
                      const FOR_LATER_SAVED_MESSAGE_JUMP = constants.FOR_LATER_SAVED_MESSAGE_JUMP;
                      const tmp35 = closure_2_1(closure_2_2[19]);
                      if (message != null) {
                        id = message.author.id;
                      }
                      if (null != tmp3.saveData.dueAt) {
                        BOOKMARK = tmp3(closure_2_2[20]).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = tmp3(closure_2_2[20]).SavedMessageSortTypes.BOOKMARK;
                      }
                      diffResult = undefined;
                      if (null != tmp3.saveData.dueAt) {
                        const obj = closure_2_1(closure_2_2[21])();
                        diffResult = obj.diff(tmp3.saveData.dueAt);
                      }
                      track(FOR_LATER_SAVED_MESSAGE_JUMP, obj7);
                      c2 = 3;
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } catch (tmp25) {
                    c2 = 3;
                    throw tmp25;
                  }
                }
              });
              return function jumpTo() {
                return closure_0(...arguments);
              };
            })();
            if (savedMessageChannel(forLaterCardMenuItems[22])(c0.message, tmp4)) {
              c1 = 1;
              c0 = 1;
              let obj4 = { value: tmp4(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  });
  function t1() {
    return closure_0(...arguments);
  }
  cResult[0] = savedMessageChannel;
  cResult[1] = savedMessage;
  cResult[2] = t1;
  tmp6 = t1;
}) : (function ForLaterMessageCard(savedMessage) {
  let items2;
  let tmp13;
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  let forLaterCardMenuItems;
  const tmp = closure_12();
  let tmp2 = savedMessage;
  let tmp3 = forLaterCardMenuItems;
  let obj = savedMessage(forLaterCardMenuItems[17]);
  let savedMessageChannel = obj.useSavedMessageChannel(savedMessage);
  const items = [savedMessage, savedMessageChannel];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    if (c0 === 2) {
      c0 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let obj;
        c0 = 2;
        const tmp3 = savedMessageChannel;
        if (0 === savedMessageChannel) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            function jumpTo() {
              return obj(...arguments);
            }
            obj = function _jumpTo2() {
              obj = closure_3_3(function*(arg0, value) {
                let BOOKMARK;
                let closure_0;
                let diffResult;
                let id;
                let obj3;
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: "IconComponent" };
                  }
                } else {
                  try {
                    c2 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        c1 = 1;
                        c2 = 1;
                        const obj5 = { value: obj3.savedMessageJumpToMessage(tmp3, c1), done: false };
                        obj3 = closure_2_0(closure_2_2[17]);
                        return obj5;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      const arr = closure_2_1(closure_2_2[18]);
                      arr.pop();
                      const obj7 = { channel_id: tmp3.saveData.channelId, message_id: tmp3.saveData.messageId, message_author_id: id, type: BOOKMARK, due_duration: diffResult };
                      const message = tmp3.message;
                      id = undefined;
                      const track = closure_2_1(closure_2_2[19]).track;
                      const FOR_LATER_SAVED_MESSAGE_JUMP = constants.FOR_LATER_SAVED_MESSAGE_JUMP;
                      const tmp35 = closure_2_1(closure_2_2[19]);
                      if (message != null) {
                        id = message.author.id;
                      }
                      if (null != tmp3.saveData.dueAt) {
                        BOOKMARK = closure_2_0(closure_2_2[20]).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = closure_2_0(closure_2_2[20]).SavedMessageSortTypes.BOOKMARK;
                      }
                      diffResult = undefined;
                      if (null != tmp3.saveData.dueAt) {
                        obj = closure_2_1(closure_2_2[21])();
                        diffResult = obj.diff(tmp3.saveData.dueAt);
                      }
                      track(FOR_LATER_SAVED_MESSAGE_JUMP, obj7);
                      c2 = 3;
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } catch (tmp25) {
                    c2 = 3;
                    throw tmp25;
                  }
                }
              });
              return obj(...arguments);
            };
            if (savedMessageChannel(forLaterCardMenuItems[22])(savedMessage.message, jumpTo)) {
              savedMessageChannel = 1;
              c0 = 1;
              let obj4 = { value: jumpTo(), done: false };
              return obj4;
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
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  }), items);
  let obj2 = savedMessage(forLaterCardMenuItems[23]);
  forLaterCardMenuItems = obj2.useForLaterCardMenuItems({ savedMessage, jumpToMessage: callback, throttledNow });
  let obj3 = savedMessage(forLaterCardMenuItems[24]);
  const items1 = [PermissionStore];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (obj3.useStateFromStores(items1, () => {
        let type;
        if (savedMessageChannel != null) {
          type = obj.type;
        }
        let tmp2 = type === metroImportAll.UNKNOWN;
        if (!tmp2) {
          let isPrivateResult;
          if (savedMessageChannel != null) {
            isPrivateResult = obj.isPrivate();
          }
          tmp2 = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
          const canResult = isPrivateResult || PermissionStore.can(constants.VIEW_CHANNEL, obj);
        }
        return tmp2;
      })) {
        const tmp7 = closure_10;
        let tmp8 = savedMessageChannel;
        const mapped = forLaterCardMenuItems.map((label) => ({ name: label.label, label: label.label }));
        let obj4 = { menuItems: forLaterCardMenuItems, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        let tmp9 = closure_10(savedMessageChannel(tmp3[23]), obj4);
        let tmp10 = null != savedMessage.saveData.dueAt;
        let obj5 = {
          variant: "primary",
          border: "subtle",
          shadow: "none",
          style: tmp.card,
          onPress: callback,
          accessibilityActions: mapped,
          onAccessibilityAction(arg0) {
                  let closure_0 = arg0;
                  const found = forLaterCardMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
                  if (found != null) {
                    found.action();
                  }
                },
          children: items2
        };
        let tmp7Result = null;
        const Card = tmp2(tmp3[16]).Card;
        const tmp11 = closure_11;
        if (tmp10) {
          let obj6 = { savedMessage, throttledNow, actions: tmp9 };
          tmp7Result = tmp7(tmp2(tmp3[25]).ForLaterCardReminderHeader, obj6);
        }
        items2 = [tmp7Result, , , ];
        let obj7 = { channel: savedMessageChannel, actions: tmp13 };
        tmp13 = null;
        const ForLaterCardHeader = tmp2(tmp3[26]).ForLaterCardHeader;
        if (!tmp10) {
          tmp13 = tmp9;
        }
        items2[1] = tmp7(ForLaterCardHeader, obj7);
        const obj8 = { style: tmp.cardDivider };
        items2[2] = tmp7(View, obj8);
        const obj9 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = tmp7(tmp2(tmp3[27]).ForLaterMessageRow, obj9);
        return tmp11(Card, obj5);
      }
    }
  }
  return closure_10(closure_13, { savedMessage });
}));
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export const ForLaterDeletedMessageCard = tmp4;
