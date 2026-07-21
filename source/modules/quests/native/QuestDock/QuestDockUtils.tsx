// Module ID: 13869
// Function ID: 104930
// Name: roundToNearestPixel
// Dependencies: []
// Exports: isSoftDismissed

// Module 13869 (roundToNearestPixel)
const PixelRatio = require(dependencyMap[0]).PixelRatio;
const _module = require(dependencyMap[1]);
({ QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_2, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_3, QUEST_DOCK_COLLAPSED_HEIGHT: closure_4, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 } = _module);
let closure_6 = PixelRatio.get();
let closure_7 = { code: "function roundToNearestPixel_QuestDockUtilsTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}" };
let closure_8 = { code: "function getQuestDockExpandedHeightLimits_QuestDockUtilsTsx2(windowHeight,safeAreaTop,minContentHeight){const{QUEST_DOCK_COLLAPSED_HEIGHT}=this.__closure;return{minHeight:QUEST_DOCK_COLLAPSED_HEIGHT,maxHeight:Math.min(minContentHeight,windowHeight-safeAreaTop)};}" };
let closure_9 = { code: "function getQuestDockCollapsedWidth_QuestDockUtilsTsx3(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);safeAreaRight=Math.max(safeAreaRight,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}" };
const tmp3 = () => {
  function roundToNearestPixel(arg0) {
    return Math.round(arg0 * closure_6) / closure_6;
  }
  roundToNearestPixel.__closure = { PIXEL_DENSITY: closure_6 };
  roundToNearestPixel.__workletHash = 9602449563120;
  roundToNearestPixel.__initData = closure_7;
  return roundToNearestPixel;
}();
let closure_10 = { code: "function getQuestDockExpandedWidth_QuestDockUtilsTsx4(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}" };
const tmp4 = () => {
  function getQuestDockExpandedHeightLimits(windowHeight, top, minExpandedContentHeight) {
    return { minHeight: closure_4, maxHeight: Math.min(minExpandedContentHeight, windowHeight - top) };
  }
  getQuestDockExpandedHeightLimits.__closure = { QUEST_DOCK_COLLAPSED_HEIGHT: closure_4 };
  getQuestDockExpandedHeightLimits.__workletHash = 880847803554;
  getQuestDockExpandedHeightLimits.__initData = closure_8;
  return getQuestDockExpandedHeightLimits;
}();
let closure_11 = { code: "function getQuestDockClosedWidth_QuestDockUtilsTsx5(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}" };
const tmp5 = () => {
  function getQuestDockCollapsedWidth(width, youBarHorizontalMargin, youBarHorizontalMargin2) {
    const bound = Math.max(youBarHorizontalMargin, closure_2);
    return Math.min(width - bound - Math.max(youBarHorizontalMargin2, closure_2), closure_3);
  }
  getQuestDockCollapsedWidth.__closure = { QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_2, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_3 };
  getQuestDockCollapsedWidth.__workletHash = 1119343760780;
  getQuestDockCollapsedWidth.__initData = closure_9;
  return getQuestDockCollapsedWidth;
}();
const tmp6 = () => {
  function getQuestDockExpandedWidth(width, left, right) {
    return Math.min(width - left - right, closure_3);
  }
  getQuestDockExpandedWidth.__closure = { QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_3 };
  getQuestDockExpandedWidth.__workletHash = 6480418564130;
  getQuestDockExpandedWidth.__initData = closure_10;
  return getQuestDockExpandedWidth;
}();
let closure_12 = 3 * importDefault(dependencyMap[2]).Millis.HOUR;
let closure_13 = { code: "function dimensionsLayoutTransition_QuestDockUtilsTsx6(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};}" };
const tmp7 = () => {
  function getQuestDockClosedWidth(width, left, right) {
    return Math.min(width - left - right, closure_3);
  }
  getQuestDockClosedWidth.__closure = { QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_3 };
  getQuestDockClosedWidth.__workletHash = 14159592925974;
  getQuestDockClosedWidth.__initData = closure_11;
  return getQuestDockClosedWidth;
}();
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUtils.tsx");

export const roundToNearestPixel = tmp3;
export const getQuestDockExpandedHeightLimits = tmp4;
export const getQuestDockCollapsedWidth = tmp5;
export const getQuestDockExpandedWidth = tmp6;
export const getQuestDockClosedWidth = tmp7;
export const isSoftDismissed = function isSoftDismissed(questDockSoftDismissedAt) {
  let tmp = null != questDockSoftDismissedAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - questDockSoftDismissedAt < closure_12;
  }
  return tmp;
};
export const dimensionsLayoutTransition = () => {
  function dimensionsLayoutTransition(currentOriginX) {
    let obj = { initialValues: obj };
    obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
    obj = { originX: callback(closure_1[3]).withSpring(currentOriginX.targetOriginX, closure_5) };
    const obj4 = callback(closure_1[3]);
    obj.originY = callback(closure_1[3]).withSpring(currentOriginX.targetOriginY, closure_5);
    const obj5 = callback(closure_1[3]);
    obj.height = callback(closure_1[3]).withSpring(currentOriginX.targetHeight, closure_5);
    const obj6 = callback(closure_1[3]);
    obj.width = callback(closure_1[3]).withSpring(currentOriginX.targetWidth, closure_5);
    obj.animations = obj;
    return obj;
  }
  dimensionsLayoutTransition.__closure = { withSpring: require(dependencyMap[3]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  dimensionsLayoutTransition.__workletHash = 4497154070776;
  dimensionsLayoutTransition.__initData = closure_13;
  return dimensionsLayoutTransition;
}();
