// Module ID: 15978
// Function ID: 123322
// Name: ChatButton
// Dependencies: [31, 33, 4165, 689, 10015, 15970, 15921, 15958, 15971, 1212, 15979, 5550, 4664, 2]
// Exports: default

// Module 15978 (ChatButton)
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
_createForOfIteratorHelperLoose.mentionBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
_createForOfIteratorHelperLoose.unreadBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  props = props.props;
  const openTab = props.openTab;
  const context = React.useContext(openTab(connected[4]));
  connected = context.connected;
  const tmp2 = _createForOfIteratorHelperLoose();
  React = tmp2;
  let obj = props(connected[5]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(props.wrapperSpecs);
  const tmp4 = openTab(connected[6])(context.channelId);
  let closure_5 = tmp4;
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  let items = [openTab, connected];
  const callback = React.useCallback(() => {
    const obj = { tab: "chat" };
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = props(connected[7]).VoicePanelTabAnalyticsSources;
    obj.source = value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON;
    openTab(obj);
  }, items);
  obj = { onPress: callback, props };
  const intl = props(connected[9]).intl;
  obj.accessibilityLabel = intl.string(props(connected[9]).t["5KxXrK"]);
  let items1 = [backgroundColor, props.width, tmp4, , , , , ];
  ({ iconContainer: arr2[3], badge: arr2[4], mentionBadge: arr2[5], unreadBadge: arr2[6] } = tmp2);
  items1[7] = voicePanelButtonStyles.iconFill.color;
  obj.children = React.useMemo(() => {
    let obj = {};
    obj = { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != closure_5, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
    const items = [voicePanelButtonStyles(openTab(connected[10]), obj), , ];
    obj = { style: tmp2.iconContainer, children: voicePanelButtonStyles(props(connected[12]).ChatIcon, { color: voicePanelButtonStyles.iconFill.color }) };
    items[1] = voicePanelButtonStyles(openTab(connected[11]), obj);
    if (null == closure_5) {
      items[2] = tmp4;
      obj.children = items;
      return backgroundColor(tmp2, obj);
    } else {
      const obj2 = {};
      const items1 = [tmp2.badge, ];
      if ("mention" === closure_5) {
        let unreadBadge = tmp2.mentionBadge;
      } else {
        unreadBadge = tmp2.unreadBadge;
      }
      items1[1] = unreadBadge;
      obj2.style = items1;
      voicePanelButtonStyles(openTab(connected[11]), obj2);
      const tmp5 = voicePanelButtonStyles;
      const tmp8 = openTab(connected[11]);
    }
  }, items1);
  return voicePanelButtonStyles(openTab(connected[8]), obj);
};
