// Module ID: 15885
// Function ID: 15886
// Name: conjureOverlayApps
// Dependencies: [6900, 2]
// Exports: isConjureOverlayApp, isConjureServerOverlayApp

// Module 15885 (conjureOverlayApps)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6900 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/overlay/conjureOverlayApps.tsx");

export function isConjureOverlayApp(install_scope) {
  let tmp = "user" === install_scope.install_scope;
  if (tmp) {
    const supported_surfaces = install_scope.supported_surfaces;
    let hasItem;
    if (supported_surfaces != null) {
      hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY);
    }
    tmp = true === hasItem;
  }
  if (tmp) {
    tmp = null != install_scope.overlay_widget;
  }
  return tmp;
}
export function isConjureServerOverlayApp(install_scope) {
  let tmp = "guild" === install_scope.install_scope && null != install_scope.guild_id;
  if (tmp) {
    const supported_surfaces = install_scope.supported_surfaces;
    let hasItem;
    if (supported_surfaces != null) {
      hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY);
    }
    tmp = true === hasItem;
  }
  if (tmp) {
    tmp = null != install_scope.overlay_widget;
  }
  return tmp;
}
