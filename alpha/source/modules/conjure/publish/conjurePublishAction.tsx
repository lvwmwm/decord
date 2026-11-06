// Module ID: 12271
// Function ID: 12272
// Name: conjurePublishAction
// Dependencies: [11010, 1113, 4024, 12255, 2]
// Exports: resolveConjurePublishAction

// Module 12271 (conjurePublishAction)
import intl5 from "intl" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 11010 */;
import conjurePreviewModes from "conjurePreviewModes" /* 12255 */;
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
  let status2;
  let tmp23;
  let tmp28;
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
  ({ status: status2, usesAppChannels } = obj3);
  let tmp6 = "guild" !== obj3.installScope;
  ({ appChannelName, appChannelPending, botInGuild } = obj3);
  if (!tmp6) {
    tmp6 = null == status2;
  }
  if (!tmp6) {
    const obj4 = ConjurePublishTypes;
    tmp6 = !obj4.isConjureLive(status2.publishState);
  }
  let tmp9 = !tmp6;
  if (tmp9) {
    let tmp10;
    if ("activity" === status2.surface) {
      if (usesAppChannels) {
        usesAppChannels = null == appChannelName;
      }
      if (usesAppChannels) {
        usesAppChannels = true !== appChannelPending;
      }
      tmp10 = usesAppChannels;
    } else {
      tmp10 = "bot" === status2.surface && false === botInGuild;
    }
    tmp9 = tmp10;
  }
  let str4 = input.guildName;
  let formatResult = null;
  if ("guild" === input.installScope) {
    formatResult = null;
    if (false === tmp11) {
      const intl = intl5.intl;
      const format = intl.format;
      const N4NkyR = _modDef4024.N4NkyR;
      if (str4 == null) {
        str4 = "";
      }
      const obj5 = { server: str4 };
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
  let str5 = "publish";
  if (result) {
    str5 = "consent_then_publish";
  }
  const obj7 = { intent: str5, isUpdate: "live_outdated" === tmp.publishState && !tmp9, upToDate: "live_current" === tmp.publishState && !tmp9, disabledReason: formatResult, confirmReason: tmp23, missingSurface: tmp28 };
  tmp23 = null;
  if (null == formatResult) {
    let str6 = input.guildName;
    let format2Result = null;
    if ("guild" === input.installScope) {
      format2Result = null;
      if (tmp25) {
        format2Result = null;
        if (false === tmp24) {
          const intl2 = tmp16(1113).intl;
          const format2 = intl2.format;
          const eHYXFg = _modDef4024.eHYXFg;
          if (str6 == null) {
            str6 = "";
          }
          const obj8 = { server: str6 };
          format2Result = format2(eHYXFg, obj8);
        }
      }
    }
    tmp23 = format2Result;
  }
  tmp28 = null;
  if (tmp9) {
    let str7 = "bot";
    if ("activity" === tmp.surface) {
      str7 = "channel";
    }
    tmp28 = str7;
  }
  if (result) {
    let obj10;
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    if (true === prop2) {
      const obj9 = { label: intl4.string(_modDef4024["tUeY/h"]), action: "review_permissions" };
      const merged2 = Object.assign(obj7);
      intl4 = tmp16(1113).intl;
      obj10 = obj9;
    }
    return obj10;
  }
  obj10 = { label: intl3.string(_modDef4024["120EFN"]), action: "publish" };
  const merged3 = Object.assign(obj7);
  intl3 = tmp16(1113).intl;
}
