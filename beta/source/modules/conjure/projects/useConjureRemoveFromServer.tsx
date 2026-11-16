// Module ID: 13208
// Function ID: 13209
// Name: useConjureRemoveFromServer
// Dependencies: [5, 32, 19, 7018, 1113, 13158, 4131, 13206, 2]
// Exports: conjureRemoveTargetFromProject, conjureRemoveTargetFromServerApp, default

// Module 13208 (useConjureRemoveFromServer)
import intl3 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import conjureRemoveApp from "conjureRemoveApp" /* 13206 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onChange;

let result = size.fileFinishedImporting("modules/conjure/projects/useConjureRemoveFromServer.tsx");

export default function useConjureRemoveFromServer(arg0) {
  let checked;
  let closure_4;
  let closure_6;
  let first1;
  let intl;
  let memo1;
  let tmp10;
  let tmp4;
  let tmp8;
  _require = arg0;
  let obj = react;
  [checked, dependencyMap] = react.useState(true);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, _asyncToGenerator] = tmp3;
  [first1, _slicedToArray] = react.useState(false);
  const tmp7 = _slicedToArray(react.useState(null), 2);
  [tmp8, react] = tmp7;
  let tmp9 = _slicedToArray(react.useState(null), 2);
  [tmp10, closure_6] = tmp9;
  const projectId = tmp10.projectId;
  const guildId = tmp10.guildId;
  const appName = tmp10.appName;
  const guildName = tmp10.guildName;
  const channelNames = tmp10.channelNames;
  const keptChannelNames = tmp10.keptChannelNames;
  const previewApp = tmp10.previewApp;
  const botStays = tmp10.botStays;
  const inOtherServers = tmp10.inOtherServers;
  const endsCollaboration = tmp10.endsCollaboration;
  let tmp11 = !tmp4;
  if (tmp11) {
    let canRemove;
    if (previewApp != null) {
      canRemove = previewApp.canRemove;
    }
    tmp11 = false !== canRemove;
  }
  checked = tmp11;
  let items = [tmp11, channelNames, checked, previewApp];
  const memo = obj.useMemo(function() {
    let listFormat;
    let obj3;
    let obj4;
    const items = [];
    const arr2 = channelNames;
    if (channelNames.length > 0) {
      const obj2 = { item: obj3, checked, onChange, disabled: false };
      const _Intl = Intl;
      const push = items.push;
      const self = this;
      const self2 = this;
      obj3 = { key: "channels", kind: "channel", label: listFormat.format(arr2.map((item) => "#" + item)) };
      listFormat = new Intl.ListFormat(intl3.intl.currentLocale, { type: "conjunction" });
      push(obj2);
    }
    if (null != previewApp) {
      const obj = {
        item: obj4,
        checked,
        onChange(arg0) {
            return closure_1_3(!arg0);
          },
        disabled: !previewApp.canRemove
      };
      obj4 = { key: "preview-app", kind: "app", label: previewApp.name };
      items.push(obj);
    }
    return items;
  }, items);
  let items1 = [tmp11, appName, channelNames.length, checked, guildId, guildName, projectId, arg0];
  let items2 = [botStays, endsCollaboration, guildName, inOtherServers, keptChannelNames];
  const callback = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_1;
    let formatToPlainStringResult;
    let tmp28;
    closure_0 = tmp4;
    v3(true);
    react(null);
    closure_6(closure_0);
    let ok = false;
    const obj4 = { guildId, deleteChannels: tmp28, alsoRemovePreviewBot };
    tmp28 = channelNames.length > 0;
    const unpublishProject = closure_0(onChange[5]).unpublishProject;
    const tmp45 = closure_0(onChange[5]);
    const tmp46 = projectId;
    if (tmp28) {
      tmp28 = first;
    }
    await unpublishProject(tmp46, obj4);
    if (1 === c3) {
      onChange = 0;
      ok = false;
    } else if (arg0 === 1) {
      let c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      onChange = 0;
      c4 = 3;
      const obj = { value, done: true };
      return obj;
    } else {
      ok = value.ok;
      onChange = 0;
    }
    closure_129_4(false);
    if (ok) {
      const intl2 = closure_0(onChange[4]).intl;
      const obj6 = { app: closure_129_9, server: closure_129_10 };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(onChange[6]).SNFGxP, obj6);
    } else {
      const intl = closure_0(onChange[4]).intl;
      closure_129_5(intl.string(tmp(onChange[6]).PJ2Fkn));
      closure_129_6(null);
      formatToPlainStringResult = null;
    }
    return formatToPlainStringResult;
  }), items1);
  let obj2 = { optionalItems: memo, body: intl.formatToPlainString(checked(4131)["8OKM1N"], { server: guildName }), notes: memo1, pending: first1, error: tmp8, submit: callback };
  memo1 = obj.useMemo(() => {
    let items1;
    let items4;
    let items6;
    const obj = conjureRemoveApp;
    const obj2 = { keptChannelNames };
    const result = obj.conjureRemoveAppKeptChannels(obj2);
    const tmp5 = endsCollaboration;
    if (tmp5) {
      const intl = tmp2(1113).intl;
      const obj3 = { server: guildName };
      const items = [intl.formatToPlainString(_modDef4131["9b3KdT"], obj3)];
      items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...items1];
    const tmp9 = botStays;
    if (tmp9) {
      const intl2 = tmp2(1113).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const tmp12 = _modDef4131;
      const obj4 = { server: guildName };
      const items3 = [formatToPlainString(inOtherServers ? tmp12.oQ3WRg : tmp12["0a7JdI"], obj4)];
      items4 = items3;
    } else {
      items4 = [];
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, items4, tmp8);
    if (null != result) {
      const items5 = [result];
      items6 = items5;
    } else {
      items6 = [];
    }
    HermesBuiltin.arraySpread(items2, items6, arraySpreadResult);
    return items2;
  }, items2);
  intl = require("intl").intl;
  return obj2;
};
export function conjureRemoveTargetFromProject(project, target) {
  let result;
  let result1;
  let tmp;
  let closure_0 = target;
  const obj = { projectId: project.id, guildId: target.guildId, appName: target.appName, guildName: target.guildName, channelNames: target.channelNames, keptChannelNames: target.keptChannelNames, previewApp: tmp, botStays: !target.canRemoveBot, inOtherServers: result.some((item) => item !== guildId.guildId), endsCollaboration: result1 };
  tmp = null;
  if (null != target.previewAppName) {
    const obj4 = { name: null, canRemove: null };
    ({ previewAppName: obj2.name, canRemovePreviewBot: obj2.canRemove } = target);
    tmp = obj4;
  }
  const obj3 = ConjureProjectTypes;
  result = obj3.conjureProjectServerIds(project);
  result1 = target.guildId === project.guild_id;
  if (result1) {
    const tmp2Result = ConjureProjectTypes;
    result1 = tmp2Result.isProjectGuildCollaborationEnabled(project);
  }
  return obj;
}
export function conjureRemoveTargetFromServerApp(conjureServerApp) {
  return { projectId: conjureServerApp.projectId, guildId: conjureServerApp.guildId, appName: conjureServerApp.targetAppName, guildName: conjureServerApp.guildName, channelNames: conjureServerApp.deletableChannelNames, keptChannelNames: conjureServerApp.keptChannelNames, previewApp: conjureServerApp.previewApp, botStays: false, inOtherServers: false, endsCollaboration: false };
}
