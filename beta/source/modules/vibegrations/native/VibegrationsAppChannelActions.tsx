// Module ID: 12826
// Function ID: 12827
// Name: VibegrationsAppChannelActions
// Dependencies: [19, 17, 12827, 21, 4836, 504, 12828, 12829, 1115, 3715, 12830, 9640, 12450, 5370, 5374, 5385, 12831, 2]
// Exports: default

// Module 12826 (VibegrationsAppChannelActions)
import react_native from "react-native" /* 17 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5370 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 12450 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 12831 */;
import react from "react" /* 19 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 12827 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelActions.tsx");

export default function VibegrationsAppChannelActions(channel) {
  let ChatIcon;
  let StringResult;
  let badge;
  let intl3;
  let items3;
  let mentionCount;
  channel = channel.channel;
  let tmp = closure_7();
  let obj = channel(504);
  const items = [VibegrationsAppChannelsStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsAppChannelsStore.isChatOpen(channel.id), items1);
  ({ mentionCount, badge } = stateFromStores(12828)(channel.id));
  stateFromStores(12828)(channel.id);
  stateFromStores(12829)(channel, stateFromStores);
  let tmp8 = null;
  if (!stateFromStores) {
    tmp8 = badge;
  }
  const intl = tmp2(1115).intl;
  const string = intl.string;
  const tmp5Result = stateFromStores(3715);
  const items2 = [string(stateFromStores ? tmp5Result.jLMpUv : tmp5Result.aWVf4j)];
  if ("mention" === tmp8) {
    const push = items2.push;
    const intl2 = tmp2(1115).intl;
    const obj2 = { mentionCount };
    push(intl2.formatToPlainString(channel(1115).t["3l1GOx"], obj2));
  } else if ("unread" === tmp8) {
    const push2 = items2.push;
    const intl4 = tmp2(1115).intl;
    push2(intl4.string(channel(1115).t.x5zAGZ));
  }
  let tmp14 = null;
  const obj3 = { style: tmp.actionWrapper, children: items3 };
  const tmp12 = closure_6;
  const tmp13 = View;
  if (!stateFromStores) {
    const obj4 = {
      source: null,
      IconComponent: channel(9640).RetryIcon,
      onPress() {
          const tmp = restartVibegrationsAppFramesDefault;
          const obj = VibegrationsUtils;
          return tmp(obj.vibegrationsAppIdFromTopic(channel.topic));
        },
      accessibilityLabel: intl3.string(stateFromStores(3715).xKexN1)
    };
    const tmp5Result3 = stateFromStores(12830);
    intl3 = tmp2(1115).intl;
    tmp14 = closure_5(tmp5Result3, obj4);
  }
  items3 = [tmp14, ];
  const tmp17 = closure_5;
  const tmp5Result4 = stateFromStores(12830);
  if (stateFromStores) {
    ChatIcon = tmp2(5374).AppsIcon;
  } else {
    ChatIcon = tmp2(5385).ChatIcon;
  }
  const obj5 = {
    noMargin: true,
    source: null,
    IconComponent: ChatIcon,
    onPress() {
      const obj = VibegrationsAppChannelActionCreators;
      return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
    },
    accessibilityLabel: items2.join(", "),
    badge: null != tmp8,
    badgePosition: "right",
    buttonText: StringResult
  };
  StringResult = undefined;
  if ("mention" === tmp8) {
    const _String = String;
    StringResult = String(mentionCount);
  }
  items3[1] = tmp17(tmp5Result4, obj5);
  return tmp12(tmp13, obj3);
};
