// Module ID: 13510
// Function ID: 102524
// Name: PasskeyUpsellFullModal
// Dependencies: []
// Exports: default

// Module 13510 (PasskeyUpsellFullModal)
importAll(dependencyMap[0]);
const WebAuthnScreens = arg1(dependencyMap[1]).WebAuthnScreens;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = arg1(dependencyMap[3]);
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(arg1(dependencyMap[4]).Modal, obj);
};
