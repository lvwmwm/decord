// Module ID: 11353
// Function ID: 11354
// Name: transformMessage
// Dependencies: [1406, 4800, 4890, 1392, 1087, 11354, 2000, 1388, 5667, 6320, 9183, 2]
// Exports: transformMessageRecord, transformServerMessage

// Module 11353 (transformMessage)
import Constants from "Constants" /* 1087 */;
import Server from "Server" /* 2000 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5667 */;
import useMessageAuthor from "useMessageAuthor" /* 6320 */;
import transformUserDefault from "transformUser" /* 9183 */;
import getRemoteIconURLDefault from "getRemoteIconURL" /* 11354 */;
import UserRecord from "UserRecord" /* 1406 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import RelationshipStore from "RelationshipStore" /* 4890 */;
import UserStore from "UserStore" /* 1392 */;
import size_mod from "module_2" /* 2 */;

let images, results;

let tmp;
const GlobalUtils = tmp(1388);
const f108995 = (emoji) => {
  let id;
  let obj2;
  const obj = { emoji: obj2 };
  const merged = Object.assign(emoji);
  obj2 = { id };
  const merged1 = Object.assign(emoji.emoji);
  id = emoji.emoji.id;
  if (id == null) {
    id = null;
  }
  return obj;
};
function recurseReplaceContentTree(type) {
  if ("customEmoji" === type.type) {
    type.type = "emoji";
  }
  const tmp = "emoji" === type.type && type.src;
  if (tmp) {
    type.src = getRemoteIconURLDefault(type.src);
  }
  if (Array.isArray(type.content)) {
    const content = type.content;
    type.content = content.map(recurseReplaceContentTree);
  }
  return type;
}
function transformComponent(type) {
  let components;
  let components2;
  let components3;
  let emoji;
  let file;
  let found;
  let found1;
  let found2;
  let items;
  let media;
  let options;
  let size1;
  let spoiler;
  let spoiler2;
  let tmp23;
  type = type.type;
  let tmp = require;
  if (Server.ComponentType.ACTION_ROW === type) {
    const obj13 = { type: null, components: found };
    ({ type: obj19.type, components: components3 } = type);
    found = undefined;
    if (components3 != null) {
      const mapped = components3.map(transformComponent);
      found = mapped.filter(GlobalUtils.isNotNullish);
    }
    return obj13;
  } else if (Server.ComponentType.BUTTON === type) {
    const obj15 = { type: null, custom_id: null, disabled: null, style: null, label: null, url: null, emoji: tmp23, sku_id: type.skuId };
    ({ type: obj17.type, customId: obj17.custom_id, disabled: obj17.disabled, style: obj17.style, label: obj17.label, url: obj17.url, emoji } = type);
    tmp23 = undefined;
    if (null != emoji) {
      const obj35 = { id: null, name: null, animated: null };
      ({ id: obj18.id, name: obj18.name, animated: obj18.animated } = emoji);
      tmp23 = obj35;
    }
    return obj15;
  } else if (Server.ComponentType.STRING_SELECT === type) {
    const obj37 = { custom_id: null, disabled: null, required: null, placeholder: null, min_values: null, max_values: null };
    ({ customId: obj16.custom_id, disabled: obj16.disabled, required: obj16.required, placeholder: obj16.placeholder, minValues: obj16.min_values, maxValues: obj16.max_values } = type);
    const obj36 = {
      type: type.type,
      options: options.map((label) => {
          let tmp;
          const emoji = label.emoji;
          const obj = { label: label.label, value: label.value, default: label.default, description: label.description, emoji: tmp };
          tmp = undefined;
          if (null != emoji) {
            const obj3 = { id: null, name: null, animated: null };
            ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
            tmp = obj3;
          }
          return obj;
        })
    };
    const merged = Object.assign(obj37);
    options = type.options;
    return obj36;
  } else {
    if (Server.ComponentType.USER_SELECT !== type) {
      if (Server.ComponentType.ROLE_SELECT !== type) {
        if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
          if (Server.ComponentType.CHANNEL_SELECT === type) {
            const obj38 = { type: type.type };
            const obj39 = { custom_id: null, disabled: null, required: null, placeholder: null, min_values: null, max_values: null };
            ({ customId: obj12.custom_id, disabled: obj12.disabled, required: obj12.required, placeholder: obj12.placeholder, minValues: obj12.min_values, maxValues: obj12.max_values } = type);
            const merged1 = Object.assign(obj39);
            ({ channelTypes: obj11.channel_types, defaultValues: obj11.default_values } = type);
            return obj38;
          } else if (Server.ComponentType.SECTION === type) {
            ({ type: obj10.type, components: components2 } = type);
            const obj40 = { type: null, components: found1, accessory: transformComponent(type.accessory) };
            found1 = undefined;
            if (components2 != null) {
              const mapped1 = components2.map(transformComponent);
              found1 = mapped1.filter(GlobalUtils.isNotNullish);
            }
            return obj40;
          } else if (Server.ComponentType.TEXT_DISPLAY === type) {
            const obj41 = { type: null, content: null };
            ({ type: obj9.type, content: obj9.content } = type);
            return obj41;
          } else if (Server.ComponentType.THUMBNAIL === type) {
            const obj42 = { type: null, media: size, description: null, spoiler: spoiler2 };
            ({ type: obj7.type, media } = type);
            size = { url: null, proxy_url: null, loading_state: null, height: null, width: null, placeholder: null, placeholder_version: null, content_type: null, original_content_type: null, flags: null };
            ({ url: obj8.url, proxyUrl: obj8.proxy_url, loadingState: obj8.loading_state, height: obj8.height, width: obj8.width, placeholder: obj8.placeholder, placeholderVersion: obj8.placeholder_version, contentType: obj8.content_type, originalContentType: obj8.original_content_type, flags: obj8.flags } = media);
            ({ description: obj7.description, spoiler: spoiler2 } = type);
            if (spoiler2 == null) {
              spoiler2 = false;
            }
            return obj42;
          } else if (Server.ComponentType.MEDIA_GALLERY === type) {
            const obj43 = {
              type: null,
              items: items.map((description) => {
                          let flag;
                          let media;
                          const obj = { media: { url: media.url, proxy_url: media.proxyUrl, loading_state: media.loadingState, height: media.height, width: media.width, placeholder: media.placeholder, placeholder_version: media.placeholderVersion, content_type: media.contentType, original_content_type: media.originalContentType, flags: media.flags }, description: description.description, spoiler: flag };
                          media = description.media;
                          flag = description.spoiler;
                          if (flag == null) {
                            flag = false;
                          }
                          return obj;
                        })
            };
            ({ type: obj6.type, items } = type);
            return obj43;
          } else if (Server.ComponentType.FILE === type) {
            const obj44 = { type: null, file: size1, name: null, size: null, spoiler };
            ({ type: obj4.type, file } = type);
            size1 = { url: null, proxy_url: null, loading_state: null, height: null, width: null, placeholder: null, placeholder_version: null, content_type: null, original_content_type: null, flags: null };
            ({ url: obj5.url, proxyUrl: obj5.proxy_url, loadingState: obj5.loading_state, height: obj5.height, width: obj5.width, placeholder: obj5.placeholder, placeholderVersion: obj5.placeholder_version, contentType: obj5.content_type, originalContentType: obj5.original_content_type, flags: obj5.flags } = file);
            ({ name: obj4.name, size: obj4.size, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            return obj44;
          } else if (Server.ComponentType.SEPARATOR === type) {
            const obj45 = { type: null, divider: null, spacing: null };
            ({ type: obj3.type, divider: obj3.divider, spacing: obj3.spacing } = type);
            return obj45;
          } else if (Server.ComponentType.CONTENT_INVENTORY_ENTRY === type) {
            const obj46 = { type: null, content_inventory_entry: null };
            ({ type: obj2.type, contentInventoryEntry: obj2.content_inventory_entry } = type);
            return obj46;
          } else if (Server.ComponentType.CONTAINER === type) {
            let obj = { type: null, accent_color: null, spoiler: null, components: found2 };
            ({ type: obj.type, accentColor: obj.accent_color, spoiler: obj.spoiler, components } = type);
            found2 = undefined;
            if (components != null) {
              const mapped2 = components.map(transformComponent);
              found2 = mapped2.filter(GlobalUtils.isNotNullish);
            }
            return obj;
          } else {
            if (Server.ComponentType.TEXT_INPUT !== type) {
              if (Server.ComponentType.LABEL !== type) {
                if (Server.ComponentType.FILE_UPLOAD !== type) {
                  if (Server.ComponentType.RADIO_GROUP !== type) {
                    if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                      if (Server.ComponentType.CHECKBOX !== type) {
                        const CHECKPOINT_CARD = Server.ComponentType.CHECKPOINT_CARD;
                      }
                    }
                  }
                }
              }
            }
            return null;
          }
        }
      }
    }
    const obj47 = { type: type.type, default_values: type.defaultValues };
    const obj48 = { custom_id: null, disabled: null, required: null, placeholder: null, min_values: null, max_values: null };
    ({ customId: obj14.custom_id, disabled: obj14.disabled, required: obj14.required, placeholder: obj14.placeholder, minValues: obj14.min_values, maxValues: obj14.max_values } = type);
    const merged2 = Object.assign(obj48);
    return obj47;
  }
}
function transformEmbed(type) {
  let components;
  let fields;
  let found;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let tmp9;
  let toISOStringResult;
  const tmp4 = (type.type === MessageEmbedTypes.ARTICLE || type.type === tmp.IMAGE) && null == type.images ? type.image : type.thumbnail;
  let image;
  if (!((type.type === MessageEmbedTypes.ARTICLE || type.type === tmp.IMAGE) && null == type.images)) {
    image = type.image;
  }
  const obj = { type: type.type, url: type.url, title: type.rawTitle, description: type.rawDescription, color: type.color, timestamp: toISOStringResult, flags: null, content_scan_version: null, fields: fields.map((name) => ({ name: name.rawName, value: name.rawValue, inline: name.inline })), author: tmp7, provider: type.provider, thumbnail: tmp8, image: tmp9, video: tmp10, footer: tmp11, reference_id: null, components: found };
  const timestamp = type.timestamp;
  toISOStringResult = undefined;
  if (timestamp != null) {
    toISOStringResult = timestamp.toISOString();
  }
  ({ flags: obj.flags, contentScanVersion: obj.content_scan_version, fields } = type);
  if (fields == null) {
    fields = [];
  }
  const author = type.author;
  tmp7 = undefined;
  if (null != author) {
    const obj8 = { name: null, url: null, icon_url: null, proxy_icon_url: null };
    ({ name: obj2.name, url: obj2.url, iconURL: obj2.icon_url, iconProxyURL: obj2.proxy_icon_url } = author);
    tmp7 = obj8;
  }
  tmp8 = undefined;
  if (null != tmp4) {
    size = { url: null, proxy_url: null, width: null, height: null, placeholder: null, placeholder_version: null, description: null, flags: null, content_type: null };
    ({ url: obj3.url, proxyURL: obj3.proxy_url, width: obj3.width, height: obj3.height, placeholder: obj3.placeholder, placeholderVersion: obj3.placeholder_version, description: obj3.description, flags: obj3.flags, contentType: obj3.content_type } = tmp4);
    tmp8 = size;
  }
  tmp9 = undefined;
  if (null != image) {
    const size1 = { url: null, proxy_url: null, width: null, height: null, placeholder: null, placeholder_version: null, description: null, flags: null, content_type: null };
    ({ url: obj4.url, proxyURL: obj4.proxy_url, width: obj4.width, height: obj4.height, placeholder: obj4.placeholder, placeholderVersion: obj4.placeholder_version, description: obj4.description, flags: obj4.flags, contentType: obj4.content_type } = image);
    tmp9 = size1;
  }
  const video = type.video;
  tmp10 = undefined;
  if (null != video) {
    const size2 = { url: null, proxy_url: null, width: null, height: null, placeholder: null, placeholder_version: null, description: null, flags: null, content_type: null };
    ({ url: obj5.url, proxyURL: obj5.proxy_url, width: obj5.width, height: obj5.height, placeholder: obj5.placeholder, placeholderVersion: obj5.placeholder_version, description: obj5.description, flags: obj5.flags, contentType: obj5.content_type } = video);
    tmp10 = size2;
  }
  const footer = type.footer;
  tmp11 = undefined;
  if (null != footer) {
    const obj9 = { text: null, icon_url: null, proxy_icon_url: null };
    ({ text: obj6.text, iconURL: obj6.icon_url, iconProxyURL: obj6.proxy_icon_url } = footer);
    tmp11 = obj9;
  }
  ({ referenceId: obj.reference_id, components } = type);
  found = undefined;
  if (components != null) {
    const mapped = components.map(transformComponent);
    found = mapped.filter(GlobalUtils.isNotNullish);
  }
  return obj;
}
function transformInteractionMetadata(triggering_interaction_metadata) {
  let tmp12;
  let tmp2ResultResult;
  let tmp4;
  let tmp6;
  const obj = { user: tmp4(tmp6), target_user: tmp2ResultResult, triggering_interaction_metadata: tmp12 };
  const merged = Object.assign(triggering_interaction_metadata);
  tmp4 = transformUserDefault;
  tmp2ResultResult = undefined;
  const tmp5 = UserRecord;
  tmp6 = new UserRecord(triggering_interaction_metadata.user);
  if ("target_user" in triggering_interaction_metadata) {
    if (null != triggering_interaction_metadata.target_user) {
      const self = this;
      const self2 = this;
      const tmp2Result = transformUserDefault;
      const tmp52 = new tmp5(triggering_interaction_metadata.target_user);
      tmp2ResultResult = tmp2Result(tmp52);
    }
  }
  tmp12 = undefined;
  if ("triggering_interaction_metadata" in triggering_interaction_metadata) {
    tmp12 = transformInteractionMetadata(triggering_interaction_metadata.triggering_interaction_metadata);
  }
  return obj;
}
const MessageEmbedTypes = Constants.MessageEmbedTypes;
let size = size_mod;
const result = size.fileFinishedImporting("modules/rpc/helpers/transformMessage.tsx");

export const transformMessageRecord = function transformMessageRecord(id) {
  let applicationId;
  let author;
  let channel1;
  let channel_id;
  let colorString;
  let content;
  let embeds;
  let expiry;
  let found;
  let found1;
  let guild_id;
  let mapped2;
  let mapped3;
  let mentions;
  let nick;
  let poll;
  let reactions;
  let stickerItems;
  let timestamp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp175;
  let tmp18;
  let tmp24;
  let tmp35;
  let tmp3Result;
  let tmp3Result1Result;
  let tmp3Result3Result;
  let tmp3Result6;
  let toISOStringResult;
  let user;
  let obj = {
    id: id.id,
    channel_id: id.channel_id,
    guild_id,
    author: transformUserDefault(id.author),
    content: null,
    timestamp: timestamp.toISOString(),
    edited_timestamp: toISOStringResult,
    tts: null,
    mention_everyone: null,
    mentions: found.map((item) => transformUserDefault(item)),
    mention_roles: null,
    mention_channels: null,
    attachments: null,
    embeds: embeds.flatMap((images) => {
      images = images.images;
      if (images == null) {
        images = [];
      }
      const found = images.filter((item) => item !== images.image);
      const items = [
        closure_10(images),
        ...found.map((image) => {
          const obj = { id: images.id, type: constants.RICH, url: images.url, image };
          return transformEmbed(obj);
        })
      ];
      return items;
    }),
    components: found1,
    reactions: mapped2.map(f108995),
    nonce: null,
    pinned: null,
    webhook_id: null,
    type: null,
    activity: null,
    application: null,
    application_id: applicationId,
    message_reference: null,
    flags: null,
    sticker_items: stickerItems,
    poll: tmp10,
    interaction_metadata: tmp12,
    role_subscription_data: null,
    blocked: null
  };
  const channel = ChannelStore.getChannel(id.channel_id);
  guild_id = undefined;
  const obj2 = ChannelStore;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  ({ content: obj.content, timestamp } = id);
  const editedTimestamp = id.editedTimestamp;
  toISOStringResult = undefined;
  if (editedTimestamp != null) {
    toISOStringResult = editedTimestamp.toISOString();
  }
  if (toISOStringResult == null) {
    toISOStringResult = null;
  }
  ({ tts: obj.tts, mentionEveryone: obj.mention_everyone, mentions } = id);
  const mapped = mentions.map((item) => user.getUser(item));
  found = mapped.filter(GlobalUtils.isNotNullish);
  ({ mentionRoles: obj.mention_roles, mentionChannels: obj.mention_channels, attachments: obj.attachments, embeds } = id);
  const components = id.components;
  found1 = undefined;
  if (components != null) {
    const mapped1 = components.map(transformComponent);
    found1 = mapped1.filter(tmp6(1388).isNotNullish);
  }
  const reactions1 = id.reactions;
  const found2 = reactions1.filter((count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    return null == vote;
  });
  mapped2 = found2.map((count) => {
    const obj = { count: count.count + count.burst_count };
    const merged = Object.assign(count);
    return obj;
  });
  ({ nonce: obj.nonce, pinned: obj.pinned, webhookId: obj.webhook_id, type: obj.type, activity: obj.activity, application: obj.application, applicationId } = id);
  ({ messageReference: obj.message_reference, flags: obj.flags } = id);
  stickerItems = undefined;
  if (id.stickerItems.length > 0) {
    stickerItems = id.stickerItems;
  }
  ({ poll, reactions } = id);
  tmp10 = undefined;
  if (null != poll) {
    const found3 = reactions.filter((count_details) => {
      count_details = count_details.count_details;
      let vote;
      if (count_details != null) {
        vote = count_details.vote;
      }
      return null != vote;
    });
    const obj4 = { question: null, answers: null, expiry: expiry.toISOString(), allow_multiselect: null, layout_type: null, results: tmp11 };
    ({ question: obj3.question, answers: obj3.answers, expiry } = poll);
    ({ allow_multiselect: obj3.allow_multiselect, layout_type: obj3.layout_type } = poll);
    if (null != poll.results) {
      results = poll.results;
      let flag;
      if (results != null) {
        flag = results.is_finalized;
      }
      if (flag == null) {
        flag = false;
      }
      tmp11 = {
        is_finalized: flag,
        answer_counts: found3.map((emoji) => {
              let flag;
              let num;
              const count_details = emoji.count_details;
              const obj = { id: Number(emoji.emoji.id), count: num, me_voted: flag };
              num = undefined;
              if (count_details != null) {
                num = count_details.vote;
              }
              if (num == null) {
                num = 0;
              }
              flag = emoji.me_vote;
              if (flag == null) {
                flag = false;
              }
              return obj;
            })
      };
    }
    tmp10 = obj4;
  }
  tmp12 = undefined;
  if (null != id.interactionMetadata) {
    const interactionMetadata = id.interactionMetadata;
    const obj6 = { user: tmp3Result(tmp18), target_user: tmp3Result1Result, triggering_interaction_metadata: tmp24 };
    let merged = Object.assign(interactionMetadata);
    const self = this;
    const self2 = this;
    tmp3Result = transformUserDefault;
    tmp3Result1Result = undefined;
    tmp18 = new UserRecord(interactionMetadata.user);
    if ("target_user" in interactionMetadata) {
      if (null != interactionMetadata.target_user) {
        const self3 = this;
        const self4 = this;
        const tmp3Result5 = transformUserDefault;
        const tmp174 = new UserRecord(interactionMetadata.target_user);
        tmp3Result1Result = tmp3Result5(tmp174);
      }
    }
    tmp24 = undefined;
    if ("triggering_interaction_metadata" in interactionMetadata) {
      const triggering_interaction_metadata = interactionMetadata.triggering_interaction_metadata;
      const obj7 = { user: tmp3Result6(tmp175), target_user: tmp3Result3Result, triggering_interaction_metadata: tmp35 };
      const merged1 = Object.assign(triggering_interaction_metadata);
      const self5 = this;
      const self6 = this;
      tmp3Result6 = transformUserDefault;
      tmp3Result3Result = undefined;
      tmp175 = new UserRecord(triggering_interaction_metadata.user);
      if ("target_user" in triggering_interaction_metadata) {
        if (null != triggering_interaction_metadata.target_user) {
          const self7 = this;
          const self8 = this;
          const tmp3Result7 = transformUserDefault;
          const tmp176 = new UserRecord(triggering_interaction_metadata.target_user);
          tmp3Result3Result = tmp3Result7(tmp176);
        }
      }
      tmp35 = undefined;
      if ("triggering_interaction_metadata" in triggering_interaction_metadata) {
        tmp35 = transformInteractionMetadata(triggering_interaction_metadata.triggering_interaction_metadata);
      }
      tmp24 = obj7;
    }
    tmp12 = obj6;
  }
  ({ roleSubscriptionData: obj.role_subscription_data, blocked: obj.blocked, channel_id, content, author } = id);
  if (null != content) {
    const obj8 = { channelId: channel_id };
    const tmp3Result8 = MarkupUtilsDefault;
    const parseToASTResult = tmp3Result8.parseToAST(content, true, obj8);
    mapped3 = parseToASTResult.map(recurseReplaceContentTree);
  } else {
    mapped3 = [];
  }
  if (null != channel_id) {
    channel1 = obj2.getChannel(channel_id);
  }
  let userAuthor;
  if (null != author) {
    const tmp6Result = useMessageAuthor;
    userAuthor = tmp6Result.getUserAuthor(author, channel1);
  }
  let tmp40;
  if (mapped3.length) {
    tmp40 = mapped3;
  }
  const obj9 = { content_parsed: tmp40, nick, author_color: colorString };
  nick = undefined;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  colorString = undefined;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  const merged2 = Object.assign(obj9);
  return obj;
};
export const transformServerMessage = function transformServerMessage(message) {
  let channel1;
  let channel_id;
  let colorString;
  let content;
  let isBlockedForMessageResult;
  let mapped;
  let mapped1;
  let mapped2;
  let mentions;
  let nick;
  let tmp12;
  let tmp16Result2Result;
  let tmp16Result3;
  let tmp16ResultResult;
  let tmp18;
  let tmp195;
  let tmp20;
  let tmp26;
  let tmp3;
  let tmp37;
  let tmp7;
  let tmp;
  if (null != message.author) {
    let tmp2 = UserRecord;
    const self = this;
    const self2 = this;
    tmp = new UserRecord(message.author);
  }
  let obj = { id: message.id, channel_id: message.channel_id, guild_id: tmp3, author: tmp7, content: null, timestamp: null, edited_timestamp: null, tts: null, mention_everyone: null, mentions: mapped, mention_roles: null, mention_channels: null, attachments: null, embeds: null, components: null, reactions: mapped1, nonce: null, pinned: null, webhook_id: null, type: null, activity: null, application: null, application_id: null, message_reference: null, flags: null, sticker_items: null, poll: null, interaction_metadata: tmp12, role_subscription_data: message.role_subscription_data, blocked: isBlockedForMessageResult };
  tmp3 = undefined;
  if (null != message.channel_id) {
    const channel = ChannelStore.getChannel(message.channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp3 = guild_id;
  }
  tmp7 = undefined;
  if (null != tmp) {
    tmp7 = transformUserDefault(tmp);
  }
  ({ content: obj.content, timestamp: obj.timestamp, edited_timestamp: obj.edited_timestamp, tts: obj.tts, mention_everyone: obj.mention_everyone, mentions } = message);
  mapped = undefined;
  if (mentions != null) {
    mapped = mentions.map((item) => {
      const tmp = transformUserDefault;
      const tmp2 = new UserRecord(item);
      return tmp(tmp2);
    });
  }
  ({ mention_roles: obj.mention_roles, mention_channels: obj.mention_channels, attachments: obj.attachments, embeds: obj.embeds, components: obj.components } = message);
  mapped1 = undefined;
  if (null != message.reactions) {
    const reactions = message.reactions;
    mapped1 = reactions.map(f108995);
  }
  ({ nonce: obj.nonce, pinned: obj.pinned, webhook_id: obj.webhook_id, type: obj.type, activity: obj.activity, application: obj.application, application_id: obj.application_id, message_reference: obj.message_reference, flags: obj.flags, sticker_items: obj.sticker_items, poll: obj.poll } = message);
  tmp12 = undefined;
  if (null != message.interaction_metadata) {
    const interaction_metadata = message.interaction_metadata;
    let obj2 = { user: tmp18(tmp20), target_user: tmp16ResultResult, triggering_interaction_metadata: tmp26 };
    let merged = Object.assign(interaction_metadata);
    const self3 = this;
    const self4 = this;
    tmp18 = transformUserDefault;
    tmp16ResultResult = undefined;
    tmp20 = new UserRecord(interaction_metadata.user);
    if ("target_user" in interaction_metadata) {
      if (null != interaction_metadata.target_user) {
        const self5 = this;
        const self6 = this;
        const tmp16Result = transformUserDefault;
        const tmp194 = new UserRecord(interaction_metadata.target_user);
        tmp16ResultResult = tmp16Result(tmp194);
      }
    }
    tmp26 = undefined;
    if ("triggering_interaction_metadata" in interaction_metadata) {
      const triggering_interaction_metadata = interaction_metadata.triggering_interaction_metadata;
      const obj3 = { user: tmp16Result3(tmp195), target_user: tmp16Result2Result, triggering_interaction_metadata: tmp37 };
      let merged1 = Object.assign(triggering_interaction_metadata);
      const self7 = this;
      const self8 = this;
      tmp16Result3 = transformUserDefault;
      tmp16Result2Result = undefined;
      tmp195 = new UserRecord(triggering_interaction_metadata.user);
      if ("target_user" in triggering_interaction_metadata) {
        if (null != triggering_interaction_metadata.target_user) {
          const self9 = this;
          const self10 = this;
          const tmp16Result4 = transformUserDefault;
          const tmp196 = new UserRecord(triggering_interaction_metadata.target_user);
          tmp16Result2Result = tmp16Result4(tmp196);
        }
      }
      tmp37 = undefined;
      if ("triggering_interaction_metadata" in triggering_interaction_metadata) {
        tmp37 = transformInteractionMetadata(triggering_interaction_metadata.triggering_interaction_metadata);
      }
      tmp26 = obj3;
    }
    tmp12 = obj2;
  }
  isBlockedForMessageResult = undefined;
  if (null != tmp) {
    isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(message);
  }
  ({ channel_id, content } = message);
  if (null != content) {
    const obj5 = { channelId: channel_id };
    const obj4 = MarkupUtilsDefault;
    const parseToASTResult = obj4.parseToAST(content, true, obj5);
    mapped2 = parseToASTResult.map(recurseReplaceContentTree);
  } else {
    mapped2 = [];
  }
  if (null != channel_id) {
    channel1 = ChannelStore.getChannel(channel_id);
  }
  let userAuthor;
  if (null != tmp) {
    const obj6 = useMessageAuthor;
    userAuthor = obj6.getUserAuthor(tmp, channel1);
  }
  let tmp49;
  if (mapped2.length) {
    tmp49 = mapped2;
  }
  const obj7 = { content_parsed: tmp49, nick, author_color: colorString };
  nick = undefined;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  colorString = undefined;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  const merged2 = Object.assign(obj7);
  return obj;
};
