// Module ID: 9604
// Function ID: 9605
// Name: MutedUntilText
// Dependencies: [19, 21, 4836, 1115, 4832, 2]
// Exports: default

// Module 9604 (MutedUntilText)
import Fragment from "Fragment" /* 21 */;
import intl6 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const MuteSettingType = { SERVER: 0, [0]: "SERVER", CHANNEL: 1, [1]: "CHANNEL", DM: 2, [2]: "DM", CATEGORY: 3, [3]: "CATEGORY" };
let closure_4 = createStyles.createStyles({ formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default function MutedUntilText(arg0) {
  let date;
  let muteConfig;
  let obj;
  let stringResult;
  let tmp3;
  let type;
  ({ muteConfig, type } = arg0);
  const tmp = closure_4();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      let N2NXMd;
      let tmp15;
      if (obj.SERVER === type) {
        N2NXMd = intl6.t.MQfdK9;
        tmp15 = require;
      } else if (obj.CHANNEL === type) {
        N2NXMd = intl6.t["N/kd49"];
        tmp15 = require;
      } else if (obj.DM === type) {
        N2NXMd = intl6.t.c4aY0P;
        tmp15 = require;
      } else if (obj.CATEGORY === type) {
        N2NXMd = intl6.t.N2NXMd;
        tmp15 = require;
      } else {
        return null;
      }
      const Text = tmp15(4832).Text;
      const intl5 = tmp15(1115).intl;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const format = intl5.format;
      const obj3 = {
        endTime: date.toLocaleString(tmp15(1115).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }),
        endTimeHook(children) {
              return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "control-brand-foreground", children }, "muted");
            }
      };
      date = new Date(muteConfig.end_time);
      return <Text style={tmp.formHintText} variant="text-sm/medium" color="text-muted">{format(N2NXMd, obj3)}</Text>;
    }
  }
  if (obj.SERVER === type) {
    const intl4 = intl6.intl;
    stringResult = intl4.string(intl6.t["/b/DU7"]);
    tmp3 = require;
  } else if (obj.CHANNEL === type) {
    const intl3 = intl6.intl;
    stringResult = intl3.string(intl6.t.utURT8);
    tmp3 = require;
  } else if (obj.DM === type) {
    const intl2 = intl6.intl;
    stringResult = intl2.string(intl6.t.jxF9er);
    tmp3 = require;
  } else if (obj.CATEGORY === type) {
    tmp3 = require;
    const intl = intl6.intl;
    stringResult = intl.string(intl6.t["6+wqqt"]);
  } else {
    return null;
  }
  obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
  return jsx(tmp3(4832).Text, { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult });
};
export { MuteSettingType };
