// Module ID: 646
// Function ID: 7361
// Name: capitalize
// Dependencies: []

// Module 646 (capitalize)
const fn = function() {
  function capitalize(arg0) {
    const str = String(arg0);
    const formatted = str.charAt(0).toUpperCase();
    return formatted + str.slice(1);
  }
  function format(arg0) {
    const tmp = trim(arg0);
    let tmp2 = tmp;
    if (!obj.test(tmp)) {
      tmp2 = capitalize(tmp);
    }
    return tmp2;
  }
  function forOwn(parsed, arg1) {
    for (const key10005 in arg0) {
      let tmp2 = key10005;
      let tmp3 = closure_4;
      if (!closure_4.call(arg0, key10005)) {
        continue;
      } else {
        let tmp = arg1(arg0[key10005], key10005, arg0);
        // continue
      }
      continue;
    }
  }
  function getClassOf(arg0) {
    if (null == arg0) {
      let substr = capitalize(arg0);
    } else {
      substr = lib.call(arg0).slice(8, -1);
      const callResult = lib.call(arg0);
    }
    return substr;
  }
  function qualify(arg0) {
    return String(arg0).replace(/([ -])(?!$)/g, "$1?");
  }
  function reduce(arg0, arg1) {
    let closure_2 = null;
    const fn = (arg0, arg1, arg2) => {
      closure_2 = arg1(closure_2, arg0, arg1, arg0);
    };
    let num = 0;
    if (arg0) {
      num = arg0.length;
    }
    if ("number" === typeof num) {
      if (num > -1) {
        if (num <= closure_2) {
          for (let num3 = 0; num3 < num; num3 = num3 + 1) {
            let fnResult = fn(arg0[num3], num3, arg0);
          }
        }
        return closure_2;
      }
    }
    forOwn(arg0, fn);
  }
  function trim(arg0) {
    return String(arg0).replace(/^ +| +$/g, "");
  }
  const obj = { "Bool(false)": null, "Bool(false)": null };
  let self = obj[typeof window];
  if (self) {
    self = window;
  }
  if (!self) {
    self = this;
  }
  let arg0 = self;
  const arg4 = tmp;
  let tmp2 = obj[typeof closure_1] && arg4;
  if (tmp2) {
    tmp2 = !arg4.nodeType;
  }
  if (tmp2) {
    tmp2 = arg4;
  }
  let tmp4 = tmp;
  if (obj[typeof closure_2] && closure_2) {
    tmp4 = tmp2;
  }
  if (tmp4) {
    tmp4 = "object" === typeof arg0;
  }
  if (tmp4) {
    tmp4 = arg0;
  }
  let tmp6 = !tmp4;
  if (!tmp6) {
    tmp6 = tmp4.global !== tmp4 && tmp4.window !== tmp4 && tmp4.self !== tmp4;
    const tmp7 = tmp4.global !== tmp4 && tmp4.window !== tmp4 && tmp4.self !== tmp4;
  }
  if (!tmp6) {
    arg0 = tmp4;
    self = tmp4;
  }
  closure_2 = Math.pow(2, 53) - 1;
  let closure_3 = /\bOpera/;
  ({ hasOwnProperty: closure_4, toString: closure_5 } = Object.prototype);
  function parse(arg0) {
    let manufacturer;
    let product;
    let tmp;
    let closure_0 = arg0;
    function getProduct(items3) {
      return callback(items3, (arg0, pattern) => {
        let tmp = arg0;
        pattern = pattern.pattern;
        if (!pattern) {
          pattern = callback2(pattern);
        }
        let tmp3 = !tmp;
        if (tmp3) {
          const _RegExp = RegExp;
          let match = RegExp(`\b${pattern} *\d+[.\w_]*`, "i").exec(closure_0);
          if (!match) {
            const _RegExp2 = RegExp;
            match = RegExp(`\b${pattern} *\w+-[\w]*`, "i").exec(closure_0);
            const RegExpResult1 = RegExp(`\b${pattern} *\w+-[\w]*`, "i");
          }
          if (!match) {
            const _RegExp3 = RegExp;
            match = RegExp(`\b${pattern}(?:; *(?:[a-z]+[_-])?[a-z]+\d+|[^ ();-]*)`, "i").exec(closure_0);
            const RegExpResult2 = RegExp(`\b${pattern}(?:; *(?:[a-z]+[_-])?[a-z]+\d+|[^ ();-]*)`, "i");
          }
          tmp3 = match;
          tmp = match;
          const RegExpResult = RegExp(`\b${pattern} *\d+[.\w_]*`, "i");
        }
        let tmp9 = tmp;
        if (tmp3) {
          let label = tmp;
          if (pattern.label) {
            const _RegExp4 = RegExp;
            label = tmp;
            if (!RegExpResult3.test(pattern.label)) {
              label = pattern.label;
            }
            const RegExpResult3 = RegExp(pattern, "i");
          }
          const parts = String(label).split("/");
          let tmp12 = parts[1];
          if (tmp12) {
            tmp12 = !/[\d.]+/.test(parts[0]);
            const obj5 = /[\d.]+/;
          }
          if (tmp12) {
            parts[0] = `${tmp11[0]} ${tmp11[1]}`;
          }
          const _RegExp5 = RegExp;
          const str10 = parts[0];
          const str7 = String(label);
          const _RegExp6 = RegExp;
          const str12 = parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern);
          const _RegExp7 = RegExp;
          tmp9 = callback(parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ").replace(RegExp(`(${tmp13})[-_.]?(\w)`, "i"), "$1 $2"));
          const str16 = parts[0].replace(RegExp(pattern, "i"), pattern.label || pattern).replace(RegExp(`; *(?:${pattern.label || pattern}[_-])?`, "i"), " ");
        }
        return tmp9;
      });
    }
    function getVersion(Chrome) {
      return callback(Chrome, (arg0, arg1) => {
        let tmp = arg0;
        if (!arg0) {
          const _RegExp = RegExp;
          const RegExpResult = RegExp(`${arg1}(?:-[\d.]+/|(?: for [\w-]+)?[ /-])([\d.]+[^ ();/_-]*)`, "i");
          tmp = RegExp(`${arg1}(?:-[\d.]+/|(?: for [\w-]+)?[ /-])([\d.]+[^ ();/_-]*)`, "i").exec(closure_0) || 0[1];
          const tmp5 = RegExp(`${arg1}(?:-[\d.]+/|(?: for [\w-]+)?[ /-])([\d.]+[^ ();/_-]*)`, "i").exec(closure_0) || 0;
        }
        if (!tmp) {
          tmp = null;
        }
        return tmp;
      });
    }
    let obj = closure_0;
    let tmp2 = arg0;
    if (arg0) {
      let str = "object";
      tmp2 = "object" === typeof arg0;
    }
    if (tmp2) {
      tmp2 = "String" != getClassOf(arg0);
    }
    let tmp4 = arg0;
    if (tmp2) {
      obj = arg0;
      closure_0 = null;
      tmp4 = null;
    }
    const tmp6 = obj.navigator || {};
    if (!tmp4) {
      closure_0 = tmp7;
      tmp4 = tmp7;
    }
    if (tmp2) {
      let isMatch = tmp6.likeChrome;
    } else {
      let obj1 = /\bChrome\b/;
      isMatch = obj1.test(tmp4);
      if (isMatch) {
        let obj2 = /internal|\n/i;
        isMatch = !obj2.test(lib.toString());
      }
    }
    let str3 = "ScriptBridgingProxyObject";
    if (tmp2) {
      str3 = "Object";
    }
    let str4 = "Environment";
    if (tmp2) {
      str4 = "Object";
    }
    if (!tmp2) {
      let str5 = getClassOf(obj.java);
    } else {
      str5 = "JavaPackage";
    }
    let str6 = "RuntimeObject";
    if (tmp2) {
      str6 = "Object";
    }
    let obj3 = /\bJava/;
    let java = obj3.test(str5);
    if (java) {
      java = obj.java;
    }
    let tmp14 = java;
    if (java) {
      tmp14 = getClassOf(obj.environment) == str4;
    }
    let str7 = "\u03B1";
    if (java) {
      str7 = "a";
    }
    let str8 = "\u03B2";
    if (java) {
      str8 = "b";
    }
    const tmp17 = obj.document || {};
    let opera = obj.operamini;
    if (!opera) {
      opera = obj.opera;
    }
    if (tmp2) {
      if (opera) {
        [[Class]] = opera.[[Class]];
      }
      let tmp23 = null;
      let tmp24 = null;
      if (tmp20(__Class__)) {
        tmp23 = opera;
        tmp24 = __Class__;
      }
      let items = [];
      let isMatch3 = tmp4 == tmp7;
      let versionResult = isMatch3;
      if (isMatch3) {
        versionResult = tmp23;
      }
      if (versionResult) {
        versionResult = "function" === typeof tmp23.version;
      }
      if (versionResult) {
        versionResult = tmp23.version();
      }
      let version = versionResult;
      const items1 = [{}, "Trident", {}, "iCab", , , , , ];
      let str13 = "Presto";
      items1[4] = "Presto";
      items1[5] = "NetFront";
      items1[6] = "Tasman";
      items1[7] = "KHTML";
      items1[8] = "Gecko";
      const tmp28 = function getLayout(items1) {
        return callback(items1, (arg0, pattern) => {
          let tmp = arg0;
          if (!arg0) {
            pattern = pattern.pattern;
            if (!pattern) {
              pattern = callback(pattern);
            }
            let match = RegExp(`\b${pattern}\b`, "i").exec(closure_0);
            if (match) {
              match = pattern.label || pattern;
              const tmp6 = pattern.label || pattern;
            }
            tmp = match;
            const RegExpResult = RegExp(`\b${pattern}\b`, "i");
          }
          return tmp;
        });
      }(items1);
      const items2 = [, , , , , , , , , , , , , , , , , {}, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {}, "SeaMonkey", {}, "Sleipnir", "SlimBrowser", {}, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {}, {}, "Opera Mini", {}, "Opera", {}, "Chromium", "Chrome", {}, {}, {}, {}, {}, {}, "Safari"];
      let text1 = function getName(items2) {
        return callback(items2, (arg0, pattern) => {
          let tmp = arg0;
          if (!arg0) {
            pattern = pattern.pattern;
            if (!pattern) {
              pattern = callback(pattern);
            }
            let match = RegExp(`\b${pattern}\b`, "i").exec(closure_0);
            if (match) {
              match = pattern.label || pattern;
              const tmp6 = pattern.label || pattern;
            }
            tmp = match;
            const RegExpResult = RegExp(`\b${pattern}\b`, "i");
          }
          return tmp;
        });
      }(items2);
      const items3 = [{}, "BlackBerry", {}, {}, {}, {}, {}, {}, {}, {}, {}, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {}, "Wii", "Xbox One", {}, "Xoom"];
      product = getProduct(items3);
      let closure_2 = product;
      obj = { Apple: {}, Alcatel: {}, Archos: {}, Amazon: { bjd: "<string:2491613185>", bjq: "<string:2941583362>" } };
      obj = { Transformer: 1 };
      obj.Asus = obj;
      obj1 = { Nook: 1 };
      obj.Barnes & Noble = obj1;
      obj2 = { PlayBook: 1 };
      obj.BlackBerry = obj2;
      obj.Google = { y: "<string:2491613185>", POsVOt: "<string:2941583362>" };
      obj3 = { TouchPad: 1 };
      obj.HP = obj3;
      obj.HTC = {};
      obj.Huawei = {};
      obj.Lenovo = {};
      obj.LG = {};
      obj.Microsoft = { "Null": "<string:2491613185>", "Null": "<string:2941583362>" };
      const obj4 = { Xoom: 1 };
      obj.Motorola = obj4;
      obj.Nintendo = { "Null": "<string:2491613185>", "Null": "<string:2941583362>" };
      const obj5 = { Lumia: 1 };
      obj.Nokia = obj5;
      obj.Oppo = {};
      obj.Samsung = { KIDS: false, textInputRef: false, APRIL_FOOLS_2026_COACHMARK: false, currentScreen: false };
      obj.Sony = {};
      obj.Xiaomi = { "Null": "<string:2491613185>", "Null": "<string:2941583362>" };
      const tmp31 = function getManufacturer(arg0) {
        return callback(arg0, (arg0, arg1, arg2) => {
          let tmp = arg0;
          if (!arg0) {
            let match = arg1[closure_2];
            if (!match) {
              const obj = /^[a-z]+(?: +[a-z]+\b)*/i;
              match = arg1[obj.exec(obj, closure_2)];
            }
            if (!match) {
              const _RegExp = RegExp;
              match = RegExp(`\b${closure_11(arg2)}(?:\b|\w*\d)`, "i").exec(closure_0);
              const RegExpResult = RegExp(`\b${closure_11(arg2)}(?:\b|\w*\d)`, "i");
            }
            if (match) {
              match = arg2;
            }
            tmp = match;
          }
          return tmp;
        });
      }(obj);
      const items4 = [, , , , {}, "Debian", {}, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "];
      let str86 = function getOS(items4) {
        return callback(items4, (arg0, pattern) => {
          let tmp = arg0;
          pattern = pattern.pattern;
          if (!pattern) {
            pattern = callback2(pattern);
          }
          let match = !tmp;
          if (match) {
            const _RegExp = RegExp;
            match = RegExp(`\b${pattern}(?:/[\d.]+|[ \w.]*)`, "i").exec(closure_0);
            tmp = match;
            const RegExpResult = RegExp(`\b${pattern}(?:/[\d.]+|[ \w.]*)`, "i");
          }
          let tmp6 = tmp;
          if (match) {
            const obj = { hasSearch: "100%", withDelay: "contain", replyContainer: false, ActionSheetHeaderBar: false, useAutoDismissGuildPowerupsNewBadge: false, isFullMatch: false, i-klingon: null, pendingScrollUpdateCount: 0, isRecapPageRevealed: 0, getCustomChannelScore: 0, getEmbeddedActivityLaunchabilityForChannel: 0, user_guild_settings: 0 };
            let isMatch = pattern;
            if (pattern) {
              isMatch = tmp7;
            }
            if (isMatch) {
              isMatch = /^Win/i.test(tmp);
              const obj3 = /^Win/i;
            }
            if (isMatch) {
              isMatch = !/^Windows Phone /i.test(tmp);
              const obj4 = /^Windows Phone /i;
            }
            let tmp9 = obj;
            if (isMatch) {
              const obj5 = /[\d.]+$/;
              tmp9 = obj[obj5.exec(obj5, tmp)];
            }
            let text = tmp;
            if (isMatch) {
              text = `Windows ${tmp9}`;
            }
            const _String = String;
            const str5 = String(text);
            let tmp12 = pattern;
            if (pattern) {
              tmp12 = tmp7;
            }
            let str6 = str5;
            if (tmp12) {
              const _RegExp2 = RegExp;
              str6 = str5.replace(RegExp(pattern, "i"), tmp7);
            }
            const str9 = str6.replace(/ ce$/i, " CE");
            const str11 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web");
            const str13 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS");
            const str15 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS");
            const str17 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1");
            const str18 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1");
            const str20 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1");
            const str22 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".");
            const str24 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "");
            const str26 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64");
            const str27 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1");
            tmp6 = callback(str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
            const str28 = str6.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1");
          }
          return tmp6;
        });
      }(items4);
      let tmp32 = tmp28;
      if (tmp28) {
        const items5 = [tmp28];
        tmp32 = items5;
      }
      let tmp34 = /\bAndroid\b/.test(str86) && !product;
      if (tmp34) {
        const match = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(tmp4);
        let isMatch2 = match;
        tmp34 = match;
        const obj13 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i;
      }
      let str87 = product;
      if (tmp34) {
        const tmp38 = trim(isMatch2[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null;
        closure_2 = tmp38;
        str87 = tmp38;
        const str88 = trim(isMatch2[1]);
      }
      if (tmp31) {
        if (!str87) {
          const items6 = [tmp31];
          const product1 = getProduct(items6);
          closure_2 = product1;
          let tmp40 = product1;
        }
        const match1 = /\bGoogle TV\b/.exec(tmp40);
        let tmp46 = match1;
        let tmp47 = tmp40;
        if (match1) {
          const first = tmp46[0];
          closure_2 = first;
          tmp47 = first;
        }
        let tmp50 = tmp47;
        if (obj15.test(tmp4)) {
          let str97 = "";
          if (tmp47) {
            str97 = `${tmp47} `;
          }
          const text = `${str97}Simulator`;
          closure_2 = text;
          tmp50 = text;
        }
        let isMatch1 = "Opera Mini" == text1;
        if (isMatch1) {
          isMatch1 = /\bOPiOS\b/.test(tmp4);
          const obj16 = /\bOPiOS\b/;
        }
        if (isMatch1) {
          str = "running in Turbo/Uncompressed mode";
          let arr = items.push("running in Turbo/Uncompressed mode");
        }
        if ("IE" == text1) {
          if (obj17.test(tmp4)) {
            isMatch2 = parse;
            str = "";
            isMatch2 = parse(tmp4.replace(/like iPhone OS/, ""));
            ({ manufacturer, product } = isMatch2);
            closure_2 = product;
            str = product;
          }
          isMatch2 = version;
          if (!version) {
            isMatch2 = qualify;
            isMatch2 = text1;
            const items7 = [false, false, qualify(text1)];
            str = "(?:Firefox|Minefield|NetFront)";
            items7[3] = "(?:Firefox|Minefield|NetFront)";
            version = getVersion(items7);
          }
          if ("iCab" != tmp32) {
            isMatch2 = text1;
            isMatch2 = /\bOpera\b/.test(text1);
            if (isMatch2) {
              if (obj40.test(tmp4)) {
                str13 = "Blink";
              }
              isMatch2 = str13;
              const obj40 = /\bOPR\b/;
            }
            str = isMatch2;
            const obj39 = /\bOpera\b/;
          } else {
            isMatch2 = globalThis;
            const _parseFloat = parseFloat;
            isMatch2 = version;
            str = "WebKit";
          }
          if (!str) {
            str = /\b(?:Midori|Nook|Safari)\b/i.test(tmp4);
            if (str) {
              str = !/^(?:Trident|EdgeHTML)$/.test(tmp32);
              const obj42 = /^(?:Trident|EdgeHTML)$/;
            }
            if (str) {
              str = "WebKit";
            }
            const obj41 = /\b(?:Midori|Nook|Safari)\b/i;
          }
          if (!str) {
            isMatch2 = !tmp32;
            if (isMatch2) {
              isMatch2 = /\bMSIE\b/i.test(tmp4);
              const obj43 = /\bMSIE\b/i;
            }
            if (isMatch2) {
              isMatch2 = str86;
              str = "Mac OS";
              str = "Trident";
              if ("Mac OS" == str86) {
                str = "Tasman";
              }
              isMatch2 = str;
            }
            str = isMatch2;
          }
          if (!str) {
            str = "WebKit" == tmp32;
            if (str) {
              isMatch2 = text1;
              str = /\bPlayStation\b(?! Vita\b)/i.test(text1);
              const obj44 = /\bPlayStation\b(?! Vita\b)/i;
            }
            if (str) {
              str = "NetFront";
            }
          }
          let obj45 = str;
          isMatch2 = tmp32;
          if (str) {
            isMatch2 = obj45;
            const items8 = [obj45];
            isMatch2 = items8;
          }
          isMatch2 = text1;
          if ("IE" == text1) {
            isMatch2 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp4) || 0;
            isMatch2 = isMatch2[1];
            obj45 = isMatch2;
            if (isMatch2) {
              isMatch2 = text1;
              str = " Mobile";
              isMatch2 = `${tmp29} Mobile`;
              isMatch2 = obj45;
              isMatch2 = obj45;
              if (!obj50.test(obj45)) {
                str = ".x";
                isMatch2 = `${tmp}.x`;
              }
              str = "Windows Phone ";
              isMatch2 = `Windows Phone ${tmp}`;
              isMatch2 = items;
              str = "desktop mode";
              isMatch2 = items.unshift("desktop mode");
              const obj50 = /\+$/;
            }
            const obj46 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
          }
          if (obj47.test(tmp4)) {
            text1 = "IE Mobile";
            str86 = "Windows Phone 8.x";
            isMatch2 = items;
            str = "desktop mode";
            isMatch2 = items.unshift("desktop mode");
            isMatch2 = version;
            if (!version) {
              isMatch2 = /\brv:([\d.]+)/.exec(tmp4) || 0;
              version = isMatch2[1];
              const obj49 = /\brv:([\d.]+)/;
            }
          } else {
            isMatch2 = text1;
            isMatch2 = "IE" != text1 && "Trident" == isMatch2;
            if (isMatch2) {
              isMatch2 = /\brv:([\d.]+)/.exec(tmp4);
              obj45 = isMatch2;
              const obj48 = /\brv:([\d.]+)/;
            }
            if (isMatch2) {
              isMatch2 = text1;
              if (text1) {
                isMatch2 = items;
                isMatch2 = text1;
                str = "identifying as ";
                isMatch2 = version;
                str = "";
                isMatch2 = `identifying as ${tmp29}`;
                if (version) {
                  isMatch2 = version;
                  str = " ";
                  str = ` ${tmp27}`;
                }
                isMatch2 = items.push(isMatch2 + str);
              }
              text1 = "IE";
              isMatch2 = obj45;
              version = obj45[1];
            }
          }
          isMatch2 = tmp4;
          if (isMatch3) {
            isMatch2 = obj;
            str = "number";
            str = "number";
            if (null != obj) {
              str = typeof obj.global;
            }
            isMatch2 = /^(?:boolean|number|string|undefined)$/.test(str);
            isMatch2 = str;
            if (!isMatch2) {
              str = "object";
              isMatch2 = "object" === str && !obj.global;
            }
            if (!isMatch2) {
              isMatch2 = tmp4;
              if (java) {
                const System = java.lang.System;
                obj45 = System;
                str = "os.arch";
                isMatch2 = str86;
                isMatch2 = System.getProperty("os.arch");
                if (!str86) {
                  isMatch2 = obj45;
                  str = "os.name";
                  str = " ";
                  str = "os.version";
                  isMatch2 = `${obj45.getProperty("os.name")} `;
                  isMatch2 = `${obj45.getProperty("os.name")} ${obj45.getProperty("os.version")}`;
                }
                str86 = isMatch2;
              }
              if (tmp14) {
                isMatch2 = obj;
                str = "ringo/engine";
                version = obj.require("ringo/engine").version;
                str = ".";
                version = version.join(".");
                text1 = "RingoJS";
                while (true) {
                  isMatch2 = text1;
                  let items10 = isMatch2;
                  if (`RingoJS`) {
                    break;
                  } else {
                    text1 = "Rhino";
                    items10 = isMatch2;
                    // break
                  }
                  break;
                }
              } else {
                isMatch2 = obj;
                str = "object";
                isMatch2 = "object" === typeof obj.process;
                if (isMatch2) {
                  isMatch2 = obj;
                  isMatch2 = !obj.process.browser;
                }
                if (isMatch2) {
                  isMatch2 = obj;
                  const _process = obj.process;
                  obj45 = _process;
                  isMatch2 = _process;
                }
                items10 = isMatch2;
                if (isMatch2) {
                  isMatch2 = obj45;
                  if ("object" === typeof obj45.versions) {
                    isMatch2 = obj45;
                    str = "string";
                    if ("string" === typeof obj45.versions.electron) {
                      isMatch2 = items;
                      isMatch2 = obj45;
                      str = "Node ";
                      isMatch2 = items.push(`Node ${obj45.versions.node}`);
                      text1 = "Electron";
                      version = obj45.versions.electron;
                    } else {
                      isMatch2 = obj45;
                      if ("string" === typeof obj45.versions.nw) {
                        isMatch2 = items;
                        isMatch2 = version;
                        str = "Chromium ";
                        isMatch2 = obj45;
                        str = "Node ";
                        isMatch2 = items.push(`Chromium ${tmp27}`, `Node ${obj45.versions.node}`);
                        text1 = "NW.js";
                        version = obj45.versions.nw;
                      }
                    }
                  }
                  isMatch2 = text1;
                  let arch = isMatch2;
                  if (!text1) {
                    text1 = "Node.js";
                    isMatch2 = obj45;
                    str86 = obj45.platform;
                    isMatch2 = /[\d.]+/.exec(obj45.version);
                    isMatch2 = null;
                    if (isMatch2) {
                      isMatch2 = isMatch2[0];
                    }
                    version = isMatch2;
                    arch = obj45.arch;
                    const obj55 = /[\d.]+/;
                  }
                  isMatch2 = arch;
                  items10 = isMatch2;
                }
              }
            } else {
              isMatch2 = getClassOf;
              isMatch2 = obj;
              const runtime = obj.runtime;
              obj45 = runtime;
              if (getClassOf(runtime) == str3) {
                text1 = "Adobe AIR";
                isMatch2 = obj45;
                str86 = obj45.flash.system.Capabilities.os;
                isMatch2 = tmp4;
                items10 = isMatch2;
              } else {
                isMatch2 = getClassOf;
                isMatch2 = obj;
                const phantom = obj.phantom;
                obj45 = phantom;
                if (getClassOf(phantom) == str6) {
                  text1 = "PhantomJS";
                  isMatch2 = obj45;
                  isMatch2 = obj45.version || null;
                  obj45 = isMatch2;
                  if (isMatch2) {
                    isMatch2 = obj45;
                    str = ".";
                    isMatch2 = `${obj45.major}.${obj45.minor}.${obj45.patch}`;
                  }
                  version = isMatch2;
                  isMatch2 = tmp4;
                  items10 = isMatch2;
                } else {
                  if ("number" === typeof tmp17.documentMode) {
                    isMatch2 = /\bTrident\/(\d+)/i.exec(tmp4);
                    obj45 = isMatch2;
                    if (isMatch2) {
                      isMatch2 = version;
                      const items9 = [version, tmp17.documentMode];
                      isMatch2 = items9;
                      isMatch2 = obj45;
                      isMatch2 = +obj45[1] + 4;
                      obj45 = isMatch2;
                      if (isMatch2 != items9[1]) {
                        isMatch2 = items;
                        isMatch2 = items9;
                        str = "IE ";
                        str = " mode";
                        isMatch2 = items.push(`IE ${tmp[1]} mode`);
                        if (isMatch2) {
                          str = "";
                          isMatch2[1] = "";
                        }
                        isMatch2 = items9;
                        isMatch2 = obj45;
                        isMatch2[1] = obj45;
                      }
                      isMatch2 = text1;
                      if ("IE" == text1) {
                        isMatch2 = globalThis;
                        const _String = String;
                        isMatch2 = items9;
                        isMatch2 = String(isMatch2[1].toFixed(1));
                        const obj54 = isMatch2[1];
                      } else {
                        isMatch2 = items9;
                        isMatch2 = isMatch2[0];
                      }
                      version = isMatch2;
                      isMatch2 = tmp4;
                      items10 = isMatch2;
                    }
                    const obj52 = /\bTrident\/(\d+)/i;
                  }
                  isMatch2 = "number" === typeof tmp17.documentMode;
                  if (isMatch2) {
                    isMatch2 = text1;
                    isMatch2 = /^(?:Chrome|Firefox)\b/.test(text1);
                    const obj53 = /^(?:Chrome|Firefox)\b/;
                  }
                  isMatch2 = tmp4;
                  items10 = isMatch2;
                  if (isMatch2) {
                    isMatch2 = items;
                    isMatch2 = text1;
                    str = "masking as ";
                    isMatch2 = version;
                    str = " ";
                    isMatch2 = items.push(`masking as ${tmp29} ${tmp27}`);
                    text1 = "IE";
                    version = "11.0";
                    items10 = ["right"];
                    str86 = "Windows";
                    isMatch2 = tmp4;
                  }
                }
              }
            }
            isMatch2 = str86;
            if (str86) {
              isMatch2 = format;
              isMatch2 = str86;
              isMatch2 = format(str86);
            }
            str86 = isMatch2;
            isMatch2 = items10;
            const obj51 = /^(?:boolean|number|string|undefined)$/;
          }
          isMatch2 = version;
          if (version) {
            isMatch2 = version;
            isMatch2 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version);
            if (!isMatch2) {
              str = ";";
              let appMinorVersion = isMatch3;
              isMatch2 = `${tmp4};`;
              if (isMatch3) {
                appMinorVersion = tmp6.appMinorVersion;
              }
              isMatch2 = /(?:alpha|beta)(?: ?\d)?/i.exec(isMatch2 + appMinorVersion);
              const obj57 = /(?:alpha|beta)(?: ?\d)?/i;
            }
            if (!isMatch2) {
              isMatch2 = /\bMinefield\b/i.test(tmp4) && "a";
              const obj58 = /\bMinefield\b/i;
            }
            obj45 = isMatch2;
            const obj56 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
          }
          isMatch2 = null;
          if (isMatch2) {
            isMatch2 = obj45;
            str = "alpha";
            if (obj59.test(obj45)) {
              str = "beta";
            }
            isMatch2 = version;
            isMatch2 = globalThis;
            const _RegExp3 = RegExp;
            isMatch2 = obj45;
            str = "\\+?$";
            str = "";
            str = "beta";
            isMatch2 = version.replace(RegExp(`${obj45}\+?$`), "");
            if ("beta" === str) {
              str7 = str8;
            }
            isMatch2 = obj45;
            isMatch2 = isMatch2 + str7;
            isMatch2 = /\d+\+?/.exec(obj45) || "";
            version = isMatch2 + isMatch2;
            isMatch2 = str;
            const obj59 = /b/i;
            const obj60 = /\d+\+?/;
          }
          isMatch2 = text1;
          str = "Fennec";
          if ("Fennec" != text1) {
            isMatch2 = text1;
            if ("Firefox" == text1) {
              isMatch2 = str86;
              while (true) {
                let obj78 = /\bAppleWebKit\/([\d.]+\+?)/i;
                let num12 = obj78.exec(tmp4);
                if (num12) {
                  break;
                } else {
                  num12 = 0;
                  // break
                }
                isMatch2 = num12[1];
                str = isMatch2;
                let arr15 = items12;
                if (isMatch2) {
                  isMatch2 = globalThis;
                  let _parseFloat2 = parseFloat;
                  isMatch2 = str;
                  str = ".0$1";
                  let items11 = [parseFloat(str.replace(/\.(\d)$/, ".0$1")), str];
                  isMatch2 = items11;
                  isMatch2 = text1;
                  if ("Safari" == text1) {
                    isMatch2 = items11;
                    let arr17 = isMatch2[1];
                    let num13 = -1;
                    str = "+";
                    if ("+" == arr17.slice(-1)) {
                      text1 = "WebKit Nightly";
                      isMatch2 = items11;
                      let arr18 = isMatch2[1];
                      let num15 = 0;
                      version = arr18.slice(0, -1);
                      str = "alpha";
                    }
                    isMatch2 = items11;
                    let obj80 = /\b(?:Headless)?Chrome\/([\d.]+)/i;
                    isMatch2 = obj80.exec(tmp4) || 0;
                    isMatch2[1] = isMatch2[1];
                    isMatch2 = items11;
                    let num16 = 0;
                    let num17 = 537.36;
                    isMatch2 = 537.36 == isMatch2[0];
                    if (isMatch2) {
                      isMatch2 = items11;
                      let num18 = 2;
                      isMatch2 = 537.36 == isMatch2[2];
                    }
                    if (isMatch2) {
                      let _parseFloat3 = parseFloat;
                      isMatch2 = items11;
                      let num19 = 28;
                      isMatch2 = parseFloat(isMatch2[1]) >= 28;
                    }
                    if (isMatch2) {
                      isMatch2 = "WebKit" == items12;
                    }
                    if (isMatch2) {
                      let items12 = ["1409898408042303629"];
                    }
                    if (isMatch3) {
                      if (!isMatch) {
                        isMatch2 = items11;
                        if (items12) {
                          isMatch2 = str;
                          str = ".x";
                          str = "number";
                          if ("number" !== typeof str) {
                            let obj81 = /[.+]/;
                            isMatch2 = str;
                            str = "+";
                            if (obj81.test(str)) {
                              str = "";
                            }
                          }
                          isMatch2 = str + str;
                          str = isMatch2;
                          str = " ";
                          items12[1] = `${tmp} ${tmp}`;
                        }
                        isMatch2 = text1;
                        if ("Safari" != text1) {
                          isMatch2 = text1;
                          isMatch2 = "Chrome" == text1;
                          if (isMatch2) {
                            let obj82 = /\bHeadlessChrome/i;
                            isMatch2 = obj82.test(tmp4);
                          }
                          isMatch2 = str;
                          arr15 = items12;
                          if (isMatch2) {
                            isMatch2 = items;
                            str = "headless";
                            isMatch2 = items.unshift("headless");
                            isMatch2 = str;
                            arr15 = items12;
                          }
                        } else {
                          isMatch2 = version;
                          if (version) {
                            let _parseInt = parseInt;
                            isMatch2 = version;
                            let num90 = 45;
                          }
                          version = str;
                          isMatch2 = str;
                          arr15 = items12;
                        }
                      }
                      if (items12) {
                        str = "like Chrome";
                        items12[1] = "like Chrome";
                      }
                      isMatch2 = items11;
                      isMatch2 = isMatch2[1];
                      if (!isMatch2) {
                        isMatch2 = items11;
                        isMatch2 = isMatch2[0];
                        let num45 = 530;
                        let num46 = 1;
                        if (isMatch2 >= 530) {
                          let num47 = 532;
                          let num48 = 2;
                          if (isMatch2 >= 532) {
                            let num49 = 532.05;
                            let num50 = 3;
                            if (isMatch2 >= 532.05) {
                              let num51 = 533;
                              let num52 = 4;
                              if (isMatch2 >= 533) {
                                let num53 = 534.03;
                                let num54 = 5;
                                if (isMatch2 >= 534.03) {
                                  let num55 = 534.07;
                                  let num56 = 6;
                                  if (isMatch2 >= 534.07) {
                                    let num57 = 534.1;
                                    let num58 = 7;
                                    if (isMatch2 >= 534.1) {
                                      let num59 = 534.13;
                                      let num60 = 8;
                                      if (isMatch2 >= 534.13) {
                                        let num61 = 534.16;
                                        let num62 = 9;
                                        if (isMatch2 >= 534.16) {
                                          let num63 = 534.24;
                                          let num64 = 10;
                                          if (isMatch2 >= 534.24) {
                                            let num65 = 534.3;
                                            let num66 = 11;
                                            if (isMatch2 >= 534.3) {
                                              let num67 = 535.01;
                                              let num68 = 12;
                                              if (isMatch2 >= 535.01) {
                                                let num69 = 535.02;
                                                str = "13+";
                                                if (isMatch2 >= 535.02) {
                                                  let num70 = 535.07;
                                                  let num71 = 15;
                                                  if (isMatch2 >= 535.07) {
                                                    let num72 = 535.11;
                                                    let num73 = 16;
                                                    if (isMatch2 >= 535.11) {
                                                      let num74 = 535.19;
                                                      let num75 = 17;
                                                      if (isMatch2 >= 535.19) {
                                                        let num76 = 536.05;
                                                        let num77 = 18;
                                                        if (isMatch2 >= 536.05) {
                                                          let num78 = 536.1;
                                                          let num79 = 19;
                                                          if (isMatch2 >= 536.1) {
                                                            let num80 = 537.01;
                                                            let num81 = 20;
                                                            if (isMatch2 >= 537.01) {
                                                              let num82 = 537.11;
                                                              str = "21+";
                                                              if (isMatch2 >= 537.11) {
                                                                let num83 = 537.13;
                                                                let num84 = 23;
                                                                if (isMatch2 >= 537.13) {
                                                                  let num85 = 537.18;
                                                                  let num86 = 24;
                                                                  if (isMatch2 >= 537.18) {
                                                                    let num87 = 537.24;
                                                                    let num88 = 25;
                                                                    if (isMatch2 >= 537.24) {
                                                                      let num89 = 26;
                                                                      if (isMatch2 >= 537.36) {
                                                                        str = "Blink";
                                                                        str = "28";
                                                                        if ("Blink" != items12) {
                                                                          str = "27";
                                                                        }
                                                                        num89 = str;
                                                                      }
                                                                      num88 = num89;
                                                                    }
                                                                    num86 = num88;
                                                                  }
                                                                  num84 = num86;
                                                                }
                                                                str = num84;
                                                              }
                                                              num81 = str;
                                                            }
                                                            num79 = num81;
                                                          }
                                                          num77 = num79;
                                                        }
                                                        num75 = num77;
                                                      }
                                                      num73 = num75;
                                                    }
                                                    num71 = num73;
                                                  }
                                                  str = num71;
                                                }
                                                num68 = str;
                                              }
                                              num66 = num68;
                                            }
                                            num64 = num66;
                                          }
                                          num62 = num64;
                                        }
                                        num60 = num62;
                                      }
                                      num58 = num60;
                                    }
                                    num56 = num58;
                                  }
                                  num54 = num56;
                                }
                                num52 = num54;
                              }
                              num50 = num52;
                            }
                            num48 = num50;
                          }
                          num46 = num48;
                        }
                        isMatch2 = num46;
                      }
                      str = isMatch2;
                    }
                    if (items12) {
                      str = "like Safari";
                      items12[1] = "like Safari";
                    }
                    isMatch2 = items11;
                    isMatch2 = isMatch2[0];
                    let num20 = 400;
                    let num21 = 1;
                    if (isMatch2 >= 400) {
                      let num22 = 500;
                      let num23 = 2;
                      if (isMatch2 >= 500) {
                        let num24 = 526;
                        let num25 = 3;
                        if (isMatch2 >= 526) {
                          let num26 = 533;
                          let num27 = 4;
                          if (isMatch2 >= 533) {
                            let num28 = 534;
                            str = "4+";
                            if (isMatch2 >= 534) {
                              let num29 = 535;
                              let num30 = 5;
                              if (isMatch2 >= 535) {
                                let num31 = 537;
                                let num32 = 6;
                                if (isMatch2 >= 537) {
                                  let num33 = 538;
                                  let num34 = 7;
                                  if (isMatch2 >= 538) {
                                    let num35 = 601;
                                    let num36 = 8;
                                    if (isMatch2 >= 601) {
                                      let num37 = 602;
                                      let num38 = 9;
                                      if (isMatch2 >= 602) {
                                        let num39 = 604;
                                        let num40 = 10;
                                        if (isMatch2 >= 604) {
                                          let num41 = 606;
                                          let num42 = 11;
                                          if (isMatch2 >= 606) {
                                            let num43 = 608;
                                            let num44 = "12";
                                            if (isMatch2 < 608) {
                                              num44 = 12;
                                            }
                                            num42 = num44;
                                          }
                                          num40 = num42;
                                        }
                                        num38 = num40;
                                      }
                                      num36 = num38;
                                    }
                                    num34 = num36;
                                  }
                                  num32 = num34;
                                }
                                num30 = num32;
                              }
                              str = num30;
                            }
                            num27 = str;
                          }
                          num25 = num27;
                        }
                        num23 = num25;
                      }
                      num21 = num23;
                    }
                    str = num21;
                  }
                  isMatch2 = version;
                  isMatch2 = items11;
                  isMatch2 = version != isMatch2[1];
                  if (isMatch2) {
                    isMatch2 = version;
                    isMatch2 = items11;
                    let obj79 = /\bSafari\/([\d.]+\+?)/i;
                    isMatch2 = obj79.exec(tmp4) || 0;
                    isMatch2 = isMatch2[1];
                    let num14 = 2;
                    isMatch2[2] = isMatch2;
                    isMatch2 = version != isMatch2;
                  }
                  str = isMatch2;
                  if (!isMatch2) {
                    version = null;
                    str = isMatch2;
                  }
                }
                isMatch2 = text1;
                if ("Opera" == text1) {
                  let obj83 = /\bzbov|zvav$/;
                  isMatch2 = str86;
                  isMatch2 = obj83.exec(str86);
                  str = isMatch2;
                  if (isMatch2) {
                    isMatch2 = text1;
                    str = " ";
                    isMatch2 = `${tmp29} `;
                    isMatch2 = items;
                    str = "desktop mode";
                    isMatch2 = items.unshift("desktop mode");
                    isMatch2 = str;
                    str = "zvav";
                    if ("zvav" == str) {
                      str = "Mini";
                      isMatch2 = `${tmp29} Mini`;
                      isMatch2 = null;
                    } else {
                      str = "Mobile";
                      isMatch2 = `${tmp29} MiniMobile`;
                    }
                    isMatch2 = str86;
                    isMatch2 = globalThis;
                    let _RegExp5 = RegExp;
                    isMatch2 = str;
                    str = " *";
                    str = "$";
                    str = "";
                    str86 = str86.replace(RegExp(` *${str}$`), "");
                  }
                }
                isMatch2 = text1;
                if ("Safari" == text1) {
                  let obj84 = /\bChrome\b/;
                  isMatch2 = arr15;
                  if (arr15) {
                    isMatch2 = arr15[1];
                  }
                  if (obj84.exec(isMatch2)) {
                    isMatch2 = items;
                    str = "desktop mode";
                    isMatch2 = items.unshift("desktop mode");
                    text1 = "Chrome Mobile";
                    version = null;
                    let obj86 = /\bOS X\b/;
                    isMatch2 = str86;
                    if (obj86.test(str86)) {
                      str86 = "iOS 4.3+";
                      str = "Apple";
                    } else {
                      str86 = null;
                      str = isMatch2;
                    }
                  }
                  isMatch2 = version;
                  if (version) {
                    isMatch2 = version;
                    let obj87 = /[\d.]+$/;
                    isMatch2 = str86;
                    isMatch2 = obj87.exec(str86);
                    str = isMatch2;
                    let num91 = 0;
                    isMatch2 = 0 == version.indexOf(isMatch2);
                  }
                  if (isMatch2) {
                    isMatch2 = str;
                    str = "/";
                    str = "-";
                    let num92 = -1;
                    isMatch2 = tmp4.indexOf(`/${str}-`) > -1;
                  }
                  if (isMatch2) {
                    isMatch2 = trim;
                    isMatch2 = str86;
                    isMatch2 = str;
                    str = "";
                    str86 = trim(str86.replace(str, ""));
                  }
                  isMatch2 = str86;
                  if (str86) {
                    isMatch2 = str86;
                    isMatch2 = text1;
                    let num93 = -1;
                    isMatch2 = -1 != str86.indexOf(text1);
                  }
                  if (isMatch2) {
                    isMatch2 = globalThis;
                    let _RegExp6 = RegExp;
                    isMatch2 = text1;
                    str = " OS";
                    let RegExpResult = RegExp(`${tmp29} OS`);
                    isMatch2 = str86;
                    isMatch2 = !RegExpResult.test(str86);
                  }
                  if (isMatch2) {
                    isMatch2 = str86;
                    isMatch2 = globalThis;
                    let _RegExp7 = RegExp;
                    isMatch2 = qualify;
                    isMatch2 = text1;
                    str = " *";
                    str = "";
                    str86 = str86.replace(RegExp(` *${closure_11(tmp29)} *`), "");
                  }
                  isMatch2 = arr15;
                  if (arr15) {
                    let obj89 = /\b(?:Avant|Nook)\b/;
                    isMatch2 = text1;
                    isMatch2 = !obj89.test(text1);
                  }
                  if (isMatch2) {
                    let obj90 = /Browser|Lunascape|Maxthon/;
                    isMatch2 = text1;
                    isMatch2 = obj90.test(text1);
                    if (!isMatch2) {
                      isMatch2 = text1;
                      isMatch2 = "Safari" != text1;
                      if (isMatch2) {
                        let obj91 = /^iOS/;
                        isMatch2 = str86;
                        isMatch2 = obj91.test(str86);
                      }
                      if (isMatch2) {
                        let obj92 = /\bSafari\b/;
                        isMatch2 = obj92.test(arr15[1]);
                      }
                    }
                    if (!isMatch2) {
                      let obj93 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/;
                      isMatch2 = text1;
                      isMatch2 = obj93.test(text1) && arr15[1];
                    }
                  }
                  if (isMatch2) {
                    isMatch2 = arr15[arr15.length - 1];
                    str = isMatch2;
                  }
                  if (isMatch2) {
                    isMatch2 = items;
                    isMatch2 = str;
                    isMatch2 = items.push(str);
                  }
                  isMatch2 = items;
                  if (items.length) {
                    isMatch2 = items;
                    str = "; ";
                    str = "(";
                    let items13 = [];
                    str = ")";
                    items13[0] = `(${arr.join("; ")})`;
                    items = items13;
                  }
                  isMatch2 = str;
                  if (str) {
                    isMatch2 = arr13;
                  }
                  if (isMatch2) {
                    let num94 = 0;
                    isMatch2 = arr13.indexOf(str) < 0;
                  }
                  if (isMatch2) {
                    isMatch2 = items;
                    str = "on ";
                    isMatch2 = items.push(`on ${str}`);
                  }
                  if (arr13) {
                    isMatch2 = items;
                    let obj94 = /^on /;
                    str = "on ";
                    if (obj94.test(items[items.length - 1])) {
                      str = "";
                    }
                    isMatch2 = items.push(str + arr13);
                  }
                  isMatch2 = str86;
                  if (str86) {
                    let obj95 = / ([\d.+]+)$/;
                    isMatch2 = str86;
                    isMatch2 = obj95.exec(str86);
                    if (isMatch2) {
                      isMatch2 = str86;
                      let num95 = 0;
                      str = "/";
                      isMatch2 = "/" == str86.charAt(str86.length - isMatch2[0].length - 1);
                    }
                    tmp = isMatch2;
                    let obj6 = {};
                    let num96 = 32;
                    obj6.architecture = 32;
                    if (isMatch2) {
                      if (!isMatch2) {
                        isMatch2 = str86;
                        let num97 = 0;
                        str = "";
                        isMatch2 = str86.replace(isMatch2[0], "");
                      }
                      obj6.family = isMatch2;
                      isMatch2 = null;
                      if (isMatch2) {
                        isMatch2 = isMatch2[1];
                      }
                      obj6.version = isMatch2;
                      obj6.toString = function toString() {
                        const version = this.version;
                        let str = "";
                        let str2 = "";
                        if (version) {
                          str2 = str;
                          if (!isMatch2) {
                            str2 = ` ${version}`;
                          }
                        }
                        const sum = this.family + str2;
                        if (64 == this.architecture) {
                          str = " 64-bit";
                        }
                        return sum + str;
                      };
                      str86 = obj6;
                    }
                    isMatch2 = str86;
                  }
                  let obj97 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
                  isMatch2 = obj97.exec(isMatch2);
                  if (isMatch2) {
                    let obj98 = /\bi686\b/i;
                    if (!obj98.test(isMatch2)) {
                      isMatch2 = str86;
                      if (str86) {
                        isMatch2 = str86;
                        let num98 = 64;
                        str86.architecture = 64;
                        str = str86.family;
                        isMatch2 = globalThis;
                        let _RegExp8 = RegExp;
                        str = " *";
                        str = "";
                        str86.family = str.replace(RegExp(` *${tmp}`), "");
                      }
                      isMatch2 = text1;
                      if (text1) {
                        let obj99 = /\bWOW64\b/i;
                        isMatch2 = obj99.test(tmp4);
                        if (!isMatch2) {
                          if (isMatch3) {
                            obj = /\w(?:86|32)$/;
                            let platform = tmp6.cpuClass;
                            if (!platform) {
                              platform = tmp6.platform;
                            }
                            isMatch3 = obj.test(platform);
                          }
                          if (isMatch3) {
                            obj = /\bWin64; x64\b/i;
                            isMatch3 = !obj.test(tmp4);
                          }
                          isMatch2 = isMatch3;
                        }
                      }
                      if (isMatch2) {
                        isMatch2 = items;
                        str = "32-bit";
                        isMatch2 = items.unshift("32-bit");
                      }
                    }
                    if (!tmp4) {
                      closure_0 = null;
                      tmp4 = null;
                    }
                    obj = { description: tmp4 };
                    isMatch2 = arr15;
                    if (arr15) {
                      let num = 0;
                      isMatch2 = arr15[0];
                    }
                    obj.layout = isMatch2;
                    obj.manufacturer = str;
                    isMatch2 = text1;
                    obj.name = text1;
                    obj.prerelease = isMatch2;
                    obj.product = arr13;
                    obj.ua = tmp4;
                    if (text1) {
                      isMatch2 = version;
                    }
                    obj.version = isMatch2;
                    isMatch2 = str86;
                    if (!str86) {
                      obj = {
                        "Bool(false)": "mn",
                        "Bool(false)": "description",
                        "Null": "Array",
                        toString() {
                                            return "null";
                                          }
                      };
                      isMatch2 = obj;
                    }
                    obj.os = isMatch2;
                    isMatch2 = parse;
                    obj.parse = parse;
                    obj.toString = function toStringPlatform() {
                      return this.description || "";
                    };
                    if (obj.version) {
                      isMatch2 = items;
                      isMatch2 = items.unshift(version);
                    }
                    if (obj.name) {
                      isMatch2 = items;
                      isMatch2 = text1;
                      isMatch2 = items.unshift(text1);
                    }
                    isMatch2 = str86;
                    if (str86) {
                      isMatch2 = text1;
                    }
                    if (isMatch2) {
                      isMatch2 = str86;
                      isMatch2 = globalThis;
                      let _String2 = String;
                      str = String(str86);
                      str = " ";
                      num = 0;
                      isMatch2 = str86 != str.split(" ")[0];
                      if (!isMatch2) {
                        isMatch2 = str86;
                        isMatch2 = text1;
                        isMatch2 = str86 != text1.split(" ")[0] && !arr13;
                      }
                    }
                    if (!isMatch2) {
                      isMatch2 = items;
                      if (items.length) {
                        isMatch2 = items;
                        str = " ";
                        obj.description = items.join(" ");
                      }
                      return obj;
                    } else {
                      isMatch2 = items;
                      isMatch2 = str86;
                      if (arr13) {
                        str = "(";
                        isMatch2 = `(${tmp}`;
                        str = ")";
                        isMatch2 = `(${tmp})`;
                      } else {
                        str = "on ";
                        isMatch2 = `on ${`(${tmp}`}`;
                      }
                      isMatch2 = items.push(isMatch2);
                    }
                  }
                  isMatch2 = str86;
                  if (str86) {
                    obj = /^OS X/;
                    isMatch2 = str86;
                    isMatch2 = obj.test(str86.family);
                  }
                  if (isMatch2) {
                    isMatch2 = text1;
                    isMatch2 = "Chrome" == text1;
                  }
                  if (isMatch2) {
                    isMatch2 = globalThis;
                    let _parseFloat4 = parseFloat;
                    isMatch2 = version;
                    let num99 = 39;
                    isMatch2 = parseFloat(version) >= 39;
                  }
                  if (isMatch2) {
                    isMatch2 = str86;
                    num = 64;
                    str86.architecture = 64;
                  }
                }
                let obj85 = /\bSRWare Iron\b/;
                isMatch2 = text1;
                isMatch2 = obj85.test(text1);
                if (isMatch2) {
                  isMatch2 = version;
                  isMatch2 = !version;
                }
                str = isMatch2;
                if (isMatch2) {
                  version = getVersion("Chrome");
                  str = isMatch2;
                }
              }
              const obj61 = /\b(?:Android|Firefox OS|KaiOS)\b/;
            }
            isMatch2 = text1;
            str = "Maxthon";
            if ("Maxthon" == text1) {
              isMatch2 = version;
              if (version) {
                isMatch2 = version;
                str = ".x";
                version = version.replace(/\.[\d.]+/, ".x");
                items12 = isMatch2;
                let arr13 = str;
                isMatch2 = manufacturer;
              }
            }
            if (obj62.test(str)) {
              if ("Xbox 360" == str) {
                str86 = null;
              }
              isMatch2 = "Xbox 360" == str;
              if (isMatch2) {
                isMatch2 = /\bIEMobile\b/.test(tmp4);
                const obj77 = /\bIEMobile\b/;
              }
              items12 = isMatch2;
              arr13 = str;
              isMatch2 = manufacturer;
              if (isMatch2) {
                isMatch2 = items;
                str = "mobile mode";
                isMatch2 = items.unshift("mobile mode");
                items12 = isMatch2;
                arr13 = str;
                isMatch2 = manufacturer;
              }
            } else {
              isMatch2 = text1;
              if (obj63.test(text1)) {
                isMatch2 = str86;
                str = "Windows CE";
                if ("Windows CE" != str86) {
                  obj = /Mobi/i;
                }
                isMatch2 = text1;
                str = " Mobile";
                text1 = `${tmp29} Mobile`;
                items12 = isMatch2;
                arr13 = str;
                isMatch2 = manufacturer;
              } else {
                isMatch2 = text1;
                if (`${tmp29} Mobile`) {
                  if (!str) {
                    isMatch2 = text1;
                    const obj64 = /Browser|Mobi/;
                  }
                }
              }
              isMatch2 = text1;
              if ("IE" == text1) {
                if (isMatch3) {
                  if (null === obj.external) {
                    isMatch2 = items;
                    str = "platform preview";
                    isMatch2 = items.unshift("platform preview");
                  }
                  items12 = isMatch2;
                  arr13 = str;
                  isMatch2 = manufacturer;
                }
              }
              if (obj65.test(str)) {
                isMatch2 = globalThis;
                const _RegExp4 = RegExp;
                str = " *";
                str = "/([.\\d]+)";
                str = "i";
                isMatch2 = RegExp(`${str.replace(/ +/g, " *")}/([.\d]+)`, "i").exec(tmp4) || 0;
                isMatch2 = isMatch2[1] || version;
                obj45 = isMatch2;
                if (isMatch2) {
                  isMatch2 = obj45;
                  const items14 = [obj45, /BB10/.test(tmp4)];
                  str = "Device Software";
                  isMatch2 = str;
                  str = manufacturer;
                  isMatch2 = items14;
                  if (items14[1]) {
                    closure_2 = null;
                    isMatch2 = null;
                    str = "BlackBerry";
                    str = "BlackBerry";
                  }
                  isMatch2 = items14;
                  str = " ";
                  str86 = `${str} ${tmp[0]}`;
                  version = null;
                  arr13 = isMatch2;
                  isMatch2 = str;
                  items12 = isMatch2;
                  const obj76 = /BB10/;
                }
                const RegExpResult1 = RegExp(`${str.replace(/ +/g, " *")}/([.\d]+)`, "i");
              } else {
                const obj66 = /\bBB10\b/;
              }
              isMatch2 = forOwn;
              const self = this;
              let name = this != forOwn && "Wii" != str;
              if (name) {
                isMatch2 = isMatch3;
                if (isMatch3) {
                  isMatch2 = tmp23;
                }
                if (!isMatch2) {
                  isMatch2 = text1;
                  isMatch2 = /Opera/.test(text1);
                  if (isMatch2) {
                    isMatch2 = /\b(?:MSIE|Firefox)\b/i.test(tmp4);
                    const obj69 = /\b(?:MSIE|Firefox)\b/i;
                  }
                  const obj68 = /Opera/;
                }
                if (!isMatch2) {
                  isMatch2 = text1;
                  isMatch2 = "Firefox" == text1;
                  if (isMatch2) {
                    isMatch2 = str86;
                    isMatch2 = /\bOS X (?:\d+\.){2,}/.test(str86);
                    const obj70 = /\bOS X (?:\d+\.){2,}/;
                  }
                }
                if (!isMatch2) {
                  isMatch2 = text1;
                  isMatch2 = "IE" == text1;
                  if (isMatch2) {
                    isMatch2 = str86;
                    if (str86) {
                      isMatch2 = str86;
                      isMatch2 = !/^Win/.test(str86);
                      const obj71 = /^Win/;
                    }
                    if (isMatch2) {
                      isMatch2 = version;
                      isMatch2 = version > 5.5;
                    }
                    if (!isMatch2) {
                      isMatch2 = str86;
                      isMatch2 = /\bWindows XP\b/.test(str86);
                      if (isMatch2) {
                        isMatch2 = version;
                        isMatch2 = version > 8;
                      }
                      const obj72 = /\bWindows XP\b/;
                    }
                    if (!isMatch2) {
                      isMatch2 = version;
                      isMatch2 = 8 == version;
                      if (isMatch2) {
                        isMatch2 = !/\bTrident\b/.test(tmp4);
                        const obj73 = /\bTrident\b/;
                      }
                    }
                  }
                }
                name = isMatch2;
              }
              if (name) {
                isMatch2 = regex;
                isMatch2 = parse;
                isMatch2 = forOwn;
                isMatch2 = regex;
                str = "";
                str = ";";
                isMatch2 = parse.call(forOwn, `${tmp4.replace(closure_3, "")};`);
                obj45 = isMatch2;
                name = !regex.test(isMatch2);
              }
              if (name) {
                isMatch2 = obj45;
                name = obj45.name;
              }
              items12 = isMatch2;
              arr13 = str;
              isMatch2 = manufacturer;
              if (name) {
                isMatch2 = obj45;
                str = "ing as ";
                const version2 = obj45.version;
                str = "";
                isMatch2 = `ing as ${obj45.name}`;
                if (version2) {
                  isMatch2 = version2;
                  str = " ";
                  str = ` ${tmp}`;
                }
                isMatch2 = isMatch2 + str;
                isMatch2 = regex;
                isMatch2 = text1;
                if (regex.test(text1)) {
                  isMatch2 = /\bIE\b/.test(isMatch2);
                  if (isMatch2) {
                    isMatch2 = str86;
                    str = "Mac OS";
                    isMatch2 = "Mac OS" == str86;
                  }
                  if (isMatch2) {
                    str86 = null;
                  }
                  str = "identify";
                  isMatch2 = `identify${tmp}`;
                  const obj75 = /\bIE\b/;
                } else {
                  str = "mask";
                  isMatch2 = `mask${tmp}`;
                  str = "Opera";
                  if (tmp24) {
                    isMatch2 = format;
                    str = "$1 $2";
                    str = format(tmp24.replace(/([a-z])([A-Z])/g, "$1 $2"));
                  }
                  text1 = str;
                  if (obj74.test(isMatch2)) {
                    str86 = null;
                  }
                  if (!isMatch3) {
                    version = null;
                  }
                  const obj74 = /\bIE\b/;
                }
                items12 = ["r"];
                isMatch2 = items;
                isMatch2 = items.push(isMatch2);
                arr13 = str;
                isMatch2 = manufacturer;
              }
              const obj63 = /^(?:Chrome|IE|Opera)$/;
              const obj65 = /\bBlackBerry\b/;
            }
            const obj62 = /\bXbox\b/i;
          }
          text1 = "Firefox Mobile";
          items12 = isMatch2;
          arr13 = str;
          isMatch2 = manufacturer;
          const obj17 = /\blike iPhone OS\b/;
          const obj47 = /\bWPDesktop\b/i;
        }
        if (obj18.test(tmp50)) {
          if (!text1) {
            text1 = "Safari";
          }
          const match2 = / OS ([\d_]+)/i.exec(tmp4);
          str = "";
          if (match2) {
            isMatch2 = match2;
            str = isMatch2[1];
            str = ".";
            str = " ";
            str = ` ${str.replace(/_/g, ".")}`;
          }
          str = "iOS";
          str86 = `iOS${str}`;
          str = tmp50;
          manufacturer = tmp31;
          const obj38 = / OS ([\d_]+)/i;
        } else {
          str = "Konqueror";
          if ("Konqueror" == text1) {
            if (obj19.test(`iOS${str}`)) {
              str86 = "Kubuntu";
              str = tmp50;
              manufacturer = tmp31;
            }
            const obj19 = /^Linux\b/i;
          }
          if (tmp31) {
            str = "Google";
            if ("Google" != tmp31) {
              if (!obj20.test(text1)) {
                const obj22 = /\bVita\b/;
              } else {
                const obj21 = /\bMobile Safari\b/i;
              }
              const obj20 = /Chrome/;
            }
            text1 = "Android Browser";
            str = "Android";
            if (obj37.test(str86)) {
              str = str86;
            }
            str86 = str;
            str = tmp50;
            manufacturer = tmp31;
            const obj37 = /\bAndroid\b/;
          }
          if (obj23.test(str86)) {
            if (obj24.test(text1)) {
              const obj25 = /\bVersion\//i;
            }
            const obj24 = /^Chrome/;
          }
          if ("Silk" == text1) {
            if (!obj35.test(tmp4)) {
              str86 = "Android";
              str = "desktop mode";
              arr = items.unshift("desktop mode");
            }
            str = tmp50;
            manufacturer = tmp31;
            if (obj36.test(tmp4)) {
              str = "accelerated";
              items.unshift("accelerated");
              str = tmp50;
              manufacturer = tmp31;
            }
            const obj35 = /\bMobi/i;
            const obj36 = /Accelerated *= *true/i;
          } else {
            isMatch2 = text1;
            if ("UC Browser" == text1) {
              if (obj26.test(tmp4)) {
                str = "speed mode";
                items.push("speed mode");
                str = tmp50;
                manufacturer = tmp31;
              }
              const obj26 = /\bUCWEB\b/;
            }
            if ("PaleMoon" == text1) {
              const match3 = /\bFirefox\/([\d.]+)\b/.exec(tmp4);
              tmp46 = match3;
              if (match3) {
                str = "identifying as Firefox ";
                items.push(`identifying as Firefox ${tmp46[1]}`);
                str = tmp50;
                manufacturer = tmp31;
              }
              const obj27 = /\bFirefox\/([\d.]+)\b/;
            }
            if ("Firefox" == text1) {
              const match4 = /\b(Mobile|Tablet|TV)\b/i.exec(tmp4);
              tmp46 = match4;
              if (match4) {
                if (!str86) {
                  str86 = "Firefox OS";
                }
                str = tmp50;
                manufacturer = tmp31;
                if (!tmp50) {
                  closure_2 = tmp88;
                  str = tmp88;
                  manufacturer = tmp31;
                }
              }
              const obj28 = /\b(Mobile|Tablet|TV)\b/i;
            }
            if (text1) {
              let match5 = !/\bMinefield\b/i.test(tmp4);
              if (match5) {
                match5 = /\b(?:Firefox|Safari)\b/.exec(text1);
                const obj30 = /\b(?:Firefox|Safari)\b/;
              }
              tmp46 = match5;
              if (!match5) {
                str = "Electron";
                let tmp71 = "Electron" == text1;
                if (tmp71) {
                  const tmp73 = /\bChrome\/([\d.]+)\b/.exec(tmp4) || 0[1];
                  tmp46 = tmp73;
                  tmp71 = tmp73;
                  const obj31 = /\bChrome\/([\d.]+)\b/;
                  const tmp72 = /\bChrome\/([\d.]+)\b/.exec(tmp4) || 0;
                }
                str = tmp50;
                manufacturer = tmp31;
                if (tmp71) {
                  str = "Chromium ";
                  items.push(`Chromium ${tmp46}`);
                  str = tmp50;
                  manufacturer = tmp31;
                }
              }
              const obj29 = /\bMinefield\b/i;
            }
            let isMatch4 = text1;
            if (text1) {
              isMatch4 = !tmp50;
            }
            if (isMatch4) {
              str = "/";
              isMatch4 = /[\/,]|^[^(]+?\)/.test(tmp4.slice(tmp4.indexOf(`${tmp46}/`) + 8));
              const obj32 = /[\/,]|^[^(]+?\)/;
            }
            if (isMatch4) {
              text1 = null;
            }
            let tmp79 = tmp50;
            if (!tmp50) {
              tmp79 = tmp31;
            }
            if (!tmp79) {
              tmp79 = str86;
            }
            if (tmp79) {
              let isMatch5 = tmp50;
              if (!tmp50) {
                isMatch5 = tmp31;
              }
              if (!isMatch5) {
                isMatch5 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(str86);
                const obj33 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
              }
              tmp79 = isMatch5;
            }
            str = tmp50;
            manufacturer = tmp31;
            if (tmp79) {
              str = " Browser";
              text1 = `${tmp84(/\bAndroid\b/.test(str86) ? str86 : tmp80)} Browser`;
              str = tmp50;
              manufacturer = tmp31;
              const obj34 = /\bAndroid\b/;
            }
            const tmp80 = tmp79;
          }
          const obj23 = /\bAndroid\b/;
        }
        const obj14 = /\bGoogle TV\b/;
        const obj15 = /\bSimulator\b/i;
        const obj18 = /^iP/;
      }
      let tmp41 = tmp31;
      if (tmp31) {
        tmp41 = str87;
      }
      tmp40 = str87;
      if (tmp41) {
        const _RegExp = RegExp;
        const _RegExp2 = RegExp;
        const replaced = str87.replace(RegExp(`^(${closure_11(tmp31)})[-_.\s]`, "i"), `${tmp31} `).replace(RegExp(`^(${closure_11(tmp31)})[-_.]?(\w)`, "i"), `${tmp31} $2`);
        closure_2 = replaced;
        tmp40 = replaced;
        const str94 = str87.replace(RegExp(`^(${closure_11(tmp31)})[-_.\s]`, "i"), `${tmp31} `);
      }
      const obj12 = /\bAndroid\b/;
    }
    [[Class]] = getClassOf(opera);
  }
  const parsed = parse();
  if ("function" === typeof globalThis.define) {
    if ("object" === typeof globalThis.define.amd) {
      if (globalThis.define.amd) {
        self.platform = parsed;
        globalThis.define(() => parsed);
      }
    }
  }
  if (obj[typeof closure_2] && closure_2) {
    if (tmp2) {
      forOwn(parsed, (arg0, arg1) => {
        tmp[arg1] = arg0;
      });
    }
  }
  self.platform = parsed;
};
fn.call(this);
