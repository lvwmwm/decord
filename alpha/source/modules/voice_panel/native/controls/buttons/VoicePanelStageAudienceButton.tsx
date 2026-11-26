// Module ID: 19583
// Function ID: 19584
// Name: VoicePanelStageAudienceButton
// Dependencies: [19, 1188, 21, 5043, 11781, 19564, 6809, 6861, 6855, 19565, 19584, 1112, 4375, 19573, 7055, 7155, 1186, 2]
// Exports: default

// Module 19583 (VoicePanelStageAudienceButton)
import NativeViewDefault from "NativeView" /* 7055 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11781 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19565 */;
import CircleWithCutoutDefault from "CircleWithCutout" /* 19573 */;
import openStageAudienceSheetDefault from "openStageAudienceSheet" /* 19584 */;
import react from "react" /* 19 */;
import BadgeConstants from "BadgeConstants" /* 1188 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let BADGE_PADDING;
let BADGE_SIZE;
let closure_4;
let hasOwnProperty;
({ BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = BADGE_SIZE / 2;
const metroRequire = result;
const cutoutRadius = result + BADGE_PADDING;
let closure_8 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: { position: "absolute", zIndex: 1, top: 0, right: 0 } });
const result1 = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStageAudienceButton.tsx");

export default function StageAudienceButton(props) {
  let formatToPlainStringResult;
  let items;
  let obj6;
  props = props.props;
  const wrapperSpecs = props.wrapperSpecs;
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = closure_8();
  const obj = channelId(19564);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const obj2 = channelId(6809);
  const canModerateRequestToSpeak = obj2.useCanModerateRequestToSpeak(channelId);
  const useStageParticipantsCount = channelId(6861).useStageParticipantsCount;
  let num = 0;
  channelId(6861);
  if (canModerateRequestToSpeak) {
    num = useStageParticipantsCount(channelId, channelId(6855).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  }
  const element = {
    onPress() {
      return openStageAudienceSheetDefault(channelId);
    },
    props,
    accessibilityLabel: formatToPlainStringResult,
    children: items
  };
  const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
  const intl = tmp4(1112).intl;
  const tmp9 = closure_5;
  if (num > 0) {
    const obj3 = { count: num };
    formatToPlainStringResult = intl.formatToPlainString(tmp(4375).IQmRBE, obj3);
  } else {
    formatToPlainStringResult = intl.string(tmp(4375).Ds8IST);
  }
  items = [, , ];
  const obj4 = { fill: voicePanelButtonStyles.iconBg.backgroundColor, circleRadius: props.width / 2, cutoutRadius, enableCutout: num > 0, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius, scaleToPixelDensity: true };
  items[0] = closure_4(CircleWithCutoutDefault, obj4);
  const obj5 = { style: tmp3.iconContainer, children: closure_4(channelId(7155).GroupIcon, obj6) };
  obj6 = { color: voicePanelButtonStyles.iconFill.color };
  const tmpResult3 = NativeViewDefault;
  items[1] = closure_4(tmpResult3, obj5);
  const obj7 = { style: tmp3.badge, pointerEvents: "none", children: closure_4(channelId(1186).Badge, { value: num, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" }) };
  const tmpResult4 = NativeViewDefault;
  items[2] = closure_4(tmpResult4, obj7);
  return tmp9(tmpResult, element);
};
