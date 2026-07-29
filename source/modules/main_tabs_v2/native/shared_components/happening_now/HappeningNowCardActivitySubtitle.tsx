// Module ID: 15074
// Function ID: 15075
// Name: HappeningNowVoiceCardSubtitle
// Dependencies: [19, 17, 1372, 676, 21, 4189, 589, 4380, 14312, 8316, 1236, 7978, 9079, 2]
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 15074 (HappeningNowVoiceCardSubtitle)
import "noop";
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ActivityTypes } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  let obj = voiceState(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(voiceState.channelId));
  obj = { style: callback().cardDetails, children: null };
  const tmp = callback();
  const tmp4 = importDefault;
  let tmp8;
  if (null != stateFromStores) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp8 = tmp4(8316)(obj);
  }
  obj[1] = jsx(voiceState(14312).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp8, children: importDefault(4380)(stateFromStores) });
  return <View style={callback().cardDetails}>{null}</View>;
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
    const obj = { lineClamp: 1, children: null };
    obj[1] = tmp3;
    return jsx(require(14312) /* HAPPENING_NOW_CARD_MARGIN_RIGHT */.HappeningNowCardSubtitle, { lineClamp: 1, children: null });
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.PLAYING) {
        let name3 = activity.name;
      }
    }
    const intl = require(1236) /* getSystemLocale */.intl;
    name3 = intl.string(require(1236) /* getSystemLocale */.t.eXan7B);
  } else {
    let name;
    if (activity != null) {
      name = activity.name;
    }
    tmp3 = null;
    if (null != name) {
      if (!importDefault(7978)(activity)) {
        if (tmp4(9079)(activity)) {
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
      tmp4 = importDefault;
    }
  }
};
