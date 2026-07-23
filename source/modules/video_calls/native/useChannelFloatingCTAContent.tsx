// Module ID: 15743
// Function ID: 121479
// Name: useChannelFloatingCTAContent
// Dependencies: [31, 4177, 4202, 624, 8933, 1334, 2]
// Exports: default

// Module 15743 (useChannelFloatingCTAContent)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default function useChannelFloatingCTAContent(arg0) {
  const _require = arg0;
  let items = [closure_5];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = outer1_5.getChannelId() === closure_0;
    }
    return tmp;
  });
  let tmp2 = importDefault(stateFromStores[4])();
  importDefault = tmp2;
  const obj = _require(stateFromStores[3]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(stateFromStores[3]).useStateFromStores(items1, () => outer1_4.isAnyLocalVideoAutoDisabled());
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    const items = [];
    if (stateFromStores1) {
      items.push(callback(stateFromStores[5]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
      const tmp2 = stateFromStores;
    }
    if (stateFromStores) {
      items.push(callback(stateFromStores[5]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (tmp2.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(callback(stateFromStores[5]).DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
};
