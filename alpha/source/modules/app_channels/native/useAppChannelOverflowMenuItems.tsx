// Module ID: 13774
// Function ID: 13775
// Name: useAppChannelOverflowMenuItems
// Dependencies: [19, 6296, 558, 576, 6297, 11697, 1128, 11614, 11019, 11366, 11020, 9873, 13775, 2]

// Module 13774 (useAppChannelOverflowMenuItems)
import intl4 from "intl" /* 1128 */;
import FramesConstants from "FramesConstants" /* 6296 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 6297 */;
import FlagIcon from "FlagIcon" /* 9873 */;
import restartFrames from "restartFrames" /* 11019 */;
import leaveFrame from "leaveFrame" /* 11020 */;
import DoorExitIcon from "DoorExitIcon" /* 11366 */;
import RefreshIcon from "RefreshIcon" /* 11614 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 13775 */;
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
  const cResult = obj.c(18);
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[0] === application_id.guild_id) {
    let tmp5;
    let tmp9;
    if (cResult[1] === application_id.id) {
      tmp5 = cResult[2];
    }
    const tmp7 = application_id(11697)(application_id, tmp5);
    dependencyMap = tmp7;
    if (null != application_id) {
      let tmp22;
      let tmp10;
      if (cResult[4] === application_id) {
        if (cResult[5] === application_id) {
          if (cResult[6] === tmp7) {
            tmp10 = cResult[7];
          }
          tmp9 = tmp10;
        }
      }
      const items = [];
      if (isLaunched(tmp7)) {
        let tmp13;
        let tmp15;
        let tmp17;
        let tmp19;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          const stringResult = intl.string(require("intl").t.kHie4V);
          cResult[8] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp7) {
          const obj2 = {
            label: tmp13,
            IconComponent: require("RefreshIcon").RefreshIcon,
            action() {
                      const obj = restartFrames;
                      return obj.restartFrame(id);
                    }
          };
          cResult[9] = tmp7;
          cResult[10] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[10];
        }
        items.push(tmp15);
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult1 = intl2.string(require("intl").t.VkMnR2);
          cResult[11] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] !== tmp7) {
          const obj3 = {
            label: tmp17,
            IconComponent: require("DoorExitIcon").DoorExitIcon,
            action() {
                      const obj = leaveFrame;
                      return obj.leaveFrame(id.id);
                    }
          };
          cResult[12] = tmp7;
          cResult[13] = obj3;
          tmp19 = obj3;
        } else {
          tmp19 = cResult[13];
        }
        items.push(tmp19);
      }
      const _Symbol4 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1128).intl;
        const stringResult2 = intl3.string(require("intl").t.NgA5vp);
        cResult[14] = stringResult2;
        tmp22 = stringResult2;
      } else {
        tmp22 = cResult[14];
      }
      if (cResult[15] === application_id) {
        let tmp24;
        if (cResult[16] === application_id) {
          tmp24 = cResult[17];
        }
        items.push(tmp24);
        cResult[4] = application_id;
        cResult[5] = application_id;
        cResult[6] = tmp7;
        cResult[7] = items;
        tmp10 = items;
      }
      const obj4 = {
        label: tmp22,
        IconComponent: require("FlagIcon").FlagIcon,
        variant: "destructive",
        action() {
              return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
            }
      };
      cResult[15] = application_id;
      cResult[16] = application_id;
      cResult[17] = obj4;
      tmp24 = obj4;
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
    }
    return tmp9;
  }
  const obj5 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj5;
  tmp5 = obj5;
}) : (function useAppChannelOverflowMenuItems(application_id) {
  let closure_2;
  application_id = application_id.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = react.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
    return obj;
  }, items);
  const tmp3 = application_id(11697)(application_id, memo);
  dependencyMap = tmp3;
  const items1 = [application_id, application_id, tmp3];
  return react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    if (null == application_id) {
      return [];
    } else {
      const items = [];
      if (isLaunched(id)) {
        let obj = {
          label: intl.string(intl4.t.kHie4V),
          IconComponent: RefreshIcon.RefreshIcon,
          action() {
                const obj = application_id(id[8]);
                return obj.restartFrame(closure_1_2);
              }
        };
        const push = items.push;
        intl = intl4.intl;
        push(obj);
        const push2 = items.push;
        const obj2 = {
          label: intl2.string(intl4.t.VkMnR2),
          IconComponent: DoorExitIcon.DoorExitIcon,
          action() {
                const obj = application_id(id[10]);
                return obj.leaveFrame(id.id);
              }
        };
        intl2 = intl4.intl;
        push2(obj2);
      }
      const push3 = items.push;
      const obj3 = {
        label: intl3.string(intl4.t.NgA5vp),
        IconComponent: FlagIcon.FlagIcon,
        variant: "destructive",
        action() {
            return application_id(id[12])(closure_1_1, closure_1_0, app_channel_header_mobile);
          }
      };
      intl3 = intl4.intl;
      push3(obj3);
      return items;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default tmp2;
