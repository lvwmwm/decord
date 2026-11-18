// Module ID: 19422
// Function ID: 19423
// Name: VoicePanelStageAudienceButton
// Dependencies: [19, 1189, 21, 4823, 11709, 19403, 6440, 6451, 6445, 19404, 19423, 1113, 4251, 19412, 7235, 6949, 1187, 2]
// Exports: default

// Module 19422 (VoicePanelStageAudienceButton)
import NativeViewDefault from "NativeView" /* 7235 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11709 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19404 */;
import CircleWithCutoutDefault from "CircleWithCutout" /* 19412 */;
import openStageAudienceSheetDefault from "openStageAudienceSheet" /* 19423 */;
import react from "react" /* 19 */;
import BadgeConstants from "BadgeConstants" /* 1189 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
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
  const obj = channelId(19403);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const obj2 = channelId(6440);
  const canModerateRequestToSpeak = obj2.useCanModerateRequestToSpeak(channelId);
  const useStageParticipantsCount = channelId(6451).useStageParticipantsCount;
  let num = 0;
  channelId(6451);
  if (canModerateRequestToSpeak) {
    num = useStageParticipantsCount(channelId, channelId(6445).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
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
  const intl = tmp4(1113).intl;
  const tmp9 = closure_5;
  if (num > 0) {
    const obj3 = { count: num };
    formatToPlainStringResult = intl.formatToPlainString(tmp(4251).IQmRBE, obj3);
  } else {
    formatToPlainStringResult = intl.string(tmp(4251).Ds8IST);
  }
  items = [, , ];
  const obj4 = { fill: voicePanelButtonStyles.iconBg.backgroundColor, circleRadius: props.width / 2, cutoutRadius, enableCutout: num > 0, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius, scaleToPixelDensity: true };
  items[0] = closure_4(CircleWithCutoutDefault, obj4);
  const obj5 = { style: tmp3.iconContainer, children: closure_4(channelId(6949).GroupIcon, obj6) };
  obj6 = { color: voicePanelButtonStyles.iconFill.color };
  const tmpResult3 = NativeViewDefault;
  items[1] = closure_4(tmpResult3, obj5);
  const obj7 = { style: tmp3.badge, pointerEvents: "none", children: closure_4(channelId(1187).Badge, { value: num, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" }) };
  const tmpResult4 = NativeViewDefault;
  items[2] = closure_4(tmpResult4, obj7);
  return tmp9(tmpResult, element);
};
