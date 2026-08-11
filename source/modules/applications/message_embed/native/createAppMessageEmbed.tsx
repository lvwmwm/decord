// Module ID: 11352
// Function ID: 11353
// Name: createAppMessageEmbed
// Dependencies: [32, 1922, 8246, 4341, 1498, 10598, 10997, 5729, 11353, 8055, 1236, 11354, 8343, 8245, 10600, 11355, 11356, 1435, 1486, 11357, 5748, 10985, 6985, 10601, 4166, 1626, 10625, 5756, 4020, 1370, 2]
// Exports: createAppMessageEmbed, getAppLinkGateResult, handleTapAppMessageEmbed

// Module 11352 (createAppMessageEmbed)
import _slicedToArray from "_slicedToArray";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleFetchEmbeddedActivityShelfSuccess from "handleFetchEmbeddedActivityShelfSuccess";
import { FetchState } from "handleFetchEmbeddedActivityShelfSuccess";
import addApplication from "addApplication";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { MAIN_SURFACE } from "FrameLayoutModes";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";

const require = arg1;
let closure_11 = ["embedded_cover"];
let c12 = 512;
let result = require("handleFetchEmbeddedActivityShelfSuccess").fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(arg0) {
  let appId;
  let channel;
  let message;
  let theme;
  ({ appId, message } = arg0);
  let obj = store;
  ({ channel, theme } = arg0);
  const application = store.getApplication(appId);
  if (null == application) {
    if (false === obj.isFetchingApplication(appId)) {
      const application1 = require(5729) /* fetchApplication */.fetchApplication(appId);
      const obj6 = require(5729) /* fetchApplication */;
    }
    return { state: "unavailable" };
  } else {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let messageResult = dependencyMap;
    let obj1 = require(11353) /* ContentClassificationVisibility */;
    const contentClassificationVisibility = obj1.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== require(11353) /* ContentClassificationVisibility */.ContentClassificationVisibility.DISPLAY) {
      let intl = importDefault(8055)(theme).baseColors;
      if (contentClassificationVisibility === tmp3(11353).ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl3 = tmp3(1236).intl;
        let stringResult = intl3.string(tmp3(1236).t.LPOzxB);
      } else {
        const intl2 = tmp3(1236).intl;
        stringResult = intl2.string(tmp3(1236).t.NIZyKq);
      }
      obj = { state: "blocked", model: null };
      obj = {};
      const merged = Object.assign(intl);
      obj.displayType = tmp3(11354).AppMessageEmbedDisplayType.BLOCKED;
      obj.appId = "";
      obj.messageId = message.id;
      obj.title = null;
      intl = tmp3(1236).intl;
      message = intl.string;
      messageResult = message(tmp3(1236).t.bZBN64);
      obj.header = messageResult;
      obj.info = stringResult;
      obj.tagline = null;
      obj.iconSrc = null;
      obj.staticBannerSrc = null;
      obj.bannerRatio = "bot";
      obj.actions = [];
      obj.embedUrl = null;
      obj.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj.gradientColors = [];
      obj.type = null;
      obj.headerText = null;
      obj[1] = obj;
    } else {
      obj1 = { state: "display", app: null };
      obj1[1] = application;
      return obj1;
    }
  }
};
export const createAppMessageEmbed = function createAppMessageEmbed(arg0) {
  let app;
  let bot;
  let bot2;
  let embedUrl;
  let icon;
  let id;
  let id2;
  let maxParticipants;
  let message;
  let name;
  let tags;
  let theme;
  ({ message, app } = arg0);
  ({ theme, embedUrl } = arg0);
  const baseColors = importDefault(8055)(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  ({ name, bot } = app);
  let obj = require(8343) /* getShelfBadgeTypeIfActive */;
  const isEmbeddedAppResult = obj.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    applicationAssetFetchState = applicationAssetFetchState.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      let tmp2Result = tmp2(8245);
      const assetIds = tmp2Result.fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = tmp2(1236).intl;
      obj = { count: null };
      obj[0] = maxParticipants;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.z8EAJW, obj);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      tmp2Result = tmp2(10600);
      if (tmp2Result.canLaunchFrame(app)) {
        obj = { id: "play_frame", label: null };
        const intl6 = tmp2(1236).intl;
        obj[1] = intl6.string(tmp2(1236).t.RscU7I);
        items.push(obj);
      } else {
        const playInContext = tmp2(11355).getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = tmp2(1236).intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = tmp2(1236).intl;
            let stringResult = intl5.string(tmp2(1236).t.DPfdsq);
          } else {
            stringResult = tmp11;
            if (null != tmp9) {
              const intl4 = tmp2(1236).intl;
              stringResult = intl4.string(tmp2(1236).t.VJlc0S);
            }
          }
          const obj1 = { id: "play_in_channel", label: null, disabled: null };
          obj1[1] = stringResult;
          obj1[2] = isCurrentlyInInstance;
          items.push(obj1);
        } else {
          const obj2 = { id: "play_in_dm", label: null };
          const intl3 = tmp2(1236).intl;
          obj2[1] = intl3.string(tmp2(1236).t.JeK1Wg);
          items.push(obj2);
        }
        const tmp2Result1 = tmp2(11355);
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    if (tmp2Result2.isEmbeddedApp(app)) {
      let assetIds1 = tmp2(8245).getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = callback(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = tmp2(8245).getAssetImage(id2, first, c12);
        const tmp2Result4 = tmp2(8245);
      }
      if (null != assetImage) {
        const obj3 = { bannerRatio: "activity", staticBannerSrc: null };
        obj3[1] = assetImage;
        let obj7 = obj3;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = tmp2(11356).getAppIconSrc(id, icon, bot);
        const tmp2Result5 = tmp2(11356);
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj7.staticBannerSrc;
      }
      const tmp2Result3 = tmp2(8245);
      const obj4 = {};
      const appGradientColors = tmp2(11356).getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj7);
      obj4.displayType = tmp2(11354).AppMessageEmbedDisplayType.DISPLAY;
      obj4.appId = app.id;
      obj4.messageId = message.id;
      obj4.title = null;
      obj4.header = name;
      obj4.info = joined;
      obj4.tagline = formatToPlainStringResult;
      obj4.iconSrc = appIconSrc;
      obj4.actions = items;
      obj4.embedUrl = embedUrl;
      obj4.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj4.gradientColors = appGradientColors;
      obj4.type = null;
      obj4.headerText = null;
      return obj4;
    }
    if (null != bot2) {
      ({ id: obj12[0], banner: obj12[1] } = bot2);
      const userBannerURL = tmp2(1435).getUserBannerURL({ id: null, banner: null, size: 512, canAnimate: false });
      if (null != userBannerURL) {
        const obj6 = { bannerRatio: "bot", staticBannerSrc: null };
        obj6[1] = userBannerURL;
        obj7 = obj6;
      }
      const obj5 = { id: null, banner: null, size: 512, canAnimate: false };
      const tmp2Result7 = tmp2(1435);
    }
    obj7 = { bannerRatio: "bot", staticBannerSrc: null };
    tmp2Result2 = tmp2(8343);
  }
  const intl = tmp2(1236).intl;
  formatToPlainStringResult = intl.string(tmp2(1236).t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = store.getApplication(appId.appId);
  let obj = importDefault(1486);
  const toURLSafeResult = obj.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  let value;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    obj = { appId: null, channelId: null, analyticsLocations: null, referrerId: null, customId: null };
    obj[0] = appId.appId;
    obj[1] = appId.message.channel_id;
    const items = [tmp2(5748).APP_MESSAGE_EMBED];
    obj[2] = items;
    obj[3] = id;
    obj[4] = value;
    const result = require(11357) /* _joinOrStartActivityInChannel */.joinOrStartActivityInChannel(obj);
    const obj11 = require(11357) /* _joinOrStartActivityInChannel */;
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      obj = { appId: null, botId: null, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
      obj[0] = appId.appId;
      obj[1] = application.bot.id;
      const items1 = [tmp2(5748).APP_MESSAGE_EMBED];
      obj[2] = items1;
      obj[3] = require(6985) /* ApplicationCommandSectionType */.CommandOrigin.APP_MESSAGE_EMBED;
      obj[4] = id;
      obj[5] = value;
      const result1 = require(10985) /* _launchActivityInBotDM */.launchActivityInBotDM(obj);
      const obj15 = require(10985) /* _launchActivityInBotDM */;
    }
  } else if ("play_frame" === actionId) {
    let obj1 = { applicationId: null, surface: null };
    obj1[0] = appId.appId;
    obj1[1] = MAIN_SURFACE;
    tmp2(10601).launchFrame(obj1);
    const tmp2Result = tmp2(10601);
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = require(4166) /* getBestActiveInput */.getBestActiveInput();
    if (bestActiveInput != null) {
      let obj2 = { type: null, context: null };
      obj2[0] = tmp14(1626).KeyboardTypes.APP_LAUNCHER;
      let obj3 = { initialRouteName: null, initiallyExpanded: true, applicationId: null, referrerId: null, customId: null };
      obj3[0] = AppLauncherRouteName.APPLICATION_VIEW;
      obj3[2] = appId.appId;
      obj3[3] = id;
      obj3[4] = value;
      obj2[1] = obj3;
      bestActiveInput.openCustomKeyboard(obj2);
    }
    const obj7 = require(4166) /* getBestActiveInput */;
    tmp14 = require;
  } else if ("add_app" === actionId) {
    if (null != application) {
      let obj4 = require(10625) /* installApplication */;
      obj4 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
      ({ id: obj6[0], customInstallUrl: obj6[1], installParams: obj6[2], integrationTypesConfig: obj6[3] } = application);
      obj4.installApplication(obj4);
    }
  } else if ("link_copied" === actionId) {
    obj2 = require(5756) /* _copy */;
    obj2.copy(appId.embedUrl);
    obj3 = require(4020) /* presentAddedFriendToast */;
    obj3.presentLinkCopied();
  } else {
    obj1 = require(1370) /* isDiscordFrontendDevelopment */;
    obj1.assertNever(appId.actionId);
  }
};
