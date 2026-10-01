// Module ID: 12862
// Function ID: 12863
// Name: ForLaterMessageCard
// Dependencies: [5, 19, 17, 4469, 1074, 21, 4836, 576, 5919, 6028, 4832, 1115, 7363, 4791, 11204, 11211, 5039, 1241, 7285, 4421, 12863, 504, 12864, 12867, 11697, 11698, 2]

// Module 12862 (ForLaterMessageCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11204 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c0, c1, c2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp6;
let unpackModuleId;
const AssetRegistryDefault = tmp6(4791);
class ForLaterDeletedMessageCard {
  constructor(savedMessage) {
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
    const Card = savedMessage(5919).Card;
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const CircleErrorIcon = savedMessage(6028).CircleErrorIcon;
    items1 = [closure_10(CircleErrorIcon, obj2), , ];
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.deletedText, children: stringResult };
    const Text = savedMessage(4832).Text;
    const tmp2 = closure_11;
    if (null != savedMessage.saveData.dueAt) {
      const intl2 = tmp3(1115).intl;
      stringResult = intl2.string(tmp3(1115).t["wuQm+j"]);
    } else {
      const intl = tmp3(1115).intl;
      stringResult = intl.string(tmp3(1115).t.o572Fe);
    }
    items1[1] = closure_10(Text, obj3);
    const obj4 = { style: tmp.deletedActionButton, children: closure_10(IconButton, obj5) };
    obj5 = {
      variant: "secondary",
      accessibilityLabel: intl3.string(savedMessage(1115).t.SvXS1Z),
      size: "sm",
      icon: AssetRegistryDefault,
      onPress() {
        const obj = SavedMessageHelpers;
        return obj.removeSavedMessage(savedMessage.saveData);
      }
    };
    IconButton = tmp3(7363).IconButton;
    intl3 = tmp3(1115).intl;
    items1[2] = closure_10(View, obj4);
    return tmp2(Card, obj);
  }
}
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, ChannelTypes: metroImportAll, Permissions: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: obj2, deletedCard: { flexDirection: "row", alignItems: "center", gap: 8 }, deletedText: { flex: 1 }, deletedActionButton: { marginLeft: "auto" } };
obj2 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_12 = createStyles.createStyles(obj);
const memoResult = react.memo(function ForLaterMessageCard(savedMessage) {
  let items2;
  let tmp12;
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  const tmp = closure_12();
  let tmp2 = savedMessage;
  let tmp3 = dependencyMap;
  let obj = savedMessage(11211);
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
        return { value: "HermesInternal", done: null };
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
            obj = function _jumpTo() {
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
                    return { value: "HermesInternal", done: null };
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
                        obj3 = closure_2_0(closure_2_2[15]);
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
                      const arr = closure_2_1(closure_2_2[16]);
                      arr.pop();
                      const obj7 = { channel_id: tmp3.saveData.channelId, message_id: tmp3.saveData.messageId, message_author_id: id, type: BOOKMARK, due_duration: diffResult };
                      const message = tmp3.message;
                      id = undefined;
                      const track = closure_2_1(closure_2_2[17]).track;
                      const FOR_LATER_SAVED_MESSAGE_JUMP = constants.FOR_LATER_SAVED_MESSAGE_JUMP;
                      const tmp35 = closure_2_1(closure_2_2[17]);
                      if (message != null) {
                        id = message.author.id;
                      }
                      if (null != tmp3.saveData.dueAt) {
                        BOOKMARK = closure_2_0(closure_2_2[18]).SavedMessageSortTypes.REMINDER;
                      } else {
                        BOOKMARK = closure_2_0(closure_2_2[18]).SavedMessageSortTypes.BOOKMARK;
                      }
                      diffResult = undefined;
                      if (null != tmp3.saveData.dueAt) {
                        obj = closure_2_1(closure_2_2[19])();
                        diffResult = obj.diff(tmp3.saveData.dueAt);
                      }
                      track(FOR_LATER_SAVED_MESSAGE_JUMP, obj7);
                      c2 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp25) {
                    c2 = 3;
                    throw tmp25;
                  }
                }
              });
              return obj(...arguments);
            };
            if (savedMessageChannel(dependencyMap[20])(savedMessage.message, jumpTo)) {
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
        return { value: "HermesInternal", done: null };
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
        let tmp8 = closure_10(savedMessageChannel(12864), obj3);
        let tmp9 = null != savedMessage.saveData.dueAt;
        let tmp10 = closure_11;
        let obj4 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: callback, children: items2 };
        let tmp6Result = null;
        const Card = tmp2(5919).Card;
        if (tmp9) {
          let obj5 = { savedMessage, throttledNow, actions: tmp8 };
          tmp6Result = tmp6(tmp2(12867).ForLaterCardReminderHeader, obj5);
        }
        items2 = [tmp6Result, , , ];
        let obj6 = { channel: savedMessageChannel, actions: tmp12 };
        tmp12 = null;
        const ForLaterCardHeader = tmp2(11697).ForLaterCardHeader;
        if (!tmp9) {
          tmp12 = tmp8;
        }
        items2[1] = tmp6(ForLaterCardHeader, obj6);
        let obj7 = { style: tmp.cardDivider };
        items2[2] = tmp6(View, obj7);
        const obj8 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = tmp6(tmp2(11698).ForLaterMessageRow, obj8);
        return tmp10(Card, obj4);
      }
    }
  }
  return closure_10(ForLaterDeletedMessageCard, { savedMessage });
});
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export { ForLaterDeletedMessageCard };
