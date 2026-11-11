// Module ID: 19703
// Function ID: 19704
// Name: VoicePanelPIPUtils
// Dependencies: [6953, 6757, 502, 11925, 19704, 5920, 11926, 6745, 11930, 5915, 575, 2]
// Exports: calculatePIPPositionFromVelocity, clampPIPScale, computePIPParticipantToShow, computePIPSize, createPIPBlockList, getClampedPIPPosition, getPIPMode, getPIPWindowDimensions, getScaledPIPContainerHeight, getVoicePanelPIPBorderRadius, pipXYtoAbsoluteXY

// Module 19703 (VoicePanelPIPUtils)
import nativeDefault from "native" /* 575 */;
import isActivityParticipantCurrentUserCurrentSession from "isActivityParticipantCurrentUserCurrentSession" /* 5915 */;
import CallConstants from "CallConstants" /* 5920 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6745 */;
import participantHasVideo from "participantHasVideo" /* 11930 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11925 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19704 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11926 */;
import size_mod from "module_2" /* 2 */;

let MIN_PIP_TOSS_VELOCITY;
let PIPReferenceDimensions;
let PIP_WINDOW_OFFSET;
let metroImportDefault;
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp19;
let tmp20;
let tmp21;
let tmp22;
let tmp23;
let tmp24;
let tmp25;
let tmp26;
let tmp27;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const SECONDARY_PIP_TOP_MARGIN = VoicePanelConstants.SECONDARY_PIP_TOP_MARGIN;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ VoicePanelPIPModes: metroImportDefault, PIPReferenceDimensions } = VoicePanelPIPConstants);
const SquarePIPReferenceDimensions = VoicePanelPIPConstants.SquarePIPReferenceDimensions;
const SquareActivityPIPReferenceDimensions = VoicePanelPIPConstants.SquareActivityPIPReferenceDimensions;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ MIN_PIP_TOSS_VELOCITY, PIP_WINDOW_OFFSET } = MorphablePanelConstants);
let set = new Set();
let items = [{ code: "(function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);})" }];
[tmp6] = items;
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, arg1), arg2);
}
clamp.__workletHash = 623753827248;
clamp.__initData = tmp6;
const items1 = [{ code: "(function getPIPWindowDimensions_VoicePanelPIPUtilsTsx2(windowDimensions,safeArea){let[PIP_WINDOW_OFFSET]=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};})" }, PIP_WINDOW_OFFSET];
[tmp7, tmp8] = items1;
function getPIPWindowDimensions(width, left) {
  let diff;
  let diff1;
  const bound = Math.max(left.left, c0);
  const bound1 = Math.max(left.top, c0);
  const obj = { xOffset: bound, yOffset: bound1, xRange: diff - Math.max(left.right, c0), yRange: diff1 - Math.max(left.bottom, c0) };
  diff = width.width - bound;
  diff1 = width.height - bound1;
  return obj;
}
const items2 = [tmp8];
getPIPWindowDimensions.__closure = items2;
getPIPWindowDimensions.__workletHash = 12962518417802;
getPIPWindowDimensions.__initData = tmp7;
const items3 = [{ code: "(function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx3({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){let[getPIPWindowDimensions]=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};})" }, getPIPWindowDimensions];
[tmp9, tmp10] = items3;
function pipXYtoAbsoluteXY(windowDimensions) {
  let pipX;
  let pipY;
  ({ pipX, pipY } = windowDimensions);
  const tmp = _undefined(windowDimensions.windowDimensions, windowDimensions.safeArea);
  const point = { x: tmp.xOffset + pipX * tmp.xRange, y: tmp.yOffset + pipY * tmp.yRange };
  return point;
}
const items4 = [tmp10];
pipXYtoAbsoluteXY.__closure = items4;
pipXYtoAbsoluteXY.__workletHash = 4693203505939;
pipXYtoAbsoluteXY.__initData = tmp9;
const items5 = [{ code: "(function getClampedPIPPosition_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0}){let[pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp]=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);return{x:x,y:y};})" }, pipXYtoAbsoluteXY, getPIPWindowDimensions, clamp];
[tmp11, tmp12, tmp13, tmp14] = items5;
function getClampedPIPPosition(topAvoidanceRegion) {
  let bottomAvoidanceRegion;
  let height;
  let num3;
  let pipX;
  let pipY;
  let safeArea;
  let sum;
  let width;
  let windowDimensions;
  ({ pipX, pipY, width, height, windowDimensions, safeArea, bottomAvoidanceRegion } = topAvoidanceRegion);
  if (bottomAvoidanceRegion === undefined) {
    bottomAvoidanceRegion = 0;
  }
  let num = topAvoidanceRegion.topAvoidanceRegion;
  if (num === undefined) {
    num = 0;
  }
  let num2 = 1;
  const tmp = c0;
  if (-1 !== pipX) {
    num2 = pipX;
  }
  const obj = { pipX: num2, pipY: num3, windowDimensions, safeArea };
  num3 = 0;
  if (-1 !== pipY) {
    num3 = pipY;
  }
  const point = tmp(obj);
  const y = point.y;
  const diff = point.x - width / 2;
  if (-1 === pipY) {
    sum = y + 72;
  } else {
    sum = y - height / 2;
  }
  const tmp5 = _undefined(windowDimensions, safeArea);
  const point1 = { x: _undefined2(diff, tmp5.xOffset, tmp5.xOffset + tmp5.xRange - width), y: _undefined2(sum, tmp5.yOffset + num, tmp5.yOffset + tmp5.yRange - bottomAvoidanceRegion - height) };
  return point1;
}
const items6 = [tmp12, tmp13, tmp14];
getClampedPIPPosition.__closure = items6;
getClampedPIPPosition.__workletHash = 7513917859296;
getClampedPIPPosition.__initData = tmp11;
const items7 = [{ code: "(function getScaledPIPContainerHeight_VoicePanelPIPUtilsTsx5({height:height,containerHeight:containerHeight,showSecondaryPIP:showSecondaryPIP,scale:scale}){let[SECONDARY_PIP_TOP_MARGIN]=this.__closure;if(!showSecondaryPIP){return height*scale;}return(containerHeight-SECONDARY_PIP_TOP_MARGIN)*scale+SECONDARY_PIP_TOP_MARGIN;})" }, SECONDARY_PIP_TOP_MARGIN];
[tmp15, tmp16] = items7;
function getScaledPIPContainerHeight(scale) {
  let sum;
  scale = scale.scale;
  if (scale.showSecondaryPIP) {
    sum = (tmp2 - c0) * scale + c0;
  } else {
    sum = tmp * scale;
  }
  return sum;
}
const items8 = [tmp16];
getScaledPIPContainerHeight.__closure = items8;
getScaledPIPContainerHeight.__workletHash = 2802177660733;
getScaledPIPContainerHeight.__initData = tmp15;
const items9 = [{ code: "(function clampPIPScale_VoicePanelPIPUtilsTsx6({scale:scale,width:width,containerHeight:containerHeight,showSecondaryPIP:showSecondaryPIP,windowDimensions:windowDimensions,safeArea:safeArea,pipAvoidanceSpecs:pipAvoidanceSpecs}){let[getPIPWindowDimensions,SECONDARY_PIP_TOP_MARGIN]=this.__closure;const{xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);const maxWidth=xRange;const maxHeight=yRange-pipAvoidanceSpecs.top-pipAvoidanceSpecs.bottom;const scalableHeight=showSecondaryPIP?containerHeight-SECONDARY_PIP_TOP_MARGIN:containerHeight;const scalableMaxHeight=showSecondaryPIP?maxHeight-SECONDARY_PIP_TOP_MARGIN:maxHeight;const maxScale=Math.min(maxWidth/width,scalableMaxHeight/scalableHeight);return Math.max(0.75,Math.min(scale,maxScale));})" }, getPIPWindowDimensions, SECONDARY_PIP_TOP_MARGIN];
[tmp17, tmp18, tmp19] = items9;
function clampPIPScale(windowDimensions) {
  let containerHeight;
  let pipAvoidanceSpecs;
  let scale;
  let showSecondaryPIP;
  let width;
  ({ containerHeight, showSecondaryPIP, pipAvoidanceSpecs } = windowDimensions);
  ({ scale, width } = windowDimensions);
  const tmp = _undefined(windowDimensions.windowDimensions, windowDimensions.safeArea);
  const diff = tmp.yRange - pipAvoidanceSpecs.top - pipAvoidanceSpecs.bottom;
  let diff1 = containerHeight;
  const xRange = tmp.xRange;
  if (showSecondaryPIP) {
    diff1 = containerHeight - c1;
  }
  let diff2 = diff;
  if (showSecondaryPIP) {
    diff2 = diff - c1;
  }
  return Math.max(0.75, Math.min(scale, Math.min(xRange / width, diff2 / diff1)));
}
const items10 = [tmp18, tmp19];
clampPIPScale.__closure = items10;
clampPIPScale.__workletHash = 711895361648;
clampPIPScale.__initData = tmp17;
const items11 = [{ code: "(function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx7({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){let[getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp]=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};})" }, getPIPWindowDimensions, MIN_PIP_TOSS_VELOCITY, clamp];
[tmp20, tmp21, tmp22, tmp23] = items11;
function calculatePIPPositionFromVelocity(windowDimensions) {
  let absoluteX;
  let absoluteY;
  let num5;
  let num6;
  let velocityX;
  let velocityY;
  let xRange;
  let yRange;
  ({ velocityX, velocityY } = windowDimensions);
  ({ absoluteX, absoluteY } = windowDimensions);
  const tmp2 = _undefined(windowDimensions.windowDimensions, windowDimensions.safeArea);
  ({ xRange, yRange } = tmp2);
  const diff = absoluteX - tmp2.xOffset;
  const diff1 = absoluteY - tmp2.yOffset;
  const absolute = Math.abs(velocityY);
  if (max(absolute, Math.abs(velocityX)) < c1) {
    const rect = { left: _undefined2(diff, 0, xRange), right: _undefined2(xRange - diff, 0, xRange), top: _undefined2(diff1, 0, yRange), bottom: _undefined2(yRange - diff1, 0, yRange) };
    const _Math = Math;
    const _Object = Object;
    const items = [];
    HermesBuiltin.arraySpread(items, Object.values(rect), 0);
    const _Math2 = Math;
    const applyResult = HermesBuiltin.apply(min, items, Math);
    let str2 = "left";
    if (rect.left !== applyResult) {
      let str3 = "top";
      if (rect.top !== applyResult) {
        let str4 = "bottom";
        if (rect.right === applyResult) {
          str4 = "right";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    if ("left" === str2) {
      num6 = diff1 / yRange;
      num5 = 0;
    } else if ("right" === str2) {
      num6 = diff1 / yRange;
      num5 = 1;
    } else if ("top" === str2) {
      num5 = diff / xRange;
      num6 = 0;
    } else {
      num6 = 0;
      num5 = 0;
      if ("bottom" === str2) {
        num5 = diff / xRange;
        num6 = 1;
      }
    }
  } else {
    const result = velocityY / velocityX;
    let num2 = 0;
    if (velocityX > 0) {
      num2 = xRange;
    }
    const sum = diff1 + result * (num2 - diff);
    if (sum >= 0) {
      if (sum <= yRange) {
        num5 = num2 / xRange;
        num6 = sum / yRange;
      }
    }
    let num4 = 0;
    const result1 = 1 / result;
    if (velocityY > 0) {
      num4 = yRange;
    }
    num5 = (diff + result1 * (num4 - diff1)) / xRange;
    num6 = num4 / yRange;
  }
  const obj = { pipX: _undefined2(num5, 0, 1), pipY: _undefined2(num6, 0, 1) };
  return obj;
}
const items12 = [tmp21, tmp22, tmp23];
calculatePIPPositionFromVelocity.__closure = items12;
calculatePIPPositionFromVelocity.__workletHash = 7286102854830;
calculatePIPPositionFromVelocity.__initData = tmp20;
const xl = nativeDefault.radii.xl;
const items13 = [{ code: "(function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx8(width,height){let[SquareActivityPIPReferenceDimensions,lg,xl]=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;})" }, SquareActivityPIPReferenceDimensions, nativeDefault.radii.lg, xl];
let c0;
let c1;
let c2;
[tmp24, tmp25, tmp26, tmp27] = items13;
function getVoicePanelPIPBorderRadius(width, height) {
  if (width <= _undefined.width) {
    let tmp3;
    if (height <= tmp.height) {
      tmp3 = c1;
    }
    return tmp3;
  }
  tmp3 = c2;
}
const items14 = [tmp25, tmp26, tmp27];
getVoicePanelPIPBorderRadius.__closure = items14;
getVoicePanelPIPBorderRadius.__workletHash = 5727386522170;
getVoicePanelPIPBorderRadius.__initData = tmp24;
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx");

export { PIPReferenceDimensions };
export { SquarePIPReferenceDimensions };
export { SquareActivityPIPReferenceDimensions };
export const PIP_LAYOUT_PHYSICS = { mass: 0.3, damping: 80, stiffness: 150 };
export function computePIPSize(SquarePIPReferenceDimensions, arg1, arg2, showSecondaryPIP) {
  let height;
  let height2;
  let sum;
  let width;
  let width2;
  ({ width, height } = SquarePIPReferenceDimensions);
  const tmp = arg1;
  if (!tmp) {
    if (width !== height) {
      if (width >= height) {
        let width3;
        if (arg2) {
          width3 = SquareActivityPIPReferenceDimensions.width;
        } else {
          width3 = PIPReferenceDimensions.width;
        }
        const _Math2 = Math;
        height2 = width3 * Math.max(0.5, SquarePIPReferenceDimensions.height / SquarePIPReferenceDimensions.width);
        width2 = width3;
      } else {
        if (arg2) {
          height2 = SquareActivityPIPReferenceDimensions.height;
        } else {
          height2 = PIPReferenceDimensions.height;
        }
        const _Math = Math;
        width2 = height2 * Math.max(0.5, SquarePIPReferenceDimensions.width / SquarePIPReferenceDimensions.height);
      }
    }
    size = { width: width2, height: height2, containerHeight: sum };
    sum = height2;
    if (showSecondaryPIP) {
      sum = 2 * height2 + SECONDARY_PIP_TOP_MARGIN;
    }
    return size;
  }
  ({ width: width2, height: height2 } = arg2 ? SquareActivityPIPReferenceDimensions : SquarePIPReferenceDimensions);
}
export function createPIPBlockList(PIP, focusedId) {
  set = new Set();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const add = set.add;
    const obj2 = StreamKeyUtils;
    add(obj2.encodeStreamKey(currentUserActiveStream));
  }
  const tmp5 = null != focusedId && PIP === VoicePanelModes.PANEL;
  if (tmp5) {
    set.add(focusedId);
  }
  return set;
}
export function computePIPParticipantToShow(canShowActivities) {
  let blockList;
  let channelId;
  let focusedParticipantId;
  let lastParticipantId;
  let panelMode;
  let participant;
  let speakingUserId;
  ({ channelId, panelMode, lastParticipantId, speakingUserId, focusedParticipantId, blockList } = canShowActivities);
  if (blockList === undefined) {
    blockList = set;
  }
  canShowActivities = canShowActivities.canShowActivities;
  const showSecondaryPIP = canShowActivities.showSecondaryPIP;
  const id = AuthenticationStore.getId();
  if (null != focusedParticipantId) {
    participant = ChannelRTCStore.getParticipant(channelId, focusedParticipantId);
  }
  const tmp4 = VoicePanelModes;
  if (panelMode === tmp4.PANEL) {
    if (null != focusedParticipantId) {
      let type1;
      if (participant != null) {
        type1 = participant.type;
      }
      if (type1 === ParticipantTypes.STREAM) {
        let userVideo;
        if (participant != null) {
          userVideo = participant.userVideo;
        }
        if (true === userVideo) {
          if (!blockList.has(participant.user.id)) {
            const participant1 = ChannelRTCStore.getParticipant(channelId, participant.user.id);
            if (null != participant1) {
              let obj = participantHasVideo;
              if (obj.canRenderParticipantVideo(participant1)) {
                return { id: participant1.id, type: tmp6.USER };
              }
            }
          }
        }
      }
    }
  }
  if (null != focusedParticipantId) {
    if (null != participant) {
      if (!blockList.has(focusedParticipantId)) {
        return { id: focusedParticipantId, type: participant.type };
      }
    }
  }
  if (canShowActivities) {
    let type2;
    if (participant != null) {
      type2 = participant.type;
    }
    if (type2 !== ParticipantTypes.ACTIVITY) {
      if (!showSecondaryPIP) {
        const activityParticipants = ChannelRTCStore.getActivityParticipants(channelId);
        for (const item10064 of activityParticipants) {
          let tmp19 = item10064;
          let participants = item10064.participants;
          if (participants.some((item) => {
            const obj = isActivityParticipantCurrentUserCurrentSession;
            return obj.isActivityParticipantCurrentUserCurrentSession(item);
          })) {
            if (!blockList.has(tmp19.id)) {
              let obj8 = { id: null, type: null };
              ({ id: obj5.id, type: obj5.type } = tmp19);
              obj4.return();
              return obj8;
            }
          }
          continue;
        }
      }
    }
  }
  const streamParticipants = ChannelRTCStore.getStreamParticipants(channelId);
  for (const item10087 of streamParticipants) {
    let tmp24 = item10087;
    if (!blockList.has(item10087.id)) {
      if (null != ApplicationStreamingStore.getActiveStreamForUser(tmp24.user.id, tmp24.stream.guildId)) {
        let obj14 = { id: null, type: null };
        ({ id: obj7.id, type: obj7.type } = tmp24);
        obj6.return();
        return obj14;
      }
    }
    continue;
  }
  if (null != speakingUserId) {
    if (!blockList.has(speakingUserId)) {
      if (null != ChannelRTCStore.getParticipant(channelId, speakingUserId)) {
        return { id: speakingUserId, type: ParticipantTypes.USER };
      }
    }
  }
  let participant2;
  if (null != lastParticipantId) {
    participant2 = ChannelRTCStore.getParticipant(channelId, lastParticipantId);
  }
  if (null != participant2) {
    if (!blockList.has(participant2.id)) {
      const type = participant2.type;
      if (ParticipantTypes.STREAM === type) {
        if (null != ApplicationStreamingStore.getActiveStreamForUser(participant2.user.id, participant2.stream.guildId)) {
          const obj10 = participantHasVideo;
          if (obj10.canRenderParticipantVideo(participant2)) {
            const obj30 = { id: null, type: null };
            ({ id: obj11.id, type: obj11.type } = participant2);
            return obj30;
          }
        }
      } else if (ParticipantTypes.ACTIVITY === type) {
        if (canShowActivities) {
          const participants2 = participant2.participants;
          if (participants2.some((item) => {
            const obj = isActivityParticipantCurrentUserCurrentSession;
            return obj.isActivityParticipantCurrentUserCurrentSession(item);
          })) {
            const obj31 = { id: null, type: null };
            ({ id: obj9.id, type: obj9.type } = participant2);
            return obj31;
          }
        }
      } else if (ParticipantTypes.USER === type) {
        const obj32 = { id: null, type: null };
        ({ id: obj19.id, type: obj19.type } = participant2);
        return obj32;
      }
    }
  }
  const participant3 = ChannelRTCStore.getParticipant(channelId, id);
  const obj12 = ChannelRTCStore;
  if (!blockList.has(id)) {
    if (null != participant3) {
      const obj13 = participantHasVideo;
      if (obj13.canRenderParticipantVideo(participant3)) {
        return { id, type: ParticipantTypes.USER };
      }
    }
  }
  const videoParticipants = obj12.getVideoParticipants(channelId);
  for (const item10166 of videoParticipants) {
    let tmp42 = item10166;
    if (!blockList.has(item10166.id)) {
      let obj16 = participantHasVideo;
      if (obj16.canRenderParticipantVideo(tmp42)) {
        let obj34 = { id: null, type: null };
        ({ id: obj17.id, type: obj17.type } = tmp42);
        obj15.return();
        return obj34;
      }
    }
    continue;
  }
  let tmp48;
  if (!blockList.has(id)) {
    if (null != participant3) {
      if (panelMode !== VoicePanelModes.PANEL) {
        tmp48 = { id, type: ParticipantTypes.USER };
        const obj35 = { id, type: ParticipantTypes.USER };
      } else {
        let type3;
        if (participant != null) {
          type3 = participant.type;
        }
      }
    }
  }
  return tmp48;
}
export function getPIPMode(connected) {
  let channelId;
  let manuallyFocusedId;
  let mode;
  ({ channelId, manuallyFocusedId, mode } = connected);
  if (connected.connected) {
    let participant;
    if (null != manuallyFocusedId) {
      participant = ChannelRTCStore.getParticipant(channelId, manuallyFocusedId);
    }
    if (mode === VoicePanelModes.PANEL) {
      if (null != participant) {
        if (participant.type === ParticipantTypes.ACTIVITY) {
          return metroImportDefault.IN_PANEL;
        } else {
          if (participant.type === tmp28.STREAM) {
            if (participant.userVideo) {
              const canRenderParticipantVideo = participantHasVideo.canRenderParticipantVideo;
              participantHasVideo;
              const participant1 = ChannelRTCStore.getParticipant(channelId, participant.user.id);
              if (canRenderParticipantVideo(participant1)) {
                return metroImportDefault.IN_PANEL;
              }
            }
          }
          if (tmp) {
            if (participant.id !== AuthenticationStore.getId()) {
              return metroImportDefault.IN_PANEL;
            } else {
              const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
              for (const item10032 of videoParticipants) {
                let tmp13 = item10032;
                if (item10032.id !== AuthenticationStore.getId()) {
                  let obj = participantHasVideo;
                  if (obj.canRenderParticipantVideo(tmp13)) {
                    let IN_PANEL = metroImportDefault.IN_PANEL;
                    obj2.return();
                    return IN_PANEL;
                  }
                }
                continue;
              }
              if (participant.id !== AuthenticationStore.getId()) {
                return metroImportDefault.IN_PANEL;
              }
            }
          }
        }
      }
    }
    let IN_APP;
    if (mode === VoicePanelModes.PIP) {
      IN_APP = metroImportDefault.IN_APP;
    }
    return IN_APP;
  }
}
export { getPIPWindowDimensions };
export { pipXYtoAbsoluteXY };
export { getClampedPIPPosition };
export { getScaledPIPContainerHeight };
export { clampPIPScale };
export { calculatePIPPositionFromVelocity };
export { getVoicePanelPIPBorderRadius };
