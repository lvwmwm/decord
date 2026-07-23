// Module ID: 15582
// Function ID: 120133
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 4349, 33, 4130, 15583, 689, 4639, 4126, 1212, 4086, 3800, 5464, 566, 8492, 7621, 15584, 9293, 4660, 15585, 2]
// Exports: default

// Module 15582 (_createForOfIteratorHelperLoose)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function HiddenMedia(length) {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = {};
  let items = [
    Array.from({ length: length.count }, (arg0, arg1) => {
      let obj = { style: tmp.mediaPlaceholderCard };
      const items = [outer1_6(tmp(outer1_2[7]).ImageWarningIcon, { size: "lg", color: "text-muted" }), ];
      obj = { variant: "text-sm/medium", color: "text-muted" };
      const intl = tmp(outer1_2[9]).intl;
      obj.children = intl.string(tmp(outer1_2[9]).t.B2xSxL);
      items[1] = outer1_6(tmp(outer1_2[8]).Text, obj);
      obj.children = items;
      return outer1_7(outer1_4, obj, arg1);
    }),

  ];
  obj = { style: tmp.mediaHiddenRow };
  const items1 = [callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, { size: "sm", color: "text-muted" }), ];
  obj = { variant: "text-sm/normal", color: "text-muted" };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["VGf+K3"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = { renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: false, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false, restrictedPreview: true };
_createForOfIteratorHelperLoose = { container: { flexDirection: "column" } };
_createForOfIteratorHelperLoose = { marginLeft: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET };
_createForOfIteratorHelperLoose.hiddenMedia = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.messageRow = { position: "relative" };
let obj1 = { position: "absolute", top: 0, left: 0, width: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, height: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_AVATAR_SIZE };
_createForOfIteratorHelperLoose.avatarHitbox = obj1;
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.dateDivider = obj2;
let obj3 = { flex: 1, height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.dividerLine = obj3;
let obj4 = { alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, height: 160, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.mediaPlaceholderCard = obj4;
const obj5 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.mediaHiddenRow = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default function RestrictedMessagePreviewList(channelId) {
  let iter3;
  channelId = channelId.channelId;
  let tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  analyticsLocations = importDefault(analyticsLocations[12])().analyticsLocations;
  let obj = channelId(analyticsLocations[13]);
  let items = [_isNativeReflectConstruct];
  let items1 = [channelId];
  const items2 = [channelId, analyticsLocations];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    messages = messages.getMessages(channelId);
    return messages.toArray();
  }, items1);
  callback = callback.useCallback((userId) => {

  }, items2);
  const memo = callback.useMemo(() => {
    tmp = tmp(analyticsLocations[15]);
    tmp = new tmp();
    tmp.setOptions(outer1_9);
    return tmp;
  }, []);
  const items3 = [tmp, memo, callback];
  _isNativeReflectConstruct = callback.useCallback((message) => {
    let closure_0 = message;
    tmp = tmp(analyticsLocations[16])(message);
    let obj = {};
    obj = { style: tmp.messageRow };
    obj = { pointerEvents: "none", message, rowGenerator: memo };
    const items = [items4(tmp(analyticsLocations[17]), obj), ];
    const obj1 = { style: tmp.avatarHitbox, accessibilityRole: "button" };
    const intl = channelId(analyticsLocations[9]).intl;
    obj1.accessibilityLabel = intl.string(channelId(analyticsLocations[9]).t.iXAna6);
    obj1.onPress = function onPress() {
      return outer1_3(message.author.id);
    };
    items[1] = items4(channelId(analyticsLocations[18]).PressableOpacity, obj1);
    obj.children = items;
    const items1 = [outer1_7(memo, obj), ];
    let tmp4 = tmp > 0;
    if (tmp4) {
      const obj2 = { style: tmp.hiddenMedia };
      const obj3 = { count: tmp };
      obj2.children = items4(outer1_13, obj3);
      tmp4 = items4(memo, obj2);
    }
    items1[1] = tmp4;
    obj.children = items1;
    return outer1_7(outer1_8, obj);
  }, items3);
  const items4 = [];
  const tmp5 = _createForOfIteratorHelperLoose(stateFromStoresArray);
  const iter = tmp5();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      if (value.blocked) {
        let tmp7 = items4[items4.length - 1];
        let tmp8 = null;
        if (null != tmp7) {
          tmp8 = null;
          if ("blocked" === tmp7.type) {
            tmp8 = tmp7;
          }
        }
        if (null != tmp8) {
          let tmp9 = channelId;
          let tmp10 = analyticsLocations;
          let obj3 = channelId(analyticsLocations[11]);
          if (obj3.isSameDay(tmp8.messages[tmp8.messages.length - 1].timestamp, value.timestamp)) {
            let messages = tmp8.messages;
            let arr = messages.push(value);
            let tmp15 = tmp7;
            let tmp16 = tmp8;
          }
        }
        obj = { type: "blocked" };
        let items5 = [value];
        obj.messages = items5;
        arr = items4.push(obj);
        let tmp12 = tmp7;
        let tmp13 = tmp8;
      } else {
        obj = { type: "message", message: value };
        let arr1 = items4.push(obj);
      }
      iter3 = tmp5();
      iter2 = iter3;
    } while (!iter3.done);
  }
  return items4(memo, {
    style: tmp.container,
    children: items4.map((type) => {
      if ("message" === type.type) {
        let message = type.message;
      } else {
        message = type.messages[0];
      }
      if (null == items4[arg1 - 1]) {
        let tmp3 = null == null;
        if (!tmp3) {
          let obj = channelId(analyticsLocations[11]);
          tmp3 = !obj.isSameDay(null.timestamp, message.timestamp);
        }
        obj = {};
        if (tmp3) {
          obj = { style: tmp.dateDivider };
          const obj1 = { style: tmp.dividerLine };
          const items = [items4(memo, obj1), , ];
          const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: channelId(analyticsLocations[11]).dateFormat(message.timestamp, "LL") };
          items[1] = items4(channelId(analyticsLocations[8]).Text, obj2);
          const obj3 = { style: tmp.dividerLine };
          items[2] = items4(memo, obj3);
          obj.children = items;
          tmp3 = outer1_7(memo, obj);
          const obj6 = channelId(analyticsLocations[11]);
        }
        const items1 = [tmp3, ];
        if ("message" === type.type) {
          let tmp22 = messages(type.message);
        } else {
          const obj4 = { messages: type.messages, renderMessage: messages };
          tmp22 = items4(tmp(analyticsLocations[19]), obj4);
        }
        items1[1] = tmp22;
        obj.children = items1;
        if ("message" === type.type) {
          let id = type.message.id;
        } else {
          const _HermesInternal = HermesInternal;
          id = "blocked-" + message.id;
        }
        return outer1_7(memo, obj, id);
      } else if ("message" === tmp.type) {
        let message2 = tmp.message;
      } else {
        message2 = tmp.messages[tmp.messages.length - 1];
      }
    })
  });
};
