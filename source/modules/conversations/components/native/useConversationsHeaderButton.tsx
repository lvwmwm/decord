// Module ID: 9262
// Function ID: 72341
// Name: useConversationsHeaderButton
// Dependencies: []
// Exports: useConversationsHeaderButton

// Module 9262 (useConversationsHeaderButton)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ CONVERSATION_HAS_MORE_EXPIRATION_MS: closure_5, MOBILE_FETCH_LIMIT: closure_6, MOBILE_PREVIEW_MESSAGE_COUNT: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/conversations/components/native/useConversationsHeaderButton.tsx");

export const useConversationsHeaderButton = function useConversationsHeaderButton(channel) {
  const arg1 = channel;
  let isTopicalNavEnabled = arg1(dependencyMap[4]).useIsTopicalNavEnabled(channel.guild_id, "channel_header");
  if (isTopicalNavEnabled) {
    isTopicalNavEnabled = channel.type === arg1(dependencyMap[5]).ChannelTypes.GUILD_TEXT;
  }
  const dependencyMap = isTopicalNavEnabled;
  const obj = arg1(dependencyMap[4]);
  const items = [channel.id];
  const conversationBackoffRef = arg1(dependencyMap[6]).useConversationBackoffRef(items);
  let closure_2 = conversationBackoffRef;
  const items1 = [, , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = isTopicalNavEnabled;
  items1[3] = conversationBackoffRef;
  const callback = React.useCallback(() => {
    function fetchPage() {
      return callback(...arguments);
    }
    const isTopicalNavEnabled = fetchPage;
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = conversationBackoffRef(tmp);
    return fetchPage;
  }(), items1);
  const React = callback;
  const items2 = [, , , ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  items2[2] = isTopicalNavEnabled;
  items2[3] = callback;
  const effect = React.useEffect(() => {
    let hasChannelDataResult = !isTopicalNavEnabled;
    if (!hasChannelDataResult) {
      hasChannelDataResult = stateFromStores.hasChannelData(arg0.id);
    }
    if (!hasChannelDataResult) {
      hasChannelDataResult = stateFromStores.isPendingFetch(arg0.id);
    }
    if (!hasChannelDataResult) {
      callback();
    }
  }, items2);
  const obj2 = arg1(dependencyMap[6]);
  const items3 = [closure_4];
  const items4 = [channel.id];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items3, () => stateFromStores.getEdgeMarker(arg0.id, "after"), items4);
  closure_4 = stateFromStores;
  const items5 = [stateFromStores, isTopicalNavEnabled, callback];
  const effect1 = React.useEffect(() => {
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
  const obj3 = arg1(dependencyMap[8]);
  const items6 = [closure_4];
  const items7 = [channel.id];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items6, () => {
    const channelConversations = stateFromStores.getChannelConversations(arg0.id);
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
  let closure_7 = React.useRef(null);
  const items8 = [isTopicalNavEnabled, stateFromStores1, channel.id];
  const effect2 = React.useEffect(() => {
    let tmp = isTopicalNavEnabled;
    if (isTopicalNavEnabled) {
      tmp = ref.current !== arg0.id;
    }
    if (tmp) {
      ref.current = arg0.id;
      const ConversationsAnalytics = arg0(isTopicalNavEnabled[9]).ConversationsAnalytics;
      const obj = { channelId: arg0.id, conversationCount: stateFromStores1 };
      const result = ConversationsAnalytics.trackEntrypointImpression(obj);
    }
  }, items8);
  const items9 = [isTopicalNavEnabled, conversationBackoffRef, , ];
  ({ id: arr10[2], guild_id: arr10[3] } = channel);
  return React.useMemo(() => {
    let tmp = null;
    if (isTopicalNavEnabled) {
      const obj = {
        source: null,
        IconComponent: arg0(isTopicalNavEnabled[10]).PaperIcon,
        onPress() {
            const current = ref.current;
            current.cancel();
            const ConversationsAnalytics = lib(closure_1[9]).ConversationsAnalytics;
            let obj = { channelId: lib.id, conversationIds: [], isFocusMode: false };
            const result = ConversationsAnalytics.trackTopicsUnitImpression(obj);
            obj = { channelId: lib.id, guildId: lib.guild_id };
            const result1 = lib(closure_1[11]).openConversationNavigator(obj);
          }
      };
      const intl = arg0(isTopicalNavEnabled[12]).intl;
      obj.accessibilityLabel = intl.string(arg0(isTopicalNavEnabled[12]).t.u54FxB);
      tmp = obj;
    }
    return tmp;
  }, items9);
};
