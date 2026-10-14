// Module ID: 11944
// Function ID: 11945
// Name: conjurePlanSurfaces
// Dependencies: [6952, 3849, 11938, 11930, 11935, 1126, 2]
// Exports: conjurePlanSurfaceRows

// Module 11944 (conjurePlanSurfaces)
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6952 */;
import conjurePlanTags from "conjurePlanTags" /* 11930 */;
import conjurePlanDesign from "conjurePlanDesign" /* 11938 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj = {};
obj[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3849.NBUCvF;
obj[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849.vrwvp8;
obj[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef3849.oMJF0T;
obj[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3849.u06zRd;
obj[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3849.NZrNII;
obj[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = _modDef3849["bu0/4I"];
obj[ConjureProjectTypes.ConjureSupportedSurface.BOT] = _modDef3849.Crinff;
obj[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3849.M3ty0r;
let items = [ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, ConjureProjectTypes.ConjureSupportedSurface.BOT, ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanSurfaces.tsx");

export const conjurePlanSurfaceRows = function conjurePlanSurfaceRows(proposal, keys) {
  let closure_2;
  _require = proposal;
  obj = require("conjurePlanTags");
  dependencyMap = obj.planDeclaresSurface(proposal, require("ConjureProjectTypes").ConjureSupportedSurface.BOT);
  const commands = proposal.commands;
  const length = commands.filter(require("conjurePlanBot").isAppCommand).length;
  let found = items.filter((item) => {
    obj = conjurePlanTags;
    let planDeclaresSurfaceResult = obj.planDeclaresSurface(proposal, item);
    if (planDeclaresSurfaceResult) {
      planDeclaresSurfaceResult = !(closure_2 && item === tmp(6952).ConjureSupportedSurface.APPLICATION_COMMANDS);
      closure_2 && item === ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS;
    }
    return planDeclaresSurfaceResult;
  });
  return found.map((surface) => {
    let formatToPlainStringResult;
    let found;
    proposal = surface;
    const tmp = proposal;
    if (surface === proposal(closure_2[0]).ConjureSupportedSurface.APP_CHANNEL) {
      let app_channel_names = proposal.app_channel_names;
      if (app_channel_names == null) {
        app_channel_names = [];
      }
      items = app_channel_names;
    } else {
      items = [];
    }
    const tmp5 = items.length > 1;
    let planDeclaresSurfaceResult = surface === tmp(tmp2[0]).ConjureSupportedSurface.BOT;
    if (planDeclaresSurfaceResult) {
      planDeclaresSurfaceResult = length > 0;
    }
    if (planDeclaresSurfaceResult) {
      const tmpResult = tmp(closure_2[3]);
      planDeclaresSurfaceResult = tmpResult.planDeclaresSurface(proposal, tmp(tmp2[0]).ConjureSupportedSurface.APPLICATION_COMMANDS);
    }
    const intl = tmp(tmp2[5]).intl;
    const stringResult = intl.string(tmp(closure_2[3]).CONJURE_PLAN_SURFACE_LABELS[surface]);
    const intl2 = tmp(tmp2[5]).intl;
    let stringResult1 = intl2.string(length[surface]);
    if (tmp5) {
      const intl4 = tmp(tmp2[5]).intl;
      obj = { count: items.length };
      formatToPlainStringResult = intl4.formatToPlainString(keys(tmp2[1])["75EkE8"], obj);
      const intl5 = tmp(tmp2[5]).intl;
      stringResult1 = intl5.string(keys(tmp2[1]).OMNwmi);
    } else {
      formatToPlainStringResult = stringResult;
      if (planDeclaresSurfaceResult) {
        const intl3 = tmp(tmp2[5]).intl;
        let obj2 = { count: length };
        stringResult1 = intl3.formatToPlainString(keys(tmp2[1]).Xa5mPA, obj2);
        formatToPlainStringResult = stringResult;
      }
    }
    const surface_descriptions = proposal.surface_descriptions;
    let trimmed;
    if (surface_descriptions != null) {
      if (surface_descriptions[surface] != null) {
        trimmed = str.trim();
      }
    }
    let tmp16 = null != trimmed;
    if (tmp16) {
      tmp16 = "" !== trimmed;
    }
    if (tmp16) {
      stringResult1 = trimmed;
    }
    const obj3 = { surface, title: formatToPlainStringResult, description: stringResult1, channelNames: items, preview: found };
    found = keys.find((item) => {
      let AUTOMOD;
      if ("design" === item) {
        obj = conjurePlanDesign;
        AUTOMOD = obj.conjurePlanDesignSurface(tmp);
      } else if ("widget" === item) {
        AUTOMOD = ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET;
      } else if ("automod" === item) {
        AUTOMOD = ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD;
      } else if ("bot" === item) {
        const obj2 = conjurePlanTags;
        const planDeclaresSurfaceResult = obj2.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.BOT);
        const ConjureSupportedSurface = ConjureProjectTypes.ConjureSupportedSurface;
        AUTOMOD = planDeclaresSurfaceResult ? ConjureSupportedSurface.BOT : ConjureSupportedSurface.APPLICATION_COMMANDS;
      }
      return AUTOMOD === proposal;
    });
    if (found == null) {
      found = null;
    }
    return obj3;
  });
};
