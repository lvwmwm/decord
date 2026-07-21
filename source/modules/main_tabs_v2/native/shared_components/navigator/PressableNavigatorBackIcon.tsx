// Module ID: 9116
// Function ID: 71409
// Name: PressableNavigatorBackIcon
// Dependencies: []

// Module 9116 (PressableNavigatorBackIcon)
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles((arg0) => {
  let obj = {};
  obj = { minWidth: arg1(dependencyMap[7]).BADGE_SIZE, height: arg1(dependencyMap[7]).BADGE_SIZE };
  obj.maskWrapper = obj;
  obj = { backgroundColor: importDefault(dependencyMap[8]).colors.PANEL_BG };
  obj.maskStroke = obj;
  const obj1 = { width: 40, height: 40 };
  obj.actionButtonPressable = obj1;
  const obj2 = {};
  const colors = importDefault(dependencyMap[8]).colors;
  obj2.tintColor = arg0 ? colors.ICON_SUBTLE : colors.INTERACTIVE_TEXT_DEFAULT;
  obj.actionButtonIcon = obj2;
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
const forwardRefResult = importAllResult.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  ref = navigation;
  const onPress = navigation.onPress;
  const importDefault = onPress;
  let obj = Object.create(null);
  obj.navigation = 0;
  obj.onPress = 0;
  const merged = Object.assign(navigation, obj);
  const tmp3 = callback2(importDefault(dependencyMap[9])("PressableNavigatorBackIcon"));
  obj = ref(dependencyMap[10]);
  const items = [closure_7, closure_8, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const totalMentionCount = store.getTotalMentionCount();
    const currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      const channel = channel.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let tmp6 = null;
      if (null != guild_id) {
        tmp6 = guild_id;
      }
      return totalMentionCount - store.getHighImportanceMentionCountForChannel(tmp6, currentlySelectedChannelId);
    }
  });
  const dependencyMap = stateFromStores;
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
  let obj1 = ref(dependencyMap[11]);
  let backgroundColor = obj1.useGradientValue(ref(dependencyMap[11]).GradientPercentage.START);
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
    const intl2 = ref(dependencyMap[14]).intl;
    const obj2 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(ref(dependencyMap[14]).t.vxFYaM, obj2);
  } else {
    const intl = ref(dependencyMap[14]).intl;
    formatToPlainStringResult = intl.string(ref(dependencyMap[14]).t.13/7kX);
  }
  obj1["accessibilityLabel"] = formatToPlainStringResult;
  obj1["onPress"] = callback;
  obj1["style"] = tmp3.actionButtonPressable;
  const obj3 = {};
  const tmp8 = importDefault(dependencyMap[12]);
  const items3 = [callback(closure_5, { source: importDefault(dependencyMap[15]), style: obj5 }), ];
  let tmp17 = null;
  if (stateFromStores > 0) {
    const obj6 = { style: tmp3.maskWrapper };
    const obj7 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    obj6.children = callback(importDefault(dependencyMap[16]), obj7);
    tmp17 = callback(closure_4, obj6);
  }
  items3[1] = tmp17;
  obj3.children = items3;
  obj1["children"] = closure_10(closure_4, obj3);
  obj.children = callback(ref(dependencyMap[13]).PressableOpacity, obj1);
  return callback(tmp8, obj);
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = forwardRefResult;
