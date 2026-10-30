// Module ID: 9793
// Function ID: 9794
// Name: PressableNavigatorBackIcon
// Dependencies: [19, 17, 4858, 6880, 4912, 21, 5009, 1188, 575, 504, 5591, 5187, 9794, 6974, 1114, 5712, 9795, 9796, 2]
// Exports: PressableNavigatorBackIcon

// Module 9793 (PressableNavigatorBackIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let channel, currentlySelectedChannelId, totalMentionCount;

let c9;
let metroImportAll;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles(() => {
  let rect;
  const obj = { maskWrapper: rect, maskStroke: { backgroundColor: nativeDefault.colors.PANEL_BG }, actionButtonPressable: { padding: 8, zIndex: 100, borderRadius: 20 }, actionButtonIcon: { tintColor: nativeDefault.colors.ICON_SUBTLE } };
  rect = { position: "absolute", minWidth: native.BADGE_SIZE, height: native.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  ({ backgroundColor: nativeDefault.colors.PANEL_BG });
  ({ tintColor: nativeDefault.colors.ICON_SUBTLE });
  return obj;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export function PressableNavigatorBackIcon(navigation) {
  let badgeCutoutColor;
  let formatToPlainStringResult;
  let items3;
  let obj8;
  let ref;
  let tmp15;
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  ({ badgeCutoutColor, ref } = navigation);
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0, badgeCutoutColor: 0, ref: 0 }));
  let stateFromStores;
  const tmp2 = closure_10();
  let obj = navigation(stateFromStores[9]);
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const obj = totalMentionCount;
    totalMentionCount = totalMentionCount.getTotalMentionCount();
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      channel = channel.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
    }
  });
  let obj2 = react;
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    if (stateFromStores >= 10) {
      let obj;
      if (tmp < 100) {
        obj = { minWidth: native.BADGE_SIZE + 8 };
        const obj2 = { minWidth: native.BADGE_SIZE + 8 };
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  const obj3 = navigation(stateFromStores[10]);
  const token = obj3.useToken(badgeCutoutColor);
  const useGradientValue = navigation(stateFromStores[11]).useGradientValue;
  let backgroundColor = token;
  navigation(stateFromStores[11]);
  if (token == null) {
    backgroundColor = useGradientValue(navigation(stateFromStores[11]).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = obj2.useCallback(() => {
    if (null == onPress) {
      const obj = navigation;
      if (navigation != null) {
        obj.goBack();
      }
    } else {
      tmp();
    }
  }, items2);
  const obj4 = { ref, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: callback, style: tmp2.actionButtonPressable, children: tmp15(View, { children: items3 }) };
  const tmp12 = onPress(stateFromStores[12]);
  const PressableOpacity = tmp3(tmp4[13]).PressableOpacity;
  const merged1 = Object.assign(merged);
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[14]).intl;
    const obj5 = { mentionCount: stateFromStores };
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[14]).t.vxFYaM, obj5);
  } else {
    const intl = tmp3(tmp4[14]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[14]).t["13/7kX"]);
  }
  const obj6 = { source: onPress(stateFromStores[16]), style: { tintColor: tmp2.actionButtonIcon.tintColor } };
  const tmp11Result = onPress(stateFromStores[15]);
  items3 = [closure_8(tmp11Result, obj6), ];
  let tmp10Result = null;
  tmp15 = closure_9;
  if (stateFromStores > 0) {
    const obj7 = { style: tmp2.maskWrapper, children: closure_8(onPress(stateFromStores[17]), obj8) };
    obj8 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    tmp10Result = tmp10(tmp16, obj7);
  }
  items3[1] = tmp10Result;
  const obj9 = { children: closure_8(PressableOpacity, obj4) };
  return closure_8(tmp12, obj9);
}
