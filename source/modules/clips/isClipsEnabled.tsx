// Module ID: 4184
// Function ID: 36005
// Name: isClipsEnabled
// Dependencies: []
// Exports: isDecoupledClipsEnabled, useIsDecoupledClipsEnabled

// Module 4184 (isClipsEnabled)
function isClipsEnabled() {
  let clipsEnabled = arg1(dependencyMap[1]).areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = store.getState().clipsSettings.clipsEnabled;
  }
  if (clipsEnabled) {
    let decoupledClipsEnabled = !arg1(dependencyMap[2]).isClipsSettingsRedesignEnabled();
    if (!decoupledClipsEnabled) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    clipsEnabled = decoupledClipsEnabled;
    const obj2 = arg1(dependencyMap[2]);
  }
  return clipsEnabled;
}
function useIsClipsEnabled() {
  let isClipsAvailable = arg1(dependencyMap[1]).useIsClipsAvailable();
  const obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => store.getState().clipsSettings.clipsEnabled);
  const obj2 = arg1(dependencyMap[3]);
  const isClipsSettingsRedesignEnabled = arg1(dependencyMap[2]).useIsClipsSettingsRedesignEnabled();
  const obj3 = arg1(dependencyMap[2]);
  const items1 = [closure_2];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => store.getState().clipsSettings.decoupledClipsEnabled);
  if (isClipsAvailable) {
    isClipsAvailable = stateFromStores;
  }
  if (isClipsAvailable) {
    isClipsAvailable = !isClipsSettingsRedesignEnabled || stateFromStores1;
    const tmp5 = !isClipsSettingsRedesignEnabled || stateFromStores1;
  }
  return isClipsAvailable;
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export { isClipsEnabled };
export { useIsClipsEnabled };
export const isDecoupledClipsEnabled = function isDecoupledClipsEnabled() {
  let tmp = isClipsEnabled();
  const isWindowsResult = arg1(dependencyMap[4]).isWindows();
  const obj = arg1(dependencyMap[4]);
  if (obj2.isClipsSettingsRedesignEnabled()) {
    if (tmp) {
      tmp = isWindowsResult;
    }
    return tmp;
  } else {
    let decoupledClipsEnabled = tmp;
    if (tmp) {
      decoupledClipsEnabled = isWindowsResult;
    }
    if (decoupledClipsEnabled) {
      decoupledClipsEnabled = store.getState().clipsSettings.decoupledClipsEnabled;
    }
    return decoupledClipsEnabled;
  }
  const obj2 = arg1(dependencyMap[2]);
};
export const useIsDecoupledClipsEnabled = function useIsDecoupledClipsEnabled() {
  let tmp = useIsClipsEnabled();
  const isWindowsResult = arg1(dependencyMap[4]).isWindows();
  const obj = arg1(dependencyMap[4]);
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => state.getState().clipsSettings.decoupledClipsEnabled);
  const obj2 = arg1(dependencyMap[3]);
  if (obj3.useIsClipsSettingsRedesignEnabled()) {
    if (tmp) {
      tmp = isWindowsResult;
    }
    let tmp4 = tmp;
  } else {
    tmp4 = tmp;
    if (tmp) {
      tmp4 = isWindowsResult;
    }
    if (tmp4) {
      tmp4 = stateFromStores;
    }
  }
  return tmp4;
};
