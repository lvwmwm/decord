// Module ID: 12125
// Function ID: 93399
// Name: rowModifierShared
// Dependencies: []
// Exports: default

// Module 12125 (rowModifierShared)
function rowModifierShared(arg0, arg1) {
  arg0.canAddNewReactions = !arg1;
  arg0.contextType = arg1(dependencyMap[11]).MessageContextType.MEDIA_VIEWER;
}
function MeasureMessage(message) {
  message = message.message;
  const arg1 = message;
  const onMeasure = message.onMeasure;
  const importDefault = onMeasure;
  const onMeasureTruncated = message.onMeasureTruncated;
  const dependencyMap = onMeasureTruncated;
  const disableReactionCreates = message.disableReactionCreates;
  let closure_3 = disableReactionCreates;
  const tmp = callback4();
  const React = tmp;
  let obj = arg1(dependencyMap[13]);
  const result = 0.5 * obj.useMediaViewerDimensions().height;
  const items = [disableReactionCreates, result, message, onMeasureTruncated, onMeasure, tmp.dummyLayout];
  const memo = React.useMemo(() => {
    function generateChatItemProps(arg0) {
      return {
        onLayout(nativeEvent) {
          const bound = Math.min(nativeEvent.nativeEvent.layout.height, closure_5);
          if (0 !== bound) {
            if (nativeEvent) {
              callback2(bound);
            } else {
              callback(bound);
            }
          }
        },
        modifyRow(arg0) {
          callback3(arg0, closure_3);
          if (arg0) {
            arg0.truncation = { flexDirection: "channelId", marginRight: "channelId", marginBottom: "channelId" };
          }
        },
        rowGenerator: closure_16,
        message: arg0,
        style: dummyLayout.dummyLayout
      };
    }
    return { full: generateChatItemProps(false), truncated: generateChatItemProps(true) };
  }, items);
  obj = {};
  obj = {};
  const merged = Object.assign(memo.full);
  const items1 = [callback2(importDefault(dependencyMap[14]), obj), ];
  const obj1 = {};
  const tmp4 = importDefault(dependencyMap[14]);
  const merged1 = Object.assign(memo.truncated);
  items1[1] = callback2(importDefault(dependencyMap[14]), obj1);
  obj.children = items1;
  return callback3(closure_14, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ findNodeHandle: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const ThemeTypes = arg1(dependencyMap[8]).ThemeTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult();
let obj = { 190295266: true, 1310491158: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", 1446667104: null, 2075939498: "8321c7573efa1c0254c4a9b939ac0953", 1415674813: "ko.messages.8321c7573efa1c0254c4a9b939ac0953.compiled.messages", -654114733: "jsona", 1716400491: true, -866363734: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k", -1521307412: true, 1641849646: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", -1194765590: null, -1218378100: "06ce787c33fd0c9cd370f243d3462ef5", -2041431455: "lt.messages.06ce787c33fd0c9cd370f243d3462ef5.compiled.messages", 1635499425: "jsona", 101274478: "user-code-input", 956368524: true, 1689709154: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", forcedTheme: ThemeTypes.DARK };
importDefaultResult.setOptions(obj);
const tmp3 = arg1(dependencyMap[9]);
let closure_17 = arg1(dependencyMap[12]).createStyles({ dummyLayout: {} });
const obj3 = arg1(dependencyMap[12]);
obj = { reactionBackgroundColor: importDefault(dependencyMap[15]).colors.REACTION_BACKGROUND_DEFAULT, reactionBorderColor: importDefault(dependencyMap[15]).colors.REACTION_BORDER_DEFAULT, reactionTextColor: importDefault(dependencyMap[15]).colors.REACTION_TEXT_DEFAULT, activeReactionBackgroundColor: importDefault(dependencyMap[15]).colors.REACTION_BACKGROUND_REACTED_DEFAULT, activeReactionBorderColor: importDefault(dependencyMap[15]).colors.REACTION_BORDER_REACTED_DEFAULT, activeReactionTextColor: importDefault(dependencyMap[15]).colors.REACTION_TEXT_REACTED_DEFAULT };
let closure_18 = arg1(dependencyMap[12]).createNativeStyleProperties(obj);
const obj4 = arg1(dependencyMap[12]);
const obj6 = arg1(dependencyMap[12]);
let closure_19 = obj6.createNativeStyleProperties({ editedColor: importDefault(dependencyMap[15]).colors.TEXT_MUTED, seeMoreLabelColor: importDefault(dependencyMap[15]).colors.TEXT_DEFAULT });
const obj1 = { editedColor: importDefault(dependencyMap[15]).colors.TEXT_MUTED, seeMoreLabelColor: importDefault(dependencyMap[15]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx");

export default function MediaMessagePreview(channelId) {
  let flingUpRef;
  let onMeasureCollapsedHeight;
  let onMeasureFullHeight;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  const onClose = channelId.onClose;
  const dependencyMap = onClose;
  const onTapMessage = channelId.onTapMessage;
  let callback = onTapMessage;
  const full = channelId.full;
  const React = full;
  ({ canExpand: closure_5, setScrollViewIsAtTop: closure_6, flingUpRef } = channelId);
  let closure_7 = flingUpRef;
  const flingDownRef = channelId.flingDownRef;
  let closure_8 = flingDownRef;
  const animationDriver = channelId.animationDriver;
  let closure_9 = animationDriver;
  ({ onMeasureFullHeight, onMeasureCollapsedHeight } = channelId);
  let obj = arg1(dependencyMap[16]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel;
    if (null != channelId) {
      channel = animationDriver.getChannel(channelId);
    }
    return channel;
  });
  let closure_10 = stateFromStores;
  const disableReactionCreates = importDefault(dependencyMap[17])(stateFromStores).disableReactionCreates;
  let closure_11 = disableReactionCreates;
  const tmp2 = callback(React.useState(false), 2);
  const constants = tmp2[1];
  const tmp3 = callback(React.useState(false), 2);
  let callback2 = tmp3[1];
  const ref = React.useRef(null);
  const tmp5 = callback(React.useState(null), 2);
  const first = tmp5[0];
  let closure_16 = tmp5[1];
  const effect = React.useEffect(() => {
    callback3(callback(ref.current));
  }, []);
  const tmp8 = callback5(constants.MIDNIGHT);
  let closure_17 = tmp8;
  const tmp9 = callback6(constants.MIDNIGHT);
  const editedColor = tmp9.editedColor;
  let callback5 = editedColor;
  const seeMoreLabelColor = tmp9.seeMoreLabelColor;
  let callback6 = seeMoreLabelColor;
  const items1 = [first, disableReactionCreates, editedColor, seeMoreLabelColor, tmp8, full, animationDriver];
  callback = React.useCallback((message) => {
    stateFromStores1(message, disableReactionCreates);
    message.reactTag = first;
    message.canAddNewReactions = !disableReactionCreates;
    message.message.feedbackColor = undefined;
    message.message.editedColor = editedColor;
    message.reactionsTheme = tmp8;
    if (!full) {
      const obj = {};
      const intl = channelId(onClose[18]).intl;
      const _HermesInternal = HermesInternal;
      obj.seeMoreLabel = " " + intl.string(channelId(onClose[18]).t.7qbp3B);
      obj.seeMoreLabelColor = seeMoreLabelColor;
      const _Math = Math;
      obj.outAnimationDuration = Math.min(0.25 * animationDriver.get(), 0.1);
      obj.outAnimation = "fade";
      message.truncation = obj;
    }
  }, items1);
  let obj1 = arg1(dependencyMap[16]);
  const items2 = [closure_8, closure_10, closure_11, closure_7];
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
  const rowModifierShared = stateFromStores1;
  const tmp12 = callback(React.useState(0), 2);
  const first1 = tmp12[0];
  const MeasureMessage = first1;
  let closure_22 = tmp12[1];
  const items4 = [full, first1];
  const callback1 = React.useCallback((arg0, arg1) => {
    callback4(arg1);
  }, []);
  const items5 = [stateFromStores1, onClose];
  callback2 = React.useCallback((nativeEvent) => {
    callback2(true);
    let tmp3 = first1 > nativeEvent.nativeEvent.layout.height;
    if (tmp3) {
      tmp3 = full;
    }
    closure_12(tmp3);
  }, items4);
  const items6 = [stateFromStores1];
  const callback3 = React.useCallback((nativeEvent) => {
    const obj = {};
    const tmp = messageId(onClose[20]);
    obj.channelId = channelId(onClose[21]).getNativeSyntheticEventData(nativeEvent).channelId;
    obj.message = stateFromStores1;
    obj.closeMediaModal = onClose;
    tmp(obj);
  }, items5);
  const items7 = [channelId, stateFromStores1, messageId];
  const callback4 = React.useCallback((arg0) => {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    }
  }, items6);
  callback5 = React.useCallback((nativeEvent) => {
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
  callback6 = React.useCallback((nativeEvent) => {
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
                  const channel = channel.getChannel(channelId);
                  if (null != channel) {
                    let obj = callback(closure_2[28]);
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
      const items9 = [callback2(importDefault(dependencyMap[26]), obj2), ];
      const obj3 = { rowGenerator: closure_16, modifyRow: callback, message: stateFromStores1 };
      items9[1] = callback2(importDefault(dependencyMap[14]), obj3);
      obj1.children = items9;
      obj.children = first(closure_6, obj1);
      const items10 = [callback2(arg1(dependencyMap[25]).GestureDetector, obj), ];
      let tmp33 = null;
      if (tmp3[0]) {
        const obj4 = { disableReactionCreates, message: stateFromStores1, onMeasure: onMeasureFullHeight, onMeasureTruncated: onMeasureCollapsedHeight };
        tmp33 = callback2(MeasureMessage, obj4);
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
