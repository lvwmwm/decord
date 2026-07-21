// Module ID: 15744
// Function ID: 120412
// Name: ChatButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 31]
// Exports: default

// Module 15744 (ChatButton)
import closure_3 from "result";
import result from "result";
import result from "result";
import module_31 from "module_31";

({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = result);
result = { iconContainer: { <string:1446693987>: null, <string:1666068817>: "no-hide-descendants", <string:1370110668>: true, <string:1549880881>: "/assets/.cache/intl/ZGVzaWdu", <string:1638698833>: null } };
result = { borderRadius: require("result").radii.round };
result.badge = result;
result.redBG = { backgroundColor: require("result").unsafe_rawColors.RED_400 };
result = result.createStyles(result);
result = module_31.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  props = props.props;
  const arg1 = props;
  const openTab = props.openTab;
  const importDefault = openTab;
  const context = React.useContext(importDefault(dependencyMap[4]));
  const connected = context.connected;
  const dependencyMap = connected;
  const tmp2 = result();
  const React = tmp2;
  let obj = arg1(dependencyMap[5]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(props.wrapperSpecs);
  const tmp4 = importDefault(dependencyMap[6])(context.channelId);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const items = [tmp4, tmp2.redBG, voicePanelButtonStyles.iconBadgeIndicator];
  const memo = React.useMemo(() => {
    if ("mention" === tmp4) {
      let iconBadgeIndicator = tmp2.redBG;
    } else {
      iconBadgeIndicator = voicePanelButtonStyles.iconBadgeIndicator;
    }
    return iconBadgeIndicator;
  }, items);
  const result = memo;
  const items1 = [openTab, connected];
  const callback = React.useCallback(() => {
    const obj = { tab: "chat" };
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = props(connected[7]).VoicePanelTabAnalyticsSources;
    obj.source = value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON;
    openTab(obj);
  }, items1);
  obj = { onPress: callback, props };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.5KxXrK);
  const items2 = [backgroundColor, props.width, tmp4, , , , ];
  ({ iconContainer: arr3[3], badge: arr3[4] } = tmp2);
  items2[5] = voicePanelButtonStyles.iconFill.color;
  items2[6] = memo;
  obj.children = React.useMemo(() => {
    let obj = {};
    obj = { fill: backgroundColor, circleRadius: props.width / 2, enableCutout: null != tmp4 };
    const items = [voicePanelButtonStyles(openTab(connected[10]), obj), , ];
    obj = { style: tmp2.iconContainer, children: voicePanelButtonStyles(props(connected[12]).ChatIcon, { color: voicePanelButtonStyles.iconFill.color }) };
    items[1] = voicePanelButtonStyles(openTab(connected[11]), obj);
    let tmp4 = null != tmp4;
    if (tmp4) {
      const obj2 = {};
      const items1 = [tmp2.badge, memo];
      obj2.style = items1;
      tmp4 = voicePanelButtonStyles(openTab(connected[11]), obj2);
    }
    items[2] = tmp4;
    obj.children = items;
    return backgroundColor(tmp4, obj);
  }, items2);
  return voicePanelButtonStyles(importDefault(dependencyMap[8]), obj);
};
