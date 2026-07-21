// Module ID: 6838
// Function ID: 53995
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6838 (_isNativeReflectConstruct)
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
      const tmp2 = createCompositeKey(message);
      if (null != closure_19[tmp2]) {
        function handleMediaScanCompleteReporting(attachments, UPDATE, setAt) {
          if (UPDATE === callback(closure_2[15]).TimeoutCancelSource.UPDATE) {
            attachments = attachments.attachments;
            if (null == attachments) {
              attachments = [];
            }
            let embeds = attachments.embeds;
            if (null == embeds) {
              embeds = [];
            }
            const found = attachments.filter((media) => {
              let obj = callback(closure_2[16]);
              obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Attachment, media };
              return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.EXPLICIT, obj);
            });
            const found1 = embeds.filter((media) => {
              let obj = callback(closure_2[16]);
              obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Embed, media };
              return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.EXPLICIT, obj);
            });
            let obj = callback(closure_2[15]);
            obj = {};
            ({ id: obj2.messageId, channel_id: obj2.channelId } = attachments);
            obj.numOfAttachments = attachments.length;
            obj.numOfEmbeds = embeds.length;
            obj.numOfExplicitAttachments = found.length;
            obj.numOfExplicitEmbeds = found1.length;
            const result = obj.trackExplicitMediaScanComplete(obj);
          }
          callback(closure_2[15]).trackScanTiming(setAt, UPDATE);
        }(message, UPDATE, closure_19[tmp2].setAt);
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_19[tmp2].timeout);
        delete r0[r1];
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
    const obj = arg1(dependencyMap[20]);
    if (arg1) {
      const result = obj.sendMultiChannelMessagesForScanning(found1);
    } else {
      const result1 = obj.sendMessagesForScanning(found1[0].channel_id, found1.map((id) => id.id));
    }
  }
}
function withoutScheduledTimeout(arg0) {
  return null == closure_19[closure_21(undefined, arg0)];
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
        let result = found1(closure_2[16]).isEligibleForScanning(message);
        if (result) {
          result = found1(closure_2[16]).hasUnscannedMedia(message);
          const obj2 = found1(closure_2[16]);
        }
        return result;
      });
      let found1 = found.filter(withoutScheduledTimeout);
    }
    isMessageUpdate = found1;
    const item = found1.forEach((arg0) => {
      const found1 = arg0;
      const tmp = callback(arg0);
      if (null == closure_19[tmp]) {
        let obj = tmp(closure_2[21]);
        obj = { name: found1(closure_2[22]).MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE };
        obj.increment(obj);
        obj = {};
        const _Date = Date;
        obj.setAt = Date.now();
        const _setTimeout = setTimeout;
        obj.timeout = setTimeout(() => {
          let attachmentIds;
          let embedIds;
          if (callback2(arg0, arg0(closure_2[15]).TimeoutCancelSource.TIMEOUT)) {
            const message = message.getMessage(tmp.channel_id, tmp.id);
            if (null != message) {
              let obj = arg0(closure_2[16]);
              const unscannedMediaIds = obj.getUnscannedMediaIds(message);
              ({ attachmentIds, embedIds } = unscannedMediaIds);
              obj = {};
              ({ channel_id: obj3.channelId, id: obj3.messageId } = tmp);
              obj.attachmentIds = attachmentIds;
              obj.embedIds = embedIds;
              const result = arg0(closure_2[15]).trackScanningTimedOut(obj);
              const obj2 = arg0(closure_2[15]);
            }
            obj = { type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT" };
            ({ id: obj5.messageId, channel_id: obj5.channelId } = tmp);
            callback(closure_2[19]).dispatch(obj);
            const obj4 = callback(closure_2[19]);
          }
        }, 3000);
        closure_19[tmp] = obj;
      }
    });
    if (!tmp) {
      const _Set = Set;
      const set = new Set(found1.map((channel_id) => channel_id.channel_id));
      tmp = set.size > 1;
    }
    const importDefault = tmp;
    if (tmp2) {
      const _setTimeout = setTimeout;
      const _Math = Math;
      const timerId = setTimeout(() => {

      }, 800 * Math.random());
    } else {
      sendForScanning(found1, tmp);
    }
  }
  const found2 = messagesPendingScan.filter((components) => found1(closure_2[16]).isEligibleForScanning(components));
  found1 = found2.filter(withoutScheduledTimeout);
}
function aggregateExplicitMediaCounts(arr) {
  const channelLookup = {};
  const arg1 = channelLookup;
  const messageLookup = {};
  const importDefault = messageLookup;
  const item = arr.forEach((channel_id) => {
    if (null == channelLookup[channel_id.channel_id]) {
      channelLookup[channel_id.channel_id] = { -9223372036854775808: "ERROR", 9223372036854775807: "ERROR", 0: "NOT_RESPONDER", 9223372036854775807: "NOT_RESPONDER" };
    }
    if (null == messageLookup[channel_id.id]) {
      const obj = { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004133626490780079, "Bool(true)": 241979899612687240000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004667261426588731, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008571792480470071, "Bool(true)": -72460078556573560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004665176946464018, "Bool(true)": 1252592858220265000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, channelId: channel_id.channel_id };
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
    const unscannedMediaIds = channelLookup(closure_2[16]).getUnscannedMediaIds(channel_id);
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
        let obj = callback(closure_2[16]);
        obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.EXPLICIT, obj);
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
        let obj = callback(closure_2[16]);
        obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.EXPLICIT, obj);
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
        let obj = callback(closure_2[16]);
        obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.GORE, obj);
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
        let obj = callback(closure_2[16]);
        obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.GORE, obj);
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
        let obj = callback(closure_2[16]);
        obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Attachment, media };
        return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.SELF_HARM, obj);
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
        let obj = callback(closure_2[16]);
        obj = { type: callback(closure_2[18]).ObscuredMediaTypes.Embed, media };
        return obj.isMediaFlaggedForHarmType(callback(closure_2[17]).ContentHarmType.SELF_HARM, obj);
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
  const tmp = function getScanningAttributesForMessages(arr) {
    const found = arr.filter((message) => {
      let result = callback(closure_2[23]).hasAttachmentsEmbedsComponentsOrSnapshots(message);
      const obj = callback(closure_2[23]);
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
              const obj2 = callback(closure_2[16]);
            }
            const obj = callback(closure_2[23]);
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
    const arr4 = callback2(closure_2[24])(tmp2, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr4.filter((message) => callback(closure_2[16]).hasUnscannedMedia(message));
    const tmp9 = callback3(arr4);
    return { messagesPendingScan: found2, attributesByMessageId: tmp9.messageLookup, attributesByChannelId: tmp9.channelLookup };
  }(firstMessages);
  const messagesPendingScan = tmp.messagesPendingScan;
  ({ attributesByChannelId, attributesByMessageId } = tmp);
  const entries = importDefault(dependencyMap[25]).entries(attributesByChannelId);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = callback(closure_2[15]);
    obj = { channelId: tmp, numOfAttachments: tmp2.numOfAttachments, numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan, numOfEmbeds: tmp2.numOfEmbeds, numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan };
    const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj);
  });
  const obj = importDefault(dependencyMap[25]);
  const entries1 = importDefault(dependencyMap[25]).entries(attributesByMessageId);
  const item1 = entries1.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = callback(closure_2[15]);
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
  const tmp = function getScanningAttributesForChannelMessages(arr) {
    const found = arr.filter((message) => {
      let result = callback(closure_2[23]).hasAttachmentsEmbedsComponentsOrSnapshots(message);
      if (result) {
        result = 0 !== callback(closure_2[16]).getEnabledHarmTypesForMessage(message);
        const obj2 = callback(closure_2[16]);
      }
      return result;
    });
    const mapped = arr.map((type) => {
      if (set.has(type.type)) {
        if (null != type.messageReference) {
          const messageByReference = messageByReference.getMessageByReference(type.messageReference);
          if (messageByReference.state === constants.LOADED) {
            if (null != messageByReference.message) {
              if (obj.hasAttachmentsEmbedsComponentsOrSnapshots(messageByReference.message)) {
                if (0 !== obj2.getEnabledHarmTypesForMessage(messageByReference.message)) {
                  return messageByReference.message;
                }
                const obj2 = callback(closure_2[16]);
              }
              const obj = callback(closure_2[23]);
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
    const arr4 = callback2(closure_2[24])(tmp2, (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id);
    const found2 = arr4.filter((message) => callback(closure_2[16]).hasUnscannedMedia(message));
    const tmp9 = callback3(arr4);
    return { messagesPendingScan: found2, attributesByChannelId: tmp9.channelLookup, attributesByMessageId: tmp9.messageLookup };
  }(messages);
  const messagesPendingScan = tmp.messagesPendingScan;
  ({ attributesByChannelId, attributesByMessageId } = tmp);
  const entries = importDefault(dependencyMap[25]).entries(attributesByChannelId);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = callback(closure_2[15]);
    obj = { channelId: tmp, numOfAttachments: tmp2.numOfAttachments, numOfAttachmentsPendingScan: tmp2.numOfAttachmentsPendingScan, numOfEmbeds: tmp2.numOfEmbeds, numOfEmbedsPendingScan: tmp2.numOfEmbedsPendingScan };
    const result = obj.trackExplicitMediaRedactableMessagedLoaded(obj);
  });
  const obj = importDefault(dependencyMap[25]);
  const entries1 = importDefault(dependencyMap[25]).entries(attributesByMessageId);
  const item1 = entries1.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = callback(closure_2[15]);
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
            let obj = arg1(dependencyMap[15]);
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
            const obj2 = arg1(dependencyMap[15]);
          }
        }
        if (!obj3.hasUnscannedMedia(message)) {
          message = store3.getMessage(message.channel_id, message.id);
          if (null == message) {
            message = message2.getMessage(message.id, message.channel_id);
          }
          if (null == message) {
            const message1 = message.getMessage(message.channel_id, message.id);
            let message2;
            if (null != message1) {
              message2 = message1.message;
            }
            message = message2;
          }
          let hasUnscannedMediaResult = null == message;
          if (!hasUnscannedMediaResult) {
            const obj4 = arg1(dependencyMap[16]);
            hasUnscannedMediaResult = obj4.hasUnscannedMedia(arg1(dependencyMap[26]).updateMessageRecord(message, message));
            const obj5 = arg1(dependencyMap[26]);
          }
          if (!hasUnscannedMediaResult) {
            maybeCancelTimeout(message, arg1(dependencyMap[15]).TimeoutCancelSource.UPDATE);
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
      const obj7 = arg1(dependencyMap[16]);
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
          const channel = channel.getChannel(channelId);
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
        const obj2 = arg1(dependencyMap[16]);
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
  let closure_0 = false;
  const item = data.forEach((messages) => {
    const tmp = callback(closure_2[27])(messages.messages);
    closure_0 = callback2(callback(closure_2[24])(callback(closure_2[27])(messages.messages), (id, id2) => id.id === id2.id && id.channel_id === id2.channel_id)) || closure_0;
  });
  return closure_0;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  return processMessagesFromAction(pins.map((message) => message.message));
}
function handleForumPostsLoad(threads) {
  threads = threads.threads;
  const arg1 = threads;
  let tmp2 = null != threads;
  if (tmp2) {
    let tmp4 = store5.getGuildId() === tmp;
    if (tmp4) {
      const keys = importDefault(dependencyMap[25]).keys(threads);
      tmp4 = processMessagesFromAction(keys.map((arg0) => threads[arg0].first_message));
      const obj = importDefault(dependencyMap[25]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const ReferencedMessageState = arg1(dependencyMap[5]).ReferencedMessageState;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = arg1(dependencyMap[13]).MessageTypesWithLazyLoadedReferences;
const UserSettingsTypes = arg1(dependencyMap[14]).UserSettingsTypes;
let closure_19 = {};
let tmp2 = (arg0) => {
  class ExplicitMediaManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ExplicitMediaManager);
      items1 = [...items];
      obj = closure_6(ExplicitMediaManager);
      tmp2 = closure_5;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { LOAD_MESSAGES_SUCCESS: closure_32, LOAD_FORUM_POSTS: closure_35, LOAD_THREADS_SUCCESS: closure_36, LOAD_ARCHIVED_THREADS_SUCCESS: closure_36, SIDEBAR_VIEW_CHANNEL: closure_37, MESSAGE_CREATE: closure_31, MESSAGE_UPDATE: closure_30, LOGOUT: closure_22, SEARCH_MESSAGES_SUCCESS: closure_33, MOD_VIEW_SEARCH_MESSAGES_SUCCESS: closure_33, CHANNEL_SELECT: closure_38, LOAD_PINNED_MESSAGES_SUCCESS: closure_34, USER_SETTINGS_PROTO_UPDATE: closure_39, CHANNEL_RTC_UPDATE_CHAT_OPEN: closure_40 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = ExplicitMediaManager;
  callback2(ExplicitMediaManager, arg0);
  return callback(ExplicitMediaManager);
}(importDefault(dependencyMap[28]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManager.tsx");

export default tmp2;
export const MESSAGE_SCAN_TIMEOUT = 3000;
export const MAX_TIMEOUT_FOR_JITTER = 800;
