// Module ID: 8646
// Function ID: 68441
// Name: toAnnouncementMessages
// Dependencies: []
// Exports: getPollExpiryLabel, getPosterUrl, toAnnouncementMessages

// Module 8646 (toAnnouncementMessages)
const isMessageComponentsV2 = require(dependencyMap[0]).isMessageComponentsV2;
let closure_4 = /^#{1,3}\s+(.+)$/;
let closure_5 = /^https?:\/\/\S+$/;
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/game_profile/AnnouncementMessageUtils.tsx");

export const toAnnouncementMessages = function toAnnouncementMessages(messages) {
  return messages.map((reactions) => {
    let body;
    let color;
    let title;
    let url;
    let obj = callback(closure_2[5]);
    const tmpResult = callback2(closure_2[4])(obj.createMessageRecord(reactions));
    const arr = function extractContent(tmpResult) {
      if (callback(tmpResult)) {
        const components = tmpResult.components;
        const found = components.filter((type) => type.type === callback(closure_2[1]).ComponentType.TEXT_DISPLAY);
        const mapped = found.map((content) => content.content);
        return mapped.join("\n");
      } else {
        const content = tmpResult.content;
        if (0 === content.length) {
          const first = tmpResult.embeds[0];
          let tmp4 = null;
          if (null != first) {
            const items = [];
            if (null != first.rawTitle) {
              const _HermesInternal = HermesInternal;
              items.push("# " + first.rawTitle);
            }
            if (null != first.rawDescription) {
              items.push(first.rawDescription);
            }
            let joined = null;
            if (items.length > 0) {
              joined = items.join("\n");
            }
            tmp4 = joined;
          }
          return tmp4;
        }
        tmp4 = content;
      }
    }(tmpResult);
    const tmp = callback2(closure_2[4]);
    const index = arr.indexOf("\n");
    let str = arr;
    if (-1 !== index) {
      str = arr.slice(0, index);
    }
    const match = str.match(closure_4);
    if (null != match) {
      obj = { title: match[1].trim() };
      let str3 = "";
      if (!tmp5) {
        const substr = arr.slice(index + 1);
        str3 = substr.trimStart();
      }
      obj.body = str3;
      const str2 = match[1];
    } else {
      obj = { body: arr };
    }
    reactions = reactions.reactions;
    let reduced;
    ({ title, body } = obj);
    if (null != reactions) {
      reduced = reactions.reduce((arg0, count) => arg0 + count.count, 0);
    }
    let num4 = 0;
    if (null != reduced) {
      num4 = reduced;
    }
    let tmp8;
    if (arr !== tmpResult.content) {
      if (!callback3(tmpResult)) {
        const first = tmpResult.embeds[0];
        let tmp10;
        if (null != first) {
          const author = first.author;
          let name;
          if (null != author) {
            name = author.name;
          }
          const author2 = first.author;
          let iconProxyURL;
          if (null != author2) {
            iconProxyURL = author2.iconProxyURL;
          }
          if (null == iconProxyURL) {
            const author3 = first.author;
            let iconURL;
            if (null != author3) {
              iconURL = author3.iconURL;
            }
            iconProxyURL = iconURL;
          }
          const footer = first.footer;
          let text;
          if (null != footer) {
            text = footer.text;
          }
          if (null == text) {
            const provider = first.provider;
            let name1;
            if (null != provider) {
              name1 = provider.name;
            }
            text = name1;
          }
          const footer2 = first.footer;
          let iconProxyURL1;
          if (null != footer2) {
            iconProxyURL1 = footer2.iconProxyURL;
          }
          if (null == iconProxyURL1) {
            const footer3 = first.footer;
            let iconURL1;
            if (null != footer3) {
              iconURL1 = footer3.iconURL;
            }
            iconProxyURL1 = iconURL1;
          }
          ({ url, color } = first);
          let tmp18;
          if (null != color) {
            tmp18 = color;
          }
          const obj1 = { authorName: name, authorIconUrl: iconProxyURL, providerName: text, providerIconUrl: iconProxyURL1, url, color: tmp18 };
          tmp10 = obj1;
        }
        tmp8 = tmp10;
      }
    }
    const obj2 = {
      id: tmpResult.id,
      media: function extractMedia(tmpResult) {
        if (callback(tmpResult)) {
          const components = tmpResult.components;
          const found = components.find((type) => type.type === found3(found5[1]).ComponentType.MEDIA_GALLERY);
          let media;
          if (null != found) {
            const first = found.items[0];
            if (null != first) {
              media = first.media;
            }
          }
          if (null != media) {
            let obj = found3(found5[2]);
            const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
            if ("INVALID" !== unfurledMediaItemType) {
              obj = {};
              const merged = Object.assign(media);
              obj["type"] = unfurledMediaItemType;
              obj = { message: tmpResult };
              obj["sourceMetadata"] = obj;
              return obj;
            }
          }
        }
        const attachments = tmpResult.attachments;
        const found1 = attachments.find((content_type) => found3(found5[3]).isImageContentType(content_type.content_type));
        if (null != found1) {
          return found3(found5[2]).messageAttachmentToMediaItem(found1, tmpResult);
        } else {
          const attachments1 = tmpResult.attachments;
          const found2 = attachments1.find((content_type) => found3(found5[3]).isVideoContentType(content_type.content_type));
          if (null != found2) {
            return found3(found5[2]).messageAttachmentToMediaItem(found2, tmpResult);
          } else {
            let embeds = tmpResult.embeds;
            const found3 = embeds.find((video) => null != video.video && null != video.thumbnail);
            let thumbnail;
            if (null != found3) {
              thumbnail = found3.thumbnail;
            }
            if (null != thumbnail) {
              let obj1 = { message: tmpResult };
              const obj2 = { type: "embed" };
              const embeds3 = tmpResult.embeds;
              obj2.embedIndex = embeds3.findIndex((arg0) => arg0 === found3);
              obj1.identifier = obj2;
              return found3(found5[2]).embedMediaToMediaItem(found3.thumbnail, obj1, "IMAGE");
            } else {
              const embeds1 = tmpResult.embeds;
              const found4 = embeds1.find((image) => null != image.image);
              let image;
              if (null != found4) {
                image = found4.image;
              }
              if (null != image) {
                let obj4 = found3(found5[2]);
                const obj3 = { message: tmpResult };
                obj4 = { type: "embed" };
                let embeds2 = tmpResult.embeds;
                obj4.embedIndex = embeds2.findIndex((arg0) => arg0 === found4);
                obj3.identifier = obj4;
                return obj4.embedMediaToMediaItem(found4.image, obj3, "IMAGE");
              } else {
                embeds2 = tmpResult.embeds;
                const found5 = embeds2.find((thumbnail) => null != thumbnail.thumbnail);
                let thumbnail1;
                if (null != found5) {
                  thumbnail1 = found5.thumbnail;
                }
                let result;
                if (null != thumbnail1) {
                  obj1 = found3(found5[2]);
                  const obj5 = { message: tmpResult };
                  const obj6 = { type: "embed" };
                  embeds = tmpResult.embeds;
                  obj6.embedIndex = embeds.findIndex((arg0) => arg0 === found5);
                  obj5.identifier = obj6;
                  result = obj1.embedMediaToMediaItem(found5.thumbnail, obj5, "IMAGE");
                }
                return result;
              }
            }
          }
        }
      }(tmpResult),
      title,
      body,
      content: arr,
      timestamp: reactions.timestamp,
      reactionCount: num4,
      embedSource: tmp8,
      poll: tmpResult.poll
    };
    return obj2;
  });
};
export const getPollExpiryLabel = function getPollExpiryLabel(poll) {
  let result = require(dependencyMap[6]).formatExpirationLabel(poll.expiry);
  if (null == result) {
    const intl = require(dependencyMap[7]).intl;
    result = intl.string(require(dependencyMap[7]).t.e+J3JZ);
  }
  return result;
};
export const getPosterUrl = function getPosterUrl(proxyUrl, arg1, closure_12) {
  let str = importDefault(dependencyMap[8]).toURLSafe(proxyUrl);
  str = null;
  if (null != str) {
    const searchParams = str.searchParams;
    searchParams.append("format", "webp");
    if (null != arg1) {
      const searchParams2 = str.searchParams;
      searchParams2.append("width", arg1.toString());
    }
    if (null != closure_12) {
      const searchParams3 = str.searchParams;
      searchParams3.append("height", closure_12.toString());
    }
    str = str.toString();
  }
  return str;
};
