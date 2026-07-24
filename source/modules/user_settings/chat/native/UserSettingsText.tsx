// Module ID: 14345
// Function ID: 109842
// Name: trackSettingsUpdated
// Dependencies: [31, 27, 1849, 3782, 1279, 1280, 653, 33, 4130, 689, 675, 3803, 8042, 3834, 566, 3776, 1456, 7375, 1273, 9647, 4126, 1212, 7636, 4541, 5501, 5502, 7654, 7653, 2]
// Exports: default, setLowQualityImageMode, setStickerAutocomplete

// Module 14345 (trackSettingsUpdated)
import "result";
import { View } from "TableRadioRow";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { VideoQualitySettings } from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_9;
let require = arg1;
function trackSettingsUpdated(data_saving_mode, videoUploadQuality, viewImageDescriptions, lowQualityImageMode, dataSavingMode) {
  let obj = importDefault(675);
  obj = { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: data_saving_mode };
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj);
}
function setDataSavingMode(dataSavingMode) {
  dataSavingMode = dataSavingMode.dataSavingMode;
  trackSettingsUpdated("data_saving_mode", dataSavingMode.videoUploadQuality, dataSavingMode.viewImageDescriptions, dataSavingMode.lowQualityImageMode, dataSavingMode);
  const result = importDefault(8042).updatedUnsyncedSettings({ dataSavingMode });
}
function setVideoUploadQuality(videoUploadQuality) {
  videoUploadQuality = videoUploadQuality.videoUploadQuality;
  trackSettingsUpdated("video_upload_quality", videoUploadQuality, videoUploadQuality.viewImageDescriptions, videoUploadQuality.lowQualityImageMode, videoUploadQuality.dataSavingMode);
  const result = importDefault(8042).updatedUnsyncedSettings({ videoUploadQuality });
}
function setImageDescriptions(viewImageDescriptions) {
  viewImageDescriptions = viewImageDescriptions.viewImageDescriptions;
  trackSettingsUpdated("image_descriptions", viewImageDescriptions.videoUploadQuality, viewImageDescriptions, viewImageDescriptions.lowQualityImageMode, viewImageDescriptions.dataSavingMode);
  const ViewImageDescriptions = require(3803) /* explicitContentFromProto */.ViewImageDescriptions;
  ViewImageDescriptions.updateSetting(viewImageDescriptions);
}
({ AnalyticEvents: closure_9, AnalyticsSections: closure_10, UserSettingsSections: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 }, nitroUpsell: { flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { width: 16, height: 16, tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.nitroIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/chat/native/UserSettingsText.tsx");

export default function UserSettingsText() {
  let importDefault;
  let videoUploadQuality;
  let obj = require(videoUploadQuality[13]);
  const token = obj.useToken(importDefault(videoUploadQuality[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = _createForOfIteratorHelperLoose();
  require = tmp2;
  const InlineAttachmentMedia = require(videoUploadQuality[11]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = require(videoUploadQuality[11]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require(videoUploadQuality[11]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = require(videoUploadQuality[11]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  let obj1 = require(videoUploadQuality[14]);
  let items = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ lowQualityImageMode: outer1_7.dataSavingMode, videoUploadQuality: outer1_7.videoUploadQuality, dataSavingMode: outer1_7.dataSavingMode }));
  ({ lowQualityImageMode: importDefault, videoUploadQuality } = stateFromStoresObject);
  const dataSavingMode = stateFromStoresObject.dataSavingMode;
  let obj2 = require(videoUploadQuality[14]);
  const items1 = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj3 = require(videoUploadQuality[14]);
  const items2 = [setting4];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => setting4.getCurrentUser());
  let obj4 = require(videoUploadQuality[15]);
  let result = obj4.hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  let obj5 = require(videoUploadQuality[14]);
  const items3 = [closure_6];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => outer1_6.shouldSync("text"));
  const ViewImageDescriptions = require(videoUploadQuality[11]).ViewImageDescriptions;
  setting4 = ViewImageDescriptions.useSetting();
  let obj6 = require(videoUploadQuality[16]);
  closure_5 = obj6.useNavigation();
  obj = { style: tmp2.flex };
  obj = {};
  obj1 = { spacing: importDefault(videoUploadQuality[9]).space.PX_24, style: { paddingHorizontal: token } };
  obj2 = {};
  obj3 = {};
  let intl = require(videoUploadQuality[21]).intl;
  obj3.title = intl.string(require(videoUploadQuality[21]).t["9nyle0"]);
  const intl2 = require(videoUploadQuality[21]).intl;
  obj3.description = intl2.format(require(videoUploadQuality[21]).t.qjjvqO, { maxSize: 8 });
  obj3.hasIcons = false;
  obj4 = {};
  const intl3 = require(videoUploadQuality[21]).intl;
  obj4.label = intl3.string(require(videoUploadQuality[21]).t.U47N1p);
  obj4.value = setting1;
  obj4.onValueChange = require(videoUploadQuality[11]).InlineEmbedMedia.updateSetting;
  const items4 = [callback(require(videoUploadQuality[25]).TableSwitchRow, obj4), ];
  obj5 = {};
  const intl4 = require(videoUploadQuality[21]).intl;
  obj5.label = intl4.string(require(videoUploadQuality[21]).t.VP11No);
  obj5.value = setting;
  obj5.onValueChange = require(videoUploadQuality[11]).InlineAttachmentMedia.updateSetting;
  items4[1] = callback(require(videoUploadQuality[25]).TableSwitchRow, obj5);
  obj3.children = items4;
  const items5 = [callback2(require(videoUploadQuality[24]).TableRowGroup, obj3), ];
  obj6 = {};
  const intl5 = require(videoUploadQuality[21]).intl;
  obj6.description = intl5.string(require(videoUploadQuality[21]).t.T0rbtM);
  obj6.hasIcons = false;
  const obj7 = {};
  const intl6 = require(videoUploadQuality[21]).intl;
  obj7.label = intl6.string(require(videoUploadQuality[21]).t["w8j+yW"]);
  obj7.value = setting4;
  obj7.onValueChange = function updateImageDescriptions(viewImageDescriptions) {
    outer1_19({ videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_1, dataSavingMode });
  };
  obj6.children = callback(require(videoUploadQuality[25]).TableSwitchRow, obj7);
  items5[1] = callback(require(videoUploadQuality[24]).TableRowGroup, obj6);
  obj2.children = items5;
  const items6 = [callback2(closure_14, obj2), , , , , ];
  const obj8 = {};
  const obj9 = {};
  const intl7 = require(videoUploadQuality[21]).intl;
  obj9.title = intl7.string(require(videoUploadQuality[21]).t.PXq9f1).toUpperCase();
  obj9.value = videoUploadQuality;
  obj9.onChange = function updateVideoUploadQuality(videoUploadQuality) {
    outer1_18({ videoUploadQuality, viewImageDescriptions: setting4, lowQualityImageMode: closure_1, dataSavingMode });
  };
  const intl8 = require(videoUploadQuality[21]).intl;
  obj9.description = intl8.format(require(videoUploadQuality[21]).t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  obj9.hasIcons = false;
  const obj10 = {};
  const intl9 = require(videoUploadQuality[21]).intl;
  obj10.label = intl9.string(require(videoUploadQuality[21]).t.cWGW5d);
  obj10.value = VideoQualitySettings.BEST;
  const items7 = [callback(require(videoUploadQuality[27]).TableRadioRow, obj10), , ];
  const obj11 = {};
  const intl10 = require(videoUploadQuality[21]).intl;
  obj11.label = intl10.string(require(videoUploadQuality[21]).t["5hKnyC"]);
  obj11.value = VideoQualitySettings.STANDARD;
  items7[1] = callback(require(videoUploadQuality[27]).TableRadioRow, obj11);
  const obj12 = {};
  const intl11 = require(videoUploadQuality[21]).intl;
  obj12.label = intl11.string(require(videoUploadQuality[21]).t.y5k4ZJ);
  obj12.value = VideoQualitySettings.DATA_SAVER;
  items7[2] = callback(require(videoUploadQuality[27]).TableRadioRow, obj12);
  obj9.children = items7;
  const items8 = [callback2(require(videoUploadQuality[26]).TableRadioGroup, obj9), ];
  const str = intl7.string(require(videoUploadQuality[21]).t.PXq9f1);
  items8[1] = !result && (function renderNitroUpsellText() {
    let obj = { style: tmp2.nitroUpsell };
    obj = { source: outer1_1(videoUploadQuality[19]), size: tmp2(videoUploadQuality[18]).Icon.Sizes.SMALL, style: tmp2.nitroIcon };
    const items = [outer1_12(tmp2(videoUploadQuality[18]).Icon, obj), ];
    obj = { variant: "text-sm/medium", color: "text-muted", style: { marginLeft: 4 } };
    const intl = tmp2(videoUploadQuality[21]).intl;
    obj.children = intl.format(tmp2(videoUploadQuality[21]).t.uW1zul, {
      onClick() {
        outer2_1(videoUploadQuality[17]).setSection(outer2_11.PREMIUM);
        outer1_5.push(outer2_11.PREMIUM, { isFromTextSection: true });
      }
    });
    items[1] = outer1_12(tmp2(videoUploadQuality[20]).Text, obj);
    obj.children = items;
    return outer1_13(dataSavingMode, obj);
  })();
  obj8.children = items8;
  items6[1] = callback2(dataSavingMode, obj8);
  const obj13 = {};
  const intl12 = require(videoUploadQuality[21]).intl;
  obj13.title = intl12.string(require(videoUploadQuality[21]).t.fyG8t2);
  const intl13 = require(videoUploadQuality[21]).intl;
  obj13.description = intl13.string(require(videoUploadQuality[21]).t["wC0+Ph"]);
  obj13.hasIcons = false;
  const obj14 = {};
  const intl14 = require(videoUploadQuality[21]).intl;
  obj14.label = intl14.string(require(videoUploadQuality[21]).t.ix8XIj);
  obj14.value = dataSavingMode;
  obj14.onValueChange = function toggleDataSavingMode(dataSavingMode) {
    outer1_17({ videoUploadQuality, viewImageDescriptions: setting4, lowQualityImageMode: closure_1, dataSavingMode });
  };
  obj13.children = callback(require(videoUploadQuality[25]).TableSwitchRow, obj14);
  items6[2] = callback(require(videoUploadQuality[24]).TableRowGroup, obj13);
  const obj15 = {};
  const intl15 = require(videoUploadQuality[21]).intl;
  obj15.title = intl15.string(require(videoUploadQuality[21]).t.PWZOn4);
  obj15.hasIcons = false;
  const obj16 = {};
  const intl16 = require(videoUploadQuality[21]).intl;
  obj16.label = intl16.string(require(videoUploadQuality[21]).t["5bK9vw"]);
  obj16.value = setting2;
  obj16.onValueChange = require(videoUploadQuality[11]).RenderEmbeds.updateSetting;
  obj15.children = callback(require(videoUploadQuality[25]).TableSwitchRow, obj16);
  items6[3] = callback(require(videoUploadQuality[24]).TableRowGroup, obj15);
  const obj17 = {};
  const intl17 = require(videoUploadQuality[21]).intl;
  obj17.title = intl17.string(require(videoUploadQuality[21]).t.sMOuuS);
  obj17.hasIcons = false;
  const obj18 = {};
  const intl18 = require(videoUploadQuality[21]).intl;
  obj18.label = intl18.string(require(videoUploadQuality[21]).t["zge/fP"]);
  obj18.value = setting3;
  obj18.onValueChange = require(videoUploadQuality[11]).RenderReactions.updateSetting;
  obj17.children = callback(require(videoUploadQuality[25]).TableSwitchRow, obj18);
  items6[4] = callback(require(videoUploadQuality[24]).TableRowGroup, obj17);
  const obj19 = {};
  const intl19 = require(videoUploadQuality[21]).intl;
  obj19.title = intl19.string(require(videoUploadQuality[21]).t.BkuOO6);
  const intl20 = require(videoUploadQuality[21]).intl;
  obj19.description = intl20.string(require(videoUploadQuality[21]).t.p4IKE9);
  obj19.hasIcons = false;
  const obj20 = {};
  const intl21 = require(videoUploadQuality[21]).intl;
  obj20.label = intl21.string(require(videoUploadQuality[21]).t["3340dY"]);
  obj20.value = false !== stateFromStores2;
  obj20.onValueChange = function handleSync(shouldSync) {
    const result = outer1_1(videoUploadQuality[12]).setShouldSyncTextSettings(shouldSync);
  };
  obj19.children = callback(require(videoUploadQuality[25]).TableSwitchRow, obj20);
  items6[5] = callback(require(videoUploadQuality[24]).TableRowGroup, obj19);
  obj1.children = items6;
  obj.children = callback2(require(videoUploadQuality[23]).Stack, obj1);
  obj.children = callback(require(videoUploadQuality[22]).Form, obj);
  return callback(dataSavingMode, obj);
};
export const setStickerAutocomplete = function setStickerAutocomplete(enabled) {
  let obj = importDefault(675);
  obj = { enabled, location: obj };
  obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
  obj.track(constants.STICKERS_IN_AUTOCOMPLETE_TOGGLED, obj);
  const IncludeStickersInAutocomplete = require(3803) /* explicitContentFromProto */.IncludeStickersInAutocomplete;
  IncludeStickersInAutocomplete.updateSetting(enabled);
};
export const setLowQualityImageMode = function setLowQualityImageMode(lowQualityImageMode) {
  lowQualityImageMode = lowQualityImageMode.lowQualityImageMode;
  trackSettingsUpdated("low_quality_image_mode", lowQualityImageMode.videoUploadQuality, lowQualityImageMode.viewImageDescriptions, lowQualityImageMode, lowQualityImageMode.dataSavingMode);
  const result = importDefault(8042).updatedUnsyncedSettings({ lowQualityImageMode });
};
export { setDataSavingMode };
export { setVideoUploadQuality };
export { setImageDescriptions };
