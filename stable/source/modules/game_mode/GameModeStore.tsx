// Module ID: 4827
// Function ID: 4828
// Name: GameModeStore
// Dependencies: [2006, 4828, 504, 4829, 585, 2]

// Module 4827 (GameModeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import GameModeConstants from "GameModeConstants" /* 4828 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let someResult, visibleRunningGames;

const DefaultGameModeSettings = GameModeConstants.DefaultGameModeSettings;
let obj = {};
let merged = Object.assign(DefaultGameModeSettings);
let c5 = false;
let focused = false;
let hovered = false;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class GameModeStore extends DeviceSettingsStore {
  initialize(enabled) {
    enabled = undefined;
    if (enabled != null) {
      enabled = enabled.enabled;
    }
    if (enabled == null) {
      enabled = DefaultGameModeSettings.enabled;
    }
    let prop;
    if (enabled != null) {
      prop = enabled.promptSuppressedGameIds;
    }
    if (prop == null) {
      prop = DefaultGameModeSettings.promptSuppressedGameIds;
    }
    const items = [RunningGameStore];
    this.syncWith(items, () => {
      visibleRunningGames = visibleRunningGames.getVisibleRunningGames();
      someResult = visibleRunningGames.some((isLauncher) => true !== isLauncher.isLauncher);
      let flag = someResult !== someResult;
      if (flag) {
        flag = true;
      }
      return flag;
    });
  }
  getUserAgnosticState() {
    return obj;
  }
  isPromptSuppressedForGame(arg0) {
    const promptSuppressedGameIds = obj.promptSuppressedGameIds;
    return promptSuppressedGameIds.includes(arg0);
  }
}
const prototype = GameModeStore.prototype;
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    return obj.enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRunningGame", {
  get: function hasRunningGame() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "isThrottling", {
  get: function isThrottling() {
    const enabled = obj.enabled;
    let tmp = !enabled;
    if (enabled) {
      tmp = !c5;
    }
    let tmp3 = !tmp;
    if (tmp3) {
      obj = require("GameModeExperiment");
      let enabled1 = obj.getGameModeExperimentConfig({ location: "GameModeStore" }).enabled;
      if (enabled1) {
        enabled1 = !focused && !hovered;
        const tmp8 = !focused && !hovered;
      }
      tmp3 = enabled1;
    }
    return tmp3;
  },
  set: undefined
});
Object.defineProperty(prototype, "isDiscordFocused", {
  get: function isDiscordFocused() {
    return focused;
  },
  set: undefined
});
Object.defineProperty(prototype, "isDiscordHovered", {
  get: function isDiscordHovered() {
    return hovered;
  },
  set: undefined
});
Object.defineProperty(prototype, "suppressedPromptGameCount", {
  get: function suppressedPromptGameCount() {
    return obj.promptSuppressedGameIds.length;
  },
  set: undefined
});
GameModeStore.displayName = "GameModeStore";
GameModeStore.persistKey = "GameModeStore";
const obj2 = {
  GAME_MODE_SET_ENABLED: function handleSetEnabled(enabled) {
    let flag = obj.enabled !== enabled.enabled;
    if (flag) {
      obj = { enabled: enabled.enabled };
      const merged = Object.assign(obj);
      flag = true;
    }
    return flag;
  },
  GAME_MODE_SUPPRESS_PROMPT: function handleSuppressPrompt(gameId) {
    let items;
    const promptSuppressedGameIds = obj.promptSuppressedGameIds;
    const hasItem = promptSuppressedGameIds.includes(gameId.gameId);
    let flag = !hasItem;
    if (flag) {
      obj = { promptSuppressedGameIds: items };
      const merged = Object.assign(obj);
      items = [];
      items[HermesBuiltin.arraySpread(items, obj.promptSuppressedGameIds, 0)] = gameId.gameId;
      flag = true;
    }
    return flag;
  },
  GAME_MODE_RESET_PROMPT_SUPPRESSION: function handleResetPromptSuppression() {
    let flag = 0 !== obj.promptSuppressedGameIds.length;
    if (flag) {
      obj = { promptSuppressedGameIds: [] };
      const merged = Object.assign(obj);
      flag = true;
    }
    return flag;
  },
  GAME_MODE_DISCORD_FOCUS_CHANGE: function handleDiscordFocusChange(focused) {
    let flag = focused !== focused.focused;
    if (flag) {
      focused = focused.focused;
      flag = true;
    }
    return flag;
  },
  GAME_MODE_DISCORD_HOVER_CHANGE: function handleDiscordHoverChange(hovered) {
    let flag = hovered !== hovered.hovered;
    if (flag) {
      hovered = hovered.hovered;
      flag = true;
    }
    return flag;
  }
};
const gameModeStore = new GameModeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/game_mode/GameModeStore.tsx");

export default gameModeStore;
