// Module ID: 16027
// Function ID: 123874
// Name: onClose
// Dependencies: [31, 3947, 1197, 16028, 653, 33, 477, 3831, 16029, 1212, 5587, 5048, 4337, 675, 480, 5087, 16030, 16032, 16033, 14818, 9385, 4345, 4347, 5517, 2]
// Exports: default

// Module 16027 (onClose)
import closure_3 from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import { ExistingUserAgeGateScreens as closure_7 } from "ExistingUserAgeGateScreens";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
function onClose() {
  require(5587) /* openAgeGateModal */.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
function getScreens(arg0) {
  const _require = arg0;
  let fn = (function generateOnBack(arg0) {
    let closure_0 = arg0;
    if (outer1_6.NSFW_SERVER_INVITE !== arg0) {
      if (outer1_6.NSFW_SERVER_INVITE_EMBED !== arg0) {
        if (outer1_6.JOIN_LARGE_GUILD_UNDERAGE !== arg0) {
          if (outer1_6.ACCESS_LARGE_GUILD_UNDERAGE !== arg0) {
            if (outer1_6.LARGE_GUILD !== arg0) {
              if (outer1_6.NSFW_SERVER !== arg0) {
                if (outer1_6.NSFW_CHANNEL === arg0) {
                  return () => {
                    const guildId = outer2_4.getGuildId();
                    if (null != guildId) {
                      outer2_1(outer2_2[11]).nsfwReturnToSafety(guildId);
                      const obj = outer2_1(outer2_2[11]);
                    }
                    callback(outer2_2[10]).closeAgeGateModal(callback);
                  };
                } else if (outer1_6.NSFW_VOICE_CHANNEL === arg0) {
                  return () => {
                    let obj = outer2_1(outer2_2[12]);
                    obj.popAll();
                    obj = { source: closure_0, action: outer2_5.AGE_GATE_CLOSE };
                    outer2_1(outer2_2[13]).track(outer2_8.AGE_GATE_ACTION, obj);
                  };
                } else {
                  return outer1_6.FAMILY_CENTER === arg0 ? (() => {
                    callback(outer2_2[10]).closeAgeGateModal(callback);
                  }) : undefined;
                }
              }
            }
          }
        }
        return () => {
          const guildId = outer2_4.getGuildId();
          if (null != guildId) {
            outer2_1(outer2_2[11]).nsfwReturnToSafety(guildId);
            const obj = outer2_1(outer2_2[11]);
          }
          callback(outer2_2[10]).closeAgeGateModal(callback);
          const obj2 = callback(outer2_2[10]);
          outer2_1(outer2_2[12]).popAll();
        };
      }
    }
    return () => {
      callback(outer2_2[10]).closeAgeGateModal(callback);
    };
  })(arg0);
  if (null == fn) {
    fn = () => {

    };
  }
  let obj = {};
  obj = {
    fullscreen: true,
    impressionName: _require(480).ImpressionNames.USER_AGE_GATE,
    impressionProperties: { existing_user: true },
    headerLeft: _require(5087).getHeaderBackButton(fn),
    headerTitle: renderHeaderTitle,
    render(arg0, arg1) {
      const tmp = (function generateOnSuccess(closure_0, arg1) {
        const callback = arg1;
        if (closure_0 === outer2_6.NSFW_SERVER_INVITE) {
          if (obj.isIOS()) {
            let fn = () => {
              arr = arr.push(outer3_7.NSFWGateGuild);
              let obj = outer3_1(outer3_2[7]);
              obj = { key: "AGE_GATE_AGE_VERIFIED", icon: outer3_1(outer3_2[8]) };
              const intl = arr(outer3_2[9]).intl;
              obj.content = intl.string(arr(outer3_2[9]).t.gUiIGZ);
              obj.open(obj);
            };
          }
          return fn;
        }
        fn = () => {
          let obj = arr(outer3_2[10]);
          obj.closeAgeGateModal();
          obj = { key: "AGE_GATE_AGE_VERIFIED", icon: outer3_1(outer3_2[8]) };
          const intl = arr(outer3_2[9]).intl;
          obj.content = intl.string(arr(outer3_2[9]).t.gUiIGZ);
          outer3_1(outer3_2[7]).open(obj);
        };
      })(closure_0, arg1);
      return outer1_9(outer1_1(outer1_2[16]), {
        onSuccess: (function generateOnSuccess(closure_0, arg1) {
          const callback = arg1;
          if (closure_0 === outer2_6.NSFW_SERVER_INVITE) {
            if (obj.isIOS()) {
              let fn = () => {
                arr = arr.push(outer3_7.NSFWGateGuild);
                let obj = outer3_1(outer3_2[7]);
                obj = { key: "AGE_GATE_AGE_VERIFIED", icon: outer3_1(outer3_2[8]) };
                const intl = arr(outer3_2[9]).intl;
                obj.content = intl.string(arr(outer3_2[9]).t.gUiIGZ);
                obj.open(obj);
              };
            }
            return fn;
          }
          fn = () => {
            let obj = arr(outer3_2[10]);
            obj.closeAgeGateModal();
            obj = { key: "AGE_GATE_AGE_VERIFIED", icon: outer3_1(outer3_2[8]) };
            const intl = arr(outer3_2[9]).intl;
            obj.content = intl.string(arr(outer3_2[9]).t.gUiIGZ);
            outer3_1(outer3_2[7]).open(obj);
          };
        })(closure_0, arg1),
        onClose: outer1_10,
        source: closure_0
      });
    }
  };
  obj[closure_7.AgeGate] = obj;
  obj[closure_7.AgeGateConfirm] = {
    fullscreen: true,
    headerTitle: renderHeaderTitle,
    render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["source"] = closure_0;
      return outer1_9(outer1_1(outer1_2[17]), obj);
    }
  };
  obj = { fullscreen: true };
  const obj3 = _require(5087);
  obj.headerLeft = _require(5087).getHeaderBackButton(fn);
  obj.impressionName = _require(480).ImpressionNames.USER_AGE_GATE_VERIFY;
  obj.headerTitle = renderHeaderTitle;
  obj.render = function render() {
    return outer1_9(outer1_1(outer1_2[18]), { source: closure_0 });
  };
  obj[closure_7.Pawtect] = obj;
  obj[closure_7.Blocked] = {
    fullscreen: true,
    headerTitle: renderHeaderTitle,
    impressionProperties: { existing_user: true },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_9(outer1_1(outer1_2[19]), {});
    }
  };
  const obj1 = { headerTitle: renderHeaderTitle };
  const obj5 = _require(5087);
  obj1.headerLeft = _require(5087).getHeaderBackButton(fn);
  obj1.render = function render() {
    return outer1_9(outer1_1(outer1_2[20]), { onClose: outer1_10 });
  };
  obj[closure_7.NSFWGateGuild] = obj1;
  return obj;
}
({ AgeGateAnalyticAction: closure_5, AgeGateSource: closure_6 } = result);
result = require("result").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  let obj = source(4345);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  let closure_1 = React.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const watchAgeVerificationStatusChange = source(4347).useWatchAgeVerificationStatusChange(React.useCallback(() => {
    if (ref.current) {
      source(outer1_2[10]).closeAgeGateModal(source);
      const obj = source(outer1_2[10]);
    }
  }, items));
  obj = {};
  const items1 = [source];
  obj.screens = React.useMemo(() => outer1_12(source), items1);
  obj.initialRouteName = shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate;
  const intl = source(1212).intl;
  obj.headerBackTitle = intl.string(source(1212).t["13/7kX"]);
  return jsx(source(5517).Navigator, {});
};
