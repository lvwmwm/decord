// Module ID: 11084
// Function ID: 86199
// Name: createBlockedAppMessageEmbed
// Dependencies: [57, 1849, 7821, 4167, 1455, 9479, 5465, 11085, 7633, 1212, 11086, 7919, 7820, 10482, 11087, 11088, 1392, 1443, 11089, 5484, 10838, 6755, 10483, 3989, 1555, 10832, 5492, 3830, 1327, 2]
// Exports: createAppMessageEmbed, getAppLinkGateResult, handleTapAppMessageEmbed

// Module 11084 (createBlockedAppMessageEmbed)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";

const require = arg1;
function createBlockedAppMessageEmbed(arg0) {
  let message;
  let theme;
  let visibility;
  ({ theme, message, visibility } = arg0);
  if (visibility === require(11085) /* getContentClassificationVisibility */.ContentClassificationVisibility.BLOCK_UNDERAGE) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.LPOzxB);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.NIZyKq);
  }
  const obj = {};
  const merged = Object.assign(importDefault(7633)(theme).baseColors);
  obj["displayType"] = require(11086) /* AppMessageEmbedDisplayType */.AppMessageEmbedDisplayType.BLOCKED;
  obj["appId"] = "";
  obj["messageId"] = message.id;
  obj["title"] = null;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj["header"] = intl3.string(require(1212) /* getSystemLocale */.t.bZBN64);
  obj["info"] = stringResult;
  obj["tagline"] = null;
  obj["iconSrc"] = null;
  obj["staticBannerSrc"] = null;
  obj["bannerRatio"] = "bot";
  obj["actions"] = [];
  obj["embedUrl"] = null;
  obj["extendedType"] = CodedLinkExtendedType.APP_MESSAGE_EMBED;
  obj["gradientColors"] = [];
  obj["type"] = null;
  obj["headerText"] = null;
  return obj;
}
let closure_10 = ["embedded_cover"];
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(appId) {
  let channel;
  let message;
  let theme;
  appId = appId.appId;
  ({ channel, message, theme } = appId);
  const application = store.getApplication(appId);
  if (null == application) {
    if (false === store.isFetchingApplication(appId)) {
      const application1 = require(5465) /* fetchApplication */.fetchApplication(appId);
      const obj5 = require(5465) /* fetchApplication */;
    }
    let obj = { state: "unavailable" };
    return obj;
  } else {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    obj = require(11085) /* getContentClassificationVisibility */;
    const contentClassificationVisibility = obj.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== require(11085) /* getContentClassificationVisibility */.ContentClassificationVisibility.DISPLAY) {
      obj = { state: "blocked" };
      const obj1 = { theme, message, visibility: contentClassificationVisibility };
      obj.model = createBlockedAppMessageEmbed(obj1);
      let obj2 = obj;
    } else {
      obj2 = { state: "display", app: application };
    }
    return obj2;
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
  const baseColors = importDefault(7633)(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  ({ name, bot } = app);
  let obj = require(7919) /* _createForOfIteratorHelperLoose */;
  const isEmbeddedAppResult = obj.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    applicationAssetFetchState = applicationAssetFetchState.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      const assetIds = require(7820) /* _createForOfIteratorHelperLoose */.fetchAssetIds(id, closure_10);
      return null;
    } else if (applicationAssetFetchState === FetchState.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { count: maxParticipants };
      let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.z8EAJW, obj);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      let obj2 = require(10482) /* canLaunchFrame */;
      if (obj2.canLaunchFrame(app)) {
        obj = { id: "play_frame" };
        const intl6 = require(1212) /* getSystemLocale */.intl;
        obj.label = intl6.string(require(1212) /* getSystemLocale */.t.RscU7I);
        items.push(obj);
      } else {
        let obj3 = require(11087) /* usePlayInContext */;
        const playInContext = obj3.getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = require(1212) /* getSystemLocale */.intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = require(1212) /* getSystemLocale */.intl;
            let stringResult = intl5.string(require(1212) /* getSystemLocale */.t.DPfdsq);
          } else {
            stringResult = tmp19;
            if (null != tmp13) {
              const intl4 = require(1212) /* getSystemLocale */.intl;
              stringResult = intl4.string(require(1212) /* getSystemLocale */.t.VJlc0S);
            }
          }
          const obj1 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj1);
        } else {
          obj2 = { id: "play_in_dm" };
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.JeK1Wg);
          items.push(obj2);
        }
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    let obj7 = require(7919) /* _createForOfIteratorHelperLoose */;
    if (obj7.isEmbeddedApp(app)) {
      let assetIds1 = require(7820) /* _createForOfIteratorHelperLoose */.getAssetIds(id2, closure_10);
      if (null == assetIds1) {
        assetIds1 = [];
      }
      const first = callback(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = require(7820) /* _createForOfIteratorHelperLoose */.getAssetImage(id2, first, 512);
        const obj10 = require(7820) /* _createForOfIteratorHelperLoose */;
      }
      if (null != assetImage) {
        obj3 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        obj7 = obj3;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = require(11088) /* items */.getAppIconSrc(id, icon, bot);
        const obj16 = require(11088) /* items */;
      }
      let staticBannerSrc = appIconSrc;
      if (null == appIconSrc) {
        staticBannerSrc = obj7.staticBannerSrc;
      }
      let tmp46;
      if (null != staticBannerSrc) {
        tmp46 = staticBannerSrc;
      }
      const obj9 = require(7820) /* _createForOfIteratorHelperLoose */;
      const obj4 = {};
      const appGradientColors = require(11088) /* items */.getAppGradientColors(tmp46);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj7);
      obj4["displayType"] = require(11086) /* AppMessageEmbedDisplayType */.AppMessageEmbedDisplayType.DISPLAY;
      obj4["appId"] = app.id;
      obj4["messageId"] = message.id;
      obj4["title"] = null;
      obj4["header"] = name;
      obj4["info"] = joined;
      obj4["tagline"] = formatToPlainStringResult;
      obj4["iconSrc"] = appIconSrc;
      obj4["actions"] = items;
      obj4["embedUrl"] = embedUrl;
      obj4["extendedType"] = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj4["gradientColors"] = appGradientColors;
      obj4["type"] = null;
      obj4["headerText"] = null;
      return obj4;
    }
    if (null != bot2) {
      const obj5 = {};
      ({ id: obj12.id, banner: obj12.banner } = bot2);
      obj5.size = 512;
      obj5.canAnimate = false;
      const userBannerURL = require(1392) /* getAvatarURL */.getUserBannerURL(obj5);
      if (null != userBannerURL) {
        const obj6 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        obj7 = obj6;
      }
      const obj11 = require(1392) /* getAvatarURL */;
    }
    obj7 = { bannerRatio: "bot", staticBannerSrc: null };
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = store.getApplication(appId.appId);
  let obj = importDefault(1443);
  const toURLSafeResult = obj.toURLSafe(appId.embedUrl);
  let id;
  if (null != toURLSafeResult) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (null == id) {
    id = appId.message.author.id;
  }
  let value;
  if (null != toURLSafeResult) {
    const searchParams2 = toURLSafeResult.searchParams;
    value = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    obj = { appId: appId.appId, channelId: appId.message.channel_id };
    const items = [importDefault(5484).APP_MESSAGE_EMBED];
    obj.analyticsLocations = items;
    obj.referrerId = id;
    obj.customId = tmp5;
    const result = require(11089) /* _joinOrStartActivityInChannel */.joinOrStartActivityInChannel(obj);
    const obj11 = require(11089) /* _joinOrStartActivityInChannel */;
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (null != application) {
      bot = application.bot;
    }
    if (null != bot) {
      obj = { appId: appId.appId, botId: application.bot.id };
      const items1 = [importDefault(5484).APP_MESSAGE_EMBED];
      obj.analyticsLocations = items1;
      obj.commandOrigin = require(6755) /* ApplicationCommandSectionType */.CommandOrigin.APP_MESSAGE_EMBED;
      obj.referrerId = id;
      obj.customId = tmp5;
      const result1 = require(10838) /* _launchActivityInBotDM */.launchActivityInBotDM(obj);
      const obj15 = require(10838) /* _launchActivityInBotDM */;
    }
  } else if ("play_frame" === actionId) {
    let obj1 = { applicationId: appId.appId };
    importDefault(10483).launchFrame(obj1);
    const obj9 = importDefault(10483);
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = require(3989) /* getHighestActiveScreenIndex */.getBestActiveInput();
    if (null != bestActiveInput) {
      let obj2 = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER };
      let obj3 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: tmp5 };
      obj2.context = obj3;
      bestActiveInput.openCustomKeyboard(obj2);
    }
    const obj7 = require(3989) /* getHighestActiveScreenIndex */;
  } else if ("add_app" === actionId) {
    if (null != application) {
      let obj4 = require(10832) /* openOAuth2Modal */;
      obj4 = {};
      ({ id: obj6.applicationId, customInstallUrl: obj6.customInstallUrl, installParams: obj6.installParams, integrationTypesConfig: obj6.integrationTypesConfig } = application);
      obj4.source = "app_message_embed";
      obj4.installApplication(obj4);
    }
  } else if ("link_copied" === actionId) {
    obj2 = require(5492) /* _copy */;
    obj2.copy(appId.embedUrl);
    obj3 = require(3830) /* presentAddedFriendToast */;
    obj3.presentLinkCopied();
  } else {
    obj1 = require(1327) /* isDiscordFrontendDevelopment */;
    obj1.assertNever(appId.actionId);
  }
};
