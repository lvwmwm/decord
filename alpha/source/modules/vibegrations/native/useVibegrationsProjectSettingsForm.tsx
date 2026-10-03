// Module ID: 16569
// Function ID: 16570
// Name: useVibegrationsProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 2106, 8699, 1085, 21, 4890, 587, 558, 576, 504, 6747, 4854, 1126, 3723, 4886, 6644, 9195, 6547, 6074, 5990, 6701, 6746, 16570, 8700, 6098, 5993, 2]
// Exports: default

// Module 16569 (useVibegrationsProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import VibegrationsTypes from "VibegrationsTypes" /* 6747 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, c4, guildId, importDefault, set;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let react = react_mod;
let View = react_native.View;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const VibegrationsCollaboratorRolesSheet = "VibegrationsCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, roleListFooter: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: size };
  size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_14(color.color);
  if (cResult[0] !== tmp2.circle) {
    const obj2 = { style: tmp2.circle };
    const tmp6 = authStore(View, obj2);
    cResult[0] = tmp2.circle;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((color) => {
  const obj = { style: closure_14(color.color).circle };
  return authStore(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let Text;
  let closure_5;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let obj12;
  let obj3;
  let obj7;
  let onSave;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(onSave[11]);
  const cResult = obj.c(40);
  guildId = guildId.guildId;
  const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
  onSave = guildId.onSave;
  const tmp4 = closure_13();
  const roleLabel = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [V];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function b() {
      return GuildRoleStore.getSortedRoles(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(onSave[12]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] !== initialSelectedRoleIds) {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    cResult[4] = initialSelectedRoleIds;
    cResult[5] = O;
    tmp10 = O;
  } else {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  const tmp11 = first1(react.useState(tmp10), 2);
  first1 = tmp11[0];
  react = tmp11[1];
  [tmp14, tmp15] = first1(react.useState(""), 2);
  const tmp13 = first1(react.useState(""), 2);
  if (cResult[6] !== tmp14) {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    const toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
    cResult[6] = tmp14;
    cResult[7] = toLocaleLowerCaseResult;
  } else {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  View = tmp16;
  if (cResult[8] === tmp16) {
    let tmp19;
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                return size;
              }
            }
            set = new Set(size);
            if (closure_1) {
              set.add(closure_0);
            } else {
              set.delete(closure_0);
            }
            return set;
          });
        }
      }
      cResult[11] = V;
      tmp19 = V;
    } else {
      class V {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                return size;
              }
            }
            set = new Set(size);
            if (closure_1) {
              set.add(closure_0);
            } else {
              set.delete(closure_0);
            }
            return set;
          });
        }
      }
    }
    V = tmp19;
    if (cResult[12] === onSave) {
      class V {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                return size;
              }
            }
            set = new Set(size);
            if (closure_1) {
              set.add(closure_0);
            } else {
              set.delete(closure_0);
            }
            return set;
          });
        }
      }
      if (cResult[15] !== first1.size) {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
        let formatToPlainString = tmp22.formatToPlainString;
        let obj2 = { count: first1.size, max: tmp(tmp2[13]).MAX_PROJECT_COLLABORATOR_ROLES };
        const eaqbJt = initialSelectedRoleIds(tmp2[16]).eaqbJt;
        let formatToPlainStringResult = formatToPlainString(eaqbJt, obj2);
        cResult[15] = first1.size;
        cResult[16] = formatToPlainStringResult;
      } else {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
        cResult[17] = obj5.string(initialSelectedRoleIds(onSave[16])["9yHiDe"]);
        const stringResult = obj5.string(initialSelectedRoleIds(onSave[16])["9yHiDe"]);
      } else {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
      }
      if (cResult[18] !== tmp21) {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
        let obj4 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
        cResult[18] = tmp21;
        cResult[19] = closure_10(tmp(onSave[17]).Text, obj4);
        const tmp29 = closure_10(tmp(onSave[17]).Text, obj4);
      } else {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
      }
      if (cResult[20] === tmp4.roleListFooter) {
        let tmp34;
        let tmp37;
        let tmp44;
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
          const stringResult1 = obj8.string(initialSelectedRoleIds(onSave[16]).fqvhf0);
          cResult[23] = stringResult1;
          tmp34 = stringResult1;
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
          const stringResult2 = obj9.string(tmp(onSave[15]).t.i4jeWR);
          cResult[24] = stringResult2;
          tmp37 = stringResult2;
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
        }
        if (cResult[25] !== tmp20) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
          const obj6 = { title: tmp34, trailing: closure_10(tmp(onSave[19]).ActionSheetHeaderPressableText, obj7) };
          const BottomSheetTitleHeader = tmp(tmp2[18]).BottomSheetTitleHeader;
          obj7 = { label: tmp37, onPress: tmp20 };
          cResult[25] = tmp20;
          cResult[26] = closure_10(BottomSheetTitleHeader, obj6);
          const tmp40 = closure_10(BottomSheetTitleHeader, obj6);
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
          const obj10 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(tmp(onSave[15]).t.Sojqsr), placeholder: intl2.string(tmp(onSave[15]).t.Sojqsr), onChange: tmp15 };
          const SearchField = tmp(tmp2[20]).SearchField;
          intl = tmp(tmp2[15]).intl;
          intl2 = tmp(tmp2[15]).intl;
          cResult[27] = closure_10(SearchField, obj10);
          const tmp42 = closure_10(SearchField, obj10);
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
        }
        if (cResult[28] === arr3) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
        }
        if (0 === arr3.length) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
          const obj11 = { style: tmp4.roleListEmpty, children: closure_10(Text, obj12) };
          obj12 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp(onSave[15]).t.V6nAfF) };
          Text = tmp(tmp2[17]).Text;
          intl3 = tmp(tmp2[15]).intl;
          tmp44 = closure_10(View, obj11);
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
            }
          }
          const obj13 = {
            hasIcons: false,
            children: arr3.map((children) => {
                      let formatToPlainStringResult;
                      let items;
                      const hasItem = first1.has(children.id);
                      let tmp3 = !hasItem;
                      const tmp = first1;
                      if (tmp3) {
                        tmp3 = tmp.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
                      }
                      const colorStrings = children.colorStrings;
                      let primaryColor;
                      const obj = { style: roleLabel.roleLabel, children: items };
                      const TableCheckboxRow = guildId(onSave[22]).TableCheckboxRow;
                      const tmp7 = closure_1_11;
                      const tmp8 = View;
                      const tmp9 = closure_1_15;
                      if (colorStrings != null) {
                        primaryColor = colorStrings.primaryColor;
                      }
                      if (primaryColor == null) {
                        primaryColor = children.colorString;
                      }
                      if (primaryColor == null) {
                        primaryColor = DEFAULT_ROLE_COLOR_HEX;
                      }
                      const obj2 = {
                        label: tmp7(tmp8, obj),
                        checked: hasItem,
                        disabled: tmp3,
                        accessibilityHint: formatToPlainStringResult,
                        onPress(arg0) {
                          return V(children.id, arg0);
                        }
                      };
                      items = [closure_1_10(tmp9, { color: primaryColor }), ];
                      const obj3 = { variant: "text-md/medium", children: children.name };
                      items[1] = closure_1_10(guildId(onSave[17]).Text, obj3);
                      formatToPlainStringResult = undefined;
                      if (tmp3) {
                        const intl = guildId(onSave[15]).intl;
                        const formatToPlainString = intl.formatToPlainString;
                        const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
                        const VPUL05 = initialSelectedRoleIds(onSave[16]).VPUL05;
                        formatToPlainStringResult = formatToPlainString(VPUL05, obj4);
                      }
                      return closure_1_10(TableCheckboxRow, obj2, children.id);
                    })
          };
          const TableRowGroup = tmp(tmp2[21]).TableRowGroup;
          tmp44 = closure_10(TableRowGroup, obj13);
        }
        cResult[28] = arr3;
        cResult[29] = first1;
        cResult[30] = tmp4.roleLabel;
        cResult[31] = tmp4.roleListEmpty;
        cResult[32] = tmp44;
      }
      const obj14 = { style: tmp4.roleListFooter, children: tmp28 };
      cResult[20] = tmp4.roleListFooter;
      cResult[21] = tmp28;
      cResult[22] = closure_10(View, obj14);
      const tmp33 = closure_10(View, obj14);
    }
    const fn2 = function z() {
      set = new Set(first1);
      onSave(set);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(VibegrationsCollaboratorRolesSheet);
    };
    cResult[12] = onSave;
    cResult[13] = first1;
    cResult[14] = fn2;
  }
  if ("" !== tmp16) {
    class V {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        closure_5((size) => {
          if (closure_1) {
            if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
              return size;
            }
          }
          set = new Set(size);
          if (closure_1) {
            set.add(closure_0);
          } else {
            set.delete(closure_0);
          }
          return set;
        });
      }
    }
  }
  cResult[8] = tmp16;
  cResult[9] = stateFromStoresArray;
  cResult[10] = stateFromStoresArray;
}) : ((guildId) => {
  let ActionSheetHeaderPressableText;
  let BottomSheetTitleHeader;
  let Text;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items4;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let onSave;
  let str;
  let tmp13Result;
  let tmp8;
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  let c7;
  let tmp = closure_13();
  const roleLabel = tmp;
  let tmp3 = onSave;
  let obj = guildId(onSave[12]);
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => {
    set = new Set(importDefault);
    return set;
  }), 2);
  first = tmp5[0];
  let closure_6 = tmp5[1];
  let tmp7 = stateFromStoresArray(first.useState(""), 2);
  [str, tmp8] = tmp7;
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  c7 = toLocaleLowerCaseResult;
  const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
  const memo = first.useMemo(() => {
    let found;
    if ("" === c7) {
      found = stateFromStoresArray;
    } else {
      const tmp = stateFromStoresArray;
      found = stateFromStoresArray.filter((id) => {
        let hasItem = id.id === closure_1_7;
        if (!hasItem) {
          const name = id.name;
          const toLocaleLowerCaseResult = name.toLocaleLowerCase();
          hasItem = toLocaleLowerCaseResult.includes(tmp);
        }
        return hasItem;
      });
    }
    return found;
  }, items2);
  let closure_8 = first.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_6((size) => {
      if (closure_1) {
        if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
          return size;
        }
      }
      set = new Set(size);
      if (closure_1) {
        set.add(closure_0);
      } else {
        set.delete(closure_0);
      }
      return set;
    });
  }, []);
  const items3 = [onSave, first];
  const callback = first.useCallback(() => {
    set = new Set(first);
    onSave(set);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(VibegrationsCollaboratorRolesSheet);
  }, items3);
  let intl = guildId(onSave[15]).intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj2 = { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
  const eaqbJt = require("module_3723").eaqbJt;
  let formatToPlainStringResult = formatToPlainString(eaqbJt, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_3723")["9yHiDe"]), footer: closure_10(closure_6, obj4), header: closure_10(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[23]).ActionSheet;
  intl2 = guildId(onSave[15]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_10(guildId(onSave[17]).Text, { variant: "text-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_3723").fqvhf0), trailing: closure_10(ActionSheetHeaderPressableText, obj6) };
  BottomSheetTitleHeader = guildId(onSave[18]).BottomSheetTitleHeader;
  intl3 = guildId(onSave[15]).intl;
  obj6 = { label: intl4.string(guildId(onSave[15]).t.i4jeWR), onPress: callback };
  ActionSheetHeaderPressableText = guildId(onSave[19]).ActionSheetHeaderPressableText;
  intl4 = guildId(onSave[15]).intl;
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: intl5.string(guildId(onSave[15]).t.Sojqsr), placeholder: intl6.string(guildId(onSave[15]).t.Sojqsr), onChange: tmp8 };
  const SearchField = guildId(onSave[20]).SearchField;
  intl5 = guildId(onSave[15]).intl;
  intl6 = guildId(onSave[15]).intl;
  items4 = [closure_10(SearchField, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: tmp13Result };
  const tmp12 = closure_11;
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: closure_10(Text, obj10) };
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(guildId(tmp3[15]).t.V6nAfF) };
    Text = tmp2(tmp3[17]).Text;
    intl7 = tmp2(tmp3[15]).intl;
    tmp13Result = tmp13(tmp14, obj9);
  } else {
    const obj11 = {
      hasIcons: false,
      children: memo.map((children) => {
          let formatToPlainStringResult;
          let items;
          const hasItem = first.has(children.id);
          let tmp3 = !hasItem;
          const tmp = first;
          if (tmp3) {
            tmp3 = tmp.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          const colorStrings = children.colorStrings;
          let primaryColor;
          const obj = { style: roleLabel.roleLabel, children: items };
          const TableCheckboxRow = guildId(onSave[22]).TableCheckboxRow;
          const tmp7 = closure_1_11;
          const tmp8 = closure_6;
          const tmp9 = closure_1_15;
          if (colorStrings != null) {
            primaryColor = colorStrings.primaryColor;
          }
          if (primaryColor == null) {
            primaryColor = children.colorString;
          }
          if (primaryColor == null) {
            primaryColor = DEFAULT_ROLE_COLOR_HEX;
          }
          const obj2 = {
            label: tmp7(tmp8, obj),
            checked: hasItem,
            disabled: tmp3,
            accessibilityHint: formatToPlainStringResult,
            onPress(arg0) {
              return closure_8(children.id, arg0);
            }
          };
          items = [closure_1_10(tmp9, { color: primaryColor }), ];
          const obj3 = { variant: "text-md/medium", children: children.name };
          items[1] = closure_1_10(guildId(onSave[17]).Text, obj3);
          formatToPlainStringResult = undefined;
          if (tmp3) {
            const intl = guildId(onSave[15]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
            const VPUL05 = require("module_3723").VPUL05;
            formatToPlainStringResult = formatToPlainString(VPUL05, obj4);
          }
          return closure_1_10(TableCheckboxRow, obj2, children.id);
        })
    };
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    tmp13Result = tmp13(TableRowGroup, obj11);
  }
  items4[1] = closure_10(closure_6, obj8);
  return tmp12(ActionSheet, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsProjectSettingsForm.tsx");

export default function useVibegrationsProjectSettingsForm(arg0, guild_id) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let Text;
  let closure_11;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items4;
  let obj10;
  let obj14;
  let obj6;
  let obj8;
  let stateFromStores;
  let str2;
  let stringResult;
  let tmp15;
  let tmp17;
  let trimmed;
  _require = arg0;
  importDefault = guild_id;
  let tmp2 = _require;
  const tmp3 = stateFromStores;
  let tmp = trimmed();
  let obj = require("get initialized");
  const items = [closure_8];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => VibegrationsProjectStore.getProject(closure_0), items1);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let obj2 = first1;
  let str;
  const useState = first1.useState;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const first = _slicedToArray(useState(str), 1)[0];
  const tmp7 = _slicedToArray(obj2.useState(first), 2);
  [str2, _slicedToArray] = tmp7;
  let num;
  const useState2 = obj2.useState;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp5Result = _slicedToArray(useState2(num), 2);
  first1 = tmp5Result[0];
  let closure_6 = tmp5Result[1];
  const tmp5Result5 = _slicedToArray(obj2.useState(() => {
    set = new Set(prop);
    return set;
  }), 2);
  const first2 = tmp5Result5[0];
  closure_8 = tmp5Result5[1];
  const tmp5Result6 = _slicedToArray(obj2.useState(false), 2);
  const first3 = tmp5Result6[0];
  let closure_10 = tmp5Result6[1];
  [tmp15, closure_11] = _slicedToArray(obj2.useState(null), 2);
  _slicedToArray(obj2.useState(null), 2);
  [tmp17, VibegrationsCollaboratorRolesSheet] = _slicedToArray(obj2.useState(false), 2);
  _slicedToArray(obj2.useState(false), 2);
  trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmp2Result = tmp2(tmp3[13]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  let result1 = null != stateFromStores && null != guild_id;
  if (result1) {
    const tmp2Result4 = tmp2(tmp3[13]);
    result1 = tmp2Result4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmp2Result5 = tmp2(tmp3[24]);
  const vibegrationsProjectAccessSettings = tmp2Result5.getVibegrationsProjectAccessSettings(first1);
  const isPublic = vibegrationsProjectAccessSettings.isPublic;
  let tmp22 = null != stateFromStores;
  const isShared = vibegrationsProjectAccessSettings.isShared;
  if (tmp22) {
    tmp22 = trimmed !== first;
  }
  closure_15 = tmp22;
  let tmp23 = result;
  if (tmp23) {
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp23 = first1 !== num2;
  }
  closure_16 = tmp23;
  let tmp24 = result1;
  if (tmp24) {
    const tmp2Result6 = tmp2(tmp3[25]);
    tmp24 = !tmp2Result6.haveSameRoleIds(first2, prop);
  }
  let closure_17 = tmp24;
  let tmp25 = tmp22 || tmp23 || tmp24;
  let closure_18 = tmp25;
  const callback = obj2.useCallback((arg0) => {
    _slicedToArray(arg0);
    closure_11(null);
    VibegrationsCollaboratorRolesSheet(false);
  }, []);
  let closure_19 = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    const tmp = closure_6((arg0) => {
      let tmp2;
      if (closure_1) {
        tmp2 = arg0 | tmp;
      } else {
        tmp2 = arg0 & ~tmp;
      }
      return tmp2;
    });
    let tmp2 = VibegrationsCollaboratorRolesSheet(false);
  }, []);
  const callback1 = obj2.useCallback((items) => {
    set = new Set(items);
    closure_8(set);
    VibegrationsCollaboratorRolesSheet(false);
  }, []);
  const items2 = [guild_id, callback1, first2];
  const callback2 = obj2.useCallback(() => {
    let obj2;
    if (null != guild_id) {
      const obj = { content: authStore(closure_16, obj2), key: VibegrationsCollaboratorRolesSheet, stackingBehavior: "stack" };
      obj2 = { guildId: tmp, initialSelectedRoleIds: first2, onSave: callback1 };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
  }, items2);
  const items3 = [first1, tmp23, guild_id, tmp25, isPublic, tmp22, stateFromStores, arg0, tmp24, first3, first2, trimmed];
  let tmp31 = closure_6;
  let obj3 = { style: tmp.content, children: items4 };
  const callback3 = obj2.useCallback(prop(function*(arg0, value) {
    let closure_2;
    let obj4;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === guild_id) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (null != stateFromStores) {
              const tmp56 = closure_18;
              if (tmp56) {
                const tmp25 = first3;
                if (!tmp25) {
                  if ("" === trimmed) {
                    const intl = tmp(stateFromStores[15]).intl;
                    closure_11(intl.string(guild_id(stateFromStores[16]).I2hgEB));
                    c4 = 3;
                    return { value: false, done: true };
                  } else {
                    const obj5 = {};
                    const tmp57 = closure_15;
                    if (tmp57) {
                      obj5.name = tmp26;
                    }
                    let tmp27 = closure_16;
                    if (tmp27) {
                      obj5.flags = first1;
                    }
                    let tmp29 = closure_17;
                    if (tmp29) {
                      const _Array = Array;
                      const arr = Array.from(first2);
                      obj5.collaborator_role_ids = arr.sort();
                    }
                    let tmp31 = null == tmp55.guild_id && null != guild_id;
                    if (tmp31) {
                      if (!tmp29) {
                        if (tmp27) {
                          tmp27 = isPublic;
                        }
                        tmp29 = tmp27;
                      }
                      tmp31 = tmp29;
                    }
                    if (tmp31) {
                      obj5.guild_id = guild_id;
                    }
                    closure_10(true);
                    VibegrationsCollaboratorRolesSheet(false);
                    c3 = 2;
                    guild_id = 3;
                    c4 = 1;
                    const obj6 = { value: obj4.updateProjectSettings(tmp, obj5), done: false };
                    obj4 = tmp(stateFromStores[26]);
                    return obj6;
                  }
                }
              }
            }
            c4 = 3;
            return { value: true, done: true };
          }
        } else if (1 === guild_id) {
          c3 = 0;
          closure_128_10(false);
          throw stateFromStores;
        } else if (2 === guild_id) {
          closure_128_12(true);
          c3 = 0;
          closure_128_10(false);
          c4 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_10(false);
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let flag = value.ok;
          if (!flag) {
            closure_128_12(true);
            flag = false;
          }
          c3 = 0;
          closure_128_10(false);
          c4 = 3;
          const obj = { value: flag, done: true };
          return obj;
        }
      } catch (tmp47) {
        stateFromStores = tmp47;
        if (0 === c3) {
          c4 = 3;
          throw tmp47;
        } else if (1 === tmp49) {
          guild_id = 1;
        } else {
          guild_id = 2;
        }
      }
    }
  }), items3);
  let obj4 = { label: intl.string(require("module_3723").u9UpIx), value: str2, onChange: callback, maxLength: 128, disabled: first3 };
  const TextInput = tmp2(tmp3[27]).TextInput;
  intl = tmp2(tmp3[15]).intl;
  items4 = [closure_10(TextInput, obj4), , , , , ];
  let tmp32Result = null;
  const tmp30 = closure_11;
  if (null != tmp15) {
    let obj5 = { accessibilityRole: "alert", children: tmp32(tmp2(tmp3[17]).Text, obj6) };
    obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    tmp32Result = tmp32(tmp31, obj5);
  }
  items4[1] = tmp32Result;
  let tmp32Result5 = null;
  if (result) {
    let obj7 = { hasIcons: false, children: tmp32(TableCheckboxRow, obj8) };
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    obj8 = {
      label: intl2.string(require("module_3723").EHMPvA),
      subLabel: intl3.string(require("module_3723").bQQ4uT),
      checked: isShared,
      disabled: first3,
      onPress(arg0) {
          return closure_19(VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE, arg0);
        }
    };
    TableCheckboxRow = tmp2(tmp3[22]).TableCheckboxRow;
    intl2 = tmp2(tmp3[15]).intl;
    intl3 = tmp2(tmp3[15]).intl;
    tmp32Result5 = tmp32(TableRowGroup, obj7);
  }
  items4[2] = tmp32Result5;
  let tmp32Result6 = null;
  if (result) {
    const obj9 = { hasIcons: false, children: closure_10(TableCheckboxRow2, obj10) };
    const TableRowGroup2 = tmp2(tmp3[21]).TableRowGroup;
    obj10 = {
      label: intl4.string(require("module_3723").fvxLKl),
      subLabel: intl5.string(require("module_3723").Eb3Pe3),
      checked: isPublic,
      disabled: first3,
      onPress(arg0) {
          return closure_19(VibegrationsTypes.VibegrationsProjectFlags.PUBLIC, arg0);
        }
    };
    TableCheckboxRow2 = tmp2(tmp3[22]).TableCheckboxRow;
    intl4 = tmp2(tmp3[15]).intl;
    intl5 = tmp2(tmp3[15]).intl;
    tmp32Result6 = tmp32(TableRowGroup2, obj9);
  }
  items4[3] = tmp32Result6;
  let tmp32Result7 = null;
  if (result1) {
    const TableRowGroup3 = tmp2(tmp3[21]).TableRowGroup;
    const obj11 = { label: intl6.string(require("module_3723").fqvhf0), subLabel: intl7.string(require("module_3723").gWSQVl), arrow: true, disabled: first3 || !isPublic, accessibilityHint: stringResult, onPress: callback2 };
    const TableRow = tmp2(tmp3[28]).TableRow;
    intl6 = tmp2(tmp3[15]).intl;
    intl7 = tmp2(tmp3[15]).intl;
    stringResult = undefined;
    if (!isPublic) {
      const intl8 = tmp2(tmp3[15]).intl;
      stringResult = intl8.string(tmp33(tmp3[16]).FTvt33);
    }
    const obj12 = { hasIcons: false, children: closure_10(TableRow, obj11) };
    tmp32Result7 = tmp32(TableRowGroup3, obj12);
  }
  items4[4] = tmp32Result7;
  let tmp32Result8 = null;
  if (tmp17) {
    const obj13 = { accessibilityRole: "alert", children: closure_10(Text, obj14) };
    obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl9.string(require("module_3723").dxH2ZV) };
    Text = tmp2(tmp3[17]).Text;
    intl9 = tmp2(tmp3[15]).intl;
    tmp32Result8 = tmp32(tmp31, obj13);
  }
  items4[5] = tmp32Result8;
  const obj15 = { fields: tmp30(tmp31, obj3), canSave: tmp25, saving: first3, submit: callback3 };
  if (tmp25) {
    tmp25 = "" !== trimmed;
  }
  return obj15;
};
