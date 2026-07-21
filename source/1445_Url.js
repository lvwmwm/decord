// Module ID: 1445
// Function ID: 16817
// Name: Url
// Dependencies: []

// Module 1445 (Url)
class Url {
  constructor() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
    return;
  }
  parse(arg0, arg1, arg2) {
    self = this;
    tmp = typeof arg0;
    if ("string" !== tmp) {
      tmp75 = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp76 = new.target;
      str31 = "Parameter 'url' must be a string, not ";
      tmp77 = new.target;
      typeError = new TypeError("Parameter 'url' must be a string, not " + tmp);
      tmp79 = typeError;
      throw typeError;
    } else {
      str32 = "?";
      index = arg0.indexOf("?");
      str33 = "#";
      num25 = -1;
      str = "#";
      if (-1 !== index) {
        str = "#";
        if (index < arg0.indexOf("#")) {
          str = "?";
        }
      }
      parts = arg0.split(str);
      num = 0;
      str2 = parts[0];
      str3 = "/";
      parts[0] = str2.replace(/\\/g, "/");
      str4 = parts.join(str);
      str5 = str4.trim();
      if (!arg2) {
        num2 = 1;
        if (1 === str4.split("#").length) {
          tmp81 = closure_4;
          match = closure_4.exec(str5);
          if (match) {
            self.path = str5;
            self.href = str5;
            self.pathname = match[1];
            num3 = 2;
            if (match[2]) {
              self.search = match[2];
              if (arg1) {
                tmp3 = arg1;
                tmp4 = arg6;
                obj2 = arg1(arg6[0]);
                str8 = self.search;
                parsed = obj2.parse(require("module_1"));
              } else {
                str7 = self.search;
                parsed = require("module_1");
              }
              self.query = parsed;
            } else {
              if (arg1) {
                str6 = "";
                self.search = "";
                self.query = {};
              }
              return self;
            }
          }
        }
      }
      tmp5 = closure_2;
      match1 = closure_2.exec(str5);
      str9 = str5;
      tmp8 = match1;
      if (match1) {
        str10 = match1[0];
        formatted = str10.toLowerCase();
        self.protocol = formatted;
        str9 = str5.substr(str10.length);
        tmp8 = str10;
        tmp7 = formatted;
      }
      if (!arg2) {
        if (!tmp8) {
          substr7 = str9;
        }
        tmp15 = concat;
        tmp16 = substr7;
        if (!concat[tmp8]) {
          if (tmp10) {
            tmp18 = concat;
            num5 = -1;
            num6 = 0;
            num7 = -1;
            if (0 < concat.length) {
              do {
                tmp19 = closure_7;
                index1 = substr7.indexOf(closure_7[num6]);
                tmp21 = -1 !== index1;
                if (tmp21) {
                  tmp22 = -1 === num5 || index1 < num5;
                  tmp21 = tmp22;
                }
                if (tmp21) {
                  num5 = index1;
                }
                num6 = num6 + 1;
                tmp23 = closure_7;
                num7 = num5;
              } while (num6 < closure_7.length);
            }
            if (-1 === num7) {
              str13 = "@";
              lastIndexOfResult = substr7.lastIndexOf("@");
            } else {
              str12 = "@";
              lastIndexOfResult = substr7.lastIndexOf("@", num7);
            }
            substr1 = substr7;
            if (-1 !== lastIndexOfResult) {
              num8 = 1;
              substr = require("module_0");
              substr1 = substr7.slice(lastIndexOfResult + 1);
              tmp26 = globalThis;
              _decodeURIComponent = decodeURIComponent;
              self.auth = decodeURIComponent(substr);
            }
            tmp27 = concat;
            num9 = -1;
            num10 = 0;
            num11 = -1;
            if (0 < concat.length) {
              do {
                tmp28 = closure_6;
                index2 = substr1.indexOf(closure_6[num10]);
                tmp30 = -1 !== index2;
                if (tmp30) {
                  tmp31 = -1 === num9 || index2 < num9;
                  tmp30 = tmp31;
                }
                if (tmp30) {
                  num9 = index2;
                }
                num10 = num10 + 1;
                tmp32 = closure_6;
                num11 = num9;
              } while (num10 < closure_6.length);
            }
            if (-1 === num11) {
              num11 = substr1.length;
            }
            self.host = require("module_0");
            substr2 = substr1.slice(num11);
            parseHostResult = self.parseHost();
            self.hostname = self.hostname || "";
            str14 = "[";
            tmp35 = "[" === self.hostname[0];
            if (tmp35) {
              num12 = 1;
              str15 = "]";
              tmp35 = "]" === self.hostname[self.hostname.length - 1];
            }
            tmp36 = substr2;
            if (!tmp35) {
              str16 = self.hostname;
              parts1 = str16.split(/\./);
              length = parts1.length;
              str17 = "";
              str18 = "x";
              num13 = 127;
              num14 = 0;
              tmp36 = substr2;
              if (0 < length) {
                while (true) {
                  str19 = parts1[num14];
                  tmp40 = tmp37;
                  tmp41 = tmp38;
                  tmp42 = tmp39;
                  if (str19) {
                    tmp43 = concat;
                    tmp40 = tmp37;
                    tmp41 = tmp38;
                    tmp42 = tmp39;
                    if (!str19.match(concat)) {
                      length2 = str19.length;
                      str20 = "";
                      num15 = 0;
                      str21 = "";
                      num16 = 0;
                      if (0 < length2) {
                        do {
                          tmp44 = num15;
                          if (str19.charCodeAt(num15) > 127) {
                            text = `x`;
                          } else {
                            text = `${str19[num15]}`;
                          }
                          num15 = num15 + 1;
                          str20 = text;
                          str21 = text;
                          num16 = num15;
                        } while (num15 < length2);
                      }
                      tmp46 = concat;
                      tmp40 = str21;
                      tmp41 = num16;
                      tmp42 = length2;
                      if (!str21.match(concat)) {
                        break;
                      }
                    }
                  }
                  num14 = num14 + 1;
                  tmp37 = tmp40;
                  tmp38 = tmp41;
                  tmp39 = tmp42;
                  tmp36 = substr2;
                }
                substr3 = require("module_0");
                num17 = 1;
                substr4 = parts1.slice(num14 + 1);
                tmp47 = concat;
                match2 = str19.match(concat);
                if (match2) {
                  arr = substr3.push(match2[1]);
                  num18 = 2;
                  arr1 = substr4.unshift(match2[2]);
                }
                text1 = substr2;
                if (substr4.length) {
                  str22 = ".";
                  text1 = `/${arr5.join(".")}${tmp33}`;
                }
                str23 = ".";
                self.hostname = substr3.join(".");
                tmp36 = text1;
              }
            }
            num19 = 255;
            if (self.hostname.length > 255) {
              str25 = "";
              self.hostname = "";
            } else {
              str24 = self.hostname;
              self.hostname = str24.toLowerCase();
            }
            if (!tmp35) {
              tmp52 = arg1;
              tmp53 = arg6;
              num20 = 1;
              obj3 = arg1(arg6[1]);
              self.hostname = obj3.toASCII(self.hostname);
            }
            str26 = "";
            str27 = "";
            if (self.port) {
              str28 = ":";
              str27 = `:${self.port}`;
            }
            tmp54 = self.hostname || "";
            self.host = tmp54 + str27;
            self.href = self.href + self.host;
            tmp16 = tmp36;
            if (tmp35) {
              str29 = self.hostname;
              num21 = 2;
              num22 = 1;
              self.hostname = require("module_1");
              text2 = tmp36;
              if ("/" !== tmp36[0]) {
                text2 = `/${tmp36}`;
              }
              tmp16 = text2;
            }
          } else {
            tmp16 = substr7;
            if (tmp8) {
              tmp17 = concat;
              tmp16 = substr7;
            }
          }
        }
        tmp56 = concat;
        arr6 = tmp16;
        if (!concat[tmp7]) {
          tmp57 = closure_5;
          length3 = closure_5.length;
          tmp58 = globalThis;
          arr7 = tmp16;
          num23 = 0;
          arr6 = tmp16;
          if (0 < length3) {
            do {
              tmp59 = closure_5;
              tmp60 = closure_5[num23];
              tmp61 = arr7;
              joined = arr7;
              if (-1 !== arr7.indexOf(tmp60)) {
                _encodeURIComponent = encodeURIComponent;
                encodeURIComponentResult = encodeURIComponent(tmp60);
                if (encodeURIComponentResult === tmp60) {
                  _escape = escape;
                  encodeURIComponentResult = escape(tmp60);
                }
                parts2 = arr7.split(tmp60);
                joined = parts2.join(encodeURIComponentResult);
                tmp64 = encodeURIComponentResult;
              }
              num23 = num23 + 1;
              arr7 = joined;
              arr6 = joined;
            } while (num23 < length3);
          }
        }
        index3 = arr6.indexOf("#");
        tmp66 = arr6;
        substr5 = arr6;
        if (-1 !== index3) {
          self.hash = arr6.substr(index3);
          substr5 = require("module_0");
        }
        index4 = substr5.indexOf("?");
        if (-1 !== index4) {
          self.search = substr5.substr(index4);
          num24 = 1;
          self.query = substr5.substr(index4 + 1);
          if (arg1) {
            tmp69 = arg1;
            tmp70 = arg6;
            obj5 = arg1(arg6[0]);
            self.query = obj5.parse(self.query);
          }
          substr6 = require("module_0");
        } else {
          substr6 = substr5;
          if (arg1) {
            str30 = "";
            self.search = "";
            self.query = {};
            substr6 = substr5;
          }
        }
        if (substr6) {
          self.pathname = substr6;
        }
        tmp71 = concat;
        tmp72 = concat[tmp7] && self.hostname && !self.pathname;
        if (tmp72) {
          self.pathname = "/";
        }
        if (self.pathname) {
          tmp73 = self.pathname || "";
          tmp74 = self.search || "";
          self.path = tmp73 + tmp74;
        }
        self.href = self.format();
        return self;
      }
      num4 = 2;
      str11 = "//";
      tmp11 = "//" === require("module_0");
      tmp12 = !tmp11;
      if (tmp11) {
        tmp13 = tmp8;
        if (tmp8) {
          tmp14 = concat;
          tmp13 = concat[tmp8];
        }
        tmp12 = tmp13;
      }
      substr7 = str9;
      tmp10 = tmp11;
      if (!tmp12) {
        substr7 = require("module_2");
        flag = true;
        self.slashes = true;
        tmp10 = tmp11;
      }
    }
    return;
  }
  format() {
    self = this;
    tmp = this.auth || "";
    text = tmp;
    if (tmp) {
      tmp3 = globalThis;
      _encodeURIComponent = encodeURIComponent;
      str = encodeURIComponent(tmp);
      str2 = ":";
      str3 = "@";
      text = `${str.replace(/%3A/i, ":")}@`;
    }
    str4 = self.protocol || "";
    str5 = self.pathname || "";
    str6 = self.hash || "";
    if (self.host) {
      flag = text + self.host;
    } else {
      flag = false;
      if (self.hostname) {
        hostname = self.hostname;
        str7 = ":";
        num = -1;
        if (-1 === hostname.indexOf(":")) {
          hostname = self.hostname;
        } else {
          str8 = "[";
          str9 = "]";
          hostname = `${"[" + self.hostname}]`;
        }
        sum = text + hostname;
        text1 = sum;
        if (self.port) {
          text1 = `${tmp4}:${self.port}`;
        }
        flag = text1;
      }
    }
    length = self.query;
    if (length) {
      str10 = "object";
      length = "object" === typeof self.query;
    }
    if (length) {
      tmp6 = globalThis;
      _Object = Object;
      length = Object.keys(self.query).length;
    }
    str11 = "";
    if (length) {
      tmp7 = arg1;
      tmp8 = arg6;
      num2 = 0;
      obj = arg1(arg6[0]);
      str11 = obj.stringify(self.query, {});
    }
    str12 = self.search;
    if (!str12) {
      text2 = str11;
      if (str11) {
        str13 = "?";
        text2 = `?${str11}`;
      }
      str12 = text2;
    }
    if (!str12) {
      str12 = "";
    }
    tmp10 = str4;
    if (str4) {
      num3 = -1;
      str14 = ":";
      tmp10 = ":" !== require("module_4294967295");
    }
    text3 = str4;
    if (tmp10) {
      str15 = ":";
      text3 = `${str4}:`;
    }
    if (!self.slashes) {
      if (!text3) {
        flag2 = false;
        tmp15 = str6;
        if (str6) {
          num5 = 0;
          str21 = "#";
          tmp15 = "#" !== require("module_0");
        }
        text4 = str6;
        if (tmp15) {
          str22 = "#";
          text4 = `#${str6}`;
        }
        tmp17 = str12;
        if (str12) {
          num6 = 0;
          str23 = "?";
          tmp17 = "?" !== require("module_0");
        }
        str24 = str12;
        if (tmp17) {
          str25 = "?";
          str24 = `?${str12}`;
        }
        sum1 = text3 + str17;
        str26 = "#";
        str27 = "%23";
        sum2 = sum1 + str16.replace(/[?#]/g, (arg0) => encodeURIComponent(arg0));
        return sum2 + str24.replace("#", "%23") + text4;
      } else {
        tmp12 = concat;
      }
      str16 = str5;
      str17 = flag;
      if (!flag) {
        str16 = str5;
        str17 = "";
      }
    }
    str18 = flag;
    if (!flag) {
      str18 = "";
    }
    text5 = `//${str18}`;
    tmp14 = str5;
    if (str5) {
      num4 = 0;
      str19 = "/";
      tmp14 = "/" !== require("module_0");
    }
    str16 = str5;
    str17 = text5;
    if (tmp14) {
      str20 = "/";
      str16 = `/${str5}`;
      str17 = text5;
    }
    return;
  }
  resolve(arg0) {
    obj = this.resolveObject(urlParse(arg0, false, true));
    return obj.format();
  }
  resolveObject(arg0) {
    self = this;
    url = arg0;
    if ("string" === typeof arg0) {
      tmp = Url;
      prototype = Url.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      obj = new Url();
      tmp4 = obj;
      flag = false;
      flag2 = true;
      parsed = obj.parse(arg0, false, true);
      url = obj;
    }
    url2 = new Url();
    keys = Object.keys(self);
    num = 0;
    if (0 < keys.length) {
      do {
        tmp6 = keys[num];
        url2[tmp6] = self[tmp6];
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    url2.hash = url.hash;
    if ("" === url.href) {
      url2.href = url2.format();
      return url2;
    } else {
      if (url.slashes) {
        if (!url.protocol) {
          _Object = Object;
          keys1 = Object.keys(url);
          str = "protocol";
          for (let num2 = 0; num2 < keys1.length; num2 = num2 + 1) {
            tmp7 = keys1[num2];
            if ("protocol" !== tmp7) {
              url2[tmp7] = url[tmp7];
            }
          }
          tmp8 = concat;
          tmp9 = concat[url2.protocol] && url2.hostname && !url2.pathname;
          if (tmp9) {
            str2 = "/";
            url2.pathname = "/";
            url2.path = url2.pathname;
          }
          url2.href = url2.format();
          return url2;
        }
      }
      if (url.protocol) {
        if (url.protocol !== url2.protocol) {
          tmp49 = concat;
          if (concat[url.protocol]) {
            url2.protocol = url.protocol;
            if (!url.host) {
              tmp51 = concat;
              if (!concat[url.protocol]) {
                str35 = url.pathname || "";
                str36 = "/";
                parts = str35.split("/");
                if (parts.length) {
                  arr = parts.shift();
                  url.host = arr;
                  if (!arr) {
                    while (parts.length) {
                      arr1 = parts.shift();
                      url.host = arr1;
                      if (arr1) {
                        break;
                      }
                    }
                  }
                }
                if (!url.host) {
                  url.host = "";
                }
                if (!url.hostname) {
                  url.hostname = "";
                }
                if ("" !== parts[0]) {
                  arr2 = parts.unshift("");
                }
                num9 = 2;
                if (parts.length < 2) {
                  arr3 = parts.unshift("");
                }
                url2.pathname = parts.join("/");
              }
              ({ search: url2.search, query: url2.query } = url);
              url2.host = url.host || "";
              url2.auth = url.auth;
              url2.hostname = url.hostname || url.host;
              url2.port = url.port;
              if (url2.pathname) {
                tmp56 = url2.pathname || "";
                tmp57 = url2.search || "";
                url2.path = tmp56 + tmp57;
              }
              url2.slashes = url2.slashes || url.slashes;
              url2.href = url2.format();
              return url2;
            }
            url2.pathname = url.pathname;
          } else {
            _Object2 = Object;
            keys2 = Object.keys(url);
            num8 = 0;
            if (0 < keys2.length) {
              do {
                tmp50 = keys2[num8];
                url2[tmp50] = url[tmp50];
                num8 = num8 + 1;
                length3 = keys2.length;
              } while (num8 < length3);
            }
            url2.href = url2.format();
            return url2;
          }
        }
      }
      pathname = url2.pathname;
      if (pathname) {
        str3 = url2.pathname;
        str4 = "/";
        pathname = "/" === require("module_0");
      }
      host = url.host;
      if (!host) {
        pathname2 = url.pathname;
        if (pathname2) {
          str5 = url.pathname;
          str6 = "/";
          pathname2 = "/" === require("module_0");
        }
        host = pathname2;
      }
      tmp10 = host;
      if (!host) {
        tmp10 = pathname;
      }
      if (!tmp10) {
        tmp11 = url2.host && url.pathname;
        tmp10 = tmp11;
      }
      pathname = url2.pathname;
      if (pathname) {
        str7 = url2.pathname;
        str8 = "/";
        pathname = str7.split("/");
      }
      if (!pathname) {
        pathname = [];
      }
      pathname1 = url.pathname;
      if (pathname1) {
        str9 = url.pathname;
        str10 = "/";
        pathname1 = str9.split("/");
      }
      if (!pathname1) {
        pathname1 = [];
      }
      protocol = url2.protocol;
      if (protocol) {
        tmp12 = concat;
        protocol = !concat[url2.protocol];
      }
      tmp13 = tmp10;
      if (protocol) {
        url2.hostname = "";
        tmp14 = null;
        url2.port = null;
        if (url2.host) {
          if ("" === pathname[0]) {
            pathname[0] = url2.host;
          } else {
            arr4 = pathname.unshift(url2.host);
          }
        }
        url2.host = "";
        if (!url.protocol) {
          tmp17 = tmp10;
          if (tmp10) {
            tmp18 = "" === pathname1[0] || "" === pathname[0];
            tmp17 = tmp18;
          }
          tmp13 = tmp17;
        } else {
          url.hostname = null;
          url.port = null;
          if (!url.host) {
            url.host = null;
          } else if ("" !== pathname1[0]) {
            arr5 = pathname1.unshift(url.host);
          }
          pathname1[0] = url.host;
        }
      }
      if (host) {
        if (!url.host) {
          if ("" !== url.host) {
            host3 = url2.host;
          }
          url2.host = host3;
          if (!url.hostname) {
            if ("" !== url.hostname) {
              hostname = url2.hostname;
            }
            url2.hostname = hostname;
            ({ search: url2.search, query: url2.query } = url);
            tmp23 = pathname1;
          }
          hostname = url.hostname;
        }
        host3 = url.host;
      } else {
        if (pathname1.length) {
          items = pathname;
          if (!pathname) {
            items = [];
          }
          arr6 = items.pop();
          combined = items.concat(pathname1);
          ({ search: url2.search, query: url2.query } = url);
        } else {
          tmp19 = null;
          combined = pathname;
          if (null != url.search) {
            if (protocol) {
              url2.host = pathname.shift();
              ({ host: url2.hostname, host: host2 } = url2);
              if (host2) {
                host = url2.host;
                str11 = "@";
                host2 = host.indexOf("@") > 0;
              }
              tmp20 = !host2;
              parts1 = !tmp20;
              if (!tmp20) {
                str12 = url2.host;
                str13 = "@";
                parts1 = str12.split("@");
              }
              if (parts1) {
                url2.auth = parts1.shift();
                url2.hostname = parts1.shift();
                url2.host = url2.hostname;
              }
            }
            ({ search: url2.search, query: url2.query } = url);
            tmp21 = null === url2.pathname && null === url2.search;
            if (!tmp21) {
              str14 = "";
              if (url2.pathname) {
                str14 = url2.pathname;
              }
              str15 = "";
              if (url2.search) {
                str15 = url2.search;
              }
              url2.path = str14 + str15;
            }
            url2.href = url2.format();
            return url2;
          }
        }
        if (combined.length) {
          num3 = -1;
          first = require("module_4294967295")[0];
          tmp26 = url2.host || url.host;
          if (!tmp26) {
            num4 = 1;
            tmp26 = combined.length > 1;
          }
          if (tmp26) {
            str17 = ".";
            tmp27 = "." === first;
            if (!tmp27) {
              str18 = "..";
              tmp27 = ".." === first;
            }
            tmp26 = tmp27;
          }
          if (!tmp26) {
            tmp26 = "" === first;
          }
          length2 = combined.length;
          num5 = 1;
          str19 = "..";
          str20 = ".";
          num6 = 0;
          num7 = 0;
          while (length2 >= 0) {
            tmp28 = combined[length2];
            if ("." === tmp28) {
              spliceResult = combined.splice(length2, 1);
              sum = num6;
            } else if (".." === tmp28) {
              spliceResult1 = combined.splice(length2, 1);
              sum = num6 + 1;
            } else {
              sum = num6;
              if (num6) {
                spliceResult2 = combined.splice(length2, 1);
                sum = num6 - 1;
              }
            }
            length2 = length2 - 1;
            num6 = sum;
            num7 = sum;
          }
          if (!tmp13) {
            if (!tmp10) {
              tmp33 = +num7;
              diff = tmp33 - 1;
              if (tmp33) {
                do {
                  arr7 = combined.unshift("..");
                  tmp36 = +diff;
                  diff = tmp36 - 1;
                } while (tmp36);
              }
            }
          }
          tmp37 = !tmp13 || "" === combined[0];
          if (!tmp37) {
            first1 = combined[0];
            if (first1) {
              str21 = combined[0];
              str22 = "/";
              first1 = "/" === require("module_0");
            }
            tmp37 = first1;
          }
          if (!tmp37) {
            arr8 = combined.unshift("");
          }
          if (tmp26) {
            str23 = "/";
            str24 = combined.join("/");
            tmp26 = "/" !== require("module_4294967295");
          }
          if (tmp26) {
            arr9 = combined.push("");
          }
          tmp41 = "" === combined[0];
          if (!tmp41) {
            first2 = combined[0];
            if (first2) {
              str25 = combined[0];
              str26 = "/";
              first2 = "/" === require("module_0");
            }
            tmp41 = first2;
          }
          if (protocol) {
            str27 = "";
            if (!tmp41) {
              str28 = "";
              if (combined.length) {
                str28 = combined.shift();
              }
              str27 = str28;
            }
            url2.hostname = str27;
            ({ hostname: url2.host, host: host4 } = url2);
            if (host4) {
              host1 = url2.host;
              str29 = "@";
              host4 = host1.indexOf("@") > 0;
            }
            tmp43 = !host4;
            parts2 = !tmp43;
            if (!tmp43) {
              str30 = url2.host;
              str31 = "@";
              parts2 = str30.split("@");
            }
            if (parts2) {
              url2.auth = parts2.shift();
              url2.hostname = parts2.shift();
              url2.host = url2.hostname;
            }
          }
          if (!tmp13) {
            tmp44 = url2.host && combined.length;
            tmp13 = tmp44;
          }
          if (tmp13) {
            tmp13 = !tmp41;
          }
          if (tmp13) {
            arr10 = combined.unshift("");
          }
          if (combined.length > 0) {
            str32 = "/";
            url2.pathname = combined.join("/");
          } else {
            tmp46 = null;
            url2.pathname = null;
            url2.path = null;
          }
          tmp47 = null;
          tmp48 = null === url2.pathname && null === url2.search;
          if (!tmp48) {
            str33 = "";
            if (url2.pathname) {
              str33 = url2.pathname;
            }
            str34 = "";
            if (url2.search) {
              str34 = url2.search;
            }
            url2.path = str33 + str34;
          }
          url2.auth = url.auth || url2.auth;
          url2.slashes = url2.slashes || url.slashes;
          url2.href = url2.format();
          return url2;
        } else {
          tmp24 = null;
          url2.pathname = null;
          if (url2.search) {
            str16 = "/";
            url2.path = `/${url2.search}`;
          } else {
            url2.path = null;
          }
          url2.href = url2.format();
          return url2;
        }
      }
    }
    return;
  }
  parseHost() {
    self = this;
    str = this.host;
    match = closure_3.exec(str);
    substr = str;
    if (match) {
      num = 0;
      str2 = match[0];
      str3 = ":";
      if (":" !== str2) {
        num2 = 1;
        self.port = require("module_1");
      }
      substr = require("module_0");
    }
    if (substr) {
      self.hostname = substr;
    }
    return;
  }
}
function urlParse(arg0, arg1, arg2) {
  if (arg0) {
    if ("object" === typeof arg0) {
      if (arg0 instanceof Url) {
        return arg0;
      }
    }
  }
  const obj = new Url();
  const parsed = obj.parse(arg0, arg1, arg2);
  return obj;
}
let closure_2 = /^([a-z0-9.+-]+:)/i;
let closure_3 = /:[0-9]*$/;
let closure_4 = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
const items = [null, "borderRadius", null, null, null, null];
const items1 = ["ix8XIj"];
const combined = items1.concat(items.concat([]));
const items2 = [];
let closure_6 = items2.concat(combined);
let closure_7 = [true, true, true];
let closure_8 = /^[+a-z0-9A-Z_-]{0,63}$/;
let closure_9 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
let closure_10 = { 1548899425: null, 1637965184: null };
let closure_11 = { 1548899425: null, 1637965184: null };
let closure_12 = { 1449264132: null, 881706323: null, 1632996867: null, 55399030: null, 1113888267: null, 1369504516: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001153953053535477, 73498013: 0.00000000000000000000000000000000000000000000004689095813645179, 1652399441: -44890842246276977000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1615985127: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002407817175865411, -1471061565: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001006140661564316 };
arg5.parse = urlParse;
arg5.resolve = function urlResolve(arg0, arg1) {
  return urlParse(arg0, false, true).resolve(arg1);
};
arg5.resolveObject = function urlResolveObject(arg0, arg1) {
  let object = arg1;
  if (arg0) {
    object = urlParse(arg0, false, true).resolveObject(arg1);
    const obj = urlParse(arg0, false, true);
  }
  return object;
};
arg5.format = function urlFormat(arg0) {
  let obj = arg0;
  if ("string" === typeof arg0) {
    obj = urlParse(arg0);
  }
  if (obj instanceof Url) {
    let formatResult = obj.format();
  } else {
    const format = Url.prototype.format;
    formatResult = format.call(obj);
  }
  return formatResult;
};
arg5.Url = Url;
