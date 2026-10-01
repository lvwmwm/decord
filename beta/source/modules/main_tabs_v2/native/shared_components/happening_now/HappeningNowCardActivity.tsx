// Module ID: 15706
// Function ID: 15707
// Name: HappeningNowCardActivity
// Dependencies: [19, 17, 2050, 1372, 14841, 1074, 1085, 21, 15707, 15708, 4836, 576, 6583, 504, 6589, 1241, 12443, 1981, 7624, 15702, 4988, 15709, 14842, 15703, 1177, 15712, 10350, 15713, 9366, 12576, 8161, 5411, 8535, 1115, 4683, 1364, 9519, 5899, 15704, 15715, 9522, 7595, 15717, 7694, 2]

// Module 15706 (HappeningNowCardActivity)
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import FastImageDefault from "FastImage" /* 5899 */;
import StreamPreviewDefault from "StreamPreview" /* 9519 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 9522 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10350 */;
import isOnXboxDefault from "isOnXbox" /* 12576 */;
import useLiveStageData from "useLiveStageData" /* 15704 */;
import AssetRegistryDefault from "AssetRegistry" /* 15707 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15708 */;
import HappeningNowAvatarStack2 from "HappeningNowAvatarStack" /* 15715 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import UserStore from "UserStore" /* 1372 */;
import HappeningNowConstants from "HappeningNowConstants" /* 14841 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let HAPPENING_NOW_CONTENT_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
let PixelRatio;
let c10;
let c9;
let closure_12;
let closure_4;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp;
let unpackModuleId;
const ColorUtils = tmp(4683);
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
  let tmp2Result2;
  let userId;
  ({ userId, activity, stream, game } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  let tmp = closure_16();
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
    items = [closure_14, closure_14];
    assetImage = getAssetImage(application_id, large_image1, items);
  }
  if (null == assetImage) {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(closure_14);
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
    let items1 = [closure_14, closure_14];
    assetImage = getAssetImage2(application_id1, small_image1, items1);
  }
  if (null == assetImage) {
    let tmp2Result;
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.PLAYING) {
      const substr = userId.slice(-1);
      tmp2Result = items[substr.charCodeAt(substr, 0) % items.length];
    } else {
      tmp2Result = tmp2(15717);
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
    let obj = { style: memo, children: closure_11(tmp2Result2, obj6) };
    obj6 = { stream, children: closure_11(require("native").LiveTag, obj7), style: tmp.cardImageStreamPreview, ctaText: intl5.string(require("intl").t["7Xq/nV"]), disabled: true };
    obj7 = { style: null, textStyle: null, allowFontScaling: false };
    ({ cardImageStreamLive: obj11.style, stageStreamLiveText: obj11.textStyle } = tmp);
    tmp2Result2 = StreamPreviewDefault;
    intl5 = tmp29(1115).intl;
    return closure_11(closure_4, obj);
  } else {
    let stringResult;
    if (isListeningOnSpotifyDefault(activity)) {
      const intl4 = tmp29(1115).intl;
      stringResult = intl4.string(tmp29(1115).t.rmnkz4);
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 === constants2.LISTENING) {
        const intl3 = tmp29(1115).intl;
        stringResult = intl3.string(tmp29(1115).t.kUEnxN);
      } else if (isOnXboxDefault(activity)) {
        const intl2 = tmp29(1115).intl;
        stringResult = intl2.string(tmp29(1115).t.T0uYK9);
      } else {
        let type2;
        if (activity != null) {
          type2 = activity.type;
        }
        if (type2 !== tmp37.CUSTOM_STATUS) {
          const intl = tmp29(1115).intl;
          stringResult = intl.string(tmp29(1115).t["2TbM/G"]);
        }
      }
    }
    const obj8 = { style: memo, accessibilityLabel: stringResult, children: closure_11(closure_4, obj9) };
    obj9 = { style: tmp35, children: closure_11(FastImageDefault, obj10) };
    obj10 = { style: tmp.cardImageAsset, source: memoizedImageSourceResult };
    return closure_11(closure_4, obj8);
  }
}
function StageStreamAvatars(stage) {
  let HappeningNowAvatarStack;
  let audienceCount;
  let audienceFriends;
  let obj3;
  stage = stage.stage;
  const user = stage.user;
  const tmp2 = closure_16();
  const obj = useLiveStageData;
  const liveStageData = obj.useLiveStageData(stage);
  ({ audienceCount, audienceFriends } = liveStageData);
  const obj2 = { style: tmp2.avatarStackContainer, children: unpackModuleId(HappeningNowAvatarStack, obj3) };
  obj3 = { users: items, guildId: stage.guild_id, userCount: audienceCount + 1, isStage: true, avatarSize: native.AvatarSizes.SIZE_16 };
  items = [user];
  HappeningNowAvatarStack = HappeningNowAvatarStack2.HappeningNowAvatarStack;
  HermesBuiltin.arraySpread(items, audienceFriends, 1);
  return unpackModuleId(React3, obj2);
}
({ PixelRatio, View: closure_4 } = react_native);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: metroImportDefault, STATUS_CUTOUT_SMALL: metroImportAll, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT } = HappeningNowConstants);
({ ActivityTypes: c9, AnalyticEvents: c10 } = Constants);
const Fonts = Constants2.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
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
let closure_16 = createStyles(obj);
const memoResult = react.memo((userId) => {
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
  let tmp27;
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
  const tmp = closure_16();
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
  if (guildId(index[26])(activity)) {
    GameControllerIcon = tmp4(tmp3[27]).SpotifyNeutralIcon;
  } else {
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.LISTENING) {
      GameControllerIcon = tmp4(tmp3[28]).MusicIcon;
    } else if (guildId(index[29])(activity)) {
      GameControllerIcon = tmp4(tmp3[30]).XboxNeutralIcon;
    } else {
      let type1;
      if (activity != null) {
        type1 = activity.type;
      }
      if (type1 !== tmp11.CUSTOM_STATUS) {
        if (null != stateFromStores1) {
          GameControllerIcon = tmp4(tmp3[31]).StageIcon;
        } else {
          GameControllerIcon = tmp4(tmp3[32]).GameControllerIcon;
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
        if (activity.type !== constants.CUSTOM_STATUS) {
          STATUS_CARD = metroImportDefault.ACTIVITY_CARD;
        }
      }
      STATUS_CARD = metroImportDefault.STATUS_CARD;
    }
    let obj = { type: STATUS_CARD, order: index, guild_id: guildId, highlighted_user_ids: items, destination_channel_id: channelId };
    items = [userId];
    channelId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const ACTIVITY_CARD_CLICKED = constants2.ACTIVITY_CARD_CLICKED;
    AnalyticsUtilsDefault;
    if (stream != null) {
      channelId = tmp.channelId;
    }
    track(ACTIVITY_CARD_CLICKED, obj);
    if (null != stream) {
      const promise2 = asyncRequire(12443, dependencyMap.paths);
      promise2.then((result) => result.default(channelId.channelId, true));
    } else {
      const promise = asyncRequire(7624, dependencyMap.paths);
      promise.then((result) => {
        const obj = { userId, localUser, sourceAnalyticsLocations };
        return result.default(obj);
      });
    }
  }, items2);
  if (null == stateFromStores) {
    const obj2 = { panelVariant };
    return closure_11(userId(index[19]).HappeningNowCardPlaceholder, obj2);
  } else {
    let tmp24Result2;
    let str2 = "full";
    if (!fullwidth) {
      let str = "medium";
      if (null != stream) {
        str = "large";
      }
      str2 = str;
    }
    const tmp2Result = guildId(index[20]);
    const name = tmp2Result.getName(guildId, null, stateFromStores);
    let type2;
    if (activity != null) {
      type2 = activity.type;
    }
    if (type2 === constants2.CUSTOM_STATUS) {
      const obj3 = { fullwidth, user: stateFromStores, guildId, activity, userTitle: name, onPress: callback, panelVariant };
      tmp24Result2 = closure_11(tmp4(tmp3[21]).CustomStatusActivityCard, obj3);
    } else {
      const obj4 = { onPress: callback, width: str2, IconComponent: GameControllerIcon, panelVariant, children: closure_12(tmp27, obj11) };
      tmp27 = closure_13;
      const tmp2Result2 = guildId(index[22]);
      if (null != stateFromStores1) {
        const obj5 = { style: tmp.stagePreviewWrapper, children: items3 };
        const obj6 = { style: tmp.cardImageStream, children: closure_11(IconOrPreview, obj7) };
        obj7 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        items3 = [closure_11(stream, obj6), ];
        let tmp24Result = null;
        const tmp17 = stream;
        if (null != stateFromStores1) {
          const obj8 = { user: stateFromStores, stage: stateFromStores1 };
          tmp24Result = tmp24(StageStreamAvatars, obj8);
        }
        const obj9 = { children: items4 };
        items3[1] = tmp24Result;
        items4 = [closure_12(tmp17, obj5), ];
        const obj10 = { stage: stateFromStores1, renderingContext, guildId, streamingUser: stateFromStores };
        items4[1] = closure_11(userId(index[23]).HappeningNowLiveStageContent, obj10);
        obj11 = obj9;
      } else {
        obj11 = { children: items5 };
        const obj12 = { style: tmp.cardImage, children: closure_11(IconOrPreview, obj13) };
        obj13 = { userId: stateFromStores.id, activity, game: getOrFetchApplication, stream };
        items5 = [closure_11(stream, obj12), ];
        const obj14 = { style: tmp.content, children: items6 };
        const obj15 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, size: userId(index[24]).AvatarSizes.XSMALL, guildId, status, style: tmp.cardAvatar, autoStatusCutout };
        const Avatar = tmp4(tmp3[24]).Avatar;
        items6 = [closure_11(Avatar, obj15), , ];
        const obj16 = { noMargin: true, children: name };
        items6[1] = closure_11(userId(index[22]).HappeningNowCardHeader, obj16);
        const obj17 = { activity, stream };
        items6[2] = closure_11(userId(index[25]).HappeningNowActivityCardSubtitle, obj17);
        items5[1] = closure_12(stream, obj14);
      }
      tmp24Result2 = tmp24(tmp2Result2, obj4);
    }
    return tmp24Result2;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx");

export default memoResult;
