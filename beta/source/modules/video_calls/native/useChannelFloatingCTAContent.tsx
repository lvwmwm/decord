// Module ID: 16881
// Function ID: 16882
// Name: useChannelFloatingCTAContent
// Dependencies: [19, 1993, 4859, 563, 9240, 2029, 2]
// Exports: default

// Module 16881 (useChannelFloatingCTAContent)
import dismissible_content from "dismissible_content" /* 2029 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default function useChannelFloatingCTAContent(arg0) {
  let anyLocalVideoAutoDisabled;
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  let items = [RTCConnectionStore];
  const obj = require("useStateFromStores");
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != closure_0 && RTCConnectionStore.getChannelId() === tmp;
    return tmp2;
  });
  let tmp2 = require("useGameConsoleAccounts")();
  importDefault = tmp2;
  const items1 = [MediaEngineStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled());
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    const items = [];
    const tmp = stateFromStores1;
    if (tmp) {
      items.push(dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    }
    const tmp5 = stateFromStores;
    if (tmp5) {
      items.push(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (closure_1.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
};
