// Module ID: 9866
// Function ID: 76379
// Name: ForwardModal
// Dependencies: []
// Exports: default

// Module 9866 (ForwardModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const MAX_DESTINATION_COUNT = arg1(dependencyMap[9]).MAX_DESTINATION_COUNT;
const UserRowModes = arg1(dependencyMap[10]).UserRowModes;
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16, paddingVertical: importDefault(dependencyMap[13]).space.PX_8, backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.headerContainer = obj;
obj.header = { NU: true, SMS_CODE_LENGTH: true, EPOCH_AUTHENTICATOR_LENGTH: true };
const obj1 = { label: "isArray", accessibilityRole: "accessibilityRole", backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj1;
let closure_16 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[47]).fileFinishedImporting("modules/forwarding/native/ForwardModal.tsx");

export default function ForwardModal(message) {
  message = message.message;
  const arg1 = message;
  const forwardOptions = message.forwardOptions;
  const importDefault = forwardOptions;
  let prop = message.initialSelectedDestinations;
  if (prop === undefined) {
    prop = [];
  }
  const source = message.source;
  const dependencyMap = source;
  let closure_3 = customSendHandler;
  let callback;
  let React;
  let View;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let MAX_DESTINATION_COUNT;
  let constants;
  let callback2;
  let first1;
  let callback3;
  let closure_17;
  let first2;
  let closure_19;
  let tmp14;
  let callback4;
  let closure_22;
  const tmp = callback3();
  const height = importDefault(dependencyMap[14])({ ignoreKeyboard: true }).height;
  callback = height;
  const channel_id = message.channel_id;
  React = channel_id;
  let id = message.id;
  View = id;
  const items = [channel_id];
  const memo = React.useMemo(() => message(source[15]).getDestinationIdFromChannelId(channel_id), items);
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  closure_7 = tmp3[1];
  let obj = arg1(dependencyMap[16]);
  const items1 = [closure_10, closure_8, closure_11, closure_7];
  const items2 = [channel_id, id, source, message];
  const stateFromStores = obj.useStateFromStores(items1, () => {
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
  closure_8 = stateFromStores;
  let obj1 = arg1(dependencyMap[16]);
  const items3 = [closure_9];
  const items4 = [channel_id];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => stateFromStores1.getChannel(channel_id), items4);
  closure_9 = stateFromStores1;
  id = undefined;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  closure_10 = null != id;
  let obj2 = arg1(dependencyMap[17]);
  const trackForwardAddRecipientOnce = obj2.useTrackForwardAddRecipientOnce();
  closure_11 = trackForwardAddRecipientOnce;
  let obj3 = arg1(dependencyMap[17]);
  const trackForwardEditSearchOnce = obj3.useTrackForwardEditSearchOnce();
  MAX_DESTINATION_COUNT = trackForwardEditSearchOnce;
  constants = React.useRef(0);
  callback2 = React.useRef(0);
  const tmp10 = callback(React.useState(""), 2);
  first1 = tmp10[0];
  callback3 = tmp10[1];
  closure_17 = React.useRef("");
  const items5 = [channel_id, id, trackForwardEditSearchOnce];
  callback = React.useCallback((current) => {
    callback(current);
    if (current !== ref3.current) {
      ref2.current = ref2.current + 1;
      if ("" !== current) {
        trackForwardEditSearchOnce(channel_id, id);
      }
    }
    ref3.current = current;
  }, items5);
  const tmp13 = callback(React.useState(prop), 2);
  first2 = tmp13[0];
  closure_19 = tmp13[1];
  tmp14 = length >= MAX_DESTINATION_COUNT;
  const items6 = [first2, channel_id, id, first1, trackForwardAddRecipientOnce];
  const effect = React.useEffect(() => {
    if (first2.length > 0) {
      trackForwardAddRecipientOnce(channel_id, id, "" !== first1);
    }
  }, items6);
  const items7 = [channel_id, id];
  const callback1 = React.useCallback((arg0) => {
    callback2(arg0);
    ref.current = ref.current + 1;
  }, []);
  callback2 = React.useCallback(() => {
    let obj = message(source[17]);
    obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    message(source[18]).closeForwardModal();
  }, items7);
  let obj4 = arg1(dependencyMap[19]);
  obj4.useNavigatorBackPressHandler(() => {
    let obj = message(source[17]);
    obj = { channelId: channel_id, messageId: id, numDestinationChanges: ref.current, numQueryChanges: ref2.current };
    obj.trackForwardCancel(obj);
    return false;
  });
  const items8 = [stateFromStores, stateFromStores1];
  callback3 = React.useCallback((type) => {
    let destinationIsUnavailable;
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        destinationIsUnavailable = message(source[20]).getDestinationIsUnavailable(stateFromStores, stateFromStores1, type);
        const obj = message(source[20]);
      }
    }
    return destinationIsUnavailable;
  }, items8);
  const items9 = [channel_id, forwardOptions, id, stateFromStores, first2, source, message.customSendHandler];
  callback4 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = customSendHandler(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items9);
  const items10 = [callback4];
  const items11 = [channel_id, id];
  const callback5 = React.useCallback(() => {
    callback4();
  }, items10);
  closure_22 = React.useCallback(() => {
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
  const memo1 = React.useMemo(() => {
    const obj = {};
    let str = "100%";
    if (obj2.isAndroid()) {
      str = height;
    }
    obj.height = str;
    return obj;
  }, items12);
  if (first2.length <= 1) {
    const intl2 = arg1(dependencyMap[22]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[22]).t.TXNS7S);
  } else {
    const intl = arg1(dependencyMap[22]).intl;
    obj = { count: length };
    stringResult = intl.formatToPlainString(arg1(dependencyMap[22]).t.jWtYUm, obj);
  }
  obj = { style: memo1 };
  obj1 = { style: tmp.headerContainer };
  obj2 = { headerStyle: tmp.header };
  const intl3 = arg1(dependencyMap[22]).intl;
  obj2.title = intl3.string(arg1(dependencyMap[22]).t.+SkRRj);
  obj2.headerTitle = function headerTitle(children) {
    let obj = { title: children.children, subtitleColor: "text-feedback-warning" };
    let formatToPlainStringResult;
    if (tmp14) {
      const intl = message(source[22]).intl;
      obj = { count: trackForwardEditSearchOnce };
      formatToPlainStringResult = intl.formatToPlainString(message(source[22]).t.3Fbkir, obj);
    }
    obj.subtitle = formatToPlainStringResult;
    obj.variant = "redesign/heading-18/bold";
    return closure_14(message(source[38]).GenericHeaderTitle, obj);
  };
  obj2.headerTitleAlign = "center";
  obj2.headerLeft = arg1(dependencyMap[39]).getHeaderCloseButton(callback2);
  obj2.headerRight = function headerRight(arg0) {
    let tmp = null;
    if (closure_10) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onPress"] = closure_22;
      const intl = message(source[22]).intl;
      obj["accessibilityLabel"] = intl.string(message(source[22]).t.Xrt5Po);
      obj["IconComponent"] = message(source[41]).LinkIcon;
      tmp = ref2(message(source[40]).HeaderActionButton, obj);
    }
    return tmp;
  };
  const obj10 = arg1(dependencyMap[39]);
  const tmp28 = first1;
  let num3;
  if (obj11.isIOS()) {
    if (!obj12.getIsWindowLarge()) {
      num3 = 0;
    }
    const obj12 = arg1(dependencyMap[42]);
  }
  obj2.headerStatusBarHeight = num3;
  obj1.children = callback2(arg1(dependencyMap[37]).Header, obj2);
  const items13 = [callback2(View, obj1), ];
  obj3 = { style: tmp.container };
  const items14 = [callback2(importDefault(dependencyMap[43]), { absolute: true }), , ];
  obj4 = { rowMode: constants.TOGGLE, initialSelectedDestinations: prop, onSelectedDestinationChange: callback1, onSearchTextChange: callback, getRowIsUnavailable: callback3, originDestination: memo, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: tmp14 };
  items14[1] = callback2(importDefault(dependencyMap[44]), obj4);
  if (null != stateFromStores) {
    const obj5 = { message: stateFromStores, forwardOptions, sendLabel: stringResult, canSend: length > 0, selectedDestinations: first2, isSending: first, onSend: callback4 };
    let tmp45Result = callback2(arg1(dependencyMap[45]).ForwardMessageFooter, obj5);
  } else {
    const obj6 = { isVisible: length > 0, floatingBackgroundColor: tmp.container.backgroundColor };
    if (1 === length) {
      const intl5 = arg1(dependencyMap[22]).intl;
      let stringResult1 = intl5.string(arg1(dependencyMap[22]).t.TXNS7S);
    } else {
      const intl4 = arg1(dependencyMap[22]).intl;
      const obj7 = { count: length };
      stringResult1 = intl4.formatToPlainString(arg1(dependencyMap[22]).t.jWtYUm, obj7);
    }
    obj6.text = stringResult1;
    let tmp40;
    if (!first) {
      tmp40 = callback5;
    }
    obj6.onPress = tmp40;
    obj6.loading = first;
    tmp45Result = callback2(arg1(dependencyMap[46]).ModalFloatingAction, obj6);
    const tmp45 = callback2;
  }
  items14[2] = tmp45Result;
  obj3.children = items14;
  items13[1] = first1(View, obj3);
  obj.children = items13;
  return tmp28(View, obj);
};
