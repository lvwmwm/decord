// Module ID: 10988
// Function ID: 85404
// Name: _sendGiftIntentGif
// Dependencies: [57, 5, 31, 27, 1348, 653, 4123, 33, 4130, 689, 6691, 6923, 675, 5482, 5160, 566, 7645, 1212, 10989, 9610, 4543, 4337, 5450, 5087, 5517, 2]
// Exports: default

// Module 10988 (_sendGiftIntentGif)
import _slicedToArray from "_slicedToArray";
import ME from "ME";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function _sendGiftIntentGif() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function GiftIntentGifModalBody(channelId) {
  channelId = channelId.channelId;
  const giftIntentType = channelId.giftIntentType;
  const onClose = channelId.onClose;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(onClose[15]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(channelId));
  const ref = first.useRef(null);
  const tmp4 = stateFromStores(first.useState(null), 2);
  first = tmp4[0];
  let closure_6 = tmp4[1];
  const items1 = [stateFromStores, giftIntentType, first, onClose];
  const callback = first.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((src) => {
      src = undefined;
      if (null != src) {
        src = src.src;
      }
      let tmp2 = null;
      if (src !== src.src) {
        tmp2 = src;
      }
      return tmp2;
    });
  }, []);
  obj = { style: items2 };
  items2 = [tmp.container, { paddingBottom: giftIntentType(onClose[14])().insets.bottom }];
  obj = { style: tmp.messageContainer };
  const callback1 = first.useCallback(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != first;
    }
    if (tmp) {
      tmp = 0 !== first.url.length;
    }
    if (tmp) {
      const obj = { channel: stateFromStores, giftIntentType };
      const current = ref.current;
      let text;
      if (null != current) {
        text = current.getText();
      }
      let str = "";
      if (null != text) {
        str = text;
      }
      obj.text = str;
      obj.gif = first;
      !(function sendGiftIntentGif(arg0) {
        return outer2_14(...arguments);
      })(obj);
      onClose();
    }
  }, items1);
  const obj1 = { ref };
  const intl = channelId(onClose[17]).intl;
  obj1.accessibilityLabel = intl.string(channelId(onClose[17]).t.ZV02cV);
  let obj4 = channelId(onClose[18]);
  obj1.placeholder = obj4.getGiftIntentCustomMessagePlaceholder();
  obj.children = callback2(channelId(onClose[16]).TextArea, obj1);
  const items3 = [callback2(closure_6, obj), , ];
  const obj2 = { style: tmp.pickerContainer };
  const obj3 = { bottomSheetRef: first.useRef(null), channelId };
  let guild_id;
  const ref1 = first.useRef(null);
  const tmp10 = closure_6;
  const tmp11 = callback2;
  const tmp12 = closure_6;
  const tmp13 = callback2;
  const tmp9 = callback3;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp16;
  if (null != guild_id) {
    tmp16 = guild_id;
  }
  obj3.guildId = tmp16;
  const intl2 = channelId(onClose[17]).intl;
  obj3.initialQuery = intl2.string(channelId(onClose[17]).t.jrtJi4);
  obj3.inActionSheet = false;
  obj3.contentHorizontalPadding = giftIntentType(onClose[9]).space.PX_16;
  let src;
  if (null != first) {
    src = first.src;
  }
  obj3.selectedGifSrc = src;
  obj3.keyboardDismissMode = "on-drag";
  obj3.onPressGIF = callback;
  obj2.children = tmp13(giftIntentType(onClose[19]), obj3);
  items3[1] = tmp11(tmp12, obj2);
  obj4 = { style: tmp.footer };
  const obj5 = { grow: true, variant: "primary" };
  const intl3 = channelId(onClose[17]).intl;
  obj5.text = intl3.string(channelId(onClose[17]).t.TXNS7S);
  obj5.onPress = callback1;
  obj5.disabled = null == first;
  const items4 = [callback2(channelId(onClose[20]).Button, obj5), ];
  const obj6 = { grow: true, variant: "secondary" };
  const intl4 = channelId(onClose[17]).intl;
  obj6.text = intl4.string(channelId(onClose[17]).t["ETE/oC"]);
  obj6.onPress = onClose;
  items4[1] = callback2(channelId(onClose[20]).Button, obj6);
  obj4.children = items4;
  items3[2] = callback3(closure_6, obj4);
  obj.children = items3;
  return tmp9(tmp10, obj);
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.messageContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.pickerContainer = { flex: 1 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = { GIFT_INTENT_GIF: "GIFT_INTENT_GIF" };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("result").fileFinishedImporting("modules/premium/gifting/native/GiftIntentGifModal.tsx");

export default function GiftIntentGifModal(arg0) {
  let importDefault;
  let onDismiss;
  let require;
  ({ channelId: require, giftIntentType: importDefault, onDismiss } = arg0);
  const items = [onDismiss];
  let _slicedToArray = React.useCallback(() => {
    let arr = outer1_1(onDismiss[21]);
    arr = arr.pop();
    if (null != onDismiss) {
      onDismiss();
    }
  }, items);
  const tmp = importDefault(onDismiss[22])(() => {
    let obj = {};
    obj = {};
    const intl = outer1_0(onDismiss[17]).intl;
    obj.title = intl.string(outer1_0(onDismiss[17]).t.PQRuGc);
    obj.headerLeft = outer1_0(onDismiss[23]).getHeaderCloseButton(_slicedToArray);
    obj.render = function render() {
      return outer2_10(outer2_15, { channelId: outer1_0, giftIntentType: outer1_1, onClose: outer1_3 });
    };
    obj[outer1_13.GIFT_INTENT_GIF] = obj;
    return obj;
  });
  return callback2(require(onDismiss[24]).Navigator, {
    initialRouteName: constants.GIFT_INTENT_GIF,
    screens: importDefault(onDismiss[22])(() => {
      let obj = {};
      obj = {};
      const intl = outer1_0(onDismiss[17]).intl;
      obj.title = intl.string(outer1_0(onDismiss[17]).t.PQRuGc);
      obj.headerLeft = outer1_0(onDismiss[23]).getHeaderCloseButton(_slicedToArray);
      obj.render = function render() {
        return outer2_10(outer2_15, { channelId: outer1_0, giftIntentType: outer1_1, onClose: outer1_3 });
      };
      obj[outer1_13.GIFT_INTENT_GIF] = obj;
      return obj;
    })
  });
};
