// Module ID: 15073
// Function ID: 15074
// Name: pressable
// Dependencies: [676, 4159, 11006, 1236, 4401, 2]

// Module 15073 (pressable)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4159 from "module_4159" /* 4159 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4401 */;
import createToggle from "createToggle" /* 11006 */;

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4159.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    _modDef4159.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
