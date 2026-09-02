// Module ID: 15288
// Function ID: 15289
// Name: toggle
// Dependencies: [7893, 11288, 1233, 4166, 2]

// Module 15288 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VP11No);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineAttachmentMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineAttachmentMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VP11No);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineAttachmentMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineAttachmentMedia.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
