// Module ID: 12273
// Function ID: 12274
// Name: createAppMessageEmbed
// Dependencies: [32, 1372, 8495, 5054, 1483, 9390, 11652, 7494, 12274, 8289, 1115, 12275, 9480, 8494, 9673, 12276, 12277, 1397, 1366, 12278, 7513, 11852, 7851, 9650, 4693, 1610, 9396, 7520, 4520, 1370, 2]
// Exports: createAppMessageEmbed, getAppLinkGateResult, handleTapAppMessageEmbed

// Module 12273 (createAppMessageEmbed)
import URLUtilsDefault from "URLUtils" /* 1366 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import ChatInputUtils from "ChatInputUtils" /* 4693 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7494 */;
import ClipboardUtils from "ClipboardUtils" /* 7520 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7851 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8289 */;
import ApplicationUtils from "ApplicationUtils" /* 9396 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9480 */;
import AppLauncherPlayUtils from "AppLauncherPlayUtils" /* 11852 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 12274 */;
import joinOrStartActivityInChannel from "joinOrStartActivityInChannel" /* 12278 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1372 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8495 */;
import ApplicationStore from "ApplicationStore" /* 5054 */;

require = fn;
const FetchState = fn(8495).FetchState;
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const MAIN_SURFACE = fn(9390).MAIN_SURFACE;
const CodedLinkExtendedType = fn(11652).CodedLinkExtendedType;
let closure_11 = ["embedded_cover"];
let c12 = 512;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(arg0) {
  ({ appId, message } = arg0);
  ({ channel, theme } = arg0);
  const application = ApplicationStore.getApplication(appId);
  if (null == application) {
    if (false === ApplicationStore.isFetchingApplication(appId)) {
      const application1 = ApplicationActionCreators.fetchApplication(appId);
    }
    return { state: "unavailable" };
  } else {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let messageResult = dependencyMap;
    const contentClassificationVisibility = ContentClassificationVisibility.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY) {
      let intl = getEmbedThemeColorsDefault(theme).baseColors;
      if (contentClassificationVisibility === tmp3(12274).ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl3 = tmp3(1115).intl;
        let stringResult = intl3.string(tmp3(1115).t.LPOzxB);
      } else {
        const intl2 = tmp3(1115).intl;
        stringResult = intl2.string(tmp3(1115).t.NIZyKq);
      }
      const obj3 = { state: "blocked", model: null };
      const obj4 = {};
      const merged = Object.assign(intl);
      obj4.displayType = tmp3(12275).AppMessageEmbedDisplayType.BLOCKED;
      obj4.appId = "";
      obj4.messageId = message.id;
      obj4.title = null;
      intl = tmp3(1115).intl;
      message = intl.string;
      messageResult = message(tmp3(1115).t.bZBN64);
      obj4.header = messageResult;
      obj4.info = stringResult;
      obj4.tagline = null;
      obj4.iconSrc = null;
      obj4.staticBannerSrc = null;
      obj4.bannerRatio = "bot";
      obj4.actions = [];
      obj4.embedUrl = null;
      obj4.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj4.gradientColors = [];
      obj4.type = null;
      obj4.headerText = null;
      obj3.model = obj4;
    } else {
      const obj5 = { state: "display", app: application };
      return obj5;
    }
  }
};
export const createAppMessageEmbed = function createAppMessageEmbed(arg0) {
  ({ message, app } = arg0);
  ({ theme, embedUrl } = arg0);
  const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  ({ name, bot } = app);
  const isEmbeddedAppResult = AppLauncherUtils.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    const applicationAssetFetchState = ApplicationAssetsStore.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      const assetIds = tmp2(8494).fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = tmp2(1115).intl;
      const obj2 = { count: maxParticipants };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.z8EAJW, obj2);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      if (tmp2Result9.canLaunchFrame(app)) {
        const obj3 = { id: "play_frame", label: null };
        const intl6 = tmp2(1115).intl;
        obj3.label = intl6.string(tmp2(1115).t.RscU7I);
        items.push(obj3);
      } else {
        const playInContext = tmp2(12276).getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = tmp2(1115).intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = tmp2(1115).intl;
            let stringResult = intl5.string(tmp2(1115).t.DPfdsq);
          } else {
            stringResult = tmp11;
            if (null != tmp9) {
              const intl4 = tmp2(1115).intl;
              stringResult = intl4.string(tmp2(1115).t.VJlc0S);
            }
          }
          const obj4 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj4);
        } else {
          const obj5 = { id: "play_in_dm", label: null };
          const intl3 = tmp2(1115).intl;
          obj5.label = intl3.string(tmp2(1115).t.JeK1Wg);
          items.push(obj5);
        }
        const tmp2Result10 = tmp2(12276);
      }
      tmp2Result9 = tmp2(9673);
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    if (tmp2Result11.isEmbeddedApp(app)) {
      let assetIds1 = tmp2(8494).getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = _slicedToArray(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = tmp2(8494).getAssetImage(id2, first, c12);
        const tmp2Result13 = tmp2(8494);
      }
      if (null != assetImage) {
        const obj6 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        let obj10 = obj6;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = tmp2(12277).getAppIconSrc(id, icon, bot);
        const tmp2Result14 = tmp2(12277);
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj10.staticBannerSrc;
      }
      const tmp2Result12 = tmp2(8494);
      const obj7 = {};
      const appGradientColors = tmp2(12277).getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj10);
      obj7.displayType = tmp2(12275).AppMessageEmbedDisplayType.DISPLAY;
      obj7.appId = app.id;
      obj7.messageId = message.id;
      obj7.title = null;
      obj7.header = name;
      obj7.info = joined;
      obj7.tagline = formatToPlainStringResult;
      obj7.iconSrc = appIconSrc;
      obj7.actions = items;
      obj7.embedUrl = embedUrl;
      obj7.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj7.gradientColors = appGradientColors;
      obj7.type = null;
      obj7.headerText = null;
      return obj7;
    }
    if (null != bot2) {
      ({ id: obj12.id, banner: obj12.banner } = bot2);
      const userBannerURL = tmp2(1397).getUserBannerURL({ id: null, banner: null, size: 512, canAnimate: false });
      if (null != userBannerURL) {
        const obj9 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        obj10 = obj9;
      }
      const obj8 = { id: null, banner: null, size: 512, canAnimate: false };
      const tmp2Result16 = tmp2(1397);
    }
    obj10 = { bannerRatio: "bot", staticBannerSrc: null };
    tmp2Result11 = tmp2(9480);
  }
  const intl = tmp2(1115).intl;
  formatToPlainStringResult = intl.string(tmp2(1115).t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = ApplicationStore.getApplication(appId.appId);
  const toURLSafeResult = URLUtilsDefault.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  value2 = undefined;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value2 = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    const obj8 = { appId: appId.appId, channelId: appId.message.channel_id, analyticsLocations: null, referrerId: null, customId: null };
    const items = [tmp2(7513).APP_MESSAGE_EMBED];
    obj8.analyticsLocations = items;
    obj8.referrerId = id;
    obj8.customId = value2;
    const result = joinOrStartActivityInChannel.joinOrStartActivityInChannel(obj8);
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      const obj9 = { appId: appId.appId, botId: application.bot.id, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
      const items1 = [tmp2(7513).APP_MESSAGE_EMBED];
      obj9.analyticsLocations = items1;
      obj9.commandOrigin = ApplicationCommandTypes.CommandOrigin.APP_MESSAGE_EMBED;
      obj9.referrerId = id;
      obj9.customId = value2;
      const result1 = AppLauncherPlayUtils.launchActivityInBotDM(obj9);
    }
  } else if ("play_frame" === actionId) {
    const obj10 = { applicationId: appId.appId, surface: MAIN_SURFACE, analyticsContext: null };
    const obj11 = { isStart: true, analyticsLocations: null };
    const items2 = [tmp2(7513).APP_MESSAGE_EMBED];
    obj11.analyticsLocations = items2;
    obj10.analyticsContext = obj11;
    tmp2(9650).launchFrame(obj10);
    const tmp2Result = tmp2(9650);
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = ChatInputUtils.getBestActiveInput();
    if (bestActiveInput != null) {
      const obj13 = { type: tmp14(1610).KeyboardTypes.APP_LAUNCHER, context: null };
      const obj14 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: value2 };
      obj13.context = obj14;
      bestActiveInput.openCustomKeyboard(obj13);
    }
    tmp14 = require;
  } else if ("add_app" === actionId) {
    if (null != application) {
      ({ id: obj6.applicationId, customInstallUrl: obj6.customInstallUrl, installParams: obj6.installParams, integrationTypesConfig: obj6.integrationTypesConfig } = application);
      ApplicationUtils.installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" });
      const obj15 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
    }
  } else if ("link_copied" === actionId) {
    ClipboardUtils.copy(appId.embedUrl);
    ToastUtils.presentLinkCopied();
  } else {
    GlobalUtils.assertNever(appId.actionId);
  }
};
