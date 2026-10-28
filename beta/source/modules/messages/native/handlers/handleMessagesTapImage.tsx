// Module ID: 11271
// Function ID: 11272
// Name: handleMessagesTapImage
// Dependencies: [7728, 4945, 1392, 1087, 8792, 10053, 1110, 8789, 5692, 6054, 8783, 5636, 8534, 2]
// Exports: handleMessagesTapImage

// Module 11271 (handleMessagesTapImage)
import Constants from "Constants" /* 1087 */;
import LinkingDefault from "Linking" /* 5692 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8789 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7728 */;
import RelationshipStore from "RelationshipStore" /* 4945 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let importDefault;

const MessageTypes = Constants.MessageTypes;
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export const handleMessagesTapImage = function handleMessagesTapImage(tapImageData) {
  let allowWithinModal;
  let channelIcon;
  let channelName;
  let closure_1;
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
  let tmp20;
  let type;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  importDefault = undefined;
  const layout = tapImageData.layout;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    const tmp2 = dependencyMap;
    let obj = embedId(8792);
    obj.markPortalAlive(portal);
  }
  if (true === allowWithinModal) {
    if ("attachment" !== type) {
      if ("embed" !== type) {
        if ("embedThumbnail" !== type) {
          if ("sticker" !== type) {
            if ("component" !== type) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Unsupported thumbnail type: " + type);
              throw error;
            }
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
    if (type1 !== embedId(1110).MessageReferenceTypes.FORWARD) {
      let found2;
      let tmp25;
      const attachments = tmp7.attachments;
      const found = attachments.filter((item) => {
        const obj = embedId(dependencyMap[7]);
        return !obj.isThumbnailAttachment(item);
      });
      if ("attachment" === type) {
        if (index < found.length) {
          const tmp10Result = embedId(8789);
          if (null == tmp10Result.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
            if (null != found[index].url) {
              if ("" !== found[index].url) {
                const obj14 = LinkingDefault;
                obj14.openURL(found[index].url);
              }
            }
          }
        }
      }
      importDefault = -1;
      if ("embed" === type) {
        if (null != embedIndex) {
          importDefault = embedIndex;
          const tmp40 = tmp12.embeds[index];
          const tmp10Result9 = embedId(8789);
          const result = tmp10Result9.extractMediaSourcesFromEmbed(tmp7, tmp12, tmp40, index, messageChannel.guild_id);
          found2 = result;
          tmp25 = tmp10;
          if (importDefault < result.length) {
            const tmp10Result10 = embedId(8789);
            tmp10Result10.setMediaSourcePortal(result[importDefault], portal);
            found2 = result;
            tmp25 = tmp10;
          }
        }
        if (-1 !== importDefault) {
          const obj3 = { disableDownload: tmp48, initialSources: found2, initialIndex: importDefault, originViewOrOriginLayout: layout, analyticsSource: "Channel", channelId: messageChannel.id, contextName: channelName, contextIcon: channelIcon };
          channelName = undefined;
          const openMediaModal = tmp25(8783).openMediaModal;
          tmp25(8783);
          if (showContextName) {
            const tmp25Result3 = tmp25(5636);
            channelName = tmp25Result3.computeChannelName(messageChannel, UserStore, RelationshipStore, false);
          }
          channelIcon = undefined;
          if (showContextName) {
            const tmp25Result4 = tmp25(8534);
            channelIcon = tmp25Result4.getChannelIcon(messageChannel);
          }
          openMediaModal(obj3);
        }
      }
      if ("embedThumbnail" === type) {
        let result1;
        if (null != tmp12.embeds[index]) {
          const tmp10Result11 = embedId(8789);
          result1 = tmp10Result11.extractThumbnailMediaFromEmbed(tmp32, tmp7, tmp12, index, messageChannel.guild_id);
        }
        if (null != result1) {
          const items = [result1];
          importDefault = 0;
          const tmp10Result12 = embedId(8789);
          tmp10Result12.setMediaSourcePortal(result1, portal);
          found2 = items;
          tmp25 = tmp10;
        }
      } else if ("component" === type) {
        if (null == componentId) {
          return null;
        } else {
          if (null != embedId) {
            let components;
            if ("" !== embedId) {
              const embeds = tmp12.embeds;
              const found1 = embeds.find((id) => id.id === embedId);
              if (found1 != null) {
                components = found1.components;
              }
            }
            if (null != components) {
              if (0 !== components.length) {
                const extractMediaSourcesFromComponent = embedId(8789).extractMediaSourcesFromComponent;
                const guild_id = messageChannel.guild_id;
                const tmp10Result13 = embedId(8789);
                const tmp10Result14 = embedId(6054);
                const result2 = extractMediaSourcesFromComponent(tmp7, components, guild_id, tmp10Result14.asComponentId(componentId), componentMediaIndex);
                if (null != result2) {
                  ({ sources, initialIndex: closure_1 } = result2);
                  const tmp10Result15 = embedId(8789);
                  tmp10Result15.setMediaSourcePortal(sources[importDefault], portal);
                  found2 = sources;
                  tmp25 = tmp10;
                }
              }
            }
          }
          components = tmp12.components;
        }
      } else {
        const tmp10Result16 = embedId(8789);
        const result3 = tmp10Result16.extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
        let num2 = 0;
        found2 = result3;
        tmp25 = tmp10;
        if (0 < result3.length) {
          while (true) {
            tmp20 = embedId;
            let obj4 = embedId(8789);
            flattenSourceResult = obj4.flattenSource(result3[num2]);
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
            found2 = result3;
            tmp25 = tmp20;
          }
          if (flattenSourceResult.noCarousel) {
            const items1 = [result3[num2]];
            importDefault = 0;
            const tmp20Result = tmp20(8789);
            tmp20Result.setMediaSourcePortal(items1[0], portal);
            found2 = items1;
            tmp25 = tmp20;
          } else {
            importDefault = num2;
            const tmp20Result2 = tmp20(8789);
            tmp20Result2.setMediaSourcePortal(result3[num2], portal);
            found2 = result3.filter((item, index) => {
              const obj = MediaSourceUtil;
              const flattenSourceResult = obj.flattenSource(item);
              const tmp3 = !tmp2 && closure_1 >= index;
              if (tmp3) {
                closure_1 = closure_1 - 1;
              }
              return null != flattenSourceResult && !flattenSourceResult.noCarousel;
            });
            tmp25 = tmp20;
          }
        }
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
    embedId(10053);
  }
};
