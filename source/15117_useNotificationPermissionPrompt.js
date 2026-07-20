// Module ID: 15117
// Function ID: 114101
// Name: useNotificationPermissionPrompt
// Dependencies: []
// Exports: default

// Module 15117 (useNotificationPermissionPrompt)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => connected.isConnected());
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_6, closure_4];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => stateFromStores1(closure_2[6])(closure_4, closure_6));
  const importDefault = stateFromStores1;
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = stateFromStores1(closure_2[7]).requestPermission();
          stateFromStores1(closure_2[7]).shouldRequestNotification = false;
          const obj = stateFromStores1(closure_2[7]);
        }
        const tmp5 = stateFromStores1(closure_2[7]).shouldRequestNotification && !promptSeen.promptSeen;
      }
    }
  }, items2);
  const obj2 = arg1(dependencyMap[5]);
  const guildOpenNudge = arg1(dependencyMap[8]).useGuildOpenNudge();
  const obj3 = arg1(dependencyMap[8]);
  const postCallDisconnectNudge = arg1(dependencyMap[9]).usePostCallDisconnectNudge();
};
