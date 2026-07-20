// Module ID: 9297
// Function ID: 72613
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 9297 (_isNativeReflectConstruct)
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
    arg1 = global.channelId;
    InlineAttachmentMedia = arg1(dependencyMap[45]).InlineAttachmentMedia;
    setting = InlineAttachmentMedia.useSetting();
    InlineEmbedMedia = arg1(dependencyMap[45]).InlineEmbedMedia;
    setting1 = InlineEmbedMedia.useSetting();
    RenderEmbeds = arg1(dependencyMap[45]).RenderEmbeds;
    setting2 = RenderEmbeds.useSetting();
    obj = arg1(dependencyMap[46]);
    items = [];
    items[0] = closure_11;
    stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
    obj2 = arg1(dependencyMap[46]);
    items1 = [];
    items1[0] = closure_13;
    stateFromStores1 = obj2.useStateFromStores(items1, () => channel.getChannel(channelId));
    obj3 = arg1(dependencyMap[48]);
    isChannelSpoilerGated = obj3.useIsChannelSpoilerGated(stateFromStores1);
    obj4 = arg1(dependencyMap[49]);
    isChannelContentGated = obj4.useIsChannelContentGated(stateFromStores1);
    obj5 = arg1(dependencyMap[46]);
    items2 = [];
    items2[0] = closure_12;
    obj = {};
    stateFromStores2 = obj5.useStateFromStores(items2, () => null != content.getContent());
    tmp9 = jsx;
    tmp10 = f72621;
    merged = Object.assign(global);
    obj["inlineAttachmentMedia"] = setting;
    obj["inlineEmbedMedia"] = setting1;
    obj["renderEmbeds"] = setting2;
    obj["roleStyle"] = stateFromStores;
    obj["channel"] = stateFromStores1;
    obj["width"] = importDefault(dependencyMap[47])().width;
    obj["isSpoilerHidden"] = isChannelSpoilerGated;
    obj["isNSFWHidden"] = isChannelContentGated;
    tmp12 = !isChannelSpoilerGated && !isChannelContentGated;
    obj["canAccessChannel"] = tmp12;
    obj["hasActionSheetOpen"] = stateFromStores2;
    return tmp9(tmp10, obj);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
const View = tmp3.View;
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
({ AnalyticsObjects: closure_16, AnalyticsSections: closure_17 } = arg1(dependencyMap[12]));
const tmp4 = arg1(dependencyMap[12]);
({ Changeset: closure_18, RowType: closure_19, SeparatorType: closure_20 } = arg1(dependencyMap[13]));
const tmp5 = arg1(dependencyMap[13]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { chat: { "Bool(false)": 10, "Bool(false)": 10 } };
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOW };
obj.containerInner = obj;
const tmp6 = arg1(dependencyMap[14]);
obj.jumpToChatButtonContainer = { flexShrink: 0, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_SURFACE_HIGH };
const obj1 = { flexShrink: 0, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_SURFACE_HIGH };
obj.jumpToChatButton = { height: 44, borderTopWidth: tmp3.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
obj.jumpToChatText = { "Bool(false)": 47910638322386150000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 231584254778021550000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011722272290934665 };
let closure_23 = obj.createLegacyClassComponentStyles(obj);
const tmp7 = (PureComponent) => {
  class ChatPreviewBase {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ChatPreviewBase);
      items1 = [...items];
      obj = closure_7(ChatPreviewBase);
      tmp2 = closure_6;
      if (closure_25()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ChatPreviewBase = tmp2Result;
      tmp7 = closure_1(closure_3[17]);
      tmp7 = new tmp7();
      tmp2Result.chatManager = tmp7;
      tmp9 = closure_1(closure_3[18]);
      tmp9 = new tmp9();
      tmp2Result.rowGenerator = tmp9;
      tmp2Result.chatRef = closure_9.createRef();
      tmp2Result.didPositionInitialScroll = false;
      tmp2Result.handleCompleteFirstLayout = () => {
        let initialScrollToTop = tmp2Result.props.initialScrollToTop;
        if (initialScrollToTop) {
          initialScrollToTop = !tmp2Result.didPositionInitialScroll;
        }
        if (initialScrollToTop) {
          tmp2Result.didPositionInitialScroll = true;
          tmp2Result(closure_3[19]).scrollToTopMessage(tmp2Result.chatRef, tmp2Result.chatManager);
          const obj = tmp2Result(closure_3[19]);
        }
      };
      tmp2Result.setup = () => {
        let chatManager2;
        let chatManager3;
        let jumpTargetId;
        let length;
        let messages;
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        messages = undefined;
        let closure_2;
        let closure_3;
        let items;
        let items1;
        const props = tmp2Result.props;
        ({ channel: closure_0, messages } = props);
        ({ roleStyle: closure_2, jumpTargetId } = props);
        if (null != messages) {
          const rowGenerator2 = tmp2Result.rowGenerator;
          let obj = { renderEmbeds: tmp3, inlineEmbedMedia: tmp2, inlineAttachmentMedia: tmp, constrainedWidth: tmp2Result.props.width };
          rowGenerator2.setOptions(obj);
          const chatManager4 = tmp2Result.chatManager;
          chatManager4.setup(messages);
          closure_3 = flag ? tmp20.UPDATE : tmp20.NOOP;
          items = [];
          const item = messages.forEach((arg0) => {
            const first = items[0];
            if (null != first) {
              if (messages(closure_3[20])(closure_0, first[first.length - 1], arg0)) {
                const items = [arg0];
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
            const _undefined = arr;
            const messages = tmp;
            let isSameDayResult = items[closure_4.length - 1] === arr;
            let closure_2 = false;
            let timestamp = null;
            if (!isSameDayResult) {
              timestamp = items[arg1 + 1][0].timestamp;
            }
            if (!isSameDayResult) {
              isSameDayResult = null == timestamp;
            }
            if (!isSameDayResult) {
              let obj = _undefined(closure_3[21]);
              isSameDayResult = obj.isSameDay(tmp.timestamp, timestamp);
            }
            let flag = false;
            if (!isSameDayResult) {
              closure_2 = true;
              flag = true;
            }
            function processHiddenMessageRow(arg0) {
              const item = arg0.forEach((message) => {
                const content = message.content;
                content.unshift({ rowType: constants2.MESSAGE, changeType: constants.NOOP, roleStyle: closure_2, message, isFirst: message === closure_1 });
              });
              arg0.revealed = tmp.id === tmp.revealedMessageId;
              arg0.context = tmp.id;
              return arg0;
            }
            let tmp8 = items1[closure_5.length - 1];
            obj = { roleStyle: closure_2, rowType: constants.BLOCKED_GROUP, changeType: closure_3, message: tmp, isFirst: true, content: [], text: "", revealed: false };
            if (arr[arr.length - 1].blocked) {
              let tmp22 = null != tmp8;
              if (tmp22) {
                tmp22 = tmp8.rowType === constants.BLOCKED_GROUP;
              }
              if (!tmp22) {
                obj = {};
                const merged = Object.assign(obj);
                obj["rowType"] = constants.BLOCKED_GROUP;
                items1.push(obj);
                tmp8 = obj;
              }
              const result = processHiddenMessageRow(tmp8);
              const intl2 = _undefined(closure_3[22]).intl;
              const obj1 = { count: tmp8.content.length };
              tmp8.text = intl2.formatToPlainString(_undefined(closure_3[22]).t.+FcYM/, obj1);
            } else if (tmp.ignored) {
              let tmp10 = null != tmp8;
              if (tmp10) {
                tmp10 = tmp8.rowType === constants.IGNORED_GROUP;
              }
              let tmp12 = tmp8;
              if (!tmp10) {
                const obj2 = {};
                const merged1 = Object.assign(obj);
                obj2["rowType"] = constants.IGNORED_GROUP;
                items1.push(obj2);
                tmp12 = obj2;
              }
              const result1 = processHiddenMessageRow(tmp12);
              const intl = _undefined(closure_3[22]).intl;
              const obj3 = { count: tmp12.content.length };
              tmp12.text = intl.formatToPlainString(_undefined(closure_3[22]).t.VFWjc+, obj3);
            } else {
              const item = arr.forEach((message) => {
                const obj = { roleStyle: closure_2, rowType: constants.MESSAGE, changeType: closure_3, message, isFirst: message === tmp, isEditing: false };
                let tmp3 = !tmp2;
                if (message === tmp) {
                  tmp3 = closure_2;
                }
                obj.separatorBefore = tmp3;
                const arr = arr.push(obj);
              });
            }
            if (flag) {
              const obj4 = { roleStyle: closure_2, rowType: constants2.DAY, changeType: closure_3, text: _undefined(closure_3[21]).dateFormat(tmp.timestamp, "LL") };
              items1.push(obj4);
              const obj8 = _undefined(closure_3[21]);
            }
          });
          let num = 0;
          if (0 < items1.length) {
            do {
              let tmp7 = closure_0;
              let chatManager = closure_0.chatManager;
              let rowGenerator = closure_0.rowGenerator;
              let row = chatManager.createRow(rowGenerator.generate(items1[num]));
              num = num + 1;
              length = items1.length;
            } while (num < length);
          }
          ({ chatManager: chatManager2, chatManager: chatManager3 } = tmp2Result);
          const changeset = chatManager2.createChangeset();
          let tmp12;
          if (!tmp4) {
            obj = { rows: tmp11, scrollToMessageId: jumpTargetId, jumpTargetId, jumpType: undefined, shouldInitialScroll: false, animated: false, scrollPosition: undefined, focusTargetId: null };
            tmp12 = messages(closure_3[23])(obj);
          }
          tmp2Result.updateContent(changeset, tmp12);
        }
      };
      tmp2Result.updateContent = (rows, scrollData) => {
        const current = tmp2Result.chatRef.current;
        if (null != current) {
          let obj = callback(closure_3[24]);
          obj = { rows, isLoadingAtTop: false, scrollData };
          obj.updateRows(current, obj);
        }
      };
      tmp2Result.getMessage = (arg0) => callback(closure_3[25]).find(arg0.props.messages, (id) => {
        let tmp2 = id.id === id;
        if (!tmp2) {
          tmp2 = tmp === id;
        }
        return tmp2;
      });
      tmp2Result.handleJumpToChat = () => {
        let jumpTargetId;
        if (null != tmp2Result.props.onBeforeJumpToMessage) {
          const props = tmp2Result.props;
          const result = props.onBeforeJumpToMessage();
        }
        ({ channelId: closure_0, jumpTargetId } = tmp2Result.props);
        if (null != jumpTargetId) {
          const resolved = Promise.resolve();
          resolved.then(() => {
            callback(closure_3[26]).transitionToMessage(callback, jumpTargetId, { navigationReplace: true });
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
                const props = tmp2Result.props;
                const result = props.onBeforeJumpToMessage();
              }
              let obj = { navigationReplace: true };
              tmp2Result(closure_3[26]).transitionToMessage(data.targetChannelId, data.targetMessageId, obj);
            }
          }
        }
        obj = tmp2Result(closure_3[27]);
        obj = {
          allowWithinModal: true,
          chatInputRef: undefined,
          handleTransitionToThread(arg0, channelId, source) {
            if (null != lib.props.onBeforeJumpToMessage) {
              const props = lib.props;
              const result = props.onBeforeJumpToMessage();
            }
            const channel = channel.getChannel(channelId);
            if (null != channel) {
              let obj = lib(closure_3[26]);
              obj = { source, navigationReplace: true };
              obj.transitionToThread(channel, obj);
            }
          },
          message: tmp2Result.getMessage(data.messageId)
        };
        const channel = tmp2Result.props.channel;
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
          callback(closure_3[28])(obj);
        }
      };
      tmp2Result.handleLongPressMessage = (nativeEvent) => {
        let componentMediaIndex;
        let mediaIndex;
        let mediaType;
        let obj = tmp2Result(closure_3[29]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
        if (!tmp2Result.props.hasActionSheetOpen) {
          const message = tmp2Result.getMessage(tmp2);
          if (null != message) {
            const user = user.getUser(message.author.id);
            if (null != user) {
              const obj2 = tmp2Result(closure_3[19]);
              const longPressSelectedMedia = obj2.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmp2Result(closure_3[30]).asComponentId(tmp3), componentMediaIndex);
              const obj3 = tmp2Result(closure_3[30]);
              const result = callback2(closure_3[31]).dismissGlobalKeyboard();
              const obj4 = callback2(closure_3[31]);
              obj = { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015459527413461856, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003337610788552319, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000352126642368941 };
              obj = { section: constants2.CHANNEL_SEARCH, object: constants.CHANNEL_SEARCH };
              obj.analyticsLocation = obj;
              obj.channel = tmp4;
              obj.message = message;
              let tmp8;
              if (null != longPressSelectedMedia) {
                tmp8 = longPressSelectedMedia;
              }
              obj.selectedMedia = tmp8;
              obj.user = user;
              const result1 = tmp2Result(closure_3[32]).showLongPressMessageActionSheet(obj);
              const obj5 = tmp2Result(closure_3[32]);
            }
          }
        }
      };
      tmp2Result.handleLongPressReaction = (nativeEvent) => {
        const nativeSyntheticEventData = tmp2Result(closure_3[29]).getNativeSyntheticEventData(nativeEvent);
        const reaction = nativeSyntheticEventData.reaction;
        if (!tmp2Result.props.hasActionSheetOpen) {
          let emoji;
          if (null != reaction) {
            emoji = reaction.emoji;
          }
          const result = tmp2Result(closure_3[33]).handleViewPreviewReactions(tmp2, tmp3, emoji);
          const obj2 = tmp2Result(closure_3[33]);
        }
      };
      tmp2Result.handleTapImage = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const message = tmp2Result.getMessage(nativeEvent.id);
        if (null != message) {
          const channel = channel.getChannel(message.getChannelId());
          if (null != channel) {
            const obj = { tapImageData: nativeEvent, allowWithinModal: true, message, messageChannel: channel, selectedChannelId: undefined, showContextName: true };
            const result = tmp2Result(closure_3[34]).handleMessagesTapImage(obj);
            const obj2 = tmp2Result(closure_3[34]);
          }
        }
      };
      tmp2Result.handleTapChannel = (nativeEvent) => {
        let obj = tmp2Result(closure_3[29]);
        obj = { data: obj.getNativeSyntheticEventData(nativeEvent).data, navigationReplace: true, onBeforeNavigate: tmp2Result.props.onBeforeJumpToMessage };
        const result = tmp2Result(closure_3[35]).handleMessagesTapChannel(obj);
      };
      tmp2Result.handleLongPressChannel = (arg0) => {
        tmp2Result(closure_3[29]);
        if (!tmp2Result.props.hasActionSheetOpen) {
          let obj = tmp2Result(closure_3[36]);
          obj = { data: tmp2 };
          const result = obj.handleMessagesLongPressChannel(obj);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = ChatPreviewBase;
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
  const items = [obj, , , ];
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
      const tmp = callback6(this.context);
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
          let tmp12 = callback4(callback(closure_3[37]), obj);
        }
        obj = { style: tmp.containerInner };
        const items = [tmp12, tmp11];
        obj.children = items;
        return callback5(closure_10, obj);
      }
      if (isSpoilerHidden) {
        let guild_id1;
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        if (null != guild_id1) {
          let obj1 = {};
          ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
          tmp12 = callback4(callback(closure_3[38]), obj1);
        }
      }
      obj = { ref: self.chatRef, style: tmp.chat, inverted: true, onTapLink: self.handleTapLink, onTapChannel: self.handleTapChannel, onLongPressChannel: self.handleLongPressChannel, onLongPressLink: self.handleLongPressLink, onLongPressMessage: self.handleLongPressMessage, onLongPressReaction: self.handleLongPressReaction, onTapImage: self.handleTapImage };
      obj1 = ChatPreviewBase(closure_3[40]);
      let prop;
      if (obj1.isIOS()) {
        prop = self.handleCompleteFirstLayout;
      }
      obj.onCompleteFirstLayout = prop;
      let obj2 = ChatPreviewBase(closure_3[40]);
      let prop1;
      if (!obj2.isIOS()) {
        prop1 = self.handleCompleteFirstLayout;
      }
      obj.onFirstLayout = prop1;
      const tmp6 = callback4;
      const tmp7 = callback(closure_3[39]);
      obj2 = { bottom: true, style: tmp.jumpToChatButtonContainer };
      const obj3 = { accessibilityRole: "button", style: tmp.jumpToChatButton, onPress: self.handleJumpToChat };
      const obj4 = { Promise: 0, marginTop: 1929379840, flags: 0, style: tmp.jumpToChatText };
      const intl = ChatPreviewBase(closure_3[22]).intl;
      obj4.children = intl.string(ChatPreviewBase(closure_3[22]).t.+TSRGD);
      obj3.children = callback4(ChatPreviewBase(closure_3[43]).Text, obj4);
      obj2.children = callback4(ChatPreviewBase(closure_3[42]).PressableOpacity, obj3);
      const tmp6Result = callback4(callback(closure_3[39]), obj);
      tmp12 = tmp6Result;
    }
  };
  return callback(ChatPreviewBase, items);
}(importAllResult.PureComponent);
tmp7.contextType = arg1(dependencyMap[44]).ThemeContext;
tmp7.defaultProps = { withSafeArea: true };
const obj2 = { height: 44, borderTopWidth: tmp3.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[51]).fileFinishedImporting("components_native/common/ChatPreview.tsx");

export default function ChatPreviewConnected(arg0) {
  let jumpTargetId;
  let messages;
  let obj = arg1(dependencyMap[46]);
  const items = [closure_15];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ messages: closure_15.messages, jumpTargetId: closure_15.jumpTargetId }));
  ({ messages, jumpTargetId } = stateFromStoresObject);
  const effect = importAllResult.useEffect(() => () => {
    callback(closure_3[50]).clearMessages();
  }, []);
  obj = {};
  const merged = Object.assign(arg0);
  obj["messages"] = messages;
  obj["jumpTargetId"] = jumpTargetId;
  return callback3(ChatPreview, obj);
};
export { ChatPreview };
