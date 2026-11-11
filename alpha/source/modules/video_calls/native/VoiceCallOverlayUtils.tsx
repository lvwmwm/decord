// Module ID: 12648
// Function ID: 12649
// Name: VoiceCallOverlayUtils
// Dependencies: [10941, 572, 2]
// Exports: doesTargetPositionIntersectOtherOverlaysWorklet, setPipEnabledWhileFocusedOnActivityOrStream, updateVoiceCallOverlayLayoutState

// Module 12648 (VoiceCallOverlayUtils)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10941 */;
import size from "module_2" /* 2 */;

let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
const items = [{ code: "(function doRectanglesIntersectWorklet_VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);})" }];
[tmp3] = items;
function doRectanglesIntersectWorklet(arg0, arg1, arg2) {
  if (null != arg0) {
    if (null != arg0.x) {
      if (null != arg0.y) {
        if (null != arg0.width) {
          if (null != arg0.height) {
            if (null != arg1) {
              if (null != arg1.x) {
                if (null != arg1.y) {
                  if (null != arg1.width) {
                    if (null != arg1.height) {
                      let tmp = arg0.x + arg0.width + arg2 < arg1.x;
                      const diff = arg0.y - arg2;
                      const sum = arg0.y + arg0.height + arg2;
                      const y = arg1.y;
                      const sum1 = arg1.y + arg1.height;
                      if (!tmp) {
                        tmp = arg0.x - arg2 > arg1.x + arg1.width;
                      }
                      if (!tmp) {
                        tmp = sum < y;
                      }
                      if (!tmp) {
                        tmp = diff > sum1;
                      }
                      return !tmp;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
doRectanglesIntersectWorklet.__workletHash = 17500774499337;
doRectanglesIntersectWorklet.__initData = tmp3;
const items1 = [{ code: "(function doesTargetPositionIntersectOtherOverlaysWorklet_VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){let[VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS]=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;})" }, ChannelCallConstants.VoiceCallOverlayType, doRectanglesIntersectWorklet, ChannelCallConstants.MIN_MARGIN_BETWEEN_OVERLAYS];
let c0;
let c1;
let c2;
[tmp4, tmp5, tmp6, tmp7] = items1;
function doesTargetPositionIntersectOtherOverlaysWorklet(arg0, arg1, arg2) {
  if (_undefined.VOICE_CONTROLS_TOGGLE_BUTTON === arg1) {
    if (arg0[_undefined.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible) {
      if (_undefined2(arg2, arg0[_undefined.CAMERA_PREVIEW_PICTURE_IN_PICTURE], c2)) {
        return true;
      }
    } else {
      return false;
    }
  } else if (_undefined.CAMERA_PREVIEW_PICTURE_IN_PICTURE === arg1) {
    if (arg0[_undefined.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible) {
      if (_undefined2(arg2, arg0[_undefined.VOICE_CONTROLS_TOGGLE_BUTTON], c2)) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
}
const items2 = [tmp5, tmp6, tmp7];
doesTargetPositionIntersectOtherOverlaysWorklet.__closure = items2;
doesTargetPositionIntersectOtherOverlaysWorklet.__workletHash = 4966817153639;
doesTargetPositionIntersectOtherOverlaysWorklet.__initData = tmp4;
const result = size.fileFinishedImporting("modules/video_calls/native/VoiceCallOverlayUtils.tsx");

export { doesTargetPositionIntersectOtherOverlaysWorklet };
export function updateVoiceCallOverlayLayoutState(voiceCallOverlayType, voiceCallOverlayLayoutState) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE", voiceCallOverlayType, voiceCallOverlayLayoutState };
  obj.dispatch(obj2);
}
export function setPipEnabledWhileFocusedOnActivityOrStream(pipEnabledWhileFocusedOnActivityOrStream) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM", pipEnabledWhileFocusedOnActivityOrStream };
  obj.dispatch(obj2);
}
