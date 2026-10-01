// Module ID: 6923
// Function ID: 6924
// Name: ConnectionsHooks
// Dependencies: [32, 19, 5593, 1372, 1074, 6924, 1091, 504, 6926, 12, 5595, 2]
// Exports: useEmptyStatePlatforms, useLegacyPlatformType, usePlatformAllowed, usePlatforms

// Module 6923 (ConnectionsHooks)
import _modDef12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1091 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import KeyboardConstants from "KeyboardConstants" /* 6924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let set;

let PlatformTypes;
let metroImportDefault;
const f83399 = () => currentUser.getCurrentUser();
({ ACTIVITY_PLATFORM_TYPES: metroImportDefault, PlatformTypes } = Constants);
const KeyboardKeysUpdated = KeyboardConstants.KeyboardKeysUpdated;
let closure_10 = { [PlatformTypes.INSTAGRAM]: ["1036753656588017764"] };
let items = [PlatformTypes.INSTAGRAM, ];
const date = new Date(2023, 1, 18);
items[1] = date.getTime();
let items1 = [items];
new Map(items1);
let closure_12 = 30 * DurationsDefault.Millis.DAY;
let items2 = [PlatformTypes.PLAYSTATION, 2];
let items3 = [items2, , , , ];
const items4 = [PlatformTypes.XBOX, 2];
items3[1] = items4;
const items5 = [PlatformTypes.SPOTIFY, 1];
items3[2] = items5;
const items6 = [PlatformTypes.STEAM, 1];
items3[3] = items6;
const items7 = [PlatformTypes.TWITCH, 1];
items3[4] = items7;
new Map(items3);
const result = size.fileFinishedImporting("modules/connections/ConnectionsHooks.tsx");

export const usePlatformAllowed = function usePlatformAllowed(forUserProfile) {
  forUserProfile = forUserProfile.forUserProfile;
  let allowPlayStationStaging;
  const items = [UserStore];
  const obj = forUserProfile(allowPlayStationStaging[7]);
  let closure_1 = obj.useStateFromStores(items, f83399);
  const PlayStationVoiceExperiment = forUserProfile(allowPlayStationStaging[8]).PlayStationVoiceExperiment;
  allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  return (dependencyMap) => {
    let tmp5;
    if (dependencyMap.type === constants.PLAYSTATION_STAGING) {
      tmp5 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === closure_1;
      if (!tmp4) {
        let hasItem;
        if (closure_2_10[dependencyMap.type] != null) {
          hasItem = obj.includes(tmp11.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = c0;
        if (!tmp7) {
          const migrationData = dependencyMap.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          tmp7 = !migrationExperimentEnabled && dependencyMap.enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
};
export const usePlatforms = function usePlatforms() {
  let accounts;
  let memo;
  let stateFromStores;
  let obj = stateFromStores(memo[7]);
  let items = [ConnectedAccountsStore];
  stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  let c0 = false;
  const items1 = [UserStore];
  const obj2 = stateFromStores(memo[7]);
  let closure_1 = obj2.useStateFromStores(items1, f83399);
  const PlayStationVoiceExperiment = stateFromStores(memo[8]).PlayStationVoiceExperiment;
  const allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  const fn = (dependencyMap) => {
    let tmp5;
    if (dependencyMap.type === constants.PLAYSTATION_STAGING) {
      tmp5 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === closure_1;
      if (!tmp4) {
        let hasItem;
        if (closure_2_10[dependencyMap.type] != null) {
          hasItem = obj.includes(tmp11.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = c0;
        if (!tmp7) {
          const migrationData = dependencyMap.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          tmp7 = !migrationExperimentEnabled && dependencyMap.enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
  const items2 = [stateFromStores];
  memo = react.useMemo(() => {
    set = new Set();
    const item = stateFromStores.forEach((type) => set.add(type.type));
    return set;
  }, items2);
  const items3 = [memo, fn];
  return react.useMemo(() => {
    const sortBy = _modDef12.sortBy;
    _modDef12;
    const items = [
      (type) => {
        let hasItem = set3.has(type.type);
        const obj = set3;
        if (hasItem) {
          const _Date = Date;
          const timestamp = Date.now();
          let num = obj.get(type.type);
          if (num == null) {
            num = 0;
          }
          hasItem = timestamp < num + closure_1_12;
        }
        return !hasItem;
      },
      (type) => set.has(type.type),
      (hasMetadata) => hasMetadata.hasMetadata,
      (type) => !set2.has(type.type),
      (name) => name.name
    ];
    const arr = PlatformsDefault;
    return sortBy(arr.filter(fn), items);
  }, items3);
};
export const useEmptyStatePlatforms = function useEmptyStatePlatforms() {
  let currentUser;
  let fn;
  let c0 = false;
  const obj = fn(504);
  let items = [UserStore];
  let closure_1 = obj.useStateFromStores(items, f83399);
  const PlayStationVoiceExperiment = fn(6926).PlayStationVoiceExperiment;
  const allowPlayStationStaging = PlayStationVoiceExperiment.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
  fn = (dependencyMap) => {
    let tmp5;
    if (dependencyMap.type === constants.PLAYSTATION_STAGING) {
      tmp5 = allowPlayStationStaging;
    } else {
      let tmp4 = undefined === closure_1;
      if (!tmp4) {
        let hasItem;
        if (closure_2_10[dependencyMap.type] != null) {
          hasItem = obj.includes(tmp11.id);
        }
        tmp4 = !hasItem;
      }
      tmp5 = !tmp4;
      if (tmp4) {
        let tmp7 = c0;
        if (!tmp7) {
          const migrationData = dependencyMap.migrationData;
          let migrationExperimentEnabled;
          if (migrationData != null) {
            migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionsHooks");
          }
          tmp7 = !migrationExperimentEnabled && dependencyMap.enabled;
        }
        tmp5 = tmp7;
      }
    }
    return tmp5;
  };
  const items1 = [fn];
  return react.useMemo(() => {
    const sortBy = _modDef12.sortBy;
    _modDef12;
    const items = [
      (type) => {
        let num = closure_1_13.get(type.type);
        if (num == null) {
          num = 0;
        }
        return -1 * num;
      },
      (name) => name.name
    ];
    const arr = PlatformsDefault;
    return sortBy(arr.filter(fn), items);
  }, items1);
};
export const useLegacyPlatformType = function useLegacyPlatformType(arg0) {
  let tmp2;
  function handleKeyDown(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      require(true);
    }
  }
  function handleKeyUp(key) {
    if (key.key === KeyboardKeysUpdated.SHIFT) {
      require(false);
    }
  }
  [tmp2, require] = _slicedToArray(react.useState(false), 2);
  const tmp = _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const listener = window.addEventListener("keydown", handleKeyDown);
    const listener1 = window.addEventListener("keyup", handleKeyUp);
    return () => {
      const removed = window.removeEventListener("keydown", handleKeyDown);
      const removed1 = window.removeEventListener("keyup", handleKeyUp);
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
