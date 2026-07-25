// Module ID: 8839
// Function ID: 70023
// Name: SecureFramesStreamVerificationBottomSheet
// Dependencies: [31, 4217, 653, 33, 566, 8834, 8134, 8840, 1212, 8824, 2]
// Exports: default

// Module 8839 (SecureFramesStreamVerificationBottomSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const streamKey = channelId.streamKey;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = outer1_4.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (null != secureFramesState) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = React.useCallback((message) => {
    let obj = channelId(outer1_2[5]);
    obj = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj);
    obj = { message };
    channelId(outer1_2[6]).showShareActionSheet(obj, outer1_5.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = {};
  const intl = channelId(1212).intl;
  obj.title = intl.string(channelId(1212).t.QogHld);
  const intl2 = channelId(1212).intl;
  obj.subtitle = intl2.string(channelId(1212).t.qODBkW);
  const intl3 = channelId(1212).intl;
  obj = {};
  const tmp3 = streamKey(8840);
  obj.helpArticle = channelId(8824).getSecureFramesHelpdeskArticle();
  obj.footer = intl3.format(channelId(1212).t["H3+ktv"], obj);
  obj.epochAuthenticator = stateFromStores;
  obj.onShareClick = callback;
  return <tmp3 />;
};
