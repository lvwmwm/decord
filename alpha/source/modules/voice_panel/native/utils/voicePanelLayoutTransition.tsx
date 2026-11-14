// Module ID: 19983
// Function ID: 19984
// Name: voicePanelLayoutTransition
// Dependencies: [11985, 5939, 2]
// Exports: default

// Module 19983 (voicePanelLayoutTransition)
import spring_spring from "spring/spring" /* 5939 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import size_mod from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
const items = [{ code: "(function voicePanelLayoutTransition_voicePanelLayoutTransitionTsx1(values){let[withSpring,LAYOUT_PHYSICS]=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})" }, , ];
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
items[1] = spring_spring.withSpring;
items[2] = LAYOUT_PHYSICS;
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function voicePanelLayoutTransition(originX) {
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: _undefined(originX.targetOriginX, c1, "respect-motion-settings"), originY: _undefined(originX.targetOriginY, c1, "respect-motion-settings"), width: _undefined(originX.targetWidth, c1, "respect-motion-settings"), height: _undefined(originX.targetHeight, c1, "respect-motion-settings") };
  return obj;
}
const items1 = [tmp3, tmp4];
voicePanelLayoutTransition.__closure = items1;
voicePanelLayoutTransition.__workletHash = 1007044144615;
voicePanelLayoutTransition.__initData = tmp2;
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/voicePanelLayoutTransition.tsx");

export default voicePanelLayoutTransition;
