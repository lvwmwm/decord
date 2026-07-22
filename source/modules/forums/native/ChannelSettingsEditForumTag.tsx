// Module ID: 15422
// Function ID: 117697
// Name: ChannelSettingsEditForumTag
// Dependencies: []
// Exports: default

// Module 15422 (ChannelSettingsEditForumTag)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ EMOJI_URL_BASE_SIZE: closure_8, EmojiIntention: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.sections = { paddingHorizontal: 12, paddingTop: importDefault(dependencyMap[8]).space.PX_16 };
obj.hint = { marginTop: 8 };
obj.emojiIconWrapper = { it-CH: "<string:1816216811>", CHANGE_EMAIL_REASONS_ORDER: "<string:1627390632>", addWindow: "<string:29708858>", FilterSettingsGraph: "<string:1732330731>", role2: null };
obj.imageEmoji = {};
obj.textEmoji = {};
obj.nameInput = { pending: 0, lanes: "#dfdfdf" };
obj.saveButton = { flex: 0 };
let closure_12 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: 12, paddingTop: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default function ChannelSettingsEditForumTag(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const tag = channelId.tag;
  const importDefault = tag;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let first2;
  let callback2;
  let closure_11;
  let callback3;
  let tmp24;
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
        closure_6(obj);
      }
    }
    name = id.name;
  }
  const tmp = callback3();
  const dependencyMap = tmp;
  callback = tmp2;
  let obj = arg1(dependencyMap[9]);
  const navigation = obj.useNavigation();
  const React = navigation;
  let tmp5 = null;
  if (null != tag) {
    obj = {};
    ({ emojiId: obj2.id, emojiName: obj2.name } = tag);
    tmp5 = obj;
  }
  const tmp6 = callback(React.useState(tmp5), 2);
  const first = tmp6[0];
  View = first;
  closure_6 = tmp6[1];
  let name;
  if (null != tag) {
    name = tag.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp10 = callback(React.useState(str), 2);
  const first1 = tmp10[0];
  closure_7 = first1;
  closure_8 = tmp10[1];
  let moderated;
  if (null != tag) {
    moderated = tag.moderated;
  }
  const tmp14 = callback(React.useState(moderated), 2);
  first2 = tmp14[0];
  callback2 = tmp14[1];
  let obj2 = arg1(dependencyMap[10]);
  const items = [closure_7];
  closure_11 = obj2.useStateFromStores(items, () => first1.getChannel(channelId));
  let obj3 = arg1(dependencyMap[10]);
  const items1 = [closure_6];
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
  callback3 = React.useRef({ emoji: first, tagName: first1, moderated: first2 });
  const items2 = [first, first1, first2];
  const effect = React.useEffect(() => {
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
    tmp24 = tmp23;
  } else {
    tmp24 = tmp23;
    if (!tmp18) {
      tmp24 = tmp19;
    }
  }
  const items3 = [navigation, null == tag];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = {};
        const intl = callback(closure_2[12]).intl;
        const string = intl.string;
        const t = callback(closure_2[12]).t;
        if (closure_3) {
          let stringResult = string(t./jubeD);
        } else {
          stringResult = string(t.zeVg5d);
        }
        obj.children = stringResult;
        return closure_10(callback(closure_2[11]).Text, obj);
      }
    });
  }, items3);
  const items4 = [null == tag, navigation, channelId, ];
  let id1;
  if (null != tag) {
    id1 = tag.id;
  }
  items4[3] = id1;
  callback = React.useCallback(() => {
    let emoji;
    let moderated;
    let tagName;
    ({ tagName, emoji, moderated } = ref.current);
    if ("" !== tagName) {
      const obj3 = tag(tmp[13]);
      if (tmp2) {
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
  const effect1 = React.useEffect(() => {
    const setOptions = navigation.setOptions;
    const obj = {};
    if (tmp24) {
      obj.headerRight = function headerRight() {
        const obj = { style: saveButton.saveButton, onPress: closure_14 };
        const intl = callback(saveButton[12]).intl;
        obj.text = intl.string(callback(saveButton[12]).t.R3BPH+);
        return callback2(callback(saveButton[14]).HeaderActionButton, obj);
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
        style: tmp.nameInput,
        value: first1,
        onChangeText(arg0) {
              callback(arg0);
            }
      };
      const intl = arg1(dependencyMap[12]).intl;
      obj6.placeholder = intl.string(arg1(dependencyMap[12]).t.aMSq0a);
      obj4.label = callback2(arg1(dependencyMap[23]).TextInput, obj6);
      if (null != first) {
        const obj7 = {
          accessibilityRole: "button",
          onPress() {
                  usableCustomEmojiById(null);
                  callback("");
                }
        };
        const obj8 = { size: "xs" };
        obj7.children = callback2(arg1(dependencyMap[24]).CircleXIcon, obj8);
        let tmp47 = callback2(arg1(dependencyMap[18]).PressableOpacity, obj7);
      } else {
        tmp47 = null;
      }
      obj4.trailing = tmp47;
      obj3.children = tmp30(arg1(dependencyMap[17]).TableRow, obj4);
      const items6 = [tmp30(arg1(dependencyMap[16]).TableRowGroup, obj3), ];
      const obj9 = { style: tmp.hint };
      const obj10 = { cachedAt: "y", edpbxy: "isArray" };
      const intl2 = arg1(dependencyMap[12]).intl;
      obj10.children = intl2.string(arg1(dependencyMap[12]).t.3v8kZH);
      obj9.children = callback2(arg1(dependencyMap[11]).Text, obj10);
      items6[1] = callback2(View, obj9);
      obj2.children = items6;
      const items7 = [tmp32(tmp31, obj2), , ];
      let obj11 = { hasIcons: false };
      const obj12 = {};
      const intl3 = arg1(dependencyMap[12]).intl;
      obj12.label = intl3.string(arg1(dependencyMap[12]).t.rMH+rt);
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
      obj11.children = callback2(arg1(dependencyMap[25]).TableSwitchRow, obj12);
      items7[1] = callback2(arg1(dependencyMap[16]).TableRowGroup, obj11);
      let tmp55 = null;
      if (!tmp2) {
        const obj13 = { hasIcons: false };
        const obj14 = { variant: "danger" };
        const intl4 = arg1(dependencyMap[12]).intl;
        obj14.label = intl4.string(arg1(dependencyMap[12]).t.huYSMr);
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
            if (!closure_3) {
              lib(closure_2[13]).deleteForumTag(closure_0, lib.id);
              const arr = arr.pop();
              const obj = lib(closure_2[13]);
            }
          };
          obj.show(obj);
        };
        obj13.children = callback2(arg1(dependencyMap[17]).TableRow, obj14);
        tmp55 = callback2(arg1(dependencyMap[16]).TableRowGroup, obj13);
      }
      items7[2] = tmp55;
      obj1.children = items7;
      obj.children = tmp32(arg1(dependencyMap[15]).Stack, obj1);
      return tmp30(tmp31, obj);
    }
    const obj15 = {};
    ({ textEmoji: obj11.textEmojiStyle, imageEmoji: obj11.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      obj11 = importDefault(dependencyMap[21]);
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
    let tmp34Result = callback2(importDefault(dependencyMap[20]), obj15);
    const tmp34 = callback2;
    const tmp37 = importDefault(dependencyMap[20]);
  }
  tmp34Result = callback2(arg1(dependencyMap[22]).ReactionIcon, {});
};
