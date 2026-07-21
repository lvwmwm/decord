// Module ID: 4668
// Function ID: 40538
// Name: noConflict
// Dependencies: []

// Module 4668 (noConflict)
const fn = function() {
  const arg4 = this;
  let arg5 = this.humanize;
  const obj = {};
  if (undefined !== arg5) {
    let _exports = undefined !== arg4;
    if (_exports) {
      _exports = arg4.exports;
    }
    if (_exports) {
      arg4.exports = obj;
      arg5 = obj;
    }
    arg5.humanize = obj;
  } else {
    let amd = "function" === typeof globalThis.define;
    if (amd) {
      amd = globalThis.define.amd;
    }
    if (amd) {
      globalThis.define("humanize", () => obj);
    }
    tmp.humanize = obj;
  }
  obj.noConflict = function() {
    self.humanize = obj;
    return this;
  };
  obj.pad = (arg0, arg1, str) => {
    let length;
    let length2;
    const text = `${arg0}`;
    str = " ";
    if (str) {
      if (str.length > 1) {
        str = str.charAt(0);
      }
    }
    let str2 = "right";
    if (undefined === arg3) {
      str2 = "left";
    }
    if ("right" === str2) {
      let tmp3 = text;
      let tmp2 = text;
      if (text.length < arg1) {
        do {
          let sum = tmp3 + str;
          tmp3 = sum;
          tmp2 = sum;
          length2 = sum.length;
        } while (length2 < arg1);
      }
    } else {
      let tmp = text;
      tmp2 = text;
      if (text.length < arg1) {
        do {
          let sum1 = str + tmp;
          tmp = sum1;
          tmp2 = sum1;
          length = sum1.length;
        } while (length < arg1);
      }
    }
    return tmp2;
  };
  obj.time = () => new Date().getTime() / 1000;
  let closure_3 = [true, true, true, true, true, true, true, true, true, true, true, true, true];
  let closure_4 = [];
  obj.date = (str) => {
    if (undefined === arg1) {
      const _Date3 = Date;
      let date = new Date();
    } else {
      const _Date = Date;
      const _Date2 = Date;
      if (arg1 instanceof Date) {
        const prototype2 = _Date2.prototype;
        date = new _Date2(arg1);
      } else {
        const prototype = _Date2.prototype;
        date = new _Date2(1000 * arg1);
      }
    }
    const self = date;
    const tmp11 = /\\?([a-z])/gi;
    function formatChrCb(arg0, arg1) {
      let tmp = arg1;
      if (closure_5[arg0]) {
        tmp = closure_5[arg0]();
      }
      return tmp;
    }
    let closure_3 = [null, null, null, null, null, null, null];
    let closure_4 = [];
    let closure_5 = {
      d() {
        return formatChrCb.pad(closure_5.j(), 2, "0");
      },
      D() {
        return closure_5.l().slice(0, 3);
      },
      j() {
        return date.getDate();
      },
      l() {
        return closure_3[closure_5.w(closure_5)];
      },
      N() {
        return closure_5.w() || 7;
      },
      S() {
        const jResult = closure_5.j();
        if (jResult <= 4) {
          let str = { -349215301: 2188273620582311800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2115606444: -0.0000000000000071081501714814, -1437386140: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003483452624154144 }[jResult % 10] || "th";
          const tmp2 = { -349215301: 2188273620582311800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2115606444: -0.0000000000000071081501714814, -1437386140: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003483452624154144 }[jResult % 10] || "th";
        } else {
          str = "th";
        }
        return str;
      },
      w() {
        return date.getDay();
      },
      z() {
        if (closure_5.L()) {
          let tmp3 = closure_4[closure_5.n(closure_5)];
        } else {
          tmp3 = closure_3[closure_5.n(closure_5)];
        }
        return tmp3 + closure_5.j() - 1;
      },
      W() {
        const sum = closure_5.z() - closure_5.N() + 1.5;
        let num = 0;
        const sum1 = 1 + Math.floor(Math.abs(sum) / 7);
        if (sum % 7 > 3.5) {
          num = 1;
        }
        return formatChrCb.pad(sum1 + num, 2, "0");
      },
      F() {
        return closure_4[closure_0.getMonth(closure_0)];
      },
      m() {
        return formatChrCb.pad(closure_5.n(), 2, "0");
      },
      M() {
        return closure_5.F().slice(0, 3);
      },
      n() {
        return date.getMonth() + 1;
      },
      t() {
        const YResult = closure_5.Y();
        return new Date(closure_5.Y(), closure_5.n(), 0).getDate();
      },
      L() {
        let num = 0;
        if (1 === date.getMonth()) {
          num = 1;
        }
        return num;
      },
      o() {
        const nResult = closure_5.n();
        const WResult = closure_5.W();
        if (12 !== nResult) {
          let tmp4 = 1 === nResult;
          if (tmp4) {
            tmp4 = WResult > 9;
          }
          let num2 = tmp4;
        } else {
          num2 = -1;
        }
        return closure_5.Y() + num2;
      },
      Y() {
        return date.getFullYear();
      },
      y() {
        return String(closure_5.Y()).slice(-2);
      },
      a() {
        let str = "am";
        if (date.getHours() > 11) {
          str = "pm";
        }
        return str;
      },
      A() {
        return closure_5.a().toUpperCase();
      },
      B() {
        const result = date.getTime() / 1000;
        const sum = result % 86400 + 3600;
        let sum1 = sum;
        if (sum < 0) {
          sum1 = sum + 86400;
        }
        const result1 = sum1 / 86.4 % 1000;
        if (result < 0) {
          const _Math2 = Math;
          let rounded = Math.ceil(result1);
        } else {
          const _Math = Math;
          rounded = Math.floor(result1);
        }
        return rounded;
      },
      g() {
        return closure_5.G() % 12 || 12;
      },
      G() {
        return date.getHours();
      },
      h() {
        return formatChrCb.pad(closure_5.g(), 2, "0");
      },
      H() {
        return formatChrCb.pad(closure_5.G(), 2, "0");
      },
      i() {
        return formatChrCb.pad(date.getMinutes(), 2, "0");
      },
      s() {
        return formatChrCb.pad(date.getSeconds(), 2, "0");
      },
      u() {
        return formatChrCb.pad(1000 * date.getMilliseconds(), 6, "0");
      },
      O() {
        const timezoneOffset = date.getTimezoneOffset();
        const absolute = Math.abs(timezoneOffset);
        let str = "+";
        if (timezoneOffset > 0) {
          str = "-";
        }
        return str + formatChrCb.pad(100 * Math.floor(absolute / 60) + absolute % 60, 4, "0");
      },
      P() {
        const str = closure_5.O();
        const text = `${str.substr(0, 3)}:`;
        return `${str.substr(0, 3)}:` + str.substr(3, 2);
      },
      Z() {
        return 60 * -date.getTimezoneOffset();
      },
      c() {
        return "Y-m-d\\TH:i:sP".replace(tmp11, formatChrCb);
      },
      r() {
        return "D, d M Y H:i:s O".replace(tmp11, formatChrCb);
      },
      U() {
        return date.getTime() / 1000 || 0;
      }
    };
    return str.replace(tmp11, formatChrCb);
  };
  obj.numberFormat = (arg0, arg1, arg2, arg3) => {
    let num = 2;
    if (!isNaN(arg1)) {
      const _Math = Math;
      num = Math.abs(arg1);
    }
    let str = ".";
    if (undefined !== arg2) {
      str = arg2;
    }
    let str2 = ",";
    if (undefined !== arg3) {
      str2 = arg3;
    }
    let str3 = "";
    let str4 = "";
    if (arg0 < 0) {
      str4 = "-";
    }
    let num2 = +arg0;
    if (!num2) {
      num2 = 0;
    }
    const absolute = Math.abs(num2);
    const str5 = `${parseInt(obj.toFixed(num), 10)}`;
    let num3 = 0;
    if (`${parseInt(obj.toFixed(num), 10)}`.length > 3) {
      num3 = `${parseInt(obj.toFixed(num), 10)}`.length % 3;
    }
    let sum = str3;
    if (num3) {
      sum = str5.substr(0, num3) + str2;
    }
    const sum1 = str4 + sum + str5.substr(num3).replace(/(\d{3})(?=\d)/g, `$1${str2}`);
    if (num) {
      const _Math2 = Math;
      const absolute1 = Math.abs(absolute - str5);
      str3 = str + absolute1.toFixed(num).slice(2);
      const toFixedResult = absolute1.toFixed(num);
    }
    return sum1 + str3;
  };
  obj.naturalDay = (arg0, arg1) => {
    let timeResult = arg0;
    if (undefined === arg0) {
      timeResult = obj.time();
    }
    let str = "Y-m-d";
    if (undefined !== arg1) {
      str = arg1;
    }
    const date = new Date();
    const fullYear = date.getFullYear();
    const month = date.getMonth();
    const result = new Date(fullYear, month, date.getDate()).getTime() / 1000;
    if (timeResult >= result) {
      if (timeResult < result) {
        if (timeResult < result + 86400) {
          let str4 = obj.date(str, timeResult);
        } else {
          str4 = "tomorrow";
        }
        let str3 = str4;
      } else {
        str3 = "today";
      }
      let str2 = str3;
    } else {
      str2 = "yesterday";
    }
    return str2;
  };
  obj.relativeTime = (arg0) => {
    let timeResult = arg0;
    if (undefined === arg0) {
      timeResult = obj.time();
    }
    const timeResult1 = obj.time();
    const diff = timeResult1 - timeResult;
    if (diff < 2) {
      if (diff > -2) {
        let str24 = "";
        if (diff >= 0) {
          str24 = "just ";
        }
        return str24 + "now";
      }
    }
    if (diff < 60) {
      if (diff > -60) {
        if (diff >= 0) {
          const _Math8 = Math;
          let text = `${Math.floor(tmp4)} seconds ago`;
        } else {
          const _Math7 = Math;
          text = `${"in " + Math.floor(-tmp4)} seconds`;
        }
        return text;
      }
    }
    if (diff < 120) {
      if (diff > -120) {
        let str20 = "in about a minute";
        if (diff >= 0) {
          str20 = "about a minute ago";
        }
        return str20;
      }
    }
    if (diff < 3600) {
      if (diff > -3600) {
        if (diff >= 0) {
          const _Math6 = Math;
          let text1 = `${Math.floor(tmp4 / 60)} minutes ago`;
        } else {
          const _Math5 = Math;
          text1 = `${"in " + Math.floor(-tmp4 / 60)} minutes`;
        }
        return text1;
      }
    }
    if (diff < 7200) {
      if (diff > -7200) {
        let str16 = "in about an hour";
        if (diff >= 0) {
          str16 = "about an hour ago";
        }
        return str16;
      }
    }
    if (diff < 86400) {
      if (diff > -86400) {
        if (diff >= 0) {
          const _Math4 = Math;
          let text2 = `${Math.floor(tmp4 / 3600)} hours ago`;
        } else {
          const _Math3 = Math;
          text2 = `${"in " + Math.floor(-tmp4 / 3600)} hours`;
        }
        return text2;
      }
    }
    if (diff < 172800) {
      if (diff > -172800) {
        let str12 = "in 1 day";
        if (diff >= 0) {
          str12 = "1 day ago";
        }
        return str12;
      }
    }
    if (diff < 2505600) {
      if (diff > -2505600) {
        if (diff >= 0) {
          const _Math2 = Math;
          let text3 = `${Math.floor(tmp4 / 86400)} days ago`;
        } else {
          const _Math = Math;
          text3 = `${"in " + Math.floor(-tmp4 / 86400)} days`;
        }
        return text3;
      }
    }
    if (diff < 5184000) {
      if (diff > -5184000) {
        let str8 = "in about a month";
        if (diff >= 0) {
          str8 = "about a month ago";
        }
        return str8;
      }
    }
    const parsed = parseInt(obj.date("Y", timeResult1), 10);
    const parsed1 = parseInt(obj.date("Y", timeResult), 10);
    const result = 12 * parsed;
    const sum = result + parseInt(obj.date("n", timeResult1), 10);
    const result1 = 12 * parsed1;
    const diff1 = sum - (result1 + parseInt(obj.date("n", timeResult), 10));
    if (diff1 < 12) {
      if (diff1 > -12) {
        if (diff1 >= 0) {
          let text4 = `${tmp10} months ago`;
        } else {
          text4 = `${"in " + -tmp10} months`;
        }
        return text4;
      }
    }
    const diff2 = parsed - parsed1;
    if (diff2 < 2) {
      if (diff2 > -2) {
        let str4 = "in a year";
        if (diff2 >= 0) {
          str4 = "a year ago";
        }
        let text5 = str4;
      }
      return text5;
    }
    if (diff2 >= 0) {
      text5 = `${tmp11} years ago`;
    } else {
      text5 = `${"in " + -tmp11} years`;
    }
  };
  obj.ordinal = (replaced) => {
    const parsed = parseInt(replaced, 10);
    let num = 0;
    if (!isNaN(parsed)) {
      num = parsed;
    }
    let str = "";
    if (num < 0) {
      str = "-";
    }
    const absolute = Math.abs(num);
    const result = absolute % 100;
    const sum = str + absolute;
    if (result <= 4) {
      let str2 = { -349215301: 2188273620582311800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2115606444: -0.0000000000000071081501714814, -1437386140: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003483452624154144 }[absolute % 10] || "th";
      const tmp5 = { -349215301: 2188273620582311800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2115606444: -0.0000000000000071081501714814, -1437386140: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003483452624154144 }[absolute % 10] || "th";
    } else {
      str2 = "th";
    }
    return sum + str2;
  };
  obj.filesize = (arg0, arg1, arg2, arg3, arg4, arg5) => {
    let num = arg2;
    let str = arg5;
    let str2 = "0 bytes";
    if (arg0 > 0) {
      let num2 = 1024;
      if (undefined !== arg1) {
        num2 = arg1;
      }
      if (tmp) {
        num = 0;
      }
      if (undefined === str) {
        str = " ";
      }
      str2 = obj.intword(arg0, [], num2, num, arg3, arg4, str);
      const tmp = arg0 < num2 && undefined === num;
    }
    return str2;
  };
  obj.intword = (arg0, arg1, result) => {
    let items = arg1;
    let num = result;
    let str = arg4;
    let str2 = arg5;
    let str3 = arg6;
    if (!arg1) {
      items = ["<string:2246337460>", "<string:3307887186>", "<string:930370182>", "<string:1388339662>", "<string:1417714346>"];
    }
    const diff = items.length - 1;
    if (!num) {
      num = 1000;
    }
    let num2 = 2;
    if (!isNaN(arg3)) {
      const _Math = Math;
      num2 = Math.abs(arg3);
    }
    if (!str) {
      str = ".";
    }
    if (!str2) {
      str2 = ",";
    }
    if (!str3) {
      str3 = "";
    }
    let num3 = 0;
    let tmp2 = diff;
    if (0 < items.length) {
      const _Math2 = Math;
      tmp2 = num3;
      while (arg0 >= Math.pow(num, num3 + 1)) {
        num3 = num3 + 1;
        tmp2 = diff;
        if (num3 >= items.length) {
          break;
        }
      }
    }
    result = arg0 / Math.pow(num, tmp2);
    let str4 = "";
    if (items[tmp2]) {
      str4 = str3 + items[tmp2];
    }
    return obj.numberFormat(result, num2, str, str2) + str4;
  };
  obj.linebreaks = (str) => {
    str = str.replace(/^([\n|\r]*)/, "");
    const str2 = str.replace(/^([\n|\r]*)/, "").replace(/([\n|\r]*)$/, "");
    const str3 = str.replace(/^([\n|\r]*)/, "").replace(/([\n|\r]*)$/, "").replace(/(\r\n|\n|\r)/g, "\n");
    return "<p>" + str.replace(/^([\n|\r]*)/, "").replace(/([\n|\r]*)$/, "").replace(/(\r\n|\n|\r)/g, "\n").replace(/(\n{2,})/g, "</p><p>").replace(/\n/g, "<br />") + "</p>";
  };
  obj.nl2br = (str) => str.replace(/(\r\n|\n|\r)/g, "<br />");
  obj.truncatechars = (arg0, arg1) => {
    let text = arg0;
    if (arg0.length > arg1) {
      text = `${arg0.substr(0, arg1)}…`;
    }
    return text;
  };
  obj.truncatewords = (str) => {
    let text = str;
    const parts = str.split(" ");
    if (parts.length >= arg1) {
      const substr = parts.slice(0, arg1);
      text = `${obj.join(" ")}…`;
    }
    return text;
  };
};
fn.call(this);
