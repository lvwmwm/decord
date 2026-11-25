// Module ID: 8780
// Function ID: 8781
// Name: transformMessageComponents
// Dependencies: [109, 17, 6365, 8781, 8776, 1254, 2117, 6364, 1112, 8782, 8790, 8791, 8793, 8795, 8796, 6794, 8091, 8797, 8799, 1089, 8804, 6372, 1404, 6371, 8806, 8807, 1379, 1454, 1088, 7036, 6375, 6738, 6391, 8185, 6388, 2]
// Exports: default, getUnfurledMediaItemType

// Module 8780 (transformMessageComponents)
import react_native from "react-native" /* 17 */;
import DurationsDefault from "Durations" /* 1088 */;
import URLUtilsDefault from "URLUtils" /* 1379 */;
import CheckpointConstants from "CheckpointConstants" /* 6365 */;
import MediaFormatTesters from "MediaFormatTesters" /* 6372 */;
import InteractionComponentConstants from "InteractionComponentConstants" /* 8781 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8796 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 8806 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import LRUCache from "LRUCache" /* 1454 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp4;
const intl7 = tmp4(1112);
const FlagUtils = tmp4(1404);
const MediaTypes = tmp4(6371);
const AgeVerificationUtils = tmp4(6794);
const ExplicitMediaUtils = tmp4(8795);
const sanitizeMediaDimension = tmp4(8807);
function transformToRowGeneratedComponent(message, accessory) {
  let colors;
  let contentType;
  let embedBackgroundColor;
  let filesize;
  let found;
  let getAccessibilityLabelOrCheapFallbackUnsafe;
  let getAccessibilityLabelOrCheapFallbackUnsafe2;
  let guildId;
  let height;
  let interaction;
  let intl;
  let intl4;
  let intl5;
  let isSpoiler;
  let isSpoiler2;
  let mapped2;
  let mapped4;
  let markdownConfigs;
  let name;
  let num2;
  let obj16;
  let obj21;
  let obj24;
  let obj5;
  let obscureAwaitingScan;
  let obscureAwaitingScan2;
  let obscureDescription;
  let obscureDescription2;
  let shouldAgeVerify;
  let shouldDisableInteractiveComponents;
  let shouldObscureSpoiler;
  let showDescription;
  let spoiler;
  let spoiler2;
  let spoilerDescription;
  let spoilerDescription2;
  let stringResult;
  let tmp25;
  let tmpResult;
  let tmpResult30;
  let tmpResult32;
  let tmpResult33;
  let tmpResult35;
  let tmpResult36;
  let tmpResult43;
  let tmpResult44;
  let tmpResult46;
  let tmpResult52;
  let tmpResult54;
  let tmpResult55;
  let tmpResult56;
  let tmpResult58;
  let value;
  let width;
  function expensive() {
    if (null != found1) {
      if (0 !== found1.length) {
        const mapped = arr.map(f93963);
        const intl = closure_0(message[8]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj = { selections: mapped.join(",") };
        const prop = closure_0(message[8]).t["I/ROH+"];
        return formatToPlainString(prop, obj);
      }
    }
    const obj3 = closure_0(message[7]);
    const placeholder = obj3.getSelectPlaceholder(closure_0);
    const intl2 = closure_0(message[8]).intl;
    return intl2.formatToPlainString(closure_0(message[8]).t["3aednA"], { placeholder });
  }
  _require = message;
  importDefault = accessory;
  message = message.message;
  ({ interaction, guildId, shouldDisableInteractiveComponents, shouldObscureSpoiler } = message);
  const enabledContentHarmTypeFlags = message.enabledContentHarmTypeFlags;
  ({ shouldShowMosaicMediaDescriptions: processColor, shouldAgeVerify } = message);
  const type = accessory.type;
  let tmp = _require;
  let tmp2 = message;
  ({ colors, markdownConfigs } = message);
  if (require("Server").ComponentType.ACTION_ROW === type) {
    const components = accessory.components;
    let mapped = components.map((item) => {
      const tmp = transformToRowGeneratedComponent(message, item);
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = tmp;
      }
      return tmp2;
    });
    let obj2 = { components: found, errorText: tmpResult.getLayoutComponentErrorText(interaction, message, accessory) };
    found = mapped.filter(tmp(tmp2[5]).isNotNullish);
    let merged = Object.assign(accessory);
    tmpResult = tmp(tmp2[7]);
    return obj2;
  } else if (tmp(tmp2[6]).ComponentType.BUTTON === type) {
    let label;
    if (accessory.style === tmp(tmp2[6]).ButtonStyle.PREMIUM) {
      const intl6 = tmp(tmp2[8]).intl;
      label = intl6.string(tmp(tmp2[8]).t.CHa0vN);
    } else {
      label = accessory.label;
    }
    let obj3 = { state: tmpResult30.getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents), label };
    const merged1 = Object.assign(accessory);
    tmpResult30 = tmp(tmp2[9]);
    return obj3;
  } else if (tmp(tmp2[6]).ComponentType.STRING_SELECT === type) {
    const tmpResult31 = tmp(tmp2[10]);
    const initialStringSelectOptions = tmpResult31.getInitialStringSelectOptions(accessory, message.id);
    const mapped1 = initialStringSelectOptions.map((item) => {
      let closure_0 = item;
      const options = accessory.options;
      return options.findIndex((value) => value.value === closure_0);
    });
    const found1 = mapped1.filter((item) => -1 !== item);
    let obj4 = { state: tmpResult32.getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents), selectedOptions: found1, placeholder: tmpResult33.getSelectPlaceholder(accessory), accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe2(obj5) };
    const merged2 = Object.assign(accessory);
    tmpResult32 = tmp(tmp2[9]);
    _require = accessory;
    const f93963 = (arg0) => found1.options[arg0].label;
    tmpResult33 = tmp(tmp2[7]);
    obj5 = { expensive, cheap: tmpResult35.getSelectPlaceholder(accessory) };
    getAccessibilityLabelOrCheapFallbackUnsafe2 = tmp(tmp2[20]).getAccessibilityLabelOrCheapFallbackUnsafe;
    tmp(tmp2[20]);
    tmpResult35 = tmp(tmp2[7]);
    return obj4;
  } else {
    if (tmp(tmp2[6]).ComponentType.USER_SELECT !== type) {
      if (tmp(tmp2[6]).ComponentType.ROLE_SELECT !== type) {
        if (tmp(tmp2[6]).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(tmp2[6]).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(tmp2[6]).ComponentType.SECTION === type) {
              const tmp66 = transformToRowGeneratedComponent(message, accessory.accessory);
              let tmp68 = null;
              if (null != tmp66) {
                tmp68 = tmp66;
              }
              let tmp69 = null;
              if (null != tmp68) {
                const obj6 = { components: mapped2.filter(tmp(tmp2[5]).isNotNullish), accessory: tmp68, errorText: tmpResult36.getLayoutComponentErrorText(interaction, message, accessory) };
                const merged3 = Object.assign(accessory);
                const components1 = accessory.components;
                mapped2 = components1.map((item) => {
                  const tmp = transformToRowGeneratedComponent(message, item);
                  let tmp2 = null;
                  if (null != tmp) {
                    tmp2 = tmp;
                  }
                  return tmp2;
                });
                tmp69 = obj6;
                tmpResult36 = tmp(tmp2[7]);
              }
              return tmp69;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_DISPLAY === type) {
              const obj7 = { content: value };
              const merged4 = Object.assign(accessory);
              const textDisplayComponent = markdownConfigs.textDisplayComponent;
              const content = accessory.content;
              let _HermesInternal = HermesInternal;
              let str3 = "-";
              let combined = "" + textDisplayComponent.type + "-" + message.id + "-" + content;
              value = importDefaultResult1.get(combined);
              const obj29 = importDefaultResult1;
              if (null == value) {
                const obj8 = {};
                const merged5 = Object.assign(textDisplayComponent.parserState);
                const obj31 = require("MarkupUtils");
                const parseToASTResult = obj31.parseToAST(content, true, obj8);
                let result = obj29.set(combined, parseToASTResult);
                value = parseToASTResult;
              }
              return obj7;
            } else if (tmp(tmp2[6]).ComponentType.THUMBNAIL === type) {
              ({ width, height, contentType } = accessory.media);
              if (null != width) {
                if (width > 0) {
                  if (null != height) {
                    let VISUAL_PLACEHOLDER;
                    if (height > 0) {
                      const tmpResult37 = tmp(tmp2[21]);
                      if (tmpResult37.isImageContentType(contentType)) {
                        VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.IMAGE;
                      } else {
                        const tmpResult38 = tmp(tmp2[21]);
                        if (tmpResult38.isVideoContentType(contentType)) {
                          VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VIDEO;
                        }
                      }
                    }
                    const getUnfurledMediaItemObscurityProps2 = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps;
                    let str2 = "generic";
                    tmp(tmp2[13]);
                    if (VISUAL_PLACEHOLDER === tmp(tmp2[14]).MediaGalleryItemType.IMAGE) {
                      str2 = "image";
                    }
                    const obj9 = { type: str2, mediaItem: null, isSpoilered: spoiler2, isAuthorBot: message.author.bot, shouldObscureSpoiler, shouldAgeVerify, enabledContentHarmTypeFlags };
                    ({ media: obj25.mediaItem, spoiler: spoiler2 } = accessory);
                    if (spoiler2 == null) {
                      spoiler2 = false;
                    }
                    const unfurledMediaItemObscurityProps2 = getUnfurledMediaItemObscurityProps2(obj9);
                    const isObscured2 = unfurledMediaItemObscurityProps2.isObscured;
                    let isVerifiedTeenResult = isObscured2;
                    ({ isSpoiler: isSpoiler2, spoilerDescription: spoilerDescription2, obscureDescription: obscureDescription2, obscureAwaitingScan: obscureAwaitingScan2 } = unfurledMediaItemObscurityProps2);
                    if (isObscured2) {
                      const tmpResult40 = tmp(tmp2[15]);
                      isVerifiedTeenResult = tmpResult40.isVerifiedTeen();
                    }
                    const obj10 = { media: transformUnfurledMediaItem(accessory.media, message), isSpoiler: isSpoiler2, spoilerDescription: spoilerDescription2, isObscure: isObscured2, isObscureAwaitingScan: obscureAwaitingScan2, obscureDescription: obscureDescription2, verifyAge: isObscured2 && shouldAgeVerify, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: isObscured2, descriptionHint: intl4.string(tmp(tmp2[8]).t.IPzNKE), accessibilityRole: intl5.string(tmp(tmp2[8]).t.fKyfca) };
                    const merged6 = Object.assign(accessory);
                    intl4 = tmp(tmp2[8]).intl;
                    intl5 = tmp(tmp2[8]).intl;
                    return obj10;
                  }
                }
              }
              VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VISUAL_PLACEHOLDER;
            } else if (tmp(tmp2[6]).ComponentType.MEDIA_GALLERY === type) {
              const items = accessory.items;
              const mapped3 = items.map((media, index) => {
                let combined;
                let contentType;
                let height;
                let isSpoiler;
                let obscureAwaitingScan;
                let obscureDescription;
                let spoiler;
                let spoilerDescription;
                let stringResult;
                let stringResult1;
                let tmp13;
                let width;
                ({ width, height, contentType } = media.media);
                if (null != width) {
                  if (width > 0) {
                    if (null != height) {
                      let VISUAL_PLACEHOLDER;
                      let tmp17;
                      if (height > 0) {
                        const obj = MediaFormatTesters;
                        if (obj.isImageContentType(contentType)) {
                          VISUAL_PLACEHOLDER = tmp(8796).MediaGalleryItemType.IMAGE;
                        } else {
                          const tmpResult = MediaFormatTesters;
                          if (tmpResult.isVideoContentType(contentType)) {
                            VISUAL_PLACEHOLDER = tmp(8796).MediaGalleryItemType.VIDEO;
                          }
                        }
                      }
                      const getUnfurledMediaItemObscurityProps = ExplicitMediaUtils.getUnfurledMediaItemObscurityProps;
                      let str = "image";
                      ExplicitMediaUtils;
                      if (VISUAL_PLACEHOLDER !== RowGeneratorTypes.MediaGalleryItemType.IMAGE) {
                        let str2 = "generic";
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          str2 = "video";
                        }
                        str = str2;
                      }
                      const obj2 = { type: str, mediaItem: null, isSpoilered: spoiler, isAuthorBot: message.author.bot, shouldObscureSpoiler, enabledContentHarmTypeFlags, shouldAgeVerify };
                      ({ media: obj3.mediaItem, spoiler } = media);
                      if (spoiler == null) {
                        spoiler = false;
                      }
                      const unfurledMediaItemObscurityProps = getUnfurledMediaItemObscurityProps(obj2);
                      const isObscured = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured;
                      ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps);
                      const tmp10 = shouldAgeVerify;
                      const tmp7 = message;
                      if (isObscured) {
                        const tmp4Result2 = AgeVerificationUtils;
                        isVerifiedTeenResult = tmp4Result2.isVerifiedTeen();
                      }
                      if (VISUAL_PLACEHOLDER !== RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                        const obj4 = { media: transformUnfurledMediaItem(media.media, closure_0), mediaType: VISUAL_PLACEHOLDER, videoPreviewUrl: tmp13, isSpoiler, spoilerDescription, isObscure: isObscured, isObscureAwaitingScan: obscureAwaitingScan, obscureDescription, verifyAge: isObscured && tmp10, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: isObscured, showDescription: processColor, descriptionHint: stringResult, accessibilityRole: stringResult1, portalId: combined };
                        const merged = Object.assign(media);
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const intl2 = intl7.intl;
                          stringResult = intl2.string(intl7.t["BEWw/7"]);
                        } else {
                          const intl = intl7.intl;
                          stringResult = intl.string(intl7.t.IPzNKE);
                        }
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const intl4 = intl7.intl;
                          stringResult1 = intl4.string(intl7.t["/SCpvi"]);
                        } else {
                          const intl3 = intl7.intl;
                          stringResult1 = intl3.string(intl7.t.fKyfca);
                        }
                        combined = null;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const _HermesInternal = HermesInternal;
                          combined = "" + tmp7.id + "_MediaGallery(" + accessory.id + ")_" + index;
                        }
                        tmp17 = obj4;
                      } else {
                        const proxyUrl = media.media.proxyUrl;
                        const obj5 = URLUtilsDefault;
                        const str3 = obj5.toURLSafe(proxyUrl);
                        let str1 = null;
                        if (null != str3) {
                          const searchParams = str3.searchParams;
                          const result = searchParams.set("format", "webp");
                          str1 = str3.toString();
                        }
                        tmp17 = null;
                        tmp13 = str1;
                      }
                      return tmp17;
                    }
                  }
                }
                VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
              });
              const found2 = mapped3.filter(tmp(tmp2[5]).isNotNullish);
              let tmp40 = null;
              if (0 !== found2.length) {
                const obj11 = { items: found2 };
                const merged7 = Object.assign(accessory);
                tmp40 = obj11;
              }
              return tmp40;
            } else if (tmp(tmp2[6]).ComponentType.FILE === type) {
              const obj12 = { type: "file", mediaItem: null, isSpoilered: spoiler, isAuthorBot: message.author.bot, shouldObscureSpoiler, shouldAgeVerify, enabledContentHarmTypeFlags };
              ({ file: obj18.mediaItem, spoiler } = accessory);
              let getUnfurledMediaItemObscurityProps = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps;
              tmp(tmp2[13]);
              if (spoiler == null) {
                spoiler = false;
              }
              let unfurledMediaItemObscurityProps = getUnfurledMediaItemObscurityProps(obj12);
              let isObscured = unfurledMediaItemObscurityProps.isObscured;
              let isVerifiedTeenResult1 = isObscured;
              ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps);
              if (isObscured) {
                const tmpResult42 = tmp(tmp2[15]);
                isVerifiedTeenResult1 = tmpResult42.isVerifiedTeen();
              }
              const obj13 = { file: transformUnfurledMediaItem(accessory.file, message), name, size: filesize(num2), isSuspiciousDownload: null != tmpResult43.isSuspiciousDownload(accessory.file.url), isSpoiler, spoilerDescription, isObscure: isObscured, isObscureAwaitingScan: obscureAwaitingScan, obscureDescription, verifyAge: isObscured && shouldAgeVerify, obscureHideControls: isVerifiedTeenResult1, obscureIsOpaque: isObscured };
              const merged8 = Object.assign(accessory);
              name = accessory.name;
              if (name == null) {
                let intl3 = tmp(tmp2[8]).intl;
                name = intl3.string(tmp(tmp2[8]).t.GnuJ5u);
              }
              num2 = accessory.size;
              filesize = require("module_8091").filesize;
              require("module_8091");
              if (num2 == null) {
                num2 = 0;
              }
              tmpResult43 = tmp(tmp2[17]);
              return obj13;
            } else if (tmp(tmp2[6]).ComponentType.SEPARATOR === type) {
              return accessory;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_INPUT === type) {
              return null;
            } else if (tmp(tmp2[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
              ({ type: obj15.type, id: obj15.id } = accessory);
              const obj14 = { type: null, id: null, contentInventoryEntry: tmpResult44.transformToRowGeneratedContentInventoryEntryComponent(obj16) };
              obj16 = { component: accessory, message };
              tmpResult44 = tmp(tmp2[18]);
              return obj14;
            } else if (tmp(tmp2[6]).ComponentType.CONTAINER === type) {
              const obj17 = { components: mapped4.filter(tmp(tmp2[5]).isNotNullish), accentColor: tmp25, isSpoiler: accessory.spoiler && shouldObscureSpoiler, spoilerDescription: stringResult, themedBackgroundColor: embedBackgroundColor };
              const merged9 = Object.assign(accessory);
              const components2 = accessory.components;
              mapped4 = components2.map((item) => {
                const tmp = transformToRowGeneratedComponent(message, item);
                let tmp2 = null;
                if (null != tmp) {
                  tmp2 = tmp;
                }
                return tmp2;
              });
              tmp25 = null;
              if (null != accessory.accentColor) {
                const tmpResult45 = tmp(tmp2[19]);
                tmp25 = processColor(tmpResult45.int2hsl(accessory.accentColor));
              }
              stringResult = null;
              if (accessory.spoiler && shouldObscureSpoiler) {
                let intl2 = tmp(tmp2[8]).intl;
                stringResult = intl2.string(tmp(tmp2[8]).t.C8ci33);
              }
              embedBackgroundColor = colors.embedBackgroundColor;
              if (embedBackgroundColor == null) {
                embedBackgroundColor = null;
              }
              return obj17;
            } else {
              if (tmp(tmp2[6]).ComponentType.LABEL !== type) {
                if (tmp(tmp2[6]).ComponentType.FILE_UPLOAD !== type) {
                  if (tmp(tmp2[6]).ComponentType.CHECKPOINT_CARD === type) {
                    let obj22;
                    const checkpointData = accessory.checkpointData;
                    let tmp7 = enabledContentHarmTypeFlags(accessory, shouldObscureSpoiler);
                    const version = checkpointData.version;
                    if (shouldAgeVerify.V2025 === version) {
                      let tmp17 = tmp7;
                      const obj19 = { checkpointData: tmpResult46.transformCheckpoint2025CardToRowGeneratedComponent(checkpointData, message) };
                      const merged10 = Object.assign(tmp7);
                      obj22 = obj19;
                      tmpResult46 = tmp(tmp2[30]);
                    } else {
                      if (tmp8.V2026 === version) {
                        let str = "transformCheckpointCardToRowGeneratedComponent";
                        const tmpResult47 = tmp(tmp2[31]);
                        if (tmpResult47.getIsCheckpointCardEnabled("transformCheckpointCardToRowGeneratedComponent")) {
                          const tmpResult48 = tmp(tmp2[32]);
                          const cardColors = tmpResult48.getCardColors(checkpointData.cardColorPalette);
                          const tmpResult49 = tmp(tmp2[33]);
                          const processColorOrThrowResult = tmpResult49.processColorOrThrow(cardColors.primaryBackgroundColor);
                          const tmpResult50 = tmp(tmp2[33]);
                          const processColorOrThrowResult1 = tmpResult50.processColorOrThrow(cardColors.secondaryBackgroundColor);
                          const obj20 = { checkpointData: tmpResult52.transformCheckpoint2026CardToRowGeneratedComponent(obj21) };
                          let tmp13 = obj20;
                          const tmpResult51 = tmp(tmp2[33]);
                          const processColorOrThrowResult2 = tmpResult51.processColorOrThrow(cardColors.tertiaryBackgroundColor);
                          const merged11 = Object.assign(tmp7);
                          obj21 = { checkpointData, message, primaryBackgroundColor: processColorOrThrowResult, secondaryBackgroundColor: processColorOrThrowResult1, tertiaryBackgroundColor: processColorOrThrowResult2 };
                          obj22 = obj20;
                          tmpResult52 = tmp(tmp2[34]);
                        }
                      }
                      obj22 = { type: tmp(tmp2[6]).ComponentType.UNKNOWN, id: accessory.id };
                    }
                    return obj22;
                  } else {
                    if (tmp(tmp2[6]).ComponentType.RADIO_GROUP !== type) {
                      if (tmp(tmp2[6]).ComponentType.CHECKBOX_GROUP !== type) {
                        if (tmp(tmp2[6]).ComponentType.CHECKBOX !== type) {
                          if (tmp(tmp2[6]).ComponentType.OVERFLOW_MENU === type) {
                            let obj = { type: null, id: null, accessibilityLabel: intl.string(tmp(tmp2[8]).t.asPo8x) };
                            ({ type: obj.type, id: obj.id } = accessory);
                            intl = tmp(tmp2[8]).intl;
                            return obj;
                          } else {
                            const MENU_ACTION_ITEM = tmp(tmp2[6]).ComponentType.MENU_ACTION_ITEM;
                            return null;
                          }
                        }
                      }
                    }
                    let tmp4 = null;
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
    const tmpResult53 = tmp(tmp2[11]);
    const initialSnowflakeSelectOptions = tmpResult53.getInitialSnowflakeSelectOptions(accessory, message.id, guildId);
    const obj23 = { state: tmpResult54.getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents), selectedOptions: tmpResult55.transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId), placeholder: tmpResult56.getSelectPlaceholder(accessory), accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe(obj24) };
    const merged12 = Object.assign(accessory);
    tmpResult54 = tmp(tmp2[9]);
    tmpResult55 = tmp(tmp2[12]);
    _require = accessory;
    const f93964 = (label) => label.label;
    tmpResult56 = tmp(tmp2[7]);
    obj24 = { expensive, cheap: tmpResult58.getSelectPlaceholder(accessory) };
    getAccessibilityLabelOrCheapFallbackUnsafe = tmp(tmp2[20]).getAccessibilityLabelOrCheapFallbackUnsafe;
    tmp(tmp2[20]);
    tmpResult58 = tmp(tmp2[7]);
    return obj23;
  }
}
function transformUnfurledMediaItem(media, shouldShowMedia) {
  let contentType;
  let height;
  let proxyUrl;
  let tmp4Result;
  let tmp4Result3;
  let tmp4Result4;
  let width;
  let width2;
  ({ width, height, contentType } = media);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        let VISUAL_PLACEHOLDER;
        if (height > 0) {
          const obj = MediaFormatTesters;
          if (obj.isImageContentType(contentType)) {
            VISUAL_PLACEHOLDER = tmp(8796).MediaGalleryItemType.IMAGE;
          } else {
            const tmpResult = MediaFormatTesters;
            if (tmpResult.isVideoContentType(contentType)) {
              VISUAL_PLACEHOLDER = tmp(8796).MediaGalleryItemType.VIDEO;
            }
          }
        }
        size = { srcIsAnimated: tmp4Result.hasFlag(media.flags, MediaTypes.UnfurledMediaItemFlags.IS_ANIMATED), width: tmp4Result3.sanitizeMediaDimension(size.width), height: tmp4Result4.sanitizeMediaDimension(size.height) };
        const IMAGE = RowGeneratorTypes.MediaGalleryItemType.IMAGE;
        const merged = Object.assign(media);
        tmp4Result = FlagUtils;
        if (!shouldShowMedia.shouldShowMedia) {
          size.height = 0;
          size.width = 0;
        }
        if (VISUAL_PLACEHOLDER === IMAGE) {
          ({ proxyUrl, width: width2 } = size);
          const getImageSrc = RowGeneratorUtilsDefault.getImageSrc;
          if (width2 == null) {
            width2 = 0;
          }
          let num3 = size.height;
          if (num3 == null) {
            num3 = 0;
          }
          size.proxyUrl = getImageSrc(proxyUrl, width2, num3, !shouldShowMedia.shouldAutoPlayGifs);
        }
        tmp4Result3 = sanitizeMediaDimension;
        tmp4Result4 = sanitizeMediaDimension;
        return size;
      }
    }
  }
  VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
}
let closure_3 = ["checkpointData"];
const processColor = react_native.processColor;
const CheckpointVersions = CheckpointConstants.CheckpointVersions;
let closure_7 = InteractionComponentConstants.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
let obj = { max: Infinity, maxAge: 15 * DurationsDefault.Millis.MINUTE, updateAgeOnGet: true };
const importDefaultResult1 = new LRUCache(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  let obj2;
  let obj3;
  const obj = { type: "textDisplayComponent", parserState: obj2.getInitialParserStateFromMessage(message.message, closure_7) };
  obj2 = obj3(8776);
  obj3 = { markdownConfigs: { textDisplayComponent: obj } };
  const merged = Object.assign(message);
  const mapped = arr.map((item) => transformToRowGeneratedComponent(obj3, item));
  return mapped.filter(obj3(1254).isNotNullish);
};
export function getUnfurledMediaItemType(arg0) {
  let contentType;
  let height;
  let width;
  ({ width, height, contentType } = arg0);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          const obj = MediaFormatTesters;
          if (obj.isImageContentType(contentType)) {
            return RowGeneratorTypes.MediaGalleryItemType.IMAGE;
          } else {
            const tmpResult = MediaFormatTesters;
            if (tmpResult.isVideoContentType(contentType)) {
              return RowGeneratorTypes.MediaGalleryItemType.VIDEO;
            }
          }
        }
      }
    }
  }
  return RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
}
