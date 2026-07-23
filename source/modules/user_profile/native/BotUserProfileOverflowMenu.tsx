// Module ID: 11894
// Function ID: 92037
// Name: BotUserProfileOverflowMenu
// Dependencies: [31, 1348, 3767, 1906, 1849, 653, 10420, 33, 566, 11895, 8266, 5464, 5484, 8492, 1212, 8923, 4098, 10422, 1934, 480, 7488, 10421, 11896, 11896, 477, 11653, 675, 5492, 3969, 3830, 7371, 7919, 11252, 3803, 11897, 9302, 7771, 8968, 689, 2]
// Exports: default

// Module 11894 (BotUserProfileOverflowMenu)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import { jsx } from "explicitContentFromProto";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, ApplicationFlags: closure_9, ChannelTypesSets: closure_10, RelationshipTypes: closure_11 } = ME);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_12, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_13 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/BotUserProfileOverflowMenu.tsx");

export default function BotUserProfileOverflowMenu(application) {
  let isIgnored;
  let relationshipType;
  application = application.application;
  const user = application.user;
  const channel = application.channel;
  let constants;
  let id;
  let guildId;
  let closure_12;
  let installAppPropsFromProfileApplication;
  let obj = application(channel[8]);
  const items = [trackUserProfileAction];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ relationshipType: trackUserProfileAction.getRelationshipType(user.id), isIgnored: trackUserProfileAction.isIgnored(user.id) }));
  ({ relationshipType, isIgnored } = stateFromStoresObject);
  let obj1 = application(channel[8]);
  const items1 = [analyticsLocations, context];
  const stateFromStores = obj1.useStateFromStores(items1, () => context.getChannel(analyticsLocations.getChannelId()));
  let obj2 = application(channel[9]);
  let result = obj2.isIarUserReportingEnabled("User Profile Options - Mobile");
  let obj3 = application(channel[10]);
  const userProfileAnalyticsContext = obj3.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp5Result = user(channel[11])(user(channel[12]).USER_PROFILE_OVERFLOW_MENU);
  analyticsLocations = tmp5Result.analyticsLocations;
  const newestAnalyticsLocation = tmp5Result.newestAnalyticsLocation;
  const currentUser = newestAnalyticsLocation.getCurrentUser();
  const items2 = [user.id, , , ];
  id = undefined;
  if (null != channel) {
    id = channel.id;
  }
  items2[1] = id;
  items2[2] = context;
  items2[3] = analyticsLocations;
  constants = stateFromStores.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(context);
    obj["showGuildProfile"] = arg0;
    obj["userId"] = user.id;
    let id;
    if (null != channel) {
      id = channel.id;
    }
    obj["channelId"] = id;
    obj["sourceAnalyticsLocations"] = analyticsLocations;
    obj["ignoreBlockedSpeedBump"] = true;
    user(channel[13])(obj);
  }, items2);
  const items3 = [];
  const items4 = [];
  id = user.id;
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  if (isIgnored) {
    if (!tmp10) {
      obj = {};
      let intl = application(channel[14]).intl;
      obj.label = intl.string(application(channel[14]).t["8wXU9B"]);
      obj.action = function action() {
        trackUserProfileAction({ action: "UNIGNORE", analyticsLocations });
        let id;
        if (null != channel) {
          id = channel.id;
        }
        user(channel[15]).unignoreUser(id, newestAnalyticsLocation, id);
        callback();
      };
      items4.push(obj);
    }
    if (tmp10) {
      obj = {};
      const intl3 = application(channel[14]).intl;
      obj.label = intl3.string(application(channel[14]).t.XyHpKH);
      obj.action = function action() {
        let obj = { action: "UNBLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        obj = { location: newestAnalyticsLocation };
        user(channel[15]).unblockUser(id, obj);
        const obj2 = user(channel[15]);
        id = undefined;
        if (null != channel) {
          id = channel.id;
        }
        const result = user(channel[20]).showUnblockSuccessToast(id, id);
        callback();
      };
      items4.push(obj);
    }
    if (!tmp10) {
      obj1 = {};
      const intl4 = application(channel[14]).intl;
      obj1.label = intl4.string(application(channel[14]).t.l4Emac);
      obj1.variant = "destructive";
      obj1.action = function action() {
        let obj = { action: "BLOCK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = user(channel[16]);
        obj = { userId: id };
        id = undefined;
        if (null != channel) {
          id = channel.id;
        }
        obj.channelId = id;
        obj.onSuccess = function onSuccess() {
          outer1_9();
        };
        obj.impressionName = application(channel[19]).ImpressionNames.BLOCK_USER_CONFIRMATION;
        obj2.openLazy(application(channel[18])(channel[21], channel.paths), closure_12, obj, "stack");
      };
      items4.push(obj1);
      if (result) {
        obj2 = {};
        const intl6 = application(channel[14]).intl;
        obj2.label = intl6.string(application(channel[14]).t.jhJzez);
        obj2.variant = "destructive";
        obj2.action = function action() {
          let obj = { action: "REPORT", analyticsLocations };
          trackUserProfileAction(obj);
          let tmp2;
          if ("@me" !== guildId) {
            if (null !== guildId) {
              tmp2 = guildId;
            }
          }
          const obj2 = user(channel[16]);
          obj = { user, entrypoint: "UserProfileOverflowMenu", contextualGuildId: tmp2 };
          let id;
          if (null != channel) {
            id = channel.id;
          }
          obj.contextualChannelId = id;
          obj2.openLazy(application(channel[18])(channel[22], channel.paths), application(channel[23]).BOT_REPORT_CHOOSER_KEY, obj, "replaceAll");
        };
        items4.push(obj2);
      } else {
        let obj8 = application(channel[24]);
        if (obj8.isAndroid()) {
          obj3 = {};
          const intl5 = application(channel[14]).intl;
          obj3.label = intl5.string(application(channel[14]).t.TbHyMG);
          obj3.variant = "destructive";
          obj3.action = function action() {
            let obj = { action: "REPORT", analyticsLocations };
            trackUserProfileAction(obj);
            application(channel[25]).alertUserReported();
            const obj2 = application(channel[25]);
            obj = { reported_user_id: id };
            user(channel[26]).track(closure_8.TNS_USER_REPORT_SUBMITTED, obj);
          };
          items4.push(obj3);
        }
      }
    }
    const obj4 = {};
    const intl7 = application(channel[14]).intl;
    obj4.label = intl7.string(application(channel[14]).t.y5MwJy);
    obj4.action = function action() {
      trackUserProfileAction({ action: "COPY_USERNAME", analyticsLocations });
      const obj = { action: "COPY_USERNAME", analyticsLocations };
      const obj2 = application(channel[27]);
      obj2.copy(user(channel[28]).getUserTag(user, { decoration: "never", identifiable: "always" }));
      const obj3 = user(channel[28]);
      const result = application(channel[29]).presentUsernameCopied();
      callback();
    };
    items3.push(obj4);
    if (null != application) {
      closure_12 = application(channel[30]).hasApplicationFlag(application, constants.EMBEDDED);
      const obj17 = application(channel[30]);
      installAppPropsFromProfileApplication = application(channel[31]).getInstallAppPropsFromProfileApplication(application);
      let obj5 = {};
      const intl10 = application(channel[14]).intl;
      obj5.label = intl10.string(application(channel[14]).t.WqhZss);
      obj5.action = function action() {
        let obj = { action: "COPY_APP_LINK", analyticsLocations };
        trackUserProfileAction(obj);
        const obj2 = application(channel[32]);
        if (closure_12) {
          obj = { applicationId: application.id };
          let id;
          if (null != closure_8) {
            id = closure_8.id;
          }
          obj.referrerId = id;
          let activityLaunchURL = obj2.getActivityLaunchURL(obj);
        } else {
          obj = { id: application.id };
          const merged = Object.assign(closure_13);
          activityLaunchURL = obj2.getApplicationInstallURL(obj);
        }
        application(channel[27]).copy(activityLaunchURL);
        const obj5 = application(channel[27]);
        application(channel[29]).presentLinkCopied();
      };
      items3.push(obj5);
      const obj18 = application(channel[31]);
    }
    const DeveloperMode = application(channel[33]).DeveloperMode;
    if (DeveloperMode.getSetting()) {
      const obj6 = {};
      const intl8 = application(channel[14]).intl;
      obj6.label = intl8.string(application(channel[14]).t["/AXYnE"]);
      obj6.action = function action() {
        trackUserProfileAction({ action: "COPY_USER_ID", analyticsLocations });
        application(channel[27]).copy(id);
        const obj = { action: "COPY_USER_ID", analyticsLocations };
        const obj2 = application(channel[27]);
        application(channel[29]).presentIdCopied();
        callback();
      };
      items3.push(obj6);
    }
    let hasItem = null != channel && null != stateFromStores;
    if (hasItem) {
      const TEXTUAL = id.TEXTUAL;
      hasItem = TEXTUAL.has(stateFromStores.type);
    }
    if (hasItem) {
      const obj7 = {};
      const intl9 = application(channel[14]).intl;
      obj7.label = intl9.string(application(channel[14]).t.PHjkRE);
      obj7.action = function action() {
        return user(channel[34])({ userId: id, selectedChannel: stateFromStores, showUserProfile: closure_9, analyticsLocations });
      };
      items3.push(obj7);
    }
    if (0 !== items3.length) {
      obj8 = { value: analyticsLocations };
      const obj9 = {};
      const items5 = [items3, items4];
      obj9.items = items5;
      obj9.children = function children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        const merged = Object.assign(ref, obj);
        obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj["size"] = "sm";
        obj["variant"] = "secondary-overlay";
        const intl = application(channel[14]).intl;
        obj["accessibilityLabel"] = intl.string(application(channel[14]).t["+zofAD"]);
        obj = { size: "sm", color: user(channel[38]).colors.WHITE };
        obj["icon"] = outer1_14(application(channel[37]).MoreHorizontalIcon, obj);
        return outer1_14(application(channel[36]).IconButton, obj);
      };
      obj8.children = jsx(application(channel[35]).ContextMenu, {});
      let tmp44 = jsx(application(channel[11]).AnalyticsLocationProvider, { value: analyticsLocations });
    } else {
      tmp44 = null;
    }
    return tmp44;
  }
  if (relationshipType !== guildId.BLOCKED) {
    const obj10 = {};
    const intl2 = application(channel[14]).intl;
    obj10.label = intl2.string(application(channel[14]).t.ytCpKs);
    obj10.action = function action() {
      let obj = { action: "IGNORE", analyticsLocations };
      trackUserProfileAction(obj);
      const obj2 = user(channel[16]);
      obj = {
        userId: id,
        onSuccess() {
          outer1_9();
        },
        impressionName: application(channel[19]).ImpressionNames.IGNORE_USER_CONFIRMATION
      };
      obj2.openLazy(application(channel[18])(channel[17], channel.paths), closure_13, obj, "stack");
    };
    items4.push(obj10);
  }
};
