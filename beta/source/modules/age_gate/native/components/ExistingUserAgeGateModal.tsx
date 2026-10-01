// Module ID: 17085
// Function ID: 17086
// Name: ExistingUserAgeGateModal
// Dependencies: [19, 4655, 1099, 17086, 1074, 21, 1364, 4528, 17087, 1115, 6632, 5832, 5039, 1241, 1249, 5936, 17088, 17090, 17091, 15611, 9232, 5046, 5048, 6421, 2]
// Exports: default

// Module 17085 (ExistingUserAgeGateModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6632 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 17086 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function onClose() {
  const obj = AgeGateModalActionCreators;
  obj.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
({ AgeGateAnalyticAction: hasOwnProperty, AgeGateSource: metroRequire } = AgeGateConstants);
let closure_7 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  let intl;
  let items1;
  let tmp6;
  source = source.source;
  let tmp = source;
  let tmp2 = dependencyMap;
  let obj = source(5046);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  const ref = react.useRef(shouldAgeVerifyForAgeGate);
  let obj2 = source(5048);
  const items = [source];
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(react.useCallback(() => {
    if (ref.current) {
      const obj = AgeGateModalActionCreators;
      obj.closeAgeGateModal(source);
    }
  }, items));
  let tmp5 = jsx;
  let obj3 = {
    screens: react.useMemo(() => {
      let constants2;
      let constants3;
      let obj3;
      let obj6;
      let obj9;
      let tmp = source;
      let closure_0 = source;
      let tmp2 = metroRequire;
      if (metroRequire.NSFW_SERVER_INVITE !== source) {
        let fn;
        if (tmp2.NSFW_SERVER_INVITE_EMBED !== tmp) {
          if (tmp2.JOIN_LARGE_GUILD_UNDERAGE !== tmp) {
            if (tmp2.ACCESS_LARGE_GUILD_UNDERAGE !== tmp) {
              if (tmp2.LARGE_GUILD !== tmp) {
                if (tmp2.NSFW_SERVER !== tmp) {
                  if (tmp2.NSFW_CHANNEL === tmp) {
                    fn = () => {
                      const guildId = closure_2_4.getGuildId();
                      if (null != guildId) {
                        const obj = ref(closure_2_2[11]);
                        obj.nsfwReturnToSafety(guildId);
                      }
                      const obj2 = closure_2_0(closure_2_2[10]);
                      obj2.closeAgeGateModal(closure_0);
                    };
                  } else if (tmp2.NSFW_VOICE_CHANNEL === tmp) {
                    fn = () => {
                      const obj = ref(closure_2_2[12]);
                      obj.popAll();
                      const obj2 = ref(closure_2_2[13]);
                      const obj3 = { source, action: constants.AGE_GATE_CLOSE };
                      obj2.track(constants3.AGE_GATE_ACTION, obj3);
                    };
                  } else if (tmp2.FAMILY_CENTER === tmp) {
                    fn = () => {
                      const obj = closure_2_0(closure_2_2[10]);
                      obj.closeAgeGateModal(closure_0);
                    };
                  }
                }
              }
            }
          }
          fn = () => {
            const guildId = closure_2_4.getGuildId();
            if (null != guildId) {
              const obj = ref(closure_2_2[11]);
              obj.nsfwReturnToSafety(guildId);
            }
            const obj2 = closure_2_0(closure_2_2[10]);
            obj2.closeAgeGateModal(closure_0);
            const obj3 = ref(closure_2_2[12]);
            obj3.popAll();
          };
        }
        if (fn == null) {
          fn = () => {

          };
        }
        let obj = {};
        let obj2 = {
          fullscreen: true,
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE,
          impressionProperties: { existing_user: true },
          headerLeft: obj3.getHeaderBackButton(fn),
          headerTitle: renderHeaderTitle,
          render(arg0, arg1) {
              let NSFWGateGuild;
              let closure_0 = arg1;
              if (closure_0 === constants2.NSFW_SERVER_INVITE) {
                let fn;
                let tmp2 = source;
                let obj = source(closure_2_2[6]);
                if (obj.isIOS()) {
                  fn = () => {
                    let intl;
                    closure_0.push(NSFWGateGuild.NSFWGateGuild);
                    const tmp2 = closure_2_1(closure_2_2[7]);
                    const open = tmp2.open;
                    const obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_2_1(closure_2_2[8]), content: intl.string(source(closure_2_2[9]).t.gUiIGZ) };
                    intl = source(closure_2_2[9]).intl;
                    open(obj);
                  };
                }
                let obj2 = { onSuccess: fn, onClose, source: tmp };
                return closure_2_9(ref(closure_2_2[16]), obj2);
              }
              fn = () => {
                let intl;
                const obj = source(closure_1_2[10]);
                obj.closeAgeGateModal();
                const tmp2 = closure_1_1(closure_1_2[7]);
                const open = tmp2.open;
                const obj2 = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(closure_1_2[8]), content: intl.string(source(closure_1_2[9]).t.gUiIGZ) };
                intl = source(closure_1_2[9]).intl;
                open(obj2);
              };
            }
        };
        const AgeGate = closure_7.AgeGate;
        obj3 = NavigatorHeader;
        obj[AgeGate] = obj2;
        const obj4 = {
          fullscreen: true,
          headerTitle: renderHeaderTitle,
          render(arg0) {
              const obj = { source };
              const tmp = ref(closure_2_2[17]);
              const merged = Object.assign(arg0);
              return closure_2_9(tmp, obj);
            }
        };
        obj[closure_7.AgeGateConfirm] = obj4;
        const Pawtect = closure_7.Pawtect;
        const obj5 = {
          fullscreen: true,
          headerLeft: obj6.getHeaderBackButton(fn),
          impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY,
          headerTitle: renderHeaderTitle,
          render() {
              const obj = { source };
              return closure_2_9(ref(closure_2_2[18]), obj);
            }
        };
        obj[Pawtect] = obj5;
        const obj7 = {
          fullscreen: true,
          headerTitle: renderHeaderTitle,
          impressionProperties: { existing_user: true },
          render(arg0) {
              const obj = {};
              const tmp = ref(closure_1_2[19]);
              const merged = Object.assign(arg0);
              return closure_1_9(tmp, obj);
            }
        };
        obj[closure_7.Blocked] = obj7;
        obj6 = NavigatorHeader;
        const NSFWGateGuild = closure_7.NSFWGateGuild;
        const obj8 = {
          headerTitle: renderHeaderTitle,
          headerLeft: obj9.getHeaderBackButton(fn),
          render() {
              const obj = { onClose };
              return closure_1_9(ref(closure_1_2[20]), obj);
            }
        };
        obj[NSFWGateGuild] = obj8;
        obj9 = NavigatorHeader;
        return obj;
      }
      fn = () => {
        const obj = closure_2_0(closure_2_2[10]);
        obj.closeAgeGateModal(closure_0);
      };
    }, items1),
    initialRouteName: shouldAgeVerifyForAgeGate ? tmp6.Pawtect : tmp6.AgeGate,
    headerBackTitle: intl.string(tmp(1115).t["13/7kX"])
  };
  items1 = [source];
  const Navigator = source(6421).Navigator;
  tmp6 = closure_7;
  intl = tmp(1115).intl;
  return tmp5(Navigator, obj3);
};
