// Module ID: 15539
// Function ID: 119871
// Name: ChannelSettingsEditForumTag
// Dependencies: [57, 31, 27, 4991, 1348, 1852, 33, 4130, 689, 1456, 566, 4126, 1212, 9139, 5788, 4541, 5503, 5165, 4660, 9326, 5151, 1392, 8007, 1273, 5776, 5504, 4471, 2]
// Exports: default

// Module 15539 (ChannelSettingsEditForumTag)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import set from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "get ActivityIndicator";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
({ EMOJI_URL_BASE_SIZE: closure_8, EmojiIntention: closure_9 } = set);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sections = { paddingHorizontal: 12, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.hint = { marginTop: 8 };
_createForOfIteratorHelperLoose.emojiIconWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: 24, width: 24 };
_createForOfIteratorHelperLoose.imageEmoji = { height: 20, width: 20 };
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 20, lineHeight: 26 };
_createForOfIteratorHelperLoose.nameInput = { width: "100%", flexGrow: 1 };
_createForOfIteratorHelperLoose.saveButton = { flex: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = set.fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default function ChannelSettingsEditForumTag(channelId) {
  channelId = channelId.channelId;
  const tag = channelId.tag;
  let first;
  let _isNativeReflectConstruct;
  let first1;
  let closure_8;
  let first2;
  let callback2;
  let closure_11;
  let _createForOfIteratorHelperLoose;
  let c13;
  let callback;
  function handlePressEmoji(id) {
    if (null == id.id) {
      if (null != id.surrogates) {
        if ("" !== id.surrogates) {
          let name = id.surrogates;
        }
        const obj = { id: id.id };
        let tmp2;
        if (null == id.id) {
          tmp2 = name;
        }
        obj.name = tmp2;
        _isNativeReflectConstruct(obj);
      }
    }
    name = id.name;
  }
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  callback = tmp2;
  let obj = channelId(1456);
  const navigation = obj.useNavigation();
  let tmp5 = null;
  if (null != tag) {
    obj = {};
    ({ emojiId: obj2.id, emojiName: obj2.name } = tag);
    tmp5 = obj;
  }
  const tmp6 = callback(navigation.useState(tmp5), 2);
  first = tmp6[0];
  _isNativeReflectConstruct = tmp6[1];
  let name;
  if (null != tag) {
    name = tag.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp10 = callback(navigation.useState(str), 2);
  first1 = tmp10[0];
  closure_8 = tmp10[1];
  let moderated;
  if (null != tag) {
    moderated = tag.moderated;
  }
  const tmp14 = callback(navigation.useState(moderated), 2);
  first2 = tmp14[0];
  callback2 = tmp14[1];
  let obj2 = channelId(566);
  const items = [first1];
  closure_11 = obj2.useStateFromStores(items, () => first1.getChannel(channelId));
  let obj3 = channelId(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let id;
    if (null != first) {
      id = first.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(first.id);
    }
    return usableCustomEmojiById;
  });
  _createForOfIteratorHelperLoose = navigation.useRef({ emoji: first, tagName: first1, moderated: first2 });
  const items2 = [first, first1, first2];
  const effect = navigation.useEffect(() => {
    closure_12.current = { emoji: first, tagName: first1, moderated: first2 };
  }, items2);
  let tmp19 = null != tag;
  if (tmp19) {
    let tmp20 = tag.name !== first1;
    if (!tmp20) {
      let id;
      if (null != first) {
        id = first.id;
      }
      tmp20 = tag.emojiId !== id;
    }
    if (!tmp20) {
      let name1;
      if (null != first) {
        name1 = first.name;
      }
      tmp20 = tag.emojiName !== name1;
    }
    if (!tmp20) {
      tmp20 = tag.moderated !== first2;
    }
    tmp19 = tmp20;
  }
  if (null == tag) {
    let tmp24 = tmp23;
  } else {
    tmp24 = tmp23;
    if (!tmp18) {
      tmp24 = tmp19;
    }
  }
  c13 = tmp24;
  const items3 = [navigation, null == tag];
  const layoutEffect = navigation.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
        const intl = channelId(1212).intl;
        const string = intl.string;
        const t = channelId(1212).t;
        if (outer1_3) {
          let stringResult = string(t["/jubeD"]);
        } else {
          stringResult = string(t.zeVg5d);
        }
        obj.children = stringResult;
        return closure_10(channelId(4126).Text, obj);
      }
    });
  }, items3);
  const items4 = [null == tag, navigation, channelId, ];
  let id1;
  if (null != tag) {
    id1 = tag.id;
  }
  items4[3] = id1;
  callback = navigation.useCallback(() => {
    let emoji;
    let moderated;
    let tagName;
    ({ tagName, emoji, moderated } = ref.current);
    if ("" !== tagName) {
      const obj3 = tag(tmp[13]);
      if (_slicedToArray) {
        let obj = { name: tagName };
        let id;
        if (null != emoji) {
          id = emoji.id;
        }
        obj.emojiId = id;
        tagName = null == emoji;
        let name;
        if (!tagName) {
          name = emoji.name;
        }
        obj.emojiName = name;
        obj.moderated = moderated;
        const forumTag = obj3.createForumTag(obj, channelId);
      } else {
        obj = {};
        let id1;
        if (null != tag) {
          id1 = tag.id;
        }
        obj.id = id1;
        obj.name = tagName;
        let id2;
        if (null != emoji) {
          id2 = emoji.id;
        }
        obj.emojiId = id2;
        let name1;
        if (null != emoji) {
          name1 = emoji.name;
        }
        obj.emojiName = name1;
        obj.moderated = moderated;
        obj3.updateForumTag(obj, channelId);
      }
      moderated = navigation;
      navigation.pop();
    }
  }, items4);
  const items5 = [tmp24, navigation, callback, tmp.saveButton];
  const effect1 = navigation.useEffect(() => {
    const setOptions = navigation.setOptions;
    let obj = {};
    if (c13) {
      obj.headerRight = function headerRight() {
        const obj = { style: outer1_2.saveButton, onPress: outer1_14 };
        const intl = channelId(1212).intl;
        obj.text = intl.string(channelId(1212).t["R3BPH+"]);
        return callback(channelId(5788).HeaderActionButton, obj);
      };
      setOptions(obj);
    } else {
      obj.headerRight = undefined;
      setOptions(obj);
    }
  }, items5);
  obj = { style: tmp.container };
  const obj1 = { spacing: 24, style: tmp.sections };
  obj2 = {};
  obj3 = { hasIcons: true };
  const obj4 = {};
  const obj5 = {
    style: tmp.emojiIconWrapper,
    accessibilityRole: "button",
    onPress() {
      let obj = channelId(tmp[19]);
      obj = { onPressEmoji: handlePressEmoji, pickerIntention: first2.COMMUNITY_CONTENT, channel: closure_11 };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  };
  if (null != first) {
    if (null == first.name) {
      obj5.children = tmp34Result;
      obj4.icon = tmp30(tmp33, obj5);
      const obj6 = {
        maxLength: 20,
        style: tmp.nameInput,
        value: first1,
        autoCorrect: false,
        autoCapitalize: "none",
        returnKeyType: "done",
        onChangeText(arg0) {
              callback(arg0);
            }
      };
      let intl = channelId(1212).intl;
      obj6.placeholder = intl.string(channelId(1212).t.aMSq0a);
      obj4.label = callback2(channelId(1273).TextInput, obj6);
      if (null != first) {
        const obj7 = {
          accessibilityRole: "button",
          onPress() {
                  usableCustomEmojiById(null);
                  callback("");
                }
        };
        const obj8 = { size: "xs" };
        obj7.children = callback2(channelId(5776).CircleXIcon, obj8);
        let tmp47 = callback2(channelId(4660).PressableOpacity, obj7);
      } else {
        tmp47 = null;
      }
      obj4.trailing = tmp47;
      obj3.children = tmp30(channelId(5165).TableRow, obj4);
      const items6 = [tmp30(channelId(5503).TableRowGroup, obj3), ];
      const obj9 = { style: tmp.hint };
      const obj10 = { variant: "text-sm/medium", color: "text-muted" };
      let intl2 = channelId(1212).intl;
      obj10.children = intl2.string(channelId(1212).t["3v8kZH"]);
      obj9.children = callback2(channelId(4126).Text, obj10);
      items6[1] = callback2(first, obj9);
      obj2.children = items6;
      const items7 = [tmp32(tmp31, obj2), , ];
      let obj11 = { hasIcons: false };
      const obj12 = {};
      let intl3 = channelId(1212).intl;
      obj12.label = intl3.string(channelId(1212).t["rMH+rt"]);
      obj12.value = null != first2 && first2;
      obj12.onValueChange = function onValueChange() {
        if (first2) {
          let moderated;
          if (null != tag) {
            moderated = tag.moderated;
          }
          if (null == moderated) {
            callback2(undefined);
          } else {
            callback2(false);
          }
        } else {
          callback2(true);
        }
      };
      obj11.children = callback2(channelId(5504).TableSwitchRow, obj12);
      items7[1] = callback2(channelId(5503).TableRowGroup, obj11);
      let tmp55 = null;
      if (!tmp2) {
        const obj13 = { hasIcons: false };
        const obj14 = { variant: "danger" };
        let intl4 = channelId(1212).intl;
        obj14.label = intl4.string(channelId(1212).t.huYSMr);
        obj14.onPress = function onPress() {
          let obj = tag(tmp[26]);
          obj = {};
          const intl = channelId(tmp[12]).intl;
          obj.title = intl.string(channelId(tmp[12]).t.huYSMr);
          const intl2 = channelId(tmp[12]).intl;
          obj.body = intl2.string(channelId(tmp[12]).t.bkAFCf);
          const intl3 = channelId(tmp[12]).intl;
          obj.cancelText = intl3.string(channelId(tmp[12]).t.gm1Vej);
          const intl4 = channelId(tmp[12]).intl;
          obj.confirmText = intl4.string(channelId(tmp[12]).t.p89ACt);
          obj.onConfirm = function onConfirm() {
            if (!outer1_3) {
              tag(table[13]).deleteForumTag(outer1_0, outer1_1.id);
              outer1_4.pop();
              const obj = tag(table[13]);
            }
          };
          obj.show(obj);
        };
        obj13.children = callback2(channelId(5165).TableRow, obj14);
        tmp55 = callback2(channelId(5503).TableRowGroup, obj13);
      }
      items7[2] = tmp55;
      obj1.children = items7;
      obj.children = tmp32(channelId(4541).Stack, obj1);
      return tmp30(tmp31, obj);
    }
    const obj15 = {};
    ({ textEmoji: obj11.textEmojiStyle, imageEmoji: obj11.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      obj11 = tag(1392);
      const obj16 = {};
      ({ id: obj13.id, animated: obj13.animated } = stateFromStores);
      obj16.size = closure_8;
      emojiURL = obj11.getEmojiURL(obj16);
    }
    obj15.src = emojiURL;
    let name2;
    if (null != first) {
      name2 = first.name;
    }
    let str2 = "";
    if (null != name2) {
      str2 = name2;
    }
    obj15.name = str2;
    tmp34Result = callback2(tag(5151), obj15);
    const tmp34 = callback2;
    const tmp37 = tag(5151);
  }
  tmp34Result = callback2(channelId(8007).ReactionIcon, {});
};
