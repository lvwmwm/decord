// Module ID: 11749
// Function ID: 11750
// Name: conjureSharedProjectHome
// Dependencies: [6933, 2]
// Exports: canLaunchSharedProject, isSharedProjectHomeServer

// Module 11749 (conjureSharedProjectHome)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectHome.tsx");

export function isSharedProjectHomeServer(install_scope, guildId) {
  return "guild" === install_scope.install_scope && null != install_scope.guild_id && null != guildId && install_scope.guild_id === guildId;
}
export function canLaunchSharedProject(install_scope, guildId) {
  let hasItem = "guild" === install_scope.install_scope && null != install_scope.guild_id && null != guildId && install_scope.guild_id === guildId;
  if (hasItem) {
    let supported_surfaces = install_scope.supported_surfaces;
    if (supported_surfaces == null) {
      supported_surfaces = [];
    }
    hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY);
  }
  return hasItem;
}
