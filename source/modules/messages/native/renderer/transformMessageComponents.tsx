// Module ID: 7785
// Function ID: 62107
// Name: transformToRowGeneratedComponent
// Dependencies: []
// Exports: default

// Module 7785 (transformToRowGeneratedComponent)
function transformToRowGeneratedComponent(message, type) {
  let colors;
  let guildId;
  let interaction;
  let isSpoiler;
  let isSpoiler2;
  let markdownConfigs;
  let obscureAwaitingScan;
  let obscureAwaitingScan2;
  let obscureDescription;
  let obscureDescription2;
  let shouldAgeVerify;
  let shouldDisableInteractiveComponents;
  let shouldObscureSpoiler;
  let spoiler;
  let spoiler2;
  let spoilerDescription;
  let spoilerDescription2;
  type = message;
  const importDefault = type;
  function getChildComponent(accessory) {
    const tmp = callback(accessory, accessory);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  }
  let closure_7 = getChildComponent;
  message = message.message;
  const dependencyMap = message;
  ({ interaction, guildId, shouldDisableInteractiveComponents, shouldObscureSpoiler } = message);
  let closure_3 = shouldObscureSpoiler;
  const enabledContentHarmTypeFlags = message.enabledContentHarmTypeFlags;
  const callback = enabledContentHarmTypeFlags;
  ({ shouldShowMosaicMediaDescriptions: closure_5, shouldAgeVerify } = message);
  const CheckpointVersions = shouldAgeVerify;
  type = type.type;
  ({ colors, markdownConfigs } = message);
  if (type(dependencyMap[6]).ComponentType.ACTION_ROW === type) {
    const components = type.components;
    const mapped = components.map((arg0) => getChildComponent(arg0));
    let found = type;
    found = dependencyMap;
    let obj = {};
    found = obj;
    found = type;
    found = mapped.filter(type(dependencyMap[5]).isNotNullish);
    found = Object.assign(type);
    obj["components"] = found;
    obj["errorText"] = type(dependencyMap[7]).getLayoutComponentErrorText(interaction, message, type);
    return obj;
  } else {
    found = type;
    found = dependencyMap;
    if (type(dependencyMap[6]).ComponentType.BUTTON === type) {
      found = type;
      found = dependencyMap;
      if (type.style === type(dependencyMap[6]).ButtonStyle.PREMIUM) {
        found = type;
        found = dependencyMap;
        const intl5 = type(dependencyMap[8]).intl;
        let label = intl5.string(type(dependencyMap[8]).t.CHa0vN);
      } else {
        label = type.label;
      }
      obj = {};
      found = obj;
      found = type;
      found = Object.assign(type);
      found = type;
      found = dependencyMap;
      obj["state"] = type(dependencyMap[9]).getActionComponentState(interaction, type, shouldDisableInteractiveComponents);
      obj["label"] = label;
      return obj;
    } else {
      found = type;
      found = dependencyMap;
      if (type(dependencyMap[6]).ComponentType.STRING_SELECT === type) {
        found = type;
        found = dependencyMap;
        const initialStringSelectOptions = type(dependencyMap[10]).getInitialStringSelectOptions(type, message.id);
        const mapped1 = initialStringSelectOptions.map((arg0) => {
          const options = arg1.options;
          return options.findIndex((value) => value.value === value);
        });
        found = mapped1.filter((arg0) => -1 !== arg0);
        const obj1 = {};
        found = obj1;
        found = type;
        found = Object.assign(type);
        const obj33 = type(dependencyMap[10]);
        obj1["state"] = type(dependencyMap[9]).getActionComponentState(interaction, type, shouldDisableInteractiveComponents);
        obj1["selectedOptions"] = found;
        const obj35 = type(dependencyMap[9]);
        obj1["placeholder"] = type(dependencyMap[7]).getSelectPlaceholder(type);
        found = getSelectAccessibilityLabel;
        obj1["accessibilityLabel"] = getSelectAccessibilityLabel(type, found, (arg0) => arg1.options[arg0].label);
        return obj1;
      } else {
        found = type;
        found = dependencyMap;
        if (type(dependencyMap[6]).ComponentType.USER_SELECT !== type) {
          found = type;
          found = dependencyMap;
          if (type(dependencyMap[6]).ComponentType.ROLE_SELECT !== type) {
            found = type;
            found = dependencyMap;
            if (type(dependencyMap[6]).ComponentType.MENTIONABLE_SELECT !== type) {
              found = type;
              found = dependencyMap;
              if (type(dependencyMap[6]).ComponentType.CHANNEL_SELECT !== type) {
                found = type;
                found = dependencyMap;
                if (type(dependencyMap[6]).ComponentType.SECTION === type) {
                  const childComponent = getChildComponent(type.accessory);
                  found = null;
                  if (null != childComponent) {
                    const obj2 = {};
                    found = obj2;
                    found = type;
                    found = Object.assign(type);
                    const components1 = type.components;
                    const mapped2 = components1.map((arg0) => getChildComponent(arg0));
                    found = type;
                    found = dependencyMap;
                    obj2["components"] = mapped2.filter(type(dependencyMap[5]).isNotNullish);
                    obj2["accessory"] = childComponent;
                    obj2["errorText"] = type(dependencyMap[7]).getLayoutComponentErrorText(interaction, message, type);
                    found = obj2;
                    const obj27 = type(dependencyMap[7]);
                  }
                  return found;
                } else {
                  found = type;
                  found = dependencyMap;
                  if (type(dependencyMap[6]).ComponentType.TEXT_DISPLAY === type) {
                    const obj3 = {};
                    const merged = Object.assign(type);
                    obj3["content"] = renderMarkdownText(markdownConfigs.textDisplayComponent, message.id, type.content);
                    return obj3;
                  } else {
                    found = type;
                    found = dependencyMap;
                    if (type(dependencyMap[6]).ComponentType.THUMBNAIL === type) {
                      const tmp80 = getUnfurledMediaItemType(type.media);
                      let obj4 = {};
                      let str31 = "generic";
                      if (tmp80 === type(dependencyMap[14]).MediaGalleryItemType.IMAGE) {
                        str31 = "image";
                      }
                      obj4.type = str31;
                      ({ media: obj22.mediaItem, spoiler: spoiler2 } = type);
                      obj4.isSpoilered = null != spoiler2 && spoiler2;
                      obj4.isAuthorBot = message.author.bot;
                      obj4.shouldObscureSpoiler = shouldObscureSpoiler;
                      obj4.shouldAgeVerify = shouldAgeVerify;
                      obj4.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                      const unfurledMediaItemObscurityProps = type(dependencyMap[13]).getUnfurledMediaItemObscurityProps(obj4);
                      const isObscured2 = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured2;
                      ({ isSpoiler: isSpoiler2, spoilerDescription: spoilerDescription2, obscureDescription: obscureDescription2, obscureAwaitingScan: obscureAwaitingScan2 } = unfurledMediaItemObscurityProps);
                      if (isObscured2) {
                        isVerifiedTeenResult = type(dependencyMap[15]).isVerifiedTeen();
                        const obj23 = type(dependencyMap[15]);
                      }
                      let obj5 = {};
                      const merged1 = Object.assign(type);
                      obj5["media"] = transformUnfurledMediaItem(type.media, message);
                      obj5["isSpoiler"] = isSpoiler2;
                      obj5["spoilerDescription"] = spoilerDescription2;
                      obj5["isObscure"] = isObscured2;
                      obj5["isObscureAwaitingScan"] = obscureAwaitingScan2;
                      obj5["obscureDescription"] = obscureDescription2;
                      let tmp92 = isObscured2;
                      if (isObscured2) {
                        tmp92 = shouldAgeVerify;
                      }
                      obj5["verifyAge"] = tmp92;
                      obj5["obscureHideControls"] = isVerifiedTeenResult;
                      obj5["obscureIsOpaque"] = isObscured2;
                      const intl3 = type(dependencyMap[8]).intl;
                      obj5["descriptionHint"] = intl3.string(type(dependencyMap[8]).t.IPzNKE);
                      const intl4 = type(dependencyMap[8]).intl;
                      obj5["accessibilityRole"] = intl4.string(type(dependencyMap[8]).t.fKyfca);
                      return obj5;
                    } else {
                      found = type;
                      found = dependencyMap;
                      if (type(dependencyMap[6]).ComponentType.MEDIA_GALLERY === type) {
                        const items = type.items;
                        const mapped3 = items.map((media) => {
                          let isSpoiler;
                          let obscureAwaitingScan;
                          let obscureDescription;
                          let spoiler;
                          let spoilerDescription;
                          const tmp = callback2(media.media);
                          let obj = media(message[13]);
                          obj = {};
                          let str = "image";
                          if (tmp !== media(message[14]).MediaGalleryItemType.IMAGE) {
                            let str2 = "generic";
                            if (tmp === media(message[14]).MediaGalleryItemType.VIDEO) {
                              str2 = "video";
                            }
                            str = str2;
                          }
                          obj.type = str;
                          ({ media: obj2.mediaItem, spoiler } = media);
                          obj.isSpoilered = null != spoiler && spoiler;
                          obj.isAuthorBot = message.author.bot;
                          obj.shouldObscureSpoiler = shouldObscureSpoiler;
                          obj.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                          obj.shouldAgeVerify = shouldAgeVerify;
                          const unfurledMediaItemObscurityProps = obj.getUnfurledMediaItemObscurityProps(obj);
                          const isObscured = unfurledMediaItemObscurityProps.isObscured;
                          let isVerifiedTeenResult = isObscured;
                          ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps);
                          if (isObscured) {
                            isVerifiedTeenResult = media(message[15]).isVerifiedTeen();
                            const obj3 = media(message[15]);
                          }
                          if (tmp !== media(message[14]).MediaGalleryItemType.VIDEO) {
                            obj = {};
                            const merged = Object.assign(media);
                            obj["media"] = callback3(media.media, media);
                            obj["mediaType"] = tmp;
                            obj["videoPreviewUrl"] = tmp8;
                            obj["isSpoiler"] = isSpoiler;
                            obj["spoilerDescription"] = spoilerDescription;
                            obj["isObscure"] = isObscured;
                            obj["isObscureAwaitingScan"] = obscureAwaitingScan;
                            obj["obscureDescription"] = obscureDescription;
                            let tmp19 = isObscured;
                            if (isObscured) {
                              tmp19 = shouldAgeVerify;
                            }
                            obj["verifyAge"] = tmp19;
                            obj["obscureHideControls"] = isVerifiedTeenResult;
                            obj["obscureIsOpaque"] = isObscured;
                            obj["showDescription"] = closure_5;
                            if (tmp === media(message[14]).MediaGalleryItemType.VIDEO) {
                              const intl2 = media(message[8]).intl;
                              let stringResult = intl2.string(media(message[8]).t.BEWw/7);
                            } else {
                              const intl = media(message[8]).intl;
                              stringResult = intl.string(media(message[8]).t.IPzNKE);
                            }
                            obj["descriptionHint"] = stringResult;
                            if (tmp === media(message[14]).MediaGalleryItemType.VIDEO) {
                              const intl4 = media(message[8]).intl;
                              let stringResult1 = intl4.string(media(message[8]).t./SCpvi);
                            } else {
                              const intl3 = media(message[8]).intl;
                              stringResult1 = intl3.string(media(message[8]).t.fKyfca);
                            }
                            obj["accessibilityRole"] = stringResult1;
                            let combined = null;
                            if (tmp === media(message[14]).MediaGalleryItemType.VIDEO) {
                              const _HermesInternal = HermesInternal;
                              combined = "" + message.id + "_MediaGallery(" + arg1.id + ")_" + arg1;
                            }
                            obj["portalId"] = combined;
                            let tmp13 = obj;
                          } else {
                            const str3 = arg1(message[24]).toURLSafe(media.media.proxyUrl);
                            str = null;
                            if (null != str3) {
                              const searchParams = str3.searchParams;
                              const result = searchParams.set("format", "webp");
                              str = str3.toString();
                            }
                            tmp13 = null;
                            const obj4 = arg1(message[24]);
                            const tmp8 = str;
                          }
                          return tmp13;
                        });
                        const found1 = mapped3.filter(type(dependencyMap[5]).isNotNullish);
                        let tmp75 = null;
                        if (0 !== found1.length) {
                          let obj6 = {};
                          const merged2 = Object.assign(type);
                          obj6["items"] = found1;
                          tmp75 = obj6;
                        }
                        return tmp75;
                      } else {
                        found = type;
                        found = dependencyMap;
                        if (type(dependencyMap[6]).ComponentType.FILE === type) {
                          let obj14 = type(dependencyMap[13]);
                          let obj7 = { type: "file" };
                          ({ file: obj16.mediaItem, spoiler } = type);
                          let tmp59 = null != spoiler;
                          if (tmp59) {
                            tmp59 = spoiler;
                          }
                          obj7.isSpoilered = tmp59;
                          obj7.isAuthorBot = message.author.bot;
                          obj7.shouldObscureSpoiler = shouldObscureSpoiler;
                          obj7.shouldAgeVerify = shouldAgeVerify;
                          obj7.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                          const unfurledMediaItemObscurityProps1 = obj14.getUnfurledMediaItemObscurityProps(obj7);
                          const isObscured = unfurledMediaItemObscurityProps1.isObscured;
                          let isVerifiedTeenResult1 = isObscured;
                          ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps1);
                          if (isObscured) {
                            isVerifiedTeenResult1 = type(dependencyMap[15]).isVerifiedTeen();
                            const obj17 = type(dependencyMap[15]);
                          }
                          const obj8 = {};
                          const merged3 = Object.assign(type);
                          obj8["file"] = transformUnfurledMediaItem(type.file, message);
                          let name = type.name;
                          if (null == name) {
                            const intl2 = type(dependencyMap[8]).intl;
                            name = intl2.string(type(dependencyMap[8]).t.GnuJ5u);
                          }
                          obj8["name"] = name;
                          const size = type.size;
                          let num15 = 0;
                          if (null != size) {
                            num15 = size;
                          }
                          obj8["size"] = importDefault(dependencyMap[16]).filesize(num15);
                          obj8["isSpoiler"] = isSpoiler;
                          obj8["spoilerDescription"] = spoilerDescription;
                          obj8["isObscure"] = isObscured;
                          obj8["isObscureAwaitingScan"] = obscureAwaitingScan;
                          obj8["obscureDescription"] = obscureDescription;
                          let tmp72 = isObscured;
                          if (isObscured) {
                            tmp72 = shouldAgeVerify;
                          }
                          obj8["verifyAge"] = tmp72;
                          obj8["obscureHideControls"] = isVerifiedTeenResult1;
                          obj8["obscureIsOpaque"] = isObscured;
                          return obj8;
                        } else {
                          found = type;
                          found = dependencyMap;
                          if (type(dependencyMap[6]).ComponentType.SEPARATOR === type) {
                            return type;
                          } else {
                            found = type;
                            found = dependencyMap;
                            if (type(dependencyMap[6]).ComponentType.TEXT_INPUT === type) {
                              return null;
                            } else {
                              found = type;
                              found = dependencyMap;
                              if (type(dependencyMap[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
                                let obj9 = {};
                                ({ type: obj12.type, id: obj12.id } = type);
                                let obj12 = type(dependencyMap[17]);
                                const obj10 = { component: type, message };
                                obj9.contentInventoryEntry = obj12.transformToRowGeneratedContentInventoryEntryComponent(obj10);
                                return obj9;
                              } else {
                                found = type;
                                found = dependencyMap;
                                if (type(dependencyMap[6]).ComponentType.CONTAINER === type) {
                                  const obj11 = {};
                                  const merged4 = Object.assign(type);
                                  const components2 = type.components;
                                  const mapped4 = components2.map((arg0) => getChildComponent(arg0));
                                  obj11["components"] = mapped4.filter(type(dependencyMap[5]).isNotNullish);
                                  let tmp47 = null;
                                  if (null != type.accentColor) {
                                    tmp47 = processColor(type.accentColor);
                                  }
                                  obj11["accentColor"] = tmp47;
                                  obj11["isSpoiler"] = type.spoiler;
                                  let stringResult = null;
                                  if (type.spoiler) {
                                    const intl = type(dependencyMap[8]).intl;
                                    stringResult = intl.string(type(dependencyMap[8]).t.C8ci33);
                                  }
                                  obj11["spoilerDescription"] = stringResult;
                                  const embedBackgroundColor = colors.embedBackgroundColor;
                                  let tmp52 = null;
                                  if (null != embedBackgroundColor) {
                                    tmp52 = embedBackgroundColor;
                                  }
                                  obj11["themedBackgroundColor"] = tmp52;
                                  return obj11;
                                } else {
                                  found = type;
                                  found = dependencyMap;
                                  if (type(dependencyMap[6]).ComponentType.LABEL !== type) {
                                    found = type;
                                    found = dependencyMap;
                                    if (type(dependencyMap[6]).ComponentType.FILE_UPLOAD !== type) {
                                      found = type;
                                      found = dependencyMap;
                                      if (type(dependencyMap[6]).ComponentType.CHECKPOINT_CARD === type) {
                                        const checkpointData = type.checkpointData;
                                        const tmp10 = callback(type, closure_3);
                                        if (checkpointData.version === CheckpointVersions.V2025) {
                                          const _Intl = Intl;
                                          const prototype = NumberFormat.prototype;
                                          const numberFormat = new NumberFormat(type(dependencyMap[8]).intl.currentLocale, { <string:173095521>: "filter", <string:1364484355>: "r" });
                                          obj12 = {};
                                          const merged5 = Object.assign(tmp10);
                                          const obj13 = {};
                                          const merged6 = Object.assign(checkpointData);
                                          obj13["cardId"] = checkpointData.cardId.toString();
                                          obj4 = type(dependencyMap[28]);
                                          obj13["cardAssetUrl"] = obj4.getCardAssetUrl(checkpointData.cardId);
                                          obj13["authorId"] = message.author.id;
                                          const powerLevel = checkpointData.powerLevel;
                                          let num3 = 0;
                                          if (null != powerLevel) {
                                            num3 = powerLevel;
                                          }
                                          obj13["powerLevel"] = numberFormat.format(num3);
                                          obj5 = type(dependencyMap[28]);
                                          const powerLevelPercentile = checkpointData.powerLevelPercentile;
                                          let num4 = 0;
                                          if (null != powerLevelPercentile) {
                                            num4 = powerLevelPercentile;
                                          }
                                          const checkpointPowerBarUnits = obj5.getCheckpointPowerBarUnits(num4);
                                          obj6 = type(dependencyMap[29]);
                                          let num6 = 10;
                                          if (obj6.isIOS()) {
                                            num6 = 9;
                                          }
                                          obj13["powerLevelUnits"] = Math.min(checkpointPowerBarUnits, num6);
                                          obj7 = type(dependencyMap[28]);
                                          obj13["voiceString"] = obj7.getVoiceDurationString(checkpointData.totalVoiceMinutes);
                                          const numEmojisSent = checkpointData.numEmojisSent;
                                          obj13["reactionString"] = numEmojisSent.toLocaleString(type(dependencyMap[8]).intl.currentLocale);
                                          const numMessagesSent = checkpointData.numMessagesSent;
                                          obj13["messagesString"] = numMessagesSent.toLocaleString(type(dependencyMap[8]).intl.currentLocale);
                                          let tmp34;
                                          if (null != checkpointData.topEmoji) {
                                            obj14 = {};
                                            const merged7 = Object.assign(checkpointData.topEmoji);
                                            let result;
                                            if (null == checkpointData.topEmoji.emojiId) {
                                              obj9 = importDefault(dependencyMap[30]);
                                              result = obj9.convertSurrogateToName(checkpointData.topEmoji.emojiName);
                                            }
                                            obj14["emojiSurrogateName"] = result;
                                            tmp34 = obj14;
                                          }
                                          obj13["topEmoji"] = tmp34;
                                          obj13["clickable"] = undefined;
                                          obj12["checkpointData"] = obj13;
                                          obj = obj12;
                                          const str = checkpointData.cardId;
                                        } else {
                                          obj = { type: type(dependencyMap[6]).ComponentType.UNKNOWN, id: type.id };
                                        }
                                        return obj;
                                      } else {
                                        found = type;
                                        if (type(dependencyMap[6]).ComponentType.RADIO_GROUP !== type) {
                                          if (type(dependencyMap[6]).ComponentType.CHECKBOX_GROUP !== type) {
                                            const CHECKBOX = type(dependencyMap[6]).ComponentType.CHECKBOX;
                                          }
                                        }
                                        return null;
                                      }
                                    }
                                  }
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
        found = type;
        found = dependencyMap;
        found = type(dependencyMap[11]).getInitialSnowflakeSelectOptions(type, message.id, guildId);
        const obj15 = {};
        found = obj15;
        found = type;
        found = Object.assign(type);
        const obj28 = type(dependencyMap[11]);
        obj15["state"] = type(dependencyMap[9]).getActionComponentState(interaction, type, shouldDisableInteractiveComponents);
        const obj30 = type(dependencyMap[9]);
        obj15["selectedOptions"] = type(dependencyMap[12]).transformSearchableSelectOptions(found, guildId);
        const obj31 = type(dependencyMap[12]);
        obj15["placeholder"] = type(dependencyMap[7]).getSelectPlaceholder(type);
        found = getSelectAccessibilityLabel;
        obj15["accessibilityLabel"] = getSelectAccessibilityLabel(type, found, (label) => label.label);
        return obj15;
      }
    }
  }
}
function getSelectAccessibilityLabel(type, found, arg2) {
  let obj = found(dependencyMap[18]);
  if (obj.shouldSkipAccessibilityLabels()) {
    return found(dependencyMap[7]).getSelectPlaceholder(type);
  } else {
    if (null != found) {
      if (0 !== found.length) {
        const mapped = found.map(arg2);
        const intl = found(dependencyMap[8]).intl;
        obj = { selections: mapped.join(",") };
        return intl.formatToPlainString(found(dependencyMap[8]).t.I/ROH+, obj);
      }
    }
    const selectPlaceholder = found(dependencyMap[7]).getSelectPlaceholder(type);
    const intl2 = found(dependencyMap[8]).intl;
    obj = { placeholder: selectPlaceholder };
    return intl2.formatToPlainString(found(dependencyMap[8]).t.3aednA, obj);
  }
}
function getUnfurledMediaItemType(arg0) {
  let contentType;
  let height;
  let width;
  ({ width, height, contentType } = arg0);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            return tmp3(tmp4[14]).MediaGalleryItemType.IMAGE;
          } else {
            if (tmp3Result.isVideoContentType(contentType)) {
              return arg1(dependencyMap[14]).MediaGalleryItemType.VIDEO;
            }
            const tmp3Result = tmp3(tmp4[19]);
          }
          const obj = arg1(dependencyMap[19]);
        }
      }
    }
  }
  return arg1(dependencyMap[14]).MediaGalleryItemType.VISUAL_PLACEHOLDER;
}
function transformUnfurledMediaItem(file, shouldShowMedia) {
  let proxyUrl;
  let width;
  const size = {};
  const merged = Object.assign(file);
  const tmp = getUnfurledMediaItemType(file);
  size["srcIsAnimated"] = shouldShowMedia(dependencyMap[20]).hasFlag(file.flags, shouldShowMedia(dependencyMap[21]).UnfurledMediaItemFlags.IS_ANIMATED);
  if (!shouldShowMedia.shouldShowMedia) {
    size.height = 0;
    size.width = 0;
  }
  if (tmp === shouldShowMedia(dependencyMap[14]).MediaGalleryItemType.IMAGE) {
    const obj2 = importDefault(dependencyMap[22]);
    ({ proxyUrl, width } = size);
    let num3 = 0;
    if (null != width) {
      num3 = width;
    }
    const height = size.height;
    let num4 = 0;
    if (null != height) {
      num4 = height;
    }
    size.proxyUrl = obj2.getImageSrc(proxyUrl, num3, num4, !shouldShowMedia.shouldAutoPlayGifs);
  }
  const obj = shouldShowMedia(dependencyMap[20]);
  size.width = shouldShowMedia(dependencyMap[23]).sanitizeMediaDimension(size.width);
  const obj3 = shouldShowMedia(dependencyMap[23]);
  size.height = shouldShowMedia(dependencyMap[23]).sanitizeMediaDimension(size.height);
  return size;
}
function renderMarkdownText(textDisplayComponent, id, content) {
  const combined = "" + textDisplayComponent.type + "-" + id + "-" + content;
  const value = importDefaultResult.get(combined);
  if (null != value) {
    return value;
  } else {
    const obj = {};
    const merged = Object.assign(textDisplayComponent.parserState);
    const parseToASTResult = importDefault(dependencyMap[27]).parseToAST(content, true, obj);
    const result = importDefaultResult.set(combined, parseToASTResult);
    return parseToASTResult;
  }
}
let closure_3 = [-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006410285938622599];
let closure_4 = importDefault(dependencyMap[0]);
const processColor = arg1(dependencyMap[1]).processColor;
const CheckpointVersions = arg1(dependencyMap[2]).CheckpointVersions;
let closure_7 = arg1(dependencyMap[3]).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
let importDefaultResult = importDefault(dependencyMap[25]);
importDefaultResult = new importDefaultResult({ maxAge: 15 * importDefault(dependencyMap[26]).Millis.MINUTE });
const obj = { maxAge: 15 * importDefault(dependencyMap[26]).Millis.MINUTE };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  let obj = { type: "textDisplayComponent", parserState: arr(dependencyMap[4]).getInitialParserStateFromMessage(message.message, closure_7) };
  obj = {};
  const merged = Object.assign(message);
  obj["markdownConfigs"] = { textDisplayComponent: obj };
  arr = obj;
  const mapped = arr.map((arg0) => callback(obj, arg0));
  return mapped.filter(arr(dependencyMap[5]).isNotNullish);
};
export { getUnfurledMediaItemType };
