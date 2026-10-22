// Module ID: 13955
// Function ID: 13956
// Name: useAppChannelOverflowMenuItems
// Dependencies: [19, 6761, 558, 576, 5612, 11839, 7331, 1128, 10741, 11740, 13799, 11494, 5672, 8648, 9948, 13956, 2]

// Module 13955 (useAppChannelOverflowMenuItems)
import intl5 from "intl" /* 1128 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5672 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8648 */;
import FlagIcon from "FlagIcon" /* 9948 */;
import restartFrames from "restartFrames" /* 10741 */;
import DoorExitIcon from "DoorExitIcon" /* 11494 */;
import RefreshIcon from "RefreshIcon" /* 11740 */;
import closeFrameDefault from "closeFrame" /* 13799 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 13956 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const isLaunched = FramesConstants.isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  let id;
  _require = application_id;
  let obj = require("react");
  const cResult = obj.c(27);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    let tmp5;
    let tmp11;
    if (cResult[1] === application_id.id) {
      tmp5 = cResult[2];
    }
    const tmp7 = application_id(11839)(application_id, tmp5);
    dependencyMap = tmp7;
    const tmpResult = require("useAppChannelApplication");
    const appChannelApplication = tmpResult.useAppChannelApplication(application_id);
    let bot;
    if (appChannelApplication != null) {
      bot = appChannelApplication.bot;
    }
    if (null != application_id) {
      let tmp12;
      let tmp29;
      let tmp23;
      if (cResult[4] !== tmp7) {
        const items = [];
        if (isLaunched(tmp7)) {
          let tmp15;
          let tmp17;
          let tmp19;
          let tmp21;
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1128).intl;
            const stringResult = intl.string(require("intl").t.kHie4V);
            cResult[6] = stringResult;
            tmp15 = stringResult;
          } else {
            tmp15 = cResult[6];
          }
          function t3() {
            const obj = restartFrames;
            return obj.restartFrame(id);
          }
          if (cResult[7] !== t3) {
            const obj2 = { label: tmp15, IconComponent: require("RefreshIcon").RefreshIcon, action: t3 };
            cResult[7] = t3;
            cResult[8] = obj2;
            tmp17 = obj2;
          } else {
            tmp17 = cResult[8];
          }
          items.push(tmp17);
          const _Symbol3 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1128).intl;
            const stringResult1 = intl2.string(require("intl").t.VkMnR2);
            cResult[9] = stringResult1;
            tmp19 = stringResult1;
          } else {
            tmp19 = cResult[9];
          }
          function t6() {
            return closeFrameDefault(id.id);
          }
          if (cResult[10] !== t6) {
            const obj3 = { label: tmp19, IconComponent: require("DoorExitIcon").DoorExitIcon, action: t6 };
            cResult[10] = t6;
            cResult[11] = obj3;
            tmp21 = obj3;
          } else {
            tmp21 = cResult[11];
          }
          items.push(tmp21);
        }
        cResult[4] = tmp7;
        cResult[5] = items;
        tmp12 = items;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[12] === application_id) {
        if (cResult[13] === bot) {
          if (cResult[14] === application_id) {
            tmp23 = cResult[15];
          }
          if (cResult[24] === tmp23) {
            let tmp33;
            if (cResult[25] === tmp12) {
              tmp33 = cResult[26];
            }
            tmp11 = tmp33;
          }
          const items1 = [tmp12, tmp23];
          const found = items1.filter((item) => item.length > 0);
          cResult[24] = tmp23;
          cResult[25] = tmp12;
          cResult[26] = found;
          tmp33 = found;
        }
      }
      const items2 = [];
      if (null != bot) {
        let tmp24;
        const _Symbol5 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1128).intl;
          const stringResult2 = intl3.string(require("intl").t.Sh2z9g);
          cResult[16] = stringResult2;
          tmp24 = stringResult2;
        } else {
          tmp24 = cResult[16];
        }
        if (cResult[17] === bot) {
          let tmp26;
          if (cResult[18] === application_id.id) {
            tmp26 = cResult[19];
          }
          items2.push(tmp26);
        }
        const obj4 = {
          label: tmp24,
          IconComponent: require("CircleInformationIcon").CircleInformationIcon,
          action() {
                  const obj = { userId: bot.id, channelId: application_id.id, localUser: bot };
                  return showUserProfileActionSheetDefault(obj);
                }
        };
        cResult[17] = bot;
        cResult[18] = application_id.id;
        cResult[19] = obj4;
        tmp26 = obj4;
      }
      const _Symbol4 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1128).intl;
        const stringResult3 = intl4.string(require("intl").t.NgA5vp);
        cResult[20] = stringResult3;
        tmp29 = stringResult3;
      } else {
        tmp29 = cResult[20];
      }
      if (cResult[21] === application_id) {
        let tmp31;
        if (cResult[22] === application_id) {
          tmp31 = cResult[23];
        }
        items2.push(tmp31);
        cResult[12] = application_id;
        cResult[13] = bot;
        cResult[14] = application_id;
        cResult[15] = items2;
        tmp23 = items2;
      }
      const obj5 = {
        label: tmp29,
        IconComponent: require("FlagIcon").FlagIcon,
        variant: "destructive",
        action() {
              return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
            }
      };
      cResult[21] = application_id;
      cResult[22] = application_id;
      cResult[23] = obj5;
      tmp31 = obj5;
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [];
        cResult[3] = items3;
        tmp11 = items3;
      } else {
        tmp11 = cResult[3];
      }
    }
    return tmp11;
  }
  const obj6 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj6;
  tmp5 = obj6;
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
  const tmp3 = application_id(11839)(application_id, memo);
  dependencyMap = tmp3;
  let obj2 = require("useAppChannelApplication");
  const appChannelApplication = obj2.useAppChannelApplication(application_id);
  bot = undefined;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  let items1 = [application_id, bot, application_id, tmp3];
  return obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let localUser;
    if (null == application_id) {
      return [];
    } else {
      const items = [];
      if (isLaunched(id)) {
        let obj = {
          label: intl.string(intl5.t.kHie4V),
          IconComponent: RefreshIcon.RefreshIcon,
          action() {
                const obj = application_id(id[8]);
                return obj.restartFrame(closure_1_2);
              }
        };
        const push = items.push;
        intl = intl5.intl;
        push(obj);
        const push2 = items.push;
        const obj2 = {
          label: intl2.string(intl5.t.VkMnR2),
          IconComponent: DoorExitIcon.DoorExitIcon,
          action() {
                return application_id(id[10])(id.id);
              }
        };
        intl2 = intl5.intl;
        push2(obj2);
      }
      const items1 = [];
      if (null != bot) {
        const push3 = items1.push;
        const obj3 = {
          label: intl3.string(intl5.t.Sh2z9g),
          IconComponent: CircleInformationIcon.CircleInformationIcon,
          action() {
                const obj = { userId: localUser.id, channelId: id.id, localUser };
                return application_id(id[13])(obj);
              }
        };
        intl3 = intl5.intl;
        push3(obj3);
      }
      const push4 = items1.push;
      const obj4 = {
        label: intl4.string(intl5.t.NgA5vp),
        IconComponent: FlagIcon.FlagIcon,
        variant: "destructive",
        action() {
            return application_id(id[15])(closure_1_1, closure_1_0, app_channel_header_mobile);
          }
      };
      intl4 = intl5.intl;
      push4(obj4);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default tmp2;
