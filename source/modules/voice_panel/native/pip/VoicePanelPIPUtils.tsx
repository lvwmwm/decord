// Module ID: 15641
// Function ID: 119440
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: computePIPParticipantToShow, computePIPSize, getPIPMode

// Module 15641 (_createForOfIteratorHelperLoose)
let PIPReferenceDimensions;
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ SECONDARY_PIP_TOP_MARGIN: closure_5, VoicePanelModes: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[4]);
({ VoicePanelPIPModes: closure_7, PIPReferenceDimensions } = tmp3);
const SquarePIPReferenceDimensions = tmp3.SquarePIPReferenceDimensions;
const SquareActivityPIPReferenceDimensions = tmp3.SquareActivityPIPReferenceDimensions;
const ParticipantTypes = arg1(dependencyMap[5]).ParticipantTypes;
const tmp2 = arg1(dependencyMap[3]);
({ MIN_PIP_TOSS_VELOCITY: closure_12, PIP_WINDOW_OFFSET: closure_13 } = arg1(dependencyMap[6]));
const set = new Set();
let closure_15 = { code: "function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}" };
let closure_16 = () => {
  function clamp(arg0, arg1, arg2) {
    return Math.min(Math.max(arg0, arg1), arg2);
  }
  clamp.__closure = {};
  clamp.__workletHash = 10301627783217;
  clamp.__initData = closure_15;
  return clamp;
}();
let closure_17 = { code: "function getPIPWindowDimensions_VoicePanelPIPUtilsTsx2(windowDimensions,safeArea){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}" };
const tmp6 = () => {
  function getPIPWindowDimensions(width, left) {
    const bound = Math.max(left.left, closure_13);
    const bound1 = Math.max(left.top, closure_13);
    const diff = width.width - bound;
    const diff1 = width.height - bound1;
    return { xOffset: bound, yOffset: bound1, xRange: diff - Math.max(left.right, closure_13), yRange: diff1 - Math.max(left.bottom, closure_13) };
  }
  getPIPWindowDimensions.__closure = { PIP_WINDOW_OFFSET: closure_13 };
  getPIPWindowDimensions.__workletHash = 10369369214675;
  getPIPWindowDimensions.__initData = closure_17;
  return getPIPWindowDimensions;
}();
let closure_19 = { code: "function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx3({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}" };
const tmp7 = () => {
  function pipXYtoAbsoluteXY(windowDimensions) {
    let pipX;
    let pipY;
    ({ pipX, pipY } = windowDimensions);
    const tmp = callback(windowDimensions.windowDimensions, windowDimensions.safeArea);
    return { x: tmp.xOffset + pipX * tmp.xRange, y: tmp.yOffset + pipY * tmp.yRange };
  }
  pipXYtoAbsoluteXY.__closure = { getPIPWindowDimensions: tmp6 };
  pipXYtoAbsoluteXY.__workletHash = 13405407399530;
  pipXYtoAbsoluteXY.__initData = closure_19;
  return pipXYtoAbsoluteXY;
}();
let closure_21 = { code: "function getClampedPIPPosition_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0}}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}" };
let closure_22 = { code: "function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx5({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}" };
const tmp4 = arg1(dependencyMap[6]);
const tmp8 = () => {
  function getClampedPIPPosition(topAvoidanceRegion) {
    let bottomAvoidanceRegion;
    let height;
    let pipX;
    let pipY;
    let safeArea;
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
    let point = topAvoidanceRegion.positionOffset;
    if (point === undefined) {
      point = { max: -536870861, guildId: -299892737 };
    }
    let obj = {};
    let num2 = 1;
    if (-1 !== pipX) {
      num2 = pipX;
    }
    obj.pipX = num2;
    let num3 = 0;
    if (-1 !== pipY) {
      num3 = pipY;
    }
    obj.pipY = num3;
    obj.windowDimensions = windowDimensions;
    obj.safeArea = safeArea;
    const point2 = closure_20(obj);
    const y = point2.y;
    const diff = point2.x - width / 2;
    if (-1 === pipY) {
      let sum = y + 72;
    } else {
      sum = y - height / 2;
    }
    const tmp5 = callback2(windowDimensions, safeArea);
    obj = { x: callback(diff, tmp5.xOffset, tmp5.xOffset + tmp5.xRange - width) + point.x, y: callback(sum, tmp5.yOffset + num, tmp5.yOffset + tmp5.yRange - bottomAvoidanceRegion - height) + point.y };
    return obj;
  }
  getClampedPIPPosition.__closure = { pipXYtoAbsoluteXY: tmp7, getPIPWindowDimensions: tmp6, clamp: closure_16 };
  getClampedPIPPosition.__workletHash = 10462021389431;
  getClampedPIPPosition.__initData = closure_21;
  return getClampedPIPPosition;
}();
const xl = importDefault(dependencyMap[9]).radii.xl;
const lg = importDefault(dependencyMap[9]).radii.lg;
let closure_25 = { code: "function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx6(width,height){const{SquareActivityPIPReferenceDimensions,lg,xl}=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;}" };
const tmp9 = () => {
  function calculatePIPPositionFromVelocity(windowDimensions) {
    let absoluteX;
    let absoluteY;
    let velocityX;
    let velocityY;
    let xRange;
    let yRange;
    ({ velocityX, velocityY } = windowDimensions);
    ({ absoluteX, absoluteY } = windowDimensions);
    const tmp = callback2(windowDimensions.windowDimensions, windowDimensions.safeArea);
    ({ xRange, yRange } = tmp);
    const diff = absoluteX - tmp.xOffset;
    const diff1 = absoluteY - tmp.yOffset;
    const absolute = Math.abs(velocityY);
    if (Math.max(absolute, Math.abs(velocityX)) < closure_12) {
      const rect = { left: callback(diff, 0, xRange), right: callback(xRange - diff, 0, xRange), top: callback(diff1, 0, yRange), bottom: callback(yRange - diff1, 0, yRange) };
      const _Math = Math;
      const _Object = Object;
      const items = [];
      HermesBuiltin.arraySpread(Object.values(rect), 0);
      const _Math2 = Math;
      const applyResult = HermesBuiltin.apply(items, Math);
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
        let num6 = diff1 / yRange;
        let num5 = 0;
      } else if ("right" === str2) {
        num6 = diff1 / yRange;
        num5 = 1;
      } else if ("top" === str2) {
        num5 = diff / xRange;
        num6 = 0;
      } else {
        num5 = 0;
        num6 = 0;
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
    const obj = { pipX: callback(num5, 0, 1), pipY: callback(num6, 0, 1) };
    return obj;
  }
  calculatePIPPositionFromVelocity.__closure = { getPIPWindowDimensions: tmp6, MIN_PIP_TOSS_VELOCITY: closure_12, clamp: closure_16 };
  calculatePIPPositionFromVelocity.__workletHash = 14615762848981;
  calculatePIPPositionFromVelocity.__initData = closure_22;
  return calculatePIPPositionFromVelocity;
}();
const tmp10 = () => {
  function getVoicePanelPIPBorderRadius(width, height) {
    if (width <= styles.width) {
      if (height <= styles.height) {
        let tmp3 = closure_24;
      }
      return tmp3;
    }
    tmp3 = closure_23;
  }
  getVoicePanelPIPBorderRadius.__closure = { SquareActivityPIPReferenceDimensions, lg, xl };
  getVoicePanelPIPBorderRadius.__workletHash = 16698745361037;
  getVoicePanelPIPBorderRadius.__initData = closure_25;
  return getVoicePanelPIPBorderRadius;
}();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx");

export { PIPReferenceDimensions };
export { SquarePIPReferenceDimensions };
export { SquareActivityPIPReferenceDimensions };
export const computePIPSize = function computePIPSize(SquarePIPReferenceDimensions, arg1, arg2, showSecondaryPIP) {
  let height;
  let height3;
  let width;
  let width3;
  ({ width, height } = SquarePIPReferenceDimensions);
  if (!arg1) {
    if (width !== height) {
      if (width >= height) {
        if (arg2) {
          let width2 = SquareActivityPIPReferenceDimensions.width;
        } else {
          width2 = PIPReferenceDimensions.width;
        }
        const _Math2 = Math;
        let height2 = width2 * Math.max(0.5, SquarePIPReferenceDimensions.height / SquarePIPReferenceDimensions.width);
        let result = width2;
      } else {
        if (arg2) {
          height2 = SquareActivityPIPReferenceDimensions.height;
        } else {
          height2 = PIPReferenceDimensions.height;
        }
        const _Math = Math;
        result = height2 * Math.max(0.5, SquarePIPReferenceDimensions.width / SquarePIPReferenceDimensions.height);
      }
      const obj = { width: result, height: height2 };
      let sum = height2;
      if (showSecondaryPIP) {
        sum = 2 * height2 + closure_5;
      }
      obj.containerHeight = sum;
      return obj;
    }
  }
  ({ width: width3, height: height3 } = arg2 ? SquareActivityPIPReferenceDimensions : SquarePIPReferenceDimensions);
};
export const computePIPParticipantToShow = function computePIPParticipantToShow(showSecondaryPIP) {
  let blockList;
  let channelId;
  let focusedParticipantId;
  let lastParticipantId;
  let panelMode;
  let speakingUserId;
  let value;
  ({ channelId, panelMode, lastParticipantId, speakingUserId, focusedParticipantId, blockList } = showSecondaryPIP);
  if (blockList === undefined) {
    blockList = set;
  }
  const id = store2.getId();
  let participant;
  if (null != focusedParticipantId) {
    participant = store.getParticipant(channelId, focusedParticipantId);
  }
  if (panelMode === constants.PANEL) {
    if (null != focusedParticipantId) {
      let type;
      if (null != participant) {
        type = participant.type;
      }
      if (type === ParticipantTypes.STREAM) {
        let userVideo;
        if (null != participant) {
          userVideo = participant.userVideo;
        }
        if (true === userVideo) {
          if (!blockList.has(participant.user.id)) {
            const participant1 = store.getParticipant(channelId, participant.user.id);
            if (null != participant1) {
              let obj = arg1(dependencyMap[7]);
              if (obj.canRenderParticipantVideo(participant1)) {
                obj = { id: participant1.id, type: ParticipantTypes.USER };
                return obj;
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
        obj = { id: focusedParticipantId, type: participant.type };
        return obj;
      }
    }
  }
  let type1;
  if (null != participant) {
    type1 = participant.type;
  }
  if (type1 !== ParticipantTypes.ACTIVITY) {
    if (!showSecondaryPIP.showSecondaryPIP) {
      const tmp15 = _createForOfIteratorHelperLoose(store.getActivityParticipants(channelId));
      let iter = tmp15();
      if (!iter.done) {
        while (true) {
          value = iter.value;
          let participants = value.participants;
          if (participants.some((userId) => callback(closure_1[8]).isActivityParticipantCurrentUserCurrentSession(userId))) {
            if (!blockList.has(value.id)) {
              break;
            }
          }
          let iter2 = tmp15();
          iter = iter2;
        }
        ({ id: obj4.id, type: obj4.type } = value);
        return {};
      }
    }
  }
  const tmp16 = _createForOfIteratorHelperLoose(store.getStreamParticipants(channelId));
  let iter3 = tmp16();
  if (!iter3.done) {
    while (true) {
      value = iter3.value;
      if (!blockList.has(value.id)) {
        let tmp17 = authStore;
        if (null != authStore.getActiveStreamForUser(value.user.id, value.stream.guildId)) {
          break;
        }
      }
      let iter4 = tmp16();
      iter3 = iter4;
    }
    ({ id: obj5.id, type: obj5.type } = value);
    return {};
  }
  if (null != speakingUserId) {
    if (!blockList.has(speakingUserId)) {
      if (null != store.getParticipant(channelId, speakingUserId)) {
        const obj3 = { id: speakingUserId, type: ParticipantTypes.USER };
        return obj3;
      }
    }
  }
  let participant2;
  if (null != lastParticipantId) {
    participant2 = store.getParticipant(channelId, lastParticipantId);
  }
  if (null != participant2) {
    if (!blockList.has(participant2.id)) {
      type = participant2.type;
      if (ParticipantTypes.STREAM === type) {
        if (null != authStore.getActiveStreamForUser(participant2.user.id, participant2.stream.guildId)) {
          let obj7 = arg1(dependencyMap[7]);
          if (obj7.canRenderParticipantVideo(participant2)) {
            const obj4 = {};
            ({ id: obj9.id, type: obj9.type } = participant2);
            return obj4;
          }
        }
      } else if (ParticipantTypes.ACTIVITY === type) {
        const participants2 = participant2.participants;
        if (participants2.some((userId) => callback(closure_1[8]).isActivityParticipantCurrentUserCurrentSession(userId))) {
          const obj5 = {};
          ({ id: obj7.id, type: obj7.type } = participant2);
          return obj5;
        }
      } else if (ParticipantTypes.USER === type) {
        ({ id: obj15.id, type: obj15.type } = participant2);
        return {};
      }
    }
  }
  const participant3 = store.getParticipant(channelId, id);
  if (!blockList.has(id)) {
    if (null != participant3) {
      let obj9 = arg1(dependencyMap[7]);
      if (obj9.canRenderParticipantVideo(participant3)) {
        obj7 = { id, type: ParticipantTypes.USER };
        return obj7;
      }
    }
  }
  const tmp32 = _createForOfIteratorHelperLoose(store.getVideoParticipants(channelId));
  let iter5 = tmp32();
  if (!iter5.done) {
    while (true) {
      value = iter5.value;
      if (!blockList.has(value.id)) {
        let tmp33 = arg1;
        let tmp34 = dependencyMap;
        let obj12 = arg1(dependencyMap[7]);
        if (obj12.canRenderParticipantVideo(value)) {
          break;
        }
      }
      let iter6 = tmp32();
      iter5 = iter6;
    }
    ({ id: obj13.id, type: obj13.type } = value);
    return {};
  }
  let tmp35;
  if (!blockList.has(id)) {
    if (null != participant3) {
      if (panelMode !== constants.PANEL) {
        obj9 = { id, type: ParticipantTypes.USER };
        tmp35 = obj9;
      } else {
        let type2;
        if (null != participant) {
          type2 = participant.type;
        }
      }
    }
  }
  return tmp35;
};
export const getPIPMode = function getPIPMode(connected) {
  let channelId;
  let manuallyFocusedId;
  let mode;
  ({ channelId, manuallyFocusedId, mode } = connected);
  if (connected.connected) {
    if (null != manuallyFocusedId) {
      const participant = store.getParticipant(channelId, manuallyFocusedId);
    }
    if (mode === constants.PANEL) {
      if (null != participant) {
        if (participant.type === ParticipantTypes.ACTIVITY) {
          return constants2.IN_PANEL;
        } else {
          if (participant.type === ParticipantTypes.STREAM) {
            if (participant.userVideo) {
              const participant1 = store.getParticipant(channelId, participant.user.id);
              let tmp10;
              if (null != participant1) {
                tmp10 = participant1;
              }
              if (obj.canRenderParticipantVideo(tmp10)) {
                return constants2.IN_PANEL;
              }
              const obj = arg1(dependencyMap[7]);
            }
          }
          if (tmp) {
            if (participant.id !== store2.getId()) {
              return constants2.IN_PANEL;
            } else {
              const tmp28 = _createForOfIteratorHelperLoose(store.getVideoParticipants(channelId));
              let iter2 = tmp28();
              if (!iter2.done) {
                while (true) {
                  let value = iter2.value;
                  let tmp12 = store2;
                  if (value.id !== store2.getId()) {
                    let tmp13 = arg1;
                    let tmp14 = dependencyMap;
                    let obj2 = arg1(dependencyMap[7]);
                    if (obj2.canRenderParticipantVideo(value)) {
                      break;
                    }
                  }
                  let iter = tmp28();
                  iter2 = iter;
                }
                return constants2.IN_PANEL;
              }
              if (participant.id !== store2.getId()) {
                return constants2.IN_PANEL;
              }
            }
          }
        }
      }
    }
    let IN_APP;
    if (mode === constants.PIP) {
      IN_APP = constants2.IN_APP;
    }
    return IN_APP;
  }
};
export const getPIPWindowDimensions = tmp6;
export const pipXYtoAbsoluteXY = tmp7;
export const getClampedPIPPosition = tmp8;
export const calculatePIPPositionFromVelocity = tmp9;
export const getVoicePanelPIPBorderRadius = tmp10;
