// Module ID: 7780
// Function ID: 62088
// Name: getURL
// Dependencies: []
// Exports: default

// Module 7780 (getURL)
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
const processColor = require(dependencyMap[0]).processColor;
const MessageEmbedTypes = require(dependencyMap[1]).MessageEmbedTypes;
const _module = require(dependencyMap[16]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  let embeds;
  ({ embeds, channelId: closure_0, gifAutoPlay: closure_1, hasSpoilerEmbeds: closure_2, ignoreEmbedDescriptionCache: closure_3, shouldInlineEmbedMedia: closure_4, colors: closure_5, showListsAndHeaders: closure_6, showMaskedLinks: closure_7, themedBackgroundColor: closure_8, enabledContentHarmTypeFlags: closure_9, authorIsBot: closure_10, showContentInventoryEntryFallbackEmbed: closure_11, shouldAgeVerify: closure_12, transformComponents: closure_13 } = arg0);
  function renderEmbedMedia(image) {
    let height;
    let proxyURL;
    let url;
    let width;
    ({ url, proxyURL, width, height } = image);
    const obj = {};
    const merged = Object.assign(image);
    obj["width"] = callback(closure_2[2]).sanitizeMediaDimension(width);
    const obj2 = callback(closure_2[2]);
    obj["height"] = callback(closure_2[2]).sanitizeMediaDimension(height);
    let imageSrc = proxyURL;
    if (null != proxyURL) {
      const obj4 = callback2(closure_2[3]);
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !callback2);
    }
    obj["proxyURL"] = imageSrc;
    const obj3 = callback(closure_2[2]);
    if (null != proxyURL) {
      url = proxyURL;
    }
    obj["url"] = callback2(closure_2[3]).getImageSrc(url, width, height, !callback2);
    return obj;
  }
  return embeds.flatMap((type) => {
    let height;
    let proxyURL;
    let url;
    let width;
    if (type.type !== constants.POST_PREVIEW) {
      let isMediaScanPendingResult = constants;
      if (type.type !== constants.GIFT) {
        isMediaScanPendingResult = constants;
        if (type.type !== constants.SAFETY_POLICY_NOTICE) {
          isMediaScanPendingResult = constants;
          if (type.type !== constants.SAFETY_SYSTEM_NOTIFICATION) {
            isMediaScanPendingResult = constants;
            if (type.type !== constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              isMediaScanPendingResult = constants;
              if (type.type === constants.COMPONENTS) {
                isMediaScanPendingResult = null;
                return [];
              }
              let obj = callback(closure_2[4]);
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === constants.VOICE_CHANNEL) {
                return [];
              } else {
                isMediaScanPendingResult = callback;
                isMediaScanPendingResult = closure_2;
                if (obj31.isContentInventoryFallbackEmbed(type)) {
                  if (!closure_11) {
                    return [];
                  }
                }
                let obj1 = callback(closure_2[4]);
                if (obj1.isSocialLayerStorefrontArticleEmbed(type)) {
                  let obj2 = callback(closure_2[6]);
                  obj = { location: "transformEmbeds" };
                  if (obj2.getIsEligibleForSocialLayerStorefrontMobilePurchasing(obj)) {
                    return [];
                  }
                }
                let tmp12 = null;
                if (constants) {
                  tmp12 = null;
                  if (null != type.thumbnail) {
                    const thumbnail = type.thumbnail;
                    ({ url, proxyURL, width, height } = thumbnail);
                    obj = {};
                    const merged = Object.assign(thumbnail);
                    let obj5 = callback(closure_2[2]);
                    obj["width"] = obj5.sanitizeMediaDimension(width);
                    let obj6 = callback(closure_2[2]);
                    obj["height"] = obj6.sanitizeMediaDimension(height);
                    let imageSrc = proxyURL;
                    if (null != proxyURL) {
                      let obj7 = callback2(closure_2[3]);
                      imageSrc = obj7.getImageSrc(proxyURL, width, height, !callback2);
                    }
                    obj["proxyURL"] = imageSrc;
                    let obj8 = callback2(closure_2[3]);
                    if (null != proxyURL) {
                      url = proxyURL;
                    }
                    obj["url"] = obj8.getImageSrc(url, width, height, !callback2);
                    tmp12 = obj;
                  }
                }
                let tmp34 = null;
                if (constants) {
                  tmp34 = null;
                  if (null != type.image) {
                    tmp34 = renderEmbedMedia(type.image);
                  }
                }
                if (constants) {
                  if (null != type.images) {
                    const images = type.images;
                    let mapped = images.map(renderEmbedMedia);
                  }
                  let tmp43 = tmp12;
                  if (null != tmp12) {
                    tmp43 = tmp12;
                    if (null != type.video) {
                      isMediaScanPendingResult = constants;
                      let tmp45 = type.type === constants.VIDEO;
                      if (!tmp45) {
                        tmp45 = type.type === constants.RICH;
                      }
                      if (!tmp45) {
                        tmp45 = type.type === constants.ARTICLE;
                      }
                      if (type.type !== constants.GIFV) {
                        if (tmp45) {
                          let tmp64 = tmp49;
                          if (!tmp63) {
                            obj1 = {};
                            const merged1 = Object.assign(tmp49);
                            obj1["gifvUrlForPortal"] = lib(type.video);
                            tmp64 = obj1;
                          }
                          tmp43 = tmp64;
                          if (obj15.isWebPlayerVideoUrl(lib(type.video))) {
                            obj2 = {};
                            const merged2 = Object.assign(tmp64);
                            obj2["inlinePlaybackDisabled"] = true;
                            tmp43 = obj2;
                          }
                          const obj15 = callback(closure_2[9]);
                          const tmp63 = type.type !== constants.GIFV || callback2;
                        }
                        let tmp49 = tmp12;
                        if (tmp45) {
                          tmp49 = tmp12;
                          if (null == type.video.proxyURL) {
                            isMediaScanPendingResult = callback;
                            isMediaScanPendingResult = closure_2;
                            const provider2 = type.provider;
                            let name;
                            if (null != provider2) {
                              name = provider2.name;
                            }
                            const effectiveVideoProvider = callback(closure_2[4]).getEffectiveVideoProvider(name, type.video.url);
                            let obj10 = callback(closure_2[8]);
                            tmp49 = tmp12;
                            if (obj10.shouldPlayVideoInline(effectiveVideoProvider)) {
                              const obj3 = {};
                              const merged3 = Object.assign(tmp12);
                              obj3["showPlayButton"] = true;
                              tmp49 = obj3;
                            }
                            const obj32 = callback(closure_2[4]);
                          }
                        }
                      }
                      const obj4 = {};
                      const merged4 = Object.assign(tmp12);
                      obj4["gifv"] = type.type === constants.GIFV;
                      obj4["videoUrl"] = lib(type.video);
                      tmp49 = obj4;
                    }
                  }
                  let embedBorderLeftColor = lib.embedBorderLeftColor;
                  let tmp76 = null != type.color;
                  if (tmp76) {
                    tmp76 = "" !== type.color;
                  }
                  if (tmp76) {
                    embedBorderLeftColor = callback3(type.color);
                  }
                  if (null != type.url) {
                    if ("" !== type.url) {
                      let parseEmbedTitleMarkup = callback(closure_2[10]).parseEmbedTitleMarkupWithoutLinks;
                    }
                    if (type.type === constants.RICH) {
                      if (null != type.rawTitle) {
                        let rawTitle = parseEmbedTitleMarkup(type.rawTitle, callback);
                      }
                      type = type.type;
                      if (constants.IMAGE !== type) {
                        isMediaScanPendingResult = constants;
                        if (constants.VIDEO !== type) {
                          isMediaScanPendingResult = constants;
                          if (constants.GIFV !== type) {
                            isMediaScanPendingResult = constants;
                            if (constants.RICH === type) {
                              if (null != type.rawDescription) {
                                obj5 = { description: type.rawDescription, channelId: callback, isField: false, ignoreCache: callback3, showListsAndHeaders: closure_6, showMaskedLinks: closure_7 };
                                let rawDescription = callback(closure_2[10]).parseEmbedDescriptionMarkup(obj5);
                                const obj17 = callback(closure_2[10]);
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
                          let obj = callback(closure_2[10]);
                          result = obj.parseEmbedTitleMarkup(rawName.rawName, callback);
                        }
                        let result1 = null;
                        if (null != rawName.rawValue) {
                          let obj1 = callback(closure_2[10]);
                          obj = { description: rawName.rawValue, channelId: callback, isField: true, ignoreCache: closure_3 };
                          obj = { 	: "" };
                          obj.replaceMap = obj;
                          obj.showListsAndHeaders = closure_6;
                          obj.showMaskedLinks = closure_7;
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
                        calendarFormatResult = callback(closure_2[11]).calendarFormat(type.timestamp);
                        const obj19 = callback(closure_2[11]);
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
                            isMediaScanPendingResult = callback2;
                            isMediaScanPendingResult = closure_2;
                            const obj22 = callback2(closure_2[3]);
                            isMediaScanPendingResult = callback2;
                            isMediaScanPendingResult = obj22;
                            isMediaScanPendingResult = iconURL;
                            obj6.iconURL = obj22.getImageSrc(iconURL, 16, 16, !callback2);
                            tmp95 = obj6;
                          }
                        }
                        iconURL = type.footer.iconURL;
                      } else if (null != calendarFormatResult) {
                        obj7 = { content: calendarFormatResult, text: "" };
                        tmp95 = obj7;
                      }
                      if (null == type.author) {
                        isMediaScanPendingResult = constants;
                        if (type.type !== constants.COMPONENTS) {
                          isMediaScanPendingResult = callback;
                          isMediaScanPendingResult = closure_2;
                          obj8 = { type: callback(closure_2[13]).ObscuredMediaTypes.Embed, media: type };
                          isMediaScanPendingResult = closure_9;
                          isMediaScanPendingResult = closure_10;
                          isMediaScanPendingResult = !closure_10;
                          const mediaObscuredReasonFromBitmask = callback(closure_2[12]).getMediaObscuredReasonFromBitmask(obj8, closure_9);
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = callback;
                            isMediaScanPendingResult = closure_2;
                            let obj9 = { type: callback(closure_2[13]).ObscuredMediaTypes.Embed, media: type };
                            isMediaScanPendingResult = closure_9;
                            isMediaScanPendingResult = callback(closure_2[12]).isMediaScanPending(obj9, closure_9);
                            const obj27 = callback(closure_2[12]);
                          }
                          isMediaScanPendingResult = mediaObscuredReasonFromBitmask.length > 0;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = callback;
                            isMediaScanPendingResult = closure_2;
                            isMediaScanPendingResult = callback(closure_2[14]).isVerifiedTeen();
                            const obj29 = callback(closure_2[14]);
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
                            isMediaScanPendingResult = callback;
                            isMediaScanPendingResult = closure_2;
                            const intl = callback(closure_2[15]).intl;
                            isMediaScanPendingResult = intl.string(callback(closure_2[15]).t.F+x38C).toUpperCase();
                            const str22 = intl.string(callback(closure_2[15]).t.F+x38C);
                          }
                          obj10.spoiler = isMediaScanPendingResult;
                          isMediaScanPendingResult = str20;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = callback;
                            isMediaScanPendingResult = closure_2;
                            const intl2 = callback(closure_2[15]).intl;
                            isMediaScanPendingResult = intl2.string(callback(closure_2[15]).t.SpxcUR);
                          }
                          obj10.obscure = isMediaScanPendingResult;
                          if (isMediaScanPendingResult) {
                            isMediaScanPendingResult = callback;
                            isMediaScanPendingResult = closure_2;
                            const intl3 = callback(closure_2[15]).intl;
                            str20 = intl3.string(callback(closure_2[15]).t.MRdR7z);
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
                          isMediaScanPendingResult = lib;
                          ({ embedProviderColor: obj30.providerColor, embedHeaderTextColor: obj30.headerTextColor, embedBodyTextColor: obj30.bodyTextColor } = lib);
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
                          isMediaScanPendingResult = callback4;
                          isMediaScanPendingResult = callback4(isMediaScanPendingResult);
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
                            isMediaScanPendingResult = callback2;
                            isMediaScanPendingResult = closure_2;
                            const obj24 = callback2(closure_2[3]);
                            isMediaScanPendingResult = callback2;
                            isMediaScanPendingResult = obj24;
                            isMediaScanPendingResult = iconURL2;
                            obj11["iconURL"] = obj24.getImageSrc(iconURL2, 16, 16, !callback2);
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
                  parseEmbedTitleMarkup = callback(closure_2[10]).parseEmbedTitleMarkup;
                }
                let tmp37 = null == tmp34;
                if (!tmp37) {
                  obj9 = callback(closure_2[7]);
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
                const obj31 = callback(closure_2[5]);
              }
            }
          }
        }
      }
    }
    return [];
  });
};
