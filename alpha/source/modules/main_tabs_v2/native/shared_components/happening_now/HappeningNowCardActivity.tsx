// Module ID: 18120
// Function ID: 18121
// Name: HappeningNowCardActivity
// Dependencies: [19, 17, 4868, 1383, 17274, 1072, 1083, 21, 18121, 18122, 5014, 575, 7326, 504, 7330, 5762, 1252, 13169, 1994, 8750, 18116, 6041, 18123, 17275, 18117, 1187, 18126, 10762, 18127, 10758, 14848, 9362, 8669, 9727, 1113, 5011, 1375, 12038, 5717, 18118, 18129, 12041, 8721, 18131, 8821, 2]

// Module 18120 (HappeningNowCardActivity)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10762 */;
import StreamPreviewDefault from "StreamPreview" /* 12038 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 12041 */;
import isOnXboxDefault from "isOnXbox" /* 14848 */;
import useLiveStageData from "useLiveStageData" /* 18118 */;
import AssetRegistryDefault from "AssetRegistry" /* 18121 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18122 */;
import HappeningNowAvatarStack2 from "HappeningNowAvatarStack" /* 18129 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StageInstanceStore from "StageInstanceStore" /* 4868 */;
import UserStore from "UserStore" /* 1383 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17274 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let HAPPENING_NOW_CONTENT_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
let PixelRatio;
let c10;
let closure_12;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp;
let unpackModuleId;
const ColorUtils = tmp(5011);
function IconOrPreview(arg0) {
  let activity;
  let b;
  let backgroundColor;
  let closure_0;
  let g;
  let game;
  let intl5;
  let obj10;
  let obj6;
  let obj7;
  let obj9;
  let r;
  let shadowColor;
  let stream;
  let tmp2Result3;
  let tmp2Result4;
  let userId;
  ({ userId, activity, stream, game } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  let tmp = closure_15();
  _require = tmp;
  let guildId;
  const tmp4 = useFetchStreamPreviewDefault;
  if (stream != null) {
    guildId = stream.guildId;
  }
  let channelId;
  if (stream != null) {
    channelId = stream.channelId;
  }
  let ownerId;
  if (stream != null) {
    ownerId = stream.ownerId;
  }
  const previewUrl = tmp4(guildId, channelId, ownerId).previewUrl;
  let assetImage;
  if (null != previewUrl) {
    assetImage = previewUrl;
  }
  let tmp9 = null == assetImage;
  if (tmp9) {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    tmp9 = null != large_image;
  }
  if (tmp9) {
    let application_id;
    const getAssetImage = require("ApplicationAssetUtils").getAssetImage;
    require("ApplicationAssetUtils");
    if (activity != null) {
      application_id = activity.application_id;
    }
    let large_image1;
    if (activity != null) {
      large_image1 = activity.assets.large_image;
    }
    items = [closure_13, closure_13];
    assetImage = getAssetImage(application_id, large_image1, items);
  }
  if (null == assetImage) {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(closure_13);
    }
    assetImage = iconURL;
  }
  let tmp18 = null == assetImage;
  if (tmp18) {
    let small_image;
    if (activity != null) {
      const assets2 = activity.assets;
      if (assets2 != null) {
        small_image = assets2.small_image;
      }
    }
    tmp18 = null != small_image;
  }
  if (tmp18) {
    let application_id1;
    const getAssetImage2 = require("ApplicationAssetUtils").getAssetImage;
    require("ApplicationAssetUtils");
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    let small_image1;
    if (activity != null) {
      small_image1 = activity.assets.small_image;
    }
    let items1 = [closure_13, closure_13];
    assetImage = getAssetImage2(application_id1, small_image1, items1);
  }
  if (null == assetImage) {
    let tmp2Result;
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === require("ActivityTypes").ActivityTypes.PLAYING) {
      const substr = userId.slice(-1);
      tmp2Result = items[substr.charCodeAt(substr, 0) % items.length];
    } else {
      tmp2Result = tmp2(18131);
    }
    assetImage = tmp2Result;
  }
  let obj2 = require("VideoBackground");
  const memoizedImageSourceResult = obj2.memoizedImageSource(assetImage);
  let obj3 = require("VideoBackground");
  const dominantRGBFromImage = obj3.useDominantRGBFromImage(assetImage, memoizedImageSourceResult);
  ({ r, g, b } = dominantRGBFromImage);
  let obj4 = require("ColorUtils");
  const rgbToHexResult = obj4.rgbToHex(r, g, b);
  importDefault = rgbToHexResult;
  const obj5 = require("ColorUtils");
  const hexWithOpacityResult = obj5.hexWithOpacity(rgbToHexResult, 0.2);
  dependencyMap = hexWithOpacityResult;
  const items2 = [rgbToHexResult, tmp.cardImageAssetContainer];
  const memo = react.useMemo(() => {
    let items1;
    let obj4;
    let tmpResult;
    items = [closure_0.cardImageAssetContainer, ];
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj2 = { boxShadow: items1 };
      const obj3 = { offsetX: 0, offsetY: 0, blurRadius: 5, color: tmpResult.hexWithOpacity(shadowColor, 0.32) };
      items1 = [obj3];
      obj4 = obj2;
      tmpResult = ColorUtils;
    } else {
      obj4 = { shadowColor };
    }
    items[1] = obj4;
    return items;
  }, items2);
  const items3 = [hexWithOpacityResult, tmp.cardImageAssetBackground];
  if (null != stream) {
    let obj = { style: memo, children: closure_10(tmp2Result3, obj6) };
    obj6 = { stream, children: closure_10(require("native").LiveTag, obj7), style: tmp.cardImageStreamPreview, ctaText: intl5.string(require("intl").t["7Xq/nV"]), disabled: true };
    obj7 = { style: null, textStyle: null, allowFontScaling: false };
    ({ cardImageStreamLive: obj11.style, stageStreamLiveText: obj11.textStyle } = tmp);
    tmp2Result3 = StreamPreviewDefault;
    intl5 = tmp29(1113).intl;
    return closure_10(closure_4, obj);
  } else {
    let stringResult;
    if (isListeningOnSpotifyDefault(activity)) {
      const intl4 = tmp29(1113).intl;
      stringResult = intl4.string(tmp29(1113).t.rmnkz4);
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 === require("ActivityTypes").ActivityTypes.LISTENING) {
        const intl3 = tmp29(1113).intl;
        stringResult = intl3.string(tmp29(1113).t.kUEnxN);
      } else if (isOnXboxDefault(activity)) {
        const intl2 = tmp29(1113).intl;
        stringResult = intl2.string(tmp29(1113).t.T0uYK9);
      } else {
        let type2;
        if (activity != null) {
          type2 = activity.type;
        }
        if (type2 !== require("ActivityTypes").ActivityTypes.CUSTOM_STATUS) {
          const intl = tmp29(1113).intl;
          stringResult = intl.string(tmp29(1113).t["2TbM/G"]);
        }
      }
    }
    const obj8 = { style: memo, accessibilityLabel: stringResult, children: closure_10(closure_4, obj9) };
    obj9 = { style: tmp35, children: closure_10(tmp2Result4, obj10) };
    obj10 = { style: tmp.cardImageAsset, source: memoizedImageSourceResult };
    tmp2Result4 = FastImageDefault;
    return closure_10(closure_4, obj8);
  }
}
function StageStreamAvatars(stage) {
  let HappeningNowAvatarStack;
  let audienceCount;
  let audienceFriends;
  let obj3;
  stage = stage.stage;
  const user = stage.user;
  const tmp2 = closure_15();
  const obj = useLiveStageData;
  const liveStageData = obj.useLiveStageData(stage);
  ({ audienceCount, audienceFriends } = liveStageData);
  const obj2 = { style: tmp2.avatarStackContainer, children: authStore(HappeningNowAvatarStack, obj3) };
  obj3 = { users: items, guildId: stage.guild_id, userCount: audienceCount + 1, isStage: true, avatarSize: native.AvatarSizes.SIZE_16 };
  items = [user];
  HappeningNowAvatarStack = HappeningNowAvatarStack2.HappeningNowAvatarStack;
  HermesBuiltin.arraySpread(items, audienceFriends, 1);
  return authStore(React3, obj2);
}
({ PixelRatio, View: closure_4 } = react_native);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: metroImportDefault, STATUS_CUTOUT_SMALL: metroImportAll, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT } = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const Fonts = Constants2.Fonts;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT);
let items = [AssetRegistryDefault, AssetRegistryDefault2];
let createStyles = createStyles_mod;
let obj = { content: { flexShrink: 1, gap: 2 }, avatarStackContainer: obj2, cardAvatar: { marginBottom: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12, position: "relative" }, cardImageStream: { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, position: "relative" }, cardImageAsset: obj3, cardImageAssetContainer: obj4, cardImageAssetBackground: size, cardImageStreamPreview: obj5, cardImageStreamLive: { top: 4, left: 4, position: "absolute" }, stageStreamLiveText: { fontSize: 10, lineHeight: 13, fontFamily: Fonts.PRIMARY_BOLD }, stagePreviewWrapper: { marginRight: 12, flexDirection: "column", height: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, width: "100%", borderRadius: nativeDefault.radii.sm - 1 };
obj4 = { height: "100%", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.sm, shadowOffset: { width: 0, height: 0 }, shadowRadius: 5, shadowOpacity: 0.32 };
size = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function ActivityCard(userId) {
  let GameControllerIcon;
  let fullwidth;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj7;
  let panelVariant;
  let renderingContext;
  let status;
  let tmp25;
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
  let stateFromStores;
  const tmp = closure_15();
  const analyticsLocations = guildId(index[12])().analyticsLocations;
  let obj = userId(index[13]);
  items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let application_id;
  const useGetOrFetchApplication = userId(index[14]).useGetOrFetchApplication;
  const tmp6 = userId(index[14]);
  if (activity != null) {
    application_id = activity.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  const items1 = [analyticsLocations];
  const tmp4Result = userId(index[13]);
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    let channelId;
    const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
    if (stream != null) {
      channelId = stream.channelId;
    }
    return getStageInstanceByChannel(channelId);
  });
  if (guildId(index[27])(activity)) {
    GameControllerIcon = tmp4(tmp3[28]).SpotifyNeutralIcon;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === userId(index[15]).ActivityTypes.LISTENING) {
      GameControllerIcon = tmp4(tmp3[29]).MusicIcon;
    } else if (guildId(index[30])(activity)) {
      GameControllerIcon = tmp4(tmp3[31]).XboxNeutralIcon;
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== userId(index[15]).ActivityTypes.CUSTOM_STATUS) {
        if (null != stateFromStores1) {
          GameControllerIcon = tmp4(tmp3[32]).StageIcon;
        } else {
          GameControllerIcon = tmp4(tmp3[33]).GameControllerIcon;
        }
      }
    }
  }
  const items2 = [userId, stateFromStores, stream, guildId, activity, index, analyticsLocations];
  const callback = activity.useCallback(() => {
    let STATUS_CARD;
    let channelId;
    let localUser;
    let sourceAnalyticsLocations;
    if (null != stream) {
      STATUS_CARD = metroImportDefault.STREAM_CARD;
    } else {
      if (null != activity) {
        if (activity.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS) {
          STATUS_CARD = metroImportDefault.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = metroImportDefault.STATUS_CARD;
    }
    let obj = { type: STATUS_CARD, order: index, guild_id: guildId, highlighted_user_ids: items, destination_channel_id: channelId };
    items = [userId];
    channelId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const ACTIVITY_CARD_CLICKED = AnalyticEvents.ACTIVITY_CARD_CLICKED;
    AnalyticsUtilsDefault;
    if (stream != null) {
      channelId = tmp.channelId;
    }
    track(ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      const promise2 = asyncRequire(13169, dependencyMap.paths);
      promise2.then((result) => result.default(channelId.channelId, true));
    } else {
      const promise = asyncRequire(8750, dependencyMap.paths);
      promise.then((result) => {
        const obj = { userId, localUser, sourceAnalyticsLocations };
        return result.default(obj);
      });
    }
  }, items2);
  if (null == stateFromStores) {
    const obj2 = { panelVariant };
    return closure_10(userId(index[20]).HappeningNowCardPlaceholder, obj2);
  } else {
    let tmp22Result2;
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    const tmp2Result = guildId(index[21]);
    const name = tmp2Result.getName(guildId, null, stateFromStores);
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === userId(index[15]).ActivityTypes.CUSTOM_STATUS) {
      const obj3 = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      tmp22Result2 = closure_10(tmp4(tmp3[22]).CustomStatusActivityCard, obj3);
    } else {
      const obj4 = { onPress: callback, width: str2, IconComponent: GameControllerIcon, panelVariant, children: closure_11(tmp25, obj11) };
      tmp25 = closure_12;
      const tmp2Result2 = guildId(index[23]);
      if (null != stateFromStores1) {
        const obj5 = { style: tmp.stagePreviewWrapper, children: items3 };
        const obj6 = { style: tmp.cardImageStream, children: closure_10(IconOrPreview, obj7) };
        obj7 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        items3 = [closure_10(stream, obj6), ];
        let tmp22Result = null;
        const tmp15 = stream;
        if (null != stateFromStores1) {
          const obj8 = { user: stateFromStores, stage: stateFromStores1 };
          tmp22Result = tmp22(StageStreamAvatars, obj8);
        }
        const obj9 = { children: items4 };
        items3[1] = tmp22Result;
        items4 = [closure_11(tmp15, obj5), ];
        const obj10 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = closure_10(userId(index[24]).HappeningNowLiveStageContent, obj10);
        obj11 = obj9;
      } else {
        obj11 = { children: items5 };
        const obj12 = { style: tmp.cardImage, children: closure_10(IconOrPreview, obj13) };
        obj13 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        items5 = [closure_10(stream, obj12), ];
        const obj14 = { style: tmp.content, children: items6 };
        const obj15 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, size: userId(index[25]).AvatarSizes.XSMALL, guildId, status, style: tmp.cardAvatar, autoStatusCutout };
        const Avatar = tmp4(tmp3[25]).Avatar;
        items6 = [closure_10(Avatar, obj15), , ];
        const obj16 = { noMargin: true, children: name };
        items6[1] = closure_10(userId(index[23]).HappeningNowCardHeader, obj16);
        const obj17 = { activity, stream };
        items6[2] = closure_10(userId(index[26]).HappeningNowActivityCardSubtitle, obj17);
        items5[1] = closure_11(stream, obj14);
      }
      tmp22Result2 = tmp22(tmp2Result2, obj4);
    }
    return tmp22Result2;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default memoResult;
