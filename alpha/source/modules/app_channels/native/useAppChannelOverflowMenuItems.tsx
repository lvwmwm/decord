// Module ID: 14472
// Function ID: 14473
// Name: useAppChannelOverflowMenuItems
// Dependencies: [19, 6834, 558, 576, 5664, 11869, 7406, 14473, 10878, 14314, 14474, 8708, 14477, 1125, 12356, 11632, 3864, 11027, 5724, 10037, 2]

// Module 14472 (useAppChannelOverflowMenuItems)
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5724 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8708 */;
import FlagIcon from "FlagIcon" /* 10037 */;
import restartFrames from "restartFrames" /* 10878 */;
import ShieldIcon from "ShieldIcon" /* 11027 */;
import DoorExitIcon from "DoorExitIcon" /* 11632 */;
import RefreshIcon from "RefreshIcon" /* 12356 */;
import closeFrameDefault from "closeFrame" /* 14314 */;
import openConjureDevicePermissionSettingsDefault from "openConjureDevicePermissionSettings" /* 14474 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 14477 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let isLaunched = FramesConstants.isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelAppActions(application_id) {
  let bot;
  let id;
  _require = application_id;
  let obj = require("react");
  const cResult = obj.c(26);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    let tmp5;
    if (cResult[1] === application_id.id) {
      tmp5 = cResult[2];
    }
    const tmp7 = application_id(bot[5])(application_id, tmp5);
    const tmpResult = require("useAppChannelApplication");
    const appChannelApplication = tmpResult.useAppChannelApplication(application_id);
    bot = undefined;
    const tmp6 = application_id;
    if (appChannelApplication != null) {
      bot = appChannelApplication.bot;
    }
    const tmp10 = tmp6(bot[7])(application_id);
    const appName = tmp10;
    if (cResult[3] === application_id) {
      let tmp11;
      let tmp14;
      let tmp15;
      if (cResult[4] === tmp7) {
        tmp11 = cResult[5];
      }
      isLaunched = tmp11;
      if (cResult[6] !== tmp11) {
        let fn = null;
        if (null != tmp11) {
          fn = () => {
            const obj = restartFrames;
            return obj.restartFrame(id);
          };
        }
        cResult[6] = tmp11;
        cResult[7] = fn;
        tmp14 = fn;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp11) {
        let fn2 = null;
        if (null != tmp11) {
          fn2 = () => closeFrameDefault(id.id);
        }
        cResult[8] = tmp11;
        cResult[9] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === application_id) {
        let tmp16;
        if (cResult[11] === tmp10) {
          tmp16 = cResult[12];
        }
        if (cResult[13] === application_id) {
          if (cResult[14] === bot) {
            let tmp17;
            if (cResult[15] === application_id.id) {
              tmp17 = cResult[16];
            }
            if (cResult[17] === application_id) {
              let tmp18;
              if (cResult[18] === application_id) {
                tmp18 = cResult[19];
              }
              if (cResult[20] === tmp14) {
                if (cResult[21] === tmp15) {
                  if (cResult[22] === tmp16) {
                    if (cResult[23] === tmp17) {
                      let tmp19;
                      if (cResult[24] === tmp18) {
                        tmp19 = cResult[25];
                      }
                      return tmp19;
                    }
                  }
                }
              }
              const obj2 = { reload: tmp14, close: tmp15, devicePermissions: tmp16, appInfo: tmp17, report: tmp18 };
              cResult[20] = tmp14;
              cResult[21] = tmp15;
              cResult[22] = tmp16;
              cResult[23] = tmp17;
              cResult[24] = tmp18;
              cResult[25] = obj2;
              tmp19 = obj2;
            }
            let fn5 = null;
            if (null != application_id) {
              fn5 = () => openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
            }
            cResult[17] = application_id;
            cResult[18] = application_id;
            cResult[19] = fn5;
            tmp18 = fn5;
          }
        }
        let fn4 = null;
        if (null != application_id) {
          fn4 = null;
          if (null != bot) {
            fn4 = () => {
              const obj = { userId: bot.id, channelId: application_id.id, localUser: bot };
              return showUserProfileActionSheetDefault(obj);
            };
          }
        }
        cResult[13] = application_id;
        cResult[14] = bot;
        cResult[15] = application_id.id;
        cResult[16] = fn4;
        tmp17 = fn4;
      }
      let fn3 = null;
      if (null != application_id) {
        fn3 = null;
        if (null != tmp10) {
          fn3 = () => {
            const obj = { applicationId: application_id, appName };
            return openConjureDevicePermissionSettingsDefault(obj);
          };
        }
      }
      cResult[10] = application_id;
      cResult[11] = tmp10;
      cResult[12] = fn3;
      tmp16 = fn3;
    }
    let tmp12 = null;
    if (null != application_id) {
      tmp12 = null;
      if (isLaunched(tmp7)) {
        tmp12 = tmp7;
      }
    }
    cResult[3] = application_id;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp11 = tmp12;
  }
  const obj3 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : (function useAppChannelAppActions(application_id) {
  let bot;
  let closure_2;
  _require = application_id;
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let obj = bot;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = bot.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
    return obj;
  }, items);
  let tmp4 = dependencyMap;
  const tmp5 = application_id(11869)(application_id, memo);
  dependencyMap = tmp5;
  const obj2 = require("useAppChannelApplication");
  const appChannelApplication = obj2.useAppChannelApplication(application_id);
  bot = undefined;
  const tmp3 = application_id;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  const tmp8 = tmp3(14473)(application_id);
  let closure_4 = tmp8;
  const items1 = [application_id, bot, application_id, tmp8, tmp5];
  return obj.useMemo(() => {
    let applicationId;
    let fn2;
    let fn3;
    let fn4;
    let fn5;
    let localUser;
    let tmp2 = null;
    if (null != application_id) {
      tmp2 = null;
      const tmp4 = closure_2;
      if (appName(closure_2)) {
        tmp2 = tmp4;
      }
    }
    const user = tmp2;
    let fn = null;
    if (null != tmp2) {
      fn = () => {
        const obj = restartFrames;
        return obj.restartFrame(user);
      };
    }
    let obj = { reload: fn, close: fn2, devicePermissions: fn3, appInfo: fn4, report: fn5 };
    fn2 = null;
    if (null != tmp2) {
      fn2 = () => closeFrameDefault(user.id);
    }
    fn3 = null;
    if (null != application_id) {
      fn3 = null;
      if (null != appName) {
        fn3 = () => {
          const obj = { applicationId, appName };
          return application_id(closure_2[10])(obj);
        };
      }
    }
    fn4 = null;
    if (null != application_id) {
      fn4 = null;
      if (null != bot) {
        fn4 = () => {
          const obj = { userId: localUser.id, channelId: user.id, localUser };
          return application_id(closure_2[11])(obj);
        };
      }
    }
    fn5 = null;
    if (null != application_id) {
      fn5 = () => application_id(closure_2[12])(applicationId, user, app_channel_header_mobile);
    }
    return obj;
  }, items1);
});
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(arg0) {
  let appInfo;
  let close;
  let devicePermissions;
  let first;
  let reload;
  let report;
  const obj = react2;
  const cResult = obj.c(26);
  ({ reload, close, devicePermissions, appInfo, report } = closure_6(arg0));
  closure_6(arg0);
  if (null != report) {
    if (cResult[1] === close) {
      let tmp7;
      let tmp27;
      let tmp29;
      if (cResult[2] === reload) {
        tmp7 = cResult[3];
      }
      if (cResult[10] === appInfo) {
        if (cResult[11] === devicePermissions) {
          let tmp16;
          if (cResult[12] === report) {
            tmp16 = cResult[13];
          }
          if (cResult[23] === tmp16) {
            let tmp31;
            if (cResult[24] === tmp7) {
              tmp31 = cResult[25];
            }
            first = tmp31;
          }
          const items = [tmp7, tmp16];
          const found = items.filter((item) => item.length > 0);
          cResult[23] = tmp16;
          cResult[24] = tmp7;
          cResult[25] = found;
          tmp31 = found;
        }
      }
      const items1 = [];
      if (null != devicePermissions) {
        let tmp17;
        let tmp20;
        const _Symbol5 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1125).intl;
          const stringResult = intl3.string(_modDef3864.wum6n2);
          cResult[14] = stringResult;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] !== devicePermissions) {
          const obj2 = { label: tmp17, IconComponent: ShieldIcon.ShieldIcon, action: devicePermissions };
          cResult[15] = devicePermissions;
          cResult[16] = obj2;
          tmp20 = obj2;
        } else {
          tmp20 = cResult[16];
        }
        items1.push(tmp20);
      }
      if (null != appInfo) {
        let tmp22;
        let tmp24;
        const _Symbol6 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1125).intl;
          const stringResult1 = intl4.string(intl6.t.Sh2z9g);
          cResult[17] = stringResult1;
          tmp22 = stringResult1;
        } else {
          tmp22 = cResult[17];
        }
        if (cResult[18] !== appInfo) {
          const obj3 = { label: tmp22, IconComponent: CircleInformationIcon.CircleInformationIcon, action: appInfo };
          cResult[18] = appInfo;
          cResult[19] = obj3;
          tmp24 = obj3;
        } else {
          tmp24 = cResult[19];
        }
        items1.push(tmp24);
      }
      const _Symbol2 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1125).intl;
        const stringResult2 = intl5.string(intl6.t.NgA5vp);
        cResult[20] = stringResult2;
        tmp27 = stringResult2;
      } else {
        tmp27 = cResult[20];
      }
      if (cResult[21] !== report) {
        const obj4 = { label: tmp27, IconComponent: FlagIcon.FlagIcon, variant: "destructive", action: report };
        cResult[21] = report;
        cResult[22] = obj4;
        tmp29 = obj4;
      } else {
        tmp29 = cResult[22];
      }
      items1.push(tmp29);
      cResult[10] = appInfo;
      cResult[11] = devicePermissions;
      cResult[12] = report;
      cResult[13] = items1;
      tmp16 = items1;
    }
    const items2 = [];
    if (null != reload) {
      let tmp8;
      let tmp10;
      const _Symbol3 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult3 = intl.string(intl6.t.kHie4V);
        cResult[4] = stringResult3;
        tmp8 = stringResult3;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== reload) {
        const obj5 = { label: tmp8, IconComponent: RefreshIcon.RefreshIcon, action: reload };
        cResult[5] = reload;
        cResult[6] = obj5;
        tmp10 = obj5;
      } else {
        tmp10 = cResult[6];
      }
      items2.push(tmp10);
    }
    if (null != close) {
      let tmp12;
      let tmp14;
      const _Symbol4 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1125).intl;
        const stringResult4 = intl2.string(intl6.t.VkMnR2);
        cResult[7] = stringResult4;
        tmp12 = stringResult4;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] !== close) {
        const obj6 = { label: tmp12, IconComponent: DoorExitIcon.DoorExitIcon, action: close };
        cResult[8] = close;
        cResult[9] = obj6;
        tmp14 = obj6;
      } else {
        tmp14 = cResult[9];
      }
      items2.push(tmp14);
    }
    cResult[1] = close;
    cResult[2] = reload;
    cResult[3] = items2;
    tmp7 = items2;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [];
      cResult[0] = items3;
      first = items3;
    } else {
      first = cResult[0];
    }
  }
  return first;
}) : (function useAppChannelOverflowMenuItems(arg0) {
  const tmp = closure_6(arg0);
  const reload = tmp.reload;
  const close = tmp.close;
  const devicePermissions = tmp.devicePermissions;
  const appInfo = tmp.appInfo;
  const report = tmp.report;
  let items = [reload, close, devicePermissions, appInfo, report];
  return appInfo.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    if (null == report) {
      return [];
    } else {
      const items = [];
      if (null != reload) {
        const push = items.push;
        const obj = { label: intl.string(intl6.t.kHie4V), IconComponent: RefreshIcon.RefreshIcon, action: tmp40 };
        intl = intl6.intl;
        push(obj);
      }
      if (null != close) {
        const push2 = items.push;
        const obj2 = { label: intl2.string(intl6.t.VkMnR2), IconComponent: DoorExitIcon.DoorExitIcon, action: tmp9 };
        intl2 = intl6.intl;
        push2(obj2);
      }
      const items1 = [];
      if (null != devicePermissions) {
        const push3 = items1.push;
        const obj3 = { label: intl3.string(_modDef3864.wum6n2), IconComponent: ShieldIcon.ShieldIcon, action: tmp17 };
        intl3 = intl6.intl;
        push3(obj3);
      }
      if (null != appInfo) {
        const push4 = items1.push;
        const obj4 = { label: intl4.string(intl6.t.Sh2z9g), IconComponent: CircleInformationIcon.CircleInformationIcon, action: tmp25 };
        intl4 = intl6.intl;
        push4(obj4);
      }
      const push5 = items1.push;
      const obj5 = { label: intl5.string(intl6.t.NgA5vp), IconComponent: FlagIcon.FlagIcon, variant: "destructive", action: tmp };
      intl5 = intl6.intl;
      push5(obj5);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default tmp3;
export const useAppChannelAppActions = tmp2;
