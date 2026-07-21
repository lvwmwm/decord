// Module ID: 11073
// Function ID: 86136
// Name: createBlockedAppMessageEmbed
// Dependencies: []
// Exports: createAppMessageEmbed, getAppLinkGateResult, handleTapAppMessageEmbed

// Module 11073 (createBlockedAppMessageEmbed)
function createBlockedAppMessageEmbed(arg0) {
  let message;
  let theme;
  let visibility;
  ({ theme, message, visibility } = arg0);
  if (visibility === arg1(dependencyMap[7]).ContentClassificationVisibility.BLOCK_UNDERAGE) {
    const intl2 = arg1(dependencyMap[9]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[9]).t.LPOzxB);
  } else {
    const intl = arg1(dependencyMap[9]).intl;
    stringResult = intl.string(arg1(dependencyMap[9]).t.NIZyKq);
  }
  const obj = {};
  const merged = Object.assign(importDefault(dependencyMap[8])(theme).baseColors);
  obj["displayType"] = arg1(dependencyMap[10]).AppMessageEmbedDisplayType.BLOCKED;
  obj["appId"] = "";
  obj["messageId"] = message.id;
  obj["title"] = null;
  const intl3 = arg1(dependencyMap[9]).intl;
  obj["header"] = intl3.string(arg1(dependencyMap[9]).t.bZBN64);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const FetchState = arg1(dependencyMap[2]).FetchState;
let closure_7 = importDefault(dependencyMap[3]);
const AppLauncherRouteName = arg1(dependencyMap[4]).AppLauncherRouteName;
const CodedLinkExtendedType = arg1(dependencyMap[5]).CodedLinkExtendedType;
let closure_10 = ["RollOutRight"];
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(appId) {
  let channel;
  let message;
  let theme;
  appId = appId.appId;
  ({ channel, message, theme } = appId);
  const application = store.getApplication(appId);
  if (null == application) {
    if (false === store.isFetchingApplication(appId)) {
      const application1 = arg1(dependencyMap[6]).fetchApplication(appId);
      const obj5 = arg1(dependencyMap[6]);
    }
    let obj = { state: "unavailable" };
    return obj;
  } else {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    obj = arg1(dependencyMap[7]);
    const contentClassificationVisibility = obj.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== arg1(dependencyMap[7]).ContentClassificationVisibility.DISPLAY) {
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
  const baseColors = importDefault(dependencyMap[8])(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  ({ name, bot } = app);
  let obj = arg1(dependencyMap[11]);
  const isEmbeddedAppResult = obj.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    const applicationAssetFetchState = applicationAssetFetchState.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      const assetIds = arg1(dependencyMap[12]).fetchAssetIds(id, closure_10);
      return null;
    } else if (applicationAssetFetchState === FetchState.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = arg1(dependencyMap[9]).intl;
      obj = { count: maxParticipants };
      let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[9]).t.z8EAJW, obj);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      let obj2 = arg1(dependencyMap[13]);
      if (obj2.canLaunchFrame(app)) {
        obj = { id: "play_frame" };
        const intl6 = arg1(dependencyMap[9]).intl;
        obj.label = intl6.string(arg1(dependencyMap[9]).t.RscU7I);
        items.push(obj);
      } else {
        let obj3 = arg1(dependencyMap[14]);
        const playInContext = obj3.getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = arg1(dependencyMap[9]).intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = arg1(dependencyMap[9]).intl;
            let stringResult = intl5.string(arg1(dependencyMap[9]).t.DPfdsq);
          } else {
            stringResult = tmp19;
            if (null != tmp13) {
              const intl4 = arg1(dependencyMap[9]).intl;
              stringResult = intl4.string(arg1(dependencyMap[9]).t.VJlc0S);
            }
          }
          const obj1 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj1);
        } else {
          obj2 = { id: "play_in_dm" };
          const intl3 = arg1(dependencyMap[9]).intl;
          obj2.label = intl3.string(arg1(dependencyMap[9]).t.JeK1Wg);
          items.push(obj2);
        }
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    let obj7 = arg1(dependencyMap[11]);
    if (obj7.isEmbeddedApp(app)) {
      let assetIds1 = arg1(dependencyMap[12]).getAssetIds(id2, closure_10);
      if (null == assetIds1) {
        assetIds1 = [];
      }
      const first = callback(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = arg1(dependencyMap[12]).getAssetImage(id2, first, 512);
        const obj10 = arg1(dependencyMap[12]);
      }
      if (null != assetImage) {
        obj3 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        obj7 = obj3;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = arg1(dependencyMap[15]).getAppIconSrc(id, icon, bot);
        const obj16 = arg1(dependencyMap[15]);
      }
      let staticBannerSrc = appIconSrc;
      if (null == appIconSrc) {
        staticBannerSrc = obj7.staticBannerSrc;
      }
      let tmp46;
      if (null != staticBannerSrc) {
        tmp46 = staticBannerSrc;
      }
      const obj9 = arg1(dependencyMap[12]);
      const obj4 = {};
      const appGradientColors = arg1(dependencyMap[15]).getAppGradientColors(tmp46);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj7);
      obj4["displayType"] = arg1(dependencyMap[10]).AppMessageEmbedDisplayType.DISPLAY;
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
      const userBannerURL = arg1(dependencyMap[16]).getUserBannerURL(obj5);
      if (null != userBannerURL) {
        const obj6 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        obj7 = obj6;
      }
      const obj11 = arg1(dependencyMap[16]);
    }
    obj7 = {};
  }
  const intl = arg1(dependencyMap[9]).intl;
  formatToPlainStringResult = intl.string(arg1(dependencyMap[9]).t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = store.getApplication(appId.appId);
  let obj = importDefault(dependencyMap[17]);
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
    const items = [importDefault(dependencyMap[19]).APP_MESSAGE_EMBED];
    obj.analyticsLocations = items;
    obj.referrerId = id;
    obj.customId = tmp5;
    const result = arg1(dependencyMap[18]).joinOrStartActivityInChannel(obj);
    const obj11 = arg1(dependencyMap[18]);
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (null != application) {
      bot = application.bot;
    }
    if (null != bot) {
      obj = { appId: appId.appId, botId: application.bot.id };
      const items1 = [importDefault(dependencyMap[19]).APP_MESSAGE_EMBED];
      obj.analyticsLocations = items1;
      obj.commandOrigin = arg1(dependencyMap[21]).CommandOrigin.APP_MESSAGE_EMBED;
      obj.referrerId = id;
      obj.customId = tmp5;
      const result1 = arg1(dependencyMap[20]).launchActivityInBotDM(obj);
      const obj15 = arg1(dependencyMap[20]);
    }
  } else if ("play_frame" === actionId) {
    let obj1 = { applicationId: appId.appId };
    importDefault(dependencyMap[22]).launchFrame(obj1);
    const obj9 = importDefault(dependencyMap[22]);
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = arg1(dependencyMap[23]).getBestActiveInput();
    if (null != bestActiveInput) {
      let obj2 = { type: arg1(dependencyMap[24]).KeyboardTypes.APP_LAUNCHER };
      let obj3 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: tmp5 };
      obj2.context = obj3;
      bestActiveInput.openCustomKeyboard(obj2);
    }
    const obj7 = arg1(dependencyMap[23]);
  } else if ("add_app" === actionId) {
    if (null != application) {
      let obj4 = arg1(dependencyMap[25]);
      obj4 = {};
      ({ id: obj6.applicationId, customInstallUrl: obj6.customInstallUrl, installParams: obj6.installParams, integrationTypesConfig: obj6.integrationTypesConfig } = application);
      obj4.source = "app_message_embed";
      obj4.installApplication(obj4);
    }
  } else if ("link_copied" === actionId) {
    obj2 = arg1(dependencyMap[26]);
    obj2.copy(appId.embedUrl);
    obj3 = arg1(dependencyMap[27]);
    obj3.presentLinkCopied();
  } else {
    obj1 = arg1(dependencyMap[28]);
    obj1.assertNever(appId.actionId);
  }
};
