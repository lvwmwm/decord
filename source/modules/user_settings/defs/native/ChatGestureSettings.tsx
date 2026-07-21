// Module ID: 10085
// Function ID: 78113
// Name: useSwipeToReplySettingValue
// Dependencies: []
// Exports: getSwipeToReplySettingValue, useSwipeToReplySettingValue

// Module 10085 (useSwipeToReplySettingValue)
function useSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require(dependencyMap[5]).SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}
const _module = require(dependencyMap[1]);
({ AnalyticEvents: closure_3, AnalyticsSections: closure_4 } = _module);
const _module1 = require(dependencyMap[6]);
const radio = _module1.createRadio({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.Jf0C/c);
  },
  useSearchTerms() {
    const intl = require(dependencyMap[3]).intl;
    const items = [intl.string(require(dependencyMap[3]).t.9BGJ1m)];
    return items;
  },
  parent: require(dependencyMap[0]).MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = importDefault(dependencyMap[4]);
    obj = { enabled: NumberResult === require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require(dependencyMap[5]).SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS };
    const intl = require(dependencyMap[3]).intl;
    obj.label = intl.string(require(dependencyMap[3]).t.6eXLcJ);
    const intl2 = require(dependencyMap[3]).intl;
    obj.subLabel = intl2.string(require(dependencyMap[3]).t.ohhhDK);
    const items = [obj, ];
    obj = { value: require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY };
    const intl3 = require(dependencyMap[3]).intl;
    obj.label = intl3.string(require(dependencyMap[3]).t.3tYNDS);
    items[1] = obj;
    return items;
  }
});
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export { useSwipeToReplySettingValue };
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require(dependencyMap[5]).SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require(dependencyMap[2]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};
