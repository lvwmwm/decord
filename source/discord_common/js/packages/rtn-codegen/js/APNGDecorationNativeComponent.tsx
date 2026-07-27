// Module ID: 6154
// Function ID: 55132
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 117, 2]

// Module 6154 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } } };
obj = { url: true, autoplay: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoad: true }));
obj.validAttributes = obj;
obj = {
  play(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "play", []);
  },
  pause(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "pause", []);
  },
  seek(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "seek", items);
  }
};
const value = get.get("APNGDecorationView", () => obj);
const result = require("renderElement").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
