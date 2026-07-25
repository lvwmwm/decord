// Module ID: 9833
// Function ID: 76249
// Name: ForwardModal
// Dependencies: [5, 57, 31, 27, 5830, 8108, 1348, 4350, 8133, 9834, 8745, 33, 4131, 689, 1450, 6106, 566, 9831, 9830, 5093, 6105, 3832, 1212, 1327, 9835, 4473, 9836, 9837, 4139, 6103, 9839, 4313, 4100, 4101, 3831, 5490, 477, 9842, 6695, 4075, 4663, 9843, 9853, 9864, 2]
// Exports: default

// Module 9833 (ForwardModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import closure_5 from "_createForOfIteratorHelperLoose";
import { View } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { MAX_DESTINATION_COUNT } from "MAX_DESTINATION_COUNT";
import { UserRowModes } from "UserRowModes";
import jsxProd from "IMPACT_LIGHT";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
const require = arg1;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/forwarding/native/ForwardModal.tsx");

export default function ForwardModal(message) {
  message = message.message;
  const forwardOptions = message.forwardOptions;
  let prop = message.initialSelectedDestinations;
  if (prop === undefined) {
    prop = [];
  }
  const source = message.source;
  const customSendHandler = message.customSendHandler;
  let height;
  let channel_id;
  let id;
  let closure_7;
  let stateFromStores;
  let stateFromStores1;
  let closure_10;
  let trackForwardAddRecipientOnce;
  let trackForwardEditSearchOnce;
  let UserRowModes;
  let callback;
  let first1;
  let _createForOfIteratorHelperLoose;
  let closure_17;
  let first2;
  let closure_19;
  let callback4;
  let closure_21;
  let tmp = _createForOfIteratorHelperLoose();
  height = forwardOptions(source[14])({ ignoreKeyboard: true }).height;
  channel_id = message.channel_id;
  id = message.id;
  const items = [channel_id];
  const memo = channel_id.useMemo(() => message(source[15]).getDestinationIdFromChannelId(channel_id), items);
  const tmp3 = height(channel_id.useState(false), 2);
  const first = tmp3[0];
  closure_7 = tmp3[1];
  let obj = message(source[16]);
  const items1 = [closure_10, stateFromStores, trackForwardAddRecipientOnce, closure_7];
  const items2 = [channel_id, id, source, message];
  stateFromStores = obj.useStateFromStores(items1, () => {
    if ("checkpoint" !== source) {
      let message = message2.getMessage(channel_id, id);
      if (null == message) {
        message = trackForwardAddRecipientOnce.getMessage(id);
      }
      if (null == message) {
        message = stateFromStores.getMessage(id);
      }
      if (null == message) {
        message = message.getMessage(channel_id, id);
      }
    }
    return message;
  }, items2);
  let obj1 = message(source[16]);
  const items3 = [stateFromStores1];
  const items4 = [channel_id];
  stateFromStores1 = obj1.useStateFromStores(items3, () => stateFromStores1.getChannel(channel_id), items4);
  id = undefined;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  closure_10 = null != id;
  let obj2 = message(source[17]);
  trackForwardAddRecipientOnce = obj2.useTrackForwardAddRecipientOnce();
  let obj3 = message(source[17]);
  trackForwardEditSearchOnce = obj3.useTrackForwardEditSearchOnce();
  UserRowModes = channel_id.useRef(0);
  callback = channel_id.useRef(0);
  const tmp10 = height(channel_id.useState(""), 2);
  first1 = tmp10[0];
  _createForOfIteratorHelperLoose = tmp10[1];
  closure_17 = channel_id.useRef("");
  const items5 = [channel_id, id, trackForwardEditSearchOnce];
  callback = channel_id.useCallback((current) => {
    callback(current);
    if (current !== ref3.current) {
      ref2.current = ref2.current + 1;
      if ("" !== current) {
        trackForwardEditSearchOnce(channel_id, id);
      }
    }
    ref3.current = current;
  }, items5);
  const tmp13 = height(channel_id.useState(prop), 2);
  first2 = tmp13[0];
  closure_19 = tmp13[1];
  const items6 = [first2, channel_id, id, first1, trackForwardAddRecipientOnce];
  const effect = channel_id.useEffect(() => {
    if (first2.length > 0) {
      trackForwardAddRecipientOnce(channel_id, id, "" !== first1);
    }
  }, items6);
  const items7 = [channel_id, id];
  const callback1 = channel_id.useCallback((arg0) => {
    callback2(arg0);
    ref.current = ref.current + 1;
  }, []);
  const callback2 = channel_id.useCallback(() => {
    let obj = message(source[17]);
    obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    message(source[18]).closeForwardModal();
  }, items7);
  let obj4 = message(source[19]);
  obj4.useNavigatorBackPressHandler(() => {
    let obj = message(source[17]);
    obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    return false;
  });
  const items8 = [stateFromStores, stateFromStores1];
  const callback3 = channel_id.useCallback((type) => {
    let destinationIsUnavailable;
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        destinationIsUnavailable = message(source[20]).getDestinationIsUnavailable(stateFromStores, stateFromStores1, type);
        const obj = message(source[20]);
      }
    }
    return destinationIsUnavailable;
  }, items8);
  const items9 = [channel_id, forwardOptions, id, stateFromStores, first2, source, customSendHandler];
  callback4 = channel_id.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = customSendHandler(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items9);
  const items10 = [callback4];
  const items11 = [channel_id, id];
  const callback5 = channel_id.useCallback(() => {
    callback4();
  }, items10);
  closure_21 = channel_id.useCallback(() => {
    const channel = stateFromStores1.getChannel(channel_id);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    const channelPermalink = message(source[31]).getChannelPermalink(guild_id, channel_id, id);
    const obj = message(source[31]);
    const result = message(source[32]).triggerHapticFeedback(forwardOptions(source[33]).IMPACT_LIGHT);
    const obj2 = message(source[32]);
    message(source[34]).presentLinkCopied();
    const obj3 = message(source[34]);
    message(source[35]).copy(channelPermalink);
    const obj4 = message(source[35]);
    message(source[17]).trackForwardCopyLink(channel_id, id);
  }, items11);
  const items12 = [height];
  const memo1 = channel_id.useMemo(() => {
    const obj = {};
    let str = "100%";
    if (obj2.isAndroid()) {
      str = height;
    }
    obj.height = str;
    return obj;
  }, items12);
  if (first2.length <= 1) {
    const intl2 = message(source[22]).intl;
    let stringResult = intl2.string(message(source[22]).t.TXNS7S);
  } else {
    let intl = message(source[22]).intl;
    obj = { count: length };
    stringResult = intl.formatToPlainString(message(source[22]).t.jWtYUm, obj);
  }
  obj = { style: memo1 };
  obj1 = {};
  const intl3 = message(source[22]).intl;
  obj1.title = intl3.string(message(source[22]).t["+SkRRj"]);
  obj1.subtitleColor = "text-feedback-warning";
  let formatToPlainStringResult;
  if (first2.length >= trackForwardEditSearchOnce) {
    const intl4 = message(source[22]).intl;
    obj2 = { count: trackForwardEditSearchOnce };
    formatToPlainStringResult = intl4.formatToPlainString(message(source[22]).t["3Fbkir"], obj2);
  }
  obj1.subtitle = formatToPlainStringResult;
  obj1.headerRight = function headerRight(arg0) {
    let tmp = null;
    if (closure_10) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onPress"] = closure_21;
      const intl = message(source[22]).intl;
      obj["accessibilityLabel"] = intl.string(message(source[22]).t.Xrt5Po);
      obj["IconComponent"] = message(source[39]).LinkIcon;
      tmp = ref2(message(source[38]).HeaderActionButton, obj);
    }
    return tmp;
  };
  obj1.onClose = callback2;
  const items13 = [callback(forwardOptions(source[37]), obj1), ];
  obj3 = { style: tmp.container };
  const items14 = [callback(forwardOptions(source[40]), { absolute: true }), , ];
  obj4 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: prop, onSelectedDestinationChange: callback1, onSearchTextChange: callback, getRowIsUnavailable: callback3, originDestination: memo, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first2.length >= trackForwardEditSearchOnce };
  items14[1] = callback(forwardOptions(source[41]), obj4);
  if (null != stateFromStores) {
    const obj5 = { message: stateFromStores, forwardOptions, sendLabel: stringResult, canSend: length > 0, selectedDestinations: first2, isSending: first, onSend: callback4 };
    let tmp48Result = callback(message(source[42]).ForwardMessageFooter, obj5);
  } else {
    const obj6 = { isVisible: length > 0, floatingBackgroundColor: tmp.container.backgroundColor };
    if (1 === length) {
      const intl6 = message(source[22]).intl;
      let stringResult1 = intl6.string(message(source[22]).t.TXNS7S);
    } else {
      const intl5 = message(source[22]).intl;
      const obj7 = { count: length };
      stringResult1 = intl5.formatToPlainString(message(source[22]).t.jWtYUm, obj7);
    }
    obj6.text = stringResult1;
    let tmp43;
    if (!first) {
      tmp43 = callback5;
    }
    obj6.onPress = tmp43;
    obj6.loading = first;
    tmp48Result = callback(message(source[43]).ModalFloatingAction, obj6);
    const tmp48 = callback;
  }
  items14[2] = tmp48Result;
  obj3.children = items14;
  items13[1] = first1(id, obj3);
  obj.children = items13;
  return first1(id, obj);
};
