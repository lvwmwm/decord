// Module ID: 19624
// Function ID: 19625
// Name: SecureFramesCallVerificationBottomSheet
// Dependencies: [19, 5895, 1072, 21, 504, 9354, 9016, 9367, 1113, 9351, 2]
// Exports: default

// Module 19624 (SecureFramesCallVerificationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import showShareActionSheet from "showShareActionSheet" /* 9016 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9354 */;
import SecureFramesVerificationBottomSheetDefault from "SecureFramesVerificationBottomSheet" /* 9367 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5895 */;
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
  obj4 = channelId(9351);
  return <tmp3 title={intl.string(channelId(1113).t.cTQI5t)} subtitle={intl2.string(channelId(1113).t["MPp7+C"])} footer={format(wKxADe, obj3)} epochAuthenticator={stateFromStores} onShareClick={callback} />;
};
