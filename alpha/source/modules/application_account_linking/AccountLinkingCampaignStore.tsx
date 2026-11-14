// Module ID: 19831
// Function ID: 19832
// Name: AccountLinkingCampaignStore
// Dependencies: [504, 572, 2]

// Module 19831 (AccountLinkingCampaignStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let closure_3, closure_5, importDefault;

function ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS(arg0) {
  return closure_0.handleFetchSuccess(arg0);
}
function LOGOUT() {
  closure_5 = closure_5 + 1;
  closure_3 = items;
  c4 = false;
}
const items = [];
const _false = items;
let c4 = false;
let c5 = 0;
const Store = get_initializedDefault.Store;
class AccountLinkingCampaignStore extends Store {
  constructor() {
    let closure_0;
    importDefault = undefined;
    const obj = { ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS, ACCOUNT_LINKING_CAMPAIGN_DISMISS, LOGOUT };
    class ACCOUNT_LINKING_CAMPAIGN_DISMISS {
      constructor(arg0) {
        return closure_0.handleDismiss(arg0);
      }
    }
    const tmp2 = new tmp(DispatcherDefault, obj, ACCOUNT_LINKING_CAMPAIGN_DISMISS, new.target, tmp, importDefault);
    importDefault = tmp2;
    return tmp2;
  }
  getCampaigns() {
    return closure_3;
  }
  hasFetched() {
    return c4;
  }
  getSessionGeneration() {
    return c5;
  }
  isCampaignDetectableApp(arg0) {
    let closure_0 = arg0;
    return closure_3.some((targetType2DetectableAppName) => targetType2DetectableAppName.targetType2DetectableAppName === closure_0);
  }
  handleFetchSuccess(sessionGeneration) {
    if (sessionGeneration.sessionGeneration !== c5) {
      return false;
    } else {
      closure_3 = sessionGeneration.campaigns.length > 0 ? sessionGeneration.campaigns : items;
      c4 = true;
    }
  }
  handleDismiss(campaignId) {
    campaignId = campaignId.campaignId;
    if (closure_3.some((campaignId) => campaignId.campaignId === campaignId)) {
      closure_3 = closure_3.filter((campaignId) => campaignId.campaignId !== campaignId);
    } else {
      return false;
    }
  }
}
const prototype = AccountLinkingCampaignStore.prototype;
AccountLinkingCampaignStore.displayName = "AccountLinkingCampaignStore";
let object;
let obj = { ACCOUNT_LINKING_CAMPAIGNS_FETCH_SUCCESS, ACCOUNT_LINKING_CAMPAIGN_DISMISS, LOGOUT };
class ACCOUNT_LINKING_CAMPAIGN_DISMISS {
  constructor(arg0) {
    return closure_0.handleDismiss(arg0);
  }
}
object = new Object(DispatcherDefault, obj, tmp, ACCOUNT_LINKING_CAMPAIGN_DISMISS, AccountLinkingCampaignStore, Object, importDefault, this, undefined);
const result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkingCampaignStore.tsx");

export default object;
