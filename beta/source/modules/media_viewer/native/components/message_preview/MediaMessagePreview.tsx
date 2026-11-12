// Module ID: 15050
// Function ID: 15051
// Name: MediaMessagePreview
// Dependencies: [32, 19, 17, 7555, 6951, 5019, 6226, 9042, 1072, 21, 8481, 8814, 5170, 8974, 10040, 1652, 1705, 575, 15051, 504, 11309, 1113, 11, 15052, 10338, 10049, 8509, 10334, 5452, 13592, 10274, 5917, 2]
// Exports: default

// Module 15050 (MediaMessagePreview)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import RowGeneratorDefault from "RowGenerator" /* 8481 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8814 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10049 */;
import handleMessagesTapLink from "handleMessagesTapLink" /* 10274 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 10338 */;
import showMediaMessagePreviewActionSheetDefault from "showMediaMessagePreviewActionSheet" /* 15052 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 7555 */;
import SearchMessageStore from "SearchMessageStore" /* 6951 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MessageStore from "MessageStore" /* 6226 */;
import MessagePreviewStore from "MessagePreviewStore" /* 9042 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let flag, rowGenerator;

let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp5;
const _mod1705 = tmp5(1705);
function MeasureMessage(message) {
  let closure_4;
  let items1;
  message = message.message;
  const onMeasure = message.onMeasure;
  const onMeasureTruncated = message.onMeasureTruncated;
  const disableReactionCreates = message.disableReactionCreates;
  let tmp = closure_17();
  react = tmp;
  let obj = message(onMeasureTruncated[13]);
  const result = 0.5 * obj.useMediaViewerDimensions().height;
  let c5 = result;
  const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
  const memo = react.useMemo(() => {
    let c0;
    let obj2;
    function onLayout(nativeEvent) {
      const bound = Math.min(nativeEvent.nativeEvent.layout.height, closure_2_5);
      if (0 !== bound) {
        const tmp2 = c0;
        if (tmp2) {
          onMeasureTruncated(bound);
        } else {
          onMeasure(bound);
        }
      }
    }
    function modifyRow(arg0) {
      arg0.canAddNewReactions = !disableReactionCreates;
      arg0.contextType = message(onMeasureTruncated[11]).MessageContextType.MEDIA_VIEWER;
      const tmp = c0;
      if (tmp) {
        arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
      }
    }
    const obj = { full: obj2, truncated: { onLayout, modifyRow, rowGenerator, message, style: closure_4.dummyLayout } };
    message = false;
    obj2 = { onLayout, modifyRow, rowGenerator, message, style: closure_4.dummyLayout };
    message = true;
    return obj;
  }, items);
  let obj2 = { children: items1 };
  const obj3 = {};
  const tmp4 = onMeasure(onMeasureTruncated[14]);
  const merged = Object.assign(memo.full);
  items1 = [closure_13(tmp4, obj3), ];
  const obj4 = {};
  const tmp6 = onMeasure(onMeasureTruncated[14]);
  const merged1 = Object.assign(memo.truncated);
  items1[1] = closure_13(tmp6, obj4);
  return closure_15(closure_14, obj2);
}
function MeasureMessageAfterEntrance(entranceAnimationDriver) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp3;
  let tmp4;
  let tmp8;
  let tmp9;
  entranceAnimationDriver = entranceAnimationDriver.entranceAnimationDriver;
  const merged = Object.assign(entranceAnimationDriver, Object.assign({ entranceAnimationDriver: 0 }));
  [tmp3, tmp4] = _slicedToArray(react.useState(false), 2);
  const items = [closure_19, entranceAnimationDriver];
  let c0;
  [tmp8, tmp9] = items;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  const tmp7 = _mod1652;
  class MediaMessagePreviewTsx1 {
    constructor() {
      return closure_0.get() >= 1;
    }
  }
  const items1 = [tmp9];
  MediaMessagePreviewTsx1.__closure = items1;
  MediaMessagePreviewTsx1.__workletHash = 9963261096022;
  MediaMessagePreviewTsx1.__initData = tmp8;
  const items2 = [closure_20, , ];
  const useAnimatedReaction = tmp7.useAnimatedReaction;
  items2[1] = _mod1705.scheduleOnRN;
  items2[2] = tmp4;
  c0 = undefined;
  let c1;
  [tmp10, tmp11, tmp12] = items2;
  class MediaMessagePreviewTsx2 {
    constructor(arg0) {
      tmp = entranceAnimationDriver;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        flag = true;
        tmp4 = closure_0(closure_1, true);
      }
      return;
    }
  }
  const items3 = [tmp11, tmp12];
  MediaMessagePreviewTsx2.__closure = items3;
  MediaMessagePreviewTsx2.__workletHash = 11835366583947;
  MediaMessagePreviewTsx2.__initData = tmp10;
  const animatedReaction = useAnimatedReaction(MediaMessagePreviewTsx1, MediaMessagePreviewTsx2);
  let tmp14 = null;
  if (tmp3) {
    const obj = {};
    const merged1 = Object.assign(merged);
    tmp14 = map1(MeasureMessage, obj);
  }
  return tmp14;
}
let react = react_mod;
({ findNodeHandle: hasOwnProperty, ScrollView: metroRequire } = react_native);
let ThemeTypes = Constants.ThemeTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let obj = new RowGeneratorDefault();
let obj2 = { renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderEmbeds: false, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: false, renderReactions: true, renderAttachments: false, renderReplies: false, renderThreadEmbeds: false, renderPolls: false, renderForumPostActions: false, forcedTheme: ThemeTypes.DARK, forceHideSimpleEmbedContent: true };
obj.setOptions(obj2);
let createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles({ dummyLayout: { position: "absolute", top: 0, left: -9999, width: "100%", opacity: 0 } });
let closure_19 = { code: "(function MediaMessagePreviewTsx1(){let[entranceAnimationDriver]=this.__closure;return entranceAnimationDriver.get()>=1;})" };
let closure_20 = { code: "(function MediaMessagePreviewTsx2(isFinished){let[scheduleOnRN,setHasEntranceFinished]=this.__closure;if(isFinished){scheduleOnRN(setHasEntranceFinished,true);}})" };
createStyles = createStyles_mod;
let obj3 = { reactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT, reactionBorderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT, reactionTextColor: nativeDefault.colors.REACTION_TEXT_DEFAULT, activeReactionBackgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT, activeReactionBorderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT, activeReactionTextColor: nativeDefault.colors.REACTION_TEXT_REACTED_DEFAULT };
let closure_22 = createStyles.createNativeStyleProperties(obj3);
createStyles = createStyles_mod;
let obj4 = { editedColor: nativeDefault.colors.TEXT_MUTED, seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_23 = createStyles.createNativeStyleProperties(obj4);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx");

export default function MediaMessagePreview(channelId) {
  let c12;
  let closure_16;
  let closure_5;
  let closure_6;
  let flingUpRef;
  let full;
  let items9;
  let obj5;
  let onMeasureCollapsedHeight;
  let onMeasureFullHeight;
  let tmp7;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const onClose = channelId.onClose;
  const onTapMessage = channelId.onTapMessage;
  ({ onMeasureFullHeight, onMeasureCollapsedHeight, full } = channelId);
  ({ canExpand: closure_5, setScrollViewIsAtTop: closure_6, flingUpRef } = channelId);
  const flingDownRef = channelId.flingDownRef;
  const animationDriver = channelId.animationDriver;
  ThemeTypes = undefined;
  closure_22 = undefined;
  let tmp2 = onClose;
  const entranceAnimationDriver = channelId.entranceAnimationDriver;
  let tmp = channelId;
  let obj = channelId(onClose[18]);
  const isMediaViewerEntranceJankFixEnabled = obj.useIsMediaViewerEntranceJankFixEnabled();
  let obj2 = channelId(onClose[19]);
  const items = [animationDriver];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let channel;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  });
  let tmp5 = messageId;
  const disableReactionCreates = messageId(onClose[20])(stateFromStores).disableReactionCreates;
  const tmp6 = onTapMessage(full.useState(false), 2);
  [tmp7, c12] = tmp6;
  const tmp8 = onTapMessage(full.useState(false), 2);
  let closure_13 = tmp8[1];
  const first = tmp8[0];
  const ref = full.useRef(null);
  const tmp11 = onTapMessage(full.useState(null), 2);
  const first1 = tmp11[0];
  rowGenerator = tmp11[1];
  const effect = full.useEffect(() => {
    closure_16(hasOwnProperty(ref.current));
  }, []);
  const tmp14 = closure_22(ThemeTypes.ONYX);
  const reactionsTheme = tmp14;
  const tmp15 = closure_23(ThemeTypes.ONYX);
  const editedColor = tmp15.editedColor;
  const seeMoreLabelColor = tmp15.seeMoreLabelColor;
  const items1 = [first1, disableReactionCreates, editedColor, seeMoreLabelColor, tmp14, full, animationDriver];
  const callback = full.useCallback((message) => {
    let intl;
    message.canAddNewReactions = !disableReactionCreates;
    message.contextType = RowGeneratorTypes.MessageContextType.MEDIA_VIEWER;
    message.reactTag = first1;
    message.canAddNewReactions = !disableReactionCreates;
    message.message.feedbackColor = undefined;
    message.message.editedColor = editedColor;
    message.reactionsTheme = reactionsTheme;
    const tmp3 = full;
    if (!tmp3) {
      const obj = { numberOfLines: 3, expandable: true, seeMoreLabel: " " + intl.string(intl2.t["7qbp3B"]), seeMoreLabelColor, outAnimationDuration: Math.min(0.25 * animationDriver.get(), 0.1), outAnimation: "fade" };
      intl = tmp(1113).intl;
      const _HermesInternal = HermesInternal;
      const _Math = Math;
      message.truncation = obj;
    }
  }, items1);
  const items2 = [flingDownRef, stateFromStores, disableReactionCreates, flingUpRef];
  const items3 = [channelId, messageId];
  const obj3 = channelId(onClose[19]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    if (null != channelId) {
      if (null != messageId) {
        let message = MessageStore.getMessage(tmp, tmp2);
        if (message == null) {
          message = MessagePreviewStore.getMessage(tmp2);
        }
        if (message == null) {
          const getMessage = ForumPostMessagesStore.getMessage;
          const obj = SnowflakeUtilsDefault;
          const message1 = getMessage(obj.castMessageIdAsChannelId(tmp2));
          let firstMessage;
          if (message1 != null) {
            firstMessage = message1.firstMessage;
          }
          message = firstMessage;
        }
        if (message == null) {
          message = SearchMessageStore.getMessage(tmp2);
        }
        return message;
      }
    }
  }, items3);
  const tmp18 = onTapMessage(full.useState(0), 2);
  const first2 = tmp18[0];
  closure_22 = tmp18[1];
  const items4 = [full, first2];
  const callback1 = full.useCallback((arg0, arg1) => {
    closure_22(arg1);
  }, []);
  const items5 = [stateFromStores1, onClose];
  const callback2 = full.useCallback((nativeEvent) => {
    closure_13(true);
    let tmp3 = first2 > nativeEvent.nativeEvent.layout.height;
    const tmp2 = c12;
    if (tmp3) {
      tmp3 = full;
    }
    tmp2(tmp3);
  }, items4);
  const items6 = [stateFromStores1];
  const callback3 = full.useCallback((nativeEvent) => {
    let obj2;
    const obj = { channelId: obj2.getNativeSyntheticEventData(nativeEvent).channelId, message: stateFromStores1, closeMediaModal: onClose };
    const tmp = showMediaMessagePreviewActionSheetDefault;
    obj2 = MessageDataSnowflakeUtils;
    tmp(obj);
  }, items5);
  const items7 = [channelId, stateFromStores1, messageId];
  const callback4 = full.useCallback((arg0) => {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    }
  }, items6);
  const callback5 = full.useCallback((nativeEvent) => {
    let isBurst;
    let reaction;
    ({ reaction, isBurst } = nativeEvent.nativeEvent);
    if (null != stateFromStores1) {
      const channel = ChannelStore.getChannel(channelId);
      const tmp2 = null != channel && null != messageId;
      if (tmp2) {
        let tmp7 = null;
        const handleAddOrRemoveReaction = messages_MessagesUtils.handleAddOrRemoveReaction;
        const tmp3 = require;
        if (null != reaction) {
          const obj = { emoji: reaction.emoji };
          const merged = Object.assign(reaction);
          tmp7 = obj;
        }
        const result = handleAddOrRemoveReaction(tmp6, channel, tmp7, isBurst, tmp3(8509).ReactionLocations.MOBILE_MEDIA_VIEWER);
      }
    }
  }, items7);
  const items8 = [flingDownRef, flingUpRef];
  const callback6 = full.useCallback((nativeEvent) => {
    const url = nativeEvent.nativeEvent.url;
    const tmp = null != url && "" !== url;
    if (tmp) {
      const obj = { urlString: url };
      messageId(onClose[27])(obj);
    }
  }, []);
  let tmp28Result = null;
  if (null != stateFromStores1) {
    tmp28Result = null;
    if (null != stateFromStores) {
      const obj4 = { gesture: tmp26, children: first1(closure_6, obj5) };
      obj5 = {
        scrollEventThrottle: 16,
        onScroll(nativeEvent) {
              closure_6(nativeEvent.nativeEvent.contentOffset.y <= 0);
            },
        onLayout: callback2,
        onContentSizeChange: callback1,
        showsVerticalScrollIndicator: full,
        bounces: tmp7,
        children: items9
      };
      const GestureDetector = tmp(tmp2[28]).GestureDetector;
      const obj6 = {
        ref,
        onLongPressLink: callback6,
        onLongPressMessage: callback3,
        onTapMessage,
        onTapReaction: callback5,
        onTapSeeMore: onTapMessage,
        onTapTag: callback4,
        onTapLink(nativeEvent) {
              const tmp = closure_5;
              if (tmp) {
                const tmp2 = full;
                if (!tmp2) {
                  onTapMessage();
                }
              }
              let obj = handleMessagesTapLink;
              let obj2 = {
                allowWithinModal: true,
                chatInputRef: "Boolean",
                handleTransitionToThread(arg0, arg1, source) {
                  channel = channel.getChannel(arg1);
                  if (null != channel) {
                    const obj2 = { source, navigationReplace: false };
                    const obj = channelId(onClose[31]);
                    obj.transitionToThread(channel, obj2);
                  }
                },
                message: stateFromStores1,
                messageChannel: stateFromStores,
                selectedChannelId: channelId,
                tapLinkData: nativeEvent.nativeEvent
              };
              const result = obj.handleMessagesTapLink(obj2);
            },
        inverted: false
      };
      items9 = [closure_13(tmp5(tmp2[29]), obj6), ];
      const obj7 = { rowGenerator, modifyRow: callback, message: stateFromStores1 };
      items9[1] = closure_13(tmp5(tmp2[14]), obj7);
      const items10 = [closure_13(GestureDetector, obj4), ];
      let tmp33 = null;
      const tmp28 = first1;
      const tmp29 = ref;
      if (first) {
        let tmp30Result;
        if (isMediaViewerEntranceJankFixEnabled) {
          const obj8 = { entranceAnimationDriver, disableReactionCreates, message: stateFromStores1, onMeasure: onMeasureFullHeight, onMeasureTruncated: onMeasureCollapsedHeight };
          tmp30Result = tmp30(first2, obj8);
        } else {
          const obj9 = { disableReactionCreates, message: stateFromStores1, onMeasure: onMeasureFullHeight, onMeasureTruncated: onMeasureCollapsedHeight };
          tmp30Result = tmp30(editedColor, obj9);
        }
        tmp33 = tmp30Result;
      }
      const obj10 = { children: items10 };
      items10[1] = tmp33;
      tmp28Result = tmp28(tmp29, obj10);
    }
  }
  return tmp28Result;
};
