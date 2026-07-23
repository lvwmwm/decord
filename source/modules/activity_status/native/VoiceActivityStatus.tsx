// Module ID: 9083
// Function ID: 71215
// Name: VoiceActivityStatus
// Dependencies: [31, 33, 4130, 9084, 9072, 1212, 2]
// Exports: default

// Module 9083 (VoiceActivityStatus)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ icon: { flexShrink: 0 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default function VoiceActivityStatus(hideText) {
  let channel;
  let hideIcon;
  let maxFontSizeMultiplier;
  let textStyle;
  ({ channel, textStyle, maxFontSizeMultiplier, hideIcon } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (!hideIcon) {
    let obj = {};
    let tmp5 = !hideIcon;
    if (tmp5) {
      obj = { channel, size: "xxs", color: "status-positive" };
      const items = [tmp.icon, hideText.iconStyle];
      obj.style = items;
      tmp5 = callback(importDefault(9084), obj);
    }
    const items1 = [tmp5, ];
    if (!!flag) {
      items1[1] = tmp9;
      obj.children = items1;
      let tmp3Result = tmp3(tmp4, obj);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const tmp14 = importDefault(9072);
          obj = { style: textStyle, maxFontSizeMultiplier };
          const intl = require(1212) /* getSystemLocale */.intl;
          const string = intl.string;
          const t = require(1212) /* getSystemLocale */.t;
          if (isGuildStageVoiceResult) {
            obj.children = string(t.QygGCN);
            let tmp11Result = tmp11(tmp14, obj);
          } else {
            obj.children = string(t.msxteM);
            tmp11Result = tmp11(tmp14, obj);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
      }
      const obj1 = { style: textStyle, maxFontSizeMultiplier };
      textStyle = require(1212) /* getSystemLocale */.intl;
      maxFontSizeMultiplier = textStyle.string;
      obj1.children = maxFontSizeMultiplier(require(1212) /* getSystemLocale */.t["9FaEzi"]);
      tmp11Result = callback(importDefault(9072), obj1);
      const tmp20 = importDefault(9072);
    }
    tmp3 = closure_5;
    tmp4 = closure_4;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};
