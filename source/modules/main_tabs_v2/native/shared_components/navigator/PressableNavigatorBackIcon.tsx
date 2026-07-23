// Module ID: 9124
// Function ID: 71463
// Name: PressableNavigatorBackIcon
// Dependencies: [31, 27, 1348, 6879, 1906, 33, 4130, 1273, 689, 1324, 566, 3941, 9125, 4660, 1212, 9126, 9127, 2]

// Module 9124 (PressableNavigatorBackIcon)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { position: "absolute", minWidth: require(1273) /* Button */.BADGE_SIZE, height: require(1273) /* Button */.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  obj.maskWrapper = obj;
  obj = { backgroundColor: importDefault(689).colors.PANEL_BG };
  obj.maskStroke = obj;
  const obj1 = { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 };
  obj.actionButtonPressable = obj1;
  const obj2 = {};
  const colors = importDefault(689).colors;
  obj2.tintColor = arg0 ? colors.ICON_SUBTLE : colors.INTERACTIVE_TEXT_DEFAULT;
  obj.actionButtonIcon = obj2;
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  let obj = Object.create(null);
  obj.navigation = 0;
  obj.onPress = 0;
  const merged = Object.assign(navigation, obj);
  const tmp3 = callback2(onPress(stateFromStores[9])("PressableNavigatorBackIcon"));
  obj = navigation(stateFromStores[10]);
  const items = [closure_7, closure_8, _isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const totalMentionCount = outer1_7.getTotalMentionCount();
    const currentlySelectedChannelId = outer1_8.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      const channel = outer1_6.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let tmp6 = null;
      if (null != guild_id) {
        tmp6 = guild_id;
      }
      return totalMentionCount - outer1_7.getHighImportanceMentionCountForChannel(tmp6, currentlySelectedChannelId);
    }
  });
  const items1 = [stateFromStores];
  const memo = importAllResult.useMemo(() => {
    if (stateFromStores >= 10) {
      if (stateFromStores < 100) {
        let obj = { minWidth: navigation(stateFromStores[7]).BADGE_SIZE + 8 };
      } else {
        obj = { minWidth: navigation(stateFromStores[7]).BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  let obj1 = navigation(stateFromStores[11]);
  let backgroundColor = obj1.useGradientValue(navigation(stateFromStores[11]).GradientPercentage.START);
  if (null == backgroundColor) {
    backgroundColor = tmp3.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = importAllResult.useCallback(() => {
    if (null == onPress) {
      if (null != navigation) {
        navigation.goBack();
      }
    } else {
      onPress();
    }
  }, items2);
  obj = {};
  obj1 = { ref };
  const merged1 = Object.assign(merged);
  obj1["accessibilityRole"] = "button";
  if (stateFromStores > 0) {
    const intl2 = navigation(stateFromStores[14]).intl;
    const obj2 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(navigation(stateFromStores[14]).t.vxFYaM, obj2);
  } else {
    const intl = navigation(stateFromStores[14]).intl;
    formatToPlainStringResult = intl.string(navigation(stateFromStores[14]).t["13/7kX"]);
  }
  obj1["accessibilityLabel"] = formatToPlainStringResult;
  obj1["onPress"] = callback;
  obj1["style"] = tmp3.actionButtonPressable;
  const obj3 = {};
  const tmp8 = onPress(stateFromStores[12]);
  const items3 = [callback(closure_5, { source: onPress(stateFromStores[15]), style: obj5 }), ];
  let tmp17 = null;
  if (stateFromStores > 0) {
    const obj6 = { style: tmp3.maskWrapper };
    const obj7 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    obj6.children = callback(onPress(stateFromStores[16]), obj7);
    tmp17 = callback(closure_4, obj6);
  }
  items3[1] = tmp17;
  obj3.children = items3;
  obj1["children"] = closure_10(closure_4, obj3);
  obj.children = callback(navigation(stateFromStores[13]).PressableOpacity, obj1);
  return callback(tmp8, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = forwardRefResult;
