// Module ID: 10717
// Function ID: 10718
// Name: stickers/StickersUtils
// Dependencies: [19, 17, 2067, 1376, 10718, 1078, 1222, 5519, 7613, 558, 568, 10715, 504, 9465, 10719, 10720, 1614, 2]
// Exports: dropPreloadedSticker, openStickerPickerToPackId, preloadSticker

// Module 10717 (stickers/StickersUtils)
import KeyboardTypes from "KeyboardTypes" /* 1614 */;
import StickersTypes from "StickersTypes" /* 5519 */;
import _modDef10719 from "module_10719" /* 10719 */;
import _modDef10720 from "module_10720" /* 10720 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const useStickerPickerStore = fn(10718).useStickerPickerStore;
const GuildNSFWContentLevel = fn(1078).GuildNSFWContentLevel;
const ExpressionPickerViewType = fn(1222).ExpressionPickerViewType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(15);
  let obj = require("c");
  const stickerPackCategories = require("StickersHooks").useStickerPackCategories(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj2 = require("StickersHooks");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const guilds = GuildStore.getGuilds();
    cResult[2] = guilds;
    let tmp9 = guilds;
  } else {
    tmp9 = cResult[2];
  }
  dependencyMap = tmp9;
  const tmpResult = require("initialize");
  const mobileStickerPickerUpsellRestyleEnabled = require("MobileStickerPickerUpsellRestyleExperiment").useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  if (cResult[3] === arg0) {
    if (cResult[4] === stickerPackCategories) {
      if (cResult[5] === mobileStickerPickerUpsellRestyleEnabled) {
        if (cResult[6] === stateFromStores) {
          return cResult[7];
        }
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        return arg0.stickers.length > 0;
      }
    }
    cResult[8] = T;
  } else {
    class T {
      constructor(arg0) {
        return arg0.stickers.length > 0;
      }
    }
  }
  if (stateFromStores != null) {
    class T {
      constructor(arg0) {
        return arg0.stickers.length > 0;
      }
    }
  }
  if (cResult[9] !== undefined) {
    class T {
      constructor(arg0) {
        return arg0.stickers.length > 0;
      }
    }
    if (stateFromStores != null) {
      class T {
        constructor(arg0) {
          return arg0.stickers.length > 0;
        }
      }
    }
    const fn2 = function f(type) {
      let tmp2 = type.type !== StickersTypes.StickerCategoryTypes.GUILD;
      if (!tmp2) {
        let nsfwAllowed;
        if (stateFromStores != null) {
          nsfwAllowed = stateFromStores.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        tmp2 = tmp.nsfwLevel !== GuildNSFWContentLevel.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
        const tmp7 = tmp.nsfwLevel !== GuildNSFWContentLevel.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    };
    cResult[9] = tmp15;
    cResult[10] = fn2;
  } else {
    class T {
      constructor(arg0) {
        return arg0.stickers.length > 0;
      }
    }
  }
  if (cResult[11] === arg0) {
    class T {
      constructor(arg0) {
        return arg0.stickers.length > 0;
      }
    }
  }
  class C {
    constructor(arg0) {
      tmp = closure_3;
      if (closure_3) {
        tmp2 = closure_1;
        tmp3 = closure_0;
        closure_0 = closure_1;
        closure_1 = closure_0;
        tmp4 = closure_0;
        tmp5 = closure_2;
        tmp6 = arg0.type === closure_0(closure_2[7]).StickerCategoryTypes.GUILD;
        if (tmp6) {
          num = 0;
          everyResult = 0 !== arg0.stickers.length;
          if (everyResult) {
            stickers = arg0.stickers;
            everyResult = stickers.every((item) => {
              const stickerSendability = closure_2_0(nsfwAllowed[8]).getStickerSendability(item, closure_0, closure_1);
              return stickerSendability === closure_2_0(nsfwAllowed[8]).StickerSendability.SENDABLE_WITH_PREMIUM;
            });
          }
          tmp6 = everyResult;
        }
        tmp = tmp6;
      }
      if (arg0.type !== closure_0(closure_2[7]).StickerCategoryTypes.FAVORITE) {
        tmp8 = closure_0;
        tmp9 = closure_2;
        if (arg0.type !== closure_0(closure_2[7]).StickerCategoryTypes.RECENT) {
          tmp10 = arg0;
          if (tmp) {
            obj = {};
            tmp11 = obj;
            tmp12 = arg0;
            merged = Object.assign(arg0);
            obj.isNitroLocked = tmp;
            tmp10 = obj;
          }
          return tmp10;
        }
      }
      if (arg0.type === closure_0(closure_2[7]).StickerCategoryTypes.FAVORITE) {
        tmp17 = closure_1;
        tmp18 = closure_2;
        tmp16 = closure_1(closure_2[14]);
      } else {
        tmp14 = closure_1;
        tmp15 = closure_2;
        tmp16 = closure_1(closure_2[15]);
      }
      obj1 = {};
      merged1 = Object.assign(arg0);
      obj1.icon = tmp16;
      if (tmp) {
        obj1.isNitroLocked = tmp;
        tmp20 = obj1;
      } else {
        tmp20 = obj1;
      }
      return tmp20;
    }
  }
  cResult[11] = arg0;
  cResult[12] = mobileStickerPickerUpsellRestyleEnabled;
  cResult[13] = stateFromStores;
  cResult[14] = C;
}) : ((arg0) => {
  _require = arg0;
  const stickerPackCategories = require("StickersHooks").useStickerPackCategories(arg0);
  let obj = require("StickersHooks");
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const guilds = GuildStore.getGuilds();
  let obj2 = require("initialize");
  const mobileStickerPickerUpsellRestyleEnabled = require("MobileStickerPickerUpsellRestyleExperiment").useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  const items1 = [arg0, guilds, stickerPackCategories, mobileStickerPickerUpsellRestyleEnabled, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== closure_0(stateFromStores[7]).StickerCategoryTypes.GUILD;
      if (!tmp2) {
        nsfwAllowed = undefined;
        if (nsfwAllowed != null) {
          nsfwAllowed = nsfwAllowed.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        tmp2 = tmp.nsfwLevel !== constants.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
        const tmp7 = tmp.nsfwLevel !== constants.AGE_RESTRICTED && tmp.nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    });
    return found1.map((type) => {
      let tmp = mobileStickerPickerUpsellRestyleEnabled;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        closure_0 = nsfwAllowed;
        closure_1 = closure_1_0;
        let tmp6 = type.type === closure_0(stateFromStores[7]).StickerCategoryTypes.GUILD;
        if (tmp6) {
          let everyResult = 0 !== type.stickers.length;
          if (everyResult) {
            const stickers = type.stickers;
            everyResult = stickers.every((item) => {
              const stickerSendability = closure_2_0(nsfwAllowed[8]).getStickerSendability(item, closure_0, closure_1);
              return stickerSendability === closure_2_0(nsfwAllowed[8]).StickerSendability.SENDABLE_WITH_PREMIUM;
            });
          }
          tmp6 = everyResult;
        }
        tmp = tmp6;
      }
      if (type.type !== closure_0(stateFromStores[7]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[7]).StickerCategoryTypes.RECENT) {
          let tmp10 = type;
          if (tmp) {
            const obj = {};
            const merged = Object.assign(type);
            obj.isNitroLocked = tmp;
            tmp10 = obj;
          }
          return tmp10;
        }
      }
      if (type.type === closure_0(stateFromStores[7]).StickerCategoryTypes.FAVORITE) {
        let tmp16 = stickerPackCategories(stateFromStores[14]);
      } else {
        tmp16 = stickerPackCategories(stateFromStores[15]);
      }
      const obj2 = {};
      const merged1 = Object.assign(type);
      obj2.icon = tmp16;
      if (tmp) {
        obj2.isNitroLocked = tmp;
        let tmp20 = obj2;
      } else {
        tmp20 = obj2;
      }
      return tmp20;
    });
  }, items1);
});
export const preloadSticker = function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
};
export const dropPreloadedSticker = function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
};
export const openStickerPickerToPackId = function openStickerPickerToPackId(arg0, pack_id) {
  state = useStickerPickerStore.getState();
  state.setPackToScrollTo(pack_id);
  const timerId = setTimeout(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { type: KeyboardTypes.KeyboardTypes.EXPRESSION, context: ExpressionPickerViewType.STICKER };
      current.openCustomKeyboard(obj);
    }
  }, 1);
};
