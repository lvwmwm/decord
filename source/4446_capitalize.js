// Module ID: 4446
// Function ID: 38926
// Name: capitalize
// Dependencies: []

// Module 4446 (capitalize)
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
  const obj = { "Null": null, "Null": null };
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
    let obj = closure_0;
    let text1 = arg0;
    if (arg0) {
      let str = "object";
      text1 = "object" === typeof arg0;
    }
    if (text1) {
      text1 = "String" != getClassOf(arg0);
    }
    let tmp3 = arg0;
    if (text1) {
      obj = arg0;
      closure_0 = null;
      tmp3 = null;
    }
    const tmp5 = obj.navigator || {};
    if (!tmp3) {
      closure_0 = tmp6;
      tmp3 = tmp6;
    }
    if (text1) {
      let isMatch = tmp5.likeChrome;
    } else {
      let obj1 = /\bChrome\b/;
      isMatch = obj1.test(tmp3);
      if (isMatch) {
        let obj2 = /internal|\n/i;
        isMatch = !obj2.test(lib.toString());
      }
    }
    let str3 = "ScriptBridgingProxyObject";
    if (text1) {
      str3 = "Object";
    }
    let str4 = "Environment";
    if (text1) {
      str4 = "Object";
    }
    if (!text1) {
      let str5 = getClassOf(obj.java);
    } else {
      str5 = "JavaPackage";
    }
    let str6 = "RuntimeObject";
    if (text1) {
      str6 = "Object";
    }
    let obj3 = /\bJava/;
    let java = obj3.test(str5);
    if (java) {
      java = obj.java;
    }
    let tmp13 = java;
    if (java) {
      tmp13 = getClassOf(obj.environment) == str4;
    }
    let str7 = "\u03B1";
    if (java) {
      str7 = "a";
    }
    let str8 = "\u03B2";
    if (java) {
      str8 = "b";
    }
    const tmp16 = obj.document || {};
    let opera = obj.operamini;
    if (!opera) {
      opera = obj.opera;
    }
    if (text1) {
      if (opera) {
        [[Class]] = opera.[[Class]];
      }
      let tmp22 = null;
      let tmp23 = null;
      if (tmp19(__Class__)) {
        tmp22 = opera;
        tmp23 = __Class__;
      }
      let items = [];
      let isMatch4 = tmp3 == tmp6;
      let versionResult = isMatch4;
      if (isMatch4) {
        versionResult = tmp22;
      }
      if (versionResult) {
        versionResult = "function" === typeof tmp22.version;
      }
      if (versionResult) {
        versionResult = tmp22.version();
      }
      let joined = versionResult;
      const items1 = [{ borderRadius: "Galaxy S7 Edge", id: "SM-G935" }, "Trident", { borderRadius: "Kindle Fire", id: "(?:Cloud9|Silk-Accelerated)" }, "iCab", , , , , ];
      let str13 = "Presto";
      items1[4] = "Presto";
      items1[5] = "NetFront";
      items1[6] = "Tasman";
      items1[7] = "KHTML";
      items1[8] = "Gecko";
      const tmp27 = function getLayout(items1) {
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
      const items2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, { borderRadius: null, id: 0 }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {}, "SeaMonkey", {}, "Sleipnir", "SlimBrowser", {}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {}, "Opera", {}, "Chrome", { borderRadius: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008088821719080336, id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033539212433587693 }, {}, {}, {}, {}, "Safari"];
      let text2 = function getName(items2) {
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
      const items3 = [{}, "BlackBerry", { borderRadius: null, id: null }, {}, {}, { borderRadius: null, id: "/developers/applications/select/game-identity" }, { borderRadius: "r", id: "isSoftAcked" }, { borderRadius: "pack", id: "postRollDismissTimer" }, { borderRadius: null, id: null }, { borderRadius: 100, id: 50 }, { borderRadius: "<string:1716715520>", id: "<string:1770176230>" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { borderRadius: "status", id: "Text" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { borderRadius: 1, id: 10 }, "Wii", "Xbox One", { borderRadius: true, id: true }, "Xoom"];
      product = getProduct(items3);
      let closure_2 = product;
      obj = { Apple: {}, Archos: {}, Amazon: { 470968434: null, 1614702536: null } };
      obj = { Transformer: 1 };
      obj.Asus = obj;
      obj1 = { Nook: 1 };
      obj.Barnes & Noble = obj1;
      obj2 = { PlayBook: 1 };
      obj.BlackBerry = obj2;
      obj.Google = { "Bool(true)": null, "Bool(true)": null };
      obj3 = { TouchPad: 1 };
      obj.HP = obj3;
      obj.HTC = {};
      obj.LG = {};
      obj.Microsoft = { 0: null, 0: null };
      const obj4 = { Xoom: 1 };
      obj.Motorola = obj4;
      obj.Nintendo = { gap: null, PX_16: null };
      const obj5 = { Lumia: 1 };
      obj.Nokia = obj5;
      obj.Samsung = {};
      obj.Sony = { "Bool(true)": null, 9223372036854775807: null };
      const tmp30 = function getManufacturer(arg0) {
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
      const items4 = ["GUILD_UPDATE", "GUILD_DELETE", "LOGOUT", {}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "];
      let str83 = function getOS(items4) {
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
            const obj = {};
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
      let tmp31 = tmp27;
      if (tmp27) {
        const items5 = [tmp27];
        tmp31 = items5;
      }
      let tmp32 = tmp30;
      if (tmp30) {
        tmp32 = !product;
      }
      if (tmp32) {
        const items6 = [tmp30];
        const product1 = getProduct(items6);
        closure_2 = product1;
        product = product1;
      }
      const match = /\bGoogle TV\b/.exec(product);
      let tmp35 = match;
      let tmp36 = product;
      if (match) {
        const first = tmp35[0];
        closure_2 = first;
        tmp36 = first;
      }
      let tmp39 = tmp36;
      if (obj13.test(tmp3)) {
        let str84 = "";
        if (tmp36) {
          str84 = `${tmp36} `;
        }
        const text = `${str84}Simulator`;
        closure_2 = text;
        tmp39 = text;
      }
      let isMatch1 = "Opera Mini" == text2;
      if (isMatch1) {
        isMatch1 = /\bOPiOS\b/.test(tmp3);
        const obj14 = /\bOPiOS\b/;
      }
      if (isMatch1) {
        let arr = items.push("running in Turbo/Uncompressed mode");
      }
      if ("IE" == text2) {
        if (obj15.test(tmp3)) {
          str = "";
          const tmp89 = parse(tmp3.replace(/like iPhone OS/, ""));
          ({ manufacturer, product } = tmp89);
          closure_2 = product;
          let str89 = product;
        }
        if (!joined) {
          const items7 = [, , qualify(text2)];
          str = "(?:Firefox|Minefield|NetFront)";
          items7[3] = "(?:Firefox|Minefield|NetFront)";
          joined = function getVersion(items7) {
            return callback(items7, (arg0, arg1) => {
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
          }(items7);
        }
        if ("iCab" != tmp31) {
          let isMatch2 = /\bOpera\b/.test(text2);
          if (isMatch2) {
            if (obj37.test(tmp3)) {
              str13 = "Blink";
            }
            isMatch2 = str13;
            const obj37 = /\bOPR\b/;
          }
          str = isMatch2;
          const obj36 = /\bOpera\b/;
        } else {
          const _parseFloat = parseFloat;
          str = "WebKit";
        }
        if (!str) {
          str = /\b(?:Midori|Nook|Safari)\b/i.test(tmp3);
          if (str) {
            str = !/^(?:Trident|EdgeHTML)$/.test(tmp31);
            const obj39 = /^(?:Trident|EdgeHTML)$/;
          }
          if (str) {
            str = "WebKit";
          }
          const obj38 = /\b(?:Midori|Nook|Safari)\b/i;
        }
        if (!str) {
          let isMatch3 = !tmp31;
          if (isMatch3) {
            isMatch3 = /\bMSIE\b/i.test(tmp3);
            const obj40 = /\bMSIE\b/i;
          }
          if (isMatch3) {
            str = "Mac OS";
            str = "Trident";
            if ("Mac OS" == str83) {
              str = "Tasman";
            }
            isMatch3 = str;
          }
          str = isMatch3;
        }
        if (!str) {
          str = "WebKit" == tmp31;
          if (str) {
            text1 = text2;
            str = /\bPlayStation\b(?! Vita\b)/i.test(text2);
            const obj41 = /\bPlayStation\b(?! Vita\b)/i;
          }
          if (str) {
            str = "NetFront";
          }
        }
        let obj42 = str;
        text1 = tmp31;
        if (str) {
          text1 = obj42;
          const items8 = [obj42];
          text1 = items8;
        }
        text1 = text2;
        if ("IE" == text2) {
          text1 = /; *(?:XBLWP|ZuneWP)(\d+)/i.exec(tmp3) || 0;
          text1 = text1[1];
          obj42 = text1;
          if (text1) {
            text1 = text2;
            str = " Mobile";
            text1 = `${tmp28} Mobile`;
            text1 = obj42;
            text1 = obj42;
            if (!obj47.test(obj42)) {
              str = ".x";
              text1 = `${tmp}.x`;
            }
            str = "Windows Phone ";
            text1 = `Windows Phone ${tmp}`;
            text1 = items;
            str = "desktop mode";
            text1 = items.unshift("desktop mode");
            const obj47 = /\+$/;
          }
          const obj43 = /; *(?:XBLWP|ZuneWP)(\d+)/i;
        }
        if (obj44.test(tmp3)) {
          text2 = "IE Mobile";
          str83 = "Windows Phone 8.x";
          text1 = items;
          str = "desktop mode";
          text1 = items.unshift("desktop mode");
          text1 = joined;
          if (!joined) {
            text1 = /\brv:([\d.]+)/.exec(tmp3) || 0;
            joined = text1[1];
            const obj46 = /\brv:([\d.]+)/;
          }
        } else {
          text1 = text2;
          text1 = "IE" != text2 && "Trident" == text1;
          if (text1) {
            text1 = /\brv:([\d.]+)/.exec(tmp3);
            obj42 = text1;
            const obj45 = /\brv:([\d.]+)/;
          }
          if (text1) {
            text1 = text2;
            if (text2) {
              text1 = items;
              text1 = text2;
              str = "identifying as ";
              text1 = joined;
              str = "";
              text1 = `identifying as ${tmp28}`;
              if (joined) {
                text1 = joined;
                str = " ";
                str = ` ${tmp26}`;
              }
              text1 = items.push(text1 + str);
            }
            text2 = "IE";
            text1 = obj42;
            joined = obj42[1];
          }
        }
        text1 = tmp3;
        if (isMatch4) {
          text1 = obj;
          str = "number";
          str = "number";
          if (null != obj) {
            str = typeof obj.global;
          }
          text1 = /^(?:boolean|number|string|undefined)$/.test(str);
          text1 = str;
          if (!text1) {
            str = "object";
            text1 = "object" === str && !obj.global;
          }
          if (!text1) {
            text1 = tmp3;
            if (java) {
              const System = java.lang.System;
              obj42 = System;
              str = "os.arch";
              text1 = str83;
              text1 = System.getProperty("os.arch");
              if (!str83) {
                text1 = obj42;
                str = "os.name";
                str = " ";
                str = "os.version";
                text1 = `${obj42.getProperty("os.name")} `;
                text1 = `${obj42.getProperty("os.name")} ${obj42.getProperty("os.version")}`;
              }
              str83 = text1;
            }
            if (tmp13) {
              text1 = obj;
              str = "ringo/engine";
              const version = obj.require("ringo/engine").version;
              str = ".";
              joined = version.join(".");
              text2 = "RingoJS";
              while (true) {
                text1 = text2;
                let items10 = text1;
                if (`RingoJS`) {
                  break;
                } else {
                  text2 = "Rhino";
                  items10 = text1;
                  // break
                }
                break;
              }
            } else {
              text1 = obj;
              str = "object";
              text1 = "object" === typeof obj.process;
              if (text1) {
                text1 = obj;
                text1 = !obj.process.browser;
              }
              if (text1) {
                text1 = obj;
                const _process = obj.process;
                obj42 = _process;
                text1 = _process;
              }
              items10 = text1;
              if (text1) {
                text1 = obj42;
                if ("object" === typeof obj42.versions) {
                  text1 = obj42;
                  str = "string";
                  if ("string" === typeof obj42.versions.electron) {
                    text1 = items;
                    text1 = obj42;
                    str = "Node ";
                    text1 = items.push(`Node ${obj42.versions.node}`);
                    text2 = "Electron";
                    joined = obj42.versions.electron;
                  } else {
                    text1 = obj42;
                    if ("string" === typeof obj42.versions.nw) {
                      text1 = items;
                      text1 = joined;
                      str = "Chromium ";
                      text1 = obj42;
                      str = "Node ";
                      text1 = items.push(`Chromium ${tmp26}`, `Node ${obj42.versions.node}`);
                      text2 = "NW.js";
                      joined = obj42.versions.nw;
                    }
                  }
                }
                text1 = text2;
                let arch = text1;
                if (!text2) {
                  text2 = "Node.js";
                  text1 = obj42;
                  str83 = obj42.platform;
                  text1 = /[\d.]+/.exec(obj42.version);
                  text1 = null;
                  if (text1) {
                    text1 = text1[0];
                  }
                  joined = text1;
                  arch = obj42.arch;
                  const obj52 = /[\d.]+/;
                }
                text1 = arch;
                items10 = text1;
              }
            }
          } else {
            text1 = getClassOf;
            text1 = obj;
            const runtime = obj.runtime;
            obj42 = runtime;
            if (getClassOf(runtime) == str3) {
              text2 = "Adobe AIR";
              text1 = obj42;
              str83 = obj42.flash.system.Capabilities.os;
              text1 = tmp3;
              items10 = text1;
            } else {
              text1 = getClassOf;
              text1 = obj;
              const phantom = obj.phantom;
              obj42 = phantom;
              if (getClassOf(phantom) == str6) {
                text2 = "PhantomJS";
                text1 = obj42;
                text1 = obj42.version || null;
                obj42 = text1;
                if (text1) {
                  text1 = obj42;
                  str = ".";
                  text1 = `${obj42.major}.${obj42.minor}.${obj42.patch}`;
                }
                joined = text1;
                text1 = tmp3;
                items10 = text1;
              } else {
                if ("number" === typeof tmp16.documentMode) {
                  text1 = /\bTrident\/(\d+)/i.exec(tmp3);
                  obj42 = text1;
                  if (text1) {
                    text1 = joined;
                    const items9 = [joined, tmp16.documentMode];
                    text1 = items9;
                    text1 = obj42;
                    text1 = +obj42[1] + 4;
                    obj42 = text1;
                    if (text1 != items9[1]) {
                      text1 = items;
                      text1 = items9;
                      str = "IE ";
                      str = " mode";
                      text1 = items.push(`IE ${tmp[1]} mode`);
                      if (text1) {
                        str = "";
                        text1[1] = "";
                      }
                      text1 = items9;
                      text1 = obj42;
                      text1[1] = obj42;
                    }
                    text1 = text2;
                    if ("IE" == text2) {
                      text1 = globalThis;
                      const _String = String;
                      text1 = items9;
                      text1 = String(text1[1].toFixed(1));
                      const obj51 = text1[1];
                    } else {
                      text1 = items9;
                      text1 = text1[0];
                    }
                    joined = text1;
                    text1 = tmp3;
                    items10 = text1;
                  }
                  const obj49 = /\bTrident\/(\d+)/i;
                }
                text1 = "number" === typeof tmp16.documentMode;
                if (text1) {
                  text1 = text2;
                  text1 = /^(?:Chrome|Firefox)\b/.test(text2);
                  const obj50 = /^(?:Chrome|Firefox)\b/;
                }
                text1 = tmp3;
                items10 = text1;
                if (text1) {
                  text1 = items;
                  text1 = text2;
                  str = "masking as ";
                  text1 = joined;
                  str = " ";
                  text1 = items.push(`masking as ${tmp28} ${tmp26}`);
                  text2 = "IE";
                  joined = "11.0";
                  items10 = [false];
                  str83 = "Windows";
                  text1 = tmp3;
                }
              }
            }
          }
          text1 = str83;
          if (str83) {
            text1 = format;
            text1 = str83;
            text1 = format(str83);
          }
          str83 = text1;
          text1 = items10;
          const obj48 = /^(?:boolean|number|string|undefined)$/;
        }
        text1 = joined;
        if (joined) {
          text1 = joined;
          text1 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(joined);
          if (!text1) {
            str = ";";
            let appMinorVersion = isMatch4;
            text1 = `${tmp3};`;
            if (isMatch4) {
              appMinorVersion = tmp5.appMinorVersion;
            }
            text1 = /(?:alpha|beta)(?: ?\d)?/i.exec(text1 + appMinorVersion);
            const obj54 = /(?:alpha|beta)(?: ?\d)?/i;
          }
          if (!text1) {
            text1 = /\bMinefield\b/i.test(tmp3) && "a";
            const obj55 = /\bMinefield\b/i;
          }
          obj42 = text1;
          const obj53 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i;
        }
        text1 = null;
        if (text1) {
          text1 = obj42;
          str = "alpha";
          if (obj56.test(obj42)) {
            str = "beta";
          }
          text1 = joined;
          text1 = globalThis;
          const _RegExp = RegExp;
          text1 = obj42;
          str = "\\+?$";
          str = "";
          str = "beta";
          text1 = joined.replace(RegExp(`${obj42}\+?$`), "");
          if ("beta" === str) {
            str7 = str8;
          }
          text1 = obj42;
          text1 = text1 + str7;
          text1 = /\d+\+?/.exec(obj42) || "";
          joined = text1 + text1;
          text1 = str;
          const obj56 = /b/i;
          const obj57 = /\d+\+?/;
        }
        text1 = text2;
        str = "Fennec";
        if ("Fennec" != text2) {
          text1 = text2;
          if ("Firefox" == text2) {
            text1 = str83;
            while (true) {
              let obj75 = /\bAppleWebKit\/([\d.]+\+?)/i;
              let num12 = obj75.exec(tmp3);
              if (num12) {
                break;
              } else {
                num12 = 0;
                // break
              }
              text1 = num12[1];
              str = text1;
              let arr15 = items12;
              if (text1) {
                text1 = globalThis;
                let _parseFloat2 = parseFloat;
                text1 = str;
                str = ".0$1";
                let items11 = [parseFloat(str.replace(/\.(\d)$/, ".0$1")), str];
                text1 = items11;
                text1 = text2;
                if ("Safari" == text2) {
                  text1 = items11;
                  let arr17 = text1[1];
                  let num13 = -1;
                  str = "+";
                  if ("+" == arr17.slice(-1)) {
                    text2 = "WebKit Nightly";
                    text1 = items11;
                    let arr18 = text1[1];
                    let num15 = 0;
                    joined = arr18.slice(0, -1);
                    str = "alpha";
                  }
                  text1 = items11;
                  let obj77 = /\bChrome\/([\d.]+)/i;
                  text1 = obj77.exec(tmp3) || 0;
                  text1[1] = text1[1];
                  text1 = items11;
                  let num16 = 0;
                  let num17 = 537.36;
                  text1 = 537.36 == text1[0];
                  if (text1) {
                    text1 = items11;
                    let num18 = 2;
                    text1 = 537.36 == text1[2];
                  }
                  if (text1) {
                    let _parseFloat3 = parseFloat;
                    text1 = items11;
                    let num19 = 28;
                    text1 = parseFloat(text1[1]) >= 28;
                  }
                  if (text1) {
                    text1 = "WebKit" == items12;
                  }
                  if (text1) {
                    let items12 = ["1409898408042303629"];
                  }
                  if (isMatch4) {
                    if (!isMatch) {
                      text1 = items11;
                      if (items12) {
                        text1 = str;
                        str = ".x";
                        str = "number";
                        if ("number" !== typeof str) {
                          let obj78 = /[.+]/;
                          text1 = str;
                          str = "+";
                          if (obj78.test(str)) {
                            str = "";
                          }
                        }
                        text1 = str + str;
                        str = text1;
                        str = " ";
                        items12[1] = `${tmp} ${tmp}`;
                      }
                      text1 = text2;
                      text1 = "Safari" == text2;
                      if (text1) {
                        text1 = joined;
                        text1 = !joined;
                        if (!text1) {
                          let _parseInt = parseInt;
                          text1 = joined;
                          let num82 = 45;
                          text1 = parseInt(joined) > 45;
                        }
                      }
                      text1 = str;
                      arr15 = items12;
                      if (text1) {
                        joined = str;
                        text1 = str;
                        arr15 = items12;
                      }
                    }
                    if (items12) {
                      str = "like Chrome";
                      items12[1] = "like Chrome";
                    }
                    text1 = items11;
                    text1 = text1[1];
                    if (!text1) {
                      text1 = items11;
                      text1 = text1[0];
                      let num37 = 530;
                      let num38 = 1;
                      if (text1 >= 530) {
                        let num39 = 532;
                        let num40 = 2;
                        if (text1 >= 532) {
                          let num41 = 532.05;
                          let num42 = 3;
                          if (text1 >= 532.05) {
                            let num43 = 533;
                            let num44 = 4;
                            if (text1 >= 533) {
                              let num45 = 534.03;
                              let num46 = 5;
                              if (text1 >= 534.03) {
                                let num47 = 534.07;
                                let num48 = 6;
                                if (text1 >= 534.07) {
                                  let num49 = 534.1;
                                  let num50 = 7;
                                  if (text1 >= 534.1) {
                                    let num51 = 534.13;
                                    let num52 = 8;
                                    if (text1 >= 534.13) {
                                      let num53 = 534.16;
                                      let num54 = 9;
                                      if (text1 >= 534.16) {
                                        let num55 = 534.24;
                                        let num56 = 10;
                                        if (text1 >= 534.24) {
                                          let num57 = 534.3;
                                          let num58 = 11;
                                          if (text1 >= 534.3) {
                                            let num59 = 535.01;
                                            let num60 = 12;
                                            if (text1 >= 535.01) {
                                              let num61 = 535.02;
                                              str = "13+";
                                              if (text1 >= 535.02) {
                                                let num62 = 535.07;
                                                let num63 = 15;
                                                if (text1 >= 535.07) {
                                                  let num64 = 535.11;
                                                  let num65 = 16;
                                                  if (text1 >= 535.11) {
                                                    let num66 = 535.19;
                                                    let num67 = 17;
                                                    if (text1 >= 535.19) {
                                                      let num68 = 536.05;
                                                      let num69 = 18;
                                                      if (text1 >= 536.05) {
                                                        let num70 = 536.1;
                                                        let num71 = 19;
                                                        if (text1 >= 536.1) {
                                                          let num72 = 537.01;
                                                          let num73 = 20;
                                                          if (text1 >= 537.01) {
                                                            let num74 = 537.11;
                                                            str = "21+";
                                                            if (text1 >= 537.11) {
                                                              let num75 = 537.13;
                                                              let num76 = 23;
                                                              if (text1 >= 537.13) {
                                                                let num77 = 537.18;
                                                                let num78 = 24;
                                                                if (text1 >= 537.18) {
                                                                  let num79 = 537.24;
                                                                  let num80 = 25;
                                                                  if (text1 >= 537.24) {
                                                                    let num81 = 26;
                                                                    if (text1 >= 537.36) {
                                                                      str = "Blink";
                                                                      str = "28";
                                                                      if ("Blink" != items12) {
                                                                        str = "27";
                                                                      }
                                                                      num81 = str;
                                                                    }
                                                                    num80 = num81;
                                                                  }
                                                                  num78 = num80;
                                                                }
                                                                num76 = num78;
                                                              }
                                                              str = num76;
                                                            }
                                                            num73 = str;
                                                          }
                                                          num71 = num73;
                                                        }
                                                        num69 = num71;
                                                      }
                                                      num67 = num69;
                                                    }
                                                    num65 = num67;
                                                  }
                                                  num63 = num65;
                                                }
                                                str = num63;
                                              }
                                              num60 = str;
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
                              num44 = num46;
                            }
                            num42 = num44;
                          }
                          num40 = num42;
                        }
                        num38 = num40;
                      }
                      text1 = num38;
                    }
                    str = text1;
                  }
                  if (items12) {
                    str = "like Safari";
                    items12[1] = "like Safari";
                  }
                  text1 = items11;
                  text1 = text1[0];
                  let num20 = 400;
                  let num21 = 1;
                  if (text1 >= 400) {
                    let num22 = 500;
                    let num23 = 2;
                    if (text1 >= 500) {
                      let num24 = 526;
                      let num25 = 3;
                      if (text1 >= 526) {
                        let num26 = 533;
                        let num27 = 4;
                        if (text1 >= 533) {
                          let num28 = 534;
                          str = "4+";
                          if (text1 >= 534) {
                            let num29 = 535;
                            let num30 = 5;
                            if (text1 >= 535) {
                              let num31 = 537;
                              let num32 = 6;
                              if (text1 >= 537) {
                                let num33 = 538;
                                let num34 = 7;
                                if (text1 >= 538) {
                                  let num35 = 601;
                                  let num36 = "8";
                                  if (text1 < 601) {
                                    num36 = 8;
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
                text1 = joined;
                text1 = items11;
                text1 = joined != text1[1];
                if (text1) {
                  text1 = joined;
                  text1 = items11;
                  let obj76 = /\bSafari\/([\d.]+\+?)/i;
                  text1 = obj76.exec(tmp3) || 0;
                  text1 = text1[1];
                  let num14 = 2;
                  text1[2] = text1;
                  text1 = joined != text1;
                }
                str = text1;
                if (!text1) {
                  joined = null;
                  str = text1;
                }
              }
              text1 = text2;
              if ("Opera" == text2) {
                let obj79 = /\bzbov|zvav$/;
                text1 = str83;
                text1 = obj79.exec(str83);
                str = text1;
                if (text1) {
                  text1 = text2;
                  str = " ";
                  text1 = `${tmp28} `;
                  text1 = items;
                  str = "desktop mode";
                  text1 = items.unshift("desktop mode");
                  text1 = str;
                  str = "zvav";
                  if ("zvav" == str) {
                    str = "Mini";
                    text1 = `${tmp28} Mini`;
                    text1 = null;
                  } else {
                    str = "Mobile";
                    text1 = `${tmp28} MiniMobile`;
                  }
                  text1 = str83;
                  text1 = globalThis;
                  let _RegExp3 = RegExp;
                  text1 = str;
                  str = " *";
                  str = "$";
                  str = "";
                  str83 = str83.replace(RegExp(` *${str}$`), "");
                }
              }
              text1 = text2;
              text1 = "Safari" == text2;
              if (text1) {
                let obj80 = /\bChrome\b/;
                text1 = arr15;
                if (arr15) {
                  text1 = arr15[1];
                }
                text1 = obj80.exec(text1);
              }
              if (text1) {
                text1 = items;
                str = "desktop mode";
                text1 = items.unshift("desktop mode");
                text2 = "Chrome Mobile";
                joined = null;
                let obj81 = /\bOS X\b/;
                text1 = str83;
                if (obj81.test(str83)) {
                  str83 = "iOS 4.3+";
                  str = "Apple";
                } else {
                  str83 = null;
                  str = text1;
                }
                text1 = str;
              }
              text1 = joined;
              if (joined) {
                text1 = joined;
                let obj82 = /[\d.]+$/;
                text1 = str83;
                text1 = obj82.exec(str83);
                str = text1;
                let num83 = 0;
                text1 = 0 == joined.indexOf(text1);
              }
              if (text1) {
                text1 = str;
                str = "/";
                str = "-";
                let num84 = -1;
                text1 = tmp3.indexOf(`/${str}-`) > -1;
              }
              if (text1) {
                text1 = trim;
                text1 = str83;
                text1 = str;
                str = "";
                str83 = trim(str83.replace(str, ""));
              }
              text1 = arr15;
              if (arr15) {
                let obj83 = /\b(?:Avant|Nook)\b/;
                text1 = text2;
                text1 = !obj83.test(text2);
              }
              if (text1) {
                let obj84 = /Browser|Lunascape|Maxthon/;
                text1 = text2;
                text1 = obj84.test(text2);
                if (!text1) {
                  text1 = text2;
                  text1 = "Safari" != text2;
                  if (text1) {
                    let obj85 = /^iOS/;
                    text1 = str83;
                    text1 = obj85.test(str83);
                  }
                  if (text1) {
                    let obj86 = /\bSafari\b/;
                    text1 = obj86.test(arr15[1]);
                  }
                }
                if (!text1) {
                  let obj87 = /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/;
                  text1 = text2;
                  text1 = obj87.test(text2) && arr15[1];
                }
              }
              if (text1) {
                text1 = arr15[arr15.length - 1];
                str = text1;
              }
              if (text1) {
                text1 = items;
                text1 = str;
                text1 = items.push(str);
              }
              text1 = items;
              if (items.length) {
                text1 = items;
                str = "; ";
                str = "(";
                let items13 = [];
                str = ")";
                items13[0] = `(${arr.join("; ")})`;
                items = items13;
              }
              if (text1) {
                text1 = arr13;
              }
              if (text1) {
                let num85 = 0;
                text1 = arr13.indexOf(text1) < 0;
              }
              if (text1) {
                text1 = items;
                str = "on ";
                text1 = items.push(`on ${tmp}`);
              }
              if (arr13) {
                text1 = items;
                let obj88 = /^on /;
                str = "on ";
                if (obj88.test(items[items.length - 1])) {
                  str = "";
                }
                text1 = items.push(str + arr13);
              }
              text1 = str83;
              if (str83) {
                let obj89 = / ([\d.+]+)$/;
                text1 = str83;
                text1 = obj89.exec(str83);
                if (text1) {
                  text1 = str83;
                  let num86 = 0;
                  str = "/";
                  text1 = "/" == str83.charAt(str83.length - text1[0].length - 1);
                }
                tmp = text1;
                let obj6 = {};
                let num87 = 32;
                obj6.architecture = 32;
                if (text1) {
                  if (!text1) {
                    text1 = str83;
                    let num88 = 0;
                    str = "";
                    text1 = str83.replace(text1[0], "");
                  }
                  obj6.family = text1;
                  text1 = null;
                  if (text1) {
                    text1 = text1[1];
                  }
                  obj6.version = text1;
                  obj6.toString = function toString() {
                    const version = this.version;
                    let str = "";
                    let str2 = "";
                    if (version) {
                      str2 = str;
                      if (!text1) {
                        str2 = ` ${version}`;
                      }
                    }
                    const sum = this.family + str2;
                    if (64 == this.architecture) {
                      str = " 64-bit";
                    }
                    return sum + str;
                  };
                  str83 = obj6;
                }
                text1 = str83;
              }
              let obj91 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i;
              text1 = obj91.exec(text1);
              if (text1) {
                let obj92 = /\bi686\b/i;
                if (!obj92.test(text1)) {
                  text1 = str83;
                  if (str83) {
                    text1 = str83;
                    let num89 = 64;
                    str83.architecture = 64;
                    str = str83.family;
                    text1 = globalThis;
                    let _RegExp4 = RegExp;
                    str = " *";
                    str = "";
                    str83.family = str.replace(RegExp(` *${tmp}`), "");
                  }
                  text1 = text2;
                  if (text2) {
                    let obj93 = /\bWOW64\b/i;
                    text1 = obj93.test(tmp3);
                    if (!text1) {
                      if (isMatch4) {
                        let obj94 = /\w(?:86|32)$/;
                        let platform = tmp5.cpuClass;
                        if (!platform) {
                          platform = tmp5.platform;
                        }
                        isMatch4 = obj94.test(platform);
                      }
                      if (isMatch4) {
                        let obj95 = /\bWin64; x64\b/i;
                        isMatch4 = !obj95.test(tmp3);
                      }
                      text1 = isMatch4;
                    }
                  }
                  if (text1) {
                    text1 = items;
                    str = "32-bit";
                    text1 = items.unshift("32-bit");
                  }
                }
                if (!tmp3) {
                  closure_0 = null;
                  tmp3 = null;
                }
                let obj7 = { description: tmp3 };
                text1 = arr15;
                if (arr15) {
                  let num92 = 0;
                  text1 = arr15[0];
                }
                obj7.layout = text1;
                obj7.manufacturer = text1;
                text1 = text2;
                obj7.name = text2;
                obj7.prerelease = text1;
                obj7.product = arr13;
                obj7.ua = tmp3;
                if (text2) {
                  text1 = joined;
                }
                obj7.version = text1;
                text1 = str83;
                if (!str83) {
                  let obj8 = {
                    "Null": false,
                    "Null": false,
                    "Null": null,
                    toString() {
                                    return "null";
                                  }
                  };
                  text1 = obj8;
                }
                obj7.os = text1;
                text1 = parse;
                obj7.parse = parse;
                obj7.toString = function toStringPlatform() {
                  return this.description || "";
                };
                if (obj7.version) {
                  text1 = items;
                  text1 = items.unshift(joined);
                }
                if (obj7.name) {
                  text1 = items;
                  text1 = text2;
                  text1 = items.unshift(text2);
                }
                text1 = str83;
                if (str83) {
                  text1 = text2;
                }
                if (text1) {
                  text1 = str83;
                  text1 = globalThis;
                  let _String2 = String;
                  str = String(str83);
                  str = " ";
                  let num93 = 0;
                  text1 = str83 != str.split(" ")[0];
                  if (!text1) {
                    text1 = str83;
                    text1 = text2;
                    text1 = str83 != text2.split(" ")[0] && !arr13;
                  }
                }
                if (!text1) {
                  text1 = items;
                  if (items.length) {
                    text1 = items;
                    str = " ";
                    obj7.description = items.join(" ");
                  }
                  return obj7;
                } else {
                  text1 = items;
                  text1 = str83;
                  if (arr13) {
                    str = "(";
                    text1 = `(${tmp}`;
                    str = ")";
                    text1 = `(${tmp})`;
                  } else {
                    str = "on ";
                    text1 = `on ${`(${tmp}`}`;
                  }
                  text1 = items.push(text1);
                }
              }
              text1 = str83;
              if (str83) {
                let obj96 = /^OS X/;
                text1 = str83;
                text1 = obj96.test(str83.family);
              }
              if (text1) {
                text1 = text2;
                text1 = "Chrome" == text2;
              }
              if (text1) {
                text1 = globalThis;
                let _parseFloat4 = parseFloat;
                text1 = joined;
                let num90 = 39;
                text1 = parseFloat(joined) >= 39;
              }
              if (text1) {
                text1 = str83;
                let num91 = 64;
                str83.architecture = 64;
              }
            }
            const obj58 = /\b(?:Android|Firefox OS)\b/;
          }
          text1 = text2;
          str = "Maxthon";
          if ("Maxthon" == text2) {
            text1 = joined;
            if (joined) {
              text1 = joined;
              str = ".x";
              joined = joined.replace(/\.[\d.]+/, ".x");
              items12 = text1;
              let arr13 = str89;
              text1 = manufacturer;
            }
          }
          if (obj59.test(str89)) {
            if ("Xbox 360" == str89) {
              str83 = null;
            }
            text1 = "Xbox 360" == str89;
            if (text1) {
              text1 = /\bIEMobile\b/.test(tmp3);
              const obj74 = /\bIEMobile\b/;
            }
            items12 = text1;
            arr13 = str89;
            text1 = manufacturer;
            if (text1) {
              text1 = items;
              str = "mobile mode";
              text1 = items.unshift("mobile mode");
              items12 = text1;
              arr13 = str89;
              text1 = manufacturer;
            }
          } else {
            text1 = text2;
            if (obj60.test(text2)) {
              text1 = str83;
              str = "Windows CE";
              if ("Windows CE" != str83) {
                const obj99 = /Mobi/i;
              }
              text1 = text2;
              str = " Mobile";
              text2 = `${tmp28} Mobile`;
              items12 = text1;
              arr13 = str89;
              text1 = manufacturer;
            } else {
              text1 = text2;
              if (`${tmp28} Mobile`) {
                if (!str89) {
                  text1 = text2;
                  const obj61 = /Browser|Mobi/;
                }
              }
            }
            text1 = text2;
            if ("IE" == text2) {
              if (isMatch4) {
                if (null === obj.external) {
                  text1 = items;
                  str = "platform preview";
                  text1 = items.unshift("platform preview");
                }
                items12 = text1;
                arr13 = str89;
                text1 = manufacturer;
              }
            }
            if (obj62.test(str89)) {
              text1 = globalThis;
              const _RegExp2 = RegExp;
              str = " *";
              str = "/([.\\d]+)";
              str = "i";
              text1 = RegExp(`${str89.replace(/ +/g, " *")}/([.\d]+)`, "i").exec(tmp3) || 0;
              text1 = text1[1] || joined;
              obj42 = text1;
              if (text1) {
                text1 = obj42;
                const items14 = [obj42, /BB10/.test(tmp3)];
                str = "Device Software";
                text1 = str89;
                str = manufacturer;
                text1 = items14;
                if (items14[1]) {
                  closure_2 = null;
                  text1 = null;
                  str = "BlackBerry";
                  str = "BlackBerry";
                }
                text1 = items14;
                str = " ";
                str83 = `${str} ${tmp[0]}`;
                joined = null;
                arr13 = text1;
                text1 = str;
                items12 = text1;
                const obj73 = /BB10/;
              }
              const RegExpResult = RegExp(`${str89.replace(/ +/g, " *")}/([.\d]+)`, "i");
            } else {
              const obj63 = /\bBB10\b/;
            }
            text1 = forOwn;
            const self = this;
            let name = this != forOwn && "Wii" != str89;
            if (name) {
              text1 = isMatch4;
              if (isMatch4) {
                text1 = tmp22;
              }
              if (!text1) {
                text1 = text2;
                text1 = /Opera/.test(text2);
                if (text1) {
                  text1 = /\b(?:MSIE|Firefox)\b/i.test(tmp3);
                  const obj66 = /\b(?:MSIE|Firefox)\b/i;
                }
                const obj65 = /Opera/;
              }
              if (!text1) {
                text1 = text2;
                text1 = "Firefox" == text2;
                if (text1) {
                  text1 = str83;
                  text1 = /\bOS X (?:\d+\.){2,}/.test(str83);
                  const obj67 = /\bOS X (?:\d+\.){2,}/;
                }
              }
              if (!text1) {
                text1 = text2;
                text1 = "IE" == text2;
                if (text1) {
                  text1 = str83;
                  if (str83) {
                    text1 = str83;
                    text1 = !/^Win/.test(str83);
                    const obj68 = /^Win/;
                  }
                  if (text1) {
                    text1 = joined;
                    text1 = joined > 5.5;
                  }
                  if (!text1) {
                    text1 = str83;
                    text1 = /\bWindows XP\b/.test(str83);
                    if (text1) {
                      text1 = joined;
                      text1 = joined > 8;
                    }
                    const obj69 = /\bWindows XP\b/;
                  }
                  if (!text1) {
                    text1 = joined;
                    text1 = 8 == joined;
                    if (text1) {
                      text1 = !/\bTrident\b/.test(tmp3);
                      const obj70 = /\bTrident\b/;
                    }
                  }
                }
              }
              name = text1;
            }
            if (name) {
              text1 = regex;
              text1 = parse;
              text1 = forOwn;
              text1 = regex;
              str = "";
              str = ";";
              text1 = parse.call(forOwn, `${tmp3.replace(closure_3, "")};`);
              obj42 = text1;
              name = !regex.test(text1);
            }
            if (name) {
              text1 = obj42;
              name = obj42.name;
            }
            items12 = text1;
            arr13 = str89;
            text1 = manufacturer;
            if (name) {
              text1 = obj42;
              str = "ing as ";
              const version2 = obj42.version;
              str = "";
              text1 = `ing as ${obj42.name}`;
              if (version2) {
                text1 = version2;
                str = " ";
                str = ` ${tmp}`;
              }
              text1 = text1 + str;
              text1 = regex;
              text1 = text2;
              if (regex.test(text2)) {
                text1 = /\bIE\b/.test(text1);
                if (text1) {
                  text1 = str83;
                  str = "Mac OS";
                  text1 = "Mac OS" == str83;
                }
                if (text1) {
                  str83 = null;
                }
                str = "identify";
                text1 = `identify${tmp}`;
                const obj72 = /\bIE\b/;
              } else {
                str = "mask";
                text1 = `mask${tmp}`;
                str = "Opera";
                if (tmp23) {
                  text1 = format;
                  str = "$1 $2";
                  str = format(tmp23.replace(/([a-z])([A-Z])/g, "$1 $2"));
                }
                text2 = str;
                if (obj71.test(text1)) {
                  str83 = null;
                }
                if (!isMatch4) {
                  joined = null;
                }
                const obj71 = /\bIE\b/;
              }
              items12 = ["r"];
              text1 = items;
              text1 = items.push(text1);
              arr13 = str89;
              text1 = manufacturer;
            }
            const obj60 = /^(?:Chrome|IE|Opera)$/;
            const obj62 = /\bBlackBerry\b/;
          }
          const obj59 = /\bXbox\b/i;
        }
        text2 = "Firefox Mobile";
        items12 = text1;
        arr13 = str89;
        text1 = manufacturer;
        const obj15 = /\blike iPhone OS\b/;
        const obj44 = /\bWPDesktop\b/i;
      }
      if (obj16.test(tmp39)) {
        if (!text2) {
          text2 = "Safari";
        }
        const match1 = / OS ([\d_]+)/i.exec(tmp3);
        let str99 = "";
        if (match1) {
          str = tmp86[1];
          str = ".";
          str = " ";
          str99 = ` ${str.replace(/_/g, ".")}`;
        }
        str = "iOS";
        str83 = `iOS${str99}`;
        str89 = tmp39;
        manufacturer = tmp30;
        const obj35 = / OS ([\d_]+)/i;
      } else {
        if ("Konqueror" == text2) {
          if (!obj17.test(`iOS${str99}`)) {
            str83 = "Kubuntu";
            str89 = tmp39;
            manufacturer = tmp30;
          }
          const obj17 = /buntu/i;
        }
        if (tmp30) {
          if ("Google" != tmp30) {
            if (!obj18.test(text2)) {
              const obj20 = /\bVita\b/;
            } else {
              const obj19 = /\bMobile Safari\b/i;
            }
            const obj18 = /Chrome/;
          }
          text2 = "Android Browser";
          let str98 = "Android";
          if (obj34.test(str83)) {
            str98 = str83;
          }
          str83 = str98;
          str89 = tmp39;
          manufacturer = tmp30;
          const obj34 = /\bAndroid\b/;
        }
        if (obj21.test(str83)) {
          if (obj22.test(text2)) {
            const obj23 = /\bVersion\//i;
          }
          const obj22 = /^Chrome/;
        }
        if ("Silk" == text2) {
          if (!obj32.test(tmp3)) {
            str83 = "Android";
            arr = items.unshift("desktop mode");
          }
          str89 = tmp39;
          manufacturer = tmp30;
          if (obj33.test(tmp3)) {
            items.unshift("accelerated");
            str89 = tmp39;
            manufacturer = tmp30;
          }
          const obj32 = /\bMobi/i;
          const obj33 = /Accelerated *= *true/i;
        } else {
          text1 = text2;
          if ("PaleMoon" == text2) {
            const match2 = /\bFirefox\/([\d.]+)\b/.exec(tmp3);
            tmp35 = match2;
            if (match2) {
              items.push(`identifying as Firefox ${tmp35[1]}`);
              str89 = tmp39;
              manufacturer = tmp30;
            }
            const obj24 = /\bFirefox\/([\d.]+)\b/;
          }
          if ("Firefox" == text2) {
            const match3 = /\b(Mobile|Tablet|TV)\b/i.exec(tmp3);
            tmp35 = match3;
            if (match3) {
              if (!str83) {
                str83 = "Firefox OS";
              }
              manufacturer = tmp30;
              str89 = tmp39;
              if (!tmp39) {
                closure_2 = tmp76;
                str89 = tmp76;
                manufacturer = tmp30;
              }
            }
            const obj25 = /\b(Mobile|Tablet|TV)\b/i;
          }
          if (text2) {
            let match4 = !/\bMinefield\b/i.test(tmp3);
            if (match4) {
              match4 = /\b(?:Firefox|Safari)\b/.exec(text2);
              const obj27 = /\b(?:Firefox|Safari)\b/;
            }
            tmp35 = match4;
            if (!match4) {
              let tmp59 = "Electron" == text2;
              if (tmp59) {
                const tmp61 = /\bChrome\/([\d.]+)\b/.exec(tmp3) || 0[1];
                tmp35 = tmp61;
                tmp59 = tmp61;
                const obj28 = /\bChrome\/([\d.]+)\b/;
                const tmp60 = /\bChrome\/([\d.]+)\b/.exec(tmp3) || 0;
              }
              str89 = tmp39;
              manufacturer = tmp30;
              if (tmp59) {
                items.push(`Chromium ${tmp35}`);
                str89 = tmp39;
                manufacturer = tmp30;
              }
            }
            const obj26 = /\bMinefield\b/i;
          }
          let isMatch5 = text2;
          if (text2) {
            isMatch5 = !tmp39;
          }
          if (isMatch5) {
            isMatch5 = /[\/,]|^[^(]+?\)/.test(tmp3.slice(tmp3.indexOf(`${tmp35}/`) + 8));
            const obj29 = /[\/,]|^[^(]+?\)/;
          }
          if (isMatch5) {
            text2 = null;
          }
          let tmp67 = tmp39;
          if (!tmp39) {
            tmp67 = tmp30;
          }
          if (!tmp67) {
            tmp67 = str83;
          }
          if (tmp67) {
            let isMatch6 = tmp39;
            if (!tmp39) {
              isMatch6 = tmp30;
            }
            if (!isMatch6) {
              isMatch6 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(str83);
              const obj30 = /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/;
            }
            tmp67 = isMatch6;
          }
          str89 = tmp39;
          manufacturer = tmp30;
          if (tmp67) {
            text2 = `${tmp72(/\bAndroid\b/.test(str83) ? str83 : tmp68)} Browser`;
            str89 = tmp39;
            manufacturer = tmp30;
            const obj31 = /\bAndroid\b/;
          }
          const tmp68 = tmp67;
        }
        const obj21 = /\bAndroid\b/;
      }
      const obj12 = /\bGoogle TV\b/;
      const obj13 = /\bSimulator\b/i;
      const obj16 = /^iP/;
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
