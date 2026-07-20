// Module ID: 14802
// Function ID: 111608
// Name: IconOrPreview
// Dependencies: []

// Module 14802 (IconOrPreview)
let HAPPENING_NOW_CONTENT_HEIGHT;
let PixelRatio;
function IconOrPreview(arg0) {
  let activity;
  let b;
  let g;
  let game;
  let r;
  let stream;
  let userId;
  ({ activity, stream } = arg0);
  ({ userId, game } = arg0);
  const tmp = callback3();
  const arg1 = tmp;
  const tmp2 = function useActivityIcon(arg0) {
    let activity;
    let game;
    let stream;
    let userId;
    ({ userId, activity, game, stream } = arg0);
    let guildId;
    const tmp = rgbToHexResult(hexWithOpacityResult[39]);
    if (null != stream) {
      guildId = stream.guildId;
    }
    let channelId;
    if (null != stream) {
      channelId = stream.channelId;
    }
    let ownerId;
    if (null != stream) {
      ownerId = stream.ownerId;
    }
    const previewUrl = tmp(guildId, channelId, ownerId).previewUrl;
    let assetImage;
    if (null != previewUrl) {
      assetImage = previewUrl;
    }
    let tmp6 = null == assetImage;
    if (tmp6) {
      let large_image;
      if (null != activity) {
        const assets = activity.assets;
        if (null != assets) {
          large_image = assets.large_image;
        }
      }
      tmp6 = null != large_image;
    }
    if (tmp6) {
      let obj = tmp(hexWithOpacityResult[40]);
      let application_id;
      if (null != activity) {
        application_id = activity.application_id;
      }
      let large_image1;
      if (null != activity) {
        large_image1 = activity.assets.large_image;
      }
      const items = [closure_14, closure_14];
      assetImage = obj.getAssetImage(application_id, large_image1, items);
    }
    if (null == assetImage) {
      let iconURL;
      if (null != game) {
        iconURL = game.getIconURL(closure_14);
      }
      assetImage = iconURL;
    }
    let tmp16 = null == assetImage;
    if (tmp16) {
      let small_image;
      if (null != activity) {
        const assets2 = activity.assets;
        if (null != assets2) {
          small_image = assets2.small_image;
        }
      }
      tmp16 = null != small_image;
    }
    if (tmp16) {
      let application_id1;
      if (null != activity) {
        application_id1 = activity.application_id;
      }
      let small_image1;
      if (null != activity) {
        small_image1 = activity.assets.small_image;
      }
      const items1 = [closure_14, closure_14];
      assetImage = tmp(hexWithOpacityResult[40]).getAssetImage(application_id1, small_image1, items1);
      const obj2 = tmp(hexWithOpacityResult[40]);
    }
    if (null != assetImage) {
      const memoizedImageSourceResult = tmp(hexWithOpacityResult[42]).memoizedImageSource(assetImage);
      const obj3 = tmp(hexWithOpacityResult[42]);
      obj = { source: memoizedImageSourceResult, accentColor: tmp(hexWithOpacityResult[42]).useDominantRGBFromImage(assetImage, memoizedImageSourceResult) };
      return obj;
    } else {
      let type;
      if (null != activity) {
        type = activity.type;
      }
      if (type === constants.PLAYING) {
        userId = userId.slice(-1);
        let tmp28 = closure_15[userId.charCodeAt(userId, 0) % closure_15.length];
      } else {
        tmp28 = rgbToHexResult(hexWithOpacityResult[41]);
      }
    }
  }({ userId, activity, game, stream });
  ({ r, g, b } = tmp2.accentColor);
  let obj = arg1(dependencyMap[34]);
  const rgbToHexResult = obj.rgbToHex(r, g, b);
  const importDefault = rgbToHexResult;
  let obj1 = arg1(dependencyMap[34]);
  const hexWithOpacityResult = obj1.hexWithOpacity(rgbToHexResult, 0.2);
  const dependencyMap = hexWithOpacityResult;
  const items = [rgbToHexResult, tmp.cardImageAssetContainer];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.cardImageAssetContainer, { shadowColor: rgbToHexResult }];
    return items;
  }, items);
  const items1 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
  if (null != stream) {
    obj = { style: memo };
    obj = { stream };
    obj1 = {};
    ({ cardImageStreamLive: obj8.style, stageStreamLiveText: obj8.textStyle } = tmp);
    obj1.allowFontScaling = false;
    obj.children = callback(arg1(dependencyMap[24]).LiveTag, obj1);
    obj.style = tmp.cardImageStreamPreview;
    const intl5 = arg1(dependencyMap[33]).intl;
    obj.ctaText = intl5.string(arg1(dependencyMap[33]).t.7Xq/nV);
    obj.disabled = true;
    obj.children = callback(importDefault(dependencyMap[35]), obj);
    return callback(closure_4, obj);
  } else {
    if (importDefault(dependencyMap[26])(activity)) {
      const intl4 = arg1(dependencyMap[33]).intl;
      let stringResult = intl4.string(arg1(dependencyMap[33]).t.rmnkz4);
    } else {
      let type;
      if (null != activity) {
        type = activity.type;
      }
      if (type === constants.LISTENING) {
        const intl3 = arg1(dependencyMap[33]).intl;
        stringResult = intl3.string(arg1(dependencyMap[33]).t.kUEnxN);
      } else if (importDefault(dependencyMap[29])(activity)) {
        const intl2 = arg1(dependencyMap[33]).intl;
        stringResult = intl2.string(arg1(dependencyMap[33]).t.T0uYK9);
      } else {
        let type1;
        if (null != activity) {
          type1 = activity.type;
        }
        if (type1 !== constants.CUSTOM_STATUS) {
          const intl = arg1(dependencyMap[33]).intl;
          stringResult = intl.string(arg1(dependencyMap[33]).t.2TbM/G);
        }
      }
    }
    const obj2 = { style: memo, accessibilityLabel: stringResult };
    const obj3 = { style: tmp6 };
    const obj4 = { style: tmp.cardImageAsset, source: tmp2.source };
    obj3.children = callback(importDefault(dependencyMap[36]), obj4);
    obj2.children = callback(closure_4, obj3);
    return callback(closure_4, obj2);
  }
}
function StageStreamAvatars(stage) {
  let audienceCount;
  let audienceFriends;
  stage = stage.stage;
  let obj = arg1(dependencyMap[37]);
  const liveStageData = obj.useLiveStageData(stage);
  obj = { style: callback3().avatarStackContainer };
  ({ audienceCount, audienceFriends } = liveStageData);
  obj = {};
  const items = [stage.user];
  HermesBuiltin.arraySpread(audienceFriends, 1);
  obj.users = items;
  obj.guildId = stage.guild_id;
  obj.userCount = audienceCount + 1;
  obj.isStage = true;
  obj.avatarSize = arg1(dependencyMap[24]).AvatarSizes.SIZE_16;
  obj.children = callback(arg1(dependencyMap[38]).HappeningNowAvatarStack, obj);
  return callback(closure_4, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ PixelRatio, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7, STATUS_CUTOUT_SMALL: closure_8 } = tmp3);
const tmp2 = arg1(dependencyMap[1]);
({ ActivityTypes: closure_9, AnalyticEvents: closure_10 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[7]));
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
const items = [importDefault(dependencyMap[8]), importDefault(dependencyMap[9])];
let obj1 = arg1(dependencyMap[10]);
let obj = { content: { "Bool(false)": "Lightbox Frame", "Bool(false)": "EdgeHTML" } };
obj = { "Null": true, "Null": true, "Null": true, -9223372036854775808: true, 0: true, -9223372036854775808: true, backgroundColor: importDefault(dependencyMap[11]).colors.STAGE_CARD_PILL_BG, borderRadius: importDefault(dependencyMap[11]).radii.xl };
obj.avatarStackContainer = obj;
obj.cardAvatar = { marginBottom: 2 };
obj.cardImage = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12, position: "relative" };
obj.cardImageStream = { height: tmp3.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, position: "relative" };
obj1 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[11]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
obj.cardImageAsset = obj1;
const obj2 = { "Bool(false)": "2026-02-activity-privacy-matching", "Bool(false)": "user", "Bool(false)": "Global Overrides", "Bool(false)": false, "Bool(false)": null, "Bool(false)": "heading-lg/semibold", "Bool(false)": "No results found", backgroundColor: importDefault(dependencyMap[11]).colors.CARD_SECONDARY_BG, borderRadius: importDefault(dependencyMap[11]).radii.sm, shadowOffset: { aze: false, azj: true } };
obj.cardImageAssetContainer = obj2;
const tmp5 = arg1(dependencyMap[7]);
obj.cardImageAssetBackground = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[11]).radii.sm };
const obj3 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[11]).radii.sm };
obj.cardImageStreamPreview = { borderRadius: importDefault(dependencyMap[11]).radii.sm, overflow: "hidden" };
obj.cardImageStreamLive = { TypeError: "isArray", body: "k", guild: "useCallback" };
const obj5 = { "Null": "center", "Null": null, fontFamily: arg1(dependencyMap[6]).Fonts.PRIMARY_BOLD };
obj.stageStreamLiveText = obj5;
obj.stagePreviewWrapper = {};
let closure_16 = obj1.createStyles(obj);
const obj4 = { borderRadius: importDefault(dependencyMap[11]).radii.sm, overflow: "hidden" };
const memoResult = importAllResult.memo((userId) => {
  let fullwidth;
  let panelVariant;
  let renderingContext;
  let status;
  userId = userId.userId;
  const arg1 = userId;
  const guildId = userId.guildId;
  const importDefault = guildId;
  const index = userId.index;
  const dependencyMap = index;
  const activity = userId.activity;
  const stream = userId.stream;
  ({ fullwidth, panelVariant } = userId);
  ({ status, renderingContext } = userId);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let closure_5;
  let closure_6;
  const tmp = callback3();
  const analyticsLocations = importDefault(dependencyMap[12])().analyticsLocations;
  closure_5 = analyticsLocations;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getUser(userId));
  closure_6 = stateFromStores;
  let obj1 = arg1(dependencyMap[14]);
  let application_id;
  if (null != activity) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let obj2 = arg1(dependencyMap[13]);
  const items1 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channelId;
    if (null != stream) {
      channelId = stream.channelId;
    }
    return analyticsLocations.getStageInstanceByChannel(channelId);
  });
  if (importDefault(dependencyMap[26])(activity)) {
    let GameControllerIcon = arg1(dependencyMap[27]).SpotifyNeutralIcon;
  } else {
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type === constants.LISTENING) {
      GameControllerIcon = arg1(dependencyMap[28]).MusicIcon;
    } else if (importDefault(dependencyMap[29])(activity)) {
      GameControllerIcon = arg1(dependencyMap[30]).XboxNeutralIcon;
    } else {
      let type1;
      if (null != activity) {
        type1 = activity.type;
      }
      if (type1 !== constants.CUSTOM_STATUS) {
        if (null != stateFromStores1) {
          GameControllerIcon = arg1(dependencyMap[31]).StageIcon;
        } else {
          GameControllerIcon = arg1(dependencyMap[32]).GameControllerIcon;
        }
      }
    }
  }
  const items2 = [userId, stateFromStores, stream, guildId, activity, index, analyticsLocations];
  const callback = activity.useCallback(() => {
    if (null != stream) {
      let STATUS_CARD = constants.STREAM_CARD;
    } else {
      if (null != activity) {
        if (activity.type !== constants2.CUSTOM_STATUS) {
          STATUS_CARD = constants.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = constants.STATUS_CARD;
    }
    let obj = guildId(index[15]);
    obj = { type: STATUS_CARD, order: index, guild_id: guildId };
    const items = [userId];
    obj.highlighted_user_ids = items;
    let channelId;
    if (null != stream) {
      channelId = stream.channelId;
    }
    obj.destination_channel_id = channelId;
    obj.track(constants3.ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      userId(index[17])(index[16], index.paths).then((arg0) => arg0.default(channelId.channelId, true));
      const promise2 = userId(index[17])(index[16], index.paths);
    } else {
      userId(index[17])(index[18], index.paths).then((arg0) => arg0.default({ userId: closure_0, localUser: closure_6, sourceAnalyticsLocations: closure_5 }));
      const promise = userId(index[17])(index[18], index.paths);
    }
  }, items2);
  if (null == stateFromStores) {
    obj = { panelVariant };
    return callback(arg1(dependencyMap[19]).HappeningNowCardPlaceholder, obj);
  } else {
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    let obj3 = importDefault(dependencyMap[20]);
    const name = obj3.getName(guildId, null, stateFromStores);
    let type2;
    if (null != activity) {
      type2 = activity.type;
    }
    if (type2 === constants.CUSTOM_STATUS) {
      obj = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      let tmp47Result = callback(arg1(dependencyMap[21]).CustomStatusActivityCard, obj);
    } else {
      obj1 = { onPress: callback, width: str2, IconComponent: GameControllerIcon, panelVariant };
      if (null != stateFromStores1) {
        obj2 = {};
        obj3 = { style: tmp.stagePreviewWrapper };
        const obj4 = { style: tmp.cardImageStream };
        const obj5 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj4.children = callback(IconOrPreview, obj5);
        const items3 = [callback(stream, obj4), ];
        let tmp32 = null;
        if (null != stateFromStores1) {
          const obj6 = { user: stateFromStores, stage: stateFromStores1 };
          tmp32 = callback(StageStreamAvatars, obj6);
        }
        items3[1] = tmp32;
        obj3.children = items3;
        const items4 = [callback2(stream, obj3), ];
        const obj7 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = callback(arg1(dependencyMap[23]).HappeningNowLiveStageContent, obj7);
        obj2.children = items4;
        let obj8 = obj2;
        const tmp26 = callback2;
        const tmp27 = stream;
      } else {
        obj8 = {};
        const obj9 = { style: tmp.cardImage };
        const obj10 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        obj9.children = callback(IconOrPreview, obj10);
        const items5 = [callback(stream, obj9), ];
        const obj11 = { style: tmp.content };
        const obj12 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, size: arg1(dependencyMap[24]).AvatarSizes.XSMALL, guildId, status, style: tmp.cardAvatar, autoStatusCutout: closure_8 };
        const items6 = [callback(arg1(dependencyMap[24]).Avatar, obj12), , ];
        const obj13 = { noMargin: true, children: name };
        items6[1] = callback(arg1(dependencyMap[22]).HappeningNowCardHeader, obj13);
        const obj14 = { activity, stream };
        items6[2] = callback(arg1(dependencyMap[25]).HappeningNowActivityCardSubtitle, obj14);
        obj11.children = items6;
        items5[1] = callback2(stream, obj11);
        obj8.children = items5;
      }
      obj1.children = callback2(closure_13, obj8);
      tmp47Result = callback(importDefault(dependencyMap[22]), obj1);
      const tmp47 = callback;
      const tmp50 = importDefault(dependencyMap[22]);
      const tmp51 = callback2;
      const tmp52 = closure_13;
    }
    return tmp47Result;
  }
  const importAllResult = activity;
});
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default memoResult;
