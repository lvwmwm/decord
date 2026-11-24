// Module ID: 12326
// Function ID: 12327
// Name: conjurePublishAction
// Dependencies: [12319, 1112, 4190, 12303, 2]
// Exports: conjurePublishButtonState

// Module 12326 (conjurePublishAction)
import intl5 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import conjurePreviewModes from "conjurePreviewModes" /* 12303 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 12319 */;
import size from "module_2" /* 2 */;

function resolveConjurePublishAction(input) {
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
  let tmp25;
  let tmp30;
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
      const N4NkyR = _modDef4190.N4NkyR;
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
  const obj7 = { intent: str4, isUpdate: "live_outdated" === tmp.publishState && !tmp9, upToDate: tmp24, disabledReason: formatResult, confirmReason: tmp25, missingSurface: tmp30 };
  tmp25 = null;
  tmp24 = ("live_current" === tmp.publishState || "live_auto_synced" === tmp.publishState) && !tmp9;
  if (null == formatResult) {
    let str6 = input.guildName;
    let format2Result = null;
    if ("guild" === input.installScope) {
      format2Result = null;
      if (tmp27) {
        format2Result = null;
        if (false === tmp26) {
          const intl2 = tmp17(1112).intl;
          const format2 = intl2.format;
          const eHYXFg = _modDef4190.eHYXFg;
          if (str6 == null) {
            str6 = "";
          }
          const obj8 = { server: str6 };
          format2Result = format2(eHYXFg, obj8);
        }
      }
    }
    tmp25 = format2Result;
  }
  tmp30 = null;
  if (tmp9) {
    let str9 = "bot";
    if ("activity" === tmp.surface) {
      str9 = "bot";
      if (false !== input.botInGuild) {
        str9 = "channel";
      }
    }
    tmp30 = str9;
  }
  if (result) {
    let obj10;
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    if (true === prop2) {
      const obj9 = { label: intl4.string(_modDef4190["tUeY/h"]), action: "review_permissions" };
      const merged2 = Object.assign(obj7);
      intl4 = tmp17(1112).intl;
      obj10 = obj9;
    }
    return obj10;
  }
  obj10 = { label: intl3.string(_modDef4190["120EFN"]), action: "publish" };
  const merged3 = Object.assign(obj7);
  intl3 = tmp17(1112).intl;
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
              if ("publish" === tmp3) {
                str2 = "action_needed";
                if (!canPublish.awaitingApproval) {
                  str2 = "action_needed";
                  if (!canPublish.ownerInstallMissing) {
                    let str4 = "up_to_date";
                    if ("live_auto_synced" === publishState) {
                      str4 = "auto_synced";
                    }
                    str2 = str4;
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
