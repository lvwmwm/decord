// Module ID: 17265
// Function ID: 17266
// Name: ConjureProjectsSheet
// Dependencies: [19, 17, 4899, 11251, 6908, 21, 5090, 587, 5054, 4937, 12360, 558, 576, 6842, 17266, 8587, 6184, 6267, 6161, 504, 5086, 1126, 3827, 5373, 5375, 12364, 1630, 5392, 6828, 6885, 6298, 2]

// Module 17265 (ConjureProjectsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef3827 from "module_3827" /* 3827 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import BottomSheetModal from "BottomSheetModal" /* 6298 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6828 */;
import ActionSheet2 from "ActionSheet" /* 6885 */;
import openConjureProject from "openConjureProject" /* 12360 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6908 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const VibegrationsProjectsSheet = "VibegrationsProjectsSheet";
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
  let tmp4;
  const tmp = entry;
  let obj = entry(576);
  const cResult = obj.c(18);
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let application_id = entry.project.preview_application_id;
  if (application_id == null) {
    application_id = entry.project.application_id;
  }
  const tmpResult = tmp(6842);
  const data = tmpResult.useApplication(application_id).data;
  if (cResult[0] !== entry) {
    const tmpResult2 = tmp(17266);
    const result = tmpResult2.describeConjureProjectRow(entry);
    let num = 0;
    cResult[0] = entry;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  ({ serverName, label } = tmp4);
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  if (cResult[2] === application_id) {
    let tmp7;
    let tmp9;
    if (cResult[3] === icon) {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== entry.activity) {
      let tmp10;
      if ("building" === entry.activity) {
        tmp10 = closure_6(ActivityIndicator, {});
      }
      cResult[5] = entry.activity;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === entry.projectId) {
      let tmp14;
      if (cResult[8] === fallbackGuildId) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === label) {
        if (cResult[11] === entry.name) {
          if (cResult[12] === serverName) {
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === null == fallbackGuildId) {
                  let tmp15;
                  if (cResult[16] === tmp14) {
                    tmp15 = cResult[17];
                  }
                  return tmp15;
                }
              }
            }
          }
        }
      }
      let obj2 = { label: entry.name, subLabel: serverName, accessibilityLabel: label, icon: tmp7, trailing: tmp9, disabled: null == fallbackGuildId, onPress: tmp14 };
      const tmp17 = closure_6(tmp(6184).TableRow, obj2);
      cResult[10] = label;
      cResult[11] = entry.name;
      cResult[12] = serverName;
      cResult[13] = tmp7;
      cResult[14] = tmp9;
      cResult[15] = null == fallbackGuildId;
      cResult[16] = tmp14;
      cResult[17] = tmp17;
      tmp15 = tmp17;
    }
    const fn = function y() {
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
    cResult[7] = entry.projectId;
    cResult[8] = fallbackGuildId;
    cResult[9] = fn;
    tmp14 = fn;
  }
  let obj3 = { application: { id: application_id, icon } };
  const tmp8 = closure_6(fallbackGuildId(8587), obj3);
  cResult[2] = application_id;
  cResult[3] = icon;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function ProjectRow(entry) {
  let icon;
  let label;
  let obj4;
  let serverName;
  let tmp2Result;
  let tmp3;
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let application_id = entry.project.preview_application_id;
  if (application_id == null) {
    application_id = entry.project.application_id;
  }
  let obj = entry(6842);
  const data = obj.useApplication(application_id).data;
  let obj2 = entry(17266);
  const result = obj2.describeConjureProjectRow(entry);
  ({ serverName, label } = result);
  let obj3 = {
    label: entry.name,
    subLabel: serverName,
    accessibilityLabel: label,
    icon: closure_6(tmp3, { application: obj4 }),
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
  const TableRow = entry(6184).TableRow;
  obj4 = { id: application_id, icon };
  icon = undefined;
  tmp3 = fallbackGuildId(8587);
  if (data != null) {
    icon = data.icon;
  }
  tmp2Result = undefined;
  if ("building" === entry.activity) {
    tmp2Result = tmp2(ActivityIndicator, {});
  }
  return closure_6(TableRow, obj3);
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
      const tmp9 = closure_6(tmp(6267).TableRowGroup, obj2);
      cResult[5] = tmp4;
      cResult[6] = title;
      cResult[7] = tmp9;
      tmp7 = tmp9;
    }
    if (cResult[3] !== fallbackGuildId) {
      const fn = function n(entry) {
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
  let description;
  let guilds;
  let title;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(7);
  ({ title, description, guilds } = arg0);
  if (0 === guilds.length) {
    return null;
  } else {
    let tmp4;
    if (cResult[0] !== guilds) {
      let tmp6;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(guild) {
          let obj2;
          let tmp;
          let obj = {
            label: guild.name,
            icon: closure_6(tmp, obj2),
            arrow: true,
            onPress() {
              const id = guild.id;
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = require("RootNavigationRef");
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
              const obj4 = require("openConjureProject");
              obj4.openConjureProject(id, undefined);
            }
          };
          const TableRow = guild(closure_2[16]).TableRow;
          obj2 = { guild, size: guild(closure_2[18]).GuildIconSizes.SMALL_32 };
          tmp = closure_1(closure_2[18]);
          return closure_6(TableRow, obj, guild.id);
        };
        let num = 2;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const mapped = guilds.map(tmp6);
      cResult[0] = guilds;
      cResult[1] = mapped;
      tmp4 = mapped;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[3] === description) {
      if (cResult[4] === tmp4) {
        let tmp8;
        if (cResult[5] === title) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    let obj2 = { title, description, hasIcons: true, children: tmp4 };
    const tmp10 = metroRequire(TableRowGroup2.TableRowGroup, obj2);
    cResult[3] = description;
    cResult[4] = tmp4;
    cResult[5] = title;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
}) : (function GuildGroup(guilds) {
  let tmp;
  guilds = guilds.guilds;
  let tmp3 = null;
  if (0 !== guilds.length) {
    let obj = {
      title: tmp,
      description: tmp2,
      hasIcons: true,
      children: guilds.map((guild) => {
          let obj2;
          let tmp;
          let obj = {
            label: guild.name,
            icon: closure_6(tmp, obj2),
            arrow: true,
            onPress() {
              const id = guild.id;
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = require("RootNavigationRef");
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
              const obj4 = require("openConjureProject");
              obj4.openConjureProject(id, undefined);
            }
          };
          const TableRow = guild(closure_2[16]).TableRow;
          obj2 = { guild, size: guild(closure_2[18]).GuildIconSizes.SMALL_32 };
          tmp = closure_1(closure_2[18]);
          return closure_6(TableRow, obj, guild.id);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp3 = metroRequire(TableRowGroup, obj);
  }
  return tmp3;
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
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = stateFromStores1(576);
  const cResult = obj.c(46);
  const tmp4 = closure_9(0);
  const obj2 = stateFromStores1(17266);
  const conjureProjects = obj2.useConjureProjects(VibegrationsProjectsSheet);
  const obj3 = stateFromStores1(17266);
  const conjureEligibleGuilds = obj3.useConjureEligibleGuilds(VibegrationsProjectsSheet);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    const fn = function p() {
      return projectsFetchState.getProjectsFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores1(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedGuildStore];
    const fn2 = function y() {
      return lastSelectedGuildId.getLastSelectedGuildId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = stateFromStores1(504);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (0 === conjureProjects.length) {
    let tmp83;
    let tmp87;
    let tmp91;
    if (null != stateFromStores) {
      let tmp67;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          let tmp71;
          let tmp75;
          let tmp79;
          const _Symbol6 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3827.DJAPMO) };
            const Text2 = tmp(5086).Text;
            intl4 = tmp(1126).intl;
            const tmp74 = closure_6(Text2, obj4);
            cResult[8] = tmp74;
            tmp71 = tmp74;
          } else {
            tmp71 = cResult[8];
          }
          const _Symbol7 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = {
              variant: "secondary",
              size: "sm",
              text: intl5.string(_modDef3827["WFJ/vb"]),
              onPress() {
                          const obj = stateFromStores1(dependencyMap[25]);
                          return obj.listProjects();
                        }
            };
            const Button = tmp(5375).Button;
            intl5 = tmp(1126).intl;
            const tmp78 = closure_6(Button, obj5);
            cResult[9] = tmp78;
            tmp75 = tmp78;
          } else {
            tmp75 = cResult[9];
          }
          if (cResult[10] !== tmp4.state) {
            const obj7 = { style: tmp4.state, align: "center", spacing: nativeDefault.space.PX_12, children: items2 };
            const Stack4 = tmp(5373).Stack;
            items2 = [tmp71, tmp75];
            const tmp82 = closure_7(Stack4, obj7);
            cResult[10] = tmp4.state;
            cResult[11] = tmp82;
            tmp79 = tmp82;
          } else {
            tmp79 = cResult[11];
          }
          tmp67 = tmp79;
        } else {
          let tmp50;
          let tmp54;
          let tmp58;
          let tmp63;
          const _Symbol10 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { variant: "text-md/semibold", color: "text-strong", children: intl.string(_modDef3827.snY8uu) };
            const Text = tmp(5086).Text;
            intl = tmp(1126).intl;
            const tmp53 = closure_6(Text, obj9);
            cResult[12] = tmp53;
            tmp50 = tmp53;
          } else {
            tmp50 = cResult[12];
          }
          if (cResult[13] !== conjureEligibleGuilds.length) {
            let stringResult;
            if (0 === conjureEligibleGuilds.length) {
              const intl3 = tmp(1126).intl;
              stringResult = intl3.string(_modDef3827.f5o5pk);
            } else {
              const intl2 = tmp(1126).intl;
              const obj11 = { count: conjureEligibleGuilds.length };
              stringResult = intl2.formatToPlainString(_modDef3827.NiXcSi, obj11);
            }
            cResult[13] = conjureEligibleGuilds.length;
            cResult[14] = stringResult;
            tmp54 = stringResult;
          } else {
            tmp54 = cResult[14];
          }
          if (cResult[15] !== tmp54) {
            const obj12 = { spacing: nativeDefault.space.PX_4, children: items3 };
            const Stack2 = tmp(5373).Stack;
            items3 = [tmp50, ];
            const obj13 = { variant: "text-sm/normal", color: "text-muted", children: tmp54 };
            items3[1] = closure_6(stateFromStores1(5086).Text, obj13);
            const tmp62 = closure_7(Stack2, obj12);
            cResult[15] = tmp54;
            cResult[16] = tmp62;
            tmp58 = tmp62;
          } else {
            tmp58 = cResult[16];
          }
          if (cResult[17] !== conjureEligibleGuilds) {
            const obj14 = { guilds: conjureEligibleGuilds };
            const tmp66 = closure_6(closure_12, obj14);
            cResult[17] = conjureEligibleGuilds;
            cResult[18] = tmp66;
            tmp63 = tmp66;
          } else {
            tmp63 = cResult[18];
          }
          if (cResult[19] === tmp58) {
            if (cResult[20] === tmp63) {
              tmp67 = cResult[21];
            }
          }
          const obj15 = { spacing: nativeDefault.space.PX_16, children: items4 };
          const Stack3 = tmp(5373).Stack;
          items4 = [tmp58, tmp63];
          const tmp70 = closure_7(Stack3, obj15);
          cResult[19] = tmp58;
          cResult[20] = tmp63;
          cResult[21] = tmp70;
          tmp67 = tmp70;
        }
      }
      return tmp67;
    }
    const _Symbol8 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp86 = closure_6(ActivityIndicator, {});
      cResult[4] = tmp86;
      tmp83 = tmp86;
    } else {
      tmp83 = cResult[4];
    }
    const _Symbol9 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj16 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(_modDef3827["XE+JXX"]) };
      const Text3 = tmp(5086).Text;
      intl6 = tmp(1126).intl;
      const tmp90 = closure_6(Text3, obj16);
      cResult[5] = tmp90;
      tmp87 = tmp90;
    } else {
      tmp87 = cResult[5];
    }
    if (cResult[6] !== tmp4.state) {
      const obj17 = { style: tmp4.state, align: "center", spacing: nativeDefault.space.PX_8, children: items5 };
      const Stack5 = tmp(5373).Stack;
      items5 = [tmp83, tmp87];
      const tmp94 = closure_7(Stack5, obj17);
      cResult[6] = tmp4.state;
      cResult[7] = tmp94;
      tmp91 = tmp94;
    } else {
      tmp91 = cResult[7];
    }
    tmp67 = tmp91;
  } else {
    if (cResult[22] === conjureEligibleGuilds) {
      let tmp13;
      let tmp19;
      let tmp25;
      if (cResult[23] === stateFromStores1) {
        tmp13 = cResult[24];
      }
      if (cResult[25] !== conjureProjects) {
        let tmp20;
        const _Symbol = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function z(activity) {
            return "idle" !== activity.activity;
          };
          cResult[27] = fn3;
          tmp20 = fn3;
        } else {
          tmp20 = cResult[27];
        }
        const found = conjureProjects.filter(tmp20);
        cResult[25] = conjureProjects;
        cResult[26] = found;
        tmp19 = found;
      } else {
        tmp19 = cResult[26];
      }
      if (cResult[28] !== conjureProjects) {
        let tmp23;
        const _Symbol2 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          cResult[30] = M;
          tmp23 = M;
        } else {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
        }
        const found1 = conjureProjects.filter(tmp23);
        cResult[28] = conjureProjects;
        cResult[29] = found1;
      } else {
        class M {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
        const stringResult1 = obj6.string(_modDef3827.DnsyEc);
        cResult[31] = stringResult1;
        tmp25 = stringResult1;
      } else {
        class M {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
      }
      if (cResult[32] === tmp19) {
        let tmp32;
        class M {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          const stringResult2 = obj8.string(_modDef3827.p8lFfK);
          cResult[35] = stringResult2;
          tmp32 = stringResult2;
        } else {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
        }
        if (cResult[36] === tmp13) {
          let tmp39;
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
            const stringResult3 = obj10.string(_modDef3827.sFiGNz);
            cResult[39] = stringResult3;
            tmp39 = stringResult3;
          } else {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          if (cResult[40] !== conjureEligibleGuilds) {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
            const obj18 = { title: tmp39, guilds: conjureEligibleGuilds };
            cResult[40] = conjureEligibleGuilds;
            cResult[41] = closure_6(closure_12, obj18);
            const tmp44 = closure_6(closure_12, obj18);
          } else {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          if (cResult[42] === tmp35) {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          const obj19 = { spacing: nativeDefault.space.PX_24, children: items6 };
          const Stack = tmp(5373).Stack;
          items6 = [tmp28, tmp35, tmp42];
          cResult[42] = tmp35;
          cResult[43] = tmp42;
          cResult[44] = tmp28;
          cResult[45] = closure_7(Stack, obj19);
          const tmp48 = closure_7(Stack, obj19);
        }
        const obj20 = { title: tmp32, entries: tmp22, fallbackGuildId: tmp13 };
        cResult[36] = tmp13;
        cResult[37] = tmp22;
        cResult[38] = closure_6(closure_11, obj20);
        const tmp38 = closure_6(closure_11, obj20);
      }
      const obj21 = { title: tmp25, entries: tmp19, fallbackGuildId: tmp13 };
      cResult[32] = tmp19;
      cResult[33] = tmp13;
      cResult[34] = closure_6(closure_11, obj21);
      const tmp31 = closure_6(closure_11, obj21);
    }
    const found2 = conjureEligibleGuilds.find((id) => id.id === stateFromStores1);
    let tmp16;
    if (found2 != null) {
      class M {
        constructor(activity) {
          return "idle" === activity.activity;
        }
      }
    }
    if (tmp16 == null) {
      class M {
        constructor(activity) {
          return "idle" === activity.activity;
        }
      }
      if (tmp17 != null) {
        class M {
          constructor(activity) {
            return "idle" === activity.activity;
          }
        }
      }
      tmp16 = tmp18;
    }
    if (tmp16 == null) {
      class M {
        constructor(activity) {
          return "idle" === activity.activity;
        }
      }
    }
    cResult[22] = conjureEligibleGuilds;
    cResult[23] = stateFromStores1;
    cResult[24] = tmp16;
    tmp13 = tmp16;
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
  const conjureProjects = obj.useConjureProjects(VibegrationsProjectsSheet);
  const obj2 = require("useConjureProjects");
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds(VibegrationsProjectsSheet);
  const items = [ConjureProjectStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => projectsFetchState.getProjectsFetchState());
  const items1 = [SelectedGuildStore];
  const obj4 = require("get initialized");
  _require = obj4.useStateFromStores(items1, () => lastSelectedGuildId.getLastSelectedGuildId());
  if (0 === conjureProjects.length) {
    if (null != stateFromStores) {
      let tmp28Result;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj5 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_12, children: items2 };
          const Stack2 = tmp2(5373).Stack;
          const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(_modDef3827.DJAPMO) };
          const Text = tmp2(5086).Text;
          intl6 = tmp2(1126).intl;
          items2 = [closure_6(Text, obj6), ];
          const obj7 = {
            variant: "secondary",
            size: "sm",
            text: intl7.string(_modDef3827["WFJ/vb"]),
            onPress() {
                      const obj = closure_0(dependencyMap[25]);
                      return obj.listProjects();
                    }
          };
          const Button = tmp2(5375).Button;
          intl7 = tmp2(1126).intl;
          items2[1] = closure_6(Button, obj7);
          tmp28Result = closure_7(Stack2, obj5);
        } else {
          let stringResult;
          const obj8 = { spacing: nativeDefault.space.PX_16, children: items4 };
          const Stack4 = tmp2(5373).Stack;
          const obj9 = { spacing: nativeDefault.space.PX_4, children: items3 };
          const Stack5 = tmp2(5373).Stack;
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: intl9.string(_modDef3827.snY8uu) };
          const Text3 = tmp2(5086).Text;
          intl9 = tmp2(1126).intl;
          items3 = [closure_6(Text3, obj10), ];
          const Text4 = tmp2(5086).Text;
          if (0 === conjureEligibleGuilds.length) {
            const intl5 = tmp2(1126).intl;
            stringResult = intl5.string(tmp29(3827).f5o5pk);
          } else {
            const intl4 = tmp2(1126).intl;
            const obj11 = { count: conjureEligibleGuilds.length };
            stringResult = intl4.formatToPlainString(tmp29(3827).NiXcSi, obj11);
          }
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
          items3[1] = closure_6(Text4, obj12);
          items4 = [closure_7(Stack5, obj9), ];
          const obj13 = { guilds: conjureEligibleGuilds };
          items4[1] = closure_6(closure_12, obj13);
          tmp28Result = tmp28(Stack4, obj8);
        }
      }
      return tmp28Result;
    }
    const obj14 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: items5 };
    const Stack3 = tmp2(5373).Stack;
    items5 = [closure_6(ActivityIndicator, {}), ];
    const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl8.string(_modDef3827["XE+JXX"]) };
    const Text2 = tmp2(5086).Text;
    intl8 = tmp2(1126).intl;
    items5[1] = closure_6(Text2, obj15);
    tmp28Result = closure_7(Stack3, obj14);
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
    const obj16 = { spacing: nativeDefault.space.PX_24, children: items6 };
    const Stack = tmp2(5373).Stack;
    const obj17 = { title: intl.string(_modDef3827.DnsyEc), entries: found1, fallbackGuildId: id };
    intl = tmp2(1126).intl;
    items6 = [closure_6(closure_11, obj17), , ];
    const obj18 = { title: intl2.string(_modDef3827.p8lFfK), entries: found2, fallbackGuildId: id };
    intl2 = tmp2(1126).intl;
    items6[1] = closure_6(closure_11, obj18);
    const obj19 = { title: intl3.string(_modDef3827.sFiGNz), guilds: conjureEligibleGuilds };
    intl3 = tmp2(1126).intl;
    items6[2] = closure_6(closure_12, obj19);
    return closure_7(Stack, obj16);
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
    const obj2 = { title: intl.string(_modDef3827.uk6jhJ) };
    const BottomSheetTitleHeader = tmp(6828).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
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
  const ActionSheet = tmp(6885).ActionSheet;
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
  obj2 = { title: intl.string(_modDef3827.uk6jhJ) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl10.intl;
  obj3 = { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, children: metroRequire(closure_13, {}) };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  return metroRequire(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default tmp5;
