// Module ID: 10951
// Function ID: 85166
// Name: _sendGiftIntentGif
// Dependencies: []
// Exports: default

// Module 10951 (_sendGiftIntentGif)
function _sendGiftIntentGif() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _sendGiftIntentGif = obj;
  return obj(...arguments);
}
function GiftIntentGifModalBody(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const giftIntentType = channelId.giftIntentType;
  const importDefault = giftIntentType;
  const onClose = channelId.onClose;
  const dependencyMap = onClose;
  const tmp = callback5();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let callback = stateFromStores;
  const ref = React.useRef(null);
  let closure_4 = ref;
  const tmp4 = callback(React.useState(null), 2);
  const first = tmp4[0];
  const React = first;
  let closure_6 = tmp4[1];
  const items1 = [stateFromStores, giftIntentType, first, onClose];
  callback = React.useCallback((arg0) => {
    const channelId = arg0;
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
  const items2 = [tmp.container, { paddingBottom: importDefault(dependencyMap[14])().insets.bottom }];
  obj = { style: tmp.messageContainer };
  const callback1 = React.useCallback(() => {
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
      !function sendGiftIntentGif(arg0) {
        return callback(...arguments);
      }(obj);
      onClose();
    }
  }, items1);
  const obj1 = { ref };
  const intl = arg1(dependencyMap[17]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.ZV02cV);
  let obj4 = arg1(dependencyMap[18]);
  obj1.placeholder = obj4.getGiftIntentCustomMessagePlaceholder();
  obj.children = callback3(arg1(dependencyMap[16]).TextArea, obj1);
  const items3 = [callback3(closure_6, obj), , ];
  const obj2 = { style: tmp.pickerContainer };
  const obj3 = { bottomSheetRef: React.useRef(null), channelId };
  let guild_id;
  const ref1 = React.useRef(null);
  const tmp10 = closure_6;
  const tmp11 = callback3;
  const tmp12 = closure_6;
  const tmp13 = callback3;
  const tmp9 = callback4;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp16;
  if (null != guild_id) {
    tmp16 = guild_id;
  }
  obj3.guildId = tmp16;
  const intl2 = arg1(dependencyMap[17]).intl;
  obj3.initialQuery = intl2.string(arg1(dependencyMap[17]).t.jrtJi4);
  obj3.inActionSheet = false;
  obj3.contentHorizontalPadding = importDefault(dependencyMap[9]).space.PX_16;
  let src;
  if (null != first) {
    src = first.src;
  }
  obj3.selectedGifSrc = src;
  obj3.keyboardDismissMode = "on-drag";
  obj3.onPressGIF = callback;
  obj2.children = tmp13(importDefault(dependencyMap[19]), obj3);
  items3[1] = tmp11(tmp12, obj2);
  obj4 = { style: tmp.footer };
  const obj5 = { PresetNothing: "d7825c8630cb00012f54beafd65fb181", ThemedNotifications: "nl.messages.d7825c8630cb00012f54beafd65fb181.compiled.messages" };
  const intl3 = arg1(dependencyMap[17]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[17]).t.TXNS7S);
  obj5.onPress = callback1;
  obj5.disabled = null == first;
  const items4 = [callback3(arg1(dependencyMap[20]).Button, obj5), ];
  const obj6 = {};
  const intl4 = arg1(dependencyMap[17]).intl;
  obj6.text = intl4.string(arg1(dependencyMap[17]).t.ETE/oC);
  obj6.onPress = onClose;
  items4[1] = callback3(arg1(dependencyMap[20]).Button, obj6);
  obj4.children = items4;
  items3[2] = callback4(closure_6, obj4);
  obj.children = items3;
  return tmp9(tmp10, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const MessageSendLocation = arg1(dependencyMap[6]).MessageSendLocation;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.messageContainer = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_8 };
obj.pickerContainer = { flex: 1 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_8 };
obj.footer = { gap: importDefault(dependencyMap[9]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingTop: importDefault(dependencyMap[9]).space.PX_8 };
let closure_12 = obj.createStyles(obj);
let closure_13 = { GIFT_INTENT_GIF: "GIFT_INTENT_GIF" };
const obj2 = { gap: importDefault(dependencyMap[9]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingTop: importDefault(dependencyMap[9]).space.PX_8 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/premium/gifting/native/GiftIntentGifModal.tsx");

export default function GiftIntentGifModal(arg0) {
  let onDismiss;
  ({ channelId: closure_0, giftIntentType: closure_1, onDismiss } = arg0);
  const dependencyMap = onDismiss;
  const items = [onDismiss];
  let closure_3 = React.useCallback(() => {
    let arr = callback2(onDismiss[21]);
    arr = arr.pop();
    if (null != onDismiss) {
      onDismiss();
    }
  }, items);
  const tmp = importDefault(dependencyMap[22])(() => {
    let obj = {};
    obj = {};
    const intl = callback(onDismiss[17]).intl;
    obj.title = intl.string(callback(onDismiss[17]).t.PQRuGc);
    obj.headerLeft = callback(onDismiss[23]).getHeaderCloseButton(closure_3);
    obj.render = function render() {
      return callback(closure_15, { channelId: closure_0, giftIntentType: closure_1, onClose: closure_3 });
    };
    obj[constants.GIFT_INTENT_GIF] = obj;
    return obj;
  });
  return callback3(arg1(dependencyMap[24]).Navigator, {
    initialRouteName: constants.GIFT_INTENT_GIF,
    screens: importDefault(dependencyMap[22])(() => {
      let obj = {};
      obj = {};
      const intl = callback(onDismiss[17]).intl;
      obj.title = intl.string(callback(onDismiss[17]).t.PQRuGc);
      obj.headerLeft = callback(onDismiss[23]).getHeaderCloseButton(closure_3);
      obj.render = function render() {
        return callback(closure_15, { channelId: closure_0, giftIntentType: closure_1, onClose: closure_3 });
      };
      obj[constants.GIFT_INTENT_GIF] = obj;
      return obj;
    })
  });
};
