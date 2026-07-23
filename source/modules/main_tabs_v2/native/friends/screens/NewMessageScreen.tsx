// Module ID: 15441
// Function ID: 118701
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 27, 1352, 1348, 3767, 5603, 8818, 653, 33, 3991, 4126, 4130, 689, 477, 4140, 5606, 686, 566, 675, 15442, 15443, 4131, 9122, 1212, 10386, 15444, 5464, 5484, 5160, 4559, 9131, 1198, 3830, 10196, 10195, 4069, 4068, 9892, 4543, 11411, 2]
// Exports: default

// Module 15441 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import useMountLayoutEffect from "useMountLayoutEffect";
import { View } from "transitionGroupGetItemKey";
import { PrivateChannelRecord } from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import ME from "ME";
import jsxProd from "shouldNavigate";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "result";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function isPrivateChannelMatch(arr, recipients) {
  recipients = recipients.recipients;
  if (recipients.length !== arr.length) {
    return false;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(recipients);
    let iter = tmp2();
    if (!iter.done) {
      while (arr.includes(iter.value)) {
        let iter2 = tmp2();
        iter = iter2;
      }
      return false;
    }
    return true;
  }
}
function findLocalMatchingPrivateChannelId(arg0) {
  let closure_0 = arg0;
  if (1 === arg0.length) {
    dMFromUserId = dMFromUserId.getDMFromUserId(arg0[0]);
    let tmp8 = null;
    if (null != dMFromUserId) {
      tmp8 = dMFromUserId;
    }
    return tmp8;
  } else {
    let num2 = 0;
    const items = [, ];
    [arr[0], arr[1]] = callback2(sortedChannels.getSortedChannels(), 2);
    if (0 < items.length) {
      const found = items[num2].find((channelId) => {
        const channel = outer1_8.getChannel(channelId.channelId);
        const tmp = null == channel || !channel.isPrivate();
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = outer1_24(closure_0, channel);
        }
        return tmp2;
      });
      while (null == found) {
        num2 = num2 + 1;
      }
      return found.channelId;
    }
    return null;
  }
}
function _findMatchingPrivateChannelId() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function useChannelForParticipants(first) {
  const _require = first;
  let tmp = callback2(React.useState(null), 2);
  first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        if (channel.isPrivate()) {
          if (outer2_24(handleChannelCreate, channel)) {
            outer1_2(outer2_25(handleChannelCreate));
          }
        }
      }
    }
    function handleChannelDelete(arg0) {
      let closure_0 = arg0;
      outer1_2((arg0) => {
        let tmp = arg0;
        if (arg0 !== lib(table[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== lib.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    const subscription = first(686).subscribe("CHANNEL_CREATE", handleChannelCreate);
    let obj = first(686);
    const subscription1 = first(686).subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      first(686).unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      const obj = first(686);
      first(686).unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items);
  const items1 = [closure_8];
  const stateFromStores = _require(566).useStateFromStores(items1, () => outer1_8.getChannel(first));
  const items2 = [first, stateFromStores];
  const effect1 = React.useEffect(() => {
    function _doAction() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = stateFromStores(tmp);
      return obj(...arguments);
    }
    if (0 !== _doAction.length) {
      let isPrivateResult = null != stateFromStores;
      if (isPrivateResult) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = outer1_24(_doAction, stateFromStores);
      }
      if (!isPrivateResult) {
        (function doAction() {
          return _doAction(...arguments);
        })();
      }
    } else {
      dependencyMap(null);
    }
  }, items2);
  const items3 = [first, first];
  const effect2 = React.useEffect(() => {
    if (null == first) {
      if (null == outer1_25(lib)) {
        let obj = first(686);
        obj = { type: "CHANNEL_CREATE" };
        let tmp8 = outer1_7;
        obj = { id: lib(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID };
        if (1 === lib.length) {
          let GROUP_DM = outer1_14.DM;
        } else {
          GROUP_DM = outer1_14.GROUP_DM;
        }
        obj.type = GROUP_DM;
        obj.name = "";
        obj.guild_id = null;
        obj.recipients = lib;
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj);
        obj.channel = tmp8;
        obj.dispatch(obj);
        return () => {
          let obj = first(686);
          obj = { type: "CHANNEL_DELETE" };
          obj = { id: callback(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: undefined, parent_id: undefined };
          obj.channel = obj;
          obj.dispatch(obj);
        };
      }
    }
  }, items3);
  const items4 = [stateFromStores];
  const effect3 = React.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = stateFromStores.id === lib(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp) {
      let obj = first(686);
      obj = { type: "LOAD_MESSAGES_SUCCESS", channelId: stateFromStores.id, messages: [], isBefore: false, isAfter: false, hasMoreBefore: false, hasMoreAfter: false, limit: 0, jump: undefined, isStale: false };
      obj.dispatch(obj);
    }
  }, items4);
  return first;
}
function Header(title) {
  const numInGroup = title.numInGroup;
  const items = [numInGroup];
  const memo = React.useMemo(() => outer1_1(outer1_2[22])() - (numInGroup + 1), items);
  let obj = numInGroup(3991);
  const fn = function a() {
    const obj = {};
    let num = 0;
    if (numInGroup >= 5) {
      num = 1;
    }
    obj.opacity = numInGroup(outer1_2[23]).withTiming(num);
    const obj2 = numInGroup(outer1_2[23]);
    let num2 = 0;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    obj.maxHeight = numInGroup(outer1_2[23]).withTiming(num2);
    return obj;
  };
  obj = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: numInGroup(4131).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 12426216833792;
  fn.__initData = closure_21;
  obj = { style: callback5().header };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [callback3(numInGroup(9122).GenericHeaderTitle, { title: title.title }), ];
  const obj1 = { style: animatedStyle, variant: "text-xs/medium" };
  let str = "text-muted";
  if (0 === memo) {
    str = "text-feedback-critical";
  }
  obj1.color = str;
  const intl = numInGroup(1212).intl;
  if (0 === memo) {
    let stringResult = intl.string(tmp9(1212).t.yiQW1O);
  } else {
    let obj2 = {};
    const _HermesInternal = HermesInternal;
    obj2.number = "" + memo;
    stringResult = intl.formatToPlainString(tmp9(1212).t.HrSDPF, obj2);
  }
  obj1.children = stringResult;
  items1[1] = callback3(closure_19, obj1);
  obj.children = items1;
  return closure_18(View, obj);
}
function ChatPreview(channelId) {
  let navigateToChannel;
  let tagListInputRef;
  channelId = channelId.channelId;
  ({ navigateToChannel, tagListInputRef } = channelId);
  const tmp = callback5();
  let items = [channelId];
  const effect = React.useEffect(() => {
    if (null != channelId) {
      outer1_1(outer1_2[16]).preload(outer1_15, channelId);
      const obj = outer1_1(outer1_2[16]);
    }
  }, items);
  (function useRedirectToChannelOnMessage(channelId, navigateToChannel) {
    let closure_0 = channelId;
    let closure_1 = navigateToChannel;
    const items = [channelId, navigateToChannel];
    const callback = outer1_5.useCallback(() => {
      let obj = outer2_1(outer2_2[20]);
      obj = { channel_id: closure_0 };
      obj.track(outer2_12.MESSAGE_COMPOSER_TRANSITIONED, obj);
      navigateToChannel(closure_0);
    }, items);
    outer1_1(outer1_2[21])(callback);
  })(channelId, navigateToChannel);
  let obj = { style: tmp.background };
  obj = { style: tmp.container };
  obj = { guildId: closure_15, channelId, chatInputRef: React.useRef(null), HACK_fixModalInteraction: true, alwaysRespectKeyboard: true, screenIndex: "new-message", secondaryTextFieldRef: tagListInputRef };
  const items1 = [callback3(importDefault(10386), obj), ];
  const obj1 = {};
  const ref = React.useRef(null);
  obj1.portal = channelId(477).isAndroid();
  items1[1] = callback3(channelId(15444).PortalKeyboardRenderer, obj1);
  obj.children = items1;
  obj.children = callback4(View, obj);
  return callback3(View, obj);
}
({ AnalyticEvents: closure_12, AnalyticsSections: closure_13, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = require("module_3991").createAnimatedComponent(require("Text").Text);
let obj = { container: { flex: 1 } };
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.background = obj;
_createForOfIteratorHelperLoose = { flexDirection: "column" };
let str = "center";
if (set.isAndroid()) {
  str = "flex-start";
}
_createForOfIteratorHelperLoose.alignItems = str;
obj.header = _createForOfIteratorHelperLoose;
obj.emptyContainer = { flexGrow: 1, justifyContent: "center" };
obj.emptyKeyboardView = { flexGrow: 1 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "row", justifyContent: "center", width: "100%" };
obj.addFriendsButtonContainer = obj2;
let closure_20 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_21 = { code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default function NewMessageScreen(navigation) {
  let c7;
  let defaultSelectedUserId;
  let importDefault;
  let tmp8;
  navigation = navigation.navigation;
  ({ defaultSelectedUserId, sourcePage: importDefault } = navigation.route.params);
  let first;
  let React;
  let closure_6;
  c7 = undefined;
  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  let callback;
  let c10;
  let stateFromStores;
  let tmp = callback5();
  const dependencyMap = tmp;
  const insets = importDefault(5160)({ includeKeyboardHeight: true }).insets;
  importDefault(4559)(() => {
    let obj = outer1_1(tmp[20]);
    obj = { source_page: closure_1 };
    obj.track(outer1_12.MESSAGE_COMPOSER_OPENED, obj);
  });
  if (null != defaultSelectedUserId) {
    let items = [defaultSelectedUserId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = first(React.useState(items1), 2);
  first = tmp5[0];
  React = tmp5[1];
  const tmp6 = first(React.useState(false), 2);
  closure_6 = tmp6[1];
  const tmp2 = importDefault(5464);
  [tmp8, c7] = first(React.useState(false), 2);
  FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = useChannelForParticipants(first);
  const ref = React.useRef(null);
  const items2 = [navigation, first.length, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle(children) {
        return outer2_17(outer2_28, { numInGroup: outer1_4.length, title: children.children });
      },
      headerRight() {
        let tmp = null;
        if (null !== outer1_8) {
          tmp = null;
          if (outer1_8 !== navigation(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const obj = { channelId: outer1_8, screenIndex: "new-message" };
            tmp = outer2_17(outer2_1(9131), obj);
          }
        }
        return tmp;
      }
    });
  }, items2);
  const items3 = [navigation];
  callback = React.useCallback((arg0) => {
    navigation.goBack();
    navigation(tmp[33]).transitionTo(outer1_16.CHANNEL(outer1_15, arg0));
  }, items3);
  const items4 = [first, callback];
  const callback1 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = insets(tmp);
    return function(arg0) {
      return callback(...arguments);
    };
  })(), items4);
  const callback2 = React.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  [][0] = first;
  const callback3 = React.useCallback((arg0) => {
    _undefined(false);
    callback(arg0.length > 0);
  }, []);
  let tmp17Result;
  if (!tmp6[0]) {
    if (!tmp8) {
      if (first.length > 0) {
        let obj = {};
        if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = navigation(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        }
        obj.channelId = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        obj.navigateToChannel = callback;
        obj.tagListInputRef = ref;
        tmp17Result = callback3(ChatPreview, obj, tmp15);
        const tmp17 = callback3;
        const tmp18 = ChatPreview;
      }
    }
  }
  c10 = tmp21;
  const tmp7 = first(React.useState(false), 2);
  const items5 = [callback];
  stateFromStores = navigation(566).useStateFromStores(items5, () => callback.getRelationshipCount() > 0);
  const items6 = [navigation, stateFromStores, 0 === first.length];
  const items7 = [navigation];
  const memo = React.useMemo(() => {
    const items = [];
    if (c10) {
      if (stateFromStores) {
        let obj = { icon: outer1_1(tmp[35]), IconComponent: navigation(tmp[36]).GroupPlusIcon };
        const intl = navigation(tmp[25]).intl;
        obj.label = intl.string(navigation(tmp[25]).t["3hF1W4"]);
        obj.iconVariant = "default";
        obj.onPress = function onPress() {
          return outer1_0.navigate("gdm", { allowNameEdit: false, locationPage: outer2_13.NEW_MESSAGE_COMPOSER });
        };
        items.push(obj);
      }
      obj = { icon: outer1_1(stateFromStores[37]), IconComponent: navigation(stateFromStores[38]).UserPlusIcon };
      const intl2 = navigation(tmp[25]).intl;
      obj.label = intl2.string(navigation(stateFromStores[25]).t["9nbDJx"]);
      obj.iconVariant = "default";
      obj.onPress = function onPress() {
        outer1_0.navigate("add-friends", { sourcePage: "New Message Composer" });
      };
      items.push(obj);
    }
    return items;
  }, items6);
  const items8 = [navigation, tmp, insets.bottom];
  const memo1 = React.useMemo(() => {
    const obj = { icon: outer1_1(tmp[37]), IconComponent: navigation(tmp[38]).UserPlusIcon };
    const intl = navigation(tmp[25]).intl;
    obj.label = intl.string(navigation(tmp[25]).t["9nbDJx"]);
    obj.iconVariant = "default";
    obj.onPress = function onPress() {
      outer1_0.navigate("add-friends", { sourcePage: "New Message Composer" });
    };
    const items = [obj];
    return items;
  }, items7);
  const memo2 = React.useMemo(() => {
    let obj = { style: items };
    items = [tmp.emptyKeyboardView, ];
    obj = { paddingBottom: insets.bottom };
    items[1] = obj;
    obj = {};
    tmp = outer1_1(tmp[39]);
    const intl = navigation(tmp[25]).intl;
    obj.title = intl.string(navigation(tmp[25]).t["1ESycm"]);
    const intl2 = navigation(tmp[25]).intl;
    obj.subtitle = intl2.string(navigation(tmp[25]).t["5IlFpu"]);
    obj.containerStyle = tmp.emptyContainer;
    obj.fullHeight = true;
    const obj1 = { style: tmp.addFriendsButtonContainer };
    const obj2 = {};
    const intl3 = navigation(tmp[25]).intl;
    obj2.text = intl3.string(navigation(tmp[25]).t.zIJnA6);
    obj2.size = "lg";
    obj2.onPress = function onPress() {
      return outer1_0.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
    };
    obj2.grow = true;
    obj1.children = outer1_17(navigation(tmp[40]).Button, obj2);
    obj.children = outer1_17(closure_6, obj1);
    obj.children = outer1_17(tmp, obj);
    return outer1_17(closure_6, obj);
  }, items8);
  obj = { value: tmp2(importDefault(5484).NEW_MESSAGE_COMPOSER).analyticsLocations };
  obj = { actions: memo, noResultActions: memo1, rowMode: stateFromStores.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds: first, withAffinitySuggestions: true, overrideResults: tmp17Result, withGuildMembers: 0 === first.length, withGDMNames: true, forceSearchResults: tmp8, onForceSearchResults: callback2, defaultNoResultsFound: memo2, autoFocusSearch: true };
  obj.children = callback3(importDefault(11411), obj);
  return callback3(navigation(5464).AnalyticsLocationProvider, obj);
};
