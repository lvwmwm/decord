// Module ID: 17113
// Function ID: 17114
// Name: conjurePublishAction
// Dependencies: [1126, 3849, 17079, 2]
// Exports: resolveConjurePublishAction

// Module 17113 (conjurePublishAction)
import intl18 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import conjurePreviewModes from "conjurePreviewModes" /* 17079 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export const resolveConjurePublishAction = function resolveConjurePublishAction(input) {
  let appChannelName;
  let appChannelName2;
  let appChannelPending;
  let botInGuild;
  let destination;
  let formatToPlainStringResult1;
  let guildName;
  let installScope;
  let integrationStatus;
  let intl10;
  let intl11;
  let intl12;
  let intl17;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let preview_ready1;
  let prop;
  let prop1;
  let tmp38;
  let tmp43;
  ({ installScope, integrationStatus, guildName, appChannelName } = input);
  if (null == input.status) {
    return null;
  } else {
    if ("up_to_date" === input.status.state) {
      let status;
      if (input.liveNameOutdated) {
        const obj = { state: "changes" };
        const merged = Object.assign(input.status);
        status = obj;
      }
      const surface = status.surface;
      if ("unpublished" === status.state) {
        if (null == surface) {
          let preview_ready;
          if (integrationStatus != null) {
            preview_ready = integrationStatus.preview_ready;
          }
          if (true !== preview_ready) {
            return null;
          }
        }
      }
      let tmp4 = null;
      if (null != surface) {
        let tmp9;
        if ("user" === installScope) {
          let tmp11;
          if ("bot" === surface) {
            const obj2 = { update: intl11.string(_modDef3849.JpDnbE), open: intl12.string(_modDef3849.NNIwRu), destination: "dm", navigatesOnFirstPublish: true, navigatesOnUpdate: false };
            intl11 = intl18.intl;
            intl12 = intl18.intl;
            tmp11 = obj2;
          } else if ("activity" === surface) {
            const obj3 = { update: intl9.string(_modDef3849.QesMDC), open: intl10.string(_modDef3849.iyQTsb), destination: "launch", navigatesOnFirstPublish: false, navigatesOnUpdate: false };
            intl9 = intl18.intl;
            intl10 = intl18.intl;
            tmp11 = obj3;
          } else if ("widget" === surface) {
            const obj4 = { update: intl7.string(_modDef3849["LUi/55"]), open: intl8.string(_modDef3849.TXUK1g), destination: "profile", navigatesOnFirstPublish: true, navigatesOnUpdate: true };
            intl7 = intl18.intl;
            intl8 = intl18.intl;
            tmp11 = obj4;
          } else {
            tmp11 = null;
          }
          tmp9 = tmp11;
        } else {
          tmp9 = null;
          if (null != guildName) {
            const intl = intl18.intl;
            const obj5 = { server: guildName };
            const formatToPlainStringResult = intl.formatToPlainString(_modDef3849.fTgw6C, obj5);
            if ("bot" === surface) {
              const obj6 = { update: intl6.string(_modDef3849.JpDnbE), open: formatToPlainStringResult, destination: "guild", navigatesOnFirstPublish: true, navigatesOnUpdate: false };
              intl6 = tmp5(1126).intl;
              tmp9 = obj6;
            } else if ("activity" === surface) {
              const obj7 = { update: intl4.string(_modDef3849.QesMDC), open: formatToPlainStringResult1, destination: "channel", navigatesOnFirstPublish: true, navigatesOnUpdate: false };
              intl4 = tmp5(1126).intl;
              formatToPlainStringResult1 = formatToPlainStringResult;
              if (null != appChannelName) {
                const intl5 = tmp5(1126).intl;
                const obj8 = { channel: appChannelName };
                formatToPlainStringResult1 = intl5.formatToPlainString(tmp7(3849).l9xGQD, obj8);
              }
              tmp9 = obj7;
            } else if ("automod" === surface) {
              const obj9 = { update: intl2.string(_modDef3849.bwBMMn), open: intl3.string(_modDef3849.KjbLum), destination: "automod", navigatesOnFirstPublish: false, navigatesOnUpdate: false };
              intl2 = tmp5(1126).intl;
              intl3 = tmp5(1126).intl;
              tmp9 = obj9;
            } else {
              tmp9 = null;
            }
          }
        }
        tmp4 = tmp9;
      }
      const status2 = input.status;
      let tmp21 = "guild" === input.installScope;
      ({ appChannelName: appChannelName2, appChannelPending, botInGuild } = input);
      if (tmp21) {
        tmp21 = null != status2;
      }
      if (tmp21) {
        tmp21 = "unpublished" !== status2.state;
      }
      if (tmp21) {
        let tmp22;
        if ("activity" === status2.surface) {
          tmp22 = null == appChannelName2 && true !== appChannelPending;
          const tmp23 = null == appChannelName2 && true !== appChannelPending;
        } else {
          tmp22 = "bot" === status2.surface && false === botInGuild;
        }
        tmp21 = tmp22;
      }
      if (null != tmp4) {
        if ("up_to_date" === status.state) {
          if (!tmp21) {
            const obj11 = { label: null, intent: "open", action: "open", destination: null, navigatesOnPublish: false, upToDate: true, isUpdate: false, disabledReason: null, confirmReason: null, missingSurface: null };
            ({ open: obj10.label, destination: obj10.destination } = tmp4);
            return obj11;
          }
        }
      }
      let str11 = input.guildName;
      let formatResult = null;
      if ("guild" === input.installScope) {
        formatResult = null;
        if (false === tmp24) {
          const intl13 = intl18.intl;
          const format = intl13.format;
          const N4NkyR = _modDef3849.N4NkyR;
          if (str11 == null) {
            str11 = "";
          }
          const obj12 = { server: str11 };
          formatResult = format(N4NkyR, obj12);
        }
      }
      const obj13 = { installScope, previewReady: true === preview_ready1, integrationInstalled: prop, botPermissionsChanged: true === prop1 };
      preview_ready1 = undefined;
      const requiresPermissionReview = conjurePreviewModes.requiresPermissionReview;
      conjurePreviewModes;
      if (integrationStatus != null) {
        preview_ready1 = integrationStatus.preview_ready;
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
      const result = requiresPermissionReview(obj13);
      let str14 = "publish";
      if (result) {
        str14 = "consent_then_publish";
      }
      const obj14 = { intent: str14, destination, upToDate: false, isUpdate: "changes" === status.state && !tmp21, disabledReason: formatResult, confirmReason: tmp38, missingSurface: tmp43 };
      destination = undefined;
      if (tmp4 != null) {
        destination = tmp4.destination;
      }
      if (destination == null) {
        destination = null;
      }
      tmp38 = null;
      if (null == formatResult) {
        let str15 = input.guildName;
        let format2Result = null;
        if ("guild" === input.installScope) {
          format2Result = null;
          if (tmp40) {
            format2Result = null;
            if (false === tmp39) {
              const intl14 = tmp29(1126).intl;
              const format2 = intl14.format;
              const eHYXFg = _modDef3849.eHYXFg;
              if (str15 == null) {
                str15 = "";
              }
              const obj15 = { server: str15 };
              format2Result = format2(eHYXFg, obj15);
            }
          }
        }
        tmp38 = format2Result;
      }
      tmp43 = null;
      if (tmp21) {
        let str16 = "bot";
        if ("activity" === surface) {
          str16 = "channel";
        }
        tmp43 = str16;
      }
      const tmp44 = null != tmp4 && ("changes" === status.state && !tmp21 ? tmp4.navigatesOnUpdate : tmp4.navigatesOnFirstPublish);
      if (result) {
        let prop2;
        if (integrationStatus != null) {
          prop2 = integrationStatus.bot_permissions_changed;
        }
        if (true === prop2) {
          const obj16 = { label: intl17.string(_modDef3849["tUeY/h"]), action: "review_permissions", navigatesOnPublish: tmp44 };
          const merged1 = Object.assign(obj14);
          intl17 = tmp29(1126).intl;
          return obj16;
        }
      }
      let update;
      if (tmp4 != null) {
        update = tmp4.update;
      }
      if (update == null) {
        const intl15 = tmp29(1126).intl;
        update = intl15.string(_modDef3849.QesMDC);
      }
      const obj31 = { label: update, action: "publish", navigatesOnPublish: tmp44 };
      const merged2 = Object.assign(obj14);
      if (!("changes" === status.state && !tmp21)) {
        const intl16 = tmp29(1126).intl;
        update = intl16.string(_modDef3849["120EFN"]);
      }
      return obj31;
    }
    status = input.status;
  }
};
