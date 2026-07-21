// Module ID: 14815
// Function ID: 111671
// Name: HappeningNowVoiceCardSubtitle
// Dependencies: []
// Exports: HappeningNowActivityCardSubtitle, HappeningNowVoiceCardSubtitle

// Module 14815 (HappeningNowVoiceCardSubtitle)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const ActivityTypes = arg1(dependencyMap[3]).ActivityTypes;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_7 = arg1(dependencyMap[5]).createStyles({ cardDetails: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  const arg1 = voiceState.voiceState;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(voiceState.channelId));
  obj = { style: callback().cardDetails };
  const tmp = callback();
  obj = { lineClamp: 1 };
  let tmp6;
  if (null != stateFromStores) {
    const obj1 = { channel: stateFromStores };
    tmp6 = importDefault(dependencyMap[9])(obj1);
  }
  obj.accessibilityLabel = tmp6;
  obj.children = importDefault(dependencyMap[7])(stateFromStores);
  obj.children = jsx(arg1(dependencyMap[8]).HappeningNowCardSubtitle, obj);
  return <View {...obj} />;
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
    return jsx(arg1(dependencyMap[8]).HappeningNowCardSubtitle, obj);
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.PLAYING) {
        let name3 = activity.name;
      }
    }
    const intl = arg1(dependencyMap[10]).intl;
    name3 = intl.string(arg1(dependencyMap[10]).t.eXan7B);
  } else {
    let name;
    if (null != activity) {
      name = activity.name;
    }
    tmp3 = null;
    if (null != name) {
      if (!importDefault(dependencyMap[11])(activity)) {
        if (importDefault(dependencyMap[12])(activity)) {
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
