// Module ID: 11139
// Function ID: 11140
// Name: ForLaterMessageCard
// Dependencies: [5, 19, 17, 4941, 1072, 21, 5009, 575, 6971, 7080, 5619, 1114, 8020, 5734, 11140, 11144, 6738, 1253, 10172, 2044, 11145, 11146, 504, 11155, 11157, 11158, 2]

// Module 11139 (ForLaterMessageCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11140 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c0, c1, c2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp6;
let unpackModuleId;
const AssetRegistryDefault = tmp6(5734);
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
    const Card = savedMessage(6971).Card;
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const CircleErrorIcon = savedMessage(7080).CircleErrorIcon;
    items1 = [closure_10(CircleErrorIcon, obj2), , ];
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.deletedText, children: stringResult };
    const Text = savedMessage(5619).Text;
    const tmp2 = closure_11;
    if (null != savedMessage.saveData.dueAt) {
      const intl2 = tmp3(1114).intl;
      stringResult = intl2.string(tmp3(1114).t["wuQm+j"]);
    } else {
      const intl = tmp3(1114).intl;
      stringResult = intl.string(tmp3(1114).t.o572Fe);
    }
    items1[1] = closure_10(Text, obj3);
    const obj4 = { style: tmp.deletedActionButton, children: closure_10(IconButton, obj5) };
    obj5 = {
      variant: "secondary",
      accessibilityLabel: intl3.string(savedMessage(1114).t.SvXS1Z),
      size: "sm",
      icon: AssetRegistryDefault,
      onPress() {
        const obj = SavedMessageHelpers;
        return obj.removeSavedMessage(savedMessage.saveData);
      }
    };
    IconButton = tmp3(8020).IconButton;
    intl3 = tmp3(1114).intl;
    items1[2] = closure_10(View, obj4);
    return tmp2(Card, obj);
  }
}
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, ChannelTypes: metroImportAll, Permissions: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: obj2, deletedCard: { flexDirection: "row", alignItems: "center", gap: 8 }, deletedText: { flex: 1 }, deletedActionButton: { marginLeft: "auto" } };
obj2 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const authStore2 = createStyles.createStyles(obj);
const memoResult = react.memo(function ForLaterMessageCard(savedMessage) {
  let items2;
  let tmp13;
  savedMessage = savedMessage.savedMessage;
  const throttledNow = savedMessage.throttledNow;
  let forLaterCardMenuItems;
  const tmp = closure_12();
  let tmp2 = savedMessage;
  let tmp3 = forLaterCardMenuItems;
  let obj = savedMessage(forLaterCardMenuItems[15]);
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
            if (savedMessageChannel(forLaterCardMenuItems[20])(savedMessage.message, jumpTo)) {
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
  let obj2 = savedMessage(forLaterCardMenuItems[21]);
  forLaterCardMenuItems = obj2.useForLaterCardMenuItems({ savedMessage, jumpToMessage: callback, throttledNow });
  let obj3 = savedMessage(forLaterCardMenuItems[22]);
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
        let tmp9 = closure_10(savedMessageChannel(tmp3[21]), obj4);
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
        const Card = tmp2(tmp3[8]).Card;
        const tmp11 = closure_11;
        if (tmp10) {
          let obj6 = { savedMessage, throttledNow, actions: tmp9 };
          tmp7Result = tmp7(tmp2(tmp3[23]).ForLaterCardReminderHeader, obj6);
        }
        items2 = [tmp7Result, , , ];
        let obj7 = { channel: savedMessageChannel, actions: tmp13 };
        tmp13 = null;
        const ForLaterCardHeader = tmp2(tmp3[24]).ForLaterCardHeader;
        if (!tmp10) {
          tmp13 = tmp9;
        }
        items2[1] = tmp7(ForLaterCardHeader, obj7);
        const obj8 = { style: tmp.cardDivider };
        items2[2] = tmp7(View, obj8);
        const obj9 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        items2[3] = tmp7(tmp2(tmp3[25]).ForLaterMessageRow, obj9);
        return tmp11(Card, obj5);
      }
    }
  }
  return closure_10(ForLaterDeletedMessageCard, { savedMessage });
});
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export { ForLaterDeletedMessageCard };
