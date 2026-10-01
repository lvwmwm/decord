// Module ID: 15712
// Function ID: 15713
// Name: HappeningNowCardActivitySubtitle
// Dependencies: [19, 17, 2045, 1074, 21, 4836, 504, 4989, 14842, 9060, 1115, 7705, 10350, 2]
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 15712 (HappeningNowCardActivitySubtitle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import isStreamingDefault from "isStreaming" /* 7705 */;
import HappeningNowCard from "HappeningNowCard" /* 14842 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tmp4;
const getChannelA11yLabelDefault = tmp4(9060);
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  const items = [ChannelStore];
  const tmp = closure_7();
  const obj = voiceState(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(voiceState.channelId));
  useChannelNameDefault(stateFromStores);
  const HappeningNowCardSubtitle = voiceState(14842).HappeningNowCardSubtitle;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    getChannelA11yLabelDefault(obj3);
  }
  return <tmp7 style={tmp.cardDetails}>{null}</tmp7>;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  let tmp3;
  activity = activity.activity;
  const stream = activity.stream;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        const str4 = activity.state;
        trimmed = str4.trim();
      }
      tmp3 = trimmed;
    }
    return jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp3 });
  }
  if (null != stream) {
    if (null != activity) {
      let name3;
      if (activity.type === ActivityTypes.PLAYING) {
        name3 = activity.name;
      }
      tmp3 = name3;
    }
    const intl = intl2.intl;
    name3 = intl.string(intl2.t.eXan7B);
  } else {
    let name1;
    if (activity != null) {
      name1 = activity.name;
    }
    tmp3 = null;
    if (null != name1) {
      let name;
      const tmp4 = importDefault;
      if (isStreamingDefault(activity)) {
        if (null != activity.details) {
          let name2;
          if ("" !== activity.details) {
            name2 = activity.details;
          }
          name = name2;
        }
        name2 = activity.name;
      } else {
        if (tmp4(10350)(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      tmp3 = name;
    }
  }
};
