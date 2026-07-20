// Module ID: 15096
// Function ID: 113902
// Name: Screenshot
// Dependencies: []
// Exports: GameShareModal, GuildEventShareModal

// Module 15096 (Screenshot)
function Screenshot(setUri) {
  setUri = setUri.setUri;
  const arg1 = setUri;
  const tmp = callback4();
  const ref = React.useRef(null);
  const importDefault = ref;
  const items = [setUri];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let nextPromise;
      if (null != current) {
        if (null != current.capture) {
          nextPromise = current.capture().then((arg0) => {
            callback(arg0);
          });
          const captureResult = current.capture();
        }
      }
      return nextPromise;
    }, 500);
  }, items);
  let obj = arg1(dependencyMap[19]);
  obj = { style: {} };
  obj = { style: items1 };
  const items1 = [tmp.preview, { width: importDefault(dependencyMap[17])().width }];
  const clientThemesOverride = obj.useClientThemesOverride();
  const obj1 = { ref, options: {} };
  const obj2 = { style: tmp.base };
  const tmp4 = importDefault(dependencyMap[18])();
  const obj3 = {};
  const obj4 = {};
  const tmp6 = importDefault(dependencyMap[20]);
  obj4.dark = arg1(dependencyMap[22]).OverlayOpacity.LEVEL_7;
  obj4.light = arg1(dependencyMap[22]).OverlayOpacity.LEVEL_8;
  obj3.mixAmount = obj4;
  const items2 = [callback2(importDefault(dependencyMap[21]), obj3), ];
  const obj5 = { gradient: tmp4 };
  const obj6 = { style: items3 };
  const items3 = [tmp.contentContainer, clientThemesOverride];
  obj6.children = setUri.render();
  obj5.children = callback2(View, obj6);
  items2[1] = callback2(arg1(dependencyMap[23]).ThemeContextProvider, obj5);
  obj2.children = items2;
  obj1.children = callback3(View, obj2);
  obj.children = callback2(tmp6, obj1);
  obj.children = callback2(View, obj);
  return callback2(View, obj);
}
function GravityShareFooter(arg0) {
  let count;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isSending;
  let onSend;
  let textInputRef;
  ({ count, isSending, onSend } = arg0);
  const arg1 = onSend;
  const tmp = callback4();
  const importDefault = tmp;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const insets = importDefault(dependencyMap[24])({ includeKeyboardHeight: true }).insets;
  let callback = insets;
  let obj = arg1(dependencyMap[25]);
  const shareChatInputActions = obj.useShareChatInputActions(tmp4);
  const items = [first, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  callback = React.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = arg1(dependencyMap[14]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[14]).t.TXNS7S);
  } else {
    const intl = arg1(dependencyMap[14]).intl;
    obj = { count };
    stringResult = intl.formatToPlainString(arg1(dependencyMap[14]).t.jWtYUm, obj);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp15Result = null;
  if (0 !== count) {
    obj = { style: tmp12 };
    const obj1 = { inputRef: textInputRef, text: first, onChange: tmp4, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    const items2 = [callback2(importDefault(dependencyMap[26]), obj1), ];
    const obj2 = { text: stringResult, disabled: tmp13 };
    let tmp22;
    if (!isSending) {
      tmp22 = callback;
    }
    obj2.onPress = tmp22;
    obj2.loading = isSending;
    items2[1] = callback2(arg1(dependencyMap[27]).Button, obj2);
    obj.children = items2;
    tmp15Result = closure_14(View, obj);
    const tmp15 = closure_14;
    const tmp16 = View;
    const tmp20 = callback2;
  }
  return tmp15Result;
}
class ICYMIShareModal {
  constructor(arg0) {
    title = global.title;
    arg1 = title;
    ({ linkText: closure_1, render } = global);
    dependencyMap = render;
    ({ forwardToChannel: closure_3, onShare: closure_4 } = global);
    _handleSendForwards = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    _handleSendForwards = function _handleSendForwards() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback2(tmp);
      const _handleSendForwards = obj;
      return obj(...arguments);
    };
    tmp = forwardToChannel(_handleSendForwards.useState([]), 2);
    first = tmp[0];
    _handleSendForwards = first;
    tmp2 = forwardToChannel(_handleSendForwards.useState(false), 2);
    closure_6 = tmp2[1];
    tmp3 = forwardToChannel(_handleSendForwards.useState(null), 2);
    closure_7 = tmp3[0];
    callback = _handleSendForwards.useCallback(() => {
      let arr = callback(render[28]);
      arr = arr.pop();
    }, []);
    tmp5 = closure_15();
    tmp6 = importDefault(dependencyMap[37])();
    DraftType = tmp6;
    height = importDefault(dependencyMap[17])().height;
    closure_9 = height;
    items = [, ];
    items[0] = tmp6.bottom;
    items[1] = height;
    obj = {
      style: _handleSendForwards.useMemo(() => {
            const obj = {};
            let str = "100%";
            if (obj2.isAndroid()) {
              str = height + tmp6.bottom;
            }
            obj.height = str;
            return obj;
          }, items)
    };
    obj = { style: tmp5.headerContainer };
    tmp7 = jsxs;
    tmp8 = closure_6;
    tmp9 = jsx;
    tmp10 = closure_6;
    tmp11 = jsx;
    obj1 = {
      title,
      headerTitle() {
            return callback3(title(render[40]).GenericHeaderTitle, { title });
          },
      headerTitleAlign: "center"
    };
    obj4 = arg1(dependencyMap[38]);
    num = undefined;
    if (obj4.isIOS()) {
      num = 0;
    }
    obj1.headerStatusBarHeight = num;
    obj5 = arg1(dependencyMap[41]);
    obj1.headerLeft = obj5.getHeaderCloseButton(callback);
    obj.children = tmp11(arg1(dependencyMap[39]).Header, obj1);
    items1 = [, , , ];
    items1[0] = tmp9(tmp10, obj);
    tmp12 = null != render;
    if (tmp12) {
      tmp13 = jsx;
      tmp14 = Screenshot;
      obj2 = {};
      obj2.render = render;
      obj2.setUri = tmp3[1];
      tmp12 = jsx(Screenshot, obj2);
    }
    items1[1] = tmp12;
    obj3 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp[1], originDestination: global.originDestinationId };
    tmp15 = importDefault(dependencyMap[42]);
    sum = tmp6.bottom + importDefault(dependencyMap[12]).space.PX_8;
    obj3.insetEnd = sum + importDefault(dependencyMap[12]).space.PX_96;
    obj3.disableGradient = true;
    obj3.disableStickySections = true;
    items1[2] = jsx(tmp15, obj3);
    obj4 = {
      count: first.length,
      isSending: tmp2[0],
      onSend: function handleSendForwards(arg0) {
            return _handleSendForwards(...arguments);
          }
    };
    items1[3] = jsx(GravityShareFooter, obj4);
    obj.children = items1;
    return tmp7(tmp8, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[5]).DraftType;
let closure_9 = importDefault(dependencyMap[6]);
const AbortCodes = arg1(dependencyMap[7]).AbortCodes;
const UserRowModes = arg1(dependencyMap[8]).UserRowModes;
const MessageSendLocation = arg1(dependencyMap[9]).MessageSendLocation;
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16, paddingTop: importDefault(dependencyMap[12]).space.PX_8 };
obj.headerContainer = obj;
const tmp2 = arg1(dependencyMap[10]);
obj.preview = { borderRadius: importDefault(dependencyMap[12]).radii.md, borderColor: importDefault(dependencyMap[12]).colors.BORDER_STRONG };
obj.base = { position: "relative" };
const obj1 = { borderRadius: importDefault(dependencyMap[12]).radii.md, borderColor: importDefault(dependencyMap[12]).colors.BORDER_STRONG };
obj.contentContainer = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
const obj2 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
obj.footer = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16, paddingVertical: importDefault(dependencyMap[12]).space.PX_12, gap: importDefault(dependencyMap[12]).space.PX_12, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE };
let closure_15 = obj.createStyles(obj);
const obj3 = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16, paddingVertical: importDefault(dependencyMap[12]).space.PX_12, gap: importDefault(dependencyMap[12]).space.PX_12, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
  event = event.event;
  let obj = arg1(dependencyMap[13]);
  obj = { guildId: event.guild_id, guildEventId: event.id };
  obj = {};
  const result = obj.SHARE_EVENT_DETAILS_LINK(obj);
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.7TVSLK);
  let tmp4;
  if (null != event.channel_id) {
    const obj1 = { type: "channel", id: event.channel_id };
    tmp4 = obj1;
  }
  obj.originDestinationId = tmp4;
  obj.linkText = result;
  return closure_13(ICYMIShareModal, obj);
};
export const GameShareModal = function GameShareModal(content) {
  const arg1 = content.content;
  const obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.59CWHK);
  obj.linkText = "";
  obj.forwardToChannel = () => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }();
  return callback2(ICYMIShareModal, obj);
};
