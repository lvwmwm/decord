// Module ID: 14073
// Function ID: 106856
// Name: toggle
// Dependencies: []

// Module 14073 (toggle)
const useFontScaleStore = require(dependencyMap[0]).useFontScaleStore;
const _module = require(dependencyMap[5]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.gFob3e);
  },
  parent: require(dependencyMap[1]).MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, require(dependencyMap[2]).shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const require = arg0;
    return require(dependencyMap[3]).batchUpdates(() => state.setState({ isClassicChatFontScaleEnabled: arg0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.OU3q8a);
  },
  usePredicate: require(dependencyMap[6]).isAndroid
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;
