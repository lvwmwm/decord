// Module ID: 9999
// Function ID: 77176
// Name: handleMessagesTapImage
// Dependencies: [6829, 3767, 1849, 653, 8323, 9526, 671, 8320, 3827, 4359, 8318, 4320, 4593, 2]
// Exports: handleMessagesTapImage

// Module 9999 (handleMessagesTapImage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { MessageTypes } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

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
  let num7;
  let portal;
  let selectedChannelId;
  let showContextName;
  let sources;
  let type;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  num7 = undefined;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    let obj = embedId(8323);
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
    if (type === embedId(671).MessageReferenceTypes.FORWARD) {
      const first = tmp7.messageSnapshots[0];
      message = undefined;
      if (null != first) {
        message = first.message;
      }
      tmp12 = message;
    }
    const attachments = tmp7.attachments;
    const found = attachments.filter((flags) => !embedId(outer1_2[7]).isThumbnailAttachment(flags));
    if ("attachment" === type) {
      if (index < found.length) {
        const obj3 = embedId(8320);
        if (null == obj3.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
          if (null != tmp15.url) {
            if ("" !== tmp15.url) {
              num7(3827).openURL(tmp15.url);
            }
          }
        }
      }
    }
    num7 = -1;
    if ("embed" === type) {
      if (null != embedIndex) {
        num7 = embedIndex;
        const obj8 = embedId(8320);
        const result = obj8.extractMediaSourcesFromEmbed(tmp7, tmp12, tmp12.embeds[index], index, messageChannel.guild_id);
        let found2 = result;
        if (num7 < result.length) {
          embedId(8320).setMediaSourcePortal(result[num7], portal);
          found2 = result;
          const obj9 = embedId(8320);
        }
      }
      if (-1 !== num7) {
        obj = { disableDownload: tmp51, initialSources: found2, initialIndex: num7, originViewOrOriginLayout: tapImageData.layout, analyticsSource: "Channel", channelId: messageChannel.id };
        let channelName;
        if (showContextName) {
          const obj10 = embedId(4320);
          channelName = obj10.computeChannelName(messageChannel, closure_5, closure_4, false);
        }
        obj.contextName = channelName;
        let channelIcon;
        if (showContextName) {
          channelIcon = embedId(4593).getChannelIcon(messageChannel);
          const obj11 = embedId(4593);
        }
        obj.contextIcon = channelIcon;
        embedId(8318).openMediaModal(obj);
        const obj16 = embedId(8318);
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
              const obj14 = embedId(8320);
              const result1 = obj14.extractMediaSourcesFromComponent(tmp7, components, messageChannel.guild_id, embedId(4359).asComponentId(componentId), componentMediaIndex);
              if (null != result1) {
                ({ sources, initialIndex: num7 } = result1);
                embedId(8320).setMediaSourcePortal(sources[num7], portal);
                found2 = sources;
                const obj7 = embedId(8320);
              }
              const obj15 = embedId(4359);
            }
          }
        }
        components = tmp12.components;
      }
    } else {
      const result2 = embedId(8320).extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
      num7 = 0;
      found2 = result2;
      if (0 < result2.length) {
        while (true) {
          let tmp22 = embedId;
          let tmp23 = dependencyMap;
          let obj4 = embedId(8320);
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
          tmp27 = tmp26;
          found2 = result2;
        }
        if (flattenSourceResult.noCarousel) {
          const items = [result2[num7]];
          num7 = 0;
          embedId(8320).setMediaSourcePortal(items[0], portal);
          found2 = items;
          const obj6 = embedId(8320);
        } else {
          embedId(8320).setMediaSourcePortal(result2[num7], portal);
          found2 = result2.filter((closure_1) => {
            const flattenSourceResult = embedId(outer1_2[7]).flattenSource(closure_1);
            let tmp3 = !tmp2;
            if (!(null != flattenSourceResult && !flattenSourceResult.noCarousel)) {
              tmp3 = closure_1 >= arg1;
            }
            if (tmp3) {
              closure_1 = closure_1 - 1;
            }
            return null != flattenSourceResult && !flattenSourceResult.noCarousel;
          });
          const obj5 = embedId(8320);
        }
      }
      const obj13 = embedId(8320);
    }
  } else {
    const obj2 = embedId(9526);
  }
};
