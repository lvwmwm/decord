// Module ID: 15912
// Function ID: 15913
// Name: HappeningNowCardActivitySubtitle
// Dependencies: [19, 17, 2045, 1074, 21, 4866, 504, 5019, 15048, 9259, 1115, 7900, 10553, 2]
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 15912 (HappeningNowCardActivitySubtitle)
import util from "util" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 5019 */;
import isStreamingDefault from "isStreaming" /* 7900 */;
import HappeningNowCard from "HappeningNowCard" /* 15048 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const getChannelA11yLabelDefault = tmp4(9259);
require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let closure_7 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  const tmp = closure_7();
  const items = [ChannelStore];
  const stateFromStores = voiceState(504).useStateFromStores(items, () => ChannelStore.getChannel(voiceState.channelId));
  const obj2 = { style: tmp.cardDetails, children: null };
  const obj = voiceState(504);
  let tmp8;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    tmp8 = getChannelA11yLabelDefault(obj3);
  }
  obj2.children = jsx(voiceState(15048).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp8, children: useChannelNameDefault(stateFromStores) });
  return <View style={tmp.cardDetails}>{null}</View>;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  activity = activity.activity;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        trimmed = activity.state.trim();
      }
      let tmp3 = trimmed;
    }
    const obj = { lineClamp: 1, children: tmp3 };
    return jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp3 });
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.PLAYING) {
        let name3 = activity.name;
      }
    }
    const intl = util.intl;
    name3 = intl.string(util.t.eXan7B);
  } else {
    let name1;
    if (activity != null) {
      name1 = activity.name;
    }
    tmp3 = null;
    if (null != name1) {
      if (!isStreamingDefault(activity)) {
        if (tmp4(10553)(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              let name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      if (null == activity.details) {
        const name2 = activity.name;
      }
      const details = activity.details;
      tmp4 = importDefault;
    }
  }
};
