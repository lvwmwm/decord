// Module ID: 10268
// Function ID: 10269
// Name: stickers/StickersUtils
// Dependencies: [19, 17, 4885, 1383, 10269, 1072, 1228, 10266, 504, 10046, 6561, 10270, 10271, 10272, 1623, 2]
// Exports: dropPreloadedSticker, openStickerPickerToPackId, preloadSticker, useStickerCategories

// Module 10268 (stickers/StickersUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import KeyboardTypes from "KeyboardTypes" /* 1623 */;
import StickerPickerStore from "StickerPickerStore" /* 10269 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, nsfwAllowed;

const NativeModules = react_native.NativeModules;
const useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let result = size.fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export function useStickerCategories(channel) {
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
}
export function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
}
export function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
}
export function openStickerPickerToPackId(arg0, pack_id) {
  const ref = arg0;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(pack_id);
  const timerId = setTimeout(() => {
    let obj2;
    const current = ref.current;
    if (current != null) {
      const openCustomKeyboard = current.openCustomKeyboard;
      const obj = { type: KeyboardTypes.KeyboardTypes.EXPRESSION, context: obj2 };
      obj2 = { type: ExpressionPickerViewType.STICKER };
      openCustomKeyboard(obj);
    }
  }, 1);
}
