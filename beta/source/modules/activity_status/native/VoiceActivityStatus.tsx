// Module ID: 10351
// Function ID: 10352
// Name: VoiceActivityStatus
// Dependencies: [19, 21, 4836, 1115, 10352, 10344, 2]
// Exports: default, getVoiceActivityStatusText

// Module 10351 (VoiceActivityStatus)
import intl3 from "intl" /* 1115 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10344 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 10352 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const result = size.fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default function VoiceActivityStatus(hideText) {
  let channel;
  let hideIcon;
  let iconStyle;
  let items;
  let maxFontSizeMultiplier;
  let textStyle;
  let tmp3Result;
  ({ channel, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (!hideIcon) {
    let tmp5 = !hideIcon;
    const tmp3 = hasOwnProperty;
    const tmp4 = React3;
    if (!hideIcon) {
      const obj = { channel, size: "xxs", color: "status-positive", style: items };
      items = [tmp.icon, iconStyle];
      tmp5 = _false(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5, ];
    let tmp10Result = !flag;
    if (tmp10Result) {
      const obj2 = { style: textStyle, maxFontSizeMultiplier, children: null };
      const tmp10 = _false;
      const tmp13 = ActivityStatusTextDefault;
      if (!channel.isDM()) {
        let stringResult;
        if (!channel.isGroupDM()) {
          const isGuildStageVoiceResult = channel.isGuildStageVoice();
          const intl = intl3.intl;
          const string = intl.string;
          const t = intl3.t;
          if (isGuildStageVoiceResult) {
            stringResult = string(t.QygGCN);
          } else {
            stringResult = string(t.msxteM);
          }
        }
        obj2.children = stringResult;
        tmp10Result = tmp10(tmp13, obj2);
      }
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t["9FaEzi"]);
    }
    const obj3 = { children: items1 };
    items1[1] = tmp10Result;
    tmp3Result = tmp3(tmp4, obj3);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};
export const getVoiceActivityStatusText = function getVoiceActivityStatusText(voiceChannel) {
  if (!voiceChannel.isDM()) {
    let stringResult;
    if (!voiceChannel.isGroupDM()) {
      const isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (isGuildStageVoiceResult) {
        stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
    }
    return stringResult;
  }
  const intl2 = intl3.intl;
  stringResult = intl2.string(intl3.t["9FaEzi"]);
};
