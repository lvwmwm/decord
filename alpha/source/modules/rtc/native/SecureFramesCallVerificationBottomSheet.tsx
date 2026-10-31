// Module ID: 19220
// Function ID: 19221
// Name: SecureFramesCallVerificationBottomSheet
// Dependencies: [19, 5764, 1072, 21, 504, 9268, 8931, 9281, 1113, 9265, 2]
// Exports: default

// Module 19220 (SecureFramesCallVerificationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import showShareActionSheet from "showShareActionSheet" /* 8931 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9268 */;
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet" /* 9281 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import size from "module_2" /* 2 */;

let secureFramesState;

const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default function SecureFramesCallVerificationBottomSheet(channelId) {
  let obj4;
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [RTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    secureFramesState = secureFramesState.getSecureFramesState();
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = react.useCallback((message) => {
    const obj = SecureFramesTracking;
    const obj2 = { channelId };
    const result = obj.trackE2EECallVerificationShareClicked(obj2);
    const obj3 = showShareActionSheet;
    const obj4 = { message };
    obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  SecureFramesVerificationBottomSheetDefault;
  const intl = channelId(1113).intl;
  const intl2 = channelId(1113).intl;
  const intl3 = channelId(1113).intl;
  const format = intl3.format;
  let obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
  const wKxADe = channelId(1113).t.wKxADe;
  obj4 = channelId(9265);
  return <tmp3 title={intl.string(channelId(1113).t.cTQI5t)} subtitle={intl2.string(channelId(1113).t["MPp7+C"])} footer={format(wKxADe, obj3)} epochAuthenticator={stateFromStores} onShareClick={callback} />;
};
