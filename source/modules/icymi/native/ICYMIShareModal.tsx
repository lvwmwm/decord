// Module ID: 15276
// Function ID: 116494
// Name: Screenshot
// Dependencies: [57, 5, 31, 27, 1348, 4468, 4467, 653, 8857, 4123, 33, 4130, 689, 8408, 1212, 15277, 3831, 1450, 3977, 8868, 15278, 4662, 3941, 3842, 5160, 9926, 9935, 4543, 4337, 7088, 1327, 6923, 8025, 491, 4665, 6691, 8026, 1557, 477, 5094, 9158, 5087, 9915, 2]
// Exports: GameShareModal, GuildEventShareModal

// Module 15276 (Screenshot)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import { View } from "Button";
import closure_7 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AbortCodes } from "ME";
import { UserRowModes } from "UserRowModes";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import jsxProd from "v1";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
const require = arg1;
function Screenshot(setUri) {
  setUri = setUri.setUri;
  const tmp = _createForOfIteratorHelperLoose();
  const ref = React.useRef(null);
  const items = [setUri];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      const current = outer1_1.current;
      let nextPromise;
      if (null != current) {
        if (null != current.capture) {
          nextPromise = current.capture().then((arg0) => {
            outer2_0(arg0);
          });
          const captureResult = current.capture();
        }
      }
      return nextPromise;
    }, 500);
  }, items);
  let obj = setUri(8868);
  obj = { style: { position: "absolute", top: -1000, overflow: "hidden" } };
  obj = { style: items1 };
  items1 = [tmp.preview, { width: ref(1450)().width }];
  const clientThemesOverride = obj.useClientThemesOverride();
  const obj1 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 } };
  const obj2 = { style: tmp.base };
  const tmp4 = ref(3977)();
  const obj3 = { absolute: true, wide: true, tall: true, mix: true };
  const obj4 = {};
  const tmp6 = ref(15278);
  obj4.dark = setUri(3941).OverlayOpacity.LEVEL_7;
  obj4.light = setUri(3941).OverlayOpacity.LEVEL_8;
  obj3.mixAmount = obj4;
  const items2 = [callback2(ref(4662), obj3), ];
  const obj5 = { gradient: tmp4 };
  const obj6 = { style: items3 };
  items3 = [tmp.contentContainer, clientThemesOverride];
  obj6.children = setUri.render();
  obj5.children = callback2(View, obj6);
  items2[1] = callback2(setUri(3842).ThemeContextProvider, obj5);
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
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const tmp2 = insets(React.useState(""), 2);
  const first = tmp2[0];
  insets = importDefault(first[24])({ includeKeyboardHeight: true }).insets;
  let obj = onSend(first[25]);
  const shareChatInputActions = obj.useShareChatInputActions(tmp4);
  let items = [first, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback = React.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = onSend(first[14]).intl;
    let stringResult = intl2.string(onSend(first[14]).t.TXNS7S);
  } else {
    const intl = onSend(first[14]).intl;
    obj = { count };
    stringResult = intl.formatToPlainString(onSend(first[14]).t.jWtYUm, obj);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp15Result = null;
  if (0 !== count) {
    obj = { style: tmp12 };
    const obj1 = { inputRef: textInputRef, text: first, onChange: tmp4, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    const items2 = [callback2(importDefault(first[26]), obj1), ];
    const obj2 = { variant: "primary", size: "md", text: stringResult, disabled: tmp13 };
    let tmp22;
    if (!isSending) {
      tmp22 = callback;
    }
    obj2.onPress = tmp22;
    obj2.loading = isSending;
    items2[1] = callback2(onSend(first[27]).Button, obj2);
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
    ({ linkText, render } = global);
    ({ forwardToChannel, onShare } = global);
    _handleSendForwards = undefined;
    c6 = undefined;
    useState = undefined;
    _handleSendForwards = function _handleSendForwards() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer1_4(tmp);
      return obj(...arguments);
    };
    tmp = forwardToChannel(_handleSendForwards.useState([]), 2);
    first = tmp[0];
    _handleSendForwards = first;
    tmp2 = forwardToChannel(_handleSendForwards.useState(false), 2);
    c6 = tmp2[1];
    tmp3 = forwardToChannel(_handleSendForwards.useState(null), 2);
    useState = tmp3[0];
    callback = _handleSendForwards.useCallback(() => {
      let arr = outer1_1(render[28]);
      arr = arr.pop();
    }, []);
    tmp5 = c15();
    tmp6 = require("useSafeAreaInsets")();
    DraftType = tmp6;
    height = require("useWindowDimensions")().height;
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
    tmp8 = c6;
    tmp9 = jsx;
    tmp10 = c6;
    tmp11 = jsx;
    obj1 = {
      title,
      headerTitle() {
            return outer1_13(title(render[40]).GenericHeaderTitle, { title });
          },
      headerTitleAlign: "center"
    };
    obj4 = require("set");
    num = undefined;
    if (obj4.isIOS()) {
      num = 0;
    }
    obj1.headerStatusBarHeight = num;
    obj5 = require("HeaderBackImage");
    obj1.headerLeft = obj5.getHeaderCloseButton(callback);
    obj.children = tmp11(require("Background").Header, obj1);
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
    tmp15 = require("SearchableDestinationList");
    sum = tmp6.bottom + require("_createForOfIteratorHelperLoose").space.PX_8;
    obj3.insetEnd = sum + require("_createForOfIteratorHelperLoose").space.PX_96;
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
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.headerContainer = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.preview = obj1;
_createForOfIteratorHelperLoose.base = { position: "relative" };
_createForOfIteratorHelperLoose.contentContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.footer = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let result = require("result").fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
  event = event.event;
  let obj = require(8408) /* SHARE_EVENT_DETAILS_LINK */;
  obj = { guildId: event.guild_id, guildEventId: event.id };
  obj = {};
  const result = obj.SHARE_EVENT_DETAILS_LINK(obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["7TVSLK"]);
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
  content = content.content;
  const obj = {};
  const intl = content(1212).intl;
  obj.title = intl.string(content(1212).t["59CWHK"]);
  obj.linkText = "";
  obj.forwardToChannel = (() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_4(tmp);
    return function() {
      return callback(...arguments);
    };
  })();
  return callback2(ICYMIShareModal, obj);
};
