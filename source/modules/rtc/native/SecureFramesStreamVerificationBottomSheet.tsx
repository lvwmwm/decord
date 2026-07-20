// Module ID: 8900
// Function ID: 70252
// Name: SecureFramesStreamVerificationBottomSheet
// Dependencies: []
// Exports: default

// Module 8900 (SecureFramesStreamVerificationBottomSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticsSections = arg1(dependencyMap[2]).AnalyticsSections;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/rtc/native/SecureFramesStreamVerificationBottomSheet.tsx");

export default function SecureFramesStreamVerificationBottomSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const importDefault = channelId.streamKey;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const secureFramesState = secureFramesState.getSecureFramesState(streamKey);
    let epochAuthenticator;
    if (null != secureFramesState) {
      epochAuthenticator = secureFramesState.epochAuthenticator;
    }
    return epochAuthenticator;
  });
  const callback = React.useCallback((message) => {
    let obj = channelId(closure_2[5]);
    obj = { channelId };
    const result = obj.trackE2EEStreamVerificationShareClicked(obj);
    obj = { message };
    channelId(closure_2[6]).showShareActionSheet(obj, constants.SECURE_FRAMES_STREAM_BOTTOM_SHEET);
  }, items1);
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.QogHld);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[8]).t.qODBkW);
  const intl3 = arg1(dependencyMap[8]).intl;
  obj = {};
  const tmp3 = importDefault(dependencyMap[7]);
  obj.helpArticle = arg1(dependencyMap[9]).getSecureFramesHelpdeskArticle();
  obj.footer = intl3.format(arg1(dependencyMap[8]).t.H3+ktv, obj);
  obj.epochAuthenticator = stateFromStores;
  obj.onShareClick = callback;
  return <tmp3 {...obj} />;
};
