// Module ID: 7878
// Function ID: 62469
// Name: getURL
// Dependencies: [27, 653, 7879, 7880, 4464, 7881, 7882, 477, 7724, 4317, 7858, 3800, 5670, 5675, 4347, 1212, 2]
// Exports: default

// Module 7878 (getURL)
import { processColor } from "get ActivityIndicator";
import { MessageEmbedTypes } from "ME";

function getURL(arg0) {
  let proxyURL;
  let url;
  ({ proxyURL, url } = arg0);
  let tmp = url;
  if (null != proxyURL) {
    tmp = url;
    if ("" !== proxyURL) {
      tmp = proxyURL;
    }
  }
  return tmp;
}
let result = require("sanitizeMediaDimension").fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  let MessageEmbedTypes;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let embeds;
  let getURL;
  let importDefault;
  let processColor;
  let require;
  ({ embeds, channelId: require, gifAutoPlay: importDefault, hasSpoilerEmbeds: dependencyMap, ignoreEmbedDescriptionCache: processColor, shouldInlineEmbedMedia: MessageEmbedTypes, colors: getURL, showListsAndHeaders: closure_6, showMaskedLinks: closure_7, themedBackgroundColor: closure_8, enabledContentHarmTypeFlags: closure_9, authorIsBot: closure_10, showContentInventoryEntryFallbackEmbed: closure_11, shouldAgeVerify: closure_12, transformComponents: closure_13 } = arg0);
  function renderEmbedMedia(image) {
    let height;
    let proxyURL;
    let url;
    let width;
    ({ url, proxyURL, width, height } = image);
    const obj = {};
    const merged = Object.assign(image);
    obj["width"] = outer1_0(outer1_2[2]).sanitizeMediaDimension(width);
    const obj2 = outer1_0(outer1_2[2]);
    obj["height"] = outer1_0(outer1_2[2]).sanitizeMediaDimension(height);
    let imageSrc = proxyURL;
    if (null != proxyURL) {
      const obj4 = outer1_1(outer1_2[3]);
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !closure_1);
    }
    obj["proxyURL"] = imageSrc;
    const obj3 = outer1_0(outer1_2[2]);
    if (null != proxyURL) {
      url = proxyURL;
    }
    obj["url"] = outer1_1(outer1_2[3]).getImageSrc(url, width, height, !closure_1);
    return obj;
  }
  return embeds.flatMap((type) => {
    let height;
    let proxyURL;
    let url;
    let width;
    if (type.type !== outer1_4.POST_PREVIEW) {
      let isMediaScanPendingResult = outer1_4;
      if (type.type !== outer1_4.GIFT) {
        isMediaScanPendingResult = outer1_4;
        if (type.type !== outer1_4.SAFETY_POLICY_NOTICE) {
          isMediaScanPendingResult = outer1_4;
          if (type.type !== outer1_4.SAFETY_SYSTEM_NOTIFICATION) {
            isMediaScanPendingResult = outer1_4;
            if (type.type !== outer1_4.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              isMediaScanPendingResult = outer1_4;
              if (type.type === outer1_4.COMPONENTS) {
                isMediaScanPendingResult = null;
                return [];
              }
              let obj = outer1_0(outer1_2[4]);
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === outer1_4.VOICE_CHANNEL) {
                return [];
              } else {
                isMediaScanPendingResult = outer1_0;
                isMediaScanPendingResult = outer1_2;
                if (obj31.isContentInventoryFallbackEmbed(type)) {
                  if (!closure_11) {
                    return [];
                  }
                }
                let obj1 = outer1_0(outer1_2[4]);
                if (obj1.isSocialLayerStorefrontArticleEmbed(type)) {
                  let obj2 = outer1_0(outer1_2[6]);
                  obj = { location: "transformEmbeds" };
                  if (obj2.getIsEligibleForSocialLayerStorefrontMobilePurchasing(obj)) {
                    return [];
                  }
                }
                let tmp12 = null;
                if (closure_4) {
                  tmp12 = null;
                  if (null != type.thumbnail) {
                    const thumbnail = type.thumbnail;
                    ({ url, proxyURL, width, height } = thumbnail);
                    obj = {};
                    let merged = Object.assign(thumbnail);
                    let obj5 = outer1_0(outer1_2[2]);
                    obj["width"] = obj5.sanitizeMediaDimension(width);
                    let obj6 = outer1_0(outer1_2[2]);
                    obj["height"] = obj6.sanitizeMediaDimension(height);
                    let imageSrc = proxyURL;
                    if (null != proxyURL) {
                      let obj7 = outer1_1(outer1_2[3]);
                      imageSrc = obj7.getImageSrc(proxyURL, width, height, !closure_1);
                    }
                    obj["proxyURL"] = imageSrc;
                    let obj8 = outer1_1(outer1_2[3]);
                    if (null != proxyURL) {
                      url = proxyURL;
                    }
                    obj["url"] = obj8.getImageSrc(url, width, height, !closure_1);
                    tmp12 = obj;
                  }
                }
                let tmp34 = null;
                if (closure_4) {
                  tmp34 = null;
                  if (null != type.image) {
                    tmp34 = renderEmbedMedia(type.image);
                  }
                }
                if (closure_4) {
                  if (null != type.images) {
                    const images = type.images;
                    let mapped = images.map(renderEmbedMedia);
                  }
                  let tmp43 = tmp12;
                  if (null != tmp12) {
                    tmp43 = tmp12;
                    if (null != type.video) {
                      isMediaScanPendingResult = outer1_4;
                      let tmp45 = type.type === outer1_4.VIDEO;
                      if (!tmp45) {
                        tmp45 = type.type === outer1_4.RICH;
                      }
                      if (!tmp45) {
                        tmp45 = type.type === outer1_4.ARTICLE;
                      }
                      if (type.type !== outer1_4.GIFV) {
                        if (tmp45) {
                          let tmp64 = tmp49;
                          if (!tmp63) {
                            obj1 = {};
                            const merged1 = Object.assign(tmp49);
                            obj1["gifvUrlForPortal"] = outer1_5(type.video);
                            tmp64 = obj1;
                          }
                          tmp43 = tmp64;
                          if (obj15.isWebPlayerVideoUrl(outer1_5(type.video))) {
                            obj2 = {};
                            const merged2 = Object.assign(tmp64);
                            obj2["inlinePlaybackDisabled"] = true;
                            tmp43 = obj2;
                          }
                          obj15 = outer1_0(outer1_2[9]);
                          tmp63 = type.type !== outer1_4.GIFV || closure_1;
                        }
                        tmp49 = tmp12;
                        if (tmp45) {
                          tmp49 = tmp12;
                          if (null == type.video.proxyURL) {
                            isMediaScanPendingResult = outer1_0;
                            isMediaScanPendingResult = outer1_2;
                            const provider2 = type.provider;
                            let name;
                            if (null != provider2) {
                              name = provider2.name;
                            }
                            const effectiveVideoProvider = outer1_0(outer1_2[4]).getEffectiveVideoProvider(name, type.video.url);
                            let obj10 = outer1_0(outer1_2[8]);
                            tmp49 = tmp12;
                            if (obj10.shouldPlayVideoInline(effectiveVideoProvider)) {
                              const obj3 = {};
                              const merged3 = Object.assign(tmp12);
                              obj3["showPlayButton"] = true;
                              tmp49 = obj3;
                            }
                            const obj32 = outer1_0(outer1_2[4]);
                          }
                        }
                      }
                      const obj4 = {};
                      const merged4 = Object.assign(tmp12);
                      obj4["gifv"] = type.type === outer1_4.GIFV;
                      obj4["videoUrl"] = outer1_5(type.video);
                      tmp49 = obj4;
                    }
                  }
                  embedBorderLeftColor = embedBorderLeftColor.embedBorderLeftColor;
                  let tmp76 = null != type.color;
                  if (tmp76) {
                    tmp76 = "" !== type.color;
                  }
                  if (tmp76) {
                    embedBorderLeftColor = outer1_3(type.color);
                  }
                  if (null != type.url) {
                    if ("" !== type.url) {
                      let parseEmbedTitleMarkup = outer1_0(outer1_2[10]).parseEmbedTitleMarkupWithoutLinks;
                    }
                    if (type.type === outer1_4.RICH) {
                      if (null != type.rawTitle) {
                        let rawTitle = parseEmbedTitleMarkup(type.rawTitle, closure_0);
                      }
                      type = type.type;
                      if (outer1_4.IMAGE !== type) {
                        isMediaScanPendingResult = outer1_4;
                        if (outer1_4.VIDEO !== type) {
                          isMediaScanPendingResult = outer1_4;
                          if (outer1_4.GIFV !== type) {
                            isMediaScanPendingResult = outer1_4;
                            if (outer1_4.RICH === type) {
                              if (null != type.rawDescription) {
                                obj5 = { description: type.rawDescription, channelId: closure_0, isField: false, ignoreCache: closure_3, showListsAndHeaders: closure_6, showMaskedLinks: closure_7 };
                                let rawDescription = outer1_0(outer1_2[10]).parseEmbedDescriptionMarkup(obj5);
                                const obj17 = outer1_0(outer1_2[10]);
                              }
                            } else {
                              rawDescription = type.rawDescription;
                            }
                          }
                        }
                      }
                      let fields = type.fields;
                      if (null == fields) {
                        fields = [];
                      }
                      const mapped1 = fields.map((rawName) => {
                        let result = null;
                        if (null != rawName.rawName) {
                          let obj = outer2_0(outer2_2[10]);
                          result = obj.parseEmbedTitleMarkup(rawName.rawName, outer1_0);
                        }
                        let result1 = null;
                        if (null != rawName.rawValue) {
                          let obj1 = outer2_0(outer2_2[10]);
                          obj = { description: rawName.rawValue, channelId: outer1_0, isField: true, ignoreCache: outer1_3 };
                          obj = { "\t": "" };
                          obj.replaceMap = obj;
                          obj.showListsAndHeaders = outer1_6;
                          obj.showMaskedLinks = outer1_7;
                          result1 = obj1.parseEmbedDescriptionMarkup(obj);
                        }
                        obj1 = {};
                        const merged = Object.assign(rawName);
                        obj1["name"] = result;
                        obj1["value"] = result1;
                        return obj1;
                      });
                      let calendarFormatResult = null;
                      if (null != type.timestamp) {
                        calendarFormatResult = outer1_0(outer1_2[11]).calendarFormat(type.timestamp);
                        const obj19 = outer1_0(outer1_2[11]);
                      }
                      if (null != type.footer) {
                        const text = type.footer.text;
                        let combined = text;
                        if (null != calendarFormatResult) {
                          const _HermesInternal = HermesInternal;
                          combined = "" + text + " | " + calendarFormatResult;
                        }
                        obj6 = {};
                        const merged5 = Object.assign(type.footer);
                        obj6["content"] = combined;
                        if (null != type.footer.iconProxyURL) {
                          if ("" !== type.footer.iconProxyURL) {
                            let iconURL = type.footer.iconProxyURL;
                          }
                          let tmp95 = obj6;
                          if (null != iconURL) {
                            isMediaScanPendingResult = outer1_1;
                            isMediaScanPendingResult = outer1_2;
                            const obj22 = outer1_1(outer1_2[3]);
                            isMediaScanPendingResult = closure_1;
                            isMediaScanPendingResult = obj22;
                            isMediaScanPendingResult = iconURL;
                            obj6.iconURL = obj22.getImageSrc(iconURL, 16, 16, !closure_1);
                            tmp95 = obj6;
                          }
                        }
                        iconURL = type.footer.iconURL;
                      } else if (null != calendarFormatResult) {
                        obj7 = { content: calendarFormatResult, text: "" };
                        tmp95 = obj7;
                      }
                      if (null == type.author) {
                        isMediaScanPendingResult = outer1_4;
                        if (type.type !== outer1_4.COMPONENTS) {
                          isMediaScanPendingResult = outer1_0;
                          isMediaScanPendingResult = outer1_2;
                          obj8 = { type: outer1_0(outer1_2[13]).ObscuredMediaTypes.Embed, media: type };
                          isMediaScanPendingResult = closure_9;
                          isMediaScanPendingResult = closure_10;
                          isMediaScanPendingResult = !closure_10;
                          const mediaObscuredReasonFromBitmask = outer1_0(outer1_2[12]).getMediaObscuredReasonFromBitmask(obj8, closure_9);
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = outer1_0;
                            isMediaScanPendingResult = outer1_2;
                            let obj9 = { type: outer1_0(outer1_2[13]).ObscuredMediaTypes.Embed, media: type };
                            isMediaScanPendingResult = closure_9;
                            isMediaScanPendingResult = outer1_0(outer1_2[12]).isMediaScanPending(obj9, closure_9);
                            const obj27 = outer1_0(outer1_2[12]);
                          }
                          isMediaScanPendingResult = mediaObscuredReasonFromBitmask.length > 0;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = outer1_0;
                            isMediaScanPendingResult = outer1_2;
                            isMediaScanPendingResult = outer1_0(outer1_2[14]).isVerifiedTeen();
                            const obj29 = outer1_0(outer1_2[14]);
                          }
                          obj10 = {};
                          const id = type.id;
                          let str20 = "";
                          let str21 = "";
                          if (null != id) {
                            str21 = id;
                          }
                          obj10.id = str21;
                          const type2 = type.type;
                          isMediaScanPendingResult = undefined;
                          if (null != type2) {
                            isMediaScanPendingResult = type2;
                          }
                          obj10.type = isMediaScanPendingResult;
                          isMediaScanPendingResult = closure_2;
                          isMediaScanPendingResult = str20;
                          if (closure_2) {
                            isMediaScanPendingResult = outer1_0;
                            isMediaScanPendingResult = outer1_2;
                            const intl = outer1_0(outer1_2[15]).intl;
                            isMediaScanPendingResult = intl.string(outer1_0(outer1_2[15]).t["F+x38C"]).toUpperCase();
                            const str22 = intl.string(outer1_0(outer1_2[15]).t["F+x38C"]);
                          }
                          obj10.spoiler = isMediaScanPendingResult;
                          isMediaScanPendingResult = str20;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = outer1_0;
                            isMediaScanPendingResult = outer1_2;
                            const intl2 = outer1_0(outer1_2[15]).intl;
                            isMediaScanPendingResult = intl2.string(outer1_0(outer1_2[15]).t.SpxcUR);
                          }
                          obj10.obscure = isMediaScanPendingResult;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = outer1_0;
                            isMediaScanPendingResult = outer1_2;
                            const intl3 = outer1_0(outer1_2[15]).intl;
                            str20 = intl3.string(outer1_0(outer1_2[15]).t.MRdR7z);
                          }
                          obj10.obscureAwaitingScan = str20;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = closure_12;
                          }
                          obj10.verifyAge = isMediaScanPendingResult;
                          obj10.obscureHideControls = isMediaScanPendingResult;
                          obj10.obscureIsOpaque = isMediaScanPendingResult;
                          const provider = type.provider;
                          isMediaScanPendingResult = undefined;
                          if (null != provider) {
                            isMediaScanPendingResult = provider;
                          }
                          obj10.provider = isMediaScanPendingResult;
                          obj10.author = undefined;
                          obj10.rawTitle = type.rawTitle;
                          isMediaScanPendingResult = undefined;
                          if (null != rawTitle) {
                            isMediaScanPendingResult = rawTitle;
                          }
                          obj10.title = isMediaScanPendingResult;
                          const url2 = type.url;
                          isMediaScanPendingResult = undefined;
                          if (null != url2) {
                            isMediaScanPendingResult = url2;
                          }
                          obj10.url = isMediaScanPendingResult;
                          obj10.rawDescription = type.rawDescription;
                          isMediaScanPendingResult = undefined;
                          if (null != rawDescription) {
                            isMediaScanPendingResult = rawDescription;
                          }
                          obj10.description = isMediaScanPendingResult;
                          isMediaScanPendingResult = undefined;
                          if (null != tmp43) {
                            isMediaScanPendingResult = tmp43;
                          }
                          obj10.thumbnail = isMediaScanPendingResult;
                          isMediaScanPendingResult = undefined;
                          if (null != tmp34) {
                            isMediaScanPendingResult = tmp34;
                          }
                          obj10.image = isMediaScanPendingResult;
                          isMediaScanPendingResult = undefined;
                          if (null != mapped) {
                            isMediaScanPendingResult = mapped;
                          }
                          obj10.images = isMediaScanPendingResult;
                          isMediaScanPendingResult = undefined;
                          if (null != mapped1) {
                            isMediaScanPendingResult = mapped1;
                          }
                          obj10.fields = isMediaScanPendingResult;
                          isMediaScanPendingResult = undefined;
                          obj10.components = isMediaScanPendingResult;
                          obj10.footer = tmp95;
                          const video = type.video;
                          isMediaScanPendingResult = undefined;
                          if (null != video) {
                            isMediaScanPendingResult = video;
                          }
                          obj10.video = isMediaScanPendingResult;
                          obj10.borderLeftColor = embedBorderLeftColor;
                          isMediaScanPendingResult = embedBorderLeftColor;
                          ({ embedProviderColor: obj30.providerColor, embedHeaderTextColor: obj30.headerTextColor, embedBodyTextColor: obj30.bodyTextColor } = embedBorderLeftColor);
                          const referenceId = type.referenceId;
                          isMediaScanPendingResult = undefined;
                          if (null != referenceId) {
                            isMediaScanPendingResult = referenceId;
                          }
                          obj10.referenceId = isMediaScanPendingResult;
                          isMediaScanPendingResult = closure_8;
                          isMediaScanPendingResult = undefined;
                          if (null != closure_8) {
                            isMediaScanPendingResult = closure_8;
                          }
                          obj10.backgroundColor = isMediaScanPendingResult;
                          return obj10;
                        } else {
                          isMediaScanPendingResult = closure_2;
                          const components = type.components;
                          if (closure_2) {
                            isMediaScanPendingResult = components.map((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj["spoiler"] = true;
                              return obj;
                            });
                          } else {
                            isMediaScanPendingResult = components;
                          }
                          isMediaScanPendingResult = callback;
                          isMediaScanPendingResult = callback(isMediaScanPendingResult);
                        }
                      } else {
                        if (null != type.author.iconProxyURL) {
                          if ("" !== type.author.iconProxyURL) {
                            let iconURL2 = type.author.iconProxyURL;
                          }
                          if (null != iconURL2) {
                            const obj11 = {};
                            isMediaScanPendingResult = obj11;
                            isMediaScanPendingResult = Object.assign(type.author);
                            isMediaScanPendingResult = outer1_1;
                            isMediaScanPendingResult = outer1_2;
                            const obj24 = outer1_1(outer1_2[3]);
                            isMediaScanPendingResult = closure_1;
                            isMediaScanPendingResult = obj24;
                            isMediaScanPendingResult = iconURL2;
                            obj11["iconURL"] = obj24.getImageSrc(iconURL2, 16, 16, !closure_1);
                            let author = obj11;
                          } else {
                            author = type.author;
                          }
                          isMediaScanPendingResult = author;
                        }
                        iconURL2 = type.author.iconURL;
                      }
                    }
                    rawTitle = type.rawTitle;
                  }
                  parseEmbedTitleMarkup = outer1_0(outer1_2[10]).parseEmbedTitleMarkup;
                }
                let tmp37 = null == tmp34;
                if (!tmp37) {
                  obj9 = outer1_0(outer1_2[7]);
                  tmp37 = !obj9.isIOS();
                }
                let tmp40 = !tmp37;
                if (!tmp37) {
                  tmp40 = null == type.thumbnail;
                }
                mapped = null;
                if (tmp40) {
                  mapped = null;
                  if (null != tmp34) {
                    const items = [tmp34];
                    mapped = items;
                  }
                }
                obj31 = outer1_0(outer1_2[5]);
              }
            }
          }
        }
      }
    }
    return [];
  });
};
