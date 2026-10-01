// Module ID: 16580
// Function ID: 16581
// Name: NewMessageScreen
// Dependencies: [5, 32, 19, 17, 2049, 2045, 4479, 6639, 10320, 1074, 21, 4566, 4832, 4836, 576, 1364, 4849, 6642, 573, 504, 1241, 16581, 4837, 16582, 7288, 1115, 10882, 16292, 6583, 6603, 6402, 5298, 11089, 11087, 11086, 7300, 1101, 11090, 4527, 9491, 9492, 4770, 4769, 10457, 5281, 11853, 16521, 2]
// Exports: default

// Module 16580 (NewMessageScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import UserPlusIcon from "UserPlusIcon" /* 4769 */;
import AssetRegistryDefault from "AssetRegistry" /* 4770 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9491 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9492 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import NoResultsDefault from "NoResults" /* 10457 */;
import ChatViewDefault from "ChatView" /* 10882 */;
import useOnMessageSendDefault from "useOnMessageSend" /* 16581 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6639 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, c3, closure_2, dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let obj2;
let obj3;
let str;
let tmp2;
const getGroupDMRecipientLimitDefault = tmp2(11087);
const GroupDMNitroCapExperimentDefault = tmp2(11089);
const NewMessageUserListDefault = tmp2(11853);
const GroupDMNitroUpsellBannerDefault = tmp2(16521);
function isPrivateChannelMatch(arr, channel) {
  const recipients = channel.recipients;
  if (recipients.length !== arr.length) {
    return false;
  } else {
    for (const item10009 of recipients) {
      if (arr.includes(item10009)) {
        continue;
      } else {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function findLocalMatchingPrivateChannelId(arg0) {
  let closure_0 = arg0;
  if (1 === arg0.length) {
    let dMFromUserId = ChannelStore.getDMFromUserId(arg0[0]);
    if (dMFromUserId == null) {
      dMFromUserId = null;
    }
    return dMFromUserId;
  } else {
    let tmp2 = _slicedToArray;
    const items = [, ];
    [arr[0], arr[1]] = _slicedToArray(PrivateChannelSortStore.getSortedChannels(), 2);
    const tmp3 = _slicedToArray(PrivateChannelSortStore.getSortedChannels(), 2);
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let found = nextResult.find((channelId) => {
        const channel = ChannelStore.getChannel(channelId.channelId);
        let tmp2 = !(null == channel || !channel.isPrivate());
        null == channel || !channel.isPrivate();
        if (tmp2) {
          tmp2 = isPrivateChannelMatch(closure_0, channel);
        }
        return tmp2;
      });
      if (null != found) {
        let channelId = found.channelId;
        iter.return();
        return channelId;
      }
    }
    return null;
  }
}
let __closure = function _findMatchingPrivateChannelId() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj3;
    length = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp15 = findLocalMatchingPrivateChannelId(length);
            if (null != tmp15) {
              c1 = 3;
              const obj5 = { value: tmp15, done: true };
              return obj5;
            } else if (length.length > 1) {
              c1 = 3;
              return { value: null, done: true };
            } else {
              c4 = 1;
              c2 = 2;
              c1 = 1;
              const obj6 = { value: obj3.getDMChannel(length[0]), done: false };
              obj3 = ChannelActionCreatorsDefault;
              return obj6;
            }
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c1 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c1 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c1 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        let closure_3 = tmp7;
        if (0 === c4) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function Header(recipientLimit) {
  let items1;
  let numInGroup;
  let str;
  let stringResult;
  let title;
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const usePersonLimitCopy = recipientLimit.usePersonLimitCopy;
  const items = [recipientLimit, numInGroup];
  const tmp = closure_20();
  const memo = react.useMemo(() => recipientLimit - (numInGroup + 1), items);
  numInGroup(4566);
  const fn = function u() {
    let num2;
    let withTiming2;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (numInGroup >= 5) {
      num = 1;
    }
    const obj = { opacity: withTiming(num), maxHeight: withTiming2(num2) };
    num2 = 0;
    withTiming2 = tmp2(4837).withTiming;
    timing;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    return obj;
  };
  __closure = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4837).withTiming };
  fn.__closure = __closure;
  fn.__workletHash = 12426216833792;
  fn.__initData = __initData;
  if (usePersonLimitCopy) {
    let num2 = 1;
    const obj2 = { title, memberCount: numInGroup + 1, recipientLimit };
    return closure_17(recipientLimit(16582), obj2);
  } else {
    let num = 0;
    const obj3 = { style: tmp.header, children: items1 };
    const obj4 = { title };
    items1 = [closure_17(tmp3(7288).GenericHeaderTitle, obj4), ];
    const obj5 = { style: tmp6, variant: "text-xs/medium", color: str, children: stringResult };
    str = "text-muted";
    const tmp10 = closure_17;
    const tmp11 = closure_19;
    const tmp8 = closure_18;
    const tmp9 = View;
    if (0 === memo) {
      str = "text-feedback-critical";
    }
    const intl = tmp3(1115).intl;
    if (0 === memo) {
      stringResult = intl.string(tmp3(1115).t.yiQW1O);
    } else {
      const formatToPlainString = intl.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj6 = { number: "" + memo };
      const HrSDPF = tmp3(1115).t.HrSDPF;
      stringResult = formatToPlainString(HrSDPF, obj6);
    }
    items1[1] = tmp10(tmp11, obj5);
    return tmp8(tmp9, obj3);
  }
}
function ChatPreview(channelId) {
  let items2;
  let obj2;
  let obj5;
  channelId = channelId.channelId;
  const navigateToChannel = channelId.navigateToChannel;
  const tagListInputRef = channelId.tagListInputRef;
  const tmp = closure_20();
  const items = [channelId];
  const ref = react.useRef(null);
  const effect = react.useEffect(() => {
    if (null != channelId) {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(closure_15, tmp);
    }
  }, items);
  const items1 = [channelId, navigateToChannel];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id: channelId };
    obj.track(constants.MESSAGE_COMPOSER_TRANSITIONED, obj2);
    navigateToChannel(channelId);
  }, items1);
  useOnMessageSendDefault(callback);
  let obj = { style: tmp.background, children: closure_18(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  items2 = [, ];
  const obj3 = { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
  items2[0] = closure_17(ChatViewDefault, obj3);
  const obj4 = { portal: obj5.isAndroid() };
  const PortalKeyboardRenderer = channelId(16292).PortalKeyboardRenderer;
  obj5 = channelId(1364);
  items2[1] = closure_17(PortalKeyboardRenderer, obj4);
  return closure_17(View, obj);
}
let react = react_mod;
const View = react_native.View;
const PrivateChannelRecord = ChannelRecord.PrivateChannelRecord;
const UserRowModes = UserRowConstants.UserRowModes;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let createStyles = createStyles_mod;
__closure = { container: { flex: 1 }, background: obj2, header: { flexDirection: "column", alignItems: str }, emptyContainer: { flexGrow: 1, justifyContent: "center" }, emptyKeyboardView: { flexGrow: 1 }, addFriendsButtonContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
str = "center";
if (PlatformUtils.isAndroid()) {
  str = "flex-start";
}
obj3 = { marginBottom: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
let closure_20 = createStyles(__closure);
const __initData = { code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default function NewMessageScreen(navigation) {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let closure_5;
  let defaultSelectedUserId;
  let items1;
  let obj6;
  let obj7;
  let source_page;
  let tmp10;
  let tmp2Result2;
  let tmp8;
  navigation = navigation.navigation;
  ({ defaultSelectedUserId, sourcePage: importDefault } = navigation.route.params);
  let selectedUserIds;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  let relationshipCount;
  let c10;
  let enabled;
  let navigateToChannel;
  let closure_13;
  let stateFromStores1;
  let tmp = closure_20();
  dependencyMap = tmp;
  let tmp2 = importDefault;
  let tmp3 = dependencyMap;
  let tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.NEW_MESSAGE_COMPOSER).analyticsLocations;
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const tmp5 = useMountEffectDefault(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source_page: importDefault };
    obj.track(navigateToChannel.MESSAGE_COMPOSER_OPENED, obj2);
  });
  let obj = react;
  const useState = react.useState;
  if (null != defaultSelectedUserId) {
    let items = [defaultSelectedUserId];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = selectedUserIds(useState(items1), 2);
  selectedUserIds = tmp6[0];
  react = tmp6[1];
  const tmp7 = selectedUserIds(obj.useState(false), 2);
  [tmp8, c6] = tmp7;
  [tmp10, c7] = selectedUserIds(obj.useState(false), 2);
  const tmp9 = selectedUserIds(obj.useState(false), 2);
  const tmp11 = selectedUserIds(obj.useState(null), 2);
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp11[0];
  dependencyMap = tmp11[1];
  const items2 = [selectedUserIds];
  const effect = obj.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== first(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        if (channel.isPrivate()) {
          const tmp2 = handleChannelCreate;
          if (closure_2_21(handleChannelCreate, channel)) {
            closure_1_2(closure_2_22(tmp2));
          }
        }
      }
    }
    function handleChannelDelete(arg0) {
      let closure_0 = arg0;
      let tmp = closure_1_2((arg0) => {
        let tmp = arg0;
        if (arg0 !== handleChannelCreate(closure_2_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== channel.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    let obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(closure_2[18]);
    const subscription = obj.subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj2 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(closure_2[18]);
    const subscription1 = obj2.subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      const obj = require("Dispatcher");
      obj.unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      const obj2 = require("Dispatcher");
      obj2.unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items2);
  let obj2 = navigation(504);
  const items3 = [FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const stateFromStores = obj2.useStateFromStores(items3, () => FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.getChannel(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID));
  const items4 = [selectedUserIds, stateFromStores];
  const effect1 = obj.useEffect(() => {
    function doAction() {
      return obj(...arguments);
    }
    let obj = function _doAction() {
      obj = insets(function*(arg0, value) {
        function findMatchingPrivateChannelId() {
          return closure_1_23(...arguments);
        }
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_0;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: findMatchingPrivateChannelId(closure_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              const tmp8 = c2;
              if (null == closure_0) {
                FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = closure_2_0(closure_2_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              } else {
                FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = closure_0;
              }
              tmp8(FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c3 = 3;
            throw tmp17;
          }
        }
      });
      return obj(...arguments);
    };
    if (0 !== obj.length) {
      obj = stateFromStores;
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = obj.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = closure_1_21(tmp, obj);
      }
      if (!isPrivateResult) {
        let tmp8 = doAction();
      }
    } else {
      const tmp2 = closure_2;
      const tmp4 = closure_2(null);
    }
  }, items4);
  const items5 = [selectedUserIds, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const effect2 = obj.useEffect(function() {
    let GROUP_DM;
    let tmp82;
    if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      if (null == findLocalMatchingPrivateChannelId(recipients)) {
        let obj = { id: navigation(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: GROUP_DM, name: "", guild_id: null, recipients };
        const dispatch = require("Dispatcher").dispatch;
        require("Dispatcher");
        const tmp8 = c7;
        if (1 === recipients.length) {
          GROUP_DM = stateFromStores1.DM;
        } else {
          GROUP_DM = stateFromStores1.GROUP_DM;
        }
        let obj2 = { type: "CHANNEL_CREATE", channel: tmp82 };
        const self = this;
        const self2 = this;
        tmp82 = new tmp8(obj);
        dispatch(obj2);
        return () => {
          const obj2 = { type: "CHANNEL_DELETE", channel: { id: first(closure_1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "paddingHorizontal" } };
          const obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(closure_1_2[18]);
          ({ id: first(closure_1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "paddingHorizontal" });
          obj.dispatch(obj2);
        };
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect3 = obj.useEffect(() => {
    const tmp2 = null != stateFromStores && tmp.id === navigation(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    if (tmp2) {
      const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "flex", isStale: "custom" };
      const obj = require("Dispatcher");
      obj.dispatch(obj2);
    }
  }, items6);
  const ref = obj.useRef(null);
  const tmp2Result = GroupDMNitroCapExperimentDefault;
  const config = tmp2Result.useConfig({ location: "NewMessageScreen" });
  const tmp20 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
  relationshipCount = tmp20;
  let obj4 = navigation(11086);
  const result = obj4.shouldUseGroupDMParticipantLimitUI(config.enabled, tmp20);
  c10 = result;
  navigation(11086);
  enabled = config.enabled;
  if (enabled) {
    const tmp13Result = navigation(11086);
    enabled = tmp13Result.isGroupDMNitroUpsellAudience(tmp23);
  }
  const items7 = [navigation, selectedUserIds.length, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, tmp20, result];
  const layoutEffect = obj.useLayoutEffect(() => {
    let length;
    let recipientLimit;
    let usePersonLimitCopy;
    let obj = {
      headerTitle(children) {
        const obj = { numInGroup: length.length, title: children.children, recipientLimit, usePersonLimitCopy };
        return closure_2_17(Header, obj);
      },
      headerRight() {
        let tmp2 = null;
        if (null !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          tmp2 = null;
          const tmp4 = closure_2;
          if (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID !== navigation(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const obj = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, screenIndex: "new-message" };
            tmp2 = closure_2_17(require("ChannelActions"), obj);
          }
        }
        return tmp2;
      }
    };
    navigation.setOptions(obj);
  }, items7);
  const items8 = [navigation];
  navigateToChannel = obj.useCallback((arg0) => {
    navigation.goBack();
    const obj = router_utils;
    obj.transitionTo(authStore3.CHANNEL(closure_15, arg0));
  }, items8);
  const useCallback = obj.useCallback;
  let closure_0 = insets(function*(arg0, value) {
    let obj4;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            let closure_1 = tmp2;
            closure_0 = undefined;
            if (closure_0 instanceof _undefined2) {
              const obj9 = source_page(closure_2_2[20]);
              obj9.track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
              constants(closure_0.id);
              c4 = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else if (friend.isFriend(closure_0.id)) {
              const index = c4.indexOf(tmp51.id);
              const items = [];
              HermesBuiltin.arraySpread(items, c4, 0);
              const arr = c4;
              if (-1 === index) {
                if (arr.length >= closure_1_9 - 1) {
                  const tmp30 = enabled;
                  if (tmp30) {
                    source_page(closure_2_2[37])("NewMessageScreen");
                  } else {
                    const obj6 = closure_0(closure_2_2[38]);
                    obj6.showMaxGroupMembers();
                  }
                  const obj7 = source_page(closure_2_2[20]);
                  obj7.track(constants.MESSAGE_COMPOSER_MAX_USERS_ADDED);
                  c4 = 3;
                  const obj8 = { value: undefined, done: true };
                  return obj8;
                } else {
                  items.push(closure_0.id);
                }
              } else {
                items.splice(index, 1);
              }
              closure_1_5(items);
              closure_1_7(false);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c3 = 1;
              c4 = 1;
              const obj10 = { value: obj4.getOrEnsurePrivateChannel(closure_0.id), done: false };
              obj4 = source_page(closure_2_2[16]);
              return obj10;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_0 = value;
          const obj = source_page(closure_2_2[20]);
          obj.track(constants.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED);
          constants(closure_0);
          c4 = 3;
          const obj12 = { value: undefined, done: true };
          return obj12;
        }
      } catch (tmp47) {
        c4 = 3;
        throw tmp47;
      }
    }
  });
  const items9 = [selectedUserIds, navigateToChannel, tmp20, enabled];
  const callback1 = useCallback(function(arg0) {
    return closure_0(...arguments);
  }, items9);
  const callback2 = obj.useCallback(() => {
    _undefined2((arg0) => !arg0);
  }, []);
  [][0] = selectedUserIds;
  const callback3 = obj.useCallback((arg0) => {
    _undefined2(false);
    _undefined(arg0.length > 0);
  }, []);
  let tmp31Result;
  if (!tmp8) {
    if (!tmp10) {
      if (selectedUserIds.length > 0) {
        const tmp31 = closure_17;
        const tmp32 = ChatPreview;
        if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp13(6642).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        }
        let obj3 = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, navigateToChannel, tagListInputRef: ref };
        tmp31Result = tmp31(tmp32, obj3, tmp29);
      }
    }
  }
  closure_13 = tmp33;
  const items10 = [relationshipCount];
  const tmp13Result2 = navigation(504);
  stateFromStores1 = tmp13Result2.useStateFromStores(items10, () => relationshipCount.getRelationshipCount() > 0);
  const items11 = [navigation, stateFromStores1, 0 === selectedUserIds.length];
  const items12 = [navigation];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const items = [];
    const tmp = constants;
    if (tmp) {
      const tmp2 = stateFromStores1;
      if (tmp2) {
        let obj = {
          icon: AssetRegistryDefault2,
          IconComponent: GroupPlusIcon.GroupPlusIcon,
          label: intl.string(intl4.t["3hF1W4"]),
          iconVariant: "default",
          onPress() {
                const obj = { allowNameEdit: false, locationPage: constants.NEW_MESSAGE_COMPOSER };
                return navigation.navigate("gdm", obj);
              }
        };
        const push = items.push;
        intl = intl4.intl;
        push(obj);
      }
      const push2 = items.push;
      const obj2 = {
        icon: AssetRegistryDefault,
        IconComponent: UserPlusIcon.UserPlusIcon,
        label: intl2.string(intl4.t["9nbDJx"]),
        iconVariant: "default",
        onPress() {
            navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
          }
      };
      intl2 = intl4.intl;
      push2(obj2);
    }
    return items;
  }, items11);
  const items13 = [navigation, tmp, insets.bottom];
  const memo1 = obj.useMemo(() => {
    let intl;
    const obj = {
      icon: AssetRegistryDefault,
      IconComponent: UserPlusIcon.UserPlusIcon,
      label: intl.string(intl4.t["9nbDJx"]),
      iconVariant: "default",
      onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      }
    };
    intl = intl4.intl;
    const items = [obj];
    return items;
  }, items12);
  const memo2 = obj.useMemo(() => {
    let Button;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj3;
    let obj4;
    let obj5;
    let tmp;
    const obj = { style: items, children: closure_17(tmp, obj3) };
    items = [closure_2.emptyKeyboardView, ];
    const obj2 = { paddingBottom: insets.bottom };
    items[1] = obj2;
    obj3 = { title: intl.string(intl4.t["1ESycm"]), subtitle: intl2.string(intl4.t["5IlFpu"]), containerStyle: closure_2.emptyContainer, fullHeight: true, children: closure_17(View, obj4) };
    tmp = NoResultsDefault;
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj4 = { style: closure_2.addFriendsButtonContainer, children: closure_17(Button, obj5) };
    obj5 = {
      text: intl3.string(intl4.t.zIJnA6),
      size: "lg",
      onPress() {
        return navigation.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
      },
      grow: true
    };
    Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    return closure_17(View, obj);
  }, items13);
  let obj5 = { value: analyticsLocations, children: closure_17(tmp2Result2, obj6) };
  const AnalyticsLocationProvider = tmp13(6583).AnalyticsLocationProvider;
  obj6 = { actions: memo, noResultActions: memo1, rowMode: enabled.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds, withAffinitySuggestions: true, overrideResults: tmp31Result, afterSearchContent: closure_17(GroupDMNitroUpsellBannerDefault, obj7), withGuildMembers: 0 === selectedUserIds.length, withGDMNames: true, forceSearchResults: tmp10, onForceSearchResults: callback2, defaultNoResultsFound: memo2, autoFocusSearch: true };
  obj7 = { location: "NewMessageScreen", memberCount: selectedUserIds.length + 1, recipientLimit: tmp20 };
  tmp2Result2 = NewMessageUserListDefault;
  return closure_17(AnalyticsLocationProvider, obj5);
};
