// Module ID: 12271
// Function ID: 12272
// Name: useConjureProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 4911, 1084, 21, 5005, 587, 558, 576, 504, 6832, 5247, 1125, 3864, 5271, 7308, 8971, 7205, 7047, 6960, 7358, 12272, 12259, 6963, 12278, 2]

// Module 12271 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6832 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4911 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, set;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let react = react_mod;
let View = react_native.View;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureCollaboratorRolesSheet_str = "ConjureCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, roleListFooter: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles(obj);
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: size };
  size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleColorCircle(color) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_13(color.color);
  if (cResult[0] !== tmp2.circle) {
    const obj2 = { style: tmp2.circle };
    const tmp6 = React4(View, obj2);
    cResult[0] = tmp2.circle;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function RoleColorCircle(color) {
  const obj = { style: closure_13(color.color).circle };
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCollaboratorRolesSheet(guildId) {
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
  let tmp15;
  let tmp16;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(onSave[10]);
  const cResult = obj.c(40);
  guildId = guildId.guildId;
  const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
  onSave = guildId.onSave;
  const tmp4 = closure_12();
  const roleLabel = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [V];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = R;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = R;
  } else {
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(onSave[11]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] !== initialSelectedRoleIds) {
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
      }
    }
    cResult[4] = initialSelectedRoleIds;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
      }
    }
  }
  const tmp12 = first1(react.useState(tmp10), 2);
  first1 = tmp12[0];
  react = tmp12[1];
  [tmp15, tmp16] = first1(react.useState(""), 2);
  const tmp14 = first1(react.useState(""), 2);
  if (cResult[6] !== tmp15) {
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
      }
    }
    const toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
    cResult[6] = tmp15;
    cResult[7] = toLocaleLowerCaseResult;
  } else {
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
      }
    }
  }
  View = tmp17;
  if (cResult[8] === tmp17) {
    let tmp20;
    class R {
      constructor() {
        return GuildRoleStore.getSortedRoles(guildId);
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
              if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
      tmp20 = V;
    } else {
      class V {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
    V = tmp20;
    if (cResult[12] === onSave) {
      class V {
        constructor(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
        let formatToPlainString = tmp23.formatToPlainString;
        let obj2 = { count: first1.size, max: tmp(tmp2[12]).MAX_PROJECT_COLLABORATOR_ROLES };
        const g5I05P = initialSelectedRoleIds(tmp2[15]).g5I05P;
        let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
        cResult[15] = first1.size;
        cResult[16] = formatToPlainStringResult;
      } else {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
        cResult[17] = obj5.string(initialSelectedRoleIds(onSave[15]).un99lK);
        const stringResult = obj5.string(initialSelectedRoleIds(onSave[15]).un99lK);
      } else {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
      if (cResult[18] !== tmp22) {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
        let obj4 = { variant: "text-xs/normal", color: "text-muted", children: tmp22 };
        cResult[18] = tmp22;
        cResult[19] = closure_9(tmp(onSave[16]).Text, obj4);
        const tmp30 = closure_9(tmp(onSave[16]).Text, obj4);
      } else {
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
        let tmp35;
        let tmp38;
        let tmp45;
        class V {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            let closure_1 = arg1;
            closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
          const stringResult1 = obj8.string(initialSelectedRoleIds(onSave[15])["pO3+p5"]);
          cResult[23] = stringResult1;
          tmp35 = stringResult1;
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
          const stringResult2 = obj9.string(tmp(onSave[14]).t.i4jeWR);
          cResult[24] = stringResult2;
          tmp38 = stringResult2;
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
        if (cResult[25] !== tmp21) {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
          const obj6 = { title: tmp35, trailing: closure_9(tmp(onSave[18]).ActionSheetHeaderPressableText, obj7) };
          const BottomSheetTitleHeader = tmp(tmp2[17]).BottomSheetTitleHeader;
          obj7 = { label: tmp38, onPress: tmp21 };
          cResult[25] = tmp21;
          cResult[26] = closure_9(BottomSheetTitleHeader, obj6);
          const tmp41 = closure_9(BottomSheetTitleHeader, obj6);
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
          const obj10 = { size: "md", round: true, grow: false, accessibilityLabel: intl.string(tmp(onSave[14]).t.Sojqsr), placeholder: intl2.string(tmp(onSave[14]).t.Sojqsr), onChange: tmp16 };
          const SearchBar = tmp(tmp2[19]).SearchBar;
          intl = tmp(tmp2[14]).intl;
          intl2 = tmp(tmp2[14]).intl;
          cResult[27] = closure_9(SearchBar, obj10);
          const tmp43 = closure_9(SearchBar, obj10);
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
          const obj11 = { style: tmp4.roleListEmpty, children: closure_9(Text, obj12) };
          obj12 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp(onSave[14]).t.V6nAfF) };
          Text = tmp(tmp2[16]).Text;
          intl3 = tmp(tmp2[14]).intl;
          tmp45 = closure_9(View, obj11);
        } else {
          class V {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
                        tmp3 = tmp.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES;
                      }
                      const colorStrings = children.colorStrings;
                      let primaryColor;
                      const obj = { style: roleLabel.roleLabel, children: items };
                      const TableCheckboxRow = guildId(onSave[21]).TableCheckboxRow;
                      const tmp7 = closure_1_10;
                      const tmp8 = View;
                      const tmp9 = closure_1_14;
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
                      items = [closure_1_9(tmp9, { color: primaryColor }), ];
                      const obj3 = { variant: "text-md/medium", children: children.name };
                      items[1] = closure_1_9(guildId(onSave[16]).Text, obj3);
                      formatToPlainStringResult = undefined;
                      if (tmp3) {
                        const intl = guildId(onSave[14]).intl;
                        const formatToPlainString = intl.formatToPlainString;
                        const obj4 = { max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES };
                        const prop = initialSelectedRoleIds(onSave[15])["dH7+/Z"];
                        formatToPlainStringResult = formatToPlainString(prop, obj4);
                      }
                      return closure_1_9(TableCheckboxRow, obj2, children.id);
                    })
          };
          const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
          tmp45 = closure_9(TableRowGroup, obj13);
        }
        cResult[28] = arr3;
        cResult[29] = first1;
        cResult[30] = tmp4.roleLabel;
        cResult[31] = tmp4.roleListEmpty;
        cResult[32] = tmp45;
      }
      const obj14 = { style: tmp4.roleListFooter, children: tmp29 };
      cResult[20] = tmp4.roleListFooter;
      cResult[21] = tmp29;
      cResult[22] = closure_9(View, obj14);
      const tmp34 = closure_9(View, obj14);
    }
    const fn = function z() {
      set = new Set(first1);
      onSave(set);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
    };
    cResult[12] = onSave;
    cResult[13] = first1;
    cResult[14] = fn;
  }
  if ("" !== tmp17) {
    class V {
      constructor(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        closure_5((size) => {
          if (closure_1) {
            if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
  cResult[8] = tmp17;
  cResult[9] = stateFromStoresArray;
  cResult[10] = stateFromStoresArray;
}) : (function ConjureCollaboratorRolesSheet(guildId) {
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
  let tmp = closure_12();
  const roleLabel = tmp;
  let tmp3 = onSave;
  let obj = guildId(onSave[11]);
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
        if (size.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
    obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
  }, items3);
  let intl = guildId(onSave[14]).intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj2 = { count: first.size, max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES };
  const g5I05P = require("module_3864").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_3864").un99lK), footer: closure_9(closure_6, obj4), header: closure_9(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[22]).ActionSheet;
  intl2 = guildId(onSave[14]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_9(guildId(onSave[16]).Text, { variant: "text-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_3864")["pO3+p5"]), trailing: closure_9(ActionSheetHeaderPressableText, obj6) };
  BottomSheetTitleHeader = guildId(onSave[17]).BottomSheetTitleHeader;
  intl3 = guildId(onSave[14]).intl;
  obj6 = { label: intl4.string(guildId(onSave[14]).t.i4jeWR), onPress: callback };
  ActionSheetHeaderPressableText = guildId(onSave[18]).ActionSheetHeaderPressableText;
  intl4 = guildId(onSave[14]).intl;
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: intl5.string(guildId(onSave[14]).t.Sojqsr), placeholder: intl6.string(guildId(onSave[14]).t.Sojqsr), onChange: tmp8 };
  const SearchBar = guildId(onSave[19]).SearchBar;
  intl5 = guildId(onSave[14]).intl;
  intl6 = guildId(onSave[14]).intl;
  items4 = [closure_9(SearchBar, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: tmp13Result };
  const tmp12 = closure_10;
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: closure_9(Text, obj10) };
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(guildId(tmp3[14]).t.V6nAfF) };
    Text = tmp2(tmp3[16]).Text;
    intl7 = tmp2(tmp3[14]).intl;
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
            tmp3 = tmp.size >= guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          const colorStrings = children.colorStrings;
          let primaryColor;
          const obj = { style: roleLabel.roleLabel, children: items };
          const TableCheckboxRow = guildId(onSave[21]).TableCheckboxRow;
          const tmp7 = closure_1_10;
          const tmp8 = closure_6;
          const tmp9 = closure_1_14;
          if (colorStrings != null) {
            primaryColor = colorStrings.primaryColor;
          }
          if (primaryColor == null) {
            primaryColor = children.colorString;
          }
          if (primaryColor == null) {
            primaryColor = closure_8;
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
          items = [closure_1_9(tmp9, { color: primaryColor }), ];
          const obj3 = { variant: "text-md/medium", children: children.name };
          items[1] = closure_1_9(guildId(onSave[16]).Text, obj3);
          formatToPlainStringResult = undefined;
          if (tmp3) {
            const intl = guildId(onSave[14]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj4 = { max: guildId(onSave[12]).MAX_PROJECT_COLLABORATOR_ROLES };
            const prop = require("module_3864")["dH7+/Z"];
            formatToPlainStringResult = formatToPlainString(prop, obj4);
          }
          return closure_1_9(TableCheckboxRow, obj2, children.id);
        })
    };
    const TableRowGroup = tmp2(tmp3[20]).TableRowGroup;
    tmp13Result = tmp13(TableRowGroup, obj11);
  }
  items4[1] = closure_9(closure_6, obj8);
  return tmp12(ActionSheet, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectSettingsForm(projectId, arg1, arg2) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let canSave;
  let checkingAppInGuild;
  let closure_0;
  let description;
  let experimentalError;
  let handleDescriptionChange;
  let handleFlagChange;
  let handleIconChange;
  let handleLiveReloadChange;
  let handleNameChange;
  let handleRequireHostApprovalChange;
  let handleRoleSelectionChange;
  let handleSmartContextChange;
  let hostApproval;
  let iconURL;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isGuildCollaboration;
  let isPublic;
  let items;
  let items1;
  let items2;
  let liveReload;
  let name;
  let nameChanged;
  let nameError;
  let obj19;
  let obj21;
  let obj23;
  let obj5;
  let obj8;
  let saveError;
  let saving;
  let selectedRoleIds;
  let smartContext;
  let stringResult4;
  let submit;
  let supportsCollaboration;
  let supportsCollaboratorRoles;
  let supportsVisibility;
  let tmp4;
  _require = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(83);
  if (cResult[0] !== arg2) {
    let obj2 = arg2;
    if (undefined === arg2) {
      obj2 = {};
    }
    cResult[0] = arg2;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const readOnly = tmp4.readOnly;
  const tmp6 = closure_12();
  const tmp8 = selectedRoleIds(handleFlagChange[23])(projectId, arg1);
  ({ iconURL, description, liveReload, smartContext, hostApproval, name, nameError, nameChanged, isPublic, isGuildCollaboration, selectedRoleIds } = tmp8);
  ({ supportsVisibility, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, saving, saveError, experimentalError, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleFlagChange } = tmp8);
  ({ handleLiveReloadChange, handleRoleSelectionChange } = tmp8);
  const ensureAppInGuild = tmp8.ensureAppInGuild;
  ({ handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp8);
  let tmp9 = saving || tmp5;
  if (cResult[2] === ensureAppInGuild) {
    if (cResult[3] === arg1) {
      if (cResult[4] === handleRoleSelectionChange) {
        let tmp10;
        let tmp11;
        if (cResult[5] === selectedRoleIds) {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== (undefined !== readOnly && readOnly)) {
          let tmp12 = null;
          if (undefined !== readOnly && readOnly) {
            let obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(tmp7(tmp2[15]).s7VnVF) };
            const Text = tmp(tmp2[16]).Text;
            intl = tmp(tmp2[14]).intl;
            tmp12 = closure_9(Text, obj3);
          }
          cResult[7] = undefined !== readOnly && readOnly;
          cResult[8] = tmp12;
          tmp11 = tmp12;
        } else {
          tmp11 = cResult[8];
        }
        if (cResult[9] === description) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === handleDescriptionChange) {
              if (cResult[12] === handleIconChange) {
                if (cResult[13] === handleNameChange) {
                  if (cResult[14] === iconURL) {
                    if (cResult[15] === name) {
                      let tmp14;
                      if (cResult[16] === nameError) {
                        tmp14 = cResult[17];
                      }
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === handleFlagChange) {
                          if (cResult[20] === isPublic) {
                            let tmp17;
                            if (cResult[21] === supportsVisibility) {
                              tmp17 = cResult[22];
                            }
                            if (cResult[23] === tmp9) {
                              if (cResult[24] === handleFlagChange) {
                                if (cResult[25] === isGuildCollaboration) {
                                  if (cResult[26] === supportsCollaboration) {
                                    let tmp20;
                                    if (cResult[27] === supportsVisibility) {
                                      tmp20 = cResult[28];
                                    }
                                    if (cResult[29] === tmp9) {
                                      if (cResult[30] === handleLiveReloadChange) {
                                        if (cResult[31] === liveReload.available) {
                                          if (cResult[32] === liveReload.checked) {
                                            let tmp23;
                                            if (cResult[33] === liveReload.description) {
                                              tmp23 = cResult[34];
                                            }
                                            if (cResult[35] === checkingAppInGuild) {
                                              if (cResult[36] === tmp9) {
                                                if (cResult[37] === tmp10) {
                                                  if (cResult[38] === isGuildCollaboration) {
                                                    let tmp26;
                                                    let tmp30;
                                                    if (cResult[39] === supportsCollaboratorRoles) {
                                                      tmp26 = cResult[40];
                                                    }
                                                    if (cResult[41] !== saveError) {
                                                      let tmp31 = null;
                                                      if (null != saveError) {
                                                        let obj4 = { accessibilityRole: "alert", children: closure_9(tmp(tmp2[16]).Text, obj5) };
                                                        obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
                                                        tmp31 = closure_9(View, obj4);
                                                      }
                                                      cResult[41] = saveError;
                                                      cResult[42] = tmp31;
                                                      tmp30 = tmp31;
                                                    } else {
                                                      tmp30 = cResult[42];
                                                    }
                                                    if (cResult[43] === tmp6.content) {
                                                      if (cResult[44] === tmp30) {
                                                        if (cResult[45] === tmp11) {
                                                          if (cResult[46] === tmp14) {
                                                            if (cResult[47] === tmp17) {
                                                              if (cResult[48] === tmp20) {
                                                                if (cResult[49] === tmp23) {
                                                                  let tmp34;
                                                                  let tmp40;
                                                                  let tmp39;
                                                                  if (cResult[50] === tmp26) {
                                                                    tmp34 = cResult[51];
                                                                  }
                                                                  const _Symbol = Symbol;
                                                                  const content = tmp6.content;
                                                                  if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                                                    const intl10 = tmp(tmp2[14]).intl;
                                                                    const stringResult = intl10.string(selectedRoleIds(handleFlagChange[15])["4liZ45"]);
                                                                    const intl11 = tmp(tmp2[14]).intl;
                                                                    const stringResult1 = intl11.string(selectedRoleIds(handleFlagChange[15]).I5cl7p);
                                                                    cResult[52] = stringResult;
                                                                    cResult[53] = stringResult1;
                                                                    tmp40 = stringResult1;
                                                                    tmp39 = stringResult;
                                                                  } else {
                                                                    tmp39 = cResult[52];
                                                                    tmp40 = cResult[53];
                                                                  }
                                                                  if (cResult[54] === handleSmartContextChange) {
                                                                    if (cResult[55] === saving) {
                                                                      let tmp43;
                                                                      let tmp47;
                                                                      let tmp46;
                                                                      if (cResult[56] === smartContext.checked) {
                                                                        tmp43 = cResult[57];
                                                                      }
                                                                      const _Symbol2 = Symbol;
                                                                      if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
                                                                        const intl12 = tmp(tmp2[14]).intl;
                                                                        const stringResult2 = intl12.string(selectedRoleIds(handleFlagChange[15]).mpjaVm);
                                                                        const intl13 = tmp(tmp2[14]).intl;
                                                                        const stringResult3 = intl13.string(selectedRoleIds(handleFlagChange[15])["2PxChh"]);
                                                                        cResult[58] = stringResult2;
                                                                        cResult[59] = stringResult3;
                                                                        tmp47 = stringResult3;
                                                                        tmp46 = stringResult2;
                                                                      } else {
                                                                        tmp46 = cResult[58];
                                                                        tmp47 = cResult[59];
                                                                      }
                                                                      if (cResult[60] === handleRequireHostApprovalChange) {
                                                                        if (cResult[61] === hostApproval.checked) {
                                                                          let tmp50;
                                                                          if (cResult[62] === saving) {
                                                                            tmp50 = cResult[63];
                                                                          }
                                                                          if (cResult[64] === tmp43) {
                                                                            let tmp53;
                                                                            let tmp56;
                                                                            let tmp59;
                                                                            if (cResult[65] === tmp50) {
                                                                              tmp53 = cResult[66];
                                                                            }
                                                                            if (cResult[67] !== projectId) {
                                                                              let obj6 = { projectId };
                                                                              const tmp58 = closure_9(tmp(handleFlagChange[26]).ConjureAllowedHostsSetting, obj6);
                                                                              cResult[67] = projectId;
                                                                              cResult[68] = tmp58;
                                                                              tmp56 = tmp58;
                                                                            } else {
                                                                              tmp56 = cResult[68];
                                                                            }
                                                                            if (cResult[69] !== experimentalError) {
                                                                              let tmp60 = null;
                                                                              if (null != experimentalError) {
                                                                                const obj7 = { accessibilityRole: "alert", children: closure_9(tmp(handleFlagChange[16]).Text, obj8) };
                                                                                obj8 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
                                                                                tmp60 = closure_9(View, obj7);
                                                                              }
                                                                              cResult[69] = experimentalError;
                                                                              cResult[70] = tmp60;
                                                                              tmp59 = tmp60;
                                                                            } else {
                                                                              tmp59 = cResult[70];
                                                                            }
                                                                            if (cResult[71] === tmp6.content) {
                                                                              if (cResult[72] === tmp53) {
                                                                                if (cResult[73] === tmp56) {
                                                                                  let tmp63;
                                                                                  if (cResult[74] === tmp59) {
                                                                                    tmp63 = cResult[75];
                                                                                  }
                                                                                  if (cResult[76] === canSave) {
                                                                                    if (cResult[77] === tmp63) {
                                                                                      if (cResult[78] === tmp34) {
                                                                                        if (cResult[79] === nameChanged) {
                                                                                          if (cResult[80] === saving) {
                                                                                            let tmp67;
                                                                                            if (cResult[81] === submit) {
                                                                                              tmp67 = cResult[82];
                                                                                            }
                                                                                            return tmp67;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  const obj9 = { fields: tmp34, experimentalFields: tmp63, canSave, saving, nameChanged, submit };
                                                                                  cResult[76] = canSave;
                                                                                  cResult[77] = tmp63;
                                                                                  cResult[78] = tmp34;
                                                                                  cResult[79] = nameChanged;
                                                                                  cResult[80] = saving;
                                                                                  cResult[81] = submit;
                                                                                  cResult[82] = obj9;
                                                                                  tmp67 = obj9;
                                                                                }
                                                                              }
                                                                            }
                                                                            const obj11 = { style: content, children: items };
                                                                            items = [tmp53, tmp56, tmp59];
                                                                            const tmp66 = closure_10(View, obj11);
                                                                            cResult[71] = tmp6.content;
                                                                            cResult[72] = tmp53;
                                                                            cResult[73] = tmp56;
                                                                            cResult[74] = tmp59;
                                                                            cResult[75] = tmp66;
                                                                            tmp63 = tmp66;
                                                                          }
                                                                          const obj12 = { hasIcons: false, children: items1 };
                                                                          items1 = [tmp43, tmp50];
                                                                          const tmp55 = closure_10(tmp(handleFlagChange[20]).TableRowGroup, obj12);
                                                                          cResult[64] = tmp43;
                                                                          cResult[65] = tmp50;
                                                                          cResult[66] = tmp55;
                                                                          tmp53 = tmp55;
                                                                        }
                                                                      }
                                                                      const obj13 = { label: tmp46, subLabel: tmp47, checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
                                                                      const tmp52 = closure_9(tmp(handleFlagChange[21]).TableCheckboxRow, obj13);
                                                                      cResult[60] = handleRequireHostApprovalChange;
                                                                      cResult[61] = hostApproval.checked;
                                                                      cResult[62] = saving;
                                                                      cResult[63] = tmp52;
                                                                      tmp50 = tmp52;
                                                                    }
                                                                  }
                                                                  const obj14 = { label: tmp39, subLabel: tmp40, checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
                                                                  const tmp45 = closure_9(tmp(handleFlagChange[21]).TableCheckboxRow, obj14);
                                                                  cResult[54] = handleSmartContextChange;
                                                                  cResult[55] = saving;
                                                                  cResult[56] = smartContext.checked;
                                                                  cResult[57] = tmp45;
                                                                  tmp43 = tmp45;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj15 = { style: tmp6.content, children: items2 };
                                                    items2 = [tmp11, tmp14, tmp17, tmp20, tmp23, tmp26, tmp30];
                                                    const tmp37 = closure_10(View, obj15);
                                                    cResult[43] = tmp6.content;
                                                    cResult[44] = tmp30;
                                                    cResult[45] = tmp11;
                                                    cResult[46] = tmp14;
                                                    cResult[47] = tmp17;
                                                    cResult[48] = tmp20;
                                                    cResult[49] = tmp23;
                                                    cResult[50] = tmp26;
                                                    cResult[51] = tmp37;
                                                    tmp34 = tmp37;
                                                  }
                                                }
                                              }
                                            }
                                            let tmp28Result = null;
                                            if (supportsCollaboratorRoles) {
                                              const TableRowGroup4 = tmp(tmp2[20]).TableRowGroup;
                                              const obj16 = { label: intl7.string(selectedRoleIds(handleFlagChange[15])["pO3+p5"]), subLabel: intl8.string(selectedRoleIds(handleFlagChange[15])["9MdtK9"]), arrow: true, disabled: tmp9 || !isGuildCollaboration || checkingAppInGuild, accessibilityHint: stringResult4, onPress: tmp10 };
                                              const TableRow = tmp(tmp2[25]).TableRow;
                                              intl7 = tmp(tmp2[14]).intl;
                                              intl8 = tmp(tmp2[14]).intl;
                                              stringResult4 = undefined;
                                              if (!isGuildCollaboration) {
                                                const intl9 = tmp(tmp2[14]).intl;
                                                stringResult4 = intl9.string(tmp7(tmp2[15]).nZw5r9);
                                              }
                                              const obj17 = { hasIcons: false, children: closure_9(TableRow, obj16) };
                                              tmp28Result = tmp28(TableRowGroup4, obj17);
                                            }
                                            cResult[35] = checkingAppInGuild;
                                            cResult[36] = tmp9;
                                            cResult[37] = tmp10;
                                            cResult[38] = isGuildCollaboration;
                                            cResult[39] = supportsCollaboratorRoles;
                                            cResult[40] = tmp28Result;
                                            tmp26 = tmp28Result;
                                          }
                                        }
                                      }
                                    }
                                    let tmp24 = null;
                                    if (liveReload.available) {
                                      const obj18 = { hasIcons: false, children: closure_9(TableCheckboxRow3, obj19) };
                                      const TableRowGroup3 = tmp(tmp2[20]).TableRowGroup;
                                      obj19 = { label: intl6.string(selectedRoleIds(handleFlagChange[15]).eEo0ye), subLabel: null, checked: null, disabled: tmp9, onPress: handleLiveReloadChange };
                                      TableCheckboxRow3 = tmp(tmp2[21]).TableCheckboxRow;
                                      intl6 = tmp(tmp2[14]).intl;
                                      ({ description: obj10.subLabel, checked: obj10.checked } = liveReload);
                                      tmp24 = closure_9(TableRowGroup3, obj18);
                                    }
                                    cResult[29] = tmp9;
                                    cResult[30] = handleLiveReloadChange;
                                    cResult[31] = liveReload.available;
                                    cResult[32] = liveReload.checked;
                                    cResult[33] = liveReload.description;
                                    cResult[34] = tmp24;
                                    tmp23 = tmp24;
                                  }
                                }
                              }
                            }
                            let tmp21 = null;
                            if (supportsVisibility) {
                              tmp21 = null;
                              if (supportsCollaboration) {
                                const obj20 = { hasIcons: false, children: closure_9(TableCheckboxRow2, obj21) };
                                const TableRowGroup2 = tmp(tmp2[20]).TableRowGroup;
                                obj21 = {
                                  label: intl4.string(selectedRoleIds(handleFlagChange[15]).lVvR4E),
                                  subLabel: intl5.string(selectedRoleIds(handleFlagChange[15]).SQZGoV),
                                  checked: isGuildCollaboration,
                                  disabled: tmp9,
                                  onPress(arg0) {
                                                                  return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
                                                                }
                                };
                                TableCheckboxRow2 = tmp(tmp2[21]).TableCheckboxRow;
                                intl4 = tmp(tmp2[14]).intl;
                                intl5 = tmp(tmp2[14]).intl;
                                tmp21 = closure_9(TableRowGroup2, obj20);
                              }
                            }
                            cResult[23] = tmp9;
                            cResult[24] = handleFlagChange;
                            cResult[25] = isGuildCollaboration;
                            cResult[26] = supportsCollaboration;
                            cResult[27] = supportsVisibility;
                            cResult[28] = tmp21;
                            tmp20 = tmp21;
                          }
                        }
                      }
                      let tmp18 = null;
                      if (supportsVisibility) {
                        const obj22 = { hasIcons: false, children: closure_9(TableCheckboxRow, obj23) };
                        const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
                        obj23 = {
                          label: intl2.string(selectedRoleIds(handleFlagChange[15]).ujIxRm),
                          subLabel: intl3.string(selectedRoleIds(handleFlagChange[15]).gT8zk1),
                          checked: isPublic,
                          disabled: tmp9,
                          onPress(arg0) {
                                                  return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
                                                }
                        };
                        TableCheckboxRow = tmp(tmp2[21]).TableCheckboxRow;
                        intl2 = tmp(tmp2[14]).intl;
                        intl3 = tmp(tmp2[14]).intl;
                        tmp18 = closure_9(TableRowGroup, obj22);
                      }
                      cResult[18] = tmp9;
                      cResult[19] = handleFlagChange;
                      cResult[20] = isPublic;
                      cResult[21] = supportsVisibility;
                      cResult[22] = tmp18;
                      tmp17 = tmp18;
                    }
                  }
                }
              }
            }
          }
        }
        const obj45 = { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp9 };
        const tmp16 = closure_9(tmp(handleFlagChange[24]).ConjureAppIdentitySection, obj45);
        cResult[9] = description;
        cResult[10] = tmp9;
        cResult[11] = handleDescriptionChange;
        cResult[12] = handleIconChange;
        cResult[13] = handleNameChange;
        cResult[14] = iconURL;
        cResult[15] = name;
        cResult[16] = nameError;
        cResult[17] = tmp16;
        tmp14 = tmp16;
      }
    }
  }
  _require = handleRoleSelectionChange(function*(arg0, value) {
    let obj6;
    let v3;
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
      let c2;
      try {
        let closure_1;
        let guildId;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            guildId = tmp;
            if (null != guildId) {
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: c4(), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c2 = 0;
          if (value) {
            const obj = { content: closure_2_9(closure_2_15, obj6), key, stackingBehavior: "stack" };
            obj6 = {
              guildId,
              initialSelectedRoleIds: set,
              onSave(arg0) {
                        const items = [...arg0];
                        return closure_1_3(items);
                      }
            };
            const _Set = Set;
            const self = this;
            const self2 = this;
            const showActionSheet = guildId(handleFlagChange[13]).showActionSheet;
            const tmp9 = guildId(handleFlagChange[13]);
            set = new Set(closure_1);
            showActionSheet(obj);
          } else {
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp20) {
        if (0 === c2) {
          c4 = 3;
          throw tmp20;
        } else {
          c3 = 1;
        }
      }
    }
  });
  function t3() {
    return closure_0(...arguments);
  }
  cResult[2] = ensureAppInGuild;
  cResult[3] = arg1;
  cResult[4] = handleRoleSelectionChange;
  cResult[5] = selectedRoleIds;
  cResult[6] = t3;
  tmp10 = t3;
}) : (function useConjureProjectSettingsForm(projectId, arg1) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let _undefined;
  let c2;
  let canSave;
  let checkingAppInGuild;
  let closure_0;
  let description;
  let experimentalError;
  let handleDescriptionChange;
  let handleIconChange;
  let handleLiveReloadChange;
  let handleNameChange;
  let handleRequireHostApprovalChange;
  let handleRoleSelectionChange;
  let handleSmartContextChange;
  let hostApproval;
  let iconURL;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isGuildCollaboration;
  let isPublic;
  let items1;
  let items2;
  let items3;
  let liveReload;
  let name;
  let nameChanged;
  let nameError;
  let obj10;
  let obj14;
  let obj16;
  let obj41;
  let obj5;
  let obj7;
  let saveError;
  let saving;
  let selectedRoleIds;
  let smartContext;
  let stringResult;
  let submit;
  let supportsCollaboration;
  let supportsCollaboratorRoles;
  let supportsVisibility;
  _require = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  selectedRoleIds = undefined;
  dependencyMap = undefined;
  handleRoleSelectionChange = undefined;
  const tmp = closure_12();
  const tmp3 = dependencyMap;
  const tmp4 = selectedRoleIds(12272)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c2, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  let tmp5 = saving;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, isPublic, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  if (!saving) {
    tmp5 = flag;
  }
  let items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj2 = { style: tmp.content, children: items1 };
  let tmp9 = null;
  const callback = react.useCallback(handleRoleSelectionChange(function*(arg0, value) {
    let obj6;
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
      let c2;
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            if (null != tmp) {
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: ensureAppInGuild(), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c2 = 0;
          if (value) {
            const obj = { content: closure_1_9(closure_1_15, obj6), key, stackingBehavior: "stack" };
            obj6 = {
              guildId: closure_129_0,
              initialSelectedRoleIds: set,
              onSave(arg0) {
                        const items = [...arg0];
                        return closure_1_3(items);
                      }
            };
            const _Set = Set;
            const self = this;
            const self2 = this;
            const showActionSheet = tmp(c2[13]).showActionSheet;
            const tmp9 = tmp(c2[13]);
            set = new Set(closure_129_1);
            showActionSheet(obj);
          } else {
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp20) {
        if (0 === c2) {
          c4 = 3;
          throw tmp20;
        } else {
          c3 = 1;
        }
      }
    }
  }), items);
  if (flag) {
    let obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(tmp2(3864).s7VnVF) };
    const Text = require("Text/Text").Text;
    intl = require("intl").intl;
    tmp9 = closure_9(Text, obj3);
  }
  items1 = [tmp9, , , , , , ];
  items1[1] = closure_9(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp5 });
  let tmp12Result = null;
  if (supportsVisibility) {
    let obj4 = { hasIcons: false, children: tmp12(TableCheckboxRow, obj5) };
    const TableRowGroup = tmp13(7047).TableRowGroup;
    obj5 = {
      label: intl2.string(tmp2(3864).ujIxRm),
      subLabel: intl3.string(tmp2(3864).gT8zk1),
      checked: isPublic,
      disabled: tmp5,
      onPress(arg0) {
          return c2(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
        }
    };
    TableCheckboxRow = tmp13(6960).TableCheckboxRow;
    intl2 = tmp13(1125).intl;
    intl3 = tmp13(1125).intl;
    tmp12Result = tmp12(TableRowGroup, obj4);
  }
  items1[2] = tmp12Result;
  let tmp12Result6 = null;
  if (supportsVisibility) {
    tmp12Result6 = null;
    if (supportsCollaboration) {
      let obj6 = { hasIcons: false, children: tmp12(TableCheckboxRow2, obj7) };
      const TableRowGroup2 = tmp13(7047).TableRowGroup;
      obj7 = {
        label: intl4.string(selectedRoleIds(3864).lVvR4E),
        subLabel: intl5.string(selectedRoleIds(3864).SQZGoV),
        checked: isGuildCollaboration,
        disabled: tmp5,
        onPress(arg0) {
              return c2(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      TableCheckboxRow2 = tmp13(6960).TableCheckboxRow;
      intl4 = tmp13(1125).intl;
      intl5 = tmp13(1125).intl;
      tmp12Result6 = tmp12(TableRowGroup2, obj6);
    }
  }
  items1[3] = tmp12Result6;
  let tmp12Result7 = null;
  if (liveReload.available) {
    const obj8 = { hasIcons: false, children: closure_9(TableCheckboxRow3, obj10) };
    const TableRowGroup3 = tmp13(7047).TableRowGroup;
    obj10 = { label: intl6.string(selectedRoleIds(3864).eEo0ye), subLabel: null, checked: null, disabled: tmp5, onPress: handleLiveReloadChange };
    TableCheckboxRow3 = tmp13(6960).TableCheckboxRow;
    intl6 = tmp13(1125).intl;
    ({ description: obj9.subLabel, checked: obj9.checked } = liveReload);
    tmp12Result7 = tmp12(TableRowGroup3, obj8);
  }
  items1[4] = tmp12Result7;
  let tmp12Result8 = null;
  if (supportsCollaboratorRoles) {
    const TableRowGroup4 = tmp13(7047).TableRowGroup;
    const obj11 = { label: intl7.string(selectedRoleIds(3864)["pO3+p5"]), subLabel: intl8.string(selectedRoleIds(3864)["9MdtK9"]), arrow: true, disabled: tmp5, accessibilityHint: stringResult, onPress: callback };
    const TableRow = tmp13(6963).TableRow;
    intl7 = tmp13(1125).intl;
    intl8 = tmp13(1125).intl;
    if (!tmp5) {
      tmp5 = !isGuildCollaboration;
    }
    if (!tmp5) {
      tmp5 = checkingAppInGuild;
    }
    stringResult = undefined;
    if (!isGuildCollaboration) {
      const intl9 = tmp13(1125).intl;
      stringResult = intl9.string(tmp2(3864).nZw5r9);
    }
    const obj12 = { hasIcons: false, children: closure_9(TableRow, obj11) };
    tmp12Result8 = tmp12(TableRowGroup4, obj12);
  }
  items1[5] = tmp12Result8;
  let tmp12Result9 = null;
  if (null != saveError) {
    const obj13 = { accessibilityRole: "alert", children: closure_9(require("Text/Text").Text, obj14) };
    obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
    tmp12Result9 = tmp12(tmp8, obj13);
  }
  items1[6] = tmp12Result9;
  const obj15 = { fields: closure_10(View, obj2), experimentalFields: closure_10(View, obj16), canSave, saving, nameChanged, submit };
  obj16 = { style: tmp.content, children: items3 };
  const obj17 = { hasIcons: false, children: items2 };
  const TableRowGroup5 = tmp13(7047).TableRowGroup;
  const obj18 = { label: intl10.string(selectedRoleIds(3864)["4liZ45"]), subLabel: intl11.string(selectedRoleIds(3864).I5cl7p), checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
  const TableCheckboxRow4 = tmp13(6960).TableCheckboxRow;
  intl10 = tmp13(1125).intl;
  intl11 = tmp13(1125).intl;
  items2 = [tmp12(TableCheckboxRow4, obj18), ];
  const obj19 = { label: intl12.string(selectedRoleIds(3864).mpjaVm), subLabel: intl13.string(selectedRoleIds(3864)["2PxChh"]), checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
  const TableCheckboxRow5 = tmp13(6960).TableCheckboxRow;
  intl12 = tmp13(1125).intl;
  intl13 = tmp13(1125).intl;
  items2[1] = closure_9(TableCheckboxRow5, obj19);
  items3 = [tmp7(TableRowGroup5, obj17), , ];
  const obj20 = { projectId };
  items3[1] = closure_9(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, obj20);
  let tmp12Result10 = null;
  if (null != experimentalError) {
    const obj21 = { accessibilityRole: "alert", children: closure_9(require("Text/Text").Text, obj41) };
    obj41 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
    tmp12Result10 = tmp12(tmp8, obj21);
  }
  items3[2] = tmp12Result10;
  return obj15;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default tmp4;
