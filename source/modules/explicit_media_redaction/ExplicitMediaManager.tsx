// Module ID: 6842
// Function ID: 54047
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 6829, 1194, 5659, 1348, 4349, 1906, 3947, 6843, 653, 662, 6834, 5670, 5673, 5675, 686, 6844, 6836, 6841, 6845, 6846, 21, 4351, 4291, 5078, 2]

// Module 6842 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import timeoutAttachmentsAndEmbedsForMessage from "timeoutAttachmentsAndEmbedsForMessage";
import ContentHarmType from "ContentHarmType";
import ContentHarmTypeChannel from "ContentHarmTypeChannel";
import closure_8 from "_isNativeReflectConstruct";
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { MessageTypesWithLazyLoadedReferences as closure_17 } from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createCompositeKey(channel_id) {
  return "" + channel_id.channel_id + ":" + channel_id.id;
}
function resetManager() {
  const values = Object.values(closure_19);
  const item = values.forEach((timeout) => {
    clearTimeout(timeout.timeout);
  });
  closure_19 = {};
}
function maybeCancelTimeout(message, UPDATE) {
  if (null != message.id) {
    if (null != message.channel_id) {
      const tmp4 = createCompositeKey(message);
      if (null != dependencyMap[tmp4]) {
        (function handleMediaScanCompleteReporting(attachments, UPDATE, setAt) {
          if (UPDATE === outer1_0(outer1_2[15]).TimeoutCancelSource.UPDATE) {
            attachments = attachments.attachments;
            if (null == attachments) {
              attachments = [];
            }
            let embeds = attachments.embeds;
            if (null == embeds) {
              embeds = [];
            }
            const found = attachments.filter((media) => {
              let obj = outer2_0(outer2_2[16]);
              obj = { type: outer2_0(outer2_2[18]).ObscuredMediaTypes.Attachment, media };
              return obj.isMediaFlaggedForHarmType(outer2_0(outer2_2[17]).ContentHarmType.EXPLICIT, obj);
            });
            const found1 = embeds.filter((media) => {
              let obj = outer2_0(outer2_2[16]);
              obj = { type: outer2_0(outer2_2[18]).ObscuredMediaTypes.Embed, media };
              return obj.isMediaFlaggedForHarmType(outer2_0(outer2_2[17]).ContentHarmType.EXPLICIT, obj);
            });
            let obj = outer1_0(outer1_2[15]);
            obj = {};
            ({ id: obj2.messageId, channel_id: obj2.channelId } = attachments);
            obj.numOfAttachments = attachments.length;
            obj.numOfEmbeds = embeds.length;
            obj.numOfExplicitAttachments = found.length;
            obj.numOfExplicitEmbeds = found1.length;
            const result = obj.trackExplicitMediaScanComplete(obj);
          }
          outer1_0(outer1_2[15]).trackScanTiming(setAt, UPDATE);
        })(message, UPDATE, dependencyMap[tmp4].setAt);
        const _clearTimeout = clearTimeout;
        clearTimeout(dependencyMap[tmp4].timeout);
        delete tmp[tmp2];
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function sendForScanning(found1, arg1) {
  if (0 !== found1.length) {
    const obj = require(6844) /* reportFalsePositive */;
    if (arg1) {
      const result = obj.sendMultiChannelMessagesForScanning(found1);
    } else {
      const result1 = obj.sendMessagesForScanning(found1[0].channel_id, found1.map((id) => id.id));
    }
  }
}
function withoutScheduledTimeout(arg0) {
  return null == dependencyMap[createCompositeKey(undefined, arg0)];
}
function handleUnscannedMessages(messagesPendingScan, isMessageUpdate) {
  let obj = isMessageUpdate;
  if (null == isMessageUpdate) {
    obj = {};
  }
  const forceBatchScan = obj.forceBatchScan;
  let tmp = undefined !== forceBatchScan && forceBatchScan;
  const jitter = obj.jitter;
  if (null != isMessageUpdate) {
    if (isMessageUpdate.isMessageUpdate) {
      const found = messagesPendingScan.filter((message) => {
        let result = found1(outer1_2[16]).isEligibleForScanning(message);
        if (result) {
          result = found1(outer1_2[16]).hasUnscannedMedia(message);
          const obj2 = found1(outer1_2[16]);
        }
        return result;
      });
      let found1 = found.filter(withoutScheduledTimeout);
    }
    const item = found1.forEach((arg0) => {
      let closure_0 = arg0;
      const tmp = outer1_21(arg0);
      if (null == outer1_19[tmp]) {
        let obj = tmp(outer1_2[21]);
        obj = { name: found1(outer1_2[22]).MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE };
        obj.increment(obj);
        obj = {};
        const _Date = Date;
        obj.setAt = Date.now();
        const _setTimeout = setTimeout;
        obj.timeout = setTimeout(() => {
          let attachmentIds;
          let embedIds;
          if (outer2_23(closure_0, found1(outer2_2[15]).TimeoutCancelSource.TIMEOUT)) {
            const message = outer2_13.getMessage(tmp.channel_id, tmp.id);
            if (null != message) {
              let obj = found1(outer2_2[16]);
              const unscannedMediaIds = obj.getUnscannedMediaIds(message);
              ({ attachmentIds, embedIds } = unscannedMediaIds);
              obj = {};
              ({ channel_id: obj3.channelId, id: obj3.messageId } = tmp);
              obj.attachmentIds = attachmentIds;
              obj.embedIds = embedIds;
              const result = found1(outer2_2[15]).trackScanningTimedOut(obj);
              const obj2 = found1(outer2_2[15]);
            }
            obj = { type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT" };
            ({ id: obj5.messageId, channel_id: obj5.channelId } = tmp);
            callback(outer2_2[19]).dispatch(obj);
            const obj4 = callback(outer2_2[19]);
          }
        }, 3000);
        outer1_19[tmp] = obj;
      }
    });
    if (!tmp) {
      const _Set = Set;
      const set = new Set(found1.map((channel_id) => channel_id.channel_id));
      tmp = set.size > 1;
    }
    const importDefault = tmp;
    if (tmp2) {
      let _setTimeout = setTimeout;
      const _Math = Math;
      const timerId = setTimeout(() => {
        outer1_24(found1.filter((arg0) => null != outer2_19[outer2_21(undefined, arg0)]), closure_1);
      }, 800 * Math.random());
    } else {
      sendForScanning(found1, tmp);
    }
  }
  const found2 = messagesPendingScan.filter((components) => found1(outer1_2[16]).isEligibleForScanning(components));
  found1 = found2.filter(withoutScheduledTimeout);
}
function aggregateExplicitMediaCounts(arr) {
  const channelLookup = {};
  const messageLookup = {};
  const item = arr.forEach((channel_id) => {
    if (null == channelLookup[channel_id.channel_id]) {
      channelLookup[channel_id.channel_id] = { numOfAttachments: 0, numOfAttachmentsPendingScan: 0, numOfEmbeds: 0, numOfEmbedsPendingScan: 0 };
    }
    if (null == messageLookup[channel_id.id]) {
      let obj = { channelId: channel_id.channel_id, numOfAttachments: 0, numOfSelfHarmAttachments: 0, numOfGoreAttachments: 0, numOfExplicitAttachments: 0, numOfEmbeds: 0, numOfSelfHarmEmbeds: 0, numOfGoreEmbeds: 0, numOfExplicitEmbeds: 0 };
      messageLookup[channel_id.id] = obj;
    }
    const attachments = channel_id.attachments;
    let length;
    if (null != attachments) {
      length = attachments.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    const embeds = channel_id.embeds;
    let length1;
    if (null != embeds) {
      length1 = embeds.length;
    }
    let num2 = 0;
    if (null != length1) {
      num2 = length1;
    }
    const unscannedMediaIds = channelLookup(outer1_2[16]).getUnscannedMediaIds(channel_id);
    channelLookup[channel_id.channel_id].numOfAttachments = channelLookup[channel_id.channel_id].numOfAttachments + num;
    channelLookup[channel_id.channel_id].numOfEmbeds = channelLookup[channel_id.channel_id].numOfEmbeds + num2;
    channelLookup[channel_id.channel_id].numOfAttachmentsPendingScan = channelLookup[channel_id.channel_id].numOfAttachmentsPendingScan + unscannedMediaIds.attachmentIds.length;
    channelLookup[channel_id.channel_id].numOfEmbedsPendingScan = channelLookup[channel_id.channel_id].numOfEmbedsPendingScan + unscannedMediaIds.embedIds.length;
    messageLookup[channel_id.id].numOfAttachments = messageLookup[channel_id.id].numOfAttachments + num;
    messageLookup[channel_id.id].numOfEmbeds = messageLookup[channel_id.id].numOfEmbeds + num2;
    const attachments1 = channel_id.attachments;
    let length2;
    if (null != attachments1) {
      length2 = attachments1.filter((media) => {
        let obj = channelLookup(outer2_2[16]);
        obj = { type: channelLookup(outer2_2[18]).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(channelLookup(outer2_2[17]).ContentHarmType.EXPLICIT, obj);
      }).length;
    }
    let num3 = 0;
    if (null != length2) {
      num3 = length2;
    }
    messageLookup[channel_id.id].numOfExplicitAttachments = num3;
    const embeds1 = channel_id.embeds;
    let length3;
    if (null != embeds1) {
      length3 = embeds1.filter((media) => {
        let obj = channelLookup(outer2_2[16]);
        obj = { type: channelLookup(outer2_2[18]).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(channelLookup(outer2_2[17]).ContentHarmType.EXPLICIT, obj);
      }).length;
    }
    let num4 = 0;
    if (null != length3) {
      num4 = length3;
    }
    messageLookup[channel_id.id].numOfExplicitEmbeds = num4;
    const attachments2 = channel_id.attachments;
    let length4;
    if (null != attachments2) {
      length4 = attachments2.filter((media) => {
        let obj = channelLookup(outer2_2[16]);
        obj = { type: channelLookup(outer2_2[18]).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(channelLookup(outer2_2[17]).ContentHarmType.GORE, obj);
      }).length;
    }
    let num5 = 0;
    if (null != length4) {
      num5 = length4;
    }
    messageLookup[channel_id.id].numOfGoreAttachments = num5;
    const embeds2 = channel_id.embeds;
    let length5;
    if (null != embeds2) {
      length5 = embeds2.filter((media) => {
        let obj = channelLookup(outer2_2[16]);
        obj = { type: channelLookup(outer2_2[18]).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(channelLookup(outer2_2[17]).ContentHarmType.GORE, obj);
      }).length;
    }
    let num6 = 0;
    if (null != length5) {
      num6 = length5;
    }
    messageLookup[channel_id.id].numOfGoreEmbeds = num6;
    const attachments3 = channel_id.attachments;
    let length6;
    if (null != attachments3) {
      length6 = attachments3.filter((media) => {
        let obj = channelLookup(outer2_2[16]);
        obj = { type: channelLookup(outer2_2[18]).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(channelLookup(outer2_2[17]).ContentHarmType.SELF_HARM, obj);
      }).length;
    }
    let num7 = 0;
    if (null != length6) {
      num7 = length6;
    }
    messageLookup[channel_id.id].numOfSelfHarmAttachments = num7;
    const embeds3 = channel_id.embeds;
    let length7;
    if (null != embeds3) {
      length7 = embeds3.filter((media) => {
        let obj = channelLookup(outer2_2[16]);
        obj = { type: channelLookup(outer2_2[18]).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(channelLookup(outer2_2[17]).ContentHarmType.SELF_HARM, obj);
      }).length;
    }
    let num8 = 0;
    if (null != length7) {
      num8 = length7;
    }
    messageLookup[channel_id.id].numOfSelfHarmEmbeds = num8;
  });
  return { channelLookup, messageLookup };
}
function processMessagesFromAction(firstMessages, isMessageUpdate) {
  let attributesByChannelId;
  let attributesByMessageId;
  const tmp = (function getScanningAttributesForMessages(arr) {
    const found = arr.filter((message) => {
      let result = outer2_0(outer2_2[23]).hasAttachmentsEmbedsComponentsOrSnapshots(message);
      const obj = outer2_0(outer2_2[23]);
      if (result) {
        result = 0 !== obj2.getEnabledHarmTypesForMessage(message);
      }
      return result;
    });
    const mapped = arr.map((referenced_message) => {
      if (null != referenced_message) {
        if ("referenced_message" in referenced_message) {
          if (null != referenced_message.referenced_message) {
            if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(referenced_message.referenced_message)) {
              if (0 !== obj2.getEnabledHarmTypesForMessage(referenced_message.referenced_message)) {
                return referenced_message.referenced_message;
              }
              obj2 = outer2_0(outer2_2[16]);
            }
            obj = outer2_0(outer2_2[23]);
          }
        }
      }
    });
    const found1 = mapped.filter((arg0) => null != arg0);
    let tmp2 = found;
    if (found1.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(found, 0));
      tmp2 = items;
    }
    const arr4 = outer1_1(outer1_2[24])(tmp2, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr4.filter((message) => outer2_0(outer2_2[16]).hasUnscannedMedia(message));
    const tmp9 = outer1_27(arr4);
    return { messagesPendingScan: found2, attributesByMessageId: tmp9.messageLookup, attributesByChannelId: tmp9.channelLookup };
  })(firstMessages);
  const messagesPendingScan = tmp.messagesPendingScan;
  ({ attributesByChannelId, attributesByMessageId } = tmp);
  const entries = importDefault(21).entries(attributesByChannelId);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = outer1_0(outer1_2[15]);
    obj = { channelId: tmp, numOfAttachments: tmp2.numOfAttachments, numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan, numOfEmbeds: tmp2.numOfEmbeds, numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan };
    const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj);
  });
  let obj = importDefault(21);
  const entries1 = importDefault(21).entries(attributesByMessageId);
  const item1 = entries1.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = outer1_0(outer1_2[15]);
    obj = { messageId: tmp, channelId: tmp2.channelId, numOfAttachments: tmp2.numOfAttachments, numOfGoreAttachments: tmp2.numOfGoreAttachments, numOfExplicitAttachments: tmp2.numOfExplicitAttachments, numOfSelfHarmAttachments: tmp2.numOfSelfHarmAttachments, numOfEmbeds: tmp2.numOfEmbeds, numOfGoreEmbeds: tmp2.numOfGoreEmbeds, numOfExplicitEmbeds: tmp2.numOfExplicitEmbeds, numOfSelfHarmEmbeds: tmp2.numOfSelfHarmEmbeds };
    const result = obj.trackRedactableMessageLoaded(obj);
  });
  let flag = messagesPendingScan.length > 0;
  if (flag) {
    handleUnscannedMessages(messagesPendingScan, isMessageUpdate);
    flag = true;
  }
  return flag;
}
function processChannelMessagesFromAction(messages) {
  let attributesByChannelId;
  let attributesByMessageId;
  const tmp = (function getScanningAttributesForChannelMessages(arr) {
    const found = arr.filter((message) => {
      let result = outer2_0(outer2_2[23]).hasAttachmentsEmbedsComponentsOrSnapshots(message);
      if (result) {
        result = 0 !== outer2_0(outer2_2[16]).getEnabledHarmTypesForMessage(message);
        const obj2 = outer2_0(outer2_2[16]);
      }
      return result;
    });
    const mapped = arr.map((type) => {
      if (outer2_17.has(type.type)) {
        if (null != type.messageReference) {
          const messageByReference = outer2_8.getMessageByReference(type.messageReference);
          if (messageByReference.state === outer2_9.LOADED) {
            if (null != messageByReference.message) {
              if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(messageByReference.message)) {
                if (0 !== obj2.getEnabledHarmTypesForMessage(messageByReference.message)) {
                  return messageByReference.message;
                }
                obj2 = outer2_0(outer2_2[16]);
              }
              obj = outer2_0(outer2_2[23]);
            }
          }
        }
      }
    });
    const found1 = mapped.filter((arg0) => null != arg0);
    let tmp2 = found;
    if (found1.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(found, 0));
      tmp2 = items;
    }
    const arr4 = outer1_1(outer1_2[24])(tmp2, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr4.filter((message) => outer2_0(outer2_2[16]).hasUnscannedMedia(message));
    const tmp9 = outer1_27(arr4);
    return { messagesPendingScan: found2, attributesByChannelId: tmp9.channelLookup, attributesByMessageId: tmp9.messageLookup };
  })(messages);
  const messagesPendingScan = tmp.messagesPendingScan;
  ({ attributesByChannelId, attributesByMessageId } = tmp);
  const entries = importDefault(21).entries(attributesByChannelId);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = outer1_0(outer1_2[15]);
    obj = { channelId: tmp, numOfAttachments: tmp2.numOfAttachments, numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan, numOfEmbeds: tmp2.numOfEmbeds, numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan };
    const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj);
  });
  let obj = importDefault(21);
  const entries1 = importDefault(21).entries(attributesByMessageId);
  const item1 = entries1.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = outer1_0(outer1_2[15]);
    obj = { messageId: tmp, channelId: tmp2.channelId, numOfAttachments: tmp2.numOfAttachments, numOfGoreAttachments: tmp2.numOfGoreAttachments, numOfSelfHarmAttachments: tmp2.numOfSelfHarmAttachments, numOfExplicitAttachments: tmp2.numOfExplicitAttachments, numOfEmbeds: tmp2.numOfEmbeds, numOfGoreEmbeds: tmp2.numOfGoreEmbeds, numOfExplicitEmbeds: tmp2.numOfExplicitEmbeds, numOfSelfHarmEmbeds: tmp2.numOfSelfHarmEmbeds };
    const result = obj.trackRedactableMessageLoaded(obj);
  });
  let flag = messagesPendingScan.length > 0;
  if (flag) {
    handleUnscannedMessages(messagesPendingScan);
    flag = true;
  }
  return flag;
}
function handleMessageUpdate(message) {
  message = message.message;
  if (null != message.channel_id) {
    if (null != message.id) {
      if (obj7.getChannelIdAndAuthorIdFromMessage(message).authorId !== store.getId()) {
        if (null == message.embeds) {
          if (null == message.attachments) {
            let obj = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
            if (!obj.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
          }
        }
        const embeds = message.embeds;
        let length;
        if (null != embeds) {
          length = embeds.length;
        }
        if (0 === length) {
          const attachments = message.attachments;
          let length1;
          if (null != attachments) {
            length1 = attachments.length;
          }
          if (0 === length1) {
            if (!obj2.hasMessageSnapshotsWithAttachmentsOrEmbeds(message)) {
              return false;
            }
            obj2 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
          }
        }
        if (!obj3.hasUnscannedMedia(message)) {
          message = store3.getMessage(message.channel_id, message.id);
          if (null == message) {
            message = message2.getMessage(message.id, message.channel_id);
          }
          if (null == message) {
            const message1 = message.getMessage(message.channel_id, message.id);
            message2 = undefined;
            if (null != message1) {
              message2 = message1.message;
            }
            message = message2;
          }
          let hasUnscannedMediaResult = null == message;
          if (!hasUnscannedMediaResult) {
            const obj4 = require(5670) /* _createForOfIteratorHelperLoose */;
            hasUnscannedMediaResult = obj4.hasUnscannedMedia(require(4351) /* createMinimalMessageRecord */.updateMessageRecord(message, message));
            const obj5 = require(4351) /* createMinimalMessageRecord */;
          }
          if (!hasUnscannedMediaResult) {
            maybeCancelTimeout(message, require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.TimeoutCancelSource.UPDATE);
          }
        }
        const channelId = store4.getChannelId();
        if (message.channel_id !== channelId) {
          if (message.channel_id !== tmp25) {
            return false;
          }
        }
        const message3 = store3.getMessage(message.channel_id, message.id);
        let tmp28 = null != message3;
        if (tmp28) {
          const items = [message3];
          obj = { isMessageUpdate: true };
          tmp28 = processMessagesFromAction(items, obj);
        }
        return tmp28;
      }
      obj7 = require(5670) /* _createForOfIteratorHelperLoose */;
    }
  }
  return false;
}
function handleMessageCreate(optimistic) {
  let channelId;
  let message;
  ({ channelId, message } = optimistic);
  if (!optimistic.optimistic) {
    if (!optimistic.isPushNotification) {
      if (null != channelId) {
        if (obj2.getChannelIdAndAuthorIdFromMessage(message).authorId !== store.getId()) {
          channelId = store4.getChannelId();
          const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId);
          channel = channel.getChannel(channelId);
          if (channelId !== channelId) {
            if (channelId !== currentSidebarChannelId) {
              return false;
            }
          }
          let isPrivateResult;
          if (null != channel) {
            isPrivateResult = channel.isPrivate();
          }
          let tmp3 = null == isPrivateResult || isPrivateResult;
          let memberCount;
          if (null != channel) {
            memberCount = channel.memberCount;
          }
          let tmp5 = null == memberCount;
          if (!tmp5) {
            let memberCount1;
            if (null != channel) {
              memberCount1 = channel.memberCount;
            }
            tmp5 = memberCount1 > 100;
          }
          const items = [message];
          const obj = {};
          if (tmp3) {
            tmp3 = tmp5;
          }
          obj.jitter = tmp3;
          return processMessagesFromAction(items, obj);
        }
        obj2 = require(5670) /* _createForOfIteratorHelperLoose */;
      }
    }
  }
  return false;
}
function handleMessagesLoad(arg0) {
  let channelId;
  let messages;
  ({ channelId, messages } = arg0);
  if (null != channelId) {
    if (null != messages) {
      channelId = store4.getChannelId();
      let tmp4 = channelId === channelId || channelId === store2.getCurrentSidebarChannelId(channelId);
      if (tmp4) {
        tmp4 = processMessagesFromAction(messages);
      }
      return tmp4;
    }
  }
  return false;
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let c0 = false;
  const item = data.forEach((messages) => {
    const tmp = outer1_1(outer1_2[27])(messages.messages);
    c0 = outer1_28(outer1_1(outer1_2[24])(outer1_1(outer1_2[27])(messages.messages), (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id)) || c0;
  });
  return c0;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  return processMessagesFromAction(pins.map((message) => message.message));
}
function handleForumPostsLoad(threads) {
  threads = threads.threads;
  let tmp2 = null != threads;
  if (tmp2) {
    let tmp4 = store5.getGuildId() === tmp;
    if (tmp4) {
      const keys = importDefault(21).keys(threads);
      tmp4 = processMessagesFromAction(keys.map((arg0) => threads[arg0].first_message));
      const obj = importDefault(21);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function handleThreadsLoad(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  let tmp2 = null != firstMessages;
  if (tmp2) {
    const tmp4 = store5.getGuildId() !== tmp;
    let tmp5 = !tmp4;
    if (!tmp4) {
      const obj = { forceBatchScan: true };
      tmp5 = processMessagesFromAction(firstMessages, obj);
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function handleSidebarViewChannel(channelId) {
  channelId = channelId.channelId;
  let tmp = null != channelId;
  if (tmp) {
    tmp = maybeScanMessagesForChannelId(channelId);
  }
  return tmp;
}
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  let tmp = null != channelId;
  if (tmp) {
    const tmp3 = channelId !== store4.getChannelId();
    let tmp4 = !tmp3;
    if (!tmp3) {
      tmp4 = maybeScanMessagesForChannelId(channelId);
    }
    tmp = tmp4;
  }
  return tmp;
}
function handleUserSettingsUpdate(local) {
  if (local.local) {
    if (local.settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS) {
      const channelId = store4.getChannelId();
      let tmp5 = null != channelId;
      if (tmp5) {
        tmp5 = maybeScanMessagesForChannelId(channelId);
      }
      return tmp5;
    }
  }
  return false;
}
function handleVoiceChannelChatOpen(chatOpen) {
  let tmp3 = !tmp2;
  if (!!chatOpen.chatOpen) {
    tmp3 = maybeScanMessagesForChannelId(tmp);
  }
  return tmp3;
}
function maybeScanMessagesForChannelId(channelId) {
  const messages = store3.getMessages(channelId);
  let tmp = 0 !== messages.length;
  if (tmp) {
    tmp = processChannelMessagesFromAction(messages);
  }
  return tmp;
}
let closure_19 = {};
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManager.tsx");

export default tmp2;
export const MESSAGE_SCAN_TIMEOUT = 3000;
export const MAX_TIMEOUT_FOR_JITTER = 800;
