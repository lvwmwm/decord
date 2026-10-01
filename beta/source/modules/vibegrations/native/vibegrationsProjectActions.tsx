// Module ID: 16255
// Function ID: 16256
// Name: vibegrationsProjectActions
// Dependencies: [5, 12642, 8495, 2052, 16242, 4527, 5209, 1115, 3715, 14506, 9369, 9640, 6377, 16256, 4781, 15091, 16258, 14638, 8587, 4775, 6610, 4981, 10092, 4528, 4779, 6798, 4790, 8496, 2]
// Exports: vibegrationsProjectActions

// Module 16255 (vibegrationsProjectActions)
import intl13 from "intl" /* 1115 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CopyIcon from "CopyIcon" /* 4779 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import AlertModal from "AlertModal" /* 5209 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import VibegrationsArchivePicker from "VibegrationsArchivePicker" /* 16242 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8495 */;
import size from "module_2" /* 2 */;

let c1, c3, closure_2, closure_3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _importIntoProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const name = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let intl;
      let intl2;
      let intl3;
      let obj5;
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c4 = 1;
              c5 = 1;
              let obj4 = { value: obj5.pickVibegrationsArchive(), done: false };
              obj5 = VibegrationsArchivePicker;
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            if (null != closure_2) {
              const obj9 = closure_131_0(closure_131_2[4]);
              closure_4 = obj9.describeVibegrationsArchiveRejection(closure_2);
              if (null == closure_4) {
                const tmp15 = closure_131_0(closure_131_2[6]);
                let tmp17 = closure_131_2;
                const showConfirmModal = tmp15.showConfirmModal;
                const obj7 = {
                  key: "VibegrationsImportOverwrite",
                  title: intl.formatToPlainString(closure_131_1(closure_131_2[8]).XYZqZK, obj8),
                  content: intl2.string(closure_131_1(closure_131_2[8])["6syXoH"]),
                  confirmText: intl3.string(closure_131_1(closure_131_2[8]).pgFuyr),
                  onConfirm: function() {
                              return closure_1_3(...arguments);
                            }
                };
                intl = closure_131_0(closure_131_2[7]).intl;
                obj8 = { name: name.name };
                intl2 = closure_131_0(closure_131_2[7]).intl;
                const tmp24 = closure_131_0;
                intl3 = closure_131_0(closure_131_2[7]).intl;
                closure_3 = closure_131_3(async (arg0, value) => {
                  let closure_0;
                  let v1;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: null };
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
                          if (closure_2_1 != null) {
                            closure_2_1();
                          }
                          c2 = 1;
                          const sendVibegrationsArchiveImport = tmp(c2[4]).sendVibegrationsArchiveImport;
                          id = id.id;
                          const tmp17 = tmp(c2[4]);
                          const intl2 = tmp(c2[7]).intl;
                          c1 = 2;
                          c3 = 1;
                          const obj4 = { value: sendVibegrationsArchiveImport(id, closure_2_2, intl2.string(c1(c2[8]).C7GU2r)), done: false };
                          return obj4;
                        }
                      } else {
                        if (1 === tmp4) {
                          c2 = 0;
                          const presentError = tmp(c2[5]).presentError;
                          const tmp8 = tmp(c2[5]);
                          const intl = tmp(c2[7]).intl;
                          presentError(intl.string(c1(c2[8])["02GpNr"]));
                        } else if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c3 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          c2 = 0;
                        }
                        c3 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp24) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp24;
                      } else {
                        c1 = 1;
                      }
                    }
                  }
                });
                showConfirmModal(obj7);
              } else {
                let tmp8 = closure_131_2;
                obj = closure_131_0(closure_131_2[5]);
                obj.presentError(closure_4);
              }
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp33) {
          c5 = 3;
          throw tmp33;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = VibegrationsConnectionStore);
({ canRemixProject: metroRequire, isProjectOwner: metroImportDefault } = VibegrationsProjectStore);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/vibegrations/native/vibegrationsProjectActions.tsx");

export const vibegrationsProjectActions = function vibegrationsProjectActions(project) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let onClose;
  let onConnectTool;
  let onOpenSettings;
  let onRefresh;
  let onRestorePoints;
  let onVersionHistory;
  let preview;
  project = project.project;
  ({ guildId: importDefault, openChat: dependencyMap, onOpenSettings, onConnectTool, onVersionHistory, onRestorePoints, onRefresh, onClose, preview } = project);
  const onRemix = project.onRemix;
  let tmp = closure_7(project);
  const items1 = [];
  if (null != onRefresh) {
    obj = { label: intl.string(_modDef3715.xKexN1), IconComponent: project(14506).RefreshIcon, action: onRefresh };
    let push = items1.push;
    intl = project(1115).intl;
    push(obj);
  }
  if (null != onClose) {
    let obj2 = { label: intl2.string(_modDef3715.Ea0Wrr), IconComponent: project(9369).DoorExitIcon, action: onClose };
    const push2 = items1.push;
    intl2 = project(1115).intl;
    push2(obj2);
  }
  if (null != preview) {
    const items = preview.items;
    function _loop(iter) {
      let KeyIcon;
      let closure_0 = iter;
      const push = items1.push;
      obj = {
        label: iter.label,
        IconComponent: KeyIcon,
        action() {
          return preview.onPress(iter);
        }
      };
      if ("refresh" === iter.kind) {
        KeyIcon = project(dependencyMap[11]).RetryIcon;
      } else {
        KeyIcon = project(dependencyMap[12]).KeyIcon;
      }
      push(obj);
    }
    const iter = items[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
  if (closure_6(project)) {
    const push3 = items1.push;
    const obj3 = { label: intl3.string(_modDef3715.vPI794), IconComponent: project(16256).RemixIcon, action: onRemix };
    intl3 = project(1115).intl;
    push3(obj3);
  }
  const push4 = items1.push;
  const obj4 = {
    label: intl4.string(_modDef3715["7iamDC"]),
    IconComponent: project(4781).DownloadIcon,
    action() {
      if (dependencyMap != null) {
        tmp();
      }
      React3(project.id);
      const id = project.id;
      const intl = intl13.intl;
      hasOwnProperty(id, intl.string(_modDef3715["2ejwtJ"]));
    }
  };
  intl4 = project(1115).intl;
  push4(obj4);
  if (tmp) {
    const push5 = items1.push;
    const obj5 = {
      label: intl5.string(_modDef3715.lf8HqE),
      IconComponent: project(15091).FileUpIcon,
      action() {
          function importIntoProject() {
            return closure_1_9(...arguments);
          }
          const promise = importIntoProject(project, dependencyMap);
          promise.catch(() => {
            const presentError = project(closure_1_2[5]).presentError;
            project(closure_1_2[5]);
            const intl = project(closure_1_2[7]).intl;
            presentError(intl.string(closure_1_1(closure_1_2[8])["02GpNr"]));
          });
        }
    };
    intl5 = tmp18(1115).intl;
    push5(obj5);
  }
  if (null != onConnectTool) {
    const push6 = items1.push;
    const obj6 = { label: intl6.string(_modDef3715["3qelzD"]), IconComponent: project(16258).LinkPlusIcon, action: onConnectTool };
    intl6 = tmp18(1115).intl;
    push6(obj6);
  }
  if (null != onVersionHistory) {
    const push7 = items1.push;
    const obj7 = { label: intl7.string(_modDef3715.jAWwzi), IconComponent: project(14638).UndoIcon, action: onVersionHistory };
    intl7 = tmp18(1115).intl;
    push7(obj7);
  }
  if (null != onRestorePoints) {
    const push8 = items1.push;
    const obj8 = { label: intl8.string(_modDef3715.FRjicO), IconComponent: project(8587).ServerIcon, action: onRestorePoints };
    intl8 = tmp18(1115).intl;
    push8(obj8);
  }
  const push9 = items1.push;
  const obj9 = {
    label: intl9.string(project(1115).t.WqhZss),
    IconComponent: project(4775).LinkIcon,
    action() {
      const copy = ClipboardUtils.copy;
      ClipboardUtils;
      obj = ChannelUtils;
      copy(obj.getChannelPermalink(importDefault, StaticChannelRoute.VIBEGRATIONS, project.id));
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  };
  intl9 = tmp18(1115).intl;
  push9(obj9);
  const push10 = items1.push;
  const obj10 = {
    label: intl10.string(_modDef3715.b4TqpT),
    IconComponent: project(10092).IdIcon,
    action() {
      let intl;
      obj = ClipboardUtils;
      obj.copy(project.id);
      const obj2 = { key: "VIBEGRATIONS_PROJECT_ID_COPIED", content: intl.string(_modDef3715.WOKsTg), IconComponent: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl13.intl;
      open(obj2);
    }
  };
  intl10 = tmp18(1115).intl;
  push10(obj10);
  const tmp28 = tmp && null != onOpenSettings;
  if (tmp28) {
    const push11 = items1.push;
    const obj11 = { label: intl11.string(_modDef3715["xhcY+n"]), IconComponent: project(6798).SettingsIcon, action: onOpenSettings };
    intl11 = tmp18(1115).intl;
    push11(obj11);
  }
  if (tmp) {
    const push12 = items1.push;
    const obj12 = {
      label: intl12.string(project(1115).t.oyYWHE),
      IconComponent: project(4790).TrashIcon,
      destructive: true,
      action() {
          let id;
          let intl;
          let intl2;
          let intl3;
          let obj2;
          const tmp = AlertModal;
          obj = {
            key: "VibegrationsProjectDelete",
            title: intl.formatToPlainString(_modDef3715.ZokHVz, obj2),
            content: intl2.string(_modDef3715.NmF939),
            confirmText: intl3.string(intl13.t.oyYWHE),
            onConfirm() {
              obj = project(dependencyMap[27]);
              const result = obj.deleteProjectInBackground(id.id, () => {
                const presentError = id(closure_1_2[5]).presentError;
                id(closure_1_2[5]);
                const intl = id(closure_1_2[7]).intl;
                return presentError(intl.string(closure_1_1(closure_1_2[8]).tqKZCi));
              });
            }
          };
          const showConfirmModal = tmp.showConfirmModal;
          intl = intl13.intl;
          obj2 = { name: project.name };
          intl2 = intl13.intl;
          intl3 = intl13.intl;
          showConfirmModal(obj);
        }
    };
    intl12 = tmp18(1115).intl;
    push12(obj12);
  }
  return items1;
};
