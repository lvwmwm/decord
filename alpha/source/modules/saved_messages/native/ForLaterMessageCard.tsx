// Module ID: 12651
// Function ID: 12652
// Name: ForLaterMessageCard
// Dependencies: [5, 19, 17, 4750, 1085, 21, 5092, 587, 558, 576, 6289, 1126, 5088, 7573, 5050, 12652, 6181, 12656, 5934, 1265, 9681, 4702, 12657, 504, 12658, 12667, 12669, 12670, 2]

// Module 12651 (ForLaterMessageCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AssetRegistryDefault from "AssetRegistry" /* 5050 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 12652 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
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
      const CircleErrorIcon = tmp(6289).CircleErrorIcon;
      const tmp10 = closure_10(CircleErrorIcon, obj2);
      cResult[3] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== savedMessage.saveData.dueAt) {
      let stringResult;
      if (null != savedMessage.saveData.dueAt) {
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(tmp(1126).t["wuQm+j"]);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.o572Fe);
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
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(savedMessage(1126).t.SvXS1Z);
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
        const IconButton = tmp(7573).IconButton;
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
        const tmp29 = closure_11(savedMessage(6181).Card, obj4);
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
    const tmp16 = closure_10(savedMessage(5088).Text, obj6);
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
  const Card = savedMessage(6181).Card;
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
  const CircleErrorIcon = savedMessage(6289).CircleErrorIcon;
  items1 = [closure_10(CircleErrorIcon, obj2), , ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.deletedText, children: stringResult };
  const Text = savedMessage(5088).Text;
  const tmp2 = closure_11;
  if (null != savedMessage.saveData.dueAt) {
    const intl2 = tmp3(1126).intl;
    stringResult = intl2.string(tmp3(1126).t["wuQm+j"]);
  } else {
    const intl = tmp3(1126).intl;
    stringResult = intl.string(tmp3(1126).t.o572Fe);
  }
  items1[1] = closure_10(Text, obj3);
  const obj4 = { style: tmp.deletedActionButton, children: closure_10(IconButton, obj5) };
  obj5 = {
    variant: "secondary",
    accessibilityLabel: intl3.string(savedMessage(1126).t.SvXS1Z),
    size: "sm",
    icon: AssetRegistryDefault,
    onPress() {
      const obj = SavedMessageHelpers;
      return obj.removeSavedMessage(savedMessage.saveData);
    }
  };
  IconButton = tmp3(7573).IconButton;
  intl3 = tmp3(1126).intl;
  items1[2] = closure_10(View, obj4);
  return tmp2(Card, obj);
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterMessageCard(savedMessage) {
  const tmp = savedMessage;
  let tmp2 = dependencyMap;
  let obj = savedMessage(576);
  const cResult = obj.c(31);
  savedMessage = savedMessage.savedMessage;
  let tmp4 = closure_12();
  let obj2 = savedMessage(12656);
  const savedMessageChannel = obj2.useSavedMessageChannel(savedMessage);
  if (cResult[0] === savedMessageChannel) {
    let tmp13;
    if (cResult[1] === savedMessage) {
      let tmp6 = cResult[2];
    }
    let tmp7 = globalThis;
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp9 = PermissionStore;
      const items = [PermissionStore];
      let num = 3;
      cResult[3] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== savedMessageChannel) {
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
      let num2 = 4;
      cResult[4] = savedMessageChannel;
      let num3 = 5;
      cResult[5] = T;
      let tmp10 = T;
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
    tmp(504);
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
    if (cResult[6] !== savedMessage) {
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
      const tmp15 = closure_10(closure_13, obj3);
      let num4 = 6;
      cResult[6] = savedMessage;
      let num5 = 7;
      cResult[7] = tmp15;
      tmp13 = tmp15;
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
    return tmp13;
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
        return { value: "IconComponent", done: "+51" };
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
                    return { value: "IconComponent", done: "+51" };
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
                      return { value: "IconComponent", done: "+51" };
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
            if (savedMessageChannel(dependencyMap[22])(c0.message, tmp4)) {
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
        return { value: "IconComponent", done: "+51" };
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
}) : (function ForLaterMessageCard(savedMessage) {
  let items2;
  let tmp12;
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  const tmp = closure_12();
  let tmp2 = savedMessage;
  let tmp3 = dependencyMap;
  let obj = savedMessage(12656);
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
        return { value: "IconComponent", done: "+51" };
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
                    return { value: "IconComponent", done: "+51" };
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
                      return { value: "IconComponent", done: "+51" };
                    }
                  } catch (tmp25) {
                    c2 = 3;
                    throw tmp25;
                  }
                }
              });
              return obj(...arguments);
            };
            if (savedMessageChannel(dependencyMap[22])(savedMessage.message, jumpTo)) {
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
        return { value: "IconComponent", done: "+51" };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  }), items);
  let obj2 = savedMessage(504);
  const items1 = [PermissionStore];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (obj2.useStateFromStores(items1, () => {
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
        let tmp6 = closure_10;
        const tmp7 = savedMessageChannel;
        let obj3 = { savedMessage, jumpToMessage: callback, throttledNow };
        let tmp8 = closure_10(savedMessageChannel(12658), obj3);
        let tmp9 = null != savedMessage.saveData.dueAt;
        let tmp10 = closure_11;
        let obj4 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: callback, children: items2 };
        let tmp6Result = null;
        const Card = tmp2(6181).Card;
        if (tmp9) {
          let obj5 = { savedMessage, throttledNow, actions: tmp8 };
          tmp6Result = tmp6(tmp2(12667).ForLaterCardReminderHeader, obj5);
        }
        items2 = [tmp6Result, , , ];
        let obj6 = { channel: savedMessageChannel, actions: tmp12 };
        tmp12 = null;
        const ForLaterCardHeader = tmp2(12669).ForLaterCardHeader;
        if (!tmp9) {
          tmp12 = tmp8;
        }
        items2[1] = tmp6(ForLaterCardHeader, obj6);
        let obj7 = { style: tmp.cardDivider };
        items2[2] = tmp6(View, obj7);
        const obj8 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = tmp6(tmp2(12670).ForLaterMessageRow, obj8);
        return tmp10(Card, obj4);
      }
    }
  }
  return closure_10(closure_13, { savedMessage });
}));
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export const ForLaterDeletedMessageCard = tmp4;
