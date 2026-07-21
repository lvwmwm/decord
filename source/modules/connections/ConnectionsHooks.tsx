// Module ID: 6730
// Function ID: 52424
// Name: usePlatformAllowed
// Dependencies: [57, 1881, 6750, 2, 57, 6, 7, 1917, 6724, 2, 6, 7]
// Exports: useEmptyStatePlatforms, useLegacyPlatformType, usePlatforms

// Module 6730 (usePlatformAllowed)
import closure_3 from "_slicedToArray";
import PermissionOverwriteType from "PermissionOverwriteType";
import ApplicationCommandSectionType from "ApplicationCommandSectionType";
import result2 from "result2";
import _slicedToArray from "_slicedToArray";
import { KeyboardKeysUpdated } from "_classCallCheck";
import _defineProperties from "_defineProperties";

let PlatformTypes;
function usePlatformAllowed(forUserProfile) {
  const arg1 = forUserProfile.forUserProfile;
  const items = [result2];
  let closure_1 = arg1(dependencyMap[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const PlayStationVoiceExperiment = arg1(dependencyMap[8]).PlayStationVoiceExperiment;
  const dependencyMap = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  return (type) => {
    if (type.type === constants.PLAYSTATION_STAGING) {
      let tmp6 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === id;
      if (!tmp4) {
        tmp4 = null == tmp2;
        const obj = closure_10[type.type];
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
({ ACTIVITY_PLATFORM_TYPES: closure_7, PlatformTypes } = _slicedToArray);
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["<string:1488977921>"] };
const items = [PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()];
const items1 = [items];
const map = new Map(items1);
let closure_12 = 30 * require("_defineProperties").Millis.DAY;
const items2 = [PlatformTypes.PLAYSTATION, 2];
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
const result = _defineProperties.fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export { usePlatformAllowed };
export const usePlatforms = function usePlatforms() {
  const items = [ApplicationCommandSectionType];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => accounts.getAccounts());
  const arg1 = stateFromStores;
  const tmp2 = usePlatformAllowed({ forUserProfile: false });
  const importDefault = tmp2;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    const set = new Set();
    const stateFromStores = set;
    const item = stateFromStores.forEach((type) => set.add(type.type));
    return set;
  }, items1);
  const dependencyMap = memo;
  const items2 = [memo, tmp2];
  return React.useMemo(() => {
    const obj = tmp2(memo[9]);
    const items = [
      (type) => {
        let hasItem = map.has(type.type);
        if (hasItem) {
          const _Date = Date;
          const timestamp = Date.now();
          const value = map.get(type.type);
          let num = 0;
          if (null != value) {
            num = value;
          }
          hasItem = timestamp < num + closure_12;
        }
        return !hasItem;
      },
      (type) => set.has(type.type),
      (hasMetadata) => hasMetadata.hasMetadata,
      (type) => !set2.has(type.type),
      (name) => name.name
    ];
    return obj.sortBy(tmp2(memo[10]).filter(tmp2), items);
  }, items2);
};
export const useEmptyStatePlatforms = function useEmptyStatePlatforms() {
  const tmp = usePlatformAllowed({ forUserProfile: false });
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    const obj = callback(closure_2[9]);
    const items = [
      (type) => {
        const value = closure_13.get(type.type);
        let num = 0;
        if (null != value) {
          num = value;
        }
        return -1 * num;
      },
      (name) => name.name
    ];
    return obj.sortBy(callback(closure_2[10]).filter(tmp), items);
  }, items);
};
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
  let tmp2;
  function handleKeyDown(key) {
    if (key.key === constants.SHIFT) {
      callback(true);
    }
  }
  function handleKeyUp(key) {
    if (key.key === constants.SHIFT) {
      callback(false);
    }
  }
  [tmp2, closure_0] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const listener = window.addEventListener("keydown", handleKeyDown);
    const listener1 = window.addEventListener("keyup", handleKeyUp);
    return () => {
      const removed = window.removeEventListener("keydown", closure_1);
      const removed1 = window.removeEventListener("keyup", closure_2);
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
