// Module ID: 16004
// Function ID: 16005
// Name: HappeningNowCardActivitySubtitle
// Dependencies: [19, 17, 2051, 1085, 21, 4890, 558, 576, 504, 5043, 9260, 15115, 1126, 7931, 10625, 2]
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 16004 (HappeningNowCardActivitySubtitle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import isStreamingDefault from "isStreaming" /* 7931 */;
import HappeningNowCard from "HappeningNowCard" /* 15115 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getActivitySubtitle(activity, stream) {
  let tmp3;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        const str4 = activity.state;
        trimmed = str4.trim();
      }
      tmp3 = trimmed;
    }
    return tmp3;
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
        if (tmp4(10625)(activity)) {
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
}
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  let channel;
  let tmp10Result;
  let voiceState2;
  const tmp = closure_8;
  if (tmp) {
    let first;
    let tmp23;
    let tmp27;
    const obj5 = voiceState2(576);
    const cResult = obj5.c(11);
    voiceState = voiceState.voiceState;
    const tmp19 = closure_7();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ChannelStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== voiceState.channelId) {
      const fn = function p() {
        return channel.getChannel(voiceState.channelId);
      };
      cResult[1] = voiceState.channelId;
      cResult[2] = fn;
      tmp23 = fn;
    } else {
      tmp23 = cResult[2];
    }
    const tmp15Result = voiceState2(504);
    const stateFromStores = tmp15Result.useStateFromStores(first, tmp23);
    const tmp26 = useChannelNameDefault(stateFromStores);
    const tmp25 = importDefault;
    if (cResult[3] !== stateFromStores) {
      let tmp29;
      if (null != stateFromStores) {
        const obj2 = { channel: stateFromStores };
        tmp29 = tmp25(9260)(obj2);
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp29;
      tmp27 = tmp29;
    } else {
      tmp27 = cResult[4];
    }
    if (cResult[5] === tmp26) {
      let tmp30;
      if (cResult[6] === tmp27) {
        tmp30 = cResult[7];
      }
      if (cResult[8] === tmp19.cardDetails) {
        let tmp33;
        if (cResult[9] === tmp30) {
          tmp33 = cResult[10];
        }
        tmp10Result = tmp33;
      }
      const tmp36 = <View style={tmp19.cardDetails}>{tmp30}</View>;
      cResult[8] = tmp19.cardDetails;
      cResult[9] = tmp30;
      cResult[10] = tmp36;
      tmp33 = tmp36;
    }
    const tmp32 = jsx(voiceState2(15115).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp27, children: tmp26 });
    cResult[5] = tmp26;
    cResult[6] = tmp27;
    cResult[7] = tmp32;
    tmp30 = tmp32;
  } else {
    voiceState2 = voiceState.voiceState;
    const items1 = [ChannelStore];
    const tmp3 = closure_7();
    const obj = voiceState2(504);
    const stateFromStores1 = obj.useStateFromStores(items1, () => ChannelStore.getChannel(voiceState2.channelId));
    const obj6 = { style: tmp3.cardDetails, children: null };
    const tmp9 = useChannelNameDefault(stateFromStores1);
    const HappeningNowCardSubtitle = voiceState2(15115).HappeningNowCardSubtitle;
    const tmp11 = View;
    const tmp8 = importDefault;
    if (null != stateFromStores1) {
      const obj7 = { channel: stateFromStores1 };
      const tmp13 = tmp8(9260)(obj7);
    }
    tmp10Result = tmp10(tmp11, obj6);
  }
  return tmp10Result;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  let stream;
  let tmp7;
  const tmp = closure_10;
  if (tmp) {
    const obj2 = react2;
    const cResult = obj2.c(5);
    ({ activity, stream } = activity);
    const tmp8 = require;
    if (cResult[0] === activity) {
      let tmp11;
      let tmp14;
      if (cResult[1] === stream) {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== tmp11) {
        const tmp16 = jsx(tmp8(15115).HappeningNowCardSubtitle, { lineClamp: 1, children: tmp11 });
        cResult[3] = tmp11;
        cResult[4] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[4];
      }
      tmp7 = tmp14;
    }
    const tmp13 = getActivitySubtitle(activity, stream);
    cResult[0] = activity;
    cResult[1] = stream;
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    getActivitySubtitle(activity.activity, activity.stream);
    tmp7 = jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: getActivitySubtitle(activity.activity, activity.stream) });
  }
  return tmp7;
};
