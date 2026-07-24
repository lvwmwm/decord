// Module ID: 9585
// Function ID: 74588
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 27, 1278, 4468, 1917, 3758, 1906, 6927, 4467, 1849, 653, 1355, 1345, 1314, 1211, 482, 33, 4130, 689, 5462, 566, 3976, 3996, 8021, 4320, 9173, 6923, 5654, 3969, 5160, 3991, 7018, 4138, 6691, 22, 9175, 7685, 9586, 9587, 4471, 1212, 9588, 9590, 477, 9591, 9592, 9595, 1334, 9596, 1934, 9597, 9598, 7636, 1273, 8023, 1555, 1454, 9043, 8537, 9601, 4126, 9602, 9673, 9678, 9679, 7512, 9680, 9682, 5788, 9887, 4644, 9686, 7008, 4098, 9889, 7437, 4543, 4629, 2]
// Exports: default

// Module 9585 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import KeyboardTypes from "KeyboardTypes";
import useSafeAreaInsetsKeyboardAware from "useSafeAreaInsetsKeyboardAware";
import get_ActivityIndicator from "sortForumPostReactionsByPopularityDesc";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { SlowmodeType } from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";
import { ContentDismissActionType } from "ContentDismissActionType";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";
import { OpenThreadAnalyticsLocations as closure_26 } from "AbortCodes";
import sum from "sum";
import jsxProd from "dispatcher";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_20;
let closure_21;
let closure_22;
let closure_28;
let closure_29;
let closure_30;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
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
function Tags(tags) {
  tags = tags.tags;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = null;
  if (0 !== tags.length) {
    let obj = { style: tmp.tags };
    obj = { size: "sm", style: tmp.tagIcon };
    let items = [
      callback(require(7512) /* TagIcon */.TagIcon, obj),
      tags.map((id) => {
          let obj = {};
          let tmp2 = 0 !== arg1;
          if (tmp2) {
            obj = {};
            obj = { width: 4 };
            obj.style = obj;
            tmp2 = outer1_28(outer1_9, obj);
          }
          const items = [tmp2, outer1_28(outer1_0(outer1_2[68]).AppliedForumTagPill, { tag: id })];
          obj.children = items;
          return outer1_29(outer1_5.Fragment, obj, id.id);
        })
    ];
    obj.children = items;
    tmp2 = callback2(closure_9, obj);
  }
  return tmp2;
}
function ActionBar(channel) {
  let canPost;
  let KeyboardTypes;
  let useSafeAreaInsetsKeyboardAware;
  let dependencyMap;
  let importDefault;
  let isEdit;
  let lastInput;
  let onLayout;
  let onShowExpressionPicker;
  let submitting;
  channel = channel.channel;
  ({ tags: importDefault, onTagsSave: dependencyMap, canPost } = channel);
  ({ submitting, onSubmit: KeyboardTypes, focusLastInput: useSafeAreaInsetsKeyboardAware, isEdit } = channel);
  let c7;
  function maybeFocus() {
    let tmp = c7 !== channel(outer1_2[57]).KeyboardTypes.SYSTEM;
    if (tmp) {
      tmp = c7 !== channel(outer1_2[57]).KeyboardTypes.EXPRESSION;
    }
    if (!tmp) {
      callback2();
    }
  }
  ({ onShowExpressionPicker, lastInput, onLayout } = channel);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [closure_18];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_18.getUploads(channel.id, outer1_12.ChannelMessage));
  let obj1 = channel(566);
  const items1 = [closure_14];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let canResult = !isEdit;
    if (canResult) {
      canResult = outer1_14.can(outer1_22.ATTACH_FILES, channel);
    }
    return canResult;
  });
  const tmp3 = importDefault(3996)();
  c7 = tmp3;
  const isMediaChannelResult = channel.isMediaChannel();
  const tmp5 = tmp3 === channel(1555).KeyboardTypes.MEDIA;
  let closure_8 = tmp5;
  let tmp6 = isMediaChannelResult;
  if (!isMediaChannelResult) {
    let tmp7 = stateFromStores1;
    if (stateFromStores1) {
      tmp7 = stateFromStores.length > 0;
    }
    tmp6 = tmp7;
  }
  let tmp8 = null != channel.availableTags;
  if (tmp8) {
    const availableTags = channel.availableTags;
    let length;
    if (null != availableTags) {
      length = availableTags.length;
    }
    tmp8 = length > 0;
  }
  obj = { onLayout, style: items2 };
  items2 = [tmp.actionsContainer, { marginBottom: importDefault(5160)({ includeKeyboardHeight: true }).insets.bottom }];
  if (tmp6) {
    obj = { attachments: stateFromStores, channelId: channel.id, highlightThumbnails: true };
    tmp6 = callback(importDefault(9682), obj);
  }
  const items3 = [tmp6, ];
  obj1 = { style: tmp.actions };
  if (!stateFromStores1) {
    const items4 = [stateFromStores1, , , ];
    if (tmp8) {
      const obj2 = {};
      const intl2 = channel(1212).intl;
      obj2.accessibilityLabel = intl2.string(channel(1212).t["112vVE"]);
      const items5 = [, ];
      ({ actionButton: arr9[0], mediaButton: arr9[1] } = tmp);
      obj2.style = items5;
      obj2.IconComponent = channel(7512).TagIcon;
      obj2.onPress = function onPress() {
        isEdit.dismiss();
        let obj = outer1_1(outer1_2[75]);
        obj = {
          parentChannel: channel,
          onSave(arg0) {
            outer1_2(arg0);
            outer1_9();
          }
        };
        const intl = channel(outer1_2[42]).intl;
        obj.title = intl.string(channel(outer1_2[42]).t.HPu3kq);
        obj.tags = closure_1;
        obj.onClose = function onClose() {
          outer1_9();
        };
        obj.openLazy(channel(outer1_2[51])(outer1_2[76], outer1_2.paths), "ForumPostTagsActionSheet", obj);
      };
      obj2.foregroundRipple = true;
      tmp8 = callback(channel(5788).HeaderActionButton, obj2);
    }
    items4[1] = tmp8;
    let tmp28 = lastInput === channel(9590).PostComposerInputs.CONTENT;
    if (tmp28) {
      const obj3 = {};
      const intl3 = channel(1212).intl;
      obj3.accessibilityLabel = intl3.string(channel(1212).t.iZ7Mz9);
      obj3.style = tmp.actionButton;
      obj3.IconComponent = channel(7437).ReactionIcon;
      obj3.onPress = onShowExpressionPicker;
      obj3.foregroundRipple = true;
      tmp28 = callback(channel(5788).HeaderActionButton, obj3);
    }
    items4[2] = tmp28;
    const obj4 = { style: tmp.postButtonWrapper };
    const obj5 = {};
    const intl4 = channel(1212).intl;
    const string = intl4.string;
    const t = channel(1212).t;
    if (isEdit) {
      let stringResult = string(t["R3BPH+"]);
    } else {
      stringResult = string(t.pIuQI6);
    }
    obj5.text = stringResult;
    obj5.loading = submitting;
    if (!submitting) {
      submitting = !canPost;
    }
    obj5.disabled = submitting;
    const obj6 = { size: "sm", color: importDefault(689).colors.WHITE };
    obj5.icon = callback(channel(4629).ChatIcon, obj6);
    obj5.onPress = function onPress() {
      if (canPost) {
        callback({});
      }
    };
    obj4.children = callback(channel(4543).Button, obj5);
    items4[3] = callback(maybeFocus, obj4);
    obj1.children = items4;
    items3[1] = tmp15(tmp16, obj1);
    obj.children = items3;
    return closure_29(maybeFocus, obj);
  } else {
    const obj7 = {};
    let intl = channel(1212).intl;
    obj7.accessibilityLabel = intl.string(channel(1212).t.aDZSuz);
    const items6 = [, ];
    ({ actionButton: arr7[0], mediaButton: arr7[1] } = tmp);
    obj7.style = items6;
    if (tmp5) {
      let ImageIcon = tmp20(9887).KeyboardIcon;
    } else {
      ImageIcon = tmp20(4644).ImageIcon;
    }
    obj7.IconComponent = ImageIcon;
    obj7.onPress = function onPress() {
      if (closure_8) {
        callback2();
      } else {
        const result = channel(outer1_2[73]).showSimpleMediaKeyboard(channel);
        isEdit.dismiss();
        const obj = channel(outer1_2[73]);
      }
      const result1 = channel(outer1_2[74]).trackForumChannelMediaUploaderClicked({ isMobile: true });
    };
    obj7.foregroundRipple = true;
    callback(channel(5788).HeaderActionButton, obj7);
    const tmp17 = callback;
  }
}
({ Keyboard: closure_6, Pressable: closure_7, StyleSheet, Text: closure_8, View: closure_9 } = get_ActivityIndicator);
({ AbortCodes: closure_20, MAX_CHANNEL_NAME_LENGTH: closure_21, Permissions: closure_22 } = ME);
const NOOP = sum.NOOP;
({ jsx: closure_28, jsxs: closure_29, Fragment: closure_30 } = jsxProd);
const re31 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "relative" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollViewContentContainer = { paddingBottom: 16 };
_createForOfIteratorHelperLoose.avatarContainer = { height: 40 };
_createForOfIteratorHelperLoose.avatar = { marginRight: 12 };
_createForOfIteratorHelperLoose.titleInput = { padding: 8 };
let obj1 = { minHeight: 40, height: "auto", fontFamily: sum.Fonts.DISPLAY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.titleInputText = obj1;
let obj2 = { width: "100%", height: "100%", padding: 0, lineHeight: 20, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, textAlignVertical: "top" };
_createForOfIteratorHelperLoose.contentInput = obj2;
_createForOfIteratorHelperLoose.mentionText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
_createForOfIteratorHelperLoose.postButtonWrapper = { marginLeft: "auto" };
_createForOfIteratorHelperLoose.tags = { flexDirection: "row", alignItems: "center", padding: 8 };
_createForOfIteratorHelperLoose.tagIcon = { marginRight: 8 };
_createForOfIteratorHelperLoose.editor = { flex: 1, flexDirection: "row", paddingHorizontal: 12, paddingTop: 8 };
_createForOfIteratorHelperLoose.editorBody = { width: "100%", flex: 1, flexDirection: "column", minHeight: 200 };
_createForOfIteratorHelperLoose.usernameToChannel = { flex: 1, flexDirection: "row", alignItems: "flex-end" };
_createForOfIteratorHelperLoose.channelName = { lineHeight: 20, flex: 1 };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4["borderTopWidth"] = StyleSheet.hairlineWidth;
obj4["borderTopColor"] = require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE;
obj4["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW;
obj4["top"] = undefined;
_createForOfIteratorHelperLoose.actionsContainer = obj4;
_createForOfIteratorHelperLoose.actions = { flex: 1, flexDirection: "row", alignItems: "center", padding: 8, width: "100%" };
let obj5 = { height: 40, minHeight: 40, maxHeight: 40, width: 40, minWidth: 40, maxWidth: 40, borderRadius: 20, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, marginLeft: 0, marginRight: 0, overflow: "hidden" };
_createForOfIteratorHelperLoose.actionButton = obj5;
_createForOfIteratorHelperLoose.mediaButton = { marginRight: 8 };
let obj6 = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.horizontalAutocomplete = obj6;
_createForOfIteratorHelperLoose.nameError = { marginBottom: 16, marginLeft: 16, marginRight: 16 };
_createForOfIteratorHelperLoose.messageError = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_33 = { code: "function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}" };
let obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
let result = require("result").fileFinishedImporting("modules/forums/native/composer/ForumComposer.tsx");

export default function ForumComposer(parentChannel) {
  let c31;
  let c34;
  let focusLastInput;
  let tmp63;
  parentChannel = parentChannel.parentChannel;
  const thread = parentChannel.thread;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const onClose = parentChannel.onClose;
  const message = parentChannel.message;
  const isEdit = parentChannel.isEdit;
  let stateFromStores3;
  let stateFromStores4;
  let c11;
  let c12;
  let closure_13;
  let first1;
  let closure_15;
  let str4;
  let c17;
  let appliedTags;
  let first2;
  let closure_20;
  let closure_21;
  let closure_22;
  let ref1;
  let sharedValue;
  let callback3;
  let memo;
  let memo1;
  let callback4;
  let createForumPost;
  let callback5;
  c31 = undefined;
  focusLastInput = undefined;
  let blurLastInput;
  c34 = undefined;
  let closure_35;
  let closure_36;
  let closure_37;
  let closure_38;
  let obj20;
  let memo2;
  function MediaPostMultipleThumbnailActionSheetImporter() {
    return parentChannel(threadSettingsDraft[51])(threadSettingsDraft[50], threadSettingsDraft.paths);
  }
  let renderErrorResult = focusLastInput();
  const analyticsLocations = thread(threadSettingsDraft[21])().analyticsLocations;
  const ref = isEdit.useRef(null);
  let obj = parentChannel(threadSettingsDraft[22]);
  let items = [first2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = first2.getCurrentUser();
    let tmp2 = null;
    if (null != currentUser) {
      tmp2 = currentUser;
    }
    return tmp2;
  }, []);
  let obj1 = parentChannel(threadSettingsDraft[22]);
  const items1 = [closure_13];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => selfMember.getSelfMember(parentChannel.guild_id));
  let obj2 = parentChannel(threadSettingsDraft[22]);
  const items2 = [c11];
  const str = obj2.useStateFromStores(items2, () => _undefined.getDraft(parentChannel.id, _undefined2.ChannelMessage));
  let obj3 = parentChannel(threadSettingsDraft[22]);
  const items3 = [stateFromStores4];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => parentChannel(threadSettingsDraft[23]).isThemeDark(stateFromStores4.theme));
  const unsafe_rawColors = thread(threadSettingsDraft[20]).unsafe_rawColors;
  const tmp6 = stateFromStores2 ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
  let obj4 = parentChannel(threadSettingsDraft[22]);
  const items4 = [str4];
  stateFromStores3 = obj4.useStateFromStores(items4, () => str4.getSlowmodeCooldownGuess(parentChannel.id, _undefined3.CreateThread));
  let obj5 = parentChannel(threadSettingsDraft[22]);
  const items5 = [appliedTags];
  stateFromStores4 = obj5.useStateFromStores(items5, () => appliedTags.getUploads(parentChannel.id, _undefined2.ChannelMessage));
  const tmp8 = thread(threadSettingsDraft[24])();
  c11 = tmp8;
  const tmp9 = thread(threadSettingsDraft[25])();
  c12 = tmp9;
  const tmp10 = thread(threadSettingsDraft[26])(parentChannel);
  const tmp11 = message(isEdit.useState(false), 2);
  const first = tmp11[0];
  closure_13 = tmp11[1];
  if (isEdit) {
    let name;
    if (null != thread) {
      name = thread.name;
    }
  } else if (null != threadSettingsDraft) {
    name = threadSettingsDraft.name;
  }
  let str2 = "";
  if (null != name) {
    str2 = name;
  }
  const tmp15 = message(isEdit.useState(str2), 2);
  first1 = tmp15[0];
  closure_15 = tmp15[1];
  let obj6 = parentChannel(threadSettingsDraft[27]);
  const channelTemplate = obj6.useChannelTemplate(parentChannel);
  let str3 = "";
  if (isEdit) {
    str3 = "";
    if (null != message) {
      str3 = "";
      if (null != thread) {
        let obj7 = thread(threadSettingsDraft[28]);
        str3 = obj7.unparse(message.content, thread.id);
      }
    }
  }
  if (!isEdit) {
    let tmp21 = channelTemplate;
    if (null != str) {
      tmp21 = channelTemplate;
      if ("" !== str.trim()) {
        tmp21 = str;
      }
    }
    str3 = tmp21;
  }
  const tmp22 = message(isEdit.useState(str3), 2);
  str4 = tmp22[0];
  c17 = tmp23;
  let obj8 = parentChannel(threadSettingsDraft[29]);
  appliedTags = obj8.useAppliedTags(thread);
  const tmp25 = message(isEdit.useState(() => (function getInitialForumComposerTags(isEdit, appliedTags, threadSettingsDraft, availableTags) {
    let items = availableTags;
    if (isEdit) {
      return appliedTags;
    } else {
      appliedTags = undefined;
      if (null != threadSettingsDraft) {
        appliedTags = threadSettingsDraft.appliedTags;
      }
      if (null != appliedTags) {
        if (0 !== appliedTags.size) {
          let _Map = Map;
          if (null == items) {
            items = [];
          }
          const prototype = _Map.prototype;
          _Map = new _Map(items.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const _Array = Array;
          const mapped = Array.from(appliedTags).map((arg0) => _Map.get(arg0));
          return mapped.filter((arg0) => null != arg0);
        }
      }
      return [];
    }
  })(isEdit, appliedTags, threadSettingsDraft, parentChannel.availableTags)), 2);
  first2 = tmp25[0];
  closure_20 = tmp25[1];
  const tmp26 = message(isEdit.useState(null), 2);
  closure_21 = tmp26[1];
  const tmp27 = message(isEdit.useState(null), 2);
  closure_22 = tmp27[1];
  let colorString;
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  let tmp29 = null;
  if (null != colorString) {
    tmp29 = colorString;
  }
  let colorStrings;
  if (null != stateFromStores1) {
    colorStrings = stateFromStores1.colorStrings;
  }
  let tmp31 = null;
  if (null != colorStrings) {
    tmp31 = colorStrings;
  }
  let nick;
  if (null != stateFromStores1) {
    nick = stateFromStores1.nick;
  }
  if (null == nick) {
    let obj9 = thread(threadSettingsDraft[30]);
    nick = obj9.getName(stateFromStores);
  }
  let str5 = "";
  if (null != nick) {
    str5 = nick;
  }
  ref1 = isEdit.useRef(null);
  const insets = thread(threadSettingsDraft[31])({ includeKeyboardHeight: true }).insets;
  const callback = isEdit.useCallback(() => {
    const current = ref1.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  let obj10 = parentChannel(threadSettingsDraft[32]);
  sharedValue = obj10.useSharedValue(0);
  let obj11 = parentChannel(threadSettingsDraft[32]);
  class W {
    constructor(arg0) {
      return c24.set(parentChannel.contentOffset.y);
    }
  }
  W.__closure = { scrollTopValue: sharedValue };
  W.__workletHash = 16880842576840;
  W.__initData = blurLastInput;
  const items6 = [isEdit, parentChannel.id];
  const items7 = [isEdit, parentChannel.id];
  const callback1 = isEdit.useCallback((name) => {
    if (!isEdit) {
      let obj = thread(threadSettingsDraft[33]);
      obj = { name };
      obj.changeThreadSettings(parentChannel.id, obj);
    }
    callback(name);
  }, items6);
  const items8 = [onClose];
  const callback2 = isEdit.useCallback((arr) => {
    callback2(arr);
    if (!isEdit) {
      let obj = thread(threadSettingsDraft[33]);
      obj = {};
      const _Set = Set;
      const set = new Set(arr.map((id) => id.id));
      obj.appliedTags = set;
      obj.changeThreadSettings(parentChannel.id, obj);
    }
  }, items7);
  callback3 = isEdit.useCallback((channel) => {
    onClose(true);
    let obj = parentChannel(threadSettingsDraft[34]);
    obj = { navigationReplace: true, source: memo.FORUM };
    obj.transitionToThread(channel, obj);
  }, items8);
  const items9 = [first2];
  memo = isEdit.useMemo(() => new Set(first2.map((id) => id.id)), items9);
  const items10 = [appliedTags];
  memo1 = isEdit.useMemo(() => new Set(appliedTags.map((id) => id.id)), items10);
  const items11 = [thread, message, memo1, memo, first1, callback3, onClose];
  callback4 = isEdit.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onClose(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items11);
  let name1;
  if (null != threadSettingsDraft) {
    name1 = threadSettingsDraft.name;
  }
  const trimmed = str4.trim();
  let tmp48 = "" === channelTemplate;
  if (!tmp48) {
    tmp48 = trimmed !== channelTemplate;
  }
  if (tmp48) {
    tmp48 = trimmed.length > 0 || tmp47;
    const tmp49 = trimmed.length > 0 || tmp47;
  }
  let tmp50 = !isEdit && (null != name1 && threadSettingsDraft.name.length > 0) && tmp48;
  if (!tmp50) {
    let tmp51 = isEdit;
    if (isEdit) {
      let name2;
      if (null != thread) {
        name2 = thread.name;
      }
      let tmp53 = first1 !== name2;
      if (!tmp53) {
        let content;
        if (null != message) {
          content = message.content;
        }
        tmp53 = trimmed !== content;
      }
      if (!tmp53) {
        let obj12 = thread(threadSettingsDraft[36]);
        tmp53 = !obj12.isEqual(memo1, memo);
      }
      tmp51 = tmp53;
    }
    tmp50 = tmp51;
  }
  let obj13 = parentChannel(threadSettingsDraft[39]);
  createForumPost = obj13.useCreateForumPost({ parentChannel, threadSettings: threadSettingsDraft, appliedTags: memo, onThreadCreated: callback3 });
  const items12 = [parentChannel, first2.length, isEdit, thread, str4, callback4, createForumPost, stateFromStores4];
  callback5 = isEdit.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onClose(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items12);
  const items13 = [parentChannel, stateFromStores3, tmp9, stateFromStores4, callback5, str4];
  const items14 = [tmp22[1], parentChannel.id];
  const callback6 = isEdit.useCallback((stickerId) => {
    stickerId = stickerId.stickerId;
    if (stateFromStores3 <= 0) {
      if (str4.length > c12) {
        let obj = {};
        const intl4 = parentChannel(threadSettingsDraft[42]).intl;
        obj.title = intl4.string(parentChannel(threadSettingsDraft[42]).t.l8rYLt);
        const intl5 = parentChannel(threadSettingsDraft[42]).intl;
        obj = { currentLength: str4.length, maxLength: c12 };
        obj.body = intl5.formatToPlainString(parentChannel(threadSettingsDraft[42]).t.FfjF15, obj);
        thread(threadSettingsDraft[41]).show(obj);
        const obj4 = thread(threadSettingsDraft[41]);
      } else {
        const tmp23 = _undefined5(parentChannel(threadSettingsDraft[43]).RESTRICTIONS);
        let iter2 = tmp23();
        if (!iter2.done) {
          const checkResult = iter2.value.check(str4, stickerId, null != stickerId.getGuildId());
          while (false === checkResult) {
            let iter = tmp23();
            iter2 = iter;
          }
          obj = thread(threadSettingsDraft[41]);
          const obj1 = {};
          const intl = parentChannel(threadSettingsDraft[42]).intl;
          obj1.title = intl.string(parentChannel(threadSettingsDraft[42]).t.mY3Y38);
          obj1.body = checkResult.body;
          const intl2 = parentChannel(threadSettingsDraft[42]).intl;
          obj1.confirmText = intl2.string(parentChannel(threadSettingsDraft[42]).t.KJnHq3);
          obj1.onConfirm = function onConfirm() {
            outer1_30({ stickerId });
          };
          const intl3 = parentChannel(threadSettingsDraft[42]).intl;
          obj1.cancelText = intl3.string(parentChannel(threadSettingsDraft[42]).t.fsBWmS);
          obj.show(obj1);
        }
        const obj2 = { stickerId };
        callback5(obj2);
      }
    }
  }, items13);
  const callback7 = isEdit.useCallback((draft) => {
    thread(threadSettingsDraft[33]).changeDraft(parentChannel.id, draft, _undefined2.ChannelMessage);
    _undefined3(draft);
  }, items14);
  let obj14 = parentChannel(threadSettingsDraft[44]);
  const focusHandlers = obj14.useFocusHandlers({ titleInput: ref, contentInput: ref1 });
  ({ setFocusedInput: c31, focusLastInput } = focusHandlers);
  blurLastInput = focusHandlers.blurLastInput;
  obj = { start: str4.length, end: null };
  const animatedScrollHandler = obj11.useAnimatedScrollHandler(W);
  const tmp46 = null != name1 && threadSettingsDraft.name.length > 0;
  tmp47 = stateFromStores4.length > 0;
  [tmp63, c34] = message(isEdit.useState(obj), 2);
  const callback8 = isEdit.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    _undefined5({});
  }, []);
  const callback9 = isEdit.useCallback((arg0) => {
    let parentChannel;
    let thread;
    ({ start: parentChannel, end: thread } = arg0);
    let current;
    if (obj.isAndroid()) {
      current = ref1.current;
      if (null != current) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          current.setSelection(closure_0, null != closure_1 ? closure_1 : closure_0);
        });
      }
    }
  }, []);
  let obj16 = parentChannel(threadSettingsDraft[46]);
  closure_35 = obj16.usePressEmojiHandler({ selection: tmp63, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  let obj17 = parentChannel(threadSettingsDraft[46]);
  closure_36 = obj17.usePressGIFHandler({ selection: tmp63, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  let obj18 = parentChannel(threadSettingsDraft[47]);
  const tmp62 = message(isEdit.useState(obj), 2);
  let obj19 = parentChannel(threadSettingsDraft[48]);
  closure_37 = obj19.useBackspaceHandler({ selection: tmp63, draftContent: str4, handleTextChange: callback7 });
  const tmp67 = message(isEdit.useState(0), 2);
  closure_38 = tmp67[1];
  obj20 = parentChannel;
  const callback10 = isEdit.useCallback((nativeEvent) => {
    callback3(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (isEdit) {
    obj20 = thread;
  }
  const items15 = [obj20];
  memo2 = isEdit.useMemo(() => {
    let parserState = null;
    if (null != obj20) {
      parserState = parentChannel(threadSettingsDraft[28]).createParserState(obj20);
      const obj = parentChannel(threadSettingsDraft[28]);
    }
    return parserState;
  }, items15);
  const items16 = [str4, obj20, memo2, renderErrorResult.mentionText];
  const memo3 = isEdit.useMemo(() => {
    if (0 !== str4.length) {
      if (null != obj20) {
        if (null != memo2) {
          const parts = str4.split(c31);
          let mapped = null;
          if (1 !== parts.length) {
            mapped = parts.map((children) => {
              if (arg1 % 2 === 1) {
                let obj = thread(threadSettingsDraft[28]);
                if (obj.parse(outer1_39, children, outer1_40).content !== children) {
                  obj = { style: outer1_6.mentionText, children };
                  return callback4(stateFromStores, obj, arg1);
                }
              }
              obj = { children };
              return callback4(isEdit.Fragment, obj, arg1);
            });
          }
          return mapped;
        }
      }
    }
    return null;
  }, items16);
  if (null == obj20) {
    return null;
  } else {
    renderErrorResult = parentChannel;
    renderErrorResult = threadSettingsDraft;
    obj = { content: first1 };
    renderErrorResult = parentChannel(threadSettingsDraft[40]).renderError(tmp26[0], obj);
    const obj47 = parentChannel(threadSettingsDraft[40]);
    obj1 = { content: str4, tags: first2 };
    renderErrorResult = parentChannel(threadSettingsDraft[40]).renderError(tmp27[0], obj1);
    if (obj20.isMediaChannel()) {
      const items17 = [parentChannel(threadSettingsDraft[49]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE];
      let items18 = items17;
    } else {
      items18 = [];
    }
    obj2 = {};
    const items19 = [renderErrorResult.container, ];
    obj3 = { paddingTop: insets.top, paddingBottom: insets.bottom + tmp67[0] };
    items19[1] = obj3;
    obj2.style = items19;
    obj4 = {
      channel: parentChannel,
      height: 44,
      onClose,
      onGuidelinesPress() {
          blurLastInput();
          let obj = parentChannel(threadSettingsDraft[53]);
          obj = {
            channel: parentChannel,
            onClose() {
              outer1_32();
            }
          };
          const result = obj.openForumGuidelinesActionSheet(obj);
        },
      submitting: first,
      title: tmp71
    };
    const items20 = [callback4(thread(threadSettingsDraft[52]), obj4), ];
    obj5 = {};
    obj6 = { onScroll: animatedScrollHandler, scrollEventThrottle: 16, keyboardShouldPersistTaps: "always", nestedScrollEnabled: false, contentContainerStyle: renderErrorResult.scrollViewContentContainer, keyboardDismissMode: "on-drag" };
    obj7 = { ref };
    ({ titleInput: obj27.style, titleInputText: obj27.inputTextStyle } = renderErrorResult);
    obj7.showTopContainer = false;
    let intl = parentChannel(threadSettingsDraft[42]).intl;
    obj7.placeholder = intl.string(parentChannel(threadSettingsDraft[42]).t.lU4dDS);
    obj7.placeholderTextColor = tmp6;
    obj7.large = true;
    obj7.multiline = true;
    obj7.value = first1;
    obj7.clearButtonVisibility = parentChannel(threadSettingsDraft[55]).ClearButtonVisibility.NEVER;
    obj7.maxLength = closure_21;
    obj7.onChange = callback1;
    obj7.onBlur = function onBlur() {
      if (!isEdit) {
        let name;
        if (null != threadSettingsDraft) {
          name = threadSettingsDraft.name;
        }
        if (null != name) {
          let name1;
          if (null != threadSettingsDraft) {
            name1 = threadSettingsDraft.name;
          }
          const tmp19Result = thread(threadSettingsDraft[56])(name1, true);
          let name2;
          if (null != threadSettingsDraft) {
            name2 = threadSettingsDraft.name;
          }
          if (tmp19Result !== name2) {
            let obj = thread(threadSettingsDraft[33]);
            obj = { name: tmp19Result };
            obj.changeThreadSettings(parentChannel.id, obj);
            callback(tmp19Result);
          }
          const tmp19 = thread(threadSettingsDraft[56]);
        }
      }
    };
    obj7.onFocus = function onFocus() {
      let tmp = c11 !== parentChannel(threadSettingsDraft[57]).KeyboardTypes.MEDIA;
      if (tmp) {
        tmp = c11 !== parentChannel(threadSettingsDraft[57]).KeyboardTypes.EXPRESSION;
      }
      if (!tmp) {
        let obj = parentChannel(threadSettingsDraft[58]);
        obj = { type: parentChannel(threadSettingsDraft[57]).KeyboardTypes.SYSTEM };
        obj = { keyboardWillOpen: true };
        obj.context = obj;
        obj.setKeyboardType(obj);
      }
      _undefined4(parentChannel(threadSettingsDraft[44]).PostComposerInputs.TITLE);
    };
    obj7.autoFocus = true;
    obj7.autoCorrect = true;
    obj7.textContentType = "none";
    obj7.returnKeyType = "next";
    obj7.onNext = callback;
    const items21 = [callback4(parentChannel(threadSettingsDraft[54]).FormInput, obj7), , ];
    let tmp84 = null;
    if (null != renderErrorResult) {
      obj8 = { style: renderErrorResult.nameError, children: renderErrorResult };
      tmp84 = callback4(thread(threadSettingsDraft[59]), obj8);
    }
    items21[1] = tmp84;
    obj9 = { style: renderErrorResult.editor };
    let tmp91Result = null != stateFromStores;
    if (tmp91Result) {
      obj10 = {
        style: renderErrorResult.avatarContainer,
        onPress() {
              const obj = { userId: stateFromStores.id, channelId: obj20.id };
              let id;
              if (null != message) {
                id = message.id;
              }
              obj.messageId = id;
              obj.sourceAnalyticsLocations = analyticsLocations;
              return thread(threadSettingsDraft[60])(obj);
            }
      };
      obj11 = { animate: true, style: renderErrorResult.avatar, user: stateFromStores };
      let guildId;
      if (null != parentChannel) {
        guildId = parentChannel.getGuildId();
      }
      let tmp97;
      if (null != guildId) {
        tmp97 = guildId;
      }
      obj11.guildId = tmp97;
      obj11.avatarDecoration = stateFromStores.avatarDecoration;
      let intl2 = parentChannel(threadSettingsDraft[42]).intl;
      obj12 = { nickname: str5 };
      obj11.accessibilityLabel = intl2.formatToPlainString(parentChannel(threadSettingsDraft[42]).t.LvU3nj, obj12);
      obj10.children = callback4(parentChannel(threadSettingsDraft[55]).Avatar, obj11);
      tmp91Result = callback4(analyticsLocations, obj10);
      const tmp91 = callback4;
      const tmp92 = analyticsLocations;
      const tmp93 = callback4;
    }
    const items22 = [tmp91Result, ];
    obj13 = { style: renderErrorResult.editorBody };
    renderErrorResult = createForumPost;
    renderErrorResult = stateFromStores3;
    obj14 = { style: renderErrorResult.usernameToChannel };
    renderErrorResult = parentChannel;
    renderErrorResult = threadSettingsDraft;
    renderErrorResult = createForumPost;
    renderErrorResult = stateFromStores3;
    let intl3 = parentChannel(threadSettingsDraft[42]).intl;
    const obj15 = { nickname: str5, channelName: tmp10 };
    obj14.accessibilityLabel = intl3.formatToPlainString(parentChannel(threadSettingsDraft[42]).t["QicUf+"], obj15);
    renderErrorResult = callback4;
    obj16 = { name: str5, color: tmp29, colors: tmp31 };
    const items23 = [callback4(parentChannel(threadSettingsDraft[61]).RoleLabel, obj16), ];
    renderErrorResult = createForumPost;
    obj17 = { color: "text-default", variant: "text-xs/medium", style: renderErrorResult.channelName, lineClamp: 1 };
    let intl4 = parentChannel(threadSettingsDraft[42]).intl;
    obj18 = { channelName: tmp10 };
    const items24 = [" ", intl4.format(parentChannel(threadSettingsDraft[42]).t["6Y1Kev"], obj18)];
    obj17.children = items24;
    items23[1] = createForumPost(parentChannel(threadSettingsDraft[62]).Text, obj17);
    obj14.children = items23;
    const items25 = [createForumPost(stateFromStores3, obj14), , ];
    renderErrorResult = null;
    if (null != renderErrorResult) {
      renderErrorResult = callback4;
      renderErrorResult = thread;
      renderErrorResult = threadSettingsDraft;
      obj19 = { style: renderErrorResult.messageError, children: renderErrorResult };
      renderErrorResult = callback4(thread(threadSettingsDraft[59]), obj19);
    }
    items25[1] = renderErrorResult;
    renderErrorResult = parentChannel;
    renderErrorResult = threadSettingsDraft;
    renderErrorResult = callback4;
    obj20 = { ref: ref1, style: renderErrorResult.contentInput, multiline: true, scrollEnabled: false };
    let intl5 = parentChannel(threadSettingsDraft[42]).intl;
    obj20.placeholder = intl5.string(parentChannel(threadSettingsDraft[42]).t["8IPnv1"]);
    obj20.placeholderTextColor = tmp6;
    obj20.onChangeText = callback7;
    obj20.onSelectionChange = callback8;
    obj20.onFocus = function onFocus() {
      if (c11 === parentChannel(threadSettingsDraft[57]).KeyboardTypes.MEDIA) {
        let obj = parentChannel(threadSettingsDraft[58]);
        obj = { type: parentChannel(threadSettingsDraft[57]).KeyboardTypes.SYSTEM };
        obj = { keyboardWillOpen: true };
        obj.context = obj;
        obj.setKeyboardType(obj);
      }
      _undefined4(parentChannel(threadSettingsDraft[44]).PostComposerInputs.CONTENT);
    };
    obj20.showSoftInputOnFocus = tmp8 !== parentChannel(threadSettingsDraft[57]).KeyboardTypes.EXPRESSION;
    renderErrorResult = str4;
    if (null != memo3) {
      renderErrorResult = callback4;
      renderErrorResult = stateFromStores;
      const obj21 = { children: memo3 };
      renderErrorResult = callback4(stateFromStores, obj21);
    }
    obj20.children = renderErrorResult;
    items25[2] = renderErrorResult(parentChannel(threadSettingsDraft[55]).TextInput, obj20);
    obj13.children = items25;
    items22[1] = renderErrorResult(renderErrorResult, obj13);
    obj9.children = items22;
    items21[2] = createForumPost(stateFromStores3, obj9);
    obj6.children = items21;
    const items26 = [createForumPost(thread(threadSettingsDraft[32]).ScrollView, obj6), , , , ];
    renderErrorResult = callback4;
    renderErrorResult = closure_36;
    const obj22 = { tags: first2 };
    items26[1] = callback4(closure_36, obj22);
    renderErrorResult = callback4;
    renderErrorResult = closure_37;
    const obj23 = {
      channel: parentChannel,
      tags: first2,
      onTagsSave: callback2,
      canPost: tmp50,
      submitting: first,
      onSubmit: callback6,
      onShowExpressionPicker() {
          renderErrorResult.dismiss();
          let obj = parentChannel(threadSettingsDraft[63]);
          obj = { channelId: parentChannel.id, onPressEmoji: closure_35, onPressSticker: memo1, onPressGIF: closure_36, onBackspace: closure_37, visibleTabs: items };
          items = [, ];
          ({ EMOJI: arr[0], GIF: arr[1] } = callback3);
          const result = obj.openExpressionPickerActionSheet(obj);
        },
      focusLastInput,
      lastInput: focusHandlers.focusedInput,
      isEdit,
      onLayout: callback10
    };
    items26[2] = callback4(closure_37, obj23);
    renderErrorResult = callback4;
    renderErrorResult = thread;
    renderErrorResult = threadSettingsDraft;
    const obj24 = {};
    const items27 = [renderErrorResult.horizontalAutocomplete, ];
    const obj25 = { bottom: insets.bottom };
    items27[1] = obj25;
    obj24.style = items27;
    obj24.onPressAutocompleteItem = pressHorizontalAutocompleteItemHandler;
    obj24.text = str4;
    obj24.selection = tmp63;
    obj24.channel = obj20;
    class W {
      constructor(arg0) {
        return c24.set(parentChannel.contentOffset.y);
      }
    }
    renderErrorResult = callback4;
    const obj26 = {
      contentTypes: items18,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp = null;
          if (markAsDismissed.visibleContent === parentChannel(threadSettingsDraft[49]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(sharedValue.UNKNOWN);
                },
              actionSheetKey: "ThumbnailBottomSheet",
              importer: MediaPostMultipleThumbnailActionSheetImporter
            };
            tmp = callback4(parentChannel(threadSettingsDraft[66]).DismissibleActionSheet, obj);
          }
          return tmp;
        }
    };
    items26[4] = callback4(thread(threadSettingsDraft[65]), obj26);
    obj5.children = items26;
    items20[1] = createForumPost(callback5, obj5);
    obj2.children = items20;
    return createForumPost(stateFromStores3, obj2);
  }
  pressHorizontalAutocompleteItemHandler = obj18.usePressHorizontalAutocompleteItemHandler({ draftContent: str4, handleTextChange: callback7, setSelection: callback9, channel: parentChannel });
};
