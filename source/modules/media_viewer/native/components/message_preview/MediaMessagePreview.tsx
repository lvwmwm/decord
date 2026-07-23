// Module ID: 12243
// Function ID: 95576
// Name: rowModifierShared
// Dependencies: [57, 31, 27, 5656, 5660, 1348, 4349, 8331, 653, 33, 7621, 7808, 4130, 8296, 9293, 689, 566, 10350, 1212, 21, 12244, 9528, 9312, 7005, 9525, 5217, 10023, 9483, 4138, 2]
// Exports: default

// Module 12243 (rowModifierShared)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "handleMessagesTapURLLink";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import importDefaultResult from "RowManager";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
const require = arg1;
function rowModifierShared(arg0, arg1) {
  arg0.canAddNewReactions = !arg1;
  arg0.contextType = require(7808) /* MediaGalleryItemType */.MessageContextType.MEDIA_VIEWER;
}
function MeasureMessage(message) {
  message = message.message;
  const onMeasure = message.onMeasure;
  const onMeasureTruncated = message.onMeasureTruncated;
  const disableReactionCreates = message.disableReactionCreates;
  const tmp = callback3();
  const React = tmp;
  let obj = message(onMeasureTruncated[13]);
  const result = 0.5 * obj.useMediaViewerDimensions().height;
  const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
  const memo = React.useMemo(() => {
    function generateChatItemProps(arg0) {
      let closure_0 = arg0;
      return {
        onLayout(nativeEvent) {
          const bound = Math.min(nativeEvent.nativeEvent.layout.height, outer2_5);
          if (0 !== bound) {
            if (closure_0) {
              outer2_2(bound);
            } else {
              outer2_1(bound);
            }
          }
        },
        modifyRow(arg0) {
          outer3_20(arg0, outer2_3);
          if (closure_0) {
            arg0.truncation = { numberOfLines: 3, expandable: false, seeMoreLabel: "" };
          }
        },
        rowGenerator: outer2_16,
        message: outer1_0,
        style: outer1_4.dummyLayout
      };
    }
    return { full: generateChatItemProps(false), truncated: generateChatItemProps(true) };
  }, items);
  obj = {};
  obj = {};
  const merged = Object.assign(memo.full);
  const items1 = [callback(onMeasure(onMeasureTruncated[14]), obj), ];
  const obj1 = {};
  const tmp4 = onMeasure(onMeasureTruncated[14]);
  const merged1 = Object.assign(memo.truncated);
  items1[1] = callback(onMeasure(onMeasureTruncated[14]), obj1);
  obj.children = items1;
  return callback2(closure_14, obj);
}
({ findNodeHandle: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
importDefaultResult = new importDefaultResult();
let obj = { renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderEmbeds: false, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: false, renderReactions: true, renderAttachments: false, renderReplies: false, renderThreadEmbeds: false, renderPolls: false, renderForumPostActions: false, forcedTheme: ThemeTypes.DARK, forceHideSimpleEmbedContent: true };
importDefaultResult.setOptions(obj);
let closure_17 = _createForOfIteratorHelperLoose.createStyles({ dummyLayout: { position: "absolute", top: 0, left: -9999, bottom: 0, width: "100%", opacity: 0 } });
obj = { reactionBackgroundColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BACKGROUND_DEFAULT, reactionBorderColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BORDER_DEFAULT, reactionTextColor: require("_createForOfIteratorHelperLoose").colors.REACTION_TEXT_DEFAULT, activeReactionBackgroundColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BACKGROUND_REACTED_DEFAULT, activeReactionBorderColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BORDER_REACTED_DEFAULT, activeReactionTextColor: require("_createForOfIteratorHelperLoose").colors.REACTION_TEXT_REACTED_DEFAULT };
let closure_18 = _createForOfIteratorHelperLoose.createNativeStyleProperties(obj);
let closure_19 = _createForOfIteratorHelperLoose.createNativeStyleProperties({ editedColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, seeMoreLabelColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT });
let obj1 = { editedColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, seeMoreLabelColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx");

export default function MediaMessagePreview(channelId) {
  let closure_5;
  let closure_6;
  let flingUpRef;
  let onMeasureCollapsedHeight;
  let onMeasureFullHeight;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const onClose = channelId.onClose;
  const onTapMessage = channelId.onTapMessage;
  const full = channelId.full;
  ({ canExpand: closure_5, setScrollViewIsAtTop: closure_6, flingUpRef } = channelId);
  const flingDownRef = channelId.flingDownRef;
  const animationDriver = channelId.animationDriver;
  ({ onMeasureFullHeight, onMeasureCollapsedHeight } = channelId);
  let obj = channelId(onClose[16]);
  const items = [animationDriver];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel;
    if (null != channelId) {
      channel = animationDriver.getChannel(channelId);
    }
    return channel;
  });
  const disableReactionCreates = messageId(onClose[17])(stateFromStores).disableReactionCreates;
  let tmp2 = onTapMessage(full.useState(false), 2);
  const ThemeTypes = tmp2[1];
  let tmp3 = onTapMessage(full.useState(false), 2);
  let callback = tmp3[1];
  const ref = full.useRef(null);
  const tmp5 = onTapMessage(full.useState(null), 2);
  const first = tmp5[0];
  let closure_16 = tmp5[1];
  const effect = full.useEffect(() => {
    callback2(outer1_5(ref.current));
  }, []);
  const tmp8 = editedColor(ThemeTypes.MIDNIGHT);
  let closure_17 = tmp8;
  const tmp9 = seeMoreLabelColor(ThemeTypes.MIDNIGHT);
  editedColor = tmp9.editedColor;
  seeMoreLabelColor = tmp9.seeMoreLabelColor;
  const items1 = [first, disableReactionCreates, editedColor, seeMoreLabelColor, tmp8, full, animationDriver];
  callback = full.useCallback((message) => {
    stateFromStores1(message, disableReactionCreates);
    message.reactTag = first;
    message.canAddNewReactions = !disableReactionCreates;
    message.message.feedbackColor = undefined;
    message.message.editedColor = editedColor;
    message.reactionsTheme = closure_17;
    if (!full) {
      const obj = { numberOfLines: 3, expandable: true };
      const intl = channelId(onClose[18]).intl;
      const _HermesInternal = HermesInternal;
      obj.seeMoreLabel = " " + intl.string(channelId(onClose[18]).t["7qbp3B"]);
      obj.seeMoreLabelColor = seeMoreLabelColor;
      const _Math = Math;
      obj.outAnimationDuration = Math.min(0.25 * animationDriver.get(), 0.1);
      obj.outAnimation = "fade";
      message.truncation = obj;
    }
  }, items1);
  let obj1 = channelId(onClose[16]);
  const items2 = [flingDownRef, stateFromStores, disableReactionCreates, flingUpRef];
  const items3 = [channelId, messageId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    if (null != channelId) {
      if (null != messageId) {
        let message = stateFromStores.getMessage(channelId, messageId);
        if (null == message) {
          message = disableReactionCreates.getMessage(messageId);
        }
        if (null == message) {
          let firstMessage;
          const message1 = flingUpRef.getMessage(messageId(onClose[19]).castMessageIdAsChannelId(messageId));
          if (null != message1) {
            firstMessage = message1.firstMessage;
          }
          message = firstMessage;
          const obj = messageId(onClose[19]);
        }
        if (null == message) {
          message = flingDownRef.getMessage(messageId);
        }
        return message;
      }
    }
  }, items3);
  const tmp12 = onTapMessage(full.useState(0), 2);
  const first1 = tmp12[0];
  let closure_22 = tmp12[1];
  const items4 = [full, first1];
  const callback1 = full.useCallback((arg0, arg1) => {
    callback3(arg1);
  }, []);
  const items5 = [stateFromStores1, onClose];
  const callback2 = full.useCallback((nativeEvent) => {
    callback(true);
    let tmp3 = first1 > nativeEvent.nativeEvent.layout.height;
    if (tmp3) {
      tmp3 = full;
    }
    closure_12(tmp3);
  }, items4);
  const items6 = [stateFromStores1];
  const callback3 = full.useCallback((nativeEvent) => {
    const obj = {};
    const tmp = messageId(onClose[20]);
    obj.channelId = channelId(onClose[21]).getNativeSyntheticEventData(nativeEvent).channelId;
    obj.message = stateFromStores1;
    obj.closeMediaModal = onClose;
    tmp(obj);
  }, items5);
  const items7 = [channelId, stateFromStores1, messageId];
  const callback4 = full.useCallback((arg0) => {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    }
  }, items6);
  const callback5 = full.useCallback((nativeEvent) => {
    let isBurst;
    let reaction;
    ({ reaction, isBurst } = nativeEvent.nativeEvent);
    if (null != stateFromStores1) {
      const channel = animationDriver.getChannel(channelId);
      let tmp2 = null != channel;
      if (tmp2) {
        tmp2 = null != messageId;
      }
      if (tmp2) {
        let obj = channelId(onClose[22]);
        let tmp6 = null;
        if (null != reaction) {
          obj = {};
          const merged = Object.assign(reaction);
          obj["emoji"] = reaction.emoji;
          tmp6 = obj;
        }
        const result = obj.handleAddOrRemoveReaction(tmp5, channel, tmp6, isBurst, channelId(onClose[23]).ReactionLocations.MOBILE_MEDIA_VIEWER);
      }
    }
  }, items7);
  const items8 = [flingDownRef, flingUpRef];
  const callback6 = full.useCallback((nativeEvent) => {
    const url = nativeEvent.nativeEvent.url;
    let tmp = null != url;
    if (tmp) {
      tmp = "" !== url;
    }
    if (tmp) {
      const obj = { urlString: url };
      messageId(onClose[24])(obj);
    }
  }, []);
  let tmp22Result = null;
  if (null != stateFromStores1) {
    tmp22Result = null;
    if (null != stateFromStores) {
      obj = {};
      obj = { gesture: tmp20 };
      obj1 = {
        scrollEventThrottle: 16,
        onScroll(nativeEvent) {
              nativeEvent = nativeEvent.nativeEvent;
              const velocity = nativeEvent.velocity;
              let tmp2 = 0 === nativeEvent.contentOffset.y;
              if (tmp2) {
                let y;
                if (null != velocity) {
                  y = velocity.y;
                }
                let num = 0;
                if (null != y) {
                  num = y;
                }
                tmp2 = 0 === num;
              }
              closure_6(tmp2);
            },
        onLayout: callback2,
        onContentSizeChange: callback1,
        showsVerticalScrollIndicator: full,
        bounces: tmp2[0]
      };
      const obj2 = {
        ref,
        onLongPressLink: callback6,
        onLongPressMessage: callback3,
        onTapMessage,
        onTapReaction: callback5,
        onTapSeeMore: onTapMessage,
        onTapTag: callback4,
        onTapLink(nativeEvent) {
              if (closure_5) {
                if (!full) {
                  onTapMessage();
                }
              }
              let obj = channelId(onClose[27]);
              obj = {
                allowWithinModal: true,
                chatInputRef: undefined,
                handleTransitionToThread(arg0, channelId, source) {
                  const channel = animationDriver.getChannel(channelId);
                  if (null != channel) {
                    let obj = channelId(onClose[28]);
                    obj = { source, navigationReplace: false };
                    obj.transitionToThread(channel, obj);
                  }
                },
                message: stateFromStores1,
                messageChannel: stateFromStores,
                selectedChannelId: channelId,
                tapLinkData: nativeEvent.nativeEvent
              };
              const result = obj.handleMessagesTapLink(obj);
            },
        inverted: false
      };
      const items9 = [callback(messageId(onClose[26]), obj2), ];
      const obj3 = { rowGenerator: closure_16, modifyRow: callback, message: stateFromStores1 };
      items9[1] = callback(messageId(onClose[14]), obj3);
      obj1.children = items9;
      obj.children = first(closure_6, obj1);
      const items10 = [callback(channelId(onClose[25]).GestureDetector, obj), ];
      let tmp33 = null;
      if (tmp3[0]) {
        const obj4 = { disableReactionCreates, message: stateFromStores1, onMeasure: onMeasureFullHeight, onMeasureTruncated: onMeasureCollapsedHeight };
        tmp33 = callback(first1, obj4);
      }
      items10[1] = tmp33;
      obj.children = items10;
      tmp22Result = first(ref, obj);
      const tmp22 = first;
      const tmp23 = ref;
    }
  }
  return tmp22Result;
};
