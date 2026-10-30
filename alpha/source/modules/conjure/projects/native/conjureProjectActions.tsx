// Module ID: 12520
// Function ID: 12521
// Name: conjureProjectActions
// Dependencies: [5, 10830, 10847, 6838, 4865, 12521, 5706, 5959, 1114, 3865, 7352, 6041, 5707, 5726, 12513, 12522, 10855, 9189, 10973, 10858, 10826, 5728, 12524, 5722, 10504, 7555, 11845, 7129, 12526, 5733, 2]
// Exports: canUnpublishConjureUserApp, conjureProjectActions, copyConjureProjectId, copyConjureProjectLink, exportConjureProject, importConjureProject

// Module 12520 (conjureProjectActions)
import intl11 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CopyIcon from "CopyIcon" /* 5726 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10855 */;
import conjureProjectMute from "conjureProjectMute" /* 10858 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12513 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 12522 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 12526 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3, closure_2, closure_3;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function importIntoProject() {
  return closure_1_11(...arguments);
}
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
              let obj4 = { value: obj5.pickConjureArchive(), done: false };
              obj5 = require("ConjureArchivePicker");
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
              const obj9 = closure_131_0(closure_131_2[5]);
              closure_4 = obj9.describeConjureArchiveRejection(closure_2);
              if (null == closure_4) {
                const tmp15 = closure_131_0(closure_131_2[7]);
                let tmp17 = closure_131_2;
                const showConfirmModal = tmp15.showConfirmModal;
                const obj7 = {
                  key: "ConjureImportOverwrite",
                  title: intl.formatToPlainString(closure_131_1(closure_131_2[9])["Gm+u1+"], obj8),
                  content: intl2.string(closure_131_1(closure_131_2[9]).M7H3sJ),
                  confirmText: intl3.string(closure_131_1(closure_131_2[9]).gFHykw),
                  onConfirm() {
                              return closure_1_3(...arguments);
                            }
                };
                intl = closure_131_0(closure_131_2[8]).intl;
                obj8 = { name: name.name };
                intl2 = closure_131_0(closure_131_2[8]).intl;
                const tmp24 = closure_131_0;
                intl3 = closure_131_0(closure_131_2[8]).intl;
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
                          const sendConjureArchiveImport = tmp(c2[5]).sendConjureArchiveImport;
                          id = id.id;
                          const tmp17 = tmp(c2[5]);
                          const intl2 = tmp(c2[8]).intl;
                          c1 = 2;
                          c3 = 1;
                          const obj4 = { value: sendConjureArchiveImport(id, closure_2_2, intl2.string(c1(c2[9]).Owerd3)), done: false };
                          return obj4;
                        }
                      } else {
                        if (1 === tmp4) {
                          c2 = 0;
                          const presentError = tmp(c2[6]).presentError;
                          const tmp8 = tmp(c2[6]);
                          const intl = tmp(c2[8]).intl;
                          presentError(intl.string(c1(c2[9])["Q+l4Hv"]));
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
                obj = closure_131_0(closure_131_2[6]);
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
function deleteConjureProject(project, removeTarget) {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  _require = project;
  if (null == removeTarget) {
    const obj2 = {
      key: "ConjureProjectDelete",
      title: intl.formatToPlainString(_modDef3865.CJBhb2, obj3),
      content: intl2.string(_modDef3865["0OmrVn"]),
      confirmText: intl3.string(require("intl").t.oyYWHE),
      onConfirm() {
          obj = ConjureActionCreators;
          const result = obj.deleteProjectInBackground(project.id, () => {
            const presentError = project(closure_1_2[6]).presentError;
            project(closure_1_2[6]);
            const intl = project(closure_1_2[8]).intl;
            return presentError(intl.string(closure_1_1(closure_1_2[9])["0XDHob"]));
          });
        }
    };
    const showConfirmModal = require("AlertModal").showConfirmModal;
    require("AlertModal");
    intl = require("intl").intl;
    obj3 = { name: project.name };
    intl2 = require("intl").intl;
    intl3 = require("intl").intl;
    showConfirmModal(obj2);
  } else {
    obj = { project, target: removeTarget, action: "delete" };
    openConjureRemoveAppAlertDefault(obj);
  }
}
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
({ canPublishProject: metroImportDefault, canRemixProject: metroImportAll, isProjectOwner: c9 } = ConjureProjectStore);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export function exportConjureProject(project, fn) {
  if (fn != null) {
    fn();
  }
  React3(project.id);
  const id = project.id;
  const intl = intl11.intl;
  hasOwnProperty(id, intl.string(_modDef3865.oU20rd));
}
export function importConjureProject(project, arg1) {
  const promise = importIntoProject(project, arg1);
  promise.catch(() => {
    const presentError = project(muted[6]).presentError;
    project(muted[6]);
    const intl = project(muted[8]).intl;
    presentError(intl.string(closure_1_1(muted[9])["Q+l4Hv"]));
  });
}
export function copyConjureProjectLink(project, guild_id) {
  const copy = ClipboardUtils.copy;
  ClipboardUtils;
  obj = ChannelUtils;
  copy(obj.getChannelPermalink(guild_id, StaticChannelRoute.CONJURE, project.id));
  const obj2 = ToastUtils;
  obj2.presentLinkCopied();
}
export function copyConjureProjectId(project) {
  let intl;
  obj = ClipboardUtils;
  obj.copy(project.id);
  const obj2 = { text: intl.string(_modDef3865.CmfaZG), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl11.intl;
  open("CONJURE_PROJECT_ID_COPIED", obj2);
}
export function canUnpublishConjureUserApp(project) {
  let result = React4(project);
  if (result) {
    obj = conjureRemoveApp;
    result = obj.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  return result;
}
export { deleteConjureProject };
export function conjureProjectActions(project) {
  let BellSlashIcon;
  let closure_4;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let muted;
  let obj9;
  let onOpenSettings;
  let s9rCuH;
  let tmp8;
  project = project.project;
  ({ guildId: importDefault, muted } = project);
  const removeTarget = project.removeTarget;
  ({ openChat: closure_4, onOpenSettings } = project);
  const onRemix = project.onRemix;
  const tmp = closure_9;
  const tmp2 = closure_9(project);
  const items = [];
  const push = items.push;
  let intl = project(muted[8]).intl;
  const string = intl.string;
  const tmp6 = require("module_3865");
  if (muted) {
    s9rCuH = tmp6.s9rCuH;
    tmp8 = tmp5;
  } else {
    s9rCuH = tmp6["a+i/As"];
    tmp8 = tmp5;
  }
  obj = {
    label: string(s9rCuH),
    IconComponent: BellSlashIcon,
    action() {
      obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !muted);
    }
  };
  if (muted) {
    BellSlashIcon = tmp3(tmp4[17]).BellIcon;
  } else {
    BellSlashIcon = tmp3(tmp4[18]).BellSlashIcon;
  }
  push(obj);
  if (closure_8(project)) {
    let obj2 = { label: intl2.string(tmp8(tmp4[9]).XWgAfc), IconComponent: project(tmp4[20]).RemixIcon, action: onRemix };
    const push2 = items.push;
    intl2 = tmp3(tmp4[8]).intl;
    push2(obj2);
  }
  const push3 = items.push;
  const obj3 = {
    label: intl3.string(tmp8(muted[9]).WsEEP7),
    IconComponent: project(muted[21]).DownloadIcon,
    action() {
      if (closure_4 != null) {
        tmp2();
      }
      React3(project.id);
      const id = tmp.id;
      const intl = intl11.intl;
      hasOwnProperty(id, intl.string(_modDef3865.oU20rd));
    }
  };
  intl3 = tmp3(tmp4[8]).intl;
  push3(obj3);
  if (tmp2) {
    const push4 = items.push;
    const obj4 = {
      label: intl4.string(tmp8(muted[9]).rWGY3e),
      IconComponent: project(muted[22]).FileUpIcon,
      action() {
          const promise = importIntoProject(project, closure_4);
          promise.catch(() => {
            const presentError = project(muted[6]).presentError;
            project(muted[6]);
            const intl = project(muted[8]).intl;
            presentError(intl.string(closure_1_1(muted[9])["Q+l4Hv"]));
          });
        }
    };
    intl4 = tmp3(tmp4[8]).intl;
    push4(obj4);
  }
  const push5 = items.push;
  const obj5 = {
    label: intl5.string(project(muted[8]).t.WqhZss),
    IconComponent: project(muted[23]).LinkIcon,
    action() {
      const copy = ClipboardUtils.copy;
      ClipboardUtils;
      obj = ChannelUtils;
      copy(obj.getChannelPermalink(importDefault, StaticChannelRoute.CONJURE, project.id));
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  };
  intl5 = tmp3(tmp4[8]).intl;
  push5(obj5);
  const push6 = items.push;
  const obj6 = {
    label: intl6.string(tmp8(muted[9])["nm/zuU"]),
    IconComponent: project(muted[24]).IdIcon,
    action() {
      let intl;
      obj = ClipboardUtils;
      obj.copy(project.id);
      const obj2 = { text: intl.string(_modDef3865.CmfaZG), icon: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl11.intl;
      open("CONJURE_PROJECT_ID_COPIED", obj2);
    }
  };
  intl6 = tmp3(tmp4[8]).intl;
  push6(obj6);
  const tmp15 = closure_7(project) && null != onOpenSettings;
  if (tmp15) {
    const push7 = items.push;
    const obj7 = { label: intl7.string(tmp8(muted[9]).FzfmQ8), IconComponent: project(muted[25]).SettingsIcon, action: onOpenSettings };
    intl7 = tmp3(tmp4[8]).intl;
    push7(obj7);
  }
  let canRemoveBot;
  if (removeTarget != null) {
    canRemoveBot = removeTarget.canRemoveBot;
  }
  if (true === canRemoveBot) {
    const push8 = items.push;
    const obj8 = {
      label: intl8.formatToPlainString(tmp8(muted[9])["3gKG2j"], obj9),
      IconComponent: project(muted[26]).DoorExitIcon,
      destructive: true,
      action() {
          obj = { project, target: removeTarget, action: "remove" };
          return openConjureRemoveAppAlertDefault(obj);
        }
    };
    intl8 = tmp3(tmp4[8]).intl;
    obj9 = { server: removeTarget.guildName };
    push8(obj8);
  }
  let result = tmp(project);
  if (result) {
    const tmp3Result = project(muted[14]);
    result = tmp3Result.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  if (result) {
    const push9 = items.push;
    const obj10 = {
      label: intl9.string(tmp8(muted[9]).jYAR58),
      IconComponent: project(muted[27]).EyeSlashIcon,
      destructive: true,
      action() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl9 = tmp3(tmp4[8]).intl;
    push9(obj10);
  }
  if (tmp2) {
    const push10 = items.push;
    const obj11 = {
      label: intl10.string(project(muted[8]).t.oyYWHE),
      IconComponent: project(muted[29]).TrashIcon,
      destructive: true,
      action() {
          deleteConjureProject(project, removeTarget);
        }
    };
    intl10 = tmp3(tmp4[8]).intl;
    push10(obj11);
  }
  return items;
}
