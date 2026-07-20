// Module ID: 12696
// Function ID: 97448
// Name: keyCode
// Dependencies: []

// Module 12696 (keyCode)
let num2;
let num3;
let num4;
function keyCode(which) {
  let tmp = which;
  if (which) {
    tmp = which;
    if ("object" === typeof which) {
      tmp = which;
      if (which.which || which.keyCode || which.charCode) {
        tmp = tmp2;
      }
    }
  }
  if ("number" === typeof tmp) {
    return obj[tmp];
  } else {
    const _String = String;
    const str2 = String(tmp);
    let tmp5 = obj[str2.toLowerCase(str2)];
    if (!tmp5) {
      let tmp7 = obj[str2.toLowerCase(str2)];
      if (!tmp7) {
        let charCodeAtResult;
        if (1 === str2.length) {
          charCodeAtResult = str2.charCodeAt(0);
        }
        tmp7 = charCodeAtResult;
      }
      tmp5 = tmp7;
    }
    return tmp5;
  }
}
keyCode.isEventKey = function isEventKey(which) {
  if (which) {
    if ("object" === typeof which) {
      if (null == (which.which || which.keyCode || which.charCode)) {
        return false;
      } else {
        if ("string" === typeof arg1) {
          if (obj[arg1.toLowerCase(arg1)]) {
            return tmp5 === tmp;
          } else if (obj[arg1.toLowerCase(arg1)]) {
            return tmp7 === tmp;
          }
        } else if ("number" === tmp3) {
          return arg1 === tmp;
        }
        return false;
      }
    }
  }
};
let obj = { "Null": null, "Null": null, "Null": null, "Null": null, 0: null, -9223372036854775808: null, 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, 0: null, webAuthnRegister: null, ElKTeb: null, shadowColor: null, shadowOpacity: null, shadowRadius: "f", useInitProps: "g", GuildBadgeCompass: "h", GOOGLE_PAY: "i", base64GIFRegex: "j", APP_EMBED_CLICKED: "k", usesHandleActivityItemSelected: "l", impl: "m", originalBuffer: "n", launchpad: "o", DEFERRED_START: "p", request_data: "q", appearsDisabled: "r", checkChattableChannelThresholdMetAfterChannelPermissionDeny: "s", handleMediaPlayerViewWillAppear: "t", ACTIVITY_LAYOUT_PHYSICS_DEFAULT: "u", dG4noU: "v", reactRouterV3BrowserTracingIntegration: "w", fontFeatureSettings: "x", marginStart: "y", flexGrow: "z", gameImage: "0", UNKNOWN_FUNCTION: "1", overflow: "2", useInappropriateConversationsTiers: "3", captureReactException: "4", GuildTemplateStates: "5", PREMIUM_TIER_2_PLANS: "6" };
keyCode.codes = obj;
keyCode.code = obj;
obj = {};
keyCode.aliases = obj;
let num = 97;
do {
  let _String = String;
  obj[String.fromCharCode(num)] = num - 32;
  num = num + 1;
  num2 = 48;
} while (num < 123);
do {
  obj[num2 - 48] = num2;
  num2 = num2 + 1;
  num3 = 1;
} while (num2 < 58);
do {
  obj["f" + num3] = num3 + 111;
  num3 = num3 + 1;
  num4 = 0;
} while (num3 < 13);
do {
  obj["numpad " + num4] = num4 + 96;
  num4 = num4 + 1;
} while (num4 < 10);
obj = {};
keyCode.title = obj;
keyCode.names = obj;
for (const key10033 in obj) {
  let tmp = key10033;
  obj[obj[key10033]] = key10033;
}
for (const key10036 in obj) {
  let tmp2 = key10036;
  obj[key10036] = obj[key10036];
}

export default keyCode;
