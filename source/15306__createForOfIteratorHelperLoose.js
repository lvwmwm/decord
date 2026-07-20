// Module ID: 15306
// Function ID: 116426
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15306 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = arg0;
  if (1 === arg0.length) {
    const dMFromUserId = dMFromUserId.getDMFromUserId(arg0[0]);
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
        const channel = channel.getChannel(channelId.channelId);
        const tmp = null == channel || !channel.isPrivate();
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = callback(channelId, channel);
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
  const _findMatchingPrivateChannelId = obj;
  return obj(...arguments);
}
function useChannelForParticipants(first) {
  const arg1 = first;
  const tmp = callback2(React.useState(null), 2);
  first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function handleChannelCreate(channel) {
      channel = channel.channel;
      if (channel.id !== handleChannelCreate(callback[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        if (channel.isPrivate()) {
          if (callback2(handleChannelCreate, channel)) {
            callback(callback3(handleChannelCreate));
          }
        }
      }
    }
    const arg0 = handleChannelCreate;
    function handleChannelDelete(arg0) {
      const handleChannelCreate = arg0;
      callback((arg0) => {
        let tmp = arg0;
        if (arg0 !== arg0(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp3 = null;
          if (arg0 !== arg0.channel.id) {
            tmp3 = arg0;
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    const first = handleChannelDelete;
    const subscription = first(closure_2[18]).subscribe("CHANNEL_CREATE", handleChannelCreate);
    const obj = first(closure_2[18]);
    const subscription1 = first(closure_2[18]).subscribe("CHANNEL_DELETE", handleChannelDelete);
    return () => {
      handleChannelDelete(closure_2[18]).unsubscribe("CHANNEL_CREATE", handleChannelCreate);
      const obj = handleChannelDelete(closure_2[18]);
      handleChannelDelete(closure_2[18]).unsubscribe("CHANNEL_DELETE", handleChannelDelete);
    };
  }, items);
  const items1 = [closure_8];
  const stateFromStores = arg1(closure_2[19]).useStateFromStores(items1, () => channel.getChannel(first));
  let closure_3 = stateFromStores;
  const items2 = [first, stateFromStores];
  const effect1 = React.useEffect(() => {
    function _doAction() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _doAction = obj;
      return obj(...arguments);
    }
    if (0 !== _doAction.length) {
      let isPrivateResult = null != stateFromStores;
      if (isPrivateResult) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      if (isPrivateResult) {
        isPrivateResult = callback2(_doAction, stateFromStores);
      }
      if (!isPrivateResult) {
        function doAction() {
          return _doAction(...arguments);
        }();
      }
    } else {
      callback(null);
    }
  }, items2);
  const items3 = [first, first];
  const effect2 = React.useEffect(() => {
    if (null == first) {
      if (null == callback3(arg0)) {
        let obj = first(closure_2[18]);
        obj = { type: "CHANNEL_CREATE" };
        let tmp8 = closure_7;
        obj = { id: arg0(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID };
        if (1 === arg0.length) {
          let GROUP_DM = constants.DM;
        } else {
          GROUP_DM = constants.GROUP_DM;
        }
        obj.type = GROUP_DM;
        obj.name = "";
        obj.guild_id = null;
        obj.recipients = arg0;
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj);
        obj.channel = tmp8;
        obj.dispatch(obj);
        return () => {
          let obj = callback2(closure_2[18]);
          obj = { type: "CHANNEL_DELETE" };
          obj = { id: callback(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID, guild_id: undefined, parent_id: undefined };
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
      tmp = stateFromStores.id === arg0(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp) {
      let obj = first(closure_2[18]);
      obj = { channelId: stateFromStores.id, messages: [], jump: undefined };
      obj.dispatch(obj);
    }
  }, items4);
  return first;
}
function Header(title) {
  const numInGroup = title.numInGroup;
  const arg1 = numInGroup;
  const items = [numInGroup];
  const memo = React.useMemo(() => callback(closure_2[22])() - (numInGroup + 1), items);
  let obj = arg1(dependencyMap[11]);
  const fn = function a() {
    const obj = {};
    let num = 0;
    if (numInGroup >= 5) {
      num = 1;
    }
    obj.opacity = numInGroup(closure_2[23]).withTiming(num);
    const obj2 = numInGroup(closure_2[23]);
    let num2 = 0;
    if (numInGroup >= 5) {
      num2 = 20;
    }
    obj.maxHeight = numInGroup(closure_2[23]).withTiming(num2);
    return obj;
  };
  obj = { numInGroup, NUM_IN_GROUP_THRESHOLD: 5, withTiming: arg1(dependencyMap[23]).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 12426216833792;
  fn.__initData = closure_21;
  obj = { style: callback5().header };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items1 = [callback3(arg1(dependencyMap[24]).GenericHeaderTitle, { title: title.title }), ];
  const obj1 = { style: animatedStyle, variant: "text-xs/medium" };
  let str = "text-muted";
  if (0 === memo) {
    str = "text-feedback-critical";
  }
  obj1.color = str;
  const intl = arg1(dependencyMap[25]).intl;
  if (0 === memo) {
    let stringResult = intl.string(tmp9(tmp10[25]).t.yiQW1O);
  } else {
    const obj2 = {};
    const _HermesInternal = HermesInternal;
    obj2.number = "" + memo;
    stringResult = intl.formatToPlainString(tmp9(tmp10[25]).t.HrSDPF, obj2);
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
  const arg1 = channelId;
  ({ navigateToChannel, tagListInputRef } = channelId);
  const tmp = callback5();
  const items = [channelId];
  const effect = React.useEffect(() => {
    if (null != channelId) {
      callback(closure_2[16]).preload(closure_15, channelId);
      const obj = callback(closure_2[16]);
    }
  }, items);
  function useRedirectToChannelOnMessage(channelId, navigateToChannel) {
    const items = [channelId, navigateToChannel];
    const callback = React.useCallback(() => {
      let obj = arg1(closure_2[20]);
      obj = { channel_id: arg0 };
      obj.track(constants.MESSAGE_COMPOSER_TRANSITIONED, obj);
      arg1(arg0);
    }, items);
    navigateToChannel(closure_2[21])(callback);
  }(channelId, navigateToChannel);
  let obj = { style: tmp.background };
  obj = { style: tmp.container };
  obj = { guildId: closure_15, channelId, chatInputRef: React.useRef(null), secondaryTextFieldRef: tagListInputRef };
  const items1 = [callback3(importDefault(dependencyMap[26]), obj), ];
  const obj1 = {};
  const ref = React.useRef(null);
  obj1.portal = arg1(dependencyMap[15]).isAndroid();
  items1[1] = callback3(arg1(dependencyMap[27]).PortalKeyboardRenderer, obj1);
  obj.children = items1;
  obj.children = callback4(View, obj);
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const PrivateChannelRecord = arg1(dependencyMap[4]).PrivateChannelRecord;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const UserRowModes = arg1(dependencyMap[8]).UserRowModes;
({ AnalyticEvents: closure_12, AnalyticsSections: closure_13, ChannelTypes: closure_14, ME: closure_15, Routes: closure_16 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
let closure_19 = importDefault(dependencyMap[11]).createAnimatedComponent(arg1(dependencyMap[12]).Text);
let obj1 = arg1(dependencyMap[13]);
let obj = { container: { flex: 1 } };
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
obj1 = { flexDirection: "column" };
const importDefaultResult = importDefault(dependencyMap[11]);
let str = "center";
if (obj6.isAndroid()) {
  str = "flex-start";
}
obj1.alignItems = str;
obj.header = obj1;
obj.emptyContainer = { "Null": 323420161, "Null": -2104950783 };
obj.emptyKeyboardView = { flexGrow: 1 };
const obj2 = { <string:3781419121>: "opacity", <string:1184701011>: "scaleX", <string:1701426122>: "scaleY", <string:3064609628>: "scaleXY", marginBottom: importDefault(dependencyMap[14]).space.PX_16 };
obj.addFriendsButtonContainer = obj2;
let closure_20 = obj1.createStyles(obj);
let closure_21 = { code: "function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}" };
const obj6 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx");

export default function NewMessageScreen(navigation) {
  let defaultSelectedUserId;
  let tmp8;
  navigation = navigation.navigation;
  const arg1 = navigation;
  ({ defaultSelectedUserId, sourcePage: closure_1 } = navigation.route.params);
  let callback2;
  let React;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let UserRowModes;
  const tmp = callback5();
  const dependencyMap = tmp;
  const insets = importDefault(dependencyMap[30])({ includeKeyboardHeight: true }).insets;
  let closure_3 = insets;
  importDefault(dependencyMap[31])(() => {
    let obj = callback(tmp[20]);
    obj = { source_page: callback };
    obj.track(constants.MESSAGE_COMPOSER_OPENED, obj);
  });
  if (null != defaultSelectedUserId) {
    const items = [defaultSelectedUserId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = callback2(React.useState(items1), 2);
  const first = tmp5[0];
  callback2 = first;
  React = tmp5[1];
  const tmp6 = callback2(React.useState(false), 2);
  closure_6 = tmp6[1];
  const tmp2 = importDefault(dependencyMap[28]);
  [tmp8, closure_7] = callback2(React.useState(false), 2);
  let FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = useChannelForParticipants(first);
  closure_8 = FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  const ref = React.useRef(null);
  const items2 = [navigation, first.length, FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle(children) {
        return callback3(closure_28, { numInGroup: length.length, title: children.children });
      },
      headerRight() {
        let tmp = null;
        if (null !== closure_8) {
          tmp = null;
          if (closure_8 !== callback(closure_2[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            const obj = { channelId: closure_8, screenIndex: "new-message" };
            tmp = callback3(callback2(closure_2[32]), obj);
          }
        }
        return tmp;
      }
    });
  }, items2);
  const items3 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.goBack();
    navigation(tmp[33]).transitionTo(closure_16.CHANNEL(closure_15, arg0));
  }, items3);
  closure_9 = callback;
  const items4 = [first, callback];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = insets(tmp);
    return function(arg0) {
      return callback(...arguments);
    };
  }(), items4);
  callback2 = React.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  [][0] = first;
  const callback3 = React.useCallback((arg0) => {
    _undefined(false);
    callback2(arg0.length > 0);
  }, []);
  let tmp17Result;
  if (!tmp6[0]) {
    if (!tmp8) {
      if (first.length > 0) {
        let obj = {};
        if (null == FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = arg1(dependencyMap[17]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
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
  closure_10 = tmp21;
  const tmp7 = callback2(React.useState(false), 2);
  const items5 = [closure_9];
  const stateFromStores = arg1(dependencyMap[19]).useStateFromStores(items5, () => callback.getRelationshipCount() > 0);
  UserRowModes = stateFromStores;
  const items6 = [navigation, stateFromStores, 0 === first.length];
  const items7 = [navigation];
  const memo = React.useMemo(() => {
    const items = [];
    if (tmp21) {
      if (stateFromStores) {
        let obj = { icon: callback(tmp[35]), IconComponent: navigation(tmp[36]).GroupPlusIcon };
        const intl = navigation(tmp[25]).intl;
        obj.label = intl.string(navigation(tmp[25]).t.3hF1W4);
        obj.iconVariant = "default";
        obj.onPress = function onPress() {
          return navigation.navigate("gdm", { allowNameEdit: false, locationPage: constants.NEW_MESSAGE_COMPOSER });
        };
        items.push(obj);
      }
      obj = { icon: callback(stateFromStores[37]), IconComponent: navigation(stateFromStores[38]).UserPlusIcon };
      const intl2 = navigation(tmp[25]).intl;
      obj.label = intl2.string(navigation(stateFromStores[25]).t.9nbDJx);
      obj.iconVariant = "default";
      obj.onPress = function onPress() {
        navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
      };
      items.push(obj);
    }
    return items;
  }, items6);
  const items8 = [navigation, tmp, insets.bottom];
  const memo1 = React.useMemo(() => {
    const obj = { icon: callback(tmp[37]), IconComponent: navigation(tmp[38]).UserPlusIcon };
    const intl = navigation(tmp[25]).intl;
    obj.label = intl.string(navigation(tmp[25]).t.9nbDJx);
    obj.iconVariant = "default";
    obj.onPress = function onPress() {
      navigation.navigate("add-friends", { sourcePage: "New Message Composer" });
    };
    const items = [obj];
    return items;
  }, items7);
  const memo2 = React.useMemo(() => {
    let obj = { style: items };
    const items = [tmp.emptyKeyboardView, ];
    obj = { paddingBottom: insets.bottom };
    items[1] = obj;
    obj = {};
    const tmp = callback(tmp[39]);
    const intl = navigation(tmp[25]).intl;
    obj.title = intl.string(navigation(tmp[25]).t.1ESycm);
    const intl2 = navigation(tmp[25]).intl;
    obj.subtitle = intl2.string(navigation(tmp[25]).t.5IlFpu);
    obj.containerStyle = tmp.emptyContainer;
    obj.fullHeight = true;
    const obj1 = { style: tmp.addFriendsButtonContainer };
    const obj2 = {};
    const intl3 = navigation(tmp[25]).intl;
    obj2.text = intl3.string(navigation(tmp[25]).t.zIJnA6);
    obj2.size = "lg";
    obj2.onPress = function onPress() {
      return navigation.navigate("add-friends", { sourcePage: "New Message Composer No Results" });
    };
    obj2.grow = true;
    obj1.children = callback3(navigation(tmp[40]).Button, obj2);
    obj.children = callback3(closure_6, obj1);
    obj.children = callback3(tmp, obj);
    return callback3(closure_6, obj);
  }, items8);
  obj = { value: tmp2(importDefault(dependencyMap[29]).NEW_MESSAGE_COMPOSER).analyticsLocations };
  obj = { actions: memo, noResultActions: memo1, rowMode: UserRowModes.NONE, tagListInputRef: ref, onSelectUser: callback1, onQueryChanged: callback3, selectedUserIds: first, withAffinitySuggestions: true, overrideResults: tmp17Result, withGuildMembers: 0 === first.length, withGDMNames: true, forceSearchResults: tmp8, onForceSearchResults: callback2, defaultNoResultsFound: memo2, autoFocusSearch: true };
  obj.children = callback3(importDefault(dependencyMap[41]), obj);
  return callback3(arg1(dependencyMap[28]).AnalyticsLocationProvider, obj);
};
