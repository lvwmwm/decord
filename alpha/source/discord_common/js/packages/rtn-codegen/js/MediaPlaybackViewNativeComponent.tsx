// Module ID: 8795
// Function ID: 8796
// Name: MediaPlaybackViewNativeComponent
// Dependencies: [106, 65, 114, 2]

// Module 8795 (MediaPlaybackViewNativeComponent)
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDMediaPlaybackView", directEventTypes: { topPlaybackEvent: { registrationName: "onPlaybackEvent" } }, validAttributes: obj2 };
obj2 = { sourceId: true, sourceUri: true, sourceHeaders: true, resizeMode: true, disableFocus: true, httpEngine: true, bufferConfig: true, paused: true, muted: true, volume: true, rate: true, repeat: true, controls: true, audioPolicy: true, playInBackground: true, playWhenInactive: true, pictureInPicture: true, preventsDisplaySleepDuringVideoPlayback: true, automaticallyWaitsToMinimizeStalling: true, maxBitRate: true, preferredForwardBufferDuration: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onPlaybackEvent: true }));
const obj3 = {
  seek(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "seek", items);
  },
  reset(arg0) {
    const obj = renderElement;
    obj.dispatchCommand(arg0, "reset", []);
  }
};
const value = module_65.get("DCDMediaPlaybackView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/MediaPlaybackViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;
