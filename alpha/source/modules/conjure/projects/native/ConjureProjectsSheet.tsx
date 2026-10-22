// Module ID: 14091
// Function ID: 14092
// Name: ConjureProjectsSheet
// Dependencies: [19, 17, 4995, 6759, 7305, 21, 4969, 587, 5196, 5137, 13448, 558, 576, 11696, 11796, 6889, 6973, 11694, 1128, 3830, 11780, 6869, 504, 5220, 5964, 5230, 10690, 1633, 5249, 7232, 7282, 5255, 2]

// Module 14091 (ConjureProjectsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3830 from "module_3830" /* 3830 */;
import RootNavigationRef from "RootNavigationRef" /* 5137 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5196 */;
import useMountEffectDefault from "useMountEffect" /* 5249 */;
import BottomSheetModal from "BottomSheetModal" /* 5255 */;
import TableRowGroup2 from "TableRowGroup" /* 6973 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7232 */;
import ActionSheet2 from "ActionSheet" /* 7282 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 11694 */;
import openConjureProject from "openConjureProject" /* 13448 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6759 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7305 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureCreateSheetDefault = ConjureCreateSheet;
let _require;

let metroImportDefault;
let metroRequire;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ConjureProjectsSheet_str = "ConjureProjectsSheet";
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: { paddingVertical: nativeDefault.space.PX_24 } };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ paddingVertical: nativeDefault.space.PX_24 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(entry) {
  let label;
  let serverName;
  let tmp10;
  let tmp4;
  let tmp6;
  const tmp = entry;
  let obj = entry(576);
  const cResult = obj.c(17);
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  if (cResult[0] !== entry) {
    const tmpResult = tmp(11696);
    const result = tmpResult.describeConjureProjectRow(entry);
    let num = 0;
    cResult[0] = entry;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  ({ serverName, label } = tmp4);
  if (cResult[2] !== entry.project) {
    let obj2 = { project: entry.project, size: "list" };
    const tmp9 = closure_6(fallbackGuildId(11796), obj2);
    cResult[2] = entry.project;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== entry.activity) {
    let tmp11;
    if ("building" === entry.activity) {
      tmp11 = closure_6(ActivityIndicator, {});
    }
    cResult[4] = entry.activity;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === entry.projectId) {
    let tmp15;
    if (cResult[7] === fallbackGuildId) {
      tmp15 = cResult[8];
    }
    if (cResult[9] === label) {
      if (cResult[10] === entry.name) {
        if (cResult[11] === serverName) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp10) {
              if (cResult[14] === null == fallbackGuildId) {
                let tmp16;
                if (cResult[15] === tmp15) {
                  tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
          }
        }
      }
    }
    let obj3 = { label: entry.name, subLabel: serverName, accessibilityLabel: label, icon: tmp6, trailing: tmp10, disabled: null == fallbackGuildId, onPress: tmp15 };
    const tmp18 = closure_6(tmp(6889).TableRow, obj3);
    cResult[9] = label;
    cResult[10] = entry.name;
    cResult[11] = serverName;
    cResult[12] = tmp6;
    cResult[13] = tmp10;
    cResult[14] = null == fallbackGuildId;
    cResult[15] = tmp15;
    cResult[16] = tmp18;
    tmp16 = tmp18;
  }
  const fn = function j() {
    if (null != fallbackGuildId) {
      const projectId = entry.projectId;
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideAllActionSheets();
      const obj3 = RootNavigationRef;
      const rootNavigationRef = obj3.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const state = rootNavigationRef.getState();
          let num;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              num = routes.length;
            }
          }
          if (num == null) {
            num = 0;
          }
          if (num > 1) {
            do {
              let goBackResult = rootNavigationRef.goBack();
              num = num - 1;
            } while (num > 1);
          }
        }
      }
      const obj = openConjureProject;
      obj.openConjureProject(tmp, projectId);
    }
  };
  cResult[6] = entry.projectId;
  cResult[7] = fallbackGuildId;
  cResult[8] = fn;
  tmp15 = fn;
}) : (function ProjectRow(entry) {
  let label;
  let obj3;
  let serverName;
  let tmp2Result;
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let obj = entry(11696);
  const result = obj.describeConjureProjectRow(entry);
  ({ serverName, label } = result);
  let obj2 = {
    label: entry.name,
    subLabel: serverName,
    accessibilityLabel: label,
    icon: closure_6(fallbackGuildId(11796), obj3),
    trailing: tmp2Result,
    disabled: null == fallbackGuildId,
    onPress() {
      if (null != fallbackGuildId) {
        const projectId = entry.projectId;
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideAllActionSheets();
        const obj3 = RootNavigationRef;
        const rootNavigationRef = obj3.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const state = rootNavigationRef.getState();
            let num;
            if (state != null) {
              const routes = state.routes;
              if (routes != null) {
                num = routes.length;
              }
            }
            if (num == null) {
              num = 0;
            }
            if (num > 1) {
              do {
                let goBackResult = rootNavigationRef.goBack();
                num = num - 1;
              } while (num > 1);
            }
          }
        }
        const obj = openConjureProject;
        obj.openConjureProject(tmp, projectId);
      }
    }
  };
  const TableRow = entry(6889).TableRow;
  obj3 = { project: entry.project, size: "list" };
  tmp2Result = undefined;
  if ("building" === entry.activity) {
    tmp2Result = tmp2(ActivityIndicator, {});
  }
  return closure_6(TableRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectGroup(arg0) {
  let entries;
  let fallbackGuildId;
  let title;
  let obj = fallbackGuildId(576);
  const cResult = obj.c(8);
  const tmp = fallbackGuildId;
  ({ title, entries, fallbackGuildId } = arg0);
  if (0 === entries.length) {
    return null;
  } else {
    let tmp5;
    if (cResult[0] === entries) {
      let tmp4;
      if (cResult[1] === fallbackGuildId) {
        tmp4 = cResult[2];
      }
      if (cResult[5] === tmp4) {
        let tmp7;
        if (cResult[6] === title) {
          tmp7 = cResult[7];
        }
        return tmp7;
      }
      const obj2 = { title, hasIcons: true, children: tmp4 };
      const tmp9 = closure_6(tmp(6973).TableRowGroup, obj2);
      cResult[5] = tmp4;
      cResult[6] = title;
      cResult[7] = tmp9;
      tmp7 = tmp9;
    }
    if (cResult[3] !== fallbackGuildId) {
      const fn = function l(entry) {
        const obj = { entry, fallbackGuildId };
        return metroRequire(closure_10, obj, entry.projectId);
      };
      cResult[3] = fallbackGuildId;
      cResult[4] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[4];
    }
    const mapped = entries.map(tmp5);
    cResult[0] = entries;
    cResult[1] = fallbackGuildId;
    cResult[2] = mapped;
    tmp4 = mapped;
  }
}) : (function ProjectGroup(arg0) {
  let entries;
  let fallbackGuildId;
  let require;
  ({ entries, fallbackGuildId: require } = arg0);
  let tmp2 = null;
  if (0 !== entries.length) {
    let obj = {
      title: tmp,
      hasIcons: true,
      children: entries.map((entry) => {
          const obj = { entry, fallbackGuildId: require };
          return metroRequire(closure_10, obj, entry.projectId);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp2 = closure_6(TableRowGroup, obj);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildGroup(arg0) {
  let Icon;
  let description;
  let forMeGuildId;
  let guilds;
  let intl;
  let items;
  let obj3;
  let title;
  let tmp5;
  let tmp9;
  let tmp = forMeGuildId;
  let obj = forMeGuildId(576);
  const cResult = obj.c(10);
  ({ title, description, guilds, forMeGuildId } = arg0);
  let tmp4 = null;
  if (undefined !== forMeGuildId) {
    tmp4 = forMeGuildId;
  }
  forMeGuildId = tmp4;
  if (0 === guilds.length) {
    if (null == tmp4) {
      return null;
    }
  }
  if (cResult[0] !== tmp4) {
    let tmp6 = null;
    if (null != tmp4) {
      let obj2 = {
        label: intl.string(_modDef3830.UPLaGM),
        icon: closure_6(Icon, obj3),
        arrow: true,
        onPress() {
              let obj2;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: metroRequire(ConjureCreateSheetDefault, obj2) };
              obj2 = {
                guildId: forMeGuildId,
                initialInstallScope: "user",
                onCreated(projectId, id) {
                  const obj = closure_1_1(closure_1_2[8]);
                  obj.hideAllActionSheets();
                  const obj2 = forMeGuildId(closure_1_2[9]);
                  const rootNavigationRef = obj2.getRootNavigationRef();
                  if (null != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const state = rootNavigationRef.getState();
                      let num;
                      if (state != null) {
                        const routes = state.routes;
                        if (routes != null) {
                          num = routes.length;
                        }
                      }
                      if (num == null) {
                        num = 0;
                      }
                      if (num > 1) {
                        do {
                          let goBackResult = rootNavigationRef.goBack();
                          num = num - 1;
                        } while (num > 1);
                      }
                    }
                  }
                  const obj4 = forMeGuildId(closure_1_2[10]);
                  obj4.openConjureProject(id, projectId);
                }
              };
              showActionSheet(obj);
            }
      };
      let TableRow = tmp(6889).TableRow;
      intl = tmp(1128).intl;
      obj3 = { IconComponent: tmp(11780).UserIcon };
      Icon = tmp(6889).TableRow.Icon;
      tmp6 = closure_6(TableRow, obj2);
    }
    cResult[0] = tmp4;
    let num = 1;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guilds) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function i(guild) {
        let obj2;
        let tmp;
        forMeGuildId = guild;
        let obj = {
          label: guild.name,
          icon: closure_6(tmp, obj2),
          arrow: true,
          onPress() {
            const id = guild.id;
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            const obj2 = forMeGuildId(dependencyMap[9]);
            const rootNavigationRef = obj2.getRootNavigationRef();
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const state = rootNavigationRef.getState();
                let num;
                if (state != null) {
                  const routes = state.routes;
                  if (routes != null) {
                    num = routes.length;
                  }
                }
                if (num == null) {
                  num = 0;
                }
                if (num > 1) {
                  do {
                    let goBackResult = rootNavigationRef.goBack();
                    num = num - 1;
                  } while (num > 1);
                }
              }
            }
            const obj4 = forMeGuildId(dependencyMap[10]);
            obj4.openConjureProject(id, undefined);
          }
        };
        const TableRow = forMeGuildId(closure_2[15]).TableRow;
        obj2 = { guild, size: forMeGuildId(closure_2[21]).GuildIconSizes.SMALL_32 };
        tmp = closure_1(closure_2[21]);
        return closure_6(TableRow, obj, guild.id);
      };
      cResult[4] = fn;
      tmp11 = fn;
    } else {
      tmp11 = cResult[4];
    }
    const mapped = guilds.map(tmp11);
    cResult[2] = guilds;
    cResult[3] = mapped;
    tmp9 = mapped;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[5] === description) {
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp9) {
        let tmp13;
        if (cResult[8] === title) {
          tmp13 = cResult[9];
        }
        return tmp13;
      }
    }
  }
  let obj4 = { title, description, hasIcons: true, children: items };
  items = [tmp5, tmp9];
  const tmp14 = closure_7(tmp(6973).TableRowGroup, obj4);
  cResult[5] = description;
  cResult[6] = tmp5;
  cResult[7] = tmp9;
  cResult[8] = title;
  cResult[9] = tmp14;
  tmp13 = tmp14;
}) : (function GuildGroup(arg0) {
  let Icon;
  let description;
  let forMeGuildId;
  let guilds;
  let intl;
  let items;
  let obj3;
  let title;
  let tmp;
  ({ guilds, forMeGuildId } = arg0);
  ({ title, description } = arg0);
  if (forMeGuildId === undefined) {
    forMeGuildId = null;
  }
  if (0 !== guilds.length) {
    let obj = { title, description, hasIcons: true, children: items };
    let tmp5 = null;
    const TableRowGroup = forMeGuildId(6973).TableRowGroup;
    const tmp2 = closure_7;
    if (null != forMeGuildId) {
      let obj2 = {
        label: intl.string(_modDef3830.UPLaGM),
        icon: closure_6(Icon, obj3),
        arrow: true,
        onPress() {
              let obj2;
              const tmp = ActionSheetActionCreators;
              let obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: metroRequire(ConjureCreateSheetDefault, obj2) };
              const showActionSheet = tmp.showActionSheet;
              obj2 = {
                guildId: forMeGuildId,
                initialInstallScope: "user",
                onCreated(projectId, id) {
                  const obj = closure_1_1(closure_1_2[8]);
                  obj.hideAllActionSheets();
                  const obj2 = forMeGuildId(closure_1_2[9]);
                  const rootNavigationRef = obj2.getRootNavigationRef();
                  if (null != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const state = rootNavigationRef.getState();
                      let num;
                      if (state != null) {
                        const routes = state.routes;
                        if (routes != null) {
                          num = routes.length;
                        }
                      }
                      if (num == null) {
                        num = 0;
                      }
                      if (num > 1) {
                        do {
                          let goBackResult = rootNavigationRef.goBack();
                          num = num - 1;
                        } while (num > 1);
                      }
                    }
                  }
                  const obj4 = forMeGuildId(closure_1_2[10]);
                  obj4.openConjureProject(id, projectId);
                }
              };
              showActionSheet(obj);
            }
      };
      let TableRow = tmp3(6889).TableRow;
      intl = tmp3(1128).intl;
      obj3 = { IconComponent: forMeGuildId(11780).UserIcon };
      Icon = tmp3(6889).TableRow.Icon;
      tmp5 = closure_6(TableRow, obj2);
    }
    items = [
      tmp5,
      guilds.map((guild) => {
          let obj2;
          let tmp;
          forMeGuildId = guild;
          let obj = {
            label: guild.name,
            icon: closure_6(tmp, obj2),
            arrow: true,
            onPress() {
              const id = guild.id;
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = forMeGuildId(dependencyMap[9]);
              const rootNavigationRef = obj2.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const state = rootNavigationRef.getState();
                  let num;
                  if (state != null) {
                    const routes = state.routes;
                    if (routes != null) {
                      num = routes.length;
                    }
                  }
                  if (num == null) {
                    num = 0;
                  }
                  if (num > 1) {
                    do {
                      let goBackResult = rootNavigationRef.goBack();
                      num = num - 1;
                    } while (num > 1);
                  }
                }
              }
              const obj4 = forMeGuildId(dependencyMap[10]);
              obj4.openConjureProject(id, undefined);
            }
          };
          const TableRow = forMeGuildId(closure_2[15]).TableRow;
          obj2 = { guild, size: forMeGuildId(closure_2[21]).GuildIconSizes.SMALL_32 };
          tmp = closure_1(closure_2[21]);
          return closure_6(TableRow, obj, guild.id);
        })
    ];
    tmp = tmp2(TableRowGroup, obj);
  } else {
    tmp = null;
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function SheetBody() {
  let intl;
  let intl4;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let lastSelectedGuildId;
  let projectsFetchState;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let obj = stateFromStores1(576);
  const cResult = obj.c(47);
  const tmp4 = closure_9(0);
  const obj2 = stateFromStores1(11696);
  const conjureProjects = obj2.useConjureProjects(ConjureProjectsSheet_str);
  const obj3 = stateFromStores1(11696);
  const conjureEligibleGuilds = obj3.useConjureEligibleGuilds(ConjureProjectsSheet_str);
  const obj4 = stateFromStores1(11696);
  const conjureForMeGuildId = obj4.useConjureForMeGuildId(ConjureProjectsSheet_str);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    const fn = function h() {
      return projectsFetchState.getProjectsFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = stateFromStores1(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedGuildStore];
    const fn2 = function y() {
      return lastSelectedGuildId.getLastSelectedGuildId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = stateFromStores1(504);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
  if (0 === conjureProjects.length) {
    let tmp84;
    let tmp88;
    let tmp92;
    if (null != stateFromStores) {
      let tmp68;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          let tmp72;
          let tmp76;
          let tmp80;
          const _Symbol5 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3830.DJAPMO) };
            const Text2 = tmp(5220).Text;
            intl4 = tmp(1128).intl;
            const tmp75 = closure_6(Text2, obj5);
            cResult[8] = tmp75;
            tmp72 = tmp75;
          } else {
            tmp72 = cResult[8];
          }
          const _Symbol6 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = {
              variant: "secondary",
              size: "sm",
              text: intl5.string(_modDef3830["WFJ/vb"]),
              onPress() {
                          const obj = stateFromStores1(dependencyMap[26]);
                          return obj.listProjects();
                        }
            };
            const Button = tmp(5230).Button;
            intl5 = tmp(1128).intl;
            const tmp79 = closure_6(Button, obj6);
            cResult[9] = tmp79;
            tmp76 = tmp79;
          } else {
            tmp76 = cResult[9];
          }
          if (cResult[10] !== tmp4.state) {
            const obj8 = { style: tmp4.state, align: "center", spacing: nativeDefault.space.PX_12, children: items2 };
            const Stack4 = tmp(5964).Stack;
            items2 = [tmp72, tmp76];
            const tmp83 = closure_7(Stack4, obj8);
            cResult[10] = tmp4.state;
            cResult[11] = tmp83;
            tmp80 = tmp83;
          } else {
            tmp80 = cResult[11];
          }
          tmp68 = tmp80;
        } else {
          let tmp51;
          let tmp55;
          let tmp59;
          const _Symbol9 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3830.snY8uu) };
            const Text = tmp(5220).Text;
            intl = tmp(1128).intl;
            const tmp54 = closure_6(Text, obj10);
            cResult[12] = tmp54;
            tmp51 = tmp54;
          } else {
            tmp51 = cResult[12];
          }
          if (cResult[13] !== conjureEligibleGuilds.length) {
            let stringResult;
            if (0 === conjureEligibleGuilds.length) {
              const intl3 = tmp(1128).intl;
              stringResult = intl3.string(_modDef3830.f5o5pk);
            } else {
              const intl2 = tmp(1128).intl;
              const obj12 = { count: conjureEligibleGuilds.length };
              stringResult = intl2.formatToPlainString(_modDef3830.NiXcSi, obj12);
            }
            cResult[13] = conjureEligibleGuilds.length;
            cResult[14] = stringResult;
            tmp55 = stringResult;
          } else {
            tmp55 = cResult[14];
          }
          if (cResult[15] !== tmp55) {
            const obj13 = { spacing: nativeDefault.space.PX_4, children: items3 };
            const Stack2 = tmp(5964).Stack;
            items3 = [tmp51, ];
            const obj14 = { variant: "text-sm/normal", color: "text-muted", children: tmp55 };
            items3[1] = closure_6(stateFromStores1(5220).Text, obj14);
            const tmp63 = closure_7(Stack2, obj13);
            cResult[15] = tmp55;
            cResult[16] = tmp63;
            tmp59 = tmp63;
          } else {
            tmp59 = cResult[16];
          }
          if (cResult[17] === conjureEligibleGuilds) {
            let tmp64;
            if (cResult[18] === conjureForMeGuildId) {
              tmp64 = cResult[19];
            }
            if (cResult[20] === tmp59) {
              if (cResult[21] === tmp64) {
                tmp68 = cResult[22];
              }
            }
            const obj15 = { spacing: nativeDefault.space.PX_16, children: items4 };
            const Stack3 = tmp(5964).Stack;
            items4 = [tmp59, tmp64];
            const tmp71 = closure_7(Stack3, obj15);
            cResult[20] = tmp59;
            cResult[21] = tmp64;
            cResult[22] = tmp71;
            tmp68 = tmp71;
          }
          const obj16 = { guilds: conjureEligibleGuilds, forMeGuildId: conjureForMeGuildId };
          const tmp67 = closure_6(closure_12, obj16);
          cResult[17] = conjureEligibleGuilds;
          cResult[18] = conjureForMeGuildId;
          cResult[19] = tmp67;
          tmp64 = tmp67;
        }
      }
      return tmp68;
    }
    const _Symbol7 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp87 = closure_6(ActivityIndicator, {});
      cResult[4] = tmp87;
      tmp84 = tmp87;
    } else {
      tmp84 = cResult[4];
    }
    const _Symbol8 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(_modDef3830["XE+JXX"]) };
      const Text3 = tmp(5220).Text;
      intl6 = tmp(1128).intl;
      const tmp91 = closure_6(Text3, obj17);
      cResult[5] = tmp91;
      tmp88 = tmp91;
    } else {
      tmp88 = cResult[5];
    }
    if (cResult[6] !== tmp4.state) {
      const obj18 = { style: tmp4.state, align: "center", spacing: nativeDefault.space.PX_8, children: items5 };
      const Stack5 = tmp(5964).Stack;
      items5 = [tmp84, tmp88];
      const tmp95 = closure_7(Stack5, obj18);
      cResult[6] = tmp4.state;
      cResult[7] = tmp95;
      tmp92 = tmp95;
    } else {
      tmp92 = cResult[7];
    }
    tmp68 = tmp92;
  } else {
    if (cResult[23] === conjureEligibleGuilds) {
      let tmp14;
      let tmp26;
      if (cResult[24] === stateFromStores1) {
        tmp14 = cResult[25];
      }
      if (cResult[26] !== conjureProjects) {
        let tmp21;
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(activity) {
              return "idle" !== activity.activity;
            }
          }
          cResult[28] = B;
          tmp21 = B;
        } else {
          class B {
            constructor(activity) {
              return "idle" !== activity.activity;
            }
          }
        }
        const found = conjureProjects.filter(tmp21);
        cResult[26] = conjureProjects;
        cResult[27] = found;
      } else {
        class B {
          constructor(activity) {
            return "idle" !== activity.activity;
          }
        }
      }
      if (cResult[29] !== conjureProjects) {
        let tmp24;
        class B {
          constructor(activity) {
            return "idle" !== activity.activity;
          }
        }
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          cResult[31] = U;
          tmp24 = U;
        } else {
          class U {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
        }
        const found1 = conjureProjects.filter(tmp24);
        cResult[29] = conjureProjects;
        cResult[30] = found1;
      } else {
        class U {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
        const stringResult1 = obj7.string(_modDef3830.DnsyEc);
        cResult[32] = stringResult1;
        tmp26 = stringResult1;
      } else {
        class U {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
      }
      if (cResult[33] === tmp20) {
        let tmp33;
        class U {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          const stringResult2 = obj9.string(_modDef3830.p8lFfK);
          cResult[36] = stringResult2;
          tmp33 = stringResult2;
        } else {
          class U {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
        }
        if (cResult[37] === tmp14) {
          let tmp40;
          class U {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
            const stringResult3 = obj11.string(_modDef3830.sFiGNz);
            cResult[40] = stringResult3;
            tmp40 = stringResult3;
          } else {
            class U {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          if (cResult[41] !== conjureEligibleGuilds) {
            class U {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
            const obj19 = { title: tmp40, guilds: conjureEligibleGuilds };
            cResult[41] = conjureEligibleGuilds;
            cResult[42] = closure_6(closure_12, obj19);
            const tmp45 = closure_6(closure_12, obj19);
          } else {
            class U {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          if (cResult[43] === tmp36) {
            class U {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          const obj20 = { spacing: nativeDefault.space.PX_24, children: items6 };
          const Stack = tmp(5964).Stack;
          items6 = [tmp29, tmp36, tmp43];
          cResult[43] = tmp36;
          cResult[44] = tmp43;
          cResult[45] = tmp29;
          cResult[46] = closure_7(Stack, obj20);
          const tmp49 = closure_7(Stack, obj20);
        }
        const obj21 = { title: tmp33, entries: tmp23, fallbackGuildId: tmp14 };
        cResult[37] = tmp14;
        cResult[38] = tmp23;
        cResult[39] = closure_6(closure_11, obj21);
        const tmp39 = closure_6(closure_11, obj21);
      }
      const obj22 = { title: tmp26, entries: tmp20, fallbackGuildId: tmp14 };
      cResult[33] = tmp20;
      cResult[34] = tmp14;
      cResult[35] = closure_6(closure_11, obj22);
      const tmp32 = closure_6(closure_11, obj22);
    }
    const found2 = conjureEligibleGuilds.find((id) => id.id === stateFromStores1);
    let tmp17;
    if (found2 != null) {
      class U {
        constructor(activity) {
          return "idle" === activity.activity;
        }
      }
    }
    if (tmp17 == null) {
      class U {
        constructor(activity) {
          return "idle" === activity.activity;
        }
      }
      if (tmp18 != null) {
        class U {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
      }
      tmp17 = tmp19;
    }
    if (tmp17 == null) {
      class U {
        constructor(activity) {
          return "idle" === activity.activity;
        }
      }
    }
    cResult[23] = conjureEligibleGuilds;
    cResult[24] = stateFromStores1;
    cResult[25] = tmp17;
    tmp14 = tmp17;
  }
}) : (function SheetBody() {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let lastSelectedGuildId;
  let projectsFetchState;
  const tmp = closure_9(0);
  let obj = require("useConjureProjects");
  const conjureProjects = obj.useConjureProjects(ConjureProjectsSheet_str);
  const obj2 = require("useConjureProjects");
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds(ConjureProjectsSheet_str);
  const obj3 = require("useConjureProjects");
  const conjureForMeGuildId = obj3.useConjureForMeGuildId(ConjureProjectsSheet_str);
  const items = [ConjureProjectStore];
  const obj4 = require("get initialized");
  const stateFromStores = obj4.useStateFromStores(items, () => projectsFetchState.getProjectsFetchState());
  const items1 = [SelectedGuildStore];
  const obj5 = require("get initialized");
  _require = obj5.useStateFromStores(items1, () => lastSelectedGuildId.getLastSelectedGuildId());
  if (0 === conjureProjects.length) {
    if (null != stateFromStores) {
      let tmp29Result;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj6 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_12, children: items2 };
          const Stack2 = tmp2(5964).Stack;
          const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(_modDef3830.DJAPMO) };
          const Text = tmp2(5220).Text;
          intl6 = tmp2(1128).intl;
          items2 = [closure_6(Text, obj7), ];
          const obj8 = {
            variant: "secondary",
            size: "sm",
            text: intl7.string(_modDef3830["WFJ/vb"]),
            onPress() {
                      const obj = closure_0(dependencyMap[26]);
                      return obj.listProjects();
                    }
          };
          const Button = tmp2(5230).Button;
          intl7 = tmp2(1128).intl;
          items2[1] = closure_6(Button, obj8);
          tmp29Result = closure_7(Stack2, obj6);
        } else {
          let stringResult;
          const obj9 = { spacing: nativeDefault.space.PX_16, children: items4 };
          const Stack4 = tmp2(5964).Stack;
          const obj10 = { spacing: nativeDefault.space.PX_4, children: items3 };
          const Stack5 = tmp2(5964).Stack;
          const obj11 = { variant: "text-md/semibold", color: "text-strong", children: intl9.string(_modDef3830.snY8uu) };
          const Text3 = tmp2(5220).Text;
          intl9 = tmp2(1128).intl;
          items3 = [closure_6(Text3, obj11), ];
          const Text4 = tmp2(5220).Text;
          if (0 === conjureEligibleGuilds.length) {
            const intl5 = tmp2(1128).intl;
            stringResult = intl5.string(tmp30(3830).f5o5pk);
          } else {
            const intl4 = tmp2(1128).intl;
            const obj12 = { count: conjureEligibleGuilds.length };
            stringResult = intl4.formatToPlainString(tmp30(3830).NiXcSi, obj12);
          }
          const obj13 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
          items3[1] = closure_6(Text4, obj13);
          items4 = [closure_7(Stack5, obj10), ];
          const obj14 = { guilds: conjureEligibleGuilds, forMeGuildId: conjureForMeGuildId };
          items4[1] = closure_6(closure_12, obj14);
          tmp29Result = tmp29(Stack4, obj9);
        }
      }
      return tmp29Result;
    }
    const obj15 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: items5 };
    const Stack3 = tmp2(5964).Stack;
    items5 = [closure_6(ActivityIndicator, {}), ];
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: intl8.string(_modDef3830["XE+JXX"]) };
    const Text2 = tmp2(5220).Text;
    intl8 = tmp2(1128).intl;
    items5[1] = closure_6(Text2, obj16);
    tmp29Result = closure_7(Stack3, obj15);
  } else {
    const found = conjureEligibleGuilds.find((id) => id.id === closure_0);
    let id;
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      const first = conjureEligibleGuilds[0];
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      id = id1;
    }
    if (id == null) {
      id = null;
    }
    const found1 = conjureProjects.filter((activity) => "idle" !== activity.activity);
    const found2 = conjureProjects.filter((activity) => "idle" === activity.activity);
    const obj17 = { spacing: nativeDefault.space.PX_24, children: items6 };
    const Stack = tmp2(5964).Stack;
    const obj18 = { title: intl.string(_modDef3830.DnsyEc), entries: found1, fallbackGuildId: id };
    intl = tmp2(1128).intl;
    items6 = [closure_6(closure_11, obj18), , ];
    const obj19 = { title: intl2.string(_modDef3830.p8lFfK), entries: found2, fallbackGuildId: id };
    intl2 = tmp2(1128).intl;
    items6[1] = closure_6(closure_11, obj19);
    const obj20 = { title: intl3.string(_modDef3830.sFiGNz), guilds: conjureEligibleGuilds };
    intl3 = tmp2(1128).intl;
    items6[2] = closure_6(closure_12, obj20);
    return closure_7(Stack, obj17);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectsSheet() {
  let first;
  let intl;
  let obj5;
  let tmp11;
  let tmp12;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(8);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp5 = closure_9(bottom);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = require("ConjureActionCreators");
      obj.listProjects();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef3830.uk6jhJ) };
    const BottomSheetTitleHeader = tmp(7232).BottomSheetTitleHeader;
    intl = tmp(1128).intl;
    const tmp10 = metroRequire(BottomSheetTitleHeader, obj2);
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== bottom) {
    const obj3 = { bottom };
    cResult[2] = bottom;
    cResult[3] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = metroRequire(closure_13, {});
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp5.scrollContent) {
    let tmp16;
    if (cResult[6] === tmp11) {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj4 = { scrollable: true, header: tmp8, children: metroRequire(BottomSheetModal.BottomSheetScrollView, obj5) };
  const ActionSheet = tmp(7282).ActionSheet;
  obj5 = { contentContainerStyle: tmp5.scrollContent, scrollIndicatorInsets: tmp11, children: tmp12 };
  const tmp17 = metroRequire(ActionSheet, obj4);
  cResult[5] = tmp5.scrollContent;
  cResult[6] = tmp11;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function ConjureProjectsSheet() {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let intl;
  let obj2;
  let obj3;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = closure_9(bottom);
  useMountEffectDefault(() => {
    const obj = require("ConjureActionCreators");
    obj.listProjects();
  });
  let obj = { scrollable: true, header: metroRequire(BottomSheetTitleHeader, obj2), children: metroRequire(BottomSheetScrollView, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3830.uk6jhJ) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl10.intl;
  obj3 = { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, children: metroRequire(closure_13, {}) };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  return metroRequire(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default tmp5;
