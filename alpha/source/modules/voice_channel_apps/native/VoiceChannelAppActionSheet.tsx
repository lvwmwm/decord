// Module ID: 18811
// Function ID: 18812
// Name: VoiceChannelAppActionSheet
// Dependencies: [19, 21, 1112, 4189, 18808, 5008, 7433, 7395, 7227, 7229, 18810, 2]
// Exports: default

// Module 18811 (VoiceChannelAppActionSheet)
import _modDef4189 from "module_4189" /* 4189 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import VoiceChannelAppIconDefault from "VoiceChannelAppIcon" /* 18810 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let iconApplication;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const none = "none";
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppActionSheet.tsx");

export default function VoiceChannelAppActionSheet(guildId) {
  let TableRadioGroup;
  let intl5;
  let items1;
  let listState;
  let obj3;
  let onChange;
  let options;
  let selectedApplicationId;
  let stringResult1;
  let tmp8;
  ({ selectedApplicationId, onChange } = guildId);
  let tmp = onChange;
  let tmp2 = dependencyMap;
  guildId = guildId.guildId;
  let obj = onChange(18808);
  const voiceChannelAppSettingOptions = obj.useVoiceChannelAppSettingOptions(guildId, selectedApplicationId);
  ({ options, listState } = voiceChannelAppSettingOptions);
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    const tmp = onChange;
    if (arg0 !== none) {
      tmp2 = arg0;
    }
    tmp(tmp2);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  const intl = onChange(1112).intl;
  const stringResult = intl.string(_modDef4189.AdT7SZ);
  const obj2 = { header: closure_4(onChange(7395).BottomSheetTitleHeader, { title: stringResult }), children: tmp8(TableRadioGroup, obj3) };
  const ActionSheet = onChange(7433).ActionSheet;
  obj3 = { accessibilityLabel: stringResult, value: selectedApplicationId, onChange: callback, helperText: stringResult1, hasIcons: true, children: items1 };
  TableRadioGroup = onChange(7227).TableRadioGroup;
  tmp8 = closure_5;
  if (selectedApplicationId == null) {
    selectedApplicationId = none;
  }
  if ("loading" === listState) {
    const intl4 = tmp(1112).intl;
    stringResult1 = intl4.string(tmp(1112).t.ZTNur7);
  } else if ("failed" === listState) {
    const intl3 = tmp(1112).intl;
    stringResult1 = intl3.string(tmp5(4189).X2xOBn);
  } else if ("empty" === listState) {
    const intl2 = tmp(1112).intl;
    stringResult1 = intl2.string(tmp5(4189)["4S6iHa"]);
  }
  items1 = [
    options.map((iconApplication) => {
      let applicationId;
      let name;
      ({ applicationId, name } = iconApplication);
      iconApplication = iconApplication.iconApplication;
      const obj = { value: applicationId, label: name, icon: closure_1_4(VoiceChannelAppIconDefault, { applicationId, name, iconApplication }) };
      const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
      return closure_1_4(TableRadioRow, obj, applicationId);
    }),

  ];
  const obj4 = { value: none, label: intl5.string(_modDef4189.KEB4Rm) };
  let TableRadioRow = tmp(7229).TableRadioRow;
  intl5 = tmp(1112).intl;
  items1[1] = closure_4(TableRadioRow, obj4);
  return closure_4(ActionSheet, obj2);
};
export const VOICE_CHANNEL_APP_ACTION_SHEET_KEY = "VoiceChannelAppActionSheet";
