// Module ID: 16967
// Function ID: 16968
// Name: VibegrationsProjectSettingsSheet
// Dependencies: [5, 32, 19, 17, 2103, 9339, 1078, 21, 4790, 580, 558, 568, 504, 5309, 4757, 1119, 3714, 4786, 7428, 9813, 7329, 5935, 5851, 7481, 5308, 16968, 9340, 6878, 5854, 5220, 2]
// Exports: default

// Module 16967 (VibegrationsProjectSettingsSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4757 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5309 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9339 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
let View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1078).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsProjectSettingsSheet = "VibegrationsProjectSettingsSheet";
const VibegrationsCollaboratorRolesSheet = "VibegrationsCollaboratorRolesSheet";
let createStyles = fn(4790);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, roleLabel: null, roleListContent: null, roleListEmpty: null, roleListFooter: null };
let obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.roleListFooter = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(4790);
let closure_15 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(2);
  const tmp2 = closure_15(color.color);
  if (cResult[0] !== tmp2.circle) {
    const obj2 = { style: tmp2.circle };
    const tmp6 = v65535(View, obj2);
    cResult[0] = tmp2.circle;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((color) => v65535(View, { style: closure_15(color.color).circle }));
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(onSave[11]).c(40);
  guildId = guildId.guildId;
  const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
  onSave = guildId.onSave;
  const tmp4 = closure_14();
  const roleLabel = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [closure_7];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function h() {
      return GuildRoleStore.getSortedRoles(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = guildId(onSave[11]);
  const stateFromStoresArray = guildId(onSave[12]).useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] !== initialSelectedRoleIds) {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    cResult[4] = initialSelectedRoleIds;
    cResult[5] = O;
    const tmp10 = O;
  } else {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  const tmp11 = roleListEmpty(noop.useState(tmp10), 2);
  roleListEmpty = tmp11[0];
  noop = tmp11[1];
  const tmpResult = guildId(onSave[12]);
  [tmp13, tmp14] = roleListEmpty(noop.useState(""), 2);
  if (cResult[6] !== tmp13) {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    let toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
    cResult[6] = tmp13;
    cResult[7] = toLocaleLowerCaseResult;
  } else {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  View = tmp15;
  if (cResult[8] === tmp15) {
    class O {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                return size;
              }
            }
            const set = new Set(size);
            if (closure_1) {
              set.add(closure_0);
            } else {
              set.delete(closure_0);
            }
            return set;
          });
          return;
        }
      }
      cResult[11] = X;
      const tmp18 = X;
    } else {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                return size;
              }
            }
            const set = new Set(size);
            if (closure_1) {
              set.add(closure_0);
            } else {
              set.delete(closure_0);
            }
            return set;
          });
          return;
        }
      }
    }
    closure_7 = tmp18;
    if (cResult[12] === onSave) {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5((size) => {
            if (closure_1) {
              if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                return size;
              }
            }
            const set = new Set(size);
            if (closure_1) {
              set.add(closure_0);
            } else {
              set.delete(closure_0);
            }
            return set;
          });
          return;
        }
      }
      if (cResult[15] !== roleListEmpty.size) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
        let obj2 = { count: roleListEmpty.size, max: tmp(tmp2[13]).MAX_PROJECT_COLLABORATOR_ROLES };
        let formatToPlainStringResult = obj4.formatToPlainString(initialSelectedRoleIds(tmp2[16]).eaqbJt, obj2);
        cResult[15] = roleListEmpty.size;
        cResult[16] = formatToPlainStringResult;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
        const stringResult = obj6.string(initialSelectedRoleIds(tmp2[16])["9yHiDe"]);
        cResult[17] = stringResult;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
      }
      if (cResult[18] !== tmp20) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp20 };
        const tmp27 = closure_10(tmp(tmp2[17]).Text, obj5);
        cResult[18] = tmp20;
        cResult[19] = tmp27;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
      }
      if (cResult[20] === tmp4.roleListFooter) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5((size) => {
              if (closure_1) {
                if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                  return size;
                }
              }
              const set = new Set(size);
              if (closure_1) {
                set.add(closure_0);
              } else {
                set.delete(closure_0);
              }
              return set;
            });
            return;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          const stringResult1 = obj9.string(initialSelectedRoleIds(tmp2[16]).fqvhf0);
          cResult[23] = stringResult1;
          const tmp32 = stringResult1;
        } else {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          const stringResult2 = obj10.string(tmp(tmp2[15]).t.i4jeWR);
          cResult[24] = stringResult2;
          const tmp35 = stringResult2;
        } else {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        if (cResult[25] !== tmp19) {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          const obj7 = { title: tmp32, trailing: null };
          const obj8 = { label: tmp35, onPress: tmp19 };
          obj7.trailing = closure_10(tmp(tmp2[19]).ActionSheetHeaderPressableText, obj8);
          const tmp38 = closure_10(tmp(tmp2[18]).BottomSheetTitleHeader, obj7);
          cResult[25] = tmp19;
          cResult[26] = tmp38;
        } else {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          const obj11 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
          let intl = tmp(tmp2[15]).intl;
          obj11.accessibilityLabel = intl.string(tmp(tmp2[15]).t.Sojqsr);
          const intl2 = tmp(tmp2[15]).intl;
          obj11.placeholder = intl2.string(tmp(tmp2[15]).t.Sojqsr);
          obj11.onChange = tmp14;
          const tmp40 = closure_10(tmp(tmp2[20]).SearchField, obj11);
          cResult[27] = tmp40;
        } else {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        if (cResult[28] === arr3) {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        if (0 === arr3.length) {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          const obj12 = { style: tmp4.roleListEmpty, children: null };
          const obj13 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl3 = tmp(tmp2[15]).intl;
          obj13.children = intl3.string(tmp(tmp2[15]).t.V6nAfF);
          obj12.children = closure_10(tmp(tmp2[17]).Text, obj13);
          let tmp41 = closure_10(View, obj12);
        } else {
          class X {
            constructor(arg0, arg1) {
              closure_0 = guildId;
              closure_1 = arg1;
              tmp = closure_5((size) => {
                if (closure_1) {
                  if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
                    return size;
                  }
                }
                const set = new Set(size);
                if (closure_1) {
                  set.add(closure_0);
                } else {
                  set.delete(closure_0);
                }
                return set;
              });
              return;
            }
          }
          const obj14 = {
            hasIcons: false,
            children: arr3.map((children) => {
                      const id = children;
                      const hasItem = roleListEmpty.has(children.id);
                      let tmp3 = !hasItem;
                      if (!hasItem) {
                        tmp3 = roleListEmpty.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
                      }
                      const obj = { style: roleLabel.roleLabel, children: null };
                      const colorStrings = children.colorStrings;
                      let primaryColor;
                      if (colorStrings != null) {
                        primaryColor = colorStrings.primaryColor;
                      }
                      if (primaryColor == null) {
                        primaryColor = children.colorString;
                      }
                      if (primaryColor == null) {
                        primaryColor = DEFAULT_ROLE_COLOR_HEX;
                      }
                      const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
                      const items = [closure_1_10(closure_1_16, { color: primaryColor }), closure_1_10(guildId(onSave[17]).Text, { variant: "text-md/medium", children: children.name })];
                      obj.children = items;
                      obj2.label = closure_1_11(toLocaleLowerCaseResult, obj);
                      obj2.checked = hasItem;
                      obj2.disabled = tmp3;
                      let formatToPlainStringResult;
                      if (tmp3) {
                        const intl = guildId(onSave[15]).intl;
                        const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
                        formatToPlainStringResult = intl.formatToPlainString(initialSelectedRoleIds(onSave[16]).VPUL05, obj4);
                      }
                      obj2.accessibilityHint = formatToPlainStringResult;
                      obj2.onPress = function onPress(arg0) {
                        return closure_7(id.id, arg0);
                      };
                      return closure_1_10(guildId(onSave[22]).TableCheckboxRow, obj2, children.id);
                    })
          };
          tmp41 = closure_10(tmp(tmp2[21]).TableRowGroup, obj14);
        }
        cResult[28] = arr3;
        cResult[29] = roleListEmpty;
        ({ roleLabel: tmp3[30], roleListEmpty } = tmp4);
        cResult[31] = roleListEmpty;
        cResult[32] = tmp41;
      }
      const obj15 = { style: tmp4.roleListFooter, children: tmp26 };
      const tmp31 = closure_10(View, obj15);
      cResult[20] = tmp4.roleListFooter;
      cResult[21] = tmp26;
      cResult[22] = tmp31;
    }
    const fn2 = function z() {
      onSave(new Set(roleListEmpty));
      const set = new Set(roleListEmpty);
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsCollaboratorRolesSheet);
    };
    cResult[12] = onSave;
    cResult[13] = roleListEmpty;
    cResult[14] = fn2;
  }
  if ("" !== tmp15) {
    class X {
      constructor(arg0, arg1) {
        closure_0 = guildId;
        closure_1 = arg1;
        tmp = closure_5((size) => {
          if (closure_1) {
            if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
              return size;
            }
          }
          const set = new Set(size);
          if (closure_1) {
            set.add(closure_0);
          } else {
            set.delete(closure_0);
          }
          return set;
        });
        return;
      }
    }
  }
  cResult[8] = tmp15;
  cResult[9] = stateFromStoresArray;
  cResult[10] = stateFromStoresArray;
}) : ((guildId) => {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  c7 = undefined;
  const tmp = closure_14();
  const roleLabel = tmp;
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(onSave[12]).useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => new Set(importDefault)), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  let obj = guildId(onSave[12]);
  [str, tmp8] = stateFromStoresArray(first.useState(""), 2);
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  c7 = toLocaleLowerCaseResult;
  const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
  const memo = first.useMemo(() => {
    if ("" === c7) {
      let found = stateFromStoresArray;
    } else {
      found = stateFromStoresArray.filter((id) => {
        let hasItem = id.id === closure_1_7;
        if (!hasItem) {
          const name = id.name;
          hasItem = name.toLocaleLowerCase().includes(tmp);
          const toLocaleLowerCaseResult = name.toLocaleLowerCase();
        }
        return hasItem;
      });
    }
    return found;
  }, items2);
  closure_8 = first.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6((size) => {
      if (closure_1) {
        if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
          return size;
        }
      }
      const set = new Set(size);
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
    onSave(new Set(first));
    const set = new Set(first);
    ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsCollaboratorRolesSheet);
  }, items3);
  let intl = guildId(onSave[15]).intl;
  const tmp7 = stateFromStoresArray(first.useState(""), 2);
  let obj2 = { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[15]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("module_3714")["9yHiDe"]);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_3714").eaqbJt, { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES });
  const tmp12 = closure_11;
  obj3.footer = closure_10(closure_6, { style: tmp.roleListFooter, children: closure_10(guildId(onSave[17]).Text, { variant: "text-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_3714").eaqbJt, { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[15]).intl;
  obj5.title = intl3.string(require("module_3714").fqvhf0);
  const obj6 = { label: null, onPress: null };
  const intl4 = guildId(onSave[15]).intl;
  obj6.label = intl4.string(guildId(onSave[15]).t.i4jeWR);
  obj6.onPress = callback;
  obj5.trailing = closure_10(guildId(onSave[19]).ActionSheetHeaderPressableText, obj6);
  obj3.header = closure_10(guildId(onSave[18]).BottomSheetTitleHeader, obj5);
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[15]).intl;
  obj7.accessibilityLabel = intl5.string(guildId(onSave[15]).t.Sojqsr);
  const intl6 = guildId(onSave[15]).intl;
  obj7.placeholder = intl6.string(guildId(onSave[15]).t.Sojqsr);
  obj7.onChange = tmp8;
  const items4 = [closure_10(guildId(onSave[20]).SearchField, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: null };
    const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[15]).intl;
    obj10.children = intl7.string(tmp2(tmp3[15]).t.V6nAfF);
    obj9.children = tmp13(tmp2(tmp3[17]).Text, obj10);
    let tmp13Result = tmp13(tmp14, obj9);
  } else {
    const obj11 = {
      hasIcons: false,
      children: memo.map((children) => {
          const id = children;
          const hasItem = first.has(children.id);
          let tmp3 = !hasItem;
          if (!hasItem) {
            tmp3 = first.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          const obj = { style: roleLabel.roleLabel, children: null };
          const colorStrings = children.colorStrings;
          let primaryColor;
          if (colorStrings != null) {
            primaryColor = colorStrings.primaryColor;
          }
          if (primaryColor == null) {
            primaryColor = children.colorString;
          }
          if (primaryColor == null) {
            primaryColor = DEFAULT_ROLE_COLOR_HEX;
          }
          const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
          const items = [closure_1_10(closure_1_16, { color: primaryColor }), closure_1_10(guildId(onSave[17]).Text, { variant: "text-md/medium", children: children.name })];
          obj.children = items;
          obj2.label = closure_1_11(closure_6, obj);
          obj2.checked = hasItem;
          obj2.disabled = tmp3;
          let formatToPlainStringResult;
          if (tmp3) {
            const intl = guildId(onSave[15]).intl;
            const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
            formatToPlainStringResult = intl.formatToPlainString(require("module_3714").VPUL05, obj4);
          }
          obj2.accessibilityHint = formatToPlainStringResult;
          obj2.onPress = function onPress(arg0) {
            return closure_8(id.id, arg0);
          };
          return closure_1_10(guildId(onSave[22]).TableCheckboxRow, obj2, children.id);
        })
    };
    tmp13Result = tmp13(tmp2(tmp3[21]).TableRowGroup, obj11);
  }
  obj8.children = tmp13Result;
  items4[1] = closure_10(closure_6, obj8);
  obj3.children = items4;
  return tmp12(guildId(onSave[23]).ActionSheet, obj3);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsProjectSettingsSheet.tsx");

export default function VibegrationsProjectSettingsSheet(projectId) {
  projectId = projectId.projectId;
  const guildId = projectId.guildId;
  let stateFromStores;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  first2 = undefined;
  closure_8 = undefined;
  first3 = undefined;
  closure_10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let trimmed;
  let isPublic;
  closure_15 = undefined;
  closure_16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  let callback1;
  const tmp = isPublic();
  const items = [closure_8];
  const items1 = [projectId];
  stateFromStores = projectId(stateFromStores[12]).useStateFromStores(items, () => VibegrationsProjectStore.getProject(projectId), items1);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const first = _slicedToArray(first1.useState(str), 1)[0];
  let obj = projectId(stateFromStores[12]);
  [str2, c4] = first1.useState(first);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  [first1, closure_6] = first1.useState(num);
  [first2, closure_8] = first1.useState(() => new Set(prop));
  [first3, closure_10] = first1.useState(false);
  const tmp7 = _slicedToArray(first1.useState(first), 2);
  [tmp15, c11] = first1.useState(null);
  const tmp5Result7 = _slicedToArray(first1.useState(null), 2);
  [tmp17, c12] = first1.useState(false);
  trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp2(tmp3[13]).projectSupportsVisibility(stateFromStores);
    const tmp2Result = tmp2(tmp3[13]);
  }
  let result1 = null != stateFromStores;
  if (result1) {
    result1 = tmp2(tmp3[13]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmp2Result4 = tmp2(tmp3[13]);
  }
  const tmp5Result8 = _slicedToArray(first1.useState(false), 2);
  const vibegrationsProjectAccessSettings = projectId(stateFromStores[24]).getVibegrationsProjectAccessSettings(first1);
  isPublic = vibegrationsProjectAccessSettings.isPublic;
  let tmp22 = null != stateFromStores;
  if (tmp22) {
    tmp22 = trimmed !== first;
  }
  closure_15 = tmp22;
  let tmp23 = result;
  if (result) {
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
  if (result1) {
    tmp24 = !tmp2(tmp3[25]).haveSameRoleIds(first2, prop);
    const tmp2Result6 = tmp2(tmp3[25]);
  }
  closure_17 = tmp24;
  let tmp25 = tmp22;
  if (!tmp22) {
    tmp25 = tmp23;
  }
  if (!tmp25) {
    tmp25 = tmp24;
  }
  closure_18 = tmp25;
  const callback = obj2.useCallback((arg0) => {
    _undefined(arg0);
    _undefined2(null);
    _undefined3(false);
  }, []);
  closure_19 = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6((arg0) => {
      if (closure_1) {
        let tmp2 = arg0 | tmp;
      } else {
        tmp2 = arg0 & ~tmp;
      }
      return tmp2;
    });
    _undefined3(false);
  }, []);
  callback1 = obj2.useCallback((items) => {
    closure_8(new Set(items));
    _undefined3(false);
  }, []);
  const items2 = [guildId, callback1, first2];
  const callback2 = obj2.useCallback(() => {
    const obj2 = { content: v65535(closure_17, { guildId, initialSelectedRoleIds: first2, onSave: callback1 }), key: VibegrationsCollaboratorRolesSheet, stackingBehavior: "stack" };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items2);
  const items3 = [first1, tmp23, guildId, tmp25, isPublic, tmp22, stateFromStores, projectId, tmp24, first3, first2, trimmed];
  const callback3 = obj2.useCallback(prop(function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (null != stateFromStores) {
              if (closure_18) {
                if (!first3) {
                  if ("" !== trimmed) {
                    const obj5 = {};
                    if (closure_15) {
                      obj5.name = tmp34;
                    }
                    let tmp42 = closure_16;
                    if (closure_16) {
                      obj5.flags = first1;
                    }
                    let tmp44 = closure_17;
                    if (closure_17) {
                      const _Array = Array;
                      obj5.collaborator_role_ids = Array.from(first2).sort();
                      const arr = Array.from(first2);
                    }
                    let tmp46 = null == tmp64.guild_id;
                    if (tmp46) {
                      if (!tmp44) {
                        if (tmp42) {
                          tmp42 = isPublic;
                        }
                        tmp44 = tmp42;
                      }
                      tmp46 = tmp44;
                    }
                    if (tmp46) {
                      obj5.guild_id = guildId;
                    }
                    closure_10(true);
                    _undefined3(false);
                    c3 = 2;
                    v3 = 3;
                    c4 = 1;
                    const obj7 = { value: tmp4(tmp55[26]).updateProjectSettings(projectId, obj5), done: false };
                    return obj7;
                  } else {
                    const intl = tmp4(tmp55[15]).intl;
                    _undefined2(intl.string(v3(tmp55[16]).I2hgEB));
                  }
                }
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_12(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_10(false);
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (value.ok) {
            v3(tmp55[14]).hideActionSheet(_undefined3);
            c3 = 1;
            const obj2 = v3(tmp55[14]);
          } else {
            closure_128_12(true);
            c3 = 0;
            closure_128_10(false);
            c4 = 3;
            const obj = { value: undefined, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_10(false);
        }
        c3 = 0;
        closure_128_10(false);
        throw tmp55;
      } catch (tmp55) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp55;
        } else if (tmp2 === tmp57) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  }), items3);
  let obj3 = { startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  let intl = tmp2(tmp3[15]).intl;
  obj3.dismissAccessibilityLabel = intl.string(guildId(stateFromStores[16]).UYmwNU);
  let obj4 = { title: null };
  const intl2 = tmp2(tmp3[15]).intl;
  obj4.title = intl2.string(guildId(stateFromStores[16])["xhcY+n"]);
  obj3.header = closure_10(projectId(stateFromStores[18]).BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  const obj6 = { label: null, value: null, onChange: null, maxLength: 128, disabled: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj6.label = intl3.string(guildId(stateFromStores[16]).u9UpIx);
  obj6.value = str2;
  obj6.onChange = callback;
  obj6.disabled = first3;
  const items4 = [closure_10(projectId(stateFromStores[27]).TextInput, obj6), , , , , , ];
  let tmp30Result = null;
  if (null != tmp15) {
    let obj7 = { accessibilityRole: "alert", children: null };
    let obj8 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    obj7.children = tmp30(tmp2(tmp3[17]).Text, obj8);
    tmp30Result = tmp30(tmp33, obj7);
  }
  items4[1] = tmp30Result;
  let tmp30Result5 = null;
  if (result) {
    const obj9 = { hasIcons: false, children: null };
    const obj10 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl4 = tmp2(tmp3[15]).intl;
    obj10.label = intl4.string(tmp31(tmp3[16]).EHMPvA);
    const intl5 = tmp2(tmp3[15]).intl;
    obj10.subLabel = intl5.string(tmp31(tmp3[16]).bQQ4uT);
    obj10.checked = vibegrationsProjectAccessSettings.isShared;
    obj10.disabled = first3;
    obj10.onPress = function onPress(arg0) {
      return closure_19(VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE, arg0);
    };
    obj9.children = tmp30(tmp2(tmp3[22]).TableCheckboxRow, obj10);
    tmp30Result5 = tmp30(tmp2(tmp3[21]).TableRowGroup, obj9);
  }
  items4[2] = tmp30Result5;
  let tmp30Result6 = null;
  if (result) {
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl6 = tmp2(tmp3[15]).intl;
    obj12.label = intl6.string(tmp31(tmp3[16]).fvxLKl);
    const intl7 = tmp2(tmp3[15]).intl;
    obj12.subLabel = intl7.string(tmp31(tmp3[16]).Eb3Pe3);
    obj12.checked = isPublic;
    obj12.disabled = first3;
    obj12.onPress = function onPress(arg0) {
      return closure_19(VibegrationsTypes.VibegrationsProjectFlags.PUBLIC, arg0);
    };
    obj11.children = tmp30(tmp2(tmp3[22]).TableCheckboxRow, obj12);
    tmp30Result6 = tmp30(tmp2(tmp3[21]).TableRowGroup, obj11);
  }
  items4[3] = tmp30Result6;
  let tmp30Result7 = null;
  if (result1) {
    const obj13 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl8 = tmp2(tmp3[15]).intl;
    obj13.label = intl8.string(tmp31(tmp3[16]).fqvhf0);
    const intl9 = tmp2(tmp3[15]).intl;
    obj13.subLabel = intl9.string(tmp31(tmp3[16]).gWSQVl);
    let tmp38 = first3;
    if (!first3) {
      tmp38 = !isPublic;
    }
    obj13.disabled = tmp38;
    let stringResult;
    if (!isPublic) {
      const intl10 = tmp2(tmp3[15]).intl;
      stringResult = intl10.string(tmp31(tmp3[16]).FTvt33);
    }
    const obj14 = { hasIcons: false, children: null };
    obj13.accessibilityHint = stringResult;
    obj13.onPress = callback2;
    obj14.children = tmp30(tmp2(tmp3[28]).TableRow, obj13);
    tmp30Result7 = tmp30(tmp2(tmp3[21]).TableRowGroup, obj14);
  }
  items4[4] = tmp30Result7;
  let tmp30Result8 = null;
  if (tmp17) {
    const obj15 = { accessibilityRole: "alert", children: null };
    const obj16 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl11 = tmp2(tmp3[15]).intl;
    obj16.children = intl11.string(tmp31(tmp3[16]).dxH2ZV);
    obj15.children = tmp30(tmp2(tmp3[17]).Text, obj16);
    tmp30Result8 = tmp30(tmp33, obj15);
  }
  items4[5] = tmp30Result8;
  const obj17 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl12 = tmp2(tmp3[15]).intl;
  obj17.text = intl12.string(projectId(stateFromStores[15]).t["R3BPH+"]);
  obj17.loading = first3;
  let tmp41 = !tmp25;
  if (tmp25) {
    tmp41 = "" === trimmed;
  }
  if (!tmp41) {
    tmp41 = first3;
  }
  obj17.disabled = tmp41;
  obj17.onPress = callback3;
  items4[6] = closure_10(projectId(stateFromStores[29]).Button, obj17);
  obj5.children = items4;
  obj3.children = c11(closure_6, obj5);
  return closure_10(projectId(stateFromStores[23]).ActionSheet, obj3);
};
export const VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY = "VibegrationsProjectSettingsSheet";
