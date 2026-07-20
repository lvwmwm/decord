// Module ID: 10265
// Function ID: 79330
// Name: MutedUntilText
// Dependencies: []
// Exports: default

// Module 10265 (MutedUntilText)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const obj = { SERVER: 0, [0]: "SERVER", CHANNEL: 1, [1]: "CHANNEL", DM: 2, [2]: "DM", CATEGORY: 3, [3]: "CATEGORY" };
let closure_4 = arg1(dependencyMap[2]).createStyles({ formHintText: { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false } });
const obj2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default function MutedUntilText(arg0) {
  let muteConfig;
  let type;
  ({ muteConfig, type } = arg0);
  const tmp = callback();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = arg1(dependencyMap[3]).t.MQfdK9;
      } else if (obj.CHANNEL === type) {
        N2NXMd = arg1(dependencyMap[3]).t.N/kd49;
      } else if (obj.DM === type) {
        N2NXMd = arg1(dependencyMap[3]).t.c4aY0P;
      } else if (obj.CATEGORY === type) {
        N2NXMd = arg1(dependencyMap[3]).t.N2NXMd;
      } else {
        return null;
      }
      let obj = { Promise: null, marginTop: null, flags: null, style: tmp.formHintText };
      const intl5 = arg1(dependencyMap[3]).intl;
      obj = {};
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      obj.endTime = date.toLocaleString(arg1(dependencyMap[3]).intl.currentLocale, {});
      obj.endTimeHook = function endTimeHook(children) {
        const obj = { INTEGRATION_CREATE: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002844504276111809, ConstraintReasonCode: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002086006742998083, children };
        return callback2(callback(closure_1[4]).Text, obj, "muted");
      };
      obj.children = intl5.format(N2NXMd, obj);
      return jsx(arg1(dependencyMap[4]).Text, obj);
    }
  }
  if (obj.SERVER === type) {
    const intl4 = arg1(dependencyMap[3]).intl;
    let stringResult = intl4.string(arg1(dependencyMap[3]).t./b/DU7);
  } else if (obj.CHANNEL === type) {
    const intl3 = arg1(dependencyMap[3]).intl;
    stringResult = intl3.string(arg1(dependencyMap[3]).t.utURT8);
  } else if (obj.DM === type) {
    const intl2 = arg1(dependencyMap[3]).intl;
    stringResult = intl2.string(arg1(dependencyMap[3]).t.jxF9er);
  } else if (obj.CATEGORY === type) {
    const intl = arg1(dependencyMap[3]).intl;
    stringResult = intl.string(arg1(dependencyMap[3]).t.6+wqqt);
  } else {
    return null;
  }
  obj = { Promise: null, marginTop: null, flags: null, style: tmp.formHintText, children: stringResult };
  return jsx(arg1(dependencyMap[4]).Text, obj);
};
export const MuteSettingType = obj;
