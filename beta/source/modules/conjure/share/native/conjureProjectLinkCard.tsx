// Module ID: 11971
// Function ID: 11972
// Name: conjureProjectLinkCard
// Dependencies: [109, 4914, 2164, 4762, 1386, 6621, 11970, 11972, 9953, 11973, 8698, 8699, 8701, 2]
// Exports: conjureProjectLinkCardKey

// Module 11971 (conjureProjectLinkCard)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6621 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8698 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8699 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 8701 */;
import conjureSharedProjectSurfaces from "conjureSharedProjectSurfaces" /* 11972 */;
import conjureSharedProjectCoverTargetDefault from "conjureSharedProjectCoverTarget" /* 11973 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11970 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;

function readConjureProjectLinkCard(applicationId, ticket, memo2) {
  let avatarURL;
  let channelId;
  let colorStrings;
  let conjureSharedProjectTypes;
  let guildId;
  let obj5;
  let supported_surfaces;
  let ticketValid;
  let tmp3Result2;
  let tmp7;
  let tmp9;
  let type;
  const status = ConjureSharedProjectStore.getStatus(applicationId, ticket);
  if (null != status) {
    if ("loading" !== status.type) {
      if ("unavailable" !== status.type) {
        if ("no_access" !== status.type) {
          if ("expired" !== status.type) {
            const application = ApplicationStore.getApplication(applicationId);
            if (null == application) {
              return null;
            } else if ("info_only" === status.type) {
              return { type: "info_only", application };
            } else {
              const project = ConjureProjectStore.getProject(status.projectId);
              if (null == project) {
                return null;
              } else {
                const owner_user_id = project.owner_user_id;
                const user = UserStore.getUser(owner_user_id);
                const obj3 = { type: "ready", application, ownerId: owner_user_id, creator: tmp9, creatorAvatarUrl: avatarURL, projectTypes: conjureSharedProjectTypes(supported_surfaces), canRemix: ticketValid, coverAction: type };
                tmp9 = null;
                if (null != user) {
                  ({ guildId, channelId } = memo2);
                  const roleStyle = AccessibilityStore.roleStyle;
                  const obj = useAuthorWithProcessedColor;
                  const userAuthorWithProcessedColor = obj.getUserAuthorWithProcessedColor(user, ChannelStore.getChannel(channelId));
                  const colorString = userAuthorWithProcessedColor.colorString;
                  const obj4 = { name: userAuthorWithProcessedColor.nick, onClick: obj5 };
                  obj5 = { action: "bindUserMenu", userId: user.id, linkColor: tmp7, roleColor: colorString, roleColors: colorStrings, shouldShowRoleDot: "dot" === roleStyle && null != colorString, messageChannelId: channelId, fontId: tmp3Result2.getDisplayNameFontIdForMobileUser(user, guildId) };
                  tmp7 = null;
                  if ("username" === roleStyle) {
                    tmp7 = colorString;
                  }
                  colorStrings = null;
                  const tmp3Result = enhanced_role_colors_EnhancedRoleColorUtils;
                  if (tmp3Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, user.id)) {
                    colorStrings = userAuthorWithProcessedColor.colorStrings;
                  }
                  tmp9 = obj4;
                  tmp3Result2 = createDisplayNameStylesMobile;
                }
                avatarURL = undefined;
                if (user != null) {
                  avatarURL = user.getAvatarURL(memo2.guildId, 72);
                }
                if (avatarURL == null) {
                  avatarURL = null;
                }
                supported_surfaces = project.supported_surfaces;
                conjureSharedProjectTypes = conjureSharedProjectSurfaces.conjureSharedProjectTypes;
                conjureSharedProjectSurfaces;
                const tmp11 = require;
                if (supported_surfaces == null) {
                  supported_surfaces = [];
                }
                ticketValid = status.ticketValid || canRemixProject(project);
                if (ticketValid) {
                  const tmp11Result = tmp11(9953);
                  ticketValid = tmp11Result.isConjureMobileEnabled("ConjureProjectLinkCard");
                }
                const tmp16 = conjureSharedProjectCoverTargetDefault(applicationId, project, memo2);
                type = undefined;
                if (tmp16 != null) {
                  type = tmp16.type;
                }
                if (type == null) {
                  type = null;
                }
                return obj3;
              }
            }
          }
        }
        return { type: status.type };
      }
    }
  }
  return null;
}
let closure_3 = ["application"];
const canRemixProject = ConjureProjectStore2.canRemixProject;
const result = size.fileFinishedImporting("modules/conjure/share/native/conjureProjectLinkCard.tsx");

export { readConjureProjectLinkCard };
export function conjureProjectLinkCardKey(applicationId, ticket, memo2) {
  let coverImage;
  let description;
  let icon;
  let items;
  let name;
  const tmp = readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null == tmp) {
    return "";
  } else {
    if ("no_access" !== tmp.type) {
      if ("expired" !== tmp.type) {
        const _JSON = JSON;
        const obj = { application: items };
        ({ name, description, icon, coverImage } = tmp.application);
        const merged = Object.assign(_objectWithoutProperties(tmp, closure_3));
        items = [name, description, icon, coverImage];
        return stringify(obj);
      }
    }
    return tmp.type;
  }
}
