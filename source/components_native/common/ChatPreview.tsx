// Module ID: 9345
// Function ID: 72899
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 4122, 3823, 1348, 1849, 8375, 653, 7711, 33, 4130, 689, 9346, 7710, 9348, 9518, 3800, 1212, 9475, 9476, 22, 4138, 9519, 9561, 9564, 4359, 1820, 9565, 9998, 9351, 7004, 9999, 10000, 10041, 10042, 10044, 10055, 477, 5121, 4660, 4126, 3842, 3803, 566, 1450, 5723, 4345, 10060, 2]
// Exports: default

// Module 9345 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import ChatManager from "ChatManager";
import RowManager from "RowManager";
import importAllResult from "dismissGlobalKeyboard";
import get_ActivityIndicator from "handleMessagesTapURLLink";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import Changeset from "Changeset";
import jsxProd from "module_9998";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class ChatPreview {
  constructor(arg0) {
    channelId = global.channelId;
    InlineAttachmentMedia = require("explicitContentFromProto").InlineAttachmentMedia;
    setting = InlineAttachmentMedia.useSetting();
    InlineEmbedMedia = require("explicitContentFromProto").InlineEmbedMedia;
    setting1 = InlineEmbedMedia.useSetting();
    RenderEmbeds = require("explicitContentFromProto").RenderEmbeds;
    setting2 = RenderEmbeds.useSetting();
    obj = require("initialize");
    items = [];
    items[0] = c11;
    stateFromStores = obj.useStateFromStores(items, () => outer1_11.roleStyle);
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c13;
    stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_13.getChannel(channelId));
    obj3 = require("getSpoilerGatingChannelId");
    isChannelSpoilerGated = obj3.useIsChannelSpoilerGated(stateFromStores1);
    obj4 = require("shouldAgeVerifyForAgeGate");
    isChannelContentGated = obj4.useIsChannelContentGated(stateFromStores1);
    obj5 = require("initialize");
    items2 = [];
    items2[0] = c12;
    obj = {};
    stateFromStores2 = obj5.useStateFromStores(items2, () => null != outer1_12.getContent());
    tmp9 = jsx;
    tmp10 = PureComponent;
    merged = Object.assign(global);
    obj["inlineAttachmentMedia"] = setting;
    obj["inlineEmbedMedia"] = setting1;
    obj["renderEmbeds"] = setting2;
    obj["roleStyle"] = stateFromStores;
    obj["channel"] = stateFromStores1;
    obj["width"] = require("useWindowDimensions")().width;
    obj["isSpoilerHidden"] = isChannelSpoilerGated;
    obj["isNSFWHidden"] = isChannelContentGated;
    tmp12 = !isChannelSpoilerGated && !isChannelContentGated;
    obj["canAccessChannel"] = tmp12;
    obj["hasActionSheetOpen"] = stateFromStores2;
    return tmp9(tmp10, obj);
  }
}
const View = get_ActivityIndicator.View;
({ AnalyticsObjects: closure_16, AnalyticsSections: closure_17 } = ME);
({ Changeset: closure_18, RowType: closure_19, SeparatorType: closure_20 } = Changeset);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
_createForOfIteratorHelperLoose = { chat: { flex: 1, overflow: "hidden" } };
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.containerInner = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.jumpToChatButtonContainer = { flexShrink: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { flexShrink: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.jumpToChatButton = { height: 44, borderTopWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.jumpToChatText = { textAlign: "center", flex: 1, lineHeight: 44 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp7 = ((PureComponent) => {
  class ChatPreviewBase {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_25()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp7 = outer1_1(outer1_3[17]);
      tmp7 = new tmp7();
      tmp2Result.chatManager = tmp7;
      tmp9 = outer1_1(outer1_3[18]);
      tmp9 = new tmp9();
      tmp2Result.rowGenerator = tmp9;
      tmp2Result.chatRef = outer1_9.createRef();
      tmp2Result.didPositionInitialScroll = false;
      tmp2Result.handleCompleteFirstLayout = () => {
        let initialScrollToTop = tmp2Result.props.initialScrollToTop;
        if (initialScrollToTop) {
          initialScrollToTop = !tmp2Result.didPositionInitialScroll;
        }
        if (initialScrollToTop) {
          tmp2Result.didPositionInitialScroll = true;
          ChatPreviewBase(outer2_3[19]).scrollToTopMessage(tmp2Result.chatRef, tmp2Result.chatManager);
          const obj = ChatPreviewBase(outer2_3[19]);
        }
      };
      tmp2Result.setup = () => {
        let c0;
        let c2;
        let chatManager3;
        let chatManager4;
        let jumpTargetId;
        let length;
        let messages;
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        messages = undefined;
        c2 = undefined;
        let closure_3;
        let map;
        let items;
        let items1;
        const props = tmp2Result.props;
        ({ channel: c0, messages } = props);
        ({ roleStyle: c2, jumpTargetId } = props);
        if (null != messages) {
          const rowGenerator2 = tmp2Result.rowGenerator;
          let obj = { renderEmbeds: tmp3, inlineEmbedMedia: tmp2, inlineAttachmentMedia: tmp, constrainedWidth: tmp2Result.props.width };
          rowGenerator2.setOptions(obj);
          const chatManager5 = tmp2Result.chatManager;
          chatManager5.setup(messages);
          closure_3 = flag ? tmp25.UPDATE : tmp25.NOOP;
          const chatManager = tmp2Result.chatManager;
          const previousMessages = chatManager.getPreviousMessages();
          const _Array = Array;
          map = null;
          if (Array.isArray(previousMessages)) {
            const _Map = Map;
            map = new Map(previousMessages.map((id) => {
              const items = [id.id, id];
              return items;
            }));
          }
          items = [];
          let item = messages.forEach((arg0) => {
            const first = items[0];
            if (null != first) {
              if (outer3_1(outer3_3[20])(c0, first[first.length - 1], arg0)) {
                items = [arg0];
                items.unshift(items);
              } else {
                first.unshift(arg0);
              }
            } else {
              const items1 = [arg0];
              items.unshift(items1);
            }
          });
          items1 = [];
          const item1 = items.forEach((arr) => {
            let closure_0 = arr;
            const messages = tmp;
            let isSameDayResult = items[items.length - 1] === arr;
            let c2 = false;
            let timestamp = null;
            if (!isSameDayResult) {
              timestamp = items[arg1 + 1][0].timestamp;
            }
            if (!isSameDayResult) {
              isSameDayResult = null == timestamp;
            }
            if (!isSameDayResult) {
              let obj = ChatPreviewBase(outer3_3[21]);
              isSameDayResult = obj.isSameDay(tmp.timestamp, timestamp);
            }
            let flag = false;
            if (!isSameDayResult) {
              c2 = true;
              flag = true;
            }
            function processHiddenMessageRow(arg0) {
              const item = arg0.forEach((message) => {
                content = content.content;
                content.unshift({ rowType: outer5_19.MESSAGE, changeType: outer5_18.NOOP, roleStyle: c2, message, isFirst: message === outer1_1 });
              });
              arg0.revealed = tmp.id === tmp.revealedMessageId;
              arg0.context = tmp.id;
              return arg0;
            }
            let tmp8 = items1[items1.length - 1];
            obj = { roleStyle: c2, rowType: outer3_19.BLOCKED_GROUP, changeType: closure_3, message: tmp, isFirst: true, content: [], text: "", revealed: false };
            if (arr[arr.length - 1].blocked) {
              let tmp22 = null != tmp8;
              if (tmp22) {
                tmp22 = tmp8.rowType === outer3_19.BLOCKED_GROUP;
              }
              if (!tmp22) {
                obj = {};
                const merged = Object.assign(obj);
                obj["rowType"] = outer3_19.BLOCKED_GROUP;
                items1.push(obj);
                tmp8 = obj;
              }
              const result = processHiddenMessageRow(tmp8);
              const intl2 = ChatPreviewBase(outer3_3[22]).intl;
              const obj1 = { count: tmp8.content.length };
              tmp8.text = intl2.formatToPlainString(ChatPreviewBase(outer3_3[22]).t["+FcYM/"], obj1);
            } else if (tmp.ignored) {
              let tmp10 = null != tmp8;
              if (tmp10) {
                tmp10 = tmp8.rowType === outer3_19.IGNORED_GROUP;
              }
              let tmp12 = tmp8;
              if (!tmp10) {
                const obj2 = {};
                const merged1 = Object.assign(obj);
                obj2["rowType"] = outer3_19.IGNORED_GROUP;
                items1.push(obj2);
                tmp12 = obj2;
              }
              const result1 = processHiddenMessageRow(tmp12);
              const intl = ChatPreviewBase(outer3_3[22]).intl;
              const obj3 = { count: tmp12.content.length };
              tmp12.text = intl.formatToPlainString(ChatPreviewBase(outer3_3[22]).t["VFWjc+"], obj3);
            } else {
              let item = arr.forEach((id) => {
                if (null != outer1_4) {
                  if (outer1_4.get(id.id) !== id) {
                    let UPDATE = outer4_18.UPDATE;
                  }
                  const obj = { roleStyle: c2, rowType: outer4_19.MESSAGE, changeType: UPDATE, message: id, isFirst: id === closure_1, isEditing: false };
                  let tmp8 = !tmp7;
                  if (id === closure_1) {
                    tmp8 = c2;
                  }
                  obj.separatorBefore = tmp8;
                  outer1_6.push(obj);
                }
                UPDATE = outer1_3;
              });
            }
            if (flag) {
              const obj4 = { roleStyle: c2, rowType: outer3_20.DAY, changeType: closure_3, text: ChatPreviewBase(outer3_3[21]).dateFormat(tmp.timestamp, "LL") };
              items1.push(obj4);
              const obj8 = ChatPreviewBase(outer3_3[21]);
            }
          });
          let num = 0;
          if (0 < items1.length) {
            do {
              let tmp12 = tmp2Result;
              let chatManager2 = tmp2Result.chatManager;
              let rowGenerator = tmp2Result.rowGenerator;
              let row = chatManager2.createRow(rowGenerator.generate(items1[num]));
              num = num + 1;
              length = items1.length;
            } while (num < length);
          }
          ({ chatManager: chatManager3, chatManager: chatManager4 } = tmp2Result);
          const changeset = chatManager3.createChangeset();
          let tmp17;
          if (!tmp4) {
            obj = { rows: tmp16, scrollToMessageId: jumpTargetId, jumpTargetId, jumpType: undefined, shouldInitialScroll: false, animated: false, scrollPosition: undefined, focusTargetId: null };
            tmp17 = outer2_1(outer2_3[23])(obj);
          }
          tmp2Result.updateContent(changeset, tmp17);
        }
      };
      tmp2Result.updateContent = (rows, scrollData) => {
        const current = tmp2Result.chatRef.current;
        if (null != current) {
          let obj = outer2_1(outer2_3[24]);
          obj = { rows, isLoadingAtTop: false, scrollData };
          obj.updateRows(current, obj);
        }
      };
      tmp2Result.getMessage = (arg0) => outer2_1(outer2_3[25]).find(arg0.props.messages, (id) => {
        let tmp2 = id.id === closure_0;
        if (!tmp2) {
          tmp2 = tmp === closure_0;
        }
        return tmp2;
      });
      tmp2Result.handleJumpToChat = () => {
        let closure_0;
        let jumpTargetId;
        if (null != tmp2Result.props.onBeforeJumpToMessage) {
          const props = tmp2Result.props;
          const result = props.onBeforeJumpToMessage();
        }
        ({ channelId: closure_0, jumpTargetId } = tmp2Result.props);
        if (null != jumpTargetId) {
          const resolved = Promise.resolve();
          resolved.then(() => {
            ChatPreviewBase(outer3_3[26]).transitionToMessage(closure_0, jumpTargetId, { navigationReplace: true });
          });
        }
      };
      tmp2Result.handleTapLink = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const data = nativeEvent.data;
        if ("bindJumpToMessage" === data.action) {
          if (null != data.targetChannelId) {
            if (null != data.targetMessageId) {
              if (null != tmp2Result.props.onBeforeJumpToMessage) {
                let props = tmp2Result.props;
                let result = props.onBeforeJumpToMessage();
              }
              let obj = { navigationReplace: true };
              ChatPreviewBase(outer2_3[26]).transitionToMessage(data.targetChannelId, data.targetMessageId, obj);
            }
          }
        }
        obj = ChatPreviewBase(outer2_3[27]);
        obj = {
          allowWithinModal: true,
          chatInputRef: undefined,
          handleTransitionToThread(arg0, channelId, source) {
            if (null != outer1_0.props.onBeforeJumpToMessage) {
              const props = outer1_0.props;
              const result = props.onBeforeJumpToMessage();
            }
            const channel = outer3_13.getChannel(channelId);
            if (null != channel) {
              let obj = ChatPreviewBase(outer3_3[26]);
              obj = { source, navigationReplace: true };
              obj.transitionToThread(channel, obj);
            }
          },
          message: tmp2Result.getMessage(data.messageId)
        };
        let channel = tmp2Result.props.channel;
        let tmp2;
        if (null != channel) {
          tmp2 = channel;
        }
        obj.messageChannel = tmp2;
        obj.selectedChannelId = undefined;
        obj.tapLinkData = nativeEvent;
        const result1 = obj.handleMessagesTapLink(obj);
      };
      tmp2Result.handleLongPressLink = (nativeEvent) => {
        const url = nativeEvent.nativeEvent.url;
        let hasActionSheetOpen = tmp2Result.props.hasActionSheetOpen;
        if (!hasActionSheetOpen) {
          hasActionSheetOpen = null == url;
        }
        if (!hasActionSheetOpen) {
          hasActionSheetOpen = "" === url;
        }
        if (!hasActionSheetOpen) {
          const obj = { urlString: url };
          outer2_1(outer2_3[28])(obj);
        }
      };
      tmp2Result.handleLongPressMessage = (nativeEvent) => {
        let componentMediaIndex;
        let mediaIndex;
        let mediaType;
        let obj = ChatPreviewBase(outer2_3[29]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
        const props = tmp2Result.props;
        const channel = props.channel;
        if (!props.hasActionSheetOpen) {
          const message = tmp2Result.getMessage(tmp2);
          if (null != message) {
            const user = outer2_14.getUser(message.author.id);
            if (null != user) {
              const obj2 = ChatPreviewBase(outer2_3[19]);
              const longPressSelectedMedia = obj2.getLongPressSelectedMedia(message, mediaIndex, mediaType, ChatPreviewBase(outer2_3[30]).asComponentId(tmp3), componentMediaIndex);
              const obj3 = ChatPreviewBase(outer2_3[30]);
              const result = outer2_2(outer2_3[31]).dismissGlobalKeyboard();
              const obj4 = outer2_2(outer2_3[31]);
              obj = { actionSheetSource: "Preview" };
              obj = { section: outer2_17.CHANNEL_SEARCH, object: outer2_16.CHANNEL_SEARCH };
              obj.analyticsLocation = obj;
              let tmp8 = true === tmp4;
              if (tmp8) {
                tmp8 = null != channel;
              }
              if (tmp8) {
                tmp8 = outer2_1(outer2_3[33])(channel);
              }
              obj.canAddNewReactions = tmp8;
              obj.channel = channel;
              obj.message = message;
              let tmp11;
              if (null != longPressSelectedMedia) {
                tmp11 = longPressSelectedMedia;
              }
              obj.selectedMedia = tmp11;
              obj.user = user;
              const result1 = ChatPreviewBase(outer2_3[32]).showLongPressMessageActionSheet(obj);
              const obj5 = ChatPreviewBase(outer2_3[32]);
            }
          }
        }
      };
      tmp2Result.handleLongPressReaction = (nativeEvent) => {
        const nativeSyntheticEventData = ChatPreviewBase(outer2_3[29]).getNativeSyntheticEventData(nativeEvent);
        const reaction = nativeSyntheticEventData.reaction;
        if (!tmp2Result.props.hasActionSheetOpen) {
          let emoji;
          if (null != reaction) {
            emoji = reaction.emoji;
          }
          const result = ChatPreviewBase(outer2_3[34]).handleViewPreviewReactions(tmp2, tmp3, emoji);
          const obj2 = ChatPreviewBase(outer2_3[34]);
        }
      };
      tmp2Result.handleTapReaction = (nativeEvent) => {
        let isBurst;
        let messageId;
        let reaction;
        const props = tmp2Result.props;
        const channel = props.channel;
        if (!props.hasActionSheetOpen) {
          if (true === tmp) {
            if (null != channel) {
              const nativeSyntheticEventData = ChatPreviewBase(outer2_3[29]).getNativeSyntheticEventData(nativeEvent);
              ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
              const obj3 = ChatPreviewBase(outer2_3[19]);
              let tmp5 = null;
              if (null != reaction) {
                const obj = {};
                const merged = Object.assign(reaction);
                obj["emoji"] = reaction.emoji;
                tmp5 = obj;
              }
              let MESSAGE = nativeEvent.nativeEvent.location;
              if (null == MESSAGE) {
                MESSAGE = ChatPreviewBase(outer2_3[35]).ReactionLocations.MESSAGE;
              }
              const result = obj3.handleAddOrRemoveReaction(messageId, channel, tmp5, isBurst, MESSAGE);
              const obj2 = ChatPreviewBase(outer2_3[29]);
            }
          }
        }
      };
      tmp2Result.handleTapImage = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const message = tmp2Result.getMessage(nativeEvent.id);
        if (null != message) {
          const channel = outer2_13.getChannel(message.getChannelId());
          if (null != channel) {
            const obj = { tapImageData: nativeEvent, allowWithinModal: true, message, messageChannel: channel, selectedChannelId: undefined, showContextName: true };
            const result = ChatPreviewBase(outer2_3[36]).handleMessagesTapImage(obj);
            const obj2 = ChatPreviewBase(outer2_3[36]);
          }
        }
      };
      tmp2Result.handleTapChannel = (nativeEvent) => {
        let obj = ChatPreviewBase(outer2_3[29]);
        obj = { data: obj.getNativeSyntheticEventData(nativeEvent).data, navigationReplace: true, onBeforeNavigate: tmp2Result.props.onBeforeJumpToMessage };
        const result = ChatPreviewBase(outer2_3[37]).handleMessagesTapChannel(obj);
      };
      tmp2Result.handleLongPressChannel = (arg0) => {
        ChatPreviewBase(outer2_3[29]);
        if (!tmp2Result.props.hasActionSheetOpen) {
          let obj = ChatPreviewBase(outer2_3[38]);
          obj = { data: tmp2 };
          const result = obj.handleMessagesLongPressChannel(obj);
        }
      };
      return tmp2Result;
    }
  }
  callback2(ChatPreviewBase, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      let tmp = null != this.props.messages;
      if (tmp) {
        tmp = false !== self.props.canAccessChannel;
      }
      if (tmp) {
        self.setup();
      }
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      if (null != this.chatRef.current) {
        const chatManager = this.chatManager;
        chatManager.clear();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value(messages) {
      const self = this;
      if (!tmp) {
        self.setup(messages.width !== self.props.width);
      }
      let tmp3 = messages.canAccessChannel !== self.props.canAccessChannel;
      if (tmp3) {
        tmp3 = null != self.props.messages;
      }
      if (tmp3) {
        self.setup(self.props.canAccessChannel);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let channel;
      let isSpoilerHidden;
      const self = this;
      const tmp = outer1_23(this.context);
      const props = this.props;
      ({ channel, isSpoilerHidden } = props);
      if (props.isNSFWHidden) {
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        if (null != guild_id) {
          let obj = {};
          ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
          let tmp12 = outer1_21(outer1_1(outer1_3[39]), obj);
        }
        obj = { style: tmp.containerInner };
        const items = [tmp12, tmp11];
        obj.children = items;
        return outer1_22(outer1_10, obj);
      }
      if (isSpoilerHidden) {
        let guild_id1;
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        if (null != guild_id1) {
          let obj1 = {};
          ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
          tmp12 = outer1_21(outer1_1(outer1_3[40]), obj1);
        }
      }
      obj = { ref: self.chatRef, style: tmp.chat, inverted: true, onTapLink: self.handleTapLink, onTapChannel: self.handleTapChannel, onLongPressChannel: self.handleLongPressChannel, onLongPressLink: self.handleLongPressLink, onLongPressMessage: self.handleLongPressMessage, onLongPressReaction: self.handleLongPressReaction, onTapReaction: self.handleTapReaction, onTapImage: self.handleTapImage };
      obj1 = ChatPreviewBase(outer1_3[42]);
      let prop;
      if (obj1.isIOS()) {
        prop = self.handleCompleteFirstLayout;
      }
      obj.onCompleteFirstLayout = prop;
      let obj2 = ChatPreviewBase(outer1_3[42]);
      let prop1;
      if (!obj2.isIOS()) {
        prop1 = self.handleCompleteFirstLayout;
      }
      obj.onFirstLayout = prop1;
      const tmp6 = outer1_21;
      const tmp7 = outer1_1(outer1_3[41]);
      obj2 = { bottom: true, style: tmp.jumpToChatButtonContainer };
      const obj3 = { accessibilityRole: "button", style: tmp.jumpToChatButton, onPress: self.handleJumpToChat };
      const obj4 = { style: tmp.jumpToChatText, variant: "text-md/medium", color: "interactive-text-default" };
      const intl = ChatPreviewBase(outer1_3[22]).intl;
      obj4.children = intl.string(ChatPreviewBase(outer1_3[22]).t["+TSRGD"]);
      obj3.children = outer1_21(ChatPreviewBase(outer1_3[45]).Text, obj4);
      obj2.children = outer1_21(ChatPreviewBase(outer1_3[44]).PressableOpacity, obj3);
      const tmp6Result = outer1_21(outer1_1(outer1_3[41]), obj);
      tmp12 = tmp6Result;
    }
  };
  return callback(ChatPreviewBase, items);
})(importAllResult.PureComponent);
let closure_24 = tmp7;
tmp7.contextType = require("ManaContext").ThemeContext;
tmp7.defaultProps = { withSafeArea: true };
let obj2 = { height: 44, borderTopWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/ChatPreview.tsx");

export default function ChatPreviewConnected(arg0) {
  let jumpTargetId;
  let messages;
  let obj = require(566) /* initialize */;
  const items = [closure_15];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ messages: outer1_15.messages, jumpTargetId: outer1_15.jumpTargetId }));
  ({ messages, jumpTargetId } = stateFromStoresObject);
  const effect = importAllResult.useEffect(() => () => {
    outer2_1(outer2_3[52]).clearMessages();
  }, []);
  obj = {};
  const merged = Object.assign(arg0);
  obj["messages"] = messages;
  obj["jumpTargetId"] = jumpTargetId;
  return callback3(ChatPreview, obj);
};
export { ChatPreview };
