// Module ID: 15795
// Function ID: 121952
// Name: SecureFramesCallVerificationBottomSheet
// Dependencies: [31, 4202, 653, 33, 566, 8907, 8332, 8913, 1212, 8897, 2]
// Exports: default

// Module 15795 (SecureFramesCallVerificationBottomSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/rtc/native/SecureFramesCallVerificationBottomSheet.tsx");

export default function SecureFramesCallVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = outer1_4.getSecureFramesState();
    let epochAuthenticator;
    if (null != secureFramesState) {
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
  obj = {};
  const intl = channelId(1212).intl;
  obj.title = intl.string(channelId(1212).t.cTQI5t);
  const intl2 = channelId(1212).intl;
  obj.subtitle = intl2.string(channelId(1212).t["MPp7+C"]);
  const intl3 = channelId(1212).intl;
  obj = {};
  const tmp3 = importDefault(8913);
  obj.helpArticle = channelId(8897).getSecureFramesHelpdeskArticle();
  obj.footer = intl3.format(channelId(1212).t.wKxADe, obj);
  obj.epochAuthenticator = stateFromStores;
  obj.onShareClick = callback;
  return <tmp3 />;
};
