// Module ID: 9075
// Function ID: 71161
// Name: VoiceActivityStatus
// Dependencies: []
// Exports: default

// Module 9075 (VoiceActivityStatus)
importAll(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).createStyles({ icon: { flexShrink: 0 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

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
      obj = { channel };
      const items = [tmp.icon, hideText.iconStyle];
      obj.style = items;
      tmp5 = callback(importDefault(dependencyMap[3]), obj);
    }
    const items1 = [tmp5, ];
    if (!!flag) {
      items1[1] = tmp9;
      obj.children = items1;
      let tmp3Result = tmp3(tmp4, obj);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const tmp14 = importDefault(dependencyMap[4]);
          obj = { style: textStyle, maxFontSizeMultiplier };
          const intl = arg1(dependencyMap[5]).intl;
          const string = intl.string;
          const t = arg1(dependencyMap[5]).t;
          if (isGuildStageVoiceResult) {
            obj.children = string(t.QygGCN);
            let tmp11Result = tmp11(tmp14, obj);
          } else {
            obj.children = string(t.msxteM);
            tmp11Result = tmp11(tmp14, obj);
          }
          const isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
      }
      const obj1 = { style: textStyle, maxFontSizeMultiplier };
      textStyle = arg1(dependencyMap[5]).intl;
      maxFontSizeMultiplier = textStyle.string;
      obj1.children = maxFontSizeMultiplier(arg1(dependencyMap[5]).t.9FaEzi);
      tmp11Result = callback(importDefault(dependencyMap[4]), obj1);
      const tmp20 = importDefault(dependencyMap[4]);
    }
    const tmp3 = closure_5;
    const tmp4 = closure_4;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};
