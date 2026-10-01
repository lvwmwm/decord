// Module ID: 9850
// Function ID: 9851
// Name: stickers/StickersUtils
// Dependencies: [19, 17, 2067, 1372, 9851, 1074, 1218, 9848, 504, 8622, 5581, 9852, 9853, 9854, 1611, 2]
// Exports: dropPreloadedSticker, openStickerPickerToPackId, preloadSticker, useStickerCategories

// Module 9850 (stickers/StickersUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import StickerPickerStore from "StickerPickerStore" /* 9851 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, nsfwAllowed;

const NativeModules = react_native.NativeModules;
const useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  let currentUser;
  let stateFromStores;
  _require = channel;
  let obj = require("StickersHooks");
  const stickerPackCategories = obj.useStickerPackCategories(channel);
  let obj2 = require("get initialized");
  const items = [UserStore];
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const guilds = GuildStore.getGuilds();
  let obj3 = require("MobileStickerPickerUpsellRestyleExperiment");
  const mobileStickerPickerUpsellRestyleEnabled = obj3.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  const items1 = [channel, guilds, stickerPackCategories, mobileStickerPickerUpsellRestyleEnabled, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== channel(stateFromStores[10]).StickerCategoryTypes.GUILD;
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
        tmp2 = guilds[type.id].nsfwLevel !== constants.AGE_RESTRICTED && guilds[type.id].nsfwLevel !== tmp6.EXPLICIT;
      }
      return tmp2;
    });
    return found1.map((type) => {
      let tmp14;
      let tmp18;
      let result = mobileStickerPickerUpsellRestyleEnabled;
      if (result) {
        const obj = closure_0(stateFromStores[11]);
        result = obj.isStickerCategoryNitroLocked(type, nsfwAllowed, closure_1_0);
      }
      if (type.type !== closure_0(stateFromStores[10]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[10]).StickerCategoryTypes.RECENT) {
          let tmp8 = type;
          if (result) {
            const obj2 = { isNitroLocked: result };
            const merged = Object.assign(type);
            tmp8 = obj2;
          }
          return tmp8;
        }
      }
      if (type.type === closure_0(stateFromStores[10]).StickerCategoryTypes.FAVORITE) {
        tmp14 = stickerPackCategories(stateFromStores[12]);
      } else {
        tmp14 = stickerPackCategories(stateFromStores[13]);
      }
      const obj3 = { icon: tmp14 };
      const merged1 = Object.assign(type);
      if (result) {
        obj3.isNitroLocked = result;
        tmp18 = obj3;
      } else {
        tmp18 = obj3;
      }
      return tmp18;
    });
  }, items1);
};
export const preloadSticker = function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
};
export const dropPreloadedSticker = function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
};
export const openStickerPickerToPackId = function openStickerPickerToPackId(arg0, pack_id) {
  const ref = arg0;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(pack_id);
  const timerId = setTimeout(() => {
    const current = ref.current;
    if (current != null) {
      const openCustomKeyboard = current.openCustomKeyboard;
      const obj = { type: KeyboardTypes.KeyboardTypes.EXPRESSION, context: ExpressionPickerViewType.STICKER };
      openCustomKeyboard(obj);
    }
  }, 1);
};
