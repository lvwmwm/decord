// Module ID: 14752
// Function ID: 14753
// Name: UserProfileOverflowMenuItems
// Dependencies: [1084, 11033, 1125, 7474, 5247, 11035, 2000, 1272, 7482, 11034, 14753, 14753, 8163, 1381, 14011, 1264, 7345, 5700, 5059, 7351, 2]
// Exports: getBlockMenuItem, getDeveloperCopyMenuItem, getIgnoreMenuItem, getReportMenuItem

// Module 14752 (UserProfileOverflowMenuItems)
import intl6 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import UserUtilsDefault from "UserUtils" /* 5059 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ToastUtils from "ToastUtils" /* 5700 */;
import ClipboardUtils from "ClipboardUtils" /* 7345 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7351 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7474 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7482 */;
import ReportModals from "ReportModals" /* 8163 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 14011 */;
import BotReportChooser from "BotReportChooser" /* 14753 */;
import Constants from "Constants" /* 1084 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 11033 */;
import size from "module_2" /* 2 */;

let avatarURL;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AnalyticEvents: c3, AVATAR_MAX_SIZE: closure_4, NOOP: hasOwnProperty } = Constants);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: metroRequire, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: metroImportDefault } = RestrictionConfirmationConstants);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverflowMenuItems.tsx");

export function getIgnoreMenuItem(arg0, isBlocked) {
  let analyticsLocations;
  let channelId;
  let closure_3;
  let closure_4;
  let closure_5;
  let user;
  ({ user: require, channelId: importDefault, location: dependencyMap, analyticsLocations: closure_3, trackUserProfileAction: closure_4, showUserProfile: closure_5 } = arg0);
  let tmp2 = null;
  if (!isBlocked.isBlocked) {
    let tmp5;
    let obj = { label: null, action: null };
    const intl = intl6.intl;
    const string = intl.string;
    const t = intl6.t;
    if (tmp) {
      obj.label = string(t["8wXU9B"]);
      obj.action = function action() {
        const obj = { action: "UNIGNORE", analyticsLocations };
        closure_4(obj);
        const obj2 = RelationshipActionCreatorsDefault;
        obj2.unignoreUser(require.id, dependencyMap, importDefault);
        onSuccess();
      };
      tmp5 = obj;
    } else {
      obj.label = string(t.ytCpKs);
      obj.action = function action() {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        const tmp2 = asyncRequire(11035, dependencyMap.paths);
        let obj = {
          userId: require.id,
          channelId: importDefault,
          onBlock() {
            const obj = { action: "BLOCK", analyticsLocations };
            return closure_1_4(obj);
          },
          onIgnore() {
            const obj = { action: "IGNORE", analyticsLocations };
            return closure_1_4(obj);
          },
          onSuccess: hasOwnProperty,
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION
        };
        openLazy(tmp2, metroImportDefault, obj, "stack");
      };
      tmp5 = obj;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
export function getBlockMenuItem(arg0, isBlocked) {
  let _location;
  let analyticsLocations;
  let channelId;
  let closure_3;
  let closure_4;
  let closure_5;
  let intl;
  let intl2;
  let obj;
  let user;
  ({ user: require, channelId: importDefault, location: dependencyMap, analyticsLocations: closure_3, trackUserProfileAction: closure_4, showUserProfile: closure_5 } = arg0);
  if (isBlocked.isBlocked) {
    let obj2 = {
      label: intl2.string(intl6.t.XyHpKH),
      action() {
          const obj = { action: "UNBLOCK", analyticsLocations };
          closure_4(obj);
          const obj2 = RelationshipActionCreatorsDefault;
          const obj3 = { location: dependencyMap };
          obj2.unblockUser(require.id, obj3, importDefault);
          onSuccess();
          const obj4 = SafetyToastsActionCreatorsDefault;
          const result = obj4.showUnblockSuccessToast(require.id, importDefault);
        }
    };
    intl2 = intl6.intl;
    obj = obj2;
  } else {
    obj = {
      label: intl.string(intl6.t.l4Emac),
      variant: "destructive",
      action() {
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          const tmp2 = asyncRequire(11034, dependencyMap.paths);
          let obj = {
            userId: require.id,
            channelId: importDefault,
            onBlock() {
              const obj = { action: "BLOCK", analyticsLocations };
              return closure_1_4(obj);
            },
            onIgnore() {
              const obj = { action: "IGNORE", analyticsLocations };
              return closure_1_4(obj);
            },
            onSuccess: hasOwnProperty,
            impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION
          };
          openLazy(tmp2, metroRequire, obj, "stack");
        }
    };
    let tmp2 = dependencyMap;
    intl = intl6.intl;
  }
  return obj;
}
export function getReportMenuItem(user, isInIarUserReportingExperiment) {
  let analyticsLocations;
  let closure_3;
  let closure_4;
  let closure_5;
  let contextualChannelId;
  let entrypoint;
  let intl;
  let tmp3;
  user = user.user;
  ({ channelId: importDefault, analyticsLocations: dependencyMap, trackUserProfileAction: closure_3 } = user);
  ({ guildId: closure_4, reportEntrypoint: closure_5 } = isInIarUserReportingExperiment);
  if (isInIarUserReportingExperiment.isInIarUserReportingExperiment) {
    const intl2 = tmp(1125).intl;
    const string = intl2.string;
    const bot = user.bot;
    const t = tmp(1125).t;
    let obj = {
      label: string(bot ? t.jhJzez : t.A1MM3D),
      variant: "destructive",
      action() {
          const obj = { action: "REPORT", analyticsLocations: dependencyMap };
          constants(obj);
          if (user.bot) {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            const obj4 = { user, entrypoint, contextualGuildId: tmp3, contextualChannelId: importDefault };
            const tmp19 = asyncRequire(14753, dependencyMap.paths);
            openLazy(tmp19, BotReportChooser.BOT_REPORT_CHOOSER_KEY, obj4, "replaceAll");
          } else {
            const obj2 = ReportModals;
            const result = obj2.showReportModalForUser(tmp5, tmp3);
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.hideActionSheet();
          }
        }
    };
    tmp3 = obj;
  } else {
    tmp3 = null;
    const tmpResult = user(1381);
    if (tmpResult.isAndroid()) {
      let obj2 = {
        label: intl.string(tmp(1125).t.TbHyMG),
        variant: "destructive",
        action() {
              const obj = { action: "REPORT", analyticsLocations: dependencyMap };
              closure_3(obj);
              const obj2 = UserProfileAlertUtils;
              obj2.alertUserReported();
              const obj3 = AnalyticsUtilsDefault;
              const obj4 = { reported_user_id: user.id };
              obj3.track(c3.TNS_USER_REPORT_SUBMITTED, obj4);
            }
      };
      intl = tmp(1125).intl;
      tmp3 = obj2;
    }
  }
  return tmp3;
}
export function getDeveloperCopyMenuItem(arg0, tidaWebformEnabled) {
  let analyticsLocations;
  let closure_3;
  let closure_4;
  let tmp;
  ({ user: require, analyticsLocations: importDefault, trackUserProfileAction: dependencyMap } = arg0);
  ({ avatarGuildId: closure_3, bannerUrl: closure_4 } = tidaWebformEnabled);
  let obj = { label: null, action: null };
  tidaWebformEnabled = tidaWebformEnabled.tidaWebformEnabled;
  let intl = intl6.intl;
  const string = intl.string;
  const t = intl6.t;
  if (tidaWebformEnabled) {
    obj.label = string(t.QvQeLv);
    obj.action = function action() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let obj7;
      const items = [];
      let obj = {
        label: intl.string(intl6.t.y5MwJy),
        onPress() {
          const obj = { action: "COPY_USERNAME", analyticsLocations: importDefault };
          closure_1_2(obj);
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj2 = UserUtilsDefault;
          copy(obj2.getUserTag(avatarURL, { decoration: "never", identifiable: "always" }));
          const obj3 = ToastUtils;
          const result = obj3.presentUsernameCopied();
        }
      };
      const push = items.push;
      intl = intl6.intl;
      push(obj);
      let obj2 = {
        label: intl2.string(intl6.t["/AXYnE"]),
        onPress() {
          const obj = { action: "COPY_USER_ID", analyticsLocations };
          closure_1_2(obj);
          const obj2 = ClipboardUtils;
          obj2.copy(avatarURL.id);
          const obj3 = ToastUtils;
          obj3.presentIdCopied();
        }
      };
      const push2 = items.push;
      intl2 = intl6.intl;
      push2(obj2);
      let obj3 = require;
      const hasAvatarForGuildResult = null != require.avatar || obj3.hasAvatarForGuild(constants);
      if (hasAvatarForGuildResult) {
        const push3 = items.push;
        const obj4 = {
          label: intl3.string(intl6.t.gERDvM),
          onPress() {
              const obj = { action: "COPY_AVATAR_IMAGE_LINK", analyticsLocations };
              closure_1_2(obj);
              avatarURL = avatarURL.getAvatarURL(closure_1_3, closure_4, true);
              if (null != avatarURL) {
                const obj2 = ClipboardUtils;
                obj2.copy(avatarURL);
                const obj3 = ToastUtils;
                obj3.presentLinkCopied();
              }
            }
        };
        intl3 = tmp(1125).intl;
        push3(obj4);
      }
      if (null != closure_4) {
        const push4 = items.push;
        const obj5 = {
          label: intl4.string(intl6.t.hsNv0R),
          onPress() {
              const obj = { action: "COPY_BANNER_IMAGE_LINK", analyticsLocations };
              closure_1_2(obj);
              const obj2 = ClipboardUtils;
              obj2.copy(closure_1_4);
              const obj3 = ToastUtils;
              obj3.presentLinkCopied();
            }
        };
        intl4 = tmp(1125).intl;
        push4(obj5);
      }
      const obj6 = { options: items, key: "copy-info", header: obj7, stackingBehavior: "stack", hasIcons: false };
      obj7 = { title: intl5.string(intl6.t.QvQeLv) };
      const showSimpleActionSheet = tmp(7351).showSimpleActionSheet;
      Sheet_showSimpleActionSheet;
      intl5 = tmp(1125).intl;
      let result = showSimpleActionSheet(obj6);
    };
    tmp = obj;
  } else {
    obj.label = string(t["/AXYnE"]);
    obj.action = function action() {
      const obj = { action: "COPY_USER_ID", analyticsLocations: importDefault };
      dependencyMap(obj);
      const obj2 = ClipboardUtils;
      obj2.copy(require.id);
      const obj3 = ToastUtils;
      obj3.presentIdCopied();
    };
    tmp = obj;
  }
  return tmp;
}
