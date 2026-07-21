// Module ID: 13508
// Function ID: 102502
// Name: PasskeyUpsellFullModal
// Dependencies: []
// Exports: default

// Module 13508 (PasskeyUpsellFullModal)
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
