// Module ID: 10538
// Function ID: 82341
// Name: doRectanglesIntersectWorklet
// Dependencies: []
// Exports: setPipEnabledWhileFocusedOnActivityOrStream, updateVoiceCallOverlayLayoutState

// Module 10538 (doRectanglesIntersectWorklet)
const _module = require(dependencyMap[0]);
({ MIN_MARGIN_BETWEEN_OVERLAYS: closure_2, VoiceCallOverlayType: closure_3 } = _module);
let closure_4 = { code: "function doRectanglesIntersectWorklet_VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);}" };
let closure_5 = () => {
  function doRectanglesIntersectWorklet(arg0, arg1) {
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
                        const sum1 = arg1.y + arg1.height;
                        if (!tmp) {
                          tmp = arg0.x - arg2 > arg1.x + arg1.width;
                        }
                        if (!tmp) {
                          tmp = sum < arg1.y;
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
  doRectanglesIntersectWorklet.__closure = {};
  doRectanglesIntersectWorklet.__workletHash = 697248006216;
  doRectanglesIntersectWorklet.__initData = closure_4;
  return doRectanglesIntersectWorklet;
}();
let closure_6 = { code: "function doesTargetPositionIntersectOtherOverlaysWorklet_VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){const{VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS}=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;}" };
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/video_calls/native/VoiceCallOverlayUtils.tsx");

export const doesTargetPositionIntersectOtherOverlaysWorklet = () => {
  function doesTargetPositionIntersectOtherOverlaysWorklet(arg0, arg1, arg2) {
    if (constants.VOICE_CONTROLS_TOGGLE_BUTTON === arg1) {
      if (arg0[closure_3.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible) {
        if (callback(arg2, arg0[closure_3.CAMERA_PREVIEW_PICTURE_IN_PICTURE], closure_2)) {
          return true;
        }
      } else {
        return false;
      }
    } else if (constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE === arg1) {
      if (arg0[closure_3.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible) {
        if (callback(arg2, arg0[closure_3.VOICE_CONTROLS_TOGGLE_BUTTON], closure_2)) {
          return true;
        }
      } else {
        return false;
      }
    }
    return false;
  }
  doesTargetPositionIntersectOtherOverlaysWorklet.__closure = { VoiceCallOverlayType: closure_3, doRectanglesIntersectWorklet: closure_5, MIN_MARGIN_BETWEEN_OVERLAYS: closure_2 };
  doesTargetPositionIntersectOtherOverlaysWorklet.__workletHash = 4190950618494;
  doesTargetPositionIntersectOtherOverlaysWorklet.__initData = closure_6;
  return doesTargetPositionIntersectOtherOverlaysWorklet;
}();
export const updateVoiceCallOverlayLayoutState = function updateVoiceCallOverlayLayoutState(voiceCallOverlayType, voiceCallOverlayLayoutState) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE", voiceCallOverlayType, voiceCallOverlayLayoutState };
  obj.dispatch(obj);
};
export const setPipEnabledWhileFocusedOnActivityOrStream = function setPipEnabledWhileFocusedOnActivityOrStream(pipEnabledWhileFocusedOnActivityOrStream) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM", pipEnabledWhileFocusedOnActivityOrStream };
  obj.dispatch(obj);
};
