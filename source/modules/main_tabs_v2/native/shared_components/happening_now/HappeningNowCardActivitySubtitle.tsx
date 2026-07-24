// Module ID: 14989
// Function ID: 114237
// Name: HappeningNowVoiceCardSubtitle
// Dependencies: [31, 27, 1348, 653, 33, 4130, 566, 4320, 14234, 8494, 1212, 7969, 9119, 2]
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 14989 (HappeningNowVoiceCardSubtitle)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  let obj = voiceState(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(voiceState.channelId));
  obj = { style: callback().cardDetails };
  const tmp = callback();
  obj = { lineClamp: 1 };
  let tmp6;
  if (null != stateFromStores) {
    const obj1 = { channel: stateFromStores };
    tmp6 = importDefault(8494)(obj1);
  }
  obj.accessibilityLabel = tmp6;
  obj.children = importDefault(4320)(stateFromStores);
  obj.children = jsx(voiceState(14234).HappeningNowCardSubtitle, { lineClamp: 1 });
  return <View lineClamp={1} />;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  activity = activity.activity;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        trimmed = activity.state.trim();
        const str4 = activity.state;
      }
      let tmp3 = trimmed;
    }
    const obj = { lineClamp: 1, children: tmp3 };
    return jsx(require(14234) /* HAPPENING_NOW_CARD_MARGIN_RIGHT */.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp3 });
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.PLAYING) {
        let name3 = activity.name;
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    name3 = intl.string(require(1212) /* getSystemLocale */.t.eXan7B);
  } else {
    let name;
    if (null != activity) {
      name = activity.name;
    }
    tmp3 = null;
    if (null != name) {
      if (!importDefault(7969)(activity)) {
        if (importDefault(9119)(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      if (null == activity.details) {
        const name2 = activity.name;
      }
      const details = activity.details;
    }
  }
};
