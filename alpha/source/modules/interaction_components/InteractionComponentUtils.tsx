// Module ID: 6395
// Function ID: 6396
// Name: InteractionComponentUtils
// Dependencies: [6396, 3, 1413, 1112, 6398, 6400, 6401, 2118, 6402, 1269, 1255, 6405, 6406, 6419, 2]
// Exports: canSelectBeEmpty, deserializeComponentUploadId, getAllTextDisplayContent, getFileUploadComponentSubtitle, getFirstInteractionComponentMedia, getLayoutComponentErrorText, getOverflowMenuComponentActionSheetKey, getParents, getSelectPlaceholder, isActionComponent, makeComponentUploadId, transformComponents

// Module 6395 (InteractionComponentUtils)
import LoggerDefault from "Logger" /* 3 */;
import intl7 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import v1 from "v1" /* 1269 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import Server from "Server" /* 2118 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import interactionCallbackErrorReason from "interactionCallbackErrorReason" /* 6398 */;
import InteractionTypes from "InteractionTypes" /* 6400 */;
import interactions_InteractionTypes from "interactions/InteractionTypes" /* 6401 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6405 */;
import size from "module_2" /* 2 */;

let importDefault;

function flattenComponents(components) {
  map = new Map();
  const tmp2 = components[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = flattenComponent(map, tmp3);
    continue;
  }
  return map;
}
function flattenComponent(map, item10012) {
  const result = map.set(item10012.id, item10012);
  const tmp2 = getComponentChildren(item10012);
  for (const item10012 of tmp2) {
    let tmp4 = flattenComponent(map, item10012);
    continue;
  }
}
function findChildComponent(accessory, componentId) {
  const tmp = getComponentChildren(accessory);
  const iter = tmp[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult.id === componentId) {
      iter.return();
      return nextResult;
    } else {
      let tmp6 = findChildComponent(tmp3, componentId);
      if (null != tmp6) {
        iter.return();
        return tmp6;
      }
    }
  }
  return null;
}
function getComponentChildren(nextResult) {
  const type = nextResult.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    return nextResult.components;
  } else if (Server.ComponentType.SECTION === type) {
    let components;
    if (null != nextResult.accessory) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, nextResult.components, 0)] = nextResult.accessory;
      components = items;
    } else {
      components = nextResult.components;
    }
    return components;
  } else if (Server.ComponentType.CONTAINER === type) {
    return nextResult.components;
  } else if (Server.ComponentType.LABEL === type) {
    const items1 = [nextResult.component];
    return items1;
  } else if (Server.ComponentType.OVERFLOW_MENU === type) {
    const groups = nextResult.groups;
    return groups.flatMap((components) => components.components);
  } else {
    if (Server.ComponentType.MENU_ACTION_ITEM !== type) {
      if (Server.ComponentType.BUTTON !== type) {
        if (Server.ComponentType.STRING_SELECT !== type) {
          if (Server.ComponentType.TEXT_INPUT !== type) {
            if (Server.ComponentType.USER_SELECT !== type) {
              if (Server.ComponentType.ROLE_SELECT !== type) {
                if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
                  if (Server.ComponentType.CHANNEL_SELECT !== type) {
                    if (Server.ComponentType.TEXT_DISPLAY !== type) {
                      if (Server.ComponentType.THUMBNAIL !== type) {
                        if (Server.ComponentType.MEDIA_GALLERY !== type) {
                          if (Server.ComponentType.FILE !== type) {
                            if (Server.ComponentType.SEPARATOR !== type) {
                              if (Server.ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                if (Server.ComponentType.FILE_UPLOAD !== type) {
                                  if (Server.ComponentType.CHECKPOINT_CARD !== type) {
                                    if (Server.ComponentType.RADIO_GROUP !== type) {
                                      if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                                        if (Server.ComponentType.CHECKBOX !== type) {
                                          logger.warn("getComponentChildren: Unknown component type", nextResult.type);
                                          return [];
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return [];
  }
}
function transformComponent(type) {
  let SMALL;
  let animated;
  let animated2;
  let c1;
  let divider;
  let emojiURL;
  let emojiURL2;
  let found;
  let found2;
  let items;
  let options;
  let required;
  let required2;
  let required3;
  let required4;
  let required5;
  let required6;
  let required7;
  let required8;
  let required9;
  let tmp8;
  let tmpResult;
  let tmpResult4;
  let tmpResult5;
  function getChildComponent(dependencyMap) {
    const tmp = transformComponent(dependencyMap);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  }
  type = type.type;
  let tmp = getChildComponent;
  let tmp2 = dependencyMap;
  let flag = true;
  if (getChildComponent(2118).ComponentType.ACTION_ROW !== type) {
    flag = true;
    if (tmp(2118).ComponentType.BUTTON !== type) {
      flag = true;
      if (tmp(2118).ComponentType.STRING_SELECT !== type) {
        flag = true;
        if (tmp(2118).ComponentType.TEXT_INPUT !== type) {
          flag = true;
          if (tmp(2118).ComponentType.USER_SELECT !== type) {
            flag = true;
            if (tmp(2118).ComponentType.ROLE_SELECT !== type) {
              flag = true;
              if (tmp(2118).ComponentType.MENTIONABLE_SELECT !== type) {
                flag = true;
                if (tmp(2118).ComponentType.CHANNEL_SELECT !== type) {
                  flag = true;
                  if (tmp(2118).ComponentType.SECTION !== type) {
                    flag = true;
                    if (tmp(2118).ComponentType.TEXT_DISPLAY !== type) {
                      flag = true;
                      if (tmp(2118).ComponentType.THUMBNAIL !== type) {
                        flag = true;
                        if (tmp(2118).ComponentType.MEDIA_GALLERY !== type) {
                          flag = true;
                          if (tmp(2118).ComponentType.FILE !== type) {
                            flag = true;
                            if (tmp(2118).ComponentType.SEPARATOR !== type) {
                              flag = true;
                              if (tmp(2118).ComponentType.CONTAINER !== type) {
                                flag = true;
                                if (tmp(2118).ComponentType.LABEL !== type) {
                                  flag = true;
                                  if (tmp(2118).ComponentType.FILE_UPLOAD !== type) {
                                    flag = true;
                                    if (tmp(2118).ComponentType.CHECKPOINT_CARD !== type) {
                                      flag = true;
                                      if (tmp(2118).ComponentType.RADIO_GROUP !== type) {
                                        flag = true;
                                        if (tmp(2118).ComponentType.CHECKBOX_GROUP !== type) {
                                          flag = true;
                                          if (tmp(2118).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              flag = true;
                                              if (tmp(2118).ComponentType.OVERFLOW_MENU !== type) {
                                                flag = true;
                                                if (tmp(2118).ComponentType.MENU_ACTION_ITEM !== type) {
                                                  const UNKNOWN = tmp(2118).ComponentType.UNKNOWN;
                                                  flag = false;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (flag) {
    importDefault = true;
    const type2 = type.type;
    if (tmp(2118).ComponentType.ACTION_ROW === type2) {
      let components = type.components;
      let mapped = components.map(getChildComponent);
      const obj4 = { type: tmp(2118).ComponentType.ACTION_ROW, id: type.id, components: found };
      found = mapped.filter(tmp(1255).isNotNullish);
      return obj4;
    } else if (tmp(2118).ComponentType.BUTTON === type2) {
      let tmp43;
      if (null != type.emoji) {
        const emoji2 = type.emoji;
        if (typeof getEmoji === "function") {
          const obj8 = { id: null, name: null, animated: null, src: emojiURL2 };
          ({ id: obj30.id, name: obj30.name, animated: obj30.animated } = emoji2);
          emojiURL2 = undefined;
          if (null != emoji2.id) {
            const obj11 = { id: null, animated: animated2, size: 48 };
            ({ id: obj31.id, animated: animated2 } = emoji2);
            const getEmojiURL2 = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (!animated2) {
              animated2 = false;
            }
            emojiURL2 = getEmojiURL2(obj11);
          }
          tmp43 = obj8;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      ({ id: obj32.id, custom_id: obj32.customId, style: obj32.style, disabled: obj32.disabled, url: obj32.url, label: obj32.label } = type);
      const obj18 = { type: tmp(2118).ComponentType.BUTTON, id: null, customId: null, style: null, disabled: null, url: null, label: null, emoji: tmp43, skuId: type.sku_id };
      return obj18;
    } else if (tmp(2118).ComponentType.STRING_SELECT === type2) {
      const obj21 = {
        type: tmp(2118).ComponentType.STRING_SELECT,
        id: null,
        customId: null,
        disabled: null,
        required: required9,
        options: options.map((label) => {
              let animated;
              let emojiURL;
              let tmp2;
              const obj = { type: InteractionComponentTypes.SelectOptionType.STRING, label: label.label, value: label.value, default: label.default, description: label.description, emoji: tmp2 };
              tmp2 = undefined;
              if (null != label.emoji) {
                const emoji = label.emoji;
                if (typeof getEmoji === "function") {
                  const obj5 = { id: null, name: null, animated: null, src: emojiURL };
                  ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
                  emojiURL = undefined;
                  if (tmp4) {
                    if (null != emoji.id) {
                      const obj6 = { id: null, animated, size: 48 };
                      ({ id: obj3.id, animated } = emoji);
                      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
                      AvatarUtilsDefault;
                      if (!animated) {
                        animated = false;
                      }
                      emojiURL = getEmojiURL(obj6);
                    }
                  }
                  tmp2 = obj5;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return obj;
            }),
        placeholder: null,
        minValues: null,
        maxValues: null
      };
      ({ id: obj29.id, custom_id: obj29.customId, disabled: obj29.disabled, required: required9 } = type);
      if (required9 == null) {
        required9 = false;
      }
      options = type.options;
      ({ placeholder: obj29.placeholder, min_values: obj29.minValues, max_values: obj29.maxValues } = type);
      return obj21;
    } else if (tmp(2118).ComponentType.TEXT_INPUT === type2) {
      const obj23 = { type: null, id: null, style: null, customId: null, label: null, value: null, placeholder: null, disabled: null, required: required8, minLength: null, maxLength: null };
      ({ type: obj28.type, id: obj28.id, style: obj28.style, custom_id: obj28.customId, label: obj28.label, value: obj28.value, placeholder: obj28.placeholder, disabled: obj28.disabled, required: required8 } = type);
      if (required8 == null) {
        required8 = false;
      }
      ({ min_length: obj28.minLength, max_length: obj28.maxLength } = type);
      return obj23;
    } else if (tmp(2118).ComponentType.USER_SELECT === type2) {
      const obj33 = { type: tmp(2118).ComponentType.USER_SELECT, id: null, customId: null, disabled: null, required: required7, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ id: obj27.id, custom_id: obj27.customId, disabled: obj27.disabled, required: required7 } = type);
      if (required7 == null) {
        required7 = false;
      }
      ({ placeholder: obj27.placeholder, min_values: obj27.minValues, max_values: obj27.maxValues, default_values: obj27.defaultValues } = type);
      return obj33;
    } else if (tmp(2118).ComponentType.ROLE_SELECT === type2) {
      const obj61 = { type: tmp(2118).ComponentType.ROLE_SELECT, id: null, customId: null, disabled: null, required: required6, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ id: obj26.id, custom_id: obj26.customId, disabled: obj26.disabled, required: required6 } = type);
      if (required6 == null) {
        required6 = false;
      }
      ({ placeholder: obj26.placeholder, min_values: obj26.minValues, max_values: obj26.maxValues, default_values: obj26.defaultValues } = type);
      return obj61;
    } else if (tmp(2118).ComponentType.MENTIONABLE_SELECT === type2) {
      const obj62 = { type: tmp(2118).ComponentType.MENTIONABLE_SELECT, id: null, customId: null, disabled: null, required: required5, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ id: obj25.id, custom_id: obj25.customId, disabled: obj25.disabled, required: required5 } = type);
      if (required5 == null) {
        required5 = false;
      }
      ({ placeholder: obj25.placeholder, min_values: obj25.minValues, max_values: obj25.maxValues, default_values: obj25.defaultValues } = type);
      return obj62;
    } else if (tmp(2118).ComponentType.CHANNEL_SELECT === type2) {
      const obj63 = { type: tmp(2118).ComponentType.CHANNEL_SELECT, id: null, customId: null, disabled: null, required: required4, placeholder: null, minValues: null, maxValues: null, channelTypes: null, defaultValues: null };
      ({ id: obj24.id, custom_id: obj24.customId, disabled: obj24.disabled, required: required4 } = type);
      if (required4 == null) {
        required4 = false;
      }
      ({ placeholder: obj24.placeholder, min_values: obj24.minValues, max_values: obj24.maxValues, channel_types: obj24.channelTypes, default_values: obj24.defaultValues } = type);
      return obj63;
    } else if (tmp(2118).ComponentType.SECTION === type2) {
      const components1 = type.components;
      const mapped1 = components1.map(getChildComponent);
      const found1 = mapped1.filter(tmp(1255).isNotNullish);
      if (0 === found1.length) {
        return null;
      } else {
        let tmp31 = null;
        if (null != type.accessory) {
          const tmp33 = transformComponent(type.accessory);
          let tmp34 = null;
          if (null != tmp33) {
            tmp34 = tmp33;
          }
          tmp31 = tmp34;
        }
        const obj64 = { type: tmp(2118).ComponentType.SECTION, id: type.id, components: found1, accessory: tmp31 };
        return obj64;
      }
    } else if (tmp(2118).ComponentType.TEXT_DISPLAY === type2) {
      ({ id: obj22.id, content: obj22.content } = type);
      const obj65 = { type: tmp(2118).ComponentType.TEXT_DISPLAY, id: null, content: null };
      return obj65;
    } else if (tmp(2118).ComponentType.THUMBNAIL === type2) {
      const obj66 = { type: tmp(2118).ComponentType.THUMBNAIL, id: type.id, media: tmpResult.toUnfurledMediaItem(type.media), description: null, spoiler: null };
      ({ description: obj20.description, spoiler: obj20.spoiler } = type);
      tmpResult = tmp(6402);
      return obj66;
    } else if (tmp(2118).ComponentType.MEDIA_GALLERY === type2) {
      const obj67 = {
        type: tmp(2118).ComponentType.MEDIA_GALLERY,
        id: null,
        items: items.map((media) => {
              let obj2;
              const obj = { media: obj2.toUnfurledMediaItem(media.media), description: null, spoiler: null };
              ({ description: obj.description, spoiler: obj.spoiler } = media);
              obj2 = getChildComponent(dependencyMap[8]);
              return obj;
            })
      };
      ({ id: obj19.id, items } = type);
      return obj67;
    } else if (tmp(2118).ComponentType.FILE === type2) {
      const obj68 = { type: tmp(2118).ComponentType.FILE, id: type.id, file: tmpResult4.toUnfurledMediaItem(type.file), name: null, size: null, spoiler: null };
      ({ name: obj17.name, size: obj17.size, spoiler: obj17.spoiler } = type);
      tmpResult4 = tmp(6402);
      return obj68;
    } else if (tmp(2118).ComponentType.SEPARATOR === type2) {
      const obj69 = { type: tmp(2118).ComponentType.SEPARATOR, id: null, divider, spacing: SMALL };
      ({ id: obj16.id, divider } = type);
      if (divider == null) {
        divider = true;
      }
      SMALL = type.spacing;
      if (SMALL == null) {
        SMALL = tmp(2118).SeparatorSpacingSize.SMALL;
      }
      return obj69;
    } else if (tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
      let tmp28 = null;
      if (null != type.content_inventory_entry) {
        ({ id: obj15.id, content_inventory_entry: obj15.contentInventoryEntry } = type);
        tmp28 = { type: tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY, id: null, contentInventoryEntry: null };
        const obj70 = { type: tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY, id: null, contentInventoryEntry: null };
      }
      return tmp28;
    } else if (tmp(2118).ComponentType.CONTAINER === type2) {
      const components2 = type.components;
      const mapped2 = components2.map(getChildComponent);
      const obj71 = { type: tmp(2118).ComponentType.CONTAINER, id: null, accentColor: null, spoiler: null, components: found2 };
      found2 = mapped2.filter(tmp(1255).isNotNullish);
      ({ id: obj14.id, accent_color: obj14.accentColor, spoiler: obj14.spoiler } = type);
      return obj71;
    } else if (tmp(2118).ComponentType.LABEL === type2) {
      const tmp23 = transformComponent(type.component);
      let tmp25 = null;
      if (null != tmp23) {
        tmp25 = tmp23;
      }
      let tmp26 = null;
      if (null != tmp25) {
        ({ id: obj13.id, label: obj13.label, description: obj13.description } = type);
        tmp26 = { type: tmp(2118).ComponentType.LABEL, id: null, label: null, description: null, component: tmp25 };
        const obj72 = { type: tmp(2118).ComponentType.LABEL, id: null, label: null, description: null, component: tmp25 };
      }
      return tmp26;
    } else if (tmp(2118).ComponentType.FILE_UPLOAD === type2) {
      const obj73 = { type: null, id: null, customId: null, disabled: null, required: required3, minValues: null, maxValues: null, fileTypes: null };
      ({ type: obj12.type, id: obj12.id, custom_id: obj12.customId, disabled: obj12.disabled, required: required3 } = type);
      if (required3 == null) {
        required3 = false;
      }
      ({ min_values: obj12.minValues, max_values: obj12.maxValues, file_types: obj12.fileTypes } = type);
      return obj73;
    } else if (tmp(2118).ComponentType.CHECKPOINT_CARD === type2) {
      let tmp18;
      const checkpoint_data = type.checkpoint_data;
      const version = checkpoint_data.version;
      if (CheckpointVersions.V2025 === version) {
        ({ type: obj10.type, id: obj10.id } = type);
        const obj74 = { type: null, id: null, checkpointData: tmpResult5.transformCheckpoint2025CardComponent(checkpoint_data) };
        tmp18 = obj74;
        tmpResult5 = tmp(6406);
      } else {
        tmp18 = null;
        if (tmp16.V2026 === version) {
          const tmpResult6 = tmp(6419);
          const result = tmpResult6.transformCheckpoint2026CardComponent(checkpoint_data);
          let tmp20 = null;
          if (null != result) {
            const obj75 = { type: null, id: null, checkpointData: result };
            ({ type: obj9.type, id: obj9.id } = type);
            tmp20 = obj75;
          }
          tmp18 = tmp20;
        }
      }
      return tmp18;
    } else if (tmp(2118).ComponentType.RADIO_GROUP === type2) {
      const obj76 = { type: null, id: null, customId: null, options: null, required: required2 };
      ({ type: obj7.type, id: obj7.id, custom_id: obj7.customId, options: obj7.options, required: required2 } = type);
      if (required2 == null) {
        required2 = false;
      }
      return obj76;
    } else if (tmp(2118).ComponentType.CHECKBOX_GROUP === type2) {
      const obj77 = { type: null, id: null, customId: null, options: null, minValues: null, maxValues: null, required };
      ({ type: obj6.type, id: obj6.id, custom_id: obj6.customId, options: obj6.options, min_values: obj6.minValues, max_values: obj6.maxValues, required } = type);
      if (required == null) {
        required = false;
      }
      return obj77;
    } else if (tmp(2118).ComponentType.CHECKBOX === type2) {
      const obj78 = { type: null, id: null, customId: null, default: null };
      ({ type: obj5.type, id: obj5.id, custom_id: obj5.customId, default: obj5.default } = type);
      return obj78;
    } else if (tmp(2118).ComponentType.OVERFLOW_MENU === type2) {
      const groups = type.groups;
      const mapped3 = groups.map((label) => {
        let mapped;
        const components = label.components;
        const obj = { label: label.label, components: mapped.filter(GlobalUtils.isNotNullish) };
        mapped = components.map(getChildComponent);
        return obj;
      });
      const found3 = mapped3.filter((components) => components.components.length > 0);
      let tmp13 = null;
      if (0 !== found3.length) {
        tmp13 = { type: tmp(2118).ComponentType.OVERFLOW_MENU, id: type.id, groups: found3 };
        const obj79 = { type: tmp(2118).ComponentType.OVERFLOW_MENU, id: type.id, groups: found3 };
      }
      return tmp13;
    } else if (tmp(2118).ComponentType.MENU_ACTION_ITEM === type2) {
      let obj = { type: tmp(2118).ComponentType.MENU_ACTION_ITEM, id: null, customId: null, disabled: null, label: null, style: null, description: null, url: null, emoji: tmp8 };
      ({ id: obj.id, custom_id: obj.customId, disabled: obj.disabled, label: obj.label, style: obj.style, description: obj.description, url: obj.url } = type);
      tmp8 = undefined;
      if (null != type.emoji) {
        let emoji = type.emoji;
        if (typeof getEmoji === "function") {
          const obj80 = { id: null, name: null, animated: null, src: emojiURL };
          ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
          emojiURL = undefined;
          if (null != emoji.id) {
            const obj81 = { id: null, animated, size: 48 };
            ({ id: obj3.id, animated } = emoji);
            let getEmojiURL = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (!animated) {
              animated = false;
            }
            emojiURL = getEmojiURL(obj81);
          }
          tmp8 = obj80;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return obj;
    } else {
      const tmp4 = logger;
      logger.warn("transformComponent: Unknown component type", type.type);
      return null;
    }
  } else {
    return null;
  }
}
const CheckpointVersions = CheckpointConstants.CheckpointVersions;
let tmp2 = new LoggerDefault("InteractionComponentUtils");
const logger = tmp2;
function getEmoji(arg0, arg1) {

}
let result = size.fileFinishedImporting("modules/interaction_components/InteractionComponentUtils.tsx");

export function getLayoutComponentErrorText(interaction, message, accessory) {
  let interactionType;
  if (interaction != null) {
    interactionType = interaction.data.interactionType;
  }
  let componentId = null;
  if (interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
    let state;
    if (interaction != null) {
      state = interaction.state;
    }
    componentId = null;
    if (state === interactions_InteractionTypes.InteractionState.FAILED) {
      componentId = interaction.data.componentId;
    }
  }
  let tmp6 = null;
  if (null != componentId) {
    tmp6 = findChildComponent(accessory, componentId);
  }
  if (null != tmp6) {
    let interactionError;
    if (message != null) {
      interactionError = message.interactionError;
    }
    if (interactionError == null) {
      let stringResult;
      let errorCode;
      if (interaction != null) {
        errorCode = interaction.errorCode;
      }
      if (429 === errorCode) {
        const intl2 = tmp2(1112).intl;
        stringResult = intl2.string(tmp2(1112).t.fitPBS);
      } else {
        let reasonCode;
        if (interaction != null) {
          reasonCode = interaction.reasonCode;
        }
        if (null == reasonCode) {
          const intl = tmp2(1112).intl;
          stringResult = intl.string(tmp2(1112).t.VCsUJu);
        } else {
          const tmp2Result = interactionCallbackErrorReason;
          stringResult = tmp2Result.interactionCallbackErrorReason(interaction.reasonCode, interaction.data.applicationId);
        }
      }
      interactionError = stringResult;
    }
    return interactionError;
  }
}
export function getSelectPlaceholder(placeholder) {
  placeholder = placeholder.placeholder;
  if (placeholder == null) {
    const intl = intl7.intl;
    placeholder = intl.string(intl7.t.Otr6W2);
  }
  return placeholder;
}
export function canSelectBeEmpty(value, modal) {
  let tmp2;
  if ("modal" === modal) {
    tmp2 = !value.required;
  } else {
    tmp2 = 0 === tmp;
  }
  return tmp2;
}
export { flattenComponents };
export { findChildComponent };
export function getAllTextDisplayContent(components) {
  const obj = flattenComponents(components);
  const arr = Array.from(obj.values());
  const found = arr.filter((type) => type.type === Server.ComponentType.TEXT_DISPLAY);
  const mapped = found.map((content) => content.content);
  const joined = mapped.join("\n");
  let tmp2 = null;
  if ("" !== joined) {
    tmp2 = joined;
  }
  return tmp2;
}
export function getFirstInteractionComponentMedia(components) {
  const obj = flattenComponents(components);
  const values = obj.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = require;
    if (nextResult.type === Server.ComponentType.MEDIA_GALLERY) {
      let first = tmp3.items[0];
      let tmp14 = first;
      if (null == first) {
        continue;
      } else {
        let tmp4Result = tmp4(6402);
        let unfurledMediaItemType = tmp4Result.getUnfurledMediaItemType(tmp14.media);
        if ("INVALID" !== unfurledMediaItemType) {
          let obj2 = { type: tmp17, alt: tmp14.description };
          let merged = Object.assign(tmp14.media);
          iter.return();
          return obj2;
        }
      }
    } else if (tmp3.type === tmp4(2118).ComponentType.THUMBNAIL) {
      let tmp4Result2 = tmp4(6402);
      let unfurledMediaItemType1 = tmp4Result2.getUnfurledMediaItemType(tmp3.media);
      if ("INVALID" !== unfurledMediaItemType1) {
        let obj3 = { type: tmp25, alt: tmp3.description };
        let merged1 = Object.assign(tmp3.media);
        iter.return();
        return obj3;
      }
    }
    continue;
  }
  return null;
}
export function getParents(arg0, arg1) {
  let closure_0 = arg1;
  function search(arg0) {
    let id;
    let items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let obj = getComponentChildren(nextResult);
      let tmp5 = obj;
      if (obj.some((id) => id.id === id.id)) {
        let items1 = [tmp3];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 1);
        iter.return();
        return items1;
      } else {
        let items2 = [tmp3];
        let arraySpreadResult2 = HermesBuiltin.arraySpread(items2, items, 1);
        let tmp12 = search(tmp5, items2);
        if (null != tmp12) {
          iter.return();
          return tmp12;
        }
      }
    }
    return null;
  }
  return search(arg0);
}
export function isActionComponent(type) {
  type = type.type;
  if (Server.ComponentType.BUTTON !== type) {
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.TEXT_INPUT !== type) {
        if (Server.ComponentType.USER_SELECT !== type) {
          if (Server.ComponentType.ROLE_SELECT !== type) {
            if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
              if (Server.ComponentType.CHANNEL_SELECT !== type) {
                if (Server.ComponentType.FILE_UPLOAD !== type) {
                  if (Server.ComponentType.RADIO_GROUP !== type) {
                    if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                      if (Server.ComponentType.CHECKBOX !== type) {
                        if (Server.ComponentType.MENU_ACTION_ITEM !== type) {
                          if (Server.ComponentType.ACTION_ROW !== type) {
                            if (Server.ComponentType.SECTION !== type) {
                              if (Server.ComponentType.CONTAINER !== type) {
                                if (Server.ComponentType.LABEL !== type) {
                                  if (Server.ComponentType.OVERFLOW_MENU !== type) {
                                    if (Server.ComponentType.TEXT_DISPLAY !== type) {
                                      if (Server.ComponentType.THUMBNAIL !== type) {
                                        if (Server.ComponentType.MEDIA_GALLERY !== type) {
                                          if (Server.ComponentType.FILE !== type) {
                                            if (Server.ComponentType.SEPARATOR !== type) {
                                              if (Server.ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                                const CHECKPOINT_CARD = tmp(2118).ComponentType.CHECKPOINT_CARD;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return true;
}
export function makeComponentUploadId(containerId) {
  let randomUUIDResult;
  const obj = { type: "component-upload", containerId, uniqueId: randomUUIDResult };
  randomUUIDResult = undefined;
  if (randomUUID != null) {
    randomUUIDResult = randomUUID();
  }
  if (randomUUIDResult == null) {
    const obj2 = v1;
    randomUUIDResult = obj2.v4();
  }
  return JSON.stringify(obj);
}
export function deserializeComponentUploadId(id) {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(id);
    let type;
    if (parsed != null) {
      type = parsed.type;
    }
    let tmp7 = null;
    if ("component-upload" === type) {
      tmp7 = null;
      if (typeof parsed.containerId === "string") {
        tmp7 = null;
        if (typeof parsed.uniqueId === "string") {
          tmp7 = parsed;
        }
      }
    }
    return tmp7;
  } catch (err) {
    return null;
  }
}
export function getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult) {
  let formatResult3;
  if (null != types) {
    let formatResult1;
    if (minValues > 1) {
      let formatResult;
      if (minValues === maxValues) {
        const intl6 = intl7.intl;
        const obj2 = { minValues, types, maxSize: formatSizeResult };
        formatResult = intl6.format(intl7.t.Xp4xMV, obj2);
      } else {
        const intl5 = intl7.intl;
        const obj3 = { minValues, maxValues, types, maxSize: formatSizeResult };
        formatResult = intl5.format(intl7.t["05AyNA"], obj3);
      }
      formatResult1 = formatResult;
    } else {
      const intl4 = intl7.intl;
      const obj4 = { maxValues, types, maxSize: formatSizeResult };
      formatResult1 = intl4.format(intl7.t.QLrHJG, obj4);
    }
    formatResult3 = formatResult1;
  } else if (minValues > 1) {
    let formatResult2;
    if (minValues === maxValues) {
      const intl3 = intl7.intl;
      const obj5 = { minValues, maxSize: formatSizeResult };
      formatResult2 = intl3.format(intl7.t.SAr31z, obj5);
    } else {
      const intl2 = intl7.intl;
      const obj6 = { minValues, maxValues, maxSize: formatSizeResult };
      formatResult2 = intl2.format(intl7.t["ZG+3Ck"], obj6);
    }
    formatResult3 = formatResult2;
  } else {
    const intl = intl7.intl;
    const obj = { maxValues, maxSize: formatSizeResult };
    formatResult3 = intl.format(intl7.t.tyxwW1, obj);
  }
  return formatResult3;
}
export function transformComponents(arr) {
  const mapped = arr.map(transformComponent);
  return mapped.filter((item) => null != item);
}
export function getOverflowMenuComponentActionSheetKey(messageId, id) {
  return "OverflowMenuComponentActionSheet:" + messageId + ":" + id;
}
