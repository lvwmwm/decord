// Module ID: 14417
// Function ID: 108737
// Name: SettingsEmoji
// Dependencies: []

// Module 14417 (SettingsEmoji)
function SettingsEmoji(emoji) {
  emoji = emoji.emoji;
  if (null != emoji.id) {
    let obj = importDefault(dependencyMap[10]);
    obj = { id: emoji.id };
    let url = obj.getEmojiURL(obj);
  } else {
    url = emoji.url;
  }
  obj = { fastImageStyle: { <string:1140607356>: false, <string:1751293292>: false }, src: url };
  let str = "";
  const tmp = callback3();
  const tmp4 = jsx;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj.name = str;
  obj.adjustsFontSizeToFit = true;
  obj.textEmojiStyle = tmp.textEmoji;
  return tmp4(importDefault(dependencyMap[11]), obj);
}
function useDoubleTapDisabled() {
  const DoubleTapReactionEmoji = arg1(dependencyMap[8]).DoubleTapReactionEmoji;
  const disableDoubleTap = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  return null != disableDoubleTap && disableDoubleTap;
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const EmojiIntention = arg1(dependencyMap[4]).EmojiIntention;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.textEmoji = obj;
let closure_7 = obj.createStyles(obj);
const obj4 = arg1(dependencyMap[16]);
const pressable = obj4.createPressable({
  useTitle() {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.96WKNB);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = arg1(dependencyMap[8]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = arg1(dependencyMap[9]);
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = arg1(dependencyMap[9]).getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: fallbackDoubleTapDisambiguatedEmoji };
        let tmp4 = <SettingsEmoji {...obj} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: result };
      tmp4 = <SettingsEmoji {...obj} />;
    }
  },
  onPress: function onPressSetting() {
    let obj = callback(dependencyMap[12]);
    obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI };
    // CreateGeneratorClosureLongIndex (0x67)
    const callback = callback2(tmp);
    obj.onPressEmoji = function() {
      return callback(...arguments);
    };
    obj.startExpanded = true;
    const result = obj.openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = arg1(dependencyMap[8]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = arg1(dependencyMap[9]).disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: useDoubleTapDisabled,
  usePredicate: function useShouldShowSetting() {
    return !useDoubleTapDisabled();
  }
});
const obj1 = {
  useTitle() {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.96WKNB);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = arg1(dependencyMap[8]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = arg1(dependencyMap[9]);
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = arg1(dependencyMap[9]).getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: fallbackDoubleTapDisambiguatedEmoji };
        let tmp4 = <SettingsEmoji {...obj} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: result };
      tmp4 = <SettingsEmoji {...obj} />;
    }
  },
  onPress: function onPressSetting() {
    let obj = callback(dependencyMap[12]);
    obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI };
    // CreateGeneratorClosureLongIndex (0x67)
    const callback = callback2(tmp);
    obj.onPressEmoji = function() {
      return callback(...arguments);
    };
    obj.startExpanded = true;
    const result = obj.openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = arg1(dependencyMap[8]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = arg1(dependencyMap[9]).disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: useDoubleTapDisabled,
  usePredicate: function useShouldShowSetting() {
    return !useDoubleTapDisabled();
  }
};
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;
