// Module ID: 14983
// Function ID: 114198
// Name: IconOrPreview
// Dependencies: [31, 27, 1353, 1849, 14233, 653, 482, 33, 14984, 14985, 4130, 689, 5462, 566, 5468, 675, 10844, 1934, 8537, 14979, 4319, 14986, 14234, 14980, 1273, 14989, 9119, 14990, 9114, 11949, 8665, 4654, 8979, 1212, 3974, 10815, 5085, 14981, 14992, 10818, 7909, 14994, 7971, 2]

// Module 14983 (IconOrPreview)
import importAllResult from "StageIcon";
import get_ActivityIndicator from "SpotifyNeutralIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import ME from "ME";
import jsxProd from "getSystemLocale";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let HAPPENING_NOW_CONTENT_HEIGHT;
let PixelRatio;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
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
  let tmp = callback3();
  const require = tmp;
  const tmp2 = (function useActivityIcon(arg0) {
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
      const items = [outer1_14, outer1_14];
      assetImage = obj.getAssetImage(application_id, large_image1, items);
    }
    if (null == assetImage) {
      let iconURL;
      if (null != game) {
        iconURL = game.getIconURL(outer1_14);
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
      const items1 = [outer1_14, outer1_14];
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
      if (type === outer1_9.PLAYING) {
        userId = userId.slice(-1);
        let tmp28 = outer1_15[userId.charCodeAt(userId, 0) % outer1_15.length];
      } else {
        tmp28 = rgbToHexResult(hexWithOpacityResult[41]);
      }
    }
  })({ userId, activity, game, stream });
  ({ r, g, b } = tmp2.accentColor);
  let obj = require(3974) /* hexToRgb */;
  const rgbToHexResult = obj.rgbToHex(r, g, b);
  const importDefault = rgbToHexResult;
  let obj1 = require(3974) /* hexToRgb */;
  const hexWithOpacityResult = obj1.hexWithOpacity(rgbToHexResult, 0.2);
  const dependencyMap = hexWithOpacityResult;
  let items = [rgbToHexResult, tmp.cardImageAssetContainer];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.cardImageAssetContainer, { shadowColor: closure_1 }];
    return items;
  }, items);
  let items1 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
  if (null != stream) {
    obj = { style: memo };
    obj = { stream };
    obj1 = {};
    ({ cardImageStreamLive: obj8.style, stageStreamLiveText: obj8.textStyle } = tmp);
    obj1.allowFontScaling = false;
    obj.children = callback(require(1273) /* Button */.LiveTag, obj1);
    obj.style = tmp.cardImageStreamPreview;
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.ctaText = intl5.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]);
    obj.disabled = true;
    obj.children = callback(importDefault(10815), obj);
    return callback(closure_4, obj);
  } else {
    if (importDefault(9119)(activity)) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl4.string(require(1212) /* getSystemLocale */.t.rmnkz4);
    } else {
      let type;
      if (null != activity) {
        type = activity.type;
      }
      if (type === constants.LISTENING) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl3.string(require(1212) /* getSystemLocale */.t.kUEnxN);
      } else if (importDefault(11949)(activity)) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl2.string(require(1212) /* getSystemLocale */.t.T0uYK9);
      } else {
        let type1;
        if (null != activity) {
          type1 = activity.type;
        }
        if (type1 !== constants.CUSTOM_STATUS) {
          const intl = require(1212) /* getSystemLocale */.intl;
          stringResult = intl.string(require(1212) /* getSystemLocale */.t["2TbM/G"]);
        }
      }
    }
    let obj2 = { style: memo, accessibilityLabel: stringResult };
    let obj3 = { style: tmp6 };
    const obj4 = { style: tmp.cardImageAsset, source: tmp2.source };
    obj3.children = callback(importDefault(5085), obj4);
    obj2.children = callback(closure_4, obj3);
    return callback(closure_4, obj2);
  }
}
function StageStreamAvatars(stage) {
  let audienceCount;
  let audienceFriends;
  stage = stage.stage;
  let obj = require(14981) /* useLiveStageData */;
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
  obj.avatarSize = require(1273) /* Button */.AvatarSizes.SIZE_16;
  obj.children = callback(require(14992) /* HappeningNowAvatarStack */.HappeningNowAvatarStack, obj);
  return callback(closure_4, obj);
}
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7, STATUS_CUTOUT_SMALL: closure_8 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ ActivityTypes: closure_9, AnalyticEvents: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [require("registerAsset"), require("registerAsset")];
let obj = { content: { flexShrink: 1, gap: 2 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
obj.avatarStackContainer = obj;
obj.cardAvatar = { marginBottom: 2 };
obj.cardImage = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12, position: "relative" };
obj.cardImageStream = { height: HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, position: "relative" };
_createForOfIteratorHelperLoose = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.cardImageAsset = _createForOfIteratorHelperLoose;
let obj2 = { height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, shadowOffset: { width: 0, height: 0 }, shadowRadius: 5, shadowOpacity: 0.32, elevation: 10 };
obj.cardImageAssetContainer = obj2;
obj.cardImageAssetBackground = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj3 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.cardImageStreamPreview = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.cardImageStreamLive = { top: 4, left: 4, position: "absolute" };
let obj5 = { fontSize: 10, lineHeight: 13, fontFamily: require("sum").Fonts.PRIMARY_BOLD };
obj.stageStreamLiveText = obj5;
obj.stagePreviewWrapper = { marginRight: 12, flexDirection: "column", height: "100%" };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
const memoResult = importAllResult.memo((userId) => {
  let fullwidth;
  let panelVariant;
  let renderingContext;
  let status;
  userId = userId.userId;
  const guildId = userId.guildId;
  const index = userId.index;
  const activity = userId.activity;
  const stream = userId.stream;
  ({ fullwidth, panelVariant } = userId);
  ({ status, renderingContext } = userId);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let analyticsLocations;
  let stateFromStores;
  const tmp = callback3();
  analyticsLocations = guildId(index[12])().analyticsLocations;
  let obj = userId(index[13]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getUser(userId));
  let obj1 = userId(index[14]);
  let application_id;
  if (null != activity) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let obj2 = userId(index[13]);
  const items1 = [analyticsLocations];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channelId;
    if (null != stream) {
      channelId = stream.channelId;
    }
    return analyticsLocations.getStageInstanceByChannel(channelId);
  });
  if (guildId(index[26])(activity)) {
    let GameControllerIcon = userId(index[27]).SpotifyNeutralIcon;
  } else {
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type === constants.LISTENING) {
      GameControllerIcon = userId(index[28]).MusicIcon;
    } else if (guildId(index[29])(activity)) {
      GameControllerIcon = userId(index[30]).XboxNeutralIcon;
    } else {
      let type1;
      if (null != activity) {
        type1 = activity.type;
      }
      if (type1 !== constants.CUSTOM_STATUS) {
        if (null != stateFromStores1) {
          GameControllerIcon = userId(index[31]).StageIcon;
        } else {
          GameControllerIcon = userId(index[32]).GameControllerIcon;
        }
      }
    }
  }
  const items2 = [userId, stateFromStores, stream, guildId, activity, index, analyticsLocations];
  const callback = activity.useCallback(() => {
    if (null != stream) {
      let STATUS_CARD = outer1_7.STREAM_CARD;
    } else {
      if (null != activity) {
        if (activity.type !== outer1_9.CUSTOM_STATUS) {
          STATUS_CARD = outer1_7.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = outer1_7.STATUS_CARD;
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
    obj.track(outer1_10.ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      userId(index[17])(index[16], index.paths).then((arg0) => arg0.default(outer1_4.channelId, true));
      const promise2 = userId(index[17])(index[16], index.paths);
    } else {
      userId(index[17])(index[18], index.paths).then((arg0) => arg0.default({ userId: outer1_0, localUser: outer1_6, sourceAnalyticsLocations: outer1_5 }));
      const promise = userId(index[17])(index[18], index.paths);
    }
  }, items2);
  if (null == stateFromStores) {
    obj = { panelVariant };
    return callback(userId(index[19]).HappeningNowCardPlaceholder, obj);
  } else {
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    let obj3 = guildId(index[20]);
    const name = obj3.getName(guildId, null, stateFromStores);
    let type2;
    if (null != activity) {
      type2 = activity.type;
    }
    if (type2 === constants.CUSTOM_STATUS) {
      obj = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      let tmp47Result = callback(userId(index[21]).CustomStatusActivityCard, obj);
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
        items4[1] = callback(userId(index[23]).HappeningNowLiveStageContent, obj7);
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
        const obj12 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, size: userId(index[24]).AvatarSizes.XSMALL, guildId, status, style: tmp.cardAvatar, autoStatusCutout: closure_8 };
        const items6 = [callback(userId(index[24]).Avatar, obj12), , ];
        const obj13 = { noMargin: true, children: name };
        items6[1] = callback(userId(index[22]).HappeningNowCardHeader, obj13);
        const obj14 = { activity, stream };
        items6[2] = callback(userId(index[25]).HappeningNowActivityCardSubtitle, obj14);
        obj11.children = items6;
        items5[1] = callback2(stream, obj11);
        obj8.children = items5;
      }
      obj1.children = callback2(closure_13, obj8);
      tmp47Result = callback(guildId(index[22]), obj1);
      const tmp47 = callback;
      const tmp50 = guildId(index[22]);
      const tmp51 = callback2;
      const tmp52 = closure_13;
    }
    return tmp47Result;
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default memoResult;
