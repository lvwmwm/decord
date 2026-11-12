// Module ID: 19405
// Function ID: 19406
// Name: NewMessageScreen
// Dependencies: [5, 32, 19, 17, 5096, 5092, 5185, 7177, 10175, 1072, 21, 1652, 5866, 5243, 575, 1377, 8069, 7178, 572, 504, 1252, 19406, 5485, 19407, 8984, 1113, 11910, 13260, 7852, 7871, 5850, 5836, 12448, 12446, 12445, 8996, 1099, 12449, 5951, 10913, 10912, 5961, 5960, 11722, 5873, 14657, 19344, 2]
// Exports: default

// Module 19405 (NewMessageScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _mod1652 from "module_1652" /* 1652 */;
import ChannelRecord from "ChannelRecord" /* 5096 */;
import timing_timing from "timing/timing" /* 5485 */;
import useMountEffectDefault from "useMountEffect" /* 5836 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5850 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import UserPlusIcon from "UserPlusIcon" /* 5960 */;
import AssetRegistryDefault from "AssetRegistry" /* 5961 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7852 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8069 */;
import HeaderShared from "HeaderShared" /* 8984 */;
import UserRowConstants from "UserRowConstants" /* 10175 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10912 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10913 */;
import NoResultsDefault from "NoResults" /* 11722 */;
import ChatViewDefault from "ChatView" /* 11910 */;
import useOnMessageSendDefault from "useOnMessageSend" /* 19406 */;
import GroupDMRecipientLimitTitleDefault from "GroupDMRecipientLimitTitle" /* 19407 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7177 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const module_1652 = _mod1652;
let c3, closure_2, dependencyMap;

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
const getGroupDMRecipientLimitDefault = tmp2(12446);
const GroupDMNitroCapExperimentDefault = tmp2(12448);
const NewMessageUserListDefault = tmp2(14657);
const GroupDMNitroUpsellBannerDefault = tmp2(19344);
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
let obj = function _findMatchingPrivateChannelId() {
  obj = _asyncToGenerator(async (arg0, value) => {
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
          obj = { value, done: true };
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
  let items3;
  let numInGroup;
  let str;
  let stringResult;
  let title;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ title, numInGroup } = recipientLimit);
  recipientLimit = recipientLimit.recipientLimit;
  const usePersonLimitCopy = recipientLimit.usePersonLimitCopy;
  const items = [recipientLimit, numInGroup];
  const tmp = closure_20();
  const memo = react.useMemo(() => recipientLimit - (numInGroup + 1), items);
  _mod1652;
  const items1 = [closure_24, numInGroup, 5, timing_timing.withTiming];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class NewMessageScreenTsx1 {
    constructor() {
      let num2;
      let num = 0;
      if (c0 >= c1) {
        num = 1;
      }
      obj = { opacity: _undefined(num), maxHeight: _undefined(num2) };
      num2 = 0;
      if (c0 >= c1) {
        num2 = 20;
      }
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  NewMessageScreenTsx1.__closure = items2;
  NewMessageScreenTsx1.__workletHash = 8337619653465;
  NewMessageScreenTsx1.__initData = tmp6;
  if (usePersonLimitCopy) {
    let num2 = 1;
    const obj2 = { title, memberCount: numInGroup + 1, recipientLimit };
    return closure_17(GroupDMRecipientLimitTitleDefault, obj2);
  } else {
    let num = 0;
    obj = { style: tmp.header, children: items3 };
    const obj3 = { title };
    items3 = [closure_17(HeaderShared.GenericHeaderTitle, obj3), ];
    const obj4 = { style: tmp10, variant: "body-xs/medium", color: str, children: stringResult };
    str = "text-muted";
    const tmp12 = authStore4;
    const tmp13 = View;
    const tmp14 = closure_17;
    const tmp15 = closure_19;
    if (0 === memo) {
      str = "text-feedback-critical";
    }
    const intl = tmp3(1113).intl;
    if (0 === memo) {
      stringResult = intl.string(tmp3(1113).t.yiQW1O);
    } else {
      const formatToPlainString = intl.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj5 = { number: "" + memo };
      const HrSDPF = tmp3(1113).t.HrSDPF;
      stringResult = formatToPlainString(HrSDPF, obj5);
    }
    items3[1] = tmp14(tmp15, obj4);
    return tmp12(tmp13, obj);
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
      obj = ChannelActionCreatorsDefault;
      obj.preload(closure_15, tmp);
    }
  }, items);
  const items1 = [channelId, navigateToChannel];
  const callback = react.useCallback(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { channel_id: channelId };
    obj.track(constants.MESSAGE_COMPOSER_TRANSITIONED, obj2);
    navigateToChannel(channelId);
  }, items1);
  useOnMessageSendDefault(callback);
  obj = { style: tmp.background, children: closure_18(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  items2 = [, ];
  const obj3 = { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
  items2[0] = closure_17(ChatViewDefault, obj3);
  const obj4 = { portal: obj5.isAndroid() };
  const PortalKeyboardRenderer = channelId(13260).PortalKeyboardRenderer;
  obj5 = channelId(1377);
  items2[1] = closure_17(PortalKeyboardRenderer, obj4);
  return closure_17(View, obj);
}
let react = react_mod;
const View = react_native.View;
const PrivateChannelRecord = ChannelRecord.PrivateChannelRecord;
const UserRowModes = UserRowConstants.UserRowModes;
({ AnalyticEvents: closure_12, AnalyticsSections: map1, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = module_1652.createAnimatedComponent(Text_Text.Text);
let createStyles = createStyles_mod;
obj = { container: { flex: 1 }, background: obj2, header: { flexDirection: "column", alignItems: str }, emptyContainer: { flexGrow: 1, justifyContent: "center" }, emptyKeyboardView: { flexGrow: 1 }, addFriendsButtonContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
str = "center";
if (PlatformUtils.isAndroid()) {
  str = "flex-start";
}
obj3 = { marginBottom: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
let closure_20 = createStyles(obj);
let closure_24 = { code: "(function NewMessageScreenTsx1(){let[numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming]=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};})" };
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
    obj = AnalyticsUtilsDefault;
    const obj2 = { source_page: importDefault };
    obj.track(navigateToChannel.MESSAGE_COMPOSER_OPENED, obj2);
  });
  obj = react;
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
    obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(closure_2[18]);
    const subscription = obj.subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj2 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(closure_2[18]);
    const subscription1 = obj2.subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      obj = require("Dispatcher");
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
    obj = function _doAction() {
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
        obj = { id: navigation(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, type: GROUP_DM, name: "", guild_id: null, recipients };
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
          const obj2 = { type: "CHANNEL_DELETE", channel: { id: first(closure_1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "isArray" } };
          obj = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID(closure_1_2[18]);
          ({ id: first(closure_1_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: "Array", parent_id: "isArray" });
          obj.dispatch(obj2);
        };
      }
    }
  }, items5);
  const items6 = [stateFromStores];
  const effect3 = obj.useEffect(() => {
    const tmp2 = null != stateFromStores && tmp.id === navigation(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    if (tmp2) {
      const obj2 = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: "flexDirection", isStale: "custom" };
      obj = require("Dispatcher");
      obj.dispatch(obj2);
    }
  }, items6);
  const ref = obj.useRef(null);
  const tmp2Result = GroupDMNitroCapExperimentDefault;
  const config = tmp2Result.useConfig({ location: "NewMessageScreen" });
  const tmp20 = getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true });
  relationshipCount = tmp20;
  let obj4 = navigation(12445);
  const result = obj4.shouldUseGroupDMParticipantLimitUI(config.enabled, tmp20);
  c10 = result;
  navigation(12445);
  enabled = config.enabled;
  if (enabled) {
    const tmp13Result = navigation(12445);
    enabled = tmp13Result.isGroupDMNitroUpsellAudience(tmp23);
  }
  const items7 = [navigation, selectedUserIds.length, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, tmp20, result];
  const layoutEffect = obj.useLayoutEffect(() => {
    let length;
    let recipientLimit;
    let usePersonLimitCopy;
    obj = {
      headerTitle(children) {
        obj = { numInGroup: length.length, title: children.children, recipientLimit, usePersonLimitCopy };
        return closure_2_17(Header, obj);
      },
      headerRight() {
        let tmp2 = null;
        if (null !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          tmp2 = null;
          const tmp4 = closure_2;
          if (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID !== navigation(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            obj = { channelId: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, screenIndex: "new-message" };
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
    obj = router_utils;
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
          obj = source_page(closure_2_2[20]);
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
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp13(7178).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
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
        obj = {
          icon: AssetRegistryDefault2,
          IconComponent: GroupPlusIcon.GroupPlusIcon,
          label: intl.string(intl4.t["3hF1W4"]),
          iconVariant: "default",
          onPress() {
                obj = { allowNameEdit: false, locationPage: constants.NEW_MESSAGE_COMPOSER };
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
    obj = {
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
    obj = { style: items, children: closure_17(tmp, obj3) };
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
  const AnalyticsLocationProvider = tmp13(7852).AnalyticsLocationProvider;
  obj6 = { actions: memo, noResultActions: memo1, rowMode: enabled.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds, withAffinitySuggestions: true, overrideResults: tmp31Result, afterSearchContent: closure_17(GroupDMNitroUpsellBannerDefault, obj7), withGuildMembers: 0 === selectedUserIds.length, withGDMNames: true, forceSearchResults: tmp10, onForceSearchResults: callback2, defaultNoResultsFound: memo2, autoFocusSearch: true };
  obj7 = { location: "NewMessageScreen", memberCount: selectedUserIds.length + 1, recipientLimit: tmp20 };
  tmp2Result2 = NewMessageUserListDefault;
  return closure_17(AnalyticsLocationProvider, obj5);
};
