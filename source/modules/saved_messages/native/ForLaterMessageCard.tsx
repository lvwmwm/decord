// Module ID: 9910
// Function ID: 76667
// Name: ForLaterDeletedMessageCard
// Dependencies: []

// Module 9910 (ForLaterDeletedMessageCard)
class ForLaterDeletedMessageCard {
  constructor(arg0) {
    savedMessage = global.savedMessage;
    arg1 = savedMessage;
    tmp = closure_13();
    tmp2 = jsxs;
    obj = { style: items };
    items = [, ];
    ({ card: arr[0], deletedCard: arr[1] } = tmp);
    obj = { size: "xs" };
    obj.color = importDefault(dependencyMap[8]).colors.ICON_MUTED;
    items1 = [, , ];
    items1[0] = jsx(arg1(dependencyMap[10]).CircleErrorIcon, obj);
    tmp3 = jsx;
    obj1 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold" };
    obj1.style = tmp.deletedText;
    if (null != savedMessage.saveData.dueAt) {
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num2 = 12;
      intl2 = arg1(dependencyMap[12]).intl;
      stringResult = intl2.string(arg1(dependencyMap[12]).t.wuQm+j);
    } else {
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num = 12;
      intl = arg1(dependencyMap[12]).intl;
      stringResult = intl.string(arg1(dependencyMap[12]).t.o572Fe);
    }
    obj1.children = stringResult;
    items1[1] = tmp3(arg1(dependencyMap[11]).Text, obj1);
    obj2 = { style: tmp.deletedActionButton };
    obj3 = {};
    intl3 = arg1(dependencyMap[12]).intl;
    obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[12]).t.SvXS1Z);
    obj3.icon = importDefault(dependencyMap[14]);
    obj3.onPress = function onPress() {
      return savedMessage(closure_2[15]).removeSavedMessage(savedMessage.saveData);
    };
    obj2.children = jsx(arg1(dependencyMap[13]).IconButton, obj3);
    items1[2] = jsx(View, obj2);
    obj.children = items1;
    return tmp2(arg1(dependencyMap[9]).Card, obj);
  }
}
function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const arg1 = savedMessage;
  const tmp = callback3();
  const useSavedMessageChannel = arg1(dependencyMap[16]).useSavedMessageChannel;
  const savedMessageChannel = useSavedMessageChannel(savedMessage);
  const importDefault = savedMessageChannel;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [savedMessage, savedMessageChannel];
  const callback = importAllResult.useCallback(callback(useSavedMessageChannel), items);
  let obj = arg1(dependencyMap[22]);
  const items1 = [closure_6];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (obj.useStateFromStores(items1, () => {
        let type;
        if (null != savedMessageChannel) {
          type = savedMessageChannel.type;
        }
        let tmp3 = type === constants.UNKNOWN;
        if (!tmp3) {
          let tmp5 = null == savedMessageChannel;
          if (!tmp5) {
            tmp5 = !savedMessageChannel.isPrivate();
          }
          let canResult = !tmp5;
          if (tmp5) {
            canResult = closure_6.can(constants2.VIEW_CHANNEL, savedMessageChannel);
          }
          tmp3 = canResult;
        }
        return tmp3;
      })) {
        obj = { savedMessage, jumpToMessage: callback };
        const tmp8 = callback2(importDefault(dependencyMap[23]), obj);
        obj = { style: tmp.card, onPress: callback };
        let tmp12 = null;
        if (null != savedMessage.saveData.dueAt) {
          const obj1 = { savedMessage, throttledNow: savedMessage.throttledNow, actions: tmp8 };
          tmp12 = callback2(arg1(dependencyMap[24]).ForLaterCardReminderHeader, obj1);
        }
        const items2 = [tmp12, , , ];
        const obj2 = { channel: savedMessageChannel };
        let tmp19 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp19 = tmp8;
        }
        obj2.actions = tmp19;
        items2[1] = callback2(arg1(dependencyMap[25]).ForLaterCardHeader, obj2);
        const obj3 = { style: tmp.cardDivider };
        items2[2] = callback2(View, obj3);
        const obj4 = { style: tmp.messagePreview };
        const obj5 = { marginEnd: "<string:1010958337>", flexDirection: "<string:3271557550>", alignItems: "<string:16777668>", message: savedMessage.message };
        obj4.children = callback2(arg1(dependencyMap[26]).ForLaterMessageRow, obj5);
        items2[3] = callback2(View, obj4);
        obj.children = items2;
        return closure_12(arg1(dependencyMap[9]).Card, obj);
      }
    }
  }
  return callback2(ForLaterDeletedMessageCard, { savedMessage });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_8, ChannelTypes: closure_9, Permissions: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = { card: {} };
obj = { "Null": 0, "Null": -25.119, "Null": 3, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED };
obj.cardDivider = obj;
obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[8]).modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: importDefault(dependencyMap[8]).modules.mobile.CARD_DEFAULT_RADIUS };
obj.messagePreview = obj1;
obj.deletedCard = {};
obj.deletedText = { flex: 1 };
obj.deletedActionButton = { marginLeft: "auto" };
let closure_13 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function ForLaterMessageCardGuard(savedMessageKey) {
  const arg1 = savedMessageKey.savedMessageKey;
  let obj = arg1(dependencyMap[22]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => savedMessage.getSavedMessage(savedMessageKey.channelId, savedMessageKey.messageId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { savedMessage: stateFromStores, throttledNow: savedMessageKey.throttledNow };
    tmp2 = callback2(ForLaterMessageCard, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export { ForLaterDeletedMessageCard };
