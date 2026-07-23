// Module ID: 5156
// Function ID: 44931
// Name: DropdownOptionRow
// Dependencies: [31, 27, 4991, 5058, 1852, 33, 4130, 624, 5151, 1392, 1273, 1212, 4126, 5157, 1557, 4098, 5186, 5187, 5189, 4543, 2]
// Exports: default

// Module 5156 (DropdownOptionRow)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function DropdownOptionRow(option) {
  let onSelect;
  let responses;
  option = option.option;
  ({ responses, onSelect } = option);
  const tmp = callback3();
  let obj = option(hasItem[7]);
  const items = [_isNativeReflectConstruct];
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
      usableCustomEmojiById = outer1_5.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  hasItem = responses.includes(option.id);
  const items1 = [onSelect, option, hasItem];
  let emoji = option.emoji;
  let id;
  const callback = React.useCallback(() => {
    onSelect(option, !hasItem);
  }, items1);
  if (null != emoji) {
    id = emoji.id;
  }
  if (null != id) {
    obj = { style: { display: "flex", alignItems: "center" } };
    obj = {};
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      let obj3 = onSelect(hasItem[9]);
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
    obj.children = callback(onSelect(hasItem[8]), obj);
    let tmp8Result = callback(View, obj);
    const tmp10 = callback;
    const tmp13 = onSelect(hasItem[8]);
    const tmp8 = callback;
    const tmp9 = View;
  } else {
    let emoji2 = option.emoji;
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
      const obj2 = { color: option(hasItem[10]).BadgeColors.BRAND };
      const intl = option(hasItem[11]).intl;
      obj2.text = intl.string(option(hasItem[11]).t.y2b7CA);
      obj2.textStyle = tmp.newBadge;
      tmp19 = callback(option(hasItem[10]).TextBadge, obj2);
    }
  }
  obj3 = { style: tmp.labelRow };
  const items2 = [callback(option(hasItem[12]).Text, { variant: "text-md/normal", children: option.title }), tmp19];
  obj3.children = items2;
  const obj5 = { label: callback2(View, obj3), selected: hasItem, leading: tmp8Result, trailing: tmp19, onPress: callback };
  return callback(onSelect(hasItem[13]), obj5);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, newBadge: { fontWeight: "bold" }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default function DropdownOptionsActionSheet(arg0) {
  let result;
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: result } = arg0);
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getOnboardingPrompt(closure_1));
  let obj1 = require(624) /* defaultAreStatesEqual */;
  const items1 = [closure_6];
  let closure_4 = obj1.useStateFromStoresArray(items1, () => outer1_6.getOnboardingResponsesForPrompt(closure_0, closure_1));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.E2ICbC);
    obj = { scrollable: true };
    obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
    obj1 = {};
    const obj2 = { paddingBottom: importDefault(1557)().bottom };
    obj1.contentContainerStyle = obj2;
    const obj3 = { accessibilityRole: "radiogroup" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj3.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.E2ICbC);
    const options = stateFromStores.options;
    obj3.children = options.map((id) => outer1_8(outer1_11, { option: id, responses: closure_4, onSelect: result, canBeNew: Boolean(closure_2) }, id.id));
    const items2 = [callback(require(1273) /* Button */.CardSection, obj3), ];
    const obj4 = { style: tmp.closeButtonWrapper };
    const obj5 = { onPress: tmp3 };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj5.text = intl3.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
    obj5.grow = true;
    obj4.children = callback(require(4543) /* Button */.Button, obj5);
    items2[1] = callback(closure_4, obj4);
    obj1.children = items2;
    obj.children = callback2(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj1);
    return callback(require(5187) /* Background */.BottomSheet, obj);
  }
  tmp = callback3();
};
