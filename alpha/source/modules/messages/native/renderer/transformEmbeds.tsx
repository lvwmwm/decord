// Module ID: 14456
// Function ID: 14457
// Name: transformEmbeds
// Dependencies: [17, 1071, 8850, 8849, 6777, 14457, 14458, 1379, 8822, 6403, 1112, 1089, 14424, 4865, 8812, 8817, 6825, 14459, 2]
// Exports: default

// Module 14456 (transformEmbeds)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1089 */;
import intl6 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import DateUtils from "DateUtils" /* 4865 */;
import MediaFormatTesters from "MediaFormatTesters" /* 6403 */;
import EmbedUtils from "EmbedUtils" /* 6777 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 8812 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 8817 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8822 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 8849 */;
import sanitizeMediaDimension from "sanitizeMediaDimension" /* 8850 */;
import MarkupParsers from "MarkupParsers" /* 14424 */;
import utils from "utils" /* 14457 */;
import isConjureProjectLinkEmbedDefault from "isConjureProjectLinkEmbed" /* 14458 */;
import NativeChatCapabilities from "NativeChatCapabilities" /* 14459 */;
import size from "module_2" /* 2 */;

let borderLeftColor, type;

const processColor = react_native.processColor;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  let backgroundColor;
  let channelId;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let embeds;
  let ignoreCache;
  let showListsAndHeaders;
  let showMaskedLinks;
  ({ embeds, channelId: require, gifAutoPlay: importDefault, hasSpoilerEmbeds: dependencyMap, ignoreEmbedDescriptionCache: processColor, shouldInlineEmbedMedia: MessageEmbedTypes, colors: closure_5, showListsAndHeaders: closure_6, showMaskedLinks: closure_7, themedBackgroundColor: closure_8, enabledContentHarmTypeFlags: closure_9, authorIsBot: closure_10, showContentInventoryEntryFallbackEmbed: closure_11, shouldAgeVerify: closure_12, transformComponents: closure_13 } = arg0);
  function renderEmbedMedia(image) {
    let getImageSrc;
    let height;
    let imageSrc;
    let obj2;
    let obj3;
    let proxyURL;
    let width;
    ({ proxyURL, width, height } = image);
    const url = image.url;
    const obj = { width: obj2.sanitizeMediaDimension(width), height: obj3.sanitizeMediaDimension(height), proxyURL: imageSrc, url: getImageSrc(proxyURL, width, height, !importDefault) };
    const merged = Object.assign(image);
    obj2 = sanitizeMediaDimension;
    imageSrc = proxyURL;
    obj3 = sanitizeMediaDimension;
    if (null != proxyURL) {
      const obj4 = RowGeneratorUtilsDefault;
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !importDefault);
    }
    getImageSrc = RowGeneratorUtilsDefault.getImageSrc;
    RowGeneratorUtilsDefault;
    if (proxyURL == null) {
      proxyURL = url;
    }
    return obj;
  }
  return embeds.flatMap((type) => {
    let RICH;
    let audio;
    let getImageSrc;
    let height;
    let imageSrc;
    let intl;
    let intl2;
    let provider;
    let proxyURL;
    let proxyURL2;
    let proxyURL3;
    let proxyURL4;
    let referenceId;
    let str10;
    let str11;
    let stringResult;
    let tmp34;
    let tmp3Result17;
    let tmp3Result18;
    let tmp41;
    let tmp47;
    let tmp6Result6;
    let url2;
    let url3;
    let url4;
    let url5;
    let video;
    let width;
    if (type.type !== MessageEmbedTypes.POST_PREVIEW) {
      if (type.type !== MessageEmbedTypes.GIFT) {
        if (type.type !== MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
          if (type.type !== MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
            if (type.type !== MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              if (type.type === MessageEmbedTypes.COMPONENTS) {
                return [];
              }
              let obj = EmbedUtils;
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === MessageEmbedTypes.VOICE_CHANNEL) {
                return [];
              } else {
                const tmp3Result = utils;
                if (tmp3Result.isContentInventoryFallbackEmbed(type)) {
                  const tmp5 = closure_11;
                  if (!tmp5) {
                    return [];
                  }
                }
                const tmp3Result15 = EmbedUtils;
                if (tmp3Result15.isSocialLayerStorefrontArticleEmbed(type)) {
                  return [];
                } else {
                  const tmp3Result16 = EmbedUtils;
                  if (tmp3Result16.isUserProfileArticleEmbed(type)) {
                    return [];
                  } else if (isConjureProjectLinkEmbedDefault(type)) {
                    return [];
                  } else {
                    let mapped;
                    let tmp9 = null;
                    if (MessageEmbedTypes) {
                      tmp9 = null;
                      if (null != type.thumbnail) {
                        const thumbnail = type.thumbnail;
                        ({ proxyURL, width, height } = thumbnail);
                        let obj2 = { width: tmp3Result17.sanitizeMediaDimension(width), height: tmp3Result18.sanitizeMediaDimension(height), proxyURL: imageSrc, url: getImageSrc(proxyURL, width, height, !importDefault) };
                        const url = thumbnail.url;
                        let merged = Object.assign(thumbnail);
                        tmp3Result17 = sanitizeMediaDimension;
                        imageSrc = proxyURL;
                        tmp3Result18 = sanitizeMediaDimension;
                        if (null != proxyURL) {
                          const tmp6Result = RowGeneratorUtilsDefault;
                          imageSrc = tmp6Result.getImageSrc(proxyURL, width, height, !importDefault);
                        }
                        getImageSrc = RowGeneratorUtilsDefault.getImageSrc;
                        const tmp6Result4 = RowGeneratorUtilsDefault;
                        if (proxyURL == null) {
                          proxyURL = url;
                        }
                        tmp9 = obj2;
                      }
                    }
                    let tmp25 = null;
                    if (MessageEmbedTypes) {
                      tmp25 = null;
                      if (null != type.image) {
                        tmp25 = renderEmbedMedia(type.image);
                      }
                    }
                    if (MessageEmbedTypes) {
                      if (null != type.images) {
                        const images = type.images;
                        mapped = images.map(renderEmbedMedia);
                      }
                      let tmp31 = tmp9;
                      if (null != tmp9) {
                        tmp31 = tmp9;
                        if (null != type.video) {
                          let isWebviewVideoResult = type.type === tmp.VIDEO || type.type === tmp.RICH || type.type === tmp.ARTICLE;
                          if (type.type !== MessageEmbedTypes.GIFV) {
                            if (isWebviewVideoResult) {
                              let tmp43 = tmp34;
                              const tmp42 = type.type !== MessageEmbedTypes.GIFV || importDefault;
                              if (!tmp42) {
                                let obj3 = { gifvUrlForPortal: tmp47 };
                                const merged1 = Object.assign(tmp34);
                                ({ proxyURL: proxyURL3, url: url3 } = type.video);
                                tmp47 = url3;
                                if (null != proxyURL3) {
                                  tmp47 = url3;
                                  if ("" !== proxyURL3) {
                                    tmp47 = proxyURL3;
                                  }
                                }
                                tmp43 = obj3;
                              }
                              ({ proxyURL: proxyURL4, url: url4 } = type.video);
                              let tmp49 = url4;
                              const isWebPlayerVideoUrl = tmp3(6403).isWebPlayerVideoUrl;
                              MediaFormatTesters;
                              if (null != proxyURL4) {
                                tmp49 = url4;
                                if ("" !== proxyURL4) {
                                  tmp49 = proxyURL4;
                                }
                              }
                              tmp31 = tmp43;
                              if (isWebPlayerVideoUrl(tmp49)) {
                                let obj4 = { inlinePlaybackDisabled: true };
                                const merged2 = Object.assign(tmp43);
                                tmp31 = obj4;
                              }
                            }
                            if (isWebviewVideoResult) {
                              const tmp3Result20 = renderer_EmbedUtils;
                              isWebviewVideoResult = tmp3Result20.isWebviewVideo(type);
                            }
                            tmp34 = tmp9;
                            if (isWebviewVideoResult) {
                              const obj5 = { showPlayButton: true };
                              const merged3 = Object.assign(tmp9);
                              tmp34 = obj5;
                            }
                          }
                          const obj6 = { gifv: type.type === MessageEmbedTypes.GIFV, videoUrl: tmp41 };
                          const merged4 = Object.assign(tmp9);
                          ({ proxyURL: proxyURL2, url: url2 } = type.video);
                          tmp41 = url2;
                          if (null != proxyURL2) {
                            tmp41 = url2;
                            if ("" !== proxyURL2) {
                              tmp41 = proxyURL2;
                            }
                          }
                          tmp34 = obj6;
                        }
                      }
                      let tmp54 = tmp31;
                      const tmp53 = null != tmp31 && type.type === MessageEmbedTypes.GIFV;
                      if (tmp53) {
                        const obj7 = { role: intl.string(intl6.t.OBp3V3), hint: intl2.string(intl6.t.IPzNKE) };
                        const merged5 = Object.assign(tmp31);
                        intl = tmp3(1112).intl;
                        intl2 = tmp3(1112).intl;
                        tmp54 = obj7;
                      }
                      const tmp58 = borderLeftColor;
                      borderLeftColor = borderLeftColor.embedBorderLeftColor;
                      if (null != type.color) {
                        const tmp3Result21 = utils_ColorUtils;
                        borderLeftColor = processColor(tmp3Result21.int2hsl(type.color));
                      }
                      if (null != type.url) {
                        let parseEmbedTitleMarkup;
                        if ("" !== type.url) {
                          parseEmbedTitleMarkup = tmp3(14424).parseEmbedTitleMarkupWithoutLinks;
                        }
                        if (type.type === MessageEmbedTypes.RICH) {
                          let rawTitle;
                          let tmp68;
                          if (null != type.rawTitle) {
                            rawTitle = parseEmbedTitleMarkup(type.rawTitle, require);
                          }
                          type = type.type;
                          let result;
                          if (MessageEmbedTypes.IMAGE !== type) {
                            if (MessageEmbedTypes.VIDEO !== type) {
                              if (MessageEmbedTypes.GIFV !== type) {
                                if (MessageEmbedTypes.RICH === type) {
                                  if (null != type.rawDescription) {
                                    const obj8 = { description: type.rawDescription, channelId: require, isField: false, ignoreCache: processColor, showListsAndHeaders, showMaskedLinks };
                                    const tmp3Result22 = MarkupParsers;
                                    result = tmp3Result22.parseEmbedDescriptionMarkup(obj8);
                                  }
                                } else {
                                  result = type.rawDescription;
                                }
                              }
                            }
                          }
                          let fields = type.fields;
                          if (fields == null) {
                            fields = [];
                          }
                          const mapped1 = fields.map((rawName) => {
                            let result = null;
                            if (null != rawName.rawName) {
                              const obj = MarkupParsers;
                              result = obj.parseEmbedTitleMarkup(rawName.rawName, require);
                            }
                            let result1 = null;
                            if (null != rawName.rawValue) {
                              const obj3 = { description: rawName.rawValue, channelId: require, isField: true, ignoreCache, replaceMap: { "\t": "" }, showListsAndHeaders, showMaskedLinks };
                              const obj2 = MarkupParsers;
                              result1 = obj2.parseEmbedDescriptionMarkup(obj3);
                            }
                            const obj4 = { name: result, value: result1 };
                            const merged = Object.assign(rawName);
                            return obj4;
                          });
                          let calendarFormatResult = null;
                          if (null != type.timestamp) {
                            const tmp3Result23 = DateUtils;
                            calendarFormatResult = tmp3Result23.calendarFormat(type.timestamp);
                          }
                          if (null != type.footer) {
                            const text = type.footer.text;
                            let combined = text;
                            if (null != calendarFormatResult) {
                              const _HermesInternal = HermesInternal;
                              combined = "" + text + " | " + calendarFormatResult;
                            }
                            const obj9 = { content: combined };
                            const merged6 = Object.assign(type.footer);
                            if (null != type.footer.iconProxyURL) {
                              let iconURL;
                              if ("" !== type.footer.iconProxyURL) {
                                iconURL = type.footer.iconProxyURL;
                              }
                              tmp68 = obj9;
                              if (null != iconURL) {
                                const tmp6Result5 = RowGeneratorUtilsDefault;
                                obj9.iconURL = tmp6Result5.getImageSrc(iconURL, 16, 16, !importDefault);
                                tmp68 = obj9;
                              }
                            }
                            iconURL = type.footer.iconURL;
                          } else if (null != calendarFormatResult) {
                            tmp68 = { content: calendarFormatResult, text: "" };
                            const obj10 = { content: calendarFormatResult, text: "" };
                          }
                          let tmp76;
                          if (null != type.author) {
                            if (null != type.author.iconProxyURL) {
                              let iconURL2;
                              let author;
                              if ("" !== type.author.iconProxyURL) {
                                iconURL2 = type.author.iconProxyURL;
                              }
                              if (null != iconURL2) {
                                const obj11 = { iconURL: tmp6Result6.getImageSrc(iconURL2, 16, 16, !importDefault) };
                                const merged7 = Object.assign(type.author);
                                author = obj11;
                                tmp6Result6 = RowGeneratorUtilsDefault;
                              } else {
                                author = type.author;
                              }
                              tmp76 = author;
                            }
                            iconURL2 = type.author.iconURL;
                          }
                          let tmp82;
                          if (type.type === MessageEmbedTypes.COMPONENTS) {
                            let mapped2;
                            const components = type.components;
                            if (dependencyMap) {
                              mapped2 = components.map((item) => {
                                const obj = { spoiler: true };
                                const merged = Object.assign(item);
                                return obj;
                              });
                            } else {
                              mapped2 = components;
                            }
                            tmp82 = closure_13(mapped2);
                          }
                          const obj12 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                          const getMediaObscuredReasonFromBitmask = tmp3(8812).getMediaObscuredReasonFromBitmask;
                          ObscuredMediaUtils;
                          let isMediaScanPendingResult = !closure_10;
                          const mediaObscuredReasonFromBitmask = getMediaObscuredReasonFromBitmask(obj12, closure_9);
                          const tmp87 = closure_9;
                          if (!closure_10) {
                            const obj13 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                            const isMediaScanPending = tmp3(8812).isMediaScanPending;
                            ObscuredMediaUtils;
                            isMediaScanPendingResult = isMediaScanPending(obj13, tmp87);
                          }
                          let isVerifiedTeenResult = tmp91;
                          if (isVerifiedTeenResult) {
                            const tmp3Result26 = AgeVerificationUtils;
                            isVerifiedTeenResult = tmp3Result26.isVerifiedTeen();
                          }
                          let tmp93 = type.type === tmp.AUDIO;
                          if (tmp93) {
                            const tmp3Result27 = NativeChatCapabilities;
                            tmp93 = !tmp3Result27.nativeChatSupportsAudioEmbeds();
                          }
                          let str9 = type.id;
                          if (str9 == null) {
                            str9 = "";
                          }
                          const obj14 = { id: str9, type: RICH, spoiler: str11, obscure: stringResult, obscureAwaitingScan: str10, verifyAge: mediaObscuredReasonFromBitmask.length > 0 && closure_12, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: mediaObscuredReasonFromBitmask.length > 0, provider, author: tmp76, rawTitle: type.rawTitle, title: rawTitle, url: url5, rawDescription: type.rawDescription, description: result, thumbnail: tmp54, image: tmp25, images: mapped, fields: mapped1, components: tmp82, footer: tmp68, video, audio, borderLeftColor, providerColor: null, headerTextColor: null, bodyTextColor: null, referenceId, backgroundColor };
                          if (tmp93) {
                            RICH = tmp.RICH;
                          }
                          str10 = "";
                          str11 = "";
                          if (dependencyMap) {
                            const intl3 = tmp3(1112).intl;
                            const str12 = intl3.string(intl6.t["F+x38C"]);
                            str11 = str12.toUpperCase();
                          }
                          stringResult = str10;
                          if (mediaObscuredReasonFromBitmask.length > 0) {
                            const intl4 = tmp3(1112).intl;
                            stringResult = intl4.string(tmp3(1112).t.SpxcUR);
                          }
                          if (isMediaScanPendingResult) {
                            const intl5 = tmp3(1112).intl;
                            str10 = intl5.string(tmp3(1112).t.MRdR7z);
                          }
                          provider = type.provider;
                          url5 = type.url;
                          video = type.video;
                          audio = undefined;
                          if (!tmp93) {
                            audio = type.audio;
                          }
                          ({ embedProviderColor: obj28.providerColor, embedHeaderTextColor: obj28.headerTextColor, embedBodyTextColor: obj28.bodyTextColor } = tmp58);
                          referenceId = type.referenceId;
                          return obj14;
                        }
                        rawTitle = type.rawTitle;
                      }
                      parseEmbedTitleMarkup = tmp3(14424).parseEmbedTitleMarkup;
                    }
                    let tmp27 = null == tmp25;
                    if (!tmp27) {
                      const tmp3Result28 = PlatformUtils;
                      tmp27 = !tmp3Result28.isIOS();
                    }
                    mapped = null;
                    const tmp28 = !tmp27 && null == type.thumbnail;
                    if (tmp28) {
                      mapped = null;
                      if (null != tmp25) {
                        const items = [tmp25];
                        mapped = items;
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
  });
};
