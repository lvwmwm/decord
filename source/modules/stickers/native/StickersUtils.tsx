// Module ID: 9595
// Function ID: 74796
// Name: useStickerCategories
// Dependencies: []
// Exports: dropPreloadedSticker, openStickerPickerToPackId, preloadSticker, useStickerCategories

// Module 9595 (useStickerCategories)
let closure_3 = importAll(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const useStickerPickerStore = arg1(dependencyMap[4]).useStickerPickerStore;
const GuildNSFWContentLevel = arg1(dependencyMap[5]).GuildNSFWContentLevel;
const ExpressionPickerViewType = arg1(dependencyMap[6]).ExpressionPickerViewType;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/stickers/native/StickersUtils.tsx");

export const useStickerCategories = function useStickerCategories(channel) {
  const stickerPackCategories = arg1(dependencyMap[7]).useStickerPackCategories(channel);
  const arg1 = stickerPackCategories;
  const currentUser = currentUser.getCurrentUser();
  const importDefault = currentUser;
  const guilds = guilds.getGuilds();
  const dependencyMap = guilds;
  const items = [guilds, stickerPackCategories, currentUser];
  return React.useMemo(() => {
    const found = stickerPackCategories.filter((stickers) => stickers.stickers.length > 0);
    const found1 = found.filter((type) => {
      let tmp2 = type.type !== callback(closure_2[8]).StickerCategoryTypes.GUILD;
      if (!tmp2) {
        let nsfwAllowed = null != lib;
        if (nsfwAllowed) {
          nsfwAllowed = lib.nsfwAllowed;
        }
        tmp2 = nsfwAllowed;
      }
      if (!tmp2) {
        tmp2 = null == tmp;
      }
      if (!tmp2) {
        let tmp8 = tmp.nsfwLevel !== constants.AGE_RESTRICTED;
        if (tmp8) {
          tmp8 = tmp.nsfwLevel !== constants.EXPLICIT;
        }
        tmp2 = tmp8;
      }
      return tmp2;
    });
    return found1.map((type) => {
      if (type.type !== callback(closure_2[8]).StickerCategoryTypes.FAVORITE) {
        if (type.type !== callback(closure_2[8]).StickerCategoryTypes.RECENT) {
          return type;
        }
      }
      if (type.type === callback(closure_2[8]).StickerCategoryTypes.FAVORITE) {
        let tmp5 = lib(closure_2[9]);
      } else {
        tmp5 = lib(closure_2[10]);
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
export const openStickerPickerToPackId = function openStickerPickerToPackId(closure_1, closure_3) {
  closure_3 = closure_1;
  const state = useStickerPickerStore.getState();
  state.setPackToScrollTo(closure_3);
  const timerId = setTimeout(() => {
    const current = arg0.current;
    if (null != current) {
      const obj = { type: arg0(closure_2[11]).KeyboardTypes.EXPRESSION, context: constants.STICKER };
      current.openCustomKeyboard(obj);
    }
  }, 1);
};
