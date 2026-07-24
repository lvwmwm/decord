// Module ID: 9306
// Function ID: 72615
// Name: useConversationsHeaderButton
// Dependencies: [5, 31, 6830, 6832, 9307, 669, 9308, 9309, 566, 9320, 9311, 9322, 1212, 2]
// Exports: useConversationsHeaderButton

// Module 9306 (useConversationsHeaderButton)
import set from "set";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ CONVERSATION_HAS_MORE_EXPIRATION_MS: closure_5, MOBILE_FETCH_LIMIT: closure_6, MOBILE_PREVIEW_MESSAGE_COUNT: closure_7 } = CONVERSATION_COLORS);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/conversations/components/native/useConversationsHeaderButton.tsx");

export const useConversationsHeaderButton = function useConversationsHeaderButton(channel) {
  const _require = channel;
  isTopicalNavEnabled = _require(isTopicalNavEnabled[4]).useIsTopicalNavEnabled(channel.guild_id, "channel_header");
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = channel.type === _require(isTopicalNavEnabled[5]).ChannelTypes.GUILD_TEXT;
  }
  let obj = _require(isTopicalNavEnabled[4]);
  const items = [channel.id];
  const conversationBackoffRef = _require(isTopicalNavEnabled[6]).useConversationBackoffRef(items);
  const items1 = [, , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = isTopicalNavEnabled;
  items1[3] = conversationBackoffRef;
  callback = callback.useCallback((() => {
    function fetchPage() {
      return callback(...arguments);
    }
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = conversationBackoffRef(tmp);
    return fetchPage;
  })(), items1);
  const items2 = [, , , ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  items2[2] = isTopicalNavEnabled;
  items2[3] = callback;
  const effect = callback.useEffect(() => {
    let hasChannelDataResult = !isTopicalNavEnabled;
    if (!hasChannelDataResult) {
      hasChannelDataResult = stateFromStores.hasChannelData(channel.id);
    }
    if (!hasChannelDataResult) {
      hasChannelDataResult = stateFromStores.isPendingFetch(channel.id);
    }
    if (!hasChannelDataResult) {
      callback();
    }
  }, items2);
  const obj2 = _require(isTopicalNavEnabled[6]);
  const items3 = [stateFromStores];
  const items4 = [channel.id];
  stateFromStores = _require(isTopicalNavEnabled[8]).useStateFromStores(items3, () => stateFromStores.getEdgeMarker(channel.id, "after"), items4);
  const items5 = [stateFromStores, isTopicalNavEnabled, callback];
  const effect1 = callback.useEffect(() => {
    if (isTopicalNavEnabled) {
      if (null != stateFromStores) {
        const _Date = Date;
        const sum = stateFromStores + stateFromStores1;
        const diff = sum - Date.now();
        if (diff > 0) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(callback, diff);
          return () => clearTimeout(closure_0);
        } else {
          callback();
        }
      }
    }
  }, items5);
  const obj3 = _require(isTopicalNavEnabled[8]);
  const items6 = [stateFromStores];
  const items7 = [channel.id];
  const stateFromStores1 = _require(isTopicalNavEnabled[8]).useStateFromStores(items6, () => {
    const channelConversations = stateFromStores.getChannelConversations(channel.id);
    let length;
    if (null != channelConversations) {
      length = channelConversations.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    return num;
  }, items7);
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = stateFromStores1 > 0;
  }
  let closure_7 = callback.useRef(null);
  const items8 = [isTopicalNavEnabled, stateFromStores1, channel.id];
  const effect2 = callback.useEffect(() => {
    let tmp = isTopicalNavEnabled;
    if (isTopicalNavEnabled) {
      tmp = ref.current !== channel.id;
    }
    if (tmp) {
      ref.current = channel.id;
      const result = channel(isTopicalNavEnabled[7]).trackTopicalNavigationEntrypointImpression(channel.id, stateFromStores1);
      const obj = channel(isTopicalNavEnabled[7]);
    }
  }, items8);
  const items9 = [isTopicalNavEnabled, conversationBackoffRef, , ];
  ({ id: arr10[2], guild_id: arr10[3] } = channel);
  return callback.useMemo(() => {
    let tmp = null;
    if (isTopicalNavEnabled) {
      let obj = {
        source: null,
        IconComponent: channel(isTopicalNavEnabled[9]).PaperIcon,
        onPress() {
            const current = outer1_2.current;
            current.cancel();
            const ConversationsAnalytics = callback(isTopicalNavEnabled[10]).ConversationsAnalytics;
            let obj = { channelId: outer1_0.id, conversationIds: [], isFocusMode: false };
            const result = ConversationsAnalytics.trackTopicsUnitImpression(obj);
            obj = { channelId: outer1_0.id, guildId: outer1_0.guild_id };
            const result1 = callback(isTopicalNavEnabled[11]).openConversationNavigator(obj);
          }
      };
      const intl = channel(isTopicalNavEnabled[12]).intl;
      obj.accessibilityLabel = intl.string(channel(isTopicalNavEnabled[12]).t.u54FxB);
      tmp = obj;
    }
    return tmp;
  }, items9);
};
