// Module ID: 10686
// Function ID: 10687
// Name: UserProfileVoiceActivityIcon
// Dependencies: [109, 19, 4935, 1098, 21, 558, 576, 504, 9752, 7234, 8599, 8600, 8602, 8601, 8604, 2]

// Module 10686 (UserProfileVoiceActivityIcon)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1098 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7234 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4935 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["channel"];
const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileVoiceActivityIcon(channel) {
  let _private;
  let tmp10;
  let tmp4;
  let tmp45;
  let tmp8;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    _require = channel;
    const tmp7 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = tmp7;
    tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[3] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== obj2) {
    const fn = function f() {
      let isPrivateResult = _private.isPrivate();
      const tmp = _private;
      if (!isPrivateResult) {
        isPrivateResult = PermissionStore.can(Permissions.CONNECT, tmp);
      }
      return isPrivateResult;
    };
    cResult[4] = obj2;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10);
  if (!obj2.isDM()) {
    if (!obj2.isGroupDM()) {
      let tmp15;
      const isGuildStageVoiceResult = obj2.isGuildStageVoice();
      let tmp13 = !stateFromStores;
      if (stateFromStores) {
        tmp13 = isRoleRequiredDefault(obj2);
      }
      if (isGuildStageVoiceResult) {
        if (tmp13) {
          let tmp39;
          if (cResult[8] !== tmp4) {
            const StageLockIcon = tmp(8599).StageLockIcon;
            const merged = Object.assign(tmp4);
            const tmp44 = <StageLockIcon />;
            cResult[8] = tmp4;
            cResult[9] = tmp44;
            tmp39 = tmp44;
          } else {
            tmp39 = cResult[9];
          }
          tmp15 = tmp39;
        }
        return tmp15;
      }
      if (isGuildStageVoiceResult) {
        let tmp33;
        if (cResult[10] !== tmp4) {
          const StageIcon = tmp(8600).StageIcon;
          const merged1 = Object.assign(tmp4);
          const tmp38 = <StageIcon />;
          cResult[10] = tmp4;
          cResult[11] = tmp38;
          tmp33 = tmp38;
        } else {
          tmp33 = cResult[11];
        }
        tmp15 = tmp33;
      } else if (obj2.isNSFW()) {
        let tmp27;
        if (cResult[12] !== tmp4) {
          const VoiceWarningIcon = tmp(8602).VoiceWarningIcon;
          const merged2 = Object.assign(tmp4);
          const tmp32 = <VoiceWarningIcon />;
          cResult[12] = tmp4;
          cResult[13] = tmp32;
          tmp27 = tmp32;
        } else {
          tmp27 = cResult[13];
        }
        tmp15 = tmp27;
      } else if (tmp13) {
        let tmp21;
        if (cResult[14] !== tmp4) {
          const VoiceLockIcon = tmp(8601).VoiceLockIcon;
          const merged3 = Object.assign(tmp4);
          const tmp26 = <VoiceLockIcon />;
          cResult[14] = tmp4;
          cResult[15] = tmp26;
          tmp21 = tmp26;
        } else {
          tmp21 = cResult[15];
        }
        tmp15 = tmp21;
      } else if (cResult[16] !== tmp4) {
        const VoiceNormalIcon = tmp(8604).VoiceNormalIcon;
        const merged4 = Object.assign(tmp4);
        const tmp20 = <VoiceNormalIcon />;
        cResult[16] = tmp4;
        cResult[17] = tmp20;
        tmp15 = tmp20;
      } else {
        tmp15 = cResult[17];
      }
    }
  }
  if (cResult[6] !== tmp4) {
    const PhoneCallIcon = tmp(9752).PhoneCallIcon;
    const merged5 = Object.assign(tmp4);
    const tmp50 = <PhoneCallIcon />;
    cResult[6] = tmp4;
    cResult[7] = tmp50;
    tmp45 = tmp50;
  } else {
    tmp45 = cResult[7];
  }
  return tmp45;
}) : (function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  const items = [PermissionStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      let tmp8Result;
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = isRoleRequiredDefault(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          const StageLockIcon = tmp2(8599).StageLockIcon;
          const merged1 = Object.assign(merged);
          tmp8Result = <StageLockIcon />;
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const StageIcon = tmp2(8600).StageIcon;
        const merged2 = Object.assign(merged);
        tmp8Result = <StageIcon />;
      } else if (channel.isNSFW()) {
        const obj4 = {};
        const VoiceWarningIcon = tmp2(8602).VoiceWarningIcon;
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(VoiceWarningIcon, obj4);
      } else {
        let VoiceNormalIcon;
        if (tmp6) {
          VoiceNormalIcon = tmp2(8601).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(8604).VoiceNormalIcon;
        }
        const obj5 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj5);
      }
    }
  }
  const PhoneCallIcon = tmp2(9752).PhoneCallIcon;
  const merged5 = Object.assign(merged);
  return <PhoneCallIcon />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default tmp3;
