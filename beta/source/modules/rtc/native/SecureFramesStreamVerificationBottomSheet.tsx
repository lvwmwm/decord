// Module ID: 9996
// Function ID: 9997
// Name: SecureFramesStreamVerificationBottomSheet
// Dependencies: [19, 4829, 1078, 21, 558, 568, 504, 9991, 8669, 1119, 9980, 9997, 2]

// Module 9996 (SecureFramesStreamVerificationBottomSheet)
import showShareActionSheet from "showShareActionSheet" /* 8669 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9991 */;
import noop from "module_19" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4829 */;

require = fn;
const AnalyticsSections = fn(1078).AnalyticsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(11);
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamRTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== streamKey) {
    const fn = function s() {
      const secureFramesState = StreamRTCConnectionStore.getSecureFramesState(streamKey);
      let epochAuthenticator;
      if (secureFramesState != null) {
        epochAuthenticator = secureFramesState.epochAuthenticator;
      }
      return epochAuthenticator;
    };
    cResult[1] = streamKey;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  if (cResult[3] !== channelId) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    cResult[3] = channelId;
    cResult[4] = E;
  } else {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    const stringResult = obj3.string(tmp(1119).t.QogHld);
    const intl = tmp(1119).intl;
    const stringResult1 = intl.string(tmp(1119).t.qODBkW);
    const intl2 = tmp(1119).intl;
    let obj2 = { helpArticle: tmp(9980).getSecureFramesHelpdeskArticle() };
    const formatResult = intl2.format(tmp(1119).t["H3+ktv"], obj2);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    cResult[7] = formatResult;
    let tmp11 = formatResult;
    let tmp10 = stringResult1;
    const tmp9 = stringResult;
    const tmpResult2 = tmp(9980);
  } else {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    tmp10 = cResult[6];
    tmp11 = cResult[7];
  }
  if (cResult[8] === stateFromStores) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        obj1 = { channelId };
        result = obj.trackE2EEStreamVerificationShareClicked(obj1);
        obj3 = closure_0(closure_2[8]);
        obj5 = { message: channelId };
        showShareActionSheetResult = obj3.showShareActionSheet(obj5, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
        return;
      }
    }
    return tmp15;
  }
  tmp15 = jsx(streamKey(9997), { title: tmp9, subtitle: tmp10, footer: tmp11, epochAuthenticator: stateFromStores, onShareClick: tmp8 });
  cResult[8] = stateFromStores;
  cResult[9] = tmp8;
  cResult[10] = tmp15;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  const items = [StreamRTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const secureFramesState = StreamRTCConnectionStore.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (secureFramesState != null) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = noop.useCallback((message) => {
    const result = SecureFramesTracking.trackE2EEStreamVerificationShareClicked({ channelId });
    const obj2 = { channelId };
    showShareActionSheet.showShareActionSheet({ message }, AnalyticsSections.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  let obj2 = { title: null, subtitle: null, footer: null, epochAuthenticator: null, onShareClick: null };
  let obj = channelId(504);
  const intl = channelId(1119).intl;
  obj2.title = intl.string(channelId(1119).t.QogHld);
  const intl2 = channelId(1119).intl;
  obj2.subtitle = intl2.string(channelId(1119).t.qODBkW);
  const intl3 = channelId(1119).intl;
  const obj3 = { helpArticle: null };
  const tmp3 = streamKey(9997);
  obj3.helpArticle = channelId(9980).getSecureFramesHelpdeskArticle();
  obj2.footer = intl3.format(channelId(1119).t["H3+ktv"], obj3);
  obj2.epochAuthenticator = stateFromStores;
  obj2.onShareClick = callback;
  return <tmp3 title={null} subtitle={null} footer={null} epochAuthenticator={null} onShareClick={null} />;
});
