// Module ID: 8928
// Function ID: 70412
// Name: onConnectToConsole
// Dependencies: []
// Exports: useOnConnectToConsole

// Module 8928 (onConnectToConsole)
function onConnectToConsole(channel, found) {
  const result = found(dependencyMap[2]).UNSAFE_markDismissibleContentAsDismissed(found(dependencyMap[3]).DismissibleContent.DONUT_MOBILE_NUX);
  if (found.twoWayLink) {
    if (!found.revoked) {
      found(dependencyMap[6]).beginConsoleTransfer(channel, found.type);
    }
  }
  const type = found.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return importDefault(dependencyMap[4]).showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return importDefault(dependencyMap[5]).showModal(items1, found.type);
  }
  const obj = found(dependencyMap[2]);
}
let closure_3 = importAll(dependencyMap[0]);
({ AnalyticsLocations: closure_4, PlatformTypes: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export { onConnectToConsole };
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  account = channel;
  const importDefault = account;
  const items = [channel, account];
  return React.useCallback(() => {
    callback(arg0, arg1);
  }, items);
};
