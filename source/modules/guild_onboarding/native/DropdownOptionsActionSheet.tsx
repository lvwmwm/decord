// Module ID: 5423
// Function ID: 46491
// Name: DropdownOptionRow
// Dependencies: []
// Exports: default

// Module 5423 (DropdownOptionRow)
function DropdownOptionRow(option) {
  let onSelect;
  let responses;
  option = option.option;
  const arg1 = option;
  ({ responses, onSelect } = option);
  const importDefault = onSelect;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    if (null != emoji) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = option.emoji;
      let id1;
      if (null != emoji2) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  const hasItem = responses.includes(option.id);
  const dependencyMap = hasItem;
  const items1 = [onSelect, option, hasItem];
  const emoji = option.emoji;
  let id;
  const callback = React.useCallback(() => {
    onSelect(option, !hasItem);
  }, items1);
  if (null != emoji) {
    id = emoji.id;
  }
  if (null != id) {
    obj = { style: { <string:29557293>: true, <string:45941405>: true } };
    obj = {};
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      let obj3 = importDefault(dependencyMap[9]);
      const obj1 = {};
      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
      obj1.size = EMOJI_URL_BASE_SIZE;
      emojiURL = obj3.getEmojiURL(obj1);
    }
    obj.src = emojiURL;
    const emoji3 = option.emoji;
    let name;
    if (null != emoji3) {
      name = emoji3.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    obj.name = str;
    obj.children = callback(importDefault(dependencyMap[8]), obj);
    let tmp8Result = callback(View, obj);
    const tmp10 = callback;
    const tmp13 = importDefault(dependencyMap[8]);
    const tmp8 = callback;
    const tmp9 = View;
  } else {
    const emoji2 = option.emoji;
    let name1;
    if (null != emoji2) {
      name1 = emoji2.name;
    }
    tmp8Result = null;
  }
  let tmp19 = null;
  if (option.canBeNew) {
    tmp19 = null;
    if (option.isUnseen) {
      const obj2 = { color: arg1(dependencyMap[10]).BadgeColors.BRAND };
      const intl = arg1(dependencyMap[11]).intl;
      obj2.text = intl.string(arg1(dependencyMap[11]).t.y2b7CA);
      obj2.textStyle = tmp.newBadge;
      tmp19 = callback(arg1(dependencyMap[10]).TextBadge, obj2);
    }
  }
  obj3 = { style: tmp.labelRow };
  const items2 = [callback(arg1(dependencyMap[12]).Text, { variant: "text-md/normal", children: option.title }), tmp19];
  obj3.children = items2;
  const obj5 = { label: callback2(View, obj3), selected: hasItem, leading: tmp8Result, trailing: tmp19, onPress: callback };
  return callback(importDefault(dependencyMap[13]), obj5);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[4]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ optionTextEmoji: { 9223372036854775807: "useCallback", 0: "constructor", 9223372036854775807: "values" }, optionImageEmoji: {}, newBadge: { fontWeight: "bold" }, labelRow: {}, closeButtonWrapper: {} });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default function DropdownOptionsActionSheet(arg0) {
  ({ guildId: closure_0, promptId: closure_1, canBeNew: closure_2, onSelect: closure_3 } = arg0);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => store.getOnboardingPrompt(closure_1));
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_6];
  let closure_4 = obj1.useStateFromStoresArray(items1, () => store.getOnboardingResponsesForPrompt(closure_0, closure_1));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    const intl = arg1(dependencyMap[11]).intl;
    obj.title = intl.string(arg1(dependencyMap[11]).t.E2ICbC);
    obj = { scrollable: true };
    obj.header = callback(arg1(dependencyMap[16]).BottomSheetTitleHeader, obj);
    obj1 = {};
    const obj2 = { paddingBottom: importDefault(dependencyMap[14])().bottom };
    obj1.contentContainerStyle = obj2;
    const obj3 = { accessibilityRole: "radiogroup" };
    const intl2 = arg1(dependencyMap[11]).intl;
    obj3.accessibilityLabel = intl2.string(arg1(dependencyMap[11]).t.E2ICbC);
    const options = stateFromStores.options;
    obj3.children = options.map((id) => callback2(closure_11, { option: id, responses: closure_4, onSelect: closure_3, canBeNew: Boolean(closure_2) }, id.id));
    const items2 = [callback(arg1(dependencyMap[10]).CardSection, obj3), ];
    const obj4 = { style: tmp.closeButtonWrapper };
    const obj5 = { onPress: tmp3 };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj5.text = intl3.string(arg1(dependencyMap[11]).t.cpT0Cq);
    obj5.grow = true;
    obj4.children = callback(arg1(dependencyMap[19]).Button, obj5);
    items2[1] = callback(closure_4, obj4);
    obj1.children = items2;
    obj.children = callback2(arg1(dependencyMap[18]).BottomSheetScrollView, obj1);
    return callback(arg1(dependencyMap[17]).BottomSheet, obj);
  }
  const tmp = callback3();
};
