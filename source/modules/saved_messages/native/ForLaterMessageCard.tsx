// Module ID: 9951
// Function ID: 76921
// Name: ForLaterDeletedMessageCard
// Dependencies: [5, 31, 27, 3758, 653, 33, 4130, 689, 5167, 7577, 4126, 1212, 7533, 4090, 9943, 9952, 4337, 675, 9569, 3712, 9953, 566, 9954, 9960, 9961, 9962, 2]

// Module 9951 (ForLaterDeletedMessageCard)
import closure_3 from "jsxProd";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
class ForLaterDeletedMessageCard {
  constructor(arg0) {
    savedMessage = global.savedMessage;
    tmp = c12();
    tmp2 = jsxs;
    obj = { variant: "primary", border: "subtle", shadow: "none" };
    items = [, ];
    ({ card: arr[0], deletedCard: arr[1] } = tmp);
    obj.style = items;
    obj = { size: "xs" };
    obj.color = require("_createForOfIteratorHelperLoose").colors.ICON_MUTED;
    items1 = [, , ];
    items1[0] = jsx(require("CircleErrorIcon").CircleErrorIcon, obj);
    tmp3 = jsx;
    obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    obj1.style = tmp.deletedText;
    if (null != savedMessage.saveData.dueAt) {
      tmp7 = savedMessage;
      tmp8 = closure_2;
      num2 = 11;
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t["wuQm+j"]);
    } else {
      tmp4 = savedMessage;
      tmp5 = closure_2;
      num = 11;
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t.o572Fe);
    }
    obj1.children = stringResult;
    items1[1] = tmp3(require("Text").Text, obj1);
    obj2 = { style: tmp.deletedActionButton };
    obj3 = { variant: "secondary", accessibilityLabel: null, size: "sm" };
    intl3 = require("getSystemLocale").intl;
    obj3.accessibilityLabel = intl3.string(require("getSystemLocale").t.SvXS1Z);
    obj3.icon = require("registerAsset");
    obj3.onPress = function onPress() {
      return savedMessage(outer1_2[14]).removeSavedMessage(savedMessage.saveData);
    };
    obj2.children = jsx(require("IconButton").IconButton, obj3);
    items1[2] = jsx(View, obj2);
    obj.children = items1;
    return tmp2(require("getCardBackgroundToken").Card, obj);
  }
}
({ AnalyticEvents: closure_7, ChannelTypes: closure_8, Permissions: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { card: { gap: 16, marginBottom: 16 } };
obj = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
obj.cardDivider = obj;
_createForOfIteratorHelperLoose = { marginHorizontal: -16, marginTop: -9, marginBottom: -16, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
obj.messagePreview = _createForOfIteratorHelperLoose;
obj.deletedCard = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.deletedText = { flex: 1 };
obj.deletedActionButton = { marginLeft: "auto" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ForLaterMessageCard(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const tmp = callback3();
  const useSavedMessageChannel = savedMessage(9952).useSavedMessageChannel;
  const savedMessageChannel = useSavedMessageChannel(savedMessage);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [savedMessage, savedMessageChannel];
  callback = importAllResult.useCallback(callback(useSavedMessageChannel), items);
  let obj = savedMessage(566);
  const items1 = [_isNativeReflectConstruct];
  if (null != savedMessage.message) {
    if (null != savedMessageChannel) {
      if (obj.useStateFromStores(items1, () => {
        let type;
        if (null != savedMessageChannel) {
          type = savedMessageChannel.type;
        }
        let tmp3 = type === outer1_8.UNKNOWN;
        if (!tmp3) {
          let tmp5 = null == savedMessageChannel;
          if (!tmp5) {
            tmp5 = !savedMessageChannel.isPrivate();
          }
          let canResult = !tmp5;
          if (tmp5) {
            canResult = outer1_6.can(outer1_9.VIEW_CHANNEL, savedMessageChannel);
          }
          tmp3 = canResult;
        }
        return tmp3;
      })) {
        obj = { savedMessage, jumpToMessage: callback };
        const tmp8 = callback2(savedMessageChannel(9954), obj);
        obj = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: callback };
        let tmp12 = null;
        if (null != savedMessage.saveData.dueAt) {
          const obj1 = { savedMessage, throttledNow: savedMessage.throttledNow, actions: tmp8 };
          tmp12 = callback2(savedMessage(9960).ForLaterCardReminderHeader, obj1);
        }
        const items2 = [tmp12, , , ];
        const obj2 = { channel: savedMessageChannel };
        let tmp19 = null;
        if (null == savedMessage.saveData.dueAt) {
          tmp19 = tmp8;
        }
        obj2.actions = tmp19;
        items2[1] = callback2(savedMessage(9961).ForLaterCardHeader, obj2);
        const obj3 = { style: tmp.cardDivider };
        items2[2] = callback2(View, obj3);
        const obj4 = { style: tmp.messagePreview };
        const obj5 = { message: savedMessage.message, lineClamp: 2, maxHeight: 250 };
        obj4.children = callback2(savedMessage(9962).ForLaterMessageRow, obj5);
        items2[3] = callback2(View, obj4);
        obj.children = items2;
        return closure_11(savedMessage(5167).Card, obj);
      }
    }
  }
  return callback2(ForLaterDeletedMessageCard, { savedMessage });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/ForLaterMessageCard.tsx");

export default memoResult;
export { ForLaterDeletedMessageCard };
