// Module ID: 15675
// Function ID: 15676
// Name: UserSettingsText
// Dependencies: [19, 17, 1390, 4734, 1206, 1207, 1085, 21, 5091, 587, 1265, 2041, 5259, 558, 576, 4779, 504, 4728, 1503, 6678, 6269, 1126, 6889, 1200, 9741, 5087, 6267, 6266, 8563, 5374, 2]
// Exports: setDataSavingMode, setImageDescriptions, setLowQualityImageMode, setStickerAutocomplete, setVideoUploadQuality

// Module 15675 (UserSettingsText)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl23 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import UnsyncedUserSettingsStore2 from "UnsyncedUserSettingsStore" /* 1207 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import Text_Text from "Text/Text" /* 5087 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5259 */;
import TableRadioRow4 from "TableRadioRow" /* 6266 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6267 */;
import TableRowGroup7 from "TableRowGroup" /* 6269 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6678 */;
import TableSwitchRow8 from "TableSwitchRow" /* 6889 */;
import AssetRegistryDefault from "AssetRegistry" /* 9741 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1206 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const UnsyncedUserSettingsStore = UnsyncedUserSettingsStore2;
let _require, closure_4;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let size;
let unpackModuleId;
const View = react_native.View;
const VideoQualitySettings = UnsyncedUserSettingsStore2.VideoQualitySettings;
({ AnalyticEvents: c9, AnalyticsSections: c10, UserSettingsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { flex: { flex: 1 }, nitroUpsell: { flexDirection: "row", alignItems: "center" }, nitroIcon: size };
size = { width: 16, height: 16, tintColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_15 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsText() {
  let Stack;
  let closure_0;
  let dataSavingMode;
  let items4;
  let obj6;
  let setting;
  let setting1;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp = _require;
  let tmp2 = setting1;
  let obj = require("react");
  const cResult = obj.c(74);
  let obj2 = require("useToken");
  const token = obj2.useToken(setting(setting1[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_15();
  _require = tmp6;
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const tmp4 = setting;
  setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = require("UserSettings").RenderReactions;
  const setting3 = RenderReactions.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [dataSavingMode];
    class S {
      constructor() {
        return { lowQualityImageMode: dataSavingMode.dataSavingMode, videoUploadQuality: dataSavingMode.videoUploadQuality, dataSavingMode: dataSavingMode.dataSavingMode };
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp11 = items;
    tmp12 = S;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult = tmp(tmp2[16]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp11, tmp12);
  const lowQualityImageMode = stateFromStoresObject.lowQualityImageMode;
  const videoUploadQuality = stateFromStoresObject.videoUploadQuality;
  dataSavingMode = stateFromStoresObject.dataSavingMode;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [lowQualityImageMode];
    class D {
      constructor() {
        return lowQualityImageMode.getPremiumTypeSubscription();
      }
    }
    cResult[2] = items1;
    cResult[3] = D;
    tmp16 = D;
    tmp15 = items1;
  } else {
    tmp15 = cResult[2];
    tmp16 = cResult[3];
  }
  const tmpResult6 = tmp(tmp2[16]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp15, tmp16);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [setting3];
    class C {
      constructor() {
        return setting3.getCurrentUser();
      }
    }
    cResult[4] = items2;
    cResult[5] = C;
    tmp20 = C;
    tmp19 = items2;
  } else {
    tmp19 = cResult[4];
    tmp20 = cResult[5];
  }
  const tmpResult7 = tmp(tmp2[16]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp19, tmp20);
  if (cResult[6] === stateFromStores) {
    let tmp23;
    let tmp27;
    let tmp26;
    let tmp31;
    if (cResult[7] === stateFromStores1) {
      tmp23 = cResult[8];
    }
    let closure_8 = tmp23;
    const _Symbol = Symbol;
    class C {
      constructor() {
        return setting3.getCurrentUser();
      }
    }
    if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [videoUploadQuality];
      class N {
        constructor() {
          return videoUploadQuality.shouldSync("text");
        }
      }
      cResult[9] = items3;
      cResult[10] = N;
      tmp27 = N;
      tmp26 = items3;
    } else {
      tmp26 = cResult[9];
      tmp27 = cResult[10];
    }
    const tmpResult8 = tmp(tmp2[16]);
    const stateFromStores2 = tmpResult8.useStateFromStores(tmp26, tmp27);
    let ViewImageDescriptions = tmp(tmp2[11]).ViewImageDescriptions;
    const setting4 = ViewImageDescriptions.useSetting();
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      function handleSync(shouldSync) {
        const obj = setting(setting1[12]);
        const result = obj.setShouldSyncTextSettings(shouldSync);
      }
      cResult[11] = handleSync;
      class N {
        constructor() {
          return videoUploadQuality.shouldSync("text");
        }
      }
    } else {
      tmp31 = cResult[11];
    }
    const onValueChange = tmp31;
    if (cResult[12] === lowQualityImageMode) {
      if (cResult[13] === videoUploadQuality) {
        let tmp32;
        if (cResult[14] === setting4) {
          tmp32 = cResult[15];
        }
        const onValueChange2 = tmp32;
        if (cResult[16] === dataSavingMode) {
          if (cResult[17] === lowQualityImageMode) {
            let tmp33;
            if (cResult[18] === setting4) {
              tmp33 = cResult[19];
            }
            const onChange = tmp33;
            if (cResult[20] === dataSavingMode) {
              if (cResult[21] === lowQualityImageMode) {
                let tmp35;
                let tmp39;
                if (cResult[22] === videoUploadQuality) {
                  tmp35 = cResult[23];
                }
                const onValueChange3 = tmp35;
                tmp(tmp2[18]);
                class N {
                  constructor() {
                    return videoUploadQuality.shouldSync("text");
                  }
                }
                closure_15 = tmp38;
                if (cResult[24] !== tmp38) {
                  function navigateToNitroPage() {
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(unpackModuleId.PREMIUM);
                    closure_15.push(unpackModuleId.PREMIUM, { isFromTextSection: true });
                  }
                  cResult[24] = tmp38;
                  class N {
                    constructor() {
                      return videoUploadQuality.shouldSync("text");
                    }
                  }
                  cResult[25] = navigateToNitroPage;
                  tmp39 = navigateToNitroPage;
                } else {
                  tmp39 = cResult[25];
                }
                let closure_16 = tmp39;
                if (cResult[26] === setting) {
                  if (cResult[27] === setting1) {
                    if (cResult[28] === tmp35) {
                      let tmp41;
                      let tmp42;
                      if (cResult[31] !== setting2) {
                        function renderEmbedsSection() {
                          let TableSwitchRow;
                          let intl;
                          let intl2;
                          let obj2;
                          const obj = { title: intl.string(intl23.t.PWZOn4), hasIcons: false, children: authStore2(TableSwitchRow, obj2) };
                          const TableRowGroup = TableRowGroup7.TableRowGroup;
                          intl = intl23.intl;
                          obj2 = { label: intl2.string(intl23.t["5bK9vw"]), value: setting2, onValueChange: UserSettings.RenderEmbeds.updateSetting };
                          TableSwitchRow = TableSwitchRow8.TableSwitchRow;
                          intl2 = intl23.intl;
                          return authStore2(TableRowGroup, obj);
                        }
                        cResult[31] = setting2;
                        class N {
                          constructor() {
                            return videoUploadQuality.shouldSync("text");
                          }
                        }
                        cResult[32] = renderEmbedsSection;
                        tmp41 = renderEmbedsSection;
                      } else {
                        tmp41 = cResult[32];
                      }
                      if (cResult[33] !== setting3) {
                        function renderEmojiSection() {
                          let TableSwitchRow;
                          let intl;
                          let intl2;
                          let obj2;
                          const obj = { title: intl.string(intl23.t.sMOuuS), hasIcons: false, children: authStore2(TableSwitchRow, obj2) };
                          const TableRowGroup = TableRowGroup7.TableRowGroup;
                          intl = intl23.intl;
                          obj2 = { label: intl2.string(intl23.t["zge/fP"]), value: setting3, onValueChange: UserSettings.RenderReactions.updateSetting };
                          TableSwitchRow = TableSwitchRow8.TableSwitchRow;
                          intl2 = intl23.intl;
                          return authStore2(TableRowGroup, obj);
                        }
                        cResult[33] = setting3;
                        class N {
                          constructor() {
                            return videoUploadQuality.shouldSync("text");
                          }
                        }
                        cResult[34] = renderEmojiSection;
                        tmp42 = renderEmojiSection;
                      } else {
                        tmp42 = cResult[34];
                      }
                      class N {
                        constructor() {
                          return videoUploadQuality.shouldSync("text");
                        }
                      }
                      if (cResult[37] === tmp39) {
                        if (cResult[38] === tmp6.nitroIcon) {
                          let tmp44;
                          if (cResult[39] === tmp6.nitroUpsell) {
                            tmp44 = cResult[40];
                          }
                          let closure_17 = tmp44;
                          if (cResult[41] === tmp44) {
                            if (cResult[42] === tmp33) {
                              if (cResult[43] === tmp23) {
                                let tmp45;
                                if (cResult[44] === videoUploadQuality) {
                                  tmp45 = cResult[45];
                                }
                                if (cResult[46] === dataSavingMode) {
                                  let tmp47;
                                  let tmp48;
                                  let tmp50;
                                  let tmp52;
                                  let tmp54;
                                  let tmp56;
                                  let tmp58;
                                  if (cResult[47] === tmp32) {
                                    tmp47 = cResult[48];
                                  }
                                  const flex = tmp6.flex;
                                  if (cResult[49] !== token) {
                                    let obj3 = { paddingHorizontal: token };
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[50] = obj3;
                                    tmp48 = obj3;
                                  } else {
                                    tmp48 = cResult[50];
                                  }
                                  class N {
                                    constructor() {
                                      return videoUploadQuality.shouldSync("text");
                                    }
                                  }
                                  if (cResult[53] !== tmp45) {
                                    const tmp45Result = tmp45();
                                    cResult[53] = tmp45;
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[54] = tmp45Result;
                                    tmp50 = tmp45Result;
                                  } else {
                                    tmp50 = cResult[54];
                                  }
                                  if (cResult[55] !== tmp47) {
                                    const tmp47Result = tmp47();
                                    cResult[55] = tmp47;
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[56] = tmp47Result;
                                    tmp52 = tmp47Result;
                                  } else {
                                    tmp52 = cResult[56];
                                  }
                                  if (cResult[57] !== tmp41) {
                                    const tmp41Result = tmp41();
                                    cResult[57] = tmp41;
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[58] = tmp41Result;
                                    tmp54 = tmp41Result;
                                  } else {
                                    tmp54 = cResult[58];
                                  }
                                  if (cResult[59] !== tmp42) {
                                    const tmp42Result = tmp42();
                                    cResult[59] = tmp42;
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[60] = tmp42Result;
                                    tmp56 = tmp42Result;
                                  } else {
                                    tmp56 = cResult[60];
                                  }
                                  if (cResult[61] !== tmp43) {
                                    const tmp43Result = tmp43();
                                    cResult[61] = tmp43;
                                    class N {
                                      constructor() {
                                        return videoUploadQuality.shouldSync("text");
                                      }
                                    }
                                    cResult[62] = tmp43Result;
                                    tmp58 = tmp43Result;
                                  } else {
                                    tmp58 = cResult[62];
                                  }
                                  if (cResult[63] === tmp48) {
                                    if (cResult[64] === tmp49) {
                                      if (cResult[65] === tmp50) {
                                        if (cResult[66] === tmp52) {
                                          if (cResult[67] === tmp54) {
                                            if (cResult[68] === tmp56) {
                                              let tmp60;
                                              if (cResult[69] === tmp58) {
                                                tmp60 = cResult[70];
                                              }
                                              if (cResult[71] === tmp6.flex) {
                                                let tmp64;
                                                if (cResult[72] === tmp60) {
                                                  tmp64 = cResult[73];
                                                }
                                                return tmp64;
                                              }
                                              class N {
                                                constructor() {
                                                  return videoUploadQuality.shouldSync("text");
                                                }
                                              }
                                              let obj4 = { style: flex, children: tmp60 };
                                              const tmp66 = onValueChange2(setting2, obj4);
                                              cResult[71] = tmp6.flex;
                                              cResult[72] = tmp60;
                                              cResult[73] = tmp66;
                                              tmp64 = tmp66;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let obj5 = { children: onChange(Stack, obj6) };
                                  const Form = tmp(tmp2[28]).Form;
                                  obj6 = { spacing: tmp4(tmp2[9]).space.PX_24, style: tmp48, children: items4 };
                                  Stack = tmp(tmp2[29]).Stack;
                                  items4 = [tmp49, tmp50, tmp52, tmp54, tmp56, tmp58];
                                  const tmp63 = onValueChange2(Form, obj5);
                                  cResult[63] = tmp48;
                                  cResult[64] = tmp49;
                                  cResult[65] = tmp50;
                                  cResult[66] = tmp52;
                                  cResult[67] = tmp54;
                                  cResult[68] = tmp56;
                                  cResult[69] = tmp58;
                                  cResult[70] = tmp63;
                                  tmp60 = tmp63;
                                }
                                function renderDataSavingModeSetting() {
                                  let TableSwitchRow;
                                  let intl;
                                  let intl2;
                                  let intl3;
                                  let obj2;
                                  const obj = { title: intl.string(intl23.t.fyG8t2), description: intl2.string(intl23.t["wC0+Ph"]), hasIcons: false, children: authStore2(TableSwitchRow, obj2) };
                                  const TableRowGroup = TableRowGroup7.TableRowGroup;
                                  intl = intl23.intl;
                                  intl2 = intl23.intl;
                                  obj2 = { label: intl3.string(intl23.t.ix8XIj), value: dataSavingMode, onValueChange: onValueChange2 };
                                  TableSwitchRow = TableSwitchRow8.TableSwitchRow;
                                  intl3 = intl23.intl;
                                  return authStore2(TableRowGroup, obj);
                                }
                                class N {
                                  constructor() {
                                    return videoUploadQuality.shouldSync("text");
                                  }
                                }
                                cResult[46] = dataSavingMode;
                                cResult[47] = tmp32;
                                cResult[48] = renderDataSavingModeSetting;
                                tmp47 = renderDataSavingModeSetting;
                              }
                            }
                          }
                          class N {
                            constructor() {
                              return videoUploadQuality.shouldSync("text");
                            }
                          }
                          cResult[41] = tmp44;
                          cResult[42] = tmp33;
                          cResult[43] = tmp23;
                          cResult[44] = videoUploadQuality;
                          cResult[45] = tmp46;
                          tmp45 = tmp46;
                        }
                      }
                      function renderNitroUpsellText() {
                        let intl;
                        let items;
                        let obj4;
                        const obj = { style: closure_0.nitroUpsell, children: items };
                        const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, style: closure_0.nitroIcon };
                        const Icon = native.Icon;
                        items = [authStore2(Icon, obj2), ];
                        const obj3 = { variant: "text-sm/medium", color: "text-muted", style: { marginLeft: 4 }, children: intl.format(intl23.t.uW1zul, obj4) };
                        const Text = Text_Text.Text;
                        intl = intl23.intl;
                        obj4 = {
                          onClick() {
                            return closure_1_16();
                          }
                        };
                        items[1] = authStore2(Text, obj3);
                        return map1(View, obj);
                      }
                      cResult[37] = tmp39;
                      cResult[38] = tmp6.nitroIcon;
                      cResult[39] = tmp6.nitroUpsell;
                      cResult[40] = renderNitroUpsellText;
                      tmp44 = renderNitroUpsellText;
                    }
                  }
                }
                function renderInlineMediaSection() {
                  let TableSwitchRow3;
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  let intl5;
                  let intl6;
                  let items;
                  let items1;
                  let obj6;
                  const obj = { children: items1 };
                  const obj2 = { title: intl.string(intl23.t["9nyle0"]), description: intl2.format(intl23.t.qjjvqO, { maxSize: 8 }), hasIcons: false, children: items };
                  const TableRowGroup = TableRowGroup7.TableRowGroup;
                  intl = intl23.intl;
                  intl2 = intl23.intl;
                  const obj3 = { label: intl3.string(intl23.t.U47N1p), value: setting1, onValueChange: UserSettings.InlineEmbedMedia.updateSetting };
                  const TableSwitchRow = TableSwitchRow8.TableSwitchRow;
                  intl3 = intl23.intl;
                  items = [authStore2(TableSwitchRow, obj3), ];
                  const obj4 = { label: intl4.string(intl23.t.VP11No), value: setting, onValueChange: UserSettings.InlineAttachmentMedia.updateSetting };
                  const TableSwitchRow2 = TableSwitchRow8.TableSwitchRow;
                  intl4 = intl23.intl;
                  items[1] = authStore2(TableSwitchRow2, obj4);
                  items1 = [map1(TableRowGroup, obj2), ];
                  const obj5 = { description: intl5.string(intl23.t.T0rbtM), hasIcons: false, children: authStore2(TableSwitchRow3, obj6) };
                  const TableRowGroup2 = TableRowGroup7.TableRowGroup;
                  intl5 = intl23.intl;
                  obj6 = { label: intl6.string(intl23.t["w8j+yW"]), value: setting4, onValueChange: onValueChange3 };
                  TableSwitchRow3 = TableSwitchRow8.TableSwitchRow;
                  intl6 = intl23.intl;
                  items1[1] = authStore2(TableRowGroup2, obj5);
                  return map1(authStore3, obj);
                }
                cResult[26] = setting;
                cResult[27] = setting1;
                cResult[28] = tmp35;
                cResult[29] = setting4;
                cResult[30] = renderInlineMediaSection;
              }
            }
            class N {
              constructor() {
                return videoUploadQuality.shouldSync("text");
              }
            }
            cResult[20] = dataSavingMode;
            cResult[21] = lowQualityImageMode;
            cResult[22] = videoUploadQuality;
            cResult[23] = tmp36;
            tmp35 = tmp36;
          }
        }
        class N {
          constructor() {
            return videoUploadQuality.shouldSync("text");
          }
        }
        cResult[16] = dataSavingMode;
        cResult[17] = lowQualityImageMode;
        cResult[18] = setting4;
        cResult[19] = tmp34;
        tmp33 = tmp34;
      }
    }
    function toggleDataSavingMode(data_saving_mode) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions: setting4, low_quality_image_mode: lowQualityImageMode, data_saving_mode, updated_setting: "data_saving_mode" };
      obj.track(stateFromStores2.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
      const obj3 = UserSettingsActionCreatorsDefault;
      const obj4 = { dataSavingMode: data_saving_mode };
      const result = obj3.updatedUnsyncedSettings(obj4);
    }
    cResult[12] = lowQualityImageMode;
    cResult[13] = videoUploadQuality;
    cResult[14] = setting4;
    cResult[15] = toggleDataSavingMode;
    tmp32 = toggleDataSavingMode;
  }
  const tmpResult10 = tmp(tmp2[17]);
  let result = tmpResult10.hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = result;
  tmp23 = result;
}) : (function UserSettingsText() {
  let Form;
  let TableSwitchRow3;
  let TableSwitchRow4;
  let TableSwitchRow5;
  let TableSwitchRow6;
  let TableSwitchRow7;
  let dataSavingMode;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let items7;
  let items9;
  let low_quality_image_mode;
  let obj15;
  let obj23;
  let obj24;
  let obj26;
  let obj28;
  let obj30;
  let obj32;
  let premiumTypeSubscription;
  let require;
  let str;
  let videoUploadQuality;
  let obj = require("useToken");
  const token = obj.useToken(videoUploadQuality(dataSavingMode[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_15();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = require("UserSettings").RenderReactions;
  const setting3 = RenderReactions.useSetting();
  let obj2 = require("get initialized");
  const items = [UnsyncedUserSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ lowQualityImageMode: UnsyncedUserSettingsStore.dataSavingMode, videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode }));
  const tmp3 = videoUploadQuality;
  ({ lowQualityImageMode: require, videoUploadQuality } = stateFromStoresObject);
  dataSavingMode = stateFromStoresObject.dataSavingMode;
  let obj3 = require("get initialized");
  const items1 = [SubscriptionStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj4 = require("get initialized");
  const items2 = [closure_4];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => closure_4.getCurrentUser());
  const obj5 = require("PremiumUtils");
  let result = obj5.hasPremiumSubscriptionToDisplay(stateFromStores1, stateFromStores);
  const items3 = [SelectivelySyncedUserSettingsStore];
  const obj6 = require("get initialized");
  const stateFromStores2 = obj6.useStateFromStores(items3, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  let ViewImageDescriptions = require("UserSettings").ViewImageDescriptions;
  const setting4 = ViewImageDescriptions.useSetting();
  const obj7 = require("useNavigation");
  closure_4 = obj7.useNavigation();
  const obj8 = { style: tmp5.flex, children: closure_12(Form, obj24) };
  Form = require("Form").Form;
  const obj9 = { spacing: videoUploadQuality(dataSavingMode[9]).space.PX_24, style: { paddingHorizontal: token }, children: items6 };
  const Stack = require("Stack/Stack").Stack;
  const obj10 = { children: items5 };
  const obj11 = { title: intl.string(require("intl").t["9nyle0"]), description: intl2.format(require("intl").t.qjjvqO, { maxSize: 8 }), hasIcons: false, children: items4 };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  const obj12 = { label: intl3.string(require("intl").t.U47N1p), value: setting1, onValueChange: require("UserSettings").InlineEmbedMedia.updateSetting };
  const TableSwitchRow = require("TableSwitchRow").TableSwitchRow;
  intl3 = require("intl").intl;
  items4 = [closure_12(TableSwitchRow, obj12), ];
  const obj13 = { label: intl4.string(require("intl").t.VP11No), value: setting, onValueChange: require("UserSettings").InlineAttachmentMedia.updateSetting };
  const TableSwitchRow2 = require("TableSwitchRow").TableSwitchRow;
  intl4 = require("intl").intl;
  items4[1] = closure_12(TableSwitchRow2, obj13);
  items5 = [closure_13(TableRowGroup, obj11), ];
  const obj14 = { description: intl5.string(require("intl").t.T0rbtM), hasIcons: false, children: closure_12(TableSwitchRow3, obj15) };
  const TableRowGroup2 = require("TableRowGroup").TableRowGroup;
  intl5 = require("intl").intl;
  obj15 = {
    label: intl6.string(require("intl").t["w8j+yW"]),
    value: setting4,
    onValueChange: function updateImageDescriptions(image_descriptions) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions, low_quality_image_mode: require, data_saving_mode: dataSavingMode, updated_setting: "image_descriptions" };
      obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
      const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
      ViewImageDescriptions.updateSetting(image_descriptions);
    }
  };
  TableSwitchRow3 = require("TableSwitchRow").TableSwitchRow;
  intl6 = require("intl").intl;
  items5[1] = closure_12(TableRowGroup2, obj14);
  items6 = [closure_13(closure_14, obj10), , , , , ];
  const obj16 = {
    title: str.toUpperCase(),
    value: videoUploadQuality,
    onChange: function updateVideoUploadQuality(video_upload_quality) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_upload_quality, image_descriptions: setting4, low_quality_image_mode: require, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" };
      obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
      const obj3 = UserSettingsActionCreatorsDefault;
      const obj4 = { videoUploadQuality: video_upload_quality };
      const result = obj3.updatedUnsyncedSettings(obj4);
    },
    description: intl8.format(require("intl").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" }),
    hasIcons: false,
    children: items7
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const intl7 = require("intl").intl;
  str = intl7.string(require("intl").t.PXq9f1);
  intl8 = require("intl").intl;
  const obj17 = { label: intl9.string(require("intl").t.cWGW5d), value: VideoQualitySettings.BEST };
  const TableRadioRow = require("TableRadioRow").TableRadioRow;
  intl9 = require("intl").intl;
  items7 = [closure_12(TableRadioRow, obj17), , ];
  const obj18 = { label: intl10.string(require("intl").t["5hKnyC"]), value: VideoQualitySettings.STANDARD };
  const TableRadioRow2 = require("TableRadioRow").TableRadioRow;
  intl10 = require("intl").intl;
  items7[1] = closure_12(TableRadioRow2, obj18);
  const obj19 = { label: intl11.string(require("intl").t.y5k4ZJ), value: VideoQualitySettings.DATA_SAVER };
  const TableRadioRow3 = require("TableRadioRow").TableRadioRow;
  intl11 = require("intl").intl;
  items7[2] = closure_12(TableRadioRow3, obj19);
  const items8 = [closure_13(TableRadioGroup, obj16), ];
  let tmp18Result = !result;
  if (tmp18Result) {
    const obj20 = { style: tmp5.nitroUpsell, children: items9 };
    const obj21 = { source: tmp3(dataSavingMode[24]), size: require("native").Icon.Sizes.SMALL, style: tmp5.nitroIcon };
    const Icon = tmp(tmp2[23]).Icon;
    items9 = [closure_12(Icon, obj21), ];
    const obj22 = { variant: "text-sm/medium", color: "text-muted", style: { marginLeft: 4 }, children: intl12.format(require("intl").t.uW1zul, obj23) };
    const Text = tmp(tmp2[25]).Text;
    intl12 = tmp(tmp2[21]).intl;
    obj23 = {
      onClick() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(unpackModuleId.PREMIUM);
          closure_4.push(unpackModuleId.PREMIUM, { isFromTextSection: true });
        }
    };
    items9[1] = closure_12(Text, obj22);
    tmp18Result = tmp18(tmp17, obj20);
  }
  items8[1] = tmp18Result;
  function handleSync(shouldSync) {
    const obj = videoUploadQuality(dataSavingMode[12]);
    const result = obj.setShouldSyncTextSettings(shouldSync);
  }
  function toggleDataSavingMode(data_saving_mode) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_upload_quality: videoUploadQuality, image_descriptions: setting4, low_quality_image_mode: require, data_saving_mode, updated_setting: "data_saving_mode" };
    obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, obj2);
    const obj3 = UserSettingsActionCreatorsDefault;
    const obj4 = { dataSavingMode: data_saving_mode };
    const result = obj3.updatedUnsyncedSettings(obj4);
  }
  obj24 = { children: closure_13(Stack, obj9) };
  items6[1] = closure_13(setting4, { children: items8 });
  const obj25 = { title: intl13.string(require("intl").t.fyG8t2), description: intl14.string(require("intl").t["wC0+Ph"]), hasIcons: false, children: closure_12(TableSwitchRow4, obj26) };
  const TableRowGroup3 = tmp(tmp2[20]).TableRowGroup;
  intl13 = tmp(tmp2[21]).intl;
  intl14 = tmp(tmp2[21]).intl;
  obj26 = { label: intl15.string(require("intl").t.ix8XIj), value: dataSavingMode, onValueChange: toggleDataSavingMode };
  TableSwitchRow4 = tmp(tmp2[22]).TableSwitchRow;
  intl15 = tmp(tmp2[21]).intl;
  items6[2] = closure_12(TableRowGroup3, obj25);
  const obj27 = { title: intl16.string(require("intl").t.PWZOn4), hasIcons: false, children: closure_12(TableSwitchRow5, obj28) };
  const TableRowGroup4 = tmp(tmp2[20]).TableRowGroup;
  intl16 = tmp(tmp2[21]).intl;
  obj28 = { label: intl17.string(require("intl").t["5bK9vw"]), value: setting2, onValueChange: require("UserSettings").RenderEmbeds.updateSetting };
  TableSwitchRow5 = tmp(tmp2[22]).TableSwitchRow;
  intl17 = tmp(tmp2[21]).intl;
  items6[3] = closure_12(TableRowGroup4, obj27);
  const obj29 = { title: intl18.string(require("intl").t.sMOuuS), hasIcons: false, children: closure_12(TableSwitchRow6, obj30) };
  const TableRowGroup5 = tmp(tmp2[20]).TableRowGroup;
  intl18 = tmp(tmp2[21]).intl;
  obj30 = { label: intl19.string(require("intl").t["zge/fP"]), value: setting3, onValueChange: require("UserSettings").RenderReactions.updateSetting };
  TableSwitchRow6 = tmp(tmp2[22]).TableSwitchRow;
  intl19 = tmp(tmp2[21]).intl;
  items6[4] = closure_12(TableRowGroup5, obj29);
  const obj31 = { title: intl20.string(require("intl").t.BkuOO6), description: intl21.string(require("intl").t.p4IKE9), hasIcons: false, children: closure_12(TableSwitchRow7, obj32) };
  const TableRowGroup6 = tmp(tmp2[20]).TableRowGroup;
  intl20 = tmp(tmp2[21]).intl;
  intl21 = tmp(tmp2[21]).intl;
  obj32 = { label: intl22.string(require("intl").t["3340dY"]), value: false !== stateFromStores2, onValueChange: handleSync };
  TableSwitchRow7 = tmp(tmp2[22]).TableSwitchRow;
  intl22 = tmp(tmp2[21]).intl;
  items6[5] = closure_12(TableRowGroup6, obj31);
  return closure_12(setting4, obj8);
});
function setDataSavingMode(dataSavingMode) {
  let lowQualityImageMode;
  let videoUploadQuality;
  let viewImageDescriptions;
  dataSavingMode = dataSavingMode.dataSavingMode;
  ({ videoUploadQuality, viewImageDescriptions, lowQualityImageMode } = dataSavingMode);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "data_saving_mode" });
  const obj2 = UserSettingsActionCreatorsDefault;
  const result = obj2.updatedUnsyncedSettings({ dataSavingMode });
}
function setVideoUploadQuality(videoUploadQuality) {
  let dataSavingMode;
  let lowQualityImageMode;
  let viewImageDescriptions;
  videoUploadQuality = videoUploadQuality.videoUploadQuality;
  ({ viewImageDescriptions, lowQualityImageMode, dataSavingMode } = videoUploadQuality);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "video_upload_quality" });
  const obj2 = UserSettingsActionCreatorsDefault;
  const result = obj2.updatedUnsyncedSettings({ videoUploadQuality });
}
function setImageDescriptions(viewImageDescriptions) {
  let dataSavingMode;
  let lowQualityImageMode;
  let videoUploadQuality;
  viewImageDescriptions = viewImageDescriptions.viewImageDescriptions;
  ({ videoUploadQuality, lowQualityImageMode, dataSavingMode } = viewImageDescriptions);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "image_descriptions" });
  const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
  ViewImageDescriptions.updateSetting(viewImageDescriptions);
}
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/chat/native/UserSettingsText.tsx");

export default tmp5;
export const setStickerAutocomplete = function setStickerAutocomplete(enabled) {
  let obj3;
  const obj2 = { enabled, location: obj3 };
  obj3 = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.STICKERS_IN_AUTOCOMPLETE_TOGGLED, obj2);
  const IncludeStickersInAutocomplete = UserSettings.IncludeStickersInAutocomplete;
  IncludeStickersInAutocomplete.updateSetting(enabled);
};
export const setLowQualityImageMode = function setLowQualityImageMode(lowQualityImageMode) {
  let dataSavingMode;
  let videoUploadQuality;
  let viewImageDescriptions;
  lowQualityImageMode = lowQualityImageMode.lowQualityImageMode;
  ({ videoUploadQuality, viewImageDescriptions, dataSavingMode } = lowQualityImageMode);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.IMAGE_VIDEO_DATA_SETTINGS_UPDATED, { video_upload_quality: videoUploadQuality, image_descriptions: viewImageDescriptions, low_quality_image_mode: lowQualityImageMode, data_saving_mode: dataSavingMode, updated_setting: "low_quality_image_mode" });
  const obj2 = UserSettingsActionCreatorsDefault;
  const result = obj2.updatedUnsyncedSettings({ lowQualityImageMode });
};
export { setDataSavingMode };
export { setVideoUploadQuality };
export { setImageDescriptions };
