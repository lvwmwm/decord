// Module ID: 13272
// Function ID: 13273
// Name: createAppMessageEmbed
// Dependencies: [32, 1389, 8658, 2042, 1501, 10038, 6845, 13273, 8307, 1125, 13274, 9683, 8657, 11397, 13275, 13276, 1414, 1383, 7800, 11401, 7314, 5670, 5195, 1628, 10781, 7321, 5698, 1385, 2]
// Exports: createAppMessageEmbed, getAppLinkGateResult, handleTapAppMessageEmbed

// Module 13272 (createAppMessageEmbed)
import intl7 from "intl" /* 1125 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1501 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import ChatInputUtils from "ChatInputUtils" /* 5195 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5670 */;
import ToastUtils from "ToastUtils" /* 5698 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6845 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7314 */;
import ClipboardUtils from "ClipboardUtils" /* 7321 */;
import activityBookmarkUtils from "activityBookmarkUtils" /* 7800 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8307 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8657 */;
import ApplicationAssetsStore2 from "ApplicationAssetsStore" /* 8658 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9683 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10038 */;
import ApplicationUtils from "ApplicationUtils" /* 10781 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11397 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11401 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 13273 */;
import CodedLinksTypes from "CodedLinksTypes" /* 13274 */;
import getPlayInContext from "getPlayInContext" /* 13275 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 13276 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1389 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import size from "module_2" /* 2 */;

const ApplicationAssetsStore = ApplicationAssetsStore2;

const FetchState = ApplicationAssetsStore2.FetchState;
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let closure_10 = ["embedded_cover"];
let c11 = 512;
const result = size.fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(appId) {
  let channel;
  let intl3;
  let message;
  let obj4;
  let theme;
  appId = appId.appId;
  ({ channel, message, theme } = appId);
  const application = ApplicationStore.getApplication(appId);
  const obj = ApplicationStore;
  if (null == application) {
    if (false === obj.isFetchingApplication(appId)) {
      const obj6 = ApplicationActionCreators;
      const application1 = obj6.fetchApplication(appId);
    }
    return { state: "unavailable" };
  } else {
    let obj5;
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    const obj2 = ContentClassificationVisibility;
    const contentClassificationVisibility = obj2.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY) {
      let stringResult;
      const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
      if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl2 = tmp3(1125).intl;
        stringResult = intl2.string(tmp3(1125).t.LPOzxB);
      } else {
        const intl = tmp3(1125).intl;
        stringResult = intl.string(tmp3(1125).t.NIZyKq);
      }
      const obj3 = { state: "blocked", model: obj4 };
      obj4 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED, appId: "", messageId: message.id, title: null, header: intl3.string(intl7.t.bZBN64), info: stringResult, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: [], embedUrl: null, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: [], type: null, headerText: null };
      const merged = Object.assign(baseColors);
      intl3 = tmp3(1125).intl;
      obj5 = obj3;
    } else {
      obj5 = { state: "display", app: application };
    }
    return obj5;
  }
};
export const createAppMessageEmbed = function createAppMessageEmbed(arg0) {
  let app;
  let appGradientColors;
  let bot;
  let bot2;
  let embedUrl;
  let icon;
  let id;
  let id2;
  let intl3;
  let intl6;
  let maxParticipants;
  let message;
  let name;
  let tags;
  let theme;
  ({ message, app } = arg0);
  ({ theme, embedUrl } = arg0);
  const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  const channel_id = message.channel_id;
  ({ name, bot } = app);
  const obj = AppLauncherUtils;
  const isActivityAppResult = obj.isActivityApp(app);
  if (isActivityAppResult) {
    const applicationAssetFetchState = ApplicationAssetsStore.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      const tmp2Result = ApplicationAssetUtils;
      const assetIds = tmp2Result.fetchAssetIds(id, closure_10);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    let formatToPlainStringResult;
    let obj10;
    if (maxParticipants > 0) {
      const intl2 = tmp2(1125).intl;
      const obj2 = { count: maxParticipants };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1125).t.z8EAJW, obj2);
    }
    const items = [];
    const tmp2Result9 = getFrameSurfaces;
    const canOpenFrameResult = tmp2Result9.canOpenFrame(app);
    if (isActivityAppResult) {
      if (canOpenFrameResult) {
        const push2 = items.push;
        const obj3 = { id: "play_frame", label: intl6.string(intl7.t.RscU7I) };
        intl6 = tmp2(1125).intl;
        push2(obj3);
      } else {
        const tmp2Result10 = getPlayInContext;
        const playInContext = tmp2Result10.getPlayInContext(id, channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          let stringResult;
          const string = tmp2(1125).intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = tmp2(1125).intl;
            stringResult = intl5.string(tmp2(1125).t.DPfdsq);
          } else {
            stringResult = tmp12;
            if (null != tmp10) {
              const intl4 = tmp2(1125).intl;
              stringResult = intl4.string(tmp2(1125).t.VJlc0S);
            }
          }
          const obj4 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj4);
        } else {
          const push = items.push;
          const obj5 = { id: "play_in_dm", label: intl3.string(intl7.t.JeK1Wg) };
          intl3 = tmp2(1125).intl;
          push(obj5);
        }
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    const tmp2Result11 = AppLauncherUtils;
    if (tmp2Result11.isActivityApp(app)) {
      const tmp2Result12 = ApplicationAssetUtils;
      let assetIds1 = tmp2Result12.getAssetIds(id2, closure_10);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = _slicedToArray(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        const tmp2Result13 = ApplicationAssetUtils;
        assetImage = tmp2Result13.getAssetImage(id2, first, c11);
      }
      if (null != assetImage) {
        obj10 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        const obj6 = { bannerRatio: "activity", staticBannerSrc: assetImage };
      }
      let appIconSrc = null;
      if (null != icon) {
        const tmp2Result14 = nativeAppMessageEmbedUtil;
        appIconSrc = tmp2Result14.getAppIconSrc(id, icon, bot);
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj10.staticBannerSrc;
      }
      const obj7 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY, appId: app.id, messageId: message.id, title: null, header: name, info: joined, tagline: formatToPlainStringResult, iconSrc: appIconSrc, actions: items, embedUrl, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: appGradientColors, type: null, headerText: null };
      const tmp2Result15 = nativeAppMessageEmbedUtil;
      appGradientColors = tmp2Result15.getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj10);
      return obj7;
    }
    if (null != bot2) {
      const obj8 = { id: null, banner: null, size: 512, canAnimate: false };
      ({ id: obj12.id, banner: obj12.banner } = bot2);
      const tmp2Result16 = AvatarUtils;
      const userBannerURL = tmp2Result16.getUserBannerURL(obj8);
      if (null != userBannerURL) {
        obj10 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        const obj9 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
      }
    }
    obj10 = { bannerRatio: "bot", staticBannerSrc: null };
  }
  const intl = tmp2(1125).intl;
  formatToPlainStringResult = intl.string(tmp2(1125).t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  let items;
  let items1;
  let obj5;
  const application = ApplicationStore.getApplication(appId.appId);
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  let value2;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value2 = searchParams2.get("custom_id");
  }
  const obj2 = activityBookmarkUtils;
  const linkChannelId = obj2.getLinkChannelId(toURLSafeResult);
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    const channel_id = appId.message.channel_id;
    const obj3 = { applicationId: appId.appId, channelId: channel_id, fromLink: true, linkChannelId, customId: value2, referrerId: id, analyticsLocations: items, commandOrigin: ApplicationCommandTypes.CommandOrigin.APP_MESSAGE_EMBED };
    const launch2 = GamesActionCreatorsDefault.launch;
    items = [];
    GamesActionCreatorsDefault;
    items[0] = AnalyticsLocationDefault.APP_MESSAGE_EMBED;
    launch2(obj3);
  } else {
    if ("play_in_dm" !== actionId) {
      if ("play_frame" !== actionId) {
        if ("view_in_app_launcher" === actionId) {
          const tmp7Result = ChatInputUtils;
          const bestActiveInput = tmp7Result.getBestActiveInput();
          if (bestActiveInput != null) {
            const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
            const obj4 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj5 };
            obj5 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: value2 };
            openCustomKeyboard(obj4);
          }
        } else if ("add_app" === actionId) {
          if (null != application) {
            const obj6 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
            ({ id: obj7.applicationId, customInstallUrl: obj7.customInstallUrl, installParams: obj7.installParams, integrationTypesConfig: obj7.integrationTypesConfig } = application);
            const tmp7Result5 = ApplicationUtils;
            tmp7Result5.installApplication(obj6);
          }
        } else if ("link_copied" === actionId) {
          const tmp7Result6 = ClipboardUtils;
          tmp7Result6.copy(appId.embedUrl);
          const tmp7Result7 = ToastUtils;
          tmp7Result7.presentLinkCopied();
        } else {
          const tmp7Result8 = GlobalUtils;
          tmp7Result8.assertNever(appId.actionId);
        }
      }
    }
    const obj8 = { applicationId: appId.appId, channelId: null, fromLink: true, linkChannelId, customId: value2, referrerId: id, analyticsLocations: items1, commandOrigin: ApplicationCommandTypes.CommandOrigin.APP_MESSAGE_EMBED };
    const launch = GamesActionCreatorsDefault.launch;
    items1 = [];
    GamesActionCreatorsDefault;
    items1[0] = AnalyticsLocationDefault.APP_MESSAGE_EMBED;
    launch(obj8);
  }
};
