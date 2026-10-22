// Module ID: 19318
// Function ID: 19319
// Name: AccountLinkManagerNative
// Dependencies: [19319, 5679, 2]

// Module 19318 (AccountLinkManagerNative)
import BrowserManager from "BrowserManager" /* 5679 */;
import AccountLinkManager2 from "AccountLinkManager" /* 19319 */;
import size from "module_2" /* 2 */;

const AccountLinkManager = AccountLinkManager2.AccountLinkManager;
class AccountLinkManagerNative extends AccountLinkManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.unsubscribeBrowser = null;
    applyArgumentsResult.isBrowserOpen = false;
    return applyArgumentsResult;
  }
  _initialize() {
    const self = this;
    super._initialize();
    let obj = BrowserManager;
    this.unsubscribeBrowser = obj.subscribeToIsInAppBrowserOpen((isBrowserOpen, arg1) => {
      self.isBrowserOpen = isBrowserOpen;
      const obj = self;
      const tmp = arg1;
      if (tmp) {
        obj.evaluatePending();
      }
    });
  }
  _terminate() {
    const self = this;
    super._terminate();
    const unsubscribeBrowser = this.unsubscribeBrowser;
    if (unsubscribeBrowser != null) {
      unsubscribeBrowser();
    }
    self.unsubscribeBrowser = null;
  }
  evaluatePending() {
    if (!this.isBrowserOpen) {
      super.evaluatePending();
    }
  }
}
let closure_2 = AccountLinkManagerNative.prototype;
const accountLinkManagerNative = new AccountLinkManagerNative();
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkManagerNative.tsx");

export default accountLinkManagerNative;
