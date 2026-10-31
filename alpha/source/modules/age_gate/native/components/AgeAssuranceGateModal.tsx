// Module ID: 19384
// Function ID: 19385
// Name: AgeAssuranceGateModal
// Dependencies: [19, 4863, 1097, 19385, 21, 19386, 6998, 1260, 19387, 11218, 504, 5652, 6726, 6739, 7169, 1113, 2]
// Exports: default

// Module 19384 (AgeAssuranceGateModal)
import Fragment from "Fragment" /* 21 */;
import AgeGateConstants from "AgeGateConstants" /* 1097 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6739 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 19385 */;
import ageGateNavigationCallbacks from "ageGateNavigationCallbacks" /* 19386 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

let tmp;
const discord_common_AnalyticsUtils = tmp(1260);
const NavigatorHeader = tmp(6998);
let react = react_mod;
const AgeGateSource = AgeGateConstants.AgeGateSource;
let closure_6 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_gate/native/components/AgeAssuranceGateModal.tsx");

export default function AgeAssuranceGateModal(source) {
  let Pawtect;
  let closure_3;
  let intl;
  let items3;
  source = source.source;
  const channelId = source.channelId;
  let stateFromStores;
  react = undefined;
  let tmp = source;
  let obj = source(stateFromStores[10]);
  const items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp4 = null;
  if (source === AgeGateSource.NSFW_VOICE_CHANNEL) {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    tmp4 = null;
    if (null != guild_id) {
      tmp4 = stateFromStores;
    }
  }
  stateFromStores = tmp4;
  const tmp6 = channelId(stateFromStores[11])(tmp4);
  react = tmp6;
  let tmpResult = tmp(tmp2[12]);
  const items2 = [source];
  const watchAgeVerificationStatusChange = tmpResult.useWatchAgeVerificationStatusChange(react.useCallback(() => {
    const obj = AgeGateModalActionCreators;
    obj.closeAgeGateModal(source);
  }, items2));
  let obj2 = {
    screens: react.useMemo(() => {
      let tmpResult;
      let tmpResult2;
      let renderHeaderTitle = closure_3;
      let closure_0 = source;
      const tmp = require;
      let obj = ageGateNavigationCallbacks;
      let fn = obj.generateOnBack(source);
      if (fn == null) {
        fn = () => {

        };
      }
      let obj2 = {};
      const Pawtect = closure_6.Pawtect;
      const obj3 = {
        fullscreen: true,
        headerLeft: tmpResult.getHeaderBackButton(fn),
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY,
        headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
        render() {
          const obj = { source };
          return closure_2_7(stateFromStores(closure_2_2[8]), obj);
        }
      };
      obj2[Pawtect] = obj3;
      tmpResult = NavigatorHeader;
      const NSFWVoiceChannel = closure_6.NSFWVoiceChannel;
      const obj4 = {
        fullscreen: true,
        headerLeft: tmpResult2.getHeaderBackButton(fn),
        headerTitle: renderHeaderTitle,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY,
        render() {
          let tmp7;
          let guild_id;
          if (closure_1 != null) {
            guild_id = tmp.guild_id;
          }
          if (null == guild_id) {
            const obj2 = { source };
            tmp7 = closure_2_7(stateFromStores(closure_2_2[8]), obj2);
          } else {
            const obj = { guildId: null, channelId: null, onReturnToSafety, returnToSafety: false };
            ({ guild_id: obj.guildId, id: obj.channelId } = closure_1);
            tmp7 = closure_2_7(stateFromStores(closure_2_2[9]), obj);
          }
          return tmp7;
        }
      };
      tmpResult2 = NavigatorHeader;
      if (renderHeaderTitle == null) {
        renderHeaderTitle = ageGateNavigationCallbacks.renderHeaderTitle;
      }
      obj2[NSFWVoiceChannel] = obj4;
      return obj2;
    }, items3),
    initialRouteName: Pawtect,
    headerBackTitle: intl.string(tmp(tmp2[15]).t["13/7kX"])
  };
  items3 = [source, tmp4, tmp6];
  const Navigator = tmp(tmp2[14]).Navigator;
  const tmp8 = jsx;
  if (null != tmp4) {
    Pawtect = closure_6.NSFWVoiceChannel;
  } else {
    Pawtect = closure_6.Pawtect;
  }
  intl = tmp(tmp2[15]).intl;
  return tmp8(Navigator, obj2);
};
