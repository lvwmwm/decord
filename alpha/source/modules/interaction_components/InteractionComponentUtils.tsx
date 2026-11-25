// Module ID: 6364
// Function ID: 6365
// Name: InteractionComponentUtils
// Dependencies: [6365, 3, 1412, 1112, 6367, 6369, 6370, 2117, 6371, 1268, 1254, 6374, 6375, 6388, 2]
// Exports: canSelectBeEmpty, deserializeComponentUploadId, getAllTextDisplayContent, getFileUploadComponentSubtitle, getFirstInteractionComponentMedia, getLayoutComponentErrorText, getOverflowMenuComponentActionSheetKey, getParents, getSelectPlaceholder, isActionComponent, makeComponentUploadId, transformComponents

// Module 6364 (InteractionComponentUtils)
import LoggerDefault from "Logger" /* 3 */;
import intl7 from "intl" /* 1112 */;
import v1 from "v1" /* 1268 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import Server from "Server" /* 2117 */;
import CheckpointConstants from "CheckpointConstants" /* 6365 */;
import interactionCallbackErrorReason from "interactionCallbackErrorReason" /* 6367 */;
import InteractionTypes from "InteractionTypes" /* 6369 */;
import interactions_InteractionTypes from "interactions/InteractionTypes" /* 6370 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

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
    const items = [];
    items[HermesBuiltin.arraySpread(items, nextResult.components, 0)] = nextResult.accessory;
    return items;
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
function transformComponent(type, join) {
  let SMALL;
  let animated;
  let animated2;
  let c1;
  let emojiURL;
  let emojiURL2;
  let flag2;
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
  let tmpResult29;
  let tmpResult30;
  let tmpResult31;
  let tmpResult32;
  let tmpResult33;
  let tmpResult34;
  let tmpResult35;
  let tmpResult36;
  let tmpResult37;
  let tmpResult38;
  let tmpResult39;
  let tmpResult40;
  let tmpResult41;
  let tmpResult42;
  let tmpResult43;
  let tmpResult44;
  let tmpResult45;
  let tmpResult46;
  let tmpResult47;
  let tmpResult48;
  let tmpResult49;
  let tmpResult51;
  let tmpResult52;
  let tmpResult53;
  let tmpResult54;
  let tmpResult55;
  let tmpResult56;
  _require = join;
  type = type.type;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let flag = true;
  if (require("Server").ComponentType.ACTION_ROW !== type) {
    flag = true;
    if (tmp(2117).ComponentType.BUTTON !== type) {
      flag = true;
      if (tmp(2117).ComponentType.STRING_SELECT !== type) {
        flag = true;
        if (tmp(2117).ComponentType.TEXT_INPUT !== type) {
          flag = true;
          if (tmp(2117).ComponentType.USER_SELECT !== type) {
            flag = true;
            if (tmp(2117).ComponentType.ROLE_SELECT !== type) {
              flag = true;
              if (tmp(2117).ComponentType.MENTIONABLE_SELECT !== type) {
                flag = true;
                if (tmp(2117).ComponentType.CHANNEL_SELECT !== type) {
                  flag = true;
                  if (tmp(2117).ComponentType.SECTION !== type) {
                    flag = true;
                    if (tmp(2117).ComponentType.TEXT_DISPLAY !== type) {
                      flag = true;
                      if (tmp(2117).ComponentType.THUMBNAIL !== type) {
                        flag = true;
                        if (tmp(2117).ComponentType.MEDIA_GALLERY !== type) {
                          flag = true;
                          if (tmp(2117).ComponentType.FILE !== type) {
                            flag = true;
                            if (tmp(2117).ComponentType.SEPARATOR !== type) {
                              flag = true;
                              if (tmp(2117).ComponentType.CONTAINER !== type) {
                                flag = true;
                                if (tmp(2117).ComponentType.LABEL !== type) {
                                  flag = true;
                                  if (tmp(2117).ComponentType.FILE_UPLOAD !== type) {
                                    flag = true;
                                    if (tmp(2117).ComponentType.CHECKPOINT_CARD !== type) {
                                      flag = true;
                                      if (tmp(2117).ComponentType.RADIO_GROUP !== type) {
                                        flag = true;
                                        if (tmp(2117).ComponentType.CHECKBOX_GROUP !== type) {
                                          flag = true;
                                          if (tmp(2117).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (tmp(2117).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              flag = true;
                                              if (tmp(2117).ComponentType.OVERFLOW_MENU !== type) {
                                                flag = true;
                                                if (tmp(2117).ComponentType.MENU_ACTION_ITEM !== type) {
                                                  const UNKNOWN = tmp(2117).ComponentType.UNKNOWN;
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
    if (tmp(2117).ComponentType.ACTION_ROW === type2) {
      let components = type.components;
      let mapped = components.map((item, index) => {
        const tmp = transformComponent(item, join.concat(index));
        let tmp2 = null;
        if (null != tmp) {
          tmp2 = tmp;
        }
        return tmp2;
      });
      let obj2 = { type: tmp(2117).ComponentType.ACTION_ROW, id: tmpResult.asComponentId(join.join(",")), components: found };
      found = mapped.filter(tmp(1254).isNotNullish);
      tmpResult = tmp(6374);
      return obj2;
    } else if (tmp(2117).ComponentType.BUTTON === type2) {
      let tmp41;
      if (null != type.emoji) {
        const emoji2 = type.emoji;
        if (typeof getEmoji === "function") {
          let obj5 = { id: null, name: null, animated: null, src: emojiURL2 };
          ({ id: obj52.id, name: obj52.name, animated: obj52.animated } = emoji2);
          emojiURL2 = undefined;
          if (null != emoji2.id) {
            let obj6 = { id: null, animated: animated2, size: 48 };
            ({ id: obj53.id, animated: animated2 } = emoji2);
            const getEmojiURL2 = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (!animated2) {
              animated2 = false;
            }
            emojiURL2 = getEmojiURL2(obj6);
          }
          tmp41 = obj5;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj8 = { type: tmp(2117).ComponentType.BUTTON, id: tmpResult29.asComponentId(join.join(",")), customId: null, style: null, disabled: null, url: null, label: null, emoji: tmp41, skuId: type.sku_id };
      ({ custom_id: obj54.customId, style: obj54.style, disabled: obj54.disabled, url: obj54.url, label: obj54.label } = type);
      tmpResult29 = tmp(6374);
      return obj8;
    } else if (tmp(2117).ComponentType.STRING_SELECT === type2) {
      const obj10 = {
        type: tmp(2117).ComponentType.STRING_SELECT,
        id: tmpResult30.asComponentId(join.join(",")),
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
      ({ custom_id: obj50.customId, disabled: obj50.disabled, required: required9 } = type);
      tmpResult30 = tmp(6374);
      if (required9 == null) {
        required9 = false;
      }
      options = type.options;
      ({ placeholder: obj50.placeholder, min_values: obj50.minValues, max_values: obj50.maxValues } = type);
      return obj10;
    } else if (tmp(2117).ComponentType.TEXT_INPUT === type2) {
      const obj12 = { type: type.type, id: tmpResult31.asComponentId(join.join(",")), style: null, customId: null, label: null, value: null, placeholder: null, disabled: null, required: required8, minLength: null, maxLength: null };
      ({ style: obj48.style, custom_id: obj48.customId, label: obj48.label, value: obj48.value, placeholder: obj48.placeholder, disabled: obj48.disabled, required: required8 } = type);
      tmpResult31 = tmp(6374);
      if (required8 == null) {
        required8 = false;
      }
      ({ min_length: obj48.minLength, max_length: obj48.maxLength } = type);
      return obj12;
    } else if (tmp(2117).ComponentType.USER_SELECT === type2) {
      const obj13 = { type: tmp(2117).ComponentType.USER_SELECT, id: tmpResult32.asComponentId(join.join(",")), customId: null, disabled: null, required: required7, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj46.customId, disabled: obj46.disabled, required: required7 } = type);
      tmpResult32 = tmp(6374);
      if (required7 == null) {
        required7 = false;
      }
      ({ placeholder: obj46.placeholder, min_values: obj46.minValues, max_values: obj46.maxValues, default_values: obj46.defaultValues } = type);
      return obj13;
    } else if (tmp(2117).ComponentType.ROLE_SELECT === type2) {
      const obj14 = { type: tmp(2117).ComponentType.ROLE_SELECT, id: tmpResult33.asComponentId(join.join(",")), customId: null, disabled: null, required: required6, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj44.customId, disabled: obj44.disabled, required: required6 } = type);
      tmpResult33 = tmp(6374);
      if (required6 == null) {
        required6 = false;
      }
      ({ placeholder: obj44.placeholder, min_values: obj44.minValues, max_values: obj44.maxValues, default_values: obj44.defaultValues } = type);
      return obj14;
    } else if (tmp(2117).ComponentType.MENTIONABLE_SELECT === type2) {
      const obj15 = { type: tmp(2117).ComponentType.MENTIONABLE_SELECT, id: tmpResult34.asComponentId(join.join(",")), customId: null, disabled: null, required: required5, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj42.customId, disabled: obj42.disabled, required: required5 } = type);
      tmpResult34 = tmp(6374);
      if (required5 == null) {
        required5 = false;
      }
      ({ placeholder: obj42.placeholder, min_values: obj42.minValues, max_values: obj42.maxValues, default_values: obj42.defaultValues } = type);
      return obj15;
    } else if (tmp(2117).ComponentType.CHANNEL_SELECT === type2) {
      const obj16 = { type: tmp(2117).ComponentType.CHANNEL_SELECT, id: tmpResult35.asComponentId(join.join(",")), customId: null, disabled: null, required: required4, placeholder: null, minValues: null, maxValues: null, channelTypes: null, defaultValues: null };
      ({ custom_id: obj40.customId, disabled: obj40.disabled, required: required4 } = type);
      tmpResult35 = tmp(6374);
      if (required4 == null) {
        required4 = false;
      }
      ({ placeholder: obj40.placeholder, min_values: obj40.minValues, max_values: obj40.maxValues, channel_types: obj40.channelTypes, default_values: obj40.defaultValues } = type);
      return obj16;
    } else if (tmp(2117).ComponentType.SECTION === type2) {
      const components1 = type.components;
      const mapped1 = components1.map((item, index) => {
        const tmp = transformComponent(item, join.concat(index));
        let tmp2 = null;
        if (null != tmp) {
          tmp2 = tmp;
        }
        return tmp2;
      });
      const found1 = mapped1.filter(tmp(1254).isNotNullish);
      const tmp30 = transformComponent(type.accessory, join.concat(found1.length));
      let tmp32 = null;
      if (null != tmp30) {
        tmp32 = tmp30;
      }
      let tmp33 = null;
      if (0 !== found1.length) {
        tmp33 = null;
        if (null != tmp32) {
          const obj17 = { type: tmp(2117).ComponentType.SECTION, id: tmpResult36.asComponentId(join.join(",")), components: found1, accessory: tmp32 };
          tmp33 = obj17;
          tmpResult36 = tmp(6374);
        }
      }
      return tmp33;
    } else if (tmp(2117).ComponentType.TEXT_DISPLAY === type2) {
      const obj19 = { type: tmp(2117).ComponentType.TEXT_DISPLAY, id: tmpResult37.asComponentId(join.join(",")), content: type.content };
      tmpResult37 = tmp(6374);
      return obj19;
    } else if (tmp(2117).ComponentType.THUMBNAIL === type2) {
      const obj21 = { type: tmp(2117).ComponentType.THUMBNAIL, id: tmpResult38.asComponentId(join.join(",")), media: tmpResult39.toUnfurledMediaItem(type.media), description: null, spoiler: null };
      tmpResult38 = tmp(6374);
      ({ description: obj33.description, spoiler: obj33.spoiler } = type);
      tmpResult39 = tmp(6371);
      return obj21;
    } else if (tmp(2117).ComponentType.MEDIA_GALLERY === type2) {
      const obj23 = {
        type: tmp(2117).ComponentType.MEDIA_GALLERY,
        id: tmpResult40.asComponentId(join.join(",")),
        items: items.map((media) => {
              let obj2;
              const obj = { media: obj2.toUnfurledMediaItem(media.media), description: null, spoiler: null };
              ({ description: obj.description, spoiler: obj.spoiler } = media);
              obj2 = join(dependencyMap[8]);
              return obj;
            })
      };
      items = type.items;
      tmpResult40 = tmp(6374);
      return obj23;
    } else if (tmp(2117).ComponentType.FILE === type2) {
      const obj24 = { type: tmp(2117).ComponentType.FILE, id: tmpResult41.asComponentId(join.join(",")), file: tmpResult42.toUnfurledMediaItem(type.file), name: null, size: null, spoiler: null };
      tmpResult41 = tmp(6374);
      ({ name: obj28.name, size: obj28.size, spoiler: obj28.spoiler } = type);
      tmpResult42 = tmp(6371);
      return obj24;
    } else if (tmp(2117).ComponentType.SEPARATOR === type2) {
      const obj25 = { type: tmp(2117).ComponentType.SEPARATOR, id: tmpResult43.asComponentId(join.join(",")), divider: flag2, spacing: SMALL };
      flag2 = type.divider;
      tmpResult43 = tmp(6374);
      if (flag2 == null) {
        flag2 = true;
      }
      SMALL = type.spacing;
      if (SMALL == null) {
        SMALL = tmp(2117).SeparatorSpacingSize.SMALL;
      }
      return obj25;
    } else if (tmp(2117).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
      let tmp27 = null;
      if (null != type.content_inventory_entry) {
        const obj26 = { type: tmp(2117).ComponentType.CONTENT_INVENTORY_ENTRY, id: tmpResult44.asComponentId(join.join(",")), contentInventoryEntry: type.content_inventory_entry };
        tmp27 = obj26;
        tmpResult44 = tmp(6374);
      }
      return tmp27;
    } else if (tmp(2117).ComponentType.CONTAINER === type2) {
      const components2 = type.components;
      const mapped2 = components2.map((item, index) => {
        const tmp = transformComponent(item, join.concat(index));
        let tmp2 = null;
        if (null != tmp) {
          tmp2 = tmp;
        }
        return tmp2;
      });
      const obj27 = { type: tmp(2117).ComponentType.CONTAINER, id: tmpResult45.asComponentId(join.join(",")), accentColor: null, spoiler: null, components: found2 };
      found2 = mapped2.filter(tmp(1254).isNotNullish);
      ({ accent_color: obj22.accentColor, spoiler: obj22.spoiler } = type);
      tmpResult45 = tmp(6374);
      return obj27;
    } else if (tmp(2117).ComponentType.LABEL === type2) {
      const tmp22 = transformComponent(type.component, join.concat(0));
      let tmp24 = null;
      if (null != tmp22) {
        tmp24 = tmp22;
      }
      let tmp25 = null;
      if (null != tmp24) {
        const obj29 = { type: tmp(2117).ComponentType.LABEL, id: tmpResult46.asComponentId(join.join(",")), label: null, description: null, component: tmp24 };
        ({ label: obj20.label, description: obj20.description } = type);
        tmp25 = obj29;
        tmpResult46 = tmp(6374);
      }
      return tmp25;
    } else if (tmp(2117).ComponentType.FILE_UPLOAD === type2) {
      const obj30 = { type: type.type, id: tmpResult47.asComponentId(join.join(",")), customId: null, disabled: null, required: required3, minValues: null, maxValues: null, fileTypes: null };
      ({ custom_id: obj18.customId, disabled: obj18.disabled, required: required3 } = type);
      tmpResult47 = tmp(6374);
      if (required3 == null) {
        required3 = false;
      }
      ({ min_values: obj18.minValues, max_values: obj18.maxValues, file_types: obj18.fileTypes } = type);
      return obj30;
    } else if (tmp(2117).ComponentType.CHECKPOINT_CARD === type2) {
      let tmp18;
      const checkpoint_data = type.checkpoint_data;
      const version = checkpoint_data.version;
      if (CheckpointVersions.V2025 === version) {
        const obj31 = { type: type.type, id: tmpResult48.asComponentId(join.join(",")), checkpointData: tmpResult49.transformCheckpoint2025CardComponent(checkpoint_data) };
        tmpResult48 = tmp(6374);
        tmp18 = obj31;
        tmpResult49 = tmp(6375);
      } else {
        tmp18 = null;
        if (tmp16.V2026 === version) {
          const tmpResult50 = tmp(6388);
          const result = tmpResult50.transformCheckpoint2026CardComponent(checkpoint_data);
          let tmp19 = null;
          if (null != result) {
            const obj32 = { type: type.type, id: tmpResult51.asComponentId(join.join(",")), checkpointData: result };
            tmp19 = obj32;
            tmpResult51 = tmp(6374);
          }
          tmp18 = tmp19;
        }
      }
      return tmp18;
    } else if (tmp(2117).ComponentType.RADIO_GROUP === type2) {
      const obj34 = { type: type.type, id: tmpResult52.asComponentId(join.join(",")), customId: null, options: null, required: required2 };
      ({ custom_id: obj11.customId, options: obj11.options, required: required2 } = type);
      tmpResult52 = tmp(6374);
      if (required2 == null) {
        required2 = false;
      }
      return obj34;
    } else if (tmp(2117).ComponentType.CHECKBOX_GROUP === type2) {
      const obj35 = { type: type.type, id: tmpResult53.asComponentId(join.join(",")), customId: null, options: null, minValues: null, maxValues: null, required };
      ({ custom_id: obj9.customId, options: obj9.options, min_values: obj9.minValues, max_values: obj9.maxValues, required } = type);
      tmpResult53 = tmp(6374);
      if (required == null) {
        required = false;
      }
      return obj35;
    } else if (tmp(2117).ComponentType.CHECKBOX === type2) {
      const obj36 = { type: type.type, id: tmpResult54.asComponentId(join.join(",")), customId: null, default: null };
      ({ custom_id: obj7.customId, default: obj7.default } = type);
      tmpResult54 = tmp(6374);
      return obj36;
    } else if (tmp(2117).ComponentType.OVERFLOW_MENU === type2) {
      const groups = type.groups;
      const mapped3 = groups.map((label, index) => {
        let mapped;
        join = index;
        const components = label.components;
        const obj = { label: label.label, components: mapped.filter(join(dependencyMap[10]).isNotNullish) };
        mapped = components.map((item, index) => {
          const items = [index, index];
          const tmp = closure_1_10(item, index.concat(items));
          let tmp2 = null;
          if (null != tmp) {
            tmp2 = tmp;
          }
          return tmp2;
        });
        return obj;
      });
      const found3 = mapped3.filter((components) => components.components.length > 0);
      let tmp13 = null;
      if (0 !== found3.length) {
        const obj37 = { type: tmp(2117).ComponentType.OVERFLOW_MENU, id: tmpResult55.asComponentId(join.join(",")), groups: found3 };
        tmp13 = obj37;
        tmpResult55 = tmp(6374);
      }
      return tmp13;
    } else if (tmp(2117).ComponentType.MENU_ACTION_ITEM === type2) {
      let obj = { type: tmp(2117).ComponentType.MENU_ACTION_ITEM, id: tmpResult56.asComponentId(join.join(",")), customId: null, disabled: null, label: null, style: null, description: null, url: null, emoji: tmp8 };
      ({ custom_id: obj.customId, disabled: obj.disabled, label: obj.label, style: obj.style, description: obj.description, url: obj.url } = type);
      tmp8 = undefined;
      tmpResult56 = tmp(6374);
      if (null != type.emoji) {
        let emoji = type.emoji;
        if (typeof getEmoji === "function") {
          const obj38 = { id: null, name: null, animated: null, src: emojiURL };
          ({ id: obj3.id, name: obj3.name, animated: obj3.animated } = emoji);
          emojiURL = undefined;
          if (null != emoji.id) {
            const obj39 = { id: null, animated, size: 48 };
            ({ id: obj4.id, animated } = emoji);
            let getEmojiURL = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (!animated) {
              animated = false;
            }
            emojiURL = getEmojiURL(obj39);
          }
          tmp8 = obj38;
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
  const found = arr.filter((type) => type.type === require("Server").ComponentType.TEXT_DISPLAY);
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
        let tmp4Result = tmp4(6371);
        let unfurledMediaItemType = tmp4Result.getUnfurledMediaItemType(tmp14.media);
        if ("INVALID" !== unfurledMediaItemType) {
          let obj2 = { type: tmp17, alt: tmp14.description };
          let merged = Object.assign(tmp14.media);
          iter.return();
          return obj2;
        }
      }
    } else if (tmp3.type === tmp4(2117).ComponentType.THUMBNAIL) {
      let tmp4Result2 = tmp4(6371);
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
                                                const CHECKPOINT_CARD = tmp(2117).ComponentType.CHECKPOINT_CARD;
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
  const mapped = arr.map((item, index) => {
    const items = [index];
    return transformComponent(item, items);
  });
  return mapped.filter((item) => null != item);
}
export function getOverflowMenuComponentActionSheetKey(messageId, id) {
  return "OverflowMenuComponentActionSheet:" + messageId + ":" + id;
}
