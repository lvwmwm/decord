// Module ID: 15991
// Function ID: 122720
// Name: AccountSwitchingSpinnerModal
// Dependencies: []

// Module 15991 (AccountSwitchingSpinnerModal)
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: closure_4().switchingSpinnerContainer, accessible: true };
    intl = arg1(dependencyMap[4]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[4]).t.n8qMH0);
    obj.children = jsx(arg1(dependencyMap[5]).ActivityIndicator, {});
    return jsx(View, obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
let closure_4 = obj.createStyles({ switchingSpinnerContainer: {} });
obj = { animation: arg1(dependencyMap[6]).ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = obj;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
