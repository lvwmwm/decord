// Module ID: 17584
// Function ID: 17585
// Name: QuestDockUtils
// Dependencies: [17, 17585, 1089, 5876, 2]
// Exports: dimensionsLayoutTransition, getQuestDockClosedWidth, getQuestDockCollapsedWidth, getQuestDockExpandedHeightLimits, getQuestDockExpandedWidth, isSoftDismissed, roundToNearestPixel

// Module 17584 (QuestDockUtils)
import react_native from "react-native" /* 17 */;
import DurationsDefault from "Durations" /* 1089 */;
import spring_spring from "spring/spring" /* 5876 */;
import QuestDockConstants from "QuestDockConstants" /* 17585 */;
import size_mod from "module_2" /* 2 */;

let QUEST_DOCK_COLLAPSED_HEIGHT;
let QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
let QUEST_DOCK_MODE_CHANGE_PHYSICS;
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const PixelRatio = react_native.PixelRatio;
const QUEST_DOCK_COLLAPSED_MAX_WIDTH = QuestDockConstants.QUEST_DOCK_COLLAPSED_MAX_WIDTH;
const items = [{ code: "(function roundToNearestPixel_QuestDockUtilsTsx1(position){let[PIXEL_DENSITY]=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;})" }, ];
({ QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED, QUEST_DOCK_COLLAPSED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS } = QuestDockConstants);
items[1] = PixelRatio.get();
[tmp3, tmp4] = items;
function roundToNearestPixel(arg0) {
  return Math.round(arg0 * c0) / c0;
}
const items1 = [tmp4];
roundToNearestPixel.__closure = items1;
roundToNearestPixel.__workletHash = 10304999690601;
roundToNearestPixel.__initData = tmp3;
const items2 = [{ code: "(function getQuestDockExpandedHeightLimits_QuestDockUtilsTsx2(windowHeight,safeAreaTop,minContentHeight){let[QUEST_DOCK_COLLAPSED_HEIGHT]=this.__closure;return{minHeight:QUEST_DOCK_COLLAPSED_HEIGHT,maxHeight:Math.min(minContentHeight,windowHeight-safeAreaTop)};})" }, QUEST_DOCK_COLLAPSED_HEIGHT];
[tmp5, tmp6] = items2;
function getQuestDockExpandedHeightLimits(height, top, expandedHeight) {
  const obj = { minHeight, maxHeight: Math.min(expandedHeight, height - top) };
  return obj;
}
const items3 = [tmp6];
getQuestDockExpandedHeightLimits.__closure = items3;
getQuestDockExpandedHeightLimits.__workletHash = 15733700309499;
getQuestDockExpandedHeightLimits.__initData = tmp5;
const items4 = [{ code: "(function getQuestDockCollapsedWidth_QuestDockUtilsTsx3(windowWidth,safeAreaLeft,safeAreaRight,horizontalMargin=0){let[QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED,QUEST_DOCK_COLLAPSED_MAX_WIDTH]=this.__closure;const gutter=Math.max(horizontalMargin,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);return Math.min(windowWidth-safeAreaLeft-safeAreaRight-gutter*2,QUEST_DOCK_COLLAPSED_MAX_WIDTH);})" }, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED, QUEST_DOCK_COLLAPSED_MAX_WIDTH];
[tmp7, tmp8, tmp9] = items4;
function getQuestDockCollapsedWidth(width, left, right, youBarHorizontalMargin) {
  let num = youBarHorizontalMargin;
  if (youBarHorizontalMargin === undefined) {
    num = 0;
  }
  return Math.min(width - left - right - 2 * Math.max(num, c0), c1);
}
const items5 = [tmp8, tmp9];
getQuestDockCollapsedWidth.__closure = items5;
getQuestDockCollapsedWidth.__workletHash = 6066350043816;
getQuestDockCollapsedWidth.__initData = tmp7;
const items6 = [{ code: "(function getQuestDockExpandedWidth_QuestDockUtilsTsx4(windowWidth,safeAreaLeft,safeAreaRight){let[QUEST_DOCK_COLLAPSED_MAX_WIDTH]=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);})" }, QUEST_DOCK_COLLAPSED_MAX_WIDTH];
[tmp10, tmp11] = items6;
function getQuestDockExpandedWidth(width, left, right) {
  return Math.min(width - left - right, c0);
}
const items7 = [tmp11];
getQuestDockExpandedWidth.__closure = items7;
getQuestDockExpandedWidth.__workletHash = 4011342921019;
getQuestDockExpandedWidth.__initData = tmp10;
const items8 = [{ code: "(function getQuestDockClosedWidth_QuestDockUtilsTsx5(windowWidth,safeAreaLeft,safeAreaRight,horizontalMargin=0){let[QUEST_DOCK_COLLAPSED_MAX_WIDTH]=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight-horizontalMargin*2,QUEST_DOCK_COLLAPSED_MAX_WIDTH);})" }, QUEST_DOCK_COLLAPSED_MAX_WIDTH];
[tmp12, tmp13] = items8;
function getQuestDockClosedWidth(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  return Math.min(arg0 - arg1 - arg2 - 2 * num, c0);
}
const items9 = [tmp13];
getQuestDockClosedWidth.__closure = items9;
getQuestDockClosedWidth.__workletHash = 13348040907675;
getQuestDockClosedWidth.__initData = tmp12;
let closure_0 = 3 * DurationsDefault.Millis.HOUR;
const items10 = [{ code: "(function dimensionsLayoutTransition_QuestDockUtilsTsx6(values){let[withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};})" }, spring_spring.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS];
let c0;
let c1;
[tmp14, tmp15, tmp16] = items10;
function dimensionsLayoutTransition(originX) {
  const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size };
  size = { originX: _undefined(originX.targetOriginX, c1), originY: _undefined(originX.targetOriginY, c1), height: _undefined(originX.targetHeight, c1), width: _undefined(originX.targetWidth, c1) };
  return obj;
}
const items11 = [tmp15, tmp16];
dimensionsLayoutTransition.__closure = items11;
dimensionsLayoutTransition.__workletHash = 8505007023969;
dimensionsLayoutTransition.__initData = tmp14;
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUtils.tsx");

export { roundToNearestPixel };
export { getQuestDockExpandedHeightLimits };
export { getQuestDockCollapsedWidth };
export { getQuestDockExpandedWidth };
export { getQuestDockClosedWidth };
export function isSoftDismissed(questDockSoftDismissedAt) {
  let tmp = null != questDockSoftDismissedAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - questDockSoftDismissedAt < closure_0;
  }
  return tmp;
}
export { dimensionsLayoutTransition };
