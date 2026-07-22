// Module ID: 9911
// Function ID: 76682
// Name: ForLaterDeletedMessageCard
// Dependencies: []

// Module 9911 (ForLaterDeletedMessageCard)
class ForLaterDeletedMessageCard {
  constructor(arg0) {
    savedMessage = global.savedMessage;
    arg1 = savedMessage;
    tmp = closure_12();
    tmp2 = jsxs;
    obj = { style: items };
    items = [, ];
    ({ card: arr[0], deletedCard: arr[1] } = tmp);
    obj = { size: "xs" };
    obj.color = importDefault(dependencyMap[7]).colors.ICON_MUTED;
    items1 = [, , ];
    items1[0] = jsx(arg1(dependencyMap[9]).CircleErrorIcon, obj);
    tmp3 = jsx;
    obj1 = { style: tmp.deletedText };
    if (null != savedMessage.saveData.dueAt) {
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num2 = 11;
      intl2 = arg1(dependencyMap[11]).intl;
      stringResult = intl2.string(arg1(dependencyMap[11]).t.wuQm+j);
    } else {
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num = 11;
      intl = arg1(dependencyMap[11]).intl;
      stringResult = intl.string(arg1(dependencyMap[11]).t.o572Fe);
    }
    obj1.children = stringResult;
    items1[1] = tmp3(arg1(dependencyMap[10]).Text, obj1);
    obj2 = { style: tmp.deletedActionButton };
    obj3 = {};
    intl3 = arg1(dependencyMap[11]).intl;
    obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[11]).t.SvXS1Z);
    obj3.icon = importDefault(dependencyMap[13]);
    obj3.onPress = function onPress() {
      return savedMessage(closure_2[14]).removeSavedMessage(savedMessage.saveData);
    };
    obj2.children = jsx(arg1(dependencyMap[12]).IconButton, obj3);
    items1[2] = jsx(View, obj2);
    obj.children = items1;
    return tmp2(arg1(dependencyMap[8]).Card, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, ChannelTypes: closure_8, Permissions: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { card: {} };
obj = { <string:1374361954>: 0, <string:2388774123>: -25.119, <string:2649605714>: 3, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED };
obj.cardDivider = obj;
obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[7]).modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: importDefault(dependencyMap[7]).modules.mobile.CARD_DEFAULT_RADIUS };
obj.messagePreview = obj1;
obj.deletedCard = {};
obj.deletedText = { flex: 1 };
obj.deletedActionButton = { marginLeft: "auto" };
let closure_12 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const arg1 = savedMessage;
  const tmp = callback3();
  const useSavedMessageChannel = arg1(dependencyMap[15]).useSavedMessageChannel;
  const savedMessageChannel = useSavedMessageChannel(savedMessage);
  const importDefault = savedMessageChannel;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [savedMessage, savedMessageChannel];
  const callback = importAllResult.useCallback(callback(useSavedMessageChannel), items);
  let obj = arg1(dependencyMap[21]);
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
        const tmp8 = callback2(importDefault(dependencyMap[22]), obj);
        obj = { style: tmp.card, onPress: callback };
        let tmp12 = null;
        if (null != savedMessage.saveData.dueAt) {
          const obj1 = { savedMessage, throttledNow: savedMessage.throttledNow, actions: tmp8 };
          tmp12 = callback2(arg1(dependencyMap[23]).ForLaterCardReminderHeader, obj1);
        }
        const items2 = [tmp12, , , ];
        const obj2 = { channel: savedMessageChannel };
        let tmp19 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp19 = tmp8;
        }
        obj2.actions = tmp19;
        items2[1] = callback2(arg1(dependencyMap[24]).ForLaterCardHeader, obj2);
        const obj3 = { style: tmp.cardDivider };
        items2[2] = callback2(View, obj3);
        const obj4 = { style: tmp.messagePreview };
        const obj5 = { 1549967611: false, 1391253708: false, -1436520195: false, message: savedMessage.message };
        obj4.children = callback2(arg1(dependencyMap[25]).ForLaterMessageRow, obj5);
        items2[3] = callback2(View, obj4);
        obj.children = items2;
        return closure_11(arg1(dependencyMap[8]).Card, obj);
      }
    }
  }
  return callback2(ForLaterDeletedMessageCard, { savedMessage });
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export { ForLaterDeletedMessageCard };
