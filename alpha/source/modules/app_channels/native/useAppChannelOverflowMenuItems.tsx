// Module ID: 14542
// Function ID: 14543
// Name: useAppChannelOverflowMenuItems
// Dependencies: [19, 6847, 5675, 12095, 7420, 14543, 14544, 10926, 14382, 14545, 8750, 14548, 1113, 12553, 11883, 3868, 11281, 5735, 10084, 2]
// Exports: default

// Module 14542 (useAppChannelOverflowMenuItems)
import intl6 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import FlagIcon from "FlagIcon" /* 10084 */;
import restartFrames from "restartFrames" /* 10926 */;
import ShieldIcon from "ShieldIcon" /* 11281 */;
import DoorExitIcon from "DoorExitIcon" /* 11883 */;
import RefreshIcon from "RefreshIcon" /* 12553 */;
import closeFrameDefault from "closeFrame" /* 14382 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function useAppChannelAppActions(channel) {
  let bot;
  let closure_2;
  _require = channel;
  let application_id = channel.application_id;
  if (application_id == null) {
    application_id = null;
  }
  let obj = bot;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  let tmp4 = dependencyMap;
  const memo = bot.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
    return obj;
  }, items);
  const tmp5 = application_id(12095)(application_id, memo);
  dependencyMap = tmp5;
  const obj2 = require("useAppChannelApplication");
  const appChannelApplication = obj2.useAppChannelApplication(channel);
  bot = undefined;
  if (appChannelApplication != null) {
    bot = appChannelApplication.bot;
  }
  const tmp8 = application_id(14543)(application_id);
  let closure_4 = tmp8;
  const tmp9 = application_id(14544)(application_id).length > 0;
  let closure_5 = tmp9;
  const items1 = [application_id, bot, channel, tmp8, tmp5, tmp9];
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
        fn3 = null;
        if (closure_5) {
          fn3 = () => {
            const obj = { applicationId, appName };
            return application_id(closure_2[9])(obj);
          };
        }
      }
    }
    fn4 = null;
    if (null != application_id) {
      fn4 = null;
      if (null != bot) {
        fn4 = () => {
          const obj = { userId: localUser.id, channelId: user.id, localUser };
          return application_id(closure_2[10])(obj);
        };
      }
    }
    fn5 = null;
    if (null != application_id) {
      fn5 = () => application_id(closure_2[11])(applicationId, user, "app_channel_header_mobile");
    }
    return obj;
  }, items1);
}
const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/app_channels/native/useAppChannelOverflowMenuItems.tsx");

export default function useAppChannelOverflowMenuItems(channel) {
  const tmp = useAppChannelAppActions(channel);
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
        const push4 = items.push;
        const obj2 = { label: intl4.string(intl6.t.kHie4V), IconComponent: RefreshIcon.RefreshIcon, action: tmp26 };
        intl4 = intl6.intl;
        push4(obj2);
      }
      if (null != close) {
        const push = items.push;
        const obj = { label: intl.string(intl6.t.VkMnR2), IconComponent: DoorExitIcon.DoorExitIcon, action: tmp2 };
        intl = intl6.intl;
        push(obj);
      }
      const items1 = [];
      if (null != devicePermissions) {
        const push2 = items1.push;
        const obj3 = { label: intl2.string(_modDef3868.wum6n2), IconComponent: ShieldIcon.ShieldIcon, action: tmp10 };
        intl2 = intl6.intl;
        push2(obj3);
      }
      if (null != appInfo) {
        const push5 = items1.push;
        const obj4 = { label: intl5.string(intl6.t.Sh2z9g), IconComponent: CircleInformationIcon.CircleInformationIcon, action: tmp18 };
        intl5 = intl6.intl;
        push5(obj4);
      }
      const push3 = items1.push;
      const obj5 = { label: intl3.string(intl6.t.NgA5vp), IconComponent: FlagIcon.FlagIcon, variant: "destructive", action: tmp };
      intl3 = intl6.intl;
      push3(obj5);
      const items2 = [items, items1];
      return items2.filter((item) => item.length > 0);
    }
  }, items);
};
export { useAppChannelAppActions };
