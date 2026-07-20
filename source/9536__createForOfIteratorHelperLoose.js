// Module ID: 9536
// Function ID: 74297
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9536 (_createForOfIteratorHelperLoose)
let StyleSheet;
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const tmp = callback4();
  let tmp2 = null;
  if (0 !== tags.length) {
    let obj = { style: tmp.tags };
    obj = { size: "sm", style: tmp.tagIcon };
    const items = [
      callback2(arg1(dependencyMap[67]).TagIcon, obj),
      tags.map((id) => {
          let obj = {};
          let tmp2 = 0 !== arg1;
          if (tmp2) {
            obj = {};
            obj = { width: 4 };
            obj.style = obj;
            tmp2 = callback2(closure_9, obj);
          }
          const items = [tmp2, callback2(callback(closure_2[68]).AppliedForumTagPill, { tag: id })];
          obj.children = items;
          return closure_29(React.Fragment, obj, id.id);
        })
    ];
    obj.children = items;
    tmp2 = callback3(closure_9, obj);
  }
  return tmp2;
}
function ActionBar(channel) {
  let canPost;
  let isEdit;
  let lastInput;
  let onLayout;
  let onShowExpressionPicker;
  let submitting;
  channel = channel.channel;
  const arg1 = channel;
  ({ tags: closure_1, onTagsSave: closure_2, canPost } = channel);
  let closure_3 = canPost;
  ({ submitting, onSubmit: closure_4, focusLastInput: closure_5, isEdit } = channel);
  let tmp3;
  function maybeFocus() {
    let tmp = tmp3 !== channel(closure_2[57]).KeyboardTypes.SYSTEM;
    if (tmp) {
      tmp = tmp3 !== channel(closure_2[57]).KeyboardTypes.EXPRESSION;
    }
    if (!tmp) {
      callback3();
    }
  }
  ({ onShowExpressionPicker, lastInput, onLayout } = channel);
  const tmp = callback4();
  let obj = arg1(dependencyMap[22]);
  const items = [closure_18];
  const stateFromStores = obj.useStateFromStores(items, () => uploads.getUploads(channel.id, ChannelMessage.ChannelMessage));
  let obj1 = arg1(dependencyMap[22]);
  const items1 = [closure_14];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let canResult = !isEdit;
    if (canResult) {
      canResult = closure_14.can(constants.ATTACH_FILES, channel);
    }
    return canResult;
  });
  tmp3 = importDefault(dependencyMap[24])();
  const isMediaChannelResult = channel.isMediaChannel();
  const tmp5 = tmp3 === arg1(dependencyMap[57]).KeyboardTypes.MEDIA;
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
  const items2 = [tmp.actionsContainer, { marginBottom: importDefault(dependencyMap[31])({ includeKeyboardHeight: true }).insets.bottom }];
  if (tmp6) {
    obj = { attachments: stateFromStores, channelId: channel.id, highlightThumbnails: true };
    tmp6 = callback2(importDefault(dependencyMap[69]), obj);
  }
  const items3 = [tmp6, ];
  obj1 = { style: tmp.actions };
  if (!stateFromStores1) {
    const items4 = [stateFromStores1, , , ];
    if (tmp8) {
      const obj2 = {};
      const intl2 = arg1(dependencyMap[42]).intl;
      obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[42]).t.112vVE);
      const items5 = [, ];
      ({ actionButton: arr9[0], mediaButton: arr9[1] } = tmp);
      obj2.style = items5;
      obj2.IconComponent = arg1(dependencyMap[67]).TagIcon;
      obj2.onPress = function onPress() {
        isEdit.dismiss();
        let obj = callback(paths[75]);
        obj = {
          parentChannel: channel,
          onSave(arg0) {
            callback(arg0);
            callback2();
          }
        };
        const intl = channel(paths[42]).intl;
        obj.title = intl.string(channel(paths[42]).t.HPu3kq);
        obj.tags = callback;
        obj.onClose = function onClose() {
          callback2();
        };
        obj.openLazy(channel(paths[51])(paths[76], paths.paths), "ForumPostTagsActionSheet", obj);
      };
      obj2.foregroundRipple = true;
      tmp8 = callback2(arg1(dependencyMap[70]).HeaderActionButton, obj2);
    }
    items4[1] = tmp8;
    let tmp28 = lastInput === arg1(dependencyMap[44]).PostComposerInputs.CONTENT;
    if (tmp28) {
      const obj3 = {};
      const intl3 = arg1(dependencyMap[42]).intl;
      obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[42]).t.iZ7Mz9);
      obj3.style = tmp.actionButton;
      obj3.IconComponent = arg1(dependencyMap[77]).ReactionIcon;
      obj3.onPress = onShowExpressionPicker;
      obj3.foregroundRipple = true;
      tmp28 = callback2(arg1(dependencyMap[70]).HeaderActionButton, obj3);
    }
    items4[2] = tmp28;
    const obj4 = { style: tmp.postButtonWrapper };
    const obj5 = {};
    const intl4 = arg1(dependencyMap[42]).intl;
    const string = intl4.string;
    const t = arg1(dependencyMap[42]).t;
    if (isEdit) {
      let stringResult = string(t.R3BPH+);
    } else {
      stringResult = string(t.pIuQI6);
    }
    obj5.text = stringResult;
    obj5.loading = submitting;
    if (!submitting) {
      submitting = !canPost;
    }
    obj5.disabled = submitting;
    const obj6 = { size: "sm", color: importDefault(dependencyMap[20]).colors.WHITE };
    obj5.icon = callback2(arg1(dependencyMap[79]).ChatIcon, obj6);
    obj5.onPress = function onPress() {
      if (canPost) {
        callback2({});
      }
    };
    obj4.children = callback2(arg1(dependencyMap[78]).Button, obj5);
    items4[3] = callback2(maybeFocus, obj4);
    obj1.children = items4;
    items3[1] = tmp15(tmp16, obj1);
    obj.children = items3;
    return closure_29(maybeFocus, obj);
  } else {
    const obj7 = {};
    const intl = arg1(dependencyMap[42]).intl;
    obj7.accessibilityLabel = intl.string(arg1(dependencyMap[42]).t.aDZSuz);
    const items6 = [, ];
    ({ actionButton: arr7[0], mediaButton: arr7[1] } = tmp);
    obj7.style = items6;
    if (tmp5) {
      let ImageIcon = tmp20(tmp21[71]).KeyboardIcon;
    } else {
      ImageIcon = tmp20(tmp21[72]).ImageIcon;
    }
    obj7.IconComponent = ImageIcon;
    obj7.onPress = function onPress() {
      if (tmp5) {
        callback3();
      } else {
        const result = channel(closure_2[73]).showSimpleMediaKeyboard(channel);
        isEdit.dismiss();
        const obj = channel(closure_2[73]);
        const tmp5 = isEdit;
      }
      const result1 = channel(closure_2[74]).trackForumChannelMediaUploaderClicked({ isMobile: true });
    };
    obj7.foregroundRipple = true;
    callback2(arg1(dependencyMap[70]).HeaderActionButton, obj7);
    const tmp17 = callback2;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Keyboard: closure_6, Pressable: closure_7, StyleSheet, Text: closure_8, View: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const DraftType = arg1(dependencyMap[5]).DraftType;
let closure_13 = importDefault(dependencyMap[6]);
let closure_14 = importDefault(dependencyMap[7]);
let closure_15 = importDefault(dependencyMap[8]);
let closure_16 = importDefault(dependencyMap[9]);
const SlowmodeType = arg1(dependencyMap[9]).SlowmodeType;
let closure_18 = importDefault(dependencyMap[10]);
let closure_19 = importDefault(dependencyMap[11]);
const tmp2 = arg1(dependencyMap[3]);
({ AbortCodes: closure_20, MAX_CHANNEL_NAME_LENGTH: closure_21, Permissions: closure_22 } = arg1(dependencyMap[12]));
const ChannelFlags = arg1(dependencyMap[13]).ChannelFlags;
const ContentDismissActionType = arg1(dependencyMap[14]).ContentDismissActionType;
const ExpressionPickerViewType = arg1(dependencyMap[15]).ExpressionPickerViewType;
let closure_26 = arg1(dependencyMap[16]).OpenThreadAnalyticsLocations;
const tmp4 = arg1(dependencyMap[17]);
const NOOP = tmp4.NOOP;
const tmp3 = arg1(dependencyMap[12]);
({ jsx: closure_28, jsxs: closure_29, Fragment: closure_30 } = arg1(dependencyMap[18]));
let closure_31 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
let obj = arg1(dependencyMap[19]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[20]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.scrollViewContentContainer = { paddingBottom: 16 };
obj.avatarContainer = { height: 40 };
obj.avatar = { marginRight: 12 };
obj.titleInput = { padding: 8 };
const obj1 = { 9223372036854775807: 25, 0: "soundboard_picker_collapsed_sections", fontFamily: tmp4.Fonts.DISPLAY_SEMIBOLD, color: importDefault(dependencyMap[20]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.titleInputText = obj1;
const obj2 = { "Bool(true)": 43429592185227960000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 13342201889044405000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050927898995, "Bool(true)": -7325713920447505000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007851499855114, "Bool(true)": -1472176516378138200000000000000000000000000000000000000000000, color: importDefault(dependencyMap[20]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.contentInput = obj2;
const tmp5 = arg1(dependencyMap[18]);
obj.mentionText = { color: importDefault(dependencyMap[20]).unsafe_rawColors.BRAND_500 };
obj.postButtonWrapper = { marginLeft: "auto" };
obj.tags = {};
obj.tagIcon = { marginRight: 8 };
obj.editor = {};
obj.editorBody = {};
obj.usernameToChannel = {};
obj.channelName = { v: null, p: 0 };
const obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4["borderTopWidth"] = StyleSheet.hairlineWidth;
obj4["borderTopColor"] = importDefault(dependencyMap[20]).colors.BORDER_SUBTLE;
obj4["backgroundColor"] = importDefault(dependencyMap[20]).colors.BACKGROUND_BASE_LOW;
obj4["top"] = undefined;
obj.actionsContainer = obj4;
obj.actions = { 835197976: null, 808136713: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", 877531325: true, 607195520: null, 848759503: 11 };
const obj3 = { color: importDefault(dependencyMap[20]).unsafe_rawColors.BRAND_500 };
obj.actionButton = { color: importDefault(dependencyMap[20]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[20]).colors.BACKGROUND_MOD_NORMAL };
obj.mediaButton = { marginRight: 8 };
const obj5 = { color: importDefault(dependencyMap[20]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[20]).colors.BACKGROUND_MOD_NORMAL };
obj.horizontalAutocomplete = { backgroundColor: importDefault(dependencyMap[20]).colors.BACKGROUND_SURFACE_HIGH };
obj.nameError = {};
obj.messageError = { marginTop: 8 };
let closure_32 = obj.createStyles(obj);
let closure_33 = { code: "function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}" };
const obj6 = { backgroundColor: importDefault(dependencyMap[20]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[80]).fileFinishedImporting("modules/forums/native/composer/ForumComposer.tsx");

export default function ForumComposer(parentChannel) {
  let focusLastInput;
  let tmp63;
  parentChannel = parentChannel.parentChannel;
  const arg1 = parentChannel;
  const thread = parentChannel.thread;
  const importDefault = thread;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const dependencyMap = threadSettingsDraft;
  const onClose = parentChannel.onClose;
  let closure_3 = onClose;
  const message = parentChannel.message;
  let callback = message;
  const isEdit = parentChannel.isEdit;
  const React = isEdit;
  let stateFromStores3;
  let closure_10;
  let closure_11;
  let DraftType;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let SlowmodeType;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let ChannelFlags;
  let ContentDismissActionType;
  let ExpressionPickerViewType;
  let closure_26;
  let NOOP;
  let callback4;
  let createForumPost;
  let callback5;
  let closure_31;
  callback4 = undefined;
  let blurLastInput;
  let closure_34;
  let closure_35;
  let closure_36;
  let closure_37;
  let closure_38;
  let obj19;
  let memo2;
  function MediaPostMultipleThumbnailActionSheetImporter() {
    return parentChannel(threadSettingsDraft[51])(threadSettingsDraft[50], threadSettingsDraft.paths);
  }
  let renderErrorResult = callback4();
  const analyticsLocations = importDefault(dependencyMap[21])().analyticsLocations;
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[22]);
  const items = [closure_19];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = first2.getCurrentUser();
    let tmp2 = null;
    if (null != currentUser) {
      tmp2 = currentUser;
    }
    return tmp2;
  }, []);
  let obj1 = arg1(dependencyMap[22]);
  const items1 = [closure_13];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => selfMember.getSelfMember(parentChannel.guild_id));
  let obj2 = arg1(dependencyMap[22]);
  const items2 = [closure_11];
  const str = obj2.useStateFromStores(items2, () => tmp8.getDraft(parentChannel.id, tmp9.ChannelMessage));
  let obj3 = arg1(dependencyMap[22]);
  const items3 = [closure_10];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => parentChannel(threadSettingsDraft[23]).isThemeDark(stateFromStores4.theme));
  const unsafe_rawColors = importDefault(dependencyMap[20]).unsafe_rawColors;
  const tmp6 = stateFromStores2 ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
  let obj4 = arg1(dependencyMap[22]);
  const items4 = [closure_16];
  stateFromStores3 = obj4.useStateFromStores(items4, () => str4.getSlowmodeCooldownGuess(parentChannel.id, tmp23.CreateThread));
  let obj5 = arg1(dependencyMap[22]);
  const items5 = [closure_18];
  const stateFromStores4 = obj5.useStateFromStores(items5, () => appliedTags.getUploads(parentChannel.id, tmp9.ChannelMessage));
  closure_10 = stateFromStores4;
  const tmp8 = importDefault(dependencyMap[24])();
  closure_11 = tmp8;
  const tmp9 = importDefault(dependencyMap[25])();
  DraftType = tmp9;
  const tmp10 = importDefault(dependencyMap[26])(parentChannel);
  const tmp11 = callback(React.useState(false), 2);
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
  const tmp15 = callback(React.useState(str2), 2);
  const first1 = tmp15[0];
  closure_14 = first1;
  closure_15 = tmp15[1];
  let obj6 = arg1(dependencyMap[27]);
  const channelTemplate = obj6.useChannelTemplate(parentChannel);
  let str3 = "";
  if (isEdit) {
    str3 = "";
    if (null != message) {
      str3 = "";
      if (null != thread) {
        let obj7 = importDefault(dependencyMap[28]);
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
  const tmp22 = callback(React.useState(str3), 2);
  closure_16 = str4;
  SlowmodeType = tmp23;
  let obj8 = arg1(dependencyMap[29]);
  const appliedTags = obj8.useAppliedTags(thread);
  closure_18 = appliedTags;
  const tmp25 = callback(React.useState(() => function getInitialForumComposerTags(isEdit, appliedTags, threadSettingsDraft, availableTags) {
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
  }(isEdit, appliedTags, threadSettingsDraft, parentChannel.availableTags)), 2);
  const first2 = tmp25[0];
  closure_19 = first2;
  closure_20 = tmp25[1];
  const tmp26 = callback(React.useState(null), 2);
  closure_21 = tmp26[1];
  const tmp27 = callback(React.useState(null), 2);
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
    let obj9 = importDefault(dependencyMap[30]);
    nick = obj9.getName(stateFromStores);
  }
  let str5 = "";
  if (null != nick) {
    str5 = nick;
  }
  const ref1 = React.useRef(null);
  ChannelFlags = ref1;
  const insets = importDefault(dependencyMap[31])({ includeKeyboardHeight: true }).insets;
  callback = React.useCallback(() => {
    const current = ref1.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  let obj10 = arg1(dependencyMap[32]);
  const sharedValue = obj10.useSharedValue(0);
  ContentDismissActionType = sharedValue;
  let obj11 = arg1(dependencyMap[32]);
  class W {
    constructor(arg0) {
      return closure_24.set(parentChannel.contentOffset.y);
    }
  }
  W.__closure = { scrollTopValue: sharedValue };
  W.__workletHash = 16880842576840;
  W.__initData = blurLastInput;
  const items6 = [isEdit, parentChannel.id];
  const items7 = [isEdit, parentChannel.id];
  const callback1 = React.useCallback((name) => {
    if (!isEdit) {
      let obj = thread(threadSettingsDraft[33]);
      obj = { name };
      obj.changeThreadSettings(parentChannel.id, obj);
    }
    callback(name);
  }, items6);
  const items8 = [onClose];
  const callback2 = React.useCallback((arr) => {
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
  const callback3 = React.useCallback((channel) => {
    onClose(true);
    let obj = parentChannel(threadSettingsDraft[34]);
    obj = { navigationReplace: true, source: memo.FORUM };
    obj.transitionToThread(channel, obj);
  }, items8);
  ExpressionPickerViewType = callback3;
  const items9 = [first2];
  const memo = React.useMemo(() => new Set(first2.map((id) => id.id)), items9);
  closure_26 = memo;
  const items10 = [appliedTags];
  const memo1 = React.useMemo(() => new Set(appliedTags.map((id) => id.id)), items10);
  NOOP = memo1;
  const items11 = [thread, message, memo1, memo, first1, callback3, onClose];
  callback4 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onClose(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items11);
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
        let obj12 = importDefault(dependencyMap[36]);
        tmp53 = !obj12.isEqual(memo1, memo);
      }
      tmp51 = tmp53;
    }
    tmp50 = tmp51;
  }
  let obj13 = arg1(dependencyMap[39]);
  createForumPost = obj13.useCreateForumPost({ parentChannel, threadSettings: threadSettingsDraft, appliedTags: memo, onThreadCreated: callback3 });
  const items12 = [parentChannel, first2.length, isEdit, thread, tmp22[0], callback4, createForumPost, stateFromStores4];
  callback5 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onClose(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items12);
  const items13 = [parentChannel, stateFromStores3, tmp9, stateFromStores4, callback5, tmp22[0]];
  const items14 = [tmp22[1], parentChannel.id];
  const callback6 = React.useCallback((stickerId) => {
    stickerId = stickerId.stickerId;
    const parentChannel = stickerId;
    if (stateFromStores3 <= 0) {
      if (str4.length > tmp9) {
        let obj = {};
        const intl4 = parentChannel(threadSettingsDraft[42]).intl;
        obj.title = intl4.string(parentChannel(threadSettingsDraft[42]).t.l8rYLt);
        const intl5 = parentChannel(threadSettingsDraft[42]).intl;
        obj = { currentLength: str4.length, maxLength: tmp9 };
        obj.body = intl5.formatToPlainString(parentChannel(threadSettingsDraft[42]).t.FfjF15, obj);
        thread(threadSettingsDraft[41]).show(obj);
        const obj4 = thread(threadSettingsDraft[41]);
      } else {
        const tmp23 = _undefined2(parentChannel(threadSettingsDraft[43]).RESTRICTIONS);
        let iter2 = tmp23();
        if (!iter2.done) {
          const checkResult = iter2.value.check(str4, parentChannel, null != parentChannel.getGuildId());
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
            callback({ stickerId });
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
  const callback7 = React.useCallback((draft) => {
    thread(threadSettingsDraft[33]).changeDraft(parentChannel.id, draft, tmp9.ChannelMessage);
    tmp23(draft);
  }, items14);
  let obj14 = arg1(dependencyMap[44]);
  const focusHandlers = obj14.useFocusHandlers({ titleInput: ref, contentInput: ref1 });
  ({ setFocusedInput: closure_31, focusLastInput } = focusHandlers);
  callback4 = focusLastInput;
  blurLastInput = focusHandlers.blurLastInput;
  const animatedScrollHandler = obj11.useAnimatedScrollHandler(W);
  const tmp46 = null != name1 && threadSettingsDraft.name.length > 0;
  const tmp47 = stateFromStores4.length > 0;
  [tmp63, closure_34] = callback(React.useState({ 1726238916: true, 607091733: true }), 2);
  const callback8 = React.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    _undefined2({});
  }, []);
  const callback9 = React.useCallback((arg0) => {
    ({ start: closure_0, end: closure_1 } = arg0);
    let threadSettingsDraft;
    if (obj.isAndroid()) {
      const current = ref1.current;
      threadSettingsDraft = current;
      if (null != current) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          current.setSelection(closure_0, null != closure_1 ? closure_1 : closure_0);
        });
      }
    }
  }, []);
  let obj15 = arg1(dependencyMap[46]);
  closure_35 = obj15.usePressEmojiHandler({ selection: tmp63, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  let obj16 = arg1(dependencyMap[46]);
  closure_36 = obj16.usePressGIFHandler({ selection: tmp63, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  let obj17 = arg1(dependencyMap[47]);
  const tmp62 = callback(React.useState({ 1726238916: true, 607091733: true }), 2);
  let obj18 = arg1(dependencyMap[48]);
  closure_37 = obj18.useBackspaceHandler({ selection: tmp63, draftContent: str4, handleTextChange: callback7 });
  const tmp67 = callback(React.useState(0), 2);
  closure_38 = tmp67[1];
  obj19 = parentChannel;
  const callback10 = React.useCallback((nativeEvent) => {
    callback3(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (isEdit) {
    obj19 = thread;
  }
  const items15 = [obj19];
  memo2 = React.useMemo(() => {
    let parserState = null;
    if (null != obj19) {
      parserState = parentChannel(threadSettingsDraft[28]).createParserState(obj19);
      const obj = parentChannel(threadSettingsDraft[28]);
    }
    return parserState;
  }, items15);
  const items16 = [tmp22[0], obj19, memo2, renderErrorResult.mentionText];
  const memo3 = React.useMemo(() => {
    if (0 !== str4.length) {
      if (null != obj19) {
        if (null != memo2) {
          const parts = str4.split(closure_31);
          let mapped = null;
          if (1 !== parts.length) {
            mapped = parts.map((children) => {
              if (arg1 % 2 === 1) {
                let obj = callback(closure_2[28]);
                if (obj.parse(closure_39, children, closure_40).content !== children) {
                  obj = { style: mentionText.mentionText, children };
                  return callback2(closure_8, obj, arg1);
                }
              }
              obj = { children };
              return callback2(React.Fragment, obj, arg1);
            });
          }
          return mapped;
        }
      }
    }
    return null;
  }, items16);
  if (null == obj19) {
    return null;
  } else {
    renderErrorResult = arg1;
    renderErrorResult = dependencyMap;
    obj = { content: first1 };
    renderErrorResult = arg1(dependencyMap[40]).renderError(tmp26[0], obj);
    const obj46 = arg1(dependencyMap[40]);
    obj = { content: str4, tags: first2 };
    renderErrorResult = arg1(dependencyMap[40]).renderError(tmp27[0], obj);
    if (obj19.isMediaChannel()) {
      const items17 = [arg1(dependencyMap[49]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE];
      let items18 = items17;
    } else {
      items18 = [];
    }
    obj1 = {};
    const items19 = [renderErrorResult.container, ];
    obj2 = { paddingTop: insets.top, paddingBottom: insets.bottom + tmp67[0] };
    items19[1] = obj2;
    obj1.style = items19;
    obj3 = {
      channel: parentChannel,
      height: 44,
      onClose,
      onGuidelinesPress() {
          blurLastInput();
          let obj = parentChannel(threadSettingsDraft[53]);
          obj = {
            channel: parentChannel,
            onClose() {
              callback();
            }
          };
          const result = obj.openForumGuidelinesActionSheet(obj);
        },
      submitting: first,
      title: tmp71
    };
    const items20 = [callback4(importDefault(dependencyMap[52]), obj3), ];
    obj4 = {};
    obj5 = { onScroll: animatedScrollHandler, contentContainerStyle: renderErrorResult.scrollViewContentContainer };
    obj6 = { ref };
    ({ titleInput: obj26.style, titleInputText: obj26.inputTextStyle } = renderErrorResult);
    obj6.showTopContainer = false;
    const intl = arg1(dependencyMap[42]).intl;
    obj6.placeholder = intl.string(arg1(dependencyMap[42]).t.lU4dDS);
    obj6.placeholderTextColor = tmp6;
    obj6.large = true;
    obj6.multiline = true;
    obj6.value = first1;
    obj6.clearButtonVisibility = arg1(dependencyMap[55]).ClearButtonVisibility.NEVER;
    obj6.maxLength = closure_21;
    obj6.onChange = callback1;
    obj6.onBlur = function onBlur() {
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
    obj6.onFocus = function onFocus() {
      let tmp = tmp8 !== parentChannel(threadSettingsDraft[57]).KeyboardTypes.MEDIA;
      if (tmp) {
        tmp = tmp8 !== parentChannel(threadSettingsDraft[57]).KeyboardTypes.EXPRESSION;
      }
      if (!tmp) {
        let obj = parentChannel(threadSettingsDraft[58]);
        obj = { type: parentChannel(threadSettingsDraft[57]).KeyboardTypes.SYSTEM };
        obj = { keyboardWillOpen: true };
        obj.context = obj;
        obj.setKeyboardType(obj);
      }
      const tmp8 = _undefined(parentChannel(threadSettingsDraft[44]).PostComposerInputs.TITLE);
    };
    obj6.autoFocus = true;
    obj6.autoCorrect = true;
    obj6.textContentType = "none";
    obj6.returnKeyType = "next";
    obj6.onNext = callback;
    const items21 = [callback4(arg1(dependencyMap[54]).FormInput, obj6), , ];
    let tmp84 = null;
    if (null != renderErrorResult) {
      obj7 = { style: renderErrorResult.nameError, children: renderErrorResult };
      tmp84 = callback4(importDefault(dependencyMap[59]), obj7);
    }
    items21[1] = tmp84;
    obj8 = { style: renderErrorResult.editor };
    let tmp91Result = null != stateFromStores;
    if (tmp91Result) {
      obj9 = {
        style: renderErrorResult.avatarContainer,
        onPress() {
              const obj = { userId: stateFromStores.id, channelId: obj19.id };
              let id;
              if (null != message) {
                id = message.id;
              }
              obj.messageId = id;
              obj.sourceAnalyticsLocations = analyticsLocations;
              return thread(threadSettingsDraft[60])(obj);
            }
      };
      obj10 = { animate: true, style: renderErrorResult.avatar, user: stateFromStores };
      let guildId;
      if (null != parentChannel) {
        guildId = parentChannel.getGuildId();
      }
      let tmp97;
      if (null != guildId) {
        tmp97 = guildId;
      }
      obj10.guildId = tmp97;
      obj10.avatarDecoration = stateFromStores.avatarDecoration;
      const intl2 = arg1(dependencyMap[42]).intl;
      obj11 = { nickname: str5 };
      obj10.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[42]).t.LvU3nj, obj11);
      obj9.children = callback4(arg1(dependencyMap[55]).Avatar, obj10);
      tmp91Result = callback4(analyticsLocations, obj9);
      const tmp91 = callback4;
      const tmp92 = analyticsLocations;
      const tmp93 = callback4;
    }
    const items22 = [tmp91Result, ];
    obj12 = { style: renderErrorResult.editorBody };
    renderErrorResult = createForumPost;
    renderErrorResult = stateFromStores3;
    obj13 = { style: renderErrorResult.usernameToChannel };
    renderErrorResult = arg1;
    renderErrorResult = dependencyMap;
    renderErrorResult = createForumPost;
    renderErrorResult = stateFromStores3;
    const intl3 = arg1(dependencyMap[42]).intl;
    obj14 = { nickname: str5, channelName: tmp10 };
    obj13.accessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[42]).t.QicUf+, obj14);
    renderErrorResult = callback4;
    obj15 = { name: str5, color: tmp29, colors: tmp31 };
    const items23 = [callback4(arg1(dependencyMap[61]).RoleLabel, obj15), ];
    renderErrorResult = createForumPost;
    obj16 = { style: renderErrorResult.channelName };
    const intl4 = arg1(dependencyMap[42]).intl;
    obj17 = { channelName: tmp10 };
    const items24 = [null, intl4.format(arg1(dependencyMap[42]).t.6Y1Kev, obj17)];
    obj16.children = items24;
    items23[1] = createForumPost(arg1(dependencyMap[62]).Text, obj16);
    obj13.children = items23;
    const items25 = [createForumPost(stateFromStores3, obj13), , ];
    renderErrorResult = null;
    if (null != renderErrorResult) {
      renderErrorResult = callback4;
      renderErrorResult = importDefault;
      renderErrorResult = dependencyMap;
      obj18 = { style: renderErrorResult.messageError, children: renderErrorResult };
      renderErrorResult = callback4(importDefault(dependencyMap[59]), obj18);
    }
    items25[1] = renderErrorResult;
    renderErrorResult = arg1;
    renderErrorResult = dependencyMap;
    renderErrorResult = callback4;
    obj19 = { ref: ref1, style: renderErrorResult.contentInput, multiline: true, scrollEnabled: false };
    const intl5 = arg1(dependencyMap[42]).intl;
    obj19.placeholder = intl5.string(arg1(dependencyMap[42]).t.8IPnv1);
    obj19.placeholderTextColor = tmp6;
    obj19.onChangeText = callback7;
    obj19.onSelectionChange = callback8;
    obj19.onFocus = function onFocus() {
      if (tmp8 === parentChannel(threadSettingsDraft[57]).KeyboardTypes.MEDIA) {
        let obj = parentChannel(threadSettingsDraft[58]);
        obj = { type: parentChannel(threadSettingsDraft[57]).KeyboardTypes.SYSTEM };
        obj = { keyboardWillOpen: true };
        obj.context = obj;
        obj.setKeyboardType(obj);
      }
      _undefined(parentChannel(threadSettingsDraft[44]).PostComposerInputs.CONTENT);
    };
    obj19.showSoftInputOnFocus = tmp8 !== arg1(dependencyMap[57]).KeyboardTypes.EXPRESSION;
    renderErrorResult = str4;
    if (null != memo3) {
      renderErrorResult = callback4;
      renderErrorResult = stateFromStores;
      const obj20 = { children: memo3 };
      renderErrorResult = callback4(stateFromStores, obj20);
    }
    obj19.children = renderErrorResult;
    items25[2] = renderErrorResult(arg1(dependencyMap[55]).TextInput, obj19);
    obj12.children = items25;
    items22[1] = renderErrorResult(renderErrorResult, obj12);
    obj8.children = items22;
    items21[2] = createForumPost(stateFromStores3, obj8);
    obj5.children = items21;
    const items26 = [createForumPost(importDefault(dependencyMap[32]).ScrollView, obj5), , , , ];
    renderErrorResult = callback4;
    renderErrorResult = closure_36;
    const obj21 = { tags: first2 };
    items26[1] = callback4(closure_36, obj21);
    renderErrorResult = callback4;
    renderErrorResult = closure_37;
    const obj22 = {
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
          const items = [, ];
          ({ EMOJI: arr[0], GIF: arr[1] } = callback3);
          const result = obj.openExpressionPickerActionSheet(obj);
        },
      focusLastInput,
      lastInput: focusHandlers.focusedInput,
      isEdit,
      onLayout: callback10
    };
    items26[2] = callback4(closure_37, obj22);
    renderErrorResult = callback4;
    renderErrorResult = importDefault;
    renderErrorResult = dependencyMap;
    const obj23 = {};
    const items27 = [renderErrorResult.horizontalAutocomplete, ];
    const obj24 = { bottom: insets.bottom };
    items27[1] = obj24;
    obj23.style = items27;
    obj23.onPressAutocompleteItem = pressHorizontalAutocompleteItemHandler;
    obj23.text = str4;
    obj23.selection = tmp63;
    obj23.channel = obj19;
    class W {
      constructor(arg0) {
        return closure_24.set(parentChannel.contentOffset.y);
      }
    }
    renderErrorResult = callback4;
    const obj25 = {
      contentTypes: items18,
      children(markAsDismissed) {
          const parentChannel = markAsDismissed.markAsDismissed;
          let tmp = null;
          if (markAsDismissed.visibleContent === parentChannel(threadSettingsDraft[49]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(constants.UNKNOWN);
                },
              actionSheetKey: "ThumbnailBottomSheet",
              importer: MediaPostMultipleThumbnailActionSheetImporter
            };
            tmp = callback4(parentChannel(threadSettingsDraft[66]).DismissibleActionSheet, obj);
          }
          return tmp;
        }
    };
    items26[4] = callback4(importDefault(dependencyMap[65]), obj25);
    obj4.children = items26;
    items20[1] = createForumPost(callback5, obj4);
    obj1.children = items20;
    return createForumPost(stateFromStores3, obj1);
  }
  const pressHorizontalAutocompleteItemHandler = obj17.usePressHorizontalAutocompleteItemHandler({ draftContent: tmp22[0], handleTextChange: callback7, setSelection: callback9, channel: parentChannel });
};
