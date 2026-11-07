// Module ID: 10387
// Function ID: 10388
// Name: stickers/StickersUtils
// Dependencies: [19, 17, 5011, 1385, 10388, 1072, 1228, 10385, 504, 6616, 10389, 10390, 10391, 1625, 2]
// Exports: dropPreloadedSticker, openStickerPickerToPackId, preloadSticker, useStickerCategories

// Module 10387 (stickers/StickersUtils)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import StickerPickerStore from "StickerPickerStore" /* 10388 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;
import UserStore from "UserStore" /* 1385 */;
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
  const items1 = [channel, guilds, stickerPackCategories, stateFromStores];
  return guilds.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== channel(stateFromStores[9]).StickerCategoryTypes.GUILD;
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
      let tmp12;
      let tmp9;
      const obj = closure_0(stateFromStores[10]);
      const result = obj.isStickerCategoryNitroLocked(type, nsfwAllowed, closure_1_0);
      if (type.type !== closure_0(stateFromStores[9]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== closure_0(stateFromStores[9]).StickerCategoryTypes.RECENT) {
          let tmp4 = type;
          if (result) {
            const obj2 = { isNitroLocked: result };
            const merged = Object.assign(type);
            tmp4 = obj2;
          }
          return tmp4;
        }
      }
      if (type.type === closure_0(stateFromStores[9]).StickerCategoryTypes.FAVORITE) {
        tmp9 = stickerPackCategories(tmp2[11]);
      } else {
        tmp9 = stickerPackCategories(tmp2[12]);
      }
      const obj3 = { icon: tmp9 };
      const merged1 = Object.assign(type);
      if (result) {
        obj3.isNitroLocked = result;
        tmp12 = obj3;
      } else {
        tmp12 = obj3;
      }
      return tmp12;
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
