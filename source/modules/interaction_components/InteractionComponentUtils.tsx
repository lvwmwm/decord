// Module ID: 4353
// Function ID: 38618
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4354, 3, 1392, 1212, 4355, 1881, 4357, 4358, 491, 1327, 4359, 665, 21, 2]
// Exports: canSelectBeEmpty, deserializeComponentUploadId, getAllTextDisplayContent, getFileUploadComponentSubtitle, getFirstInteractionComponentMedia, getLayoutComponentErrorText, getParents, getSelectPlaceholder, makeComponentUploadId, transformComponents

// Module 4353 (_createForOfIteratorHelperLoose)
import { CheckpointVersions } from "CheckpointPersonas";
import importDefaultResult from "getSystemLocale";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function flattenComponents(components) {
  let done;
  const map = new Map();
  const tmp2 = _createForOfIteratorHelperLoose(components);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let tmp3 = flattenComponent;
      let tmp4 = flattenComponent(map, iter.value);
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return map;
}
function flattenComponent(map, accessory) {
  const _require = map;
  const result = map.set(accessory.id, accessory);
  const type = accessory.type;
  if (_require(1881).ComponentType.ACTION_ROW === type) {
    const components = accessory.components;
    const item = components.forEach((arg0) => {
      outer1_9(closure_0, arg0);
    });
  } else if (_require(1881).ComponentType.SECTION === type) {
    const components1 = accessory.components;
    const item1 = components1.forEach((arg0) => {
      outer1_9(closure_0, arg0);
    });
    flattenComponent(map, accessory.accessory);
  } else if (_require(1881).ComponentType.CONTAINER === type) {
    const components2 = accessory.components;
    const item2 = components2.forEach((arg0) => {
      outer1_9(closure_0, arg0);
    });
  }
}
function findChildComponent(type, componentId) {
  const _require = componentId;
  type = type.type;
  if (_require(1881).ComponentType.ACTION_ROW === type) {
    const components = type.components;
    const found = components.find((id) => id.id === closure_0);
    let tmp8 = null;
    if (null != found) {
      tmp8 = found;
    }
    return tmp8;
  } else if (_require(1881).ComponentType.SECTION === type) {
    if (type.accessory.id === componentId) {
      let accessory = type.accessory;
    } else {
      const components1 = type.components;
      const found1 = components1.find((id) => id.id === closure_0);
      accessory = null;
      if (null != found1) {
        accessory = found1;
      }
    }
    return accessory;
  } else if (_require(1881).ComponentType.CONTAINER === type) {
    const components2 = type.components;
    const found2 = components2.find((id) => id.id === closure_0);
    let tmp4 = null;
    if (null != found2) {
      tmp4 = found2;
    }
    return tmp4;
  }
}
function getComponentChildren(type) {
  type = type.type;
  if (require(1881) /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    return type.components;
  } else if (require(1881) /* PermissionOverwriteType */.ComponentType.SECTION === type) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(type.components, 0);
    items[arraySpreadResult] = type.accessory;
    const sum = arraySpreadResult + 1;
    return items;
  } else if (require(1881) /* PermissionOverwriteType */.ComponentType.CONTAINER === type) {
    return type.components;
  } else if (require(1881) /* PermissionOverwriteType */.ComponentType.LABEL === type) {
    const items1 = [type.component];
    return items1;
  } else {
    if (require(1881) /* PermissionOverwriteType */.ComponentType.BUTTON !== type) {
      if (require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT !== type) {
        if (require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT !== type) {
          if (require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
            if (require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
              if (require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
                if (require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
                  if (require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_DISPLAY !== type) {
                    if (require(1881) /* PermissionOverwriteType */.ComponentType.THUMBNAIL !== type) {
                      if (require(1881) /* PermissionOverwriteType */.ComponentType.MEDIA_GALLERY !== type) {
                        if (require(1881) /* PermissionOverwriteType */.ComponentType.FILE !== type) {
                          if (require(1881) /* PermissionOverwriteType */.ComponentType.SEPARATOR !== type) {
                            if (require(1881) /* PermissionOverwriteType */.ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                              if (require(1881) /* PermissionOverwriteType */.ComponentType.FILE_UPLOAD !== type) {
                                if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKPOINT_CARD !== type) {
                                  if (require(1881) /* PermissionOverwriteType */.ComponentType.RADIO_GROUP !== type) {
                                    if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX_GROUP !== type) {
                                      if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX !== type) {
                                        importDefaultResult.warn("getComponentChildren: Unknown component type", type.type);
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
  let required;
  let required2;
  let required3;
  let required4;
  let required5;
  let required6;
  let required7;
  let required8;
  let required9;
  const _require = join;
  function getChildComponent(accessory, length) {
    const items = [...closure_0, length];
    const tmp = outer1_12(accessory, items);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  }
  type = type.type;
  let flag = true;
  if (_require(getChildComponent[5]).ComponentType.ACTION_ROW !== type) {
    let found = _require;
    found = getChildComponent;
    flag = true;
    if (_require(getChildComponent[5]).ComponentType.BUTTON !== type) {
      found = _require;
      found = getChildComponent;
      flag = true;
      if (_require(getChildComponent[5]).ComponentType.STRING_SELECT !== type) {
        found = _require;
        found = getChildComponent;
        flag = true;
        if (_require(getChildComponent[5]).ComponentType.TEXT_INPUT !== type) {
          found = _require;
          found = getChildComponent;
          flag = true;
          if (_require(getChildComponent[5]).ComponentType.USER_SELECT !== type) {
            found = _require;
            found = getChildComponent;
            flag = true;
            if (_require(getChildComponent[5]).ComponentType.ROLE_SELECT !== type) {
              found = _require;
              found = getChildComponent;
              flag = true;
              if (_require(getChildComponent[5]).ComponentType.MENTIONABLE_SELECT !== type) {
                found = _require;
                found = getChildComponent;
                flag = true;
                if (_require(getChildComponent[5]).ComponentType.CHANNEL_SELECT !== type) {
                  found = _require;
                  found = getChildComponent;
                  flag = true;
                  if (_require(getChildComponent[5]).ComponentType.SECTION !== type) {
                    found = _require;
                    found = getChildComponent;
                    flag = true;
                    if (_require(getChildComponent[5]).ComponentType.TEXT_DISPLAY !== type) {
                      found = _require;
                      found = getChildComponent;
                      flag = true;
                      if (_require(getChildComponent[5]).ComponentType.THUMBNAIL !== type) {
                        found = _require;
                        found = getChildComponent;
                        flag = true;
                        if (_require(getChildComponent[5]).ComponentType.MEDIA_GALLERY !== type) {
                          found = _require;
                          found = getChildComponent;
                          flag = true;
                          if (_require(getChildComponent[5]).ComponentType.FILE !== type) {
                            found = _require;
                            found = getChildComponent;
                            flag = true;
                            if (_require(getChildComponent[5]).ComponentType.SEPARATOR !== type) {
                              found = _require;
                              found = getChildComponent;
                              flag = true;
                              if (_require(getChildComponent[5]).ComponentType.CONTAINER !== type) {
                                found = _require;
                                found = getChildComponent;
                                flag = true;
                                if (_require(getChildComponent[5]).ComponentType.LABEL !== type) {
                                  found = _require;
                                  found = getChildComponent;
                                  flag = true;
                                  if (_require(getChildComponent[5]).ComponentType.FILE_UPLOAD !== type) {
                                    found = _require;
                                    found = getChildComponent;
                                    flag = true;
                                    if (_require(getChildComponent[5]).ComponentType.CHECKPOINT_CARD !== type) {
                                      found = _require;
                                      found = getChildComponent;
                                      flag = true;
                                      if (_require(getChildComponent[5]).ComponentType.RADIO_GROUP !== type) {
                                        found = _require;
                                        found = getChildComponent;
                                        flag = true;
                                        if (_require(getChildComponent[5]).ComponentType.CHECKBOX_GROUP !== type) {
                                          found = _require;
                                          flag = true;
                                          if (_require(getChildComponent[5]).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (_require(getChildComponent[5]).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              const UNKNOWN = _require(getChildComponent[5]).ComponentType.UNKNOWN;
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
    const importDefault = true;
    const type2 = type.type;
    if (_require(getChildComponent[5]).ComponentType.ACTION_ROW === type2) {
      const components = type.components;
      const mapped = components.map((arg0, arg1) => getChildComponent(arg0, arg1));
      found = _require;
      found = getChildComponent;
      let obj = {};
      found = mapped.filter(_require(getChildComponent[9]).isNotNullish);
      obj.type = _require(getChildComponent[5]).ComponentType.ACTION_ROW;
      found = indicesToId;
      obj.id = indicesToId(join);
      obj.components = found;
      return obj;
    } else {
      found = _require;
      found = getChildComponent;
      if (_require(getChildComponent[5]).ComponentType.BUTTON === type2) {
        let tmp98;
        if (null != type.emoji) {
          tmp98 = getEmoji(type.emoji, true);
        }
        obj = {};
        found = _require;
        found = getChildComponent;
        obj.type = _require(getChildComponent[5]).ComponentType.BUTTON;
        found = indicesToId;
        obj.id = indicesToId(join);
        ({ custom_id: obj27.customId, style: obj27.style, disabled: obj27.disabled, url: obj27.url, label: obj27.label } = type);
        obj.emoji = tmp98;
        obj.skuId = type.sku_id;
        return obj;
      } else {
        found = _require;
        found = getChildComponent;
        if (_require(getChildComponent[5]).ComponentType.STRING_SELECT === type2) {
          const obj1 = { type: _require(getChildComponent[5]).ComponentType.STRING_SELECT, id: indicesToId(join) };
          ({ custom_id: obj26.customId, disabled: obj26.disabled, required: required9 } = type);
          obj1.required = null != required9 && required9;
          const options = type.options;
          obj1.options = options.map((label) => {
            const obj = { type: join(getChildComponent[10]).SelectOptionType.STRING, label: label.label, value: label.value, default: label.default, description: label.description };
            let tmp;
            if (null != label.emoji) {
              tmp = outer1_5(label.emoji, c1);
            }
            obj.emoji = tmp;
            return obj;
          });
          ({ placeholder: obj26.placeholder, min_values: obj26.minValues, max_values: obj26.maxValues } = type);
          return obj1;
        } else {
          found = _require;
          found = getChildComponent;
          if (_require(getChildComponent[5]).ComponentType.TEXT_INPUT === type2) {
            const obj2 = { type: type.type, id: indicesToId(join) };
            ({ style: obj25.style, custom_id: obj25.customId, label: obj25.label, value: obj25.value, placeholder: obj25.placeholder, disabled: obj25.disabled, required: required8 } = type);
            obj2.required = null != required8 && required8;
            ({ min_length: obj25.minLength, max_length: obj25.maxLength } = type);
            return obj2;
          } else {
            found = _require;
            found = getChildComponent;
            if (_require(getChildComponent[5]).ComponentType.USER_SELECT === type2) {
              const obj3 = { type: _require(getChildComponent[5]).ComponentType.USER_SELECT, id: indicesToId(join) };
              ({ custom_id: obj24.customId, disabled: obj24.disabled, required: required7 } = type);
              obj3.required = null != required7 && required7;
              ({ placeholder: obj24.placeholder, min_values: obj24.minValues, max_values: obj24.maxValues, default_values: obj24.defaultValues } = type);
              return obj3;
            } else {
              found = _require;
              found = getChildComponent;
              if (_require(getChildComponent[5]).ComponentType.ROLE_SELECT === type2) {
                const obj4 = { type: _require(getChildComponent[5]).ComponentType.ROLE_SELECT, id: indicesToId(join) };
                ({ custom_id: obj23.customId, disabled: obj23.disabled, required: required6 } = type);
                obj4.required = null != required6 && required6;
                ({ placeholder: obj23.placeholder, min_values: obj23.minValues, max_values: obj23.maxValues, default_values: obj23.defaultValues } = type);
                return obj4;
              } else {
                found = _require;
                found = getChildComponent;
                if (_require(getChildComponent[5]).ComponentType.MENTIONABLE_SELECT === type2) {
                  let obj5 = { type: _require(getChildComponent[5]).ComponentType.MENTIONABLE_SELECT, id: indicesToId(join) };
                  ({ custom_id: obj22.customId, disabled: obj22.disabled, required: required5 } = type);
                  obj5.required = null != required5 && required5;
                  ({ placeholder: obj22.placeholder, min_values: obj22.minValues, max_values: obj22.maxValues, default_values: obj22.defaultValues } = type);
                  return obj5;
                } else {
                  found = _require;
                  found = getChildComponent;
                  if (_require(getChildComponent[5]).ComponentType.CHANNEL_SELECT === type2) {
                    const obj6 = { type: _require(getChildComponent[5]).ComponentType.CHANNEL_SELECT, id: indicesToId(join) };
                    ({ custom_id: obj21.customId, disabled: obj21.disabled, required: required4 } = type);
                    obj6.required = null != required4 && required4;
                    ({ placeholder: obj21.placeholder, min_values: obj21.minValues, max_values: obj21.maxValues, channel_types: obj21.channelTypes, default_values: obj21.defaultValues } = type);
                    return obj6;
                  } else {
                    found = _require;
                    found = getChildComponent;
                    if (_require(getChildComponent[5]).ComponentType.SECTION === type2) {
                      const components1 = type.components;
                      const mapped1 = components1.map((arg0, arg1) => getChildComponent(arg0, arg1));
                      const found1 = mapped1.filter(_require(getChildComponent[9]).isNotNullish);
                      const childComponent = getChildComponent(type.accessory, found1.length);
                      let tmp71 = null;
                      if (0 !== found1.length) {
                        tmp71 = null;
                        if (null != childComponent) {
                          const obj7 = { type: _require(getChildComponent[5]).ComponentType.SECTION, id: indicesToId(join), components: found1, accessory: childComponent };
                          tmp71 = obj7;
                        }
                      }
                      return tmp71;
                    } else {
                      found = _require;
                      found = getChildComponent;
                      if (_require(getChildComponent[5]).ComponentType.TEXT_DISPLAY === type2) {
                        const obj8 = { type: _require(getChildComponent[5]).ComponentType.TEXT_DISPLAY, id: indicesToId(join), content: type.content };
                        return obj8;
                      } else {
                        found = _require;
                        found = getChildComponent;
                        if (_require(getChildComponent[5]).ComponentType.THUMBNAIL === type2) {
                          const obj9 = { type: _require(getChildComponent[5]).ComponentType.THUMBNAIL, id: indicesToId(join) };
                          let obj17 = _require(getChildComponent[7]);
                          obj9.media = obj17.toUnfurledMediaItem(type.media);
                          ({ description: obj17.description, spoiler: obj17.spoiler } = type);
                          return obj9;
                        } else {
                          found = _require;
                          found = getChildComponent;
                          if (_require(getChildComponent[5]).ComponentType.MEDIA_GALLERY === type2) {
                            let obj10 = { type: _require(getChildComponent[5]).ComponentType.MEDIA_GALLERY, id: indicesToId(join) };
                            let items = type.items;
                            obj10.items = items.map((media) => {
                              const obj = { media: join(getChildComponent[7]).toUnfurledMediaItem(media.media) };
                              ({ description: obj.description, spoiler: obj.spoiler } = media);
                              return obj;
                            });
                            return obj10;
                          } else {
                            found = _require;
                            found = getChildComponent;
                            if (_require(getChildComponent[5]).ComponentType.FILE === type2) {
                              const obj11 = { type: _require(getChildComponent[5]).ComponentType.FILE, id: indicesToId(join) };
                              let obj14 = _require(getChildComponent[7]);
                              obj11.file = obj14.toUnfurledMediaItem(type.file);
                              ({ name: obj14.name, size: obj14.size, spoiler: obj14.spoiler } = type);
                              return obj11;
                            } else {
                              found = _require;
                              found = getChildComponent;
                              if (_require(getChildComponent[5]).ComponentType.SEPARATOR === type2) {
                                const obj12 = { type: _require(getChildComponent[5]).ComponentType.SEPARATOR, id: indicesToId(join) };
                                const divider = type.divider;
                                obj12.divider = null == divider || divider;
                                let SMALL = type.spacing;
                                if (null == SMALL) {
                                  SMALL = _require(getChildComponent[5]).SeparatorSpacingSize.SMALL;
                                }
                                obj12.spacing = SMALL;
                                return obj12;
                              } else {
                                found = _require;
                                found = getChildComponent;
                                if (_require(getChildComponent[5]).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
                                  let tmp45 = null;
                                  if (null != type.content_inventory_entry) {
                                    const obj13 = { type: _require(getChildComponent[5]).ComponentType.CONTENT_INVENTORY_ENTRY, id: indicesToId(join), contentInventoryEntry: type.content_inventory_entry };
                                    tmp45 = obj13;
                                  }
                                  return tmp45;
                                } else {
                                  found = _require;
                                  found = getChildComponent;
                                  if (_require(getChildComponent[5]).ComponentType.CONTAINER === type2) {
                                    const components2 = type.components;
                                    const mapped2 = components2.map((arg0, arg1) => getChildComponent(arg0, arg1));
                                    obj14 = {};
                                    const found2 = mapped2.filter(_require(getChildComponent[9]).isNotNullish);
                                    obj14.type = _require(getChildComponent[5]).ComponentType.CONTAINER;
                                    obj14.id = indicesToId(join);
                                    let int2hslResult;
                                    if (null != type.accent_color) {
                                      obj10 = _require(getChildComponent[11]);
                                      int2hslResult = obj10.int2hsl(type.accent_color, false);
                                    }
                                    obj14.accentColor = int2hslResult;
                                    obj14.spoiler = type.spoiler;
                                    obj14.components = found2;
                                    return obj14;
                                  } else {
                                    found = _require;
                                    found = getChildComponent;
                                    if (_require(getChildComponent[5]).ComponentType.LABEL === type2) {
                                      const childComponent1 = getChildComponent(type.component, 0);
                                      let tmp33 = null;
                                      if (null != childComponent1) {
                                        const obj15 = { type: _require(getChildComponent[5]).ComponentType.LABEL, id: indicesToId(join) };
                                        ({ label: obj9.label, description: obj9.description } = type);
                                        obj15.component = childComponent1;
                                        tmp33 = obj15;
                                      }
                                      return tmp33;
                                    } else {
                                      found = _require;
                                      found = getChildComponent;
                                      if (_require(getChildComponent[5]).ComponentType.FILE_UPLOAD === type2) {
                                        const obj16 = { type: type.type, id: indicesToId(join) };
                                        ({ custom_id: obj8.customId, disabled: obj8.disabled, required: required3 } = type);
                                        obj16.required = null != required3 && required3;
                                        ({ min_values: obj8.minValues, max_values: obj8.maxValues, file_types: obj8.fileTypes } = type);
                                        return obj16;
                                      } else {
                                        found = _require;
                                        found = getChildComponent;
                                        if (_require(getChildComponent[5]).ComponentType.CHECKPOINT_CARD === type2) {
                                          const checkpoint_data = type.checkpoint_data;
                                          let tmp22 = null;
                                          if (checkpoint_data.version === CheckpointVersions.V2025) {
                                            obj17 = { type: type.type };
                                            found = indicesToId;
                                            obj17.id = indicesToId(join);
                                            const obj18 = {};
                                            ({ version: obj30.version, card_id: obj30.cardId, power_level: obj30.powerLevel, power_level_percentile: obj30.powerLevelPercentile, num_messages_sent: obj30.numMessagesSent, total_voice_minutes: obj30.totalVoiceMinutes, num_emojis_sent: obj30.numEmojisSent } = checkpoint_data);
                                            let tmp23;
                                            if (null != checkpoint_data.top_guild) {
                                              const obj19 = { guildId: checkpoint_data.top_guild.guild_id, guildName: checkpoint_data.top_guild.guild_name, guildIcon: checkpoint_data.top_guild.guild_icon };
                                              tmp23 = obj19;
                                            }
                                            obj18.topGuild = tmp23;
                                            let tmp24;
                                            if (null != checkpoint_data.top_emoji) {
                                              const obj20 = {};
                                              obj5 = importDefault(getChildComponent[12]);
                                              let emoji_id;
                                              if (obj5.isProbablyAValidSnowflake(checkpoint_data.top_emoji.emoji_id)) {
                                                emoji_id = checkpoint_data.top_emoji.emoji_id;
                                              }
                                              obj20.emojiId = emoji_id;
                                              const top_emoji = checkpoint_data.top_emoji;
                                              let emoji_name;
                                              if (null != top_emoji) {
                                                emoji_name = top_emoji.emoji_name;
                                              }
                                              obj20.emojiName = emoji_name;
                                              tmp24 = obj20;
                                            }
                                            obj18.topEmoji = tmp24;
                                            let tmp29;
                                            if (null != checkpoint_data.top_game) {
                                              const obj21 = { applicationId: checkpoint_data.top_game.application_id, applicationName: checkpoint_data.top_game.application_name, applicationImageId: checkpoint_data.top_game.application_image_id };
                                              tmp29 = obj21;
                                            }
                                            obj18.topGame = tmp29;
                                            obj17.checkpointData = obj18;
                                            tmp22 = obj17;
                                          }
                                          return tmp22;
                                        } else {
                                          found = _require;
                                          found = getChildComponent;
                                          if (_require(getChildComponent[5]).ComponentType.RADIO_GROUP === type2) {
                                            const obj22 = { type: type.type, id: indicesToId(join) };
                                            ({ custom_id: obj3.customId, options: obj3.options, required: required2 } = type);
                                            obj22.required = null != required2 && required2;
                                            return obj22;
                                          } else {
                                            found = _require;
                                            found = getChildComponent;
                                            if (_require(getChildComponent[5]).ComponentType.CHECKBOX_GROUP === type2) {
                                              const obj23 = { type: type.type, id: indicesToId(join) };
                                              ({ custom_id: obj2.customId, options: obj2.options, min_values: obj2.minValues, max_values: obj2.maxValues, required } = type);
                                              obj23.required = null != required && required;
                                              return obj23;
                                            } else if (_require(getChildComponent[5]).ComponentType.CHECKBOX === type2) {
                                              obj = { type: type.type, id: indicesToId(join) };
                                              ({ custom_id: obj.customId, default: obj.default } = type);
                                              return obj;
                                            } else {
                                              importDefaultResult.warn("transformComponent: Unknown component type", type.type);
                                              return null;
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
  } else {
    return null;
  }
}
function indicesToId(join) {
  return require(4359) /* ActionComponentState */.asComponentId(join.join(","));
}
importDefaultResult = new importDefaultResult("InteractionComponentUtils");
function getEmoji(id) {
  let animated;
  let obj = { id: id.id, name: id.name, animated: id.animated };
  let emojiURL;
  if (arg1) {
    if (null != id.id) {
      obj = {};
      ({ id: obj3.id, animated } = id);
      if (!animated) {
        animated = false;
      }
      obj.animated = animated;
      obj.size = 48;
      emojiURL = importDefault(1392).getEmojiURL(obj);
      const obj2 = importDefault(1392);
    }
  }
  obj.src = emojiURL;
  return obj;
}
let result = require("getAvatarURL").fileFinishedImporting("modules/interaction_components/InteractionComponentUtils.tsx");

export const getLayoutComponentErrorText = function getLayoutComponentErrorText(interaction, message, type) {
  let interactionType;
  if (null != interaction) {
    interactionType = interaction.data.interactionType;
  }
  let componentId = null;
  if (interactionType === require(1881) /* PermissionOverwriteType */.InteractionTypes.MESSAGE_COMPONENT) {
    let state;
    if (null != interaction) {
      state = interaction.state;
    }
    componentId = null;
    if (state === require(4357) /* InteractionState */.InteractionState.FAILED) {
      componentId = interaction.data.componentId;
    }
  }
  let tmp6 = null;
  if (null != componentId) {
    tmp6 = findChildComponent(type, componentId);
  }
  if (null != tmp6) {
    let interactionError;
    if (null != message) {
      interactionError = message.interactionError;
    }
    if (null != interactionError) {
      return interactionError;
    } else {
      let errorCode;
      if (null != interaction) {
        errorCode = interaction.errorCode;
      }
      if (429 === errorCode) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.fitPBS);
      } else {
        let reasonCode;
        if (null != interaction) {
          reasonCode = interaction.reasonCode;
        }
        if (null == reasonCode) {
          const intl = require(1212) /* getSystemLocale */.intl;
          stringResult = intl.string(require(1212) /* getSystemLocale */.t.VCsUJu);
        } else {
          stringResult = require(4355) /* interactionCallbackErrorReason */.interactionCallbackErrorReason(interaction.reasonCode, interaction.data.applicationId);
          const obj = require(4355) /* interactionCallbackErrorReason */;
        }
      }
    }
  }
};
export const getSelectPlaceholder = function getSelectPlaceholder(placeholder) {
  placeholder = placeholder.placeholder;
  if (null == placeholder) {
    const intl = require(1212) /* getSystemLocale */.intl;
    placeholder = intl.string(require(1212) /* getSystemLocale */.t.Otr6W2);
  }
  return placeholder;
};
export const canSelectBeEmpty = function canSelectBeEmpty(closure_0, modal) {
  if ("modal" === modal) {
    let tmp2 = !closure_0.required;
  } else {
    tmp2 = 0 === tmp;
  }
  return tmp2;
};
export { flattenComponents };
export { findChildComponent };
export const getAllTextDisplayContent = function getAllTextDisplayContent(components) {
  const obj = flattenComponents(components);
  const found = Array.from(flattenComponents(components).values()).filter((type) => type.type === outer1_0(outer1_2[5]).ComponentType.TEXT_DISPLAY);
  const mapped = found.map((content) => content.content);
  const joined = mapped.join("\n");
  let tmp2 = null;
  if ("" !== joined) {
    tmp2 = joined;
  }
  return tmp2;
};
export const getFirstInteractionComponentMedia = function getFirstInteractionComponentMedia(components) {
  let first;
  let unfurledMediaItemType;
  let obj = flattenComponents(components);
  const tmp = _createForOfIteratorHelperLoose(obj.values());
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      if (value.type === require(1881) /* PermissionOverwriteType */.ComponentType.MEDIA_GALLERY) {
        first = value.items[0];
        let tmp8 = tmp3;
        let tmp9 = tmp4;
        let tmp10 = first;
        if (null != first) {
          let tmp11 = require;
          let tmp12 = dependencyMap;
          let obj2 = require(4358) /* toContentScanMetadata */;
          unfurledMediaItemType = obj2.getUnfurledMediaItemType(first.media);
          tmp10 = first;
          tmp9 = tmp4;
          tmp8 = unfurledMediaItemType;
          if ("INVALID" !== unfurledMediaItemType) {
            break;
          }
        }
      } else {
        let tmp16 = require;
        let tmp17 = dependencyMap;
        tmp10 = tmp2;
        tmp8 = tmp3;
        tmp9 = tmp4;
        if (value.type === require(1881) /* PermissionOverwriteType */.ComponentType.THUMBNAIL) {
          let tmp18 = require;
          let tmp19 = dependencyMap;
          let obj4 = require(4358) /* toContentScanMetadata */;
          let unfurledMediaItemType1 = obj4.getUnfurledMediaItemType(value.media);
          tmp10 = tmp2;
          tmp8 = tmp3;
          tmp9 = unfurledMediaItemType1;
          if ("INVALID" !== unfurledMediaItemType1) {
            obj = {};
            let tmp21 = obj;
            let merged = Object.assign(value.media);
            let str3 = "type";
            obj["type"] = unfurledMediaItemType1;
            let str4 = "alt";
            obj["alt"] = value.description;
            return obj;
          }
        }
      }
      let iter3 = tmp();
      tmp2 = tmp10;
      tmp3 = tmp8;
      tmp4 = tmp9;
      iter2 = iter3;
    }
    obj = {};
    const merged1 = Object.assign(first.media);
    obj["type"] = unfurledMediaItemType;
    obj["alt"] = first.description;
    return obj;
  }
  return null;
};
export const getParents = function getParents(arg0, arg1) {
  let closure_0 = arg1;
  function search(arg0) {
    let items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    const tmp = outer1_6(arg0);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      const value = iter2.value;
      const obj = outer1_11(value);
      const items1 = [];
      while (!obj.some((id) => id.id === outer1_0.id)) {
        let tmp3 = search;
        items1[0] = value;
        let tmp4 = items1;
        let tmp5 = items;
        let num = 1;
        let arraySpreadResult = HermesBuiltin.arraySpread(items, 1);
        let tmp7 = search(obj, items1);
        if (null != tmp7) {
          return tmp7;
        } else {
          let iter3 = tmp();
          iter2 = iter3;
        }
      }
      items1[0] = value;
      HermesBuiltin.arraySpread(items, 1);
      return items1;
    }
    return null;
  }
  return search(arg0);
};
export const makeComponentUploadId = function makeComponentUploadId(containerId) {
  const obj = { type: "component-upload", containerId };
  let randomUUIDResult;
  if (null != crypto.randomUUID) {
    const _crypto = crypto;
    randomUUIDResult = crypto.randomUUID();
  }
  if (null == randomUUIDResult) {
    randomUUIDResult = require(491) /* v1 */.v4();
    const obj2 = require(491) /* v1 */;
  }
  obj.uniqueId = randomUUIDResult;
  return JSON.stringify(obj);
};
export const deserializeComponentUploadId = function deserializeComponentUploadId(id) {
  const parsed = JSON.parse(id);
  let type;
  if (null != parsed) {
    type = tmp2.type;
  }
  let tmp5 = null;
  if ("component-upload" === type) {
    tmp5 = null;
    if ("string" === typeof tmp2.containerId) {
      tmp5 = null;
      if ("string" === typeof tmp2.uniqueId) {
        tmp5 = parsed;
      }
    }
  }
  return tmp5;
};
export const getFileUploadComponentSubtitle = function getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult) {
  if (null != types) {
    if (minValues <= 1) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let obj = { maxValues, types, maxSize: formatSizeResult };
      intl4.format(require(1212) /* getSystemLocale */.t.QLrHJG, obj);
    }
    if (minValues === maxValues) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      obj = { minValues, types, maxSize: formatSizeResult };
      let formatResult1 = intl6.format(require(1212) /* getSystemLocale */.t.Xp4xMV, obj);
    } else {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { minValues, maxValues, types, maxSize: formatSizeResult };
      formatResult1 = intl5.format(require(1212) /* getSystemLocale */.t["05AyNA"], obj1);
    }
  } else if (minValues > 1) {
    if (minValues === maxValues) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { minValues, maxSize: formatSizeResult };
      let formatResult2 = intl3.format(require(1212) /* getSystemLocale */.t.SAr31z, obj2);
    } else {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj3 = { minValues, maxValues, maxSize: formatSizeResult };
      formatResult2 = intl2.format(require(1212) /* getSystemLocale */.t["ZG+3Ck"], obj3);
    }
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { maxValues, maxSize: formatSizeResult };
    return intl.format(require(1212) /* getSystemLocale */.t.tyxwW1, obj);
  }
};
export const transformComponents = function transformComponents(arr) {
  const mapped = arr.map((arg0, arg1) => {
    const items = [arg1];
    return outer1_12(arg0, items);
  });
  return mapped.filter((arg0) => null != arg0);
};
