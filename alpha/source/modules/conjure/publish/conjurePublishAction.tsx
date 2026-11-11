// Module ID: 13075
// Function ID: 13076
// Name: conjurePublishAction
// Dependencies: [7320, 1113, 4079, 13046, 2]
// Exports: resolveConjurePublishAction

// Module 13075 (conjurePublishAction)
import intl5 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 7320 */;
import conjurePreviewModes from "conjurePreviewModes" /* 13046 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export function resolveConjurePublishAction(input) {
  let appChannelName;
  let appChannelPending;
  let botInGuild;
  let integrationStatus;
  let intl3;
  let intl4;
  let preview_ready;
  let prop;
  let prop1;
  let status;
  let tmp24;
  let tmp29;
  let usesAppChannels;
  ({ integrationStatus, status } = input);
  const installScope = input.installScope;
  if (status == null) {
    status = { publishState: "not_live", surface: null, previewAppChannels: [] };
    const obj = { publishState: "not_live", surface: null, previewAppChannels: [] };
  }
  let tmp = status;
  if ("live_current" === status.publishState) {
    tmp = status;
    if (input.liveNameOutdated) {
      const obj2 = { publishState: "live_outdated" };
      const merged = Object.assign(status);
      tmp = obj2;
    }
  }
  const obj3 = { status: tmp };
  const merged1 = Object.assign(input);
  const status2 = obj3.status;
  let tmp6 = "guild" !== obj3.installScope;
  ({ appChannelName, appChannelPending, usesAppChannels, botInGuild } = obj3);
  if (!tmp6) {
    tmp6 = null == status2;
  }
  if (!tmp6) {
    const obj4 = ConjurePublishTypes;
    tmp6 = !obj4.isConjureLive(status2.publishState);
  }
  let tmp9 = !tmp6;
  if (tmp9) {
    let tmp10 = false === botInGuild;
    if (!tmp10) {
      tmp10 = "activity" === status2.surface && usesAppChannels && null == appChannelName && true !== appChannelPending;
      const tmp11 = "activity" === status2.surface && usesAppChannels && null == appChannelName && true !== appChannelPending;
    }
    tmp9 = tmp10;
  }
  let str3 = input.guildName;
  let formatResult = null;
  if ("guild" === input.installScope) {
    formatResult = null;
    if (false === tmp12) {
      const intl = intl5.intl;
      const format = intl.format;
      const N4NkyR = _modDef4079.N4NkyR;
      if (str3 == null) {
        str3 = "";
      }
      const obj5 = { server: str3 };
      formatResult = format(N4NkyR, obj5);
    }
  }
  const obj6 = { installScope, previewReady: true === preview_ready, integrationInstalled: prop, botPermissionsChanged: true === prop1 };
  preview_ready = undefined;
  const requiresPermissionReview = conjurePreviewModes.requiresPermissionReview;
  conjurePreviewModes;
  if (integrationStatus != null) {
    preview_ready = integrationStatus.preview_ready;
  }
  prop = undefined;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  if (prop == null) {
    prop = null;
  }
  prop1 = undefined;
  if (integrationStatus != null) {
    prop1 = integrationStatus.bot_permissions_changed;
  }
  const result = requiresPermissionReview(obj6);
  let str4 = "publish";
  if (result) {
    str4 = "consent_then_publish";
  }
  const obj7 = { intent: str4, isUpdate: "live_outdated" === tmp.publishState && !tmp9, upToDate: "live_current" === tmp.publishState && !tmp9, disabledReason: formatResult, confirmReason: tmp24, missingSurface: tmp29 };
  tmp24 = null;
  if (null == formatResult) {
    let str5 = input.guildName;
    let format2Result = null;
    if ("guild" === input.installScope) {
      format2Result = null;
      if (tmp26) {
        format2Result = null;
        if (false === tmp25) {
          const intl2 = tmp17(1113).intl;
          const format2 = intl2.format;
          const eHYXFg = _modDef4079.eHYXFg;
          if (str5 == null) {
            str5 = "";
          }
          const obj8 = { server: str5 };
          format2Result = format2(eHYXFg, obj8);
        }
      }
    }
    tmp24 = format2Result;
  }
  tmp29 = null;
  if (tmp9) {
    let str8 = "bot";
    if ("activity" === tmp.surface) {
      str8 = "bot";
      if (false !== input.botInGuild) {
        str8 = "channel";
      }
    }
    tmp29 = str8;
  }
  if (result) {
    let obj10;
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    if (true === prop2) {
      const obj9 = { label: intl4.string(_modDef4079["tUeY/h"]), action: "review_permissions" };
      const merged2 = Object.assign(obj7);
      intl4 = tmp17(1113).intl;
      obj10 = obj9;
    }
    return obj10;
  }
  obj10 = { label: intl3.string(_modDef4079["120EFN"]), action: "publish" };
  const merged3 = Object.assign(obj7);
  intl3 = tmp17(1113).intl;
}
