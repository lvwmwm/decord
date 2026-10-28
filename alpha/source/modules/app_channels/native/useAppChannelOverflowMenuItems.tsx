// Module ID: 14236
// Function ID: 14237
// Name: useAppChannelOverflowMenuItems
// Dependencies: [19, 6811, 558, 576, 5662, 11815, 7383, 14237, 1125, 10802, 12302, 14081, 11578, 3863, 10992, 14238, 5722, 8705, 10005, 14241, 2]

// Module 14236 (useAppChannelOverflowMenuItems)
import intl6 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5662 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import FramesConstants from "FramesConstants" /* 6811 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8705 */;
import FlagIcon from "FlagIcon" /* 10005 */;
import restartFrames from "restartFrames" /* 10802 */;
import ShieldIcon from "ShieldIcon" /* 10992 */;
import DoorExitIcon from "DoorExitIcon" /* 11578 */;
import RefreshIcon from "RefreshIcon" /* 12302 */;
import closeFrameDefault from "closeFrame" /* 14081 */;
import openConjureDevicePermissionSettingsDefault from "openConjureDevicePermissionSettings" /* 14238 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 14241 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let isLaunched = FramesConstants.isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  let appName;
  let id;
  _require = application_id;
  let obj = require("react");
  const cResult = obj.c(32);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    let tmp5;
    let tmp12;
    if (cResult[1] === application_id.id) {
      tmp5 = cResult[2];
    }
    const tmp7 = application_id(11815)(application_id, tmp5);
    dependencyMap = tmp7;
    const tmpResult = require("useAppChannelApplication");
    const appChannelApplication = tmpResult.useAppChannelApplication(application_id);
    let bot;
    if (appChannelApplication != null) {
      bot = appChannelApplication.bot;
    }
    const tmp10 = application_id(14237)(application_id);
    isLaunched = tmp10;
    if (null != application_id) {
      let tmp13;
      let tmp34;
      let tmp24;
      if (cResult[4] !== tmp7) {
        const items = [];
        if (isLaunched(tmp7)) {
          let tmp16;
          let tmp18;
          let tmp20;
          let tmp22;
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1125).intl;
            const stringResult = intl.string(require("intl").t.kHie4V);
            cResult[6] = stringResult;
            tmp16 = stringResult;
          } else {
            tmp16 = cResult[6];
          }
          function t3() {
            const obj = restartFrames;
            return obj.restartFrame(id);
          }
          if (cResult[7] !== t3) {
            const obj2 = { label: tmp16, IconComponent: require("RefreshIcon").RefreshIcon, action: t3 };
            cResult[7] = t3;
            cResult[8] = obj2;
            tmp18 = obj2;
          } else {
            tmp18 = cResult[8];
          }
          items.push(tmp18);
          const _Symbol3 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1125).intl;
            const stringResult1 = intl2.string(require("intl").t.VkMnR2);
            cResult[9] = stringResult1;
            tmp20 = stringResult1;
          } else {
            tmp20 = cResult[9];
          }
          function t6() {
            return closeFrameDefault(id.id);
          }
          if (cResult[10] !== t6) {
            const obj3 = { label: tmp20, IconComponent: require("DoorExitIcon").DoorExitIcon, action: t6 };
            cResult[10] = t6;
            cResult[11] = obj3;
            tmp22 = obj3;
          } else {
            tmp22 = cResult[11];
          }
          items.push(tmp22);
        }
        cResult[4] = tmp7;
        cResult[5] = items;
        tmp13 = items;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[12] === application_id) {
        if (cResult[13] === bot) {
          if (cResult[14] === application_id) {
            if (cResult[15] === tmp10) {
              tmp24 = cResult[16];
            }
            if (cResult[29] === tmp24) {
              let tmp38;
              if (cResult[30] === tmp13) {
                tmp38 = cResult[31];
              }
              tmp12 = tmp38;
            }
            const items1 = [tmp13, tmp24];
            const found = items1.filter((item) => item.length > 0);
            cResult[29] = tmp24;
            cResult[30] = tmp13;
            cResult[31] = found;
            tmp38 = found;
          }
        }
      }
      const items2 = [];
      if (null != tmp10) {
        let tmp25;
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1125).intl;
          const stringResult2 = intl3.string(application_id(3863).wum6n2);
          cResult[17] = stringResult2;
          tmp25 = stringResult2;
        } else {
          tmp25 = cResult[17];
        }
        if (cResult[18] === application_id) {
          let tmp27;
          if (cResult[19] === tmp10) {
            tmp27 = cResult[20];
          }
          items2.push(tmp27);
        }
        const obj4 = {
          label: tmp25,
          IconComponent: require("ShieldIcon").ShieldIcon,
          action() {
                  const obj = { applicationId: application_id, appName };
                  return openConjureDevicePermissionSettingsDefault(obj);
                }
        };
        cResult[18] = application_id;
        cResult[19] = tmp10;
        cResult[20] = obj4;
        tmp27 = obj4;
      }
      if (null != bot) {
        let tmp29;
        const _Symbol6 = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1125).intl;
          const stringResult3 = intl4.string(require("intl").t.Sh2z9g);
          cResult[21] = stringResult3;
          tmp29 = stringResult3;
        } else {
          tmp29 = cResult[21];
        }
        if (cResult[22] === bot) {
          let tmp31;
          if (cResult[23] === application_id.id) {
            tmp31 = cResult[24];
          }
          items2.push(tmp31);
        }
        const obj5 = {
          label: tmp29,
          IconComponent: require("CircleInformationIcon").CircleInformationIcon,
          action() {
                  const obj = { userId: bot.id, channelId: application_id.id, localUser: bot };
                  return showUserProfileActionSheetDefault(obj);
                }
        };
        cResult[22] = bot;
        cResult[23] = application_id.id;
        cResult[24] = obj5;
        tmp31 = obj5;
      }
      const _Symbol4 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1125).intl;
        const stringResult4 = intl5.string(require("intl").t.NgA5vp);
        cResult[25] = stringResult4;
        tmp34 = stringResult4;
      } else {
        tmp34 = cResult[25];
      }
      if (cResult[26] === application_id) {
        let tmp36;
        if (cResult[27] === application_id) {
          tmp36 = cResult[28];
        }
        items2.push(tmp36);
        cResult[12] = application_id;
        cResult[13] = bot;
        cResult[14] = application_id;
        cResult[15] = tmp10;
        cResult[16] = items2;
        tmp24 = items2;
      }
      const obj6 = {
        label: tmp34,
        IconComponent: require("FlagIcon").FlagIcon,
        variant: "destructive",
        action() {
              return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
            }
      };
      cResult[26] = application_id;
      cResult[27] = application_id;
      cResult[28] = obj6;
      tmp36 = obj6;
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [];
        cResult[3] = items3;
        tmp12 = items3;
      } else {
        tmp12 = cResult[3];
      }
    }
    return tmp12;
  }
  const obj7 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj7;
  tmp5 = obj7;
}) : (function useAppChannelOverflowMenuItems(application_id) {
  let bot;
  let closure_2;
  _require = application_id;
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let obj = bot;
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = bot.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
    return obj;
  }, items);
  const tmp5 = application_id(11815)(application_id, memo);
  dependencyMap = tmp5;
  let obj2 = require("useAppChannelApplication");
  const appChannelApplication = obj2.useAppChannelApplication(application_id);
  bot = undefined;
  const tmp3 = application_id;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  const tmp8 = tmp3(14237)(application_id);
  let closure_4 = tmp8;
  let items1 = [application_id, bot, application_id, tmp8, tmp5];
  return obj.useMemo(() => {
    let applicationId;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let localUser;
    if (null == application_id) {
      return [];
    } else {
      const items = [];
      if (isLaunched(id)) {
        let obj = {
          label: intl.string(intl6.t.kHie4V),
          IconComponent: RefreshIcon.RefreshIcon,
          action() {
                const obj = application_id(id[9]);
                return obj.restartFrame(closure_1_2);
              }
        };
        const push = items.push;
        intl = intl6.intl;
        push(obj);
        const push2 = items.push;
        const obj2 = {
          label: intl2.string(intl6.t.VkMnR2),
          IconComponent: DoorExitIcon.DoorExitIcon,
          action() {
                return application_id(id[11])(id.id);
              }
        };
        intl2 = intl6.intl;
        push2(obj2);
      }
      const items1 = [];
      if (null != appName) {
        const push3 = items1.push;
        const obj3 = {
          label: intl3.string(_modDef3863.wum6n2),
          IconComponent: ShieldIcon.ShieldIcon,
          action() {
                const obj = { applicationId, appName };
                return application_id(id[15])(obj);
              }
        };
        intl3 = intl6.intl;
        push3(obj3);
      }
      if (null != bot) {
        const push4 = items1.push;
        const obj4 = {
          label: intl4.string(intl6.t.Sh2z9g),
          IconComponent: CircleInformationIcon.CircleInformationIcon,
          action() {
                const obj = { userId: localUser.id, channelId: id.id, localUser };
                return application_id(id[17])(obj);
              }
        };
        intl4 = intl6.intl;
        push4(obj4);
      }
      const push5 = items1.push;
      const obj5 = {
        label: intl5.string(intl6.t.NgA5vp),
        IconComponent: FlagIcon.FlagIcon,
        variant: "destructive",
        action() {
            return application_id(id[19])(applicationId, closure_1_0, app_channel_header_mobile);
          }
      };
      intl5 = intl6.intl;
      push5(obj5);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default tmp2;
