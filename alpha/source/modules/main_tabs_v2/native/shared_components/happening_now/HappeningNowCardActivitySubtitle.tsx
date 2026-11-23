// Module ID: 17603
// Function ID: 17604
// Name: HappeningNowCardActivitySubtitle
// Dependencies: [19, 17, 4762, 21, 4913, 504, 5529, 16702, 8009, 5652, 1112, 8215, 13521, 2]
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 17603 (HappeningNowCardActivitySubtitle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import useChannelNameDefault from "useChannelName" /* 5529 */;
import ActivityTypes from "ActivityTypes" /* 5652 */;
import isStreamingDefault from "isStreaming" /* 8215 */;
import HappeningNowCard from "HappeningNowCard" /* 16702 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let tmp4;
const getChannelA11yLabelDefault = tmp4(8009);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  const items = [ChannelStore];
  const tmp = closure_6();
  const obj = voiceState(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(voiceState.channelId));
  useChannelNameDefault(stateFromStores);
  const HappeningNowCardSubtitle = voiceState(16702).HappeningNowCardSubtitle;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    getChannelA11yLabelDefault(obj3);
  }
  return <tmp7 style={tmp.cardDetails}>{null}</tmp7>;
}
export function HappeningNowActivityCardSubtitle(activity) {
  let tmp4;
  activity = activity.activity;
  const stream = activity.stream;
  if (null != activity) {
    if (activity.type === ActivityTypes.ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        const str4 = activity.state;
        trimmed = str4.trim();
      }
      tmp4 = trimmed;
    }
    return jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp4 });
  }
  if (null != stream) {
    if (null != activity) {
      let name3;
      if (activity.type === ActivityTypes.ActivityTypes.PLAYING) {
        name3 = activity.name;
      }
      tmp4 = name3;
    }
    const intl = intl2.intl;
    name3 = intl.string(intl2.t.eXan7B);
  } else {
    let name1;
    if (activity != null) {
      name1 = activity.name;
    }
    tmp4 = null;
    if (null != name1) {
      let name;
      const tmp5 = importDefault;
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
        if (tmp5(13521)(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      tmp4 = name;
    }
  }
}
