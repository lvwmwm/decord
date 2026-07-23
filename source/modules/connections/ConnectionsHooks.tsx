// Module ID: 6735
// Function ID: 52467
// Name: usePlatformAllowed
// Dependencies: [57, 31, 4812, 1849, 653, 6736, 664, 566, 6738, 22, 4814, 2]
// Exports: useEmptyStatePlatforms, useLegacyPlatformType, usePlatforms

// Module 6735 (usePlatformAllowed)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { KeyboardKeysUpdated } from "items";

let PlatformTypes;
let closure_7;
let require = arg1;
function usePlatformAllowed(forUserProfile) {
  forUserProfile = forUserProfile.forUserProfile;
  const items = [closure_6];
  let closure_1 = forUserProfile(allowPlayStationStaging[7]).useStateFromStores(items, () => outer1_6.getCurrentUser());
  const PlayStationVoiceExperiment = forUserProfile(allowPlayStationStaging[8]).PlayStationVoiceExperiment;
  allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  return (type) => {
    if (type.type === outer1_8.PLAYSTATION_STAGING) {
      let tmp6 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === id;
      if (!tmp4) {
        tmp4 = null == tmp2;
        const obj = outer1_10[type.type];
      }
      if (!tmp4) {
        tmp4 = !obj.includes(id.id);
      }
      tmp6 = !tmp4;
      if (tmp4) {
        let tmp9 = !tmp8;
        if (!forUserProfile) {
          const migrationData = type.migrationData;
          let enabled = null == migrationData;
          if (!enabled) {
            enabled = !migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          if (enabled) {
            enabled = type.enabled;
          }
          tmp9 = enabled;
        }
        tmp6 = tmp9;
      }
    }
    return tmp6;
  };
}
({ ACTIVITY_PLATFORM_TYPES: closure_7, PlatformTypes } = ME);
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["1036753656588017764"] };
let items = [PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()];
let items1 = [items];
const map = new Map(items1);
let closure_12 = 30 * require("set").Millis.DAY;
let items2 = [PlatformTypes.PLAYSTATION, 2];
const items3 = [items2, , , , ];
const items4 = [PlatformTypes.XBOX, 2];
items3[1] = items4;
const items5 = [PlatformTypes.SPOTIFY, 1];
items3[2] = items5;
const items6 = [PlatformTypes.STEAM, 1];
items3[3] = items6;
const items7 = [PlatformTypes.TWITCH, 1];
items3[4] = items7;
const map1 = new Map(items3);
const date = new Date(2023, 1, 18);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export { usePlatformAllowed };
export const usePlatforms = function usePlatforms() {
  let items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(memo[7]).useStateFromStores(items, () => outer1_5.getAccounts());
  const tmp2 = usePlatformAllowed({ forUserProfile: false });
  const importDefault = tmp2;
  const items1 = [stateFromStores];
  memo = React.useMemo(() => {
    const set = new Set();
    const item = set.forEach((type) => set.add(type.type));
    return set;
  }, items1);
  const items2 = [memo, tmp2];
  return React.useMemo(() => {
    const obj = tmp2(memo[9]);
    const items = [
      (type) => {
        let hasItem = outer2_11.has(type.type);
        if (hasItem) {
          const _Date = Date;
          const timestamp = Date.now();
          const value = outer2_11.get(type.type);
          let num = 0;
          if (null != value) {
            num = value;
          }
          hasItem = timestamp < num + outer2_12;
        }
        return !hasItem;
      },
      (type) => outer1_2.has(type.type),
      (hasMetadata) => hasMetadata.hasMetadata,
      (type) => !outer2_7.has(type.type),
      (name) => name.name
    ];
    return obj.sortBy(tmp2(memo[10]).filter(tmp2), items);
  }, items2);
};
export const useEmptyStatePlatforms = function useEmptyStatePlatforms() {
  const tmp = usePlatformAllowed({ forUserProfile: false });
  const require = tmp;
  let items = [tmp];
  return React.useMemo(() => {
    const obj = outer1_1(outer1_2[9]);
    const items = [
      (type) => {
        const value = outer2_13.get(type.type);
        let num = 0;
        if (null != value) {
          num = value;
        }
        return -1 * num;
      },
      (name) => name.name
    ];
    return obj.sortBy(outer1_1(outer1_2[10]).filter(closure_0), items);
  }, items);
};
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
  let require;
  let tmp2;
  function handleKeyDown(key) {
    if (key.key === outer1_9.SHIFT) {
      callback(true);
    }
  }
  function handleKeyUp(key) {
    if (key.key === outer1_9.SHIFT) {
      callback(false);
    }
  }
  [tmp2, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const listener = window.addEventListener("keydown", handleKeyDown);
    const listener1 = window.addEventListener("keyup", handleKeyUp);
    return () => {
      const removed = window.removeEventListener("keydown", outer1_1);
      const removed1 = window.removeEventListener("keyup", outer1_2);
    };
  }, []);
  let TWITTER_LEGACY = arg0;
  if (tmp2) {
    TWITTER_LEGACY = arg0;
    if (arg0 === PlatformTypes.TWITTER) {
      TWITTER_LEGACY = PlatformTypes.TWITTER_LEGACY;
    }
  }
  return TWITTER_LEGACY;
};
