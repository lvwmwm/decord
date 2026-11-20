// Module ID: 9611
// Function ID: 9612
// Name: SecureFramesStreamVerificationBottomSheet
// Dependencies: [19, 6277, 1071, 21, 504, 9590, 9598, 9612, 1112, 9587, 2]
// Exports: default

// Module 9611 (SecureFramesStreamVerificationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9590 */;
import showShareActionSheet from "showShareActionSheet" /* 9598 */;
import react from "react" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6277 */;
import size from "module_2" /* 2 */;

const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  let obj4;
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  let obj = channelId(504);
  const items = [StreamRTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = StreamRTCConnectionStore.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = react.useCallback((message) => {
    const obj = SecureFramesTracking;
    const obj2 = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj2);
    const obj3 = showShareActionSheet;
    const obj4 = { message };
    obj3.showShareActionSheet(obj4, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  streamKey(9612);
  const intl = channelId(1112).intl;
  const intl2 = channelId(1112).intl;
  const intl3 = channelId(1112).intl;
  const format = intl3.format;
  let obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
  const prop = channelId(1112).t["H3+ktv"];
  obj4 = channelId(9587);
  return <tmp3 title={intl.string(channelId(1112).t.QogHld)} subtitle={intl2.string(channelId(1112).t.qODBkW)} footer={format(prop, obj3)} epochAuthenticator={stateFromStores} onShareClick={callback} />;
};
