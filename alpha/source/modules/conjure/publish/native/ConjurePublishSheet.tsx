// Module ID: 12287
// Function ID: 12288
// Name: ConjurePublishSheet
// Dependencies: [5, 19, 17, 6773, 21, 9483, 8572, 6774, 11797, 12288, 12290, 10951, 4971, 587, 5663, 558, 576, 11874, 12253, 504, 12292, 8577, 1128, 3830, 5210, 11811, 11854, 7008, 7180, 5234, 6883, 11838, 5244, 7298, 5604, 2]
// Exports: default

// Module 12287 (ConjurePublishSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import useChannelNameDefault from "useChannelName" /* 5604 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8572 */;
import ScreenIcon from "ScreenIcon" /* 9483 */;
import ShieldIcon from "ShieldIcon" /* 10951 */;
import RobotIcon from "RobotIcon" /* 11797 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11874 */;
import useConjureNativePublishOptionsDefault from "useConjureNativePublishOptions" /* 12253 */;
import ActivitiesIcon from "ActivitiesIcon" /* 12288 */;
import BadgeIcon from "BadgeIcon" /* 12290 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, c3, dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let tmp;
const Text_Text = tmp(5234);
const AppsIcon = tmp(8577);
function showCriticalToast(text) {
  obj = ToastActionCreatorsDefault;
  obj2 = { text, variant: "critical" };
  obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
}
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjurePublishSheet_str = "ConjurePublishSheet";
let obj = { screen_capture: ScreenIcon.ScreenIcon, connect_user_to_voice: VoiceNormalIcon.VoiceNormalIcon };
let obj2 = {};
obj2[ConjureProjectTypes.ConjureSupportedSurface.BOT] = RobotIcon.RobotIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = ActivitiesIcon.ActivitiesIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = BadgeIcon.BadgeIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = ShieldIcon.ShieldIcon;
let closure_12 = { initial: "initialDot", notPublished: "pendingRing", published: "publishedDot" };
let createStyles = createStyles_mod;
let obj3 = { content: obj4, nameGroup: obj5, sectionTitle: obj6, followingSection: obj7, row: obj8, sharingRow: obj9, onlyMeIcon: obj10, rowText: { flex: 1 }, footer: obj11, status: obj12, statusDot: size, initialDot: obj13, pendingRing: obj14, publishedDot: obj15 };
obj4 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
obj7 = { marginTop: -nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
obj10 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj11 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
size = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
obj13 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj14 = { borderWidth: 2, borderStyle: "dotted", borderColor: nativeDefault.colors.TEXT_BRAND };
obj15 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let closure_13 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishSheet(projectId) {
  let first;
  let tmp8;
  let tmp9;
  obj = projectId(576);
  const cResult = obj.c(8);
  const tmp = projectId;
  projectId = projectId.projectId;
  const entryPoint = projectId.entryPoint;
  const guildId = projectId.guildId;
  const tmp4 = useConjurePublishActionDefault;
  const tmp4Result = tmp4(projectId, useConjureNativePublishOptionsDefault(projectId, guildId));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function o() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === entryPoint) {
    if (cResult[5] === stateFromStores) {
      let tmp11;
      if (cResult[6] === tmp4Result) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  let tmp12 = null;
  if (null != tmp4Result) {
    tmp12 = null;
    if (null != stateFromStores) {
      obj2 = { project: stateFromStores, publish: tmp4Result, entryPoint };
      tmp12 = closure_6(closure_16, obj2);
    }
  }
  cResult[4] = entryPoint;
  cResult[5] = stateFromStores;
  cResult[6] = tmp4Result;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : (function ConjurePublishSheet(projectId) {
  let entryPoint;
  let guildId;
  projectId = projectId.projectId;
  ({ guildId, entryPoint } = projectId);
  const tmp = useConjurePublishActionDefault;
  const tmpResult = tmp(projectId, useConjureNativePublishOptionsDefault(projectId, guildId));
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let tmp4 = null;
  if (null != tmpResult) {
    tmp4 = null;
    if (null != stateFromStores) {
      obj2 = { project: stateFromStores, publish: tmpResult, entryPoint };
      tmp4 = closure_6(closure_16, obj2);
    }
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishSheetBody(entryPoint) {
  let closure_2;
  let components;
  let editable;
  let identity;
  let initial;
  let intl;
  let intl2;
  let intl3;
  let intl6;
  let items1;
  let items2;
  let items3;
  let mapped1;
  let nameError;
  let project;
  let publish;
  let sharing;
  let tmp7;
  const tmp = publish;
  obj = publish(576);
  const cResult = obj.c(77);
  ({ project, publish } = entryPoint);
  entryPoint = entryPoint.entryPoint;
  const tmp4 = closure_13();
  const tmp6 = entryPoint(12292)(project, publish);
  dependencyMap = tmp6;
  ({ initial, editable, identity, sharing } = tmp6);
  if (cResult[0] === initial) {
    if (cResult[1] === tmp6.channels) {
      if (cResult[2] === tmp6.components) {
        let arr;
        if (cResult[3] === tmp6.initialChannelNames) {
          arr = cResult[4];
        }
        if (cResult[6] === entryPoint) {
          if (cResult[7] === tmp6) {
            let tmp13Result;
            if (cResult[10] === editable) {
              if (cResult[11] === identity) {
                if (cResult[12] === tmp6.saving) {
                  let tmp18Result;
                  if (cResult[15] === editable) {
                    if (cResult[16] === identity) {
                      if (cResult[17] === tmp6.description) {
                        if (cResult[18] === tmp6.displayName) {
                          if (cResult[19] === tmp6.name) {
                            if (cResult[20] === tmp6.nameError) {
                              if (cResult[21] === tmp6.saving) {
                                if (cResult[22] === tmp6.setName) {
                                  let tmp29;
                                  let tmp35;
                                  const _Symbol = Symbol;
                                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl4 = tmp(1128).intl;
                                    const stringResult = intl4.string(entryPoint(3830).BqNMms);
                                    cResult[25] = stringResult;
                                    tmp29 = stringResult;
                                  } else {
                                    tmp29 = cResult[25];
                                  }
                                  if (cResult[26] !== arr) {
                                    obj2 = { title: tmp29, rows: arr };
                                    cResult[26] = arr;
                                    cResult[27] = closure_6(closure_18, obj2);
                                    const tmp34 = closure_6(closure_18, obj2);
                                  }
                                  const _Symbol2 = Symbol;
                                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl5 = tmp(1128).intl;
                                    const stringResult1 = intl5.string(entryPoint(3830).LnqeFd);
                                    cResult[28] = stringResult1;
                                    tmp35 = stringResult1;
                                  } else {
                                    tmp35 = cResult[28];
                                  }
                                  if (cResult[29] !== tmp6.devicePermissions) {
                                    let tmp39;
                                    const _Symbol3 = Symbol;
                                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                                      class V {
                                        constructor(arg0) {
                                          let intl;
                                          obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                          intl = publish(closure_2[22]).intl;
                                          return closure_1_6(closure_1_19, obj, arg0);
                                        }
                                      }
                                      cResult[31] = V;
                                      tmp39 = V;
                                    } else {
                                      class V {
                                        constructor(arg0) {
                                          let intl;
                                          obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                          intl = publish(closure_2[22]).intl;
                                          return closure_1_6(closure_1_19, obj, arg0);
                                        }
                                      }
                                    }
                                    const devicePermissions = tmp6.devicePermissions;
                                    const mapped = devicePermissions.map(tmp39);
                                    cResult[29] = tmp6.devicePermissions;
                                    cResult[30] = mapped;
                                  } else {
                                    class V {
                                      constructor(arg0) {
                                        let intl;
                                        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                        intl = publish(closure_2[22]).intl;
                                        return closure_1_6(closure_1_19, obj, arg0);
                                      }
                                    }
                                  }
                                  if (cResult[32] === arr.length > 0) {
                                    class V {
                                      constructor(arg0) {
                                        let intl;
                                        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                        intl = publish(closure_2[22]).intl;
                                        return closure_1_6(closure_1_19, obj, arg0);
                                      }
                                    }
                                    if (cResult[35] === sharing) {
                                      class V {
                                        constructor(arg0) {
                                          let intl;
                                          obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                          intl = publish(closure_2[22]).intl;
                                          return closure_1_6(closure_1_19, obj, arg0);
                                        }
                                      }
                                    }
                                    let tmp48Result = null;
                                    if (null != sharing) {
                                      let tmp50Result;
                                      class V {
                                        constructor(arg0) {
                                          let intl;
                                          obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                          intl = publish(closure_2[22]).intl;
                                          return closure_1_6(closure_1_19, obj, arg0);
                                        }
                                      }
                                      let obj4 = { title: intl6.string(tmp5(3830).yCgX8i) };
                                      intl6 = tmp(1128).intl;
                                      const items = [closure_6(closure_17, obj4), ];
                                      const obj6 = { style: tmp4.sharingRow, children: items1 };
                                      if (null != sharing.guild) {
                                        class V {
                                          constructor(arg0) {
                                            let intl;
                                            obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                            intl = publish(closure_2[22]).intl;
                                            return closure_1_6(closure_1_19, obj, arg0);
                                          }
                                        }
                                        tmp55[0] = sharing.guild;
                                        const tmp5Result = entryPoint(6883);
                                        tmp55[1] = tmp(6883).GuildIconSizes.SMALL_36;
                                        tmp50Result = tmp50(tmp5Result, tmp55);
                                      } else {
                                        class V {
                                          constructor(arg0) {
                                            let intl;
                                            obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                            intl = publish(closure_2[22]).intl;
                                            return closure_1_6(closure_1_19, obj, arg0);
                                          }
                                        }
                                        tmp52[0] = tmp4.onlyMeIcon;
                                        const obj7 = { size: "xs", color: entryPoint(587).colors.ICON_DEFAULT };
                                        const UserIcon = tmp(11838).UserIcon;
                                        tmp52[1] = closure_6(UserIcon, obj7);
                                        tmp50Result = tmp50(tmp49, tmp52);
                                      }
                                      items1 = [tmp50Result, ];
                                      const guild = sharing.guild;
                                      let stringResult2;
                                      const obj8 = { style: tmp4.rowText, children: items2 };
                                      const Text = tmp(5234).Text;
                                      if (guild != null) {
                                        class V {
                                          constructor(arg0) {
                                            let intl;
                                            obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                            intl = publish(closure_2[22]).intl;
                                            return closure_1_6(closure_1_19, obj, arg0);
                                          }
                                        }
                                      }
                                      if (stringResult2 == null) {
                                        class V {
                                          constructor(arg0) {
                                            let intl;
                                            obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                            intl = publish(closure_2[22]).intl;
                                            return closure_1_6(closure_1_19, obj, arg0);
                                          }
                                        }
                                        stringResult2 = obj12.string(tmp5(3830)["37xgkF"]);
                                      }
                                      const obj9 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: stringResult2 };
                                      items2 = [closure_6(Text, obj9), ];
                                      let tmp50Result2 = null;
                                      if (null != sharing.caption) {
                                        class V {
                                          constructor(arg0) {
                                            let intl;
                                            obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                                            intl = publish(closure_2[22]).intl;
                                            return closure_1_6(closure_1_19, obj, arg0);
                                          }
                                        }
                                        tmp58[2] = sharing.caption;
                                        tmp50Result2 = tmp50(tmp(5234).Text, tmp58);
                                      }
                                      const obj10 = { children: items };
                                      items2[1] = tmp50Result2;
                                      items1[1] = tmp48(View, obj8);
                                      items[1] = tmp48(View, obj6);
                                      tmp48Result = tmp48(tmp49, obj10);
                                    }
                                    cResult[35] = sharing;
                                    cResult[36] = tmp4.onlyMeIcon;
                                    cResult[37] = tmp4.rowText;
                                    cResult[38] = tmp4.sharingRow;
                                    cResult[39] = tmp48Result;
                                  }
                                  const obj11 = { title: tmp35, following: arr.length > 0, rows: tmp38 };
                                  cResult[32] = arr.length > 0;
                                  cResult[33] = tmp38;
                                  cResult[34] = closure_6(closure_18, obj11);
                                  const tmp44 = closure_6(closure_18, obj11);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (editable) {
                    class V {
                      constructor(arg0) {
                        let intl;
                        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                        intl = publish(closure_2[22]).intl;
                        return closure_1_6(closure_1_19, obj, arg0);
                      }
                    }
                    const obj13 = { label: intl.string(entryPoint(3830).knevPu), value: null, onChange: null, maxLength: tmp(6774).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
                    const TextInput = tmp(7008).TextInput;
                    intl = tmp(1128).intl;
                    ({ name: obj3.value, setName: obj3.onChange } = tmp6);
                    ({ saving: obj3.disabled, nameError } = tmp6);
                    const tmp25 = closure_7;
                    if (nameError == null) {
                      class V {
                        constructor(arg0) {
                          let intl;
                          obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                          intl = publish(closure_2[22]).intl;
                          return closure_1_6(closure_1_19, obj, arg0);
                        }
                      }
                    }
                    const obj14 = { children: items3 };
                    items3 = [tmp26(TextInput, obj13), ];
                    const obj26 = { label: intl2.string(entryPoint(3830).ynaGa1), placeholder: intl3.string(entryPoint(3830)["I+3UTL"]), value: null, onChange: null, maxLength: tmp(6774).MAX_APP_DESCRIPTION_LENGTH, disabled: tmp6.saving };
                    const TextArea = tmp(7180).TextArea;
                    intl2 = tmp(1128).intl;
                    intl3 = tmp(1128).intl;
                    ({ description: obj5.value, setDescription: obj5.onChange } = identity);
                    items3[1] = tmp26(TextArea, obj26);
                    tmp18Result = tmp18(tmp25, obj14);
                  } else {
                    class V {
                      constructor(arg0) {
                        let intl;
                        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                        intl = publish(closure_2[22]).intl;
                        return closure_1_6(closure_1_19, obj, arg0);
                      }
                    }
                    tmp20[0] = tmp4.nameGroup;
                    const tmp21 = closure_6;
                    const obj27 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, accessibilityRole: "header", children: tmp6.displayName };
                    const items4 = [closure_6(tmp(5234).Text, obj27), ];
                    let tmp21Result = null;
                    const tmp19 = View;
                    if ("" !== tmp6.description) {
                      class V {
                        constructor(arg0) {
                          let intl;
                          obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                          intl = publish(closure_2[22]).intl;
                          return closure_1_6(closure_1_19, obj, arg0);
                        }
                      }
                      tmp23[3] = tmp6.description;
                      tmp21Result = tmp21(tmp(5234).Text, tmp23);
                    }
                    items4[1] = tmp21Result;
                    tmp20[1] = items4;
                    tmp18Result = tmp18(tmp19, tmp20);
                  }
                  cResult[15] = editable;
                  cResult[16] = identity;
                  cResult[17] = tmp6.description;
                  cResult[18] = tmp6.displayName;
                  cResult[19] = tmp6.name;
                  cResult[20] = tmp6.nameError;
                  cResult[21] = tmp6.saving;
                  cResult[22] = tmp6.setName;
                  cResult[23] = tmp4.nameGroup;
                  cResult[24] = tmp18Result;
                }
              }
            }
            if (editable) {
              class V {
                constructor(arg0) {
                  let intl;
                  obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                  intl = publish(closure_2[22]).intl;
                  return closure_1_6(closure_1_19, obj, arg0);
                }
              }
              tmp16[0] = identity.iconURL;
              tmp16[3] = tmp6.saving;
              tmp16[4] = identity.setIcon;
              tmp16[5] = function onError(text) {
                if (null != text) {
                  obj2 = { text, variant: "critical" };
                  obj = entryPoint(closure_2[14]);
                  obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
                }
              };
              tmp13Result = tmp13(tmp(11811).ConjureAppIconTile, tmp16);
            } else {
              class V {
                constructor(arg0) {
                  let intl;
                  obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
                  intl = publish(closure_2[22]).intl;
                  return closure_1_6(closure_1_19, obj, arg0);
                }
              }
              tmp14[0] = project;
              tmp13Result = tmp13(tmp5(11854), tmp14);
            }
            cResult[10] = editable;
            cResult[11] = identity;
            cResult[12] = tmp6.saving;
            cResult[13] = project;
            cResult[14] = tmp13Result;
          }
        }
        let closure_0 = _asyncToGenerator(async (arg0, value) => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c2;
            try {
              c3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c2 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj4 = { value: c2.save(), done: false };
                  return obj4;
                }
              } else if (1 === tmp4) {
                c2 = 0;
                const intl = tmp(closure_2_2[22]).intl;
                showCriticalToast(intl.string(entryPoint(closure_2_2[23]).Fi7boI));
                c3 = 3;
                return { value: "IconComponent", done: null };
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                c2 = 0;
                if (value) {
                  obj = entryPoint(closure_2_2[24]);
                  obj.hideActionSheet(ConjurePublishSheet_str);
                  tmp.run(c1);
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
            } catch (tmp21) {
              if (0 === c2) {
                c3 = 3;
                throw tmp21;
              } else {
                c1 = 1;
              }
            }
          }
        });
        function handlePublish() {
          return closure_0(...arguments);
        }
        cResult[6] = entryPoint;
        cResult[7] = tmp6;
        cResult[8] = publish;
        cResult[9] = handlePublish;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        let intl;
        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
        intl = publish(closure_2[22]).intl;
        return closure_1_6(closure_1_19, obj, arg0);
      }
    }
    cResult[5] = tmp8;
    tmp7 = tmp8;
  } else {
    class V {
      constructor(arg0) {
        let intl;
        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
        intl = publish(closure_2[22]).intl;
        return closure_1_6(closure_1_19, obj, arg0);
      }
    }
  }
  if (initial) {
    class V {
      constructor(arg0) {
        let intl;
        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
        intl = publish(closure_2[22]).intl;
        return closure_1_6(closure_1_19, obj, arg0);
      }
    }
    mapped1 = arr3.map((label) => {
      obj = { icon: publish(closure_2[21]).AppsIcon, label };
      return closure_1_6(closure_1_19, obj, label);
    });
  } else {
    class V {
      constructor(arg0) {
        let intl;
        obj = { icon: closure_1_10[arg0], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[arg0]) };
        intl = publish(closure_2[22]).intl;
        return closure_1_6(closure_1_19, obj, arg0);
      }
    }
    mapped1 = arr2.map((channel) => {
      obj = { channel };
      return closure_1_6(closure_1_20, obj, channel.id);
    });
  }
  const items5 = [...mapped1, ...components.map(tmp7)];
  components = tmp6.components;
  cResult[0] = initial;
  cResult[1] = tmp6.channels;
  cResult[2] = tmp6.components;
  cResult[3] = tmp6.initialChannelNames;
  cResult[4] = items5;
  arr = items5;
}) : (function PublishSheetBody(entryPoint) {
  let UserIcon;
  let closure_2;
  let components;
  let devicePermissions;
  let disabled;
  let editable;
  let identity;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items10;
  let items2;
  let items3;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let mapped;
  let nameError;
  let obj19;
  let project;
  let publish;
  let saving;
  let sharing;
  let tmp6Result;
  let tmp8Result;
  ({ project, publish } = entryPoint);
  entryPoint = entryPoint.entryPoint;
  dependencyMap = undefined;
  obj = function _handlePublish2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              c1 = 2;
              c3 = 1;
              const obj4 = { value: closure_2_2.save(), done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
            c2 = 0;
            const intl = tmp(c2[22]).intl;
            closure_1_14(intl.string(c1(c2[23]).Fi7boI));
            c3 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c2 = 0;
            if (value) {
              obj = c1(c2[24]);
              obj.hideActionSheet(closure_1_9);
              closure_128_0.run(closure_128_1);
              c3 = 3;
              return { value: "IconComponent", done: null };
            } else {
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } catch (tmp21) {
          if (0 === c2) {
            c3 = 3;
            throw tmp21;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_13();
  const tmp3 = dependencyMap;
  const tmp4 = entryPoint(12292)(project, publish);
  dependencyMap = tmp4;
  ({ editable, identity, sharing } = tmp4);
  if (tmp4.initial) {
    const initialChannelNames = tmp4.initialChannelNames;
    mapped = initialChannelNames.map((label) => {
      obj = { icon: publish(closure_2[21]).AppsIcon, label };
      return closure_1_6(closure_1_19, obj, label);
    });
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => {
      obj = { channel };
      return closure_1_6(closure_1_20, obj, channel.id);
    });
  }
  const items = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      obj = { icon: obj2[surface], label: label.label };
      return closure_1_6(closure_1_19, obj, surface);
    })
  ];
  components = tmp4.components;
  obj = { startExpanded: editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: tmp4.displayName, children: tmp8(View, obj2) };
  obj2 = { style: tmp.content, children: items1 };
  const ActionSheet = publish(7298).ActionSheet;
  if (editable) {
    let obj3 = {
      iconURL: identity.iconURL,
      size: 40,
      radius: 12,
      disabled: tmp4.saving,
      onChange: identity.setIcon,
      onError(text) {
          if (null != text) {
            obj2 = { text, variant: "critical" };
            obj = entryPoint(closure_2[14]);
            obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          }
        }
    };
    tmp6Result = tmp6(tmp7(11811).ConjureAppIconTile, obj3);
  } else {
    let obj4 = { project, size: "card" };
    tmp6Result = tmp6(tmp2(11854), obj4);
  }
  items1 = [tmp6Result, , , , , ];
  if (editable) {
    let obj5 = { label: intl.string(tmp2(3830).knevPu), value: null, onChange: null, maxLength: tmp7(6774).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = tmp7(7008).TextInput;
    intl = tmp7(1128).intl;
    ({ name: obj8.value, setName: obj8.onChange } = tmp4);
    ({ saving: obj8.disabled, nameError } = tmp4);
    const obj6 = { children: items2 };
    items2 = [tmp6(TextInput, obj5), ];
    const obj7 = { label: intl2.string(entryPoint(3830).ynaGa1), placeholder: intl3.string(entryPoint(3830)["I+3UTL"]), value: null, onChange: null, maxLength: publish(6774).MAX_APP_DESCRIPTION_LENGTH, disabled: tmp4.saving };
    const TextArea = tmp7(7180).TextArea;
    intl2 = tmp7(1128).intl;
    intl3 = tmp7(1128).intl;
    ({ description: obj10.value, setDescription: obj10.onChange } = identity);
    items2[1] = closure_6(TextArea, obj7);
    tmp8Result = tmp8(closure_7, obj6);
  } else {
    const obj11 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, accessibilityRole: "header", children: tmp4.displayName };
    const obj9 = { style: tmp.nameGroup, children: items3 };
    items3 = [tmp6(tmp7(5234).Text, obj11), ];
    let tmp6Result5 = null;
    if ("" !== tmp4.description) {
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp6Result5 = tmp6(tmp7(5234).Text, obj12);
    }
    items3[1] = tmp6Result5;
    tmp8Result = tmp8(tmp9, obj9);
  }
  items1[1] = tmp8Result;
  const obj13 = { title: intl4.string(entryPoint(3830).BqNMms), rows: items };
  intl4 = tmp7(1128).intl;
  items1[2] = closure_6(closure_18, obj13);
  const obj14 = {
    title: intl5.string(entryPoint(3830).LnqeFd),
    following: items.length > 0,
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_10[item], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[item]) };
      intl = publish(closure_2[22]).intl;
      return closure_1_6(closure_1_19, obj, item);
    })
  };
  intl5 = tmp7(1128).intl;
  devicePermissions = tmp4.devicePermissions;
  items1[3] = closure_6(closure_18, obj14);
  let tmp8Result2 = null;
  if (null != sharing) {
    let tmp6Result6;
    const obj15 = { title: intl6.string(entryPoint(3830).yCgX8i) };
    intl6 = tmp7(1128).intl;
    const items4 = [tmp6(closure_17, obj15), ];
    const obj16 = { style: tmp.sharingRow, children: items5 };
    if (null != sharing.guild) {
      const obj17 = { guild: sharing.guild, size: publish(6883).GuildIconSizes.SMALL_36 };
      const tmp2Result = entryPoint(6883);
      tmp6Result6 = tmp6(tmp2Result, obj17);
    } else {
      const obj18 = { style: tmp.onlyMeIcon, children: closure_6(UserIcon, obj19) };
      obj19 = { size: "xs", color: entryPoint(587).colors.ICON_DEFAULT };
      UserIcon = tmp7(11838).UserIcon;
      tmp6Result6 = tmp6(tmp9, obj18);
    }
    items5 = [tmp6Result6, ];
    const guild = sharing.guild;
    let name;
    const obj20 = { style: tmp.rowText, children: items6 };
    const Text = tmp7(5234).Text;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl7 = tmp7(1128).intl;
      name = intl7.string(tmp2(3830)["37xgkF"]);
    }
    const obj21 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    items6 = [tmp6(Text, obj21), ];
    let tmp6Result7 = null;
    if (null != sharing.caption) {
      const obj22 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp6Result7 = tmp6(tmp7(5234).Text, obj22);
    }
    const obj23 = { children: items4 };
    items6[1] = tmp6Result7;
    items5[1] = closure_8(View, obj20);
    items4[1] = closure_8(View, obj16);
    tmp8Result2 = tmp8(tmp9, obj23);
  }
  items1[4] = tmp8Result2;
  const obj26 = { style: items7 };
  items7 = [tmp.statusDot, tmp[closure_12[tmp4.mode]]];
  const obj24 = { style: tmp.footer, children: items10 };
  const obj25 = { style: tmp.status, children: items8 };
  items8 = [tmp6(View, obj26), ];
  const obj27 = { style: tmp.rowText, children: items9 };
  items9 = [, ];
  const obj28 = { variant: "text-sm/normal", color: "text-subtle", children: tmp4.statusText };
  items9[0] = closure_6(publish(5234).Text, obj28);
  let tmp6Result8 = null;
  if (null != tmp4.lastPublishedText) {
    const obj55 = { variant: "text-xs/normal", color: "text-subtle", children: tmp4.lastPublishedText };
    tmp6Result8 = tmp6(tmp7(5234).Text, obj55);
  }
  items9[1] = tmp6Result8;
  items8[1] = closure_8(View, obj27);
  items10 = [tmp8(View, obj25), ];
  const obj56 = {
    variant: tmp4.ctaVariant,
    size: "md",
    grow: true,
    text: tmp4.ctaText,
    disabled,
    loading: saving,
    onPress: function handlePublish() {
      return obj(...arguments);
    }
  };
  disabled = publish.disabled;
  const Button = tmp7(5244).Button;
  if (!disabled) {
    disabled = null != tmp4.nameError;
  }
  saving = publish.publishing;
  if (saving) {
    saving = !(tmp4.initial && publish.showsProgress);
    const tmp22 = tmp4.initial && publish.showsProgress;
  }
  if (!saving) {
    saving = tmp4.saving;
  }
  items10[1] = closure_6(Button, obj56);
  items1[5] = closure_8(View, obj24);
  return closure_6(ActionSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function SectionTitle(title) {
  obj = react2;
  const cResult = obj.c(3);
  title = title.title;
  const tmp4 = closure_13();
  if (cResult[0] === tmp4.sectionTitle) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  obj2 = { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: tmp4.sectionTitle, children: title };
  const tmp6 = metroRequire(Text_Text.Text, obj2);
  cResult[0] = tmp4.sectionTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function SectionTitle(title) {
  title = title.title;
  obj = { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_13().sectionTitle, children: title };
  return metroRequire(Text_Text.Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function RowSection(arg0) {
  let following;
  let items;
  let rows;
  let title;
  obj = react2;
  const cResult = obj.c(6);
  ({ title, rows, following } = arg0);
  let followingSection = undefined !== following && following;
  if (0 === rows.length) {
    return null;
  } else {
    let tmp3;
    if (followingSection) {
      followingSection = tmp2.followingSection;
    }
    if (cResult[0] !== title) {
      obj2 = { title };
      const tmp6 = metroRequire(closure_17, obj2);
      cResult[0] = title;
      cResult[1] = tmp6;
      tmp3 = tmp6;
    } else {
      tmp3 = cResult[1];
    }
    if (cResult[2] === rows) {
      if (cResult[3] === followingSection) {
        let tmp7;
        if (cResult[4] === tmp3) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
    }
    const obj3 = { style: followingSection, children: items };
    items = [tmp3, rows];
    const tmp10 = metroImportAll(View, obj3);
    cResult[2] = rows;
    cResult[3] = followingSection;
    cResult[4] = tmp3;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
}) : (function RowSection(title) {
  let following;
  let items;
  let rows;
  ({ rows, following } = title);
  title = title.title;
  if (following === undefined) {
    following = false;
  }
  let tmp3Result = null;
  if (0 !== rows.length) {
    const tmp3 = metroImportAll;
    const tmp4 = View;
    if (following) {
      following = tmp.followingSection;
    }
    obj = { style: following, children: items };
    obj2 = { title };
    items = [metroRequire(closure_17, obj2), rows];
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentRow(arg0) {
  let icon;
  let items;
  let label;
  let tmp5;
  let tmp9;
  obj = react2;
  const cResult = obj.c(8);
  ({ icon, label } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== icon) {
    obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const tmp8 = metroRequire(icon, obj2);
    cResult[0] = icon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== label) {
    const obj3 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label };
    const tmp11 = metroRequire(Text_Text.Text, obj3);
    cResult[2] = label;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.row) {
    if (cResult[5] === tmp5) {
      let tmp12;
      if (cResult[6] === tmp9) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.row, children: items };
  items = [tmp5, tmp9];
  const tmp13 = metroImportAll(View, obj4);
  cResult[4] = tmp4.row;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function ContentRow(arg0) {
  let icon;
  let items;
  let label;
  ({ icon, label } = arg0);
  obj = { style: closure_13().row, children: items };
  items = [, ];
  obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
  items[0] = metroRequire(icon, obj2);
  items[1] = metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label });
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(channel) {
  let tmp4;
  obj = react2;
  const cResult = obj.c(2);
  let str = useChannelNameDefault(channel.channel);
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    obj2 = { icon: AppsIcon.AppsIcon, label: str };
    const tmp7 = metroRequire(closure_19, obj2);
    cResult[0] = str;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ChannelRow(channel) {
  let str;
  obj = { icon: AppsIcon.AppsIcon, label: str };
  str = useChannelNameDefault(channel.channel);
  const tmp = metroRequire;
  const tmp2 = closure_19;
  if (str == null) {
    str = "";
  }
  return tmp(tmp2, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(projectId, guildId, entryPoint) {
  obj = { key: ConjurePublishSheet_str, content: metroRequire(closure_15, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = { projectId, guildId, entryPoint };
  ActionSheetActionCreators;
  showActionSheet(obj);
};
