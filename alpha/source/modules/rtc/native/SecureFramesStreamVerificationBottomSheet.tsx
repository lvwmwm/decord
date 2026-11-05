// Module ID: 9432
// Function ID: 9433
// Name: SecureFramesStreamVerificationBottomSheet
// Dependencies: [19, 8030, 1072, 21, 504, 9420, 9082, 9433, 1113, 9417, 2]
// Exports: default

// Module 9432 (SecureFramesStreamVerificationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import showShareActionSheet from "showShareActionSheet" /* 9082 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9420 */;
import react from "react" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 8030 */;
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
  streamKey(9433);
  const intl = channelId(1113).intl;
  const intl2 = channelId(1113).intl;
  const intl3 = channelId(1113).intl;
  const format = intl3.format;
  let obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
  const prop = channelId(1113).t["H3+ktv"];
  obj4 = channelId(9417);
  return <tmp3 title={intl.string(channelId(1113).t.QogHld)} subtitle={intl2.string(channelId(1113).t.qODBkW)} footer={format(prop, obj3)} epochAuthenticator={stateFromStores} onShareClick={callback} />;
};
