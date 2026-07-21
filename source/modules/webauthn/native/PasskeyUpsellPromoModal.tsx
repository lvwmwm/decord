// Module ID: 13513
// Function ID: 102533
// Name: PasskeyUpsellPromoModal
// Dependencies: []
// Exports: default

// Module 13513 (PasskeyUpsellPromoModal)
importAll(dependencyMap[0]);
const WebAuthnScreens = arg1(dependencyMap[1]).WebAuthnScreens;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = arg1(dependencyMap[3]);
  obj = { name: WebAuthnScreens.NAME };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = arg1(dependencyMap[4]).intl;
  obj["name"] = intl.string(arg1(dependencyMap[4]).t.8H5RmH);
  obj.params = obj;
  const initialRouteStack = [obj];
  return jsx(arg1(dependencyMap[5]).Modal, { screens, initialRouteStack });
};
