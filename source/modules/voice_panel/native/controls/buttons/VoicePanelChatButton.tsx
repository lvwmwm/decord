// Module ID: 15869
// Function ID: 122628
// Name: ChatButton
// Dependencies: [31, 33, 4130, 689, 10014, 15861, 15812, 15849, 15862, 1212, 15870, 5517, 4629, 2]
// Exports: default

// Module 15869 (ChatButton)
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } };
_createForOfIteratorHelperLoose = { position: "absolute", zIndex: 1, width: 10, height: 10, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, top: 0, right: 0 };
_createForOfIteratorHelperLoose.badge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.redBG = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  props = props.props;
  const openTab = props.openTab;
  const context = React.useContext(openTab(connected[4]));
  connected = context.connected;
  const tmp2 = memo();
  React = tmp2;
  let obj = props(connected[5]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(props.wrapperSpecs);
  let tmp4 = openTab(connected[6])(context.channelId);
  let closure_5 = tmp4;
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  let items = [tmp4, tmp2.redBG, voicePanelButtonStyles.iconBadgeIndicator];
  memo = React.useMemo(() => {
    if ("mention" === closure_5) {
      let iconBadgeIndicator = tmp2.redBG;
    } else {
      iconBadgeIndicator = voicePanelButtonStyles.iconBadgeIndicator;
    }
    return iconBadgeIndicator;
  }, items);
  let items1 = [openTab, connected];
  const callback = React.useCallback(() => {
    const obj = { tab: "chat" };
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = props(connected[7]).VoicePanelTabAnalyticsSources;
    obj.source = value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON;
    openTab(obj);
  }, items1);
  obj = { onPress: callback, props };
  const intl = props(connected[9]).intl;
  obj.accessibilityLabel = intl.string(props(connected[9]).t["5KxXrK"]);
  const items2 = [backgroundColor, props.width, tmp4, , , , ];
  ({ iconContainer: arr3[3], badge: arr3[4] } = tmp2);
  items2[5] = voicePanelButtonStyles.iconFill.color;
  items2[6] = memo;
  obj.children = React.useMemo(() => {
    let obj = {};
    obj = { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != closure_5, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
    const items = [voicePanelButtonStyles(openTab(connected[10]), obj), , ];
    obj = { style: tmp2.iconContainer, children: voicePanelButtonStyles(props(connected[12]).ChatIcon, { color: voicePanelButtonStyles.iconFill.color }) };
    items[1] = voicePanelButtonStyles(openTab(connected[11]), obj);
    let tmp4 = null != closure_5;
    if (tmp4) {
      const obj2 = {};
      const items1 = [tmp2.badge, memo];
      obj2.style = items1;
      tmp4 = voicePanelButtonStyles(openTab(connected[11]), obj2);
    }
    items[2] = tmp4;
    obj.children = items;
    return backgroundColor(closure_5, obj);
  }, items2);
  return voicePanelButtonStyles(openTab(connected[8]), obj);
};
