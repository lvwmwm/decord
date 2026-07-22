// Module ID: 4764
// Function ID: 41352
// Name: decodeXPValue
// Dependencies: []

// Module 4764 (decodeXPValue)
function decodeXPValue(arg0) {
  const textDecoder = new TextDecoder("utf-16");
  const uint8Array = new Uint8Array(arg0);
  return textDecoder.decode(uint8Array).replace(/\u0000+$/, "");
}
let obj = { [254]: obj, [255]: obj, [263]: obj1, [266]: obj2, [274]: obj3 };
obj = {
  name: "SubfileType",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
obj = {
  name: "OldSubfileType",
  description(arg0) {
    return { RESPONDER_INACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_LONG_PRESS_IN: true }[arg0] || "Unknown";
  }
};
obj[282] = { name: "XResolution", description: arg2(arg6[0]).XResolution };
const obj1 = {
  name: "Thresholding",
  description(arg0) {
    return { title: 211342126139664810000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, Math: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050608370689110904, label: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054801552398833694 }[arg0] || "Unknown";
  }
};
const obj2 = {
  name: "FillOrder",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
const obj3 = {
  name: "Orientation",
  description(arg0) {
    let str = "top-left";
    if (1 !== arg0) {
      let str2 = "top-right";
      if (2 !== arg0) {
        let str3 = "bottom-right";
        if (3 !== arg0) {
          let str4 = "bottom-left";
          if (4 !== arg0) {
            let str5 = "left-top";
            if (5 !== arg0) {
              let str6 = "right-top";
              if (6 !== arg0) {
                let str7 = "right-bottom";
                if (7 !== arg0) {
                  let str8 = "Undefined";
                  if (8 === arg0) {
                    str8 = "left-bottom";
                  }
                  str7 = str8;
                }
                str6 = str7;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
const obj4 = { name: "XResolution", description: arg2(arg6[0]).XResolution };
obj[283] = { name: "YResolution", description: arg2(arg6[0]).YResolution };
obj[286] = {
  name: "XPosition",
  description(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};
obj[287] = {
  name: "YPosition",
  description(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};
obj[290] = {
  name: "GrayResponseUnit",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
const obj5 = { name: "YResolution", description: arg2(arg6[0]).YResolution };
const obj6 = {
  name: "XPosition",
  description(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};
const obj7 = {
  name: "YPosition",
  description(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};
const obj8 = {
  name: "GrayResponseUnit",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
obj[296] = { name: "ResolutionUnit", description: arg2(arg6[0]).ResolutionUnit };
obj[318] = {
  name: "WhitePoint",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] + "/" + arg0[1]);
    return mapped.join(", ");
  }
};
obj[319] = {
  name: "PrimaryChromaticities",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] + "/" + arg0[1]);
    return mapped.join(", ");
  }
};
obj[332] = {
  name: "InkSet",
  description(arg0) {
    return { -1860276708: "Array", "Bool(true)": "buff" }[arg0] || "Unknown";
  }
};
obj[338] = {
  name: "ExtraSamples",
  description(arg0) {
    return { RESPONDER_INACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_LONG_PRESS_IN: true }[arg0] || "Unknown";
  }
};
obj[339] = {
  name: "SampleFormat",
  description(arr) {
    let closure_0 = {};
    let str = "Unknown";
    if (Array.isArray(arr)) {
      const mapped = arr.map((arg0) => closure_0[arg0] || "Unknown");
      str = mapped.join(", ");
    }
    return str;
  }
};
obj[529] = {
  name: "YCbCrCoefficients",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] / arg0[1]);
    return mapped.join("/");
  }
};
obj[531] = {
  name: "YCbCrPositioning",
  description(arg0) {
    let str = "centered";
    if (1 !== arg0) {
      let str2 = "co-sited";
      if (2 !== arg0) {
        str2 = `undefined ${arg0}`;
      }
      str = str2;
    }
    return str;
  }
};
obj[532] = {
  name: "ReferenceBlackWhite",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] / arg0[1]);
    return mapped.join(", ");
  }
};
obj[33432] = {
  name: "Copyright",
  description(join) {
    return join.join("; ");
  }
};
obj[40091] = { name: "XPTitle", description: decodeXPValue };
obj[40092] = { name: "XPComment", description: decodeXPValue };
obj[40093] = { name: "XPAuthor", description: decodeXPValue };
obj[40094] = { name: "XPKeywords", description: decodeXPValue };
obj[40095] = { name: "XPSubject", description: decodeXPValue };
obj[50741] = {
  name: "MakerNoteSafety",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
const obj10 = {
  name: "WhitePoint",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] + "/" + arg0[1]);
    return mapped.join(", ");
  }
};
const obj11 = {
  name: "PrimaryChromaticities",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] + "/" + arg0[1]);
    return mapped.join(", ");
  }
};
const obj12 = {
  name: "InkSet",
  description(arg0) {
    return { -1860276708: "Array", "Bool(true)": "buff" }[arg0] || "Unknown";
  }
};
const obj13 = {
  name: "ExtraSamples",
  description(arg0) {
    return { RESPONDER_INACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_LONG_PRESS_IN: true }[arg0] || "Unknown";
  }
};
const obj14 = {
  name: "SampleFormat",
  description(arr) {
    let closure_0 = {};
    let str = "Unknown";
    if (Array.isArray(arr)) {
      const mapped = arr.map((arg0) => closure_0[arg0] || "Unknown");
      str = mapped.join(", ");
    }
    return str;
  }
};
const obj15 = {
  name: "YCbCrCoefficients",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] / arg0[1]);
    return mapped.join("/");
  }
};
const obj16 = {
  name: "YCbCrPositioning",
  description(arg0) {
    let str = "centered";
    if (1 !== arg0) {
      let str2 = "co-sited";
      if (2 !== arg0) {
        str2 = `undefined ${arg0}`;
      }
      str = str2;
    }
    return str;
  }
};
const obj17 = {
  name: "ReferenceBlackWhite",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] / arg0[1]);
    return mapped.join(", ");
  }
};
const obj18 = {
  name: "Copyright",
  description(join) {
    return join.join("; ");
  }
};
const obj19 = {
  name: "MakerNoteSafety",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
const obj9 = { name: "ResolutionUnit", description: arg2(arg6[0]).ResolutionUnit };
obj[50778] = { name: "CalibrationIlluminant1", description: arg2(arg6[0]).LightSource };
const obj20 = { name: "CalibrationIlluminant1", description: arg2(arg6[0]).LightSource };
obj[50779] = { name: "CalibrationIlluminant2", description: arg2(arg6[0]).LightSource };
obj[50941] = {
  name: "ProfileEmbedPolicy",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
obj[50970] = {
  name: "PreviewColorSpace",
  description(arg0) {
    return { flexGrow: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007542263286245867, flexShrink: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000162597459215305, gap: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000157906327414, alignSelf: 35068773081331906000000000000000000000 }[arg0] || "Unknown";
  }
};
obj[51107] = {
  name: "ProfileHueSatMapEncoding",
  description(arg0) {
    return { <string:80623616>: null, <string:80555520>: null }[arg0] || "Unknown";
  }
};
obj[51108] = {
  name: "ProfileLookTableEncoding",
  description(arg0) {
    return { <string:80623616>: null, <string:80555520>: null }[arg0] || "Unknown";
  }
};
obj[51110] = {
  name: "DefaultBlackRender",
  description(arg0) {
    return {}[arg0] || "Unknown";
  }
};
arg5.default = obj;
