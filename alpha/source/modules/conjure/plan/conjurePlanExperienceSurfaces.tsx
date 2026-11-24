// Module ID: 18600
// Function ID: 18601
// Name: conjurePlanExperienceSurfaces
// Dependencies: [1112, 4192, 6809, 18285, 18601, 2]
// Exports: conjurePlanDesignExperienceId, conjurePlanExperiencePlacement

// Module 18600 (conjurePlanExperienceSurfaces)
import intl2 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import conjurePlanDesign from "conjurePlanDesign" /* 18601 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSurfaces.tsx");

export function conjurePlanExperiencePlacement(proposal, experience) {
  let surfaces;
  let surfaces2;
  if ("frame" !== experience.kind) {
    return null;
  } else {
    const intl = intl2.intl;
    let closure_0 = intl.string(_modDef4192["6/3tGY"]);
    let items = [];
    const surfaces3 = experience.surfaces;
    const tmp6 = importDefault;
    if (surfaces3.includes(ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL)) {
      let app_channels;
      let app_channel_names = proposal.app_channel_names;
      if (app_channel_names == null) {
        app_channel_names = [];
      }
      if (null != experience.app_channels) {
        if (experience.app_channels.length > 0) {
          app_channels = experience.app_channels;
        }
        items = app_channels.map((description) => {
          let str2;
          const name = description.name;
          if (description.description != null) {
            str2 = str.trim();
          }
          if (str2 == null) {
            str2 = "";
          }
          const obj = { name, description: str2 };
          if ("" === str2) {
            str2 = closure_0;
          }
          return obj;
        });
      }
      if (app_channel_names.length > 0) {
        app_channels = app_channel_names.map((name) => ({ name }));
      } else {
        let obj = { name: tmp6(18285)(experience.name) };
        app_channels = [obj];
      }
    }
    const obj2 = { channels: items, launchableAnywhere: surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY), usableInVoice: surfaces2.includes(ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL) };
    surfaces = experience.surfaces;
    surfaces2 = experience.surfaces;
    return obj2;
  }
}
export function conjurePlanDesignExperienceId(experiences) {
  const obj = conjurePlanDesign;
  const result = obj.conjurePlanDesignSurface(experiences);
  let tmp2 = null;
  if (null != result) {
    experiences = experiences.experiences;
    let id;
    if (experiences != null) {
      const found = experiences.find((surfaces) => {
        surfaces = surfaces.surfaces;
        return surfaces.includes(result);
      });
      if (found != null) {
        id = found.id;
      }
    }
    if (id == null) {
      id = null;
    }
    tmp2 = id;
  }
  return tmp2;
}
