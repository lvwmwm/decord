// Module ID: 11614
// Function ID: 11615
// Name: conjurePublishAction
// Dependencies: [1128, 3865, 11615, 11617, 2]
// Exports: conjurePublishTooltip, resolveConjurePublishAction

// Module 11614 (conjurePublishAction)
import intl5 from "intl" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11615 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 11617 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export const resolveConjurePublishAction = function resolveConjurePublishAction(input) {
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
  let tmp21;
  let tmp26;
  ({ integrationStatus, status } = input);
  const installScope = input.installScope;
  if (status == null) {
    status = { state: "unpublished", surface: null, previewAppChannels: [] };
    const obj = { state: "unpublished", surface: null, previewAppChannels: [] };
  }
  let tmp = status;
  if ("up_to_date" === status.state) {
    tmp = status;
    if (input.liveNameOutdated) {
      const obj2 = { state: "changes" };
      const merged = Object.assign(status);
      tmp = obj2;
    }
  }
  const obj3 = { status: tmp };
  const merged1 = Object.assign(input);
  const status2 = obj3.status;
  let tmp6 = "guild" === obj3.installScope;
  ({ appChannelName, appChannelPending, botInGuild } = obj3);
  if (tmp6) {
    tmp6 = null != status2;
  }
  if (tmp6) {
    tmp6 = "unpublished" !== status2.state;
  }
  if (tmp6) {
    let tmp7;
    if ("activity" === status2.surface) {
      tmp7 = null == appChannelName && true !== appChannelPending;
      const tmp8 = null == appChannelName && true !== appChannelPending;
    } else {
      tmp7 = "bot" === status2.surface && false === botInGuild;
    }
    tmp6 = tmp7;
  }
  let str5 = input.guildName;
  let formatResult = null;
  if ("guild" === input.installScope) {
    formatResult = null;
    if (false === tmp9) {
      const intl = intl5.intl;
      const format = intl.format;
      const N4NkyR = _modDef3865.N4NkyR;
      if (str5 == null) {
        str5 = "";
      }
      const obj4 = { server: str5 };
      formatResult = format(N4NkyR, obj4);
    }
  }
  const obj5 = { installScope, previewReady: true === preview_ready, integrationInstalled: prop, botPermissionsChanged: true === prop1 };
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
  const result = requiresPermissionReview(obj5);
  let str6 = "publish";
  if (result) {
    str6 = "consent_then_publish";
  }
  const obj6 = { intent: str6, isUpdate: "changes" === tmp.state && !tmp6, disabledReason: formatResult, confirmReason: tmp21, missingSurface: tmp26 };
  tmp21 = null;
  if (null == formatResult) {
    let str7 = input.guildName;
    let format2Result = null;
    if ("guild" === input.installScope) {
      format2Result = null;
      if (tmp23) {
        format2Result = null;
        if (false === tmp22) {
          const intl2 = tmp14(1128).intl;
          const format2 = intl2.format;
          const eHYXFg = _modDef3865.eHYXFg;
          if (str7 == null) {
            str7 = "";
          }
          const obj7 = { server: str7 };
          format2Result = format2(eHYXFg, obj7);
        }
      }
    }
    tmp21 = format2Result;
  }
  tmp26 = null;
  if (tmp6) {
    let str8 = "bot";
    if ("activity" === tmp.surface) {
      str8 = "channel";
    }
    tmp26 = str8;
  }
  if (result) {
    let obj9;
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    if (true === prop2) {
      const obj8 = { label: intl4.string(_modDef3865["tUeY/h"]), action: "review_permissions" };
      const merged2 = Object.assign(obj6);
      intl4 = tmp14(1128).intl;
      obj9 = obj8;
    }
    return obj9;
  }
  obj9 = { label: intl3.string(_modDef3865["120EFN"]), action: "publish" };
  const merged3 = Object.assign(obj6);
  intl3 = tmp14(1128).intl;
};
export const conjurePublishTooltip = function conjurePublishTooltip(status) {
  let obj3;
  let publishedRevision;
  let publishedAt;
  if (status != null) {
    publishedAt = status.publishedAt;
  }
  let parseTimestampMsResult = null;
  if (null != publishedAt) {
    const obj = ConjureHistoryFormat;
    parseTimestampMsResult = obj.parseTimestampMs(status.publishedAt);
  }
  if (status != null) {
    publishedRevision = status.publishedRevision;
  }
  let state;
  if (status != null) {
    state = status.state;
  }
  let formatToPlainStringResult = null;
  if ("unpublished" !== state) {
    formatToPlainStringResult = null;
    if (null != parseTimestampMsResult) {
      formatToPlainStringResult = null;
      if (null != publishedRevision) {
        const intl = intl5.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj2 = { time: obj3.formatHistoryDateTime(parseTimestampMsResult), version: publishedRevision };
        const D9erxW = _modDef3865.D9erxW;
        obj3 = ConjureHistoryFormat;
        formatToPlainStringResult = formatToPlainString(D9erxW, obj2);
      }
    }
  }
  return formatToPlainStringResult;
};
