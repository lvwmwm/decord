// Module ID: 16179
// Function ID: 16180
// Name: SecureFramesCallVerificationBottomSheet
// Dependencies: [19, 4375, 676, 21, 589, 9219, 8923, 9225, 1236, 9209, 2]
// Exports: default

// Module 16179 (SecureFramesCallVerificationBottomSheet)
import noop from "noop";
import createRTCConnection from "createRTCConnection";
import { AnalyticsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default function SecureFramesCallVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(589);
  const items = [createRTCConnection];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    secureFramesState = secureFramesState.getSecureFramesState();
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = React.useCallback((message) => {
    let obj = channelId(outer1_2[5]);
    obj = { channelId };
    const result = obj.trackE2EECallVerificationShareClicked(obj);
    obj = { message };
    channelId(outer1_2[6]).showShareActionSheet(obj, outer1_5.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  const intl = channelId(1236).intl;
  obj[0] = intl.string(channelId(1236).t.cTQI5t);
  const intl2 = channelId(1236).intl;
  obj[1] = intl2.string(channelId(1236).t["MPp7+C"]);
  const intl3 = channelId(1236).intl;
  obj = { helpArticle: null };
  const tmp3 = importDefault(9225);
  obj[0] = channelId(9209).getSecureFramesHelpdeskArticle();
  obj[2] = intl3.format(channelId(1236).t.wKxADe, obj);
  obj[3] = stateFromStores;
  obj[4] = callback;
  return <tmp3 helpArticle={null} />;
};
