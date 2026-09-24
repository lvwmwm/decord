// Module ID: 11702
// Function ID: 11703
// Name: handleMessagesTapImage
// Dependencies: [7872, 4441, 1376, 1078, 8576, 11700, 1101, 8573, 4487, 5021, 8567, 4943, 5273, 2]
// Exports: handleMessagesTapImage

// Module 11702 (handleMessagesTapImage)
import LinkingDefault from "Linking" /* 4487 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8573 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7872 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const MessageTypes = fn(1078).MessageTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export const handleMessagesTapImage = function handleMessagesTapImage(tapImageData) {
  let flattenSourceResult;
  let tmp20;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  importDefault = undefined;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    embedId(8576).markPortalAlive(portal);
    const obj = embedId(8576);
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
        const message2 = ReferencedMessageStore.getMessageByReference(message.messageReference).message;
        tmp7 = message;
        if (null != message2) {
          tmp7 = message2;
        }
      }
    }
    const messageReference = tmp7.messageReference;
    let type1;
    if (messageReference != null) {
      type1 = messageReference.type;
    }
    let tmp12 = tmp7;
    if (type1 !== embedId(1101).MessageReferenceTypes.FORWARD) {
      const attachments = tmp7.attachments;
      const found = attachments.filter((item) => !embedId(8573).isThumbnailAttachment(item));
      if ("attachment" === type) {
        if (index < found.length) {
          const tmp10Result = tmp10(8573);
          if (null == tmp10Result.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
            if (null != tmp15.url) {
              if ("" !== tmp15.url) {
                LinkingDefault.openURL(tmp15.url);
              }
            }
          }
        }
      }
      importDefault = -1;
      if ("embed" === type) {
        if (null != embedIndex) {
          importDefault = embedIndex;
          const tmp10Result7 = tmp10(8573);
          const result = tmp10Result7.extractMediaSourcesFromEmbed(tmp7, tmp12, tmp12.embeds[index], index, messageChannel.guild_id);
          let found2 = result;
          let tmp25 = tmp10;
          if (importDefault < result.length) {
            tmp10(8573).setMediaSourcePortal(result[importDefault], portal);
            found2 = result;
            tmp25 = tmp10;
            const tmp10Result8 = tmp10(8573);
          }
        }
        if (-1 !== importDefault) {
          const obj3 = { disableDownload: tmp44, initialSources: found2, initialIndex: importDefault, originViewOrOriginLayout: tapImageData.layout, analyticsSource: "Channel", channelId: messageChannel.id, contextName: null, contextIcon: null };
          let channelName;
          if (showContextName) {
            const tmp25Result3 = tmp25(4943);
            channelName = tmp25Result3.computeChannelName(messageChannel, UserStore, RelationshipStore, false);
          }
          obj3.contextName = channelName;
          let channelIcon;
          if (showContextName) {
            channelIcon = tmp25(5273).getChannelIcon(messageChannel);
            const tmp25Result4 = tmp25(5273);
          }
          obj3.contextIcon = channelIcon;
          tmp25(8567).openMediaModal(obj3);
          const tmp25Result = tmp25(8567);
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
              if (found1 != null) {
                let components = found1.components;
              }
            }
            if (null != components) {
              if (0 !== components.length) {
                const tmp10Result9 = tmp10(8573);
                const result1 = tmp10Result9.extractMediaSourcesFromComponent(tmp7, components, messageChannel.guild_id, tmp10(5021).asComponentId(componentId), componentMediaIndex);
                if (null != result1) {
                  ({ sources, initialIndex: closure_1 } = result1);
                  tmp10(8573).setMediaSourcePortal(sources[importDefault], portal);
                  found2 = sources;
                  tmp25 = tmp10;
                  const tmp10Result11 = tmp10(8573);
                }
                const tmp10Result10 = tmp10(5021);
              }
            }
          }
          components = tmp12.components;
        }
      } else {
        const result2 = tmp10(8573).extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
        let num2 = 0;
        found2 = result2;
        tmp25 = tmp10;
        if (0 < result2.length) {
          while (true) {
            tmp20 = embedId;
            let obj4 = embedId(8573);
            flattenSourceResult = obj4.flattenSource(result2[num2]);
            if (null != flattenSourceResult) {
              if (flattenSourceResult.accessoryType === type) {
                let mediaIndex = flattenSourceResult.mediaViewIndex;
                if (mediaIndex == null) {
                  mediaIndex = flattenSourceResult.mediaIndex;
                }
                if (mediaIndex === index) {
                  break;
                }
              }
            }
            num2 = num2 + 1;
            found2 = result2;
            tmp25 = tmp20;
          }
          if (flattenSourceResult.noCarousel) {
            const items = [result2[num2]];
            importDefault = 0;
            tmp20(8573).setMediaSourcePortal(items[0], portal);
            found2 = items;
            tmp25 = tmp20;
            const tmp20Result = tmp20(8573);
          } else {
            importDefault = num2;
            tmp20(8573).setMediaSourcePortal(result2[num2], portal);
            found2 = result2.filter((item, index) => {
              const flattenSourceResult = MediaSourceUtil.flattenSource(item);
              let tmp3 = !tmp2;
              if (!(null != flattenSourceResult && !flattenSourceResult.noCarousel)) {
                tmp3 = closure_1 >= index;
              }
              if (tmp3) {
                closure_1 = closure_1 - 1;
              }
              return null != flattenSourceResult && !flattenSourceResult.noCarousel;
            });
            tmp25 = tmp20;
            const tmp20Result2 = tmp20(8573);
          }
        }
        const tmp10Result12 = tmp10(8573);
      }
    } else {
      const first = tmp7.messageSnapshots[0];
      let message1;
      if (first != null) {
        message1 = first.message;
      }
      tmp12 = message1;
    }
  } else {
    const obj2 = embedId(11700);
  }
};
