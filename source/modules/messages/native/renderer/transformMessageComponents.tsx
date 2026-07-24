// Module ID: 7883
// Function ID: 62488
// Name: transformToRowGeneratedComponent
// Dependencies: [29, 27, 4354, 7884, 7870, 1327, 1881, 4353, 1212, 7885, 7892, 7893, 7895, 7898, 7899, 4347, 4671, 7900, 7730, 4317, 1360, 4358, 7880, 7879, 1443, 1362, 664, 4120, 7913, 478, 3771, 2]
// Exports: default

// Module 7883 (transformToRowGeneratedComponent)
import isWindows from "isWindows";
import { processColor } from "combineAndInjectMentionRule";
import { CheckpointVersions } from "CheckpointPersonas";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_7 } from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS";
import importDefaultResult from "priv";

const require = arg1;
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
  let processColor;
  let shouldAgeVerify;
  let shouldDisableInteractiveComponents;
  let shouldObscureSpoiler;
  let spoiler;
  let spoiler2;
  let spoilerDescription;
  let spoilerDescription2;
  const _require = message;
  const importDefault = type;
  function getChildComponent(accessory) {
    const tmp = outer1_9(closure_0, accessory);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  }
  message = message.message;
  ({ interaction, guildId, shouldDisableInteractiveComponents, shouldObscureSpoiler } = message);
  const enabledContentHarmTypeFlags = message.enabledContentHarmTypeFlags;
  ({ shouldShowMosaicMediaDescriptions: processColor, shouldAgeVerify } = message);
  type = type.type;
  ({ colors, markdownConfigs } = message);
  if (_require(message[6]).ComponentType.ACTION_ROW === type) {
    const components = type.components;
    const mapped = components.map((arg0) => getChildComponent(arg0));
    let found = _require;
    found = message;
    let obj = {};
    found = obj;
    found = type;
    found = mapped.filter(_require(message[5]).isNotNullish);
    found = Object.assign(type);
    obj["components"] = found;
    obj["errorText"] = _require(message[7]).getLayoutComponentErrorText(interaction, message, type);
    return obj;
  } else {
    found = _require;
    found = message;
    if (_require(message[6]).ComponentType.BUTTON === type) {
      found = _require;
      found = message;
      if (type.style === _require(message[6]).ButtonStyle.PREMIUM) {
        found = _require;
        found = message;
        const intl5 = _require(message[8]).intl;
        let label = intl5.string(_require(message[8]).t.CHa0vN);
      } else {
        label = type.label;
      }
      obj = {};
      found = obj;
      found = type;
      found = Object.assign(type);
      found = _require;
      found = message;
      obj["state"] = _require(message[9]).getActionComponentState(interaction, type, shouldDisableInteractiveComponents);
      obj["label"] = label;
      return obj;
    } else {
      found = _require;
      found = message;
      if (_require(message[6]).ComponentType.STRING_SELECT === type) {
        found = _require;
        found = message;
        const initialStringSelectOptions = _require(message[10]).getInitialStringSelectOptions(type, message.id);
        const mapped1 = initialStringSelectOptions.map((arg0) => {
          let closure_0 = arg0;
          const options = type.options;
          return options.findIndex((value) => value.value === closure_0);
        });
        found = mapped1.filter((arg0) => -1 !== arg0);
        const obj1 = {};
        found = obj1;
        found = type;
        found = Object.assign(type);
        const obj33 = _require(message[10]);
        obj1["state"] = _require(message[9]).getActionComponentState(interaction, type, shouldDisableInteractiveComponents);
        obj1["selectedOptions"] = found;
        const obj35 = _require(message[9]);
        obj1["placeholder"] = _require(message[7]).getSelectPlaceholder(type);
        found = getSelectAccessibilityLabel;
        obj1["accessibilityLabel"] = getSelectAccessibilityLabel(type, found, (arg0) => type.options[arg0].label);
        return obj1;
      } else {
        found = _require;
        found = message;
        if (_require(message[6]).ComponentType.USER_SELECT !== type) {
          found = _require;
          found = message;
          if (_require(message[6]).ComponentType.ROLE_SELECT !== type) {
            found = _require;
            found = message;
            if (_require(message[6]).ComponentType.MENTIONABLE_SELECT !== type) {
              found = _require;
              found = message;
              if (_require(message[6]).ComponentType.CHANNEL_SELECT !== type) {
                found = _require;
                found = message;
                if (_require(message[6]).ComponentType.SECTION === type) {
                  const childComponent = getChildComponent(type.accessory);
                  found = null;
                  if (null != childComponent) {
                    const obj2 = {};
                    found = obj2;
                    found = type;
                    found = Object.assign(type);
                    const components1 = type.components;
                    const mapped2 = components1.map((arg0) => getChildComponent(arg0));
                    found = _require;
                    found = message;
                    obj2["components"] = mapped2.filter(_require(message[5]).isNotNullish);
                    obj2["accessory"] = childComponent;
                    obj2["errorText"] = _require(message[7]).getLayoutComponentErrorText(interaction, message, type);
                    found = obj2;
                    const obj27 = _require(message[7]);
                  }
                  return found;
                } else {
                  found = _require;
                  found = message;
                  if (_require(message[6]).ComponentType.TEXT_DISPLAY === type) {
                    let obj3 = {};
                    let merged = Object.assign(type);
                    obj3["content"] = renderMarkdownText(markdownConfigs.textDisplayComponent, message.id, type.content);
                    return obj3;
                  } else {
                    found = _require;
                    found = message;
                    if (_require(message[6]).ComponentType.THUMBNAIL === type) {
                      const tmp80 = getUnfurledMediaItemType(type.media);
                      let obj4 = {};
                      let str31 = "generic";
                      if (tmp80 === _require(message[14]).MediaGalleryItemType.IMAGE) {
                        str31 = "image";
                      }
                      obj4.type = str31;
                      ({ media: obj22.mediaItem, spoiler: spoiler2 } = type);
                      obj4.isSpoilered = null != spoiler2 && spoiler2;
                      obj4.isAuthorBot = message.author.bot;
                      obj4.shouldObscureSpoiler = shouldObscureSpoiler;
                      obj4.shouldAgeVerify = shouldAgeVerify;
                      obj4.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                      let unfurledMediaItemObscurityProps = _require(message[13]).getUnfurledMediaItemObscurityProps(obj4);
                      const isObscured2 = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured2;
                      ({ isSpoiler: isSpoiler2, spoilerDescription: spoilerDescription2, obscureDescription: obscureDescription2, obscureAwaitingScan: obscureAwaitingScan2 } = unfurledMediaItemObscurityProps);
                      if (isObscured2) {
                        isVerifiedTeenResult = _require(message[15]).isVerifiedTeen();
                        const obj23 = _require(message[15]);
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
                      let intl3 = _require(message[8]).intl;
                      obj5["descriptionHint"] = intl3.string(_require(message[8]).t.IPzNKE);
                      let intl4 = _require(message[8]).intl;
                      obj5["accessibilityRole"] = intl4.string(_require(message[8]).t.fKyfca);
                      return obj5;
                    } else {
                      found = _require;
                      found = message;
                      if (_require(message[6]).ComponentType.MEDIA_GALLERY === type) {
                        const items = type.items;
                        const mapped3 = items.map((media) => {
                          let isSpoiler;
                          let obscureAwaitingScan;
                          let obscureDescription;
                          let spoiler;
                          let spoilerDescription;
                          const tmp = outer1_11(media.media);
                          let obj = message(message[13]);
                          obj = {};
                          let str = "image";
                          if (tmp !== message(message[14]).MediaGalleryItemType.IMAGE) {
                            let str2 = "generic";
                            if (tmp === message(message[14]).MediaGalleryItemType.VIDEO) {
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
                            isVerifiedTeenResult = message(message[15]).isVerifiedTeen();
                            const obj3 = message(message[15]);
                          }
                          if (tmp !== message(message[14]).MediaGalleryItemType.VIDEO) {
                            obj = {};
                            const merged = Object.assign(media);
                            obj["media"] = outer1_12(media.media, message);
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
                            if (tmp === message(message[14]).MediaGalleryItemType.VIDEO) {
                              const intl2 = message(message[8]).intl;
                              let stringResult = intl2.string(message(message[8]).t["BEWw/7"]);
                            } else {
                              const intl = message(message[8]).intl;
                              stringResult = intl.string(message(message[8]).t.IPzNKE);
                            }
                            obj["descriptionHint"] = stringResult;
                            if (tmp === message(message[14]).MediaGalleryItemType.VIDEO) {
                              const intl4 = message(message[8]).intl;
                              let stringResult1 = intl4.string(message(message[8]).t["/SCpvi"]);
                            } else {
                              const intl3 = message(message[8]).intl;
                              stringResult1 = intl3.string(message(message[8]).t.fKyfca);
                            }
                            obj["accessibilityRole"] = stringResult1;
                            let combined = null;
                            if (tmp === message(message[14]).MediaGalleryItemType.VIDEO) {
                              const _HermesInternal = HermesInternal;
                              combined = "" + message.id + "_MediaGallery(" + type.id + ")_" + arg1;
                            }
                            obj["portalId"] = combined;
                            let tmp13 = obj;
                          } else {
                            const str3 = type(message[24]).toURLSafe(media.media.proxyUrl);
                            str = null;
                            if (null != str3) {
                              const searchParams = str3.searchParams;
                              const result = searchParams.set("format", "webp");
                              str = str3.toString();
                            }
                            tmp13 = null;
                            const obj4 = type(message[24]);
                            tmp8 = str;
                          }
                          return tmp13;
                        });
                        const found1 = mapped3.filter(_require(message[5]).isNotNullish);
                        let tmp75 = null;
                        if (0 !== found1.length) {
                          let obj6 = {};
                          const merged2 = Object.assign(type);
                          obj6["items"] = found1;
                          tmp75 = obj6;
                        }
                        return tmp75;
                      } else {
                        found = _require;
                        found = message;
                        if (_require(message[6]).ComponentType.FILE === type) {
                          let obj14 = _require(message[13]);
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
                          let isObscured = unfurledMediaItemObscurityProps1.isObscured;
                          let isVerifiedTeenResult1 = isObscured;
                          ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps1);
                          if (isObscured) {
                            isVerifiedTeenResult1 = _require(message[15]).isVerifiedTeen();
                            const obj17 = _require(message[15]);
                          }
                          const obj8 = {};
                          const merged3 = Object.assign(type);
                          obj8["file"] = transformUnfurledMediaItem(type.file, message);
                          let name = type.name;
                          if (null == name) {
                            let intl2 = _require(message[8]).intl;
                            name = intl2.string(_require(message[8]).t.GnuJ5u);
                          }
                          obj8["name"] = name;
                          const size = type.size;
                          let num15 = 0;
                          if (null != size) {
                            num15 = size;
                          }
                          obj8["size"] = importDefault(message[16]).filesize(num15);
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
                          found = _require;
                          found = message;
                          if (_require(message[6]).ComponentType.SEPARATOR === type) {
                            return type;
                          } else {
                            found = _require;
                            found = message;
                            if (_require(message[6]).ComponentType.TEXT_INPUT === type) {
                              return null;
                            } else {
                              found = _require;
                              found = message;
                              if (_require(message[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
                                let obj9 = {};
                                ({ type: obj12.type, id: obj12.id } = type);
                                let obj12 = _require(message[17]);
                                const obj10 = { component: type, message };
                                obj9.contentInventoryEntry = obj12.transformToRowGeneratedContentInventoryEntryComponent(obj10);
                                return obj9;
                              } else {
                                found = _require;
                                found = message;
                                if (_require(message[6]).ComponentType.CONTAINER === type) {
                                  const obj11 = {};
                                  const merged4 = Object.assign(type);
                                  const components2 = type.components;
                                  const mapped4 = components2.map((arg0) => getChildComponent(arg0));
                                  obj11["components"] = mapped4.filter(_require(message[5]).isNotNullish);
                                  let tmp47 = null;
                                  if (null != type.accentColor) {
                                    tmp47 = processColor(type.accentColor);
                                  }
                                  obj11["accentColor"] = tmp47;
                                  obj11["isSpoiler"] = type.spoiler;
                                  let stringResult = null;
                                  if (type.spoiler) {
                                    let intl = _require(message[8]).intl;
                                    stringResult = intl.string(_require(message[8]).t.C8ci33);
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
                                  found = _require;
                                  found = message;
                                  if (_require(message[6]).ComponentType.LABEL !== type) {
                                    found = _require;
                                    found = message;
                                    if (_require(message[6]).ComponentType.FILE_UPLOAD !== type) {
                                      found = _require;
                                      found = message;
                                      if (_require(message[6]).ComponentType.CHECKPOINT_CARD === type) {
                                        const checkpointData = type.checkpointData;
                                        const tmp10 = enabledContentHarmTypeFlags(type, shouldObscureSpoiler);
                                        if (checkpointData.version === shouldAgeVerify.V2025) {
                                          const _Intl = Intl;
                                          const prototype = NumberFormat.prototype;
                                          const numberFormat = new NumberFormat(_require(message[8]).intl.currentLocale, { notation: "compact", compactDisplay: "short" });
                                          obj12 = {};
                                          const merged5 = Object.assign(tmp10);
                                          const obj13 = {};
                                          const merged6 = Object.assign(checkpointData);
                                          obj13["cardId"] = checkpointData.cardId.toString();
                                          obj4 = _require(message[28]);
                                          obj13["cardAssetUrl"] = obj4.getCardAssetUrl(checkpointData.cardId);
                                          obj13["authorId"] = message.author.id;
                                          const powerLevel = checkpointData.powerLevel;
                                          let num3 = 0;
                                          if (null != powerLevel) {
                                            num3 = powerLevel;
                                          }
                                          obj13["powerLevel"] = numberFormat.format(num3);
                                          obj5 = _require(message[28]);
                                          const powerLevelPercentile = checkpointData.powerLevelPercentile;
                                          let num4 = 0;
                                          if (null != powerLevelPercentile) {
                                            num4 = powerLevelPercentile;
                                          }
                                          const checkpointPowerBarUnits = obj5.getCheckpointPowerBarUnits(num4);
                                          obj6 = _require(message[29]);
                                          let num6 = 10;
                                          if (obj6.isIOS()) {
                                            num6 = 9;
                                          }
                                          obj13["powerLevelUnits"] = Math.min(checkpointPowerBarUnits, num6);
                                          obj7 = _require(message[28]);
                                          obj13["voiceString"] = obj7.getVoiceDurationString(checkpointData.totalVoiceMinutes);
                                          const numEmojisSent = checkpointData.numEmojisSent;
                                          obj13["reactionString"] = numEmojisSent.toLocaleString(_require(message[8]).intl.currentLocale);
                                          const numMessagesSent = checkpointData.numMessagesSent;
                                          obj13["messagesString"] = numMessagesSent.toLocaleString(_require(message[8]).intl.currentLocale);
                                          let tmp34;
                                          if (null != checkpointData.topEmoji) {
                                            obj14 = {};
                                            const merged7 = Object.assign(checkpointData.topEmoji);
                                            let result;
                                            if (null == checkpointData.topEmoji.emojiId) {
                                              obj9 = importDefault(message[30]);
                                              result = obj9.convertSurrogateToName(checkpointData.topEmoji.emojiName);
                                            }
                                            obj14["emojiSurrogateName"] = result;
                                            tmp34 = obj14;
                                          }
                                          obj13["topEmoji"] = tmp34;
                                          obj13["clickable"] = undefined;
                                          obj12["checkpointData"] = obj13;
                                          obj = obj12;
                                          let str = checkpointData.cardId;
                                        } else {
                                          obj = { type: _require(message[6]).ComponentType.UNKNOWN, id: type.id };
                                        }
                                        return obj;
                                      } else {
                                        found = _require;
                                        if (_require(message[6]).ComponentType.RADIO_GROUP !== type) {
                                          if (_require(message[6]).ComponentType.CHECKBOX_GROUP !== type) {
                                            const CHECKBOX = _require(message[6]).ComponentType.CHECKBOX;
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
        found = _require;
        found = message;
        found = _require(message[11]).getInitialSnowflakeSelectOptions(type, message.id, guildId);
        const obj15 = {};
        found = obj15;
        found = type;
        found = Object.assign(type);
        const obj28 = _require(message[11]);
        obj15["state"] = _require(message[9]).getActionComponentState(interaction, type, shouldDisableInteractiveComponents);
        const obj30 = _require(message[9]);
        obj15["selectedOptions"] = _require(message[12]).transformSearchableSelectOptions(found, guildId);
        const obj31 = _require(message[12]);
        obj15["placeholder"] = _require(message[7]).getSelectPlaceholder(type);
        found = getSelectAccessibilityLabel;
        obj15["accessibilityLabel"] = getSelectAccessibilityLabel(type, found, (label) => label.label);
        return obj15;
      }
    }
  }
}
function getSelectAccessibilityLabel(type, found, arg2) {
  let obj = require(7730) /* apexExperiment */;
  if (obj.shouldSkipAccessibilityLabels()) {
    return require(4353) /* _createForOfIteratorHelperLoose */.getSelectPlaceholder(type);
  } else {
    if (null != found) {
      if (0 !== found.length) {
        const mapped = found.map(arg2);
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { selections: mapped.join(",") };
        return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["I/ROH+"], obj);
      }
    }
    const selectPlaceholder = require(4353) /* _createForOfIteratorHelperLoose */.getSelectPlaceholder(type);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { placeholder: selectPlaceholder };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["3aednA"], obj);
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
            return tmp3(7899).MediaGalleryItemType.IMAGE;
          } else {
            if (tmp3Result.isVideoContentType(contentType)) {
              return require(7899) /* MediaGalleryItemType */.MediaGalleryItemType.VIDEO;
            }
            tmp3Result = tmp3(4317);
          }
          obj = require(4317) /* urlMatchesFileExtension */;
        }
      }
    }
  }
  return require(7899) /* MediaGalleryItemType */.MediaGalleryItemType.VISUAL_PLACEHOLDER;
}
function transformUnfurledMediaItem(file, shouldShowMedia) {
  let proxyUrl;
  let width;
  const size = {};
  const merged = Object.assign(file);
  const tmp = getUnfurledMediaItemType(file);
  size["srcIsAnimated"] = require(1360) /* hasFlag */.hasFlag(file.flags, require(4358) /* toContentScanMetadata */.UnfurledMediaItemFlags.IS_ANIMATED);
  if (!shouldShowMedia.shouldShowMedia) {
    size.height = 0;
    size.width = 0;
  }
  if (tmp === require(7899) /* MediaGalleryItemType */.MediaGalleryItemType.IMAGE) {
    const obj2 = importDefault(7880);
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
  const obj = require(1360) /* hasFlag */;
  size.width = require(7879) /* sanitizeMediaDimension */.sanitizeMediaDimension(size.width);
  const obj3 = require(7879) /* sanitizeMediaDimension */;
  size.height = require(7879) /* sanitizeMediaDimension */.sanitizeMediaDimension(size.height);
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
    const parseToASTResult = importDefault(4120).parseToAST(content, true, obj);
    const result = importDefaultResult.set(combined, parseToASTResult);
    return parseToASTResult;
  }
}
let closure_3 = ["checkpointData"];
let obj = { max: Infinity, maxAge: 15 * require("set").Millis.MINUTE, updateAgeOnGet: true };
importDefaultResult = new importDefaultResult(obj);
let result = require("CheckpointPersonas").fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  let obj = { type: "textDisplayComponent" };
  obj.parserState = obj(7870).getInitialParserStateFromMessage(message.message, closure_7);
  obj = {};
  const merged = Object.assign(message);
  obj["markdownConfigs"] = { textDisplayComponent: obj };
  const mapped = arr.map((arg0) => outer1_9(obj, arg0));
  return mapped.filter(obj(1327).isNotNullish);
};
export { getUnfurledMediaItemType };
