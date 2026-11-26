// Module ID: 11482
// Function ID: 11483
// Name: conjurePublishAction
// Dependencies: [11475, 1112, 4245, 11457, 2]
// Exports: conjurePublishButtonState

// Module 11482 (conjurePublishAction)
import intl4 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11457 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 11475 */;
import size from "module_2" /* 2 */;

function resolveConjurePublishAction(input) {
  let appChannelName;
  let appChannelPending;
  let botInGuild;
  let integrationStatus;
  let intl2;
  let preview_ready;
  let prop;
  let prop1;
  let status;
  let str4;
  let tmp26;
  let tmp27;
  let tmp31;
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
      const intl = intl4.intl;
      const format = intl.format;
      const N4NkyR = _modDef4245.N4NkyR;
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
  let result = requiresPermissionReview(obj6);
  const obj7 = { label: intl2.string(_modDef4245["120EFN"]), intent: str4, permissionsChanged: result, isUpdate: "live_outdated" === tmp.publishState && !tmp9, upToDate: tmp26, disabledReason: formatResult, confirmReason: tmp27, missingSurface: tmp31 };
  intl2 = tmp17(1112).intl;
  str4 = "publish";
  if (result) {
    str4 = "consent_then_publish";
  }
  if (result) {
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    result = true === prop2;
  }
  tmp27 = null;
  tmp26 = ("live_current" === tmp.publishState || "live_auto_synced" === tmp.publishState) && !tmp9;
  if (null == formatResult) {
    let str6 = input.guildName;
    let format2Result = null;
    if ("guild" === input.installScope) {
      format2Result = null;
      if (tmp29) {
        format2Result = null;
        if (false === tmp28) {
          const intl3 = tmp17(1112).intl;
          const format2 = intl3.format;
          const eHYXFg = _modDef4245.eHYXFg;
          if (str6 == null) {
            str6 = "";
          }
          const obj8 = { server: str6 };
          format2Result = format2(eHYXFg, obj8);
        }
      }
    }
    tmp27 = format2Result;
  }
  tmp31 = null;
  if (tmp9) {
    let str9 = "bot";
    if ("activity" === tmp.surface) {
      str9 = "bot";
      if (false !== input.botInGuild) {
        str9 = "channel";
      }
    }
    tmp31 = str9;
  }
  return obj7;
}
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export { resolveConjurePublishAction };
export function conjurePublishButtonState(memo, canPublish) {
  let publishState;
  const status = memo.status;
  if (status != null) {
    publishState = status.publishState;
  }
  if (canPublish.canPublish) {
    if (null != memo.installScope) {
      if (null != publishState) {
        if ("nothing_built" !== publishState) {
          if (canPublish.publishing) {
            return "publishing";
          } else {
            let str2 = "action_needed";
            const tmp2 = resolveConjurePublishAction(memo);
            if (tmp2.upToDate) {
              str2 = "action_needed";
              if (!tmp3) {
                str2 = "action_needed";
                if (!canPublish.awaitingApproval) {
                  str2 = "action_needed";
                  if (!canPublish.ownerInstallMissing) {
                    let str3 = "up_to_date";
                    if ("live_auto_synced" === publishState) {
                      str3 = "auto_synced";
                    }
                    str2 = str3;
                  }
                }
              }
            }
            return str2;
          }
        }
      }
    }
  }
  return "hidden";
}
