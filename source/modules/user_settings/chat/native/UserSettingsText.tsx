// Module ID: 14181
// Function ID: 107363
// Name: trackSettingsUpdated
// Dependencies: []
// Exports: default, setLowQualityImageMode, setStickerAutocomplete

// Module 14181 (trackSettingsUpdated)
function trackSettingsUpdated(data_saving_mode, videoUploadQuality, viewImageDescriptions, lowQualityImageMode, dataSavingMode) {
  let obj = importDefault(dependencyMap[10]);
  obj = { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: data_saving_mode };
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj);
}
function setDataSavingMode(dataSavingMode) {
  dataSavingMode = dataSavingMode.dataSavingMode;
  trackSettingsUpdated("data_saving_mode", dataSavingMode.videoUploadQuality, dataSavingMode.viewImageDescriptions, dataSavingMode.lowQualityImageMode, dataSavingMode);
  const result = importDefault(dependencyMap[12]).updatedUnsyncedSettings({ dataSavingMode });
}
function setVideoUploadQuality(videoUploadQuality) {
  videoUploadQuality = videoUploadQuality.videoUploadQuality;
  trackSettingsUpdated("video_upload_quality", videoUploadQuality, videoUploadQuality.viewImageDescriptions, videoUploadQuality.lowQualityImageMode, videoUploadQuality.dataSavingMode);
  const result = importDefault(dependencyMap[12]).updatedUnsyncedSettings({ videoUploadQuality });
}
function setImageDescriptions(viewImageDescriptions) {
  viewImageDescriptions = viewImageDescriptions.viewImageDescriptions;
  trackSettingsUpdated("image_descriptions", viewImageDescriptions.videoUploadQuality, viewImageDescriptions, viewImageDescriptions.lowQualityImageMode, viewImageDescriptions.dataSavingMode);
  const ViewImageDescriptions = arg1(dependencyMap[11]).ViewImageDescriptions;
  ViewImageDescriptions.updateSetting(viewImageDescriptions);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const VideoQualitySettings = arg1(dependencyMap[5]).VideoQualitySettings;
({ AnalyticEvents: closure_9, AnalyticsSections: closure_10, UserSettingsSections: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { flex: { flex: 1 }, nitroUpsell: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" } };
obj = { "Null": null, "Null": null, tintColor: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_400 };
obj.nitroIcon = obj;
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/user_settings/chat/native/UserSettingsText.tsx");

export default function UserSettingsText() {
  let videoUploadQuality;
  let obj = arg1(dependencyMap[13]);
  const token = obj.useToken(importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback3();
  const arg1 = tmp2;
  const InlineAttachmentMedia = arg1(dependencyMap[11]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = arg1(dependencyMap[11]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = arg1(dependencyMap[11]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = arg1(dependencyMap[11]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ lowQualityImageMode: closure_7.dataSavingMode, videoUploadQuality: closure_7.videoUploadQuality, dataSavingMode: closure_7.dataSavingMode }));
  ({ lowQualityImageMode: closure_1, videoUploadQuality } = stateFromStoresObject);
  const dependencyMap = videoUploadQuality;
  const dataSavingMode = stateFromStoresObject.dataSavingMode;
  const View = dataSavingMode;
  let obj2 = arg1(dependencyMap[14]);
  const items1 = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj3 = arg1(dependencyMap[14]);
  const items2 = [closure_4];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => setting4.getCurrentUser());
  let obj4 = arg1(dependencyMap[15]);
  const result = obj4.hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  let obj5 = arg1(dependencyMap[14]);
  const items3 = [closure_6];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => closure_6.shouldSync("text"));
  const ViewImageDescriptions = arg1(dependencyMap[11]).ViewImageDescriptions;
  const setting4 = ViewImageDescriptions.useSetting();
  closure_4 = setting4;
  let obj6 = arg1(dependencyMap[16]);
  closure_5 = obj6.useNavigation();
  obj = { style: tmp2.flex };
  obj = {};
  obj1 = { spacing: importDefault(dependencyMap[9]).space.PX_24, style: { paddingHorizontal: token } };
  obj2 = {};
  obj3 = {};
  const intl = arg1(dependencyMap[21]).intl;
  obj3.title = intl.string(arg1(dependencyMap[21]).t.9nyle0);
  const intl2 = arg1(dependencyMap[21]).intl;
  obj3.description = intl2.format(arg1(dependencyMap[21]).t.qjjvqO, { maxSize: 8 });
  obj3.hasIcons = false;
  obj4 = {};
  const intl3 = arg1(dependencyMap[21]).intl;
  obj4.label = intl3.string(arg1(dependencyMap[21]).t.U47N1p);
  obj4.value = setting1;
  obj4.onValueChange = arg1(dependencyMap[11]).InlineEmbedMedia.updateSetting;
  const items4 = [callback(arg1(dependencyMap[25]).TableSwitchRow, obj4), ];
  obj5 = {};
  const intl4 = arg1(dependencyMap[21]).intl;
  obj5.label = intl4.string(arg1(dependencyMap[21]).t.VP11No);
  obj5.value = setting;
  obj5.onValueChange = arg1(dependencyMap[11]).InlineAttachmentMedia.updateSetting;
  items4[1] = callback(arg1(dependencyMap[25]).TableSwitchRow, obj5);
  obj3.children = items4;
  const items5 = [callback2(arg1(dependencyMap[24]).TableRowGroup, obj3), ];
  obj6 = {};
  const intl5 = arg1(dependencyMap[21]).intl;
  obj6.description = intl5.string(arg1(dependencyMap[21]).t.T0rbtM);
  obj6.hasIcons = false;
  const obj7 = {};
  const intl6 = arg1(dependencyMap[21]).intl;
  obj7.label = intl6.string(arg1(dependencyMap[21]).t.w8j+yW);
  obj7.value = setting4;
  obj7.onValueChange = function updateImageDescriptions(viewImageDescriptions) {
    callback6({ videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_1, dataSavingMode });
  };
  obj6.children = callback(arg1(dependencyMap[25]).TableSwitchRow, obj7);
  items5[1] = callback(arg1(dependencyMap[24]).TableRowGroup, obj6);
  obj2.children = items5;
  const items6 = [callback2(closure_14, obj2), , , , , ];
  const obj8 = {};
  const obj9 = {};
  const intl7 = arg1(dependencyMap[21]).intl;
  obj9.title = intl7.string(arg1(dependencyMap[21]).t.PXq9f1).toUpperCase();
  obj9.value = videoUploadQuality;
  obj9.onChange = function updateVideoUploadQuality(videoUploadQuality) {
    callback5({ videoUploadQuality, viewImageDescriptions: setting4, lowQualityImageMode: closure_1, dataSavingMode });
  };
  const intl8 = arg1(dependencyMap[21]).intl;
  obj9.description = intl8.format(arg1(dependencyMap[21]).t.Up+hSO, { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  obj9.hasIcons = false;
  const obj10 = {};
  const intl9 = arg1(dependencyMap[21]).intl;
  obj10.label = intl9.string(arg1(dependencyMap[21]).t.cWGW5d);
  obj10.value = VideoQualitySettings.BEST;
  const items7 = [callback(arg1(dependencyMap[27]).TableRadioRow, obj10), , ];
  const obj11 = {};
  const intl10 = arg1(dependencyMap[21]).intl;
  obj11.label = intl10.string(arg1(dependencyMap[21]).t.5hKnyC);
  obj11.value = VideoQualitySettings.STANDARD;
  items7[1] = callback(arg1(dependencyMap[27]).TableRadioRow, obj11);
  const obj12 = {};
  const intl11 = arg1(dependencyMap[21]).intl;
  obj12.label = intl11.string(arg1(dependencyMap[21]).t.y5k4ZJ);
  obj12.value = VideoQualitySettings.DATA_SAVER;
  items7[2] = callback(arg1(dependencyMap[27]).TableRadioRow, obj12);
  obj9.children = items7;
  const items8 = [callback2(arg1(dependencyMap[26]).TableRadioGroup, obj9), ];
  const str = intl7.string(arg1(dependencyMap[21]).t.PXq9f1);
  items8[1] = !result && function renderNitroUpsellText() {
    let obj = { style: tmp2.nitroUpsell };
    obj = { source: callback(videoUploadQuality[19]), size: tmp2(videoUploadQuality[18]).Icon.Sizes.SMALL, style: tmp2.nitroIcon };
    const items = [callback2(tmp2(videoUploadQuality[18]).Icon, obj), ];
    obj = { cachedAt: "y", edpbxy: "isArray", style: { marginLeft: 4 } };
    const intl = tmp2(videoUploadQuality[21]).intl;
    obj.children = intl.format(tmp2(videoUploadQuality[21]).t.uW1zul, {
      onClick() {
        callback(closure_2[17]).setSection(constants.PREMIUM);
        const obj = callback(closure_2[17]);
      }
    });
    items[1] = callback2(tmp2(videoUploadQuality[20]).Text, obj);
    obj.children = items;
    return callback3(dataSavingMode, obj);
  }();
  obj8.children = items8;
  items6[1] = callback2(View, obj8);
  const obj13 = {};
  const intl12 = arg1(dependencyMap[21]).intl;
  obj13.title = intl12.string(arg1(dependencyMap[21]).t.fyG8t2);
  const intl13 = arg1(dependencyMap[21]).intl;
  obj13.description = intl13.string(arg1(dependencyMap[21]).t.wC0+Ph);
  obj13.hasIcons = false;
  const obj14 = {};
  const intl14 = arg1(dependencyMap[21]).intl;
  obj14.label = intl14.string(arg1(dependencyMap[21]).t.ix8XIj);
  obj14.value = dataSavingMode;
  obj14.onValueChange = function toggleDataSavingMode(dataSavingMode) {
    callback4({ videoUploadQuality, viewImageDescriptions: setting4, lowQualityImageMode: closure_1, dataSavingMode });
  };
  obj13.children = callback(arg1(dependencyMap[25]).TableSwitchRow, obj14);
  items6[2] = callback(arg1(dependencyMap[24]).TableRowGroup, obj13);
  const obj15 = {};
  const intl15 = arg1(dependencyMap[21]).intl;
  obj15.title = intl15.string(arg1(dependencyMap[21]).t.PWZOn4);
  obj15.hasIcons = false;
  const obj16 = {};
  const intl16 = arg1(dependencyMap[21]).intl;
  obj16.label = intl16.string(arg1(dependencyMap[21]).t.5bK9vw);
  obj16.value = setting2;
  obj16.onValueChange = arg1(dependencyMap[11]).RenderEmbeds.updateSetting;
  obj15.children = callback(arg1(dependencyMap[25]).TableSwitchRow, obj16);
  items6[3] = callback(arg1(dependencyMap[24]).TableRowGroup, obj15);
  const obj17 = {};
  const intl17 = arg1(dependencyMap[21]).intl;
  obj17.title = intl17.string(arg1(dependencyMap[21]).t.sMOuuS);
  obj17.hasIcons = false;
  const obj18 = {};
  const intl18 = arg1(dependencyMap[21]).intl;
  obj18.label = intl18.string(arg1(dependencyMap[21]).t.zge/fP);
  obj18.value = setting3;
  obj18.onValueChange = arg1(dependencyMap[11]).RenderReactions.updateSetting;
  obj17.children = callback(arg1(dependencyMap[25]).TableSwitchRow, obj18);
  items6[4] = callback(arg1(dependencyMap[24]).TableRowGroup, obj17);
  const obj19 = {};
  const intl19 = arg1(dependencyMap[21]).intl;
  obj19.title = intl19.string(arg1(dependencyMap[21]).t.BkuOO6);
  const intl20 = arg1(dependencyMap[21]).intl;
  obj19.description = intl20.string(arg1(dependencyMap[21]).t.p4IKE9);
  obj19.hasIcons = false;
  const obj20 = {};
  const intl21 = arg1(dependencyMap[21]).intl;
  obj20.label = intl21.string(arg1(dependencyMap[21]).t.3340dY);
  obj20.value = false !== stateFromStores2;
  obj20.onValueChange = function handleSync(shouldSync) {
    const result = callback(videoUploadQuality[12]).setShouldSyncTextSettings(shouldSync);
  };
  obj19.children = callback(arg1(dependencyMap[25]).TableSwitchRow, obj20);
  items6[5] = callback(arg1(dependencyMap[24]).TableRowGroup, obj19);
  obj1.children = items6;
  obj.children = callback2(arg1(dependencyMap[23]).Stack, obj1);
  obj.children = callback(arg1(dependencyMap[22]).Form, obj);
  return callback(View, obj);
};
export const setStickerAutocomplete = function setStickerAutocomplete(enabled) {
  let obj = importDefault(dependencyMap[10]);
  obj = { enabled, location: obj };
  obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
  obj.track(constants.STICKERS_IN_AUTOCOMPLETE_TOGGLED, obj);
  const IncludeStickersInAutocomplete = arg1(dependencyMap[11]).IncludeStickersInAutocomplete;
  IncludeStickersInAutocomplete.updateSetting(enabled);
};
export const setLowQualityImageMode = function setLowQualityImageMode(lowQualityImageMode) {
  lowQualityImageMode = lowQualityImageMode.lowQualityImageMode;
  trackSettingsUpdated("low_quality_image_mode", lowQualityImageMode.videoUploadQuality, lowQualityImageMode.viewImageDescriptions, lowQualityImageMode, lowQualityImageMode.dataSavingMode);
  const result = importDefault(dependencyMap[12]).updatedUnsyncedSettings({ lowQualityImageMode });
};
export { setDataSavingMode };
export { setVideoUploadQuality };
export { setImageDescriptions };
