// Module ID: 9612
// Function ID: 74847
// Name: StandardStickerDetail
// Dependencies: []

// Module 9612 (StandardStickerDetail)
function StandardStickerDetail(chatInputRef) {
  let channel;
  let sticker;
  ({ sticker, channel } = chatInputRef);
  const arg1 = channel;
  const importDefault = chatInputRef.chatInputRef;
  let closure_2 = callback3();
  const pack_id = sticker.pack_id;
  let closure_3 = pack_id;
  const name = sticker.name;
  let obj = arg1(closure_2[22]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => closure_11.getStickerPack(pack_id));
  const items1 = [closure_11];
  let closure_6 = arg1(closure_2[22]).useStateFromStores(items1, () => closure_11.isPremiumPack(pack_id));
  const obj2 = arg1(closure_2[22]);
  const fetchStickerPack = arg1(closure_2[14]).useFetchStickerPack(pack_id);
  const diff = importDefault(closure_2[23])().width - 2 * closure_12;
  let closure_8 = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  const items2 = [channel.guild_id];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    obj.page = DM_CHANNEL;
    obj.section = constants2.STICKER_POPOUT;
    return obj;
  }, items2);
  let closure_9 = memo;
  const items3 = [memo, stateFromStores];
  const effect = importAllResult.useEffect(() => {
    if (null != stateFromStores) {
      let obj = chatInputRef(closure_2[24]);
      obj = { location: memo, type: "Sticker Upsell Sheet", sticker_pack_id: stateFromStores.id };
      obj.track(constants3.OPEN_POPOUT, obj);
    }
  }, items3);
  if (null == stateFromStores) {
    obj = { size: "large" };
    let tmp6 = callback2(diff, obj);
  } else {
    tmp6 = (stateFromStores) => {
      const channel = stateFromStores;
      const intl = channel(description[19]).intl;
      const format = intl.format;
      const t = channel(description[19]).t;
      if (closure_6) {
        let obj = { stickerPackName: stateFromStores.name };
        let formatResult = format(t.auckXz, obj);
      } else {
        obj = { stickerPackName: stateFromStores.name };
        formatResult = format(t.OzB6e3, obj);
      }
      obj = {};
      const items = [callback(channel(description[18]).Text, { children: name }), , , , ];
      const obj2 = { style: description.description, variant: "text-sm/medium", children: formatResult };
      items[1] = callback(channel(description[18]).Text, obj2);
      const obj3 = { containerWidth: diff };
      const stickers = stateFromStores.stickers;
      obj3.stickers = stickers.slice(0, closure_8);
      obj3.rowSize = closure_8;
      items[2] = callback(chatInputRef(description[25]), obj3);
      let tmp5 = null;
      if (closure_6) {
        const obj4 = {};
        const obj5 = { height: chatInputRef(description[13]).space.PX_16 };
        obj4.style = obj5;
        tmp5 = callback(closure_6, obj4);
      }
      items[3] = tmp5;
      let tmp10 = closure_6;
      if (closure_6) {
        const obj6 = { variant: "secondary" };
        const intl2 = channel(description[19]).intl;
        obj6.text = intl2.string(channel(description[19]).t.GPy3Ar);
        obj6.onPress = function onPress() {
          let obj = arg0(closure_2[27]);
          const result = obj.hideStickerDetailActionSheet();
          if (null != arg0) {
            if (closure_6) {
              if (null != callback) {
                const result1 = arg0(closure_2[28]).openStickerPickerToPackId(callback, closure_3);
                const obj3 = arg0(closure_2[28]);
              }
            }
          }
          obj = { analyticsLocation: closure_9, analyticsPopoutType: arg0(closure_2[29]).AnalyticsPopoutType.STICKER_PACK_UPSELL, stickerPack: arg0 };
          callback(closure_2[29])(obj);
        };
        tmp10 = callback(channel(description[26]).Button, obj6);
      }
      items[4] = tmp10;
      obj.children = items;
      return closure_23(closure_22, obj);
    }(stateFromStores);
  }
  return tmp6;
}
function UnavailableStickerDetail(arg0) {
  let channel;
  let renderableSticker;
  ({ renderableSticker, channel } = arg0);
  const arg1 = channel;
  let dependencyMap;
  const tmp = callback3();
  const currentUser = authStore.getCurrentUser();
  let obj = importDefault(dependencyMap[30]);
  const items = [channel.guild_id];
  const result = obj.canUseCustomStickersEverywhere(currentUser);
  const importDefault = importAllResult.useMemo(() => {
    const obj = {};
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    obj.page = DM_CHANNEL;
    obj.section = constants2.STICKER_POPOUT;
    return obj;
  }, items);
  let obj1 = importDefault(dependencyMap[31]);
  let tidaWebformEnabled = obj1.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = arg1(dependencyMap[32]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  let obj2 = arg1(dependencyMap[33]);
  const stickerAssetUrl = obj2.getStickerAssetUrl(renderableSticker);
  dependencyMap = stickerAssetUrl;
  const items1 = [stickerAssetUrl];
  obj = { style: tmp.guildEmojiTopContainer };
  const callback = importAllResult.useCallback(() => {
    if (null != stickerAssetUrl) {
      let obj = lib(stickerAssetUrl[17]);
      obj = { stickerUrl: stickerAssetUrl };
      obj.openLazy(channel(stickerAssetUrl[35])(stickerAssetUrl[34], stickerAssetUrl.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items1);
  const items2 = [callback2(importDefault(dependencyMap[40]), { sticker: renderableSticker, size: 48 }), , ];
  obj = { style: tmp.guildEmojiDescription };
  obj1 = { children: renderableSticker.name };
  const items3 = [callback2(arg1(dependencyMap[18]).Text, obj1), ];
  obj2 = { style: tmp.description, variant: "text-sm/medium" };
  const intl = arg1(dependencyMap[19]).intl;
  if (result) {
    let stringResult = intl.string(tmp11(tmp12[19]).t.vZaScH);
  } else {
    const obj3 = {
      openPremiumSettings() {
          let obj = lib(stickerAssetUrl[17]);
          obj.hideActionSheet();
          let obj1 = lib(stickerAssetUrl[24]);
          obj = { location_page: lib.page, location_section: lib.section };
          obj1.track(constants3.PREMIUM_PROMOTION_OPENED, obj);
          obj = { screen: constants4.PREMIUM, params: obj1 };
          obj1 = { analyticsLocation: lib };
          channel(stickerAssetUrl[39]).openUserSettings(obj);
        }
    };
    stringResult = intl.format(tmp11(tmp12[19]).t.hGWuxU, obj3);
  }
  obj2.children = stringResult;
  items3[1] = callback2(arg1(dependencyMap[46]).TextWithIOSLinkWorkaround, obj2);
  obj.children = items3;
  items2[1] = closure_23(closure_6, obj);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj4 = {};
    const intl2 = arg1(dependencyMap[19]).intl;
    obj4.accessibilityLabel = intl2.string(arg1(dependencyMap[19]).t.PdRCRg);
    obj4.style = tmp.moreMenuIcon;
    obj4.onPress = callback;
    const obj5 = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj4.children = callback2(arg1(dependencyMap[41]).MoreHorizontalIcon, obj5);
    tidaWebformEnabled = callback2(closure_8, obj4);
  }
  items2[2] = tidaWebformEnabled;
  obj.children = items2;
  return closure_23(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, ActivityIndicator: closure_7, Pressable: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[3]);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: closure_13, STICKER_SIZE: closure_14 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ AnalyticsPages: closure_15, AnalyticsSections: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18, UserSettingsSections: closure_19 } = arg1(dependencyMap[8]));
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[9]).ACTION_SHEET_MAX_WIDTH;
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = {};
obj = { padding: 16 };
let obj4 = arg1(dependencyMap[12]);
let num = 0;
if (obj4.isAndroid()) {
  num = 16;
}
obj.paddingBottom = num;
obj.content = obj;
obj.description = { label: null, DARK: "hidden" };
obj.guildEmojiTopContainer = {};
obj1 = { marginTop: importDefault(dependencyMap[13]).space.PX_12 };
obj.buttonContainer = obj1;
obj.guildEmojiDescription = { <string:80590080>: "Group 11", <string:80550400>: 2 };
const tmp5 = arg1(dependencyMap[10]);
obj.divider = { marginLeft: 0, marginTop: importDefault(dependencyMap[13]).space.PX_16, marginBottom: importDefault(dependencyMap[13]).space.PX_16, backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.moreMenuIcon = { "Null": "isArray", "Null": "handleJoinThreadVoice", "Null": "isArray", "Null": "useActionBarPrimaryButton" };
const obj2 = { marginLeft: 0, marginTop: importDefault(dependencyMap[13]).space.PX_16, marginBottom: importDefault(dependencyMap[13]).space.PX_16, backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.favoriteContainer = { paddingTop: importDefault(dependencyMap[13]).space.PX_4 };
obj.starIcon = { <string:1632221346>: "boolean", <string:2722977214>: "string" };
obj4 = { tintColor: importDefault(dependencyMap[13]).colors.ICON_FEEDBACK_WARNING };
obj.starIconSelected = obj4;
const obj3 = { paddingTop: importDefault(dependencyMap[13]).space.PX_4 };
obj.starIconUnselected = { tintColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = obj1.createStyles(obj);
function GuildStickerDetail(sticker) {
  sticker = sticker.sticker;
  const arg1 = sticker;
  const channel = sticker.channel;
  const importDefault = channel;
  let first1;
  let closure_8;
  let closure_9;
  let authStore;
  let closure_11;
  let stickerAssetUrl;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let tmp23;
  let obj1;
  let closure_19;
  let closure_2 = callback3();
  const tmp = callback(importAllResult.useState(null), 2);
  const first = tmp[0];
  let closure_3 = first;
  const callback = tmp[1];
  let obj = arg1(closure_2[22]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(sticker.guild_id));
  const tmp4 = null != stateFromStores;
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(obj1.DISCOVERABLE);
  }
  const tmp7 = callback(stateFromStores.useState(!hasItem), 2);
  first1 = tmp7[0];
  closure_8 = tmp7[1];
  const currentUser = authStore.getCurrentUser();
  obj1 = importDefault(closure_2[30]);
  const result = obj1.canUseCustomStickersEverywhere(currentUser);
  let tidaWebformEnabled = importDefault(closure_2[31]).useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = arg1(closure_2[32]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj3 = importDefault(closure_2[31]);
  ({ isFavorite: closure_9, handleFavorite: closure_10 } = function useStickerFavorite(id) {
    const sticker = id;
    const tmp = callback3();
    const channel = tmp;
    let obj = sticker(closure_2[14]);
    const favoriteStickerIds = obj.useFavoriteStickerIds();
    const hasItem = favoriteStickerIds.includes(id);
    closure_2 = hasItem;
    const items = [tmp];
    const callback = stateFromStores.useCallback((arg0) => {
      let obj = {};
      const merged = Object.assign(tmp.starIcon);
      if (arg0) {
        const merged1 = Object.assign(tmp.starIconSelected);
        let tmp5 = obj;
      } else {
        const merged2 = Object.assign(tmp.starIconUnselected);
        tmp5 = obj;
      }
      if (arg0) {
        let StarOutlineIcon = tmp9(tmp10[15]).StarIcon;
      } else {
        StarOutlineIcon = tmp9(tmp10[16]).StarOutlineIcon;
      }
      obj = { style: tmp5 };
      return closure_21(StarOutlineIcon, obj);
    }, items);
    const first = callback;
    const items1 = [hasItem, id, callback];
    obj = {
      isFavorite: hasItem,
      handleFavorite: stateFromStores.useCallback(() => {
        function content() {
          const obj = { style: {}, variant: "text-md/bold" };
          const intl = callback(closure_2[19]).intl;
          const string = intl.string;
          const t = callback(closure_2[19]).t;
          if (closure_2) {
            let stringResult = string(t.in1rga);
          } else {
            stringResult = string(t.mE2e8A);
          }
          obj.children = stringResult;
          return closure_21(callback(closure_2[18]).Text, obj);
        }
        let obj = tmp(hasItem[17]);
        obj.hideActionSheet();
        const obj2 = arg0(hasItem[20]);
        if (hasItem) {
          obj2.unfavoriteSticker(arg0);
          obj = {
            key: "STICKER_UNFAVORITED",
            icon() {
                return callback2(false);
              },
            content
          };
          tmp(tmp2[21]).open(obj);
          const obj5 = tmp(tmp2[21]);
        } else {
          obj2.favoriteSticker(arg0);
          obj = {
            key: "STICKER_FAVORITED",
            icon() {
                return callback2(true);
              },
            content
          };
          tmp(tmp2[21]).open(obj);
          const obj3 = tmp(tmp2[21]);
        }
      }, items1),
      renderStarIcon: callback
    };
    return obj;
  }(sticker.id));
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  closure_11 = tidaWebformEnabled;
  const tmp12 = function useStickerFavorite(id) {
    const sticker = id;
    const tmp = callback3();
    const channel = tmp;
    let obj = sticker(closure_2[14]);
    const favoriteStickerIds = obj.useFavoriteStickerIds();
    const hasItem = favoriteStickerIds.includes(id);
    closure_2 = hasItem;
    const items = [tmp];
    const callback = stateFromStores.useCallback((arg0) => {
      let obj = {};
      const merged = Object.assign(tmp.starIcon);
      if (arg0) {
        const merged1 = Object.assign(tmp.starIconSelected);
        let tmp5 = obj;
      } else {
        const merged2 = Object.assign(tmp.starIconUnselected);
        tmp5 = obj;
      }
      if (arg0) {
        let StarOutlineIcon = tmp9(tmp10[15]).StarIcon;
      } else {
        StarOutlineIcon = tmp9(tmp10[16]).StarOutlineIcon;
      }
      obj = { style: tmp5 };
      return closure_21(StarOutlineIcon, obj);
    }, items);
    const first = callback;
    const items1 = [hasItem, id, callback];
    obj = {
      isFavorite: hasItem,
      handleFavorite: stateFromStores.useCallback(() => {
        function content() {
          const obj = { style: {}, variant: "text-md/bold" };
          const intl = callback(closure_2[19]).intl;
          const string = intl.string;
          const t = callback(closure_2[19]).t;
          if (closure_2) {
            let stringResult = string(t.in1rga);
          } else {
            stringResult = string(t.mE2e8A);
          }
          obj.children = stringResult;
          return closure_21(callback(closure_2[18]).Text, obj);
        }
        let obj = tmp(hasItem[17]);
        obj.hideActionSheet();
        const obj2 = arg0(hasItem[20]);
        if (hasItem) {
          obj2.unfavoriteSticker(arg0);
          obj = {
            key: "STICKER_UNFAVORITED",
            icon() {
                return callback2(false);
              },
            content
          };
          tmp(tmp2[21]).open(obj);
          const obj5 = tmp(tmp2[21]);
        } else {
          obj2.favoriteSticker(arg0);
          obj = {
            key: "STICKER_FAVORITED",
            icon() {
                return callback2(true);
              },
            content
          };
          tmp(tmp2[21]).open(obj);
          const obj3 = tmp(tmp2[21]);
        }
      }, items1),
      renderStarIcon: callback
    };
    return obj;
  }(sticker.id);
  stickerAssetUrl = arg1(closure_2[33]).getStickerAssetUrl(sticker);
  const items1 = [stickerAssetUrl];
  closure_13 = importAllResult.useCallback(() => {
    if (null != stickerAssetUrl) {
      let obj = channel(closure_2[17]);
      obj = { stickerUrl: stickerAssetUrl };
      obj.openLazy(sticker(closure_2[35])(closure_2[34], closure_2.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items1);
  const items2 = [channel.guild_id];
  closure_14 = importAllResult.useMemo(() => {
    const obj = {};
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    obj.page = DM_CHANNEL;
    obj.section = constants2.STICKER_POPOUT;
    return obj;
  }, items2);
  obj = { guild_id: channel.getGuildId() };
  const obj4 = arg1(closure_2[33]);
  const merged = Object.assign(arg1(closure_2[36]).collectChannelAnalyticsMetadata(channel));
  const items3 = [sticker.id, first1];
  const effect = importAllResult.useEffect(() => {
    function _fetchDiscoverableGuild() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetchDiscoverableGuild = obj;
      return obj(...arguments);
    }
    if (!first1) {
      function fetchDiscoverableGuild() {
        return _fetchDiscoverableGuild(...arguments);
      }();
    }
  }, items3);
  const tmp16 = sticker.guild_id === channel.getGuildId();
  closure_16 = false;
  const intl = arg1(closure_2[19]).intl;
  if (result) {
    const string2 = intl.string;
    let fZ0DiG = tmp18(tmp19[19]).t;
    if (!tmp4) {
      if (tmp17) {
        let string2Result = string2(fZ0DiG.yHmoR9);
      } else {
        string2Result = string2(fZ0DiG.vZaScH);
      }
      closure_15 = string2Result;
    }
    if (tmp16) {
      fZ0DiG = fZ0DiG.fZ0DiG;
      let string2Result1 = string2(fZ0DiG);
    } else {
      string2Result1 = string2(fZ0DiG.1f6D9m);
    }
  } else {
    if (tmp4) {
      const string = intl.string;
      const t = tmp18(tmp19[19]).t;
      if (tmp16) {
        closure_15 = string(t.jNphpt);
        closure_16 = true;
        let str = "Custom Sticker Popout (Upsell)";
        let flag = true;
      } else {
        closure_15 = string(t.lyD5ZW);
        closure_16 = true;
        str = "Custom Sticker Popout (Upsell)";
        flag = true;
      }
    } else if (tmp17) {
      closure_15 = intl.string(tmp18(tmp19[19]).t.IuXYch);
      closure_16 = true;
      str = "Custom Sticker Popout (Upsell)";
      flag = true;
    } else {
      obj = {
        openPremiumSettings() {
              let obj = channel(closure_2[17]);
              obj.hideActionSheet();
              let obj1 = channel(closure_2[24]);
              obj = { location_page: closure_14.page, location_section: closure_14.section };
              obj1.track(tmp23.PREMIUM_PROMOTION_OPENED, obj);
              obj = { screen: ref.PREMIUM, params: obj1 };
              obj1 = { analyticsLocation: closure_14 };
              sticker(closure_2[39]).openUserSettings(obj);
            }
      };
      closure_15 = intl.format(tmp18(tmp19[19]).t.hGWuxU, obj);
      str = "Custom Sticker Popout (Soft Upsell)";
      flag = false;
    }
    tmp23 = !flag;
    if (!flag) {
      tmp23 = !tmp4;
    }
    if (tmp23) {
      tmp23 = tmp17;
    }
    obj1 = { popoutAnalyticsConfig: importAllResult.useRef(obj).current, popoutType: str };
    closure_19 = importAllResult.useRef(obj1);
    const effect1 = importAllResult.useEffect(() => {
      closure_19.current = obj1;
    });
    const items4 = [first1];
    const effect2 = importAllResult.useEffect(() => {
      const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
      if (first1) {
        let obj = channel(closure_2[24]);
        obj = { type: tmp };
        const merged = Object.assign(popoutAnalyticsConfig);
        obj.track(tmp23.OPEN_POPOUT, obj);
      }
    }, items4);
    let tmp29 = null;
    if (first1) {
      tmp29 = function upsellContent() {
        let obj = {};
        obj = { style: closure_2.guildEmojiTopContainer };
        obj = { sticker, size: 48 };
        const items = [callback(channel(closure_2[40]), obj), , ];
        const obj1 = { style: closure_2.guildEmojiDescription };
        const items1 = [callback(sticker(closure_2[18]).Text, { children: sticker.name }), callback(sticker(closure_2[18]).Text, { style: closure_2.description, variant: "text-sm/medium", children: closure_15 })];
        obj1.children = items1;
        items[1] = callback2(tmp4, obj1);
        let tmp4 = tidaWebformEnabled;
        if (tidaWebformEnabled) {
          tmp4 = null != stickerAssetUrl;
        }
        if (tmp4) {
          const obj4 = {};
          const intl = sticker(closure_2[19]).intl;
          obj4.accessibilityLabel = intl.string(sticker(closure_2[19]).t.PdRCRg);
          obj4.style = closure_2.moreMenuIcon;
          obj4.onPress = closure_13;
          const obj5 = { color: channel(closure_2[13]).colors.INTERACTIVE_TEXT_DEFAULT };
          obj4.children = callback(sticker(closure_2[41]).MoreHorizontalIcon, obj5);
          tmp4 = callback(closure_8, obj4);
        }
        items[2] = tmp4;
        obj.children = items;
        const items2 = [callback2(tmp4, obj), , , , ];
        let tmp15 = closure_16;
        if (closure_16) {
          const obj6 = { style: closure_2.buttonContainer };
          const obj7 = { variant: "experimental_premium-primary" };
          const obj8 = { color: "white" };
          obj7.icon = callback(sticker(closure_2[42]).NitroWheelIcon, obj8);
          const intl2 = sticker(closure_2[19]).intl;
          obj7.text = intl2.string(sticker(closure_2[19]).t.gl/XHJ);
          obj7.onPress = function onPress() {
            return callback(closure_2[43])(closure_14);
          };
          const items3 = [callback(sticker(closure_2[26]).Button, obj7), ];
          const obj9 = {};
          const obj10 = { height: channel(closure_2[13]).space.PX_16 };
          obj9.style = obj10;
          items3[1] = callback(tmp4, obj9);
          obj6.children = items3;
          tmp15 = callback2(tmp4, obj6);
        }
        items2[1] = tmp15;
        let tmp26 = tmp23;
        if (tmp23) {
          const obj11 = { style: closure_2.buttonContainer };
          const obj12 = {};
          const intl3 = sticker(closure_2[19]).intl;
          obj12.text = intl3.string(sticker(closure_2[19]).t.riu2R5);
          obj12.onPress = function onPress() {
            if (null != id) {
              function handleJoinServer(id) {
                const obj = callback(closure_2[37]);
                callback(closure_2[37]).joinGuild(id).then(() => {
                  const result = callback(closure_2[37]).transitionToGuildSync(arg0);
                });
              }(id.id);
            }
          };
          const items4 = [callback(sticker(closure_2[26]).Button, obj12), ];
          const obj13 = {};
          const obj14 = { height: channel(closure_2[13]).space.PX_16 };
          obj13.style = obj14;
          items4[1] = callback(tmp4, obj13);
          obj11.children = items4;
          tmp26 = callback2(tmp4, obj11);
        }
        items2[2] = tmp26;
        let tmp36 = null != stateFromStores;
        if (!tmp36) {
          tmp36 = null != first;
        }
        if (!tmp36) {
          items2[3] = tmp36;
          let tmp55Result = tidaWebformEnabled;
          if (tidaWebformEnabled) {
            tmp55Result = tmp4;
          }
          if (tmp55Result) {
            const obj15 = {};
            const obj16 = { style: closure_2.divider };
            const items5 = [callback(sticker(closure_2[44]).FormDivider, obj16), ];
            const obj17 = { style: closure_2.favoriteContainer };
            const obj18 = {};
            const intl5 = sticker(closure_2[19]).intl;
            const string2 = intl5.string;
            const t = sticker(closure_2[19]).t;
            if (closure_9) {
              let string2Result = string2(t.XhzKyF);
            } else {
              string2Result = string2(t.kWmiPW);
            }
            obj18.text = string2Result;
            let str3 = "primary";
            if (closure_9) {
              str3 = "tertiary";
            }
            obj18.variant = str3;
            obj18.size = "md";
            obj18.onPress = closure_10;
            obj17.children = callback(sticker(closure_2[26]).Button, obj18);
            items5[1] = callback(tmp4, obj17);
            obj15.children = items5;
            tmp55Result = callback2(closure_22, obj15);
            const tmp55 = callback2;
            const tmp56 = closure_22;
            const tmp61 = callback;
            const tmp62 = tmp4;
            const tmp63 = callback;
          }
          items2[4] = tmp55Result;
          obj.children = items2;
          return tmp(closure_22, obj);
        } else {
          const obj19 = {};
          const obj20 = { style: closure_2.divider };
          const items6 = [callback(sticker(closure_2[44]).FormDivider, obj20), ];
          let obj21 = { guild: null != first ? first : stateFromStores, showingJoinGuildCta: tmp23, hasJoinedGuild: tmp4 };
          const intl4 = sticker(closure_2[19]).intl;
          const string = intl4.string;
          let kx6pEG = sticker(closure_2[19]).t;
          if (tmp4) {
            kx6pEG = kx6pEG.kx6pEG;
            let stringResult = string(kx6pEG);
          } else {
            stringResult = string(kx6pEG.pDE7Gb);
          }
          obj21.title = stringResult;
          obj21 = callback(channel(closure_2[45]), obj21);
          items6[1] = obj21;
          obj19.children = items6;
          callback2(closure_22, obj19);
          const tmp38 = callback2;
          const tmp39 = closure_22;
          const tmp44 = callback;
          const tmp46 = channel(closure_2[45]);
        }
      }();
    }
    return tmp29;
  }
}
const obj5 = { tintColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
const memoResult = importAllResult.memo(function StickerDetailActionSheet(chatInputRef) {
  let channel;
  let renderableSticker;
  ({ renderableSticker, channel } = chatInputRef);
  let obj = arg1(dependencyMap[14]);
  const tmp2 = callback(obj.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp2[0];
  let tmp4 = callback2(closure_7, { size: "large" });
  if (null == first) {
    if (tmp2[1]) {
      obj = { renderableSticker, channel };
      let tmp5 = callback2(UnavailableStickerDetail, obj);
    }
    obj = { startExpanded: true };
    let obj1 = { style: tmp.content, children: tmp5 };
    obj.children = callback2(closure_6, obj1);
    return callback2(arg1(dependencyMap[47]).BottomSheet, obj);
  }
  tmp5 = tmp4;
  if (null != first) {
    if (obj8.isStandardSticker(first)) {
      const obj2 = { sticker: first, channel, chatInputRef: chatInputRef.chatInputRef };
      tmp4 = callback2(StandardStickerDetail, obj2);
    } else {
      obj1 = arg1(dependencyMap[33]);
      if (obj1.isGuildSticker(first)) {
        const obj3 = { sticker: first, channel };
        tmp4 = callback2(GuildStickerDetail, obj3);
      }
    }
    tmp5 = tmp4;
    const obj8 = arg1(dependencyMap[33]);
  }
});
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default memoResult;
