// Module ID: 13706
// Function ID: 13707
// Name: useAppChannelOverflowMenuItems
// Dependencies: [19, 10931, 558, 576, 7263, 11635, 1128, 11555, 10959, 9809, 13707, 2]

// Module 13706 (useAppChannelOverflowMenuItems)
import intl3 from "intl" /* 1128 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7263 */;
import FlagIcon from "FlagIcon" /* 9809 */;
import FramesConstants from "FramesConstants" /* 10931 */;
import restartFrames from "restartFrames" /* 10959 */;
import RefreshIcon from "RefreshIcon" /* 11555 */;
import openAppChannelReportModalDefault from "openAppChannelReportModal" /* 13707 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const isLaunched = FramesConstants.isLaunched;
const app_channel_header_mobile = "app_channel_header_mobile";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelOverflowMenuItems(application_id) {
  let closure_2;
  _require = application_id;
  let obj = require("react");
  const cResult = obj.c(15);
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
    const tmp7 = application_id(11635)(application_id, tmp5);
    dependencyMap = tmp7;
    if (null != application_id) {
      let tmp18;
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
                      return obj.restartFrame(closure_2);
                    }
          };
          cResult[9] = tmp7;
          cResult[10] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[10];
        }
        items.push(tmp15);
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1128).intl;
        const stringResult1 = intl2.string(require("intl").t.NgA5vp);
        cResult[11] = stringResult1;
        tmp18 = stringResult1;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] === application_id) {
        let tmp20;
        if (cResult[13] === application_id) {
          tmp20 = cResult[14];
        }
        items.push(tmp20);
        cResult[4] = application_id;
        cResult[5] = application_id;
        cResult[6] = tmp7;
        cResult[7] = items;
        tmp10 = items;
      }
      const obj3 = {
        label: tmp18,
        IconComponent: require("FlagIcon").FlagIcon,
        variant: "destructive",
        action() {
              return openAppChannelReportModalDefault(application_id, closure_0, app_channel_header_mobile);
            }
      };
      cResult[12] = application_id;
      cResult[13] = application_id;
      cResult[14] = obj3;
      tmp20 = obj3;
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
  const obj4 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
  cResult[0] = application_id.guild_id;
  cResult[1] = application_id.id;
  cResult[2] = obj4;
  tmp5 = obj4;
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
  const tmp3 = application_id(11635)(application_id, memo);
  dependencyMap = tmp3;
  const items1 = [application_id, application_id, tmp3];
  return react.useMemo(() => {
    let intl;
    let intl2;
    if (null == application_id) {
      return [];
    } else {
      const items = [];
      if (isLaunched(closure_2)) {
        let obj = {
          label: intl.string(intl3.t.kHie4V),
          IconComponent: RefreshIcon.RefreshIcon,
          action() {
                const obj = application_id(closure_2[8]);
                return obj.restartFrame(closure_1_2);
              }
        };
        const push = items.push;
        intl = intl3.intl;
        push(obj);
      }
      const push2 = items.push;
      const obj2 = {
        label: intl2.string(intl3.t.NgA5vp),
        IconComponent: FlagIcon.FlagIcon,
        variant: "destructive",
        action() {
            return application_id(closure_2[10])(closure_1_1, closure_1_0, app_channel_header_mobile);
          }
      };
      intl2 = intl3.intl;
      push2(obj2);
      return items;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default tmp2;
