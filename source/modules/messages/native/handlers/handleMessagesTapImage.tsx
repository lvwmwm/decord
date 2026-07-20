// Module ID: 9952
// Function ID: 76900
// Name: handleMessagesTapImage
// Dependencies: []
// Exports: handleMessagesTapImage

// Module 9952 (handleMessagesTapImage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const MessageTypes = arg1(dependencyMap[3]).MessageTypes;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export const handleMessagesTapImage = function handleMessagesTapImage(tapImageData) {
  let allowWithinModal;
  let componentId;
  let componentMediaIndex;
  let embedId;
  let embedIndex;
  let flattenSourceResult;
  let index;
  let message;
  let messageChannel;
  let portal;
  let selectedChannelId;
  let showContextName;
  let sources;
  let type;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  const arg1 = embedId;
  ({ message, messageChannel, showContextName } = tapImageData);
  let importDefault;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    let obj = arg1(dependencyMap[4]);
    obj.markPortalAlive(portal);
  }
  if (true === allowWithinModal) {
    if ("attachment" !== type) {
      if ("embed" !== type) {
        if ("sticker" !== type) {
          if ("component" !== type) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unsupported thumbnail type: " + type);
            throw error;
          }
        }
      }
    }
    let tmp7 = message;
    if (message.type === MessageTypes.THREAD_STARTER_MESSAGE) {
      tmp7 = message;
      if (null != message.messageReference) {
        const message2 = messageByReference.getMessageByReference(message.messageReference).message;
        tmp7 = message;
        if (null != message2) {
          tmp7 = message2;
        }
      }
    }
    const messageReference = tmp7.messageReference;
    type = undefined;
    if (null != messageReference) {
      type = messageReference.type;
    }
    let tmp12 = tmp7;
    if (type === arg1(dependencyMap[6]).MessageReferenceTypes.FORWARD) {
      const first = tmp7.messageSnapshots[0];
      message = undefined;
      if (null != first) {
        message = first.message;
      }
      tmp12 = message;
    }
    const attachments = tmp7.attachments;
    const found = attachments.filter((flags) => !embedId(closure_2[7]).isThumbnailAttachment(flags));
    if ("attachment" === type) {
      if (index < found.length) {
        const obj3 = arg1(dependencyMap[7]);
        if (null == obj3.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
          if (null != tmp15.url) {
            if ("" !== tmp15.url) {
              importDefault(dependencyMap[8]).openURL(tmp15.url);
            }
          }
        }
      }
    }
    importDefault = -1;
    if ("embed" === type) {
      if (null != embedIndex) {
        importDefault = embedIndex;
        const obj8 = arg1(dependencyMap[7]);
        const result = obj8.extractMediaSourcesFromEmbed(tmp7, tmp12, tmp12.embeds[index], index, messageChannel.guild_id);
        let found2 = result;
        if (importDefault < result.length) {
          arg1(dependencyMap[7]).setMediaSourcePortal(result[closure_1], portal);
          found2 = result;
          const obj9 = arg1(dependencyMap[7]);
        }
      }
      if (-1 !== importDefault) {
        obj = { disableDownload: tmp51, initialSources: found2, initialIndex: importDefault, originViewOrOriginLayout: tapImageData.layout, analyticsSource: "Channel", channelId: messageChannel.id };
        let channelName;
        if (showContextName) {
          const obj10 = arg1(dependencyMap[11]);
          channelName = obj10.computeChannelName(messageChannel, closure_5, closure_4, false);
        }
        obj.contextName = channelName;
        let channelIcon;
        if (showContextName) {
          channelIcon = arg1(dependencyMap[12]).getChannelIcon(messageChannel);
          const obj11 = arg1(dependencyMap[12]);
        }
        obj.contextIcon = channelIcon;
        arg1(dependencyMap[10]).openMediaModal(obj);
        const obj16 = arg1(dependencyMap[10]);
      }
    }
    if ("component" === type) {
      if (null == componentId) {
        return null;
      } else {
        if (null != embedId) {
          if ("" !== embedId) {
            const embeds = tmp12.embeds;
            const found1 = embeds.find((id) => id.id === embedId);
            if (null != found1) {
              let components = found1.components;
            }
          }
          if (null != components) {
            if (0 !== components.length) {
              const obj14 = arg1(dependencyMap[7]);
              const result1 = obj14.extractMediaSourcesFromComponent(tmp7, components, messageChannel.guild_id, arg1(dependencyMap[9]).asComponentId(componentId), componentMediaIndex);
              if (null != result1) {
                ({ sources, initialIndex: closure_1 } = result1);
                arg1(dependencyMap[7]).setMediaSourcePortal(sources[closure_1], portal);
                found2 = sources;
                const obj7 = arg1(dependencyMap[7]);
              }
              const obj15 = arg1(dependencyMap[9]);
            }
          }
        }
        components = tmp12.components;
      }
    } else {
      const result2 = arg1(dependencyMap[7]).extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
      let num7 = 0;
      found2 = result2;
      if (0 < result2.length) {
        while (true) {
          let tmp22 = arg1;
          let tmp23 = dependencyMap;
          let obj4 = arg1(dependencyMap[7]);
          flattenSourceResult = obj4.flattenSource(result2[num7]);
          let tmp25 = num7;
          let tmp26 = tmp27;
          if (null != flattenSourceResult) {
            tmp26 = tmp27;
            if (flattenSourceResult.accessoryType === type) {
              let mediaViewIndex = flattenSourceResult.mediaViewIndex;
              let mediaIndex = mediaViewIndex;
              if (null == mediaViewIndex) {
                mediaIndex = flattenSourceResult.mediaIndex;
              }
              tmp26 = mediaViewIndex;
              if (mediaIndex === index) {
                break;
              }
            }
          }
          num7 = num7 + 1;
          let tmp27 = tmp26;
          found2 = result2;
        }
        if (flattenSourceResult.noCarousel) {
          const items = [result2[num7]];
          importDefault = 0;
          arg1(dependencyMap[7]).setMediaSourcePortal(items[0], portal);
          found2 = items;
          const obj6 = arg1(dependencyMap[7]);
        } else {
          importDefault = num7;
          arg1(dependencyMap[7]).setMediaSourcePortal(result2[num7], portal);
          found2 = result2.filter((closure_1) => {
            const flattenSourceResult = embedId(closure_2[7]).flattenSource(closure_1);
            let tmp3 = !tmp2;
            if (!(null != flattenSourceResult && !flattenSourceResult.noCarousel)) {
              tmp3 = closure_1 >= arg1;
            }
            if (tmp3) {
              closure_1 = closure_1 - 1;
            }
            return null != flattenSourceResult && !flattenSourceResult.noCarousel;
          });
          const obj5 = arg1(dependencyMap[7]);
        }
      }
      const obj13 = arg1(dependencyMap[7]);
    }
  } else {
    const obj2 = arg1(dependencyMap[5]);
  }
};
