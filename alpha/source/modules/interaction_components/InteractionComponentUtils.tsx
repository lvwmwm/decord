// Module ID: 5536
// Function ID: 5537
// Name: InteractionComponentUtils
// Dependencies: [5537, 3, 1417, 1128, 5539, 5542, 5543, 2000, 5544, 1281, 1388, 5545, 5546, 5559, 2]
// Exports: canSelectBeEmpty, deserializeComponentUploadId, getAllTextDisplayContent, getFileUploadComponentSubtitle, getFirstInteractionComponentMedia, getLayoutComponentErrorText, getParents, getSelectPlaceholder, makeComponentUploadId, transformComponents

// Module 5536 (InteractionComponentUtils)
import LoggerDefault from "Logger" /* 3 */;
import intl7 from "intl" /* 1128 */;
import v1 from "v1" /* 1281 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import Server from "Server" /* 2000 */;
import CheckpointConstants from "CheckpointConstants" /* 5537 */;
import interactionCallbackErrorReason from "interactionCallbackErrorReason" /* 5539 */;
import InteractionTypes from "InteractionTypes" /* 5542 */;
import interactions_InteractionTypes from "interactions/InteractionTypes" /* 5543 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5545 */;
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
function flattenComponent(map, accessory) {
  const f93316 = (id) => {
    const result = closure_0.set(id.id, id);
    const type = id.type;
    if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type) {
      const components = id.components;
      const item = components.forEach(f93316);
    } else if (closure_2_0(closure_2_2[7]).ComponentType.SECTION === type) {
      const components1 = id.components;
      const item1 = components1.forEach(f93317);
      const accessory = id.accessory;
      const result1 = obj.set(accessory.id, accessory);
      const type2 = accessory.type;
      if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type2) {
        const components2 = accessory.components;
        const item2 = components2.forEach(f93316);
      } else if (closure_2_0(closure_2_2[7]).ComponentType.SECTION === type2) {
        const components3 = accessory.components;
        const item3 = components3.forEach(f93317);
        closure_2_7(closure_0, accessory.accessory);
      } else if (closure_2_0(closure_2_2[7]).ComponentType.CONTAINER === type2) {
        const components4 = accessory.components;
        const item4 = components4.forEach(f93318);
      }
    } else if (closure_2_0(closure_2_2[7]).ComponentType.CONTAINER === type) {
      const components5 = id.components;
      const item5 = components5.forEach(f93318);
    }
  };
  const f93317 = (id) => {
    let closure_0 = obj;
    let result = obj.set(id.id, id);
    let type = id.type;
    let tmp2 = closure_2_0;
    let tmp3 = closure_2_2;
    if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type) {
      let components = id.components;
      let item = components.forEach(f93316);
    } else if (tmp2(tmp3[7]).ComponentType.SECTION === type) {
      let components1 = id.components;
      let item1 = components1.forEach(f93317);
      let accessory = id.accessory;
      let result1 = obj.set(accessory.id, accessory);
      let type2 = accessory.type;
      if (tmp2(tmp3[7]).ComponentType.ACTION_ROW === type2) {
        let components2 = accessory.components;
        let item2 = components2.forEach(f93316);
      } else if (tmp2(tmp3[7]).ComponentType.SECTION === type2) {
        let components3 = accessory.components;
        let item3 = components3.forEach(f93317);
        let tmp8 = closure_2_7;
        let num = 0;
        let tmp9 = closure_2_7(obj, accessory.accessory);
      } else if (tmp2(tmp3[7]).ComponentType.CONTAINER === type2) {
        let components4 = accessory.components;
        let item4 = components4.forEach(f93318);
      }
    } else if (tmp2(tmp3[7]).ComponentType.CONTAINER === type) {
      let components5 = id.components;
      let item5 = components5.forEach(f93318);
    }
  };
  const f93318 = (id) => {
    obj = closure_1_0;
    let closure_0 = closure_1_0;
    let result = closure_1_0.set(id.id, id);
    let type = id.type;
    let tmp2 = obj;
    let tmp3 = closure_2_2;
    if (obj(closure_2_2[7]).ComponentType.ACTION_ROW === type) {
      let components = id.components;
      let item = components.forEach(f93316);
    } else if (tmp2(tmp3[7]).ComponentType.SECTION === type) {
      let components1 = id.components;
      let item1 = components1.forEach(f93317);
      let accessory = id.accessory;
      let result1 = obj.set(accessory.id, accessory);
      let type2 = accessory.type;
      if (tmp2(tmp3[7]).ComponentType.ACTION_ROW === type2) {
        let components2 = accessory.components;
        let item2 = components2.forEach(f93316);
      } else if (tmp2(tmp3[7]).ComponentType.SECTION === type2) {
        let components3 = accessory.components;
        let item3 = components3.forEach(f93317);
        let tmp8 = closure_2_7;
        let num = 0;
        let tmp9 = closure_2_7(obj, accessory.accessory);
      } else if (tmp2(tmp3[7]).ComponentType.CONTAINER === type2) {
        let components4 = accessory.components;
        let item4 = components4.forEach(f93318);
      }
    } else if (tmp2(tmp3[7]).ComponentType.CONTAINER === type) {
      let components5 = id.components;
      let item5 = components5.forEach(f93318);
    }
  };
  _require = map;
  const result = map.set(accessory.id, accessory);
  const type = accessory.type;
  if (require("Server").ComponentType.ACTION_ROW === type) {
    const components = accessory.components;
    const item = components.forEach(f93316);
  } else if (require("Server").ComponentType.SECTION === type) {
    const components1 = accessory.components;
    const item1 = components1.forEach(f93317);
    flattenComponent(map, accessory.accessory);
  } else if (require("Server").ComponentType.CONTAINER === type) {
    const components2 = accessory.components;
    const item2 = components2.forEach(f93318);
  }
}
function findChildComponent(type, componentId) {
  let closure_0 = componentId;
  type = type.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    const components = type.components;
    let found = components.find((id) => id.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  } else if (Server.ComponentType.SECTION === type) {
    let accessory;
    if (type.accessory.id === componentId) {
      accessory = type.accessory;
    } else {
      const components1 = type.components;
      accessory = components1.find((id) => id.id === closure_0);
      if (accessory == null) {
        accessory = null;
      }
    }
    return accessory;
  } else if (Server.ComponentType.CONTAINER === type) {
    const components2 = type.components;
    let found1 = components2.find((id) => id.id === closure_0);
    if (found1 == null) {
      found1 = null;
    }
    return found1;
  }
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
  } else {
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
    return [];
  }
}
function transformComponent(type, join) {
  let SMALL;
  let animated;
  let c1;
  let emojiURL;
  let flag2;
  let found;
  let found2;
  let items1;
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
  let tmp2Result;
  let tmp2Result27;
  let tmp2Result28;
  let tmp2Result29;
  let tmp2Result30;
  let tmp2Result31;
  let tmp2Result32;
  let tmp2Result33;
  let tmp2Result34;
  let tmp2Result35;
  let tmp2Result36;
  let tmp2Result37;
  let tmp2Result38;
  let tmp2Result39;
  let tmp2Result40;
  let tmp2Result41;
  let tmp2Result42;
  let tmp2Result43;
  let tmp2Result44;
  let tmp2Result45;
  let tmp2Result46;
  let tmp2Result47;
  let tmp2Result49;
  let tmp2Result50;
  let tmp2Result51;
  let tmp2Result52;
  _require = join;
  type = type.type;
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let flag = true;
  if (require("Server").ComponentType.ACTION_ROW !== type) {
    flag = true;
    if (tmp2(2000).ComponentType.BUTTON !== type) {
      flag = true;
      if (tmp2(2000).ComponentType.STRING_SELECT !== type) {
        flag = true;
        if (tmp2(2000).ComponentType.TEXT_INPUT !== type) {
          flag = true;
          if (tmp2(2000).ComponentType.USER_SELECT !== type) {
            flag = true;
            if (tmp2(2000).ComponentType.ROLE_SELECT !== type) {
              flag = true;
              if (tmp2(2000).ComponentType.MENTIONABLE_SELECT !== type) {
                flag = true;
                if (tmp2(2000).ComponentType.CHANNEL_SELECT !== type) {
                  flag = true;
                  if (tmp2(2000).ComponentType.SECTION !== type) {
                    flag = true;
                    if (tmp2(2000).ComponentType.TEXT_DISPLAY !== type) {
                      flag = true;
                      if (tmp2(2000).ComponentType.THUMBNAIL !== type) {
                        flag = true;
                        if (tmp2(2000).ComponentType.MEDIA_GALLERY !== type) {
                          flag = true;
                          if (tmp2(2000).ComponentType.FILE !== type) {
                            flag = true;
                            if (tmp2(2000).ComponentType.SEPARATOR !== type) {
                              flag = true;
                              if (tmp2(2000).ComponentType.CONTAINER !== type) {
                                flag = true;
                                if (tmp2(2000).ComponentType.LABEL !== type) {
                                  flag = true;
                                  if (tmp2(2000).ComponentType.FILE_UPLOAD !== type) {
                                    flag = true;
                                    if (tmp2(2000).ComponentType.CHECKPOINT_CARD !== type) {
                                      flag = true;
                                      if (tmp2(2000).ComponentType.RADIO_GROUP !== type) {
                                        flag = true;
                                        if (tmp2(2000).ComponentType.CHECKBOX_GROUP !== type) {
                                          flag = true;
                                          if (tmp2(2000).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (tmp2(2000).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              const UNKNOWN = tmp2(2000).ComponentType.UNKNOWN;
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
  if (flag) {
    importDefault = true;
    const type2 = type.type;
    if (tmp2(2000).ComponentType.ACTION_ROW === type2) {
      const components = type.components;
      const mapped = components.map((item, index) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, join, 0)] = index;
        const tmp2 = transformComponent(item, items);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        return tmp3;
      });
      let obj2 = { type: tmp2(2000).ComponentType.ACTION_ROW, id: tmp2Result.asComponentId(join.join(",")), components: found };
      found = mapped.filter(tmp2(1388).isNotNullish);
      tmp2Result = tmp2(5545);
      return obj2;
    } else if (tmp2(2000).ComponentType.BUTTON === type2) {
      let tmp39;
      if (null != type.emoji) {
        let emoji = type.emoji;
        if (typeof getEmoji === "function") {
          const obj4 = { id: null, name: null, animated: null, src: emojiURL };
          ({ id: obj46.id, name: obj46.name, animated: obj46.animated } = emoji);
          emojiURL = undefined;
          if (null != emoji.id) {
            let obj6 = { id: null, animated, size: 48 };
            ({ id: obj47.id, animated } = emoji);
            let getEmojiURL = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (!animated) {
              animated = false;
            }
            emojiURL = getEmojiURL(obj6);
          }
          tmp39 = obj4;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj7 = { type: tmp2(2000).ComponentType.BUTTON, id: tmp2Result27.asComponentId(join.join(",")), customId: null, style: null, disabled: null, url: null, label: null, emoji: tmp39, skuId: type.sku_id };
      ({ custom_id: obj48.customId, style: obj48.style, disabled: obj48.disabled, url: obj48.url, label: obj48.label } = type);
      tmp2Result27 = tmp2(5545);
      return obj7;
    } else if (tmp2(2000).ComponentType.STRING_SELECT === type2) {
      const obj8 = {
        type: tmp2(2000).ComponentType.STRING_SELECT,
        id: tmp2Result28.asComponentId(join.join(",")),
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
      ({ custom_id: obj44.customId, disabled: obj44.disabled, required: required9 } = type);
      tmp2Result28 = tmp2(5545);
      if (required9 == null) {
        required9 = false;
      }
      options = type.options;
      ({ placeholder: obj44.placeholder, min_values: obj44.minValues, max_values: obj44.maxValues } = type);
      return obj8;
    } else if (tmp2(2000).ComponentType.TEXT_INPUT === type2) {
      const obj9 = { type: type.type, id: tmp2Result29.asComponentId(join.join(",")), style: null, customId: null, label: null, value: null, placeholder: null, disabled: null, required: required8, minLength: null, maxLength: null };
      ({ style: obj42.style, custom_id: obj42.customId, label: obj42.label, value: obj42.value, placeholder: obj42.placeholder, disabled: obj42.disabled, required: required8 } = type);
      tmp2Result29 = tmp2(5545);
      if (required8 == null) {
        required8 = false;
      }
      ({ min_length: obj42.minLength, max_length: obj42.maxLength } = type);
      return obj9;
    } else if (tmp2(2000).ComponentType.USER_SELECT === type2) {
      const obj10 = { type: tmp2(2000).ComponentType.USER_SELECT, id: tmp2Result30.asComponentId(join.join(",")), customId: null, disabled: null, required: required7, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj40.customId, disabled: obj40.disabled, required: required7 } = type);
      tmp2Result30 = tmp2(5545);
      if (required7 == null) {
        required7 = false;
      }
      ({ placeholder: obj40.placeholder, min_values: obj40.minValues, max_values: obj40.maxValues, default_values: obj40.defaultValues } = type);
      return obj10;
    } else if (tmp2(2000).ComponentType.ROLE_SELECT === type2) {
      const obj11 = { type: tmp2(2000).ComponentType.ROLE_SELECT, id: tmp2Result31.asComponentId(join.join(",")), customId: null, disabled: null, required: required6, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj38.customId, disabled: obj38.disabled, required: required6 } = type);
      tmp2Result31 = tmp2(5545);
      if (required6 == null) {
        required6 = false;
      }
      ({ placeholder: obj38.placeholder, min_values: obj38.minValues, max_values: obj38.maxValues, default_values: obj38.defaultValues } = type);
      return obj11;
    } else if (tmp2(2000).ComponentType.MENTIONABLE_SELECT === type2) {
      const obj13 = { type: tmp2(2000).ComponentType.MENTIONABLE_SELECT, id: tmp2Result32.asComponentId(join.join(",")), customId: null, disabled: null, required: required5, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj36.customId, disabled: obj36.disabled, required: required5 } = type);
      tmp2Result32 = tmp2(5545);
      if (required5 == null) {
        required5 = false;
      }
      ({ placeholder: obj36.placeholder, min_values: obj36.minValues, max_values: obj36.maxValues, default_values: obj36.defaultValues } = type);
      return obj13;
    } else if (tmp2(2000).ComponentType.CHANNEL_SELECT === type2) {
      const obj15 = { type: tmp2(2000).ComponentType.CHANNEL_SELECT, id: tmp2Result33.asComponentId(join.join(",")), customId: null, disabled: null, required: required4, placeholder: null, minValues: null, maxValues: null, channelTypes: null, defaultValues: null };
      ({ custom_id: obj34.customId, disabled: obj34.disabled, required: required4 } = type);
      tmp2Result33 = tmp2(5545);
      if (required4 == null) {
        required4 = false;
      }
      ({ placeholder: obj34.placeholder, min_values: obj34.minValues, max_values: obj34.maxValues, channel_types: obj34.channelTypes, default_values: obj34.defaultValues } = type);
      return obj15;
    } else if (tmp2(2000).ComponentType.SECTION === type2) {
      const components1 = type.components;
      const mapped1 = components1.map((item, index) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, join, 0)] = index;
        const tmp2 = transformComponent(item, items);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        return tmp3;
      });
      const found1 = mapped1.filter(tmp2(1388).isNotNullish);
      let items = [];
      items[HermesBuiltin.arraySpread(items, join, 0)] = found1.length;
      const tmp28 = transformComponent(type.accessory, items);
      let tmp30 = null;
      if (null != tmp28) {
        tmp30 = tmp28;
      }
      let tmp31 = null;
      if (0 !== found1.length) {
        tmp31 = null;
        if (null != tmp30) {
          const obj17 = { type: tmp2(2000).ComponentType.SECTION, id: tmp2Result34.asComponentId(join.join(",")), components: found1, accessory: tmp30 };
          tmp31 = obj17;
          tmp2Result34 = tmp2(5545);
        }
      }
      return tmp31;
    } else if (tmp2(2000).ComponentType.TEXT_DISPLAY === type2) {
      const obj18 = { type: tmp2(2000).ComponentType.TEXT_DISPLAY, id: tmp2Result35.asComponentId(join.join(",")), content: type.content };
      tmp2Result35 = tmp2(5545);
      return obj18;
    } else if (tmp2(2000).ComponentType.THUMBNAIL === type2) {
      const obj19 = { type: tmp2(2000).ComponentType.THUMBNAIL, id: tmp2Result36.asComponentId(join.join(",")), media: tmp2Result37.toUnfurledMediaItem(type.media), description: null, spoiler: null };
      tmp2Result36 = tmp2(5545);
      ({ description: obj27.description, spoiler: obj27.spoiler } = type);
      tmp2Result37 = tmp2(5544);
      return obj19;
    } else if (tmp2(2000).ComponentType.MEDIA_GALLERY === type2) {
      const obj20 = {
        type: tmp2(2000).ComponentType.MEDIA_GALLERY,
        id: tmp2Result38.asComponentId(join.join(",")),
        items: items1.map((media) => {
              let obj2;
              const obj = { media: obj2.toUnfurledMediaItem(media.media), description: null, spoiler: null };
              ({ description: obj.description, spoiler: obj.spoiler } = media);
              obj2 = join(dependencyMap[8]);
              return obj;
            })
      };
      items1 = type.items;
      tmp2Result38 = tmp2(5545);
      return obj20;
    } else if (tmp2(2000).ComponentType.FILE === type2) {
      const obj21 = { type: tmp2(2000).ComponentType.FILE, id: tmp2Result39.asComponentId(join.join(",")), file: tmp2Result40.toUnfurledMediaItem(type.file), name: null, size: null, spoiler: null };
      tmp2Result39 = tmp2(5545);
      ({ name: obj22.name, size: obj22.size, spoiler: obj22.spoiler } = type);
      tmp2Result40 = tmp2(5544);
      return obj21;
    } else if (tmp2(2000).ComponentType.SEPARATOR === type2) {
      const obj23 = { type: tmp2(2000).ComponentType.SEPARATOR, id: tmp2Result41.asComponentId(join.join(",")), divider: flag2, spacing: SMALL };
      flag2 = type.divider;
      tmp2Result41 = tmp2(5545);
      if (flag2 == null) {
        flag2 = true;
      }
      SMALL = type.spacing;
      if (SMALL == null) {
        SMALL = tmp2(2000).SeparatorSpacingSize.SMALL;
      }
      return obj23;
    } else if (tmp2(2000).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
      let tmp23 = null;
      if (null != type.content_inventory_entry) {
        const obj24 = { type: tmp2(2000).ComponentType.CONTENT_INVENTORY_ENTRY, id: tmp2Result42.asComponentId(join.join(",")), contentInventoryEntry: type.content_inventory_entry };
        tmp23 = obj24;
        tmp2Result42 = tmp2(5545);
      }
      return tmp23;
    } else if (tmp2(2000).ComponentType.CONTAINER === type2) {
      const components2 = type.components;
      const mapped2 = components2.map((item, index) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, join, 0)] = index;
        const tmp2 = transformComponent(item, items);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        return tmp3;
      });
      const obj25 = { type: tmp2(2000).ComponentType.CONTAINER, id: tmp2Result43.asComponentId(join.join(",")), accentColor: null, spoiler: null, components: found2 };
      found2 = mapped2.filter(tmp2(1388).isNotNullish);
      ({ accent_color: obj16.accentColor, spoiler: obj16.spoiler } = type);
      tmp2Result43 = tmp2(5545);
      return obj25;
    } else if (tmp2(2000).ComponentType.LABEL === type2) {
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items2, join, 0)] = 0;
      const tmp18 = transformComponent(type.component, items2);
      let tmp20 = null;
      if (null != tmp18) {
        tmp20 = tmp18;
      }
      let tmp21 = null;
      if (null != tmp20) {
        const obj26 = { type: tmp2(2000).ComponentType.LABEL, id: tmp2Result44.asComponentId(join.join(",")), label: null, description: null, component: tmp20 };
        ({ label: obj14.label, description: obj14.description } = type);
        tmp21 = obj26;
        tmp2Result44 = tmp2(5545);
      }
      return tmp21;
    } else if (tmp2(2000).ComponentType.FILE_UPLOAD === type2) {
      const obj28 = { type: type.type, id: tmp2Result45.asComponentId(join.join(",")), customId: null, disabled: null, required: required3, minValues: null, maxValues: null, fileTypes: null };
      ({ custom_id: obj12.customId, disabled: obj12.disabled, required: required3 } = type);
      tmp2Result45 = tmp2(5545);
      if (required3 == null) {
        required3 = false;
      }
      ({ min_values: obj12.minValues, max_values: obj12.maxValues, file_types: obj12.fileTypes } = type);
      return obj28;
    } else if (tmp2(2000).ComponentType.CHECKPOINT_CARD === type2) {
      let tmp12;
      const checkpoint_data = type.checkpoint_data;
      const version = checkpoint_data.version;
      if (CheckpointVersions.V2025 === version) {
        const obj29 = { type: type.type, id: tmp2Result46.asComponentId(join.join(",")), checkpointData: tmp2Result47.transformCheckpoint2025CardComponent(checkpoint_data) };
        tmp2Result46 = tmp2(5545);
        tmp12 = obj29;
        tmp2Result47 = tmp2(5546);
      } else {
        tmp12 = null;
        if (tmp10.V2026 === version) {
          const tmp2Result48 = tmp2(5559);
          const result = tmp2Result48.transformCheckpoint2026CardComponent(checkpoint_data);
          let tmp13 = null;
          if (null != result) {
            const obj30 = { type: type.type, id: tmp2Result49.asComponentId(join.join(",")), checkpointData: result };
            tmp13 = obj30;
            tmp2Result49 = tmp2(5545);
          }
          tmp12 = tmp13;
        }
      }
      return tmp12;
    } else if (tmp2(2000).ComponentType.RADIO_GROUP === type2) {
      const obj31 = { type: type.type, id: tmp2Result50.asComponentId(join.join(",")), customId: null, options: null, required: required2 };
      ({ custom_id: obj5.customId, options: obj5.options, required: required2 } = type);
      tmp2Result50 = tmp2(5545);
      if (required2 == null) {
        required2 = false;
      }
      return obj31;
    } else if (tmp2(2000).ComponentType.CHECKBOX_GROUP === type2) {
      const obj32 = { type: type.type, id: tmp2Result51.asComponentId(join.join(",")), customId: null, options: null, minValues: null, maxValues: null, required };
      ({ custom_id: obj3.customId, options: obj3.options, min_values: obj3.minValues, max_values: obj3.maxValues, required } = type);
      tmp2Result51 = tmp2(5545);
      if (required == null) {
        required = false;
      }
      return obj32;
    } else if (tmp2(2000).ComponentType.CHECKBOX === type2) {
      let obj = { type: type.type, id: tmp2Result52.asComponentId(join.join(",")), customId: null, default: null };
      ({ custom_id: obj.customId, default: obj.default } = type);
      tmp2Result52 = tmp2(5545);
      return obj;
    } else {
      logger.warn("transformComponent: Unknown component type", type.type);
      return null;
    }
  } else {
    const tmp4 = null;
    return null;
  }
}
const CheckpointVersions = CheckpointConstants.CheckpointVersions;
let tmp2 = new LoggerDefault("InteractionComponentUtils");
const logger = tmp2;
function getEmoji(arg0, arg1) {

}
let result = size.fileFinishedImporting("modules/interaction_components/InteractionComponentUtils.tsx");

export const getLayoutComponentErrorText = function getLayoutComponentErrorText(interaction, message, accessory) {
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
        const intl2 = tmp2(1128).intl;
        stringResult = intl2.string(tmp2(1128).t.fitPBS);
      } else {
        let reasonCode;
        if (interaction != null) {
          reasonCode = interaction.reasonCode;
        }
        if (null == reasonCode) {
          const intl = tmp2(1128).intl;
          stringResult = intl.string(tmp2(1128).t.VCsUJu);
        } else {
          const tmp2Result = interactionCallbackErrorReason;
          stringResult = tmp2Result.interactionCallbackErrorReason(interaction.reasonCode, interaction.data.applicationId);
        }
      }
      interactionError = stringResult;
    }
    return interactionError;
  }
};
export const getSelectPlaceholder = function getSelectPlaceholder(placeholder) {
  placeholder = placeholder.placeholder;
  if (placeholder == null) {
    const intl = intl7.intl;
    placeholder = intl.string(intl7.t.Otr6W2);
  }
  return placeholder;
};
export const canSelectBeEmpty = function canSelectBeEmpty(value, modal) {
  let tmp2;
  if ("modal" === modal) {
    tmp2 = !value.required;
  } else {
    tmp2 = 0 === tmp;
  }
  return tmp2;
};
export { flattenComponents };
export { findChildComponent };
export const getAllTextDisplayContent = function getAllTextDisplayContent(components) {
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
};
export const getFirstInteractionComponentMedia = function getFirstInteractionComponentMedia(components) {
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
        let tmp4Result = tmp4(5544);
        let unfurledMediaItemType = tmp4Result.getUnfurledMediaItemType(tmp14.media);
        if ("INVALID" !== unfurledMediaItemType) {
          let obj2 = { type: tmp17, alt: tmp14.description };
          let merged = Object.assign(tmp14.media);
          iter.return();
          return obj2;
        }
      }
    } else if (tmp3.type === tmp4(2000).ComponentType.THUMBNAIL) {
      let tmp4Result2 = tmp4(5544);
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
};
export const getParents = function getParents(arg0, arg1) {
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
};
export const makeComponentUploadId = function makeComponentUploadId(containerId) {
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
};
export const deserializeComponentUploadId = function deserializeComponentUploadId(id) {
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
};
export const getFileUploadComponentSubtitle = function getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult) {
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
};
export const transformComponents = function transformComponents(arr) {
  const mapped = arr.map((item, index) => {
    const items = [index];
    return transformComponent(item, items);
  });
  return mapped.filter((item) => null != item);
};
