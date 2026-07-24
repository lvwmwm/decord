// Module ID: 9638
// Function ID: 75048
// Name: useStickerCategories
// Dependencies: [31, 27, 1838, 1849, 9639, 653, 1314, 9636, 4799, 9640, 9641, 1555, 2]
// Exports: dropPreloadedSticker, openStickerPickerToPackId, preloadSticker, useStickerCategories

// Module 9638 (useStickerCategories)
import result from "result";
import { NativeModules } from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useStickerPickerStore } from "useStickerPickerStore";
import { GuildNSFWContentLevel } from "ME";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  stickerPackCategories = stickerPackCategories(guilds[7]).useStickerPackCategories(channel);
  currentUser = currentUser.getCurrentUser();
  guilds = guilds.getGuilds();
  const items = [guilds, stickerPackCategories, currentUser];
  return React.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== stickerPackCategories(guilds[8]).StickerCategoryTypes.GUILD;
      if (!tmp2) {
        let nsfwAllowed = null != outer1_1;
        if (nsfwAllowed) {
          nsfwAllowed = outer1_1.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        let tmp8 = tmp.nsfwLevel !== outer2_8.AGE_RESTRICTED;
        if (tmp8) {
          tmp8 = tmp.nsfwLevel !== outer2_8.EXPLICIT;
        }
        tmp2 = tmp8;
      }
      return tmp2;
    });
    return found1.map((type) => {
      if (type.type !== stickerPackCategories(guilds[8]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== stickerPackCategories(guilds[8]).StickerCategoryTypes.RECENT) {
          return type;
        }
      }
      if (type.type === stickerPackCategories(guilds[8]).StickerCategoryTypes.FAVORITE) {
        let tmp5 = currentUser(guilds[9]);
      } else {
        tmp5 = currentUser(guilds[10]);
      }
      const obj = {};
      const merged = Object.assign(type);
      obj["icon"] = tmp5;
      return obj;
    });
  }, items);
};
export const preloadSticker = function preloadSticker(hash) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.preload(hash.hash, hash.url, hash.width, hash.height, hash.frames, hash.callback);
};
export const dropPreloadedSticker = function dropPreloadedSticker(arg0) {
  const NativeLottieUtils = NativeModules.NativeLottieUtils;
  NativeLottieUtils.dropPreload(arg0);
};
export const openStickerPickerToPackId = function openStickerPickerToPackId(outer1_1, outer1_3) {
  let closure_0 = outer1_1;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(outer1_3);
  const timerId = setTimeout(() => {
    const current = outer1_1.current;
    if (null != current) {
      const obj = { type: outer1_1(outer1_2[11]).KeyboardTypes.EXPRESSION, context: outer1_9.STICKER };
      current.openCustomKeyboard(obj);
    }
  }, 1);
};
