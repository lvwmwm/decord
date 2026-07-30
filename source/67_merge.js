// Module ID: 67
// Function ID: 68
// Name: merge
// Dependencies: [68, 26, 70, 77, 78, 64, 79, 50, 80, 81, 55, 54, 56, 58, 59, 57]

// Module 67 (merge)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function merge(arg0, obj) {
  if (obj) {
    if (arg0) {
      for (const key10005 in arg1) {
        let tmp7 = key10005;
        if (!arg1.hasOwnProperty(key10005)) {
          continue;
        } else {
          let tmp2 = arg1[key10005];
          let tmp3 = tmp2;
          if (arg0.hasOwnProperty(key10005)) {
            let tmp4 = arg0[key10005];
            let tmp5 = typeof tmp2 === "ay";
            if (typeof tmp2 !== "window") {
              tmp5 = typeof tmp4 === "ay";
            }
            tmp3 = tmp2;
            if (tmp5) {
              let tmp6 = merge;
              tmp3 = merge(tmp4, tmp2);
            }
          }
          arg0[key10005] = tmp3;
          continue;
        }
        continue;
      }
      return arg0;
    } else {
      return obj;
    }
  } else {
    return arg0;
  }
}
arg5.default = function getNativeComponentAttributes(arg0) {
  let NativeProps;
  let baseModuleName;
  let bubblingEventTypes2;
  let directEventTypes;
  let bubblingEventTypes = arg0;
  let _default = require(68) /* measure */.default;
  const viewManagerConfig = _default.getViewManagerConfig(arg0);
  if (null == viewManagerConfig) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes: bubblingEventTypes2, directEventTypes, NativeProps } = viewManagerConfig);
    if (bubblingEventTypes2 == null) {
      bubblingEventTypes2 = {};
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    let str = directEventTypes;
    let str2 = NativeProps;
    let str3 = bubblingEventTypes2;
    let tmp3 = NativeProps;
    let tmp4 = directEventTypes;
    let keys3 = bubblingEventTypes2;
    if (!baseModuleName) {
      let prop = {};
      let str4 = "EdgeInsets";
      baseModuleName = "UIEdgeInsets";
      str2 = "Point";
      str = "CGPoint";
      str3 = "CATransform3D";
      for (const key10058 in tmp3) {
        let obj10 = key10058;
        let tmp99 = tmp3[key10058];
        if (`CATransform3D` === tmp99) {
          let tmp37 = require;
          let tmp38 = dependencyMap;
          let obj2 = require(77) /* matricesDiffer */;
          _default = obj2.default;
        } else {
          if (`CGPoint` !== tmp99) {
            if (`Point` !== tmp99) {
              if ("CGSize" === tmp99) {
                let tmp33 = require;
                let tmp34 = dependencyMap;
                obj2 = require(64) /* sizesDiffer */;
                _default = obj2.default;
              } else if (`UIEdgeInsets` === tmp99) {
                let tmp31 = require;
                let tmp32 = dependencyMap;
                obj2 = require(79) /* insetsDiffer */;
                _default = obj2.default;
              } else {
                _default = null;
              }
            }
          }
          let tmp35 = require;
          let tmp36 = dependencyMap;
          obj2 = require(78) /* pointsDiffer */;
          _default = obj2.default;
        }
        let _default1 = null;
        switch (tmp99) {
          case "Icon":
          break;
          case "IconComponent":
          break;
          case "c":
          break;
          case "p":
          break;
          case "LIGHT":
          break;
          case "LengthDelimited":
          break;
          case "limit":
          break;
          case "i":
          break;
          case "it":
          break;
          case "d":
          break;
          case "Map":
          break;
          case "Math":
          break;
          case "h":
          break;
          case "Number":
          break;
          case "Object":
          break;
          case "ct":
          break;
          case "PX_16":
          break;
          case "flex":
          break;
          case "flexDirection":
          break;
          case "PX_8":
          break;
          case "Path":
          break;
          case "Promise":
          break;
          case "s":
          break;
          case "Reflect":
          break;
          case "Set":
          break;
          case "format":
          break;
          case "formatToPlainString":
          break;
          case "String":
          break;
          case "Symbol":
          break;
          case "Text":
          break;
          case "x":
          break;
          case "View":
          break;
          case "w":
          break;
          case "WireType":
          break;
          case "__closure":
          break;
          case "__d":
          break;
          case "__esModule":
          break;
          case "__initData":
          break;
          case "filter":
          break;
          case "__packager_asset":
          break;
          case "k":
          break;
          case "set":
          break;
          case "__workletHash":
          break;
          case "_desired":
          break;
          case "_distance":
          break;
          case "st":
          break;
          case "accessibilityLabel":
          break;
          case "accessibilityRole":
          break;
          case "accessible":
          break;
          case "padding":
          break;
          case "paddingHorizontal":
          break;
          case "add":
          break;
          case "alignItems":
          break;
          case "ao":
          break;
          case "applicationId":
          break;
          case "ti":
          break;
          case "apply":
          break;
          case "backgroundColor":
          break;
          case "round":
          break;
          case "bm":
          break;
          case "body":
          break;
          case "borderRadius":
          break;
          case "bottom":
          break;
          case "call":
          break;
          case "channel":
          break;
          case "channelId":
          break;
          case "channel_id":
          break;
          case "id":
          break;
          case "children":
          break;
          case "cix":
          break;
          case "ix":
          break;
          case "unicodeVersion":
          break;
          case "code":
            obj2 = require;
            let tmp40 = dependencyMap;
            let tmp41 = require(57) /* getValidLengthPercentageSizeOrNull */;
            _default1 = tmp41.default;
            if (null == _default) {
              obj2 = null == _default1;
              if (!obj2) {
                let obj = { process: null };
                obj[0] = _default1;
                obj2 = obj;
              }
              let obj1 = obj2;
              prop[obj10] = obj1;
              continue;
            } else {
              obj1 = { diff: null, process: null };
              obj1[0] = _default;
              obj1[1] = _default1;
            }
            obj2 = { diff: null };
            obj2[0] = _default;
            obj1 = obj2;
          break;
          case "color":
          break;
          case "colors":
          break;
          case "concat":
          break;
          case "constructor":
          break;
          case "container":
          break;
          case "content":
          break;
          case "context":
          break;
          case "text":
          break;
          case "count":
          break;
          case "create":
          break;
          case "createStyles":
          break;
          case "ty":
          break;
          case "current":
          break;
          case "cursor":
          break;
          case "data":
          break;
          case "ddd":
          break;
          case "default":
          break;
          case "defineProperty":
          break;
          case "op":
          break;
          case "delete":
          break;
          case "description":
          break;
          case "ip":
          break;
          case "disabled":
          break;
          case "sa":
          break;
          case "dispatch":
          break;
          case "displayName":
          break;
          case "diversity":
          break;
          case "v":
          break;
          case "done":
          break;
          case "duration":
          break;
          case "enabled":
          break;
          case "end":
          break;
          case "enumerable":
            if (tmp61) {
              let tmp62 = obj10;
              if (obj2) {
                tmp62 = obj2;
                if (obj10) {
                  let tmp63 = obj2;
                  tmp62 = obj10;
                  let keys = Object.keys();
                  if (keys !== undefined) {
                    tmp62 = obj10;
                    let tmp65 = keys[tmp];
                    while (tmp65 !== undefined) {
                      let tmp = tmp65;
                      if (!obj2.hasOwnProperty(tmp65)) {
                        continue;
                      } else {
                        let tmp66 = obj2[tmp65];
                        let tmp67 = tmp66;
                        if (obj10.hasOwnProperty(tmp65)) {
                          let tmp68 = obj10[tmp65];
                          let tmp69 = typeof tmp66 === "ay";
                          if (typeof tmp66 !== "window") {
                            tmp69 = typeof tmp68 === "ay";
                          }
                          tmp67 = tmp66;
                          if (tmp69) {
                            let tmp70 = merge;
                            tmp67 = merge(tmp68, tmp66);
                          }
                        }
                        obj10[tmp65] = tmp67;
                        continue;
                      }
                      continue;
                    }
                  }
                }
              }
              str4 = tmp62;
            }
            bubblingEventTypes[key10058] = str4;
            let tmp58 = bubblingEventTypes;
            let tmp60 = keys3[tmp2];
            while (tmp60 !== undefined) {
              let key10058 = tmp60;
              if (!prop.hasOwnProperty(tmp60)) {
                continue;
              } else {
                obj2 = prop[key10058];
                str4 = obj2;
                if (bubblingEventTypes.hasOwnProperty(key10058)) {
                  let tmp61 = typeof obj2 === "ay";
                  if (typeof obj2 !== "window") {
                    tmp61 = typeof bubblingEventTypes[key10058] === "ay";
                  }
                  str4 = obj2;
                }
              }
              continue;
            }
            viewManagerConfig.bubblingEventTypes = tmp58;
            let directEventTypes2 = viewManagerConfig.directEventTypes;
            let genericDirectEventTypes = str.genericDirectEventTypes;
            let tmp71 = directEventTypes2;
            if (genericDirectEventTypes) {
              tmp71 = genericDirectEventTypes;
              if (directEventTypes2) {
                let tmp72 = genericDirectEventTypes;
                let num2 = 0;
                tmp71 = directEventTypes2;
                let keys1 = Object.keys();
                if (keys1 !== undefined) {
                  tmp71 = directEventTypes2;
                  let tmp74 = keys1[tmp2];
                  while (tmp74 !== undefined) {
                    tmp = tmp74;
                    if (!genericDirectEventTypes.hasOwnProperty(tmp74)) {
                      continue;
                    } else {
                      let obj11 = genericDirectEventTypes[tmp74];
                      let tmp75 = obj11;
                      if (directEventTypes2.hasOwnProperty(tmp74)) {
                        let obj12 = directEventTypes2[tmp74];
                        let tmp76 = typeof obj11 === "ay";
                        if (typeof obj11 !== "window") {
                          tmp76 = typeof obj12 === "ay";
                        }
                        tmp75 = obj11;
                        if (tmp76) {
                          let tmp77 = obj12;
                          if (obj11) {
                            tmp77 = obj11;
                            if (obj12) {
                              let tmp78 = obj11;
                              tmp77 = obj12;
                              let keys2 = Object.keys();
                              if (keys2 !== undefined) {
                                tmp77 = obj12;
                                let tmp80 = keys2[tmp];
                                while (tmp80 !== undefined) {
                                  tmp = tmp80;
                                  if (!obj11.hasOwnProperty(tmp80)) {
                                    continue;
                                  } else {
                                    let tmp81 = obj11[tmp80];
                                    let tmp82 = tmp81;
                                    if (obj12.hasOwnProperty(tmp80)) {
                                      let tmp83 = obj12[tmp80];
                                      let tmp84 = typeof tmp81 === "ay";
                                      if (typeof tmp81 !== "window") {
                                        tmp84 = typeof tmp83 === "ay";
                                      }
                                      tmp82 = tmp81;
                                      if (tmp84) {
                                        let tmp85 = merge;
                                        tmp82 = merge(tmp83, tmp81);
                                      }
                                    }
                                    obj12[tmp80] = tmp82;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                            }
                          }
                          tmp75 = tmp77;
                        }
                      }
                      directEventTypes2[tmp74] = tmp75;
                      continue;
                    }
                    continue;
                  }
                }
              }
            }
            viewManagerConfig.directEventTypes = tmp71;
            return viewManagerConfig;
          case "error":
          break;
          case "exports":
          break;
          case "fileFinishedImporting":
          break;
          case "fill":
          break;
          case "find":
          break;
          case "ind":
          break;
          case "flags":
          break;
          case "forEach":
          break;
          case "gap":
          break;
          case "get":
          break;
          case "getChannel":
          break;
          case "getCurrentUser":
          break;
          case "getGuild":
          break;
          case "guild":
          break;
          case "guildId":
          break;
          case "guild_id":
          break;
          case "has":
          break;
          case "hasDiversityParent":
          break;
          case "hash":
          break;
          case "hd":
          break;
          case "header":
          break;
          case "height":
          break;
          case "httpServerLocation":
          break;
          case "icon":
          break;
          case "includes":
          break;
          case "index":
          break;
          case "indexOf":
          break;
          case "intl":
          break;
          case "items":
          break;
          case "join":
          break;
          case "jsx":
          break;
          case "jsxs":
          break;
          case "justifyContent":
          break;
          case "key":
          break;
          case "keys":
          break;
          case "kind":
          break;
          case "ks":
          break;
          case "space":
          break;
          case "label":
          break;
          case "lc":
          break;
          case "left":
          break;
          case "length":
          break;
          case "lj":
          break;
          case "loadJsonAsset":
          break;
          case "location":
          break;
          case "map":
          break;
          case "marginTop":
          break;
          case "marginBottom":
          break;
          case "max":
          break;
          case "memo":
          break;
          case "message":
          break;
          case "messageId":
          break;
          case "method":
          break;
          case "methodobject":
          break;
          case "withTiming":
          break;
          case "min":
          break;
          case "ml":
          break;
          case "mn":
          break;
          case "mode":
          break;
          case "name":
          break;
          case "names":
          break;
          case "next":
          break;
          case "nm":
          break;
          case "no":
          break;
          case "now":
          break;
          case "np":
          break;
          case "onPress":
          break;
          case "opacity":
          break;
          case "options":
          break;
          case "parent":
          break;
          case "paths":
          break;
          case "pos":
          break;
          case "position":
          break;
          case "props":
          break;
          case "prototype":
          break;
          case "type":
          break;
          case "push":
          break;
          case "radii":
          break;
          case "raw":
          break;
          case "ref":
          break;
          case "registerAsset":
          break;
          case "rejectWithError":
          break;
          case "replace":
          break;
          case "resizeMode":
          break;
          case "size":
          break;
          case "resolve":
          break;
          case "result":
          break;
          case "right":
          break;
          case "runOnJS":
          break;
          case "scales":
          break;
          case "shapes":
          break;
          case "sk":
          break;
          case "skuId":
          break;
          case "slice":
          break;
          case "source":
          break;
          case "split":
          break;
          case "spriteIndex":
          break;
          case "sr":
          break;
          case "start":
          break;
          case "state":
          break;
          case "status":
          break;
          case "substring_i":
          break;
          case "string":
          break;
          case "style":
          break;
          case "surrogates":
          break;
          case "tag":
          break;
          case "test":
          break;
          case "then":
          break;
          case "title":
          break;
          case "toCharArray$esjava$1":
          break;
          case "toString":
          break;
          case "top":
          break;
          case "track":
          break;
          case "transform":
          break;
          case "uri":
          break;
          case "url":
          break;
          case "useCallback":
          break;
          case "useEffect":
          break;
          case "useMemo":
          break;
          case "useRef":
          break;
          case "useState":
          break;
          case "useStateFromStores":
          break;
          case "user":
          break;
          case "userId":
          break;
          case "value":
          break;
          case "values":
          break;
          case "variant":
          break;
          case "warn":
          break;
          case "width":
          break;
          case "window":
          break;
          case "withSpring":
          break;
          case "":
          break;
          case "isArrayBuffer":
          break;
          case "A":
          break;
          case "ay":
          break;
          case "getVoiceSettings":
          break;
          case "getVoiceSettingsWithShortcut":
          break;
          case "cutout":
          break;
          case "cutoutBottomRightInsetX":
          break;
          case "emojiLineHeight":
          break;
          case "$ZodBoolean":
          break;
          case "ZodBoolean":
          break;
          case "B":
          break;
          case "le":
          break;
          case "an":
          break;
          case "n":
          break;
          case "useActionBarPrimaryButton":
          break;
          case "ActionBarPrimaryButton":
          break;
          case "ary":
          break;
          case "u":
          break;
          case "tt":
          break;
          case "on":
          break;
          case "$ZodDate":
          break;
          case "ZodDate":
          break;
          case "D":
          break;
          case "DateParser":
          break;
          case "at":
          break;
          case "te":
          break;
          case "serializeDate":
          break;
          case "MarkupParserNodeTypeError":
          break;
          case "E":
          break;
          case "Err":
          break;
          case "ro":
          break;
          case "or":
          break;
          case "_createRenderMask":
          break;
          case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
          break;
          case "BOT_HTTP_INTERACTIONS":
          break;
          case "H":
          break;
          case "HT":
          break;
          case "TP":
          break;
          case "P":
          break;
          case "INTERACTIONS":
          break;
          case "NSFW_SPACE_WARNING_MODAL_CLICKED":
          break;
          case "RoleRow":
          break;
          case "rm":
          break;
          case "m":
          break;
          case "me":
          break;
          case "mes":
          break;
          case "I":
          break;
          case "InternalCard":
          break;
          case "ter":
          break;
          case "na":
          break;
          case "al":
          break;
          case "CardVerticalSeparator":
          break;
          case "SeparatorAction":
          break;
          case "onBeforeGoBack":
          break;
          case "getChannelIcon":
          break;
          case "getChannelIconComponent":
          break;
          case "getChannelIconComponentWithGuild":
          break;
          case "co":
          break;
          case "C":
          break;
          case "Component":
          break;
          case "om":
          break;
          case "mp":
          break;
          case "po":
          break;
          case "pon":
          break;
          case "one":
          break;
          case "ne":
          break;
          case "en":
          break;
          case "componentName":
          break;
          case "[[style]]":
          break;
          case "PasswordResetMethods":
          break;
          case "sw":
          break;
          case "resolved":
          break;
          case "resolvedGiftCodes":
          break;
          case "total_sound_slots":
          break;
          case "makeIAPRequest":
          break;
          case "questHomeBounties":
          break;
          case "BountiesShopCarouselExperimentVariation":
          break;
          case "hop":
          break;
          case "aro":
          break;
          case "Variation_Type":
            tmp3 = str2;
            tmp4 = str;
            keys3 = str3;
          break;
          case "USE_APP_COMMAND":
          break;
          case "ANDROID_NOTIFICATION_LIGHTS":
          break;
          case "L":
            obj2 = require;
            let tmp52 = dependencyMap;
            let tmp53 = require(50) /* processColor */;
            _default1 = tmp53.default;
          break;
          case "LI":
          break;
          case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            obj2 = require;
            tmp52 = dependencyMap;
            tmp53 = require(50) /* processColor */;
            _default1 = tmp53.default;
          break;
          case "REQUIRE_REVERIFIED_EMAIL":
          break;
          case "REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE":
            obj2 = require;
            tmp52 = dependencyMap;
            tmp53 = require(50) /* processColor */;
            _default1 = tmp53.default;
          break;
          case "PHONE_VERIFY_NO_PASSWORD":
          break;
          case "NEUTRAL":
            obj2 = require;
            let tmp50 = dependencyMap;
            let tmp51 = require(80) /* processColorElement */;
            _default1 = tmp51.default;
          break;
          case "NEUTRAL_1":
          break;
          case "NEUTRAL_10":
            obj2 = require;
            tmp50 = dependencyMap;
            tmp51 = require(80) /* processColorElement */;
            _default1 = tmp51.default;
          break;
          case "NEUTRAL_100":
          break;
          case "qZ+7BA":
            obj2 = require;
            tmp50 = dependencyMap;
            tmp51 = require(80) /* processColorElement */;
            _default1 = tmp51.default;
          break;
          case "BATTLENET_MIGRATION":
          break;
          case "MIGRATION_DESTINATION_ORIGIN":
            obj2 = require;
            let tmp48 = dependencyMap;
            let tmp49 = require(81) /* resolveAssetSource */;
            _default1 = tmp49.default;
          break;
          case "INVALID_BILLING_ADDRESS":
          break;
          case "ADDRESS_CITY":
            obj2 = require;
            tmp48 = dependencyMap;
            tmp49 = require(81) /* resolveAssetSource */;
            _default1 = tmp49.default;
          break;
          case "TYPOGRAPHY_EXPERIMENT_REMAPS":
          break;
          case "$ZodCheckMaxLength":
            obj2 = require;
            tmp48 = dependencyMap;
            tmp49 = require(81) /* resolveAssetSource */;
            _default1 = tmp49.default;
          break;
          case "kMaxLength":
          break;
          case "eng":
            obj2 = require;
            tmp48 = dependencyMap;
            tmp49 = require(81) /* resolveAssetSource */;
            _default1 = tmp49.default;
          break;
          case "ng":
          break;
          case "el":
            obj2 = module;
            let tmp47 = dependencyMap;
            _default1 = module(55);
          break;
          case "li":
          break;
          case "lim":
            obj2 = module;
            tmp47 = dependencyMap;
            _default1 = module(55);
          break;
          case "limited":
          break;
          case "limitedTimeBadge":
            obj2 = require;
            let tmp45 = dependencyMap;
            let tmp46 = require(54) /* _getFilterAmount */;
            _default1 = tmp46.default;
          break;
          case "mi":
          break;
          case "mit":
            obj2 = require;
            tmp45 = dependencyMap;
            tmp46 = require(54) /* _getFilterAmount */;
            _default1 = tmp46.default;
          break;
          case "getAppVersion":
          break;
          case "onTapPollAnswer":
            obj2 = require;
            let tmp44 = dependencyMap;
            _default1 = require(56) /* processColorStops */.default;
          break;
          case "$ZodMap":
          break;
          case "ZodMap":
            obj2 = require;
            let tmp43 = dependencyMap;
            _default1 = require(58) /* getPositionFromCSSValue */.default;
          break;
          case "M":
          break;
          case "ap":
            obj2 = require;
            let tmp42 = dependencyMap;
            _default1 = require(59) /* isBackgroundRepeatKeyword */.default;
          break;
          case "$ZodCheckGreaterThan":
          break;
          case "ToIntlMathematicalValue":
            obj2 = require;
            tmp40 = dependencyMap;
            tmp41 = require(57) /* getValidLengthPercentageSizeOrNull */;
            _default1 = tmp41.default;
            if (null == _default) {
              obj2 = null == _default1;
              if (!obj2) {
                obj = { process: null };
                obj[0] = _default1;
                obj2 = obj;
              }
              obj1 = obj2;
              prop[obj10] = obj1;
              continue;
            } else {
              obj1 = { diff: null, process: null };
              obj1[0] = _default;
              obj1[1] = _default1;
            }
            obj2 = { diff: null };
            obj2[0] = _default;
            obj1 = obj2;
          break;
          case "th":
          break;
          case "ValueSetter":
          break;
          case "$ZodCheckNumberFormat":
          break;
          case "N":
          break;
          case "NumberFormat":
          break;
          case "um":
          break;
          case "b":
          break;
          case "be":
          break;
          case "$ZodObject":
          break;
          case "$ZodObjectJIT":
          break;
          case "ZodObject":
          break;
          case "O":
          break;
          case "j":
          break;
          case "je":
          break;
          case "IT":
          break;
          case "MEDIA_PICKER_SEND_BUTTON_SPRING":
          break;
          case "marginHorizontal":
          break;
          case "Direction":
          break;
          case "rect":
          break;
          case "frr":
          break;
          case "PX_80":
          break;
          case "_":
          break;
          case "useMaxAgeOptions":
          break;
          case "setVideosMuted":
          break;
          case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
          break;
          case "RNSVGClipPath":
          break;
          case "ClipPath":
          break;
          case "$ZodPromise":
          break;
          case "ZodPromise":
          break;
          case "PromiseDeduper":
          break;
          case "is":
          break;
          case "se":
          break;
          case "dup":
          break;
          case "perGuildMaxCount":
          break;
          case "woman_kneeling_medium_dark_skin_tone":
          break;
          case "man_kneeling_medium_dark_skin_tone":
          break;
          case "flag_gn":
          break;
          case "PREMIUM_PLANS":
          break;
          case "ANSWER_HAS":
          break;
          case "HAS_APPLICATION":
          break;
          case "APPLICATION_COMMAND_INDEX_CHANNEL":
          break;
          case "CHANNEL_ACTION_BANNER_HEIGHT":
          break;
          case "BANNER_HEIGHT":
          break;
          case "fgClip":
          break;
          case "ClipViewAnimated":
          break;
          case "AnimatedFlashList":
          break;
          case "FlashList":
          break;
          case "FlashListRef":
          break;
          case "las":
          break;
          case "R":
          break;
          case "ReflectionBinaryReader":
          break;
          case "ef":
          break;
          case "f":
          break;
          case "BinaryReader":
          break;
          case "verification_request_id":
          break;
          case "$ZodSet":
          break;
          case "ZodSet":
          break;
          case "S":
          break;
          case "et":
          break;
          case "fallen_leaf":
          break;
          case "leafless_tree":
          break;
          case "postformat":
          break;
          case "form":
          break;
          case "orm":
          break;
          case "ma":
          break;
          case "mat":
          break;
          case "lai":
          break;
          case "StringBuilder":
          break;
          case "tr":
          break;
          case "tri":
          break;
          case "ring":
          break;
          case "in":
          break;
          case "ing":
          break;
          case "g":
          break;
          case "langtag":
          break;
          case "tagIcon":
          break;
          case "tagIconUrl":
          break;
          case "violin":
          break;
          case "noStyleAndInteraction":
          break;
          case "actionSheetBackground":
          break;
          case "BackgroundBlurFillWithPress":
          break;
          case "conversationMetadataById":
          break;
          case "displayNameAccessibilityRole":
          break;
          case "playWhenInactive":
          break;
          case "activeDiscountInfo":
          break;
          case "focusTimeout":
          break;
          case "_maxSize":
          break;
          case "maxSize":
          break;
          case "maxSizeCallback":
          break;
          case "$ZodSymbol":
          break;
          case "ZodSymbol":
          break;
          case "SymbolLock":
          break;
          case "bo":
          break;
          case "bol":
          break;
          case "QUEST_BAR_V2":
          break;
          case "fromStorefrontCollectionRecord":
          break;
          case "ActionSheetHeaderPressableText":
          break;
          case "Pressable":
          break;
          case "ex":
          break;
          case "ext":
          break;
          case "isIarUserReportingEnabled":
          break;
          case "AccessibilityFocusView":
          break;
          case "V":
          break;
          case "W":
          break;
          case "ir":
          break;
          case "re":
          break;
          case "reType":
          break;
          case "pe":
          break;
          case "sob":
          break;
          case "maxDynamicContentSize":
          break;
          case "ACTION_SHEET_START_HEIGHT_RATIO":
          break;
          case "STAR":
          break;
          case "START":
          break;
          case "IO":
          break;
          case "__":
          break;
          case "__c":
          break;
          case "cl":
          break;
          case "clo":
          break;
          case "lo":
          break;
          case "los":
          break;
          case "os":
          break;
          case "su":
          break;
          case "sur":
          break;
          case "ur":
          break;
          case "isExpanded":
          break;
          case "__data__":
          break;
          case "_d":
          break;
          case "_data":
          break;
          case "__REMOTEDEV__":
          break;
          case "__DISCORD_WINDOW_ID":
          break;
          case "__iteratees__":
          break;
          case "_iter":
          break;
          case "_iterate":
          break;
          case "iteratee":
          break;
          case "tee":
          break;
          case "__SENTRY_RELEASE__":
          break;
          case "SENTRY_RELEASE":
          break;
          case "__INTERNAL_SLOT_MAP__":
          break;
          case "__BUNDLE_START_TIME__":
          break;
          case "__e":
          break;
          case "Mo":
          break;
          case "ModuleNotFoundError":
          break;
          case "du":
          break;
          case "MissionScrollSpotIllustration":
          break;
          case "onScroll":
          break;
          case "woman_judge_tone3":
          break;
          case "man_judge_tone3":
          break;
          case "judge_tone3":
          break;
          case "__i":
          break;
          case "__init":
          break;
          case "_i":
          break;
          case "_init":
          break;
          case "init":
          break;
          case "ni":
          break;
          case "nit":
          break;
          case "ta":
          break;
          case "__filtered__":
          break;
          case "lte":
          break;
          case "__SENTRY_DEBUG__":
          break;
          case "__FORMATJS_LISTFORMAT_DATA__":
          break;
          case "TJS":
          break;
          case "pa":
          break;
          case "pack":
          break;
          case "package":
          break;
          case "ack":
          break;
          case "ka":
          break;
          case "age":
          break;
          case "ge":
          break;
          case "ger":
          break;
          case "_a":
          break;
          case "as":
          break;
          case "ass":
          break;
          case "asset":
          break;
          case "assetContainer":
          break;
          case "ss":
          break;
          case "partner_application_timestamp":
          break;
          case "timestampLabel":
          break;
          case "lastTakenICYMISurvey":
          break;
          case "_w":
          break;
          case "wo":
          break;
          case "work":
          break;
          case "worklet":
          break;
          case "kl":
          break;
          case "let":
          break;
          case "Hash":
          break;
          case "sh":
          break;
          case "flag_de":
          break;
          case "de":
          break;
          case "desired":
          break;
          case "es":
          break;
          case "si":
          break;
          case "sir":
          break;
          case "red":
          break;
          case "redBoxV2Android":
          break;
          case "dist":
          break;
          case "distance":
          break;
          case "distanceFromEnd":
          break;
          case "sta":
          break;
          case "tan":
          break;
          case "nc":
          break;
          case "ce":
          break;
          case "access":
          break;
          case "accessibilityLabelCalendarFormat":
          break;
          case "cc":
          break;
          case "bi":
          break;
          case "bil":
          break;
          case "lit":
          break;
          case "Label":
          break;
          case "ab":
          break;
          case "abe":
          break;
          case "bel":
          break;
          case "VIDEO_SPINNER_SHOWN_V2":
          break;
          case "Role":
          break;
          case "RoleFlags":
          break;
          case "scrollToLocation":
          break;
          case "accessibleDismiss":
          break;
          case "accessibleDismissStyle":
          break;
          case "ble":
          break;
          case "leg_tone1":
          break;
          case "captureReplay":
          break;
          case "FAB_BUTTON_SIZE":
          break;
          case "minWidth":
          break;
          case "pad":
          break;
          case "ad":
          break;
          case "adding":
          break;
          case "dd":
          break;
          case "din":
          break;
          case "z":
          break;
          case "tal":
          break;
          case "collapseText":
          break;
          case "paddingVertical":
          break;
          case "carouselPosition":
          break;
          case "onLongPressItem":
          break;
          case "embedURI":
          break;
          case "RIOT_MIGRATION":
          break;
          case "MIGRATION_SOURCE_ORIGIN":
          break;
          case "INVALID_CANNOT_FRIEND_SELF":
          break;
          case "SELF_APPLICATION_IDENTITY_CONFIG":
          break;
          case "GUILD_EVENT_EXCEPTION":
          break;
          case "GUILD_EVENT_EXCEPTIONS":
          break;
          case "SvgUri":
          break;
          case "MANAGE_NICKNAMES":
          break;
          case "YCrcPL":
          break;
          case "PLATFORM_REDDIT":
          break;
          case "REDDIT":
          break;
          case "REDDIT_GOLD":
          break;
          case "GOLDFISH_PINK":
          break;
          case "PINK_34":
          break;
          case "ali":
          break;
          case "align":
          break;
          case "alignItemsAtEnd":
          break;
          case "alignItemsAtEndPaddingEnabled":
          break;
          case "ig":
          break;
          case "em":
          break;
          case "ms":
          break;
          case "cY+Oob":
          break;
          case "objCreate":
          break;
          case "listView":
          break;
          case "listViewportHeight":
          break;
          case "GuildEntityDao":
          break;
          case "EntityDao":
          break;
          case "Dao":
          break;
          case "couple_with_heart_man_man_tone3_tone2":
          break;
          case "merged":
          break;
          case "merged_members":
          break;
          case "_members":
          break;
          case "_membersMap":
          break;
          case "members":
          break;
          case "app":
          break;
          case "application":
          break;
          case "applicationIdToGuildIds":
          break;
          case "pp":
          break;
          case "pl":
          break;
          case "ca":
          break;
          case "cat":
          break;
          case "tio":
          break;
          case "io":
          break;
          case "showGuildOfficialMessageGradient":
          break;
          case "setZoomFactor":
          break;
          case "_applyCombination":
          break;
          case "ly":
          break;
          case "foi":
          break;
          case "ios_backgroundColor":
          break;
          case "ba":
          break;
          case "back":
          break;
          case "background":
          break;
          case "backgroundColorGradient":
          break;
          case "kg":
          break;
          case "gr":
          break;
          case "und":
          break;
          case "Color":
          break;
          case "ACTIVITY_LAYOUT_MODE_UPDATE":
          break;
          case "LAYOUT":
          break;
          case "YOU":
          break;
          case "UPDATE_CONFIG":
          break;
          case "DATE_CONFIG":
          break;
          case "GUILD_GAME_SHOP":
          break;
          case "GAME_SHOP_NEW_BADGE":
          break;
          case "FormSubmitErrorType":
          break;
          case "person_walking_facing_right_tone2":
          break;
          case "shadowColorIos":
          break;
          case "os.version":
          break;
          case "notifyStoreCreated":
          break;
          case "_bodyArrayBuffer":
          break;
          case "dy":
          break;
          case "safeAreaRight":
          break;
          case "bor":
          break;
          case "border":
          break;
          case "order":
          break;
          case "der":
          break;
          case "Radius":
          break;
          case "iu":
          break;
          case "overflow_bottom":
          break;
          case "_bottom":
          break;
          case "bot":
          break;
          case "bottom-right":
          break;
          case "ott":
          break;
          case "tom":
          break;
          case "right shift":
          break;
          case "shiftLeft":
          break;
          case "joinedEmojiSourceGuildRecord":
          break;
          case "mainSubview":
          break;
          case "viewPadding":
          break;
          case "getLurkingPreviewExpiry":
          break;
          case "componentWidth":
          break;
          case "thumbnailPreviewSrc":
          break;
          case "classificationDetailContainer":
          break;
          case "DynamicallyInjectedByGestureHandler":
          break;
          case "cal":
          break;
          case "all":
          break;
          case "ll":
          break;
          case "_channelId":
          break;
          case "ch":
          break;
          case "cha":
          break;
          case "ha":
          break;
          case "ann":
          break;
          case "nn":
          break;
          case "isSelf":
          break;
          case "isSelfDeaf":
          break;
          case "afk_channel_id":
          break;
          case "_id":
          break;
          case "inlineImages":
          break;
          case "voiceStateChannelIdSummaryForGuild":
          break;
          case "family_adult_adult_child":
          break;
          case "family_adult_adult_child_child":
          break;
          case "_children":
          break;
          case "_childrenToCellKey":
          break;
          case "child":
          break;
          case "hi":
          break;
          case "dr":
          break;
          case "ren":
          break;
          case "woman_in_motorized_wheelchair_facing_right_tone2":
          break;
          case "man_in_motorized_wheelchair_facing_right_tone2":
          break;
          case "accessibilityIsModalView":
          break;
          case "wMWyci":
          break;
          case "ix8XIj":
          break;
          case "uni":
          break;
          case "Version":
          break;
          case "burst_colors":
          break;
          case "col":
          break;
          case "ors":
          break;
          case "rs":
          break;
          case "renderNavigationView":
          break;
          case "onViewAll":
          break;
          case "onViewAllPerks":
          break;
          case "activityParticipantIdToApplicationId":
          break;
          case "disableGuildSelect":
          break;
          case "GuildSelectDefaultIcon":
          break;
          case "concatSettings":
          break;
          case "subscription_listings":
          break;
          case "subscription_listings_ids":
          break;
          case "$constructor":
          break;
          case "const":
          break;
          case "constr":
          break;
          case "construct":
          break;
          case "ons":
          break;
          case "str":
          break;
          case "ru":
          break;
          case "tor":
          break;
          case "windowLength":
          break;
          case "_container":
          break;
          case "contain":
          break;
          case "containerBorderColor":
          break;
          case "ai":
          break;
          case "ner":
          break;
          case "creative_content":
          break;
          case "_contentAvailable":
          break;
          case "ten":
          break;
          case "tent":
          break;
          case "__wrapped__":
          break;
          case "__context":
          break;
          case "_context":
          break;
          case "contextBarRow":
          break;
          case "tex":
          break;
          case "withBounce":
          break;
          case "BounceInDown":
          break;
          case "ownerDocument":
          break;
          case "AccountAgeTier10LargeBadge":
          break;
          case "cou":
          break;
          case "Badge":
          break;
          case "CustomLinkType":
          break;
          case "people_holding_hands_tone5_tone2":
          break;
          case "generateSessionId":
          break;
          case "cr":
          break;
          case "les":
          break;
          case "useScreenRecordingStore":
          break;
          case "recordSuccess":
          break;
          case "_$esjava$current":
          break;
          case "cu":
          break;
          case "currentApp":
          break;
          case "currentAppIcon":
          break;
          case "connectionsPromptContainer":
          break;
          case "message_type":
          break;
          case "_$esjava$cursor":
          break;
          case "cursorColor":
          break;
          case "so":
          break;
          case "_clientSdkMetadata":
          break;
          case "MetadataFields":
          break;
          case "tada":
          break;
          case "da":
          break;
          case "dddd":
          break;
          case "FORUM_CHANNEL_NEW_POST_DRAFT_CREATED":
          break;
          case "__defaultLocale":
          break;
          case "def":
          break;
          case "defaultLocale":
          break;
          case "fa":
          break;
          case "au":
          break;
          case "lt":
          break;
          case "propertyKeyTypes":
          break;
          case "define":
          break;
          case "efi":
          break;
          case "fi":
          break;
          case "fin":
          break;
          case "_isDSTShifted":
          break;
          case "information_desk_person":
          break;
          case "information_desk_person_tone1":
          break;
          case "person_tone1_white_hair":
          break;
          case "undelete":
          break;
          case "del":
          break;
          case "deleteAllExcept":
          break;
          case "ele":
          break;
          case "ptt_start":
          break;
          case "_startMs":
          break;
          case "startMs":
          break;
          case "shouldUseAnimatedObjectForTransform":
          break;
          case "formTintColor":
          break;
          case "eligibleToReceivePremiumRewards":
          break;
          case "avatar_description":
          break;
          case "_description":
          break;
          case "desc":
          break;
          case "descriptionContainer":
          break;
          case "descriptionContainerStyle":
          break;
          case "esc":
          break;
          case "sc":
          break;
          case "scr":
          break;
          case "script":
          break;
          case "cri":
          break;
          case "pt":
          break;
          case "isForGroupSetupModal":
          break;
          case "aria-disabled":
          break;
          case "disable":
          break;
          case "disabledContainer":
          break;
          case "disabledContainerStyle":
          break;
          case "isa":
          break;
          case "sab":
          break;
          case "led":
          break;
          case "getCurrentReactNativeTracingIntegration":
          break;
          case "onTapThreadEmbed":
          break;
          case "_dispatch":
          break;
          case "_dispatchFrame":
          break;
          case "dispatchFrameUrl":
          break;
          case "spa":
          break;
          case "pat":
          break;
          case "patch":
          break;
          case "tc":
          break;
          case "removeSavedMessage":
          break;
          case "getChannelThreadsVersion":
          break;
          case "onTapSafetyPolicyNoticeEmbed":
          break;
          case "time_to_full_display":
          break;
          case "_displayName":
          break;
          case "display":
          break;
          case "displayNameAccessibilityHint":
          break;
          case "spl":
          break;
          case "play":
          break;
          case "la":
          break;
          case "am":
          break;
          case "internalBinaryRead":
          break;
          case "flag_es":
          break;
          case "userCode":
          break;
          case "userCodeData":
          break;
          case "div":
          break;
          case "diversityChildren":
          break;
          case "ve":
          break;
          case "ver":
          break;
          case "renderCommonSettingsSection":
          break;
          case "LhlgY9":
          break;
          case "toExpPos":
          break;
          case "do":
          break;
          case "don":
          break;
          case "doneButton":
          break;
          case "doneButtonContainer":
          break;
          case "currencySymbol":
          break;
          case "dispose":
          break;
          case "models":
          break;
          case "applications":
          break;
          case "canSeeExperimentEmbeds":
          break;
          case "__duration":
          break;
          case "_duration":
          break;
          case "dur":
          break;
          case "durationContainer":
          break;
          case "ura":
          break;
          case "rat":
          break;
          case "ratio":
          break;
          case "PUSH_NOTIFICATION_REACTIVATION_PROMPT":
          break;
          case "app_hardware_acceleration_enabled":
          break;
          case "_enabled":
          break;
          case "_enabledPaymentMethods":
          break;
          case "enable":
          break;
          case "shouldShowAddMediaToOriginalPostModal":
          break;
          case "@braintree/extended-promise":
          break;
          case "extend":
          break;
          case "extended":
          break;
          case "ended":
          break;
          case "nd":
          break;
          case "promise":
          break;
          case "promiseProcessor":
          break;
          case "_songbirdInitFailed":
          break;
          case "enum":
          break;
          case "nu":
          break;
          case "num":
          break;
          case "mer":
          break;
          case "era":
          break;
          case "cancelAnimation":
          break;
          case "cancelAnimationFrame":
          break;
          case "beforeAddRecordingEvent":
          break;
          case "../../../lib/braintree-error":
          break;
          case "../../lib/braintree-error":
          break;
          case "../lib/braintree-error":
          break;
          case "brain":
          break;
          case "braintree":
          break;
          case "tre":
          break;
          case "tree":
          break;
          case "ee":
          break;
          case "err":
          break;
          case "errorApplyingMediaFilterSettings":
          break;
          case "FilterSettingsGraph":
          break;
          case "phoenix":
          break;
          case "nix":
          break;
          case "googleAuthorizationFingerprint":
          break;
          case "printer":
          break;
          case "exp":
          break;
          case "expo":
          break;
          case "port":
          break;
          case "rtsState":
          break;
          case "ts":
          break;
          case "fil":
          break;
          case "file":
          break;
          case "F":
          break;
          case "Finish":
          break;
          case "he":
          break;
          case "StreamingTier10SmallBadge":
          break;
          case "EntitlementTenantFulfillmentStatus":
          break;
          case "ill":
          break;
          case "__findAnimatedPropsNodes":
          break;
          case "accountNotificationSettings":
          break;
          case "NotificationSettingsChannelPresets":
          break;
          case "GAME_SERVERS_ME":
          break;
          case "MEDIA_SINK_WANTS":
          break;
          case "MEDIA_SINK_WANTS_PROPERTIES":
          break;
          case "system_channel_flags":
          break;
          case "channel_flags":
          break;
          case "_flags":
          break;
          case "flag":
          break;
          case "flags_":
          break;
          case "lag":
          break;
          case "gs":
          break;
          case "_oldestUnreadMessageId":
          break;
          case "oldestUnreadMessageId":
          break;
          case "oldestUnreadMessageIdStale":
          break;
          case "setOnNativeMuteChangedCallback":
          break;
          case "NativeMuteChanged":
          break;
          case "backgroundHeroAsset":
          break;
          case "setVideoDevice":
          break;
          case "fo":
          break;
          case "for":
          break;
          case "forEachChannel":
          break;
          case "isBrowser":
          break;
          case "isBrowserBundle":
          break;
          case "ga":
          break;
          case "gaps":
          break;
          case "BadgePacksAbstractUI":
          break;
          case "woman_judge_medium_skin_tone":
          break;
          case "man_judge_medium_skin_tone":
          break;
          case "judge_medium_skin_tone":
          break;
          case "getChannelA11yHint":
          break;
          case "Channel":
          break;
          case "interpolationIndex":
          break;
          case "exposureType":
          break;
          case "getCurrentUserActiveStream":
          break;
          case "U":
          break;
          case "Use":
          break;
          case "User":
          break;
          case "ser":
          break;
          case "StreamQualities":
          break;
          case "StreamQualitiesToPremiumType":
          break;
          case "PremiumTypeToActivePremiumSubscriptionSKU":
          break;
          case "PremiumSubscriptionSKUToPremiumType":
          break;
          case "PremiumTypeOrder":
          break;
          case "constraints":
          break;
          case "DetectableAppNames":
          break;
          case "cta":
          break;
          case "carefullyOpenDatabase":
          break;
          case "HeadphonesAndControllerSpotIllustration":
          break;
          case "adp":
          break;
          case "dp":
          break;
          case "ControllerSpotIllustration":
          break;
          case "_getGuildState":
          break;
          case "getGuildState":
          break;
          case "G":
          break;
          case "Guild":
          break;
          case "_guildId":
          break;
          case "gu":
          break;
          case "current_guild_id":
          break;
          case "getComponentViewTag":
          break;
          case "GUILD_ONBOARDING_QUESTION":
          break;
          case "NO_CONNECTION":
          break;
          case "NO_CONNECTION_FOUND":
          break;
          case "hasDiversity":
          break;
          case "Parent":
          break;
          case "ParentalControlledDefaultGuildsRestrictedV2":
          break;
          case "ar":
          break;
          case "DefaultGuildsRestricted":
          break;
          case "DefaultGuildsRestrictedV2":
          break;
          case "pool":
          break;
          case "poolSize":
          break;
          case "avatar_hash":
          break;
          case "_hash":
          break;
          case "hashKey":
          break;
          case "wrapMcpServerWithSentry":
          break;
          case "[[initializedNumberFormat]]":
          break;
          case "NotifTypes":
          break;
          case "bhd":
          break;
          case "IN_APP_MESSAGE_SOUNDS":
          break;
          case "SOUNDS_PER_ROW":
          break;
          case "CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON":
          break;
          case "BUTTON_PRIMARY_DISABLED_BACKGROUND":
          break;
          case "BACKGROUND_CODE":
          break;
          case "CODE_BOLD":
          break;
          case "BOL":
          break;
          case "TEXT_VOICE_CONNECTED":
          break;
          case "VOICE_CONNECTED_LAST_SESSION":
          break;
          case "UNSTABLE_headerInsets":
          break;
          case "STABLE":
          break;
          case "_header":
          break;
          case "head":
          break;
          case "ade":
          break;
          case "shouldOpenActivityInPopoutWindow":
          break;
          case "PopoutWindowKeys":
          break;
          case "wrapHue":
          break;
          case "headerMessages":
          break;
          case "player_height":
          break;
          case "hei":
          break;
          case "heightAverageWindow":
          break;
          case "eight":
          break;
          case "ht":
          break;
          case "withOverlay":
          break;
          case "userSearch":
          break;
          case "userSearchContext":
          break;
          case "fieldText":
          break;
          case "fieldTextHook":
          break;
          case "http":
          break;
          case "oc":
          break;
          case "oca":
          break;
          case "NonConvert":
          break;
          case "Convert":
          break;
          case "ConvertEmoticons":
          break;
          case "mot":
          break;
          case "icons":
          break;
          case "iconsContainer":
          break;
          case "rightwards_pushing_hand_medium_dark_skin_tone":
          break;
          case "_include":
          break;
          case "inc":
          break;
          case "include":
          break;
          case "includesBounties":
          break;
          case "lu":
          break;
          case "lud":
          break;
          case "Bounties Scroll Indicator":
          break;
          case "originalBuffer":
          break;
          case "ferry":
          break;
          case "__internalInstanceHandle":
          break;
          case "_int":
          break;
          case "_internalInstanceHandle":
          break;
          case "internal":
          break;
          case "internalInstanceHandle":
          break;
          case "base64StringFromByteArray":
          break;
          case "indexOfSingleActiveTouch":
          break;
          case "TouchPad":
          break;
          case "deleteGuild":
          break;
          case "deleteGuildEvent":
          break;
          case "deleteGuildEventException":
          break;
          case "onRemoveAnswerImage":
          break;
          case "getAttachmentPayload":
          break;
          case "loadCachedMessages":
          break;
          case "mostRecentRawMessage":
          break;
          case "getApplicationCommandOptionQueryOptions":
          break;
          case "unable_to_sync_deletes":
          break;
          case "deletes":
          break;
          case "after_message_id":
          break;
          case "message_id":
          break;
          case "message_identity":
          break;
          case "identity":
          break;
          case "identityEnabled":
          break;
          case "_isHovered":
          break;
          case "redTint":
          break;
          case "int":
          break;
          case "intlMessage":
          break;
          case "tl":
          break;
          case "getApexExperiments":
          break;
          case "ApexExperiment":
          break;
          case "ApexExperimentsMessage":
          break;
          case "MessageAttachmentFlags":
          break;
          case "getEmoticonByName":
          break;
          case "activity_items":
          break;
          case "_items":
          break;
          case "_itemsForType":
          break;
          case "item":
          break;
          case "PLUM_26":
          break;
          case "activeUnjoinedThreads":
          break;
          case "jo":
          break;
          case "js":
          break;
          case "xs":
          break;
          case "GUILD_STREAM":
          break;
          case "isRendered":
          break;
          case "gradientOverlay":
          break;
          case "yOffset":
          break;
          case "hasInputText":
          break;
          case "targetHeight":
          break;
          case "getHeight":
          break;
          case "jus":
          break;
          case "justify":
          break;
          case "Content":
          break;
          case "PasskeysSpotIllustration":
          break;
          case "ke":
          break;
          case "woman_judge_tone5":
          break;
          case "man_judge_tone5":
          break;
          case "judge_tone5":
          break;
          case "stringOptionInput":
          break;
          case "put_litter_in_its_place":
          break;
          case "placeOptimizedMultiColumnItem":
          break;
          case "embedded_activity_location_kind":
          break;
          case "ki":
          break;
          case "kin":
          break;
          case "BananaSpotIllustration":
          break;
          case "Backspace":
          break;
          case "BackspaceIcon":
          break;
          case "aria-label":
          break;
          case "aria-labelledby":
          break;
          case "lab":
          break;
          case "byAppEntry":
          break;
          case "tryGetLayout":
          break;
          case "guildOption":
          break;
          case "USER_MENTION":
          break;
          case "MENTION_CHANNEL_PREV":
          break;
          case "CHANNEL_PREV":
          break;
          case "Buf8":
          break;
          case "f8wNDl":
          break;
          case "DlcqlU":
          break;
          case "lcq":
          break;
          case "arrow_left":
          break;
          case "leftActions":
          break;
          case "CHAT_INPUT_FLOATING_BORDER_RADIUS":
          break;
          case "USER_DISCOVERY_UPDATED":
          break;
          case "_$esjava$I_length":
          break;
          case "I_length":
          break;
          case "_l":
          break;
          case "_length":
          break;
          case "len":
          break;
          case "lengthComputable":
          break;
          case "clj":
          break;
          case "MAX_VISIBLE_PAGES":
          break;
          case "useFocusedInputLayoutHandler":
          break;
          case "load":
          break;
          case "J":
          break;
          case "setCurrent$esjava$1":
          break;
          case "expiration":
          break;
          case "expirationDate":
          break;
          case "onDateChange":
          break;
          case "getApplicationSubscriptionSystemMessageASTContent":
          break;
          case "trackItemInteraction":
          break;
          case "action_location":
          break;
          case "loc":
          break;
          case "locationAnalyticsObject":
          break;
          case "AnalyticsObjects":
          break;
          case "__mapperRegistry":
          break;
          case "_map":
          break;
          case "mar":
          break;
          case "margin":
          break;
          case "arg":
          break;
          case "gi":
          break;
          case "heap_max":
          break;
          case "_max":
          break;
          case "_maxListeners":
          break;
          case "maxListeners":
          break;
          case "shouldShowRaidInAppNotification":
          break;
          case "InAppNotificationAccessoryTypes":
          break;
          case "__memo":
          break;
          case "mo":
          break;
          case "messageIds":
          break;
          case "sag":
          break;
          case "_$esjava$method":
          break;
          case "_$esjava$methodobject":
          break;
          case "ho":
          break;
          case "hod":
          break;
          case "dob":
          break;
          case "obj":
          break;
          case "object":
          break;
          case "objectAssign":
          break;
          case "alwaysBounceVertical":
          break;
          case "appearance":
          break;
          case "ActionStatusSubLabel":
          break;
          case "onStatus":
          break;
          case "Status":
          break;
          case "SubLabel":
          break;
          case "lineHeight":
          break;
          case "SvgFromXml":
          break;
          case "ml-Mlym":
          break;
          case "NOTIFICATION_SETTINGS_PERMISSION_HEADER":
          break;
          case "HEADER_TITLE_TEXT_STYLE":
          break;
          case "useRichChatInput":
          break;
          case "ChatInputOmniButtonActionType":
          break;
          case "mni":
          break;
          case "ButtonAction":
          break;
          case "people_holding_hands_tone2_tone5":
          break;
          case "Ambient":
          break;
          case "Ambient_Lightmode":
          break;
          case "bie":
          break;
          case "tm":
          break;
          case "mod":
          break;
          case "modeOptions":
          break;
          case "contact_names":
          break;
          case "nam":
          break;
          case "namesLegacy":
          break;
          case "AuditLogActions":
          break;
          case "releaseWebView":
          break;
          case "errorIds":
          break;
          case "nine_thirty":
          break;
          case "fod":
          break;
          case "guildRecentsDismissedAt":
          break;
          case "track_next":
          break;
          case "_nextChannelId":
          break;
          case "diffClamp":
          break;
          case "requireExact":
          break;
          case "activeSlideAlignment":
          break;
          case "Alignment":
          break;
          case "mentionBadge":
          break;
          case "imageBanner":
          break;
          case "$ZodUnknown":
          break;
          case "ZodUnknown":
          break;
          case "Unknown":
          break;
          case "kn":
          break;
          case "$i":
          break;
          case "$input":
          break;
          case "inp":
          break;
          case "input":
          break;
          case "put":
          break;
          case "last4":
          break;
          case "cardholderName":
          break;
          case "expirationMonth":
          break;
          case "expirationYear":
          break;
          case "binData":
          break;
          case "_threadMemberLists":
          break;
          case "shouldUseFabricChatInput":
          break;
          case "ChatInputExpressionPressed":
          break;
          case "res":
          break;
          case "registerUserExperiment":
          break;
          case "PREFERRED_LOCALE":
          break;
          case "E_NOT_PREPARED":
          break;
          case "REDESIGN_CHANNEL_NAME_MUTED_TEXT":
          break;
          case "TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME":
          break;
          case "METRIC_MAP":
          break;
          case "APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE":
          break;
          case "IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN":
          break;
          case "INPUT_FIELD_TEXT_STYLE_MD":
          break;
          case "_opacityActive":
          break;
          case "opa":
          break;
          case "city":
          break;
          case "emojiGridRowContainer":
          break;
          case "gift_info_options":
          break;
          case "_options":
          break;
          case "opt":
          break;
          case "option":
          break;
          case "_parent":
          break;
          case "_parentSpanId":
          break;
          case "par":
          break;
          case "parentSpan":
          break;
          case "parentSpanId":
          break;
          case "differenceInCalendarDays":
          break;
          case "hash_mask":
          break;
          case "maskContentUnits":
          break;
          case "preview_asset_paths":
          break;
          case "path":
          break;
          case "_positions":
          break;
          case "positions":
          break;
          case "_props":
          break;
          case "_propsStack":
          break;
          case "pr":
          break;
          case "pro":
          break;
          case "prop":
          break;
          case "propsStack":
          break;
          case "ops":
          break;
          case "ps":
          break;
          case "StackRouter":
          break;
          case "primaryLuminanceWeights":
          break;
          case "dragHandlePressableProps":
          break;
          case "clearAnalyticsEventsRecording":
          break;
          case "FePointLight":
          break;
          case "LightSpeedIn":
          break;
          case "LightSpeedInData":
          break;
          case "proto":
          break;
          case "prototypeInitialized":
          break;
          case "GiftReminderCoachmark":
          break;
          case "getGlobalScope":
          break;
          case "openEndStageModal":
          break;
          case "_pushCells":
          break;
          case "pus":
          break;
        }
      }
      prop.style = require(26) /* result */.default;
      const _Object = Object;
      const obj3 = { uiViewClassName: null, validAttributes: null, bubblingEventTypes: null, directEventTypes: null };
      obj3[0] = bubblingEventTypes;
      obj3[1] = prop;
      obj3[2] = keys3;
      obj3[3] = tmp4;
      const merged = Object.assign(viewManagerConfig, obj3);
      str = require(68) /* measure */.default.getConstants();
      if (!str.ViewManagerNames) {
        if (!str.LazyViewManagersEnabled) {
          bubblingEventTypes = viewManagerConfig.bubblingEventTypes;
          prop = str.genericBubblingEventTypes;
          tmp58 = bubblingEventTypes;
          if (prop) {
            tmp58 = prop;
            if (bubblingEventTypes) {
              tmp58 = bubblingEventTypes;
              keys3 = Object.keys();
            }
          }
        }
      }
      const _default3 = require(68) /* measure */.default;
      const obj13 = require(70) /* nullthrows */(require(68) /* measure */.default.getDefaultEventTypes)();
      if (obj13) {
        if (viewManagerConfig) {
          for (const key10171 in obj13) {
            tmp = key10171;
            if (!obj13.hasOwnProperty(key10171)) {
              continue;
            } else {
              let obj14 = obj13[key10171];
              let tmp88 = obj14;
              if (viewManagerConfig.hasOwnProperty(key10171)) {
                let obj15 = viewManagerConfig[key10171];
                let tmp89 = typeof obj14 === "ay";
                if (typeof obj14 !== "window") {
                  tmp89 = typeof obj15 === "ay";
                }
                tmp88 = obj14;
                if (tmp89) {
                  let tmp90 = obj15;
                  if (obj14) {
                    tmp90 = obj14;
                    if (obj15) {
                      let tmp91 = obj14;
                      tmp90 = obj15;
                      let keys4 = Object.keys();
                      if (keys4 !== undefined) {
                        tmp90 = obj15;
                        let tmp93 = keys4[tmp];
                        while (tmp93 !== undefined) {
                          tmp = tmp93;
                          if (!obj14.hasOwnProperty(tmp93)) {
                            continue;
                          } else {
                            let tmp94 = obj14[tmp93];
                            let tmp95 = tmp94;
                            if (obj15.hasOwnProperty(tmp93)) {
                              let tmp96 = obj15[tmp93];
                              let tmp97 = typeof tmp94 === "ay";
                              if (typeof tmp94 !== "window") {
                                tmp97 = typeof tmp96 === "ay";
                              }
                              tmp95 = tmp94;
                              if (tmp97) {
                                let tmp98 = merge;
                                tmp95 = merge(tmp96, tmp94);
                              }
                            }
                            obj15[tmp93] = tmp95;
                            continue;
                          }
                          continue;
                        }
                      }
                    }
                  }
                  tmp88 = tmp90;
                }
              }
              viewManagerConfig[key10171] = tmp88;
              continue;
            }
            continue;
          }
        }
      }
      const tmp54Result = require(70) /* nullthrows */;
    }
    const viewManagerConfig1 = require(68) /* measure */.default.getViewManagerConfig(baseModuleName);
    obj2 = str2;
    let tmp11 = str2;
    let tmp12 = str;
    let tmp13 = str3;
    baseModuleName = null;
    if (viewManagerConfig1) {
      const obj4 = {};
      const merged1 = Object.assign(viewManagerConfig1.bubblingEventTypes);
      const merged2 = Object.assign(tmp10);
      const obj5 = {};
      const merged3 = Object.assign(viewManagerConfig1.directEventTypes);
      const merged4 = Object.assign(tmp9);
      const obj6 = {};
      const merged5 = Object.assign(viewManagerConfig1.NativeProps);
      obj2 = Object.assign(obj2);
      baseModuleName = viewManagerConfig1.baseModuleName;
      tmp11 = obj6;
      tmp12 = obj5;
      tmp13 = obj4;
    }
    str2 = tmp11;
    str = tmp12;
    str3 = tmp13;
    const _default2 = require(68) /* measure */.default;
  }
};
